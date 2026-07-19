const course = {
  id: 'java',
  title: 'Java',
  icon: '☕',
  sections: [
    {
      id: 'java-fundamentals',
      title: 'Fundamentals',
      lessons: [
        {
          id: 'java-1-1',
          title: 'What is Java?',
          type: 'lesson',
          theory: `<h2>Welcome to Java! ☕</h2>
<p>Java is a powerful, object-oriented programming language created by James Gosling at Sun Microsystems in 1995. Its philosophy of <strong>"Write Once, Run Anywhere"</strong> (WORA) makes it one of the most versatile languages in the world.</p>
<h3>Why Learn Java?</h3>
<ul>
<li><strong>Platform Independent:</strong> Runs on any device with a JVM (Java Virtual Machine)</li>
<li><strong>Enterprise Standard:</strong> Powers banks, healthcare, e-commerce systems</li>
<li><strong>Android Development:</strong> Primary language for Android apps</li>
<li><strong>Massive Ecosystem:</strong> Thousands of libraries and frameworks</li>
<li><strong>Job Market:</strong> Consistently top-3 in demand worldwide</li>
</ul>
<h3>How Java Works</h3>
<pre><code>Source (.java) → Compiler (javac) → Bytecode (.class) → JVM → Execution</code></pre>
<p>Java compiles to bytecode (not machine code), which runs on the JVM. This is why Java programs work on any platform — the JVM handles platform differences.</p>
<h3>Hello World</h3>
<pre><code>public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}</code></pre>
<p>Every Java program needs a class and a main method as its entry point.</p>`,
          challenge: {
            description: 'Write a Java program that prints "Hello, Java!" to the console.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Print Hello, Java!\n    }\n}',
            expectedOutput: 'Hello, Java!',
            hints: ['Use System.out.println("text")', 'println adds a newline automatically', 'Strings use double quotes']
          },
          quiz: [{ question: 'Who created Java?', options: ['Dennis Ritchie', 'James Gosling', 'Bjarne Stroustrup', 'Guido van Rossum'], correct: 1 }]
        },
        {
          id: 'java-1-2',
          title: 'Java Program Structure',
          type: 'lesson',
          theory: `<h2>Java Program Structure</h2>
<p>Java has a strict structure: everything lives inside a class, and the program starts in the <code>main</code> method. Understanding this structure is essential.</p>
<h3>Anatomy of a Java Program</h3>
<pre><code>// Package declaration (optional)
package com.example;

// Import statements
import java.util.Scanner;

// Class declaration
public class Main {
    // Main method — entry point
    public static void main(String[] args) {
        System.out.println("Hello!");
    }
}</code></pre>
<h3>Key Rules</h3>
<ul>
<li>File name MUST match the public class name (Main.java for class Main)</li>
<li>Every statement ends with a semicolon (;)</li>
<li>Code blocks use curly braces { }</li>
<li>Java is case-sensitive (Main ≠ main)</li>
<li>One public class per file</li>
</ul>
<h3>Output Methods</h3>
<pre><code>System.out.println("With newline");   // Adds newline
System.out.print("No newline");       // No newline
System.out.printf("Formatted: %d", 42); // C-style format</code></pre>
<h3>Comments</h3>
<pre><code>// Single line comment
/* Multi-line comment */
/** JavaDoc comment — for documentation */</code></pre>`,
          challenge: {
            description: 'Write a program that prints your name on one line and your favorite language on the next, using both print and println.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Use print and println\n    }\n}',
            expectedOutput: 'Name: Alex\nLanguage: Java',
            hints: ['System.out.println adds newline', 'System.out.print does not add newline', 'Each statement ends with ;']
          },
          quiz: [{ question: 'What must match the public class name?', options: ['Package name', 'File name', 'Method name', 'Variable name'], correct: 1 }]
        },
        {
          id: 'java-1-3',
          title: 'Compilation and JVM',
          type: 'lesson',
          theory: `<h2>Compilation and the JVM</h2>
<p>Understanding how Java compiles and runs helps debug issues and appreciate the platform independence Java provides.</p>
<h3>Compilation Process</h3>
<pre><code>javac Main.java    → produces Main.class (bytecode)
java Main          → JVM executes the bytecode</code></pre>
<h3>What is Bytecode?</h3>
<p>Bytecode is an intermediate representation — not human-readable, not machine-specific. The JVM interprets or JIT-compiles it to native code at runtime.</p>
<h3>JVM Architecture</h3>
<ul>
<li><strong>Class Loader:</strong> Loads .class files into memory</li>
<li><strong>Bytecode Verifier:</strong> Checks code safety</li>
<li><strong>JIT Compiler:</strong> Converts hot bytecode to native code for speed</li>
<li><strong>Garbage Collector:</strong> Automatically frees unused memory</li>
</ul>
<h3>Platform Independence</h3>
<p>The same .class file runs on Windows, Mac, Linux — any platform with a JVM. Different JVMs exist for different platforms, but your code stays the same.</p>
<h3>JDK vs JRE</h3>
<ul>
<li><strong>JDK (Development Kit):</strong> Compiler + tools + JRE (for developers)</li>
<li><strong>JRE (Runtime Environment):</strong> JVM + libraries (for running programs)</li>
</ul>`,
          challenge: {
            description: 'Create a program that prints information about Java: its year of creation (1995), creator (James Gosling), and the WORA principle.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Print Java info\n    }\n}',
            expectedOutput: 'Java was created in 1995\nCreator: James Gosling\nPrinciple: Write Once, Run Anywhere',
            hints: ['Use three System.out.println statements', 'Each on its own line', 'String concatenation with +']
          },
          quiz: [{ question: 'What does JVM stand for?', options: ['Java Virtual Machine', 'Java Version Manager', 'Java Variable Memory', 'Java Visual Module'], correct: 0 }]
        },
        {
          id: 'java-1-4',
          title: 'Variables and Data Types',
          type: 'lesson',
          theory: `<h2>Variables and Data Types</h2>
<p>Java is a strongly-typed language — every variable must have a declared type. Java provides 8 primitive types for basic values.</p>
<h3>Primitive Types</h3>
<ul>
<li><strong>byte:</strong> 8-bit integer (-128 to 127)</li>
<li><strong>short:</strong> 16-bit integer</li>
<li><strong>int:</strong> 32-bit integer (most common for numbers)</li>
<li><strong>long:</strong> 64-bit integer (suffix L: 100L)</li>
<li><strong>float:</strong> 32-bit decimal (suffix f: 3.14f)</li>
<li><strong>double:</strong> 64-bit decimal (default for decimals)</li>
<li><strong>char:</strong> Single character (single quotes: 'A')</li>
<li><strong>boolean:</strong> true or false</li>
</ul>
<h3>Declaration and Initialization</h3>
<pre><code>int age = 25;
double price = 19.99;
char grade = 'A';
boolean isActive = true;
String name = "Alice"; // String is a class, not primitive</code></pre>
<h3>Constants</h3>
<pre><code>final double PI = 3.14159;
final int MAX_SIZE = 100;
// PI = 3.14; // Error! final cannot be reassigned</code></pre>
<h3>Naming Conventions</h3>
<p>Variables use camelCase. Constants use UPPER_SNAKE_CASE. Classes use PascalCase.</p>`,
          challenge: {
            description: 'Declare variables: name (String) = "Alice", age (int) = 25, gpa (double) = 3.8, enrolled (boolean) = true. Print all.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Declare and print variables\n    }\n}',
            expectedOutput: 'Name: Alice\nAge: 25\nGPA: 3.8\nEnrolled: true',
            hints: ['String name = "Alice"', 'int age = 25', 'Use + for string concatenation in println']
          },
          quiz: [{ question: 'Which is NOT a primitive type in Java?', options: ['int', 'boolean', 'String', 'double'], correct: 2 }]
        },
        {
          id: 'java-1-5',
          title: 'Integer Types',
          type: 'lesson',
          theory: `<h2>Integer Types in Detail</h2>
<p>Java provides four integer types of different sizes. Choosing the right one depends on the range of values you need to store.</p>
<h3>Integer Sizes</h3>
<pre><code>byte b = 127;           // -128 to 127 (1 byte)
short s = 32000;        // -32768 to 32767 (2 bytes)
int i = 2000000000;     // ±2.1 billion (4 bytes)
long l = 9000000000L;   // Very large (8 bytes, note L suffix)</code></pre>
<h3>Integer Operations</h3>
<pre><code>int a = 17, b = 5;
System.out.println(a + b);   // 22
System.out.println(a - b);   // 12
System.out.println(a * b);   // 85
System.out.println(a / b);   // 3 (integer division!)
System.out.println(a % b);   // 2 (remainder)</code></pre>
<h3>Integer Division Warning</h3>
<pre><code>int result = 7 / 2;   // 3, not 3.5!
double correct = 7.0 / 2;  // 3.5 (one operand is double)</code></pre>
<h3>Overflow</h3>
<pre><code>int max = Integer.MAX_VALUE;  // 2147483647
System.out.println(max + 1);  // -2147483648 (overflow wraps!)</code></pre>
<h3>Useful Constants</h3>
<pre><code>Integer.MAX_VALUE  // 2147483647
Integer.MIN_VALUE  // -2147483648
Long.MAX_VALUE     // 9223372036854775807</code></pre>`,
          challenge: {
            description: 'Given totalMinutes = 135, convert to hours and remaining minutes. Print formatted result.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int totalMinutes = 135;\n        // Convert and print\n    }\n}',
            expectedOutput: '2 hours and 15 minutes',
            hints: ['hours = totalMinutes / 60', 'minutes = totalMinutes % 60', 'Integer division truncates']
          },
          quiz: [{ question: 'What is 7/2 in Java integer arithmetic?', options: ['3.5', '3', '4', '3.0'], correct: 1 }]
        },
        {
          id: 'java-1-6',
          title: 'Floating Point and char',
          type: 'lesson',
          theory: `<h2>Floating Point and Character Types</h2>
<p>Floating-point types handle decimal numbers, while char handles individual characters using Unicode.</p>
<h3>Floating Point</h3>
<pre><code>float pi = 3.14159f;   // Must use f suffix for float
double precise = 3.141592653589793;  // Default decimal type
double sci = 1.5e6;    // Scientific notation: 1500000.0</code></pre>
<h3>float vs double</h3>
<ul>
<li><strong>float:</strong> 4 bytes, ~7 significant digits — use for graphics, games</li>
<li><strong>double:</strong> 8 bytes, ~15 significant digits — use for most calculations</li>
</ul>
<h3>Character Type</h3>
<pre><code>char letter = 'A';
char digit = '7';
char unicode = '\u0041';  // Also 'A' (Unicode)
char newline = '\n';

// char is actually a number (Unicode value)
System.out.println((int)'A');  // 65
char next = (char)('A' + 1);  // 'B'</code></pre>
<h3>Type Casting</h3>
<pre><code>int x = 10;
double d = x;          // Implicit (widening) — OK
int y = (int)3.99;     // Explicit (narrowing) — 3, truncates!
double avg = (double)7 / 2;  // 3.5 (cast before division)</code></pre>`,
          challenge: {
            description: 'Calculate the area of a circle with radius 7.5 using Math.PI. Print with 2 decimal places using printf.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        double radius = 7.5;\n        // Calculate and print area\n    }\n}',
            expectedOutput: 'Area: 176.71',
            hints: ['area = Math.PI * radius * radius', 'System.out.printf("Area: %.2f", area)', 'printf formats with %f for doubles']
          },
          quiz: [{ question: 'What suffix marks a float literal?', options: ['d', 'f', 'l', 'F or f'], correct: 3 }]
        },
        {
          id: 'java-1-7',
          title: 'Strings in Java',
          type: 'lesson',
          theory: `<h2>Strings in Java</h2>
<p>String is a class in Java (not a primitive). Strings are <strong>immutable</strong> — once created, they cannot be changed. Operations create new String objects.</p>
<h3>Creating Strings</h3>
<pre><code>String s1 = "Hello";              // String literal
String s2 = new String("Hello");  // Using constructor
String s3 = s1 + " World";       // Concatenation</code></pre>
<h3>String Methods</h3>
<pre><code>String text = "Hello World";
text.length();          // 11
text.charAt(0);         // 'H'
text.toUpperCase();     // "HELLO WORLD"
text.toLowerCase();     // "hello world"
text.substring(6);      // "World"
text.substring(0, 5);   // "Hello"
text.contains("World"); // true
text.indexOf("World");  // 6
text.replace("World", "Java"); // "Hello Java"
text.trim();            // Removes leading/trailing spaces</code></pre>
<h3>String Comparison</h3>
<pre><code>String a = "Hello";
String b = "Hello";
a == b;         // May be true (same literal pool) — UNRELIABLE
a.equals(b);    // true — ALWAYS use .equals() for strings!
a.equalsIgnoreCase("hello"); // true</code></pre>
<h3>String Immutability</h3>
<pre><code>String s = "Hello";
s.toUpperCase();     // Returns "HELLO" but s is still "Hello"!
s = s.toUpperCase(); // Now s is "HELLO" (reassigned reference)</code></pre>`,
          challenge: {
            description: 'Given String message = "  Hello, Java World!  ", trim it, get its length, convert to uppercase, and check if it contains "JAVA". Print all results.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        String message = "  Hello, Java World!  ";\n        // Process and print\n    }\n}',
            expectedOutput: 'Trimmed: Hello, Java World!\nLength: 18\nUpper: HELLO, JAVA WORLD!\nContains JAVA: true',
            hints: ['Chain: message.trim()', '.length() for length', '.toUpperCase() then .contains("JAVA")']
          },
          quiz: [{ question: 'How should you compare strings in Java?', options: ['== operator', '.equals() method', '.compare() method', '=== operator'], correct: 1 }]
        },
        {
          id: 'java-1-8',
          title: 'Type Conversion',
          type: 'lesson',
          theory: `<h2>Type Conversion in Java</h2>
<p>Java performs automatic widening conversions (safe) but requires explicit casting for narrowing conversions (potentially lossy).</p>
<h3>Widening (Automatic)</h3>
<pre><code>byte → short → int → long → float → double
int x = 100;
long l = x;      // int to long — automatic
double d = x;    // int to double — automatic</code></pre>
<h3>Narrowing (Explicit Cast)</h3>
<pre><code>double pi = 3.14159;
int truncated = (int)pi;  // 3 — decimal lost!
long big = 100L;
int small = (int)big;     // OK if value fits</code></pre>
<h3>String Conversions</h3>
<pre><code>// Number to String
String s1 = String.valueOf(42);
String s2 = Integer.toString(42);
String s3 = "" + 42;  // Concatenation trick

// String to Number
int n = Integer.parseInt("42");
double d = Double.parseDouble("3.14");
long l = Long.parseLong("1000000");</code></pre>
<h3>Common Pitfalls</h3>
<pre><code>// NumberFormatException if string is not a valid number!
int bad = Integer.parseInt("hello"); // Runtime error!

// Integer overflow
byte b = (byte)200; // Wraps: -56 (overflow)</code></pre>`,
          challenge: {
            description: 'Convert: int 42 to String, String "3.14" to double, double 9.99 to int. Print each conversion result.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Type conversions\n    }\n}',
            expectedOutput: 'Int to String: 42\nString to Double: 3.14\nDouble to Int: 9',
            hints: ['String.valueOf(42)', 'Double.parseDouble("3.14")', '(int)9.99 truncates to 9']
          },
          quiz: [{ question: 'What method converts String to int?', options: ['String.toInt()', 'Integer.parseInt()', 'Int.parse()', 'Integer.valueOf()'], correct: 1 }]
        },
        {
          id: 'java-1-9',
          title: 'Arithmetic Operators',
          type: 'lesson',
          theory: `<h2>Arithmetic Operators</h2>
<p>Java provides standard arithmetic operators plus compound assignment operators for concise calculations.</p>
<h3>Basic Operators</h3>
<pre><code>int a = 10, b = 3;
System.out.println(a + b);  // 13
System.out.println(a - b);  // 7
System.out.println(a * b);  // 30
System.out.println(a / b);  // 3 (integer division)
System.out.println(a % b);  // 1 (remainder)</code></pre>
<h3>Increment/Decrement</h3>
<pre><code>int x = 5;
x++;  // 6 (post-increment)
++x;  // 7 (pre-increment)
x--;  // 6 (post-decrement)</code></pre>
<h3>Compound Assignment</h3>
<pre><code>int val = 10;
val += 5;  // 15
val -= 3;  // 12
val *= 2;  // 24
val /= 4;  // 6
val %= 4;  // 2</code></pre>
<h3>Math Class</h3>
<pre><code>Math.abs(-5);       // 5
Math.max(10, 20);   // 20
Math.min(10, 20);   // 10
Math.pow(2, 10);    // 1024.0
Math.sqrt(16);      // 4.0
Math.round(3.7);    // 4</code></pre>`,
          challenge: {
            description: 'Calculate: power of 2^8 using Math.pow, square root of 144, and absolute value of -42. Print each.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Math operations\n    }\n}',
            expectedOutput: '2^8 = 256\nsqrt(144) = 12\nabs(-42) = 42',
            hints: ['Math.pow(2, 8) returns double', 'Math.sqrt(144)', 'Math.abs(-42)', 'Cast to int if needed: (int)Math.pow(2,8)']
          },
          quiz: [{ question: 'What does Math.pow(2, 10) return?', options: ['20', '1024', '1024.0', '210'], correct: 2 }]
        },
        {
          id: 'java-1-10',
          title: 'Comparison and Logical',
          type: 'lesson',
          theory: `<h2>Comparison and Logical Operators</h2>
<p>These operators produce boolean results and are essential for conditional logic and loop control.</p>
<h3>Comparison Operators</h3>
<pre><code>int a = 10, b = 20;
a == b   // false (equal to)
a != b   // true  (not equal)
a < b    // true  (less than)
a > b    // false (greater than)
a <= b   // true  (less or equal)
a >= b   // false (greater or equal)</code></pre>
<h3>Logical Operators</h3>
<pre><code>boolean x = true, y = false;
x && y   // false (AND — both must be true)
x || y   // true  (OR — at least one true)
!x       // false (NOT — inverts)</code></pre>
<h3>Short-Circuit Evaluation</h3>
<pre><code>// && stops if first is false
// || stops if first is true
if (list != null && list.size() > 0) { ... }
// Safe! If list is null, size() is never called</code></pre>
<h3>Ternary Operator</h3>
<pre><code>int age = 20;
String status = (age >= 18) ? "Adult" : "Minor";
System.out.println(status);  // "Adult"</code></pre>`,
          challenge: {
            description: 'Given int score = 75 and boolean hasBonus = true, use ternary to add 5 if bonus, then check if passing (>= 70). Print final score and pass/fail.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int score = 75;\n        boolean hasBonus = true;\n        // Calculate and check\n    }\n}',
            expectedOutput: 'Final score: 80\nResult: Pass',
            hints: ['Ternary: score + (hasBonus ? 5 : 0)', 'Another ternary for Pass/Fail', 'finalScore >= 70 for passing']
          },
          quiz: [{ question: 'What is short-circuit evaluation?', options: ['Faster math', 'Stopping evaluation when result is determined', 'A compiler optimization', 'Using shorter variable names'], correct: 1 }]
        },
        {
          id: 'java-1-11',
          title: 'Bitwise Operators',
          type: 'lesson',
          theory: `<h2>Bitwise Operators</h2>
<p>Bitwise operators work on individual bits and are used for flags, permissions, low-level optimization, and embedded programming.</p>
<h3>Operators</h3>
<pre><code>int a = 5;  // 0101
int b = 3;  // 0011
a & b   // 1 (AND: 0001)
a | b   // 7 (OR:  0111)
a ^ b   // 6 (XOR: 0110)
~a      // -6 (NOT: inverts all)
a << 1  // 10 (left shift — multiply by 2)
a >> 1  // 2  (right shift — divide by 2)</code></pre>
<h3>Practical Uses</h3>
<pre><code>// Check even/odd
if ((num & 1) == 0) System.out.println("Even");

// Permission flags
int READ = 4, WRITE = 2, EXEC = 1;
int perms = READ | WRITE;  // 6 = read + write
boolean canRead = (perms & READ) != 0;  // true</code></pre>
<h3>Bit Shifting</h3>
<pre><code>int x = 8;
x << 1  // 16 (multiply by 2)
x << 2  // 32 (multiply by 4)
x >> 1  // 4  (divide by 2)
x >>> 1 // 4  (unsigned right shift)</code></pre>`,
          challenge: {
            description: 'Given num = 12: check if even using bitwise AND, double using left shift, halve using right shift. Print all results.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int num = 12;\n        // Bitwise operations\n    }\n}',
            expectedOutput: 'Is even: true\nDoubled: 24\nHalved: 6',
            hints: ['(num & 1) == 0 for even check', 'num << 1 doubles', 'num >> 1 halves']
          },
          quiz: [{ question: 'What does << 1 do to a number?', options: ['Adds 1', 'Multiplies by 2', 'Divides by 2', 'Squares it'], correct: 1 }]
        },
        {
          id: 'java-1-12',
          title: 'String Formatting',
          type: 'lesson',
          theory: `<h2>String Formatting</h2>
<p>Java provides multiple ways to format strings for display — printf, String.format, and string concatenation.</p>
<h3>printf (Formatted Print)</h3>
<pre><code>System.out.printf("Name: %s, Age: %d%n", "Alice", 25);
System.out.printf("Price: $%.2f%n", 19.99);
System.out.printf("Hex: %x, Oct: %o%n", 255, 255);</code></pre>
<h3>Format Specifiers</h3>
<ul>
<li><code>%d</code> — integer</li>
<li><code>%f</code> — floating point (%.2f for 2 decimals)</li>
<li><code>%s</code> — string</li>
<li><code>%c</code> — character</li>
<li><code>%b</code> — boolean</li>
<li><code>%n</code> — platform-specific newline</li>
</ul>
<h3>String.format()</h3>
<pre><code>String result = String.format("Score: %d/100", 85);
System.out.println(result);  // "Score: 85/100"</code></pre>
<h3>Width and Alignment</h3>
<pre><code>System.out.printf("%10s|%n", "right");  //      right|
System.out.printf("%-10s|%n", "left");   // left      |
System.out.printf("%05d%n", 42);         // 00042</code></pre>`,
          challenge: {
            description: 'Print a formatted receipt: item "Coffee" ($3.50), item "Cake" ($5.75), total with 2 decimal places. Use printf for alignment.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Formatted receipt\n    }\n}',
            expectedOutput: 'Coffee    $3.50\nCake      $5.75\nTotal:    $9.25',
            hints: ['printf("%-10s$%.2f%n", name, price)', 'Left-align names with %-10s', 'Calculate total = 3.50 + 5.75']
          },
          quiz: [{ question: 'What format specifier shows 2 decimal places?', options: ['%2f', '%.2f', '%f2', '%2.f'], correct: 1 }]
        },
        {
          id: 'java-1-13',
          title: 'If-Else Statements',
          type: 'lesson',
          theory: `<h2>If-Else Statements</h2>
<p>Conditional statements control program flow based on boolean expressions. Java supports if, else if, else chains, and nested conditions.</p>
<h3>Basic if-else</h3>
<pre><code>int age = 20;
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}</code></pre>
<h3>if-else if-else Chain</h3>
<pre><code>int score = 85;
if (score >= 90) System.out.println("A");
else if (score >= 80) System.out.println("B");
else if (score >= 70) System.out.println("C");
else System.out.println("F");</code></pre>
<h3>Nested if</h3>
<pre><code>if (age >= 18) {
    if (hasLicense) {
        System.out.println("Can drive");
    }
}</code></pre>
<h3>Ternary Operator</h3>
<pre><code>String result = (x > 0) ? "positive" : "non-positive";</code></pre>`,
          challenge: {
            description: 'Write a grade calculator: score = 72. Print letter grade (A:90+, B:80+, C:70+, D:60+, F:below 60).',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int score = 72;\n        // Grade calculation\n    }\n}',
            expectedOutput: 'Grade: C',
            hints: ['Use if-else if chain', 'Check highest range first', 'Only one branch executes']
          },
          quiz: [{ question: 'What is the ternary operator syntax?', options: ['if ? then : else', 'condition ? trueVal : falseVal', 'test -> result', 'cond : v1 | v2'], correct: 1 }]
        },
        {
          id: 'java-1-14',
          title: 'Switch Statement',
          type: 'lesson',
          theory: `<h2>Switch Statement</h2>
<p>Switch provides a clean alternative to long if-else chains when comparing against specific values. Java supports switching on int, char, String, and enum types.</p>
<h3>Basic Switch</h3>
<pre><code>int day = 3;
switch (day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    case 3: System.out.println("Wednesday"); break;
    default: System.out.println("Other day"); break;
}</code></pre>
<h3>Switch on Strings (Java 7+)</h3>
<pre><code>String command = "start";
switch (command) {
    case "start": System.out.println("Starting..."); break;
    case "stop": System.out.println("Stopping..."); break;
    default: System.out.println("Unknown command");
}</code></pre>
<h3>Fall-Through</h3>
<pre><code>switch (grade) {
    case 'A': case 'B':
        System.out.println("Excellent"); break;
    case 'C':
        System.out.println("Good"); break;
    default:
        System.out.println("Needs improvement");
}</code></pre>
<h3>Enhanced Switch (Java 14+)</h3>
<pre><code>String result = switch (day) {
    case 1, 7 -> "Weekend";
    case 2, 3, 4, 5, 6 -> "Weekday";
    default -> "Invalid";
};</code></pre>`,
          challenge: {
            description: 'Write a switch for month number 4 that prints the season (Spring: 3-5, Summer: 6-8, Autumn: 9-11, Winter: 12,1,2).',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int month = 4;\n        // Season switch\n    }\n}',
            expectedOutput: 'April is in Spring',
            hints: ['Use fall-through: case 3: case 4: case 5:', 'Remember break after each group', 'default for invalid months']
          },
          quiz: [{ question: 'Can Java switch on String values?', options: ['No, only integers', 'Yes, since Java 7', 'Only with equals()', 'No, only char'], correct: 1 }]
        },
        {
          id: 'java-1-15',
          title: 'While and Do-While Loops',
          type: 'lesson',
          theory: `<h2>While and Do-While Loops</h2>
<p>While loops repeat code as long as a condition is true. Do-while guarantees at least one execution.</p>
<h3>While Loop</h3>
<pre><code>int count = 1;
while (count <= 5) {
    System.out.println(count);
    count++;
}
// Prints: 1 2 3 4 5</code></pre>
<h3>Do-While Loop</h3>
<pre><code>int input;
do {
    input = getInput(); // Executes at least once
} while (input <= 0);   // Repeats if invalid</code></pre>
<h3>Accumulator Pattern</h3>
<pre><code>int sum = 0, i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
System.out.println("Sum: " + sum);  // 5050</code></pre>
<h3>Sentinel Loop</h3>
<pre><code>int total = 0;
int value = getNext();
while (value != -1) {  // -1 is sentinel
    total += value;
    value = getNext();
}</code></pre>`,
          challenge: {
            description: 'Use a while loop to find the first power of 2 greater than 1000. Print the power and the value.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Find first power of 2 > 1000\n    }\n}',
            expectedOutput: '2^10 = 1024',
            hints: ['Start with value = 1, power = 0', 'Multiply by 2 each iteration', 'Loop while value <= 1000']
          },
          quiz: [{ question: 'When does do-while check its condition?', options: ['Before first execution', 'After each execution', 'Only once', 'Never'], correct: 1 }]
        },
        {
          id: 'java-1-16',
          title: 'For Loops',
          type: 'lesson',
          theory: `<h2>For Loops</h2>
<p>The for loop is Java's most common loop. It combines initialization, condition, and increment in one line for clean, predictable iteration.</p>
<h3>Basic For Loop</h3>
<pre><code>for (int i = 0; i < 5; i++) {
    System.out.print(i + " ");  // 0 1 2 3 4
}</code></pre>
<h3>Counting Patterns</h3>
<pre><code>// Count down
for (int i = 10; i >= 1; i--) { ... }
// Step by 2
for (int i = 0; i <= 20; i += 2) { ... }
// Step by 3
for (int i = 0; i < 30; i += 3) { ... }</code></pre>
<h3>Nested Loops</h3>
<pre><code>for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 4; j++) {
        System.out.print("* ");
    }
    System.out.println();
}</code></pre>
<h3>break and continue</h3>
<pre><code>for (int i = 1; i <= 10; i++) {
    if (i == 5) continue;  // Skip 5
    if (i == 8) break;     // Stop at 8
    System.out.print(i + " ");  // 1 2 3 4 6 7
}</code></pre>
<h3>Enhanced For (for-each)</h3>
<pre><code>int[] nums = {1, 2, 3, 4, 5};
for (int n : nums) {
    System.out.print(n + " ");
}</code></pre>`,
          challenge: {
            description: 'Print the multiplication table for 7 (7x1=7 through 7x5=35) using a for loop.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // 7 times table\n    }\n}',
            expectedOutput: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35',
            hints: ['for (int i = 1; i <= 5; i++)', 'Print 7 * i each iteration', 'Format: "7 x " + i + " = " + (7*i)']
          },
          quiz: [{ question: 'What are the three parts of a for loop?', options: ['start, end, step', 'init, condition, update', 'begin, while, next', 'from, to, by'], correct: 1 }]
        },
        {
          id: 'java-1-17',
          title: 'Loop Control and Patterns',
          type: 'lesson',
          theory: `<h2>Loop Control and Patterns</h2>
<p>Mastering loop control flow with break, continue, labels, and common algorithmic patterns.</p>
<h3>Labeled Breaks (Nested Loops)</h3>
<pre><code>outer:
for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 5; j++) {
        if (i * j > 6) break outer; // Breaks BOTH loops
        System.out.print(i*j + " ");
    }
}</code></pre>
<h3>Accumulator Pattern</h3>
<pre><code>int factorial = 1;
for (int i = 1; i <= 5; i++) {
    factorial *= i;
}
// factorial = 120</code></pre>
<h3>Search Pattern</h3>
<pre><code>int[] data = {4, 7, 2, 9, 1};
int target = 9;
boolean found = false;
for (int i = 0; i < data.length; i++) {
    if (data[i] == target) { found = true; break; }
}</code></pre>
<h3>Counter Pattern</h3>
<pre><code>String text = "hello world";
int vowels = 0;
for (char c : text.toCharArray()) {
    if ("aeiou".indexOf(c) != -1) vowels++;
}</code></pre>`,
          challenge: {
            description: 'Count how many numbers between 1-50 are divisible by both 3 and 5 (i.e., by 15). Print the count and the numbers.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Find numbers divisible by 3 AND 5\n    }\n}',
            expectedOutput: 'Numbers: 15 30 45\nCount: 3',
            hints: ['Divisible by both 3 and 5 means % 15 == 0', 'Use a counter variable', 'Build output string in loop']
          },
          quiz: [{ question: 'What does a labeled break do?', options: ['Breaks current loop', 'Breaks the labeled outer loop', 'Ends the program', 'Skips iteration'], correct: 1 }]
        },
        {
          id: 'java-1-18',
          title: 'Methods Basics',
          type: 'lesson',
          theory: `<h2>Methods in Java</h2>
<p>Methods are blocks of reusable code that perform specific tasks. In Java, all methods must belong to a class.</p>
<h3>Method Syntax</h3>
<pre><code>accessModifier returnType methodName(parameters) {
    // body
    return value; // if not void
}

public static int add(int a, int b) {
    return a + b;
}

public static void greet(String name) {
    System.out.println("Hello, " + name + "!");
}</code></pre>
<h3>Calling Methods</h3>
<pre><code>int sum = add(3, 5);     // 8
greet("Alice");           // Hello, Alice!</code></pre>
<h3>void Methods</h3>
<pre><code>public static void printLine() {
    System.out.println("----------");
    // No return needed
}</code></pre>
<h3>Return Values</h3>
<pre><code>public static boolean isEven(int n) {
    return n % 2 == 0;
}

public static double average(int a, int b, int c) {
    return (a + b + c) / 3.0;
}</code></pre>
<h3>Static Methods</h3>
<p>Methods marked <code>static</code> belong to the class, not an instance. They can be called directly from main without creating an object.</p>`,
          challenge: {
            description: 'Write methods: max(int a, int b) returning the larger, and isPositive(int n) returning boolean. Test with max(10, 25) and isPositive(-5).',
            starterCode: 'public class Main {\n    // Define methods here\n\n    public static void main(String[] args) {\n        // Test methods\n    }\n}',
            expectedOutput: 'Max of 10 and 25: 25\n-5 is positive: false',
            hints: ['public static int max(int a, int b)', 'Use ternary or if-else for max', 'return n > 0 for isPositive']
          },
          quiz: [{ question: 'What does void mean as return type?', options: ['Returns null', 'Returns 0', 'Returns nothing', 'Returns empty'], correct: 2 }]
        },
        {
          id: 'java-1-19',
          title: 'Method Overloading',
          type: 'lesson',
          theory: `<h2>Method Overloading</h2>
<p>Java allows multiple methods with the same name but different parameter lists. The compiler picks the correct version based on arguments.</p>
<h3>Overloading Examples</h3>
<pre><code>public static int add(int a, int b) { return a + b; }
public static double add(double a, double b) { return a + b; }
public static int add(int a, int b, int c) { return a + b + c; }

System.out.println(add(3, 5));       // int version: 8
System.out.println(add(3.1, 2.4));   // double version: 5.5
System.out.println(add(1, 2, 3));    // three-param version: 6</code></pre>
<h3>Rules</h3>
<ul>
<li>Must differ in parameter types or count</li>
<li>Return type alone is NOT enough to distinguish</li>
<li>Exact match is preferred over promotion</li>
</ul>
<h3>Varargs (Variable Arguments)</h3>
<pre><code>public static int sum(int... numbers) {
    int total = 0;
    for (int n : numbers) total += n;
    return total;
}
sum(1, 2);         // 3
sum(1, 2, 3, 4);   // 10
sum();             // 0</code></pre>`,
          challenge: {
            description: 'Create overloaded area methods: area(int side) for square, area(int w, int h) for rectangle, area(double r) for circle. Test all.',
            starterCode: 'public class Main {\n    // Overloaded area methods\n\n    public static void main(String[] args) {\n        // Test all three\n    }\n}',
            expectedOutput: 'Square: 25\nRectangle: 24\nCircle: 78.54',
            hints: ['Same name, different parameters', 'Use Math.PI for circle', 'printf with %.2f for circle area']
          },
          quiz: [{ question: 'What differentiates overloaded methods?', options: ['Return type', 'Method name', 'Parameter list', 'Access modifier'], correct: 2 }]
        },
        {
          id: 'java-1-20',
          title: 'Recursion',
          type: 'lesson',
          theory: `<h2>Recursion in Java</h2>
<p>A recursive method calls itself to solve a problem by breaking it into smaller sub-problems until reaching a base case.</p>
<h3>Factorial</h3>
<pre><code>public static int factorial(int n) {
    if (n <= 1) return 1;         // Base case
    return n * factorial(n - 1);  // Recursive case
}
// factorial(5) = 5*4*3*2*1 = 120</code></pre>
<h3>Fibonacci</h3>
<pre><code>public static int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}</code></pre>
<h3>Power</h3>
<pre><code>public static int power(int base, int exp) {
    if (exp == 0) return 1;
    return base * power(base, exp - 1);
}</code></pre>
<h3>Key Principles</h3>
<ul>
<li><strong>Base case:</strong> Condition that stops recursion</li>
<li><strong>Recursive case:</strong> Calls itself with smaller input</li>
<li><strong>Progress:</strong> Each call must move toward base case</li>
</ul>
<h3>Stack Overflow</h3>
<p>Without proper base case, recursion never ends, filling the call stack until StackOverflowError.</p>`,
          challenge: {
            description: 'Write a recursive method sumDigits(int n) that returns the sum of digits. Test with 12345 (should be 15).',
            starterCode: 'public class Main {\n    public static int sumDigits(int n) {\n        // Recursive digit sum\n    }\n\n    public static void main(String[] args) {\n        System.out.println("Sum of digits of 12345: " + sumDigits(12345));\n    }\n}',
            expectedOutput: 'Sum of digits of 12345: 15',
            hints: ['Base case: n < 10, return n', 'Recursive: n%10 + sumDigits(n/10)', 'n%10 gets last digit, n/10 removes it']
          },
          quiz: [{ question: 'What stops recursion?', options: ['return statement', 'Base case condition', 'Stack overflow', 'The compiler'], correct: 1 }]
        },
        {
          id: 'java-1-21',
          title: 'Scope and Static',
          type: 'lesson',
          theory: `<h2>Variable Scope and Static Context</h2>
<p>Scope determines where a variable is accessible. Understanding static vs instance context is key to Java programming.</p>
<h3>Local Scope</h3>
<pre><code>public static void example() {
    int x = 10; // Only accessible in this method
}
// x is not accessible here</code></pre>
<h3>Block Scope</h3>
<pre><code>if (true) {
    int y = 20; // Only in this block
}
// y is not accessible here</code></pre>
<h3>Class (Static) Variables</h3>
<pre><code>public class Counter {
    static int count = 0; // Shared by all instances
    
    public static void increment() {
        count++;
    }
}</code></pre>
<h3>Instance vs Static</h3>
<pre><code>public class Dog {
    static int totalDogs = 0;  // Class-level (shared)
    String name;               // Instance-level (per object)
    
    Dog(String name) {
        this.name = name;
        totalDogs++;
    }
}</code></pre>
<h3>Static Methods</h3>
<ul>
<li>Can access only static members</li>
<li>Cannot use <code>this</code></li>
<li>Called on the class: <code>ClassName.method()</code></li>
</ul>`,
          challenge: {
            description: 'Create a static counter variable. Write a method that increments it. Call it 3 times and print the count each time.',
            starterCode: 'public class Main {\n    static int counter = 0;\n\n    public static void increment() {\n        counter++;\n        System.out.println("Count: " + counter);\n    }\n\n    public static void main(String[] args) {\n        increment();\n        increment();\n        increment();\n    }\n}',
            expectedOutput: 'Count: 1\nCount: 2\nCount: 3',
            hints: ['Static variables persist between calls', 'counter++ modifies the shared variable', 'Each call sees the updated value']
          },
          quiz: [{ question: 'What does static mean for a variable?', options: ['Cannot change', 'Shared by all instances', 'Local to method', 'Allocated on heap'], correct: 1 }]
        },
        {
          id: 'java-1-22',
          title: 'Arrays Declaration',
          type: 'lesson',
          theory: `<h2>Arrays in Java</h2>
<p>Arrays store fixed-size collections of elements of the same type. They are objects in Java with a length property.</p>
<h3>Declaration and Initialization</h3>
<pre><code>int[] numbers = new int[5];          // Size 5, all zeros
int[] primes = {2, 3, 5, 7, 11};    // Initialize with values
String[] names = {"Alice", "Bob"};   // String array
double[] scores = new double[3];     // Size 3, all 0.0</code></pre>
<h3>Accessing Elements</h3>
<pre><code>int[] arr = {10, 20, 30, 40, 50};
System.out.println(arr[0]);  // 10 (first)
System.out.println(arr[4]);  // 50 (last)
arr[2] = 99;                 // Modify
System.out.println(arr.length); // 5</code></pre>
<h3>Iterating</h3>
<pre><code>// For loop
for (int i = 0; i < arr.length; i++) {
    System.out.print(arr[i] + " ");
}

// Enhanced for (for-each)
for (int num : arr) {
    System.out.print(num + " ");
}</code></pre>
<h3>Common Pitfalls</h3>
<ul>
<li>ArrayIndexOutOfBoundsException if index >= length or < 0</li>
<li>Arrays cannot be resized after creation</li>
<li>Default values: 0 for numbers, false for boolean, null for objects</li>
</ul>`,
          challenge: {
            description: 'Create int array {4, 8, 15, 16, 23, 42}. Find and print the sum and the maximum value.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {4, 8, 15, 16, 23, 42};\n        // Find sum and max\n    }\n}',
            expectedOutput: 'Sum: 108\nMax: 42',
            hints: ['Loop through array with for-each', 'Accumulate sum', 'Track max with comparison']
          },
          quiz: [{ question: 'What is the index of the first element?', options: ['1', '0', '-1', 'Depends on type'], correct: 1 }]
        },
        {
          id: 'java-1-23',
          title: 'Array Operations',
          type: 'lesson',
          theory: `<h2>Array Operations</h2>
<p>Common array operations: searching, sorting, copying, and using the Arrays utility class.</p>
<h3>Arrays Utility Class</h3>
<pre><code>import java.util.Arrays;

int[] arr = {5, 2, 8, 1, 9};
Arrays.sort(arr);           // [1, 2, 5, 8, 9]
Arrays.fill(arr, 0);        // [0, 0, 0, 0, 0]
int[] copy = Arrays.copyOf(arr, arr.length);
System.out.println(Arrays.toString(arr)); // [1, 2, 5, 8, 9]</code></pre>
<h3>Linear Search</h3>
<pre><code>public static int search(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}</code></pre>
<h3>Binary Search (Sorted Arrays)</h3>
<pre><code>int[] sorted = {1, 3, 5, 7, 9, 11};
int index = Arrays.binarySearch(sorted, 7); // 3</code></pre>
<h3>Passing Arrays to Methods</h3>
<pre><code>public static double average(int[] arr) {
    int sum = 0;
    for (int n : arr) sum += n;
    return (double) sum / arr.length;
}</code></pre>
<h3>Returning Arrays</h3>
<pre><code>public static int[] reverse(int[] arr) {
    int[] result = new int[arr.length];
    for (int i = 0; i < arr.length; i++) {
        result[i] = arr[arr.length - 1 - i];
    }
    return result;
}</code></pre>`,
          challenge: {
            description: 'Create array {5, 2, 8, 1, 9, 3}. Sort it, print sorted version, then binary search for 8 and print its index.',
            starterCode: 'import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 1, 9, 3};\n        // Sort, print, search\n    }\n}',
            expectedOutput: 'Sorted: [1, 2, 3, 5, 8, 9]\nIndex of 8: 4',
            hints: ['Arrays.sort(arr) sorts in place', 'Arrays.toString(arr) for printing', 'Arrays.binarySearch(arr, 8) after sorting']
          },
          quiz: [{ question: 'What must be true before binary search?', options: ['Array must be large', 'Array must be sorted', 'Array must have unique values', 'Array must be of objects'], correct: 1 }]
        },
        {
          id: 'java-1-24',
          title: '2D Arrays',
          type: 'lesson',
          theory: `<h2>2D Arrays (Matrices)</h2>
<p>2D arrays represent tables, grids, and matrices. They are arrays of arrays in Java.</p>
<h3>Declaration</h3>
<pre><code>int[][] matrix = new int[3][4]; // 3 rows, 4 columns
int[][] grid = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};</code></pre>
<h3>Accessing Elements</h3>
<pre><code>grid[0][0] = 1;  // Row 0, Col 0
grid[1][2] = 6;  // Row 1, Col 2
int rows = grid.length;       // 3
int cols = grid[0].length;    // 3</code></pre>
<h3>Iterating</h3>
<pre><code>for (int i = 0; i < grid.length; i++) {
    for (int j = 0; j < grid[i].length; j++) {
        System.out.print(grid[i][j] + " ");
    }
    System.out.println();
}</code></pre>
<h3>Jagged Arrays</h3>
<pre><code>int[][] jagged = new int[3][];
jagged[0] = new int[2];  // Row 0 has 2 columns
jagged[1] = new int[4];  // Row 1 has 4 columns
jagged[2] = new int[1];  // Row 2 has 1 column</code></pre>`,
          challenge: {
            description: 'Create a 3x3 matrix with values 1-9. Print the sum of the main diagonal (1+5+9).',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int[][] m = {{1,2,3},{4,5,6},{7,8,9}};\n        // Sum diagonal\n    }\n}',
            expectedOutput: 'Diagonal sum: 15',
            hints: ['Diagonal: m[0][0] + m[1][1] + m[2][2]', 'Or loop: m[i][i]', 'Sum elements where row == col']
          },
          quiz: [{ question: 'How do you get the number of rows in a 2D array?', options: ['matrix.rows', 'matrix.length', 'matrix.size()', 'matrix[0].length'], correct: 1 }]
        },
        {
          id: 'java-1-25',
          title: 'ArrayList',
          type: 'lesson',
          theory: `<h2>ArrayList — Dynamic Arrays</h2>
<p>ArrayList is Java's resizable array implementation. Unlike arrays, it can grow and shrink dynamically.</p>
<h3>Creating and Using</h3>
<pre><code>import java.util.ArrayList;

ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;();
names.add("Alice");
names.add("Bob");
names.add("Charlie");
System.out.println(names.size());  // 3
System.out.println(names.get(0));  // "Alice"</code></pre>
<h3>Common Methods</h3>
<pre><code>names.add("Dave");         // Add to end
names.add(1, "Eve");       // Insert at index 1
names.remove(0);           // Remove by index
names.remove("Bob");       // Remove by value
names.set(0, "Updated");   // Replace
names.contains("Alice");   // true/false
names.indexOf("Bob");      // Index or -1
names.clear();             // Remove all</code></pre>
<h3>Iterating</h3>
<pre><code>for (String name : names) {
    System.out.println(name);
}
// Or with index:
for (int i = 0; i < names.size(); i++) {
    System.out.println(i + ": " + names.get(i));
}</code></pre>
<h3>ArrayList vs Array</h3>
<ul>
<li>ArrayList: Dynamic size, objects only, many methods</li>
<li>Array: Fixed size, primitives OK, better performance</li>
</ul>`,
          challenge: {
            description: 'Create ArrayList of integers. Add 10, 20, 30, 40. Remove the element at index 1, add 50. Print the final list and size.',
            starterCode: 'import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> nums = new ArrayList<>();\n        // Operations\n    }\n}',
            expectedOutput: '[10, 30, 40, 50]\nSize: 4',
            hints: ['nums.add(value) to add', 'nums.remove(1) removes index 1', 'System.out.println(nums) prints list']
          },
          quiz: [{ question: 'Can ArrayList hold primitive types directly?', options: ['Yes', 'No, use wrapper classes (Integer, Double)', 'Only int', 'Only with casting'], correct: 1 }]
        },
        {
          id: 'java-1-26',
          title: 'String Methods',
          type: 'lesson',
          theory: `<h2>Essential String Methods</h2>
<p>Java String class provides dozens of methods for text processing. Mastering these is essential for most programming tasks.</p>
<h3>Checking Content</h3>
<pre><code>String s = "Hello, World!";
s.startsWith("Hello");   // true
s.endsWith("!");         // true
s.contains("World");     // true
s.isEmpty();             // false
s.isBlank();             // false (Java 11)</code></pre>
<h3>Extracting</h3>
<pre><code>s.charAt(0);             // 'H'
s.substring(7);          // "World!"
s.substring(7, 12);      // "World"
s.toCharArray();         // char[] array</code></pre>
<h3>Transforming</h3>
<pre><code>s.toUpperCase();         // "HELLO, WORLD!"
s.toLowerCase();         // "hello, world!"
s.trim();                // Remove whitespace
s.replace("World", "Java"); // "Hello, Java!"
s.replaceAll("[aeiou]", "*"); // Regex replace</code></pre>
<h3>Splitting and Joining</h3>
<pre><code>String csv = "apple,banana,cherry";
String[] parts = csv.split(",");  // ["apple","banana","cherry"]

String joined = String.join(" - ", parts); // "apple - banana - cherry"</code></pre>
<h3>StringBuilder (Mutable)</h3>
<pre><code>StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" World");
sb.insert(5, ",");
String result = sb.toString(); // "Hello, World"</code></pre>`,
          challenge: {
            description: 'Given "apple,banana,cherry,date", split by comma, capitalize first letter of each, join with " | ". Print result.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        String fruits = "apple,banana,cherry,date";\n        // Split, capitalize, join\n    }\n}',
            expectedOutput: 'Apple | Banana | Cherry | Date',
            hints: ['split(",") to get array', 'Capitalize: char upper + substring(1)', 'String.join(" | ", array)']
          },
          quiz: [{ question: 'Are Java Strings mutable?', options: ['Yes', 'No, they are immutable', 'Only with StringBuilder', 'Depends on final keyword'], correct: 1 }]
        },
        {
          id: 'java-1-27',
          title: 'String Comparison and Search',
          type: 'lesson',
          theory: `<h2>String Comparison and Search</h2>
<p>Comparing and searching strings correctly is critical in Java — especially understanding equals() vs ==.</p>
<h3>Equality</h3>
<pre><code>String a = "Hello";
String b = new String("Hello");
a == b;           // false! (different objects)
a.equals(b);      // true (same content)
a.equalsIgnoreCase("hello"); // true</code></pre>
<h3>Ordering</h3>
<pre><code>String x = "apple", y = "banana";
x.compareTo(y);   // negative (x comes before y)
y.compareTo(x);   // positive (y comes after x)
x.compareTo(x);   // 0 (equal)</code></pre>
<h3>Searching</h3>
<pre><code>String text = "Hello World Hello";
text.indexOf("Hello");      // 0 (first occurrence)
text.lastIndexOf("Hello");  // 12 (last occurrence)
text.indexOf("xyz");        // -1 (not found)
text.indexOf("o", 5);       // 7 (search from index 5)</code></pre>
<h3>Pattern Matching (Regex)</h3>
<pre><code>String email = "user@example.com";
email.matches(".*@.*\\..*");  // true (basic email pattern)

String num = "12345";
num.matches("\\d+");  // true (all digits)</code></pre>
<h3>Null Safety</h3>
<pre><code>String s = null;
// s.equals("test"); // NullPointerException!
"test".equals(s);    // false — safe! (literal first)</code></pre>`,
          challenge: {
            description: 'Given two strings "Java" and "java", demonstrate: == comparison, equals(), equalsIgnoreCase(), and compareTo(). Print results.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        String a = new String("Java");\n        String b = new String("java");\n        // Compare different ways\n    }\n}',
            expectedOutput: 'a == b: false\nequals: false\nequalsIgnoreCase: true\ncompareTo: -32',
            hints: ['== compares references', 'equals() compares content', 'compareTo returns int difference']
          },
          quiz: [{ question: 'Why should you use equals() instead of == for strings?', options: ['Performance', '== compares references not content', '== is deprecated', 'equals is faster'], correct: 1 }]
        },
        {
          id: 'java-1-28',
          title: 'StringBuilder',
          type: 'lesson',
          theory: `<h2>StringBuilder</h2>
<p>StringBuilder provides a mutable sequence of characters. Use it when you need to build strings efficiently, especially in loops.</p>
<h3>Why StringBuilder?</h3>
<pre><code>// BAD: Creates many String objects in loop
String result = "";
for (int i = 0; i < 1000; i++) {
    result += i + " ";  // New String each iteration!
}

// GOOD: Single mutable buffer
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i).append(" ");
}
String result = sb.toString();</code></pre>
<h3>StringBuilder Methods</h3>
<pre><code>StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");       // "Hello World"
sb.insert(5, ",");         // "Hello, World"
sb.delete(5, 6);           // "Hello World"
sb.replace(6, 11, "Java"); // "Hello Java"
sb.reverse();              // "avaJ olleH"
sb.length();               // 10
sb.charAt(0);              // 'a'</code></pre>
<h3>Method Chaining</h3>
<pre><code>String result = new StringBuilder()
    .append("Name: ")
    .append("Alice")
    .append(", Age: ")
    .append(25)
    .toString();</code></pre>
<h3>StringBuilder vs StringBuffer</h3>
<p>StringBuilder is NOT thread-safe (faster). StringBuffer IS thread-safe (slower). Use StringBuilder unless multi-threading requires StringBuffer.</p>`,
          challenge: {
            description: 'Use StringBuilder to build the string "Java is awesome!" by appending "Java", " is", " awesome", "!". Then reverse it and print both.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Build and reverse with StringBuilder\n    }\n}',
            expectedOutput: 'Original: Java is awesome!\nReversed: !emosewa si avaJ',
            hints: ['new StringBuilder() then .append() each part', '.toString() to get final String', '.reverse() reverses in place']
          },
          quiz: [{ question: 'When should you use StringBuilder over String concatenation?', options: ['Always', 'In loops or when building strings incrementally', 'Never', 'Only for single operations'], correct: 1 }]
        },
        {
          id: 'java-1-29',
          title: 'String Algorithms',
          type: 'lesson',
          theory: `<h2>String Algorithm Patterns</h2>
<p>Common string algorithms that appear in interviews and real-world applications.</p>
<h3>Reverse Words</h3>
<pre><code>public static String reverseWords(String s) {
    String[] words = s.trim().split("\\s+");
    StringBuilder sb = new StringBuilder();
    for (int i = words.length - 1; i >= 0; i--) {
        sb.append(words[i]);
        if (i > 0) sb.append(" ");
    }
    return sb.toString();
}
// "Hello World Java" → "Java World Hello"</code></pre>
<h3>Character Count</h3>
<pre><code>public static int countChar(String s, char target) {
    int count = 0;
    for (char c : s.toCharArray()) {
        if (c == target) count++;
    }
    return count;
}</code></pre>
<h3>Is Palindrome</h3>
<pre><code>public static boolean isPalindrome(String s) {
    String clean = s.toLowerCase().replaceAll("[^a-z0-9]", "");
    return clean.equals(new StringBuilder(clean).reverse().toString());
}</code></pre>
<h3>Anagram Check</h3>
<pre><code>public static boolean isAnagram(String a, String b) {
    char[] ac = a.toLowerCase().toCharArray();
    char[] bc = b.toLowerCase().toCharArray();
    Arrays.sort(ac);
    Arrays.sort(bc);
    return Arrays.equals(ac, bc);
}</code></pre>`,
          challenge: {
            description: 'Write a method that counts vowels in "Programming in Java". Print the count and the string with vowels removed.',
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        String text = "Programming in Java";\n        // Count vowels and remove them\n    }\n}',
            expectedOutput: 'Vowels: 6\nWithout vowels: Prgrmmng n Jv',
            hints: ['Check each char against "aeiouAEIOU"', 'Use replaceAll("[aeiouAEIOU]", "") to remove', 'Count in a loop']
          },
          quiz: [{ question: 'What does replaceAll use for patterns?', options: ['Exact match', 'Regular expressions', 'Wildcards', 'Glob patterns'], correct: 1 }]
        },
        {
          id: 'java-1-30',
          title: 'Methods with Arrays',
          type: 'lesson',
          theory: `<h2>Methods Working with Arrays</h2>
<p>Passing arrays to methods and returning arrays from methods are common patterns in Java programming.</p>
<h3>Passing Arrays</h3>
<pre><code>public static double average(int[] arr) {
    int sum = 0;
    for (int n : arr) sum += n;
    return (double) sum / arr.length;
}

int[] scores = {85, 92, 78, 95, 88};
System.out.println(average(scores)); // 87.6</code></pre>
<h3>Arrays are Pass-by-Reference</h3>
<pre><code>public static void doubleAll(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        arr[i] *= 2;  // Modifies original!
    }
}</code></pre>
<h3>Returning Arrays</h3>
<pre><code>public static int[] getEvenNumbers(int[] arr) {
    ArrayList&lt;Integer&gt; evens = new ArrayList&lt;&gt;();
    for (int n : arr) {
        if (n % 2 == 0) evens.add(n);
    }
    return evens.stream().mapToInt(i->i).toArray();
}</code></pre>
<h3>Common Patterns</h3>
<pre><code>// Find min/max
public static int findMax(int[] arr) {
    int max = arr[0];
    for (int n : arr) if (n > max) max = n;
    return max;
}

// Filter and count
public static int countAbove(int[] arr, int threshold) {
    int count = 0;
    for (int n : arr) if (n > threshold) count++;
    return count;
}</code></pre>`,
          challenge: {
            description: 'Write a method that takes an int array and returns a new array with only values > 10. Test with {5, 15, 3, 22, 8, 11}. Print filtered array.',
            starterCode: 'import java.util.Arrays;\n\npublic class Main {\n    // filterAbove method\n\n    public static void main(String[] args) {\n        int[] data = {5, 15, 3, 22, 8, 11};\n        // Filter and print\n    }\n}',
            expectedOutput: 'Filtered: [15, 22, 11]',
            hints: ['First count how many pass filter', 'Create result array of that size', 'Fill result with qualifying elements']
          },
          quiz: [{ question: 'Are arrays passed by value or reference in Java?', options: ['By value (copy)', 'By reference (original modified)', 'Depends on size', 'Depends on type'], correct: 1 }]
        }
      ]
    },
    {
      id: 'java-oop',
      title: 'OOP',
      lessons: [
        {
          id: 'java-2-1', title: 'Classes and Objects', type: 'lesson',
          theory: `<h2>Classes and Objects</h2>
<p>A class is a blueprint for objects. It defines attributes (fields) and behaviors (methods). Objects are instances of classes — concrete realizations of the blueprint.</p>
<h3>Defining a Class</h3>
<pre><code>public class Car {
    // Fields (attributes)
    String make;
    String model;
    int year;
    
    // Method (behavior)
    void displayInfo() {
        System.out.println(year + " " + make + " " + model);
    }
}</code></pre>
<h3>Creating Objects</h3>
<pre><code>Car myCar = new Car();
myCar.make = "Toyota";
myCar.model = "Camry";
myCar.year = 2022;
myCar.displayInfo(); // 2022 Toyota Camry</code></pre>
<h3>Multiple Objects</h3>
<pre><code>Car car1 = new Car();
Car car2 = new Car();
// Each has its own copy of fields</code></pre>
<h3>this Keyword</h3>
<pre><code>class Person {
    String name;
    void setName(String name) {
        this.name = name; // this refers to current object
    }
}</code></pre>`,
          challenge: { description: 'Create a Dog class with name (String) and age (int) fields and a bark() method that prints "name says Woof!". Create two dogs and make them bark.', starterCode: 'public class Main {\n    // Dog class and test\n}', expectedOutput: 'Rex says Woof!\nBuddy says Woof!', hints: ['Define class with fields and method', 'new Dog() creates instance', 'Set fields then call bark()'] },
          quiz: [{ question: 'What is an object?', options: ['A class definition', 'An instance of a class', 'A method', 'A variable type'], correct: 1 }]
        },
        {
          id: 'java-2-2', title: 'Constructors', type: 'lesson',
          theory: `<h2>Constructors</h2>
<p>Constructors are special methods that initialize objects when they are created. They have the same name as the class and no return type.</p>
<h3>Default Constructor</h3>
<pre><code>class Student {
    String name;
    int age;
    
    Student() {  // Default constructor
        name = "Unknown";
        age = 0;
    }
}</code></pre>
<h3>Parameterized Constructor</h3>
<pre><code>class Student {
    String name;
    int age;
    
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}</code></pre>
<h3>Constructor Overloading</h3>
<pre><code>class Rectangle {
    double width, height;
    Rectangle() { width = 1; height = 1; }
    Rectangle(double side) { width = side; height = side; }
    Rectangle(double w, double h) { width = w; height = h; }
}</code></pre>
<h3>Constructor Chaining</h3>
<pre><code>class Box {
    double w, h, d;
    Box() { this(1, 1, 1); }  // Calls other constructor
    Box(double w, double h, double d) {
        this.w = w; this.h = h; this.d = d;
    }
}</code></pre>`,
          challenge: { description: 'Create a Book class with title, author, pages. Add parameterized constructor. Create a book "Java Basics" by "Oracle", 350 pages. Print its info.', starterCode: 'public class Main {\n    // Book class with constructor\n}', expectedOutput: 'Java Basics by Oracle (350 pages)', hints: ['Constructor takes all three params', 'Use this.field = param', 'Add a display method'] },
          quiz: [{ question: 'What is special about constructors?', options: ['They return void', 'Same name as class, no return type', 'They are always private', 'They are static'], correct: 1 }]
        },
        {
          id: 'java-2-3', title: 'Encapsulation', type: 'lesson',
          theory: `<h2>Encapsulation</h2>
<p>Encapsulation hides internal data and provides controlled access through getter/setter methods. This protects data integrity and reduces coupling.</p>
<h3>Private Fields + Public Methods</h3>
<pre><code>class BankAccount {
    private double balance;  // Hidden from outside
    
    public BankAccount(double initial) {
        this.balance = initial;
    }
    
    public double getBalance() {  // Getter
        return balance;
    }
    
    public void deposit(double amount) {  // Controlled access
        if (amount > 0) balance += amount;
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
}</code></pre>
<h3>Benefits</h3>
<ul>
<li><strong>Data Protection:</strong> Cannot set invalid values directly</li>
<li><strong>Flexibility:</strong> Can change internal implementation without affecting users</li>
<li><strong>Validation:</strong> Setters can validate input</li>
</ul>
<h3>Access Modifiers</h3>
<ul>
<li><code>private</code>: Only within class</li>
<li><code>default</code>: Within package</li>
<li><code>protected</code>: Package + subclasses</li>
<li><code>public</code>: Everywhere</li>
</ul>`,
          challenge: { description: 'Create an encapsulated Person class with private name and age. Add validation: age must be 0-150. Test setting invalid age.', starterCode: 'public class Main {\n    // Encapsulated Person\n}', expectedOutput: 'Alice, age 25\nAge not changed (invalid: -5)\nAlice, age 25', hints: ['Private fields, public getters/setters', 'Validate in setAge: if (age >= 0 && age <= 150)', 'Print before and after invalid attempt'] },
          quiz: [{ question: 'What is the purpose of encapsulation?', options: ['Better performance', 'Hide data and control access', 'Multiple inheritance', 'Faster compilation'], correct: 1 }]
        },
        {
          id: 'java-2-4', title: 'Static Members', type: 'lesson',
          theory: `<h2>Static Members</h2>
<p>Static fields and methods belong to the class itself, not to individual objects. They are shared across all instances.</p>
<h3>Static Fields</h3>
<pre><code>class Student {
    static int totalStudents = 0;  // Shared counter
    String name;
    
    Student(String name) {
        this.name = name;
        totalStudents++;  // Increments for all objects
    }
}
new Student("Alice");
new Student("Bob");
System.out.println(Student.totalStudents);  // 2</code></pre>
<h3>Static Methods</h3>
<pre><code>class MathUtils {
    public static int max(int a, int b) {
        return (a > b) ? a : b;
    }
    public static double circleArea(double r) {
        return Math.PI * r * r;
    }
}
MathUtils.max(5, 10);  // No object needed!</code></pre>
<h3>Static vs Instance</h3>
<ul>
<li>Static: Called on class (MathUtils.max()), shared data</li>
<li>Instance: Called on object (car.drive()), per-object data</li>
</ul>
<h3>Static Blocks</h3>
<pre><code>class Config {
    static String dbUrl;
    static { // Runs once when class is loaded
        dbUrl = "jdbc:mysql://localhost/db";
    }
}</code></pre>`,
          challenge: { description: 'Create a Counter class with static count. Each new instance increments it. Create 3 instances, print total count.', starterCode: 'public class Main {\n    // Counter class\n}', expectedOutput: 'Count after 3 objects: 3', hints: ['static int count = 0', 'Increment in constructor', 'Access with Counter.count'] },
          quiz: [{ question: 'How do you access a static method?', options: ['object.method()', 'ClassName.method()', 'this.method()', 'super.method()'], correct: 1 }]
        },
        {
          id: 'java-2-5', title: 'toString and equals', type: 'lesson',
          theory: `<h2>toString() and equals()</h2>
<p>Every class in Java inherits from Object, which provides toString() and equals(). Overriding them gives your objects meaningful string representation and equality logic.</p>
<h3>Overriding toString()</h3>
<pre><code>class Point {
    int x, y;
    Point(int x, int y) { this.x = x; this.y = y; }
    
    @Override
    public String toString() {
        return "(" + x + ", " + y + ")";
    }
}
Point p = new Point(3, 4);
System.out.println(p);  // "(3, 4)" instead of "Point@1a2b3c"</code></pre>
<h3>Overriding equals()</h3>
<pre><code>@Override
public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Point other = (Point) obj;
    return x == other.x && y == other.y;
}
Point a = new Point(1, 2);
Point b = new Point(1, 2);
a.equals(b);  // true (same content)</code></pre>
<h3>hashCode Contract</h3>
<p>If you override equals(), you should also override hashCode(). Equal objects must have equal hash codes.</p>
<pre><code>@Override
public int hashCode() {
    return Objects.hash(x, y);
}</code></pre>`,
          challenge: { description: 'Create a Product class (name, price). Override toString to return "name ($price)". Create two identical products and check equals.', starterCode: 'public class Main {\n    // Product with toString and equals\n}', expectedOutput: 'Laptop ($999.99)\nAre equal: true', hints: ['@Override public String toString()', '@Override public boolean equals(Object obj)', 'Compare name and price in equals'] },
          quiz: [{ question: 'What does default toString() return?', options: ['Class name + field values', 'ClassName@hashcode', 'null', 'Empty string'], correct: 1 }]
        },
        {
          id: 'java-2-6', title: 'Inheritance Basics', type: 'lesson',
          theory: `<h2>Inheritance</h2>
<p>Inheritance allows a class to inherit fields and methods from a parent class using <code>extends</code>. It promotes code reuse and establishes is-a relationships.</p>
<h3>Basic Inheritance</h3>
<pre><code>class Animal {
    String name;
    Animal(String name) { this.name = name; }
    void eat() { System.out.println(name + " is eating"); }
}

class Dog extends Animal {
    Dog(String name) { super(name); }  // Call parent constructor
    void bark() { System.out.println(name + " says Woof!"); }
}

Dog d = new Dog("Rex");
d.eat();   // Inherited from Animal
d.bark();  // Own method</code></pre>
<h3>super Keyword</h3>
<pre><code>class Cat extends Animal {
    String color;
    Cat(String name, String color) {
        super(name);  // Must be first statement
        this.color = color;
    }
}</code></pre>
<h3>Method Overriding</h3>
<pre><code>class Cat extends Animal {
    @Override
    void eat() {
        System.out.println(name + " nibbles gracefully");
    }
}</code></pre>
<h3>What is Inherited?</h3>
<ul>
<li>public and protected members — YES</li>
<li>private members — NO (but exist, accessed via getters)</li>
<li>Constructors — NO (must call super())</li>
</ul>`,
          challenge: { description: 'Create Vehicle (make, year, displayInfo). Extend to Car adding numDoors. Create a Car and display all info.', starterCode: 'public class Main {\n    // Vehicle and Car\n}', expectedOutput: '2022 Toyota (4 doors)', hints: ['class Car extends Vehicle', 'super(make, year) in Car constructor', 'Override or extend displayInfo'] },
          quiz: [{ question: 'What keyword is used for inheritance?', options: ['implements', 'extends', 'inherits', 'super'], correct: 1 }]
        },
        {
          id: 'java-2-7', title: 'Method Overriding', type: 'lesson',
          theory: `<h2>Method Overriding</h2>
<p>Overriding allows a subclass to provide its own implementation of a method defined in its parent class. The method signature must match exactly.</p>
<h3>Override Rules</h3>
<pre><code>class Shape {
    double area() { return 0; }
    void describe() { System.out.println("I am a shape"); }
}

class Circle extends Shape {
    double radius;
    Circle(double r) { radius = r; }
    
    @Override  // Annotation — compiler checks correctness
    double area() { return Math.PI * radius * radius; }
    
    @Override
    void describe() {
        super.describe();  // Call parent version too
        System.out.println("Specifically, a circle with r=" + radius);
    }
}</code></pre>
<h3>@Override Annotation</h3>
<p>Always use @Override — it causes a compile error if the method does not actually override a parent method (catches typos).</p>
<h3>Cannot Override</h3>
<ul>
<li><code>final</code> methods — explicitly prevent overriding</li>
<li><code>static</code> methods — hidden, not overridden</li>
<li><code>private</code> methods — not visible to subclass</li>
</ul>
<h3>Overriding vs Overloading</h3>
<ul>
<li><strong>Override:</strong> Same method, different class (parent/child)</li>
<li><strong>Overload:</strong> Same name, different parameters (same class)</li>
</ul>`,
          challenge: { description: 'Create Animal with speak() printing "...". Override in Dog ("Woof!") and Cat ("Meow!"). Create both and call speak().', starterCode: 'public class Main {\n    // Animal, Dog, Cat with overriding\n}', expectedOutput: 'Dog: Woof!\nCat: Meow!', hints: ['@Override on subclass methods', 'Each subclass has own speak()', 'super.speak() optional'] },
          quiz: [{ question: 'What does @Override do?', options: ['Makes method virtual', 'Tells compiler to verify override is correct', 'Makes method abstract', 'Prevents overriding'], correct: 1 }]
        },
        {
          id: 'java-2-8', title: 'The Object Hierarchy', type: 'lesson',
          theory: `<h2>The Object Hierarchy and Casting</h2>
<p>Every class in Java implicitly extends Object. This creates a universal type hierarchy with powerful polymorphic capabilities.</p>
<h3>Object as Universal Parent</h3>
<pre><code>// These are equivalent:
class Dog { }
class Dog extends Object { }

// Every object IS-AN Object
Object obj = new Dog();
Object str = "Hello";
Object num = Integer.valueOf(42);</code></pre>
<h3>Upcasting (Safe, Automatic)</h3>
<pre><code>Animal a = new Dog("Rex"); // Dog IS-AN Animal
a.eat();     // OK
// a.bark(); // Error! Animal reference doesn't know about bark</code></pre>
<h3>Downcasting (Explicit, Risky)</h3>
<pre><code>Animal a = new Dog("Rex");
Dog d = (Dog) a;  // Downcast — risky!
d.bark();         // OK now

// instanceof check first (safe)
if (a instanceof Dog) {
    Dog dog = (Dog) a;
    dog.bark();
}</code></pre>
<h3>instanceof Operator</h3>
<pre><code>Animal a = new Cat("Whiskers");
System.out.println(a instanceof Animal); // true
System.out.println(a instanceof Cat);    // true
System.out.println(a instanceof Dog);    // false</code></pre>`,
          challenge: { description: 'Create Shape parent. Circle and Rectangle children. Store both as Shape references. Use instanceof to identify and print specific areas.', starterCode: 'public class Main {\n    // Shape hierarchy with casting\n}', expectedOutput: 'Circle area: 78.54\nRectangle area: 20.00', hints: ['Shape s1 = new Circle(5)', 'if (s instanceof Circle)', 'Cast then access specific methods'] },
          quiz: [{ question: 'What does instanceof check?', options: ['Variable type', 'If object is instance of a class', 'Method existence', 'Null reference'], correct: 1 }]
        },
        {
          id: 'java-2-9', title: 'Abstract Classes', type: 'lesson',
          theory: `<h2>Abstract Classes</h2>
<p>Abstract classes cannot be instantiated and may contain abstract methods (no body) that subclasses MUST implement.</p>
<h3>Declaring Abstract</h3>
<pre><code>abstract class Shape {
    String color;
    Shape(String color) { this.color = color; }
    
    abstract double area();     // No body! Subclass must implement
    abstract double perimeter();
    
    void display() {  // Concrete method — shared implementation
        System.out.println(color + " shape, area: " + area());
    }
}

class Circle extends Shape {
    double radius;
    Circle(String color, double r) { super(color); radius = r; }
    
    @Override double area() { return Math.PI * radius * radius; }
    @Override double perimeter() { return 2 * Math.PI * radius; }
}</code></pre>
<h3>Rules</h3>
<ul>
<li>Cannot create instance: new Shape() → Error!</li>
<li>Can have constructors (called by subclasses via super)</li>
<li>Can mix abstract and concrete methods</li>
<li>If subclass does not implement all abstract methods, it must also be abstract</li>
</ul>
<h3>When to Use</h3>
<p>Use abstract classes when you want shared code AND a contract. Use interfaces when you only want a contract (no shared code).</p>`,
          challenge: { description: 'Create abstract Employee with abstract calculatePay(). Derive FullTime (monthly salary) and PartTime (hourly * hours). Print pay for each.', starterCode: 'public class Main {\n    // Abstract Employee hierarchy\n}', expectedOutput: 'FullTime pay: 5000.00\nPartTime pay: 1200.00', hints: ['abstract double calculatePay()', 'FullTime: return salary', 'PartTime: return hourlyRate * hours'] },
          quiz: [{ question: 'Can you instantiate an abstract class?', options: ['Yes with new', 'No, must subclass it', 'Only with factory pattern', 'Yes if it has constructor'], correct: 1 }]
        },
        {
          id: 'java-2-10', title: 'Polymorphism', type: 'lesson',
          theory: `<h2>Polymorphism</h2>
<p>Polymorphism means "many forms." In Java, a parent reference can point to a child object, and the correct overridden method is called at runtime.</p>
<h3>Runtime Polymorphism</h3>
<pre><code>Shape[] shapes = {
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
};
for (Shape s : shapes) {
    System.out.println(s.area()); // Calls correct version!
}</code></pre>
<h3>Method Dispatch</h3>
<p>Java determines which method to call based on the actual object type at runtime, not the reference type at compile time.</p>
<h3>Polymorphic Parameters</h3>
<pre><code>void printArea(Shape s) {  // Accepts ANY Shape subclass
    System.out.println("Area: " + s.area());
}
printArea(new Circle(5));      // Works!
printArea(new Rectangle(3,4)); // Works!</code></pre>
<h3>Polymorphic Collections</h3>
<pre><code>ArrayList&lt;Animal&gt; animals = new ArrayList&lt;&gt;();
animals.add(new Dog("Rex"));
animals.add(new Cat("Whiskers"));
for (Animal a : animals) {
    a.speak(); // Each speaks differently!
}</code></pre>
<h3>Benefits</h3>
<ul>
<li>Write code that works with base type — automatically works with all subclasses</li>
<li>Open/Closed Principle: open for extension, closed for modification</li>
<li>Reduces if/else chains and switch statements</li>
</ul>`,
          challenge: { description: 'Create Shape array with Circle(5) and Rectangle(3,4). Loop through, print each area using polymorphism.', starterCode: 'public class Main {\n    // Polymorphic shapes\n}', expectedOutput: 'Shape area: 78.54\nShape area: 12.00', hints: ['Store as Shape[] array', 'Loop with for-each', 'area() dispatches to correct class'] },
          quiz: [{ question: 'When is the correct overridden method determined?', options: ['Compile time', 'Runtime', 'Link time', 'Load time'], correct: 1 }]
        },
        {
          id: 'java-2-11', title: 'final Keyword', type: 'lesson',
          theory: `<h2>The final Keyword</h2>
<p>The <code>final</code> keyword prevents modification. It can be applied to variables (constants), methods (no override), and classes (no inheritance).</p>
<h3>final Variables (Constants)</h3>
<pre><code>final double PI = 3.14159;
final int MAX_SIZE = 100;
// PI = 3.14; // Compile error!</code></pre>
<h3>final Methods (Cannot Override)</h3>
<pre><code>class Parent {
    final void important() {
        System.out.println("Cannot be overridden!");
    }
}
class Child extends Parent {
    // void important() {} // Compile error!
}</code></pre>
<h3>final Classes (Cannot Extend)</h3>
<pre><code>final class Immutable {
    // No class can extend this
}
// class Sub extends Immutable {} // Compile error!</code></pre>
<h3>final Reference vs Object</h3>
<pre><code>final ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();
list.add("OK");    // Modifying contents is fine!
// list = new ArrayList&lt;&gt;(); // Error! Can't reassign reference</code></pre>
<h3>Common Use Cases</h3>
<ul>
<li>Constants: public static final</li>
<li>Immutable classes: String is final</li>
<li>Security: prevent subclass tampering</li>
</ul>`,
          challenge: { description: 'Create a class with final constant MAX_SPEED = 200, a final method that returns it, and demonstrate that you cannot override it.', starterCode: 'public class Main {\n    // final demonstration\n}', expectedOutput: 'Max speed: 200\nCannot override final method!', hints: ['static final int MAX_SPEED = 200', 'final method returns MAX_SPEED', 'Show compile-time concept in output'] },
          quiz: [{ question: 'What does final on a class mean?', options: ['Last class to load', 'Cannot be inherited', 'Must be instantiated', 'Has no methods'], correct: 1 }]
        },
        {
          id: 'java-2-12', title: 'Interfaces Basics', type: 'lesson',
          theory: `<h2>Interfaces</h2>
<p>Interfaces define a contract — what a class must do, without specifying how. A class can implement multiple interfaces, unlike single inheritance with classes.</p>
<h3>Defining an Interface</h3>
<pre><code>interface Drawable {
    void draw();  // Abstract by default
    double getArea();
}

interface Resizable {
    void resize(double factor);
}</code></pre>
<h3>Implementing Interfaces</h3>
<pre><code>class Circle implements Drawable, Resizable {
    double radius;
    Circle(double r) { radius = r; }
    
    @Override
    public void draw() { System.out.println("Drawing circle"); }
    
    @Override
    public double getArea() { return Math.PI * radius * radius; }
    
    @Override
    public void resize(double factor) { radius *= factor; }
}</code></pre>
<h3>Interface Features (Java 8+)</h3>
<pre><code>interface Printable {
    void print();  // Abstract
    
    default void printTwice() {  // Default method (has body)
        print(); print();
    }
    
    static void info() {  // Static method
        System.out.println("Printable interface v1.0");
    }
}</code></pre>
<h3>Interface vs Abstract Class</h3>
<ul>
<li>Interface: Multiple implementation, no state (pre-Java 8), contract only</li>
<li>Abstract: Single inheritance, can have state, shared code</li>
</ul>`,
          challenge: { description: 'Create Playable interface with play() and stop(). Implement in MusicPlayer and VideoPlayer. Test both.', starterCode: 'public class Main {\n    // Playable interface and implementations\n}', expectedOutput: 'Playing music...\nMusic stopped\nPlaying video...\nVideo stopped', hints: ['interface Playable { void play(); void stop(); }', 'class MusicPlayer implements Playable', '@Override required for each method'] },
          quiz: [{ question: 'How many interfaces can a class implement?', options: ['Only one', 'Up to three', 'Unlimited', 'Two maximum'], correct: 2 }]
        },
        {
          id: 'java-2-13', title: 'Interface Types', type: 'lesson',
          theory: `<h2>Interface as Type</h2>
<p>Interfaces can be used as reference types, enabling polymorphism across unrelated classes that share a common contract.</p>
<h3>Interface References</h3>
<pre><code>Drawable shape = new Circle(5);
shape.draw();       // Works!
shape.getArea();    // Works!
// shape.radius;   // Error! Drawable doesn't know about radius</code></pre>
<h3>Interface Arrays</h3>
<pre><code>Drawable[] shapes = {
    new Circle(5),
    new Rectangle(3, 4),
    new Triangle(6, 8)
};
for (Drawable d : shapes) {
    d.draw();  // Polymorphic!
}</code></pre>
<h3>Comparable Interface</h3>
<pre><code>class Student implements Comparable&lt;Student&gt; {
    String name;
    double gpa;
    
    @Override
    public int compareTo(Student other) {
        return Double.compare(this.gpa, other.gpa);
    }
}
// Now Students can be sorted!</code></pre>
<h3>Functional Interfaces (Java 8)</h3>
<pre><code>@FunctionalInterface
interface Calculator {
    double calculate(double a, double b);
}
Calculator add = (a, b) -> a + b;  // Lambda!
Calculator mul = (a, b) -> a * b;</code></pre>`,
          challenge: { description: 'Create Sortable interface with compareTo method. Implement in Student (compare by GPA). Sort 3 students, print highest GPA.', starterCode: 'public class Main {\n    // Sortable students\n}', expectedOutput: 'Highest GPA: Alice (3.9)', hints: ['Implement Comparable<Student>', 'Override compareTo', 'Use Arrays.sort or manual comparison'] },
          quiz: [{ question: 'What is a functional interface?', options: ['Has many methods', 'Has exactly one abstract method', 'Has no methods', 'Is always public'], correct: 1 }]
        },
        {
          id: 'java-2-14', title: 'Default Methods', type: 'lesson',
          theory: `<h2>Default and Static Interface Methods</h2>
<p>Since Java 8, interfaces can have default methods (with implementation) and static methods, allowing evolution without breaking existing implementations.</p>
<h3>Default Methods</h3>
<pre><code>interface Logger {
    void log(String message);
    
    default void logInfo(String msg) {
        log("[INFO] " + msg);
    }
    default void logError(String msg) {
        log("[ERROR] " + msg);
    }
}

class ConsoleLogger implements Logger {
    @Override
    public void log(String message) {
        System.out.println(message);
    }
    // logInfo and logError are inherited automatically!
}</code></pre>
<h3>Static Methods</h3>
<pre><code>interface StringUtils {
    static boolean isNullOrEmpty(String s) {
        return s == null || s.isEmpty();
    }
    static String repeat(String s, int times) {
        return s.repeat(times);
    }
}
StringUtils.isNullOrEmpty("");  // true</code></pre>
<h3>Diamond Problem</h3>
<pre><code>interface A { default void hello() { System.out.println("A"); } }
interface B { default void hello() { System.out.println("B"); } }
class C implements A, B {
    @Override
    public void hello() { A.super.hello(); } // Must resolve conflict
}</code></pre>`,
          challenge: { description: 'Create Formatter interface with format(String) abstract and formatBold(String) default (wraps in **). Implement and test both.', starterCode: 'public class Main {\n    // Formatter with default method\n}', expectedOutput: 'HELLO WORLD\n**Hello World**', hints: ['default returns "**" + format(s) + "**"', 'Implement format() to uppercase', 'Default method calls abstract method'] },
          quiz: [{ question: 'Why were default methods added to interfaces?', options: ['Better performance', 'Allow interface evolution without breaking code', 'Replace abstract classes', 'For testing only'], correct: 1 }]
        },
        {
          id: 'java-2-15', title: 'Try-Catch Basics', type: 'lesson',
          theory: `<h2>Exception Handling: Try-Catch</h2>
<p>Exceptions are runtime errors that disrupt normal flow. Java handles them with try-catch blocks, preventing program crashes.</p>
<h3>Basic Try-Catch</h3>
<pre><code>try {
    int result = 10 / 0;  // ArithmeticException!
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero: " + e.getMessage());
}</code></pre>
<h3>Multiple Catch Blocks</h3>
<pre><code>try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[10]);
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Index out of bounds!");
} catch (Exception e) {
    System.out.println("Something went wrong: " + e.getMessage());
}</code></pre>
<h3>finally Block</h3>
<pre><code>try {
    // risky code
} catch (Exception e) {
    // handle error
} finally {
    // ALWAYS executes — cleanup code
    System.out.println("Cleanup done");
}</code></pre>
<h3>Common Exceptions</h3>
<ul>
<li>NullPointerException — calling method on null</li>
<li>ArrayIndexOutOfBoundsException — bad array index</li>
<li>NumberFormatException — bad string-to-number conversion</li>
<li>ArithmeticException — division by zero</li>
</ul>`,
          challenge: { description: 'Write code that catches: division by zero and NumberFormatException (parsing "abc"). Handle each with appropriate message.', starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Exception handling\n    }\n}', expectedOutput: 'Error: Division by zero\nError: Invalid number format', hints: ['Separate try-catch for each', 'Integer.parseInt("abc") throws NumberFormatException', 'e.getMessage() for details'] },
          quiz: [{ question: 'What does finally block do?', options: ['Catches all exceptions', 'Executes always, error or not', 'Prevents exceptions', 'Logs errors'], correct: 1 }]
        },
        {
          id: 'java-2-16', title: 'Throwing Exceptions', type: 'lesson',
          theory: `<h2>Throwing Exceptions</h2>
<p>You can throw your own exceptions to signal error conditions in your code. Use <code>throw</code> to throw and <code>throws</code> to declare.</p>
<h3>Throwing</h3>
<pre><code>public static void setAge(int age) {
    if (age < 0 || age > 150) {
        throw new IllegalArgumentException("Invalid age: " + age);
    }
    System.out.println("Age set to: " + age);
}</code></pre>
<h3>Method Declaration with throws</h3>
<pre><code>public static void readFile(String path) throws IOException {
    // Code that might throw IOException
    // Caller MUST handle or declare
}</code></pre>
<h3>Custom Exceptions</h3>
<pre><code>class InsufficientFundsException extends Exception {
    double amount;
    InsufficientFundsException(double amount) {
        super("Insufficient funds: need $" + amount);
        this.amount = amount;
    }
}</code></pre>
<h3>Checked vs Unchecked</h3>
<ul>
<li><strong>Checked</strong> (extends Exception): Must handle or declare (IOException, SQLException)</li>
<li><strong>Unchecked</strong> (extends RuntimeException): Optional handling (NullPointer, IndexOutOfBounds)</li>
</ul>`,
          challenge: { description: 'Create a withdraw method that throws IllegalArgumentException if amount > balance. Test with balance 100, withdraw 150.', starterCode: 'public class Main {\n    static double balance = 100;\n\n    public static void main(String[] args) {\n        // Try withdrawing 150\n    }\n}', expectedOutput: 'Error: Insufficient balance for withdrawal of 150.0', hints: ['if (amount > balance) throw new IllegalArgumentException(...)', 'Catch in main with try-catch', 'Print error message from exception'] },
          quiz: [{ question: 'What is the difference between throw and throws?', options: ['Same thing', 'throw creates exception, throws declares method may throw', 'throws creates, throw declares', 'No difference in Java'], correct: 1 }]
        },
        {
          id: 'java-2-17', title: 'Custom Exceptions', type: 'lesson',
          theory: `<h2>Custom Exceptions</h2>
<p>Creating your own exception classes makes error handling more specific and descriptive for your application domain.</p>
<h3>Creating Custom Exception</h3>
<pre><code>class InvalidAgeException extends Exception {
    int age;
    
    InvalidAgeException(int age) {
        super("Age " + age + " is not valid (must be 0-150)");
        this.age = age;
    }
    
    int getAge() { return age; }
}

// Usage
public static void setAge(int age) throws InvalidAgeException {
    if (age < 0 || age > 150) {
        throw new InvalidAgeException(age);
    }
}</code></pre>
<h3>Exception Hierarchy</h3>
<pre><code>// For checked exceptions:
class AppException extends Exception { }
class DatabaseException extends AppException { }
class ValidationException extends AppException { }

// For unchecked exceptions:
class AppRuntimeException extends RuntimeException { }</code></pre>
<h3>Best Practices</h3>
<ul>
<li>Name ends with "Exception"</li>
<li>Include helpful message and relevant data</li>
<li>Extend Exception for checked, RuntimeException for unchecked</li>
<li>Document with @throws in JavaDoc</li>
</ul>`,
          challenge: { description: 'Create InvalidScoreException (score must be 0-100). Write a grading method that throws it. Test with score 150.', starterCode: 'public class Main {\n    // Custom exception and grading\n}', expectedOutput: 'Error: Score 150 is invalid (must be 0-100)', hints: ['class InvalidScoreException extends Exception', 'Include score in message', 'Catch and print getMessage()'] },
          quiz: [{ question: 'Should custom exceptions extend Exception or RuntimeException?', options: ['Always Exception', 'Always RuntimeException', 'Exception for checked, RuntimeException for unchecked', 'Does not matter'], correct: 2 }]
        },
        {
          id: 'java-2-18', title: 'Packages and Imports', type: 'lesson',
          theory: `<h2>Packages and Imports</h2>
<p>Packages organize classes into namespaces, preventing naming conflicts and providing access control. They map to directory structure.</p>
<h3>Package Declaration</h3>
<pre><code>package com.myapp.models;  // Must be first statement

public class User {
    // This class lives in com/myapp/models/User.java
}</code></pre>
<h3>Import Statements</h3>
<pre><code>import java.util.ArrayList;        // Specific class
import java.util.*;                // All classes in package
import static java.lang.Math.PI;  // Static import</code></pre>
<h3>Common Packages</h3>
<ul>
<li><code>java.lang</code> — Auto-imported (String, Math, System)</li>
<li><code>java.util</code> — Collections, Scanner, Date</li>
<li><code>java.io</code> — File I/O, streams</li>
<li><code>java.math</code> — BigDecimal, BigInteger</li>
</ul>
<h3>Package Naming Convention</h3>
<pre><code>com.company.project.module
// Example: com.google.cloud.storage</code></pre>
<h3>Access with Packages</h3>
<ul>
<li>public: visible everywhere</li>
<li>default (no modifier): visible only within same package</li>
<li>protected: same package + subclasses</li>
<li>private: only within class</li>
</ul>`,
          challenge: { description: 'Demonstrate using java.util classes: create ArrayList, use Collections.sort(), and Math functions. Print sorted list.', starterCode: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Use imported classes\n    }\n}', expectedOutput: 'Sorted: [1, 2, 3, 5, 8]\nMax: 8', hints: ['ArrayList<Integer> with add()', 'Collections.sort(list)', 'Collections.max(list)'] },
          quiz: [{ question: 'Which package is auto-imported?', options: ['java.util', 'java.io', 'java.lang', 'java.math'], correct: 2 }]
        },
        {
          id: 'java-2-19', title: 'Student Manager Project - Part 1', type: 'project',
          theory: `<h2>Project: Student Manager (Part 1) 🎓</h2>
<p>Let us build a complete Student Management System combining classes, inheritance, interfaces, collections, and exception handling.</p>
<h3>Requirements</h3>
<ol>
<li>Student class with name, id, grades array</li>
<li>Methods: addGrade, getAverage, getLetterGrade</li>
<li>Custom InvalidGradeException for grades outside 0-100</li>
<li>toString override for display</li>
</ol>
<h3>Architecture</h3>
<pre><code>class Student {
    private String name;
    private int id;
    private ArrayList&lt;Double&gt; grades;
    
    public void addGrade(double grade) throws InvalidGradeException
    public double getAverage()
    public String getLetterGrade()
    public String toString()
}</code></pre>
<h3>Design Principles</h3>
<p>Encapsulation (private fields), validation (exception for bad grades), computed properties (average calculated from grades list), meaningful toString for debugging.</p>`,
          challenge: { description: 'Implement Student class with addGrade (validates 0-100), getAverage, toString. Create student, add grades 85, 92, 78. Print info.', starterCode: 'import java.util.*;\n\npublic class Main {\n    // Student class implementation\n}', expectedOutput: 'Student: Alice (ID: 1)\nAverage: 85.00\nGrade: B', hints: ['ArrayList<Double> for grades', 'Validate in addGrade', 'Average = sum / count'] },
          quiz: [{ question: 'Why validate grades in addGrade?', options: ['Performance', 'Prevent invalid data from entering the system', 'Required by Java', 'For formatting'], correct: 1 }]
        },
        {
          id: 'java-2-20', title: 'Student Manager Project - Part 2', type: 'project',
          theory: `<h2>Project: Student Manager (Part 2) 🎓</h2>
<p>Now let us add the manager class that handles multiple students with search, statistics, and sorting capabilities.</p>
<h3>StudentManager Class</h3>
<pre><code>class StudentManager {
    private ArrayList&lt;Student&gt; students;
    
    public void addStudent(Student s)
    public Student findById(int id)
    public Student getTopStudent()
    public double getClassAverage()
    public void displayAll()
}</code></pre>
<h3>Features</h3>
<ol>
<li>Add students to the roster</li>
<li>Search by ID</li>
<li>Find top performing student</li>
<li>Calculate class average</li>
<li>Display all students sorted by average</li>
</ol>
<h3>Polymorphism Opportunity</h3>
<p>Students could be extended to GradStudent, UndergradStudent with different grading scales. The manager works with the base Student type polymorphically.</p>`,
          challenge: { description: 'Create StudentManager. Add 3 students with grades. Find and print the top student and class average.', starterCode: 'import java.util.*;\n\npublic class Main {\n    // StudentManager system\n}', expectedOutput: 'Top Student: Bob (Avg: 92.00)\nClass Average: 85.00', hints: ['Loop students to find highest average', 'Sum all averages / student count for class avg', 'Use the Student class from Part 1'] },
          quiz: [{ question: 'What design pattern does StudentManager follow?', options: ['Singleton', 'Repository/Manager pattern', 'Observer', 'Factory'], correct: 1 }]
        }
      ]
    }
  ]
};

export default course;
