const javascriptCourse = {
  id: 'javascript',
  title: 'Learn JavaScript',
  icon: '⚡',
  description: 'A free, interactive JavaScript course. Master the language of the web from basics to advanced concepts.',
  totalLessons: 120,
  sections: [
    {
      id: 'fundamentals',
      title: 'Fundamentals',
      description: 'Learn the building blocks of JavaScript — variables, types, operators, control flow, functions, arrays, and objects.',
      chapters: [
        {
          id: 'introduction',
          title: 'Introduction',
          lessons: [
            {
              id: 'js_intro_1',
              title: 'What is JavaScript?',
              type: 'challenge',
              theory: `<h2>What is JavaScript?</h2>
<p>JavaScript is the programming language of the web. Every modern website you visit — from Google to YouTube to Amazon — uses JavaScript to create interactive, dynamic experiences.</p>

<h3>Why Learn JavaScript?</h3>
<ul>
  <li><strong>Universal:</strong> It runs in every web browser, on servers (Node.js), mobile apps, and even desktop applications.</li>
  <li><strong>Beginner-friendly:</strong> You can see results instantly in your browser.</li>
  <li><strong>In-demand:</strong> JavaScript developers are among the most sought-after in the industry.</li>
</ul>

<h3>Your First JavaScript Code</h3>
<p>The most basic thing you can do in JavaScript is output text using <code>console.log()</code>. This function prints a message that you can see:</p>

<pre><code>console.log("Hello, World!");</code></pre>

<p>Let's break this down:</p>
<ul>
  <li><code>console</code> — a built-in object that provides access to the debugging console</li>
  <li><code>.log()</code> — a method (function) that prints whatever you pass to it</li>
  <li><code>"Hello, World!"</code> — a string (text) enclosed in quotes</li>
  <li><code>;</code> — a semicolon that marks the end of a statement (optional but recommended)</li>
</ul>

<p>You can print numbers, text, calculations, and more:</p>
<pre><code>console.log(42);
console.log("JavaScript is fun!");
console.log(2 + 2);</code></pre>
<p>This would output: <code>42</code>, <code>JavaScript is fun!</code>, and <code>4</code> on separate lines.</p>`,
              challenge: {
                description: 'Use console.log() to print "Hello, JavaScript!" to the console.',
                starterCode: '// Print "Hello, JavaScript!" below\n',
                expectedOutput: 'Hello, JavaScript!',
                hints: [
                  'Use console.log() with a string inside the parentheses',
                  'Make sure to use quotes around the text',
                  'console.log("Hello, JavaScript!");'
                ]
              },
              quiz: [
                {
                  question: 'What does console.log() do in JavaScript?',
                  options: ['Saves data to a file', 'Prints output to the console', 'Creates a new variable', 'Opens a web page'],
                  correct: 1
                },
                {
                  question: 'Which of these is a valid console.log statement?',
                  options: ['console.log Hello', 'console.log("Hello");', 'print("Hello");', 'log.console("Hello");'],
                  correct: 1
                },
                {
                  question: 'What will console.log(5 + 3) output?',
                  options: ['5 + 3', '53', '8', 'undefined'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_intro_2',
              title: 'Comments and Statements',
              type: 'challenge',
              theory: `<h2>Comments and Statements</h2>
<p>As you write code, you'll want to leave notes for yourself and others. JavaScript provides two types of comments:</p>

<h3>Single-line Comments</h3>
<p>Use <code>//</code> to comment out the rest of a line:</p>
<pre><code>// This is a single-line comment
console.log("This runs"); // This comment is after code</code></pre>

<h3>Multi-line Comments</h3>
<p>Use <code>/* */</code> to comment multiple lines:</p>
<pre><code>/* This is a
   multi-line comment.
   It can span many lines. */
console.log("Hello");</code></pre>

<h3>Statements</h3>
<p>A statement is a single instruction that JavaScript executes. Each statement typically ends with a semicolon <code>;</code>:</p>
<pre><code>console.log("First statement");
console.log("Second statement");
console.log("Third statement");</code></pre>

<p>JavaScript reads and executes statements from top to bottom, one at a time. This is called <strong>sequential execution</strong>.</p>

<h3>Why Comments Matter</h3>
<ul>
  <li>They help you remember what your code does when you return to it later</li>
  <li>They help other developers understand your thinking</li>
  <li>You can temporarily disable code by commenting it out</li>
</ul>

<p>Comments are completely ignored by JavaScript — they exist only for humans reading the code.</p>`,
              challenge: {
                description: 'Write a comment that says "My first program" and then use console.log to print "I am learning JS".',
                starterCode: '// Write your comment and console.log below\n',
                expectedOutput: 'I am learning JS',
                hints: [
                  'Start with // to write a comment',
                  'Then on the next line use console.log()',
                  '// My first program\nconsole.log("I am learning JS");'
                ]
              },
              quiz: [
                {
                  question: 'Which symbol starts a single-line comment?',
                  options: ['#', '//', '<!--', '**'],
                  correct: 1
                },
                {
                  question: 'What happens when JavaScript encounters a comment?',
                  options: ['It throws an error', 'It prints the comment', 'It ignores it completely', 'It saves it to memory'],
                  correct: 2
                },
                {
                  question: 'How do you write a multi-line comment?',
                  options: ['// line1 // line2', '/* comment */', '# comment #', '<!-- comment -->'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_intro_3',
              title: 'How JavaScript Executes',
              type: 'challenge',
              theory: `<h2>How JavaScript Executes</h2>
<p>Understanding how JavaScript runs your code is crucial for writing correct programs.</p>

<h3>Top-to-Bottom Execution</h3>
<p>JavaScript executes code line by line, from top to bottom:</p>
<pre><code>console.log("Line 1");
console.log("Line 2");
console.log("Line 3");</code></pre>
<p>Output:</p>
<pre><code>Line 1
Line 2
Line 3</code></pre>

<h3>Expressions vs Statements</h3>
<p>An <strong>expression</strong> produces a value:</p>
<pre><code>5 + 3       // expression that produces 8
"Hi"        // expression that produces "Hi"
2 * 10      // expression that produces 20</code></pre>

<p>A <strong>statement</strong> performs an action:</p>
<pre><code>console.log(5 + 3);   // statement that prints 8
let x = 10;           // statement that creates a variable</code></pre>

<h3>Case Sensitivity</h3>
<p>JavaScript is case-sensitive. <code>console.log</code> is NOT the same as <code>Console.Log</code> or <code>CONSOLE.LOG</code>:</p>
<pre><code>console.log("Works!");   // ✓ Correct
Console.Log("Breaks!");  // ✗ Error!</code></pre>

<h3>Whitespace</h3>
<p>Extra spaces and blank lines are generally ignored, but they make code readable:</p>
<pre><code>console.log( "Hello" );   // Works fine
console.log("Hello");     // Also works fine</code></pre>

<p>Good formatting makes code easier to read and debug. As you write more code, readability becomes increasingly important.</p>`,
              challenge: {
                description: 'Print three lines in order: "First", "Second", "Third" — each on its own line using separate console.log statements.',
                starterCode: '// Print First, Second, Third on separate lines\n',
                expectedOutput: 'First\nSecond\nThird',
                hints: [
                  'Use three separate console.log() calls',
                  'Each console.log prints on a new line automatically',
                  'console.log("First");\nconsole.log("Second");\nconsole.log("Third");'
                ]
              },
              quiz: [
                {
                  question: 'In what order does JavaScript execute code?',
                  options: ['Bottom to top', 'Random order', 'Top to bottom', 'Alphabetical order'],
                  correct: 2
                },
                {
                  question: 'Is JavaScript case-sensitive?',
                  options: ['No, it ignores case', 'Yes, case matters', 'Only for variables', 'Only for functions'],
                  correct: 1
                },
                {
                  question: 'What is an expression in JavaScript?',
                  options: ['A comment in code', 'Something that produces a value', 'A function definition', 'An error message'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'variables-and-types',
          title: 'Variables & Types',
          lessons: [
            {
              id: 'js_vars_1',
              title: 'Declaring Variables with let',
              type: 'challenge',
              theory: `<h2>Declaring Variables with let</h2>
<p>A <strong>variable</strong> is like a labeled box that stores a value. You can put data in it, read it later, or change it.</p>

<h3>The let Keyword</h3>
<p>Use <code>let</code> to create (declare) a variable:</p>
<pre><code>let age = 25;
console.log(age); // 25</code></pre>

<p>Here's what happens:</p>
<ul>
  <li><code>let</code> — tells JavaScript you're creating a new variable</li>
  <li><code>age</code> — the name (identifier) of the variable</li>
  <li><code>=</code> — the assignment operator (puts a value into the variable)</li>
  <li><code>25</code> — the value being stored</li>
</ul>

<h3>Changing a Variable's Value</h3>
<p>With <code>let</code>, you can reassign (change) the value later:</p>
<pre><code>let score = 0;
console.log(score); // 0
score = 10;
console.log(score); // 10
score = score + 5;
console.log(score); // 15</code></pre>

<h3>Variable Naming Rules</h3>
<ul>
  <li>Must start with a letter, underscore (_), or dollar sign ($)</li>
  <li>Can contain letters, numbers, underscores, dollar signs</li>
  <li>Cannot use reserved words (like <code>let</code>, <code>if</code>, <code>return</code>)</li>
  <li>Are case-sensitive (<code>age</code> ≠ <code>Age</code>)</li>
</ul>

<h3>Good Naming Conventions</h3>
<pre><code>let firstName = "John";    // camelCase (recommended)
let total_price = 99.99;   // snake_case (less common in JS)
let MAX_SIZE = 100;        // UPPER_CASE for constants</code></pre>`,
              challenge: {
                description: 'Create a variable called "greeting" with the value "Hello, World!" and print it using console.log.',
                starterCode: '// Declare your variable and print it\n',
                expectedOutput: 'Hello, World!',
                hints: [
                  'Use let to declare the variable',
                  'Assign the string "Hello, World!" to it',
                  'let greeting = "Hello, World!";\nconsole.log(greeting);'
                ]
              },
              quiz: [
                {
                  question: 'Which keyword is used to declare a reassignable variable?',
                  options: ['var', 'let', 'const', 'define'],
                  correct: 1
                },
                {
                  question: 'Which is a valid variable name?',
                  options: ['2name', 'my-var', '_count', 'let'],
                  correct: 2
                },
                {
                  question: 'What does the = operator do in "let x = 5"?',
                  options: ['Checks equality', 'Assigns a value', 'Declares a type', 'Creates a function'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_vars_2',
              title: 'Constants with const',
              type: 'challenge',
              theory: `<h2>Constants with const</h2>
<p>Sometimes you want a variable whose value should <strong>never change</strong>. That's where <code>const</code> comes in.</p>

<h3>Declaring Constants</h3>
<pre><code>const PI = 3.14159;
console.log(PI); // 3.14159</code></pre>

<p>If you try to reassign a <code>const</code>, JavaScript throws an error:</p>
<pre><code>const PI = 3.14159;
PI = 3.14; // ✗ TypeError: Assignment to constant variable!</code></pre>

<h3>When to Use const vs let</h3>
<ul>
  <li>Use <code>const</code> by default — it prevents accidental reassignment</li>
  <li>Use <code>let</code> only when you know the value will change</li>
</ul>

<h3>const Must Be Initialized</h3>
<p>Unlike <code>let</code>, you must give <code>const</code> a value when you declare it:</p>
<pre><code>let name;          // ✓ OK (value is undefined)
const age;         // ✗ SyntaxError! Must assign a value</code></pre>

<h3>const with Objects and Arrays</h3>
<p>Important: <code>const</code> prevents reassignment of the variable, but the contents of objects and arrays CAN still change:</p>
<pre><code>const colors = ["red", "blue"];
colors.push("green"); // ✓ OK — modifying contents
console.log(colors);  // ["red", "blue", "green"]

colors = ["yellow"];  // ✗ Error — can't reassign</code></pre>

<p>Think of <code>const</code> as: "this variable will always point to the same thing."</p>`,
              challenge: {
                description: 'Create a constant called APP_NAME with the value "Abhyas" and print it. Then create a let variable called version with value 1 and print it.',
                starterCode: '// Create a const and a let variable, print both\n',
                expectedOutput: 'Abhyas\n1',
                hints: [
                  'Use const for APP_NAME and let for version',
                  'Print each with its own console.log()',
                  'const APP_NAME = "Abhyas";\nconsole.log(APP_NAME);\nlet version = 1;\nconsole.log(version);'
                ]
              },
              quiz: [
                {
                  question: 'What happens if you try to reassign a const variable?',
                  options: ['It works fine', 'It gives a TypeError', 'It creates a new variable', 'It becomes undefined'],
                  correct: 1
                },
                {
                  question: 'Which declaration requires an initial value?',
                  options: ['let', 'var', 'const', 'All of them'],
                  correct: 2
                },
                {
                  question: 'When should you prefer const over let?',
                  options: ['Never', 'When the value will change', 'When the value should not be reassigned', 'Only for numbers'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_vars_3',
              title: 'Number Type',
              type: 'challenge',
              theory: `<h2>Number Type</h2>
<p>JavaScript has a single <strong>number</strong> type that handles both integers and decimals (floating-point numbers).</p>

<h3>Integer and Decimal Numbers</h3>
<pre><code>let age = 25;          // integer
let price = 9.99;      // decimal (float)
let negative = -10;    // negative number
let big = 1000000;     // one million</code></pre>

<h3>Arithmetic Operations</h3>
<pre><code>console.log(10 + 3);   // 13 (addition)
console.log(10 - 3);   // 7 (subtraction)
console.log(10 * 3);   // 30 (multiplication)
console.log(10 / 3);   // 3.3333... (division)
console.log(10 % 3);   // 1 (remainder/modulo)
console.log(10 ** 2);  // 100 (exponentiation)</code></pre>

<h3>Special Number Values</h3>
<pre><code>console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log("abc" * 2);   // NaN (Not a Number)</code></pre>

<h3>The typeof Operator</h3>
<p>You can check the type of any value:</p>
<pre><code>console.log(typeof 42);      // "number"
console.log(typeof 3.14);    // "number"
console.log(typeof NaN);     // "number" (surprisingly!)</code></pre>

<h3>Number Precision</h3>
<p>Be aware of floating-point quirks:</p>
<pre><code>console.log(0.1 + 0.2);  // 0.30000000000000004 (not exactly 0.3!)
</code></pre>
<p>This is a known limitation of how computers store decimal numbers, not a bug in JavaScript.</p>`,
              challenge: {
                description: 'Create a variable called "total" that stores the result of 15 * 4 + 10. Print the total.',
                starterCode: '// Calculate 15 * 4 + 10 and store in total\n',
                expectedOutput: '70',
                hints: [
                  'Use let to create the variable',
                  'JavaScript follows math order of operations (multiplication before addition)',
                  'let total = 15 * 4 + 10;\nconsole.log(total);'
                ]
              },
              quiz: [
                {
                  question: 'What does the % operator do?',
                  options: ['Calculates percentage', 'Returns the remainder', 'Divides numbers', 'Multiplies by 100'],
                  correct: 1
                },
                {
                  question: 'What is typeof 3.14?',
                  options: ['"float"', '"decimal"', '"number"', '"double"'],
                  correct: 2
                },
                {
                  question: 'What does 10 ** 2 equal?',
                  options: ['20', '12', '100', '1000'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_vars_4',
              title: 'String Type',
              type: 'challenge',
              theory: `<h2>String Type</h2>
<p>A <strong>string</strong> is a sequence of characters used to represent text. Strings are one of the most common data types you'll work with.</p>

<h3>Creating Strings</h3>
<p>You can use single quotes, double quotes, or backticks:</p>
<pre><code>let single = 'Hello';
let double = "World";
let backtick = \`Template\`;
console.log(single);  // Hello
console.log(double);  // World</code></pre>

<h3>String Length</h3>
<pre><code>let name = "JavaScript";
console.log(name.length); // 10</code></pre>

<h3>Template Literals (Backticks)</h3>
<p>Template literals let you embed expressions inside strings using <code>\${}</code>:</p>
<pre><code>let name = "Alice";
let age = 30;
let message = \`My name is \${name} and I am \${age} years old.\`;
console.log(message);
// My name is Alice and I am 30 years old.</code></pre>

<h3>String Concatenation</h3>
<p>You can join strings with the <code>+</code> operator:</p>
<pre><code>let first = "Hello";
let second = "World";
let result = first + " " + second;
console.log(result); // Hello World</code></pre>

<h3>Type Coercion with Strings</h3>
<p>When you use <code>+</code> with a string and a number, JavaScript converts the number to a string:</p>
<pre><code>console.log("Age: " + 25);   // "Age: 25"
console.log("3" + 4);        // "34" (not 7!)</code></pre>`,
              challenge: {
                description: 'Create a variable "name" with your name (use "Coder"), and use a template literal to print "Hello, Coder! Welcome aboard."',
                starterCode: '// Create name variable and use template literal\n',
                expectedOutput: 'Hello, Coder! Welcome aboard.',
                hints: [
                  'Create let name = "Coder"',
                  'Use backticks with ${name} inside the string',
                  'let name = "Coder";\nconsole.log(`Hello, ${name}! Welcome aboard.`);'
                ]
              },
              quiz: [
                {
                  question: 'Which of these is NOT a valid way to create a string?',
                  options: ["'single'", '"double"', '`backtick`', '/slash/'],
                  correct: 3
                },
                {
                  question: 'What does "Hello" + " " + "World" produce?',
                  options: ['HelloWorld', 'Hello World', 'Hello + World', 'Error'],
                  correct: 1
                },
                {
                  question: 'What is "5" + 3 in JavaScript?',
                  options: ['8', '"53"', '53', 'Error'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_vars_5',
              title: 'Boolean and Null/Undefined',
              type: 'challenge',
              theory: `<h2>Boolean and Null/Undefined</h2>

<h3>Booleans</h3>
<p>A boolean represents one of two values: <code>true</code> or <code>false</code>. They're essential for making decisions in code:</p>
<pre><code>let isLoggedIn = true;
let hasPermission = false;
console.log(isLoggedIn);     // true
console.log(typeof true);    // "boolean"</code></pre>

<h3>Comparison Operators Return Booleans</h3>
<pre><code>console.log(5 > 3);    // true
console.log(10 < 2);   // false
console.log(5 === 5);  // true
console.log(5 === "5"); // false (strict equality)</code></pre>

<h3>Undefined</h3>
<p><code>undefined</code> means a variable has been declared but not assigned a value:</p>
<pre><code>let x;
console.log(x);        // undefined
console.log(typeof x); // "undefined"</code></pre>

<h3>Null</h3>
<p><code>null</code> is an intentional assignment meaning "no value" or "empty":</p>
<pre><code>let selectedUser = null;  // explicitly set to nothing
console.log(selectedUser);        // null
console.log(typeof null);         // "object" (this is a known JS quirk)</code></pre>

<h3>Key Difference</h3>
<ul>
  <li><code>undefined</code> = "hasn't been given a value yet" (JavaScript sets this)</li>
  <li><code>null</code> = "intentionally has no value" (you set this)</li>
</ul>

<pre><code>let a;             // undefined — not yet assigned
let b = null;      // null — deliberately empty
console.log(a);    // undefined
console.log(b);    // null</code></pre>`,
              challenge: {
                description: 'Create a boolean variable "isReady" set to true, and a variable "data" set to null. Print both values.',
                starterCode: '// Create isReady (true) and data (null), print both\n',
                expectedOutput: 'true\nnull',
                hints: [
                  'Use let isReady = true and let data = null',
                  'Print each with console.log()',
                  'let isReady = true;\nlet data = null;\nconsole.log(isReady);\nconsole.log(data);'
                ]
              },
              quiz: [
                {
                  question: 'What are the two boolean values?',
                  options: ['yes and no', '1 and 0', 'true and false', 'on and off'],
                  correct: 2
                },
                {
                  question: 'What is the value of a declared but unassigned variable?',
                  options: ['null', '0', 'undefined', 'empty'],
                  correct: 2
                },
                {
                  question: 'What does null represent?',
                  options: ['An error occurred', 'Intentional absence of value', 'The number zero', 'An empty string'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_vars_6',
              title: 'Type Conversion',
              type: 'mastery',
              theory: `<h2>Type Conversion</h2>
<p>JavaScript can convert values between types, either automatically (coercion) or manually (explicit conversion).</p>

<h3>Explicit Conversion to String</h3>
<pre><code>let num = 42;
let str = String(num);
console.log(str);         // "42"
console.log(typeof str);  // "string"</code></pre>

<h3>Explicit Conversion to Number</h3>
<pre><code>let str = "123";
let num = Number(str);
console.log(num);         // 123
console.log(typeof num);  // "number"

console.log(Number("abc"));   // NaN
console.log(Number(true));    // 1
console.log(Number(false));   // 0
console.log(Number(""));      // 0</code></pre>

<h3>Explicit Conversion to Boolean</h3>
<p>Every value in JavaScript is "truthy" or "falsy":</p>
<pre><code>// Falsy values (convert to false):
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// Truthy values (convert to true):
console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true</code></pre>

<h3>Implicit Coercion (Automatic)</h3>
<pre><code>console.log("5" - 2);    // 3 (string converted to number)
console.log("5" + 2);    // "52" (number converted to string)
console.log(true + 1);   // 2 (true becomes 1)</code></pre>

<p>The <code>+</code> operator prefers strings, while <code>-</code>, <code>*</code>, <code>/</code> prefer numbers.</p>`,
              challenge: {
                description: 'Convert the string "50" to a number, add 25 to it, and print the result.',
                starterCode: 'let str = "50";\n// Convert to number, add 25, print result\n',
                expectedOutput: '75',
                hints: [
                  'Use Number() to convert the string',
                  'Store the result of Number(str) + 25',
                  'let str = "50";\nlet result = Number(str) + 25;\nconsole.log(result);'
                ]
              },
              quiz: [
                {
                  question: 'What does Number("hello") return?',
                  options: ['0', 'null', 'undefined', 'NaN'],
                  correct: 3
                },
                {
                  question: 'What is Boolean(0)?',
                  options: ['true', 'false', '0', 'null'],
                  correct: 1
                },
                {
                  question: 'What does "10" - 5 evaluate to?',
                  options: ['"105"', '"5"', '5', 'NaN'],
                  correct: 2
                },
                {
                  question: 'Which of these is a falsy value?',
                  options: ['"0"', '[]', '""', '{}'],
                  correct: 2
                }
              ]
            }
          ]
        },
        {
          id: 'operators',
          title: 'Operators',
          lessons: [
            {
              id: 'js_ops_1',
              title: 'Arithmetic Operators',
              type: 'challenge',
              theory: `<h2>Arithmetic Operators</h2>
<p>Arithmetic operators perform mathematical calculations on numbers.</p>

<h3>Basic Operators</h3>
<table>
  <tr><th>Operator</th><th>Name</th><th>Example</th><th>Result</th></tr>
  <tr><td>+</td><td>Addition</td><td>5 + 3</td><td>8</td></tr>
  <tr><td>-</td><td>Subtraction</td><td>10 - 4</td><td>6</td></tr>
  <tr><td>*</td><td>Multiplication</td><td>3 * 7</td><td>21</td></tr>
  <tr><td>/</td><td>Division</td><td>20 / 4</td><td>5</td></tr>
  <tr><td>%</td><td>Modulo (remainder)</td><td>17 % 5</td><td>2</td></tr>
  <tr><td>**</td><td>Exponentiation</td><td>2 ** 3</td><td>8</td></tr>
</table>

<h3>Order of Operations</h3>
<p>JavaScript follows standard math precedence (PEMDAS):</p>
<pre><code>console.log(2 + 3 * 4);     // 14 (not 20)
console.log((2 + 3) * 4);   // 20 (parentheses first)
console.log(10 - 2 ** 2);   // 6 (exponent first)</code></pre>

<h3>Increment and Decrement</h3>
<pre><code>let count = 5;
count++;          // count is now 6
console.log(count); // 6
count--;          // count is now 5
console.log(count); // 5</code></pre>

<h3>Assignment Operators</h3>
<pre><code>let x = 10;
x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x * 2 → 24
x /= 4;   // x = x / 4 → 6
console.log(x); // 6</code></pre>`,
              challenge: {
                description: 'Calculate the area of a rectangle with width 8 and height 5. Then calculate the remainder when 27 is divided by 4. Print both results.',
                starterCode: '// Calculate area (8 * 5) and remainder (27 % 4)\n',
                expectedOutput: '40\n3',
                hints: [
                  'Area = width * height',
                  'Use % for remainder',
                  'let area = 8 * 5;\nconsole.log(area);\nlet remainder = 27 % 4;\nconsole.log(remainder);'
                ]
              },
              quiz: [
                {
                  question: 'What is 17 % 5?',
                  options: ['3', '2', '3.4', '12'],
                  correct: 1
                },
                {
                  question: 'What does x += 3 mean?',
                  options: ['x = 3', 'x = x + 3', 'x + 3', 'x === 3'],
                  correct: 1
                },
                {
                  question: 'What is 2 + 3 * 4?',
                  options: ['20', '14', '24', '9'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_ops_2',
              title: 'Comparison Operators',
              type: 'challenge',
              theory: `<h2>Comparison Operators</h2>
<p>Comparison operators compare two values and return a boolean (<code>true</code> or <code>false</code>).</p>

<h3>Equality Operators</h3>
<pre><code>// Strict equality (=== ) — checks value AND type
console.log(5 === 5);     // true
console.log(5 === "5");   // false (different types)
console.log(true === 1);  // false

// Loose equality (==) — converts types before comparing
console.log(5 == "5");    // true (string converted to number)
console.log(true == 1);   // true
console.log(null == undefined); // true</code></pre>

<p><strong>Best Practice:</strong> Always use <code>===</code> and <code>!==</code> to avoid confusing type coercion.</p>

<h3>Inequality</h3>
<pre><code>console.log(5 !== 3);   // true (strict not equal)
console.log(5 != "5");  // false (loose: converts then compares)</code></pre>

<h3>Relational Operators</h3>
<pre><code>console.log(10 > 5);    // true
console.log(3 < 1);     // false
console.log(5 >= 5);    // true
console.log(4 <= 3);    // false</code></pre>

<h3>Comparing Strings</h3>
<p>Strings are compared character by character using Unicode values:</p>
<pre><code>console.log("apple" < "banana");  // true (a comes before b)
console.log("A" < "a");           // true (uppercase < lowercase)</code></pre>`,
              challenge: {
                description: 'Create variables a = 10 and b = "10". Print the result of a === b (strict) and then a == b (loose).',
                starterCode: '// Compare 10 and "10" with === and ==\n',
                expectedOutput: 'false\ntrue',
                hints: [
                  '=== checks type AND value, == only checks value',
                  'Print each comparison with console.log()',
                  'let a = 10;\nlet b = "10";\nconsole.log(a === b);\nconsole.log(a == b);'
                ]
              },
              quiz: [
                {
                  question: 'What does === check?',
                  options: ['Only value', 'Only type', 'Value and type', 'Assignment'],
                  correct: 2
                },
                {
                  question: 'What is 5 == "5"?',
                  options: ['true', 'false', 'undefined', 'Error'],
                  correct: 0
                },
                {
                  question: 'Which operator should you prefer for equality?',
                  options: ['==', '===', '=', '!='],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_ops_3',
              title: 'Logical Operators',
              type: 'challenge',
              theory: `<h2>Logical Operators</h2>
<p>Logical operators combine or modify boolean values. They're essential for complex conditions.</p>

<h3>AND (&&)</h3>
<p>Returns <code>true</code> only if BOTH sides are true:</p>
<pre><code>console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

let age = 25;
let hasID = true;
console.log(age >= 18 && hasID); // true</code></pre>

<h3>OR (||)</h3>
<p>Returns <code>true</code> if EITHER side is true:</p>
<pre><code>console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

let isAdmin = false;
let isModerator = true;
console.log(isAdmin || isModerator); // true</code></pre>

<h3>NOT (!)</h3>
<p>Flips a boolean to its opposite:</p>
<pre><code>console.log(!true);   // false
console.log(!false);  // true
console.log(!0);      // true (0 is falsy)
console.log(!"hello"); // false ("hello" is truthy)</code></pre>

<h3>Short-Circuit Evaluation</h3>
<p>JavaScript stops evaluating as soon as the result is determined:</p>
<pre><code>// && returns the first falsy value (or last value if all truthy)
console.log("hello" && "world"); // "world"
console.log(0 && "world");      // 0

// || returns the first truthy value (or last value if all falsy)
console.log("" || "default");   // "default"
console.log("hello" || "world"); // "hello"</code></pre>`,
              challenge: {
                description: 'Create variables: age = 20, hasLicense = true. Print whether both age >= 18 AND hasLicense is true. Then print the NOT of false.',
                starterCode: '// Check age >= 18 && hasLicense, and !false\n',
                expectedOutput: 'true\ntrue',
                hints: [
                  'Use && to combine the two conditions',
                  'Use ! to negate false',
                  'let age = 20;\nlet hasLicense = true;\nconsole.log(age >= 18 && hasLicense);\nconsole.log(!false);'
                ]
              },
              quiz: [
                {
                  question: 'What does true && false return?',
                  options: ['true', 'false', 'undefined', 'null'],
                  correct: 1
                },
                {
                  question: 'What does false || true return?',
                  options: ['false', 'true', 'undefined', 'null'],
                  correct: 1
                },
                {
                  question: 'What is !true?',
                  options: ['true', 'false', '1', '0'],
                  correct: 1
                },
                {
                  question: 'What does "" || "default" return?',
                  options: ['""', '"default"', 'false', 'true'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_ops_4',
              title: 'Ternary Operator',
              type: 'challenge',
              theory: `<h2>Ternary Operator</h2>
<p>The ternary operator is a shorthand for simple if/else decisions. It's the only JavaScript operator that takes three operands.</p>

<h3>Syntax</h3>
<pre><code>condition ? valueIfTrue : valueIfFalse</code></pre>

<h3>Basic Usage</h3>
<pre><code>let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

let score = 45;
let result = score >= 50 ? "pass" : "fail";
console.log(result); // "fail"</code></pre>

<h3>Using in console.log</h3>
<pre><code>let temperature = 35;
console.log(temperature > 30 ? "Hot" : "Cool");
// "Hot"</code></pre>

<h3>Nested Ternary (use sparingly)</h3>
<pre><code>let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "F";
console.log(grade); // "B"</code></pre>

<h3>When to Use</h3>
<ul>
  <li>✓ Simple one-line decisions</li>
  <li>✓ Assigning one of two values to a variable</li>
  <li>✗ Complex logic with multiple statements</li>
  <li>✗ Deeply nested conditions (use if/else instead)</li>
</ul>

<p>The ternary operator makes code concise but can hurt readability if overused.</p>`,
              challenge: {
                description: 'Create a variable "hour" set to 14. Use the ternary operator to set "period" to "AM" if hour < 12, or "PM" otherwise. Print the period.',
                starterCode: 'let hour = 14;\n// Use ternary to determine AM or PM\n',
                expectedOutput: 'PM',
                hints: [
                  'The syntax is: condition ? ifTrue : ifFalse',
                  'Check if hour < 12',
                  'let hour = 14;\nlet period = hour < 12 ? "AM" : "PM";\nconsole.log(period);'
                ]
              },
              quiz: [
                {
                  question: 'What is the ternary operator syntax?',
                  options: ['if ? then : else', 'condition ? true : false', 'value : condition ? result', 'condition && true || false'],
                  correct: 1
                },
                {
                  question: 'What does 5 > 3 ? "yes" : "no" return?',
                  options: ['"no"', '"yes"', 'true', '5'],
                  correct: 1
                },
                {
                  question: 'When should you NOT use the ternary operator?',
                  options: ['For simple assignments', 'For inline decisions', 'For complex multi-line logic', 'For boolean checks'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_ops_5',
              title: 'Nullish Coalescing and Optional Chaining',
              type: 'mastery',
              theory: `<h2>Nullish Coalescing and Optional Chaining</h2>
<p>These modern operators help handle null and undefined values gracefully.</p>

<h3>Nullish Coalescing (??)</h3>
<p>Returns the right side only if the left side is <code>null</code> or <code>undefined</code>:</p>
<pre><code>let name = null;
console.log(name ?? "Anonymous"); // "Anonymous"

let count = 0;
console.log(count ?? 10);  // 0 (0 is NOT null/undefined)
console.log(count || 10);  // 10 (|| treats 0 as falsy!)</code></pre>

<p><strong>Key difference from ||:</strong> The <code>||</code> operator returns the right side for ANY falsy value (0, "", false, null, undefined). The <code>??</code> operator only triggers for null/undefined.</p>

<h3>Optional Chaining (?.)</h3>
<p>Safely access nested properties without errors:</p>
<pre><code>let user = { name: "Alice", address: { city: "Paris" } };
console.log(user.address.city);     // "Paris"
console.log(user.phone?.number);    // undefined (no error!)

// Without ?. this would throw an error:
// console.log(user.phone.number); // TypeError!</code></pre>

<h3>Combining Both</h3>
<pre><code>let user = { name: "Bob" };
let city = user.address?.city ?? "Unknown";
console.log(city); // "Unknown"</code></pre>

<h3>Optional Chaining with Methods</h3>
<pre><code>let arr = null;
console.log(arr?.length);     // undefined
console.log(arr?.push?.(1));  // undefined</code></pre>`,
              challenge: {
                description: 'Create a variable "username" set to null. Use the nullish coalescing operator (??) to print "Guest" as the default value.',
                starterCode: 'let username = null;\n// Use ?? to provide a default value\n',
                expectedOutput: 'Guest',
                hints: [
                  'The ?? operator returns the right side if left is null/undefined',
                  'console.log(username ?? "default")',
                  'let username = null;\nconsole.log(username ?? "Guest");'
                ]
              },
              quiz: [
                {
                  question: 'What does null ?? "default" return?',
                  options: ['null', '"default"', 'undefined', 'false'],
                  correct: 1
                },
                {
                  question: 'What does 0 ?? 10 return?',
                  options: ['10', '0', 'null', 'undefined'],
                  correct: 1
                },
                {
                  question: 'What does user?.address?.city do if address is undefined?',
                  options: ['Throws an error', 'Returns undefined', 'Returns null', 'Returns ""'],
                  correct: 1
                },
                {
                  question: 'What is the key difference between ?? and ||?',
                  options: ['No difference', '?? only checks null/undefined, || checks all falsy', '|| is newer', '?? is slower'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'strings',
          title: 'Strings',
          lessons: [
            {
              id: 'js_str_1',
              title: 'String Methods - Part 1',
              type: 'challenge',
              theory: `<h2>String Methods - Part 1</h2>
<p>JavaScript strings come with many built-in methods to manipulate text.</p>

<h3>Accessing Characters</h3>
<pre><code>let str = "Hello";
console.log(str[0]);         // "H"
console.log(str[4]);         // "o"
console.log(str.charAt(1));  // "e"
console.log(str[str.length - 1]); // "o" (last char)</code></pre>

<h3>toUpperCase() and toLowerCase()</h3>
<pre><code>let text = "Hello World";
console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"</code></pre>
<p>These methods return NEW strings — they don't modify the original.</p>

<h3>trim()</h3>
<p>Removes whitespace from both ends:</p>
<pre><code>let messy = "   Hello!   ";
console.log(messy.trim()); // "Hello!"</code></pre>

<h3>includes(), startsWith(), endsWith()</h3>
<pre><code>let sentence = "JavaScript is awesome";
console.log(sentence.includes("Script"));    // true
console.log(sentence.startsWith("Java"));    // true
console.log(sentence.endsWith("awesome"));   // true
console.log(sentence.includes("python"));    // false</code></pre>

<h3>indexOf()</h3>
<pre><code>let text = "Hello World";
console.log(text.indexOf("World")); // 6
console.log(text.indexOf("xyz"));   // -1 (not found)</code></pre>`,
              challenge: {
                description: 'Create a string "  javascript  ". Trim it, convert to uppercase, and print the result.',
                starterCode: 'let language = "  javascript  ";\n// Trim and convert to uppercase\n',
                expectedOutput: 'JAVASCRIPT',
                hints: [
                  'Chain .trim() then .toUpperCase()',
                  'You can chain methods: str.trim().toUpperCase()',
                  'let language = "  javascript  ";\nconsole.log(language.trim().toUpperCase());'
                ]
              },
              quiz: [
                {
                  question: 'What does "Hello"[0] return?',
                  options: ['"Hello"', '"H"', '"o"', '0'],
                  correct: 1
                },
                {
                  question: 'What does "  hi  ".trim() return?',
                  options: ['"hi  "', '"  hi"', '"hi"', '" hi "'],
                  correct: 2
                },
                {
                  question: 'What does "abc".indexOf("z") return?',
                  options: ['0', 'undefined', 'false', '-1'],
                  correct: 3
                }
              ]
            },
            {
              id: 'js_str_2',
              title: 'String Methods - Part 2',
              type: 'challenge',
              theory: `<h2>String Methods - Part 2</h2>

<h3>slice(start, end)</h3>
<p>Extracts a portion of a string (end index is exclusive):</p>
<pre><code>let str = "Hello World";
console.log(str.slice(0, 5));   // "Hello"
console.log(str.slice(6));      // "World"
console.log(str.slice(-5));     // "World" (from end)
console.log(str.slice(0, -6));  // "Hello"</code></pre>

<h3>replace() and replaceAll()</h3>
<pre><code>let text = "I like cats. cats are great.";
console.log(text.replace("cats", "dogs"));
// "I like dogs. cats are great." (only first match)

console.log(text.replaceAll("cats", "dogs"));
// "I like dogs. dogs are great." (all matches)</code></pre>

<h3>split()</h3>
<p>Splits a string into an array:</p>
<pre><code>let csv = "apple,banana,cherry";
let fruits = csv.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]

let words = "Hello World".split(" ");
console.log(words); // ["Hello", "World"]</code></pre>

<h3>repeat()</h3>
<pre><code>let star = "*";
console.log(star.repeat(5)); // "*****"</code></pre>

<h3>padStart() and padEnd()</h3>
<pre><code>let num = "5";
console.log(num.padStart(3, "0")); // "005"
console.log(num.padEnd(3, "0"));   // "500"</code></pre>`,
              challenge: {
                description: 'Given the string "Hello, World!", use slice to extract "World" and print it.',
                starterCode: 'let str = "Hello, World!";\n// Extract "World" using slice\n',
                expectedOutput: 'World',
                hints: [
                  'Count the index positions: H=0, e=1, l=2, l=3, o=4, ,=5, space=6, W=7',
                  'slice(7, 12) will get "World"',
                  'let str = "Hello, World!";\nconsole.log(str.slice(7, 12));'
                ]
              },
              quiz: [
                {
                  question: 'What does "Hello".slice(1, 3) return?',
                  options: ['"Hel"', '"el"', '"ell"', '"He"'],
                  correct: 1
                },
                {
                  question: 'What does "a,b,c".split(",") return?',
                  options: ['"abc"', '["a,b,c"]', '["a", "b", "c"]', '"a b c"'],
                  correct: 2
                },
                {
                  question: 'What does "*".repeat(3) return?',
                  options: ['"*3"', '"***"', '["*","*","*"]', '3'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_str_3',
              title: 'Template Literals Deep Dive',
              type: 'challenge',
              theory: `<h2>Template Literals Deep Dive</h2>
<p>Template literals (backtick strings) are one of the most powerful string features in modern JavaScript.</p>

<h3>Expression Interpolation</h3>
<p>You can embed any JavaScript expression inside <code>\${}</code>:</p>
<pre><code>let a = 5, b = 10;
console.log(\`Sum: \${a + b}\`);          // "Sum: 15"
console.log(\`Double: \${a * 2}\`);        // "Double: 10"
console.log(\`Upper: \${"hello".toUpperCase()}\`); // "Upper: HELLO"</code></pre>

<h3>Multi-line Strings</h3>
<pre><code>let poem = \`Roses are red,
Violets are blue,
JavaScript is great,
And so are you.\`;
console.log(poem);</code></pre>

<h3>Expressions in Templates</h3>
<pre><code>let price = 29.99;
let qty = 3;
console.log(\`Total: $\${(price * qty).toFixed(2)}\`);
// "Total: $89.97"

let isHot = true;
console.log(\`Weather: \${isHot ? "Hot" : "Cold"}\`);
// "Weather: Hot"</code></pre>

<h3>Tagged Templates (Advanced)</h3>
<p>You can create custom template processing functions:</p>
<pre><code>function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => 
    result + str + (values[i] ? \`[\${values[i]}]\` : ''), '');
}
let name = "World";
console.log(highlight\`Hello \${name}!\`); // "Hello [World]!"</code></pre>`,
              challenge: {
                description: 'Create variables: item = "Book", price = 15, qty = 3. Use a template literal to print "3 x Book = $45".',
                starterCode: 'let item = "Book";\nlet price = 15;\nlet qty = 3;\n// Use template literal\n',
                expectedOutput: '3 x Book = $45',
                hints: [
                  'Use backticks and ${} for variables',
                  'Calculate the total inside ${}',
                  'let item = "Book";\nlet price = 15;\nlet qty = 3;\nconsole.log(`${qty} x ${item} = $${price * qty}`);'
                ]
              },
              quiz: [
                {
                  question: 'What character wraps a template literal?',
                  options: ['Single quote', 'Double quote', 'Backtick', 'Forward slash'],
                  correct: 2
                },
                {
                  question: 'How do you embed an expression in a template literal?',
                  options: ['#{expr}', '${expr}', '{{expr}}', '%{expr}'],
                  correct: 1
                },
                {
                  question: 'Can template literals span multiple lines?',
                  options: ['No, only single line', 'Yes, without any special syntax', 'Yes, but you need \\n', 'Only with a special flag'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_str_4',
              title: 'String Search and Extraction',
              type: 'challenge',
              theory: `<h2>String Search and Extraction</h2>

<h3>search()</h3>
<p>Returns the index of the first match (supports regex):</p>
<pre><code>let text = "Hello World! Hello JS!";
console.log(text.search("World"));  // 6
console.log(text.search(/hello/i)); // 0 (case-insensitive regex)</code></pre>

<h3>match()</h3>
<p>Finds matches using a regular expression:</p>
<pre><code>let text = "The year 2024 was after 2023";
let numbers = text.match(/\d+/g);
console.log(numbers); // ["2024", "2023"]</code></pre>

<h3>substring() vs slice()</h3>
<pre><code>let str = "Hello World";
// substring(start, end) — similar to slice but doesn't accept negatives
console.log(str.substring(0, 5)); // "Hello"
console.log(str.slice(0, 5));     // "Hello"

// Difference: negative values
console.log(str.slice(-5));       // "World"
console.log(str.substring(-5));   // "Hello World" (treats negative as 0)</code></pre>

<h3>Practical Examples</h3>
<pre><code>// Extract file extension
let filename = "document.pdf";
let ext = filename.slice(filename.lastIndexOf("."));
console.log(ext); // ".pdf"

// Capitalize first letter
let word = "javascript";
let capitalized = word[0].toUpperCase() + word.slice(1);
console.log(capitalized); // "Javascript"</code></pre>`,
              challenge: {
                description: 'Given the string "javascript", capitalize the first letter to produce "Javascript" and print it.',
                starterCode: 'let word = "javascript";\n// Capitalize first letter\n',
                expectedOutput: 'Javascript',
                hints: [
                  'Get the first character and make it uppercase',
                  'Combine it with the rest of the string using slice(1)',
                  'let word = "javascript";\nconsole.log(word[0].toUpperCase() + word.slice(1));'
                ]
              },
              quiz: [
                {
                  question: 'What does "Hello".slice(-3) return?',
                  options: ['"Hel"', '"llo"', '"lo"', '"Hello"'],
                  correct: 1
                },
                {
                  question: 'What does lastIndexOf() return if not found?',
                  options: ['0', 'null', 'undefined', '-1'],
                  correct: 3
                },
                {
                  question: 'Which method supports regular expressions for searching?',
                  options: ['indexOf()', 'search()', 'includes()', 'startsWith()'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_str_5',
              title: 'String Mastery Challenge',
              type: 'mastery',
              theory: `<h2>String Mastery Challenge</h2>
<p>Let's combine everything you've learned about strings into practical scenarios.</p>

<h3>Common String Patterns</h3>

<h4>1. Reversing a String</h4>
<pre><code>let str = "Hello";
let reversed = str.split("").reverse().join("");
console.log(reversed); // "olleH"</code></pre>

<h4>2. Counting Occurrences</h4>
<pre><code>let text = "banana";
let count = text.split("a").length - 1;
console.log(count); // 3</code></pre>

<h4>3. Title Case</h4>
<pre><code>let sentence = "hello world from javascript";
let titleCase = sentence.split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ");
console.log(titleCase); // "Hello World From Javascript"</code></pre>

<h4>4. Truncating Text</h4>
<pre><code>function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + "...";
}
console.log(truncate("This is a long sentence", 10)); // "This is..."</code></pre>

<h4>5. Simple Slug Generator</h4>
<pre><code>let title = "Hello World! This is JS";
let slug = title.toLowerCase().replaceAll(" ", "-");
console.log(slug); // "hello-world!-this-is-js"</code></pre>`,
              challenge: {
                description: 'Reverse the string "hello" using split, reverse, and join. Print the result.',
                starterCode: 'let str = "hello";\n// Reverse the string\n',
                expectedOutput: 'olleh',
                hints: [
                  'Split into array of characters with split("")',
                  'Reverse the array with .reverse()',
                  'Join back with .join("")',
                  'let str = "hello";\nconsole.log(str.split("").reverse().join(""));'
                ]
              },
              quiz: [
                {
                  question: 'What does "abc".split("") produce?',
                  options: ['["abc"]', '["a", "b", "c"]', '"a,b,c"', '["a,b,c"]'],
                  correct: 1
                },
                {
                  question: 'How do you count how many "a"s are in "banana"?',
                  options: ['"banana".count("a")', '"banana".split("a").length - 1', '"banana".indexOf("a")', '"banana".match("a")'],
                  correct: 1
                },
                {
                  question: 'What does ["H","e","l","l","o"].join("") produce?',
                  options: ['["Hello"]', '"H,e,l,l,o"', '"Hello"', '"H e l l o"'],
                  correct: 2
                }
              ]
            }
          ]
        },
        {
          id: 'control-flow',
          title: 'Control Flow',
          lessons: [
            {
              id: 'js_cf_1',
              title: 'if/else Statements',
              type: 'challenge',
              theory: `<h2>if/else Statements</h2>
<p>Control flow lets your program make decisions. The <code>if</code> statement executes code only when a condition is true.</p>

<h3>Basic if Statement</h3>
<pre><code>let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside!");
}
// Output: "It's hot outside!"</code></pre>

<h3>if/else</h3>
<pre><code>let age = 16;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("Too young to vote");
}
// Output: "Too young to vote"</code></pre>

<h3>if/else if/else</h3>
<pre><code>let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// Output: "Grade: C"</code></pre>

<h3>Important Notes</h3>
<ul>
  <li>The condition must be in parentheses <code>()</code></li>
  <li>Code blocks use curly braces <code>{}</code></li>
  <li>Only the FIRST matching block executes</li>
  <li>The <code>else</code> block is optional — it runs when no condition is true</li>
</ul>`,
              challenge: {
                description: 'Create a variable "score" set to 85. Write an if/else if/else that prints "A" for >= 90, "B" for >= 80, "C" for >= 70, or "F" otherwise.',
                starterCode: 'let score = 85;\n// Write your if/else if/else here\n',
                expectedOutput: 'B',
                hints: [
                  'Start with if (score >= 90)',
                  'Use else if for 80 and 70',
                  'let score = 85;\nif (score >= 90) {\n  console.log("A");\n} else if (score >= 80) {\n  console.log("B");\n} else if (score >= 70) {\n  console.log("C");\n} else {\n  console.log("F");\n}'
                ]
              },
              quiz: [
                {
                  question: 'What keyword introduces an alternative condition?',
                  options: ['elif', 'else if', 'otherwise', 'or if'],
                  correct: 1
                },
                {
                  question: 'When does the else block run?',
                  options: ['Always', 'When the if is true', 'When no previous condition is true', 'Never'],
                  correct: 2
                },
                {
                  question: 'How many blocks execute in an if/else if/else chain?',
                  options: ['All matching ones', 'Only the first matching one', 'The last one', 'All of them'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_cf_2',
              title: 'switch Statement',
              type: 'challenge',
              theory: `<h2>switch Statement</h2>
<p>The <code>switch</code> statement is an alternative to long if/else if chains when comparing one value against multiple options.</p>

<h3>Basic Syntax</h3>
<pre><code>let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek");
}
// Output: "Start of work week"</code></pre>

<h3>The break Keyword</h3>
<p>Without <code>break</code>, execution "falls through" to the next case:</p>
<pre><code>let num = 1;
switch (num) {
  case 1:
    console.log("One");
    // No break! Falls through...
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
}
// Output: "One" then "Two" (fall-through!)</code></pre>

<h3>The default Case</h3>
<p>Like <code>else</code>, it runs when no case matches:</p>
<pre><code>let color = "purple";
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown color");
}
// Output: "Unknown color"</code></pre>

<p><strong>Note:</strong> switch uses strict comparison (===).</p>`,
              challenge: {
                description: 'Create a variable "fruit" set to "banana". Use a switch statement to print "Yellow" for banana, "Red" for apple, "Orange" for orange, and "Unknown" for default.',
                starterCode: 'let fruit = "banana";\n// Write a switch statement\n',
                expectedOutput: 'Yellow',
                hints: [
                  'Use switch(fruit) with case statements',
                  'Remember to add break after each case',
                  'let fruit = "banana";\nswitch (fruit) {\n  case "banana":\n    console.log("Yellow");\n    break;\n  case "apple":\n    console.log("Red");\n    break;\n  case "orange":\n    console.log("Orange");\n    break;\n  default:\n    console.log("Unknown");\n}'
                ]
              },
              quiz: [
                {
                  question: 'What happens without a break in a switch case?',
                  options: ['Error', 'It stops anyway', 'Falls through to next case', 'Returns undefined'],
                  correct: 2
                },
                {
                  question: 'What type of comparison does switch use?',
                  options: ['Loose (==)', 'Strict (===)', 'Approximate', 'Type-only'],
                  correct: 1
                },
                {
                  question: 'What is the purpose of the default case?',
                  options: ['Required first case', 'Runs when no case matches', 'Always runs', 'Sets a default value'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_cf_3',
              title: 'for Loops',
              type: 'challenge',
              theory: `<h2>for Loops</h2>
<p>Loops repeat code multiple times. The <code>for</code> loop is the most common loop in JavaScript.</p>

<h3>Syntax</h3>
<pre><code>for (initialization; condition; update) {
  // code to repeat
}</code></pre>

<h3>Basic Example</h3>
<pre><code>for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5</code></pre>

<p>How it works:</p>
<ol>
  <li><code>let i = 1</code> — runs once at the start</li>
  <li><code>i <= 5</code> — checked before each iteration; loop stops when false</li>
  <li><code>i++</code> — runs after each iteration</li>
</ol>

<h3>Counting Down</h3>
<pre><code>for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// Output: 5, 4, 3, 2, 1</code></pre>

<h3>Stepping by 2</h3>
<pre><code>for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10</code></pre>

<h3>Summing Numbers</h3>
<pre><code>let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum); // 5050</code></pre>`,
              challenge: {
                description: 'Use a for loop to print the numbers 1 through 5, each on a new line.',
                starterCode: '// Print numbers 1 to 5 using a for loop\n',
                expectedOutput: '1\n2\n3\n4\n5',
                hints: [
                  'Start with i = 1 and go while i <= 5',
                  'Increment i by 1 each time',
                  'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}'
                ]
              },
              quiz: [
                {
                  question: 'What are the three parts of a for loop?',
                  options: ['start, stop, step', 'init, condition, update', 'begin, check, increment', 'declare, compare, change'],
                  correct: 1
                },
                {
                  question: 'How many times does this loop run: for(let i=0; i<3; i++)?',
                  options: ['2', '3', '4', 'Infinite'],
                  correct: 1
                },
                {
                  question: 'What does i++ mean?',
                  options: ['i = i * 2', 'i = i + 1', 'i = i - 1', 'i = 0'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_cf_4',
              title: 'while and do...while Loops',
              type: 'challenge',
              theory: `<h2>while and do...while Loops</h2>

<h3>while Loop</h3>
<p>Repeats as long as the condition is true:</p>
<pre><code>let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
// Output: 1, 2, 3, 4, 5</code></pre>

<p><strong>Warning:</strong> If the condition never becomes false, you get an infinite loop!</p>
<pre><code>// DON'T DO THIS:
// while (true) { console.log("forever"); }</code></pre>

<h3>do...while Loop</h3>
<p>Runs the code at least once, then checks the condition:</p>
<pre><code>let num = 10;
do {
  console.log(num);
  num++;
} while (num < 5);
// Output: 10 (runs once even though 10 is not < 5)</code></pre>

<h3>When to Use Which</h3>
<ul>
  <li><strong>for</strong> — when you know how many times to iterate</li>
  <li><strong>while</strong> — when you don't know how many times (depends on a condition)</li>
  <li><strong>do...while</strong> — when you need at least one execution</li>
</ul>

<h3>break and continue</h3>
<pre><code>// break — exit the loop entirely
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 1, 2, 3, 4

// continue — skip to next iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1, 2, 4, 5</code></pre>`,
              challenge: {
                description: 'Use a while loop to print numbers from 1 to 3.',
                starterCode: '// Use a while loop to print 1, 2, 3\n',
                expectedOutput: '1\n2\n3',
                hints: [
                  'Initialize a counter variable before the loop',
                  'Increment inside the loop',
                  'let i = 1;\nwhile (i <= 3) {\n  console.log(i);\n  i++;\n}'
                ]
              },
              quiz: [
                {
                  question: 'What is the key difference between while and do...while?',
                  options: ['No difference', 'do...while runs at least once', 'while is faster', 'do...while cannot use break'],
                  correct: 1
                },
                {
                  question: 'What does break do inside a loop?',
                  options: ['Pauses the loop', 'Skips current iteration', 'Exits the loop entirely', 'Causes an error'],
                  correct: 2
                },
                {
                  question: 'What does continue do?',
                  options: ['Exits the loop', 'Skips to the next iteration', 'Restarts the loop', 'Runs the loop faster'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_cf_5',
              title: 'Nested Loops and Loop Patterns',
              type: 'mastery',
              theory: `<h2>Nested Loops and Loop Patterns</h2>
<p>You can put loops inside loops. The inner loop runs completely for each iteration of the outer loop.</p>

<h3>Basic Nested Loop</h3>
<pre><code>for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + "," + j);
  }
}
// 1,1  1,2  1,3  2,1  2,2  2,3  3,1  3,2  3,3</code></pre>

<h3>Multiplication Table</h3>
<pre><code>for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += (i * j) + " ";
  }
  console.log(row.trim());
}
// "1 2 3"
// "2 4 6"
// "3 6 9"</code></pre>

<h3>Building a Triangle Pattern</h3>
<pre><code>for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
// *
// **
// ***
// ****
// *****</code></pre>

<h3>Finding Pairs</h3>
<pre><code>let nums = [1, 2, 3, 4];
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === 5) {
      console.log(nums[i] + " + " + nums[j] + " = 5");
    }
  }
}
// "1 + 4 = 5"
// "2 + 3 = 5"</code></pre>`,
              challenge: {
                description: 'Use a loop to print a star triangle with 4 rows: "*", "**", "***", "****"',
                starterCode: '// Print a star triangle with 4 rows\n',
                expectedOutput: '*\n**\n***\n****',
                hints: [
                  'Use a for loop from 1 to 4',
                  'Use "*".repeat(i) to create each row',
                  'for (let i = 1; i <= 4; i++) {\n  console.log("*".repeat(i));\n}'
                ]
              },
              quiz: [
                {
                  question: 'In a nested loop, how many total iterations occur with outer(3) and inner(4)?',
                  options: ['7', '12', '3', '4'],
                  correct: 1
                },
                {
                  question: 'What does "*".repeat(3) produce?',
                  options: ['"* * *"', '"***"', '["*","*","*"]', '"*3"'],
                  correct: 1
                },
                {
                  question: 'What is the time complexity of a nested loop (n iterations each)?',
                  options: ['O(n)', 'O(2n)', 'O(n²)', 'O(log n)'],
                  correct: 2
                }
              ]
            }
          ]
        },
        {
          id: 'functions',
          title: 'Functions',
          lessons: [
            {
              id: 'js_fn_1',
              title: 'Function Declarations',
              type: 'challenge',
              theory: `<h2>Function Declarations</h2>
<p>A <strong>function</strong> is a reusable block of code that performs a specific task. Functions let you write code once and use it many times.</p>

<h3>Declaring a Function</h3>
<pre><code>function greet() {
  console.log("Hello!");
}

// Call (invoke) the function:
greet(); // "Hello!"
greet(); // "Hello!" — reusable!</code></pre>

<h3>Functions with Parameters</h3>
<p>Parameters are variables that receive values when the function is called:</p>
<pre><code>function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // "Hello, Alice!"
greet("Bob");   // "Hello, Bob!"</code></pre>

<h3>Multiple Parameters</h3>
<pre><code>function add(a, b) {
  console.log(a + b);
}

add(3, 5);   // 8
add(10, 20); // 30</code></pre>

<h3>Hoisting</h3>
<p>Function declarations are "hoisted" — you can call them before they're defined:</p>
<pre><code>sayHi(); // Works! "Hi there!"

function sayHi() {
  console.log("Hi there!");
}</code></pre>

<h3>Naming Conventions</h3>
<ul>
  <li>Use camelCase: <code>calculateTotal</code>, <code>getUserName</code></li>
  <li>Start with a verb: <code>get</code>, <code>set</code>, <code>is</code>, <code>has</code>, <code>calculate</code></li>
  <li>Be descriptive: <code>calculateArea</code> is better than <code>calc</code></li>
</ul>`,
              challenge: {
                description: 'Create a function called "sayHello" that takes a name parameter and prints "Hello, {name}!". Call it with "World".',
                starterCode: '// Define sayHello function and call it\n',
                expectedOutput: 'Hello, World!',
                hints: [
                  'Use function sayHello(name) { ... }',
                  'Use console.log inside the function',
                  'function sayHello(name) {\n  console.log("Hello, " + name + "!");\n}\nsayHello("World");'
                ]
              },
              quiz: [
                {
                  question: 'What is a parameter?',
                  options: ['A function name', 'A variable that receives input in a function', 'A return value', 'A loop counter'],
                  correct: 1
                },
                {
                  question: 'What does "hoisting" mean for function declarations?',
                  options: ['They run automatically', 'They can be called before their definition', 'They cannot be changed', 'They are always global'],
                  correct: 1
                },
                {
                  question: 'How do you call a function named "doWork"?',
                  options: ['call doWork', 'doWork()', 'run doWork', 'doWork[]'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_fn_2',
              title: 'Return Values',
              type: 'challenge',
              theory: `<h2>Return Values</h2>
<p>Functions can send back a value using <code>return</code>. This makes functions useful as building blocks for calculations.</p>

<h3>Basic Return</h3>
<pre><code>function add(a, b) {
  return a + b;
}

let result = add(3, 4);
console.log(result); // 7

// Use directly in expressions:
console.log(add(10, 5)); // 15</code></pre>

<h3>Return Stops Execution</h3>
<p>Once <code>return</code> is reached, the function exits immediately:</p>
<pre><code>function checkAge(age) {
  if (age < 0) {
    return "Invalid age";
  }
  return age >= 18 ? "Adult" : "Minor";
}

console.log(checkAge(25));  // "Adult"
console.log(checkAge(-1));  // "Invalid age"</code></pre>

<h3>Functions Without Return</h3>
<p>If a function has no return statement, it returns <code>undefined</code>:</p>
<pre><code>function greet(name) {
  console.log("Hi " + name);
}

let result = greet("Bob"); // prints "Hi Bob"
console.log(result);       // undefined</code></pre>

<h3>Returning Different Types</h3>
<pre><code>function getInfo(type) {
  if (type === "name") return "Alice";
  if (type === "age") return 30;
  if (type === "active") return true;
  return null;
}

console.log(getInfo("name")); // "Alice"
console.log(getInfo("age"));  // 30</code></pre>`,
              challenge: {
                description: 'Create a function "multiply" that takes two numbers and RETURNS their product. Print the result of calling multiply(6, 7).',
                starterCode: '// Create multiply function that returns the product\n',
                expectedOutput: '42',
                hints: [
                  'Use return instead of console.log inside the function',
                  'Call the function inside console.log()',
                  'function multiply(a, b) {\n  return a * b;\n}\nconsole.log(multiply(6, 7));'
                ]
              },
              quiz: [
                {
                  question: 'What does a function return if it has no return statement?',
                  options: ['0', 'null', 'undefined', 'false'],
                  correct: 2
                },
                {
                  question: 'What happens to code after a return statement?',
                  options: ['It runs normally', 'It never executes', 'It runs later', 'It throws an error'],
                  correct: 1
                },
                {
                  question: 'Can a function return be stored in a variable?',
                  options: ['No', 'Yes', 'Only numbers', 'Only strings'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_fn_3',
              title: 'Arrow Functions',
              type: 'challenge',
              theory: `<h2>Arrow Functions</h2>
<p>Arrow functions are a concise syntax for writing functions, introduced in ES6.</p>

<h3>Basic Syntax</h3>
<pre><code>// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // 5</code></pre>

<h3>Shorthand (Implicit Return)</h3>
<p>If the function body is a single expression, you can omit the braces and <code>return</code>:</p>
<pre><code>const add = (a, b) => a + b;
const square = x => x * x;
const greet = () => "Hello!";

console.log(add(2, 3));    // 5
console.log(square(4));    // 16
console.log(greet());      // "Hello!"</code></pre>

<h3>Parameter Rules</h3>
<ul>
  <li>No params: <code>() => ...</code></li>
  <li>One param: <code>x => ...</code> (parentheses optional)</li>
  <li>Multiple params: <code>(a, b) => ...</code> (parentheses required)</li>
</ul>

<h3>Returning Objects</h3>
<p>Wrap object literals in parentheses:</p>
<pre><code>const makeUser = (name, age) => ({ name: name, age: age });
console.log(makeUser("Alice", 30)); // {name: "Alice", age: 30}</code></pre>

<h3>Key Difference from Regular Functions</h3>
<p>Arrow functions do NOT have their own <code>this</code> context — they inherit <code>this</code> from their surrounding scope. This matters when working with objects and classes (covered later).</p>`,
              challenge: {
                description: 'Create an arrow function "double" that takes a number and returns it multiplied by 2. Print double(8).',
                starterCode: '// Create an arrow function called double\n',
                expectedOutput: '16',
                hints: [
                  'Use const double = (num) => ...',
                  'For a single expression, you can skip the braces',
                  'const double = num => num * 2;\nconsole.log(double(8));'
                ]
              },
              quiz: [
                {
                  question: 'Which is a valid arrow function?',
                  options: ['function => (x) { x }', 'const f = x => x * 2', 'const f = x -> x * 2', 'arrow f(x) => x * 2'],
                  correct: 1
                },
                {
                  question: 'When can you omit parentheses around parameters?',
                  options: ['Never', 'Always', 'With exactly one parameter', 'With no parameters'],
                  correct: 2
                },
                {
                  question: 'What does const f = () => 42 return when called?',
                  options: ['undefined', 'null', '42', 'Error'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_fn_4',
              title: 'Default Parameters and Rest',
              type: 'challenge',
              theory: `<h2>Default Parameters and Rest Parameters</h2>

<h3>Default Parameters</h3>
<p>You can give parameters default values that are used when no argument is provided:</p>
<pre><code>function greet(name = "World") {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // "Hello, Alice!"
greet();        // "Hello, World!"</code></pre>

<h3>Multiple Defaults</h3>
<pre><code>function createUser(name = "Anonymous", role = "user") {
  console.log(name + " (" + role + ")");
}

createUser("Alice", "admin"); // "Alice (admin)"
createUser("Bob");            // "Bob (user)"
createUser();                 // "Anonymous (user)"</code></pre>

<h3>Rest Parameters (...)</h3>
<p>Collects remaining arguments into an array:</p>
<pre><code>function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));     // 6
console.log(sum(10, 20, 30, 40)); // 100</code></pre>

<h3>Rest Must Be Last</h3>
<pre><code>function introduce(greeting, ...names) {
  for (let name of names) {
    console.log(greeting + ", " + name);
  }
}

introduce("Hello", "Alice", "Bob");
// "Hello, Alice"
// "Hello, Bob"</code></pre>`,
              challenge: {
                description: 'Create a function "power" with parameters base and exponent (default exponent = 2). Print power(5) and power(3, 3).',
                starterCode: '// Create power function with default exponent\n',
                expectedOutput: '25\n27',
                hints: [
                  'Use function power(base, exponent = 2)',
                  'Return base ** exponent',
                  'function power(base, exponent = 2) {\n  return base ** exponent;\n}\nconsole.log(power(5));\nconsole.log(power(3, 3));'
                ]
              },
              quiz: [
                {
                  question: 'What value does a default parameter use?',
                  options: ['Always its default', 'When no argument is passed', 'When null is passed', 'When 0 is passed'],
                  correct: 1
                },
                {
                  question: 'What does ...args create in a function?',
                  options: ['An object', 'An array of all remaining arguments', 'A string', 'A number'],
                  correct: 1
                },
                {
                  question: 'Where must a rest parameter appear?',
                  options: ['First', 'Anywhere', 'Last', 'Second'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_fn_5',
              title: 'Scope and Closures Preview',
              type: 'challenge',
              theory: `<h2>Scope and Closures Preview</h2>
<p><strong>Scope</strong> determines where variables are accessible in your code.</p>

<h3>Global Scope</h3>
<p>Variables declared outside any function are globally accessible:</p>
<pre><code>let globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar); // Can access global variable
}
showGlobal(); // "I'm global"</code></pre>

<h3>Function (Local) Scope</h3>
<p>Variables declared inside a function are only accessible within it:</p>
<pre><code>function myFunction() {
  let localVar = "I'm local";
  console.log(localVar); // ✓ Works
}
myFunction();
// console.log(localVar); // ✗ Error! Not accessible outside</code></pre>

<h3>Block Scope (let and const)</h3>
<p>Variables declared with <code>let</code>/<code>const</code> inside { } are block-scoped:</p>
<pre><code>if (true) {
  let blockVar = "I'm in a block";
  console.log(blockVar); // ✓ Works
}
// console.log(blockVar); // ✗ Error!</code></pre>

<h3>Scope Chain</h3>
<p>Inner functions can access variables from outer functions:</p>
<pre><code>function outer() {
  let message = "Hello";
  
  function inner() {
    console.log(message); // Can access outer's variable
  }
  
  inner();
}
outer(); // "Hello"</code></pre>

<p>This ability of inner functions to "remember" outer variables is the basis of <strong>closures</strong> — a powerful concept we'll explore in depth later.</p>`,
              challenge: {
                description: 'Create a function "counter" that has a local variable "count" starting at 0. Increment it 3 times inside the function and print the final count.',
                starterCode: '// Create a counter function\n',
                expectedOutput: '3',
                hints: [
                  'Declare count inside the function',
                  'Use a loop or manual increments',
                  'function counter() {\n  let count = 0;\n  count++;\n  count++;\n  count++;\n  console.log(count);\n}\ncounter();'
                ]
              },
              quiz: [
                {
                  question: 'Can a function access variables declared outside it?',
                  options: ['No, never', 'Yes, always', 'Only global ones', 'Only with special syntax'],
                  correct: 1
                },
                {
                  question: 'What happens if you access a let variable outside its block?',
                  options: ['Returns undefined', 'Returns null', 'Throws a ReferenceError', 'Works fine'],
                  correct: 2
                },
                {
                  question: 'What is a closure?',
                  options: ['A closed function', 'A function that remembers its outer scope', 'A terminated loop', 'A private variable'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_fn_6',
              title: 'Callback Functions',
              type: 'mastery',
              theory: `<h2>Callback Functions</h2>
<p>A <strong>callback</strong> is a function passed as an argument to another function, to be called later.</p>

<h3>Basic Callback</h3>
<pre><code>function processData(data, callback) {
  let result = data.toUpperCase();
  callback(result);
}

processData("hello", function(processed) {
  console.log(processed); // "HELLO"
});</code></pre>

<h3>Why Callbacks?</h3>
<p>They let you customize what happens after an operation:</p>
<pre><code>function calculate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(5, 3, add));      // 8
console.log(calculate(5, 3, multiply)); // 15</code></pre>

<h3>Array Methods Use Callbacks</h3>
<pre><code>let numbers = [1, 2, 3, 4, 5];

// forEach — call function for each element
numbers.forEach(function(num) {
  console.log(num * 2);
});
// 2, 4, 6, 8, 10</code></pre>

<h3>Arrow Functions as Callbacks</h3>
<pre><code>let names = ["Alice", "Bob", "Charlie"];
names.forEach(name => console.log("Hello, " + name));
// "Hello, Alice"
// "Hello, Bob"
// "Hello, Charlie"</code></pre>

<p>Callbacks are fundamental to JavaScript, especially for handling asynchronous operations (timers, network requests, events). You'll use them constantly.</p>`,
              challenge: {
                description: 'Create a function "applyOperation" that takes a number and a callback function. Call it with 10 and a function that doubles the number. Print the result.',
                starterCode: '// Create applyOperation and call with a doubling callback\n',
                expectedOutput: '20',
                hints: [
                  'function applyOperation(num, callback) returns callback(num)',
                  'Pass an arrow function that multiplies by 2',
                  'function applyOperation(num, callback) {\n  return callback(num);\n}\nconsole.log(applyOperation(10, n => n * 2));'
                ]
              },
              quiz: [
                {
                  question: 'What is a callback function?',
                  options: ['A function that calls back the user', 'A function passed to another function', 'A recursive function', 'A built-in function'],
                  correct: 1
                },
                {
                  question: 'In arr.forEach(fn), what is fn?',
                  options: ['An array', 'A string', 'A callback function', 'A variable'],
                  correct: 2
                },
                {
                  question: 'Which is a valid way to pass a callback?',
                  options: ['func(callback())', 'func(callback)', 'func{callback}', 'func[callback]'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'arrays-basics',
          title: 'Arrays Basics',
          lessons: [
            {
              id: 'js_arr_1',
              title: 'Creating and Accessing Arrays',
              type: 'challenge',
              theory: `<h2>Creating and Accessing Arrays</h2>
<p>An <strong>array</strong> is an ordered collection of values. Arrays can hold any type of data and are one of the most used data structures.</p>

<h3>Creating Arrays</h3>
<pre><code>let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true, null];
let empty = [];</code></pre>

<h3>Accessing Elements (Zero-Indexed)</h3>
<pre><code>let colors = ["red", "green", "blue"];
console.log(colors[0]); // "red" (first element)
console.log(colors[1]); // "green" (second)
console.log(colors[2]); // "blue" (third)
console.log(colors[3]); // undefined (out of bounds)</code></pre>

<h3>Array Length</h3>
<pre><code>let items = ["a", "b", "c", "d"];
console.log(items.length); // 4
console.log(items[items.length - 1]); // "d" (last element)</code></pre>

<h3>Modifying Elements</h3>
<pre><code>let pets = ["cat", "dog", "fish"];
pets[1] = "hamster";
console.log(pets); // ["cat", "hamster", "fish"]</code></pre>

<h3>Checking if It's an Array</h3>
<pre><code>console.log(Array.isArray([1,2,3])); // true
console.log(Array.isArray("hello"));  // false</code></pre>`,
              challenge: {
                description: 'Create an array called "languages" with "JavaScript", "Python", "Java". Print the first element and the length.',
                starterCode: '// Create the array and print first element and length\n',
                expectedOutput: 'JavaScript\n3',
                hints: [
                  'Use square brackets to create the array',
                  'Access first with [0] and length with .length',
                  'let languages = ["JavaScript", "Python", "Java"];\nconsole.log(languages[0]);\nconsole.log(languages.length);'
                ]
              },
              quiz: [
                {
                  question: 'What index is the first element of an array?',
                  options: ['1', '0', '-1', 'first'],
                  correct: 1
                },
                {
                  question: 'What does ["a","b","c"].length return?',
                  options: ['2', '3', '4', 'undefined'],
                  correct: 1
                },
                {
                  question: 'What does arr[arr.length - 1] give you?',
                  options: ['First element', 'Last element', 'undefined', 'Array length'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_arr_2',
              title: 'Adding and Removing Elements',
              type: 'challenge',
              theory: `<h2>Adding and Removing Elements</h2>

<h3>push() — Add to End</h3>
<pre><code>let fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // ["apple", "banana", "cherry"]</code></pre>

<h3>pop() — Remove from End</h3>
<pre><code>let fruits = ["apple", "banana", "cherry"];
let removed = fruits.pop();
console.log(removed); // "cherry"
console.log(fruits);  // ["apple", "banana"]</code></pre>

<h3>unshift() — Add to Beginning</h3>
<pre><code>let fruits = ["banana", "cherry"];
fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "cherry"]</code></pre>

<h3>shift() — Remove from Beginning</h3>
<pre><code>let fruits = ["apple", "banana", "cherry"];
let first = fruits.shift();
console.log(first);  // "apple"
console.log(fruits); // ["banana", "cherry"]</code></pre>

<h3>splice() — Add/Remove Anywhere</h3>
<pre><code>let colors = ["red", "green", "blue"];

// Remove 1 element at index 1
colors.splice(1, 1);
console.log(colors); // ["red", "blue"]

// Insert at index 1
colors.splice(1, 0, "yellow");
console.log(colors); // ["red", "yellow", "blue"]

// Replace: remove 1 at index 0, insert "orange"
colors.splice(0, 1, "orange");
console.log(colors); // ["orange", "yellow", "blue"]</code></pre>`,
              challenge: {
                description: 'Create an array [1, 2, 3]. Push 4 to the end, then unshift 0 to the beginning. Print the resulting array.',
                starterCode: 'let nums = [1, 2, 3];\n// Add 4 to end and 0 to beginning\n',
                expectedOutput: '0,1,2,3,4',
                hints: [
                  'Use push(4) and unshift(0)',
                  'console.log will print array with commas by default',
                  'let nums = [1, 2, 3];\nnums.push(4);\nnums.unshift(0);\nconsole.log(nums.toString());'
                ]
              },
              quiz: [
                {
                  question: 'Which method adds an element to the end?',
                  options: ['shift()', 'unshift()', 'push()', 'pop()'],
                  correct: 2
                },
                {
                  question: 'What does pop() return?',
                  options: ['The new array', 'The removed element', 'The array length', 'undefined'],
                  correct: 1
                },
                {
                  question: 'Which method removes from the beginning?',
                  options: ['pop()', 'push()', 'shift()', 'unshift()'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_arr_3',
              title: 'Iterating Over Arrays',
              type: 'challenge',
              theory: `<h2>Iterating Over Arrays</h2>
<p>There are several ways to loop through arrays in JavaScript.</p>

<h3>for Loop (Classic)</h3>
<pre><code>let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// apple, banana, cherry</code></pre>

<h3>for...of Loop (Modern)</h3>
<pre><code>let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
// red, green, blue</code></pre>

<h3>forEach Method</h3>
<pre><code>let nums = [10, 20, 30];
nums.forEach(function(num, index) {
  console.log(index + ": " + num);
});
// "0: 10"
// "1: 20"
// "2: 30"</code></pre>

<h3>for...of vs forEach</h3>
<ul>
  <li><code>for...of</code> — can use <code>break</code> and <code>continue</code></li>
  <li><code>forEach</code> — provides index automatically, cleaner syntax</li>
</ul>

<h3>Building a New Array from a Loop</h3>
<pre><code>let numbers = [1, 2, 3, 4, 5];
let doubled = [];
for (let num of numbers) {
  doubled.push(num * 2);
}
console.log(doubled); // [2, 4, 6, 8, 10]</code></pre>`,
              challenge: {
                description: 'Create an array [10, 20, 30, 40, 50]. Use a for...of loop to print each element.',
                starterCode: 'let numbers = [10, 20, 30, 40, 50];\n// Loop through and print each\n',
                expectedOutput: '10\n20\n30\n40\n50',
                hints: [
                  'Use for (let num of numbers)',
                  'Print each num with console.log',
                  'let numbers = [10, 20, 30, 40, 50];\nfor (let num of numbers) {\n  console.log(num);\n}'
                ]
              },
              quiz: [
                {
                  question: 'What does for...of iterate over?',
                  options: ['Object keys', 'Array indices', 'Array values', 'Object properties'],
                  correct: 2
                },
                {
                  question: 'Can you use break inside for...of?',
                  options: ['No', 'Yes', 'Only with arrays', 'Only with strings'],
                  correct: 1
                },
                {
                  question: 'What parameters does forEach callback receive?',
                  options: ['Only value', 'Value and index', 'Index only', 'Value, index, and array'],
                  correct: 3
                }
              ]
            },
            {
              id: 'js_arr_4',
              title: 'Array Search Methods',
              type: 'challenge',
              theory: `<h2>Array Search Methods</h2>

<h3>indexOf() and lastIndexOf()</h3>
<pre><code>let fruits = ["apple", "banana", "cherry", "banana"];
console.log(fruits.indexOf("banana"));     // 1 (first occurrence)
console.log(fruits.lastIndexOf("banana")); // 3 (last occurrence)
console.log(fruits.indexOf("grape"));      // -1 (not found)</code></pre>

<h3>includes()</h3>
<pre><code>let nums = [1, 2, 3, 4, 5];
console.log(nums.includes(3)); // true
console.log(nums.includes(6)); // false</code></pre>

<h3>find() — First Element Matching a Condition</h3>
<pre><code>let numbers = [4, 9, 16, 25];
let found = numbers.find(num => num > 10);
console.log(found); // 16 (first match)</code></pre>

<h3>findIndex() — Index of First Match</h3>
<pre><code>let ages = [15, 22, 18, 30];
let index = ages.findIndex(age => age >= 18);
console.log(index); // 1</code></pre>

<h3>filter() — All Elements Matching a Condition</h3>
<pre><code>let scores = [45, 80, 92, 33, 78, 95];
let passing = scores.filter(score => score >= 70);
console.log(passing); // [80, 92, 78, 95]</code></pre>

<h3>every() and some()</h3>
<pre><code>let nums = [2, 4, 6, 8];
console.log(nums.every(n => n % 2 === 0)); // true (all even)
console.log(nums.some(n => n > 5));        // true (at least one > 5)</code></pre>`,
              challenge: {
                description: 'Create an array [5, 12, 8, 130, 44]. Use find() to get the first element greater than 10. Print the result.',
                starterCode: 'let numbers = [5, 12, 8, 130, 44];\n// Find first element > 10\n',
                expectedOutput: '12',
                hints: [
                  'Use numbers.find() with a callback',
                  'The callback should check if num > 10',
                  'let numbers = [5, 12, 8, 130, 44];\nconsole.log(numbers.find(num => num > 10));'
                ]
              },
              quiz: [
                {
                  question: 'What does indexOf return if the element is not found?',
                  options: ['0', 'false', 'null', '-1'],
                  correct: 3
                },
                {
                  question: 'What does find() return?',
                  options: ['An index', 'The first matching element', 'All matching elements', 'A boolean'],
                  correct: 1
                },
                {
                  question: 'What does every() return?',
                  options: ['An array', 'A number', 'A boolean', 'An element'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_arr_5',
              title: 'Array Transformation',
              type: 'challenge',
              theory: `<h2>Array Transformation</h2>

<h3>map() — Transform Each Element</h3>
<pre><code>let nums = [1, 2, 3, 4];
let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

let names = ["alice", "bob"];
let upper = names.map(n => n.toUpperCase());
console.log(upper); // ["ALICE", "BOB"]</code></pre>

<h3>join() — Array to String</h3>
<pre><code>let words = ["Hello", "World"];
console.log(words.join(" "));  // "Hello World"
console.log(words.join("-"));  // "Hello-World"
console.log(words.join(""));   // "HelloWorld"</code></pre>

<h3>concat() — Merge Arrays</h3>
<pre><code>let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c); // [1, 2, 3, 4]</code></pre>

<h3>Spread Operator (...)</h3>
<pre><code>let first = [1, 2, 3];
let second = [4, 5, 6];
let all = [...first, ...second];
console.log(all); // [1, 2, 3, 4, 5, 6]

// Copy an array
let original = [1, 2, 3];
let copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] (unchanged)
console.log(copy);     // [1, 2, 3, 4]</code></pre>

<h3>slice() — Extract a Portion (Non-Destructive)</h3>
<pre><code>let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3)); // [2, 3]
console.log(arr.slice(2));    // [3, 4, 5]
console.log(arr);             // [1, 2, 3, 4, 5] (unchanged)</code></pre>`,
              challenge: {
                description: 'Create an array [1, 2, 3, 4, 5]. Use map to create a new array where each element is tripled. Print the new array joined with ", ".',
                starterCode: 'let nums = [1, 2, 3, 4, 5];\n// Triple each element and print\n',
                expectedOutput: '3, 6, 9, 12, 15',
                hints: [
                  'Use .map(n => n * 3) to triple',
                  'Use .join(", ") to format the output',
                  'let nums = [1, 2, 3, 4, 5];\nlet tripled = nums.map(n => n * 3);\nconsole.log(tripled.join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'Does map() modify the original array?',
                  options: ['Yes', 'No, it returns a new array', 'Sometimes', 'Only with numbers'],
                  correct: 1
                },
                {
                  question: 'What does [1,2,3].join("-") return?',
                  options: ['"123"', '"1-2-3"', '["1-2-3"]', '"1,2,3"'],
                  correct: 1
                },
                {
                  question: 'What does the spread operator (...) do with arrays?',
                  options: ['Deletes elements', 'Spreads elements into individual values', 'Sorts the array', 'Reverses the array'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_arr_6',
              title: 'Sorting and Reducing',
              type: 'mastery',
              theory: `<h2>Sorting and Reducing</h2>

<h3>sort()</h3>
<p>By default, sort() converts to strings and sorts alphabetically:</p>
<pre><code>let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]

// Numbers need a compare function!
let nums = [40, 1, 5, 200];
nums.sort(); // WRONG: ["1", "200", "40", "5"] (string sort)
nums.sort((a, b) => a - b); // RIGHT: [1, 5, 40, 200]
console.log(nums); // [1, 5, 40, 200]</code></pre>

<h3>reverse()</h3>
<pre><code>let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]</code></pre>

<h3>reduce() — Condense Array to Single Value</h3>
<pre><code>let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log(sum); // 15</code></pre>

<p>How reduce works:</p>
<ol>
  <li>Start with initial value (0)</li>
  <li>For each element: accumulator = accumulator + current</li>
  <li>0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15</li>
</ol>

<h3>Practical reduce Examples</h3>
<pre><code>// Find max value
let max = [3, 7, 2, 9, 4].reduce((a, b) => a > b ? a : b);
console.log(max); // 9

// Count occurrences
let votes = ["yes", "no", "yes", "yes", "no"];
let counts = votes.reduce((acc, vote) => {
  acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});
console.log(counts); // {yes: 3, no: 2}</code></pre>`,
              challenge: {
                description: 'Use reduce to find the sum of [10, 20, 30, 40, 50]. Print the sum.',
                starterCode: 'let numbers = [10, 20, 30, 40, 50];\n// Use reduce to find the sum\n',
                expectedOutput: '150',
                hints: [
                  'Use .reduce((acc, curr) => acc + curr, 0)',
                  'The second argument to reduce is the initial value',
                  'let numbers = [10, 20, 30, 40, 50];\nlet sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);'
                ]
              },
              quiz: [
                {
                  question: 'Why does [40,1,5,200].sort() give wrong numeric order?',
                  options: ['Bug in JavaScript', 'It sorts as strings by default', 'Arrays cannot be sorted', 'It only sorts small arrays'],
                  correct: 1
                },
                {
                  question: 'What does sort((a,b) => a - b) do?',
                  options: ['Sorts strings', 'Sorts numbers descending', 'Sorts numbers ascending', 'Reverses the array'],
                  correct: 2
                },
                {
                  question: 'What does reduce() return?',
                  options: ['An array', 'A single value', 'A boolean', 'Always a number'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'objects-basics',
          title: 'Objects Basics',
          lessons: [
            {
              id: 'js_obj_1',
              title: 'Creating Objects',
              type: 'challenge',
              theory: `<h2>Creating Objects</h2>
<p>An <strong>object</strong> is a collection of related data and functionality, stored as key-value pairs (called properties).</p>

<h3>Object Literal Syntax</h3>
<pre><code>let person = {
  name: "Alice",
  age: 30,
  city: "Paris"
};
console.log(person); // {name: "Alice", age: 30, city: "Paris"}</code></pre>

<h3>Accessing Properties</h3>
<pre><code>let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};

// Dot notation (preferred)
console.log(car.brand);  // "Toyota"
console.log(car.year);   // 2022

// Bracket notation (for dynamic keys or special characters)
console.log(car["model"]); // "Camry"

let key = "year";
console.log(car[key]);   // 2022</code></pre>

<h3>Modifying Properties</h3>
<pre><code>let user = { name: "Bob", age: 25 };
user.age = 26;          // Update existing
user.email = "b@b.com"; // Add new property
console.log(user.age);  // 26</code></pre>

<h3>Deleting Properties</h3>
<pre><code>let obj = { a: 1, b: 2, c: 3 };
delete obj.b;
console.log(obj); // {a: 1, c: 3}</code></pre>

<h3>Checking Properties</h3>
<pre><code>let user = { name: "Alice", age: 30 };
console.log("name" in user);   // true
console.log("email" in user);  // false</code></pre>`,
              challenge: {
                description: 'Create an object "book" with properties: title = "JavaScript Guide", pages = 350, author = "MDN". Print the title and pages.',
                starterCode: '// Create the book object and print title and pages\n',
                expectedOutput: 'JavaScript Guide\n350',
                hints: [
                  'Use object literal syntax with curly braces',
                  'Access with dot notation',
                  'let book = {\n  title: "JavaScript Guide",\n  pages: 350,\n  author: "MDN"\n};\nconsole.log(book.title);\nconsole.log(book.pages);'
                ]
              },
              quiz: [
                {
                  question: 'How do you access a property with a variable key?',
                  options: ['obj.key', 'obj[key]', 'obj{key}', 'obj(key)'],
                  correct: 1
                },
                {
                  question: 'What is each item in an object called?',
                  options: ['An element', 'A property (key-value pair)', 'An index', 'A variable'],
                  correct: 1
                },
                {
                  question: 'How do you check if "name" exists in an object?',
                  options: ['obj.has("name")', '"name" in obj', 'obj.includes("name")', 'obj.exists("name")'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_obj_2',
              title: 'Object Methods',
              type: 'challenge',
              theory: `<h2>Object Methods</h2>
<p>When a function is a property of an object, we call it a <strong>method</strong>.</p>

<h3>Defining Methods</h3>
<pre><code>let calculator = {
  add: function(a, b) {
    return a + b;
  },
  // Shorthand syntax (preferred):
  subtract(a, b) {
    return a - b;
  }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(10, 4)); // 6</code></pre>

<h3>The this Keyword</h3>
<p><code>this</code> refers to the object the method belongs to:</p>
<pre><code>let person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log("Hi, I'm " + this.name);
  },
  getInfo() {
    return this.name + " is " + this.age;
  }
};

person.greet();              // "Hi, I'm Alice"
console.log(person.getInfo()); // "Alice is 30"</code></pre>

<h3>Adding Methods Later</h3>
<pre><code>let dog = { name: "Rex", breed: "Labrador" };
dog.bark = function() {
  console.log(this.name + " says: Woof!");
};
dog.bark(); // "Rex says: Woof!"</code></pre>

<h3>Common Built-in Object Methods</h3>
<pre><code>let user = { name: "Bob", age: 25, city: "NYC" };

console.log(Object.keys(user));   // ["name", "age", "city"]
console.log(Object.values(user)); // ["Bob", 25, "NYC"]
console.log(Object.entries(user));
// [["name","Bob"], ["age",25], ["city","NYC"]]</code></pre>`,
              challenge: {
                description: 'Create an object "dog" with name "Buddy" and a method "speak" that prints "{name} says Woof!". Call dog.speak().',
                starterCode: '// Create dog object with speak method\n',
                expectedOutput: 'Buddy says Woof!',
                hints: [
                  'Use this.name inside the method',
                  'Define speak as a method using the shorthand syntax',
                  'let dog = {\n  name: "Buddy",\n  speak() {\n    console.log(this.name + " says Woof!");\n  }\n};\ndog.speak();'
                ]
              },
              quiz: [
                {
                  question: 'What does "this" refer to inside a method?',
                  options: ['The global object', 'The function itself', 'The object the method belongs to', 'The parameter'],
                  correct: 2
                },
                {
                  question: 'What does Object.keys(obj) return?',
                  options: ['An array of values', 'An array of key names', 'The number of keys', 'The object itself'],
                  correct: 1
                },
                {
                  question: 'Which is the shorthand method syntax?',
                  options: ['name: function() {}', 'name() {}', 'function name() {}', 'name => {}'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_obj_3',
              title: 'Nested Objects',
              type: 'challenge',
              theory: `<h2>Nested Objects</h2>
<p>Objects can contain other objects and arrays, creating complex data structures.</p>

<h3>Nested Object Example</h3>
<pre><code>let student = {
  name: "Alice",
  age: 20,
  address: {
    street: "123 Main St",
    city: "Boston",
    zip: "02101"
  },
  courses: ["Math", "Science", "English"]
};

// Accessing nested properties
console.log(student.address.city);   // "Boston"
console.log(student.courses[0]);     // "Math"
console.log(student.courses.length); // 3</code></pre>

<h3>Modifying Nested Properties</h3>
<pre><code>student.address.city = "Cambridge";
student.courses.push("Art");
console.log(student.address.city); // "Cambridge"</code></pre>

<h3>Iterating Over Object Properties</h3>
<pre><code>let scores = { math: 95, science: 88, english: 72 };

for (let subject in scores) {
  console.log(subject + ": " + scores[subject]);
}
// "math: 95"
// "science: 88"
// "english: 72"</code></pre>

<h3>Destructuring Nested Objects</h3>
<pre><code>let user = {
  name: "Bob",
  location: { city: "NYC", country: "USA" }
};

let { name, location: { city } } = user;
console.log(name); // "Bob"
console.log(city); // "NYC"</code></pre>`,
              challenge: {
                description: 'Create a "student" object with name "John" and an address object containing city "Mumbai". Print the student name and city.',
                starterCode: '// Create nested student object\n',
                expectedOutput: 'John\nMumbai',
                hints: [
                  'Nest an address object inside student',
                  'Access with student.address.city',
                  'let student = {\n  name: "John",\n  address: {\n    city: "Mumbai"\n  }\n};\nconsole.log(student.name);\nconsole.log(student.address.city);'
                ]
              },
              quiz: [
                {
                  question: 'How do you access a nested property?',
                  options: ['obj[prop1][prop2]', 'obj.prop1.prop2', 'Both work', 'obj->prop1->prop2'],
                  correct: 2
                },
                {
                  question: 'What loop is used to iterate over object keys?',
                  options: ['for...of', 'for...in', 'forEach', 'while'],
                  correct: 1
                },
                {
                  question: 'Can an object contain an array as a property?',
                  options: ['No', 'Yes', 'Only strings', 'Only at top level'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_obj_4',
              title: 'Destructuring',
              type: 'challenge',
              theory: `<h2>Destructuring</h2>
<p>Destructuring lets you extract values from objects and arrays into variables with concise syntax.</p>

<h3>Object Destructuring</h3>
<pre><code>let person = { name: "Alice", age: 30, city: "Paris" };

// Without destructuring:
let name1 = person.name;
let age1 = person.age;

// With destructuring:
let { name, age, city } = person;
console.log(name); // "Alice"
console.log(age);  // 30
console.log(city); // "Paris"</code></pre>

<h3>Renaming Variables</h3>
<pre><code>let { name: firstName, age: years } = person;
console.log(firstName); // "Alice"
console.log(years);     // 30</code></pre>

<h3>Default Values</h3>
<pre><code>let { name, email = "not provided" } = { name: "Bob" };
console.log(email); // "not provided"</code></pre>

<h3>Array Destructuring</h3>
<pre><code>let colors = ["red", "green", "blue"];
let [first, second, third] = colors;
console.log(first);  // "red"
console.log(second); // "green"

// Skip elements
let [, , last] = colors;
console.log(last); // "blue"

// Rest pattern
let [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]</code></pre>

<h3>Function Parameter Destructuring</h3>
<pre><code>function printUser({ name, age }) {
  console.log(name + " is " + age);
}
printUser({ name: "Alice", age: 30 }); // "Alice is 30"</code></pre>`,
              challenge: {
                description: 'Create an object with properties x: 10, y: 20, z: 30. Use destructuring to extract x and y, then print their sum.',
                starterCode: 'let point = { x: 10, y: 20, z: 30 };\n// Destructure and print sum of x and y\n',
                expectedOutput: '30',
                hints: [
                  'Use let { x, y } = point',
                  'Print x + y',
                  'let point = { x: 10, y: 20, z: 30 };\nlet { x, y } = point;\nconsole.log(x + y);'
                ]
              },
              quiz: [
                {
                  question: 'What does let { name } = obj do?',
                  options: ['Creates an object', 'Extracts name property into a variable', 'Deletes name from obj', 'Renames the object'],
                  correct: 1
                },
                {
                  question: 'How do you rename during destructuring?',
                  options: ['{ old: new }', '{ new = old }', '{ old as new }', '{ old -> new }'],
                  correct: 0
                },
                {
                  question: 'What does let [a, , b] = [1, 2, 3] give for b?',
                  options: ['2', '3', 'undefined', 'null'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_obj_5',
              title: 'Spread with Objects',
              type: 'mastery',
              theory: `<h2>Spread with Objects</h2>
<p>The spread operator (<code>...</code>) works with objects too, letting you copy and merge objects easily.</p>

<h3>Copying Objects</h3>
<pre><code>let original = { a: 1, b: 2, c: 3 };
let copy = { ...original };
copy.d = 4;
console.log(original); // {a: 1, b: 2, c: 3} (unchanged)
console.log(copy);     // {a: 1, b: 2, c: 3, d: 4}</code></pre>

<h3>Merging Objects</h3>
<pre><code>let defaults = { theme: "light", fontSize: 14, lang: "en" };
let userPrefs = { theme: "dark", fontSize: 18 };

let settings = { ...defaults, ...userPrefs };
console.log(settings);
// {theme: "dark", fontSize: 18, lang: "en"}
// Later properties override earlier ones!</code></pre>

<h3>Adding/Overriding Properties</h3>
<pre><code>let user = { name: "Alice", age: 30 };
let updated = { ...user, age: 31, email: "alice@mail.com" };
console.log(updated);
// {name: "Alice", age: 31, email: "alice@mail.com"}</code></pre>

<h3>Shallow Copy Warning</h3>
<pre><code>let obj = { name: "Bob", address: { city: "NYC" } };
let copy = { ...obj };
copy.address.city = "LA"; // Modifies original too!
console.log(obj.address.city); // "LA" (unexpected!)
// Spread only copies one level deep (shallow copy)</code></pre>

<h3>Object.assign() Alternative</h3>
<pre><code>let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // {a: 1, b: 2, c: 3}</code></pre>`,
              challenge: {
                description: 'Create two objects: defaults = {color: "blue", size: "medium"} and custom = {size: "large"}. Merge them with spread (custom overrides defaults). Print the merged size.',
                starterCode: 'let defaults = { color: "blue", size: "medium" };\nlet custom = { size: "large" };\n// Merge and print size\n',
                expectedOutput: 'large',
                hints: [
                  'Use spread: { ...defaults, ...custom }',
                  'Later spread overrides earlier properties',
                  'let defaults = { color: "blue", size: "medium" };\nlet custom = { size: "large" };\nlet merged = { ...defaults, ...custom };\nconsole.log(merged.size);'
                ]
              },
              quiz: [
                {
                  question: 'When merging { ...a, ...b }, which takes priority?',
                  options: ['a', 'b (later wins)', 'Neither', 'Error'],
                  correct: 1
                },
                {
                  question: 'Does spread create a deep copy?',
                  options: ['Yes', 'No, only shallow', 'Depends on content', 'Only for arrays'],
                  correct: 1
                },
                {
                  question: 'What does { ...obj, x: 5 } do?',
                  options: ['Modifies obj', 'Creates new object with obj properties + x:5', 'Deletes x from obj', 'Error'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'bill-calculator-project',
          title: 'Bill Calculator PROJECT',
          lessons: [
            {
              id: 'js_proj1_1',
              title: 'Project Setup - Bill Data Structure',
              type: 'project',
              theory: `<h2>Bill Calculator Project - Setup</h2>
<p>Let's build a bill calculator that calculates totals, tax, tips, and splits the bill among friends. This project combines everything you've learned!</p>

<h3>What We're Building</h3>
<ul>
  <li>Calculate subtotal from a list of items</li>
  <li>Apply tax percentage</li>
  <li>Calculate tip amount</li>
  <li>Split the bill among a group</li>
</ul>

<h3>Data Structure</h3>
<pre><code>// A bill has items, each with a name and price
let bill = {
  items: [
    { name: "Burger", price: 12.99 },
    { name: "Fries", price: 4.99 },
    { name: "Drink", price: 2.99 }
  ],
  taxRate: 0.08,    // 8% tax
  tipPercent: 0.15  // 15% tip
};

// We'll calculate:
// subtotal = sum of all item prices
// tax = subtotal * taxRate
// tip = subtotal * tipPercent
// total = subtotal + tax + tip</code></pre>

<h3>Step 1: Calculate Subtotal</h3>
<pre><code>function calculateSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

let subtotal = calculateSubtotal(bill.items);
console.log(subtotal); // 20.97</code></pre>`,
              challenge: {
                description: 'Create an array of items: [{name: "Pizza", price: 15.00}, {name: "Salad", price: 8.50}, {name: "Water", price: 2.00}]. Write a function calculateSubtotal that uses reduce to sum all prices. Print the subtotal.',
                starterCode: '// Create items array and calculateSubtotal function\n',
                expectedOutput: '25.5',
                hints: [
                  'Use reduce to sum item.price values',
                  'The initial value should be 0',
                  'let items = [\n  { name: "Pizza", price: 15.00 },\n  { name: "Salad", price: 8.50 },\n  { name: "Water", price: 2.00 }\n];\n\nfunction calculateSubtotal(items) {\n  return items.reduce((sum, item) => sum + item.price, 0);\n}\n\nconsole.log(calculateSubtotal(items));'
                ]
              },
              quiz: [
                {
                  question: 'What does reduce do with an array of objects?',
                  options: ['Filters objects', 'Reduces the array size', 'Accumulates values into a single result', 'Sorts objects'],
                  correct: 2
                },
                {
                  question: 'Why is 0 passed as the second argument to reduce?',
                  options: ['It is the minimum value', 'It is the initial accumulator value', 'It limits iterations', 'It is the index'],
                  correct: 1
                },
                {
                  question: 'What pattern stores a name and price together?',
                  options: ['An array', 'A string', 'An object with properties', 'A function'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_proj1_2',
              title: 'Tax and Tip Calculations',
              type: 'project',
              theory: `<h2>Tax and Tip Calculations</h2>
<p>Now let's add tax and tip calculations to our bill calculator.</p>

<h3>Calculating Tax</h3>
<pre><code>function calculateTax(subtotal, taxRate) {
  return subtotal * taxRate;
}

// Example: 8% tax on $20.97
let tax = calculateTax(20.97, 0.08);
console.log(tax.toFixed(2)); // "1.68"</code></pre>

<h3>Calculating Tip</h3>
<pre><code>function calculateTip(subtotal, tipPercent) {
  return subtotal * tipPercent;
}

// Example: 15% tip on $20.97
let tip = calculateTip(20.97, 0.15);
console.log(tip.toFixed(2)); // "3.15"</code></pre>

<h3>toFixed() for Currency</h3>
<p>The <code>toFixed(n)</code> method formats a number to n decimal places (returns a string):</p>
<pre><code>let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
console.log(num.toFixed(0)); // "3"

let price = 10;
console.log(price.toFixed(2)); // "10.00"</code></pre>

<h3>Getting the Total</h3>
<pre><code>function getTotal(subtotal, taxRate, tipPercent) {
  let tax = calculateTax(subtotal, taxRate);
  let tip = calculateTip(subtotal, tipPercent);
  return subtotal + tax + tip;
}

let total = getTotal(20.97, 0.08, 0.15);
console.log("$" + total.toFixed(2)); // "$25.79"</code></pre>`,
              challenge: {
                description: 'Write functions calculateTax(subtotal, rate) and calculateTip(subtotal, percent). Given subtotal = 50.00, taxRate = 0.10, tipPercent = 0.20, calculate and print the total (subtotal + tax + tip) formatted to 2 decimal places.',
                starterCode: 'let subtotal = 50.00;\nlet taxRate = 0.10;\nlet tipPercent = 0.20;\n// Write functions and calculate total\n',
                expectedOutput: '65.00',
                hints: [
                  'Tax = 50 * 0.10 = 5, Tip = 50 * 0.20 = 10',
                  'Total = 50 + 5 + 10 = 65',
                  'let subtotal = 50.00;\nlet taxRate = 0.10;\nlet tipPercent = 0.20;\n\nfunction calculateTax(subtotal, rate) {\n  return subtotal * rate;\n}\n\nfunction calculateTip(subtotal, percent) {\n  return subtotal * percent;\n}\n\nlet total = subtotal + calculateTax(subtotal, taxRate) + calculateTip(subtotal, tipPercent);\nconsole.log(total.toFixed(2));'
                ]
              },
              quiz: [
                {
                  question: 'What does toFixed(2) do?',
                  options: ['Rounds to 2 digits', 'Formats to 2 decimal places as a string', 'Multiplies by 100', 'Truncates to integer'],
                  correct: 1
                },
                {
                  question: 'What is 10% of $45?',
                  options: ['$4.50', '$4.00', '$10.00', '$45.10'],
                  correct: 0
                },
                {
                  question: 'Why separate tax and tip into different functions?',
                  options: ['Required by JavaScript', 'Single responsibility and reusability', 'Performance', 'No good reason'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_proj1_3',
              title: 'Bill Splitting',
              type: 'project',
              theory: `<h2>Bill Splitting</h2>
<p>The final feature: splitting the total among friends.</p>

<h3>Even Split</h3>
<pre><code>function splitBill(total, people) {
  if (people <= 0) return "Invalid number of people";
  return (total / people).toFixed(2);
}

let total = 65.00;
console.log("Each pays: $" + splitBill(total, 4));
// "Each pays: $16.25"</code></pre>

<h3>Handling Edge Cases</h3>
<pre><code>function splitBill(total, people) {
  if (people <= 0) return "Need at least 1 person";
  if (total <= 0) return "Nothing to split";
  
  let perPerson = total / people;
  return perPerson.toFixed(2);
}</code></pre>

<h3>Display a Summary</h3>
<pre><code>function billSummary(items, taxRate, tipPercent, people) {
  let subtotal = items.reduce((sum, item) => sum + item.price, 0);
  let tax = subtotal * taxRate;
  let tip = subtotal * tipPercent;
  let total = subtotal + tax + tip;
  let perPerson = total / people;
  
  console.log("Subtotal: $" + subtotal.toFixed(2));
  console.log("Tax: $" + tax.toFixed(2));
  console.log("Tip: $" + tip.toFixed(2));
  console.log("Total: $" + total.toFixed(2));
  console.log("Per person (" + people + "): $" + perPerson.toFixed(2));
}</code></pre>

<h3>Rounding Issues</h3>
<p>When splitting bills, rounding can cause the sum to not match exactly. A common solution is to give the remainder to one person:</p>
<pre><code>let total = 100;
let people = 3;
let each = Math.floor(total * 100 / people) / 100; // $33.33
let remainder = total - (each * people); // $0.01
// First person pays $33.34, others pay $33.33</code></pre>`,
              challenge: {
                description: 'Write a splitBill function that takes total and numPeople. Given total = 120.00 and 4 people, print "Each pays: $" followed by the per-person amount formatted to 2 decimals.',
                starterCode: 'let total = 120.00;\nlet numPeople = 4;\n// Write splitBill and display result\n',
                expectedOutput: 'Each pays: $30.00',
                hints: [
                  'Divide total by numPeople',
                  'Use toFixed(2) and string concatenation',
                  'let total = 120.00;\nlet numPeople = 4;\n\nfunction splitBill(total, people) {\n  return (total / people).toFixed(2);\n}\n\nconsole.log("Each pays: $" + splitBill(total, numPeople));'
                ]
              },
              quiz: [
                {
                  question: 'What is 100 / 3 formatted with toFixed(2)?',
                  options: ['"33.33"', '"33.34"', '33.33', '"33.3"'],
                  correct: 0
                },
                {
                  question: 'Why check if people <= 0?',
                  options: ['Style preference', 'Prevents division by zero', 'Required by JavaScript', 'Performance optimization'],
                  correct: 1
                },
                {
                  question: 'What type does toFixed() return?',
                  options: ['Number', 'String', 'Boolean', 'Object'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_proj1_4',
              title: 'Complete Bill Calculator',
              type: 'project',
              theory: `<h2>Complete Bill Calculator</h2>
<p>Let's put everything together into a complete, well-structured bill calculator.</p>

<h3>Full Implementation</h3>
<pre><code>function createBillCalculator(items, taxRate, tipPercent) {
  let subtotal = items.reduce((sum, item) => sum + item.price, 0);
  let tax = subtotal * taxRate;
  let tip = subtotal * tipPercent;
  let total = subtotal + tax + tip;
  
  return {
    subtotal,
    tax,
    tip,
    total,
    split(people) {
      return (total / people).toFixed(2);
    },
    summary(people) {
      console.log("--- Bill Summary ---");
      console.log("Subtotal: $" + subtotal.toFixed(2));
      console.log("Tax (" + (taxRate * 100) + "%): $" + tax.toFixed(2));
      console.log("Tip (" + (tipPercent * 100) + "%): $" + tip.toFixed(2));
      console.log("Total: $" + total.toFixed(2));
      if (people > 1) {
        console.log("Split " + people + " ways: $" + this.split(people) + " each");
      }
    }
  };
}</code></pre>

<h3>Using the Calculator</h3>
<pre><code>let myBill = createBillCalculator(
  [
    { name: "Steak", price: 25.00 },
    { name: "Wine", price: 12.00 },
    { name: "Dessert", price: 8.00 }
  ],
  0.08,
  0.18
);

myBill.summary(2);</code></pre>

<p>This project demonstrates: objects, arrays, functions, reduce, methods, template literals, and good code organization.</p>`,
              challenge: {
                description: 'Create a complete bill: items = [{name:"Pasta", price:18.00}, {name:"Soda", price:3.00}], taxRate = 0.10, tipPercent = 0.15. Calculate and print: "Subtotal: $21.00", "Tax: $2.10", "Tip: $3.15", "Total: $26.25"',
                starterCode: '// Build the complete bill calculator\n',
                expectedOutput: 'Subtotal: $21.00\nTax: $2.10\nTip: $3.15\nTotal: $26.25',
                hints: [
                  'Calculate subtotal with reduce, then tax and tip',
                  'Use toFixed(2) for all currency values',
                  'let items = [{name:"Pasta", price:18.00}, {name:"Soda", price:3.00}];\nlet taxRate = 0.10;\nlet tipPercent = 0.15;\n\nlet subtotal = items.reduce((sum, item) => sum + item.price, 0);\nlet tax = subtotal * taxRate;\nlet tip = subtotal * tipPercent;\nlet total = subtotal + tax + tip;\n\nconsole.log("Subtotal: $" + subtotal.toFixed(2));\nconsole.log("Tax: $" + tax.toFixed(2));\nconsole.log("Tip: $" + tip.toFixed(2));\nconsole.log("Total: $" + total.toFixed(2));'
                ]
              },
              quiz: [
                {
                  question: 'What JavaScript concept lets us return an object with methods?',
                  options: ['Closure with factory function', 'Class inheritance', 'Global scope', 'Variable hoisting'],
                  correct: 0
                },
                {
                  question: 'Why use reduce for subtotal instead of a loop?',
                  options: ['It is faster', 'It is more concise and functional', 'Loops cannot work with objects', 'No reason'],
                  correct: 1
                },
                {
                  question: 'What does the complete project demonstrate?',
                  options: ['Only arrays', 'Only functions', 'Objects, arrays, functions, and methods combined', 'Only string formatting'],
                  correct: 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      description: 'Level up with advanced array methods, DOM manipulation, events, async programming, and build a Todo app.',
      chapters: [
        {
          id: 'array-methods',
          title: 'Array Methods',
          lessons: [
            {
              id: 'js_am_1',
              title: 'map() In Depth',
              type: 'challenge',
              theory: `<h2>map() In Depth</h2>
<p>The <code>map()</code> method creates a new array by transforming every element with a callback function.</p>

<h3>Basic Transformation</h3>
<pre><code>let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16, 25]</code></pre>

<h3>Transforming Objects</h3>
<pre><code>let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

let names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]

let descriptions = users.map(user => user.name + " is " + user.age);
console.log(descriptions);
// ["Alice is 25", "Bob is 30", "Charlie is 35"]</code></pre>

<h3>Using Index Parameter</h3>
<pre><code>let items = ["apple", "banana", "cherry"];
let numbered = items.map((item, index) => (index + 1) + ". " + item);
console.log(numbered);
// ["1. apple", "2. banana", "3. cherry"]</code></pre>

<h3>Chaining map with Other Methods</h3>
<pre><code>let prices = [10.5, 20.3, 5.7, 15.9];
let formatted = prices
  .filter(p => p > 10)
  .map(p => "$" + p.toFixed(2));
console.log(formatted); // ["$10.50", "$20.30", "$15.90"]</code></pre>

<p><strong>Key Rule:</strong> map() always returns a new array of the SAME length. It never modifies the original.</p>`,
              challenge: {
                description: 'Given an array of names ["alice", "bob", "charlie"], use map to capitalize the first letter of each name. Print the result joined with ", ".',
                starterCode: 'let names = ["alice", "bob", "charlie"];\n// Capitalize first letter of each\n',
                expectedOutput: 'Alice, Bob, Charlie',
                hints: [
                  'Use map with a function that capitalizes',
                  'name[0].toUpperCase() + name.slice(1)',
                  'let names = ["alice", "bob", "charlie"];\nlet capitalized = names.map(name => name[0].toUpperCase() + name.slice(1));\nconsole.log(capitalized.join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'Does map() modify the original array?',
                  options: ['Yes', 'No, it returns a new array', 'Sometimes', 'Only with objects'],
                  correct: 1
                },
                {
                  question: 'If you map an array of 5 elements, the result has:',
                  options: ['Fewer elements', 'More elements', 'Exactly 5 elements', 'It depends'],
                  correct: 2
                },
                {
                  question: 'What does [1,2,3].map(x => x * 2) return?',
                  options: ['[2,4,6]', '[1,2,3,2,4,6]', '12', '[1,4,9]'],
                  correct: 0
                }
              ]
            },
            {
              id: 'js_am_2',
              title: 'filter() In Depth',
              type: 'challenge',
              theory: `<h2>filter() In Depth</h2>
<p>The <code>filter()</code> method creates a new array with only the elements that pass a test (callback returns true).</p>

<h3>Basic Filtering</h3>
<pre><code>let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

let bigNums = numbers.filter(n => n > 5);
console.log(bigNums); // [6, 7, 8, 9, 10]</code></pre>

<h3>Filtering Objects</h3>
<pre><code>let products = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Phone", price: 699, inStock: false },
  { name: "Tablet", price: 449, inStock: true },
  { name: "Watch", price: 299, inStock: true }
];

let available = products.filter(p => p.inStock);
console.log(available.length); // 3

let affordable = products.filter(p => p.price < 500);
console.log(affordable.map(p => p.name)); // ["Tablet", "Watch"]</code></pre>

<h3>Removing Falsy Values</h3>
<pre><code>let mixed = [0, "hello", "", null, 42, undefined, "world"];
let truthy = mixed.filter(Boolean);
console.log(truthy); // ["hello", 42, "world"]</code></pre>

<h3>Removing Duplicates (with Set)</h3>
<pre><code>let nums = [1, 2, 2, 3, 3, 3, 4];
let unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4]</code></pre>`,
              challenge: {
                description: 'Given [15, 22, 8, 33, 5, 41, 12], filter to keep only numbers greater than 15. Print the filtered array joined with ", ".',
                starterCode: 'let numbers = [15, 22, 8, 33, 5, 41, 12];\n// Filter numbers > 15\n',
                expectedOutput: '22, 33, 41',
                hints: [
                  'Use .filter(n => n > 15)',
                  'Join the result with ", "',
                  'let numbers = [15, 22, 8, 33, 5, 41, 12];\nlet result = numbers.filter(n => n > 15);\nconsole.log(result.join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'What does the filter callback return?',
                  options: ['The new value', 'true or false', 'The index', 'The array'],
                  correct: 1
                },
                {
                  question: 'Can filter return an array larger than the original?',
                  options: ['Yes', 'No, same size or smaller', 'Only with objects', 'It depends'],
                  correct: 1
                },
                {
                  question: 'What does filter(Boolean) remove?',
                  options: ['All elements', 'All truthy values', 'All falsy values', 'Nothing'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_am_3',
              title: 'reduce() Mastery',
              type: 'challenge',
              theory: `<h2>reduce() Mastery</h2>
<p><code>reduce()</code> is the most versatile array method — it can implement map, filter, and much more.</p>

<h3>Review: Basic Sum</h3>
<pre><code>let nums = [1, 2, 3, 4, 5];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15</code></pre>

<h3>Building an Object</h3>
<pre><code>let fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];
let counts = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(counts); // {apple: 3, banana: 2, cherry: 1}</code></pre>

<h3>Flattening Arrays</h3>
<pre><code>let nested = [[1, 2], [3, 4], [5, 6]];
let flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat); // [1, 2, 3, 4, 5, 6]</code></pre>

<h3>Grouping by Property</h3>
<pre><code>let people = [
  { name: "Alice", dept: "Engineering" },
  { name: "Bob", dept: "Marketing" },
  { name: "Charlie", dept: "Engineering" }
];

let byDept = people.reduce((groups, person) => {
  let dept = person.dept;
  groups[dept] = groups[dept] || [];
  groups[dept].push(person.name);
  return groups;
}, {});
console.log(byDept);
// {Engineering: ["Alice", "Charlie"], Marketing: ["Bob"]}</code></pre>

<h3>Implementing map with reduce</h3>
<pre><code>let doubled = [1,2,3].reduce((acc, n) => {
  acc.push(n * 2);
  return acc;
}, []);
console.log(doubled); // [2, 4, 6]</code></pre>`,
              challenge: {
                description: 'Given ["a", "b", "a", "c", "b", "a"], use reduce to count occurrences of each letter. Print the count of "a".',
                starterCode: 'let letters = ["a", "b", "a", "c", "b", "a"];\n// Count occurrences using reduce\n',
                expectedOutput: '3',
                hints: [
                  'Use reduce with an empty object {} as initial value',
                  'For each letter, increment its count in the accumulator',
                  'let letters = ["a", "b", "a", "c", "b", "a"];\nlet counts = letters.reduce((acc, letter) => {\n  acc[letter] = (acc[letter] || 0) + 1;\n  return acc;\n}, {});\nconsole.log(counts["a"]);'
                ]
              },
              quiz: [
                {
                  question: 'What is the "accumulator" in reduce?',
                  options: ['The current element', 'The running result that builds up', 'The index', 'The original array'],
                  correct: 1
                },
                {
                  question: 'What is the initial value in reduce((acc, curr) => ..., {})?',
                  options: ['An empty array', 'An empty object', 'undefined', '0'],
                  correct: 1
                },
                {
                  question: 'Can reduce return a different type than the array elements?',
                  options: ['No', 'Yes, any type', 'Only numbers', 'Only arrays'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_am_4',
              title: 'Chaining Array Methods',
              type: 'challenge',
              theory: `<h2>Chaining Array Methods</h2>
<p>Since map, filter, and other methods return arrays, you can chain them together for powerful data processing.</p>

<h3>Basic Chain</h3>
<pre><code>let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = numbers
  .filter(n => n % 2 === 0)    // [2, 4, 6, 8, 10]
  .map(n => n * n)              // [4, 16, 36, 64, 100]
  .filter(n => n > 20);         // [36, 64, 100]

console.log(result); // [36, 64, 100]</code></pre>

<h3>Real-World Example: Processing Users</h3>
<pre><code>let users = [
  { name: "Alice", age: 17, active: true },
  { name: "Bob", age: 22, active: false },
  { name: "Charlie", age: 30, active: true },
  { name: "Diana", age: 25, active: true }
];

let activeAdults = users
  .filter(u => u.active)           // active users only
  .filter(u => u.age >= 18)        // adults only
  .map(u => u.name)                // get names
  .sort();                          // alphabetical

console.log(activeAdults); // ["Charlie", "Diana"]</code></pre>

<h3>Chain with reduce at the End</h3>
<pre><code>let orders = [
  { product: "A", qty: 2, price: 10 },
  { product: "B", qty: 1, price: 25 },
  { product: "C", qty: 3, price: 5 }
];

let totalRevenue = orders
  .map(order => order.qty * order.price) // [20, 25, 15]
  .reduce((sum, val) => sum + val, 0);   // 60

console.log(totalRevenue); // 60</code></pre>

<h3>Performance Note</h3>
<p>Each method in a chain iterates the full array. For very large arrays, a single reduce might be more efficient than multiple chained methods.</p>`,
              challenge: {
                description: 'Given products [{name:"A", price:30}, {name:"B", price:10}, {name:"C", price:25}, {name:"D", price:5}], chain filter (price > 15) and map (get names). Print joined with ", ".',
                starterCode: 'let products = [\n  {name: "A", price: 30},\n  {name: "B", price: 10},\n  {name: "C", price: 25},\n  {name: "D", price: 5}\n];\n// Chain filter and map\n',
                expectedOutput: 'A, C',
                hints: [
                  'Filter where price > 15, then map to get names',
                  'Join with ", " at the end',
                  'let products = [\n  {name: "A", price: 30},\n  {name: "B", price: 10},\n  {name: "C", price: 25},\n  {name: "D", price: 5}\n];\nlet result = products.filter(p => p.price > 15).map(p => p.name);\nconsole.log(result.join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'Why can you chain map() after filter()?',
                  options: ['Special JavaScript syntax', 'Both return arrays', 'They are the same method', 'You cannot chain them'],
                  correct: 1
                },
                {
                  question: 'In a chain, which typically comes first?',
                  options: ['map', 'reduce', 'filter (to reduce data first)', 'sort'],
                  correct: 2
                },
                {
                  question: 'Can you put reduce in the middle of a chain?',
                  options: ['Yes, always', 'No, reduce returns a single value', 'Only if it returns an array', 'No, reduce only goes last'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_am_5',
              title: 'flat, flatMap, and Array.from',
              type: 'challenge',
              theory: `<h2>flat, flatMap, and Array.from</h2>

<h3>flat() — Flatten Nested Arrays</h3>
<pre><code>let nested = [[1, 2], [3, 4], [5, 6]];
let flat = nested.flat();
console.log(flat); // [1, 2, 3, 4, 5, 6]

// Deeply nested:
let deep = [1, [2, [3, [4]]]];
console.log(deep.flat());     // [1, 2, [3, [4]]] (1 level)
console.log(deep.flat(2));    // [1, 2, 3, [4]] (2 levels)
console.log(deep.flat(Infinity)); // [1, 2, 3, 4] (all levels)</code></pre>

<h3>flatMap() — Map Then Flatten</h3>
<pre><code>let sentences = ["Hello World", "Foo Bar"];
let words = sentences.flatMap(s => s.split(" "));
console.log(words); // ["Hello", "World", "Foo", "Bar"]

// vs map alone:
let mapped = sentences.map(s => s.split(" "));
console.log(mapped); // [["Hello","World"], ["Foo","Bar"]]</code></pre>

<h3>Array.from() — Create Arrays from Iterables</h3>
<pre><code>// From a string
let chars = Array.from("Hello");
console.log(chars); // ["H", "e", "l", "l", "o"]

// With a mapping function
let nums = Array.from({length: 5}, (_, i) => i + 1);
console.log(nums); // [1, 2, 3, 4, 5]

// Generate range
let range = Array.from({length: 5}, (_, i) => i * 10);
console.log(range); // [0, 10, 20, 30, 40]</code></pre>

<h3>Array.of()</h3>
<pre><code>let arr = Array.of(1, 2, 3);
console.log(arr); // [1, 2, 3]</code></pre>`,
              challenge: {
                description: 'Use Array.from to create an array of 5 elements where each element is its index squared (0, 1, 4, 9, 16). Print joined with ", ".',
                starterCode: '// Use Array.from to generate squares\n',
                expectedOutput: '0, 1, 4, 9, 16',
                hints: [
                  'Array.from({length: 5}, callback)',
                  'The callback receives (element, index) — use index * index',
                  'let squares = Array.from({length: 5}, (_, i) => i * i);\nconsole.log(squares.join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'What does flat() do?',
                  options: ['Sorts the array', 'Removes duplicates', 'Flattens nested arrays', 'Maps values'],
                  correct: 2
                },
                {
                  question: 'What does flatMap do that map does not?',
                  options: ['Filters elements', 'Flattens one level after mapping', 'Works with objects', 'Nothing extra'],
                  correct: 1
                },
                {
                  question: 'What does Array.from({length: 3}, (_, i) => i) produce?',
                  options: ['[1, 2, 3]', '[0, 1, 2]', '[undefined, undefined, undefined]', '[]'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_am_6',
              title: 'Sorting Complex Data',
              type: 'mastery',
              theory: `<h2>Sorting Complex Data</h2>
<p>Sorting goes beyond simple numbers — you often need to sort objects by specific properties.</p>

<h3>Sort Compare Function</h3>
<p>The compare function returns:</p>
<ul>
  <li>Negative: a comes before b</li>
  <li>Zero: no change</li>
  <li>Positive: b comes before a</li>
</ul>

<pre><code>// Ascending
let nums = [3, 1, 4, 1, 5];
nums.sort((a, b) => a - b);
console.log(nums); // [1, 1, 3, 4, 5]

// Descending
nums.sort((a, b) => b - a);
console.log(nums); // [5, 4, 3, 1, 1]</code></pre>

<h3>Sorting Objects by Property</h3>
<pre><code>let students = [
  { name: "Charlie", grade: 85 },
  { name: "Alice", grade: 92 },
  { name: "Bob", grade: 78 }
];

// Sort by grade (descending)
students.sort((a, b) => b.grade - a.grade);
console.log(students.map(s => s.name)); // ["Alice", "Charlie", "Bob"]

// Sort by name (alphabetical)
students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students.map(s => s.name)); // ["Alice", "Bob", "Charlie"]</code></pre>

<h3>Multi-level Sort</h3>
<pre><code>let items = [
  { category: "B", name: "Banana" },
  { category: "A", name: "Cherry" },
  { category: "A", name: "Apple" }
];

items.sort((a, b) => {
  if (a.category !== b.category) {
    return a.category.localeCompare(b.category);
  }
  return a.name.localeCompare(b.name);
});
// [{A, Apple}, {A, Cherry}, {B, Banana}]</code></pre>`,
              challenge: {
                description: 'Sort [{name:"Charlie", age:25}, {name:"Alice", age:30}, {name:"Bob", age:20}] by age ascending. Print the names joined with ", ".',
                starterCode: 'let people = [\n  {name: "Charlie", age: 25},\n  {name: "Alice", age: 30},\n  {name: "Bob", age: 20}\n];\n// Sort by age ascending\n',
                expectedOutput: 'Bob, Charlie, Alice',
                hints: [
                  'Use sort((a, b) => a.age - b.age)',
                  'Then map to get names and join',
                  'let people = [\n  {name: "Charlie", age: 25},\n  {name: "Alice", age: 30},\n  {name: "Bob", age: 20}\n];\npeople.sort((a, b) => a.age - b.age);\nconsole.log(people.map(p => p.name).join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'What does a compare function returning negative mean?',
                  options: ['b comes first', 'a comes first', 'They are equal', 'Skip both'],
                  correct: 1
                },
                {
                  question: 'How do you sort strings alphabetically?',
                  options: ['a - b', 'a.localeCompare(b)', 'a > b', 'String.sort(a, b)'],
                  correct: 1
                },
                {
                  question: 'Does sort() modify the original array?',
                  options: ['No', 'Yes, it sorts in place', 'Only with numbers', 'It returns a new array'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'objects-advanced',
          title: 'Objects Advanced',
          lessons: [
            {
              id: 'js_oa_1',
              title: 'Computed Properties and Shorthand',
              type: 'challenge',
              theory: `<h2>Computed Properties and Shorthand</h2>

<h3>Property Shorthand</h3>
<p>When a variable name matches the property name, you can use shorthand:</p>
<pre><code>let name = "Alice";
let age = 30;

// Shorthand (ES6+)
let person = { name, age };
// Same as: { name: name, age: age }
console.log(person); // {name: "Alice", age: 30}</code></pre>

<h3>Computed Property Names</h3>
<p>Use [] to create dynamic property names:</p>
<pre><code>let key = "color";
let obj = { [key]: "blue" };
console.log(obj); // {color: "blue"}

// Dynamic keys from expressions
let prefix = "user";
let data = {
  [prefix + "Name"]: "Alice",
  [prefix + "Age"]: 30
};
console.log(data); // {userName: "Alice", userAge: 30}</code></pre>

<h3>Method Shorthand</h3>
<pre><code>// Old way
let calc1 = {
  add: function(a, b) { return a + b; }
};

// New shorthand
let calc2 = {
  add(a, b) { return a + b; }
};

console.log(calc2.add(2, 3)); // 5</code></pre>

<h3>Combining Patterns</h3>
<pre><code>function createUser(name, age, role) {
  return {
    name,
    age,
    role,
    greet() {
      return "Hi, I'm " + this.name;
    }
  };
}

let user = createUser("Bob", 25, "admin");
console.log(user.greet()); // "Hi, I'm Bob"</code></pre>`,
              challenge: {
                description: 'Create variables: title = "JavaScript", level = "intermediate". Use property shorthand to create an object "course" with these properties. Print course.title and course.level.',
                starterCode: 'let title = "JavaScript";\nlet level = "intermediate";\n// Create object with shorthand\n',
                expectedOutput: 'JavaScript\nintermediate',
                hints: [
                  'Use { title, level } shorthand syntax',
                  'This creates {title: "JavaScript", level: "intermediate"}',
                  'let title = "JavaScript";\nlet level = "intermediate";\nlet course = { title, level };\nconsole.log(course.title);\nconsole.log(course.level);'
                ]
              },
              quiz: [
                {
                  question: 'What does { name } mean when name is a variable?',
                  options: ['Creates empty object', 'Same as { name: name }', 'Creates an array', 'Error'],
                  correct: 1
                },
                {
                  question: 'What does { [key]: value } do?',
                  options: ['Creates an array', 'Uses the VALUE of key as property name', 'Uses literal "key"', 'Error'],
                  correct: 1
                },
                {
                  question: 'What is the method shorthand for add: function() {}?',
                  options: ['add => {}', 'add() {}', 'function add() {}', '() => add'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_oa_2',
              title: 'Object Iteration Methods',
              type: 'challenge',
              theory: `<h2>Object Iteration Methods</h2>

<h3>Object.keys(), Object.values(), Object.entries()</h3>
<pre><code>let student = { name: "Alice", grade: "A", age: 20 };

console.log(Object.keys(student));
// ["name", "grade", "age"]

console.log(Object.values(student));
// ["Alice", "A", 20]

console.log(Object.entries(student));
// [["name","Alice"], ["grade","A"], ["age",20]]</code></pre>

<h3>Iterating with for...of and entries()</h3>
<pre><code>let scores = { math: 95, science: 88, english: 72 };

for (let [subject, score] of Object.entries(scores)) {
  console.log(subject + ": " + score);
}
// "math: 95"
// "science: 88"
// "english: 72"</code></pre>

<h3>Transforming Objects</h3>
<pre><code>// Double all values
let prices = { apple: 1, banana: 2, cherry: 3 };
let doubled = Object.fromEntries(
  Object.entries(prices).map(([key, val]) => [key, val * 2])
);
console.log(doubled); // {apple: 2, banana: 4, cherry: 6}</code></pre>

<h3>Checking Object Size</h3>
<pre><code>let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj).length); // 3</code></pre>

<h3>Object.freeze() and Object.seal()</h3>
<pre><code>let config = Object.freeze({ debug: false, version: 1 });
config.debug = true;  // Silently fails (strict mode: error)
console.log(config.debug); // false (unchanged)</code></pre>`,
              challenge: {
                description: 'Given {a: 10, b: 20, c: 30}, use Object.values() and reduce to find the sum of all values. Print the sum.',
                starterCode: 'let obj = { a: 10, b: 20, c: 30 };\n// Sum all values\n',
                expectedOutput: '60',
                hints: [
                  'Get values with Object.values(obj)',
                  'Use reduce to sum them',
                  'let obj = { a: 10, b: 20, c: 30 };\nlet sum = Object.values(obj).reduce((acc, val) => acc + val, 0);\nconsole.log(sum);'
                ]
              },
              quiz: [
                {
                  question: 'What does Object.entries() return?',
                  options: ['Array of keys', 'Array of values', 'Array of [key, value] pairs', 'The object itself'],
                  correct: 2
                },
                {
                  question: 'How do you get the number of properties in an object?',
                  options: ['obj.length', 'obj.size', 'Object.keys(obj).length', 'obj.count()'],
                  correct: 2
                },
                {
                  question: 'What does Object.freeze() do?',
                  options: ['Deletes the object', 'Prevents any changes to the object', 'Makes it faster', 'Converts to string'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_oa_3',
              title: 'JSON - JavaScript Object Notation',
              type: 'challenge',
              theory: `<h2>JSON - JavaScript Object Notation</h2>
<p>JSON is a text format for storing and transmitting data. It looks like JavaScript objects but is a string format used everywhere.</p>

<h3>JSON.stringify() — Object to String</h3>
<pre><code>let user = { name: "Alice", age: 30, active: true };
let json = JSON.stringify(user);
console.log(json);
// '{"name":"Alice","age":30,"active":true}'
console.log(typeof json); // "string"</code></pre>

<h3>JSON.parse() — String to Object</h3>
<pre><code>let jsonString = '{"name":"Bob","age":25}';
let obj = JSON.parse(jsonString);
console.log(obj.name); // "Bob"
console.log(obj.age);  // 25</code></pre>

<h3>Pretty Printing</h3>
<pre><code>let data = { name: "Alice", scores: [85, 92, 78] };
let pretty = JSON.stringify(data, null, 2);
console.log(pretty);
// {
//   "name": "Alice",
//   "scores": [85, 92, 78]
// }</code></pre>

<h3>JSON Limitations</h3>
<ul>
  <li>Cannot store functions</li>
  <li>Cannot store undefined (gets removed)</li>
  <li>Cannot store Infinity or NaN (become null)</li>
  <li>Date objects become strings</li>
</ul>

<h3>Deep Cloning with JSON</h3>
<pre><code>let original = { a: 1, nested: { b: 2 } };
let clone = JSON.parse(JSON.stringify(original));
clone.nested.b = 99;
console.log(original.nested.b); // 2 (unchanged! true deep copy)</code></pre>`,
              challenge: {
                description: 'Create an object {language: "JavaScript", year: 1995}. Convert it to a JSON string and print it. Then parse it back and print the language property.',
                starterCode: '// Stringify then parse\n',
                expectedOutput: '{"language":"JavaScript","year":1995}\nJavaScript',
                hints: [
                  'Use JSON.stringify() to convert to string',
                  'Use JSON.parse() to convert back',
                  'let obj = {language: "JavaScript", year: 1995};\nlet json = JSON.stringify(obj);\nconsole.log(json);\nlet parsed = JSON.parse(json);\nconsole.log(parsed.language);'
                ]
              },
              quiz: [
                {
                  question: 'What type does JSON.stringify() return?',
                  options: ['Object', 'Array', 'String', 'Number'],
                  correct: 2
                },
                {
                  question: 'What does JSON.parse() do?',
                  options: ['Converts object to string', 'Converts string to object', 'Validates JSON', 'Formats JSON'],
                  correct: 1
                },
                {
                  question: 'Can JSON store functions?',
                  options: ['Yes', 'No', 'Only arrow functions', 'Only named functions'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_oa_4',
              title: 'Optional Chaining and Nullish Patterns',
              type: 'challenge',
              theory: `<h2>Optional Chaining and Nullish Patterns</h2>
<p>Working with real-world data means dealing with missing or nested properties safely.</p>

<h3>Optional Chaining Deep Dive</h3>
<pre><code>let user = {
  name: "Alice",
  address: {
    street: "123 Main St"
  }
};

// Safe access
console.log(user.address?.street);   // "123 Main St"
console.log(user.address?.zip);      // undefined
console.log(user.phone?.number);     // undefined (no crash!)

// Without ?. this would crash:
// console.log(user.phone.number); // TypeError!</code></pre>

<h3>Optional Chaining with Methods</h3>
<pre><code>let arr = [1, 2, 3];
console.log(arr.find?.(x => x > 2));  // 3

let obj = {};
console.log(obj.toString?.());   // "[object Object]"
console.log(obj.noMethod?.());   // undefined</code></pre>

<h3>Nullish Coalescing for Defaults</h3>
<pre><code>function getConfig(options) {
  let timeout = options?.timeout ?? 3000;
  let retries = options?.retries ?? 3;
  let verbose = options?.verbose ?? false;
  return { timeout, retries, verbose };
}

console.log(getConfig({ timeout: 5000 }));
// {timeout: 5000, retries: 3, verbose: false}
console.log(getConfig(null));
// {timeout: 3000, retries: 3, verbose: false}</code></pre>

<h3>Practical Patterns</h3>
<pre><code>// Safely access deeply nested API response
let response = { data: { users: [{ name: "Bob" }] } };
let firstName = response?.data?.users?.[0]?.name ?? "Unknown";
console.log(firstName); // "Bob"</code></pre>`,
              challenge: {
                description: 'Create an object user = {name: "Alice", settings: {theme: "dark"}}. Use optional chaining to safely access user.settings.theme and user.settings.language (which does not exist). Print both with ?? "default" for the missing one.',
                starterCode: 'let user = { name: "Alice", settings: { theme: "dark" } };\n// Safely access theme and language\n',
                expectedOutput: 'dark\ndefault',
                hints: [
                  'Use ?. and ?? together',
                  'user.settings?.language will be undefined',
                  'let user = { name: "Alice", settings: { theme: "dark" } };\nconsole.log(user.settings?.theme ?? "default");\nconsole.log(user.settings?.language ?? "default");'
                ]
              },
              quiz: [
                {
                  question: 'What does obj?.prop return if obj is null?',
                  options: ['Error', 'null', 'undefined', '""'],
                  correct: 2
                },
                {
                  question: 'What is the purpose of ??? operator?',
                  options: ['Checks types', 'Provides default for null/undefined', 'Throws errors', 'Checks equality'],
                  correct: 1
                },
                {
                  question: 'Can you use ?. with array access?',
                  options: ['No', 'Yes: arr?.[0]', 'Yes: arr?.0', 'Yes: arr?(0)'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_oa_5',
              title: 'Working with this',
              type: 'mastery',
              theory: `<h2>Working with this</h2>
<p>The <code>this</code> keyword is one of the trickiest concepts in JavaScript. Its value depends on HOW a function is called.</p>

<h3>this in Object Methods</h3>
<pre><code>let person = {
  name: "Alice",
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};
person.greet(); // "Hi, I'm Alice"</code></pre>

<h3>this in Regular Functions (Global)</h3>
<pre><code>function showThis() {
  console.log(this); // In browser: window; in strict mode: undefined
}</code></pre>

<h3>Lost this Problem</h3>
<pre><code>let person = {
  name: "Alice",
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};

let greetFn = person.greet;
greetFn(); // "Hi, I'm undefined" — this is lost!</code></pre>

<h3>Arrow Functions and this</h3>
<p>Arrow functions don't have their own <code>this</code> — they inherit from the enclosing scope:</p>
<pre><code>let counter = {
  count: 0,
  increment() {
    // Arrow inherits this from increment()
    let add = () => {
      this.count++;
    };
    add();
    console.log(this.count);
  }
};
counter.increment(); // 1</code></pre>

<h3>bind(), call(), apply()</h3>
<pre><code>function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

let user = { name: "Bob" };
greet.call(user, "Hello");   // "Hello, Bob"
greet.apply(user, ["Hi"]);   // "Hi, Bob"
let bound = greet.bind(user);
bound("Hey");                // "Hey, Bob"</code></pre>`,
              challenge: {
                description: 'Create an object "timer" with a property seconds = 0 and a method tick() that increments seconds and prints the current count. Call tick() three times.',
                starterCode: '// Create timer object with tick method\n',
                expectedOutput: '1\n2\n3',
                hints: [
                  'Use this.seconds inside the method',
                  'Increment then print',
                  'let timer = {\n  seconds: 0,\n  tick() {\n    this.seconds++;\n    console.log(this.seconds);\n  }\n};\ntimer.tick();\ntimer.tick();\ntimer.tick();'
                ]
              },
              quiz: [
                {
                  question: 'What does "this" refer to in an object method?',
                  options: ['The function', 'The global object', 'The object that owns the method', 'undefined'],
                  correct: 2
                },
                {
                  question: 'Do arrow functions have their own "this"?',
                  options: ['Yes', 'No, they inherit from surrounding scope', 'Only in strict mode', 'Only in classes'],
                  correct: 1
                },
                {
                  question: 'What does bind() do?',
                  options: ['Calls the function immediately', 'Creates a new function with fixed this', 'Removes this', 'Converts to arrow function'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'dom-manipulation',
          title: 'DOM Manipulation',
          lessons: [
            {
              id: 'js_dom_1',
              title: 'Selecting Elements',
              type: 'challenge',
              theory: `<h2>Selecting Elements</h2>
<p>The DOM (Document Object Model) is a tree-like representation of your HTML page. JavaScript can access and modify any element.</p>

<h3>Key Selection Methods</h3>
<pre><code>// By ID (returns single element)
let header = document.getElementById("main-header");

// By CSS selector (returns first match)
let btn = document.querySelector(".submit-btn");
let firstP = document.querySelector("p");

// All matching elements (returns NodeList)
let items = document.querySelectorAll(".item");
let allPs = document.querySelectorAll("p");</code></pre>

<h3>querySelector vs querySelectorAll</h3>
<pre><code>// querySelector — returns FIRST match or null
let el = document.querySelector("#app");

// querySelectorAll — returns ALL matches as NodeList
let elems = document.querySelectorAll(".card");
console.log(elems.length); // number of matches

// Iterate NodeList
elems.forEach(el => {
  console.log(el.textContent);
});</code></pre>

<h3>CSS Selectors in JS</h3>
<pre><code>document.querySelector("div.container");  // div with class
document.querySelector("ul > li:first-child"); // first li
document.querySelector("[data-id='5']"); // by attribute</code></pre>

<p><strong>Note:</strong> Since our coding environment doesn't have a real DOM, we'll simulate DOM-like operations using objects and console output for practice.</p>

<pre><code>// Simulated DOM practice
let elements = [
  { id: "title", text: "Hello", className: "header" },
  { id: "subtitle", text: "World", className: "sub" }
];
let found = elements.find(el => el.id === "title");
console.log(found.text); // "Hello"</code></pre>`,
              challenge: {
                description: 'Simulate finding DOM elements: given an array of objects [{id:"btn1", text:"Click"}, {id:"btn2", text:"Submit"}, {id:"btn3", text:"Cancel"}], find the element with id "btn2" and print its text.',
                starterCode: 'let elements = [\n  { id: "btn1", text: "Click" },\n  { id: "btn2", text: "Submit" },\n  { id: "btn3", text: "Cancel" }\n];\n// Find btn2 and print its text\n',
                expectedOutput: 'Submit',
                hints: [
                  'Use .find() to search by id',
                  'Access the text property of the found element',
                  'let elements = [\n  { id: "btn1", text: "Click" },\n  { id: "btn2", text: "Submit" },\n  { id: "btn3", text: "Cancel" }\n];\nlet el = elements.find(e => e.id === "btn2");\nconsole.log(el.text);'
                ]
              },
              quiz: [
                {
                  question: 'What does querySelector return when nothing matches?',
                  options: ['undefined', 'null', 'An empty array', 'An error'],
                  correct: 1
                },
                {
                  question: 'What does querySelectorAll return?',
                  options: ['A single element', 'An array', 'A NodeList', 'A string'],
                  correct: 2
                },
                {
                  question: 'Which method selects by ID?',
                  options: ['querySelector("#id")', 'getElementById("id")', 'Both work', 'getById("id")'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_dom_2',
              title: 'Modifying Content and Attributes',
              type: 'challenge',
              theory: `<h2>Modifying Content and Attributes</h2>

<h3>textContent — Get/Set Text</h3>
<pre><code>// Get text
let text = element.textContent;

// Set text (replaces all content)
element.textContent = "New text here";</code></pre>

<h3>innerHTML — Get/Set HTML</h3>
<pre><code>// Set HTML content
element.innerHTML = "<strong>Bold text</strong>";

// ⚠️ Security warning: never use innerHTML with user input
// It can lead to XSS (Cross-Site Scripting) attacks</code></pre>

<h3>Attributes</h3>
<pre><code>// Get/Set attributes
element.getAttribute("href");
element.setAttribute("href", "https://example.com");

// Common shorthand properties
element.id = "new-id";
element.className = "active";
element.src = "image.png";
element.href = "page.html";</code></pre>

<h3>Dataset (data-* attributes)</h3>
<pre><code>// HTML: <div data-user-id="42" data-role="admin">
element.dataset.userId;  // "42"
element.dataset.role;    // "admin"
element.dataset.role = "user"; // Change it</code></pre>

<h3>Simulating DOM Modification</h3>
<pre><code>// We can model this with objects
let element = { textContent: "Old text", className: "inactive" };

// Modify
element.textContent = "New text";
element.className = "active";

console.log(element.textContent); // "New text"
console.log(element.className);   // "active"</code></pre>`,
              challenge: {
                description: 'Create an object simulating a DOM element: {id: "title", textContent: "Hello", className: "normal"}. Change textContent to "Welcome" and className to "highlight". Print both new values.',
                starterCode: 'let element = { id: "title", textContent: "Hello", className: "normal" };\n// Modify and print\n',
                expectedOutput: 'Welcome\nhighlight',
                hints: [
                  'Simply reassign the properties',
                  'element.textContent = "Welcome"',
                  'let element = { id: "title", textContent: "Hello", className: "normal" };\nelement.textContent = "Welcome";\nelement.className = "highlight";\nconsole.log(element.textContent);\nconsole.log(element.className);'
                ]
              },
              quiz: [
                {
                  question: 'What is the difference between textContent and innerHTML?',
                  options: ['No difference', 'textContent is plain text, innerHTML parses HTML', 'innerHTML is safer', 'textContent is slower'],
                  correct: 1
                },
                {
                  question: 'How do you access data-user-id in JavaScript?',
                  options: ['element.data-user-id', 'element.dataset.userId', 'element.getAttribute("user-id")', 'element.dataUserId'],
                  correct: 1
                },
                {
                  question: 'Why is innerHTML with user input dangerous?',
                  options: ['It is slow', 'It can allow script injection (XSS)', 'It breaks the layout', 'It is not dangerous'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_dom_3',
              title: 'Styling Elements',
              type: 'challenge',
              theory: `<h2>Styling Elements</h2>

<h3>Inline Styles</h3>
<pre><code>element.style.color = "red";
element.style.fontSize = "20px";
element.style.backgroundColor = "yellow";
element.style.display = "none"; // hide element</code></pre>
<p>Note: CSS properties use camelCase in JavaScript (background-color → backgroundColor).</p>

<h3>classList — Managing CSS Classes</h3>
<pre><code>element.classList.add("active");     // Add class
element.classList.remove("hidden");  // Remove class
element.classList.toggle("dark");    // Toggle on/off
element.classList.contains("active"); // Check if has class
element.classList.replace("old", "new"); // Replace class</code></pre>

<h3>Multiple Classes</h3>
<pre><code>element.classList.add("bold", "large", "primary");
element.classList.remove("bold", "large");</code></pre>

<h3>Simulated Style Operations</h3>
<pre><code>// Model classList behavior
let element = {
  classList: new Set(["card", "active"]),
  style: {}
};

// Add class
element.classList.add("highlighted");
// Remove class  
element.classList.delete("active");
// Check
console.log(element.classList.has("card")); // true
console.log([...element.classList]); // ["card", "highlighted"]</code></pre>

<h3>Getting Computed Styles</h3>
<pre><code>// In browser:
let styles = getComputedStyle(element);
console.log(styles.color);
console.log(styles.fontSize);</code></pre>`,
              challenge: {
                description: 'Simulate a classList using a Set. Start with new Set(["btn", "primary"]). Add "large", remove "primary", and check if it has "btn". Print the has result and the final classes.',
                starterCode: 'let classList = new Set(["btn", "primary"]);\n// Add "large", remove "primary", check "btn"\n',
                expectedOutput: 'true\nbtn, large',
                hints: [
                  'Use .add(), .delete(), and .has() on the Set',
                  'Convert to array with [...set] then join',
                  'let classList = new Set(["btn", "primary"]);\nclassList.add("large");\nclassList.delete("primary");\nconsole.log(classList.has("btn"));\nconsole.log([...classList].join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'How are CSS property names written in JavaScript?',
                  options: ['kebab-case', 'camelCase', 'snake_case', 'UPPER_CASE'],
                  correct: 1
                },
                {
                  question: 'What does classList.toggle() do?',
                  options: ['Always adds', 'Always removes', 'Adds if absent, removes if present', 'Checks existence'],
                  correct: 2
                },
                {
                  question: 'What is classList equivalent to in data structure terms?',
                  options: ['Array', 'Set', 'Map', 'Object'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_dom_4',
              title: 'Creating and Removing Elements',
              type: 'challenge',
              theory: `<h2>Creating and Removing Elements</h2>

<h3>Creating Elements</h3>
<pre><code>// Create a new element
let div = document.createElement("div");
div.textContent = "Hello!";
div.className = "greeting";

// Add to the page
document.body.appendChild(div);</code></pre>

<h3>insertBefore, append, prepend</h3>
<pre><code>let parent = document.querySelector(".container");
let newChild = document.createElement("p");
newChild.textContent = "New paragraph";

parent.append(newChild);     // Add at end
parent.prepend(newChild);    // Add at beginning

// Insert before a specific element
let ref = document.querySelector(".existing");
parent.insertBefore(newChild, ref);</code></pre>

<h3>Removing Elements</h3>
<pre><code>let element = document.querySelector(".remove-me");
element.remove(); // Modern way

// Older way:
element.parentNode.removeChild(element);</code></pre>

<h3>Simulating DOM Creation</h3>
<pre><code>// We can model this with arrays
let dom = [];

function createElement(tag, text, className) {
  return { tag, text, className };
}

// Create and append
let newEl = createElement("div", "Hello", "greeting");
dom.push(newEl);

let another = createElement("p", "World", "text");
dom.push(another);

console.log(dom.length); // 2
console.log(dom.map(el => el.text)); // ["Hello", "World"]</code></pre>

<h3>Document Fragments (Performance)</h3>
<pre><code>// Batch DOM updates
let fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  let li = document.createElement("li");
  li.textContent = "Item " + i;
  fragment.appendChild(li);
}
document.querySelector("ul").appendChild(fragment);</code></pre>`,
              challenge: {
                description: 'Simulate creating DOM elements: write a function createElement(tag, text) that returns an object. Create 3 elements: ("h1","Title"), ("p","Content"), ("footer","End"). Push them to a "dom" array and print the text of each joined with " | ".',
                starterCode: 'let dom = [];\n// Write createElement and create 3 elements\n',
                expectedOutput: 'Title | Content | End',
                hints: [
                  'Function returns { tag, text }',
                  'Push each to dom array, then map and join',
                  'let dom = [];\nfunction createElement(tag, text) {\n  return { tag, text };\n}\ndom.push(createElement("h1", "Title"));\ndom.push(createElement("p", "Content"));\ndom.push(createElement("footer", "End"));\nconsole.log(dom.map(el => el.text).join(" | "));'
                ]
              },
              quiz: [
                {
                  question: 'What does document.createElement() return?',
                  options: ['A string', 'An HTML element object', 'A NodeList', 'undefined'],
                  correct: 1
                },
                {
                  question: 'How do you add an element to the end of a parent?',
                  options: ['parent.append(child)', 'parent.push(child)', 'parent.add(child)', 'parent.insert(child)'],
                  correct: 0
                },
                {
                  question: 'What does element.remove() do?',
                  options: ['Hides the element', 'Removes it from the DOM', 'Deletes its content', 'Returns the element'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_dom_5',
              title: 'DOM Traversal',
              type: 'challenge',
              theory: `<h2>DOM Traversal</h2>
<p>Navigate between elements using parent, child, and sibling relationships.</p>

<h3>Parent, Children, Siblings</h3>
<pre><code>let child = document.querySelector(".item");

// Go up
child.parentElement;        // Direct parent
child.closest(".container"); // Nearest ancestor matching selector

// Go down
let parent = document.querySelector(".list");
parent.children;            // HTMLCollection of child elements
parent.firstElementChild;   // First child element
parent.lastElementChild;    // Last child element

// Go sideways
child.nextElementSibling;   // Next sibling element
child.previousElementSibling; // Previous sibling</code></pre>

<h3>Simulating a DOM Tree</h3>
<pre><code>let tree = {
  id: "root",
  children: [
    { id: "header", children: [] },
    { id: "main", children: [
      { id: "article", children: [] },
      { id: "sidebar", children: [] }
    ]},
    { id: "footer", children: [] }
  ]
};

// Find an element by id (recursive)
function findById(node, id) {
  if (node.id === id) return node;
  for (let child of node.children) {
    let found = findById(child, id);
    if (found) return found;
  }
  return null;
}

let main = findById(tree, "main");
console.log(main.children.length); // 2</code></pre>`,
              challenge: {
                description: 'Create a tree: {id:"root", children: [{id:"a"}, {id:"b"}, {id:"c"}]}. Write code to find the child with id "b" and print its id. Also print how many children root has.',
                starterCode: 'let tree = {\n  id: "root",\n  children: [{id:"a"}, {id:"b"}, {id:"c"}]\n};\n// Find child "b" and count children\n',
                expectedOutput: 'b\n3',
                hints: [
                  'Use find() on the children array',
                  'Use .length on children',
                  'let tree = {\n  id: "root",\n  children: [{id:"a"}, {id:"b"}, {id:"c"}]\n};\nlet found = tree.children.find(c => c.id === "b");\nconsole.log(found.id);\nconsole.log(tree.children.length);'
                ]
              },
              quiz: [
                {
                  question: 'What does parentElement give you?',
                  options: ['All ancestors', 'The direct parent element', 'The root element', 'All children'],
                  correct: 1
                },
                {
                  question: 'What does closest() do?',
                  options: ['Finds nearest child', 'Finds nearest ancestor matching selector', 'Finds nearest sibling', 'Returns distance'],
                  correct: 1
                },
                {
                  question: 'What is the difference between children and childNodes?',
                  options: ['No difference', 'children = elements only, childNodes = all nodes including text', 'children includes text nodes', 'childNodes is newer'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_dom_6',
              title: 'Building a Dynamic List',
              type: 'mastery',
              theory: `<h2>Building a Dynamic List</h2>
<p>Let's combine DOM concepts to build a dynamic list — the foundation of any todo app, shopping cart, or feed.</p>

<h3>The Pattern</h3>
<pre><code>// 1. Maintain data in JavaScript
let items = ["Learn HTML", "Learn CSS", "Learn JS"];

// 2. Render function creates DOM from data
function renderList(items) {
  return items.map((item, i) => 
    "  " + (i + 1) + ". " + item
  ).join("\n");
}

// 3. Update data, then re-render
items.push("Build Projects");
console.log(renderList(items));</code></pre>

<h3>CRUD Operations on a List</h3>
<pre><code>let todos = [];

function addTodo(text) {
  todos.push({ id: Date.now(), text, done: false });
}

function removeTodo(id) {
  todos = todos.filter(t => t.id !== id);
}

function toggleTodo(id) {
  todos = todos.map(t => 
    t.id === id ? { ...t, done: !t.done } : t
  );
}

function renderTodos() {
  return todos.map(t => 
    (t.done ? "[x] " : "[ ] ") + t.text
  ).join("\n");
}

addTodo("Buy groceries");
addTodo("Walk the dog");
addTodo("Write code");
toggleTodo(todos[1].id);
console.log(renderTodos());
// [ ] Buy groceries
// [x] Walk the dog
// [ ] Write code</code></pre>`,
              challenge: {
                description: 'Create a simple list manager: start with items = ["Apple", "Banana"]. Write addItem(item) and removeItem(index) functions. Add "Cherry", remove index 0, then print all items joined with ", ".',
                starterCode: 'let items = ["Apple", "Banana"];\n// Write addItem, removeItem, then manipulate\n',
                expectedOutput: 'Banana, Cherry',
                hints: [
                  'addItem pushes to the array',
                  'removeItem uses splice(index, 1)',
                  'let items = ["Apple", "Banana"];\n\nfunction addItem(item) {\n  items.push(item);\n}\n\nfunction removeItem(index) {\n  items.splice(index, 1);\n}\n\naddItem("Cherry");\nremoveItem(0);\nconsole.log(items.join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'What is the recommended pattern for dynamic UIs?',
                  options: ['Modify DOM directly', 'Update data, then re-render', 'Use innerHTML only', 'Create new pages'],
                  correct: 1
                },
                {
                  question: 'Why use splice for removal by index?',
                  options: ['It is fastest', 'It removes element at a specific position', 'It is the only way', 'It returns a boolean'],
                  correct: 1
                },
                {
                  question: 'What does { ...todo, done: !todo.done } do?',
                  options: ['Deletes the todo', 'Creates a copy with toggled done property', 'Modifies original', 'Creates an array'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'events',
          title: 'Events',
          lessons: [
            {
              id: 'js_ev_1',
              title: 'Event Listeners',
              type: 'challenge',
              theory: `<h2>Event Listeners</h2>
<p>Events are actions that happen in the browser — clicks, key presses, form submissions, scrolling, etc. JavaScript lets you respond to them.</p>

<h3>addEventListener</h3>
<pre><code>// Syntax
element.addEventListener("eventType", handlerFunction);

// Example
let button = document.querySelector("#myBtn");
button.addEventListener("click", function() {
  console.log("Button clicked!");
});

// With named function
function handleClick() {
  console.log("Clicked!");
}
button.addEventListener("click", handleClick);</code></pre>

<h3>Common Event Types</h3>
<ul>
  <li><strong>Mouse:</strong> click, dblclick, mouseenter, mouseleave</li>
  <li><strong>Keyboard:</strong> keydown, keyup, keypress</li>
  <li><strong>Form:</strong> submit, change, input, focus, blur</li>
  <li><strong>Window:</strong> load, resize, scroll</li>
</ul>

<h3>The Event Object</h3>
<pre><code>button.addEventListener("click", function(event) {
  console.log(event.type);    // "click"
  console.log(event.target);  // the element clicked
});</code></pre>

<h3>Simulating Events</h3>
<pre><code>// Model event handling
let handlers = {};

function on(event, callback) {
  handlers[event] = handlers[event] || [];
  handlers[event].push(callback);
}

function emit(event, data) {
  (handlers[event] || []).forEach(fn => fn(data));
}

on("click", (data) => console.log("Clicked: " + data));
emit("click", "button1"); // "Clicked: button1"</code></pre>`,
              challenge: {
                description: 'Create a simple event system: an object "emitter" with methods on(event, fn) and emit(event, data). Register a "greet" event that prints "Hello, " + data. Emit it with "World".',
                starterCode: '// Build a simple event emitter\n',
                expectedOutput: 'Hello, World',
                hints: [
                  'Store handlers in an object with arrays',
                  'on() pushes to the array, emit() calls all handlers',
                  'let emitter = {\n  handlers: {},\n  on(event, fn) {\n    this.handlers[event] = this.handlers[event] || [];\n    this.handlers[event].push(fn);\n  },\n  emit(event, data) {\n    (this.handlers[event] || []).forEach(fn => fn(data));\n  }\n};\nemitter.on("greet", (data) => console.log("Hello, " + data));\nemitter.emit("greet", "World");'
                ]
              },
              quiz: [
                {
                  question: 'What method attaches an event listener?',
                  options: ['element.on()', 'element.listen()', 'element.addEventListener()', 'element.attach()'],
                  correct: 2
                },
                {
                  question: 'What does event.target refer to?',
                  options: ['The window', 'The element that triggered the event', 'The parent element', 'The event type'],
                  correct: 1
                },
                {
                  question: 'Can you attach multiple listeners to the same event?',
                  options: ['No, only one', 'Yes, multiple handlers', 'Only with different types', 'Only 2 maximum'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_ev_2',
              title: 'Event Bubbling and Delegation',
              type: 'challenge',
              theory: `<h2>Event Bubbling and Delegation</h2>

<h3>Event Bubbling</h3>
<p>When an event fires on an element, it "bubbles up" through all parent elements:</p>
<pre><code>// If you click a button inside a div inside body:
// button click → div click → body click → document click

// Each parent can also handle the event!
document.querySelector("div").addEventListener("click", () => {
  console.log("div clicked");
});
document.querySelector("button").addEventListener("click", () => {
  console.log("button clicked");
});
// Clicking button prints: "button clicked" then "div clicked"</code></pre>

<h3>Stopping Propagation</h3>
<pre><code>button.addEventListener("click", (event) => {
  event.stopPropagation(); // Stops bubbling to parent
  console.log("Only this fires");
});</code></pre>

<h3>Event Delegation</h3>
<p>Instead of adding listeners to many children, add ONE to the parent:</p>
<pre><code>// BAD: listener on each item
items.forEach(item => {
  item.addEventListener("click", handleClick);
});

// GOOD: delegate to parent
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("item")) {
    console.log("Item clicked: " + event.target.textContent);
  }
});</code></pre>

<h3>Simulating Delegation</h3>
<pre><code>let listItems = ["Item 1", "Item 2", "Item 3"];

function handleListClick(clickedIndex) {
  console.log("Clicked: " + listItems[clickedIndex]);
}

// Simulate clicking index 1
handleListClick(1); // "Clicked: Item 2"</code></pre>`,
              challenge: {
                description: 'Simulate event delegation: given items = ["Home", "About", "Contact"], write a function handleNavClick(index) that prints "Navigating to: " + items[index]. Call it with index 2.',
                starterCode: 'let items = ["Home", "About", "Contact"];\n// Write handleNavClick and call with 2\n',
                expectedOutput: 'Navigating to: Contact',
                hints: [
                  'Access items[index] inside the function',
                  'Call the function with 2 as argument',
                  'let items = ["Home", "About", "Contact"];\nfunction handleNavClick(index) {\n  console.log("Navigating to: " + items[index]);\n}\nhandleNavClick(2);'
                ]
              },
              quiz: [
                {
                  question: 'What is event bubbling?',
                  options: ['Event fires only on target', 'Event travels up through parent elements', 'Event fires on all elements simultaneously', 'Event fires downward'],
                  correct: 1
                },
                {
                  question: 'What does event delegation mean?',
                  options: ['Removing event listeners', 'Adding listener to parent instead of each child', 'Preventing default behavior', 'Stopping propagation'],
                  correct: 1
                },
                {
                  question: 'What stops an event from bubbling?',
                  options: ['event.preventDefault()', 'event.stopPropagation()', 'event.cancel()', 'return false'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_ev_3',
              title: 'Form Events',
              type: 'challenge',
              theory: `<h2>Form Events</h2>

<h3>Common Form Events</h3>
<ul>
  <li><strong>submit</strong> — form is submitted</li>
  <li><strong>input</strong> — value changes (real-time)</li>
  <li><strong>change</strong> — value changes (on blur)</li>
  <li><strong>focus</strong> — element gains focus</li>
  <li><strong>blur</strong> — element loses focus</li>
</ul>

<h3>Handling Form Submit</h3>
<pre><code>form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page refresh!
  
  let formData = new FormData(form);
  let name = formData.get("name");
  let email = formData.get("email");
  console.log(name, email);
});</code></pre>

<h3>Input Validation</h3>
<pre><code>function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

function validateForm(data) {
  let errors = [];
  if (!data.name || data.name.trim() === "") {
    errors.push("Name is required");
  }
  if (!validateEmail(data.email)) {
    errors.push("Invalid email");
  }
  if (data.password.length < 6) {
    errors.push("Password must be 6+ characters");
  }
  return errors;
}

let formData = { name: "Alice", email: "alice@test.com", password: "12345" };
let errors = validateForm(formData);
console.log(errors.length > 0 ? errors.join(", ") : "Valid!");
// "Password must be 6+ characters"</code></pre>`,
              challenge: {
                description: 'Write a validateForm function that checks: name not empty, email contains "@", password length >= 8. Test with {name: "Bob", email: "bob@mail.com", password: "secure123"} and print "Valid" or the errors.',
                starterCode: '// Write validateForm function\n',
                expectedOutput: 'Valid',
                hints: [
                  'Check each field and collect errors in an array',
                  'If errors array is empty, print "Valid"',
                  'function validateForm(data) {\n  let errors = [];\n  if (!data.name) errors.push("Name required");\n  if (!data.email.includes("@")) errors.push("Invalid email");\n  if (data.password.length < 8) errors.push("Password too short");\n  return errors;\n}\nlet result = validateForm({name: "Bob", email: "bob@mail.com", password: "secure123"});\nconsole.log(result.length === 0 ? "Valid" : result.join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'What does event.preventDefault() do on a form submit?',
                  options: ['Submits the form', 'Prevents the page from refreshing', 'Removes the form', 'Validates the form'],
                  correct: 1
                },
                {
                  question: 'What event fires while the user is typing?',
                  options: ['change', 'submit', 'input', 'blur'],
                  correct: 2
                },
                {
                  question: 'When does the "change" event fire?',
                  options: ['While typing', 'When element loses focus after value change', 'On page load', 'On form submit'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_ev_4',
              title: 'Keyboard Events',
              type: 'challenge',
              theory: `<h2>Keyboard Events</h2>

<h3>Event Types</h3>
<ul>
  <li><strong>keydown</strong> — fires when key is pressed (most common)</li>
  <li><strong>keyup</strong> — fires when key is released</li>
</ul>

<h3>The Event Object for Keys</h3>
<pre><code>document.addEventListener("keydown", function(event) {
  console.log(event.key);   // "a", "Enter", "ArrowUp", etc.
  console.log(event.code);  // "KeyA", "Enter", "ArrowUp"
  console.log(event.ctrlKey); // true if Ctrl held
  console.log(event.shiftKey); // true if Shift held
});</code></pre>

<h3>Common Key Values</h3>
<pre><code>// event.key values:
// "Enter", "Escape", "Tab", "Backspace", "Delete"
// "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"  
// "a", "b", "1", "2", " " (space)</code></pre>

<h3>Handling Keyboard Shortcuts</h3>
<pre><code>function handleKeyboard(event) {
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    console.log("Save triggered!");
  }
  if (event.key === "Escape") {
    console.log("Close modal");
  }
}

// Simulating keyboard handling
function processKey(key, modifiers = {}) {
  if (modifiers.ctrl && key === "s") return "Save";
  if (key === "Escape") return "Close";
  if (key === "Enter") return "Submit";
  return "Key: " + key;
}

console.log(processKey("Enter"));          // "Submit"
console.log(processKey("s", {ctrl: true})); // "Save"</code></pre>`,
              challenge: {
                description: 'Write a processKey function: if key is "Enter" return "Submit", if "Escape" return "Cancel", otherwise return "Typed: " + key. Print results for "Enter", "Escape", and "a".',
                starterCode: '// Write processKey and test with 3 keys\n',
                expectedOutput: 'Submit\nCancel\nTyped: a',
                hints: [
                  'Use if/else if/else to check the key',
                  'Call the function 3 times with different keys',
                  'function processKey(key) {\n  if (key === "Enter") return "Submit";\n  if (key === "Escape") return "Cancel";\n  return "Typed: " + key;\n}\nconsole.log(processKey("Enter"));\nconsole.log(processKey("Escape"));\nconsole.log(processKey("a"));'
                ]
              },
              quiz: [
                {
                  question: 'Which event fires when a key is pressed down?',
                  options: ['keypress', 'keydown', 'keyup', 'keystroke'],
                  correct: 1
                },
                {
                  question: 'What property gives you the key name like "Enter"?',
                  options: ['event.keyCode', 'event.key', 'event.char', 'event.name'],
                  correct: 1
                },
                {
                  question: 'How do you check if Ctrl was held during a key event?',
                  options: ['event.ctrl', 'event.ctrlKey', 'event.modifier.ctrl', 'event.isCtrl()'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_ev_5',
              title: 'Custom Events and Patterns',
              type: 'mastery',
              theory: `<h2>Custom Events and Patterns</h2>

<h3>Creating Custom Events</h3>
<pre><code>// In browser:
let event = new CustomEvent("userLogin", {
  detail: { username: "alice", timestamp: Date.now() }
});
document.dispatchEvent(event);

// Listening:
document.addEventListener("userLogin", (e) => {
  console.log("User logged in: " + e.detail.username);
});</code></pre>

<h3>Pub/Sub Pattern (Publisher/Subscriber)</h3>
<pre><code>class EventBus {
  constructor() {
    this.listeners = {};
  }
  
  on(event, callback) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(callback);
  }
  
  off(event, callback) {
    this.listeners[event] = (this.listeners[event] || [])
      .filter(fn => fn !== callback);
  }
  
  emit(event, data) {
    (this.listeners[event] || []).forEach(fn => fn(data));
  }
}

let bus = new EventBus();
bus.on("message", data => console.log("Got: " + data));
bus.on("message", data => console.log("Also got: " + data));
bus.emit("message", "hello");
// "Got: hello"
// "Also got: hello"</code></pre>

<h3>Observer Pattern</h3>
<pre><code>function createStore(initial) {
  let state = initial;
  let subscribers = [];
  
  return {
    getState() { return state; },
    setState(newState) {
      state = newState;
      subscribers.forEach(fn => fn(state));
    },
    subscribe(fn) { subscribers.push(fn); }
  };
}

let store = createStore(0);
store.subscribe(val => console.log("State: " + val));
store.setState(1); // "State: 1"
store.setState(2); // "State: 2"</code></pre>`,
              challenge: {
                description: 'Create a simple store with createStore(initialValue). It should have getState(), setState(val), and subscribe(fn). Create a store with 0, subscribe to log "Count: " + value, then setState to 5.',
                starterCode: '// Create a simple reactive store\n',
                expectedOutput: 'Count: 5',
                hints: [
                  'Use an array to track subscribers',
                  'setState should notify all subscribers',
                  'function createStore(initial) {\n  let state = initial;\n  let subs = [];\n  return {\n    getState() { return state; },\n    setState(val) { state = val; subs.forEach(fn => fn(state)); },\n    subscribe(fn) { subs.push(fn); }\n  };\n}\nlet store = createStore(0);\nstore.subscribe(val => console.log("Count: " + val));\nstore.setState(5);'
                ]
              },
              quiz: [
                {
                  question: 'What is the Pub/Sub pattern?',
                  options: ['Publishing websites', 'Publishers emit events, subscribers listen', 'A database pattern', 'A CSS pattern'],
                  correct: 1
                },
                {
                  question: 'What is an EventBus?',
                  options: ['A transportation system', 'A centralized event system for communication', 'A browser API', 'A testing tool'],
                  correct: 1
                },
                {
                  question: 'In the Observer pattern, when are subscribers notified?',
                  options: ['On creation', 'When state changes', 'Every second', 'When they request it'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'async-basics',
          title: 'Async Basics - Callbacks & Promises',
          lessons: [
            {
              id: 'js_async_1',
              title: 'Understanding Asynchronous Code',
              type: 'challenge',
              theory: `<h2>Understanding Asynchronous Code</h2>
<p>JavaScript is single-threaded, meaning it can only do one thing at a time. But it handles async operations (like network requests) without blocking.</p>

<h3>Synchronous (Blocking)</h3>
<pre><code>console.log("First");
console.log("Second");
console.log("Third");
// Output in order: First, Second, Third</code></pre>

<h3>Asynchronous (Non-Blocking)</h3>
<pre><code>console.log("First");
setTimeout(() => console.log("Second"), 1000);
console.log("Third");
// Output: First, Third, Second (after 1 second)</code></pre>

<h3>Why Async?</h3>
<p>Imagine fetching data from a server takes 2 seconds. Without async, the entire page would freeze for 2 seconds. Async lets other code run while waiting.</p>

<h3>The Event Loop</h3>
<ol>
  <li>JavaScript runs synchronous code first (call stack)</li>
  <li>Async callbacks go to a queue</li>
  <li>When the stack is empty, callbacks from the queue execute</li>
</ol>

<pre><code>console.log("1");
setTimeout(() => console.log("2"), 0); // Even 0ms!
console.log("3");
// Output: 1, 3, 2
// setTimeout always goes to queue, even with 0 delay</code></pre>

<h3>Simulating Async Without setTimeout</h3>
<pre><code>// We'll simulate async with callbacks
function fetchData(callback) {
  // Imagine this takes time...
  let data = { name: "Alice", age: 30 };
  callback(data);
}

fetchData(function(result) {
  console.log(result.name); // "Alice"
});</code></pre>`,
              challenge: {
                description: 'Create a function simulateFetch(callback) that creates data = {status: "success", count: 42} and calls the callback with it. Call simulateFetch and print the count from inside the callback.',
                starterCode: '// Create simulateFetch with callback pattern\n',
                expectedOutput: '42',
                hints: [
                  'The function takes a callback parameter',
                  'Call callback(data) inside the function',
                  'function simulateFetch(callback) {\n  let data = { status: "success", count: 42 };\n  callback(data);\n}\nsimulateFetch(function(result) {\n  console.log(result.count);\n});'
                ]
              },
              quiz: [
                {
                  question: 'What does "single-threaded" mean?',
                  options: ['Can only run one thread', 'Can do one thing at a time', 'Can only use one CPU', 'Only one file at a time'],
                  correct: 1
                },
                {
                  question: 'What is the output order of: log("A"), setTimeout(log("B"), 0), log("C")?',
                  options: ['A, B, C', 'A, C, B', 'B, A, C', 'C, B, A'],
                  correct: 1
                },
                {
                  question: 'What does the event loop do?',
                  options: ['Loops through events', 'Moves callbacks from queue to stack when stack is empty', 'Creates new threads', 'Handles errors'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_async_2',
              title: 'Callback Patterns',
              type: 'challenge',
              theory: `<h2>Callback Patterns</h2>
<p>Callbacks are functions passed to other functions, called when an operation completes.</p>

<h3>Error-First Callbacks (Node.js Convention)</h3>
<pre><code>function readFile(filename, callback) {
  // Simulate reading a file
  if (filename === "") {
    callback(new Error("Filename cannot be empty"), null);
  } else {
    callback(null, "File content of " + filename);
  }
}

readFile("data.txt", function(error, data) {
  if (error) {
    console.log("Error: " + error.message);
  } else {
    console.log(data);
  }
});
// "File content of data.txt"</code></pre>

<h3>Callback Hell</h3>
<p>Nested callbacks become hard to read:</p>
<pre><code>getUser(userId, function(user) {
  getOrders(user.id, function(orders) {
    getDetails(orders[0].id, function(details) {
      console.log(details);
      // Deep nesting = "callback hell" or "pyramid of doom"
    });
  });
});</code></pre>

<h3>Solutions to Callback Hell</h3>
<ol>
  <li>Named functions (instead of anonymous)</li>
  <li>Promises (next lesson)</li>
  <li>async/await (later)</li>
</ol>

<pre><code>// Better: named functions
function handleDetails(details) {
  console.log(details);
}
function handleOrders(orders) {
  getDetails(orders[0].id, handleDetails);
}
function handleUser(user) {
  getOrders(user.id, handleOrders);
}
getUser(userId, handleUser);</code></pre>`,
              challenge: {
                description: 'Write a divide function using error-first callback pattern: divide(a, b, callback). If b is 0, call callback with an Error "Cannot divide by zero". Otherwise call callback(null, result). Test with divide(10, 2, ...) and print the result.',
                starterCode: '// Write divide with error-first callback\n',
                expectedOutput: '5',
                hints: [
                  'Check if b === 0 first for the error case',
                  'callback(null, a/b) for success',
                  'function divide(a, b, callback) {\n  if (b === 0) {\n    callback(new Error("Cannot divide by zero"), null);\n  } else {\n    callback(null, a / b);\n  }\n}\ndivide(10, 2, function(err, result) {\n  if (err) console.log(err.message);\n  else console.log(result);\n});'
                ]
              },
              quiz: [
                {
                  question: 'What is the error-first callback convention?',
                  options: ['Error is the return value', 'First parameter is error (null if success)', 'Errors go last', 'Throw errors only'],
                  correct: 1
                },
                {
                  question: 'What is "callback hell"?',
                  options: ['Too many callbacks in a file', 'Deeply nested callbacks making code unreadable', 'Callbacks that error', 'Infinite loops'],
                  correct: 1
                },
                {
                  question: 'How can you avoid callback hell?',
                  options: ['Use more callbacks', 'Use Promises or async/await', 'Use global variables', 'Avoid async code'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_async_3',
              title: 'Promises',
              type: 'challenge',
              theory: `<h2>Promises</h2>
<p>A Promise represents a value that may not be available yet but will be at some point (or will fail).</p>

<h3>Creating a Promise</h3>
<pre><code>let promise = new Promise((resolve, reject) => {
  // Async operation
  let success = true;
  if (success) {
    resolve("Data loaded!");
  } else {
    reject("Something went wrong");
  }
});</code></pre>

<h3>Using a Promise</h3>
<pre><code>promise
  .then(result => {
    console.log(result); // "Data loaded!"
  })
  .catch(error => {
    console.log(error);
  });</code></pre>

<h3>Promise States</h3>
<ul>
  <li><strong>Pending</strong> — initial state, not yet resolved</li>
  <li><strong>Fulfilled</strong> — operation succeeded (resolve called)</li>
  <li><strong>Rejected</strong> — operation failed (reject called)</li>
</ul>

<h3>Chaining Promises</h3>
<pre><code>function fetchUser(id) {
  return new Promise(resolve => {
    resolve({ id, name: "Alice" });
  });
}

function fetchOrders(user) {
  return new Promise(resolve => {
    resolve(["Order1", "Order2"]);
  });
}

fetchUser(1)
  .then(user => {
    console.log(user.name);
    return fetchOrders(user);
  })
  .then(orders => {
    console.log(orders.length + " orders");
  });
// "Alice"
// "2 orders"</code></pre>`,
              challenge: {
                description: 'Create a function checkAge(age) that returns a Promise. Resolve with "Access granted" if age >= 18, reject with "Access denied" if under 18. Call it with 20 and handle with .then().',
                starterCode: '// Create checkAge returning a Promise\n',
                expectedOutput: 'Access granted',
                hints: [
                  'Return new Promise((resolve, reject) => { ... })',
                  'Use .then() to handle the resolved value',
                  'function checkAge(age) {\n  return new Promise((resolve, reject) => {\n    if (age >= 18) resolve("Access granted");\n    else reject("Access denied");\n  });\n}\ncheckAge(20).then(msg => console.log(msg));'
                ]
              },
              quiz: [
                {
                  question: 'What are the three states of a Promise?',
                  options: ['Start, middle, end', 'Pending, fulfilled, rejected', 'Open, closed, error', 'New, active, done'],
                  correct: 1
                },
                {
                  question: 'What does .then() handle?',
                  options: ['Errors only', 'The resolved value', 'Both success and error', 'The promise itself'],
                  correct: 1
                },
                {
                  question: 'What does .catch() handle?',
                  options: ['Success only', 'Rejected promises/errors', 'All promises', 'Nothing'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_async_4',
              title: 'async/await',
              type: 'challenge',
              theory: `<h2>async/await</h2>
<p><code>async/await</code> is syntactic sugar over Promises that makes async code look synchronous.</p>

<h3>Basic Syntax</h3>
<pre><code>async function getData() {
  let result = await somePromise();
  console.log(result);
}

// async function always returns a Promise
// await pauses execution until Promise resolves</code></pre>

<h3>Example</h3>
<pre><code>function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function greet() {
  console.log("Hello");
  await delay(1000);
  console.log("World"); // After 1 second
}

greet();</code></pre>

<h3>Error Handling with try/catch</h3>
<pre><code>async function fetchData() {
  try {
    let response = await fetch("/api/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: " + error.message);
  }
}</code></pre>

<h3>Practical Example (Simulated)</h3>
<pre><code>function getUser(id) {
  return new Promise(resolve => {
    resolve({ id, name: "Alice", age: 30 });
  });
}

async function main() {
  let user = await getUser(1);
  console.log(user.name); // "Alice"
  console.log(user.age);  // 30
}

main();</code></pre>

<h3>Sequential vs Parallel</h3>
<pre><code>// Sequential (slow)
let a = await fetchA();
let b = await fetchB();

// Parallel (fast)
let [a, b] = await Promise.all([fetchA(), fetchB()]);</code></pre>`,
              challenge: {
                description: 'Create a function getUser(id) that returns a Promise resolving to {id, name: "User_" + id}. Write an async function main() that awaits getUser(5) and prints the name. Call main().',
                starterCode: '// Create getUser and async main\n',
                expectedOutput: 'User_5',
                hints: [
                  'getUser returns new Promise(resolve => resolve(...))',
                  'main uses await to get the result',
                  'function getUser(id) {\n  return new Promise(resolve => {\n    resolve({ id, name: "User_" + id });\n  });\n}\n\nasync function main() {\n  let user = await getUser(5);\n  console.log(user.name);\n}\n\nmain();'
                ]
              },
              quiz: [
                {
                  question: 'What does the async keyword do?',
                  options: ['Makes code faster', 'Makes the function return a Promise', 'Creates a new thread', 'Stops execution'],
                  correct: 1
                },
                {
                  question: 'What does await do?',
                  options: ['Creates a Promise', 'Pauses until the Promise resolves', 'Cancels the Promise', 'Throws an error'],
                  correct: 1
                },
                {
                  question: 'How do you handle errors with async/await?',
                  options: ['.catch()', 'try/catch', 'if/else', 'Both .catch() and try/catch work'],
                  correct: 3
                }
              ]
            },
            {
              id: 'js_async_5',
              title: 'Promise.all and Promise.race',
              type: 'mastery',
              theory: `<h2>Promise.all and Promise.race</h2>

<h3>Promise.all — Wait for All</h3>
<pre><code>let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(results => {
  console.log(results); // [1, 2, 3]
});

// If ANY promise rejects, the whole thing rejects
let p4 = Promise.reject("Error!");
Promise.all([p1, p4]).catch(err => console.log(err));
// "Error!"</code></pre>

<h3>Promise.allSettled — Get All Results</h3>
<pre><code>let promises = [
  Promise.resolve("OK"),
  Promise.reject("Failed"),
  Promise.resolve("Done")
];

Promise.allSettled(promises).then(results => {
  results.forEach(r => console.log(r.status + ": " + (r.value || r.reason)));
});
// "fulfilled: OK"
// "rejected: Failed"
// "fulfilled: Done"</code></pre>

<h3>Promise.race — First to Finish</h3>
<pre><code>let slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));
let fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));

Promise.race([slow, fast]).then(result => {
  console.log(result); // "Fast"
});</code></pre>

<h3>Practical: Loading Multiple Resources</h3>
<pre><code>async function loadDashboard() {
  let [users, posts, stats] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchStats()
  ]);
  console.log("Dashboard loaded!");
  console.log(users.length + " users");
}</code></pre>`,
              challenge: {
                description: 'Create 3 promises that resolve to 10, 20, and 30. Use Promise.all to get all values, then print their sum.',
                starterCode: '// Create 3 promises and use Promise.all\n',
                expectedOutput: '60',
                hints: [
                  'Use Promise.resolve() to create simple resolved promises',
                  'Promise.all returns an array of results',
                  'let p1 = Promise.resolve(10);\nlet p2 = Promise.resolve(20);\nlet p3 = Promise.resolve(30);\n\nPromise.all([p1, p2, p3]).then(results => {\n  console.log(results.reduce((a, b) => a + b, 0));\n});'
                ]
              },
              quiz: [
                {
                  question: 'What happens if one promise in Promise.all rejects?',
                  options: ['Others continue', 'The entire Promise.all rejects', 'It returns partial results', 'It retries'],
                  correct: 1
                },
                {
                  question: 'What does Promise.race return?',
                  options: ['All results', 'The result of the fastest promise', 'The slowest result', 'A boolean'],
                  correct: 1
                },
                {
                  question: 'When should you use Promise.all?',
                  options: ['When operations depend on each other', 'When you need all results and they are independent', 'When only one result matters', 'Never'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'fetch-api',
          title: 'Fetch API',
          lessons: [
            {
              id: 'js_fetch_1',
              title: 'Making GET Requests',
              type: 'challenge',
              theory: `<h2>Making GET Requests</h2>
<p>The Fetch API lets you make HTTP requests to servers and APIs.</p>

<h3>Basic Fetch</h3>
<pre><code>fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));</code></pre>

<h3>With async/await</h3>
<pre><code>async function getUsers() {
  try {
    let response = await fetch("https://api.example.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}</code></pre>

<h3>Response Object</h3>
<pre><code>let response = await fetch(url);
console.log(response.status);  // 200, 404, 500, etc.
console.log(response.ok);      // true if status 200-299

// Parse the body:
let json = await response.json();   // Parse as JSON
let text = await response.text();   // Parse as text
let blob = await response.blob();   // Parse as binary</code></pre>

<h3>Simulated Fetch</h3>
<pre><code>// Since we cannot make real HTTP calls, we simulate:
function mockFetch(url) {
  let database = {
    "/users": [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }],
    "/posts": [{ id: 1, title: "Hello World" }]
  };
  
  return new Promise((resolve, reject) => {
    if (database[url]) {
      resolve({ ok: true, json: () => Promise.resolve(database[url]) });
    } else {
      reject(new Error("404 Not Found"));
    }
  });
}

async function getUsers() {
  let response = await mockFetch("/users");
  let data = await response.json();
  console.log(data[0].name); // "Alice"
}
getUsers();</code></pre>`,
              challenge: {
                description: 'Create a mockFetch that returns users [{name:"Alice"},{name:"Bob"}] for "/users". Write an async function that fetches and prints the number of users.',
                starterCode: '// Create mockFetch and async function to get user count\n',
                expectedOutput: '2',
                hints: [
                  'mockFetch returns a Promise that resolves to a response-like object',
                  'The response has a json() method that returns a Promise',
                  'function mockFetch(url) {\n  let data = { "/users": [{name:"Alice"}, {name:"Bob"}] };\n  return Promise.resolve({\n    ok: true,\n    json: () => Promise.resolve(data[url])\n  });\n}\n\nasync function main() {\n  let response = await mockFetch("/users");\n  let users = await response.json();\n  console.log(users.length);\n}\nmain();'
                ]
              },
              quiz: [
                {
                  question: 'What does fetch() return?',
                  options: ['The data directly', 'A Promise', 'An array', 'A string'],
                  correct: 1
                },
                {
                  question: 'What does response.json() do?',
                  options: ['Converts to string', 'Parses JSON body into JavaScript object', 'Validates JSON', 'Sends JSON'],
                  correct: 1
                },
                {
                  question: 'What does response.ok mean?',
                  options: ['The request was sent', 'Status code is 200-299', 'There is no error', 'The server responded'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_fetch_2',
              title: 'POST, PUT, DELETE Requests',
              type: 'challenge',
              theory: `<h2>POST, PUT, DELETE Requests</h2>

<h3>POST Request (Create)</h3>
<pre><code>async function createUser(userData) {
  let response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
  let result = await response.json();
  return result;
}</code></pre>

<h3>PUT Request (Update)</h3>
<pre><code>async function updateUser(id, data) {
  let response = await fetch("/api/users/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await response.json();
}</code></pre>

<h3>DELETE Request</h3>
<pre><code>async function deleteUser(id) {
  let response = await fetch("/api/users/" + id, {
    method: "DELETE"
  });
  return response.ok;
}</code></pre>

<h3>Simulated CRUD API</h3>
<pre><code>let database = [];

function apiRequest(method, path, body) {
  switch(method) {
    case "GET":
      return [...database];
    case "POST":
      database.push({ id: database.length + 1, ...body });
      return database[database.length - 1];
    case "DELETE":
      let id = parseInt(path.split("/").pop());
      database = database.filter(item => item.id !== id);
      return { success: true };
  }
}

apiRequest("POST", "/users", { name: "Alice" });
apiRequest("POST", "/users", { name: "Bob" });
let users = apiRequest("GET", "/users");
console.log(users.length); // 2</code></pre>`,
              challenge: {
                description: 'Create a simple database array and functions: addItem(name), getAll(), and removeItem(id). Add "Task 1" and "Task 2", then print the count of items.',
                starterCode: 'let database = [];\nlet nextId = 1;\n// Write addItem, getAll, removeItem\n',
                expectedOutput: '2',
                hints: [
                  'addItem pushes {id: nextId++, name} to database',
                  'getAll returns the database array',
                  'let database = [];\nlet nextId = 1;\n\nfunction addItem(name) {\n  database.push({ id: nextId++, name });\n}\n\nfunction getAll() {\n  return database;\n}\n\nfunction removeItem(id) {\n  database = database.filter(item => item.id !== id);\n}\n\naddItem("Task 1");\naddItem("Task 2");\nconsole.log(getAll().length);'
                ]
              },
              quiz: [
                {
                  question: 'What HTTP method creates a new resource?',
                  options: ['GET', 'POST', 'PUT', 'DELETE'],
                  correct: 1
                },
                {
                  question: 'What header tells the server we are sending JSON?',
                  options: ['Accept: json', 'Type: JSON', 'Content-Type: application/json', 'Data-Format: json'],
                  correct: 2
                },
                {
                  question: 'What does JSON.stringify do in a POST request?',
                  options: ['Parses the response', 'Converts JS object to JSON string for the body', 'Validates the data', 'Creates headers'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_fetch_3',
              title: 'Handling Responses and Errors',
              type: 'challenge',
              theory: `<h2>Handling Responses and Errors</h2>

<h3>Checking Response Status</h3>
<pre><code>async function fetchWithCheck(url) {
  let response = await fetch(url);
  
  if (!response.ok) {
    throw new Error("HTTP error! Status: " + response.status);
  }
  
  return await response.json();
}</code></pre>

<h3>Common Status Codes</h3>
<ul>
  <li><strong>200</strong> — OK (success)</li>
  <li><strong>201</strong> — Created (POST success)</li>
  <li><strong>400</strong> — Bad Request (invalid data)</li>
  <li><strong>401</strong> — Unauthorized (not logged in)</li>
  <li><strong>403</strong> — Forbidden (no permission)</li>
  <li><strong>404</strong> — Not Found</li>
  <li><strong>500</strong> — Server Error</li>
</ul>

<h3>Retry Logic</h3>
<pre><code>async function fetchWithRetry(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      let response = await fetch(url);
      if (response.ok) return await response.json();
    } catch (err) {
      if (i === maxRetries - 1) throw err;
      console.log("Retry " + (i + 1));
    }
  }
}</code></pre>

<h3>Simulated Response Handler</h3>
<pre><code>function handleResponse(status, data) {
  if (status >= 200 && status < 300) {
    return { success: true, data };
  } else if (status === 404) {
    return { success: false, error: "Not found" };
  } else if (status >= 500) {
    return { success: false, error: "Server error" };
  }
  return { success: false, error: "Unknown error" };
}

console.log(handleResponse(200, {name: "Alice"}));
// {success: true, data: {name: "Alice"}}
console.log(handleResponse(404, null));
// {success: false, error: "Not found"}</code></pre>`,
              challenge: {
                description: 'Write a handleResponse(status, data) function that returns {success: true, data} for status 200-299, and {success: false, error: "Error " + status} otherwise. Test with status 200 and print the success value.',
                starterCode: '// Write handleResponse\n',
                expectedOutput: 'true',
                hints: [
                  'Check if status >= 200 && status < 300',
                  'Return an object with success property',
                  'function handleResponse(status, data) {\n  if (status >= 200 && status < 300) {\n    return { success: true, data };\n  }\n  return { success: false, error: "Error " + status };\n}\nlet result = handleResponse(200, { name: "test" });\nconsole.log(result.success);'
                ]
              },
              quiz: [
                {
                  question: 'Does fetch reject on 404 or 500 status?',
                  options: ['Yes, always', 'No, only on network failures', 'Only on 500', 'Only on 404'],
                  correct: 1
                },
                {
                  question: 'What status code means "Not Found"?',
                  options: ['400', '401', '404', '500'],
                  correct: 2
                },
                {
                  question: 'What does response.ok check?',
                  options: ['If response exists', 'If status is 200-299', 'If body has data', 'If headers are correct'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_fetch_4',
              title: 'Building an API Client',
              type: 'mastery',
              theory: `<h2>Building an API Client</h2>
<p>Let's build a reusable API client that wraps fetch with good patterns.</p>

<h3>API Client Pattern</h3>
<pre><code>function createApiClient(baseUrl) {
  async function request(method, path, body = null) {
    let options = {
      method,
      headers: { "Content-Type": "application/json" }
    };
    if (body) options.body = JSON.stringify(body);
    
    let response = await fetch(baseUrl + path, options);
    if (!response.ok) throw new Error("HTTP " + response.status);
    return response.json();
  }
  
  return {
    get: (path) => request("GET", path),
    post: (path, data) => request("POST", path, data),
    put: (path, data) => request("PUT", path, data),
    delete: (path) => request("DELETE", path)
  };
}</code></pre>

<h3>Simulated API Client</h3>
<pre><code>function createMockApi() {
  let store = {};
  
  return {
    get(collection) {
      return store[collection] || [];
    },
    post(collection, item) {
      store[collection] = store[collection] || [];
      let newItem = { id: Date.now(), ...item };
      store[collection].push(newItem);
      return newItem;
    },
    delete(collection, id) {
      store[collection] = (store[collection] || []).filter(i => i.id !== id);
      return { deleted: true };
    }
  };
}

let api = createMockApi();
api.post("todos", { text: "Learn JS" });
api.post("todos", { text: "Build app" });
console.log(api.get("todos").length); // 2</code></pre>`,
              challenge: {
                description: 'Create a createMockApi() with get(key) and set(key, value) methods using a store object. Set "name" to "JavaScript" and "version" to 2024. Get and print "name".',
                starterCode: '// Build a mock API client\n',
                expectedOutput: 'JavaScript',
                hints: [
                  'Use an internal store object',
                  'get returns store[key], set assigns store[key] = value',
                  'function createMockApi() {\n  let store = {};\n  return {\n    get(key) { return store[key]; },\n    set(key, value) { store[key] = value; }\n  };\n}\nlet api = createMockApi();\napi.set("name", "JavaScript");\napi.set("version", 2024);\nconsole.log(api.get("name"));'
                ]
              },
              quiz: [
                {
                  question: 'What does a factory function return?',
                  options: ['A class', 'A new object with methods', 'A promise', 'A string'],
                  correct: 1
                },
                {
                  question: 'Why wrap fetch in a reusable client?',
                  options: ['Required by browsers', 'Reduces repetition and standardizes error handling', 'Makes it faster', 'No real benefit'],
                  correct: 1
                },
                {
                  question: 'What pattern keeps the store private in createApi?',
                  options: ['Global scope', 'Closure', 'Class private field', 'Object.freeze'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'error-handling',
          title: 'Error Handling',
          lessons: [
            {
              id: 'js_err_1',
              title: 'try/catch/finally',
              type: 'challenge',
              theory: `<h2>try/catch/finally</h2>
<p>Error handling prevents your program from crashing when something goes wrong.</p>

<h3>Basic try/catch</h3>
<pre><code>try {
  let result = JSON.parse("invalid json");
} catch (error) {
  console.log("Error caught: " + error.message);
}
// "Error caught: Unexpected token i in JSON at position 0"
// Program continues running!</code></pre>

<h3>The Error Object</h3>
<pre><code>try {
  undefinedFunction();
} catch (error) {
  console.log(error.name);     // "ReferenceError"
  console.log(error.message);  // "undefinedFunction is not defined"
}</code></pre>

<h3>finally Block</h3>
<p>Runs whether or not an error occurred — useful for cleanup:</p>
<pre><code>function processData(data) {
  console.log("Starting...");
  try {
    let parsed = JSON.parse(data);
    console.log("Parsed: " + parsed.name);
  } catch (error) {
    console.log("Error: " + error.message);
  } finally {
    console.log("Done processing");
  }
}

processData('{"name":"Alice"}');
// "Starting...", "Parsed: Alice", "Done processing"

processData('bad data');
// "Starting...", "Error: ...", "Done processing"</code></pre>

<h3>Throwing Custom Errors</h3>
<pre><code>function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (e) {
  console.log(e.message); // "Division by zero!"
}</code></pre>`,
              challenge: {
                description: 'Write a function safeParse(jsonString) that tries to parse JSON and returns the result. If it fails, return {error: "Invalid JSON"}. Test with a valid string \'{"x":1}\' and print the x property.',
                starterCode: '// Write safeParse function\n',
                expectedOutput: '1',
                hints: [
                  'Wrap JSON.parse in try/catch',
                  'Return the parsed result or error object',
                  'function safeParse(str) {\n  try {\n    return JSON.parse(str);\n  } catch (e) {\n    return { error: "Invalid JSON" };\n  }\n}\nlet result = safeParse(\'{"x":1}\');\nconsole.log(result.x);'
                ]
              },
              quiz: [
                {
                  question: 'What does try/catch prevent?',
                  options: ['Slow code', 'Program crashes from errors', 'All bugs', 'Memory leaks'],
                  correct: 1
                },
                {
                  question: 'When does the finally block run?',
                  options: ['Only on success', 'Only on error', 'Always, regardless of outcome', 'Never'],
                  correct: 2
                },
                {
                  question: 'What does throw do?',
                  options: ['Catches an error', 'Creates and throws an error', 'Logs an error', 'Ignores an error'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_err_2',
              title: 'Custom Error Classes',
              type: 'challenge',
              theory: `<h2>Custom Error Classes</h2>
<p>You can create specific error types for different situations.</p>

<h3>Custom Error</h3>
<pre><code>class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NotFoundError extends Error {
  constructor(resource) {
    super(resource + " not found");
    this.name = "NotFoundError";
    this.resource = resource;
  }
}

function findUser(id) {
  let users = [{ id: 1, name: "Alice" }];
  let user = users.find(u => u.id === id);
  if (!user) throw new NotFoundError("User " + id);
  return user;
}

try {
  findUser(99);
} catch (error) {
  if (error instanceof NotFoundError) {
    console.log(error.message); // "User 99 not found"
  }
}</code></pre>

<h3>Error Types in JavaScript</h3>
<ul>
  <li><strong>Error</strong> — generic error</li>
  <li><strong>TypeError</strong> — wrong type used</li>
  <li><strong>RangeError</strong> — number out of range</li>
  <li><strong>ReferenceError</strong> — undefined variable used</li>
  <li><strong>SyntaxError</strong> — invalid syntax</li>
</ul>

<h3>Pattern: Error Handling by Type</h3>
<pre><code>try {
  riskyOperation();
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Type error: " + error.message);
  } else if (error instanceof RangeError) {
    console.log("Range error: " + error.message);
  } else {
    console.log("Unknown error: " + error.message);
  }
}</code></pre>`,
              challenge: {
                description: 'Create a function validateAge(age) that throws a custom error "Age must be positive" if age < 0 and "Age must be a number" if not a number. Test with -5 and catch the error, printing its message.',
                starterCode: '// Write validateAge with custom errors\n',
                expectedOutput: 'Age must be positive',
                hints: [
                  'Use typeof to check if it is a number',
                  'throw new Error("message") for custom errors',
                  'function validateAge(age) {\n  if (typeof age !== "number") throw new Error("Age must be a number");\n  if (age < 0) throw new Error("Age must be positive");\n  return age;\n}\n\ntry {\n  validateAge(-5);\n} catch (e) {\n  console.log(e.message);\n}'
                ]
              },
              quiz: [
                {
                  question: 'How do you check the type of an error?',
                  options: ['typeof error', 'error instanceof ErrorType', 'error.type', 'error.is(type)'],
                  correct: 1
                },
                {
                  question: 'What does extends Error do?',
                  options: ['Creates a new Error type inheriting from Error', 'Catches errors', 'Prevents errors', 'Logs errors'],
                  correct: 0
                },
                {
                  question: 'When should you create custom error classes?',
                  options: ['Always', 'Never', 'When you need to distinguish between different error types', 'Only in Node.js'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_err_3',
              title: 'Error Handling Patterns',
              type: 'challenge',
              theory: `<h2>Error Handling Patterns</h2>

<h3>Guard Clauses</h3>
<pre><code>function processOrder(order) {
  if (!order) throw new Error("Order is required");
  if (!order.items || order.items.length === 0) {
    throw new Error("Order must have items");
  }
  if (order.total < 0) {
    throw new Error("Total cannot be negative");
  }
  
  // Happy path
  return "Processing order: $" + order.total;
}

try {
  console.log(processOrder({ items: ["A"], total: 25 }));
} catch (e) {
  console.log("Failed: " + e.message);
}
// "Processing order: $25"</code></pre>

<h3>Result Pattern (No Exceptions)</h3>
<pre><code>function safeDivide(a, b) {
  if (b === 0) return { ok: false, error: "Division by zero" };
  return { ok: true, value: a / b };
}

let result = safeDivide(10, 2);
if (result.ok) {
  console.log(result.value); // 5
} else {
  console.log(result.error);
}</code></pre>

<h3>Graceful Degradation</h3>
<pre><code>function getConfig(key) {
  let config = { theme: "dark", lang: "en" };
  try {
    return config[key] || "default";
  } catch (e) {
    return "default"; // Fallback
  }
}

console.log(getConfig("theme")); // "dark"
console.log(getConfig("missing")); // "default"</code></pre>`,
              challenge: {
                description: 'Write a safeDivide(a, b) function using the Result pattern: return {ok: true, value} on success, {ok: false, error: "Division by zero"} if b is 0. Test with (10, 0) and print the error.',
                starterCode: '// Write safeDivide with Result pattern\n',
                expectedOutput: 'Division by zero',
                hints: [
                  'Check if b === 0 first',
                  'Return objects with ok property',
                  'function safeDivide(a, b) {\n  if (b === 0) return { ok: false, error: "Division by zero" };\n  return { ok: true, value: a / b };\n}\nlet result = safeDivide(10, 0);\nif (!result.ok) console.log(result.error);'
                ]
              },
              quiz: [
                {
                  question: 'What is a guard clause?',
                  options: ['A security feature', 'An early return/throw for invalid input', 'A try/catch block', 'A loop condition'],
                  correct: 1
                },
                {
                  question: 'What is the Result pattern?',
                  options: ['Throwing errors', 'Returning {ok, value/error} instead of throwing', 'Using try/catch everywhere', 'Logging results'],
                  correct: 1
                },
                {
                  question: 'What is graceful degradation?',
                  options: ['Crashing gracefully', 'Providing fallback behavior when errors occur', 'Slowly getting worse', 'Error logging'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_err_4',
              title: 'Debugging Techniques',
              type: 'mastery',
              theory: `<h2>Debugging Techniques</h2>

<h3>console Methods</h3>
<pre><code>console.log("Basic log");
console.error("Error message");   // Red in browser
console.warn("Warning");          // Yellow
console.table([{a:1},{a:2}]);     // Table format
console.time("timer");
// ... code ...
console.timeEnd("timer");         // Shows elapsed time
console.group("Group");
console.log("Inside group");
console.groupEnd();</code></pre>

<h3>Debugging Strategy</h3>
<ol>
  <li><strong>Reproduce:</strong> Consistently trigger the bug</li>
  <li><strong>Isolate:</strong> Find the smallest code that shows the bug</li>
  <li><strong>Identify:</strong> Log values to find where things go wrong</li>
  <li><strong>Fix:</strong> Correct the issue</li>
  <li><strong>Verify:</strong> Confirm the fix works</li>
</ol>

<h3>Common Bugs and Fixes</h3>
<pre><code>// Bug: Off-by-one error
for (let i = 0; i <= arr.length; i++) { /* BUG: <= */ }
for (let i = 0; i < arr.length; i++) { /* FIX: < */ }

// Bug: Comparing wrong types
if (input == 0) // Might be true for "", null, false
if (input === 0) // Only true for actual 0

// Bug: Mutating objects unintentionally
let copy = original; // NOT a copy! Same reference!
let copy = { ...original }; // Actual copy</code></pre>

<h3>Using typeof and console.log for Debugging</h3>
<pre><code>function debug(label, value) {
  console.log(label + " (" + typeof value + "):", value);
}

let x = "5";
debug("x", x);   // "x (string): 5"
// Aha! It's a string, not a number!</code></pre>`,
              challenge: {
                description: 'Write a debug(label, value) function that prints: "{label} [{type}]: {value}". Test with debug("count", 42) and debug("name", "Alice").',
                starterCode: '// Write debug function\n',
                expectedOutput: 'count [number]: 42\nname [string]: Alice',
                hints: [
                  'Use typeof to get the type',
                  'Format as label + " [" + type + "]: " + value',
                  'function debug(label, value) {\n  console.log(label + " [" + typeof value + "]: " + value);\n}\ndebug("count", 42);\ndebug("name", "Alice");'
                ]
              },
              quiz: [
                {
                  question: 'What is the first step in debugging?',
                  options: ['Fix it', 'Reproduce the bug consistently', 'Delete the code', 'Ask someone else'],
                  correct: 1
                },
                {
                  question: 'What does console.table() do?',
                  options: ['Creates an HTML table', 'Displays data in table format in console', 'Converts to CSV', 'Nothing useful'],
                  correct: 1
                },
                {
                  question: 'What common bug does let copy = original cause with objects?',
                  options: ['Syntax error', 'Both variables reference the same object', 'It creates a deep copy', 'Memory leak'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'todo-app-project',
          title: 'Todo App PROJECT',
          lessons: [
            {
              id: 'js_proj2_1',
              title: 'Todo Data Model',
              type: 'project',
              theory: `<h2>Todo App - Data Model</h2>
<p>We'll build a complete Todo application step by step. This project ties together arrays, objects, functions, and all the concepts learned so far.</p>

<h3>Data Structure</h3>
<pre><code>// Each todo is an object
let todo = {
  id: 1,
  text: "Learn JavaScript",
  completed: false,
  createdAt: Date.now()
};

// All todos stored in an array
let todos = [];</code></pre>

<h3>CRUD Operations</h3>
<p>Our app needs:</p>
<ul>
  <li><strong>Create</strong> — add new todos</li>
  <li><strong>Read</strong> — display todos</li>
  <li><strong>Update</strong> — toggle complete, edit text</li>
  <li><strong>Delete</strong> — remove todos</li>
</ul>

<h3>ID Generation</h3>
<pre><code>let nextId = 1;

function generateId() {
  return nextId++;
}

console.log(generateId()); // 1
console.log(generateId()); // 2
console.log(generateId()); // 3</code></pre>

<h3>Creating a Todo</h3>
<pre><code>function createTodo(text) {
  return {
    id: generateId(),
    text: text,
    completed: false,
    createdAt: Date.now()
  };
}

let todo1 = createTodo("Buy groceries");
console.log(todo1.text);      // "Buy groceries"
console.log(todo1.completed); // false</code></pre>`,
              challenge: {
                description: 'Create a todo system: a nextId counter starting at 1, a createTodo(text) function that returns {id, text, completed: false}. Create two todos "Learn JS" and "Build App" and print their IDs.',
                starterCode: '// Build the todo data model\n',
                expectedOutput: '1\n2',
                hints: [
                  'Use nextId++ to auto-increment',
                  'Return an object with id, text, completed',
                  'let nextId = 1;\nfunction createTodo(text) {\n  return { id: nextId++, text, completed: false };\n}\nlet t1 = createTodo("Learn JS");\nlet t2 = createTodo("Build App");\nconsole.log(t1.id);\nconsole.log(t2.id);'
                ]
              },
              quiz: [
                {
                  question: 'What does CRUD stand for?',
                  options: ['Create, Run, Update, Debug', 'Create, Read, Update, Delete', 'Copy, Read, Undo, Delete', 'Compile, Run, Use, Deploy'],
                  correct: 1
                },
                {
                  question: 'Why use an auto-incrementing ID?',
                  options: ['For styling', 'To uniquely identify each item', 'Required by JavaScript', 'For sorting'],
                  correct: 1
                },
                {
                  question: 'Why is completed set to false by default?',
                  options: ['New todos start as not completed', 'It is required', 'For performance', 'No reason'],
                  correct: 0
                }
              ]
            },
            {
              id: 'js_proj2_2',
              title: 'Adding and Removing Todos',
              type: 'project',
              theory: `<h2>Adding and Removing Todos</h2>

<h3>The Todo Store</h3>
<pre><code>let todos = [];
let nextId = 1;

function addTodo(text) {
  if (!text || text.trim() === "") {
    return { error: "Text is required" };
  }
  let todo = {
    id: nextId++,
    text: text.trim(),
    completed: false
  };
  todos.push(todo);
  return todo;
}

function removeTodo(id) {
  let index = todos.findIndex(t => t.id === id);
  if (index === -1) return { error: "Todo not found" };
  return todos.splice(index, 1)[0];
}

function getTodos() {
  return [...todos]; // Return a copy
}</code></pre>

<h3>Validation</h3>
<pre><code>// Always validate input!
function addTodo(text) {
  if (!text) return { error: "Text is required" };
  if (text.length > 200) return { error: "Too long" };
  if (text.trim().length === 0) return { error: "Cannot be empty" };
  // ... create todo
}</code></pre>

<h3>Using the Store</h3>
<pre><code>addTodo("Buy milk");
addTodo("Walk the dog");
addTodo("Write code");

console.log(getTodos().length); // 3

removeTodo(2); // Remove "Walk the dog"
console.log(getTodos().length); // 2</code></pre>`,
              challenge: {
                description: 'Create a todo store with: todos array, addTodo(text), removeTodo(id), getTodos(). Add 3 todos: "Task A", "Task B", "Task C". Remove the one with id 2. Print the remaining count.',
                starterCode: '// Build the todo store with add/remove\n',
                expectedOutput: '2',
                hints: [
                  'Use push to add, filter to remove',
                  'Remember to use auto-incrementing IDs',
                  'let todos = [];\nlet nextId = 1;\n\nfunction addTodo(text) {\n  todos.push({ id: nextId++, text, completed: false });\n}\n\nfunction removeTodo(id) {\n  todos = todos.filter(t => t.id !== id);\n}\n\nfunction getTodos() { return todos; }\n\naddTodo("Task A");\naddTodo("Task B");\naddTodo("Task C");\nremoveTodo(2);\nconsole.log(getTodos().length);'
                ]
              },
              quiz: [
                {
                  question: 'Why return a copy in getTodos()?',
                  options: ['For performance', 'To prevent external code from modifying the internal array', 'Required by JavaScript', 'No real reason'],
                  correct: 1
                },
                {
                  question: 'What does findIndex return if not found?',
                  options: ['0', 'null', '-1', 'undefined'],
                  correct: 2
                },
                {
                  question: 'Why validate input in addTodo?',
                  options: ['For performance', 'To prevent invalid data from entering the system', 'Style preference', 'Required by ES6'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_proj2_3',
              title: 'Toggling and Filtering',
              type: 'project',
              theory: `<h2>Toggling and Filtering</h2>

<h3>Toggle Completion</h3>
<pre><code>function toggleTodo(id) {
  let todo = todos.find(t => t.id === id);
  if (!todo) return { error: "Not found" };
  todo.completed = !todo.completed;
  return todo;
}</code></pre>

<h3>Filtering Todos</h3>
<pre><code>function getActiveTodos() {
  return todos.filter(t => !t.completed);
}

function getCompletedTodos() {
  return todos.filter(t => t.completed);
}

function filterTodos(filter) {
  switch (filter) {
    case "active": return todos.filter(t => !t.completed);
    case "completed": return todos.filter(t => t.completed);
    default: return [...todos]; // "all"
  }
}</code></pre>

<h3>Statistics</h3>
<pre><code>function getStats() {
  let total = todos.length;
  let completed = todos.filter(t => t.completed).length;
  let active = total - completed;
  let percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return { total, completed, active, percent };
}

// Example output:
// { total: 5, completed: 2, active: 3, percent: 40 }</code></pre>

<h3>Clear Completed</h3>
<pre><code>function clearCompleted() {
  let count = todos.filter(t => t.completed).length;
  todos = todos.filter(t => !t.completed);
  return count + " items cleared";
}</code></pre>`,
              challenge: {
                description: 'Create todos array with 3 items. Add toggleTodo(id) and getStats() functions. Add "A", "B", "C", toggle first two as completed. Print stats as "2/3 completed".',
                starterCode: '// Build toggle and stats functionality\n',
                expectedOutput: '2/3 completed',
                hints: [
                  'Toggle sets completed = !completed',
                  'Stats counts completed vs total',
                  'let todos = [];\nlet nextId = 1;\n\nfunction addTodo(text) {\n  todos.push({id: nextId++, text, completed: false});\n}\n\nfunction toggleTodo(id) {\n  let todo = todos.find(t => t.id === id);\n  if (todo) todo.completed = !todo.completed;\n}\n\nfunction getStats() {\n  let completed = todos.filter(t => t.completed).length;\n  return completed + "/" + todos.length + " completed";\n}\n\naddTodo("A");\naddTodo("B");\naddTodo("C");\ntoggleTodo(1);\ntoggleTodo(2);\nconsole.log(getStats());'
                ]
              },
              quiz: [
                {
                  question: 'What does !todo.completed do?',
                  options: ['Deletes the property', 'Flips true to false and vice versa', 'Sets to null', 'Checks if completed'],
                  correct: 1
                },
                {
                  question: 'What filter returns all incomplete todos?',
                  options: ['todos.filter(t => t.completed)', 'todos.filter(t => !t.completed)', 'todos.filter(t => t.active)', 'todos.filter(t => t.done)'],
                  correct: 1
                },
                {
                  question: 'Why use a switch for filter types?',
                  options: ['Performance', 'Clean handling of multiple known filter values', 'Required', 'Prevents errors'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_proj2_4',
              title: 'Rendering and Display',
              type: 'project',
              theory: `<h2>Rendering and Display</h2>

<h3>Text-Based Rendering</h3>
<pre><code>function renderTodo(todo) {
  let checkbox = todo.completed ? "[x]" : "[ ]";
  return checkbox + " " + todo.text;
}

function renderAll(filter = "all") {
  let filtered = filterTodos(filter);
  if (filtered.length === 0) return "No todos!";
  return filtered.map(renderTodo).join("\n");
}

// Example:
// [ ] Buy milk
// [x] Walk dog
// [ ] Code</code></pre>

<h3>Formatted Display</h3>
<pre><code>function displayTodos() {
  console.log("=== Todo List ===");
  todos.forEach((todo, i) => {
    let status = todo.completed ? "✓" : "○";
    console.log(status + " " + todo.text);
  });
  let stats = getStats();
  console.log("--- " + stats.active + " items left ---");
}</code></pre>

<h3>Search Functionality</h3>
<pre><code>function searchTodos(query) {
  let q = query.toLowerCase();
  return todos.filter(t => 
    t.text.toLowerCase().includes(q)
  );
}</code></pre>`,
              challenge: {
                description: 'Create 3 todos: "Learn HTML" (completed), "Learn CSS" (completed), "Learn JS" (not completed). Write a render function that formats each as "[x] text" or "[ ] text". Print all rendered todos.',
                starterCode: '// Create todos and render them\n',
                expectedOutput: '[x] Learn HTML\n[x] Learn CSS\n[ ] Learn JS',
                hints: [
                  'Set completed: true for first two',
                  'Map each to the checkbox + text format',
                  'let todos = [\n  { text: "Learn HTML", completed: true },\n  { text: "Learn CSS", completed: true },\n  { text: "Learn JS", completed: false }\n];\n\nfunction render(todos) {\n  return todos.map(t => (t.completed ? "[x]" : "[ ]") + " " + t.text).join("\\n");\n}\n\nconsole.log(render(todos));'
                ]
              },
              quiz: [
                {
                  question: 'What is "rendering" in this context?',
                  options: ['Making it 3D', 'Converting data to a displayable format', 'Saving to database', 'Sending to server'],
                  correct: 1
                },
                {
                  question: 'Why separate data from display?',
                  options: ['Performance only', 'Allows changing display without changing data logic', 'No real reason', 'Required by frameworks'],
                  correct: 1
                },
                {
                  question: 'What does .includes(query) do for search?',
                  options: ['Exact match only', 'Checks if string contains query', 'Regex match', 'Starts with query'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_proj2_5',
              title: 'Local Storage Persistence',
              type: 'project',
              theory: `<h2>Local Storage Persistence</h2>
<p>localStorage lets you save data in the browser that persists even after the page is closed.</p>

<h3>localStorage API</h3>
<pre><code>// Save data
localStorage.setItem("key", "value");

// Read data
let value = localStorage.getItem("key"); // "value"

// Remove data
localStorage.removeItem("key");

// Clear all
localStorage.clear();</code></pre>

<h3>Storing Objects (JSON)</h3>
<pre><code>// localStorage only stores strings!
let todos = [{ id: 1, text: "Hello", completed: false }];

// Save
localStorage.setItem("todos", JSON.stringify(todos));

// Load
let loaded = JSON.parse(localStorage.getItem("todos") || "[]");
console.log(loaded); // [{id: 1, text: "Hello", completed: false}]</code></pre>

<h3>Simulating localStorage</h3>
<pre><code>// Since we don't have real localStorage, let's simulate it:
let storage = {};

let mockStorage = {
  setItem(key, value) { storage[key] = String(value); },
  getItem(key) { return storage[key] || null; },
  removeItem(key) { delete storage[key]; },
  clear() { storage = {}; }
};

// Usage:
mockStorage.setItem("todos", JSON.stringify([{text: "Hello"}]));
let data = JSON.parse(mockStorage.getItem("todos"));
console.log(data[0].text); // "Hello"</code></pre>`,
              challenge: {
                description: 'Create a mockStorage with setItem/getItem methods. Save an array of todos [{text:"Task 1"},{text:"Task 2"}] as JSON string under key "todos". Load it back and print the length.',
                starterCode: '// Simulate localStorage\n',
                expectedOutput: '2',
                hints: [
                  'Use an object to store key-value pairs',
                  'Use JSON.stringify to save, JSON.parse to load',
                  'let storage = {};\nlet mockStorage = {\n  setItem(key, value) { storage[key] = value; },\n  getItem(key) { return storage[key] || null; }\n};\n\nlet todos = [{text:"Task 1"}, {text:"Task 2"}];\nmockStorage.setItem("todos", JSON.stringify(todos));\nlet loaded = JSON.parse(mockStorage.getItem("todos"));\nconsole.log(loaded.length);'
                ]
              },
              quiz: [
                {
                  question: 'What type does localStorage store?',
                  options: ['Any type', 'Only strings', 'Only JSON', 'Objects and arrays'],
                  correct: 1
                },
                {
                  question: 'How do you store an object in localStorage?',
                  options: ['localStorage.setItem("key", object)', 'JSON.stringify then setItem', 'object.save()', 'Not possible'],
                  correct: 1
                },
                {
                  question: 'What does getItem return if key does not exist?',
                  options: ['undefined', '""', 'null', '0'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_proj2_6',
              title: 'Complete Todo Application',
              type: 'project',
              theory: `<h2>Complete Todo Application</h2>
<p>Let's assemble all pieces into a working Todo manager.</p>

<h3>Complete Implementation</h3>
<pre><code>function TodoApp() {
  let todos = [];
  let nextId = 1;
  
  return {
    add(text) {
      if (!text || !text.trim()) return null;
      let todo = { id: nextId++, text: text.trim(), completed: false };
      todos.push(todo);
      return todo;
    },
    remove(id) {
      todos = todos.filter(t => t.id !== id);
    },
    toggle(id) {
      let todo = todos.find(t => t.id === id);
      if (todo) todo.completed = !todo.completed;
    },
    getAll() { return [...todos]; },
    getActive() { return todos.filter(t => !t.completed); },
    getCompleted() { return todos.filter(t => t.completed); },
    stats() {
      return {
        total: todos.length,
        active: this.getActive().length,
        completed: this.getCompleted().length
      };
    },
    render() {
      return todos.map(t => 
        (t.completed ? "[x]" : "[ ]") + " " + t.text
      ).join("\n");
    }
  };
}

let app = TodoApp();
app.add("Learn JavaScript");
app.add("Build Todo App");
app.add("Deploy to web");
app.toggle(1);
console.log(app.render());
console.log("Active: " + app.stats().active);</code></pre>`,
              challenge: {
                description: 'Build a complete TodoApp using the factory function pattern. It must have add, toggle, and stats methods. Add "Read", "Code", "Sleep". Toggle "Read" (id 1). Print the stats as "Total: 3, Done: 1".',
                starterCode: '// Build complete TodoApp\n',
                expectedOutput: 'Total: 3, Done: 1',
                hints: [
                  'Use a factory function returning an object with methods',
                  'stats() counts total and completed',
                  'function TodoApp() {\n  let todos = [];\n  let nextId = 1;\n  return {\n    add(text) { todos.push({id: nextId++, text, completed: false}); },\n    toggle(id) {\n      let t = todos.find(t => t.id === id);\n      if (t) t.completed = !t.completed;\n    },\n    stats() {\n      let done = todos.filter(t => t.completed).length;\n      return "Total: " + todos.length + ", Done: " + done;\n    }\n  };\n}\nlet app = TodoApp();\napp.add("Read");\napp.add("Code");\napp.add("Sleep");\napp.toggle(1);\nconsole.log(app.stats());'
                ]
              },
              quiz: [
                {
                  question: 'What pattern does TodoApp() use?',
                  options: ['Class pattern', 'Factory function with closure', 'Singleton pattern', 'Prototype pattern'],
                  correct: 1
                },
                {
                  question: 'Why is todos not accessible outside TodoApp?',
                  options: ['It is frozen', 'Closure keeps it private', 'It is deleted', 'It is global'],
                  correct: 1
                },
                {
                  question: 'What real-world features could you add next?',
                  options: ['Only sorting', 'Editing, due dates, categories, drag-drop reordering', 'Nothing more', 'Only colors'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'es6-features',
          title: 'ES6+ Features',
          lessons: [
            {
              id: 'js_es6_1',
              title: 'Destructuring Advanced',
              type: 'challenge',
              theory: `<h2>Destructuring Advanced</h2>

<h3>Swapping Variables</h3>
<pre><code>let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1</code></pre>

<h3>Function Return Destructuring</h3>
<pre><code>function getCoordinates() {
  return { x: 10, y: 20, z: 30 };
}

let { x, y } = getCoordinates();
console.log(x, y); // 10 20

// Array return
function getRange() {
  return [1, 10];
}
let [min, max] = getRange();
console.log(min, max); // 1 10</code></pre>

<h3>Nested Destructuring</h3>
<pre><code>let data = {
  user: {
    name: "Alice",
    address: { city: "Paris", zip: "75001" }
  }
};

let { user: { name, address: { city } } } = data;
console.log(name); // "Alice"
console.log(city); // "Paris"</code></pre>

<h3>Parameter Destructuring with Defaults</h3>
<pre><code>function createUser({ name = "Anonymous", age = 0, role = "user" } = {}) {
  return { name, age, role };
}

console.log(createUser({ name: "Bob", age: 25 }));
// {name: "Bob", age: 25, role: "user"}
console.log(createUser());
// {name: "Anonymous", age: 0, role: "user"}</code></pre>`,
              challenge: {
                description: 'Write a function getMinMax(arr) that returns {min, max}. Test with [5, 2, 8, 1, 9] and destructure the result. Print min and max.',
                starterCode: '// Write getMinMax and destructure the result\n',
                expectedOutput: '1\n9',
                hints: [
                  'Use Math.min(...arr) and Math.max(...arr)',
                  'Destructure with let {min, max} = getMinMax(arr)',
                  'function getMinMax(arr) {\n  return { min: Math.min(...arr), max: Math.max(...arr) };\n}\nlet { min, max } = getMinMax([5, 2, 8, 1, 9]);\nconsole.log(min);\nconsole.log(max);'
                ]
              },
              quiz: [
                {
                  question: 'How do you swap variables without a temp variable?',
                  options: ['a = b; b = a', '[a, b] = [b, a]', 'swap(a, b)', 'a ^= b; b ^= a'],
                  correct: 1
                },
                {
                  question: 'What does = {} in function({name} = {}) do?',
                  options: ['Creates empty object', 'Provides default if no argument passed', 'Clears the parameter', 'Nothing'],
                  correct: 1
                },
                {
                  question: 'Can you destructure nested objects?',
                  options: ['No', 'Yes, with nested { } syntax', 'Only one level', 'Only arrays'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_es6_2',
              title: 'Map and Set',
              type: 'challenge',
              theory: `<h2>Map and Set</h2>

<h3>Map — Key-Value Pairs</h3>
<p>Like objects, but keys can be ANY type:</p>
<pre><code>let map = new Map();
map.set("name", "Alice");
map.set(42, "the answer");
map.set(true, "yes");

console.log(map.get("name")); // "Alice"
console.log(map.get(42));     // "the answer"
console.log(map.size);        // 3
console.log(map.has("name")); // true

map.delete(42);
console.log(map.size); // 2</code></pre>

<h3>Iterating Maps</h3>
<pre><code>let scores = new Map([
  ["Alice", 95],
  ["Bob", 82],
  ["Charlie", 90]
]);

for (let [name, score] of scores) {
  console.log(name + ": " + score);
}

// Convert to array
let arr = [...scores]; // [["Alice",95], ["Bob",82], ...]</code></pre>

<h3>Set — Unique Values Only</h3>
<pre><code>let set = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(set.size); // 5 (duplicates removed)

set.add(6);
set.delete(1);
console.log(set.has(3)); // true

// Remove duplicates from array:
let nums = [1, 1, 2, 2, 3, 3];
let unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3]</code></pre>

<h3>When to Use</h3>
<ul>
  <li><strong>Map</strong>: non-string keys, frequent additions/deletions, need size</li>
  <li><strong>Set</strong>: unique values, fast lookup, mathematical set operations</li>
</ul>`,
              challenge: {
                description: 'Create an array [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]. Use a Set to remove duplicates. Print the unique values joined with ", ".',
                starterCode: 'let numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];\n// Remove duplicates using Set\n',
                expectedOutput: '1, 2, 3, 4',
                hints: [
                  'Create new Set(numbers) to remove duplicates',
                  'Spread back to array with [...set]',
                  'let numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];\nlet unique = [...new Set(numbers)];\nconsole.log(unique.join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'What is the main advantage of Map over regular objects?',
                  options: ['Faster', 'Keys can be any type', 'Smaller in memory', 'Has methods'],
                  correct: 1
                },
                {
                  question: 'What does Set automatically do?',
                  options: ['Sorts values', 'Removes duplicates', 'Counts values', 'Groups values'],
                  correct: 1
                },
                {
                  question: 'How do you convert a Set to an Array?',
                  options: ['set.toArray()', '[...set]', 'Array(set)', 'set.array()'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_es6_3',
              title: 'Symbols and Iterators',
              type: 'challenge',
              theory: `<h2>Symbols and Iterators</h2>

<h3>Symbols — Unique Identifiers</h3>
<pre><code>let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false (always unique!)

// Use as object keys
let user = {
  name: "Alice",
  [Symbol("secret")]: "hidden value"
};

// Symbols don't show in for...in or Object.keys()
console.log(Object.keys(user)); // ["name"]</code></pre>

<h3>Iterators — The Protocol</h3>
<p>An iterator is any object with a <code>next()</code> method that returns <code>{value, done}</code>:</p>
<pre><code>function createCounter(start, end) {
  let current = start;
  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      }
      return { value: undefined, done: true };
    }
  };
}

let counter = createCounter(1, 3);
console.log(counter.next()); // {value: 1, done: false}
console.log(counter.next()); // {value: 2, done: false}
console.log(counter.next()); // {value: 3, done: false}
console.log(counter.next()); // {value: undefined, done: true}</code></pre>

<h3>Generators (Simplified Iterators)</h3>
<pre><code>function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

let nums = [...range(1, 5)];
console.log(nums); // [1, 2, 3, 4, 5]

for (let n of range(1, 3)) {
  console.log(n); // 1, 2, 3
}</code></pre>`,
              challenge: {
                description: 'Create a createCounter(start, end) iterator. It should have a next() method returning {value, done}. Create counter(1, 3) and call next() 3 times, printing each value.',
                starterCode: '// Create an iterator\n',
                expectedOutput: '1\n2\n3',
                hints: [
                  'Track current value, increment on each next() call',
                  'Return {value: current++, done: false} until past end',
                  'function createCounter(start, end) {\n  let current = start;\n  return {\n    next() {\n      if (current <= end) return { value: current++, done: false };\n      return { value: undefined, done: true };\n    }\n  };\n}\nlet c = createCounter(1, 3);\nconsole.log(c.next().value);\nconsole.log(c.next().value);\nconsole.log(c.next().value);'
                ]
              },
              quiz: [
                {
                  question: 'Are two Symbols with the same description equal?',
                  options: ['Yes', 'No, Symbols are always unique', 'Only if created together', 'Depends on the description'],
                  correct: 1
                },
                {
                  question: 'What must an iterator next() return?',
                  options: ['Just the value', '{value, done} object', 'A boolean', 'An array'],
                  correct: 1
                },
                {
                  question: 'What does yield do in a generator?',
                  options: ['Stops the function forever', 'Pauses and returns a value, resumes on next call', 'Throws an error', 'Returns undefined'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_es6_4',
              title: 'Modern JavaScript Patterns',
              type: 'mastery',
              theory: `<h2>Modern JavaScript Patterns</h2>

<h3>Optional Chaining + Nullish Coalescing</h3>
<pre><code>let config = getUserConfig?.() ?? getDefaultConfig();
let theme = user?.preferences?.theme ?? "light";</code></pre>

<h3>Logical Assignment Operators</h3>
<pre><code>let a = null;
a ??= "default";   // a = a ?? "default"
console.log(a);    // "default"

let b = 0;
b ||= 10;          // b = b || 10
console.log(b);    // 10

let c = 1;
c &&= 2;           // c = c && 2
console.log(c);    // 2</code></pre>

<h3>Object.fromEntries</h3>
<pre><code>let entries = [["name", "Alice"], ["age", 30]];
let obj = Object.fromEntries(entries);
console.log(obj); // {name: "Alice", age: 30}

// Transform object values
let prices = { apple: 1, banana: 2, cherry: 3 };
let doubled = Object.fromEntries(
  Object.entries(prices).map(([k, v]) => [k, v * 2])
);
console.log(doubled); // {apple: 2, banana: 4, cherry: 6}</code></pre>

<h3>Array.at() and structuredClone()</h3>
<pre><code>let arr = [1, 2, 3, 4, 5];
console.log(arr.at(-1));  // 5 (last element)
console.log(arr.at(-2));  // 4

// Deep clone (modern alternative to JSON trick)
let original = { a: 1, nested: { b: 2 } };
let clone = structuredClone(original);
clone.nested.b = 99;
console.log(original.nested.b); // 2 (unchanged)</code></pre>`,
              challenge: {
                description: 'Use Object.fromEntries and Object.entries to double all values in {a: 5, b: 10, c: 15}. Print the value of "b" in the new object.',
                starterCode: 'let obj = { a: 5, b: 10, c: 15 };\n// Double all values using entries/fromEntries\n',
                expectedOutput: '20',
                hints: [
                  'Object.entries gives [["a",5],["b",10],["c",15]]',
                  'Map each to [key, val * 2], then fromEntries',
                  'let obj = { a: 5, b: 10, c: 15 };\nlet doubled = Object.fromEntries(\n  Object.entries(obj).map(([k, v]) => [k, v * 2])\n);\nconsole.log(doubled.b);'
                ]
              },
              quiz: [
                {
                  question: 'What does ??= do?',
                  options: ['Always assigns', 'Assigns only if current value is null/undefined', 'Checks equality', 'Throws if null'],
                  correct: 1
                },
                {
                  question: 'What does arr.at(-1) return?',
                  options: ['First element', 'Last element', 'undefined', '-1'],
                  correct: 1
                },
                {
                  question: 'What does Object.fromEntries do?',
                  options: ['Converts object to entries', 'Converts entries array to object', 'Deletes entries', 'Filters entries'],
                  correct: 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced',
      description: 'Master closures, prototypes, classes, higher-order functions, regex, and build a Weather App.',
      chapters: [
        {
          id: 'closures-and-scope',
          title: 'Closures & Scope',
          lessons: [
            {
              id: 'js_cls_1',
              title: 'Lexical Scope',
              type: 'challenge',
              theory: `<h2>Lexical Scope</h2>
<p><strong>Lexical scope</strong> means a function can access variables from where it was defined (written), not where it's called.</p>

<h3>Scope Chain</h3>
<pre><code>let global = "I'm global";

function outer() {
  let outerVar = "I'm outer";
  
  function inner() {
    let innerVar = "I'm inner";
    console.log(innerVar);  // ✓ own scope
    console.log(outerVar);  // ✓ parent scope
    console.log(global);    // ✓ global scope
  }
  
  inner();
  // console.log(innerVar); // ✗ Error! Not accessible
}

outer();</code></pre>

<h3>Each Function Creates a New Scope</h3>
<pre><code>function createScope() {
  let x = 10;
  return x;
}

// x is not accessible here
// console.log(x); // Error!</code></pre>

<h3>Block Scope vs Function Scope</h3>
<pre><code>// let and const are block-scoped
if (true) {
  let blockScoped = "only here";
  const alsoBlock = "only here too";
}
// console.log(blockScoped); // Error!

// var is function-scoped (avoid using var)
function example() {
  if (true) {
    var funcScoped = "everywhere in function";
  }
  console.log(funcScoped); // Works! (var ignores blocks)
}</code></pre>

<h3>The Key Insight</h3>
<p>JavaScript resolves variable names by looking up the scope chain: first in the current scope, then the parent scope, then grandparent, up to global. This lookup path is determined by where the code is WRITTEN, not where it runs.</p>`,
              challenge: {
                description: 'Create a function outer() that declares let x = 10. Inside it, define inner() that prints x. Call inner() from within outer(). Then call outer().',
                starterCode: '// Demonstrate lexical scope\n',
                expectedOutput: '10',
                hints: [
                  'inner() can access x from outer() due to lexical scope',
                  'Define inner inside outer, call inner, then call outer',
                  'function outer() {\n  let x = 10;\n  function inner() {\n    console.log(x);\n  }\n  inner();\n}\nouter();'
                ]
              },
              quiz: [
                {
                  question: 'What determines lexical scope?',
                  options: ['Where a function is called', 'Where a function is defined/written', 'The global scope', 'The runtime environment'],
                  correct: 1
                },
                {
                  question: 'Can an inner function access outer variables?',
                  options: ['No', 'Yes, via the scope chain', 'Only if passed as parameters', 'Only global ones'],
                  correct: 1
                },
                {
                  question: 'What is the difference between var and let scope?',
                  options: ['No difference', 'var is function-scoped, let is block-scoped', 'let is global, var is local', 'var is newer'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_cls_2',
              title: 'Closures Explained',
              type: 'challenge',
              theory: `<h2>Closures Explained</h2>
<p>A <strong>closure</strong> is a function that remembers and can access variables from its outer scope, even after the outer function has returned.</p>

<h3>Basic Closure</h3>
<pre><code>function createGreeter(name) {
  // name is "trapped" in the closure
  return function() {
    console.log("Hello, " + name + "!");
  };
}

let greetAlice = createGreeter("Alice");
let greetBob = createGreeter("Bob");

greetAlice(); // "Hello, Alice!"
greetBob();   // "Hello, Bob!"
// Each closure remembers its own "name"!</code></pre>

<h3>Why This Works</h3>
<p>When <code>createGreeter("Alice")</code> returns, normally <code>name</code> would be garbage collected. But the returned function still references it, so JavaScript keeps it alive. That's the closure!</p>

<h3>Counter Example</h3>
<pre><code>function createCounter() {
  let count = 0; // Private variable!
  
  return {
    increment() { count++; },
    decrement() { count--; },
    getCount() { return count; }
  };
}

let counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 3
// count cannot be accessed directly — it's private!</code></pre>

<h3>The Mental Model</h3>
<p>Think of a closure as a function carrying a "backpack" of variables from where it was created. No matter where you carry that function, it always has access to its backpack.</p>`,
              challenge: {
                description: 'Write a createCounter() function that returns an object with increment() and getCount() methods. The count variable should be private (in closure). Increment 3 times and print the count.',
                starterCode: '// Create a counter using closures\n',
                expectedOutput: '3',
                hints: [
                  'Declare count inside createCounter',
                  'Return an object with methods that access count',
                  'function createCounter() {\n  let count = 0;\n  return {\n    increment() { count++; },\n    getCount() { return count; }\n  };\n}\nlet c = createCounter();\nc.increment();\nc.increment();\nc.increment();\nconsole.log(c.getCount());'
                ]
              },
              quiz: [
                {
                  question: 'What is a closure?',
                  options: ['A closed function', 'A function + its surrounding state (outer variables)', 'A private class', 'A loop that ends'],
                  correct: 1
                },
                {
                  question: 'When does a closure form?',
                  options: ['When you use var', 'When a function references outer scope variables', 'When you call a function', 'When you use return'],
                  correct: 1
                },
                {
                  question: 'Can you access closed-over variables directly?',
                  options: ['Yes, always', 'No, only through the returned functions', 'With special syntax', 'With Object.keys'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_cls_3',
              title: 'Practical Closures',
              type: 'challenge',
              theory: `<h2>Practical Closures</h2>

<h3>1. Data Privacy / Encapsulation</h3>
<pre><code>function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      if (amount > 0) balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) balance -= amount;
      return balance;
    },
    getBalance() { return balance; }
  };
}

let account = createBankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance()); // 120
// balance is completely private!</code></pre>

<h3>2. Function Factories</h3>
<pre><code>function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

let double = multiplier(2);
let triple = multiplier(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15</code></pre>

<h3>3. Memoization (Caching)</h3>
<pre><code>function memoize(fn) {
  let cache = {};
  return function(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = fn(n);
    return cache[n];
  };
}

let factorial = memoize(function(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5)); // 120 (calculated)
console.log(factorial(5)); // 120 (from cache)</code></pre>`,
              challenge: {
                description: 'Create a multiplier(factor) factory function. Create double (factor 2) and triple (factor 3). Print double(7) and triple(7).',
                starterCode: '// Create multiplier factory\n',
                expectedOutput: '14\n21',
                hints: [
                  'multiplier returns a function that uses factor from closure',
                  'Each returned function remembers its own factor',
                  'function multiplier(factor) {\n  return function(num) {\n    return num * factor;\n  };\n}\nlet double = multiplier(2);\nlet triple = multiplier(3);\nconsole.log(double(7));\nconsole.log(triple(7));'
                ]
              },
              quiz: [
                {
                  question: 'What is a function factory?',
                  options: ['A class that creates functions', 'A function that returns customized functions', 'A design pattern for factories', 'A built-in JavaScript feature'],
                  correct: 1
                },
                {
                  question: 'What is memoization?',
                  options: ['Memorizing code', 'Caching function results to avoid recomputation', 'Using memo variables', 'Writing notes in code'],
                  correct: 1
                },
                {
                  question: 'Why are closures useful for data privacy?',
                  options: ['They encrypt data', 'Variables in closure cannot be accessed from outside', 'They use private keyword', 'They prevent XSS'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_cls_4',
              title: 'Closures in Loops',
              type: 'challenge',
              theory: `<h2>Closures in Loops</h2>
<p>A classic JavaScript interview question involves closures inside loops.</p>

<h3>The Classic Problem (with var)</h3>
<pre><code>// Problem: all functions share the same i!
var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(function() { console.log(i); });
}
funcs[0](); // 3 (not 0!)
funcs[1](); // 3 (not 1!)
funcs[2](); // 3 (not 2!)
// By the time functions run, i is already 3</code></pre>

<h3>Solution 1: Use let</h3>
<pre><code>let funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(function() { console.log(i); });
}
funcs[0](); // 0 ✓
funcs[1](); // 1 ✓
funcs[2](); // 2 ✓
// let creates a new scope for each iteration!</code></pre>

<h3>Solution 2: IIFE (Immediately Invoked Function Expression)</h3>
<pre><code>var funcs = [];
for (var i = 0; i < 3; i++) {
  (function(j) {
    funcs.push(function() { console.log(j); });
  })(i);
}
funcs[0](); // 0 ✓</code></pre>

<h3>Solution 3: Factory function</h3>
<pre><code>function makeLogger(val) {
  return function() { console.log(val); };
}

var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(makeLogger(i));
}
funcs[0](); // 0 ✓
funcs[1](); // 1 ✓</code></pre>`,
              challenge: {
                description: 'Create an array of 3 functions using a for loop with let. Each function should return its index. Call all three and print the results.',
                starterCode: '// Create array of functions using closure with let\n',
                expectedOutput: '0\n1\n2',
                hints: [
                  'Use let in the for loop so each iteration has its own i',
                  'Push a function that prints i',
                  'let funcs = [];\nfor (let i = 0; i < 3; i++) {\n  funcs.push(function() { console.log(i); });\n}\nfuncs[0]();\nfuncs[1]();\nfuncs[2]();'
                ]
              },
              quiz: [
                {
                  question: 'Why does var in a loop cause unexpected closure behavior?',
                  options: ['Bug in JavaScript', 'var is function-scoped, so all iterations share one variable', 'var is slower', 'var cannot be used in loops'],
                  correct: 1
                },
                {
                  question: 'How does let fix the closure-in-loop problem?',
                  options: ['It is faster', 'Each iteration gets its own scope with its own variable', 'It prevents closures', 'It copies the value'],
                  correct: 1
                },
                {
                  question: 'What is an IIFE?',
                  options: ['An error type', 'A function that runs immediately when defined', 'A loop pattern', 'An async function'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_cls_5',
              title: 'Module Pattern',
              type: 'mastery',
              theory: `<h2>Module Pattern</h2>
<p>The module pattern uses closures to create private state with a public API — the foundation of modular JavaScript before ES6 modules.</p>

<h3>Revealing Module Pattern</h3>
<pre><code>const Calculator = (function() {
  // Private state
  let history = [];
  
  // Private function
  function addToHistory(operation) {
    history.push(operation);
  }
  
  // Public API
  return {
    add(a, b) {
      let result = a + b;
      addToHistory(a + "+" + b + "=" + result);
      return result;
    },
    subtract(a, b) {
      let result = a - b;
      addToHistory(a + "-" + b + "=" + result);
      return result;
    },
    getHistory() {
      return [...history];
    }
  };
})();

console.log(Calculator.add(5, 3));       // 8
console.log(Calculator.subtract(10, 4)); // 6
console.log(Calculator.getHistory());    
// ["5+3=8", "10-4=6"]
// history itself is private!</code></pre>

<h3>Singleton Pattern</h3>
<pre><code>const Config = (function() {
  let settings = {};
  
  return {
    set(key, value) { settings[key] = value; },
    get(key) { return settings[key]; },
    getAll() { return { ...settings }; }
  };
})();

Config.set("theme", "dark");
Config.set("lang", "en");
console.log(Config.get("theme")); // "dark"</code></pre>

<p>The IIFE <code>(function() { ... })()</code> runs immediately and returns the public interface, while keeping private variables in the closure.</p>`,
              challenge: {
                description: 'Create a module pattern for a simple Logger: it has a private logs array, a public log(message) method that stores messages, and a getAll() method that returns all logs. Log "Hello" and "World", then print getAll() joined with ", ".',
                starterCode: '// Create Logger module using IIFE\n',
                expectedOutput: 'Hello, World',
                hints: [
                  'Use (function() { ... })() to create the module',
                  'Return an object with log and getAll methods',
                  'const Logger = (function() {\n  let logs = [];\n  return {\n    log(msg) { logs.push(msg); },\n    getAll() { return [...logs]; }\n  };\n})();\n\nLogger.log("Hello");\nLogger.log("World");\nconsole.log(Logger.getAll().join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'What does the Module Pattern provide?',
                  options: ['Speed', 'Private state with public interface', 'Async support', 'Type checking'],
                  correct: 1
                },
                {
                  question: 'What does IIFE stand for?',
                  options: ['Internal Interface Function Expression', 'Immediately Invoked Function Expression', 'Iterable Interface Factory Engine', 'Internet Interface Function Engine'],
                  correct: 1
                },
                {
                  question: 'Why is the module pattern useful?',
                  options: ['It is faster', 'Encapsulates private state and exposes only needed functionality', 'It uses less memory', 'Required by browsers'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'prototypes-and-classes',
          title: 'Prototypes & Classes',
          lessons: [
            {
              id: 'js_pc_1',
              title: 'Prototypal Inheritance',
              type: 'challenge',
              theory: `<h2>Prototypal Inheritance</h2>
<p>JavaScript uses prototypes (not traditional classes) for inheritance. Every object has a hidden link to another object called its prototype.</p>

<h3>The Prototype Chain</h3>
<pre><code>let animal = {
  eats: true,
  walk() { return "Walking..."; }
};

let dog = Object.create(animal);
dog.barks = true;

console.log(dog.barks); // true (own property)
console.log(dog.eats);  // true (inherited from animal)
console.log(dog.walk()); // "Walking..." (inherited)</code></pre>

<h3>How Lookup Works</h3>
<ol>
  <li>JavaScript checks the object itself</li>
  <li>If not found, checks its prototype</li>
  <li>Continues up the chain until found or reaches null</li>
</ol>

<h3>Object.create</h3>
<pre><code>let base = {
  greet() { return "Hello, " + this.name; }
};

let user = Object.create(base);
user.name = "Alice";
console.log(user.greet()); // "Hello, Alice"

// Check the chain:
console.log(Object.getPrototypeOf(user) === base); // true</code></pre>

<h3>hasOwnProperty</h3>
<pre><code>let parent = { inherited: true };
let child = Object.create(parent);
child.own = true;

console.log(child.hasOwnProperty("own"));       // true
console.log(child.hasOwnProperty("inherited")); // false
console.log("inherited" in child);               // true (checks chain)</code></pre>`,
              challenge: {
                description: 'Create a "vehicle" object with a method describe() that returns "A " + this.type. Create "car" from vehicle using Object.create, set car.type = "Car". Print car.describe().',
                starterCode: '// Demonstrate prototypal inheritance\n',
                expectedOutput: 'A Car',
                hints: [
                  'Use Object.create(vehicle) to set up inheritance',
                  'The describe method uses this.type which comes from car',
                  'let vehicle = {\n  describe() { return "A " + this.type; }\n};\nlet car = Object.create(vehicle);\ncar.type = "Car";\nconsole.log(car.describe());'
                ]
              },
              quiz: [
                {
                  question: 'What does Object.create(proto) do?',
                  options: ['Copies proto', 'Creates new object with proto as its prototype', 'Freezes proto', 'Converts proto to array'],
                  correct: 1
                },
                {
                  question: 'What is the prototype chain?',
                  options: ['A linked list of functions', 'A series of objects linked via prototypes for property lookup', 'A class hierarchy', 'A call stack'],
                  correct: 1
                },
                {
                  question: 'What does hasOwnProperty check?',
                  options: ['The full prototype chain', 'Only the object itself (not inherited)', 'Only the prototype', 'If property is writable'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_pc_2',
              title: 'Constructor Functions',
              type: 'challenge',
              theory: `<h2>Constructor Functions</h2>
<p>Before ES6 classes, constructor functions were the standard way to create objects with shared behavior.</p>

<h3>Constructor Function</h3>
<pre><code>function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add methods to the prototype (shared by all instances)
Person.prototype.greet = function() {
  return "Hi, I'm " + this.name;
};

Person.prototype.getAge = function() {
  return this.age;
};

let alice = new Person("Alice", 30);
let bob = new Person("Bob", 25);

console.log(alice.greet()); // "Hi, I'm Alice"
console.log(bob.greet());   // "Hi, I'm Bob"
console.log(alice.greet === bob.greet); // true (same function!)</code></pre>

<h3>The new Keyword</h3>
<p>When you call <code>new Person(...)</code>, JavaScript:</p>
<ol>
  <li>Creates a new empty object</li>
  <li>Sets its prototype to Person.prototype</li>
  <li>Calls Person() with <code>this</code> = new object</li>
  <li>Returns the new object</li>
</ol>

<h3>instanceof</h3>
<pre><code>console.log(alice instanceof Person); // true
console.log(alice instanceof Object); // true</code></pre>

<h3>Why Prototype for Methods?</h3>
<p>If we define methods inside the constructor, every instance gets its own copy (wastes memory). Prototype methods are shared across ALL instances.</p>`,
              challenge: {
                description: 'Create a Rectangle constructor with width and height properties. Add an area() method to its prototype. Create a rectangle(5, 3) and print its area.',
                starterCode: '// Create Rectangle constructor with area method\n',
                expectedOutput: '15',
                hints: [
                  'function Rectangle(w, h) sets this.width and this.height',
                  'Add area to Rectangle.prototype',
                  'function Rectangle(width, height) {\n  this.width = width;\n  this.height = height;\n}\nRectangle.prototype.area = function() {\n  return this.width * this.height;\n};\nlet rect = new Rectangle(5, 3);\nconsole.log(rect.area());'
                ]
              },
              quiz: [
                {
                  question: 'What does the "new" keyword do?',
                  options: ['Creates a variable', 'Creates an object, links prototype, calls constructor', 'Imports a module', 'Declares a class'],
                  correct: 1
                },
                {
                  question: 'Why put methods on the prototype instead of in the constructor?',
                  options: ['Style preference', 'Methods are shared across all instances (memory efficient)', 'They run faster', 'Required by JavaScript'],
                  correct: 1
                },
                {
                  question: 'What does instanceof check?',
                  options: ['If types match', 'If object was created with a specific constructor', 'If properties exist', 'If methods work'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_pc_3',
              title: 'ES6 Classes',
              type: 'challenge',
              theory: `<h2>ES6 Classes</h2>
<p>Classes are syntactic sugar over constructor functions and prototypes, providing a cleaner syntax.</p>

<h3>Class Syntax</h3>
<pre><code>class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  
  speak() {
    return this.name + " says " + this.sound;
  }
  
  toString() {
    return "[Animal: " + this.name + "]";
  }
}

let cat = new Animal("Cat", "Meow");
console.log(cat.speak()); // "Cat says Meow"</code></pre>

<h3>Getters and Setters</h3>
<pre><code>class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get area() {
    return Math.PI * this.radius ** 2;
  }
  
  get diameter() {
    return this.radius * 2;
  }
  
  set diameter(d) {
    this.radius = d / 2;
  }
}

let c = new Circle(5);
console.log(c.area);     // 78.54... (accessed like property!)
console.log(c.diameter); // 10
c.diameter = 20;
console.log(c.radius);  // 10</code></pre>

<h3>Static Methods</h3>
<pre><code>class MathUtils {
  static add(a, b) { return a + b; }
  static multiply(a, b) { return a * b; }
}

console.log(MathUtils.add(2, 3)); // 5
// Called on the class itself, not on instances</code></pre>`,
              challenge: {
                description: 'Create a class "Person" with constructor(name, age) and a method introduce() that returns "I am {name}, {age} years old". Create a person "Sam", 28 and print their introduction.',
                starterCode: '// Create Person class\n',
                expectedOutput: 'I am Sam, 28 years old',
                hints: [
                  'Use class keyword with constructor and method',
                  'Access properties with this.name, this.age',
                  'class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  introduce() {\n    return "I am " + this.name + ", " + this.age + " years old";\n  }\n}\nlet p = new Person("Sam", 28);\nconsole.log(p.introduce());'
                ]
              },
              quiz: [
                {
                  question: 'Are ES6 classes a new inheritance mechanism?',
                  options: ['Yes, completely new', 'No, syntactic sugar over prototypes', 'They replace prototypes', 'They use a different engine'],
                  correct: 1
                },
                {
                  question: 'What is a getter in a class?',
                  options: ['A regular method', 'A method accessed like a property (no parentheses)', 'A constructor', 'A static method'],
                  correct: 1
                },
                {
                  question: 'What are static methods called on?',
                  options: ['Instances', 'The class itself', 'The prototype', 'The constructor'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_pc_4',
              title: 'Class Inheritance',
              type: 'challenge',
              theory: `<h2>Class Inheritance</h2>
<p>Classes can extend other classes using the <code>extends</code> keyword.</p>

<h3>Basic Inheritance</h3>
<pre><code>class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound";
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  speak() {
    return this.name + " barks!";
  }
  fetch() {
    return this.name + " fetches the ball!";
  }
}

let rex = new Dog("Rex", "Labrador");
console.log(rex.speak());  // "Rex barks!" (overridden)
console.log(rex.fetch());  // "Rex fetches the ball!"
console.log(rex instanceof Dog);    // true
console.log(rex instanceof Animal); // true</code></pre>

<h3>super Keyword</h3>
<pre><code>class Shape {
  constructor(color) {
    this.color = color;
  }
  describe() {
    return "A " + this.color + " shape";
  }
}

class Square extends Shape {
  constructor(color, size) {
    super(color); // Must call super before using this!
    this.size = size;
  }
  area() {
    return this.size * this.size;
  }
  describe() {
    return super.describe() + " (square, " + this.size + "x" + this.size + ")";
  }
}

let sq = new Square("red", 4);
console.log(sq.describe()); // "A red shape (square, 4x4)"
console.log(sq.area());    // 16</code></pre>`,
              challenge: {
                description: 'Create a Shape class with constructor(name) and an area() method that returns 0. Create a Circle class that extends Shape, takes name and radius, and overrides area() to return pi*r*r (use 3.14). Print the area of a Circle with radius 5.',
                starterCode: '// Create Shape and Circle classes\n',
                expectedOutput: '78.5',
                hints: [
                  'Use extends and super(name) in the constructor',
                  'Override area() in Circle',
                  'class Shape {\n  constructor(name) { this.name = name; }\n  area() { return 0; }\n}\n\nclass Circle extends Shape {\n  constructor(name, radius) {\n    super(name);\n    this.radius = radius;\n  }\n  area() { return 3.14 * this.radius * this.radius; }\n}\n\nlet c = new Circle("MyCircle", 5);\nconsole.log(c.area());'
                ]
              },
              quiz: [
                {
                  question: 'What does extends do?',
                  options: ['Copies a class', 'Creates an inheritance relationship', 'Merges classes', 'Imports a class'],
                  correct: 1
                },
                {
                  question: 'What must you call before using "this" in a child constructor?',
                  options: ['this()', 'parent()', 'super()', 'init()'],
                  correct: 2
                },
                {
                  question: 'What does super.method() do?',
                  options: ['Calls the method from the parent class', 'Overrides the method', 'Deletes the method', 'Creates a new method'],
                  correct: 0
                }
              ]
            },
            {
              id: 'js_pc_5',
              title: 'Private Fields and Methods',
              type: 'challenge',
              theory: `<h2>Private Fields and Methods</h2>
<p>Modern JavaScript supports truly private class members using the <code>#</code> prefix.</p>

<h3>Private Fields</h3>
<pre><code>class BankAccount {
  #balance;  // Private field
  #owner;
  
  constructor(owner, initial) {
    this.#owner = owner;
    this.#balance = initial;
  }
  
  deposit(amount) {
    if (amount > 0) this.#balance += amount;
    return this.#balance;
  }
  
  get balance() {
    return this.#balance;
  }
  
  get owner() {
    return this.#owner;
  }
}

let acct = new BankAccount("Alice", 1000);
acct.deposit(500);
console.log(acct.balance); // 1500
// console.log(acct.#balance); // SyntaxError! Private!</code></pre>

<h3>Private Methods</h3>
<pre><code>class Validator {
  #rules = [];
  
  #checkRule(value, rule) {
    return rule(value);
  }
  
  addRule(fn) {
    this.#rules.push(fn);
  }
  
  validate(value) {
    return this.#rules.every(rule => this.#checkRule(value, rule));
  }
}</code></pre>

<h3>Simulating Private (for our environment)</h3>
<pre><code>// Since # might not work everywhere, closures work too:
function createAccount(owner, initial) {
  let balance = initial; // Private via closure
  
  return {
    deposit(amt) { balance += amt; },
    getBalance() { return balance; },
    getOwner() { return owner; }
  };
}

let acct = createAccount("Bob", 500);
acct.deposit(200);
console.log(acct.getBalance()); // 700</code></pre>`,
              challenge: {
                description: 'Create a createWallet(initial) function using closures for privacy. It should have deposit(amt), withdraw(amt), and getBalance() methods. Start with 100, deposit 50, withdraw 30, print balance.',
                starterCode: '// Create private wallet using closures\n',
                expectedOutput: '120',
                hints: [
                  'Use closure to keep balance private',
                  'withdraw should check if amount is available',
                  'function createWallet(initial) {\n  let balance = initial;\n  return {\n    deposit(amt) { balance += amt; },\n    withdraw(amt) { if (amt <= balance) balance -= amt; },\n    getBalance() { return balance; }\n  };\n}\nlet w = createWallet(100);\nw.deposit(50);\nw.withdraw(30);\nconsole.log(w.getBalance());'
                ]
              },
              quiz: [
                {
                  question: 'What does # before a field name mean?',
                  options: ['It is a comment', 'It is truly private (inaccessible outside class)', 'It is static', 'It is optional'],
                  correct: 1
                },
                {
                  question: 'Can you access #private fields outside the class?',
                  options: ['Yes', 'No, it causes a SyntaxError', 'Only with special methods', 'Yes, with Object.keys'],
                  correct: 1
                },
                {
                  question: 'What is an alternative to # for privacy?',
                  options: ['var keyword', 'Closures (factory functions)', 'const keyword', 'Object.freeze'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_pc_6',
              title: 'Mixins and Composition',
              type: 'mastery',
              theory: `<h2>Mixins and Composition</h2>
<p>JavaScript only supports single inheritance. Mixins and composition let you combine behaviors from multiple sources.</p>

<h3>Mixins — Adding Behaviors</h3>
<pre><code>let Serializable = {
  serialize() {
    return JSON.stringify(this);
  }
};

let Validatable = {
  validate() {
    return Object.values(this).every(v => v !== null && v !== undefined);
  }
};

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// Apply mixins
Object.assign(User.prototype, Serializable, Validatable);

let user = new User("Alice", "alice@test.com");
console.log(user.serialize()); // JSON string
console.log(user.validate());  // true</code></pre>

<h3>Composition over Inheritance</h3>
<pre><code>// Instead of deep inheritance, compose objects:
function withLogging(obj) {
  return {
    ...obj,
    log(msg) { console.log("[" + obj.name + "] " + msg); }
  };
}

function withValidation(obj) {
  return {
    ...obj,
    isValid() { return obj.name && obj.name.length > 0; }
  };
}

let user = { name: "Alice", role: "admin" };
let enhanced = withValidation(withLogging(user));
enhanced.log("Hello!");    // "[Alice] Hello!"
console.log(enhanced.isValid()); // true</code></pre>

<h3>Prefer Composition</h3>
<p>"Favor composition over inheritance" — combine small focused behaviors rather than building deep class hierarchies.</p>`,
              challenge: {
                description: 'Create two mixin functions: withGreeting(obj) adds greet() returning "Hi, " + obj.name, and withFarewell(obj) adds bye() returning "Bye from " + obj.name. Apply both to {name: "Alice"} and print greet() and bye().',
                starterCode: '// Create and apply mixins\n',
                expectedOutput: 'Hi, Alice\nBye from Alice',
                hints: [
                  'Each mixin returns {...obj, newMethod() {...}}',
                  'Apply them: withFarewell(withGreeting(obj))',
                  'function withGreeting(obj) {\n  return { ...obj, greet() { return "Hi, " + this.name; } };\n}\nfunction withFarewell(obj) {\n  return { ...obj, bye() { return "Bye from " + this.name; } };\n}\nlet person = withFarewell(withGreeting({ name: "Alice" }));\nconsole.log(person.greet());\nconsole.log(person.bye());'
                ]
              },
              quiz: [
                {
                  question: 'What is a mixin?',
                  options: ['A type of class', 'A way to add methods to objects/classes without inheritance', 'A function argument', 'A testing tool'],
                  correct: 1
                },
                {
                  question: 'What does "composition over inheritance" mean?',
                  options: ['Never use classes', 'Combine small behaviors instead of deep class hierarchies', 'Use only functions', 'Avoid objects'],
                  correct: 1
                },
                {
                  question: 'What does Object.assign(target, ...sources) do?',
                  options: ['Deep copies', 'Copies properties from sources to target', 'Creates a new object', 'Compares objects'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'modules',
          title: 'Modules',
          lessons: [
            {
              id: 'js_mod_1',
              title: 'ES6 Module Basics',
              type: 'challenge',
              theory: `<h2>ES6 Module Basics</h2>
<p>Modules let you split code into separate files, each with its own scope. This is essential for organizing large applications.</p>

<h3>Export</h3>
<pre><code>// math.js — Named exports
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export const PI = 3.14159;

// Default export (one per file)
export default class Calculator {
  add(a, b) { return a + b; }
}</code></pre>

<h3>Import</h3>
<pre><code>// Named imports
import { add, subtract, PI } from './math.js';
console.log(add(2, 3)); // 5

// Default import
import Calculator from './math.js';

// Import all as namespace
import * as math from './math.js';
console.log(math.add(2, 3)); // 5
console.log(math.PI);        // 3.14159</code></pre>

<h3>Renaming Imports/Exports</h3>
<pre><code>// Rename on import
import { add as sum } from './math.js';
console.log(sum(2, 3)); // 5

// Rename on export
export { myFunction as default };</code></pre>

<h3>Simulating Modules (For Practice)</h3>
<pre><code>// We can simulate the module pattern:
const MathModule = (function() {
  function add(a, b) { return a + b; }
  function subtract(a, b) { return a - b; }
  const PI = 3.14159;
  
  return { add, subtract, PI };
})();

console.log(MathModule.add(5, 3));  // 8
console.log(MathModule.PI);         // 3.14159</code></pre>`,
              challenge: {
                description: 'Create a simulated module "StringUtils" using an IIFE that exports: capitalize(str), reverse(str), and repeat(str, n). Use capitalize on "hello" and print the result.',
                starterCode: '// Create StringUtils module\n',
                expectedOutput: 'Hello',
                hints: [
                  'Use (function() { ... })() pattern',
                  'Return an object with the utility functions',
                  'const StringUtils = (function() {\n  function capitalize(str) {\n    return str[0].toUpperCase() + str.slice(1);\n  }\n  function reverse(str) {\n    return str.split("").reverse().join("");\n  }\n  function repeat(str, n) {\n    return str.repeat(n);\n  }\n  return { capitalize, reverse, repeat };\n})();\n\nconsole.log(StringUtils.capitalize("hello"));'
                ]
              },
              quiz: [
                {
                  question: 'What is the main benefit of modules?',
                  options: ['Speed', 'Code organization and encapsulation', 'Smaller files', 'Better styling'],
                  correct: 1
                },
                {
                  question: 'How many default exports can a module have?',
                  options: ['Unlimited', 'Exactly one', 'Two', 'Zero'],
                  correct: 1
                },
                {
                  question: 'What does import * as name do?',
                  options: ['Imports nothing', 'Imports all exports as a namespace object', 'Imports the default', 'Creates a new module'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_mod_2',
              title: 'Module Patterns and Organization',
              type: 'challenge',
              theory: `<h2>Module Patterns and Organization</h2>

<h3>Barrel Exports (index.js)</h3>
<pre><code>// components/Button.js
export function Button() { /* ... */ }

// components/Input.js  
export function Input() { /* ... */ }

// components/index.js (barrel)
export { Button } from './Button.js';
export { Input } from './Input.js';

// Usage — clean single import
import { Button, Input } from './components';</code></pre>

<h3>Feature-Based Module Organization</h3>
<pre><code>// auth/
//   login.js
//   register.js
//   validation.js
//   index.js

// Each feature is a self-contained module</code></pre>

<h3>Service Module Pattern</h3>
<pre><code>// userService.js
const UserService = (function() {
  let users = [];
  
  return {
    add(name) {
      users.push({ id: users.length + 1, name });
    },
    getAll() {
      return [...users];
    },
    findByName(name) {
      return users.find(u => u.name === name);
    },
    count() {
      return users.length;
    }
  };
})();

UserService.add("Alice");
UserService.add("Bob");
console.log(UserService.count());         // 2
console.log(UserService.findByName("Alice")); // {id: 1, name: "Alice"}</code></pre>

<h3>Configuration Module</h3>
<pre><code>const Config = Object.freeze({
  API_URL: "https://api.example.com",
  TIMEOUT: 5000,
  MAX_RETRIES: 3,
  DEBUG: false
});
// Cannot be modified — safe as shared config</code></pre>`,
              challenge: {
                description: 'Create a UserService module with add(name), getAll(), and count() methods. Add "Alice" and "Bob", then print the count.',
                starterCode: '// Create UserService module\n',
                expectedOutput: '2',
                hints: [
                  'Use IIFE with internal users array',
                  'add pushes to array, count returns length',
                  'const UserService = (function() {\n  let users = [];\n  return {\n    add(name) { users.push({ id: users.length + 1, name }); },\n    getAll() { return [...users]; },\n    count() { return users.length; }\n  };\n})();\nUserService.add("Alice");\nUserService.add("Bob");\nconsole.log(UserService.count());'
                ]
              },
              quiz: [
                {
                  question: 'What is a barrel export?',
                  options: ['A large export', 'An index file that re-exports from multiple modules', 'A default export', 'A compressed module'],
                  correct: 1
                },
                {
                  question: 'Why use Object.freeze for config?',
                  options: ['Performance', 'Prevents accidental modification of shared constants', 'Required for modules', 'Saves memory'],
                  correct: 1
                },
                {
                  question: 'What makes the service module pattern useful?',
                  options: ['Speed', 'Encapsulates data and exposes only needed operations', 'Required by frameworks', 'Better error handling'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_mod_3',
              title: 'Dynamic Imports and Code Splitting',
              type: 'challenge',
              theory: `<h2>Dynamic Imports and Code Splitting</h2>

<h3>Dynamic import()</h3>
<p>Load modules on demand instead of upfront:</p>
<pre><code>// Static (loads immediately)
import { heavyFunction } from './heavy.js';

// Dynamic (loads when needed)
async function loadWhenNeeded() {
  let module = await import('./heavy.js');
  module.heavyFunction();
}

// Use case: route-based code splitting
async function navigateTo(page) {
  let module;
  switch(page) {
    case 'home':
      module = await import('./pages/home.js');
      break;
    case 'about':
      module = await import('./pages/about.js');
      break;
  }
  module.render();
}</code></pre>

<h3>Lazy Loading Pattern</h3>
<pre><code>// Simulated lazy loading
function createLazyLoader(loader) {
  let cached = null;
  return async function() {
    if (!cached) {
      cached = await loader();
    }
    return cached;
  };
}

// Usage:
let getHeavyModule = createLazyLoader(() => import('./heavy.js'));
// Only loads once, caches after that</code></pre>

<h3>Simulating Dynamic Loading</h3>
<pre><code>// Simulate with promises and objects
let modules = {
  math: { add: (a,b) => a+b, PI: 3.14 },
  string: { upper: s => s.toUpperCase() }
};

function dynamicImport(name) {
  return new Promise(resolve => {
    resolve(modules[name]);
  });
}

async function main() {
  let math = await dynamicImport("math");
  console.log(math.add(2, 3)); // 5
}
main();</code></pre>`,
              challenge: {
                description: 'Create a simulated module registry (object with module names as keys). Register "utils" module with function double(n). Write an async loadModule(name) function that returns the module. Load "utils" and print double(7).',
                starterCode: '// Simulate dynamic module loading\n',
                expectedOutput: '14',
                hints: [
                  'Store modules in an object, loadModule returns a Promise',
                  'Use await to get the module',
                  'let registry = {\n  utils: { double: n => n * 2 }\n};\n\nasync function loadModule(name) {\n  return new Promise(resolve => resolve(registry[name]));\n}\n\nasync function main() {\n  let utils = await loadModule("utils");\n  console.log(utils.double(7));\n}\nmain();'
                ]
              },
              quiz: [
                {
                  question: 'When does import() load the module?',
                  options: ['At page load', 'When the import() call is executed', 'At compile time', 'Never'],
                  correct: 1
                },
                {
                  question: 'What does code splitting achieve?',
                  options: ['Smaller initial load, loading code only when needed', 'Splitting code into characters', 'Dividing among team members', 'Creating multiple entry points'],
                  correct: 0
                },
                {
                  question: 'What does dynamic import() return?',
                  options: ['The module directly', 'A Promise that resolves to the module', 'An array', 'A string'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_mod_4',
              title: 'Module Best Practices',
              type: 'mastery',
              theory: `<h2>Module Best Practices</h2>

<h3>Single Responsibility</h3>
<p>Each module should do ONE thing well:</p>
<pre><code>// ✗ Too much in one module
// everything.js — handles auth, validation, formatting, API calls

// ✓ Focused modules
// auth.js — only authentication
// validate.js — only validation
// format.js — only formatting</code></pre>

<h3>Dependency Injection</h3>
<pre><code>// Instead of hard-coding dependencies:
function createUserService(database, logger) {
  return {
    addUser(name) {
      database.insert({ name });
      logger.log("User added: " + name);
    },
    getUsers() {
      return database.getAll();
    }
  };
}

// Easy to test — pass mock database!
let mockDb = {
  data: [],
  insert(item) { this.data.push(item); },
  getAll() { return this.data; }
};
let mockLogger = { log(msg) { /* silent */ } };

let service = createUserService(mockDb, mockLogger);
service.addUser("Test");
console.log(service.getUsers().length); // 1</code></pre>

<h3>Export Constants, Not Magic Values</h3>
<pre><code>// ✗ Magic numbers
if (password.length < 8) { /* ... */ }

// ✓ Named constant
const MIN_PASSWORD_LENGTH = 8;
if (password.length < MIN_PASSWORD_LENGTH) { /* ... */ }</code></pre>

<h3>Summary of Patterns</h3>
<ul>
  <li>Use named exports for utilities (multiple exports)</li>
  <li>Use default export for the main thing a module provides</li>
  <li>Keep modules focused and small</li>
  <li>Use dependency injection for testability</li>
  <li>Export types/constants, not magic values</li>
</ul>`,
              challenge: {
                description: 'Create a service using dependency injection: createTaskService(storage) with add(task) and getAll(). Pass a mock storage object with items array, insert(item), and getAll() methods. Add "Test Task" and print all items length.',
                starterCode: '// Implement dependency injection pattern\n',
                expectedOutput: '1',
                hints: [
                  'createTaskService takes a storage parameter',
                  'The service delegates to storage.insert and storage.getAll',
                  'let mockStorage = {\n  items: [],\n  insert(item) { this.items.push(item); },\n  getAll() { return this.items; }\n};\n\nfunction createTaskService(storage) {\n  return {\n    add(task) { storage.insert(task); },\n    getAll() { return storage.getAll(); }\n  };\n}\n\nlet service = createTaskService(mockStorage);\nservice.add("Test Task");\nconsole.log(service.getAll().length);'
                ]
              },
              quiz: [
                {
                  question: 'What is dependency injection?',
                  options: ['Importing modules', 'Passing dependencies as parameters instead of hard-coding', 'Creating global variables', 'A security technique'],
                  correct: 1
                },
                {
                  question: 'Why use dependency injection?',
                  options: ['Performance', 'Makes code testable and flexible', 'Required by ES6', 'Reduces file size'],
                  correct: 1
                },
                {
                  question: 'What is the Single Responsibility Principle?',
                  options: ['One developer per module', 'Each module should do one thing well', 'Only one export per file', 'One import per file'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'higher-order-functions',
          title: 'Higher-Order Functions',
          lessons: [
            {
              id: 'js_hof_1',
              title: 'Functions as First-Class Citizens',
              type: 'challenge',
              theory: `<h2>Functions as First-Class Citizens</h2>
<p>In JavaScript, functions are values — you can store them in variables, pass them as arguments, and return them from other functions.</p>

<h3>Storing Functions in Variables</h3>
<pre><code>const greet = function(name) {
  return "Hello, " + name;
};

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b
};

console.log(operations.add(5, 3));      // 8
console.log(operations.multiply(4, 2)); // 8</code></pre>

<h3>Functions in Arrays</h3>
<pre><code>let pipeline = [
  x => x * 2,
  x => x + 10,
  x => x / 3
];

let result = 5;
for (let fn of pipeline) {
  result = fn(result);
}
console.log(result); // (5*2+10)/3 = 6.666...</code></pre>

<h3>Higher-Order Function Definition</h3>
<p>A higher-order function either:</p>
<ul>
  <li>Takes a function as an argument, OR</li>
  <li>Returns a function</li>
</ul>

<pre><code>// Takes a function
function apply(fn, value) {
  return fn(value);
}
console.log(apply(x => x * 2, 5)); // 10

// Returns a function
function createAdder(n) {
  return function(x) { return x + n; };
}
let add5 = createAdder(5);
console.log(add5(3)); // 8</code></pre>`,
              challenge: {
                description: 'Create an object "ops" with add, subtract, multiply functions. Write a calculate(a, b, operation) function that applies the operation. Print calculate(10, 3, ops.subtract).',
                starterCode: '// Create ops object and calculate function\n',
                expectedOutput: '7',
                hints: [
                  'ops has methods that take two params and return result',
                  'calculate just calls operation(a, b)',
                  'let ops = {\n  add: (a, b) => a + b,\n  subtract: (a, b) => a - b,\n  multiply: (a, b) => a * b\n};\n\nfunction calculate(a, b, operation) {\n  return operation(a, b);\n}\n\nconsole.log(calculate(10, 3, ops.subtract));'
                ]
              },
              quiz: [
                {
                  question: 'What makes functions "first-class" in JavaScript?',
                  options: ['They are fast', 'They can be treated like any other value', 'They run first', 'They have priority'],
                  correct: 1
                },
                {
                  question: 'What is a higher-order function?',
                  options: ['A function in a class', 'A function that takes/returns other functions', 'A recursive function', 'An async function'],
                  correct: 1
                },
                {
                  question: 'Can you store functions in arrays?',
                  options: ['No', 'Yes', 'Only arrow functions', 'Only named functions'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_hof_2',
              title: 'Function Composition',
              type: 'challenge',
              theory: `<h2>Function Composition</h2>
<p>Composition combines simple functions to build complex ones — like LEGO blocks for logic.</p>

<h3>Manual Composition</h3>
<pre><code>const double = x => x * 2;
const addOne = x => x + 1;
const square = x => x * x;

// Compose manually:
let result = square(addOne(double(3)));
// double(3) = 6, addOne(6) = 7, square(7) = 49
console.log(result); // 49</code></pre>

<h3>compose() Utility</h3>
<pre><code>function compose(...fns) {
  return function(x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

let transform = compose(square, addOne, double);
console.log(transform(3)); // 49 (reads right-to-left)</code></pre>

<h3>pipe() — Left to Right</h3>
<pre><code>function pipe(...fns) {
  return function(x) {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
}

let process = pipe(double, addOne, square);
console.log(process(3)); // 49 (reads left-to-right)

// More readable:
let formatName = pipe(
  str => str.trim(),
  str => str.toLowerCase(),
  str => str[0].toUpperCase() + str.slice(1)
);
console.log(formatName("  ALICE  ")); // "Alice"</code></pre>

<h3>Real World: Data Pipeline</h3>
<pre><code>let processUsers = pipe(
  users => users.filter(u => u.active),
  users => users.map(u => u.name),
  names => names.sort(),
  names => names.join(", ")
);

let users = [
  {name: "Charlie", active: true},
  {name: "Alice", active: true},
  {name: "Bob", active: false}
];
console.log(processUsers(users)); // "Alice, Charlie"</code></pre>`,
              challenge: {
                description: 'Create a pipe() function that chains functions left-to-right. Create a pipeline: double, then add 1, then convert to string with "Result: " prefix. Apply to 5 and print.',
                starterCode: '// Create pipe and use it\n',
                expectedOutput: 'Result: 11',
                hints: [
                  'pipe takes ...fns and returns a function',
                  'Use reduce to chain: fns.reduce((acc, fn) => fn(acc), x)',
                  'function pipe(...fns) {\n  return function(x) {\n    return fns.reduce((acc, fn) => fn(acc), x);\n  };\n}\nlet process = pipe(\n  x => x * 2,\n  x => x + 1,\n  x => "Result: " + x\n);\nconsole.log(process(5));'
                ]
              },
              quiz: [
                {
                  question: 'What is function composition?',
                  options: ['Writing functions together', 'Combining simple functions to build complex ones', 'Composing music with code', 'A class method'],
                  correct: 1
                },
                {
                  question: 'What direction does pipe() process?',
                  options: ['Right to left', 'Left to right', 'Random', 'Inside out'],
                  correct: 1
                },
                {
                  question: 'What array method does pipe() use internally?',
                  options: ['map', 'filter', 'reduce', 'forEach'],
                  correct: 2
                }
              ]
            },
            {
              id: 'js_hof_3',
              title: 'Currying',
              type: 'challenge',
              theory: `<h2>Currying</h2>
<p>Currying transforms a function with multiple arguments into a sequence of functions each taking one argument.</p>

<h3>Basic Currying</h3>
<pre><code>// Normal function
function add(a, b) { return a + b; }
add(2, 3); // 5

// Curried version
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}
curriedAdd(2)(3); // 5

// With arrow functions
const curriedAdd = a => b => a + b;
let add5 = curriedAdd(5);
console.log(add5(3)); // 8
console.log(add5(7)); // 12</code></pre>

<h3>Why Curry?</h3>
<p>Create specialized versions of general functions:</p>
<pre><code>const multiply = a => b => a * b;
const double = multiply(2);
const triple = multiply(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Formatting
const formatCurrency = symbol => amount =>
  symbol + amount.toFixed(2);

const formatUSD = formatCurrency("$");
const formatEUR = formatCurrency("€");

console.log(formatUSD(42));   // "$42.00"
console.log(formatEUR(42));   // "€42.00"</code></pre>

<h3>Generic Curry Function</h3>
<pre><code>function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function(...more) {
      return curried(...args, ...more);
    };
  };
}

let add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));    // 6
console.log(add(1, 2)(3));    // 6
console.log(add(1, 2, 3));    // 6</code></pre>`,
              challenge: {
                description: 'Create a curried greeting function: greet(greeting)(name) that returns greeting + ", " + name + "!". Create "hello" = greet("Hello") and print hello("World") and hello("JavaScript").',
                starterCode: '// Create curried greeting\n',
                expectedOutput: 'Hello, World!\nHello, JavaScript!',
                hints: [
                  'const greet = greeting => name => ...',
                  'Create a specialized version with "Hello"',
                  'const greet = greeting => name => greeting + ", " + name + "!";\nconst hello = greet("Hello");\nconsole.log(hello("World"));\nconsole.log(hello("JavaScript"));'
                ]
              },
              quiz: [
                {
                  question: 'What is currying?',
                  options: ['Cooking with code', 'Transforming multi-arg function into chain of single-arg functions', 'A loop technique', 'Error handling'],
                  correct: 1
                },
                {
                  question: 'What does const add = a => b => a + b create?',
                  options: ['A regular function', 'A curried function taking one arg at a time', 'An error', 'Two separate functions'],
                  correct: 1
                },
                {
                  question: 'What is the main benefit of currying?',
                  options: ['Performance', 'Creating specialized functions from general ones', 'Reducing code size', 'Type safety'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_hof_4',
              title: 'Functional Patterns',
              type: 'challenge',
              theory: `<h2>Functional Patterns</h2>

<h3>Partial Application</h3>
<pre><code>function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function greet(greeting, name) {
  return greeting + ", " + name;
}

let sayHello = partial(greet, "Hello");
console.log(sayHello("Alice")); // "Hello, Alice"
console.log(sayHello("Bob"));   // "Hello, Bob"</code></pre>

<h3>Debounce — Limit Function Calls</h3>
<pre><code>function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
// Only runs after user stops typing for 300ms
let search = debounce(query => console.log("Searching: " + query), 300);</code></pre>

<h3>Once — Run Only Once</h3>
<pre><code>function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

let initialize = once(() => {
  console.log("Initialized!");
  return true;
});

initialize(); // "Initialized!" → true
initialize(); // (nothing printed) → true
initialize(); // (nothing printed) → true</code></pre>

<h3>Throttle — Rate Limit</h3>
<pre><code>function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      return fn(...args);
    }
  };
}</code></pre>`,
              challenge: {
                description: 'Implement a once(fn) function that ensures fn only runs once. Create a onceGreet = once(() => "Hello!"). Call it 3 times but it should only print once. Print the return value each time.',
                starterCode: '// Implement once() function\n',
                expectedOutput: 'Hello!\nHello!\nHello!',
                hints: [
                  'Track if function has been called with a boolean',
                  'Cache and return the first result for subsequent calls',
                  'function once(fn) {\n  let called = false;\n  let result;\n  return function(...args) {\n    if (!called) {\n      called = true;\n      result = fn(...args);\n    }\n    return result;\n  };\n}\nlet onceGreet = once(() => "Hello!");\nconsole.log(onceGreet());\nconsole.log(onceGreet());\nconsole.log(onceGreet());'
                ]
              },
              quiz: [
                {
                  question: 'What is partial application?',
                  options: ['Partially completing a function', 'Pre-filling some arguments of a function', 'Running half a function', 'A broken function'],
                  correct: 1
                },
                {
                  question: 'What does debounce do?',
                  options: ['Makes functions faster', 'Waits until calls stop, then runs once', 'Runs function twice', 'Cancels all calls'],
                  correct: 1
                },
                {
                  question: 'What does once() guarantee?',
                  options: ['Function runs every time', 'Function runs at most one time', 'Function never runs', 'Function runs asynchronously'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_hof_5',
              title: 'Building a Pipeline Library',
              type: 'mastery',
              theory: `<h2>Building a Pipeline Library</h2>
<p>Let's build a reusable data processing library using all HOF concepts.</p>

<h3>Chainable Query Builder</h3>
<pre><code>function Query(data) {
  let result = [...data];
  
  return {
    where(predicate) {
      result = result.filter(predicate);
      return this;
    },
    select(mapper) {
      result = result.map(mapper);
      return this;
    },
    orderBy(comparator) {
      result = result.sort(comparator);
      return this;
    },
    limit(n) {
      result = result.slice(0, n);
      return this;
    },
    execute() {
      return result;
    }
  };
}

let users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 28 }
];

let result = Query(users)
  .where(u => u.age >= 28)
  .select(u => u.name)
  .orderBy((a, b) => a.localeCompare(b))
  .execute();

console.log(result); // ["Alice", "Charlie", "Diana"]</code></pre>

<h3>Method Chaining Pattern</h3>
<p>Return <code>this</code> from methods to enable chaining. This is the fluent interface pattern.</p>`,
              challenge: {
                description: 'Create a Query(data) function with where(fn) and select(fn) methods that return "this" for chaining. Given data [{n:"A",v:1},{n:"B",v:5},{n:"C",v:3}], chain .where(x => x.v > 2).select(x => x.n) and print executed result joined with ", ".',
                starterCode: 'let data = [{n:"A",v:1},{n:"B",v:5},{n:"C",v:3}];\n// Build Query with chaining\n',
                expectedOutput: 'B, C',
                hints: [
                  'Return this from where and select for chaining',
                  'execute() returns the final result',
                  'let data = [{n:"A",v:1},{n:"B",v:5},{n:"C",v:3}];\n\nfunction Query(data) {\n  let result = [...data];\n  return {\n    where(fn) { result = result.filter(fn); return this; },\n    select(fn) { result = result.map(fn); return this; },\n    execute() { return result; }\n  };\n}\n\nlet output = Query(data).where(x => x.v > 2).select(x => x.n).execute();\nconsole.log(output.join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'What enables method chaining?',
                  options: ['Special syntax', 'Returning "this" from each method', 'Using promises', 'Using await'],
                  correct: 1
                },
                {
                  question: 'What is a fluent interface?',
                  options: ['A fast API', 'An API where methods chain by returning this', 'A graphical interface', 'A streaming API'],
                  correct: 1
                },
                {
                  question: 'What higher-order function concepts does Query use?',
                  options: ['Only callbacks', 'Callbacks (predicates/mappers), closures, and chaining', 'Only closures', 'Only currying'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'regular-expressions',
          title: 'Regular Expressions',
          lessons: [
            {
              id: 'js_regex_1',
              title: 'Regex Basics',
              type: 'challenge',
              theory: `<h2>Regex Basics</h2>
<p>Regular expressions (regex) are patterns used to match text. They're powerful for validation, search, and text manipulation.</p>

<h3>Creating a Regex</h3>
<pre><code>// Literal syntax
let pattern = /hello/;

// Constructor syntax
let pattern2 = new RegExp("hello");

// Test if pattern matches
console.log(/hello/.test("hello world")); // true
console.log(/hello/.test("Hi there"));    // false</code></pre>

<h3>Common Patterns</h3>
<pre><code>// Dot (.) — any character except newline
/h.t/.test("hat");  // true
/h.t/.test("hot");  // true
/h.t/.test("heat"); // false (two chars between)

// Character classes [...]
/[aeiou]/.test("hello"); // true (contains a vowel)
/[0-9]/.test("abc123");  // true (contains a digit)
/[a-z]/.test("Hello");   // true (contains lowercase)

// Negation [^...]
/[^0-9]/.test("123");    // false (only digits)
/[^0-9]/.test("12a");    // true (contains non-digit)</code></pre>

<h3>Quantifiers</h3>
<pre><code>// * = 0 or more
// + = 1 or more
// ? = 0 or 1
// {n} = exactly n
// {n,} = n or more
// {n,m} = between n and m

/a+/.test("aaa");     // true (1+ a's)
/\d{3}/.test("123");  // true (exactly 3 digits)
/\d{2,4}/.test("12"); // true (2-4 digits)</code></pre>

<h3>Shorthand Character Classes</h3>
<pre><code>// \d = digit [0-9]
// \w = word char [a-zA-Z0-9_]
// \s = whitespace
// \D, \W, \S = negations</code></pre>`,
              challenge: {
                description: 'Write a regex pattern that tests if a string contains at least one digit. Test it on "hello123" (should be true) and "hello" (should be false). Print both results.',
                starterCode: '// Write regex to check for digits\n',
                expectedOutput: 'true\nfalse',
                hints: [
                  'Use \\d to match a digit',
                  'Use .test() method on the regex',
                  'let hasDigit = /\\d/;\nconsole.log(hasDigit.test("hello123"));\nconsole.log(hasDigit.test("hello"));'
                ]
              },
              quiz: [
                {
                  question: 'What does /\\d+/ match?',
                  options: ['One digit', 'One or more digits', 'Only the letter d', 'No digits'],
                  correct: 1
                },
                {
                  question: 'What does the . (dot) match?',
                  options: ['Only dots', 'Any character except newline', 'Only letters', 'Only numbers'],
                  correct: 1
                },
                {
                  question: 'What does [^abc] match?',
                  options: ['a, b, or c', 'Anything EXCEPT a, b, or c', 'The start of line', 'abc literally'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_regex_2',
              title: 'Anchors, Groups, and Flags',
              type: 'challenge',
              theory: `<h2>Anchors, Groups, and Flags</h2>

<h3>Anchors</h3>
<pre><code>// ^ = start of string
// $ = end of string
/^Hello/.test("Hello World"); // true (starts with Hello)
/World$/.test("Hello World"); // true (ends with World)
/^Hello$/.test("Hello");      // true (exact match)</code></pre>

<h3>Flags</h3>
<pre><code>// i = case-insensitive
/hello/i.test("HELLO"); // true

// g = global (find all matches)
"cat bat hat".match(/[a-z]at/g); // ["cat", "bat", "hat"]

// m = multiline (^ and $ match line boundaries)</code></pre>

<h3>Groups ()</h3>
<pre><code>// Capturing groups
let match = "2024-01-15".match(/(\d{4})-(\d{2})-(\d{2})/);
console.log(match[1]); // "2024" (year)
console.log(match[2]); // "01" (month)
console.log(match[3]); // "15" (day)

// Non-capturing group (?:...)
/(\d+)(?:px|em)/.test("12px"); // true, but "px" not captured</code></pre>

<h3>Alternation (|)</h3>
<pre><code>/cat|dog/.test("I have a cat"); // true
/^(yes|no)$/.test("yes");       // true
/^(yes|no)$/.test("maybe");     // false</code></pre>

<h3>Practical Examples</h3>
<pre><code>// Simple email check
let emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log(emailRegex.test("user@example.com")); // true
console.log(emailRegex.test("invalid@"));         // false</code></pre>`,
              challenge: {
                description: 'Write a regex that validates a string is a valid hex color code (#followed by exactly 6 hex chars). Test "#ff5733" (true) and "#xyz" (false). Print both results.',
                starterCode: '// Validate hex color codes\n',
                expectedOutput: 'true\nfalse',
                hints: [
                  'Hex chars are [0-9a-fA-F]',
                  'Use ^ and $ for exact match, {6} for length',
                  'let hexColor = /^#[0-9a-fA-F]{6}$/;\nconsole.log(hexColor.test("#ff5733"));\nconsole.log(hexColor.test("#xyz"));'
                ]
              },
              quiz: [
                {
                  question: 'What does ^ mean in a regex?',
                  options: ['End of string', 'Any character', 'Start of string', 'Negation inside []'],
                  correct: 2
                },
                {
                  question: 'What does the "i" flag do?',
                  options: ['Makes it invisible', 'Case-insensitive matching', 'Inverts the match', 'Ignores whitespace'],
                  correct: 1
                },
                {
                  question: 'What does (\\d+) create?',
                  options: ['A named variable', 'A capturing group matching one or more digits', 'A comment', 'A flag'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_regex_3',
              title: 'String Methods with Regex',
              type: 'challenge',
              theory: `<h2>String Methods with Regex</h2>

<h3>match() — Find Matches</h3>
<pre><code>let text = "Call 123-456-7890 or 098-765-4321";
let phones = text.match(/\d{3}-\d{3}-\d{4}/g);
console.log(phones); // ["123-456-7890", "098-765-4321"]</code></pre>

<h3>replace() with Regex</h3>
<pre><code>// Simple replacement
let text = "Hello World";
console.log(text.replace(/world/i, "JavaScript"));
// "Hello JavaScript"

// Replace all (global flag)
let messy = "a  b   c    d";
let clean = messy.replace(/\s+/g, " ");
console.log(clean); // "a b c d"

// Using capture groups in replacement
let date = "2024-01-15";
let formatted = date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$2/$3/$1");
console.log(formatted); // "01/15/2024"</code></pre>

<h3>split() with Regex</h3>
<pre><code>let text = "one, two;  three   four";
let words = text.split(/[,;\s]+/);
console.log(words); // ["one", "two", "three", "four"]</code></pre>

<h3>matchAll() — Detailed Matches</h3>
<pre><code>let text = "Price: $10, Tax: $2, Total: $12";
let matches = [...text.matchAll(/\$(\d+)/g)];
matches.forEach(m => {
  console.log(m[0] + " → " + m[1]);
});
// "$10 → 10", "$2 → 2", "$12 → 12"</code></pre>`,
              challenge: {
                description: 'Given "Hello    World   JS", use replace with regex to collapse all multiple spaces into single spaces. Print the result.',
                starterCode: 'let text = "Hello    World   JS";\n// Replace multiple spaces with single space\n',
                expectedOutput: 'Hello World JS',
                hints: [
                  'Use /\\s+/g to match one or more whitespace',
                  'Replace with a single space " "',
                  'let text = "Hello    World   JS";\nconsole.log(text.replace(/\\s+/g, " "));'
                ]
              },
              quiz: [
                {
                  question: 'What does /g flag do with match()?',
                  options: ['Returns first match', 'Returns all matches as array', 'Makes it greedy', 'Groups matches'],
                  correct: 1
                },
                {
                  question: 'In replace, what does $1 refer to?',
                  options: ['The full match', 'First capturing group', 'The dollar sign', 'A variable'],
                  correct: 1
                },
                {
                  question: 'What does /\\s+/ match?',
                  options: ['The letter s', 'One or more whitespace characters', 'Exactly one space', 'The plus sign'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_regex_4',
              title: 'Practical Regex Patterns',
              type: 'mastery',
              theory: `<h2>Practical Regex Patterns</h2>

<h3>Validation Functions</h3>
<pre><code>function isValidEmail(email) {
  return /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email);
}

function isValidPhone(phone) {
  return /^\d{3}-\d{3}-\d{4}$/.test(phone);
}

function isStrongPassword(pass) {
  let hasUpper = /[A-Z]/.test(pass);
  let hasLower = /[a-z]/.test(pass);
  let hasDigit = /\d/.test(pass);
  let hasLength = pass.length >= 8;
  return hasUpper && hasLower && hasDigit && hasLength;
}

console.log(isValidEmail("test@mail.com"));  // true
console.log(isValidPhone("123-456-7890"));   // true
console.log(isStrongPassword("Abcd1234"));   // true</code></pre>

<h3>Text Extraction</h3>
<pre><code>// Extract all URLs
let text = "Visit https://google.com or http://example.org";
let urls = text.match(/https?:\/\/[\w.-]+/g);
console.log(urls);
// ["https://google.com", "http://example.org"]

// Extract hashtags
let tweet = "Loving #JavaScript and #coding today!";
let tags = tweet.match(/#\w+/g);
console.log(tags); // ["#JavaScript", "#coding"]</code></pre>

<h3>Text Transformation</h3>
<pre><code>// camelCase to kebab-case
function toKebab(str) {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}
console.log(toKebab("backgroundColor")); // "background-color"

// Template string parser
function template(str, data) {
  return str.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] || "");
}
console.log(template("Hello {{name}}!", {name: "World"}));
// "Hello World!"</code></pre>`,
              challenge: {
                description: 'Write a function extractHashtags(text) that returns an array of hashtags (words starting with #). Test with "I love #JavaScript and #coding" and print the result joined with ", ".',
                starterCode: '// Write extractHashtags\n',
                expectedOutput: '#JavaScript, #coding',
                hints: [
                  'Use match() with /#\\w+/g pattern',
                  'Return the matches or empty array',
                  'function extractHashtags(text) {\n  return text.match(/#\\w+/g) || [];\n}\nconsole.log(extractHashtags("I love #JavaScript and #coding").join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'What does /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/ validate?',
                  options: ['A URL', 'A phone number', 'An email address', 'A password'],
                  correct: 2
                },
                {
                  question: 'What does match() return if no matches are found?',
                  options: ['[]', '""', 'null', 'undefined'],
                  correct: 2
                },
                {
                  question: 'What is the purpose of the || [] in match(...) || []?',
                  options: ['Performance', 'Returns empty array if no matches (match returns null)', 'Required syntax', 'Adds empty match'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'weather-app-project',
          title: 'Weather App PROJECT',
          lessons: [
            {
              id: 'js_proj3_1',
              title: 'Weather App Architecture',
              type: 'project',
              theory: `<h2>Weather App Architecture</h2>
<p>We'll build a weather application that demonstrates advanced patterns: modules, async code, error handling, and clean architecture.</p>

<h3>Architecture Overview</h3>
<pre><code>// Our app has these layers:
// 1. Data Layer — mock weather API
// 2. Service Layer — business logic
// 3. UI Layer — display/render
// 4. Controller — ties everything together</code></pre>

<h3>Mock Weather Data</h3>
<pre><code>const weatherDatabase = {
  "London": { temp: 12, humidity: 80, condition: "Cloudy", wind: 15 },
  "Tokyo": { temp: 22, humidity: 65, condition: "Sunny", wind: 8 },
  "New York": { temp: 18, humidity: 70, condition: "Partly Cloudy", wind: 12 },
  "Mumbai": { temp: 32, humidity: 85, condition: "Humid", wind: 5 },
  "Sydney": { temp: 25, humidity: 55, condition: "Clear", wind: 10 }
};</code></pre>

<h3>API Module</h3>
<pre><code>function createWeatherAPI(database) {
  return {
    async getWeather(city) {
      // Simulate network delay
      return new Promise((resolve, reject) => {
        let data = database[city];
        if (data) {
          resolve({ city, ...data });
        } else {
          reject(new Error("City not found: " + city));
        }
      });
    },
    getCities() {
      return Object.keys(database);
    }
  };
}</code></pre>`,
              challenge: {
                description: 'Create a weatherDatabase with 3 cities and a createWeatherAPI function. The API should have an async getWeather(city) method. Fetch "Tokyo" and print its temperature.',
                starterCode: '// Build weather API module\n',
                expectedOutput: '22',
                hints: [
                  'Database is an object with city names as keys',
                  'getWeather returns a Promise',
                  'const db = {\n  "London": {temp: 12, condition: "Cloudy"},\n  "Tokyo": {temp: 22, condition: "Sunny"},\n  "Mumbai": {temp: 32, condition: "Hot"}\n};\n\nfunction createWeatherAPI(database) {\n  return {\n    async getWeather(city) {\n      let data = database[city];\n      if (!data) throw new Error("Not found");\n      return { city, ...data };\n    }\n  };\n}\n\nasync function main() {\n  let api = createWeatherAPI(db);\n  let weather = await api.getWeather("Tokyo");\n  console.log(weather.temp);\n}\nmain();'
                ]
              },
              quiz: [
                {
                  question: 'Why separate the app into layers?',
                  options: ['Looks professional', 'Each layer has a specific responsibility and can change independently', 'Required by JavaScript', 'Performance'],
                  correct: 1
                },
                {
                  question: 'Why use a mock database instead of a real API?',
                  options: ['Real APIs are broken', 'For learning and testing without network dependencies', 'Mock is faster', 'APIs cost money'],
                  correct: 1
                },
                {
                  question: 'Why return a Promise from getWeather?',
                  options: ['Required syntax', 'Simulates real async API calls that take time', 'For error handling', 'For caching'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_proj3_2',
              title: 'Weather Service Layer',
              type: 'project',
              theory: `<h2>Weather Service Layer</h2>
<p>The service layer adds business logic on top of raw data — formatting, conversions, and computed values.</p>

<h3>Temperature Conversion</h3>
<pre><code>function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5/9;
}</code></pre>

<h3>Weather Service</h3>
<pre><code>function createWeatherService(api) {
  return {
    async getFormattedWeather(city, unit = "C") {
      let data = await api.getWeather(city);
      let temp = data.temp;
      
      if (unit === "F") {
        temp = celsiusToFahrenheit(temp);
      }
      
      return {
        city: data.city,
        temperature: Math.round(temp),
        unit: unit,
        condition: data.condition,
        humidity: data.humidity,
        feelsLike: calculateFeelsLike(data.temp, data.humidity)
      };
    },
    
    async compareWeather(city1, city2) {
      let [w1, w2] = await Promise.all([
        api.getWeather(city1),
        api.getWeather(city2)
      ]);
      return {
        warmer: w1.temp > w2.temp ? city1 : city2,
        difference: Math.abs(w1.temp - w2.temp)
      };
    }
  };
}

function calculateFeelsLike(temp, humidity) {
  // Simple heat index approximation
  return Math.round(temp + (humidity > 70 ? 3 : 0));
}</code></pre>`,
              challenge: {
                description: 'Create celsiusToFahrenheit(c) and a weather service that gets data and converts temp. Given data {temp: 25, condition: "Sunny"}, convert to F and print the rounded result.',
                starterCode: '// Build weather service with temperature conversion\n',
                expectedOutput: '77',
                hints: [
                  'Formula: (c * 9/5) + 32',
                  '25°C = 77°F',
                  'function celsiusToFahrenheit(c) {\n  return (c * 9/5) + 32;\n}\n\nlet weather = { temp: 25, condition: "Sunny" };\nlet tempF = Math.round(celsiusToFahrenheit(weather.temp));\nconsole.log(tempF);'
                ]
              },
              quiz: [
                {
                  question: 'What is the service layer responsible for?',
                  options: ['Displaying data', 'Business logic, formatting, computed values', 'Database access', 'Routing'],
                  correct: 1
                },
                {
                  question: 'Why use Promise.all for compareWeather?',
                  options: ['Required', 'Fetches both cities in parallel (faster)', 'Easier to read', 'Error handling'],
                  correct: 1
                },
                {
                  question: 'What does Math.round() do?',
                  options: ['Floors the number', 'Rounds to nearest integer', 'Ceils the number', 'Truncates decimals'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_proj3_3',
              title: 'Display and Formatting',
              type: 'project',
              theory: `<h2>Display and Formatting</h2>

<h3>Weather Display Formatter</h3>
<pre><code>function formatWeatherReport(data) {
  let lines = [
    "=== Weather Report ===",
    "City: " + data.city,
    "Temperature: " + data.temperature + "°" + data.unit,
    "Condition: " + data.condition,
    "Humidity: " + data.humidity + "%"
  ];
  return lines.join("\n");
}

// Icons based on condition
function getWeatherIcon(condition) {
  const icons = {
    "Sunny": "☀️",
    "Cloudy": "☁️",
    "Rainy": "🌧️",
    "Snowy": "❄️",
    "Partly Cloudy": "⛅",
    "Clear": "🌙",
    "Humid": "💧"
  };
  return icons[condition] || "🌡️";
}</code></pre>

<h3>Summary View</h3>
<pre><code>function formatCompact(data) {
  let icon = getWeatherIcon(data.condition);
  return icon + " " + data.city + ": " + data.temperature + "°" + data.unit;
}

// Example: "☀️ Tokyo: 22°C"</code></pre>

<h3>Multi-City Display</h3>
<pre><code>function formatMultiCity(cities) {
  return cities.map(formatCompact).join("\n");
}

let cities = [
  { city: "London", temperature: 12, unit: "C", condition: "Cloudy" },
  { city: "Tokyo", temperature: 22, unit: "C", condition: "Sunny" }
];
console.log(formatMultiCity(cities));
// "☁️ London: 12°C"
// "☀️ Tokyo: 22°C"</code></pre>`,
              challenge: {
                description: 'Create getWeatherIcon(condition) and formatWeather(data) that returns "icon city: temp°C". Format {city:"Paris", temperature:18, condition:"Cloudy"} and print it.',
                starterCode: '// Build weather display formatter\n',
                expectedOutput: '☁️ Paris: 18°C',
                hints: [
                  'Map conditions to emoji icons',
                  'Combine icon + city + temp in the format function',
                  'function getWeatherIcon(condition) {\n  const icons = { "Sunny": "☀️", "Cloudy": "☁️", "Rainy": "🌧️" };\n  return icons[condition] || "🌡️";\n}\n\nfunction formatWeather(data) {\n  return getWeatherIcon(data.condition) + " " + data.city + ": " + data.temperature + "°C";\n}\n\nconsole.log(formatWeather({city: "Paris", temperature: 18, condition: "Cloudy"}));'
                ]
              },
              quiz: [
                {
                  question: 'Why separate formatting from data fetching?',
                  options: ['Performance', 'Single responsibility — display logic separate from data logic', 'Required by browsers', 'Style preference only'],
                  correct: 1
                },
                {
                  question: 'What does the || "🌡️" fallback do?',
                  options: ['Always shows thermometer', 'Shows default icon when condition is not in the map', 'Throws an error', 'Nothing'],
                  correct: 1
                },
                {
                  question: 'Why use join("\\n") for multi-line output?',
                  options: ['Only way to print', 'Creates newline-separated string from array', 'Required by console.log', 'Performance'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_proj3_4',
              title: 'Error Handling and Caching',
              type: 'project',
              theory: `<h2>Error Handling and Caching</h2>

<h3>Robust Error Handling</h3>
<pre><code>async function safeGetWeather(api, city) {
  try {
    let data = await api.getWeather(city);
    return { ok: true, data };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

// Usage:
let result = await safeGetWeather(api, "Unknown City");
if (result.ok) {
  console.log(formatWeather(result.data));
} else {
  console.log("Error: " + result.error);
}</code></pre>

<h3>Simple Cache</h3>
<pre><code>function createCache(maxAge = 60000) {
  let store = {};
  
  return {
    get(key) {
      let entry = store[key];
      if (!entry) return null;
      if (Date.now() - entry.timestamp > maxAge) {
        delete store[key];
        return null;
      }
      return entry.data;
    },
    set(key, data) {
      store[key] = { data, timestamp: Date.now() };
    },
    clear() {
      store = {};
    }
  };
}

// Cached API wrapper
function createCachedAPI(api) {
  let cache = createCache(300000); // 5 min cache
  
  return {
    async getWeather(city) {
      let cached = cache.get(city);
      if (cached) return cached;
      
      let data = await api.getWeather(city);
      cache.set(city, data);
      return data;
    }
  };
}</code></pre>`,
              challenge: {
                description: 'Create a createCache() with get(key) and set(key, value). Cache "London" weather as {temp: 12}. Retrieve it and print the temp. Try getting "Paris" (not cached) and print "null".',
                starterCode: '// Build a simple cache\n',
                expectedOutput: '12\nnull',
                hints: [
                  'Use an internal object to store key-value pairs',
                  'get returns null if key not found',
                  'function createCache() {\n  let store = {};\n  return {\n    get(key) { return store[key] || null; },\n    set(key, value) { store[key] = value; }\n  };\n}\nlet cache = createCache();\ncache.set("London", {temp: 12});\nlet london = cache.get("London");\nconsole.log(london.temp);\nconsole.log(cache.get("Paris"));'
                ]
              },
              quiz: [
                {
                  question: 'Why use a Result pattern ({ok, data/error}) instead of try/catch?',
                  options: ['Performance', 'Makes error state explicit and easy to handle', 'Required', 'Shorter code'],
                  correct: 1
                },
                {
                  question: 'What does caching prevent?',
                  options: ['Errors', 'Redundant API calls for the same data', 'All bugs', 'Memory leaks'],
                  correct: 1
                },
                {
                  question: 'Why add a maxAge to cache entries?',
                  options: ['Performance', 'Prevents stale/outdated data from being served', 'Required by APIs', 'Memory limit'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_proj3_5',
              title: 'Search and Favorites',
              type: 'project',
              theory: `<h2>Search and Favorites</h2>

<h3>Fuzzy City Search</h3>
<pre><code>function searchCities(query, cities) {
  let q = query.toLowerCase().trim();
  if (!q) return [];
  
  return cities
    .filter(city => city.toLowerCase().includes(q))
    .sort((a, b) => {
      // Prioritize starts-with matches
      let aStarts = a.toLowerCase().startsWith(q);
      let bStarts = b.toLowerCase().startsWith(q);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return a.localeCompare(b);
    });
}

let cities = ["London", "Los Angeles", "Lagos", "Lima"];
console.log(searchCities("l", cities));
// ["Lagos", "Lima", "London", "Los Angeles"]</code></pre>

<h3>Favorites System</h3>
<pre><code>function createFavorites() {
  let favorites = new Set();
  
  return {
    add(city) { favorites.add(city); },
    remove(city) { favorites.delete(city); },
    has(city) { return favorites.has(city); },
    toggle(city) {
      if (favorites.has(city)) favorites.delete(city);
      else favorites.add(city);
    },
    getAll() { return [...favorites]; },
    count() { return favorites.size; }
  };
}

let favs = createFavorites();
favs.add("Tokyo");
favs.add("London");
favs.toggle("Paris"); // adds
favs.toggle("Tokyo"); // removes
console.log(favs.getAll()); // ["London", "Paris"]</code></pre>`,
              challenge: {
                description: 'Create a createFavorites() using a Set. Add "London", "Tokyo", "Paris". Remove "Tokyo". Print the remaining favorites count and items joined with ", ".',
                starterCode: '// Build favorites system\n',
                expectedOutput: '2\nLondon, Paris',
                hints: [
                  'Use Set for unique values with add/delete',
                  'Convert to array with [...set]',
                  'function createFavorites() {\n  let favs = new Set();\n  return {\n    add(city) { favs.add(city); },\n    remove(city) { favs.delete(city); },\n    count() { return favs.size; },\n    getAll() { return [...favs]; }\n  };\n}\nlet f = createFavorites();\nf.add("London");\nf.add("Tokyo");\nf.add("Paris");\nf.remove("Tokyo");\nconsole.log(f.count());\nconsole.log(f.getAll().join(", "));'
                ]
              },
              quiz: [
                {
                  question: 'Why use Set for favorites?',
                  options: ['It is faster', 'Automatically prevents duplicates', 'Required', 'It has better methods'],
                  correct: 1
                },
                {
                  question: 'What does a fuzzy search do?',
                  options: ['Exact match only', 'Finds items that contain the query', 'Random results', 'Database query'],
                  correct: 1
                },
                {
                  question: 'Why sort starts-with matches first?',
                  options: ['Required', 'Better user experience — most relevant matches appear first', 'Performance', 'Alphabetical requirement'],
                  correct: 1
                }
              ]
            },
            {
              id: 'js_proj3_6',
              title: 'Complete Weather Application',
              type: 'project',
              theory: `<h2>Complete Weather Application</h2>
<p>Let's assemble all components into the final application.</p>

<h3>Complete App</h3>
<pre><code>function WeatherApp() {
  // Data layer
  const db = {
    "London": { temp: 12, humidity: 80, condition: "Cloudy" },
    "Tokyo": { temp: 22, humidity: 65, condition: "Sunny" },
    "Mumbai": { temp: 32, humidity: 85, condition: "Humid" },
    "Sydney": { temp: 25, humidity: 55, condition: "Clear" },
    "Paris": { temp: 15, humidity: 72, condition: "Rainy" }
  };
  
  let favorites = new Set();
  let cache = {};
  
  // API
  function getWeather(city) {
    if (cache[city]) return cache[city];
    let data = db[city];
    if (!data) return null;
    let result = { city, ...data };
    cache[city] = result;
    return result;
  }
  
  // Formatting
  function format(data) {
    const icons = { Sunny:"☀️", Cloudy:"☁️", Rainy:"🌧️", Clear:"🌙", Humid:"💧" };
    let icon = icons[data.condition] || "🌡️";
    return icon + " " + data.city + ": " + data.temp + "°C, " + data.condition;
  }
  
  // Public API
  return {
    search(city) {
      let data = getWeather(city);
      if (!data) return "City not found: " + city;
      return format(data);
    },
    addFavorite(city) { favorites.add(city); },
    getFavorites() {
      return [...favorites]
        .map(city => getWeather(city))
        .filter(Boolean)
        .map(format);
    }
  };
}

let app = WeatherApp();
console.log(app.search("Tokyo"));
app.addFavorite("London");
app.addFavorite("Tokyo");
console.log(app.getFavorites().join("\n"));</code></pre>`,
              challenge: {
                description: 'Build a mini WeatherApp with a database of 3 cities, a search(city) method that returns formatted weather, and a favorites system. Search "London" and print the formatted result: "☁️ London: 12°C".',
                starterCode: '// Build complete Weather App\n',
                expectedOutput: '☁️ London: 12°C',
                hints: [
                  'Combine database, formatting, and search into one module',
                  'Return icon + city + temp format',
                  'function WeatherApp() {\n  const db = {\n    "London": { temp: 12, condition: "Cloudy" },\n    "Tokyo": { temp: 22, condition: "Sunny" },\n    "Mumbai": { temp: 32, condition: "Humid" }\n  };\n  const icons = { Sunny: "☀️", Cloudy: "☁️", Humid: "💧" };\n\n  return {\n    search(city) {\n      let data = db[city];\n      if (!data) return "Not found";\n      let icon = icons[data.condition] || "🌡️";\n      return icon + " " + city + ": " + data.temp + "°C";\n    }\n  };\n}\n\nlet app = WeatherApp();\nconsole.log(app.search("London"));'
                ]
              },
              quiz: [
                {
                  question: 'What patterns does this Weather App use?',
                  options: ['Only loops', 'Factory function, closure, module pattern, composition', 'Only classes', 'Only callbacks'],
                  correct: 1
                },
                {
                  question: 'What is the benefit of the cache in this app?',
                  options: ['Makes it look complex', 'Avoids repeated lookup for same city', 'Required by JavaScript', 'Saves battery'],
                  correct: 1
                },
                {
                  question: 'What would be the next step to make this a real app?',
                  options: ['Nothing, it is complete', 'Connect to real weather API, add DOM rendering, localStorage persistence', 'Add more cities only', 'Make it faster'],
                  correct: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default javascriptCourse;
