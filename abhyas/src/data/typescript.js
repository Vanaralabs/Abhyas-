const course = {
  id: 'typescript',
  title: 'TypeScript',
  icon: '🔷',
  sections: [
    {
      id: 'ts-basics',
      title: 'Basics',
      lessons: [
        {
          id: 'ts-1-1',
          title: 'What is TypeScript?',
          type: 'lesson',
          theory: `<h2>Welcome to TypeScript! 🔷</h2>
<p>TypeScript is a <strong>superset of JavaScript</strong> developed by Microsoft that adds optional static typing to the language. Every valid JavaScript program is also a valid TypeScript program, but TypeScript provides additional features that help catch errors at compile time rather than runtime.</p>
<h3>Why TypeScript?</h3>
<ul>
<li><strong>Type Safety:</strong> Catch bugs before your code runs</li>
<li><strong>Better IDE Support:</strong> Autocomplete, refactoring, and inline documentation</li>
<li><strong>Scalability:</strong> Makes large codebases manageable</li>
<li><strong>Modern Features:</strong> Access to latest ECMAScript features with backward compatibility</li>
</ul>
<h3>How It Works</h3>
<p>TypeScript code is written in <code>.ts</code> files and compiled (transpiled) to plain JavaScript using the TypeScript compiler (<code>tsc</code>). The browser or Node.js then runs the resulting JavaScript.</p>
<pre><code>TypeScript (.ts) → Compiler (tsc) → JavaScript (.js)</code></pre>
<p>TypeScript uses a structural type system, meaning types are compatible based on their shape rather than their explicit declaration. This makes it flexible while still providing safety.</p>
<h3>Key Concepts</h3>
<p>Throughout this course, you will learn about type annotations, interfaces, generics, utility types, and more. By the end, you will be able to write type-safe applications with confidence.</p>`,
          challenge: {
            description: 'Declare a variable called greeting with type string, assign "Hello, TypeScript!" and log it.',
            starterCode: '// Declare a typed variable and print it\n',
            expectedOutput: 'Hello, TypeScript!',
            hints: ['Use let variableName: type = value', 'The type for text is string', 'Use console.log() to print']
          },
          quiz: [{ question: 'What is TypeScript?', options: ['A completely new programming language', 'A superset of JavaScript with static typing', 'A JavaScript framework', 'A CSS preprocessor'], correct: 1 }]
        },
        {
          id: 'ts-1-2',
          title: 'Setting Up TypeScript',
          type: 'lesson',
          theory: `<h2>Setting Up Your TypeScript Environment</h2>
<p>Before writing TypeScript code, you need to set up your development environment. The primary tool is the <strong>TypeScript compiler (tsc)</strong> which converts TypeScript to JavaScript.</p>
<h3>Installation</h3>
<p>TypeScript is installed via npm: <code>npm install -g typescript</code>. Verify with <code>tsc --version</code>.</p>
<h3>The tsconfig.json File</h3>
<p>Every TypeScript project uses a <code>tsconfig.json</code> configuration file that specifies compiler options like target JavaScript version, module system, strict mode, and output directory. Generate one with <code>tsc --init</code>.</p>
<h3>Key Compiler Options</h3>
<ul>
<li><strong>target:</strong> Which JavaScript version to compile to (ES5, ES6, ESNext)</li>
<li><strong>strict:</strong> Enables all strict type checking options</li>
<li><strong>module:</strong> Module system to use (commonjs, ES modules)</li>
<li><strong>outDir:</strong> Where compiled JS files are placed</li>
<li><strong>rootDir:</strong> Where your source .ts files live</li>
</ul>
<h3>Compiling and Running</h3>
<p>To compile: <code>tsc filename.ts</code>. Watch mode: <code>tsc --watch</code>. For quick execution, use <code>ts-node</code> which compiles and runs in one step. You can also experiment in the TypeScript Playground online.</p>`,
          challenge: {
            description: 'Declare const appName: string = "Abhyas App" and const version: number = 1. Print them combined.',
            starterCode: '// Declare appName and version with types\n',
            expectedOutput: 'Abhyas App v1',
            hints: ['Use const variableName: type = value', 'Use template literal: `${appName} v${version}`', 'console.log() to output']
          },
          quiz: [{ question: 'Which command installs TypeScript globally?', options: ['npm install typescript', 'npm install -g typescript', 'pip install typescript', 'npx typescript'], correct: 1 }]
        },
        {
          id: 'ts-1-3',
          title: 'Your First TypeScript Program',
          type: 'lesson',
          theory: `<h2>Writing Your First TypeScript Program</h2>
<p>Let us write a complete TypeScript program that demonstrates the basics of typed programming. We create variables with explicit types, use them in expressions, and see how TypeScript helps catch errors.</p>
<h3>Basic Variable Declarations</h3>
<pre><code>let message: string = "Hello World";
let count: number = 42;
let isActive: boolean = true;</code></pre>
<h3>Type Errors at Compile Time</h3>
<p>If you try to assign a wrong type, TypeScript catches it immediately:</p>
<pre><code>let age: number = 25;
age = "twenty-five"; // Error! Type string not assignable to number</code></pre>
<p>This is the core benefit — errors are caught <strong>before</strong> your program runs, not after it crashes in production.</p>
<h3>Combining Variables</h3>
<pre><code>let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = firstName + " " + lastName;
console.log(fullName); // "John Doe"</code></pre>
<h3>let vs const</h3>
<p>Use <code>const</code> for values that never change and <code>let</code> for values that will. TypeScript infers literal types for const declarations, making them even more precise than let.</p>`,
          challenge: {
            description: 'Create three typed variables: studentName (string) = "Alice", studentAge (number) = 20, isEnrolled (boolean) = true. Print a sentence combining them.',
            starterCode: '// Declare three typed variables\n',
            expectedOutput: 'Alice is 20 years old and enrolled: true',
            hints: ['Declare each with its type annotation', 'Use template literal for the sentence', 'boolean prints as true/false']
          },
          quiz: [{ question: 'What happens when you assign a string to a number-typed variable?', options: ['It converts automatically', 'A compile-time error occurs', 'A runtime error occurs', 'Nothing happens'], correct: 1 }]
        },
        {
          id: 'ts-1-4',
          title: 'Basic Type Annotations',
          type: 'lesson',
          theory: `<h2>Type Annotations in TypeScript</h2>
<p>Type annotations are the foundation of TypeScript. They explicitly declare what type of value a variable can hold using a colon after the variable name.</p>
<h3>Syntax</h3>
<pre><code>let variableName: type = value;</code></pre>
<h3>Primitive Types</h3>
<ul>
<li><strong>string:</strong> Text values — <code>let name: string = "TypeScript";</code></li>
<li><strong>number:</strong> All numeric values (int, float) — <code>let age: number = 25;</code></li>
<li><strong>boolean:</strong> true/false — <code>let active: boolean = true;</code></li>
<li><strong>null and undefined:</strong> Special absence types</li>
</ul>
<h3>The any Type</h3>
<p>The <code>any</code> type opts out of type checking entirely. Use it sparingly as it defeats the purpose of TypeScript:</p>
<pre><code>let flexible: any = "hello";
flexible = 42; // No error with any
flexible = true; // Still no error</code></pre>
<h3>When to Annotate</h3>
<p>TypeScript can often infer types from values. Explicit annotations are most useful for function parameters, complex objects, and when the type is not obvious from assignment. When in doubt, annotate — it serves as documentation too.</p>`,
          challenge: {
            description: 'Declare: language (string) = "TypeScript", year (number) = 2012, isOpenSource (boolean) = true, flexible (any) = 100. Print all four on separate lines.',
            starterCode: '// Declare four typed variables\n',
            expectedOutput: 'TypeScript\n2012\ntrue\n100',
            hints: ['Use let variableName: type = value for each', 'console.log() each variable separately', 'any type allows any value assignment']
          },
          quiz: [{ question: 'Which type annotation allows any value without type checking?', options: ['unknown', 'void', 'any', 'never'], correct: 2 }]
        },
        {
          id: 'ts-1-5',
          title: 'Number and String Types',
          type: 'lesson',
          theory: `<h2>Working with Numbers and Strings</h2>
<p>Numbers and strings are the most commonly used types in TypeScript. Understanding their type behaviors helps you write safer, more predictable code.</p>
<h3>Number Type</h3>
<p>TypeScript's <code>number</code> type covers all numeric values — integers, floats, hex, binary, and octal:</p>
<pre><code>let integer: number = 42;
let float: number = 3.14;
let hex: number = 0xff;
let binary: number = 0b1010;</code></pre>
<h3>String Type</h3>
<p>Strings can use single quotes, double quotes, or backticks (template literals):</p>
<pre><code>let single: string = 'hello';
let double: string = "world";
let template: string = \`\${single} \${double}\`;</code></pre>
<h3>Template Literals</h3>
<p>Template literals allow embedded expressions and multi-line strings. They are enclosed in backticks and use \${} for interpolation:</p>
<pre><code>let price: number = 9.99;
let item: string = "book";
let message: string = \`The \${item} costs $\${price}\`;</code></pre>
<h3>String Methods with Types</h3>
<p>TypeScript provides full autocomplete for string methods because it knows the type:</p>
<pre><code>let text: string = "TypeScript";
let upper: string = text.toUpperCase();
let len: number = text.length;</code></pre>`,
          challenge: {
            description: 'Create price (number) = 29.99 and product (string) = "Laptop Stand". Calculate 10% discount and print the result formatted.',
            starterCode: '// Declare price and product\n// Calculate discounted price\n',
            expectedOutput: 'Laptop Stand: $26.99',
            hints: ['Discount = price * 0.9', 'Use toFixed(2) to format to 2 decimal places', 'Use template literal for output']
          },
          quiz: [{ question: 'Which is NOT a valid number in TypeScript?', options: ['let x: number = 0xff', 'let x: number = 3.14', 'let x: number = "42"', 'let x: number = 0b1010'], correct: 2 }]
        },
        {
          id: 'ts-1-6',
          title: 'Boolean and Special Types',
          type: 'lesson',
          theory: `<h2>Boolean and Special Types</h2>
<p>Beyond primitives, TypeScript has special types that represent unique value states and function behaviors.</p>
<h3>Boolean Type</h3>
<p>Booleans represent true/false values and are essential for conditional logic:</p>
<pre><code>let isLoggedIn: boolean = false;
let hasPermission: boolean = true;
let isAdult: boolean = age >= 18;</code></pre>
<h3>The void Type</h3>
<p>Used for functions that do not return a value:</p>
<pre><code>function logMessage(msg: string): void {
  console.log(msg);
}</code></pre>
<h3>null and undefined</h3>
<p>These have their own types in TypeScript. With strict null checks enabled, you cannot assign null to a string variable without a union type.</p>
<h3>The never Type</h3>
<p>Represents values that never occur — functions that always throw errors or have infinite loops:</p>
<pre><code>function throwError(msg: string): never {
  throw new Error(msg);
}</code></pre>
<h3>The unknown Type</h3>
<p>A type-safe alternative to <code>any</code>. You must narrow the type before using it:</p>
<pre><code>let value: unknown = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase()); // OK after check
}</code></pre>`,
          challenge: {
            description: 'Declare isRaining (boolean) = true and temperature (number) = 22. Print "Take umbrella" if raining, then print the temperature.',
            starterCode: '// Declare boolean and number\n// Conditional logic\n',
            expectedOutput: 'Take umbrella\nTemperature: 22',
            hints: ['Use if statement with the boolean', 'console.log for each output line', 'Template literal for temperature']
          },
          quiz: [{ question: 'What is the return type of a function that never returns?', options: ['void', 'null', 'undefined', 'never'], correct: 3 }]
        },
        {
          id: 'ts-1-7',
          title: 'Type Inference',
          type: 'lesson',
          theory: `<h2>Type Inference</h2>
<p>TypeScript does not always require explicit type annotations. It can <strong>infer</strong> types from the values you assign, making code cleaner while maintaining full type safety.</p>
<h3>How Inference Works</h3>
<pre><code>let name = "Alice"; // TypeScript infers: string
let age = 25;       // TypeScript infers: number
let active = true;  // TypeScript infers: boolean</code></pre>
<p>These variables are fully typed — you just did not write the annotation manually. Hovering over them in an IDE shows the inferred type.</p>
<h3>Best Common Type</h3>
<p>When inferring array types, TypeScript finds the best common type that accommodates all elements:</p>
<pre><code>let mixed = [1, 2, "three"]; // inferred as (string | number)[]</code></pre>
<h3>Contextual Typing</h3>
<p>TypeScript uses context to infer types in callbacks and event handlers:</p>
<pre><code>let numbers = [1, 2, 3];
numbers.forEach(n => {
  console.log(n.toFixed(2)); // n inferred as number
});</code></pre>
<h3>When to Use Explicit Annotations</h3>
<ul>
<li>Function parameters (no inference available)</li>
<li>When initialization is delayed (let x; ... x = value)</li>
<li>When the inferred type is too broad or too narrow</li>
<li>For documentation clarity in complex code</li>
</ul>`,
          challenge: {
            description: 'Create variables WITHOUT type annotations: city = "Mumbai", population = 20000000, isCapital = false. Print typeof and value for each.',
            starterCode: '// Let TypeScript infer the types\n',
            expectedOutput: 'string: Mumbai\nnumber: 20000000\nboolean: false',
            hints: ['Just use let x = value without : type', 'typeof operator returns the type as string', 'Format each as typeof: value']
          },
          quiz: [{ question: 'When does TypeScript infer types?', options: ['Only with the infer keyword', 'When you assign a value without annotation', 'Only for primitive types', 'Never — you must always annotate'], correct: 1 }]
        },
        {
          id: 'ts-1-8',
          title: 'Literal Types',
          type: 'lesson',
          theory: `<h2>Literal Types</h2>
<p>Literal types allow you to specify the <strong>exact value</strong> a variable can hold, not just its general type. This provides extremely precise type checking.</p>
<h3>String Literal Types</h3>
<pre><code>let direction: "north" | "south" | "east" | "west";
direction = "north"; // OK
direction = "up";    // Error!</code></pre>
<h3>Numeric Literal Types</h3>
<pre><code>let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 3; // OK
diceRoll = 7; // Error!</code></pre>
<h3>const and Literal Inference</h3>
<p>When you use <code>const</code>, TypeScript automatically infers the literal type:</p>
<pre><code>const status = "active"; // type is "active", not string
let status2 = "active";  // type is string (broader)</code></pre>
<h3>Practical Use Case</h3>
<p>Literal types shine in function parameters where only specific values are valid. This replaces magic strings with compile-time checked constants:</p>
<pre><code>function setAlignment(align: "left" | "center" | "right"): void {
  console.log("Alignment: " + align);
}
setAlignment("center"); // OK
setAlignment("top");    // Compile error!</code></pre>
<p>Combined with union types, literal types create powerful discriminated unions for state management and pattern matching.</p>`,
          challenge: {
            description: 'Create a function getStatusMessage that accepts status of type "success" | "error" | "pending" and returns appropriate messages. Call with "success".',
            starterCode: '// Function with literal type parameter\n',
            expectedOutput: 'Operation successful!',
            hints: ['Use literal union type for the parameter', 'Use if/else or switch for each value', 'console.log the result']
          },
          quiz: [{ question: 'What type does TypeScript infer for: const x = "hello"?', options: ['string', '"hello" (literal)', 'any', 'const'], correct: 1 }]
        },
        {
          id: 'ts-1-9',
          title: 'Function Parameter Types',
          type: 'lesson',
          theory: `<h2>Function Parameter Types</h2>
<p>Functions in TypeScript require type annotations for their parameters. Unlike variables, TypeScript cannot infer parameter types from usage — you must declare them explicitly.</p>
<h3>Basic Parameter Types</h3>
<pre><code>function greet(name: string): void {
  console.log("Hello, " + name + "!");
}

function add(a: number, b: number): number {
  return a + b;
}</code></pre>
<h3>Multiple Parameters</h3>
<p>Each parameter gets its own type annotation separated by commas:</p>
<pre><code>function createUser(name: string, age: number, active: boolean): string {
  return name + " (age: " + age + ", active: " + active + ")";
}</code></pre>
<h3>Why Parameter Types Matter</h3>
<p>Without parameter types, you lose all benefits of TypeScript. With them, the compiler catches calling errors immediately:</p>
<pre><code>function multiply(x: number, y: number): number { return x * y; }
multiply("hello", 5); // Compile error! string is not number</code></pre>
<h3>Default Values</h3>
<p>Parameters with default values do not need annotations — TypeScript infers from the default:</p>
<pre><code>function power(base: number, exp = 2): number {
  return Math.pow(base, exp);
}
power(3);    // 9 (exp defaults to 2)
power(3, 3); // 27</code></pre>`,
          challenge: {
            description: 'Write a function calculateArea that takes width (number) and height (number) and returns their product. Call with 5 and 3, print the result.',
            starterCode: '// Define calculateArea with typed params\n',
            expectedOutput: '15',
            hints: ['function name(param: type, param: type): returnType', 'Return width * height', 'console.log(calculateArea(5, 3))']
          },
          quiz: [{ question: 'Can TypeScript infer function parameter types?', options: ['Yes, always', 'Yes, from usage', 'No, they must be annotated', 'Only for arrow functions'], correct: 2 }]
        },
        {
          id: 'ts-1-10',
          title: 'Return Types',
          type: 'lesson',
          theory: `<h2>Function Return Types</h2>
<p>Return types specify what a function gives back. While TypeScript can often infer return types, explicit annotations improve documentation and catch accidental returns of wrong types.</p>
<h3>Explicit Return Types</h3>
<pre><code>function getFullName(first: string, last: string): string {
  return first + " " + last;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}</code></pre>
<h3>Void Return Type</h3>
<p>Functions that do not return a value use <code>void</code>:</p>
<pre><code>function printMessage(msg: string): void {
  console.log(msg);
}</code></pre>
<h3>Multiple Return Paths</h3>
<p>TypeScript ensures all code paths return the correct type:</p>
<pre><code>function getGrade(score: number): string {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  return "F";
}</code></pre>
<h3>Why Annotate Return Types?</h3>
<p>Without annotation, TypeScript infers — but explicit types catch bugs like accidentally returning undefined in one branch, or returning a number when you meant string. They also serve as documentation for other developers reading your code.</p>`,
          challenge: {
            description: 'Write a function getGrade(score: number): string that returns "A" for 90+, "B" for 80+, "C" for 70+, "F" otherwise. Test with 85.',
            starterCode: '// getGrade function with return type\n',
            expectedOutput: 'B',
            hints: ['Annotate return as : string', 'Use if/else chain for grade ranges', 'console.log(getGrade(85))']
          },
          quiz: [{ question: 'What return type should a function have if it only prints to console?', options: ['string', 'null', 'void', 'undefined'], correct: 2 }]
        },
        {
          id: 'ts-1-11',
          title: 'Optional Parameters',
          type: 'lesson',
          theory: `<h2>Optional Parameters</h2>
<p>Not every parameter needs a value every time. TypeScript optional parameters let you define parameters that callers can skip, marked with a <code>?</code> after the name.</p>
<h3>Syntax</h3>
<pre><code>function greet(name: string, greeting?: string): string {
  return (greeting || "Hello") + ", " + name + "!";
}
greet("Alice");          // "Hello, Alice!"
greet("Alice", "Hi");   // "Hi, Alice!"</code></pre>
<h3>Rules</h3>
<ul>
<li>Optional parameters must come <strong>after</strong> required ones</li>
<li>Their type becomes type | undefined automatically</li>
<li>You must handle the undefined case in your logic</li>
</ul>
<h3>Default Parameters</h3>
<p>Default parameters provide a fallback value without needing the ? syntax:</p>
<pre><code>function createMessage(text: string, urgent: boolean = false): string {
  return urgent ? "⚠️ " + text : text;
}</code></pre>
<h3>Checking for undefined</h3>
<pre><code>function formatName(first: string, last?: string): string {
  if (last) {
    return first + " " + last;
  }
  return first;
}</code></pre>
<p>Optional parameters make functions flexible without requiring multiple overloads or wrapper functions.</p>`,
          challenge: {
            description: 'Write buildProfile(name: string, age?: number, city?: string) that returns a formatted string with "unknown" for missing values. Call with just "Bob".',
            starterCode: '// buildProfile with optional parameters\n',
            expectedOutput: 'Name: Bob, Age: unknown, City: unknown',
            hints: ['Use ? for optional params', 'Use || "unknown" for defaults', 'Optional params must be last']
          },
          quiz: [{ question: 'Where must optional parameters be placed?', options: ['Before required parameters', 'After required parameters', 'Anywhere', 'Only as first parameter'], correct: 1 }]
        },
        {
          id: 'ts-1-12',
          title: 'Arrow Functions with Types',
          type: 'lesson',
          theory: `<h2>Arrow Functions with Types</h2>
<p>Arrow functions in TypeScript work just like JavaScript but with full type annotations. They are concise and commonly used for callbacks, array methods, and short utility functions.</p>
<h3>Basic Arrow Function Types</h3>
<pre><code>const add = (a: number, b: number): number => a + b;
const greet = (name: string): string => "Hello, " + name;
const log = (msg: string): void => console.log(msg);</code></pre>
<h3>Type for the Variable</h3>
<p>You can also type the variable that holds the function:</p>
<pre><code>const multiply: (x: number, y: number) => number = (x, y) => x * y;</code></pre>
<h3>Arrow Functions as Callbacks</h3>
<pre><code>const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n: number): number => n * 2);
const filtered = numbers.filter((n: number): boolean => n > 3);</code></pre>
<h3>Multi-line Arrow Functions</h3>
<pre><code>const processOrder = (item: string, qty: number): string => {
  const total = qty * 10;
  return "Order: " + qty + "x " + item + " = $" + total;
};</code></pre>
<h3>Implicit vs Explicit Returns</h3>
<p>Single-expression arrow functions return implicitly (no braces). Multi-line ones require explicit <code>return</code> statements with curly braces.</p>`,
          challenge: {
            description: 'Create three arrow functions: square (number => number), isLong (string => boolean if length > 5), shout (string => uppercase string). Test each.',
            starterCode: '// Three typed arrow functions\n',
            expectedOutput: '16\ntrue\nHELLO WORLD',
            hints: ['const square = (n: number): number => n * n', '.length > 5 for isLong', '.toUpperCase() for shout']
          },
          quiz: [{ question: 'Where is the return type annotation placed on an arrow function?', options: ['After the => symbol', 'After the parameters, before =>', 'Before the parameters', 'You cannot type arrow functions'], correct: 1 }]
        },
        {
          id: 'ts-1-13',
          title: 'Typed Arrays',
          type: 'lesson',
          theory: `<h2>Typed Arrays in TypeScript</h2>
<p>Arrays in TypeScript are typed — you specify what kind of elements they can contain, preventing mixed-type bugs and providing autocomplete for element methods.</p>
<h3>Array Type Syntax</h3>
<p>Two equivalent ways to declare typed arrays:</p>
<pre><code>let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array&lt;string&gt; = ["Alice", "Bob", "Charlie"];</code></pre>
<h3>Type Safety in Arrays</h3>
<pre><code>let scores: number[] = [95, 87, 92];
scores.push(88);    // OK — number added
scores.push("A");   // Error! string not assignable to number</code></pre>
<h3>Array of Objects</h3>
<pre><code>let users: {name: string, age: number}[] = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 30}
];</code></pre>
<h3>Multi-type Arrays</h3>
<p>Use union types for arrays with multiple types:</p>
<pre><code>let mixed: (string | number)[] = [1, "two", 3, "four"];</code></pre>
<h3>Array Methods are Type-Safe</h3>
<pre><code>let fruits: string[] = ["apple", "banana", "cherry"];
let upper = fruits.map(f => f.toUpperCase()); // string[]
let long = fruits.filter(f => f.length > 5);  // string[]</code></pre>`,
          challenge: {
            description: 'Create a number array temps = [22, 25, 19, 30, 28]. Calculate and print the average rounded to 1 decimal.',
            starterCode: '// Typed array and calculate average\n',
            expectedOutput: '24.8',
            hints: ['Use reduce to sum the array', 'Divide sum by temps.length', 'toFixed(1) for one decimal']
          },
          quiz: [{ question: 'Which is a valid typed array declaration?', options: ['let arr: [] = [1,2,3]', 'let arr: number[] = [1,2,3]', 'let arr: array(number) = [1,2,3]', 'let arr: [number] = [1,2,3]'], correct: 1 }]
        },
        {
          id: 'ts-1-14',
          title: 'Array Methods with Types',
          type: 'lesson',
          theory: `<h2>Array Methods with Types</h2>
<p>TypeScript enhances array methods with type inference, making transformations and queries type-safe throughout method chains.</p>
<h3>map() — Transform Elements</h3>
<pre><code>let prices: number[] = [10, 20, 30];
let withTax: number[] = prices.map(p => p * 1.1);
let labels: string[] = prices.map(p => "$" + p);</code></pre>
<h3>filter() — Select Elements</h3>
<pre><code>let scores: number[] = [45, 82, 67, 93, 55];
let passing: number[] = scores.filter(s => s >= 60);</code></pre>
<h3>reduce() — Aggregate</h3>
<pre><code>let nums: number[] = [1, 2, 3, 4, 5];
let sum: number = nums.reduce((acc, n) => acc + n, 0);
let max: number = nums.reduce((a, b) => a > b ? a : b);</code></pre>
<h3>find() and includes()</h3>
<pre><code>let names: string[] = ["Alice", "Bob", "Charlie"];
let found: string | undefined = names.find(n => n.startsWith("B"));
let hasAlice: boolean = names.includes("Alice");</code></pre>
<h3>Chaining Methods</h3>
<pre><code>let result = [1, 2, 3, 4, 5, 6]
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((a, b) => a + b); // 120</code></pre>`,
          challenge: {
            description: 'Given words ["typescript", "javascript", "python", "go", "rust"], filter words longer than 4 chars, uppercase them, join with ", ".',
            starterCode: 'let words: string[] = ["typescript", "javascript", "python", "go", "rust"];\n',
            expectedOutput: 'TYPESCRIPT, JAVASCRIPT, PYTHON',
            hints: ['Chain .filter().map().join()', 'Filter: word.length > 4', 'Map: word.toUpperCase()']
          },
          quiz: [{ question: 'What type does find() return?', options: ['T', 'T | null', 'T | undefined', 'T[]'], correct: 2 }]
        },
        {
          id: 'ts-1-15',
          title: 'Tuples',
          type: 'lesson',
          theory: `<h2>Tuples in TypeScript</h2>
<p>Tuples are fixed-length arrays where each position has a specific type. Unlike regular arrays, tuples know exactly what type each element is at each index.</p>
<h3>Basic Tuple Declaration</h3>
<pre><code>let person: [string, number] = ["Alice", 25];
let coordinate: [number, number] = [10.5, 20.3];
let entry: [string, number, boolean] = ["task", 1, true];</code></pre>
<h3>Accessing Tuple Elements</h3>
<pre><code>let user: [string, number] = ["Bob", 30];
let name: string = user[0]; // TypeScript knows index 0 is string
let age: number = user[1];  // TypeScript knows index 1 is number</code></pre>
<h3>Tuple vs Array</h3>
<pre><code>let arr: number[] = [1, 2, 3];        // Any length, all numbers
let tuple: [number, number] = [1, 2]; // Exactly 2 numbers</code></pre>
<h3>Destructuring Tuples</h3>
<pre><code>let [firstName, userAge]: [string, number] = ["Alice", 25];
console.log(firstName); // "Alice"
console.log(userAge);   // 25</code></pre>
<h3>Use Cases</h3>
<p>Tuples are great for function returns when you need multiple values of different types, like coordinate pairs, key-value entries, or React useState hook returns.</p>`,
          challenge: {
            description: 'Create a tuple for RGB: [number, number, number] with values [135, 206, 235]. Destructure and print "RGB: 135, 206, 235".',
            starterCode: '// RGB tuple, destructure, print\n',
            expectedOutput: 'RGB: 135, 206, 235',
            hints: ['let skyBlue: [number, number, number] = [135, 206, 235]', 'Destructure: let [r, g, b] = skyBlue', 'Template literal for output']
          },
          quiz: [{ question: 'What is the main difference between a tuple and an array?', options: ['Tuples are faster', 'Tuples have fixed length and typed positions', 'Tuples can only hold strings', 'No difference'], correct: 1 }]
        },
        {
          id: 'ts-1-16',
          title: 'Readonly Arrays and Tuples',
          type: 'lesson',
          theory: `<h2>Readonly Arrays and Tuples</h2>
<p>TypeScript provides <code>readonly</code> modifiers to prevent mutations on arrays and tuples, ensuring data immutability at compile time.</p>
<h3>Readonly Arrays</h3>
<pre><code>let colors: readonly string[] = ["red", "green", "blue"];
// colors.push("yellow"); // Error! push does not exist on readonly
// colors[0] = "purple";  // Error! Index signature is readonly</code></pre>
<h3>ReadonlyArray Generic</h3>
<pre><code>let nums: ReadonlyArray&lt;number&gt; = [1, 2, 3, 4, 5];
// nums.pop();  // Error!
// nums[0] = 0; // Error!</code></pre>
<h3>Creating New Arrays from Readonly</h3>
<p>Read operations still work — you can create new arrays:</p>
<pre><code>let original: readonly number[] = [1, 2, 3];
let doubled = original.map(n => n * 2); // OK — new array
let filtered = original.filter(n => n > 1); // OK — new array</code></pre>
<h3>as const Assertion</h3>
<p>Makes any array deeply readonly with literal types:</p>
<pre><code>let config = [1, "hello", true] as const;
// type is readonly [1, "hello", true] — each value is literal!</code></pre>
<p>Readonly collections are essential for functional programming patterns where you never mutate data, only create transformed copies.</p>`,
          challenge: {
            description: 'Create a readonly array of 7 weekdays. Filter to get workdays (exclude Saturday and Sunday) and print the count.',
            starterCode: 'const days: readonly string[] = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];\n',
            expectedOutput: '5',
            hints: ['filter creates a new array (allowed on readonly)', 'Filter out Saturday and Sunday', 'Print filtered.length']
          },
          quiz: [{ question: 'Which method is NOT allowed on a readonly array?', options: ['map()', 'filter()', 'push()', 'forEach()'], correct: 2 }]
        },
        {
          id: 'ts-1-17',
          title: 'Object Types',
          type: 'lesson',
          theory: `<h2>Object Types in TypeScript</h2>
<p>Objects are the most common complex type. You define the shape of objects using inline type annotations specifying each property name and type.</p>
<h3>Inline Object Types</h3>
<pre><code>let user: { name: string; age: number; email: string } = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};</code></pre>
<h3>Type Safety for Objects</h3>
<pre><code>let product: { name: string; price: number } = {
  name: "Laptop",
  price: 999
};
// product.color = "silver"; // Error! color does not exist on type</code></pre>
<h3>Optional Properties</h3>
<pre><code>let config: { host: string; port?: number } = {
  host: "localhost"
  // port is optional, can be omitted
};</code></pre>
<h3>Readonly Properties</h3>
<pre><code>let point: { readonly x: number; readonly y: number } = { x: 10, y: 20 };
// point.x = 5; // Error! Cannot assign to readonly property</code></pre>
<h3>Nested Objects</h3>
<pre><code>let company: { name: string; address: { city: string; country: string } } = {
  name: "TechCorp",
  address: { city: "Mumbai", country: "India" }
};</code></pre>`,
          challenge: {
            description: 'Create an object book with properties: title (string), author (string), pages (number), isPublished (boolean). Print a summary.',
            starterCode: '// Typed book object\n',
            expectedOutput: 'Clean Code by Robert Martin - 464 pages (Published)',
            hints: ['Define inline type for the object', 'Use ternary for Published/Unpublished', 'Template literal for formatting']
          },
          quiz: [{ question: 'How do you make an object property optional?', options: ['property: optional string', 'property?: string', 'property: string | null', 'optional property: string'], correct: 1 }]
        },
        {
          id: 'ts-1-18',
          title: 'Interfaces',
          type: 'lesson',
          theory: `<h2>Interfaces</h2>
<p>Interfaces define the shape of objects and provide reusable type contracts. They are one of TypeScript's most powerful features for defining structure that can be shared across your codebase.</p>
<h3>Defining an Interface</h3>
<pre><code>interface User {
  name: string;
  age: number;
  email: string;
}

let alice: User = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};</code></pre>
<h3>Benefits Over Inline Types</h3>
<ul>
<li>Reusable across multiple variables and functions</li>
<li>Clear, descriptive names for complex shapes</li>
<li>Can be extended (inheritance) and merged</li>
<li>Better error messages from the compiler</li>
</ul>
<h3>Interface with Methods</h3>
<pre><code>interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}</code></pre>
<h3>Interfaces for Function Parameters</h3>
<pre><code>interface PrintOptions {
  message: string;
  color?: string;
  bold?: boolean;
}
function print(opts: PrintOptions): void {
  console.log(opts.message);
}</code></pre>`,
          challenge: {
            description: 'Define a Product interface with name (string), price (number), inStock (boolean). Create two products and print their info.',
            starterCode: '// Product interface and two objects\n',
            expectedOutput: 'Keyboard: $49.99 (In Stock)\nWebcam: $79.99 (Out of Stock)',
            hints: ['interface Product { name: string; ... }', 'Create a display function', 'Ternary for stock status']
          },
          quiz: [{ question: 'What keyword defines an interface?', options: ['type', 'interface', 'struct', 'class'], correct: 1 }]
        },
        {
          id: 'ts-1-19',
          title: 'Extending Interfaces',
          type: 'lesson',
          theory: `<h2>Extending Interfaces</h2>
<p>Interfaces can inherit from other interfaces using the <code>extends</code> keyword. This lets you build complex types from simpler building blocks.</p>
<h3>Basic Extension</h3>
<pre><code>interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  isGoodBoy: boolean;
}

let buddy: Dog = {
  name: "Buddy", age: 3,
  breed: "Golden Retriever", isGoodBoy: true
};</code></pre>
<h3>Multiple Inheritance</h3>
<pre><code>interface Printable { print(): void; }
interface Saveable { save(): void; }
interface Document extends Printable, Saveable {
  title: string;
  content: string;
}</code></pre>
<h3>Deep Extension Chains</h3>
<pre><code>interface Shape { color: string; }
interface Sized extends Shape { width: number; height: number; }
interface Positioned extends Sized { x: number; y: number; }</code></pre>
<h3>Override Properties</h3>
<p>Extended interfaces can narrow property types (make them more specific), but cannot widen them to incompatible types. This ensures substitutability.</p>`,
          challenge: {
            description: 'Create base interface Shape with color. Extend to Circle (radius) and Rectangle (width, height). Create one of each, print areas.',
            starterCode: '// Shape, Circle, Rectangle interfaces\n',
            expectedOutput: 'Red Circle: area = 78.54\nBlue Rectangle: area = 24',
            hints: ['interface Circle extends Shape { radius: number }', 'Circle area: Math.PI * r * r', 'toFixed(2) for formatting']
          },
          quiz: [{ question: 'Can an interface extend multiple interfaces?', options: ['No, only one', 'Yes, separated by commas', 'Only with & operator', 'Only type aliases can'], correct: 1 }]
        },
        {
          id: 'ts-1-20',
          title: 'Enums',
          type: 'lesson',
          theory: `<h2>Enums in TypeScript</h2>
<p>Enums allow you to define a set of named constants, making code more readable and preventing invalid values. TypeScript supports numeric and string enums.</p>
<h3>Numeric Enums</h3>
<pre><code>enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}
let move: Direction = Direction.Up; // 0</code></pre>
<h3>String Enums</h3>
<pre><code>enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
console.log(Color.Red); // "RED"</code></pre>
<h3>Custom Values</h3>
<pre><code>enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500
}</code></pre>
<h3>Using Enums in Functions</h3>
<pre><code>enum Priority { Low, Medium, High, Critical }
function getLabel(p: Priority): string {
  switch(p) {
    case Priority.Low: return "Low Priority";
    case Priority.High: return "High Priority";
    default: return "Normal";
  }
}</code></pre>
<h3>Benefits</h3>
<ul>
<li>Self-documenting code with named constants</li>
<li>Type safety — prevents invalid values</li>
<li>IDE autocomplete for all valid options</li>
<li>Reverse mapping (numeric enums only)</li>
</ul>`,
          challenge: {
            description: 'Create enum Season with Spring, Summer, Autumn, Winter. Write a function that returns an activity for each season. Print the activity for Summer.',
            starterCode: '// Season enum and activity function\n',
            expectedOutput: 'Summer: Go swimming!',
            hints: ['enum Season { Spring, Summer, ... }', 'Use switch statement', 'Access with Season.Summer']
          },
          quiz: [{ question: 'What value does the first member of a numeric enum get by default?', options: ['1', '0', 'undefined', 'null'], correct: 1 }]
        },
        {
          id: 'ts-1-21',
          title: 'String Enums',
          type: 'lesson',
          theory: `<h2>String Enums</h2>
<p>String enums require explicit string values for each member. They produce more readable output in logs and debugging since the values are descriptive strings rather than numbers.</p>
<h3>Defining String Enums</h3>
<pre><code>enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
console.log(Direction.Up); // "UP"</code></pre>
<h3>Advantages Over Numeric Enums</h3>
<ul>
<li>More readable in runtime output and logs</li>
<li>No auto-increment confusion</li>
<li>Meaningful values when debugging</li>
<li>Better JSON serialization</li>
</ul>
<h3>Real-World Example</h3>
<pre><code>enum LogLevel {
  Debug = "DEBUG",
  Info = "INFO",
  Warn = "WARN",
  Error = "ERROR"
}
function log(level: LogLevel, message: string): void {
  console.log("[" + level + "] " + message);
}
log(LogLevel.Error, "Connection failed");
// [ERROR] Connection failed</code></pre>
<h3>No Reverse Mapping</h3>
<p>Unlike numeric enums, string enums do NOT support reverse mapping — you can only go from name to value, not value to name.</p>`,
          challenge: {
            description: 'Create string enum Theme with Light="light", Dark="dark", System="system". Write function that applies a theme. Apply Dark theme.',
            starterCode: '// Theme enum and apply function\n',
            expectedOutput: 'Theme applied: dark',
            hints: ['Each member needs = "value"', 'String enums print their string values', 'Access with Theme.Dark']
          },
          quiz: [{ question: 'Do string enums support reverse mapping?', options: ['Yes always', 'Only with explicit values', 'No they do not', 'Only in strict mode'], correct: 2 }]
        },
        {
          id: 'ts-1-22',
          title: 'Const Enums',
          type: 'lesson',
          theory: `<h2>Const Enums</h2>
<p>Const enums are a performance optimization. They are completely removed during compilation and their values are inlined directly into the generated JavaScript code.</p>
<h3>Regular vs Const Enum</h3>
<pre><code>// Regular enum — generates a JavaScript object at runtime
enum Direction { Up, Down, Left, Right }

// Const enum — inlined, no runtime object generated
const enum Color { Red, Green, Blue }
let c = Color.Green; // Compiles to: let c = 1;</code></pre>
<h3>Benefits</h3>
<ul>
<li><strong>Zero runtime overhead:</strong> No enum object in output JS</li>
<li><strong>Smaller bundle size:</strong> Values inlined directly</li>
<li><strong>Same type safety:</strong> Full compile-time checking</li>
</ul>
<h3>Limitations</h3>
<ul>
<li>No reverse mapping possible</li>
<li>Cannot use computed members</li>
<li>Cannot iterate over members at runtime</li>
<li>Cannot reference from other files easily</li>
</ul>
<h3>When to Use</h3>
<p>Use const enums when you do not need runtime access to enum values and want maximum performance. They are ideal for internal constants used only at compile time.</p>`,
          challenge: {
            description: 'Create const enum MathOp with Add="+", Sub="-", Mul="*", Div="/". Write calculate function. Test: 10 + 5.',
            starterCode: '// const enum and calculate\n',
            expectedOutput: '10 + 5 = 15',
            hints: ['const enum MathOp { Add = "+", ... }', 'Use switch on operation', 'Template literal for output']
          },
          quiz: [{ question: 'What happens to const enums during compilation?', options: ['They become objects', 'Values are inlined and enum removed', 'They become arrays', 'They stay as-is'], correct: 1 }]
        },
        {
          id: 'ts-1-23',
          title: 'Type Aliases',
          type: 'lesson',
          theory: `<h2>Type Aliases</h2>
<p>Type aliases create new names for types using the <code>type</code> keyword. They make complex types reusable, readable, and easy to maintain.</p>
<h3>Basic Type Aliases</h3>
<pre><code>type StringOrNumber = string | number;
type UserID = string;
type Callback = (data: string) => void;</code></pre>
<h3>Object Type Aliases</h3>
<pre><code>type Point = { x: number; y: number; };
type User = { id: number; name: string; email: string; };</code></pre>
<h3>Function Type Aliases</h3>
<pre><code>type MathOperation = (a: number, b: number) => number;
const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;</code></pre>
<h3>Generic Type Aliases</h3>
<pre><code>type Container&lt;T&gt; = { value: T; timestamp: Date; };
let numBox: Container&lt;number&gt; = { value: 42, timestamp: new Date() };</code></pre>
<h3>Type Aliases vs Interfaces</h3>
<ul>
<li>Type aliases can represent unions, intersections, primitives</li>
<li>Interfaces support declaration merging and extends</li>
<li>Use interfaces for object shapes, types for everything else</li>
</ul>`,
          challenge: {
            description: 'Create type alias Coordinate = [number, number]. Write a distance function taking two Coordinates. Calculate distance between (0,0) and (3,4).',
            starterCode: '// Type alias and distance function\n',
            expectedOutput: '5',
            hints: ['type Coordinate = [number, number]', 'Distance = sqrt((x2-x1)^2 + (y2-y1)^2)', 'Math.sqrt and Math.pow']
          },
          quiz: [{ question: 'Can type aliases define function types?', options: ['No, only interfaces can', 'Yes, using arrow syntax', 'Only with function keyword', 'Only for callbacks'], correct: 1 }]
        },
        {
          id: 'ts-1-24',
          title: 'Union Types',
          type: 'lesson',
          theory: `<h2>Union Types</h2>
<p>Union types allow a value to be one of several types, defined using the pipe operator <code>|</code>. They are fundamental to TypeScript's type system for modeling flexible data.</p>
<h3>Basic Union Types</h3>
<pre><code>let id: string | number;
id = "abc123"; // OK
id = 42;       // OK
// id = true;  // Error! boolean not in union</code></pre>
<h3>Union in Functions</h3>
<pre><code>function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return String(id).padStart(5, "0");
}</code></pre>
<h3>Narrowing Unions</h3>
<p>TypeScript narrows unions based on type checks (typeof, instanceof, etc.):</p>
<pre><code>function printValue(val: string | number | boolean): void {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
  } else if (typeof val === "number") {
    console.log(val.toFixed(2));
  } else {
    console.log(val ? "yes" : "no");
  }
}</code></pre>
<h3>Union with Literals</h3>
<pre><code>type Status = "loading" | "success" | "error";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";</code></pre>`,
          challenge: {
            description: 'Write formatInput(val: string | number | boolean) that uppercases strings, doubles numbers, converts booleans to "yes"/"no". Test all three.',
            starterCode: '// formatInput with union type\n',
            expectedOutput: 'HELLO\n20\nyes',
            hints: ['Use typeof to check types', 'typeof val === "string" for string', 'Test with "hello", 10, true']
          },
          quiz: [{ question: 'What operator creates a union type?', options: ['&', '|', '+', '||'], correct: 1 }]
        },
        {
          id: 'ts-1-25',
          title: 'Intersection Types',
          type: 'lesson',
          theory: `<h2>Intersection Types</h2>
<p>Intersection types combine multiple types into one using the <code>&</code> operator. The resulting type has ALL properties from all combined types.</p>
<h3>Basic Intersection</h3>
<pre><code>type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;

let person: Person = { name: "Alice", age: 25 };
// Must have BOTH name AND age</code></pre>
<h3>Combining Types</h3>
<pre><code>type Timestamped = { createdAt: string; updatedAt: string };
type Identifiable = { id: number };
type BaseEntity = { name: string };
type FullEntity = BaseEntity & Identifiable & Timestamped;</code></pre>
<h3>Union vs Intersection</h3>
<ul>
<li><strong>Union (A | B):</strong> Value can be A OR B — access only shared properties</li>
<li><strong>Intersection (A & B):</strong> Value must be A AND B — access all properties of both</li>
</ul>
<h3>Practical Use: Mixins</h3>
<pre><code>type Draggable = { drag(): void };
type Resizable = { resize(): void };
type UIWidget = Draggable & Resizable & { id: string };</code></pre>
<p>Intersections are the type alias equivalent of interface extends — they compose types together additively.</p>`,
          challenge: {
            description: 'Create types Printable ({print(): string}) and Loggable ({log(): void}). Combine into PrintableDoc with content property. Implement and test.',
            starterCode: '// Define and combine types with &\n',
            expectedOutput: 'Printing: Hello World\nLogged: Hello World',
            hints: ['type PrintableDoc = Printable & Loggable & { content: string }', 'Object must have all methods and properties', 'Call both print() and log()']
          },
          quiz: [{ question: 'What does A & B mean in TypeScript?', options: ['A or B', 'A and B combined (all properties)', 'A minus B', 'Either but not both'], correct: 1 }]
        },
        {
          id: 'ts-1-26',
          title: 'Discriminated Unions',
          type: 'lesson',
          theory: `<h2>Discriminated Unions</h2>
<p>Discriminated unions (tagged unions) use a common literal property to distinguish between union members. They enable safe, exhaustive type handling with switch statements.</p>
<h3>The Pattern</h3>
<pre><code>interface Circle { kind: "circle"; radius: number; }
interface Square { kind: "square"; size: number; }
type Shape = Circle | Square;</code></pre>
<h3>Narrowing with Discriminant</h3>
<pre><code>function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.size ** 2;
  }
}</code></pre>
<h3>Exhaustiveness Checking</h3>
<p>TypeScript can ensure you handle all cases. If you add a new variant to the union but forget to handle it, the compiler warns you.</p>
<h3>Real-World: API Responses</h3>
<pre><code>type Response =
  | { status: "success"; data: string[] }
  | { status: "error"; message: string }
  | { status: "loading" };</code></pre>
<p>The discriminant property (kind, status, type) must be a string literal type shared across all variants. This pattern is extremely common in Redux, state machines, and API handling.</p>`,
          challenge: {
            description: 'Create discriminated union for notifications: Email (type:"email", to, subject), SMS (type:"sms", phone, text), Push (type:"push", title). Write send function, test all three.',
            starterCode: '// Notification types with discriminant\n',
            expectedOutput: 'Email to alice@test.com: Hello\nSMS to 555-0123: Hi there\nPush: New Update',
            hints: ['Use type field as discriminant', 'switch(notif.type) to narrow', 'Create one of each and call send']
          },
          quiz: [{ question: 'What is the discriminant in a discriminated union?', options: ['Any property', 'A shared literal-typed property identifying the variant', 'The first property', 'A method'], correct: 1 }]
        },
        {
          id: 'ts-1-27',
          title: 'Type Aliases vs Interfaces',
          type: 'lesson',
          theory: `<h2>Type Aliases vs Interfaces — When to Use Which</h2>
<p>Both <code>interface</code> and <code>type</code> can define object shapes, but they have different capabilities. Knowing when to use each makes your code more idiomatic.</p>
<h3>Interface Strengths</h3>
<ul>
<li><strong>Declaration merging:</strong> Same-named interfaces auto-merge</li>
<li><strong>extends keyword:</strong> Clear inheritance syntax</li>
<li><strong>implements:</strong> Classes can implement interfaces</li>
<li><strong>Better error messages</strong> in many cases</li>
</ul>
<h3>Type Alias Strengths</h3>
<ul>
<li><strong>Union types:</strong> type A = string | number</li>
<li><strong>Intersection types:</strong> type C = A & B</li>
<li><strong>Mapped types:</strong> type Keys = keyof T</li>
<li><strong>Primitives and tuples:</strong> type ID = string</li>
</ul>
<h3>General Guidelines</h3>
<pre><code>// Use INTERFACE for object shapes:
interface User { name: string; age: number; }

// Use TYPE for unions, intersections, computed:
type Result = Success | Error;
type StringOrNumber = string | number;
type Keys = keyof User;</code></pre>
<h3>Declaration Merging</h3>
<pre><code>interface Window { title: string; }
interface Window { close(): void; }
// Window now has BOTH — only interfaces do this</code></pre>`,
          challenge: {
            description: 'Create a type Result = {success: true, data: string} | {success: false, error: string}. Write handleResult function. Test both success and error cases.',
            starterCode: '// Result type and handler\n',
            expectedOutput: 'Data: Hello World\nError: Not found',
            hints: ['Union type with literal discriminant', 'Check result.success to narrow', 'Create two objects, one for each case']
          },
          quiz: [{ question: 'Which can only be done with type aliases?', options: ['Define object shapes', 'Create union types', 'Use extends', 'Declaration merging'], correct: 1 }]
        },
        {
          id: 'ts-1-28',
          title: 'Narrowing with typeof',
          type: 'lesson',
          theory: `<h2>Narrowing with typeof</h2>
<p>Type narrowing is the process of refining a broad type to a more specific one within a code block. The <code>typeof</code> operator is the simplest and most common type guard.</p>
<h3>How typeof Narrows</h3>
<pre><code>function process(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase(); // TS knows: string
  }
  return value.toFixed(2); // TS knows: number
}</code></pre>
<h3>typeof Returns</h3>
<p>Possible values: "string", "number", "boolean", "undefined", "object", "function", "symbol", "bigint"</p>
<h3>Multiple Checks</h3>
<pre><code>function describe(val: string | number | boolean | null): string {
  if (val === null) return "null value";
  if (typeof val === "string") return "Text: " + val;
  if (typeof val === "number") return "Num: " + val;
  return "Bool: " + val;
}</code></pre>
<h3>Truthiness Narrowing</h3>
<pre><code>function greet(name: string | null): string {
  if (name) {
    return "Hello " + name; // narrowed to string
  }
  return "Hello stranger";
}</code></pre>
<h3>The in Operator</h3>
<pre><code>function move(animal: {swim?: () => void; fly?: () => void}) {
  if ("swim" in animal) { animal.swim(); }
}</code></pre>`,
          challenge: {
            description: 'Write stringify(val: string | number | boolean | null) that formats each differently: strings in quotes, numbers with 2 decimals, booleans as YES/NO, null as "nothing". Test all four.',
            starterCode: '// stringify with typeof guards\n',
            expectedOutput: '"hello"\n42.00\nYES\nnothing',
            hints: ['Check null first (typeof null is "object")', 'typeof for string, number, boolean', 'Format each type differently']
          },
          quiz: [{ question: 'What does typeof null return?', options: ['"null"', '"undefined"', '"object"', '"null_type"'], correct: 2 }]
        },
        {
          id: 'ts-1-29',
          title: 'Mini App Project - Part 1',
          type: 'project',
          theory: `<h2>Project: Task Manager (Part 1) 📋</h2>
<p>Let us build a type-safe task manager using everything learned! This project combines interfaces, enums, unions, and typed functions.</p>
<h3>Requirements</h3>
<ol>
<li>Define a <code>Priority</code> enum with Low, Medium, High</li>
<li>Define a <code>Task</code> interface with: id (number), title (string), priority (Priority), completed (boolean)</li>
<li>Create a <code>createTask</code> function with auto-incrementing ID</li>
<li>Create a <code>displayTask</code> function for formatted output</li>
</ol>
<h3>Architecture</h3>
<pre><code>enum Priority { Low, Medium, High }
interface Task {
  id: number;
  title: string;
  priority: Priority;
  completed: boolean;
}
function createTask(title: string, priority: Priority): Task { ... }
function displayTask(task: Task): void { ... }</code></pre>
<h3>Type Safety Goals</h3>
<p>Every variable typed. Every function has parameter and return types. No any types. The compiler catches any misuse of the task system. Priority must be a valid enum value — no random strings allowed.</p>`,
          challenge: {
            description: 'Implement the Priority enum, Task interface, createTask (auto-increment id), displayTask. Create 2 tasks and display them.',
            starterCode: '// Task Manager - Part 1\n',
            expectedOutput: '[1] Learn TypeScript (Priority: High) - Pending\n[2] Build Project (Priority: Medium) - Pending',
            hints: ['Use a counter variable for IDs', 'displayTask formats [id] title (Priority: X) - Status', 'Priority[task.priority] gets enum name']
          },
          quiz: [{ question: 'Why use an enum for priority instead of strings?', options: ['Enums are faster', 'Enums provide type safety and prevent invalid values', 'Enums use less memory', 'No benefit'], correct: 1 }]
        },
        {
          id: 'ts-1-30',
          title: 'Mini App Project - Part 2',
          type: 'project',
          theory: `<h2>Project: Task Manager (Part 2) 📋</h2>
<p>Now let us add functionality: completing tasks, filtering, and statistics. This demonstrates how TypeScript keeps complex logic safe.</p>
<h3>New Features</h3>
<ol>
<li><strong>completeTask(id):</strong> Mark a task as done</li>
<li><strong>filterByPriority(priority):</strong> Get tasks of given priority</li>
<li><strong>getStats():</strong> Return completion statistics</li>
</ol>
<h3>Stats Interface</h3>
<pre><code>interface TaskStats {
  total: number;
  completed: number;
  pending: number;
}</code></pre>
<h3>Implementation</h3>
<p>Use typed arrays, find(), filter(), and computed properties. Every function has clear input/output types. The stats function demonstrates how TypeScript helps structure return values with a clear interface contract.</p>
<h3>Testing</h3>
<p>Create several tasks, complete some, then verify stats are correct. TypeScript ensures you cannot accidentally pass wrong types to any function in the pipeline.</p>`,
          challenge: {
            description: 'Build on Part 1: Add tasks array, completeTask(id), getStats() returning {total, completed, pending}. Create 3 tasks, complete 1, print stats.',
            starterCode: '// Task Manager - Part 2 (complete system)\n',
            expectedOutput: 'Total: 3, Completed: 1, Pending: 2',
            hints: ['Use tasks.find(t => t.id === id) to find task', 'Set found.completed = true', 'Filter for stats counts']
          },
          quiz: [{ question: 'What ensures getStats returns correct shape?', options: ['Runtime validation', 'Interface/type for return value', 'console.log', 'try/catch'], correct: 1 }]
        }
      ]
    },
    {
      id: 'ts-advanced',
      title: 'Advanced',
      lessons: [
        {
          id: 'ts-2-1',
          title: 'Introduction to Generics',
          type: 'lesson',
          theory: `<h2>Introduction to Generics</h2>
<p>Generics allow you to write code that works with <strong>any type</strong> while maintaining type safety. They are like type parameters — placeholders for types that get filled in when used.</p>
<h3>The Problem Generics Solve</h3>
<pre><code>// Without generics — loses type info
function identity(value: any): any { return value; }
let result = identity("hello"); // type is any, not string!

// With generics — preserves type
function identity&lt;T&gt;(value: T): T { return value; }
let result = identity("hello"); // type is string!</code></pre>
<h3>Generic Syntax</h3>
<p>The &lt;T&gt; declares a type parameter. T is a convention, but any name works:</p>
<pre><code>function first&lt;T&gt;(arr: T[]): T | undefined {
  return arr[0];
}
first([1, 2, 3]);    // returns number
first(["a", "b"]);  // returns string</code></pre>
<h3>Multiple Type Parameters</h3>
<pre><code>function pair&lt;T, U&gt;(first: T, second: U): [T, U] {
  return [first, second];
}
let p = pair("hello", 42); // [string, number]</code></pre>
<p>TypeScript usually infers generic types from arguments, so you rarely need to specify them explicitly.</p>`,
          challenge: {
            description: 'Write a generic function wrapInArray<T> that takes a value and returns it in an array. Test with string, number, boolean.',
            starterCode: '// Generic wrapInArray function\n',
            expectedOutput: '["hello"]\n[42]\n[true]',
            hints: ['function wrapInArray<T>(value: T): T[]', 'Return [value]', 'JSON.stringify to print']
          },
          quiz: [{ question: 'What does <T> represent in a generic function?', options: ['A specific type called T', 'A type parameter filled in at use', 'The return type', 'A constraint'], correct: 1 }]
        },
        {
          id: 'ts-2-2',
          title: 'Generic Functions',
          type: 'lesson',
          theory: `<h2>Generic Functions</h2>
<p>Generic functions are the most common use of generics. They create reusable, type-safe utilities that work across multiple types without sacrificing type information.</p>
<h3>Swap Function</h3>
<pre><code>function swap&lt;T, U&gt;(pair: [T, U]): [U, T] {
  return [pair[1], pair[0]];
}
swap([1, "hello"]); // ["hello", 1]</code></pre>
<h3>Generic Array Utilities</h3>
<pre><code>function last&lt;T&gt;(arr: T[]): T {
  return arr[arr.length - 1];
}

function flatten&lt;T&gt;(arrays: T[][]): T[] {
  return arrays.reduce((acc, arr) => [...acc, ...arr], []);
}</code></pre>
<h3>Generic with Default Types</h3>
<pre><code>function createState&lt;T = string&gt;(initial: T) {
  let value = initial;
  return { get: () => value, set: (v: T) => { value = v; } };
}</code></pre>
<h3>Explicit Type Arguments</h3>
<p>Sometimes inference is not enough and you must specify explicitly:</p>
<pre><code>function parse&lt;T&gt;(json: string): T {
  return JSON.parse(json);
}
let user = parse&lt;{name: string}&gt;('{"name":"Alice"}');</code></pre>`,
          challenge: {
            description: 'Write generic reverseArray<T> that reverses without mutating original. Test with [1,2,3] and ["a","b","c"].',
            starterCode: '// Generic reverseArray\n',
            expectedOutput: '[3,2,1]\n["c","b","a"]',
            hints: ['function reverseArray<T>(arr: T[]): T[]', 'Use [...arr].reverse()', 'JSON.stringify for output']
          },
          quiz: [{ question: 'Can TypeScript infer generic type arguments?', options: ['Never', 'Yes, from the arguments passed', 'Only for primitives', 'Only with explicit annotation'], correct: 1 }]
        },
        {
          id: 'ts-2-3',
          title: 'Generic Interfaces',
          type: 'lesson',
          theory: `<h2>Generic Interfaces</h2>
<p>Interfaces can be generic too, creating flexible type contracts that work with any data type while maintaining structure.</p>
<h3>Basic Generic Interface</h3>
<pre><code>interface Box&lt;T&gt; {
  value: T;
  getValue(): T;
}
let numBox: Box&lt;number&gt; = { value: 42, getValue() { return this.value; } };
let strBox: Box&lt;string&gt; = { value: "hi", getValue() { return this.value; } };</code></pre>
<h3>API Response Pattern</h3>
<pre><code>interface ApiResponse&lt;T&gt; {
  data: T;
  status: number;
  message: string;
}
interface User { name: string; email: string; }
let response: ApiResponse&lt;User&gt; = {
  data: { name: "Alice", email: "a@b.com" },
  status: 200, message: "OK"
};</code></pre>
<h3>Multiple Type Parameters</h3>
<pre><code>interface KeyValue&lt;K, V&gt; { key: K; value: V; }
let entry: KeyValue&lt;string, number&gt; = { key: "age", value: 25 };</code></pre>
<h3>Generic Repository Pattern</h3>
<pre><code>interface Repository&lt;T&gt; {
  getAll(): T[];
  getById(id: number): T | undefined;
  add(item: T): void;
}</code></pre>`,
          challenge: {
            description: 'Create generic interface Collection<T> with items: T[], add(item: T): void, getFirst(): T|undefined. Implement for numbers. Add 10,20,30, print first and total.',
            starterCode: '// Generic Collection interface\n',
            expectedOutput: 'First item: 10\nTotal items: 3',
            hints: ['interface Collection<T> { items: T[]; ... }', 'Implement with object literal', 'getFirst returns items[0]']
          },
          quiz: [{ question: 'When do you specify type argument for generic interface?', options: ['At runtime', 'When declaring a variable of that type', 'Never, always inferred', 'In constructor'], correct: 1 }]
        },
        {
          id: 'ts-2-4',
          title: 'Generic Classes',
          type: 'lesson',
          theory: `<h2>Generic Classes</h2>
<p>Classes can use generics to create type-safe data structures and services that work with any type while providing full type checking.</p>
<h3>Basic Generic Class</h3>
<pre><code>class Stack&lt;T&gt; {
  private items: T[] = [];
  push(item: T): void { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
  peek(): T | undefined { return this.items[this.items.length - 1]; }
  get size(): number { return this.items.length; }
}
let numStack = new Stack&lt;number&gt;();
numStack.push(1);
numStack.push(2);</code></pre>
<h3>Multiple Generics</h3>
<pre><code>class Pair&lt;T, U&gt; {
  constructor(public first: T, public second: U) {}
  swap(): Pair&lt;U, T&gt; { return new Pair(this.second, this.first); }
}</code></pre>
<h3>Real-World: DataStore</h3>
<pre><code>class DataStore&lt;T extends { id: number }&gt; {
  private data: T[] = [];
  add(item: T) { this.data.push(item); }
  findById(id: number): T | undefined {
    return this.data.find(item => item.id === id);
  }
  getAll(): T[] { return [...this.data]; }
}</code></pre>
<p>Generic classes are the foundation for typed collections, repositories, and service layers in TypeScript applications.</p>`,
          challenge: {
            description: 'Create generic Queue<T> with enqueue(item), dequeue(): T|undefined, size getter. Test with strings: add "first","second","third", dequeue one, print size.',
            starterCode: '// Generic Queue class\n',
            expectedOutput: 'Dequeued: first\nRemaining: 2',
            hints: ['Use shift() for FIFO dequeue', 'push() for enqueue', 'get size() { return this.items.length }']
          },
          quiz: [{ question: 'Where is the type parameter placed in a generic class?', options: ['After constructor', 'After class name', 'Before class keyword', 'Inside constructor'], correct: 1 }]
        },
        {
          id: 'ts-2-5',
          title: 'Generic Constraints',
          type: 'lesson',
          theory: `<h2>Generic Constraints</h2>
<p>Constraints limit what types can be used with a generic, ensuring the type has certain properties or methods you need to use in your function.</p>
<h3>The extends Keyword</h3>
<pre><code>// Without constraint — cannot access .length
function logLength&lt;T&gt;(item: T): void {
  console.log(item.length); // Error! T might not have length
}

// With constraint — T must have length
function logLength&lt;T extends { length: number }&gt;(item: T): void {
  console.log(item.length); // OK!
}
logLength("hello");  // 5
logLength([1,2,3]);  // 3</code></pre>
<h3>Interface Constraints</h3>
<pre><code>interface HasId { id: number; }
function findById&lt;T extends HasId&gt;(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}</code></pre>
<h3>keyof Constraint</h3>
<pre><code>function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {
  return obj[key];
}
let user = { name: "Alice", age: 25 };
getProperty(user, "name"); // OK
// getProperty(user, "foo"); // Error!</code></pre>
<h3>Multiple Constraints</h3>
<pre><code>function process&lt;T extends Printable & Serializable&gt;(item: T): void {
  item.print();
  item.serialize();
}</code></pre>`,
          challenge: {
            description: 'Write generic longest<T extends {length: number}>(a: T, b: T): T that returns the longer item. Test with strings and arrays.',
            starterCode: '// Generic with constraint\n',
            expectedOutput: 'typescript\n1,2,3,4',
            hints: ['T extends { length: number }', 'Compare a.length vs b.length', 'Return the longer one']
          },
          quiz: [{ question: 'What does <T extends HasId> mean?', options: ['T is exactly HasId', 'T must have at least HasId properties', 'T is a subclass', 'T replaces HasId'], correct: 1 }]
        },
        {
          id: 'ts-2-6',
          title: 'Partial and Required',
          type: 'lesson',
          theory: `<h2>Utility Types: Partial and Required</h2>
<p>TypeScript provides built-in utility types that transform existing types. Partial and Required modify the optionality of all properties.</p>
<h3>Partial&lt;T&gt; — All Optional</h3>
<pre><code>interface User {
  name: string;
  email: string;
  age: number;
}
type PartialUser = Partial&lt;User&gt;;
// { name?: string; email?: string; age?: number; }

function updateUser(id: number, updates: Partial&lt;User&gt;): void {
  // Can pass any subset of properties
}
updateUser(1, { name: "Alice" }); // OK!</code></pre>
<h3>Required&lt;T&gt; — All Required</h3>
<pre><code>interface Config {
  host?: string;
  port?: number;
  debug?: boolean;
}
type FullConfig = Required&lt;Config&gt;;
// All three now required — must provide all</code></pre>
<h3>Common Pattern: Patch/Update</h3>
<pre><code>function patchTodo(todo: Todo, patch: Partial&lt;Todo&gt;): Todo {
  return { ...todo, ...patch };
}</code></pre>
<p>Partial is one of the most-used utility types. It is essential for update functions, configuration overrides, and builder patterns.</p>`,
          challenge: {
            description: 'Create Settings interface (theme, fontSize, language - all required). Write updateSettings taking Partial<Settings>. Start with defaults, update only theme, print before/after.',
            starterCode: '// Settings with Partial update\n',
            expectedOutput: 'Before: light, 14, en\nAfter: dark, 14, en',
            hints: ['Partial<Settings> allows subset', 'Spread: {...current, ...updates}', 'Print both states']
          },
          quiz: [{ question: 'What does Partial<T> do?', options: ['Makes properties readonly', 'Makes all properties optional', 'Makes all required', 'Removes properties'], correct: 1 }]
        },
        {
          id: 'ts-2-7',
          title: 'Pick and Omit',
          type: 'lesson',
          theory: `<h2>Utility Types: Pick and Omit</h2>
<p>These utility types create new types by selecting or excluding specific properties from existing types.</p>
<h3>Pick&lt;T, Keys&gt; — Select Properties</h3>
<pre><code>interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}
type UserPreview = Pick&lt;User, "id" | "name" | "email"&gt;;
// { id: number; name: string; email: string; }</code></pre>
<h3>Omit&lt;T, Keys&gt; — Exclude Properties</h3>
<pre><code>type PublicUser = Omit&lt;User, "password"&gt;;
// Everything except password

type CreateInput = Omit&lt;User, "id" | "createdAt"&gt;;
// Input for creating — no auto-generated fields</code></pre>
<h3>Practical Patterns</h3>
<pre><code>// API response: strip sensitive data
type UserResponse = Omit&lt;User, "password"&gt;;

// Form: only editable fields
type EditableFields = Pick&lt;User, "name" | "email"&gt;;

// Database: exclude auto-generated
type NewUser = Omit&lt;User, "id" | "createdAt"&gt;;</code></pre>
<p>Pick and Omit let you derive focused types from comprehensive base types without duplication.</p>`,
          challenge: {
            description: 'Define Product (id, name, price, description, internalCode). Use Pick for ProductCard (name, price) and Omit for PublicProduct (without internalCode). Print examples.',
            starterCode: '// Product with Pick and Omit\n',
            expectedOutput: 'Card: Laptop - $999\nPublic: Laptop (id:1, $999)',
            hints: ['Pick<Product, "name" | "price">', 'Omit<Product, "internalCode">', 'Create objects of derived types']
          },
          quiz: [{ question: 'What does Omit<User, "password"> produce?', options: ['Only password', 'All except password', 'User with password as never', 'Empty type'], correct: 1 }]
        },
        {
          id: 'ts-2-8',
          title: 'Record and Readonly',
          type: 'lesson',
          theory: `<h2>Utility Types: Record and Readonly</h2>
<p>Record creates object types with specific key and value types. Readonly makes all properties immutable.</p>
<h3>Record&lt;Keys, Type&gt;</h3>
<pre><code>type Weekday = "mon" | "tue" | "wed" | "thu" | "fri";
type Schedule = Record&lt;Weekday, string&gt;;
let schedule: Schedule = {
  mon: "Math", tue: "Science", wed: "English",
  thu: "History", fri: "Art"
};</code></pre>
<h3>Record for Dictionaries</h3>
<pre><code>type ScoreBoard = Record&lt;string, number&gt;;
let scores: ScoreBoard = { alice: 95, bob: 87, charlie: 92 };</code></pre>
<h3>Readonly&lt;T&gt;</h3>
<pre><code>interface Config { host: string; port: number; }
let config: Readonly&lt;Config&gt; = { host: "localhost", port: 3000 };
// config.host = "remote"; // Error! Cannot assign to readonly</code></pre>
<h3>Combining Utilities</h3>
<pre><code>type ImmutableScores = Readonly&lt;Record&lt;string, number&gt;&gt;;
// Object with string keys, number values, all readonly</code></pre>
<p>Record is perfect for lookup tables, dictionaries, and any key-value mapping where you know the key type. Readonly prevents accidental mutations.</p>`,
          challenge: {
            description: 'Create Record<string, number> for student grades. Add Alice:92, Bob:85, Charlie:78. Calculate and print the class average.',
            starterCode: '// Grades Record and average\n',
            expectedOutput: 'Alice: 92\nBob: 85\nCharlie: 78\nClass average: 85',
            hints: ['let grades: Record<string, number> = {...}', 'Object.values() gets all scores', 'Sum / count for average']
          },
          quiz: [{ question: 'What does Record<string, number> represent?', options: ['Array of numbers', 'Object with string keys and number values', 'Tuple', 'Map'], correct: 1 }]
        },
        {
          id: 'ts-2-9',
          title: 'Mapped Types',
          type: 'lesson',
          theory: `<h2>Mapped Types</h2>
<p>Mapped types create new types by transforming each property of an existing type. They are the mechanism behind built-in utilities like Partial, Required, and Readonly.</p>
<h3>Basic Syntax</h3>
<pre><code>type Mapped&lt;T&gt; = {
  [K in keyof T]: T[K]; // Identity — same type
};</code></pre>
<h3>Making Properties Optional</h3>
<pre><code>type MyPartial&lt;T&gt; = {
  [K in keyof T]?: T[K]; // This IS how Partial works!
};</code></pre>
<h3>Changing Value Types</h3>
<pre><code>type Stringify&lt;T&gt; = {
  [K in keyof T]: string; // All values become strings
};
interface User { name: string; age: number; }
type StringUser = Stringify&lt;User&gt;;
// { name: string; age: string; }</code></pre>
<h3>Adding/Removing Modifiers</h3>
<pre><code>type Mutable&lt;T&gt; = { -readonly [K in keyof T]: T[K]; }; // Remove readonly
type Concrete&lt;T&gt; = { [K in keyof T]-?: T[K]; }; // Remove optional</code></pre>
<h3>Practical: Form State</h3>
<pre><code>type FormErrors&lt;T&gt; = {
  [K in keyof T]?: string; // Each field might have an error message
};</code></pre>`,
          challenge: {
            description: 'Create mapped type Nullable<T> making every property T[K] | null. Apply to Person {name: string, age: number}. Create object with name as null, age as 25, print.',
            starterCode: '// Nullable mapped type\n',
            expectedOutput: 'Name: null\nAge: 25',
            hints: ['type Nullable<T> = { [K in keyof T]: T[K] | null }', 'Apply to Person interface', 'Set name to null, age to 25']
          },
          quiz: [{ question: 'What does [K in keyof T] iterate over?', options: ['Array elements', 'All property names of T', 'Only string properties', 'Only required ones'], correct: 1 }]
        },
        {
          id: 'ts-2-10',
          title: 'Classes with TypeScript',
          type: 'lesson',
          theory: `<h2>Classes in TypeScript</h2>
<p>TypeScript enhances JavaScript classes with type annotations, access modifiers, and parameter properties that make OOP more robust and safer.</p>
<h3>Basic Class</h3>
<pre><code>class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(): string { return "Hi, I am " + this.name; }
}</code></pre>
<h3>Parameter Properties (Shorthand)</h3>
<pre><code>class Person {
  constructor(public name: string, public age: number) {}
  // Automatically creates and assigns properties!
}</code></pre>
<h3>Access Modifiers</h3>
<pre><code>class BankAccount {
  private balance: number;
  constructor(initial: number) { this.balance = initial; }
  public deposit(amount: number): void { this.balance += amount; }
  public getBalance(): number { return this.balance; }
}</code></pre>
<h3>Static Members</h3>
<pre><code>class MathUtils {
  static PI: number = 3.14159;
  static circleArea(r: number): number { return MathUtils.PI * r * r; }
}</code></pre>
<p>Access modifiers: <code>public</code> (anywhere), <code>private</code> (class only), <code>protected</code> (class + subclasses).</p>`,
          challenge: {
            description: 'Create BankAccount class with private balance, constructor(initial), deposit(amount), getBalance(). Create account with 1000, deposit 500, print balance.',
            starterCode: '// BankAccount class\n',
            expectedOutput: 'Balance: $1500',
            hints: ['private balance: number', 'deposit adds to balance', 'getBalance returns balance']
          },
          quiz: [{ question: 'What does parameter property shorthand do?', options: ['Declares parameter only', 'Creates property, parameter, and assignment in one', 'Makes parameter optional', 'Creates getter'], correct: 1 }]
        },
        {
          id: 'ts-2-11',
          title: 'Inheritance and Abstract Classes',
          type: 'lesson',
          theory: `<h2>Inheritance and Abstract Classes</h2>
<p>TypeScript supports class inheritance with <code>extends</code> and abstract classes that define contracts for subclasses.</p>
<h3>Inheritance</h3>
<pre><code>class Animal {
  constructor(public name: string) {}
  move(): string { return this.name + " is moving"; }
}
class Dog extends Animal {
  bark(): string { return this.name + " says Woof!"; }
}
let dog = new Dog("Rex");
dog.move(); // inherited
dog.bark(); // own method</code></pre>
<h3>Abstract Classes</h3>
<pre><code>abstract class Shape {
  abstract getArea(): number; // MUST implement
  describe(): string { // Shared implementation
    return "Area: " + this.getArea();
  }
}
class Circle extends Shape {
  constructor(private radius: number) { super(); }
  getArea(): number { return Math.PI * this.radius ** 2; }
}
// new Shape(); // Error! Cannot instantiate abstract</code></pre>
<h3>Protected Members</h3>
<pre><code>class Base {
  protected secret: string = "hidden";
}
class Child extends Base {
  reveal(): string { return this.secret; } // OK!
}</code></pre>
<p>Abstract classes are base classes that cannot be instantiated directly — they define a contract that subclasses must fulfill.</p>`,
          challenge: {
            description: 'Create abstract class Vehicle with abstract getFuelEfficiency(): number and describe() method. Create Car (30) and Truck (12) subclasses. Print both.',
            starterCode: '// Abstract Vehicle with subclasses\n',
            expectedOutput: 'Car: 30 km/l\nTruck: 12 km/l',
            hints: ['abstract class Vehicle { abstract getFuelEfficiency(): number; }', 'Subclass implements abstract methods', 'describe() calls getFuelEfficiency()']
          },
          quiz: [{ question: 'Can you instantiate an abstract class?', options: ['Yes with new', 'No, must extend first', 'Only with factory', 'Yes with defaults'], correct: 1 }]
        },
        {
          id: 'ts-2-12',
          title: 'Implementing Interfaces',
          type: 'lesson',
          theory: `<h2>Classes Implementing Interfaces</h2>
<p>Classes can implement interfaces using the <code>implements</code> keyword. This ensures the class adheres to a specific contract, providing all required properties and methods.</p>
<h3>Basic Implementation</h3>
<pre><code>interface Printable { print(): void; }
interface Serializable { serialize(): string; }

class Document implements Printable, Serializable {
  constructor(private content: string) {}
  print(): void { console.log(this.content); }
  serialize(): string { return JSON.stringify({ content: this.content }); }
}</code></pre>
<h3>Interface as Contract</h3>
<pre><code>interface Sortable&lt;T&gt; {
  items: T[];
  sort(): T[];
}
class NumberSorter implements Sortable&lt;number&gt; {
  items: number[];
  constructor(items: number[]) { this.items = items; }
  sort(): number[] { return [...this.items].sort((a, b) => a - b); }
}</code></pre>
<h3>implements vs extends</h3>
<ul>
<li><strong>extends:</strong> Inherits implementation from parent class (one only)</li>
<li><strong>implements:</strong> Must provide own implementation (multiple OK)</li>
</ul>
<h3>Multiple Interfaces</h3>
<p>A class can implement unlimited interfaces but extend only one class. This gives TypeScript a form of multiple inheritance for contracts.</p>`,
          challenge: {
            description: 'Create interface Logger with log(msg): void and getHistory(): string[]. Implement in ConsoleLogger. Log "Hello", "World", "Done", print history count.',
            starterCode: '// Logger interface and implementation\n',
            expectedOutput: '[LOG] Hello\n[LOG] World\n[LOG] Done\nHistory: 3 messages',
            hints: ['Store messages in private array', 'log() prints and stores', 'getHistory() returns the array']
          },
          quiz: [{ question: 'How many interfaces can a class implement?', options: ['Only one', 'Up to three', 'Unlimited', 'Two max'], correct: 2 }]
        },
        {
          id: 'ts-2-13',
          title: 'Modules and Exports',
          type: 'lesson',
          theory: `<h2>ES Modules in TypeScript</h2>
<p>TypeScript fully supports ES Module syntax for organizing code into separate files with explicit imports and exports for clear dependency management.</p>
<h3>Named Exports</h3>
<pre><code>// math.ts
export function add(a: number, b: number): number { return a + b; }
export function multiply(a: number, b: number): number { return a * b; }
export const PI: number = 3.14159;</code></pre>
<h3>Named Imports</h3>
<pre><code>import { add, multiply, PI } from './math';
console.log(add(2, 3)); // 5</code></pre>
<h3>Default Exports</h3>
<pre><code>// user.ts
export default class User {
  constructor(public name: string) {}
}
// app.ts
import User from './user';</code></pre>
<h3>Type-Only Imports</h3>
<pre><code>import type { User } from './user';
// Only imports the type — completely erased at compile time</code></pre>
<h3>Barrel Exports (index.ts)</h3>
<pre><code>export { add, multiply } from './math';
export { default as User } from './user';
export type { Config } from './config';</code></pre>
<p>Modules are file-based, tree-shakeable, and the modern standard. Each file is its own module with its own scope.</p>`,
          challenge: {
            description: 'Simulate modules: create MathModule object with add, subtract, multiply functions. Calculate (10+5) * (20-8) and print result.',
            starterCode: '// Simulated module with math functions\n',
            expectedOutput: '180',
            hints: ['Object with method functions', 'add(10,5) = 15, subtract(20,8) = 12', 'multiply(15, 12) = 180']
          },
          quiz: [{ question: 'What does import type do?', options: ['Imports at runtime', 'Imports only type, erased at compile', 'Imports as constant', 'Creates type alias'], correct: 1 }]
        },
        {
          id: 'ts-2-14',
          title: 'Namespaces',
          type: 'lesson',
          theory: `<h2>Namespaces</h2>
<p>Namespaces group related code under a single name to avoid naming conflicts. They are TypeScript-specific and less common in modern module-based code.</p>
<h3>Declaring a Namespace</h3>
<pre><code>namespace Validation {
  export interface Validator {
    validate(value: string): boolean;
  }
  export class EmailValidator implements Validator {
    validate(value: string): boolean {
      return value.includes("@");
    }
  }
}</code></pre>
<h3>Using Namespaces</h3>
<pre><code>let validator = new Validation.EmailValidator();
console.log(validator.validate("test@example.com")); // true</code></pre>
<h3>Nested Namespaces</h3>
<pre><code>namespace App {
  export namespace Models {
    export interface User { name: string; }
  }
  export namespace Services {
    export function getUser(): Models.User { return { name: "Alice" }; }
  }
}</code></pre>
<h3>Namespaces vs Modules</h3>
<ul>
<li><strong>Modules (recommended):</strong> File-based, ES standard, tree-shakeable</li>
<li><strong>Namespaces:</strong> Can span files, no file dependency, legacy pattern</li>
</ul>
<p>Modern TypeScript projects should prefer ES Modules. Namespaces remain useful for declaration files and legacy codebases.</p>`,
          challenge: {
            description: 'Create namespace StringUtils with capitalize, reverse, and countVowels functions. Test all three with "typescript".',
            starterCode: '// StringUtils namespace\n',
            expectedOutput: 'Typescript\ntpircsepyt\n3',
            hints: ['namespace StringUtils { export function ... }', 'capitalize: first char upper + rest lower', 'Access: StringUtils.functionName()']
          },
          quiz: [{ question: 'Should new projects use namespaces or modules?', options: ['Namespaces — newer', 'Modules — modern standard', 'Both equally', 'Neither'], correct: 1 }]
        },
        {
          id: 'ts-2-15',
          title: 'Declaration Files',
          type: 'lesson',
          theory: `<h2>Declaration Files (.d.ts)</h2>
<p>Declaration files provide type information for JavaScript libraries that lack built-in TypeScript types. They describe the shape of code without implementing it.</p>
<h3>What Are .d.ts Files?</h3>
<p>They contain only type declarations — no implementation:</p>
<pre><code>// lodash.d.ts
declare function chunk&lt;T&gt;(array: T[], size: number): T[][];
declare function compact&lt;T&gt;(array: T[]): T[];
declare function uniq&lt;T&gt;(array: T[]): T[];</code></pre>
<h3>DefinitelyTyped (@types)</h3>
<p>Community-maintained type definitions for thousands of packages:</p>
<pre><code>npm install @types/lodash
npm install @types/express
npm install @types/node</code></pre>
<h3>Ambient Declarations</h3>
<pre><code>// globals.d.ts
declare const API_URL: string;
declare function fetchData(url: string): Promise&lt;any&gt;;</code></pre>
<h3>Module Declarations</h3>
<pre><code>declare module 'my-lib' {
  export function doSomething(x: string): number;
  export interface Config { verbose: boolean; }
}</code></pre>
<p>Declaration files bridge untyped JavaScript into the typed TypeScript world, enabling autocomplete, error checking, and documentation for third-party code.</p>`,
          challenge: {
            description: 'Simulate using declared library: create myLib object with parse(str) and format(obj) methods. Parse a JSON string, format it back, print a property.',
            starterCode: '// Simulated declared library\n',
            expectedOutput: 'Alice is 25 years old',
            hints: ['parse wraps JSON.parse', 'Parse {"name":"Alice","age":25}', 'Access .name and .age from result']
          },
          quiz: [{ question: 'What do .d.ts files contain?', options: ['Full implementation', 'Only type declarations', 'Only comments', 'Test cases'], correct: 1 }]
        },
        {
          id: 'ts-2-16',
          title: 'typeof Type Guards',
          type: 'lesson',
          theory: `<h2>typeof Type Guards</h2>
<p>Type guards narrow a union type to a specific type within a conditional block. The <code>typeof</code> operator is the simplest type guard for primitives.</p>
<h3>Basic typeof Guard</h3>
<pre><code>function process(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase(); // TS knows: string here
  }
  return value.toFixed(2); // TS knows: number here
}</code></pre>
<h3>Multiple Guards</h3>
<pre><code>function describe(value: string | number | boolean | undefined): string {
  if (typeof value === "string") return "String: " + value;
  if (typeof value === "number") return "Number: " + value;
  if (typeof value === "boolean") return "Boolean: " + value;
  return "undefined";
}</code></pre>
<h3>Guard in Expressions</h3>
<pre><code>function double(x: string | number): string | number {
  return typeof x === "string" ? x + x : x * 2;
}
double("hi"); // "hihi"
double(5);    // 10</code></pre>
<h3>Limitations</h3>
<p>typeof only works for primitives. It returns "object" for arrays, null, and objects. For class instances, use instanceof. For interface shapes, use custom type guards.</p>`,
          challenge: {
            description: 'Write processValue(val: string | number | boolean) that returns: strings reversed, numbers squared, booleans as 1/0. Test all three.',
            starterCode: '// processValue with typeof guards\n',
            expectedOutput: 'olleh\n25\n1',
            hints: ['typeof val === "string" for strings', 'Split, reverse, join for string reversal', 'Boolean to number: val ? 1 : 0']
          },
          quiz: [{ question: 'typeof only works for what?', options: ['Classes', 'Interfaces', 'Primitives', 'Arrays'], correct: 2 }]
        },
        {
          id: 'ts-2-17',
          title: 'instanceof Type Guards',
          type: 'lesson',
          theory: `<h2>instanceof Type Guards</h2>
<p>The <code>instanceof</code> operator narrows types based on their constructor/class. Use it when typeof is not specific enough — for objects and class instances.</p>
<h3>Basic instanceof</h3>
<pre><code>class Dog { bark(): string { return "Woof!"; } }
class Cat { meow(): string { return "Meow!"; } }

function makeSound(animal: Dog | Cat): string {
  if (animal instanceof Dog) {
    return animal.bark(); // Narrowed to Dog
  }
  return animal.meow(); // Narrowed to Cat
}</code></pre>
<h3>With Error Types</h3>
<pre><code>function handleError(err: Error | TypeError | RangeError): string {
  if (err instanceof TypeError) return "Type: " + err.message;
  if (err instanceof RangeError) return "Range: " + err.message;
  return "Error: " + err.message;
}</code></pre>
<h3>With Built-in Types</h3>
<pre><code>function process(data: Date | RegExp | number[]): string {
  if (data instanceof Date) return data.toISOString();
  if (data instanceof RegExp) return data.source;
  return data.join(", ");
}</code></pre>
<h3>Limitation</h3>
<p>instanceof only works with classes/constructors, NOT interfaces or type aliases. Interfaces do not exist at runtime — they are erased during compilation.</p>`,
          challenge: {
            description: 'Create Circle(radius) and Rectangle(w,h) classes with area(). Write describeShape using instanceof. Test both.',
            starterCode: '// Classes and instanceof guard\n',
            expectedOutput: 'Circle with area: 78.54\nRectangle with area: 24',
            hints: ['Each class needs area() method', 'if (shape instanceof Circle)', 'toFixed(2) for circle']
          },
          quiz: [{ question: 'Can instanceof be used with interfaces?', options: ['Yes always', 'No — interfaces do not exist at runtime', 'Only abstract ones', 'Only in strict mode'], correct: 1 }]
        },
        {
          id: 'ts-2-18',
          title: 'Custom Type Guards',
          type: 'lesson',
          theory: `<h2>Custom Type Guards</h2>
<p>Custom type guards are functions that return a <strong>type predicate</strong>, telling TypeScript that a value is a specific type when the function returns true.</p>
<h3>Type Predicate Syntax</h3>
<pre><code>function isString(value: unknown): value is string {
  return typeof value === "string";
}
let x: unknown = "hello";
if (isString(x)) {
  console.log(x.toUpperCase()); // TS knows x is string!
}</code></pre>
<h3>Object Type Guards</h3>
<pre><code>interface Fish { swim(): void; }
interface Bird { fly(): void; }

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird): void {
  if (isFish(pet)) { pet.swim(); }
  else { pet.fly(); }
}</code></pre>
<h3>Validating External Data</h3>
<pre><code>interface User { name: string; age: number; }
function isUser(obj: any): obj is User {
  return typeof obj === "object" &&
    typeof obj.name === "string" &&
    typeof obj.age === "number";
}</code></pre>
<h3>Array Guards</h3>
<pre><code>function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every(i => typeof i === "string");
}</code></pre>`,
          challenge: {
            description: 'Create Admin {role:"admin", permissions:string[]} and Guest {role:"guest", visits:number}. Write isAdmin type guard. Handle both types.',
            starterCode: '// Type guard for Admin vs Guest\n',
            expectedOutput: 'Admin with 3 permissions\nGuest with 5 visits',
            hints: ['function isAdmin(user): user is Admin', 'Check role property', 'Access type-specific properties after guard']
          },
          quiz: [{ question: 'What is the return type of a custom type guard?', options: ['boolean', 'param is Type', 'Type | false', 'typeof param'], correct: 1 }]
        },
        {
          id: 'ts-2-19',
          title: 'Conditional Types',
          type: 'lesson',
          theory: `<h2>Conditional Types</h2>
<p>Conditional types select one of two types based on a condition, using syntax similar to the ternary operator: <code>T extends U ? X : Y</code>.</p>
<h3>Basic Syntax</h3>
<pre><code>type IsString&lt;T&gt; = T extends string ? "yes" : "no";
type A = IsString&lt;string&gt;;  // "yes"
type B = IsString&lt;number&gt;;  // "no"</code></pre>
<h3>Practical Examples</h3>
<pre><code>type NonNullable&lt;T&gt; = T extends null | undefined ? never : T;
type Result = NonNullable&lt;string | null&gt;; // string

type Flatten&lt;T&gt; = T extends Array&lt;infer U&gt; ? U : T;
type A = Flatten&lt;number[]&gt;;  // number
type B = Flatten&lt;string&gt;;    // string</code></pre>
<h3>The infer Keyword</h3>
<pre><code>type ReturnType&lt;T&gt; = T extends (...args: any[]) => infer R ? R : never;
type A = ReturnType&lt;() => string&gt;;  // string
type B = ReturnType&lt;() => number&gt;;  // number</code></pre>
<h3>Distributive Conditional Types</h3>
<pre><code>type ToArray&lt;T&gt; = T extends any ? T[] : never;
type Result = ToArray&lt;string | number&gt;; // string[] | number[]</code></pre>
<p>Conditional types power many advanced patterns: type-level programming, inference utilities, and complex type transformations.</p>`,
          challenge: {
            description: 'Create type Unwrap<T> that extracts the element type from arrays (T extends Array<infer U> ? U : T). Demonstrate with number[] and string.',
            starterCode: '// Conditional type demonstration\n// Show unwrapped types\n',
            expectedOutput: 'number[] unwraps to: number\nstring stays: string',
            hints: ['Use type assertion/demonstration approach', 'Show concept with runtime values', 'Create arrays and extract elements to demonstrate']
          },
          quiz: [{ question: 'What does infer do in conditional types?', options: ['Infers variable types', 'Extracts a type from the condition', 'Creates an inference rule', 'Defers type checking'], correct: 1 }]
        },
        {
          id: 'ts-2-20',
          title: 'Advanced Type Patterns',
          type: 'lesson',
          theory: `<h2>Advanced Type Patterns</h2>
<p>Let us combine everything learned into powerful real-world patterns used in production TypeScript applications.</p>
<h3>Builder Pattern with Types</h3>
<pre><code>class QueryBuilder&lt;T&gt; {
  private filters: Partial&lt;T&gt; = {};
  where&lt;K extends keyof T&gt;(key: K, value: T[K]): this {
    this.filters[key] = value;
    return this;
  }
  build(): Partial&lt;T&gt; { return this.filters; }
}</code></pre>
<h3>Event System</h3>
<pre><code>type EventMap = {
  click: { x: number; y: number };
  keypress: { key: string };
  resize: { width: number; height: number };
};
function on&lt;K extends keyof EventMap&gt;(event: K, handler: (data: EventMap[K]) => void): void {
  // Type-safe event handling
}</code></pre>
<h3>Readonly Deep</h3>
<pre><code>type DeepReadonly&lt;T&gt; = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly&lt;T[K]&gt; : T[K];
};</code></pre>
<h3>Template Literal Types</h3>
<pre><code>type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type Endpoint = "/users" | "/posts";
type Route = \$\{HTTPMethod} \$\{Endpoint}\;
// "GET /users" | "GET /posts" | "POST /users" | ...</code></pre>
<p>These patterns demonstrate the full power of TypeScript's type system — creating APIs that are impossible to misuse.</p>`,
          challenge: {
            description: 'Create a type-safe event emitter: EventMap type, on() function with generic key constraint, emit() function. Register a "login" event handler and emit it.',
            starterCode: '// Type-safe event system\n',
            expectedOutput: 'Event login: user Alice logged in',
            hints: ['Define EventMap with event name keys', 'on<K extends keyof EventMap> for type safety', 'Store handlers and call on emit']
          },
          quiz: [{ question: 'What does K extends keyof T constrain K to?', options: ['Any string', 'Only the property names of T', 'Number indices', 'Method names only'], correct: 1 }]
        }
      ]
    }
  ]
};

export default course;
