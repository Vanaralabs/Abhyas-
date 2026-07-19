/**
 * Lightweight syntax highlighter for theory content code blocks.
 * Applies colorful spans to keywords, strings, numbers, comments, functions, booleans.
 * No external dependencies — pure regex tokenization.
 */

const KEYWORDS = new Set([
  'def', 'class', 'if', 'elif', 'else', 'for', 'while', 'return', 'import', 'from',
  'try', 'except', 'finally', 'with', 'as', 'yield', 'lambda', 'pass', 'break',
  'continue', 'raise', 'in', 'not', 'and', 'or', 'is', 'del', 'global', 'nonlocal',
  'assert', 'async', 'await',
  // JavaScript/TypeScript
  'function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return',
  'import', 'export', 'default', 'switch', 'case', 'break', 'continue',
  'try', 'catch', 'finally', 'throw', 'new', 'typeof', 'instanceof',
  'async', 'await', 'yield', 'of', 'in',
  // Java/C++
  'public', 'private', 'protected', 'static', 'void', 'int', 'float', 'double',
  'char', 'boolean', 'string', 'include', 'using', 'namespace', 'struct',
  // SQL
  'SELECT', 'FROM', 'WHERE', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'DROP',
  'TABLE', 'INTO', 'VALUES', 'JOIN', 'ON', 'AND', 'OR', 'ORDER', 'BY', 'GROUP',
  'HAVING', 'LIMIT', 'ALTER', 'INDEX', 'SET', 'NULL', 'NOT',
])

const BUILTINS = new Set([
  'print', 'len', 'range', 'input', 'int', 'str', 'float', 'list', 'dict',
  'set', 'tuple', 'type', 'isinstance', 'enumerate', 'zip', 'map', 'filter',
  'sorted', 'reversed', 'sum', 'min', 'max', 'abs', 'round', 'open',
  'console', 'document', 'window', 'Math', 'Array', 'Object', 'String',
  'Number', 'Boolean', 'JSON', 'Promise', 'setTimeout', 'setInterval',
])

const BOOLEANS = new Set(['True', 'False', 'None', 'true', 'false', 'null', 'undefined', 'NaN'])

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/**
 * Tokenize and highlight a single line of code.
 */
function highlightLine(line) {
  // Handle full-line comments
  const trimmed = line.trimStart()
  if (trimmed.startsWith('#') || trimmed.startsWith('//')) {
    return `<span class="code-comment">${escapeHtml(line)}</span>`
  }

  let result = ''
  let i = 0

  while (i < line.length) {
    // Strings (double or single quotes)
    if (line[i] === '"' || line[i] === "'") {
      const quote = line[i]
      let end = i + 1
      while (end < line.length && line[end] !== quote) {
        if (line[end] === '\\') end++ // skip escaped char
        end++
      }
      end++ // include closing quote
      result += `<span class="code-string">${escapeHtml(line.slice(i, end))}</span>`
      i = end
    }
    // Inline comment
    else if (line[i] === '#' || (line[i] === '/' && line[i + 1] === '/')) {
      result += `<span class="code-comment">${escapeHtml(line.slice(i))}</span>`
      break
    }
    // Numbers
    else if (/\d/.test(line[i]) && (i === 0 || /[\s(=,+\-*/<>[\]:]/.test(line[i - 1]))) {
      let end = i
      while (end < line.length && /[\d.]/.test(line[end])) end++
      result += `<span class="code-number">${escapeHtml(line.slice(i, end))}</span>`
      i = end
    }
    // Words (keywords, builtins, booleans)
    else if (/[a-zA-Z_]/.test(line[i])) {
      let end = i
      while (end < line.length && /[a-zA-Z_0-9]/.test(line[end])) end++
      const word = line.slice(i, end)

      if (BOOLEANS.has(word)) {
        result += `<span class="code-boolean">${escapeHtml(word)}</span>`
      } else if (KEYWORDS.has(word)) {
        result += `<span class="code-keyword">${escapeHtml(word)}</span>`
      } else if (BUILTINS.has(word) || (end < line.length && line[end] === '(')) {
        result += `<span class="code-function">${escapeHtml(word)}</span>`
      } else {
        result += escapeHtml(word)
      }
      i = end
    }
    // Operators
    else if ('=+-*/<>!&|%^~'.includes(line[i])) {
      result += `<span class="code-operator">${escapeHtml(line[i])}</span>`
      i++
    }
    // Everything else (whitespace, brackets, etc.)
    else {
      result += escapeHtml(line[i])
      i++
    }
  }

  return result
}

/**
 * Highlight all code within <pre><code> blocks in an HTML string.
 * Call this before rendering theory content via dangerouslySetInnerHTML.
 */
export function highlightTheoryCode(html) {
  if (!html) return ''

  return html.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, (match, codeContent) => {
    // Decode HTML entities that may be in the source
    const decoded = codeContent
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")

    const lines = decoded.split('\n')
    const highlighted = lines.map(highlightLine).join('\n')

    return `<pre class="code-highlighted"><code>${highlighted}</code></pre>`
  })
}

export default highlightTheoryCode
