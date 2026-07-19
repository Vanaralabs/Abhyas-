const course = {
  id: 'cpp',
  title: 'C++',
  icon: '⚙️',
  sections: [
    {
      id: 'cpp-fundamentals',
      title: 'Fundamentals',
      lessons: [
        {
          id: 'cpp-1-1',
          title: 'What is C++?',
          type: 'lesson',
          theory: `<h2>Welcome to C++! ⚙️</h2>
<p>C++ is a powerful, high-performance programming language created by Bjarne Stroustrup in 1979 as an extension of C. It supports multiple programming paradigms including procedural, object-oriented, and generic programming.</p>
<h3>Why Learn C++?</h3>
<ul>
<li><strong>Performance:</strong> Close-to-hardware speed, used in game engines, OS kernels, and embedded systems</li>
<li><strong>Control:</strong> Direct memory management with pointers</li>
<li><strong>Industry Standard:</strong> Used at Google, Microsoft, Epic Games, NASA</li>
<li><strong>Foundation:</strong> Understanding C++ makes learning other languages easier</li>
</ul>
<h3>How C++ Works</h3>
<p>C++ is a <strong>compiled language</strong>. Your source code (.cpp files) is transformed into machine code by a compiler (g++, clang++, MSVC):</p>
<pre><code>Source (.cpp) → Compiler → Object File (.o) → Linker → Executable</code></pre>
<h3>Your First Program Structure</h3>
<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Hello, World!" &lt;&lt; endl;
    return 0;
}</code></pre>
<p>Every C++ program starts execution from the <code>main()</code> function. The <code>#include</code> directive imports libraries, and <code>cout</code> is used for output.</p>`,
          challenge: {
            description: 'Write a C++ program that prints "Hello, C++!" to the console using cout.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print Hello, C++!\n    return 0;\n}',
            expectedOutput: 'Hello, C++!',
            hints: ['Use cout << "text" << endl;', 'endl adds a newline', 'Make sure to include iostream']
          },
          quiz: [{ question: 'Who created C++?', options: ['Dennis Ritchie', 'Bjarne Stroustrup', 'James Gosling', 'Guido van Rossum'], correct: 1 }]
        },
        {
          id: 'cpp-1-2',
          title: 'Compilation and Structure',
          type: 'lesson',
          theory: `<h2>Program Structure and Compilation</h2>
<p>Understanding how C++ programs are structured and compiled is essential for writing and debugging code effectively.</p>
<h3>Program Structure</h3>
<pre><code>#include &lt;iostream&gt;  // Preprocessor directive
using namespace std;  // Namespace declaration

int main() {         // Main function — entry point
    // Your code here
    return 0;        // Return success code
}</code></pre>
<h3>Key Components</h3>
<ul>
<li><strong>#include:</strong> Preprocessor directive that includes header files</li>
<li><strong>using namespace std:</strong> Allows using cout, cin without std:: prefix</li>
<li><strong>int main():</strong> Program entry point, returns int (0 = success)</li>
<li><strong>Statements:</strong> End with semicolons (;)</li>
<li><strong>Blocks:</strong> Enclosed in curly braces { }</li>
</ul>
<h3>Compilation Steps</h3>
<pre><code>g++ -o program main.cpp    // Compile
./program                   // Run (Linux/Mac)
program.exe                 // Run (Windows)</code></pre>
<h3>Comments</h3>
<pre><code>// Single line comment
/* Multi-line
   comment */</code></pre>
<p>C++ is case-sensitive: <code>Main</code> is not the same as <code>main</code>. Forgetting semicolons is the most common beginner mistake!</p>`,
          challenge: {
            description: 'Write a program with comments explaining each part. Print your name and your favorite language on separate lines.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print name and language\n    return 0;\n}',
            expectedOutput: 'Name: Alex\nLanguage: C++',
            hints: ['Use cout << "text" << endl for each line', 'Each statement ends with ;', 'endl creates a new line']
          },
          quiz: [{ question: 'What does #include do?', options: ['Defines a variable', 'Includes a header file', 'Creates a function', 'Starts the program'], correct: 1 }]
        },
        {
          id: 'cpp-1-3',
          title: 'Output with cout',
          type: 'lesson',
          theory: `<h2>Output with cout</h2>
<p><code>cout</code> (character output) is the standard way to display text and values in C++. It uses the insertion operator <code>&lt;&lt;</code> to send data to the console.</p>
<h3>Basic Output</h3>
<pre><code>cout &lt;&lt; "Hello World" &lt;&lt; endl;
cout &lt;&lt; "Number: " &lt;&lt; 42 &lt;&lt; endl;
cout &lt;&lt; "Pi: " &lt;&lt; 3.14 &lt;&lt; endl;</code></pre>
<h3>Chaining Output</h3>
<p>You can chain multiple values with &lt;&lt;:</p>
<pre><code>cout &lt;&lt; "I am " &lt;&lt; 25 &lt;&lt; " years old" &lt;&lt; endl;</code></pre>
<h3>Newlines</h3>
<pre><code>cout &lt;&lt; "Line 1" &lt;&lt; endl;    // endl flushes buffer
cout &lt;&lt; "Line 2\n";          // \n is faster (no flush)
cout &lt;&lt; "Line 3" &lt;&lt; "\n";</code></pre>
<h3>Formatting</h3>
<pre><code>cout &lt;&lt; "Tab:\tindented" &lt;&lt; endl;
cout &lt;&lt; "Quote: \"hello\"" &lt;&lt; endl;
cout &lt;&lt; "Backslash: \\" &lt;&lt; endl;</code></pre>
<h3>Multiple Statements</h3>
<pre><code>cout &lt;&lt; "First ";
cout &lt;&lt; "Second ";
cout &lt;&lt; "Third" &lt;&lt; endl;
// Output: First Second Third</code></pre>
<p>The <code>&lt;&lt;</code> operator is overloaded to handle strings, numbers, and other types automatically.</p>`,
          challenge: {
            description: 'Print a formatted receipt: store name, item with price, and a total line. Use proper formatting with endl.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print receipt\n    return 0;\n}',
            expectedOutput: '=== Quick Mart ===\nItem: Coffee - $4.99\nTotal: $4.99',
            hints: ['Chain strings and numbers with <<', 'Use endl for each line', 'You can output special characters like ===']
          },
          quiz: [{ question: 'What operator is used with cout?', options: ['>>', '<<', '->', '::'], correct: 1 }]
        },
        {
          id: 'cpp-1-4',
          title: 'Variables and int',
          type: 'lesson',
          theory: `<h2>Variables and Integer Types</h2>
<p>Variables store data in memory. In C++, you must declare a variable's type before using it — the compiler needs to know how much memory to allocate.</p>
<h3>Variable Declaration</h3>
<pre><code>int age = 25;           // Integer
int count;              // Declared (uninitialized)
count = 10;             // Assigned later</code></pre>
<h3>Integer Types</h3>
<ul>
<li><strong>int:</strong> Standard integer (typically 4 bytes, ±2 billion)</li>
<li><strong>short:</strong> Smaller range (2 bytes)</li>
<li><strong>long:</strong> Larger range (4-8 bytes)</li>
<li><strong>long long:</strong> Very large (8 bytes)</li>
<li><strong>unsigned int:</strong> Non-negative only (0 to 4 billion)</li>
</ul>
<h3>Integer Operations</h3>
<pre><code>int a = 10, b = 3;
cout &lt;&lt; a + b &lt;&lt; endl;  // 13
cout &lt;&lt; a - b &lt;&lt; endl;  // 7
cout &lt;&lt; a * b &lt;&lt; endl;  // 30
cout &lt;&lt; a / b &lt;&lt; endl;  // 3 (integer division!)
cout &lt;&lt; a % b &lt;&lt; endl;  // 1 (remainder)</code></pre>
<h3>Important: Integer Division</h3>
<p>When dividing two integers, C++ truncates the decimal: <code>7 / 2 = 3</code>, not 3.5. This is a common source of bugs for beginners.</p>`,
          challenge: {
            description: 'Declare two int variables: apples = 12, people = 5. Calculate and print how many each person gets and how many are left over.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Division and modulus\n    return 0;\n}',
            expectedOutput: 'Each person gets: 2\nLeftover: 2',
            hints: ['Use / for integer division', 'Use % for remainder (modulus)', 'cout << "text" << variable << endl']
          },
          quiz: [{ question: 'What is 7 / 2 in C++ integer arithmetic?', options: ['3.5', '3', '4', '3.0'], correct: 1 }]
        },
        {
          id: 'cpp-1-5',
          title: 'Floating Point Types',
          type: 'lesson',
          theory: `<h2>Floating Point Types</h2>
<p>For decimal numbers, C++ provides floating-point types that store values with fractional parts.</p>
<h3>Float Types</h3>
<ul>
<li><strong>float:</strong> Single precision (4 bytes, ~7 significant digits)</li>
<li><strong>double:</strong> Double precision (8 bytes, ~15 significant digits) — preferred</li>
<li><strong>long double:</strong> Extended precision (12-16 bytes)</li>
</ul>
<h3>Declaration and Usage</h3>
<pre><code>double pi = 3.14159;
float temperature = 98.6f;  // f suffix for float literals
double price = 19.99;

cout &lt;&lt; pi &lt;&lt; endl;         // 3.14159
cout &lt;&lt; price * 2 &lt;&lt; endl;  // 39.98</code></pre>
<h3>Mixed Arithmetic</h3>
<pre><code>int a = 7;
double b = 2.0;
cout &lt;&lt; a / b &lt;&lt; endl;  // 3.5 (promoted to double)
cout &lt;&lt; a / 2 &lt;&lt; endl;  // 3 (both int = integer division!)
cout &lt;&lt; a / 2.0 &lt;&lt; endl; // 3.5 (one is double)</code></pre>
<h3>Precision Issues</h3>
<pre><code>double result = 0.1 + 0.2;
cout &lt;&lt; result &lt;&lt; endl;  // May show 0.3 or 0.300000000000004</code></pre>
<p>Always use <code>double</code> unless you have a specific reason for float. The precision difference rarely matters but double is the default for modern C++.</p>`,
          challenge: {
            description: 'Calculate the area of a circle with radius 5.0. Use double for PI = 3.14159. Print the result.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Circle area = PI * r * r\n    return 0;\n}',
            expectedOutput: 'Area: 78.5397',
            hints: ['double pi = 3.14159', 'double radius = 5.0', 'Area = pi * radius * radius']
          },
          quiz: [{ question: 'Which floating point type is preferred in C++?', options: ['float', 'double', 'long double', 'decimal'], correct: 1 }]
        },
        {
          id: 'cpp-1-6',
          title: 'char and bool',
          type: 'lesson',
          theory: `<h2>Character and Boolean Types</h2>
<p>C++ provides specialized types for single characters and true/false values.</p>
<h3>char Type</h3>
<p>Stores a single character using single quotes:</p>
<pre><code>char grade = 'A';
char newline = '\n';
char digit = '7';
cout &lt;&lt; grade &lt;&lt; endl;  // A</code></pre>
<h3>char as Numbers</h3>
<p>Characters are stored as ASCII numbers internally:</p>
<pre><code>char letter = 'A';
cout &lt;&lt; (int)letter &lt;&lt; endl;  // 65
char next = letter + 1;
cout &lt;&lt; next &lt;&lt; endl;         // B</code></pre>
<h3>bool Type</h3>
<pre><code>bool isRaining = true;
bool hasPermission = false;
bool isAdult = (age >= 18);

cout &lt;&lt; isRaining &lt;&lt; endl;    // 1 (true)
cout &lt;&lt; hasPermission &lt;&lt; endl; // 0 (false)</code></pre>
<h3>bool in Conditions</h3>
<pre><code>bool loggedIn = true;
if (loggedIn) {
    cout &lt;&lt; "Welcome!" &lt;&lt; endl;
}</code></pre>
<h3>Type Sizes</h3>
<pre><code>cout &lt;&lt; sizeof(char) &lt;&lt; endl;   // 1 byte
cout &lt;&lt; sizeof(bool) &lt;&lt; endl;   // 1 byte
cout &lt;&lt; sizeof(int) &lt;&lt; endl;    // 4 bytes
cout &lt;&lt; sizeof(double) &lt;&lt; endl; // 8 bytes</code></pre>`,
          challenge: {
            description: 'Declare a char variable initial = first letter of your name, and bool isStudent = true. Print both. Also print the ASCII value of the char.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // char and bool variables\n    return 0;\n}',
            expectedOutput: 'Initial: A\nASCII: 65\nStudent: 1',
            hints: ['char initial = single character in quotes', 'Cast to int for ASCII: (int)initial', 'bool prints as 1 or 0']
          },
          quiz: [{ question: 'How does C++ print a bool value?', options: ['true/false', '1/0', 'yes/no', 'T/F'], correct: 1 }]
        },
        {
          id: 'cpp-1-7',
          title: 'String Type',
          type: 'lesson',
          theory: `<h2>The string Type</h2>
<p>C++ provides the <code>string</code> class for text handling. It is much easier to use than C-style character arrays and manages memory automatically.</p>
<h3>Declaring Strings</h3>
<pre><code>#include &lt;string&gt;  // Required header
string name = "Alice";
string greeting = "Hello, " + name;
cout &lt;&lt; greeting &lt;&lt; endl;  // Hello, Alice</code></pre>
<h3>String Operations</h3>
<pre><code>string s = "Hello World";
cout &lt;&lt; s.length() &lt;&lt; endl;    // 11
cout &lt;&lt; s[0] &lt;&lt; endl;          // H
cout &lt;&lt; s.substr(0, 5) &lt;&lt; endl; // Hello</code></pre>
<h3>Concatenation</h3>
<pre><code>string first = "John";
string last = "Doe";
string full = first + " " + last;  // "John Doe"</code></pre>
<h3>Useful Methods</h3>
<pre><code>string text = "Hello World";
cout &lt;&lt; text.find("World") &lt;&lt; endl;  // 6
cout &lt;&lt; text.empty() &lt;&lt; endl;        // 0 (false)
text.append("!");                     // "Hello World!"
text.erase(5, 6);                    // "Hello"</code></pre>
<h3>Comparing Strings</h3>
<pre><code>string a = "apple";
string b = "banana";
if (a == b) cout &lt;&lt; "Same" &lt;&lt; endl;
if (a &lt; b) cout &lt;&lt; "a comes first" &lt;&lt; endl;</code></pre>`,
          challenge: {
            description: 'Create string firstName = "John" and lastName = "Doe". Concatenate them with a space, print the full name and its length.',
            starterCode: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // String concatenation\n    return 0;\n}',
            expectedOutput: 'Full name: John Doe\nLength: 8',
            hints: ['Use + to concatenate strings', 'Add " " between names', '.length() or .size() for length']
          },
          quiz: [{ question: 'Which header is needed for string?', options: ['<stdio.h>', '<string>', '<cstring>', '<text>'], correct: 1 }]
        },
        {
          id: 'cpp-1-8',
          title: 'Constants',
          type: 'lesson',
          theory: `<h2>Constants in C++</h2>
<p>Constants are values that cannot be changed after initialization. They make code safer and more readable by preventing accidental modifications.</p>
<h3>const Keyword</h3>
<pre><code>const double PI = 3.14159;
const int MAX_SIZE = 100;
const string APP_NAME = "MyApp";

// PI = 3.14; // Error! Cannot modify const</code></pre>
<h3>constexpr (Compile-time Constants)</h3>
<pre><code>constexpr int SQUARE(int x) { return x * x; }
constexpr int SIZE = SQUARE(5); // Computed at compile time = 25</code></pre>
<h3>#define (Preprocessor Constants)</h3>
<pre><code>#define MAX_PLAYERS 4
#define VERSION "1.0.0"
// Old style — prefer const/constexpr in modern C++</code></pre>
<h3>Why Use Constants?</h3>
<ul>
<li><strong>Safety:</strong> Prevents accidental changes to important values</li>
<li><strong>Readability:</strong> Named constants are clearer than magic numbers</li>
<li><strong>Maintainability:</strong> Change value in one place</li>
<li><strong>Optimization:</strong> Compiler can optimize const values</li>
</ul>
<h3>Convention</h3>
<p>Constants are typically named in UPPER_CASE or PascalCase to distinguish them from regular variables.</p>`,
          challenge: {
            description: 'Define constants for gravity (9.81) and an object mass (5.0). Calculate and print the weight (force = mass * gravity).',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Constants and calculation\n    return 0;\n}',
            expectedOutput: 'Weight: 49.05 N',
            hints: ['const double GRAVITY = 9.81', 'Force = mass * gravity', 'cout with proper formatting']
          },
          quiz: [{ question: 'What happens if you try to modify a const variable?', options: ['It changes silently', 'Runtime error', 'Compile-time error', 'It becomes 0'], correct: 2 }]
        },
        {
          id: 'cpp-1-9',
          title: 'Input with cin',
          type: 'lesson',
          theory: `<h2>Input with cin</h2>
<p><code>cin</code> (character input) reads data from the keyboard using the extraction operator <code>&gt;&gt;</code>. It automatically converts input to the variable's type.</p>
<h3>Basic Input</h3>
<pre><code>int age;
cout &lt;&lt; "Enter age: ";
cin &gt;&gt; age;
cout &lt;&lt; "You are " &lt;&lt; age &lt;&lt; endl;</code></pre>
<h3>Multiple Inputs</h3>
<pre><code>int x, y;
cin &gt;&gt; x &gt;&gt; y;  // Reads two numbers separated by space/enter</code></pre>
<h3>String Input</h3>
<pre><code>string name;
cin &gt;&gt; name;  // Reads ONE word only (stops at space)

// For full line with spaces:
string fullName;
getline(cin, fullName);  // Reads entire line</code></pre>
<h3>Type Safety</h3>
<pre><code>int num;
cin &gt;&gt; num;  // If user types "hello", cin fails
if (cin.fail()) {
    cout &lt;&lt; "Invalid input!" &lt;&lt; endl;
}</code></pre>
<h3>Input-Output Flow</h3>
<pre><code>double price;
int quantity;
cout &lt;&lt; "Price: "; cin &gt;&gt; price;
cout &lt;&lt; "Qty: ";   cin &gt;&gt; quantity;
cout &lt;&lt; "Total: $" &lt;&lt; price * quantity &lt;&lt; endl;</code></pre>`,
          challenge: {
            description: 'Write a program that takes two numbers as input and prints their sum, difference, and product. (For testing, simulate with values 10 and 3.)',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 3; // Simulated input\n    // Calculate and print\n    return 0;\n}',
            expectedOutput: 'Sum: 13\nDifference: 7\nProduct: 30',
            hints: ['a + b for sum', 'a - b for difference', 'a * b for product']
          },
          quiz: [{ question: 'What operator is used with cin?', options: ['<<', '>>', '->', '::'], correct: 1 }]
        },
        {
          id: 'cpp-1-10',
          title: 'getline and String Input',
          type: 'lesson',
          theory: `<h2>getline and Advanced Input</h2>
<p>While <code>cin &gt;&gt;</code> reads one word, <code>getline()</code> reads an entire line including spaces. This is essential for names, sentences, and any multi-word input.</p>
<h3>getline Syntax</h3>
<pre><code>string fullName;
cout &lt;&lt; "Enter name: ";
getline(cin, fullName);
cout &lt;&lt; "Hello, " &lt;&lt; fullName &lt;&lt; endl;</code></pre>
<h3>cin >> vs getline Problem</h3>
<pre><code>int age;
string name;
cout &lt;&lt; "Age: "; cin &gt;&gt; age;
cin.ignore();  // IMPORTANT: clear the newline left by cin
cout &lt;&lt; "Name: "; getline(cin, name);</code></pre>
<h3>Why cin.ignore()?</h3>
<p>After <code>cin &gt;&gt;</code>, a newline character remains in the buffer. Without <code>cin.ignore()</code>, the next <code>getline()</code> reads that empty newline instead of waiting for input.</p>
<h3>Reading Until Delimiter</h3>
<pre><code>string data;
getline(cin, data, ';');  // Reads until semicolon</code></pre>
<h3>Converting String to Number</h3>
<pre><code>string input = "42";
int num = stoi(input);      // string to int
double d = stod("3.14");    // string to double</code></pre>`,
          challenge: {
            description: 'Create a greeting program: store a full name "John Smith" and age 30 (simulated). Print a formatted greeting with both.',
            starterCode: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name = "John Smith";\n    int age = 30;\n    // Print greeting\n    return 0;\n}',
            expectedOutput: 'Hello, John Smith! You are 30 years old.',
            hints: ['Concatenate with << operator', 'Include all parts in one cout statement', 'endl at the end']
          },
          quiz: [{ question: 'What does getline do that cin >> does not?', options: ['Reads numbers', 'Reads entire line including spaces', 'Reads from files', 'Validates input'], correct: 1 }]
        },
        {
          id: 'cpp-1-11',
          title: 'Formatted Output',
          type: 'lesson',
          theory: `<h2>Formatted Output</h2>
<p>C++ provides tools in <code>&lt;iomanip&gt;</code> for controlling how numbers and text are displayed — precision, width, alignment, and fill characters.</p>
<h3>Fixed Precision</h3>
<pre><code>#include &lt;iomanip&gt;
double pi = 3.14159265;
cout &lt;&lt; fixed &lt;&lt; setprecision(2) &lt;&lt; pi &lt;&lt; endl; // 3.14
cout &lt;&lt; fixed &lt;&lt; setprecision(4) &lt;&lt; pi &lt;&lt; endl; // 3.1416</code></pre>
<h3>Field Width</h3>
<pre><code>cout &lt;&lt; setw(10) &lt;&lt; "Hello" &lt;&lt; endl;  //      Hello
cout &lt;&lt; setw(10) &lt;&lt; 42 &lt;&lt; endl;       //         42</code></pre>
<h3>Alignment</h3>
<pre><code>cout &lt;&lt; left &lt;&lt; setw(10) &lt;&lt; "Left" &lt;&lt; "|" &lt;&lt; endl;   // Left      |
cout &lt;&lt; right &lt;&lt; setw(10) &lt;&lt; "Right" &lt;&lt; "|" &lt;&lt; endl;  //      Right|</code></pre>
<h3>Fill Characters</h3>
<pre><code>cout &lt;&lt; setfill('*') &lt;&lt; setw(10) &lt;&lt; 42 &lt;&lt; endl; // ********42
cout &lt;&lt; setfill('-') &lt;&lt; setw(20) &lt;&lt; "" &lt;&lt; endl;  // --------------------</code></pre>
<h3>Boolean Output</h3>
<pre><code>cout &lt;&lt; boolalpha &lt;&lt; true &lt;&lt; endl;  // true (not 1)
cout &lt;&lt; boolalpha &lt;&lt; false &lt;&lt; endl; // false (not 0)</code></pre>`,
          challenge: {
            description: 'Print a price table: "Coffee" at $3.50 and "Sandwich" at $8.99, with items left-aligned (15 chars) and prices right-aligned with 2 decimal places.',
            starterCode: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    // Formatted price table\n    return 0;\n}',
            expectedOutput: 'Coffee         $3.50\nSandwich       $8.99',
            hints: ['Use left << setw(15) for item names', 'Use fixed << setprecision(2) for prices', 'Combine alignment manipulators']
          },
          quiz: [{ question: 'Which header provides setprecision?', options: ['<iostream>', '<iomanip>', '<cmath>', '<string>'], correct: 1 }]
        },
        {
          id: 'cpp-1-12',
          title: 'Arithmetic Operators',
          type: 'lesson',
          theory: `<h2>Arithmetic Operators</h2>
<p>C++ provides standard arithmetic operators for mathematical calculations, with some important nuances about integer vs floating-point behavior.</p>
<h3>Basic Operators</h3>
<pre><code>int a = 10, b = 3;
cout &lt;&lt; a + b &lt;&lt; endl;  // 13 (addition)
cout &lt;&lt; a - b &lt;&lt; endl;  // 7  (subtraction)
cout &lt;&lt; a * b &lt;&lt; endl;  // 30 (multiplication)
cout &lt;&lt; a / b &lt;&lt; endl;  // 3  (integer division)
cout &lt;&lt; a % b &lt;&lt; endl;  // 1  (modulus/remainder)</code></pre>
<h3>Increment/Decrement</h3>
<pre><code>int x = 5;
x++;    // x is now 6 (post-increment)
++x;    // x is now 7 (pre-increment)
x--;    // x is now 6 (post-decrement)
--x;    // x is now 5 (pre-decrement)</code></pre>
<h3>Compound Assignment</h3>
<pre><code>int val = 10;
val += 5;   // val = 15
val -= 3;   // val = 12
val *= 2;   // val = 24
val /= 4;   // val = 6
val %= 4;   // val = 2</code></pre>
<h3>Operator Precedence</h3>
<p>Like math: * / % before + -. Use parentheses to clarify:</p>
<pre><code>int result = 2 + 3 * 4;    // 14 (not 20)
int clear = (2 + 3) * 4;   // 20</code></pre>`,
          challenge: {
            description: 'Given total_seconds = 3661, convert to hours, minutes, seconds and print formatted result.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int total_seconds = 3661;\n    // Convert and print\n    return 0;\n}',
            expectedOutput: '1 hours, 1 minutes, 1 seconds',
            hints: ['hours = total / 3600', 'remaining = total % 3600', 'minutes = remaining / 60, seconds = remaining % 60']
          },
          quiz: [{ question: 'What does ++ do?', options: ['Adds 2', 'Increments by 1', 'Doubles the value', 'Squares the value'], correct: 1 }]
        },
        {
          id: 'cpp-1-13',
          title: 'Comparison Operators',
          type: 'lesson',
          theory: `<h2>Comparison and Logical Operators</h2>
<p>Comparison operators return boolean values (true/false) and are essential for conditions and decision-making in programs.</p>
<h3>Comparison Operators</h3>
<pre><code>int a = 10, b = 20;
cout &lt;&lt; (a == b) &lt;&lt; endl;  // 0 (false) — equal to
cout &lt;&lt; (a != b) &lt;&lt; endl;  // 1 (true)  — not equal
cout &lt;&lt; (a &lt; b) &lt;&lt; endl;   // 1 (true)  — less than
cout &lt;&lt; (a &gt; b) &lt;&lt; endl;   // 0 (false) — greater than
cout &lt;&lt; (a &lt;= b) &lt;&lt; endl;  // 1 (true)  — less or equal
cout &lt;&lt; (a &gt;= b) &lt;&lt; endl;  // 0 (false) — greater or equal</code></pre>
<h3>Logical Operators</h3>
<pre><code>bool x = true, y = false;
cout &lt;&lt; (x && y) &lt;&lt; endl;  // 0 — AND (both must be true)
cout &lt;&lt; (x || y) &lt;&lt; endl;  // 1 — OR (at least one true)
cout &lt;&lt; (!x) &lt;&lt; endl;      // 0 — NOT (inverts)</code></pre>
<h3>Combining Conditions</h3>
<pre><code>int age = 25;
bool hasID = true;
if (age >= 18 && hasID) {
    cout &lt;&lt; "Access granted" &lt;&lt; endl;
}</code></pre>
<h3>Short-Circuit Evaluation</h3>
<p>C++ stops evaluating as soon as the result is determined: in AND, if first is false, second is skipped. In OR, if first is true, second is skipped.</p>`,
          challenge: {
            description: 'Given age = 20, hasLicense = true, check if person can drive (age >= 16 AND hasLicense). Also check if they can vote (age >= 18). Print results.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 20;\n    bool hasLicense = true;\n    // Check conditions\n    return 0;\n}',
            expectedOutput: 'Can drive: 1\nCan vote: 1',
            hints: ['Use && for AND condition', 'Use >= for comparison', 'Print boolean result directly']
          },
          quiz: [{ question: 'What does && mean?', options: ['OR', 'AND', 'NOT', 'XOR'], correct: 1 }]
        },
        {
          id: 'cpp-1-14',
          title: 'Type Casting',
          type: 'lesson',
          theory: `<h2>Type Casting</h2>
<p>Type casting converts a value from one type to another. This is essential when mixing types in expressions or when you need specific behavior like floating-point division.</p>
<h3>Implicit Casting (Automatic)</h3>
<pre><code>int a = 5;
double b = a;  // int → double automatically (5.0)
double c = 7 / 2;    // Still 3.0! (int/int first, then cast)
double d = 7.0 / 2;  // 3.5 (double/int = double)</code></pre>
<h3>Explicit Casting</h3>
<pre><code>// C-style cast
int x = (int)3.99;    // 3 (truncates)
double y = (double)7 / 2;  // 3.5

// C++ style (preferred)
int a = static_cast&lt;int&gt;(3.99);     // 3
double b = static_cast&lt;double&gt;(7) / 2; // 3.5</code></pre>
<h3>Common Use Cases</h3>
<pre><code>// Integer division fix
int total = 17, count = 5;
double average = static_cast&lt;double&gt;(total) / count; // 3.4

// char to int (ASCII value)
char letter = 'A';
int ascii = static_cast&lt;int&gt;(letter); // 65</code></pre>
<h3>Narrowing (Lossy) Conversions</h3>
<pre><code>double pi = 3.14159;
int truncated = static_cast&lt;int&gt;(pi); // 3 — decimal lost!</code></pre>`,
          challenge: {
            description: 'Calculate the average of three integers: 10, 20, 33. Use casting to get a decimal result. Print with 2 decimal places.',
            starterCode: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20, c = 33;\n    // Calculate average with casting\n    return 0;\n}',
            expectedOutput: 'Average: 21.00',
            hints: ['Cast sum to double before dividing', 'static_cast<double>(a+b+c) / 3', 'Use fixed << setprecision(2)']
          },
          quiz: [{ question: 'What does static_cast<double>(5) / 2 produce?', options: ['2', '2.5', '2.0', '3'], correct: 1 }]
        },
        {
          id: 'cpp-1-15',
          title: 'Bitwise Operators',
          type: 'lesson',
          theory: `<h2>Bitwise Operators</h2>
<p>Bitwise operators work on individual bits of integer values. They are used in low-level programming, flags, permissions, and optimization.</p>
<h3>Bitwise Operators</h3>
<pre><code>int a = 5;  // Binary: 0101
int b = 3;  // Binary: 0011

cout &lt;&lt; (a & b) &lt;&lt; endl;   // 1  (AND: 0001)
cout &lt;&lt; (a | b) &lt;&lt; endl;   // 7  (OR:  0111)
cout &lt;&lt; (a ^ b) &lt;&lt; endl;   // 6  (XOR: 0110)
cout &lt;&lt; (~a) &lt;&lt; endl;      // -6 (NOT: inverts all bits)
cout &lt;&lt; (a &lt;&lt; 1) &lt;&lt; endl;  // 10 (left shift: multiply by 2)
cout &lt;&lt; (a &gt;&gt; 1) &lt;&lt; endl;  // 2  (right shift: divide by 2)</code></pre>
<h3>Practical Uses</h3>
<pre><code>// Check if number is even/odd
if (num & 1) cout &lt;&lt; "Odd";
else cout &lt;&lt; "Even";

// Multiply/divide by powers of 2
int doubled = x &lt;&lt; 1;  // x * 2
int halved = x &gt;&gt; 1;   // x / 2

// Permission flags
int READ = 4, WRITE = 2, EXEC = 1;
int perms = READ | WRITE;  // 6 (read + write)</code></pre>
<h3>Bit Manipulation Tricks</h3>
<pre><code>// Swap without temp variable
a = a ^ b; b = a ^ b; a = a ^ b;</code></pre>`,
          challenge: {
            description: 'Given number 12, use bitwise operators to: check if even, double it with left shift, halve it with right shift. Print results.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 12;\n    // Bitwise operations\n    return 0;\n}',
            expectedOutput: 'Even: 1\nDoubled: 24\nHalved: 6',
            hints: ['Even check: !(num & 1) or (num & 1) == 0', 'Left shift << 1 doubles', 'Right shift >> 1 halves']
          },
          quiz: [{ question: 'What does << 1 do to a number?', options: ['Adds 1', 'Multiplies by 2', 'Divides by 2', 'Squares it'], correct: 1 }]
        },
        {
          id: 'cpp-1-16',
          title: 'If-Else Statements',
          type: 'lesson',
          theory: `<h2>If-Else Statements</h2>
<p>Conditional statements let your program make decisions. The if-else construct executes different code blocks based on whether a condition is true or false.</p>
<h3>Basic if</h3>
<pre><code>int temperature = 35;
if (temperature > 30) {
    cout &lt;&lt; "It's hot!" &lt;&lt; endl;
}</code></pre>
<h3>if-else</h3>
<pre><code>int age = 16;
if (age >= 18) {
    cout &lt;&lt; "Adult" &lt;&lt; endl;
} else {
    cout &lt;&lt; "Minor" &lt;&lt; endl;
}</code></pre>
<h3>if-else if-else Chain</h3>
<pre><code>int score = 75;
if (score >= 90) cout &lt;&lt; "A" &lt;&lt; endl;
else if (score >= 80) cout &lt;&lt; "B" &lt;&lt; endl;
else if (score >= 70) cout &lt;&lt; "C" &lt;&lt; endl;
else if (score >= 60) cout &lt;&lt; "D" &lt;&lt; endl;
else cout &lt;&lt; "F" &lt;&lt; endl;</code></pre>
<h3>Nested if</h3>
<pre><code>if (age >= 18) {
    if (hasLicense) {
        cout &lt;&lt; "Can drive" &lt;&lt; endl;
    }
}</code></pre>
<h3>Ternary Operator</h3>
<pre><code>int x = 10;
string result = (x > 5) ? "big" : "small";
cout &lt;&lt; result &lt;&lt; endl;  // "big"</code></pre>`,
          challenge: {
            description: 'Write a grade calculator: score = 85. Print the letter grade (A: 90+, B: 80+, C: 70+, D: 60+, F: below 60).',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 85;\n    // Grade calculation\n    return 0;\n}',
            expectedOutput: 'Grade: B',
            hints: ['Use if-else if-else chain', 'Check highest first (>= 90)', 'Only one branch executes']
          },
          quiz: [{ question: 'What is the ternary operator syntax?', options: ['if ? then : else', 'condition ? true_val : false_val', 'test -> result', 'check : val1 | val2'], correct: 1 }]
        },
        {
          id: 'cpp-1-17',
          title: 'Switch Statement',
          type: 'lesson',
          theory: `<h2>Switch Statement</h2>
<p>The switch statement provides a clean alternative to long if-else chains when comparing a variable against multiple specific values.</p>
<h3>Basic Switch</h3>
<pre><code>int day = 3;
switch (day) {
    case 1: cout &lt;&lt; "Monday" &lt;&lt; endl; break;
    case 2: cout &lt;&lt; "Tuesday" &lt;&lt; endl; break;
    case 3: cout &lt;&lt; "Wednesday" &lt;&lt; endl; break;
    case 4: cout &lt;&lt; "Thursday" &lt;&lt; endl; break;
    case 5: cout &lt;&lt; "Friday" &lt;&lt; endl; break;
    default: cout &lt;&lt; "Weekend" &lt;&lt; endl; break;
}</code></pre>
<h3>Important: break</h3>
<p>Without <code>break</code>, execution falls through to the next case! This is sometimes intentional:</p>
<pre><code>switch (grade) {
    case 'A':
    case 'B': cout &lt;&lt; "Good" &lt;&lt; endl; break;  // A or B
    case 'C': cout &lt;&lt; "Average" &lt;&lt; endl; break;
    default:  cout &lt;&lt; "Needs work" &lt;&lt; endl;
}</code></pre>
<h3>Switch vs If-Else</h3>
<ul>
<li>Switch: Best for comparing one variable against specific values</li>
<li>If-else: Better for ranges, complex conditions, different variables</li>
</ul>
<h3>Limitations</h3>
<p>Switch only works with integral types (int, char, enum). Cannot use strings, floats, or ranges in case labels.</p>`,
          challenge: {
            description: 'Write a switch for month number (7). Print the month name and number of days.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int month = 7;\n    // Switch for month\n    return 0;\n}',
            expectedOutput: 'July has 31 days',
            hints: ['switch(month) with cases 1-12', 'Dont forget break statements', 'Use default for invalid months']
          },
          quiz: [{ question: 'What happens without break in a switch case?', options: ['Compilation error', 'Falls through to next case', 'Program crashes', 'Returns to start'], correct: 1 }]
        },
        {
          id: 'cpp-1-18',
          title: 'While Loop',
          type: 'lesson',
          theory: `<h2>While Loop</h2>
<p>The while loop repeats a block of code as long as a condition remains true. It checks the condition before each iteration.</p>
<h3>Basic While</h3>
<pre><code>int count = 1;
while (count &lt;= 5) {
    cout &lt;&lt; count &lt;&lt; " ";
    count++;
}
// Output: 1 2 3 4 5</code></pre>
<h3>Countdown</h3>
<pre><code>int n = 10;
while (n > 0) {
    cout &lt;&lt; n &lt;&lt; " ";
    n--;
}
cout &lt;&lt; "Liftoff!" &lt;&lt; endl;</code></pre>
<h3>Accumulator Pattern</h3>
<pre><code>int sum = 0, i = 1;
while (i &lt;= 100) {
    sum += i;
    i++;
}
cout &lt;&lt; "Sum 1-100: " &lt;&lt; sum &lt;&lt; endl; // 5050</code></pre>
<h3>do-while Loop</h3>
<p>Executes at least once, checks condition after:</p>
<pre><code>int input;
do {
    cout &lt;&lt; "Enter positive number: ";
    input = 5; // simulated
} while (input &lt;= 0);</code></pre>
<h3>Infinite Loop</h3>
<pre><code>while (true) {
    // Runs forever until break
    if (condition) break;
}</code></pre>`,
          challenge: {
            description: 'Use a while loop to calculate the sum of numbers from 1 to 10. Print the result.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Sum 1 to 10 with while\n    return 0;\n}',
            expectedOutput: 'Sum: 55',
            hints: ['Initialize sum = 0 and i = 1', 'Loop while i <= 10', 'Add i to sum, then increment i']
          },
          quiz: [{ question: 'When does a while loop check its condition?', options: ['After each iteration', 'Before each iteration', 'Only once', 'At the middle'], correct: 1 }]
        },
        {
          id: 'cpp-1-19',
          title: 'For Loop',
          type: 'lesson',
          theory: `<h2>For Loop</h2>
<p>The for loop is the most common loop in C++. It combines initialization, condition, and increment in one compact line.</p>
<h3>Syntax</h3>
<pre><code>for (initialization; condition; increment) {
    // body
}

for (int i = 0; i &lt; 5; i++) {
    cout &lt;&lt; i &lt;&lt; " ";  // 0 1 2 3 4
}</code></pre>
<h3>Counting Patterns</h3>
<pre><code>// Count up
for (int i = 1; i &lt;= 10; i++) { ... }

// Count down
for (int i = 10; i >= 1; i--) { ... }

// Step by 2
for (int i = 0; i &lt;= 20; i += 2) { ... }

// Step by 5
for (int i = 0; i &lt;= 100; i += 5) { ... }</code></pre>
<h3>Nested Loops</h3>
<pre><code>for (int row = 1; row &lt;= 3; row++) {
    for (int col = 1; col &lt;= 4; col++) {
        cout &lt;&lt; "* ";
    }
    cout &lt;&lt; endl;
}
// * * * *
// * * * *
// * * * *</code></pre>
<h3>break and continue</h3>
<pre><code>for (int i = 1; i &lt;= 10; i++) {
    if (i == 5) continue;  // Skip 5
    if (i == 8) break;     // Stop at 8
    cout &lt;&lt; i &lt;&lt; " ";     // 1 2 3 4 6 7
}</code></pre>`,
          challenge: {
            description: 'Print the first 5 multiples of 7 using a for loop (7, 14, 21, 28, 35).',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Multiples of 7\n    return 0;\n}',
            expectedOutput: '7 14 21 28 35',
            hints: ['for (int i = 1; i <= 5; i++)', 'Print i * 7 each iteration', 'Use space separator']
          },
          quiz: [{ question: 'What are the three parts of a for loop header?', options: ['start, end, step', 'init, condition, increment', 'begin, while, next', 'from, to, by'], correct: 1 }]
        },
        {
          id: 'cpp-1-20',
          title: 'Loop Control',
          type: 'lesson',
          theory: `<h2>Loop Control: break, continue, nested</h2>
<p>Loop control statements alter the normal flow of loops, giving you fine-grained control over iteration.</p>
<h3>break — Exit Loop Early</h3>
<pre><code>for (int i = 1; i &lt;= 100; i++) {
    if (i * i > 50) {
        cout &lt;&lt; "First square > 50: " &lt;&lt; i*i &lt;&lt; endl;
        break;  // Exit immediately
    }
}</code></pre>
<h3>continue — Skip Current Iteration</h3>
<pre><code>for (int i = 1; i &lt;= 10; i++) {
    if (i % 3 == 0) continue;  // Skip multiples of 3
    cout &lt;&lt; i &lt;&lt; " ";  // 1 2 4 5 7 8 10
}</code></pre>
<h3>Nested Loop Example</h3>
<pre><code>// Multiplication table
for (int i = 1; i &lt;= 5; i++) {
    for (int j = 1; j &lt;= 5; j++) {
        cout &lt;&lt; i * j &lt;&lt; "\t";
    }
    cout &lt;&lt; endl;
}</code></pre>
<h3>Flag Pattern</h3>
<pre><code>bool found = false;
for (int i = 0; i &lt; size; i++) {
    if (arr[i] == target) {
        found = true;
        break;
    }
}
if (found) cout &lt;&lt; "Found!" &lt;&lt; endl;</code></pre>`,
          challenge: {
            description: 'Print numbers 1-20 but skip all multiples of 4. Use continue.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print 1-20, skip multiples of 4\n    return 0;\n}',
            expectedOutput: '1 2 3 5 6 7 9 10 11 13 14 15 17 18 19',
            hints: ['Use for loop 1 to 20', 'if (i % 4 == 0) continue', 'Print all others with space']
          },
          quiz: [{ question: 'What does continue do in a loop?', options: ['Exits the loop', 'Skips to next iteration', 'Restarts the loop', 'Pauses execution'], correct: 1 }]
        },
        {
          id: 'cpp-1-21',
          title: 'Function Basics',
          type: 'lesson',
          theory: `<h2>Function Basics</h2>
<p>Functions are reusable blocks of code that perform specific tasks. They help organize code, reduce repetition, and make programs modular.</p>
<h3>Function Syntax</h3>
<pre><code>returnType functionName(parameters) {
    // body
    return value;
}

int add(int a, int b) {
    return a + b;
}

void greet(string name) {
    cout &lt;&lt; "Hello, " &lt;&lt; name &lt;&lt; "!" &lt;&lt; endl;
}</code></pre>
<h3>Calling Functions</h3>
<pre><code>int result = add(3, 5);  // result = 8
greet("Alice");           // prints: Hello, Alice!</code></pre>
<h3>void Functions</h3>
<p>Functions that do not return a value use <code>void</code>:</p>
<pre><code>void printLine() {
    cout &lt;&lt; "----------" &lt;&lt; endl;
}</code></pre>
<h3>Function Declaration (Prototype)</h3>
<pre><code>// Declare before main
int multiply(int x, int y);

int main() {
    cout &lt;&lt; multiply(4, 5) &lt;&lt; endl;
    return 0;
}

// Define after main
int multiply(int x, int y) {
    return x * y;
}</code></pre>`,
          challenge: {
            description: 'Write a function isEven(int n) that returns true if n is even. Test with 4 and 7, print results.',
            starterCode: '#include <iostream>\nusing namespace std;\n\n// Define isEven function\n\nint main() {\n    // Test with 4 and 7\n    return 0;\n}',
            expectedOutput: '4 is even: 1\n7 is even: 0',
            hints: ['bool isEven(int n) { return n % 2 == 0; }', 'Call and print result', 'bool prints as 1 or 0']
          },
          quiz: [{ question: 'What does void mean as a return type?', options: ['Returns null', 'Returns 0', 'Returns nothing', 'Returns empty string'], correct: 2 }]
        },
        {
          id: 'cpp-1-22',
          title: 'Function Parameters',
          type: 'lesson',
          theory: `<h2>Function Parameters</h2>
<p>Parameters allow functions to receive data from the caller. C++ supports pass-by-value, pass-by-reference, and default parameter values.</p>
<h3>Pass by Value (Copy)</h3>
<pre><code>void doubleIt(int x) {
    x = x * 2;  // Only modifies the copy!
}
int num = 5;
doubleIt(num);
cout &lt;&lt; num &lt;&lt; endl;  // Still 5!</code></pre>
<h3>Pass by Reference (&amp;)</h3>
<pre><code>void doubleIt(int &x) {
    x = x * 2;  // Modifies the original!
}
int num = 5;
doubleIt(num);
cout &lt;&lt; num &lt;&lt; endl;  // Now 10!</code></pre>
<h3>Default Parameters</h3>
<pre><code>void greet(string name, string greeting = "Hello") {
    cout &lt;&lt; greeting &lt;&lt; ", " &lt;&lt; name &lt;&lt; "!" &lt;&lt; endl;
}
greet("Alice");         // Hello, Alice!
greet("Bob", "Hi");    // Hi, Bob!</code></pre>
<h3>const Reference (Read-only)</h3>
<pre><code>void print(const string &text) {
    cout &lt;&lt; text &lt;&lt; endl;
    // text = "new"; // Error! const prevents modification
}</code></pre>
<p>Use <code>const &amp;</code> for large objects you do not want to modify — avoids expensive copying while preventing changes.</p>`,
          challenge: {
            description: 'Write a swap function using pass-by-reference that swaps two integers. Swap 10 and 20, print before and after.',
            starterCode: '#include <iostream>\nusing namespace std;\n\n// swap function with references\n\nint main() {\n    int a = 10, b = 20;\n    // Print, swap, print\n    return 0;\n}',
            expectedOutput: 'Before: 10, 20\nAfter: 20, 10',
            hints: ['void swap(int &x, int &y)', 'Use a temp variable inside', 'Reference modifies originals']
          },
          quiz: [{ question: 'What does & in a parameter mean?', options: ['Address of', 'Pass by reference', 'Pointer', 'Bitwise AND'], correct: 1 }]
        },
        {
          id: 'cpp-1-23',
          title: 'Function Overloading',
          type: 'lesson',
          theory: `<h2>Function Overloading</h2>
<p>C++ allows multiple functions with the same name but different parameter lists. The compiler selects the correct version based on the arguments passed.</p>
<h3>Overloading Examples</h3>
<pre><code>int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }
string add(string a, string b) { return a + b; }

cout &lt;&lt; add(3, 5) &lt;&lt; endl;        // calls int version: 8
cout &lt;&lt; add(3.1, 2.4) &lt;&lt; endl;    // calls double version: 5.5
cout &lt;&lt; add("Hi", " there") &lt;&lt; endl; // calls string version</code></pre>
<h3>Different Number of Parameters</h3>
<pre><code>void print(string msg) { cout &lt;&lt; msg &lt;&lt; endl; }
void print(string msg, int times) {
    for (int i = 0; i &lt; times; i++) cout &lt;&lt; msg &lt;&lt; endl;
}</code></pre>
<h3>Resolution Rules</h3>
<ul>
<li>Exact match preferred</li>
<li>Promotions (int → double) considered next</li>
<li>Ambiguous calls cause compile errors</li>
</ul>
<h3>When to Overload</h3>
<p>Overload when the same logical operation applies to different types. Do not overload if functions do fundamentally different things — use different names instead.</p>`,
          challenge: {
            description: 'Create overloaded area functions: area(int side) for square, area(int w, int h) for rectangle, area(double radius) for circle. Test all three.',
            starterCode: '#include <iostream>\nusing namespace std;\n\n// Three overloaded area functions\n\nint main() {\n    // Test all three\n    return 0;\n}',
            expectedOutput: 'Square: 25\nRectangle: 24\nCircle: 78.5397',
            hints: ['Same function name, different parameters', 'Square: side*side, Rect: w*h', 'Circle: 3.14159 * r * r']
          },
          quiz: [{ question: 'What differentiates overloaded functions?', options: ['Return type only', 'Function name', 'Parameter list (types/count)', 'Access modifier'], correct: 2 }]
        },
        {
          id: 'cpp-1-24',
          title: 'Recursion',
          type: 'lesson',
          theory: `<h2>Recursion</h2>
<p>A recursive function is one that calls itself. It solves problems by breaking them into smaller versions of the same problem until reaching a base case.</p>
<h3>Structure</h3>
<pre><code>returnType recursive(params) {
    if (baseCase) return baseValue;  // Stop condition
    return recursive(smallerProblem);  // Recursive call
}</code></pre>
<h3>Factorial</h3>
<pre><code>int factorial(int n) {
    if (n &lt;= 1) return 1;        // Base case
    return n * factorial(n - 1);  // Recursive case
}
// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120</code></pre>
<h3>Fibonacci</h3>
<pre><code>int fibonacci(int n) {
    if (n &lt;= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}</code></pre>
<h3>How It Works</h3>
<p>Each call creates a new stack frame. When the base case is reached, calls return back up the chain. Without a base case, you get infinite recursion (stack overflow).</p>
<h3>Recursion vs Iteration</h3>
<ul>
<li>Recursion: Elegant for tree structures, divide-and-conquer</li>
<li>Iteration: Usually faster, less memory</li>
</ul>`,
          challenge: {
            description: 'Write a recursive function to calculate power(base, exp). Calculate 2^10 and print.',
            starterCode: '#include <iostream>\nusing namespace std;\n\n// Recursive power function\n\nint main() {\n    cout << "2^10 = " << power(2, 10) << endl;\n    return 0;\n}',
            expectedOutput: '2^10 = 1024',
            hints: ['Base case: exp == 0 returns 1', 'Recursive: base * power(base, exp-1)', 'Each call reduces exp by 1']
          },
          quiz: [{ question: 'What is a base case in recursion?', options: ['The first call', 'The condition that stops recursion', 'The return type', 'The main function'], correct: 1 }]
        },
        {
          id: 'cpp-1-25',
          title: 'Scope and Lifetime',
          type: 'lesson',
          theory: `<h2>Variable Scope and Lifetime</h2>
<p>Scope determines where a variable is accessible. Lifetime determines how long a variable exists in memory.</p>
<h3>Local Scope</h3>
<pre><code>void func() {
    int x = 10;  // Local to func
    cout &lt;&lt; x &lt;&lt; endl;
}
// x is not accessible here</code></pre>
<h3>Block Scope</h3>
<pre><code>if (true) {
    int y = 20;  // Only exists in this block
}
// y is not accessible here</code></pre>
<h3>Global Scope</h3>
<pre><code>int globalVar = 100;  // Accessible everywhere

void func() {
    cout &lt;&lt; globalVar &lt;&lt; endl;  // OK
}
int main() {
    cout &lt;&lt; globalVar &lt;&lt; endl;  // OK
}</code></pre>
<h3>Static Local Variables</h3>
<pre><code>void counter() {
    static int count = 0;  // Initialized once, persists
    count++;
    cout &lt;&lt; count &lt;&lt; endl;
}
counter(); // 1
counter(); // 2
counter(); // 3</code></pre>
<h3>Shadowing</h3>
<pre><code>int x = 10;
{ int x = 20; cout &lt;&lt; x; } // 20 (inner shadows outer)
cout &lt;&lt; x; // 10 (outer unchanged)</code></pre>`,
          challenge: {
            description: 'Create a function callCounter() with a static variable that counts calls. Call it 3 times and print the count each time.',
            starterCode: '#include <iostream>\nusing namespace std;\n\n// callCounter with static\n\nint main() {\n    callCounter();\n    callCounter();\n    callCounter();\n    return 0;\n}',
            expectedOutput: 'Call #1\nCall #2\nCall #3',
            hints: ['static int count = 0 inside function', 'count++ each call', 'Static persists between calls']
          },
          quiz: [{ question: 'What does static do to a local variable?', options: ['Makes it global', 'Persists between function calls', 'Makes it constant', 'Allocates on heap'], correct: 1 }]
        },
        {
          id: 'cpp-1-26',
          title: 'Arrays Introduction',
          type: 'lesson',
          theory: `<h2>Arrays in C++</h2>
<p>Arrays store multiple values of the same type in contiguous memory. They provide efficient indexed access to collections of data.</p>
<h3>Declaration and Initialization</h3>
<pre><code>int numbers[5] = {10, 20, 30, 40, 50};
double grades[3] = {95.5, 87.2, 91.0};
string names[4] = {"Alice", "Bob", "Charlie", "Dave"};

int zeros[10] = {};  // All initialized to 0
int partial[5] = {1, 2};  // Rest are 0</code></pre>
<h3>Accessing Elements</h3>
<pre><code>cout &lt;&lt; numbers[0] &lt;&lt; endl;  // 10 (first element)
cout &lt;&lt; numbers[4] &lt;&lt; endl;  // 50 (last element)
numbers[2] = 99;             // Modify element</code></pre>
<h3>Iterating</h3>
<pre><code>int arr[5] = {1, 2, 3, 4, 5};
for (int i = 0; i &lt; 5; i++) {
    cout &lt;&lt; arr[i] &lt;&lt; " ";
}</code></pre>
<h3>Important Notes</h3>
<ul>
<li>Indices start at 0, end at size-1</li>
<li>No bounds checking — accessing arr[5] in a size-5 array is undefined behavior</li>
<li>Size must be known at compile time (for stack arrays)</li>
<li>Cannot be resized after creation</li>
</ul>`,
          challenge: {
            description: 'Create an int array with values {4, 8, 15, 16, 23, 42}. Find and print the largest value.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {4, 8, 15, 16, 23, 42};\n    // Find maximum\n    return 0;\n}',
            expectedOutput: 'Maximum: 42',
            hints: ['Initialize max = arr[0]', 'Loop through comparing each element', 'if (arr[i] > max) max = arr[i]']
          },
          quiz: [{ question: 'What is the index of the first element in a C++ array?', options: ['1', '0', '-1', 'Depends on type'], correct: 1 }]
        },
        {
          id: 'cpp-1-27',
          title: 'Array Operations',
          type: 'lesson',
          theory: `<h2>Array Operations</h2>
<p>Common operations on arrays include searching, sorting, summing, and passing arrays to functions.</p>
<h3>Sum and Average</h3>
<pre><code>int arr[] = {10, 20, 30, 40, 50};
int sum = 0;
for (int i = 0; i &lt; 5; i++) {
    sum += arr[i];
}
double avg = (double)sum / 5;</code></pre>
<h3>Linear Search</h3>
<pre><code>int search(int arr[], int size, int target) {
    for (int i = 0; i &lt; size; i++) {
        if (arr[i] == target) return i;
    }
    return -1;  // Not found
}</code></pre>
<h3>Passing Arrays to Functions</h3>
<pre><code>void printArray(int arr[], int size) {
    for (int i = 0; i &lt; size; i++) {
        cout &lt;&lt; arr[i] &lt;&lt; " ";
    }
    cout &lt;&lt; endl;
}</code></pre>
<h3>Range-based For Loop (C++11)</h3>
<pre><code>int nums[] = {1, 2, 3, 4, 5};
for (int n : nums) {
    cout &lt;&lt; n &lt;&lt; " ";
}</code></pre>
<h3>Note</h3>
<p>Arrays decay to pointers when passed to functions — you must pass the size separately. The function cannot determine array size from the pointer alone.</p>`,
          challenge: {
            description: 'Create array {5, 2, 8, 1, 9, 3}. Write a function to find the minimum value. Print it.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint findMin(int arr[], int size) {\n    // Find minimum\n}\n\nint main() {\n    int arr[] = {5, 2, 8, 1, 9, 3};\n    cout << "Minimum: " << findMin(arr, 6) << endl;\n    return 0;\n}',
            expectedOutput: 'Minimum: 1',
            hints: ['Start with min = arr[0]', 'Compare each element', 'Return min after loop']
          },
          quiz: [{ question: 'Why must you pass array size to functions?', options: ['Style convention', 'Arrays decay to pointers losing size info', 'Compiler requirement', 'For type checking'], correct: 1 }]
        },
        {
          id: 'cpp-1-28',
          title: 'Multidimensional Arrays',
          type: 'lesson',
          theory: `<h2>Multidimensional Arrays</h2>
<p>C++ supports arrays of arrays — 2D arrays represent grids/matrices, 3D arrays represent cubes of data.</p>
<h3>2D Array Declaration</h3>
<pre><code>int matrix[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};</code></pre>
<h3>Accessing Elements</h3>
<pre><code>cout &lt;&lt; matrix[0][0] &lt;&lt; endl;  // 1 (row 0, col 0)
cout &lt;&lt; matrix[1][2] &lt;&lt; endl;  // 7 (row 1, col 2)
matrix[2][3] = 99;             // Modify element</code></pre>
<h3>Iterating 2D Arrays</h3>
<pre><code>for (int row = 0; row &lt; 3; row++) {
    for (int col = 0; col &lt; 4; col++) {
        cout &lt;&lt; matrix[row][col] &lt;&lt; " ";
    }
    cout &lt;&lt; endl;
}</code></pre>
<h3>Common Uses</h3>
<ul>
<li>Game boards (chess, tic-tac-toe)</li>
<li>Image pixel data</li>
<li>Spreadsheet data</li>
<li>Mathematical matrices</li>
</ul>`,
          challenge: {
            description: 'Create a 3x3 matrix with values 1-9. Calculate and print the sum of the main diagonal (top-left to bottom-right).',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int m[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    // Sum diagonal\n    return 0;\n}',
            expectedOutput: 'Diagonal sum: 15',
            hints: ['Diagonal elements: m[0][0], m[1][1], m[2][2]', 'Loop: m[i][i] for each i', 'Sum them together']
          },
          quiz: [{ question: 'How do you access row 2, column 3 of a 2D array?', options: ['arr[3][2]', 'arr[2][3]', 'arr(2,3)', 'arr[2,3]'], correct: 1 }]
        },
        {
          id: 'cpp-1-29',
          title: 'Calculator Project - Part 1',
          type: 'project',
          theory: `<h2>Project: Calculator (Part 1) 🧮</h2>
<p>Let us build a functional calculator that combines everything we have learned: variables, input/output, functions, and control flow.</p>
<h3>Requirements</h3>
<ol>
<li>Support +, -, *, / operations</li>
<li>Use functions for each operation</li>
<li>Handle division by zero</li>
<li>Display formatted results</li>
</ol>
<h3>Architecture</h3>
<pre><code>double add(double a, double b);
double subtract(double a, double b);
double multiply(double a, double b);
double divide(double a, double b);
void displayResult(double a, char op, double b, double result);</code></pre>
<h3>Design Goals</h3>
<p>Each operation is a separate function for modularity. The display function formats output consistently. Error handling prevents crashes from invalid operations.</p>`,
          challenge: {
            description: 'Implement add, subtract, multiply, divide functions. Test with a=10, b=3 for all operations. Handle division display.',
            starterCode: '#include <iostream>\nusing namespace std;\n\n// Calculator functions\n\nint main() {\n    double a = 10, b = 3;\n    // Test all operations\n    return 0;\n}',
            expectedOutput: '10 + 3 = 13\n10 - 3 = 7\n10 * 3 = 30\n10 / 3 = 3.33333',
            hints: ['Each function takes two doubles, returns double', 'Use cout for formatted output', 'Division just returns a/b for now']
          },
          quiz: [{ question: 'Why use separate functions for each operation?', options: ['Required by C++', 'Modularity and reusability', 'Better performance', 'Less memory usage'], correct: 1 }]
        },
        {
          id: 'cpp-1-30',
          title: 'Calculator Project - Part 2',
          type: 'project',
          theory: `<h2>Project: Calculator (Part 2) 🧮</h2>
<p>Now let us add error handling, a menu system using switch, and continuous operation until the user exits.</p>
<h3>New Features</h3>
<ol>
<li>Menu with numbered options</li>
<li>Switch statement for operation selection</li>
<li>Division by zero check</li>
<li>Loop for continuous use</li>
</ol>
<h3>Error Handling</h3>
<pre><code>double divide(double a, double b) {
    if (b == 0) {
        cout &lt;&lt; "Error: Division by zero!" &lt;&lt; endl;
        return 0;
    }
    return a / b;
}</code></pre>
<h3>Menu System</h3>
<pre><code>cout &lt;&lt; "1. Add" &lt;&lt; endl;
cout &lt;&lt; "2. Subtract" &lt;&lt; endl;
cout &lt;&lt; "3. Multiply" &lt;&lt; endl;
cout &lt;&lt; "4. Divide" &lt;&lt; endl;
cout &lt;&lt; "5. Exit" &lt;&lt; endl;</code></pre>`,
          challenge: {
            description: 'Build full calculator with switch-based operation selection. Test: operation 4 (divide), values 10 and 0 (should show error). Then operation 1, values 25 and 17.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Full calculator with error handling\n    // Simulate: divide 10/0, then add 25+17\n    return 0;\n}',
            expectedOutput: 'Error: Division by zero!\n25 + 17 = 42',
            hints: ['Check b == 0 before dividing', 'Use switch(operation) for selection', 'Print error message for div by zero']
          },
          quiz: [{ question: 'Why check for division by zero?', options: ['Style preference', 'Prevents undefined behavior/crash', 'Required by standard', 'Improves speed'], correct: 1 }]
        }
      ]
    },
    {
      id: 'cpp-intermediate',
      title: 'Intermediate',
      lessons: [
        {
          id: 'cpp-2-1',
          title: 'Introduction to Pointers',
          type: 'lesson',
          theory: `<h2>Introduction to Pointers</h2>
<p>Pointers are variables that store <strong>memory addresses</strong> rather than values directly. They are one of C++'s most powerful features, enabling dynamic memory, efficient data passing, and data structures.</p>
<h3>What is a Pointer?</h3>
<pre><code>int age = 25;
int* ptr = &age;  // ptr stores the address of age

cout &lt;&lt; age &lt;&lt; endl;    // 25 (the value)
cout &lt;&lt; &age &lt;&lt; endl;   // 0x7ffd... (the address)
cout &lt;&lt; ptr &lt;&lt; endl;    // 0x7ffd... (same address)
cout &lt;&lt; *ptr &lt;&lt; endl;   // 25 (dereferencing — get value at address)</code></pre>
<h3>Key Operators</h3>
<ul>
<li><strong>&</strong> (address-of): Gets the memory address of a variable</li>
<li><strong>*</strong> (dereference): Gets the value at a memory address</li>
<li><strong>*</strong> (in declaration): Declares a pointer variable</li>
</ul>
<h3>Pointer Types</h3>
<pre><code>int* intPtr;       // Pointer to int
double* dblPtr;    // Pointer to double
char* charPtr;     // Pointer to char
string* strPtr;    // Pointer to string</code></pre>
<h3>Modifying Through Pointers</h3>
<pre><code>int x = 10;
int* p = &x;
*p = 20;        // Changes x to 20 through the pointer!
cout &lt;&lt; x;      // 20</code></pre>`,
          challenge: {
            description: 'Create int variable num = 42. Create a pointer to it. Print the value, address, and then modify through pointer to 100. Print new value.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Pointer basics\n    return 0;\n}',
            expectedOutput: 'Value: 42\nModified: 100',
            hints: ['int* ptr = &num', '*ptr = 100 modifies num', 'cout << *ptr for value']
          },
          quiz: [{ question: 'What does the & operator return?', options: ['The value', 'The memory address', 'A reference', 'A copy'], correct: 1 }]
        },
        {
          id: 'cpp-2-2',
          title: 'Pointer Arithmetic',
          type: 'lesson',
          theory: `<h2>Pointer Arithmetic</h2>
<p>Pointers support arithmetic operations that move them through memory. Adding 1 to a pointer advances it by the size of the pointed-to type.</p>
<h3>Incrementing Pointers</h3>
<pre><code>int arr[] = {10, 20, 30, 40, 50};
int* ptr = arr;  // Points to first element

cout &lt;&lt; *ptr &lt;&lt; endl;      // 10
cout &lt;&lt; *(ptr+1) &lt;&lt; endl;  // 20
cout &lt;&lt; *(ptr+2) &lt;&lt; endl;  // 30

ptr++;  // Now points to arr[1]
cout &lt;&lt; *ptr &lt;&lt; endl;  // 20</code></pre>
<h3>Arrays and Pointers</h3>
<p>Array names decay to pointers to their first element:</p>
<pre><code>int arr[] = {1, 2, 3};
int* p = arr;       // Same as &arr[0]
// arr[i] is equivalent to *(arr + i)</code></pre>
<h3>Pointer Subtraction</h3>
<pre><code>int arr[] = {10, 20, 30, 40};
int* start = &arr[0];
int* end = &arr[3];
cout &lt;&lt; end - start &lt;&lt; endl;  // 3 (elements apart)</code></pre>
<h3>Iterating with Pointers</h3>
<pre><code>int arr[] = {1, 2, 3, 4, 5};
for (int* p = arr; p &lt; arr + 5; p++) {
    cout &lt;&lt; *p &lt;&lt; " ";
}</code></pre>`,
          challenge: {
            description: 'Create array {10, 20, 30, 40, 50}. Use a pointer to iterate and print all elements, then print the 3rd element using pointer arithmetic.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    // Pointer iteration\n    return 0;\n}',
            expectedOutput: '10 20 30 40 50\nThird element: 30',
            hints: ['int* ptr = arr to start', 'Loop: ptr < arr + 5', '*(arr + 2) for third element']
          },
          quiz: [{ question: 'What does ptr++ do to an int pointer?', options: ['Adds 1 byte', 'Adds sizeof(int) bytes', 'Adds 1 to the value pointed to', 'Nothing'], correct: 1 }]
        },
        {
          id: 'cpp-2-3',
          title: 'Dynamic Memory',
          type: 'lesson',
          theory: `<h2>Dynamic Memory Allocation</h2>
<p>Dynamic memory (heap) allows you to allocate memory at runtime using <code>new</code> and free it with <code>delete</code>. This enables flexible data structures.</p>
<h3>new and delete</h3>
<pre><code>int* ptr = new int;      // Allocate single int on heap
*ptr = 42;
cout &lt;&lt; *ptr &lt;&lt; endl;    // 42
delete ptr;              // Free memory</code></pre>
<h3>Dynamic Arrays</h3>
<pre><code>int size = 5;
int* arr = new int[size];  // Array on heap
for (int i = 0; i &lt; size; i++) {
    arr[i] = i * 10;
}
delete[] arr;  // Free array (note the [])</code></pre>
<h3>Memory Leaks</h3>
<pre><code>void leak() {
    int* p = new int(42);
    // Forgot delete! Memory leaked when function returns
}
// The allocated memory is never freed</code></pre>
<h3>nullptr</h3>
<pre><code>int* ptr = nullptr;  // Safe null pointer
if (ptr != nullptr) {
    cout &lt;&lt; *ptr &lt;&lt; endl;  // Only access if not null
}</code></pre>
<h3>Best Practices</h3>
<ul>
<li>Always pair new with delete, new[] with delete[]</li>
<li>Set pointers to nullptr after delete</li>
<li>In modern C++, prefer smart pointers (unique_ptr, shared_ptr)</li>
</ul>`,
          challenge: {
            description: 'Dynamically allocate an array of 5 integers, fill with values 2,4,6,8,10, print them, then properly free the memory.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Dynamic array\n    return 0;\n}',
            expectedOutput: '2 4 6 8 10',
            hints: ['int* arr = new int[5]', 'Fill with loop: arr[i] = (i+1)*2', 'delete[] arr at the end']
          },
          quiz: [{ question: 'What operator frees dynamically allocated arrays?', options: ['delete', 'delete[]', 'free()', 'remove'], correct: 1 }]
        },
        {
          id: 'cpp-2-4',
          title: 'Pointers and Functions',
          type: 'lesson',
          theory: `<h2>Pointers and Functions</h2>
<p>Pointers enable functions to modify variables in the caller's scope and to efficiently pass large data without copying.</p>
<h3>Pointer Parameters</h3>
<pre><code>void increment(int* p) {
    (*p)++;  // Modifies original through pointer
}
int x = 5;
increment(&x);
cout &lt;&lt; x &lt;&lt; endl;  // 6</code></pre>
<h3>Swapping with Pointers</h3>
<pre><code>void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
int x = 10, y = 20;
swap(&x, &y);  // x=20, y=10</code></pre>
<h3>Returning Pointers</h3>
<pre><code>int* createArray(int size) {
    int* arr = new int[size];
    for (int i = 0; i &lt; size; i++) arr[i] = 0;
    return arr;  // Caller must delete[]
}</code></pre>
<h3>Array Parameters (Always Pointers)</h3>
<pre><code>void fillArray(int* arr, int size, int value) {
    for (int i = 0; i &lt; size; i++) {
        arr[i] = value;
    }
}
// Equivalent: void fillArray(int arr[], int size, int value)</code></pre>
<h3>Danger: Dangling Pointers</h3>
<p>Never return a pointer to a local variable — it is destroyed when the function ends!</p>`,
          challenge: {
            description: 'Write a function that takes a pointer to an array and its size, and doubles every element in place. Test with {1, 2, 3, 4, 5}.',
            starterCode: '#include <iostream>\nusing namespace std;\n\nvoid doubleArray(int* arr, int size) {\n    // Double each element\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    doubleArray(arr, 5);\n    for (int i = 0; i < 5; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}',
            expectedOutput: '2 4 6 8 10',
            hints: ['arr[i] *= 2 or *(arr+i) *= 2', 'Loop from 0 to size-1', 'Array is modified in place']
          },
          quiz: [{ question: 'Why pass pointers to functions?', options: ['Only way to pass data', 'To modify originals and avoid copying', 'For type safety', 'Required by compiler'], correct: 1 }]
        },
        {
          id: 'cpp-2-5',
          title: 'Smart Pointers',
          type: 'lesson',
          theory: `<h2>Smart Pointers (C++11)</h2>
<p>Smart pointers automatically manage memory, preventing leaks and dangling pointers. They are the modern C++ way to handle dynamic memory.</p>
<h3>unique_ptr — Exclusive Ownership</h3>
<pre><code>#include &lt;memory&gt;
unique_ptr&lt;int&gt; ptr = make_unique&lt;int&gt;(42);
cout &lt;&lt; *ptr &lt;&lt; endl;  // 42
// Automatically deleted when ptr goes out of scope
// Cannot be copied, only moved</code></pre>
<h3>shared_ptr — Shared Ownership</h3>
<pre><code>shared_ptr&lt;int&gt; p1 = make_shared&lt;int&gt;(100);
shared_ptr&lt;int&gt; p2 = p1;  // Both own the memory
cout &lt;&lt; p1.use_count() &lt;&lt; endl; // 2
// Deleted when last shared_ptr is destroyed</code></pre>
<h3>unique_ptr with Arrays</h3>
<pre><code>unique_ptr&lt;int[]&gt; arr = make_unique&lt;int[]&gt;(5);
arr[0] = 10;
arr[1] = 20;</code></pre>
<h3>Why Smart Pointers?</h3>
<ul>
<li>No memory leaks — auto cleanup</li>
<li>No dangling pointers — clear ownership</li>
<li>Exception safe — cleaned up even if exception thrown</li>
<li>Self-documenting — ownership is clear from the type</li>
</ul>
<h3>Rule of Thumb</h3>
<p>Use unique_ptr by default. Use shared_ptr only when multiple owners are needed. Avoid raw new/delete in modern C++.</p>`,
          challenge: {
            description: 'Create a unique_ptr to an int with value 99. Print it. Then create a shared_ptr, copy it, and print use_count.',
            starterCode: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nint main() {\n    // Smart pointers\n    return 0;\n}',
            expectedOutput: 'Unique: 99\nShared count: 2',
            hints: ['auto p = make_unique<int>(99)', 'auto s = make_shared<int>(50)', 'Copy shared_ptr to increase count']
          },
          quiz: [{ question: 'When is memory freed with unique_ptr?', options: ['When you call delete', 'When it goes out of scope', 'At program end', 'Manually with free()'], correct: 1 }]
        },
        {
          id: 'cpp-2-6',
          title: 'C++ Strings In Depth',
          type: 'lesson',
          theory: `<h2>C++ Strings In Depth</h2>
<p>The std::string class provides rich functionality for text manipulation, far beyond C-style char arrays.</p>
<h3>String Construction</h3>
<pre><code>string s1 = "Hello";
string s2("World");
string s3(5, 'x');  // "xxxxx"
string s4 = s1 + " " + s2;  // "Hello World"</code></pre>
<h3>Access and Modification</h3>
<pre><code>string s = "Hello";
cout &lt;&lt; s[0] &lt;&lt; endl;      // H
cout &lt;&lt; s.at(1) &lt;&lt; endl;   // e (bounds checked)
s[0] = 'J';                // "Jello"
s.push_back('!');           // "Jello!"
s.pop_back();               // "Jello"</code></pre>
<h3>Searching</h3>
<pre><code>string text = "Hello World Hello";
cout &lt;&lt; text.find("World") &lt;&lt; endl;    // 6
cout &lt;&lt; text.rfind("Hello") &lt;&lt; endl;   // 12 (last occurrence)
cout &lt;&lt; text.find("xyz") &lt;&lt; endl;      // string::npos (not found)</code></pre>
<h3>Substrings and Replace</h3>
<pre><code>string s = "Hello World";
cout &lt;&lt; s.substr(6) &lt;&lt; endl;      // "World"
cout &lt;&lt; s.substr(0, 5) &lt;&lt; endl;   // "Hello"
s.replace(6, 5, "C++");           // "Hello C++"</code></pre>
<h3>Conversion</h3>
<pre><code>int n = stoi("42");        // string to int
double d = stod("3.14");   // string to double
string s = to_string(100); // int to string</code></pre>`,
          challenge: {
            description: 'Given string "Hello, World!", find the position of "World", extract it with substr, convert to uppercase manually, print it.',
            starterCode: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text = "Hello, World!";\n    // Find, extract, uppercase\n    return 0;\n}',
            expectedOutput: 'Found at: 7\nExtracted: WORLD',
            hints: ['find() returns position', 'substr(pos, length) extracts', 'Loop chars: c - 32 converts lower to upper']
          },
          quiz: [{ question: 'What does string::npos indicate?', options: ['Position 0', 'End of string', 'Not found', 'Null string'], correct: 2 }]
        },
        {
          id: 'cpp-2-7',
          title: 'String Manipulation',
          type: 'lesson',
          theory: `<h2>String Manipulation Techniques</h2>
<p>Advanced string operations for parsing, transforming, and processing text data efficiently in C++.</p>
<h3>Trimming Whitespace</h3>
<pre><code>string trim(const string& s) {
    size_t start = s.find_first_not_of(" \t\n");
    size_t end = s.find_last_not_of(" \t\n");
    if (start == string::npos) return "";
    return s.substr(start, end - start + 1);
}</code></pre>
<h3>Split by Delimiter</h3>
<pre><code>#include &lt;sstream&gt;
string text = "apple,banana,cherry";
stringstream ss(text);
string token;
while (getline(ss, token, ',')) {
    cout &lt;&lt; token &lt;&lt; endl;
}</code></pre>
<h3>Case Conversion</h3>
<pre><code>#include &lt;algorithm&gt;
string s = "Hello World";
transform(s.begin(), s.end(), s.begin(), ::toupper);
// s is now "HELLO WORLD"

transform(s.begin(), s.end(), s.begin(), ::tolower);
// s is now "hello world"</code></pre>
<h3>String Comparison</h3>
<pre><code>string a = "apple", b = "banana";
if (a == b) cout &lt;&lt; "Equal" &lt;&lt; endl;
if (a &lt; b)  cout &lt;&lt; "a first" &lt;&lt; endl;  // Lexicographic
int cmp = a.compare(b);  // < 0 if a < b</code></pre>`,
          challenge: {
            description: 'Given "Hello, World, CPP", split by ", " and print each word on a separate line with its index.',
            starterCode: '#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string text = "Hello, World, CPP";\n    // Split and print with index\n    return 0;\n}',
            expectedOutput: '0: Hello\n1: World\n2: CPP',
            hints: ['Use stringstream with getline', 'Delimiter is ", " — use find and substr manually', 'Counter variable for index']
          },
          quiz: [{ question: 'Which header provides stringstream?', options: ['<string>', '<sstream>', '<stream>', '<fstream>'], correct: 1 }]
        },
        {
          id: 'cpp-2-8',
          title: 'C-strings vs std::string',
          type: 'lesson',
          theory: `<h2>C-strings vs std::string</h2>
<p>C++ supports both C-style strings (char arrays) and the modern string class. Understanding both is important for legacy code and system programming.</p>
<h3>C-strings (Character Arrays)</h3>
<pre><code>char name[] = "Hello";  // Null-terminated: H-e-l-l-o-\0
char buffer[20];
strcpy(buffer, "World");
strcat(buffer, "!");
cout &lt;&lt; strlen(buffer) &lt;&lt; endl;  // 6</code></pre>
<h3>C-string Functions (from &lt;cstring&gt;)</h3>
<ul>
<li><code>strlen(s)</code> — length</li>
<li><code>strcpy(dest, src)</code> — copy</li>
<li><code>strcat(dest, src)</code> — concatenate</li>
<li><code>strcmp(a, b)</code> — compare (0 if equal)</li>
<li><code>strchr(s, c)</code> — find character</li>
</ul>
<h3>Conversion</h3>
<pre><code>// C-string to string
char cstr[] = "Hello";
string s = cstr;

// string to C-string
string str = "World";
const char* cs = str.c_str();</code></pre>
<h3>Why Prefer std::string?</h3>
<ul>
<li>Automatic memory management</li>
<li>No buffer overflow risks</li>
<li>Rich method set</li>
<li>Safe concatenation and comparison</li>
</ul>`,
          challenge: {
            description: 'Create a C-string "Hello" and std::string "World". Convert the C-string to std::string, concatenate them, print the result and length.',
            starterCode: '#include <iostream>\n#include <string>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char cstr[] = "Hello";\n    string str = "World";\n    // Convert, concatenate, print\n    return 0;\n}',
            expectedOutput: 'Combined: Hello World\nLength: 11',
            hints: ['string s = cstr converts automatically', 'Concatenate with + operator', '.length() for size']
          },
          quiz: [{ question: 'What terminates a C-string?', options: ['Semicolon', 'Null character (\\0)', 'Newline', 'Space'], correct: 1 }]
        },
        {
          id: 'cpp-2-9',
          title: 'String Algorithms',
          type: 'lesson',
          theory: `<h2>String Algorithms</h2>
<p>Common string algorithms you will encounter in programming challenges and real applications.</p>
<h3>Palindrome Check</h3>
<pre><code>bool isPalindrome(const string& s) {
    int left = 0, right = s.length() - 1;
    while (left &lt; right) {
        if (s[left] != s[right]) return false;
        left++; right--;
    }
    return true;
}</code></pre>
<h3>Character Frequency</h3>
<pre><code>void countChars(const string& s) {
    int freq[26] = {};
    for (char c : s) {
        if (c >= 'a' && c &lt;= 'z') freq[c - 'a']++;
    }
}</code></pre>
<h3>Reverse a String</h3>
<pre><code>string reversed(const string& s) {
    return string(s.rbegin(), s.rend());
}
// Or: reverse(s.begin(), s.end()); // in-place</code></pre>
<h3>Count Words</h3>
<pre><code>int countWords(const string& s) {
    int count = 0;
    bool inWord = false;
    for (char c : s) {
        if (c == ' ') inWord = false;
        else if (!inWord) { count++; inWord = true; }
    }
    return count;
}</code></pre>`,
          challenge: {
            description: 'Write a function to check if "racecar" is a palindrome and count the vowels in "Hello World". Print both results.',
            starterCode: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Palindrome and vowel count\n    return 0;\n}',
            expectedOutput: 'racecar is palindrome: 1\nVowels in Hello World: 3',
            hints: ['Compare from both ends for palindrome', 'Check aeiouAEIOU for vowels', 'Loop through each character']
          },
          quiz: [{ question: 'What is a palindrome?', options: ['A repeated string', 'A string that reads same forwards and backwards', 'A sorted string', 'A numeric string'], correct: 1 }]
        },
        {
          id: 'cpp-2-10',
          title: 'Structures Basics',
          type: 'lesson',
          theory: `<h2>Structures (struct)</h2>
<p>Structures group related variables of different types under one name. They are the foundation of custom data types in C++.</p>
<h3>Defining a Structure</h3>
<pre><code>struct Student {
    string name;
    int age;
    double gpa;
};

Student s1;
s1.name = "Alice";
s1.age = 20;
s1.gpa = 3.8;</code></pre>
<h3>Initialization</h3>
<pre><code>Student s2 = {"Bob", 22, 3.5};
Student s3 {"Charlie", 21, 3.9};  // C++11 uniform init</code></pre>
<h3>Accessing Members</h3>
<pre><code>cout &lt;&lt; s1.name &lt;&lt; endl;
cout &lt;&lt; s1.gpa &lt;&lt; endl;
s1.age = 21;  // Modify</code></pre>
<h3>Arrays of Structures</h3>
<pre><code>Student class_[30];
class_[0] = {"Alice", 20, 3.8};
class_[1] = {"Bob", 22, 3.5};</code></pre>
<h3>Structures in Functions</h3>
<pre><code>void printStudent(const Student& s) {
    cout &lt;&lt; s.name &lt;&lt; " (GPA: " &lt;&lt; s.gpa &lt;&lt; ")" &lt;&lt; endl;
}

Student createStudent(string name, int age, double gpa) {
    return {name, age, gpa};
}</code></pre>`,
          challenge: {
            description: 'Define a Point struct with x, y (double). Create two points (0,0) and (3,4). Write a distance function. Print the distance.',
            starterCode: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\n// Point struct and distance function\n\nint main() {\n    // Create points, calculate distance\n    return 0;\n}',
            expectedOutput: 'Distance: 5',
            hints: ['struct Point { double x, y; }', 'Distance = sqrt((x2-x1)^2 + (y2-y1)^2)', 'Pass structs by const reference']
          },
          quiz: [{ question: 'How do you access a struct member?', options: ['struct->member', 'struct.member', 'struct[member]', 'struct::member'], correct: 1 }]
        },
        {
          id: 'cpp-2-11',
          title: 'Nested Structures',
          type: 'lesson',
          theory: `<h2>Nested Structures</h2>
<p>Structures can contain other structures, allowing you to model complex real-world entities with hierarchical data.</p>
<h3>Nesting Example</h3>
<pre><code>struct Address {
    string street;
    string city;
    string state;
    int zipCode;
};

struct Employee {
    string name;
    int id;
    double salary;
    Address address;  // Nested struct
};</code></pre>
<h3>Accessing Nested Members</h3>
<pre><code>Employee emp;
emp.name = "Alice";
emp.address.city = "Mumbai";
emp.address.zipCode = 400001;</code></pre>
<h3>Initialization</h3>
<pre><code>Employee emp = {
    "Bob", 101, 75000.0,
    {"123 Main St", "Delhi", "DL", 110001}
};</code></pre>
<h3>Structures with Methods</h3>
<pre><code>struct Rectangle {
    double width, height;
    double area() { return width * height; }
    double perimeter() { return 2 * (width + height); }
};
Rectangle r = {5.0, 3.0};
cout &lt;&lt; r.area() &lt;&lt; endl;  // 15</code></pre>`,
          challenge: {
            description: 'Create Date struct (day, month, year) and Person struct (name, age, birthdate as Date). Create a person and print their info.',
            starterCode: '#include <iostream>\nusing namespace std;\n\n// Date and Person structs\n\nint main() {\n    // Create person with birthdate\n    return 0;\n}',
            expectedOutput: 'Alice, Age: 25, Born: 15/6/1999',
            hints: ['struct Date { int day, month, year; }', 'struct Person { string name; int age; Date birthdate; }', 'Access with person.birthdate.day']
          },
          quiz: [{ question: 'Can structs contain other structs?', options: ['No, only primitives', 'Yes, by nesting them', 'Only with pointers', 'Only with inheritance'], correct: 1 }]
        },
        {
          id: 'cpp-2-12',
          title: 'Pointers to Structures',
          type: 'lesson',
          theory: `<h2>Pointers to Structures</h2>
<p>Pointers to structures enable dynamic allocation of objects and efficient passing to functions. The arrow operator provides clean member access.</p>
<h3>The Arrow Operator (->)</h3>
<pre><code>struct Car {
    string make;
    int year;
};

Car myCar = {"Toyota", 2022};
Car* ptr = &myCar;

// Two ways to access:
cout &lt;&lt; (*ptr).make &lt;&lt; endl;  // Dereference then access
cout &lt;&lt; ptr->make &lt;&lt; endl;   // Arrow operator (preferred)</code></pre>
<h3>Dynamic Struct Allocation</h3>
<pre><code>Car* newCar = new Car;
newCar->make = "Honda";
newCar->year = 2023;
cout &lt;&lt; newCar->make &lt;&lt; endl;
delete newCar;</code></pre>
<h3>Functions with Struct Pointers</h3>
<pre><code>void birthday(Car* c) {
    c->year++;  // Modifies original
}
birthday(&myCar);</code></pre>
<h3>Linked Structures (Preview)</h3>
<pre><code>struct Node {
    int data;
    Node* next;  // Pointer to same type!
};
// Foundation of linked lists</code></pre>`,
          challenge: {
            description: 'Create a Book struct (title, pages). Dynamically allocate one, set values using arrow operator, print it, then free memory.',
            starterCode: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Book {\n    string title;\n    int pages;\n};\n\nint main() {\n    // Dynamic Book\n    return 0;\n}',
            expectedOutput: 'Title: C++ Primer\nPages: 1376',
            hints: ['Book* b = new Book', 'b->title = "C++ Primer"', 'delete b at the end']
          },
          quiz: [{ question: 'What is the arrow operator (->) a shortcut for?', options: ['ptr.member', '(*ptr).member', '&ptr.member', 'ptr::member'], correct: 1 }]
        },
        {
          id: 'cpp-2-13',
          title: 'Struct vs Class',
          type: 'lesson',
          theory: `<h2>struct vs class — Transitioning to OOP</h2>
<p>In C++, struct and class are nearly identical. The only difference is the default access level: struct members are public by default, class members are private.</p>
<h3>Comparison</h3>
<pre><code>struct Point {
    double x, y;  // public by default
};

class Point {
    double x, y;  // private by default
public:
    Point(double x, double y) : x(x), y(y) {}
    double getX() { return x; }
};</code></pre>
<h3>When to Use Which</h3>
<ul>
<li><strong>struct:</strong> Simple data containers, POD types, small groupings</li>
<li><strong>class:</strong> Complex objects with behavior, encapsulation needed</li>
</ul>
<h3>Convention</h3>
<p>Use struct for passive data with no invariants. Use class when you need constructors, private data, methods that enforce rules, or inheritance hierarchies.</p>
<h3>Both Support</h3>
<pre><code>// Both can have methods, constructors, inheritance
struct Animal {
    string name;
    Animal(string n) : name(n) {}
    virtual void speak() { cout &lt;&lt; "..." &lt;&lt; endl; }
};</code></pre>`,
          challenge: {
            description: 'Create a struct Color with r, g, b (int). Add a method display() that prints "rgb(r, g, b)". Create red color and display it.',
            starterCode: '#include <iostream>\nusing namespace std;\n\n// Color struct with method\n\nint main() {\n    // Create and display red\n    return 0;\n}',
            expectedOutput: 'rgb(255, 0, 0)',
            hints: ['Methods work in structs just like classes', 'void display() inside struct', 'Create Color red = {255, 0, 0}']
          },
          quiz: [{ question: 'What is the default access in a struct?', options: ['private', 'public', 'protected', 'friend'], correct: 1 }]
        },
        {
          id: 'cpp-2-14',
          title: 'Classes and Objects',
          type: 'lesson',
          theory: `<h2>Classes and Objects</h2>
<p>Classes are blueprints for objects. They encapsulate data (attributes) and behavior (methods) together, forming the foundation of Object-Oriented Programming in C++.</p>
<h3>Class Definition</h3>
<pre><code>class Rectangle {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double area() { return width * height; }
    double perimeter() { return 2 * (width + height); }
    void display() {
        cout &lt;&lt; width &lt;&lt; "x" &lt;&lt; height &lt;&lt; endl;
    }
};</code></pre>
<h3>Creating Objects</h3>
<pre><code>Rectangle r1(5.0, 3.0);
Rectangle r2(10.0, 2.0);
cout &lt;&lt; r1.area() &lt;&lt; endl;  // 15
r2.display();                // 10x2</code></pre>
<h3>Access Modifiers</h3>
<ul>
<li><strong>private:</strong> Only accessible within the class</li>
<li><strong>public:</strong> Accessible from anywhere</li>
<li><strong>protected:</strong> Accessible in class and derived classes</li>
</ul>
<h3>Constructors</h3>
<pre><code>class Circle {
    double radius;
public:
    Circle() : radius(1.0) {}           // Default
    Circle(double r) : radius(r) {}     // Parameterized
    double area() { return 3.14159 * radius * radius; }
};</code></pre>`,
          challenge: {
            description: 'Create a BankAccount class with private balance, public constructor(initial), deposit(amount), withdraw(amount), getBalance(). Test with operations.',
            starterCode: '#include <iostream>\nusing namespace std;\n\n// BankAccount class\n\nint main() {\n    // Create account, deposit, withdraw\n    return 0;\n}',
            expectedOutput: 'Balance: 1500\nAfter withdraw: 1200',
            hints: ['Private: double balance', 'Constructor sets initial balance', 'Methods modify/return balance']
          },
          quiz: [{ question: 'What is encapsulation?', options: ['Hiding data behind methods', 'Inheriting from parent', 'Creating multiple objects', 'Using templates'], correct: 0 }]
        },
        {
          id: 'cpp-2-15',
          title: 'Constructors and Destructors',
          type: 'lesson',
          theory: `<h2>Constructors and Destructors</h2>
<p>Constructors initialize objects when created. Destructors clean up when objects are destroyed. Together they manage object lifecycle.</p>
<h3>Constructor Types</h3>
<pre><code>class Student {
    string name;
    int age;
public:
    Student() : name("Unknown"), age(0) {}       // Default
    Student(string n, int a) : name(n), age(a) {} // Parameterized
    Student(const Student& s) : name(s.name), age(s.age) {} // Copy
};</code></pre>
<h3>Initializer Lists</h3>
<pre><code>class Point {
    const double x, y;  // Must use initializer list for const
public:
    Point(double x, double y) : x(x), y(y) {}
};</code></pre>
<h3>Destructors</h3>
<pre><code>class FileHandler {
    FILE* file;
public:
    FileHandler(string path) { file = fopen(path.c_str(), "r"); }
    ~FileHandler() {
        if (file) fclose(file);  // Cleanup on destruction
        cout &lt;&lt; "File closed" &lt;&lt; endl;
    }
};</code></pre>
<h3>When Are They Called?</h3>
<ul>
<li>Constructor: When object is created</li>
<li>Destructor: When object goes out of scope or is deleted</li>
</ul>`,
          challenge: {
            description: 'Create a Logger class whose constructor prints "Logger created" and destructor prints "Logger destroyed". Create one in a block scope to see both messages.',
            starterCode: '#include <iostream>\nusing namespace std;\n\n// Logger class\n\nint main() {\n    cout << "Before block" << endl;\n    {\n        // Create Logger here\n    }\n    cout << "After block" << endl;\n    return 0;\n}',
            expectedOutput: 'Before block\nLogger created\nLogger destroyed\nAfter block',
            hints: ['Constructor: Logger() { cout << ... }', 'Destructor: ~Logger() { cout << ... }', 'Object destroyed at end of block { }']
          },
          quiz: [{ question: 'When is a destructor called?', options: ['When object is created', 'When object goes out of scope', 'When program starts', 'Manually by programmer'], correct: 1 }]
        },
        {
          id: 'cpp-2-16',
          title: 'Inheritance',
          type: 'lesson',
          theory: `<h2>Inheritance</h2>
<p>Inheritance allows a class to inherit properties and methods from another class, promoting code reuse and establishing hierarchical relationships.</p>
<h3>Basic Inheritance</h3>
<pre><code>class Animal {
protected:
    string name;
public:
    Animal(string n) : name(n) {}
    void eat() { cout &lt;&lt; name &lt;&lt; " is eating" &lt;&lt; endl; }
};

class Dog : public Animal {
public:
    Dog(string n) : Animal(n) {}
    void bark() { cout &lt;&lt; name &lt;&lt; " says Woof!" &lt;&lt; endl; }
};

Dog rex("Rex");
rex.eat();   // Inherited
rex.bark();  // Own method</code></pre>
<h3>Access in Inheritance</h3>
<ul>
<li><strong>public:</strong> public stays public, protected stays protected</li>
<li><strong>protected members:</strong> Accessible in derived class</li>
<li><strong>private members:</strong> NOT accessible in derived class</li>
</ul>
<h3>Constructor Chaining</h3>
<pre><code>class Shape {
public:
    Shape() { cout &lt;&lt; "Shape created" &lt;&lt; endl; }
};
class Circle : public Shape {
public:
    Circle() : Shape() { cout &lt;&lt; "Circle created" &lt;&lt; endl; }
};</code></pre>`,
          challenge: {
            description: 'Create base class Shape with color property and display(). Derive Circle with radius and area(). Create a red circle with radius 5, display and print area.',
            starterCode: '#include <iostream>\nusing namespace std;\n\n// Shape and Circle classes\n\nint main() {\n    // Create circle and test\n    return 0;\n}',
            expectedOutput: 'Color: Red\nArea: 78.54',
            hints: ['class Circle : public Shape', 'Call Shape constructor from Circle', 'Area = 3.14159 * r * r']
          },
          quiz: [{ question: 'Which access specifier allows derived class access?', options: ['private', 'protected', 'friend', 'static'], correct: 1 }]
        },
        {
          id: 'cpp-2-17',
          title: 'Polymorphism',
          type: 'lesson',
          theory: `<h2>Polymorphism</h2>
<p>Polymorphism allows objects of different classes to be treated through the same interface. Virtual functions enable runtime dispatch to the correct implementation.</p>
<h3>Virtual Functions</h3>
<pre><code>class Shape {
public:
    virtual double area() { return 0; }  // Virtual!
    virtual void display() {
        cout &lt;&lt; "Shape, area: " &lt;&lt; area() &lt;&lt; endl;
    }
};

class Circle : public Shape {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() override { return 3.14159 * radius * radius; }
};

class Square : public Shape {
    double side;
public:
    Square(double s) : side(s) {}
    double area() override { return side * side; }
};</code></pre>
<h3>Using Polymorphism</h3>
<pre><code>Shape* shapes[3];
shapes[0] = new Circle(5);
shapes[1] = new Square(4);
for (int i = 0; i &lt; 2; i++) {
    shapes[i]->display();  // Calls correct version!
    delete shapes[i];
}</code></pre>
<h3>Pure Virtual (Abstract)</h3>
<pre><code>class Shape {
public:
    virtual double area() = 0;  // MUST be overridden
};</code></pre>`,
          challenge: {
            description: 'Create abstract Shape with pure virtual area(). Derive Circle(r) and Rectangle(w,h). Store in Shape pointers, call area() on each.',
            starterCode: '#include <iostream>\nusing namespace std;\n\n// Polymorphic shapes\n\nint main() {\n    // Create and use polymorphically\n    return 0;\n}',
            expectedOutput: 'Circle area: 78.54\nRectangle area: 20',
            hints: ['virtual double area() = 0 for pure virtual', 'Use Shape* ptr = new Circle(5)', 'ptr->area() dispatches correctly']
          },
          quiz: [{ question: 'What does virtual enable?', options: ['Static binding', 'Runtime polymorphism', 'Multiple inheritance', 'Operator overloading'], correct: 1 }]
        },
        {
          id: 'cpp-2-18',
          title: 'Operator Overloading',
          type: 'lesson',
          theory: `<h2>Operator Overloading</h2>
<p>C++ lets you define custom behavior for operators when used with your classes, making objects work intuitively with +, -, ==, etc.</p>
<h3>Overloading +</h3>
<pre><code>class Vector2D {
    double x, y;
public:
    Vector2D(double x, double y) : x(x), y(y) {}
    Vector2D operator+(const Vector2D& other) {
        return Vector2D(x + other.x, y + other.y);
    }
    void print() { cout &lt;&lt; "(" &lt;&lt; x &lt;&lt; ", " &lt;&lt; y &lt;&lt; ")" &lt;&lt; endl; }
};

Vector2D a(1, 2), b(3, 4);
Vector2D c = a + b;  // Uses operator+
c.print();           // (4, 6)</code></pre>
<h3>Comparison Operators</h3>
<pre><code>bool operator==(const Vector2D& other) {
    return x == other.x && y == other.y;
}
bool operator&lt;(const Vector2D& other) {
    return (x*x + y*y) &lt; (other.x*other.x + other.y*other.y);
}</code></pre>
<h3>Stream Operator</h3>
<pre><code>friend ostream& operator&lt;&lt;(ostream& os, const Vector2D& v) {
    os &lt;&lt; "(" &lt;&lt; v.x &lt;&lt; ", " &lt;&lt; v.y &lt;&lt; ")";
    return os;
}
cout &lt;&lt; a &lt;&lt; endl;  // Works now!</code></pre>`,
          challenge: {
            description: 'Create a Fraction class with numerator and denominator. Overload + to add two fractions. Add 1/2 + 1/3 and print result.',
            starterCode: '#include <iostream>\nusing namespace std;\n\n// Fraction class with operator+\n\nint main() {\n    // Add 1/2 + 1/3\n    return 0;\n}',
            expectedOutput: '1/2 + 1/3 = 5/6',
            hints: ['a/b + c/d = (a*d + c*b) / (b*d)', 'Overload operator+ returning Fraction', 'Simplify with GCD if needed']
          },
          quiz: [{ question: 'Which keyword allows non-member access to private data for operator<<?', options: ['public', 'friend', 'static', 'virtual'], correct: 1 }]
        },
        {
          id: 'cpp-2-19',
          title: 'File Input',
          type: 'lesson',
          theory: `<h2>File Input/Output</h2>
<p>C++ uses file streams from <code>&lt;fstream&gt;</code> to read from and write to files. The syntax mirrors cin/cout.</p>
<h3>Writing to Files</h3>
<pre><code>#include &lt;fstream&gt;
ofstream outFile("data.txt");
if (outFile.is_open()) {
    outFile &lt;&lt; "Hello, File!" &lt;&lt; endl;
    outFile &lt;&lt; 42 &lt;&lt; endl;
    outFile.close();
}</code></pre>
<h3>Reading from Files</h3>
<pre><code>ifstream inFile("data.txt");
string line;
if (inFile.is_open()) {
    while (getline(inFile, line)) {
        cout &lt;&lt; line &lt;&lt; endl;
    }
    inFile.close();
}</code></pre>
<h3>Reading Structured Data</h3>
<pre><code>ifstream file("scores.txt");
string name;
int score;
while (file &gt;&gt; name &gt;&gt; score) {
    cout &lt;&lt; name &lt;&lt; ": " &lt;&lt; score &lt;&lt; endl;
}</code></pre>
<h3>File Modes</h3>
<pre><code>ofstream file("log.txt", ios::app);  // Append mode
ofstream file("data.bin", ios::binary); // Binary mode</code></pre>
<h3>Error Checking</h3>
<pre><code>ifstream file("missing.txt");
if (!file) {
    cerr &lt;&lt; "Error: Cannot open file!" &lt;&lt; endl;
}</code></pre>`,
          challenge: {
            description: 'Simulate file operations: create a vector of 3 student names and scores. Write them to a "file" (use stringstream to simulate) then read and print the highest score.',
            starterCode: '#include <iostream>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Simulate file write/read\n    stringstream file;\n    file << "Alice 92" << endl;\n    file << "Bob 85" << endl;\n    file << "Charlie 97" << endl;\n    // Read and find highest\n    return 0;\n}',
            expectedOutput: 'Highest: Charlie with 97',
            hints: ['Read with file >> name >> score in loop', 'Track max score and corresponding name', 'stringstream works like file streams']
          },
          quiz: [{ question: 'Which class is used to write to files?', options: ['ifstream', 'ofstream', 'fstream', 'iostream'], correct: 1 }]
        },
        {
          id: 'cpp-2-20',
          title: 'File Output and Binary',
          type: 'lesson',
          theory: `<h2>Advanced File Operations</h2>
<p>Beyond basic text I/O, C++ supports binary files, random access, and structured data serialization.</p>
<h3>Binary Files</h3>
<pre><code>struct Record { char name[50]; int age; double salary; };

// Write binary
Record r = {"Alice", 30, 75000.0};
ofstream out("data.bin", ios::binary);
out.write(reinterpret_cast&lt;char*&gt;(&r), sizeof(Record));
out.close();

// Read binary
Record loaded;
ifstream in("data.bin", ios::binary);
in.read(reinterpret_cast&lt;char*&gt;(&loaded), sizeof(Record));
in.close();</code></pre>
<h3>Random Access</h3>
<pre><code>fstream file("data.bin", ios::in | ios::out | ios::binary);
file.seekg(sizeof(Record) * 2);  // Jump to 3rd record
file.read(...);</code></pre>
<h3>CSV Processing</h3>
<pre><code>ifstream csv("data.csv");
string line;
while (getline(csv, line)) {
    stringstream ss(line);
    string field;
    while (getline(ss, field, ',')) {
        cout &lt;&lt; field &lt;&lt; " | ";
    }
    cout &lt;&lt; endl;
}</code></pre>
<h3>Error Handling Best Practices</h3>
<pre><code>ifstream file("data.txt");
if (!file) { cerr &lt;&lt; "Open failed" &lt;&lt; endl; return 1; }
// Process file...
if (file.bad()) { cerr &lt;&lt; "Read error" &lt;&lt; endl; }</code></pre>`,
          challenge: {
            description: 'Simulate CSV parsing: given "Alice,92,A\nBob,85,B\nCharlie,78,C" in a stringstream, parse and print each record formatted.',
            starterCode: '#include <iostream>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    stringstream csv;\n    csv << "Alice,92,A" << endl;\n    csv << "Bob,85,B" << endl;\n    csv << "Charlie,78,C" << endl;\n    // Parse CSV\n    return 0;\n}',
            expectedOutput: 'Alice: 92 (Grade A)\nBob: 85 (Grade B)\nCharlie: 78 (Grade C)',
            hints: ['getline(csv, line) for each row', 'Use stringstream + getline(ss, field, comma) to split', 'Parse each field separately']
          },
          quiz: [{ question: 'What mode opens a file for both reading and writing?', options: ['ios::in', 'ios::out', 'ios::in | ios::out', 'ios::rw'], correct: 2 }]
        }
      ]
    }
  ]
};

export default course;
