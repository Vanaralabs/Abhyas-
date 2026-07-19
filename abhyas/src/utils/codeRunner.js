// Shared code execution engine

export function executeCode(code, langId) {
  try {
    if (langId === 'javascript' || langId === 'typescript') {
      const logs = []
      const mockConsole = {
        log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
        error: (...args) => logs.push(args.map(a => String(a)).join(' ')),
        warn: (...args) => logs.push(args.map(a => String(a)).join(' ')),
      }
      const fn = new Function('console', code)
      fn(mockConsole)
      return { output: logs.join('\n'), error: null }
    } else {
      return simulatePrintOutput(code, langId)
    }
  } catch (err) {
    return { output: '', error: err.message }
  }
}

function simulatePrintOutput(code, langId) {
  const lines = code.split('\n')
  const outputs = []
  const vars = {}

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('//')) continue

    // Simple variable assignment
    const assignMatch = trimmed.match(/^(\w+)\s*=\s*(.+)$/)
    if (assignMatch && !trimmed.includes('print') && !trimmed.includes('console.log')) {
      const [, varName, rawValue] = assignMatch
      if (['if', 'elif', 'else', 'for', 'while', 'def', 'class', 'import', 'from'].includes(varName)) continue
      let value = rawValue.trim()
      value = evaluateSimple(value, vars)
      vars[varName] = value
      continue
    }

    // Python print()
    const printMatch = trimmed.match(/^print\s*\((.+)\)\s*$/)
    if (printMatch) {
      let content = printMatch[1].trim()
      outputs.push(evaluatePrintContent(content, vars))
      continue
    }

    // C++ cout
    const coutMatch = trimmed.match(/cout\s*<<\s*(.+?)(?:\s*<<\s*endl)?\s*;?\s*$/)
    if (coutMatch) {
      let content = coutMatch[1]
      const parts = content.split('<<').map(p => p.trim())
      const result = parts.map(p => evaluateSimple(p, vars)).join('')
      outputs.push(result)
      continue
    }

    // Java System.out.println
    const javaMatch = trimmed.match(/System\.out\.println\s*\((.+)\)\s*;?\s*$/)
    if (javaMatch) {
      let content = javaMatch[1].trim()
      outputs.push(evaluatePrintContent(content, vars))
      continue
    }

    // C printf
    const printfMatch = trimmed.match(/printf\s*\(\s*"(.+?)"\s*\)\s*;?\s*$/)
    if (printfMatch) {
      outputs.push(printfMatch[1].replace(/\\n/g, ''))
      continue
    }
  }

  return { output: outputs.join('\n'), error: null }
}

function evaluateSimple(value, vars) {
  value = value.split('#')[0].trim()

  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1)
  }
  if (!isNaN(value) && value !== '') return value
  if (value === 'True' || value === 'true') return 'True'
  if (value === 'False' || value === 'false') return 'False'
  if (vars[value] !== undefined) return vars[value]

  try {
    let expr = value
    Object.entries(vars).forEach(([k, v]) => {
      expr = expr.replace(new RegExp(`\\b${k}\\b`, 'g'), isNaN(v) ? `"${v}"` : v)
    })
    const result = Function(`"use strict"; return (${expr})`)()
    return String(result)
  } catch {
    return value
  }
}

function evaluatePrintContent(content, vars) {
  // Handle f-strings
  if (content.startsWith('f"') || content.startsWith("f'")) {
    let str = content.slice(2, -1)
    str = str.replace(/\{(\w+)\}/g, (_, varName) => vars[varName] || varName)
    return str
  }

  // Handle type() calls
  const typeMatch = content.match(/^type\((.+)\)$/)
  if (typeMatch) {
    const arg = typeMatch[1].trim()
    const val = evaluateSimple(arg, vars)
    if (!isNaN(val) && val !== '' && !val.includes('.')) return "<class 'int'>"
    if (!isNaN(val) && val.includes('.')) return "<class 'float'>"
    if (val === 'True' || val === 'False') return "<class 'bool'>"
    return "<class 'str'>"
  }

  // Handle concatenation with +
  if (content.includes('+')) {
    const parts = content.split('+').map(p => evaluateSimple(p.trim(), vars))
    return parts.join('')
  }

  // Handle comma-separated print args
  if (content.includes(',')) {
    const parts = content.split(',').map(p => evaluateSimple(p.trim(), vars))
    return parts.join(' ')
  }

  return evaluateSimple(content, vars)
}
