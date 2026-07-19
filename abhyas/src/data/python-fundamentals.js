export const pythonFundamentals = {
  id: `fundamentals`,
  title: `Fundamentals`,
  description: `Build a strong foundation with essential concepts and basic skills`,
  totalLessons: 77,
  totalChallenges: 97,
  totalQuizQuestions: 342,
  projects: 3,
  chapters: [
    {
      id: `introduction`,
      title: `Introduction`,
      lessons: [
        {
          id: `the_language`,
          title: `The Language`,
          type: `challenge`,
          theory: `<h2>What is Python?</h2><p>Python is a <strong>high-level, interpreted programming language</strong> created by Guido van Rossum in 1991. It is one of the most popular languages in the world, used by companies like Google, Netflix, Instagram, and NASA.</p><p><strong>Why learn Python?</strong></p><ul><li><strong>Readable:</strong> Python code looks almost like English, making it perfect for beginners.</li><li><strong>Versatile:</strong> Used in web development, data science, AI, automation, game development, and more.</li><li><strong>In demand:</strong> Python developers are among the highest-paid in the industry.</li><li><strong>Huge community:</strong> Millions of developers and thousands of free libraries.</li></ul><h3>Interpreted vs Compiled</h3><p>Some languages (like C++) must be <em>compiled</em> — translated into machine code before running. Python is <em>interpreted</em> — it runs your code line by line, which makes testing and debugging faster.</p><h3>Your First Look at Python</h3><pre><code>print("Hello, World!")</code></pre><p>That single line is a complete Python program! Compare that to Java, which needs a class, a main method, and several lines of boilerplate just to print one message.</p><h3>How Python Programs Run</h3><p>When you write Python code in a <code>.py</code> file and run it, the Python interpreter reads your file top-to-bottom, executing each instruction in order. There is no compilation step — you write it and run it immediately.</p><p><strong>Key takeaway:</strong> Python prioritizes simplicity and readability. Its philosophy is captured in the phrase: "There should be one — and preferably only one — obvious way to do it."</p>`,
          challenge: {
            description: `Write a program that prints "I am learning Python" to the console.`,
            starterCode: `# Print the message below
`,
            expectedOutput: `I am learning Python`,
            hints: ['Use the print() function', 'Put your text inside quotes within print()', 'print("I am learning Python")']
          },
          quiz: [
            {
              question: `Who created Python?`,
              options: ['James Gosling', 'Guido van Rossum', 'Dennis Ritchie', 'Bjarne Stroustrup'],
              correct: 1
            },
            {
              question: `Python is which type of language?`,
              options: ['Compiled', 'Interpreted', 'Assembly', 'Machine-level'],
              correct: 1
            },
            {
              question: `Which of the following is NOT a common use of Python?`,
              options: ['Web development', 'Data science', 'Operating system kernels', 'Automation'],
              correct: 2
            },
            {
              question: `What year was Python first released?`,
              options: ['1985', '1991', '2000', '1995'],
              correct: 1
            },
            {
              question: `What file extension do Python files use?`,
              options: ['.py', '.python', '.pt', '.pn'],
              correct: 0
            }
          ]
        },
        {
          id: `hello_world`,
          title: `Hello World!`,
          type: `challenge`,
          theory: `<h2>The print() Function</h2><p>The <code>print()</code> function is your primary tool for displaying output in Python. It takes whatever you put inside the parentheses and shows it on the screen.</p><h3>Strings — Text in Python</h3><p>In programming, text is called a <strong>string</strong>. In Python, you create a string by wrapping text in quotes — either single quotes <code>'hello'</code> or double quotes <code>"hello"</code>. Both work the same way.</p><h3>Examples</h3><pre><code>print("Hello, World!")
print('Welcome to Python')
print("This is line 1")
print("This is line 2")</code></pre><p><strong>Output:</strong></p><pre><code>Hello, World!
Welcome to Python
This is line 1
This is line 2</code></pre><h3>Line by Line Explanation</h3><ul><li>Each <code>print()</code> call outputs the text inside the quotes.</li><li>After printing, Python automatically moves to a new line.</li><li>The quotes are <em>not</em> part of the output — they just tell Python where the string starts and ends.</li></ul><h3>Multiple print() Calls</h3><p>Each <code>print()</code> outputs on its own line. If you want to print multiple things on the same line, you can use a comma to separate them:</p><pre><code>print("Hello", "World")</code></pre><p><strong>Output:</strong> <code>Hello World</code></p><p>Python automatically puts a space between comma-separated items.</p><h3>Common Mistakes</h3><ul><li><strong>Forgetting quotes:</strong> <code>print(Hello)</code> will cause an error because Python thinks Hello is a variable name.</li><li><strong>Mismatched quotes:</strong> <code>print("Hello')</code> will cause a syntax error.</li><li><strong>Missing parentheses:</strong> <code>print "Hello"</code> was valid in Python 2 but NOT in Python 3.</li></ul>`,
          challenge: {
            description: `Print the following two lines exactly:
Line 1: Hello, World!
Line 2: I love coding`,
            starterCode: `# Print Hello, World! on the first line
# Print I love coding on the second line
`,
            expectedOutput: `Hello, World!
I love coding`,
            hints: ['You need two separate print() statements', 'Each print() outputs on its own line', 'print("Hello, World!")']
          },
          quiz: [
            {
              question: `What does print("Hello") output?`,
              options: ['"Hello"', 'Hello', 'print(Hello)', 'hello'],
              correct: 1
            },
            {
              question: `Which is a valid way to print text in Python 3?`,
              options: ['print "Hello"', 'print("Hello")', 'echo("Hello")', 'console.log("Hello")'],
              correct: 1
            },
            {
              question: `What happens after each print() statement?`,
              options: ['Nothing', 'A new line is started', 'A space is added', 'The program ends'],
              correct: 1
            },
            {
              question: `What will print("Hi", "there") output?`,
              options: ['Hithere', 'Hi there', 'Hi, there', '"Hi" "there"'],
              correct: 1
            },
            {
              question: `How many arguments can print() take?`,
              options: ['Only 1', 'Up to 5', 'Any number', 'Exactly 2'],
              correct: 2
            }
          ]
        },
        {
          id: `comments`,
          title: `Comments`,
          type: `challenge`,
          theory: `<h2>What Are Comments?</h2><p>Comments are lines in your code that Python <strong>completely ignores</strong>. They exist only for humans — to explain what your code does, why you made certain decisions, or to temporarily disable code.</p><p>Think of comments like sticky notes on a recipe. The oven doesn't read them, but they help the cook understand what's going on.</p><h3>Single-Line Comments</h3><p>Use the <code>#</code> symbol. Everything after <code>#</code> on that line is ignored:</p><pre><code># This is a comment
print("Hello")  # This prints Hello

# The line below won't run:
# print("This is ignored")</code></pre><p><strong>Output:</strong></p><pre><code>Hello</code></pre><h3>Multi-Line Comments</h3><p>Python doesn't have a dedicated multi-line comment syntax, but you can use multiple <code>#</code> lines:</p><pre><code># This is a multi-line comment.
# It spans several lines.
# Each line needs its own # symbol.
print("Still running!")</code></pre><p><strong>Output:</strong> <code>Still running!</code></p><h3>When to Use Comments</h3><ul><li><strong>Explain WHY, not WHAT:</strong> Bad: <code># add 1 to x</code>. Good: <code># compensate for zero-based indexing</code></li><li><strong>Document complex logic:</strong> If a section is tricky, explain your reasoning.</li><li><strong>TODO markers:</strong> <code># TODO: add error handling here</code></li><li><strong>Temporarily disable code:</strong> Comment out lines you want to skip without deleting them.</li></ul><h3>Best Practice</h3><p>Good code with good variable names often doesn't need many comments. But when logic is complex, a brief comment saves future-you hours of confusion.</p>`,
          challenge: {
            description: `Write a program with a comment that says "My first program" on line 1, then prints "Code runs" on line 2.`,
            starterCode: `# Write your comment on line 1
# Print "Code runs" on line 2
`,
            expectedOutput: `Code runs`,
            hints: ['Comments start with # and are ignored by Python', 'Only the print() statement produces output', '# My first program']
          },
          quiz: [
            {
              question: `Which symbol starts a single-line comment in Python?`,
              options: ['//', '#', '/*', '--'],
              correct: 1
            },
            {
              question: `What happens when Python encounters a comment?`,
              options: ['It prints the comment', 'It throws an error', 'It ignores the comment completely', 'It stores it in memory'],
              correct: 2
            },
            {
              question: `Which is a valid comment?`,
              options: ['// This is a comment', '# This is a comment', '/* comment */', '<!-- comment -->'],
              correct: 1
            },
            {
              question: `Why should you write comments?`,
              options: [
                `To make the program run faster`,
                `To explain code for humans reading it`,
                `Python requires them`,
                `To increase file size`
              ],
              correct: 1
            },
            {
              question: `Can a comment go at the end of a code line?`,
              options: ['No, only on its own line', 'Yes, after the code with #', 'Only in functions', 'Only with //'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: `variables`,
      title: `Variables`,
      lessons: [
        {
          id: `numbers`,
          title: `Numbers`,
          type: `challenge`,
          theory: `<h2>Numbers in Python</h2><p>A <strong>variable</strong> is a named container that stores a value. Think of it as a labeled box — you can put something in, look at it later, or replace it with something else.</p><h3>Creating Variables with Numbers</h3><p>In Python, you create a variable using the <code>=</code> sign (called the assignment operator):</p><pre><code>age = 25
price = 9.99
temperature = -5</code></pre><p>Python has two main number types:</p><ul><li><strong>int</strong> (integer): Whole numbers like <code>25</code>, <code>-5</code>, <code>0</code>, <code>1000</code></li><li><strong>float</strong> (floating-point): Decimal numbers like <code>9.99</code>, <code>3.14</code>, <code>-0.5</code></li></ul><h3>Using Number Variables</h3><pre><code>x = 10
y = 3
print(x)
print(y)
print(x + y)</code></pre><p><strong>Output:</strong></p><pre><code>10
3
13</code></pre><h3>Key Points</h3><ul><li>No need to declare a type — Python figures it out automatically.</li><li>Variable names are case-sensitive: <code>Age</code> and <code>age</code> are different variables.</li><li>You can reassign a variable at any time: <code>x = 10</code> then later <code>x = 20</code>.</li><li>Python handles very large numbers without overflow issues.</li></ul><h3>Checking the Type</h3><pre><code>x = 10
y = 3.14
print(type(x))  # &lt;class 'int'&gt;
print(type(y))  # &lt;class 'float'&gt;</code></pre><p>The <code>type()</code> function tells you what kind of data a variable holds.</p>`,
          challenge: {
            description: `Create two variables: "a" with value 7 and "b" with value 3.5. Print both values, each on a new line.`,
            starterCode: `# Create variable a with value 7

# Create variable b with value 3.5

# Print a

# Print b
`,
            expectedOutput: `7
3.5`,
            hints: ['Use = to assign values: a = 7', 'Use print() to display each variable', 'print(a) will display the value of a']
          },
          quiz: [
            {
              question: `What type is the number 42?`,
              options: ['float', 'int', 'string', 'double'],
              correct: 1
            },
            {
              question: `What type is 3.14?`,
              options: ['int', 'float', 'decimal', 'number'],
              correct: 1
            },
            {
              question: `What does x = 5 do?`,
              options: ['Checks if x equals 5', 'Assigns the value 5 to x', 'Prints 5', 'Creates a constant'],
              correct: 1
            },
            {
              question: `Are "age" and "Age" the same variable?`,
              options: ['Yes, always', 'No, Python is case-sensitive', 'Only in Python 3', 'Depends on the value'],
              correct: 1
            },
            {
              question: `What is the result of type(10)?`,
              options: ['<class \'float\'>', '<class \'int\'>', '<class \'number\'>', 'int'],
              correct: 1
            }
          ]
        },
        {
          id: `string`,
          title: `String`,
          type: `challenge`,
          theory: `<h2>Strings in Python</h2><p>A <strong>string</strong> is a sequence of characters — text data. You create strings by enclosing text in quotes.</p><h3>Creating String Variables</h3><pre><code>name = "Alice"
greeting = 'Hello'
message = "I am learning Python"</code></pre><p>Both single quotes <code>'...'</code> and double quotes <code>"..."</code> work. Use whichever you prefer, but be consistent.</p><h3>When to Use Which Quote</h3><p>If your string contains an apostrophe, use double quotes:</p><pre><code>sentence = "It's a beautiful day"</code></pre><p>If your string contains double quotes, use single quotes:</p><pre><code>quote = 'She said "hello"'</code></pre><h3>String Concatenation</h3><p>You can join strings together using the <code>+</code> operator:</p><pre><code>first = "Hello"
second = " World"
result = first + second
print(result)</code></pre><p><strong>Output:</strong> <code>Hello World</code></p><p>Note: The space is part of the second string. Python won't add spaces automatically when concatenating.</p><h3>Printing Strings</h3><pre><code>city = "Tokyo"
print(city)
print("I live in " + city)</code></pre><p><strong>Output:</strong></p><pre><code>Tokyo
I live in Tokyo</code></pre><h3>Common Mistakes</h3><ul><li>Forgetting to close the string: <code>name = "Alice</code> (missing closing quote)</li><li>Mixing quote types: <code>name = "Alice'</code> (mismatch)</li><li>Trying to add a number to a string: <code>"age: " + 25</code> causes an error</li></ul>`,
          challenge: {
            description: `Create a variable called "language" with the value "Python". Then print "I am learning Python" using concatenation.`,
            starterCode: `# Create the language variable

# Print "I am learning " concatenated with the variable
`,
            expectedOutput: `I am learning Python`,
            hints: ['language = "Python"', 'Use + to concatenate strings', 'print("I am learning " + language)']
          },
          quiz: [
            {
              question: `Which creates a valid string?`,
              options: ['name = Alice', 'name = "Alice"', 'name = (Alice)', 'string name = "Alice"'],
              correct: 1
            },
            {
              question: `What does "Hello" + " " + "World" produce?`,
              options: ['HelloWorld', 'Hello World', 'Hello + World', 'Error'],
              correct: 1
            },
            {
              question: `What happens with "age: " + 25?`,
              options: ['Prints "age: 25"', 'Prints "age: "25', 'Causes a TypeError', 'Prints 25'],
              correct: 2
            },
            {
              question: `Which quotes can you use for strings?`,
              options: ['Only double quotes', 'Only single quotes', 'Both single and double quotes', 'Backticks'],
              correct: 2
            },
            {
              question: `What is string concatenation?`,
              options: ['Comparing strings', 'Joining strings together with +', 'Splitting strings', 'Converting to uppercase'],
              correct: 1
            }
          ]
        },
        {
          id: `boolean`,
          title: `Boolean`,
          type: `challenge`,
          theory: `<h2>Boolean Values</h2><p>A <strong>boolean</strong> is the simplest data type — it can only be one of two values: <code>True</code> or <code>False</code>. Named after mathematician George Boole, booleans are the foundation of all decision-making in programming.</p><p>Think of a boolean like a light switch — it's either on or off, yes or no, true or false.</p><h3>Creating Boolean Variables</h3><pre><code>is_sunny = True
is_raining = False
print(is_sunny)
print(is_raining)</code></pre><p><strong>Output:</strong></p><pre><code>True
False</code></pre><p><strong>Important:</strong> Note the capital T and F. <code>True</code> and <code>False</code> are keywords — <code>true</code> and <code>false</code> (lowercase) will cause an error.</p><h3>Booleans from Comparisons</h3><p>Booleans are often the result of comparisons:</p><pre><code>x = 10
y = 5
print(x > y)   # True
print(x < y)   # False
print(x == 10) # True</code></pre><p><strong>Output:</strong></p><pre><code>True
False
True</code></pre><h3>Where Booleans Are Used</h3><ul><li>Controlling if/else decisions</li><li>Loop conditions (keep going while True)</li><li>Flags to track state (is the game over? is the user logged in?)</li></ul><h3>The type() Function</h3><pre><code>active = True
print(type(active))  # &lt;class 'bool'&gt;</code></pre>`,
          challenge: {
            description: `Create a variable "is_student" set to True and "is_graduated" set to False. Print both values.`,
            starterCode: `# Create is_student as True

# Create is_graduated as False

# Print both
`,
            expectedOutput: `True
False`,
            hints: ['Boolean values must be capitalized: True, False', 'is_student = True', 'Use print() for each variable']
          },
          quiz: [
            {
              question: `What are the two boolean values in Python?`,
              options: ['true, false', 'True, False', '1, 0', 'yes, no'],
              correct: 1
            },
            {
              question: `What does print(5 > 3) output?`,
              options: ['5 > 3', 'true', 'True', '1'],
              correct: 2
            },
            {
              question: `What happens if you write is_active = true (lowercase)?`,
              options: ['It works fine', 'NameError - true is not defined', 'It becomes a string', 'It becomes 0'],
              correct: 1
            },
            {
              question: `Booleans are named after which mathematician?`,
              options: ['Alan Turing', 'George Boole', 'Isaac Newton', 'Ada Lovelace'],
              correct: 1
            },
            {
              question: `Which value is NOT a valid boolean?`,
              options: ['True', 'False', 'true', 'All are valid'],
              correct: 2
            }
          ]
        },
        {
          id: `naming_conventions`,
          title: `Naming Conventions`,
          type: `challenge`,
          theory: `<h2>Variable Naming Rules and Conventions</h2><p>Choosing good variable names is crucial for writing readable code. Python has strict <strong>rules</strong> (break them and you get errors) and recommended <strong>conventions</strong> (break them and your code is harder to read).</p><h3>Rules (Must Follow)</h3><ul><li>Must start with a letter or underscore: <code>name</code>, <code>_count</code> ✓ but <code>2name</code> ✗</li><li>Can contain letters, numbers, underscores: <code>player_1</code> ✓ but <code>player-1</code> ✗</li><li>Cannot be a Python keyword: <code>if</code>, <code>for</code>, <code>True</code>, <code>class</code> are reserved</li><li>Case-sensitive: <code>name</code>, <code>Name</code>, <code>NAME</code> are three different variables</li></ul><h3>Conventions (Should Follow)</h3><ul><li><strong>snake_case</strong> for variables and functions: <code>user_name</code>, <code>total_price</code>, <code>is_valid</code></li><li>Descriptive names: <code>age</code> is better than <code>a</code>, <code>total_price</code> is better than <code>tp</code></li><li>Boolean variables start with is/has/can: <code>is_active</code>, <code>has_permission</code></li><li>UPPER_CASE for constants: <code>MAX_SIZE = 100</code>, <code>PI = 3.14159</code></li></ul><h3>Examples</h3><pre><code># Good names
user_age = 25
total_score = 98.5
is_logged_in = True

# Bad names (but technically valid)
x = 25
a = 98.5
flag = True</code></pre><h3>Invalid Names (Cause Errors)</h3><pre><code># These will cause SyntaxError or NameError:
# 2fast = 10       (starts with number)
# my-var = 5      (contains hyphen)
# class = "hello" (reserved keyword)</code></pre>`,
          challenge: {
            description: `Create three properly named variables: player_name set to "Hero", player_score set to 100, and is_alive set to True. Print all three.`,
            starterCode: `# Create player_name

# Create player_score

# Create is_alive

# Print all three variables
`,
            expectedOutput: `Hero
100
True`,
            hints: ['Use snake_case: player_name = "Hero"', 'player_score = 100', 'Print each variable on its own line with print()']
          },
          quiz: [
            {
              question: `Which is a valid variable name?`,
              options: ['2players', 'my-score', 'player_score', 'for'],
              correct: 2
            },
            {
              question: `What naming convention does Python use for variables?`,
              options: ['camelCase', 'snake_case', 'PascalCase', 'kebab-case'],
              correct: 1
            },
            {
              question: `Which is NOT a Python keyword?`,
              options: ['if', 'while', 'score', 'class'],
              correct: 2
            },
            {
              question: `What is wrong with the name "1st_place"?`,
              options: ['It contains a number', 'It starts with a number', 'It has an underscore', 'Nothing is wrong'],
              correct: 1
            },
            {
              question: `Which is a Python reserved keyword?`,
              options: ['score', 'while', 'player', 'count'],
              correct: 1
            }
          ]
        },
        {
          id: `empty_variables`,
          title: `Empty Variables`,
          type: `challenge`,
          theory: `<h2>None — The Empty Value</h2><p>Sometimes you need a variable to exist but don't have a value for it yet. In Python, we use <code>None</code> to represent "nothing" or "no value."</p><p>Think of it like an empty box with a label — the box exists, but there's nothing inside yet.</p><h3>Using None</h3><pre><code>result = None
print(result)</code></pre><p><strong>Output:</strong> <code>None</code></p><h3>Why Use None?</h3><ul><li><strong>Placeholder:</strong> Declare a variable before you know its value</li><li><strong>Default return:</strong> Functions that don't explicitly return something return None</li><li><strong>Reset:</strong> Clear a variable's value: <code>user = None</code></li></ul><h3>Checking for None</h3><pre><code>value = None
print(value is None)      # True
print(value is not None)  # False

value = 42
print(value is None)      # False</code></pre><p><strong>Output:</strong></p><pre><code>True
False
False</code></pre><h3>None vs Other "Empty" Values</h3><p>None is different from:</p><ul><li><code>0</code> — zero is a number, it has a value</li><li><code>""</code> — empty string is still a string</li><li><code>False</code> — False is a boolean value</li></ul><p>None means <em>no value at all</em>. It's its own special type: <code>NoneType</code>.</p><pre><code>print(type(None))  # &lt;class 'NoneType'&gt;</code></pre>`,
          challenge: {
            description: `Create a variable called "data" set to None. Print it. Then assign it the value 42 and print it again.`,
            starterCode: `# Create data as None

# Print data

# Assign 42 to data

# Print data again
`,
            expectedOutput: `None
42`,
            hints: ['data = None', 'Print once, reassign, then print again', 'Variables can be reassigned: data = 42']
          },
          quiz: [
            {
              question: `What does None represent in Python?`,
              options: ['Zero', 'An empty string', 'The absence of a value', 'False'],
              correct: 2
            },
            {
              question: `What is the type of None?`,
              options: ['bool', 'int', 'NoneType', 'void'],
              correct: 2
            },
            {
              question: `How do you check if a variable is None?`,
              options: ['x == None', 'x is None', 'x = None', 'isNone(x)'],
              correct: 1
            },
            {
              question: `Is None the same as 0?`,
              options: ['Yes', 'No, None means no value while 0 is a number', 'Only in Python 3', 'They are interchangeable'],
              correct: 1
            },
            {
              question: `What does "data = None" mean?`,
              options: ['data is deleted', 'data has no value assigned yet', 'data equals zero', 'data is an error'],
              correct: 1
            }
          ]
        },
        {
          id: `recap_initialize_variables`,
          title: `Recap - Initialize Variables`,
          type: `mastery`,
          theory: `<h2>Recap: Variables in Python</h2><p>Let's review everything we've learned about variables.</p><h3>Data Types Summary</h3><table><tr><th>Type</th><th>Example</th><th>Description</th></tr><tr><td>int</td><td><code>42</code></td><td>Whole numbers</td></tr><tr><td>float</td><td><code>3.14</code></td><td>Decimal numbers</td></tr><tr><td>str</td><td><code>"hello"</code></td><td>Text</td></tr><tr><td>bool</td><td><code>True</code></td><td>True/False values</td></tr><tr><td>NoneType</td><td><code>None</code></td><td>No value</td></tr></table><h3>Variable Assignment</h3><pre><code># Single assignment
name = "Alice"

# Multiple assignment on one line
x, y, z = 1, 2, 3

# Same value to multiple variables
a = b = c = 0</code></pre><h3>Multiple Assignment</h3><p>Python allows you to assign multiple variables in one line:</p><pre><code>x, y = 10, 20
print(x)  # 10
print(y)  # 20</code></pre><h3>Reassignment</h3><p>Variables can change value and even change type:</p><pre><code>x = 10      # x is an int
x = "ten"   # now x is a string
print(x)    # ten</code></pre><h3>String Concatenation with Variables</h3><pre><code>first = "John"
last = "Doe"
full = first + " " + last
print(full)  # John Doe</code></pre>`,
          challenge: {
            description: `Create variables: name = "Python", version = 3, is_fun = True. Print each on a separate line.`,
            starterCode: `# Initialize all three variables

# Print each one
`,
            expectedOutput: `Python
3
True`,
            hints: ['name = "Python"', 'version = 3', 'Use three print() statements']
          },
          mastery: {
            description: `Create variables first_name = "John" and last_name = "Doe". Print them concatenated with a space: "John Doe". Then create age = 30 and is_employed = True, and print those on separate lines.`,
            starterCode: `# Create first_name and last_name

# Print full name (concatenated with space)

# Create age and is_employed

# Print age and is_employed
`,
            expectedOutput: `John Doe
30
True`,
            hints: [
              `full_name = first_name + " " + last_name`,
              `Use print() for each output line`,
              `Remember: four variables total, three print statements`
            ]
          },
          quiz: [
            {
              question: `What does x, y = 5, 10 do?`,
              options: ['Creates a tuple', 'Assigns 5 to x and 10 to y', 'Causes an error', 'Assigns 10 to both'],
              correct: 1
            },
            {
              question: `Can a variable change its type after assignment?`,
              options: ['No, types are fixed', 'Yes, Python allows dynamic typing', 'Only with a cast', 'Only from int to float'],
              correct: 1
            },
            {
              question: `What is the output of: x = 5; x = "five"; print(x)?`,
              options: ['5', 'five', 'Error', '5five'],
              correct: 1
            },
            {
              question: `Which correctly assigns the same value to three variables?`,
              options: ['a, b, c = 0', 'a = b = c = 0', 'a & b & c = 0', 'a = 0, b = 0, c = 0'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: `operators_part_1`,
      title: `Operators Part 1`,
      lessons: [
        {
          id: `arithmetic_operators`,
          title: `Arithmetic Operators`,
          type: `challenge`,
          theory: `<h2>Arithmetic Operators</h2><p>Python can perform mathematical calculations just like a calculator. The basic arithmetic operators are:</p><table><tr><th>Operator</th><th>Name</th><th>Example</th><th>Result</th></tr><tr><td><code>+</code></td><td>Addition</td><td><code>5 + 3</code></td><td>8</td></tr><tr><td><code>-</code></td><td>Subtraction</td><td><code>10 - 4</code></td><td>6</td></tr><tr><td><code>*</code></td><td>Multiplication</td><td><code>6 * 7</code></td><td>42</td></tr><tr><td><code>/</code></td><td>Division</td><td><code>15 / 4</code></td><td>3.75</td></tr><tr><td><code>//</code></td><td>Floor Division</td><td><code>15 // 4</code></td><td>3</td></tr><tr><td><code>**</code></td><td>Exponent</td><td><code>2 ** 3</code></td><td>8</td></tr></table><h3>Important Notes</h3><ul><li><strong>Division (<code>/</code>)</strong> always returns a float, even if the result is whole: <code>10 / 2</code> gives <code>5.0</code></li><li><strong>Floor Division (<code>//</code>)</strong> rounds down to the nearest integer: <code>7 // 2</code> gives <code>3</code></li><li><strong>Exponent (<code>**</code>)</strong> means "to the power of": <code>2 ** 3</code> = 2 × 2 × 2 = 8</li></ul><h3>Order of Operations</h3><p>Python follows standard math order (PEMDAS): Parentheses, Exponents, Multiplication/Division, Addition/Subtraction.</p><pre><code>result = 2 + 3 * 4
print(result)  # 14, not 20

result = (2 + 3) * 4
print(result)  # 20</code></pre><h3>Using Variables in Math</h3><pre><code>price = 25
tax = 5
total = price + tax
print(total)  # 30</code></pre>`,
          challenge: {
            description: `Calculate and print the result of: 15 divided by 4 (regular division), and 15 floor-divided by 4. Print each on a new line.`,
            starterCode: `# Regular division of 15 by 4

# Floor division of 15 by 4
`,
            expectedOutput: `3.75
3`,
            hints: ['Regular division uses /', 'Floor division uses //', 'print(15 / 4)']
          },
          quiz: [
            {
              question: `What does 10 / 2 return in Python?`,
              options: ['5', '5.0', '5.00', 'Error'],
              correct: 1
            },
            {
              question: `What does 7 // 2 return?`,
              options: ['3.5', '3', '4', '3.0'],
              correct: 1
            },
            {
              question: `What is 2 ** 4?`,
              options: ['8', '16', '6', '24'],
              correct: 1
            },
            {
              question: `What is the result of 2 + 3 * 4?`,
              options: ['20', '14', '24', '12'],
              correct: 1
            },
            {
              question: `What is the result of 5 / 5?`,
              options: ['1', '1.0', '0', 'Error'],
              correct: 1
            }
          ]
        },
        {
          id: `modulo_operator`,
          title: `Modulo Operator`,
          type: `challenge`,
          theory: `<h2>The Modulo Operator (%)</h2><p>The <strong>modulo operator</strong> (<code>%</code>) returns the <strong>remainder</strong> of a division. It's one of the most useful operators in programming.</p><h3>How It Works</h3><pre><code>print(10 % 3)  # 1 (10 / 3 = 3 remainder 1)
print(15 % 5)  # 0 (15 / 5 = 3 remainder 0)
print(7 % 2)   # 1 (7 / 2 = 3 remainder 1)
print(8 % 2)   # 0 (8 / 2 = 4 remainder 0)</code></pre><p><strong>Output:</strong></p><pre><code>1
0
1
0</code></pre><h3>Common Uses</h3><ul><li><strong>Check if a number is even or odd:</strong> If <code>n % 2 == 0</code>, the number is even. If <code>n % 2 == 1</code>, it's odd.</li><li><strong>Check divisibility:</strong> If <code>n % 5 == 0</code>, the number is divisible by 5.</li><li><strong>Wrap around:</strong> Keep a value within a range (like clock math — hour 13 becomes 1).</li></ul><h3>Even/Odd Example</h3><pre><code>number = 7
remainder = number % 2
print(remainder)  # 1 (odd)

number = 12
remainder = number % 2
print(remainder)  # 0 (even)</code></pre><h3>Think of It Like This</h3><p>If you have 10 candies and share them among 3 friends equally, each gets 3 (that's <code>10 // 3</code>). You have 1 left over (that's <code>10 % 3</code>).</p>`,
          challenge: {
            description: `Print the remainder when 17 is divided by 5. Then print the remainder when 20 is divided by 4.`,
            starterCode: `# Remainder of 17 divided by 5

# Remainder of 20 divided by 4
`,
            expectedOutput: `2
0`,
            hints: ['Use the % operator', '17 % 5 gives the remainder', 'print(17 % 5)']
          },
          quiz: [
            {
              question: `What does 10 % 3 return?`,
              options: ['3', '1', '0', '3.33'],
              correct: 1
            },
            {
              question: `How do you check if a number is even?`,
              options: ['number / 2 == 0', 'number % 2 == 0', 'number // 2 == 0', 'number * 2 == 0'],
              correct: 1
            },
            {
              question: `What is 15 % 5?`,
              options: ['3', '0', '5', '1'],
              correct: 1
            },
            {
              question: `What does the modulo operator return?`,
              options: ['The quotient', 'The remainder', 'The divisor', 'The product'],
              correct: 1
            },
            {
              question: `What is 100 % 10?`,
              options: ['10', '0', '1', '100'],
              correct: 1
            }
          ]
        },
        {
          id: `arithmetic_shortcuts`,
          title: `Arithmetic Shortcuts`,
          type: `challenge`,
          theory: `<h2>Arithmetic Shortcut Operators</h2><p>When you want to update a variable using its current value, Python provides shortcut operators. Instead of writing <code>x = x + 5</code>, you can write <code>x += 5</code>.</p><h3>All Shortcut Operators</h3><table><tr><th>Shortcut</th><th>Equivalent</th><th>Meaning</th></tr><tr><td><code>x += 5</code></td><td><code>x = x + 5</code></td><td>Add and assign</td></tr><tr><td><code>x -= 3</code></td><td><code>x = x - 3</code></td><td>Subtract and assign</td></tr><tr><td><code>x *= 2</code></td><td><code>x = x * 2</code></td><td>Multiply and assign</td></tr><tr><td><code>x /= 4</code></td><td><code>x = x / 4</code></td><td>Divide and assign</td></tr><tr><td><code>x //= 3</code></td><td><code>x = x // 3</code></td><td>Floor divide and assign</td></tr><tr><td><code>x %= 2</code></td><td><code>x = x % 2</code></td><td>Modulo and assign</td></tr><tr><td><code>x **= 3</code></td><td><code>x = x ** 3</code></td><td>Exponent and assign</td></tr></table><h3>Example</h3><pre><code>score = 10
score += 5   # score is now 15
print(score)

score *= 2   # score is now 30
print(score)

score -= 10  # score is now 20
print(score)</code></pre><p><strong>Output:</strong></p><pre><code>15
30
20</code></pre><h3>Why Use Shortcuts?</h3><p>They're shorter to write and clearly show intent: "modify this variable." They're especially useful in loops where you're incrementing a counter or accumulating a total.</p>`,
          challenge: {
            description: `Start with x = 10. Add 5 to it, then multiply it by 2, then subtract 6. Print x after each operation.`,
            starterCode: `x = 10
# Add 5 to x and print

# Multiply x by 2 and print

# Subtract 6 from x and print
`,
            expectedOutput: `15
30
24`,
            hints: ['Use += to add: x += 5', 'Use *= to multiply: x *= 2', 'Use -= to subtract: x -= 6']
          },
          quiz: [
            {
              question: `What is x += 3 equivalent to?`,
              options: ['x = 3', 'x + 3', 'x = x + 3', 'x == x + 3'],
              correct: 2
            },
            {
              question: `If x = 10, what is x after x *= 3?`,
              options: ['13', '30', '7', '10'],
              correct: 1
            },
            {
              question: `If x = 20, what is x after x //= 3?`,
              options: ['6.67', '7', '6', '20'],
              correct: 2
            },
            {
              question: `Why are shortcut operators useful?`,
              options: ['They run faster', 'They use less memory', 'They are shorter and show intent clearly', 'Python requires them'],
              correct: 2
            },
            {
              question: `What is x after: x = 5; x **= 2?`,
              options: ['10', '25', '7', '32'],
              correct: 1
            }
          ]
        },
        {
          id: `recap_simple_math`,
          title: `Recap - Simple Math`,
          type: `mastery`,
          theory: `<h2>Recap: Arithmetic in Python</h2><p>Let's consolidate what we know about doing math in Python.</p><h3>Complete Operator Reference</h3><pre><code>a = 20
b = 7

print(a + b)   # 27  (addition)
print(a - b)   # 13  (subtraction)
print(a * b)   # 140 (multiplication)
print(a / b)   # 2.857... (division - always float)
print(a // b)  # 2   (floor division)
print(a % b)   # 6   (modulo/remainder)
print(a ** b)  # 1280000000 (power)</code></pre><h3>Combining Operations</h3><p>You can combine multiple operations and use parentheses to control order:</p><pre><code># Calculate area of a triangle
base = 10
height = 6
area = (base * height) / 2
print(area)  # 30.0</code></pre><h3>Integer vs Float Results</h3><ul><li><code>+</code>, <code>-</code>, <code>*</code> with two ints → int result</li><li><code>/</code> always → float result</li><li><code>//</code> with two ints → int result</li><li>Any operation mixing int and float → float result</li></ul><pre><code>print(5 + 3)    # 8 (int)
print(5 + 3.0)  # 8.0 (float because 3.0 is float)</code></pre>`,
          challenge: {
            description: `Given length = 8 and width = 5, calculate and print the area (length * width) and perimeter (2 * (length + width)).`,
            starterCode: `length = 8
width = 5

# Calculate and print area

# Calculate and print perimeter
`,
            expectedOutput: `40
26`,
            hints: ['area = length * width', 'perimeter = 2 * (length + width)', 'Use parentheses to control order of operations']
          },
          mastery: {
            description: `A store has an item priced at 150. There is a 20% discount. Calculate the discount amount, the final price, and print both. Then calculate how many $7 bills you need (floor division) and how much change remains (modulo). Print those too.`,
            starterCode: `price = 150
discount_rate = 20
bill = 7

# Calculate discount amount (price * discount_rate / 100)

# Calculate final price

# Print discount amount

# Print final price

# Calculate and print number of $7 bills needed

# Calculate and print remaining change
`,
            expectedOutput: `30.0
120.0
17
1.0`,
            hints: [
              `discount = price * discount_rate / 100`,
              `final = price - discount`,
              `bills_needed = int(final) // bill`,
              `change = final % bill`
            ]
          },
          quiz: [
            {
              question: `What does 10 / 5 return?`,
              options: ['2', '2.0', '2.5', 'Error'],
              correct: 1
            },
            {
              question: `What does 5 + 2.0 return?`,
              options: ['7', '7.0', 'Error', '5.02'],
              correct: 1
            },
            {
              question: `What is (10 + 5) * 2?`,
              options: ['20', '30', '25', '15'],
              correct: 1
            },
            {
              question: `If x = 10, what is x after x += 5; x *= 2?`,
              options: ['25', '30', '20', '40'],
              correct: 1
            },
            {
              question: `What is the result of 2 ** 10?`,
              options: ['20', '100', '1024', '512'],
              correct: 2
            }
          ]
        },
        {
          id: `comparison_operators`,
          title: `Comparison Operators`,
          type: `mastery`,
          theory: `<h2>Comparison Operators</h2><p>Comparison operators compare two values and return a <strong>boolean</strong> (<code>True</code> or <code>False</code>). They are essential for making decisions in your programs.</p><h3>All Comparison Operators</h3><table><tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr><tr><td><code>==</code></td><td>Equal to</td><td><code>5 == 5</code></td><td>True</td></tr><tr><td><code>!=</code></td><td>Not equal to</td><td><code>5 != 3</code></td><td>True</td></tr><tr><td><code>&gt;</code></td><td>Greater than</td><td><code>7 &gt; 3</code></td><td>True</td></tr><tr><td><code>&lt;</code></td><td>Less than</td><td><code>3 &lt; 7</code></td><td>True</td></tr><tr><td><code>&gt;=</code></td><td>Greater or equal</td><td><code>5 &gt;= 5</code></td><td>True</td></tr><tr><td><code>&lt;=</code></td><td>Less or equal</td><td><code>4 &lt;= 5</code></td><td>True</td></tr></table><h3>Important: == vs =</h3><p><code>=</code> is <strong>assignment</strong> (puts a value into a variable). <code>==</code> is <strong>comparison</strong> (checks if two values are equal). This is a common source of bugs!</p><pre><code>x = 10       # Assigns 10 to x
print(x == 10)  # Checks if x equals 10 → True
print(x == 5)   # Checks if x equals 5 → False</code></pre><h3>Comparing Variables</h3><pre><code>age = 18
print(age >= 18)   # True
print(age > 18)    # False
print(age == 18)   # True
print(age != 21)   # True</code></pre><p><strong>Output:</strong></p><pre><code>True
False
True
True</code></pre><h3>Comparing Strings</h3><p>You can also compare strings:</p><pre><code>print("hello" == "hello")  # True
print("hello" == "Hello")  # False (case matters!)</code></pre>`,
          challenge: {
            description: `Given x = 15 and y = 20, print the result of: x > y, x < y, x == y, and x != y (each on a new line).`,
            starterCode: `x = 15
y = 20

# Print x > y

# Print x < y

# Print x == y

# Print x != y
`,
            expectedOutput: `False
True
False
True`,
            hints: [
              `print(x > y) will print False because 15 is not greater than 20`,
              `Use == for equality comparison`,
              `!= means not equal to`
            ]
          },
          quiz: [
            {
              question: `What is the difference between = and ==?`,
              options: ['No difference', '= assigns, == compares', '= compares, == assigns', '== is for strings only'],
              correct: 1
            },
            {
              question: `What does 5 != 5 return?`,
              options: ['True', 'False', 'Error', '0'],
              correct: 1
            },
            {
              question: `What does "hello" == "Hello" return?`,
              options: ['True', 'False', 'Error', 'hello'],
              correct: 1
            },
            {
              question: `What does 10 >= 10 return?`,
              options: ['True', 'False', 'Error', '10'],
              correct: 0
            },
            {
              question: `What type does a comparison return?`,
              options: ['int', 'str', 'bool', 'float'],
              correct: 2
            }
          ],
          mastery: {
            description: `Given a = 10, b = 20, c = 10: Print the results of all these comparisons on separate lines: a == c, a != b, b > a, a >= c, b <= a.`,
            starterCode: `a = 10
b = 20
c = 10

# Print all comparison results
`,
            expectedOutput: `True
True
True
True
False`,
            hints: ['print(a == c) compares 10 == 10', 'Each print statement outputs one boolean', 'b <= a checks if 20 <= 10']
          }
        }
      ]
    },
    {
      id: `operators_part_2`,
      title: `Operators Part 2`,
      lessons: [
        {
          id: `logical_operators_part_1`,
          title: `Logical Operators Part 1`,
          type: `challenge`,
          theory: `<h2>Logical Operators: and</h2><p>Logical operators combine multiple conditions. The <code>and</code> operator returns <code>True</code> only when <strong>both</strong> conditions are True.</p><p>Think of it like a door with two locks — you need both keys (both conditions True) to open it.</p><h3>The "and" Operator</h3><pre><code>print(True and True)    # True
print(True and False)   # False
print(False and True)   # False
print(False and False)  # False</code></pre><p><strong>Rule:</strong> <code>and</code> is True only when BOTH sides are True.</p><h3>Practical Example</h3><pre><code>age = 25
has_license = True

# Can this person drive?
can_drive = age >= 18 and has_license
print(can_drive)  # True</code></pre><p>Both conditions must be met: they must be 18+ AND have a license.</p><h3>More Examples</h3><pre><code>temperature = 22
print(temperature > 15 and temperature < 30)  # True (nice day!)

score = 85
print(score >= 90 and score <= 100)  # False (not an A grade)</code></pre><p><strong>Output:</strong></p><pre><code>True
False</code></pre><h3>Truth Table for "and"</h3><table><tr><th>A</th><th>B</th><th>A and B</th></tr><tr><td>True</td><td>True</td><td>True</td></tr><tr><td>True</td><td>False</td><td>False</td></tr><tr><td>False</td><td>True</td><td>False</td></tr><tr><td>False</td><td>False</td><td>False</td></tr></table>`,
          challenge: {
            description: `Given age = 20 and has_id = True, print whether both conditions are met (age >= 18 and has_id). Then given score = 75, print whether score is between 80 and 100 (inclusive).`,
            starterCode: `age = 20
has_id = True
score = 75

# Print if age >= 18 and has_id

# Print if score >= 80 and score <= 100
`,
            expectedOutput: `True
False`,
            hints: ['Use the and operator to combine conditions', 'print(age >= 18 and has_id)', 'print(score >= 80 and score <= 100)']
          },
          quiz: [
            {
              question: `What does True and False return?`,
              options: ['True', 'False', 'Error', 'None'],
              correct: 1
            },
            {
              question: `When does "and" return True?`,
              options: ['When either side is True', 'When both sides are True', 'When neither side is True', 'Always'],
              correct: 1
            },
            {
              question: `What does (5 > 3) and (10 < 20) return?`,
              options: ['True', 'False', 'Error', '5'],
              correct: 0
            },
            {
              question: `What does (5 > 3) and (10 > 20) return?`,
              options: ['True', 'False', 'Error', '10'],
              correct: 1
            },
            {
              question: `How many conditions must be True for "and" to return True?`,
              options: ['One', 'All of them', 'None', 'At least one'],
              correct: 1
            }
          ]
        },
        {
          id: `logical_operators_part_2`,
          title: `Logical Operators Part 2`,
          type: `challenge`,
          theory: `<h2>Logical Operators: or</h2><p>The <code>or</code> operator returns <code>True</code> when <strong>at least one</strong> condition is True.</p><p>Think of it like a door with two handles — you only need to pull one (either condition True) to open it.</p><h3>The "or" Operator</h3><pre><code>print(True or True)    # True
print(True or False)   # True
print(False or True)   # True
print(False or False)  # False</code></pre><p><strong>Rule:</strong> <code>or</code> is True when at least one side is True. It's only False when BOTH sides are False.</p><h3>Practical Example</h3><pre><code>is_weekend = True
is_holiday = False

# Can I sleep in?
can_sleep_in = is_weekend or is_holiday
print(can_sleep_in)  # True (it's the weekend!)</code></pre><h3>More Examples</h3><pre><code>age = 15
has_permission = True

# Can they enter? (either 18+ OR has permission)
can_enter = age >= 18 or has_permission
print(can_enter)  # True

temp = 5
# Is it extreme weather?
extreme = temp > 40 or temp < -10
print(extreme)  # False</code></pre><p><strong>Output:</strong></p><pre><code>True
False</code></pre><h3>Truth Table for "or"</h3><table><tr><th>A</th><th>B</th><th>A or B</th></tr><tr><td>True</td><td>True</td><td>True</td></tr><tr><td>True</td><td>False</td><td>True</td></tr><tr><td>False</td><td>True</td><td>True</td></tr><tr><td>False</td><td>False</td><td>False</td></tr></table>`,
          challenge: {
            description: `Given is_member = False and has_coupon = True, print whether the customer gets a discount (is_member or has_coupon). Then given x = 50, print whether x is less than 10 or greater than 100.`,
            starterCode: `is_member = False
has_coupon = True
x = 50

# Print if customer gets discount

# Print if x < 10 or x > 100
`,
            expectedOutput: `True
False`,
            hints: ['Use the or operator', 'print(is_member or has_coupon)', 'print(x < 10 or x > 100)']
          },
          quiz: [
            {
              question: `What does False or True return?`,
              options: ['False', 'True', 'Error', 'None'],
              correct: 1
            },
            {
              question: `When does "or" return False?`,
              options: ['When either side is False', 'When both sides are False', 'When both sides are True', 'Never'],
              correct: 1
            },
            {
              question: `What does (5 > 10) or (3 < 7) return?`,
              options: ['False', 'True', 'Error', '3'],
              correct: 1
            },
            {
              question: `If is_admin = False and is_owner = False, what is is_admin or is_owner?`,
              options: ['True', 'False', 'None', 'Error'],
              correct: 1
            },
            {
              question: `What is True or True?`,
              options: ['False', 'True', 'Error', 'None'],
              correct: 1
            }
          ]
        },
        {
          id: `recap_simple_logic`,
          title: `Recap - Simple Logic`,
          type: `mastery`,
          theory: `<h2>Recap: Combining and & or</h2><p>Now that you know both <code>and</code> and <code>or</code>, let's see how they work together.</p><h3>Operator Precedence</h3><p><code>and</code> has higher precedence than <code>or</code> (just like multiplication before addition). So:</p><pre><code>print(True or False and False)
# This is: True or (False and False)
# = True or False
# = True</code></pre><p>Use parentheses to make your intent clear:</p><pre><code>print((True or False) and False)  # False
print(True or (False and False))  # True</code></pre><h3>Practical Example</h3><pre><code>age = 25
is_student = True
is_senior = False

# Discount if student OR senior
gets_discount = is_student or is_senior
print(gets_discount)  # True

# VIP access if 21+ AND (student OR senior)
vip = age >= 21 and (is_student or is_senior)
print(vip)  # True</code></pre><p><strong>Output:</strong></p><pre><code>True
True</code></pre><h3>Complex Conditions</h3><pre><code>score = 85
attendance = 90

# Pass if score >= 60 AND attendance >= 75
passes = score >= 60 and attendance >= 75
print(passes)  # True</code></pre>`,
          challenge: {
            description: `Given x = 15, print whether x is between 10 and 20 (inclusive) using "and". Then print whether x equals 10 or x equals 15 using "or".`,
            starterCode: `x = 15

# Print if x is between 10 and 20 inclusive

# Print if x equals 10 or x equals 15
`,
            expectedOutput: `True
True`,
            hints: ['x >= 10 and x <= 20', 'x == 10 or x == 15', 'Both should print True for x = 15']
          },
          mastery: {
            description: `Given age = 17, is_accompanied = True, and has_ticket = True: Print whether the person can enter a movie (must have ticket AND must be either 18+ or accompanied). Then print whether they can buy popcorn (just need the ticket).`,
            starterCode: `age = 17
is_accompanied = True
has_ticket = True

# Can enter: has_ticket AND (age >= 18 OR is_accompanied)

# Can buy popcorn: has_ticket
`,
            expectedOutput: `True
True`,
            hints: [
              `can_enter = has_ticket and (age >= 18 or is_accompanied)`,
              `Use parentheses around the or condition`,
              `print(has_ticket) for popcorn`
            ]
          },
          quiz: [
            {
              question: `Which has higher precedence: and or or?`,
              options: ['or', 'and', 'They are equal', 'Depends on context'],
              correct: 1
            },
            {
              question: `What is True or False and False?`,
              options: ['False', 'True', 'Error', 'None'],
              correct: 1
            },
            {
              question: `What is (True or False) and False?`,
              options: ['True', 'False', 'Error', 'None'],
              correct: 1
            },
            {
              question: `To check if x is between 5 and 10, which is correct?`,
              options: ['5 < x < 10', 'x > 5 and x < 10', 'Both are valid Python', 'x between 5 and 10'],
              correct: 2
            }
          ]
        },
        {
          id: `logical_operators_part_3`,
          title: `Logical Operators Part 3`,
          type: `challenge`,
          theory: `<h2>The "not" Operator</h2><p>The <code>not</code> operator <strong>flips</strong> a boolean value. <code>True</code> becomes <code>False</code>, and <code>False</code> becomes <code>True</code>.</p><p>Think of it as the word "not" in English: "It is NOT raining" is the opposite of "It is raining."</p><h3>Basic Usage</h3><pre><code>print(not True)   # False
print(not False)  # True</code></pre><h3>With Variables</h3><pre><code>is_raining = False
print(not is_raining)  # True (it is NOT raining)

is_logged_in = True
print(not is_logged_in)  # False</code></pre><p><strong>Output:</strong></p><pre><code>True
False</code></pre><h3>With Expressions</h3><pre><code>age = 15
print(not age >= 18)  # True (they are NOT 18 or older)

x = 10
print(not x == 5)  # True (x is NOT equal to 5)</code></pre><h3>Combining with and/or</h3><pre><code>has_ticket = True
is_banned = False

# Can enter if has ticket AND is NOT banned
can_enter = has_ticket and not is_banned
print(can_enter)  # True</code></pre><h3>Operator Precedence</h3><p>The order is: <code>not</code> (highest) → <code>and</code> → <code>or</code> (lowest)</p><pre><code>print(not False and True)  # (not False) and True = True and True = True
print(not (False and True))  # not (False) = not False = True</code></pre>`,
          challenge: {
            description: `Given is_closed = True, print the result of "not is_closed". Then given x = 7, print "not (x > 10)".`,
            starterCode: `is_closed = True
x = 7

# Print not is_closed

# Print not (x > 10)
`,
            expectedOutput: `False
True`,
            hints: ['not True becomes False', 'x > 10 is False, so not False is True', 'print(not is_closed)']
          },
          quiz: [
            {
              question: `What does not True return?`,
              options: ['True', 'False', 'None', 'Error'],
              correct: 1
            },
            {
              question: `What does not (5 > 10) return?`,
              options: ['False', 'True', 'Error', '5'],
              correct: 1
            },
            {
              question: `What is the precedence order (highest to lowest)?`,
              options: ['and, or, not', 'or, and, not', 'not, and, or', 'not, or, and'],
              correct: 2
            },
            {
              question: `If is_open = False, what is not is_open?`,
              options: ['False', 'True', 'None', 'Error'],
              correct: 1
            },
            {
              question: `What is not not True?`,
              options: ['True', 'False', 'Error', 'None'],
              correct: 0
            }
          ]
        },
        {
          id: `logical_operators_part_4`,
          title: `Logical Operators Part 4`,
          type: `challenge`,
          theory: `<h2>Combining All Logical Operators</h2><p>Now let's put <code>and</code>, <code>or</code>, and <code>not</code> together for complex conditions.</p><h3>Real-World Scenario</h3><p>Imagine a theme park ride with these rules:</p><ul><li>Must be at least 120cm tall</li><li>Must NOT have a heart condition</li><li>Must either be 12+ years old OR accompanied by an adult</li></ul><pre><code>height = 130
has_heart_condition = False
age = 10
is_accompanied = True

can_ride = height >= 120 and not has_heart_condition and (age >= 12 or is_accompanied)
print(can_ride)  # True</code></pre><h3>Breaking It Down</h3><pre><code># height >= 120         → True
# not has_heart_condition → True (not False = True)
# age >= 12             → False
# is_accompanied        → True
# (age >= 12 or is_accompanied) → True
# True and True and True → True</code></pre><h3>Short-Circuit Evaluation</h3><p>Python is smart — it stops evaluating as soon as it knows the result:</p><ul><li><code>False and ...</code> → Python won't even check the right side (result is always False)</li><li><code>True or ...</code> → Python won't check the right side (result is always True)</li></ul><pre><code>x = 0
# Python won't evaluate x/0 because the first part is False
result = x != 0 and 10/x > 2
print(result)  # False (no division by zero error!)</code></pre>`,
          challenge: {
            description: `Given: temp = 25, is_sunny = True, is_weekend = False. Print whether it is good for a picnic (temp between 20-35 AND is_sunny AND is_weekend). Then print whether you would go outside (good weather: temp between 20-35 AND is_sunny, OR it is the weekend).`,
            starterCode: `temp = 25
is_sunny = True
is_weekend = False

# Good for picnic: temp 20-35 AND sunny AND weekend

# Go outside: (temp 20-35 AND sunny) OR weekend
`,
            expectedOutput: `False
True`,
            hints: [
              `picnic = temp >= 20 and temp <= 35 and is_sunny and is_weekend`,
              `outside = (temp >= 20 and temp <= 35 and is_sunny) or is_weekend`,
              `The picnic is False because is_weekend is False`
            ]
          },
          quiz: [
            {
              question: `What is short-circuit evaluation?`,
              options: [
                `Evaluating all conditions`,
                `Stopping evaluation when the result is already determined`,
                `A type of error`,
                `Evaluating conditions in reverse`
              ],
              correct: 1
            },
            {
              question: `In "False and X", is X evaluated?`,
              options: ['Yes', 'No, result is already False', 'Only if X is True', 'Depends on X'],
              correct: 1
            },
            {
              question: `What is not True and False?`,
              options: ['True', 'False', 'Error', 'None'],
              correct: 1
            },
            {
              question: `What is not (True and False)?`,
              options: ['True', 'False', 'Error', 'None'],
              correct: 0
            },
            {
              question: `In "True or ...", does Python check the right side?`,
              options: ['Yes always', 'No, short-circuit makes it skip', 'Only for and', 'Depends on the value'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: `decision_making`,
      title: `Decision Making`,
      lessons: [
        {
          id: `if_statement`,
          title: `If Statement`,
          type: `mastery`,
          theory: `<h2>The if Statement</h2><p>The <code>if</code> statement lets your program make decisions. It runs a block of code <strong>only if</strong> a condition is True.</p><p>Think of it like a gate: if the condition is met, you go through; otherwise, you walk past.</p><h3>Syntax</h3><pre><code>if condition:
    # This code runs only if condition is True
    print("Condition was true!")</code></pre><p><strong>Key rules:</strong></p><ul><li>The condition is followed by a colon <code>:</code></li><li>The code inside must be <strong>indented</strong> (4 spaces or 1 tab)</li><li>Indentation tells Python which code belongs to the if block</li></ul><h3>Example</h3><pre><code>age = 20

if age >= 18:
    print("You are an adult")

print("Program continues")</code></pre><p><strong>Output:</strong></p><pre><code>You are an adult
Program continues</code></pre><p>The first print runs because the condition is True. The second print always runs — it's not indented under the if, so it's outside the block.</p><h3>When Condition is False</h3><pre><code>age = 15

if age >= 18:
    print("You are an adult")

print("Program continues")</code></pre><p><strong>Output:</strong></p><pre><code>Program continues</code></pre><p>The indented line is skipped because the condition is False.</p><h3>Common Mistakes</h3><ul><li>Forgetting the colon: <code>if age >= 18</code> ← missing <code>:</code></li><li>Wrong indentation: code must be indented under the if</li><li>Using <code>=</code> instead of <code>==</code>: <code>if x = 5:</code> is wrong</li></ul>`,
          challenge: {
            description: `Given score = 85, write an if statement that prints "Pass" if score is 60 or above. Then (outside the if) print "Done".`,
            starterCode: `score = 85

# If score >= 60, print "Pass"

# Always print "Done"
print("Done")
`,
            expectedOutput: `Pass
Done`,
            hints: ['if score >= 60:', '    print("Pass")', 'The indented code runs only when the condition is True']
          },
          quiz: [
            {
              question: `What must come at the end of an if statement line?`,
              options: ['A semicolon ;', 'A colon :', 'Parentheses ()', 'A period .'],
              correct: 1
            },
            {
              question: `How does Python know which code is inside an if block?`,
              options: ['Curly braces {}', 'Indentation', 'The "end" keyword', 'Line numbers'],
              correct: 1
            },
            {
              question: `What happens if the if condition is False?`,
              options: ['Error occurs', 'Program stops', 'The indented block is skipped', 'None is printed'],
              correct: 2
            },
            {
              question: `Which is correct syntax?`,
              options: ['if x == 5:', 'if x = 5:', 'if (x == 5)', 'if x == 5 then:'],
              correct: 0
            },
            {
              question: `How many spaces is standard Python indentation?`,
              options: ['2', '4', '8', '1 tab only'],
              correct: 1
            }
          ],
          mastery: {
            description: `Given temperature = 35 and is_sunny = True: If temperature > 30, print "Hot!". If is_sunny is True, print "Sunny!". These are independent checks (both can print).`,
            starterCode: `temperature = 35
is_sunny = True

# Independent if checks
`,
            expectedOutput: `Hot!
Sunny!`,
            hints: ['Two separate if statements (not if/elif)', 'if temperature > 30: print("Hot!")', 'if is_sunny: print("Sunny!")']
          }
        },
        {
          id: `if_else`,
          title: `If - Else`,
          type: `challenge`,
          theory: `<h2>The if-else Statement</h2><p>Sometimes you want to do one thing if a condition is True, and something <em>different</em> if it's False. That's what <code>else</code> is for.</p><h3>Syntax</h3><pre><code>if condition:
    # Runs when condition is True
else:
    # Runs when condition is False</code></pre><p>Think of it as a fork in the road: you MUST go one way or the other.</p><h3>Example</h3><pre><code>age = 15

if age >= 18:
    print("Adult")
else:
    print("Minor")</code></pre><p><strong>Output:</strong> <code>Minor</code></p><p>Since 15 is not >= 18, the else block runs.</p><h3>The elif Statement</h3><p>When you have more than two options, use <code>elif</code> (short for "else if"):</p><pre><code>score = 75

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")</code></pre><p><strong>Output:</strong> <code>C</code></p><p>Python checks conditions from top to bottom and runs the FIRST one that's True. Once a match is found, the rest are skipped.</p><h3>Key Points</h3><ul><li>You can have multiple <code>elif</code> blocks</li><li><code>else</code> is optional and catches everything that didn't match</li><li>Only ONE block ever runs in an if/elif/else chain</li></ul>`,
          challenge: {
            description: `Given number = 0, print "Positive" if it is greater than 0, "Negative" if less than 0, or "Zero" if it equals 0.`,
            starterCode: `number = 0

# Check if positive, negative, or zero
`,
            expectedOutput: `Zero`,
            hints: [
              `Use if/elif/else structure`,
              `if number > 0: ... elif number < 0: ... else: ...`,
              `Since number is 0, the else block runs`
            ]
          },
          quiz: [
            {
              question: `How many blocks can run in an if/elif/else chain?`,
              options: ['All of them', 'Exactly one', 'At least one', 'Two'],
              correct: 1
            },
            {
              question: `What does elif stand for?`,
              options: ['else if', 'eliminate if', 'else finally', 'evaluate if'],
              correct: 0
            },
            {
              question: `Is the else block required?`,
              options: ['Yes, always', 'No, it is optional', 'Only with elif', 'Only in Python 3'],
              correct: 1
            },
            {
              question: `What happens if no condition matches and there is no else?`,
              options: ['Error occurs', 'None is printed', 'Nothing happens, program continues', 'Program stops'],
              correct: 2
            },
            {
              question: `Can you have elif without else?`,
              options: ['No', 'Yes', 'Only one elif', 'Only in Python 3'],
              correct: 1
            }
          ]
        },
        {
          id: `recap_simple_calculator`,
          title: `Recap - Simple Calculator`,
          type: `mastery`,
          theory: `<h2>Recap: Decision Making</h2><p>Let's combine variables, operators, and if/else to build useful logic.</p><h3>Pattern: Input → Process → Output</h3><p>Most programs follow this pattern:</p><ol><li>Get some data (variables)</li><li>Make decisions based on that data (if/elif/else)</li><li>Show the result (print)</li></ol><h3>Calculator Example</h3><pre><code>a = 10
b = 5
operation = "add"

if operation == "add":
    print(a + b)
elif operation == "subtract":
    print(a - b)
elif operation == "multiply":
    print(a * b)
else:
    print("Unknown operation")</code></pre><p><strong>Output:</strong> <code>15</code></p><h3>Combining Conditions</h3><pre><code>temperature = 25
humidity = 60

if temperature > 30 and humidity > 80:
    print("Hot and humid")
elif temperature > 30:
    print("Hot but dry")
elif temperature < 10:
    print("Cold")
else:
    print("Pleasant")</code></pre><p><strong>Output:</strong> <code>Pleasant</code></p>`,
          challenge: {
            description: `Given a = 20 and b = 4 and operation = "multiply", use if/elif/else to print the result of the operation. Support "add", "subtract", "multiply", "divide".`,
            starterCode: `a = 20
b = 4
operation = "multiply"

# Perform the operation and print the result
`,
            expectedOutput: `80`,
            hints: ['if operation == "add": print(a + b)', 'elif operation == "multiply": print(a * b)', 'Use == to compare strings']
          },
          mastery: {
            description: `Build a grade calculator: Given score = 72, print the letter grade based on: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60). Also print "Pass" or "Fail" (60+ is pass) on a second line.`,
            starterCode: `score = 72

# Determine and print the letter grade

# Print Pass or Fail
`,
            expectedOutput: `C
Pass`,
            hints: ['Use if/elif/else for grade ranges', 'if score >= 90: print("A")', 'A separate if/else at the end for Pass/Fail']
          },
          quiz: [
            {
              question: `In if/elif/else, conditions are checked in what order?`,
              options: ['Random', 'Top to bottom', 'Bottom to top', 'Alphabetical'],
              correct: 1
            },
            {
              question: `Can you use "and" inside an if condition?`,
              options: ['No', 'Yes', 'Only with elif', 'Only in loops'],
              correct: 1
            },
            {
              question: `What prints: if "add" == "add": print("yes")`,
              options: ['Nothing', 'yes', 'Error', 'add'],
              correct: 1
            },
            {
              question: `How do you compare strings in Python?`,
              options: ['Using =', 'Using ==', 'Using equals()', 'Using is'],
              correct: 1
            }
          ]
        },
        {
          id: `nested_if_else`,
          title: `Nested If - Else`,
          type: `challenge`,
          theory: `<h2>Nested If-Else</h2><p>You can place an if statement <strong>inside</strong> another if statement. This is called <strong>nesting</strong>. It's useful when you need to check a second condition only after the first one passes.</p><h3>Syntax</h3><pre><code>if outer_condition:
    if inner_condition:
        print("Both conditions met")
    else:
        print("Only outer met")
else:
    print("Outer not met")</code></pre><h3>Example: Access Control</h3><pre><code>has_account = True
is_verified = True

if has_account:
    if is_verified:
        print("Full access granted")
    else:
        print("Please verify your email")
else:
    print("Please create an account")</code></pre><p><strong>Output:</strong> <code>Full access granted</code></p><h3>Indentation Is Critical</h3><p>Each level of nesting requires another level of indentation:</p><pre><code>x = 15

if x > 0:
    print("Positive")        # 1 level indent
    if x > 10:
        print("Greater than 10")  # 2 levels indent
    else:
        print("10 or less")       # 2 levels indent</code></pre><p><strong>Output:</strong></p><pre><code>Positive
Greater than 10</code></pre><h3>When to Use Nesting vs. "and"</h3><p>Sometimes nesting can be replaced with <code>and</code>:</p><pre><code># Nested
if has_account:
    if is_verified:
        print("Access")

# Equivalent with and
if has_account and is_verified:
    print("Access")</code></pre><p>Use nesting when you need different else messages for each condition. Use <code>and</code> when you just need a single combined check.</p>`,
          challenge: {
            description: `Given num = 24, check if it is positive. If positive, check if it is even (num % 2 == 0). Print "Positive and even" or "Positive and odd". If not positive, print "Not positive".`,
            starterCode: `num = 24

# Check if positive, then if even or odd
`,
            expectedOutput: `Positive and even`,
            hints: ['Start with: if num > 0:', 'Inside that, check: if num % 2 == 0:', 'The inner if needs double indentation (8 spaces)']
          },
          quiz: [
            {
              question: `What does "nested" mean in programming?`,
              options: ['Adjacent code', 'Code inside other code', 'Code that runs twice', 'Code without indentation'],
              correct: 1
            },
            {
              question: `How many spaces of indentation for the inner if?`,
              options: ['4', '8', '2', '12'],
              correct: 1
            },
            {
              question: `When should you use nested if vs. "and"?`,
              options: [
                `Always use nesting`,
                `Use nesting when you need different else messages per level`,
                `Always use and`,
                `They cannot substitute each other`
              ],
              correct: 1
            },
            {
              question: `What is the maximum nesting depth allowed?`,
              options: ['2 levels', '3 levels', 'No fixed limit, but keep it readable', 'Exactly 4 levels'],
              correct: 2
            },
            {
              question: `What is a "dead code" block in nested ifs?`,
              options: ['Code that never executes due to logic', 'Deleted code', 'Commented code', 'Code with errors'],
              correct: 0
            }
          ]
        }
      ]
    },
    {
      id: `basic_io`,
      title: `Basic IO`,
      lessons: [
        {
          id: `output`,
          title: `Output`,
          type: `challenge`,
          theory: `<h2>Advanced Output with print()</h2><p>You already know <code>print()</code> displays text. Now let's explore its full power.</p><h3>Printing Multiple Items</h3><p>Pass multiple arguments separated by commas — Python prints them with spaces between:</p><pre><code>print("Hello", "World", "!")
# Output: Hello World !</code></pre><h3>The sep Parameter</h3><p>Change the separator between items:</p><pre><code>print("2024", "01", "15", sep="-")
# Output: 2024-01-15

print("A", "B", "C", sep=" | ")
# Output: A | B | C</code></pre><h3>The end Parameter</h3><p>By default, print() adds a newline at the end. Change it with <code>end</code>:</p><pre><code>print("Hello", end=" ")
print("World")
# Output: Hello World</code></pre><p>Both prints appear on the same line because the first one ends with a space instead of a newline.</p><h3>Printing Empty Lines</h3><pre><code>print("Line 1")
print()
print("Line 3")</code></pre><p><strong>Output:</strong></p><pre><code>Line 1

Line 3</code></pre><p><code>print()</code> with no arguments just prints an empty line.</p><h3>Escape Characters</h3><ul><li><code>\\n</code> — new line within a string</li><li><code>\\t</code> — tab character</li></ul><pre><code>print("Line 1\\nLine 2")
# Output:
# Line 1
# Line 2

print("Name\\tAge")
print("Alice\\t25")
# Output:
# Name    Age
# Alice   25</code></pre>`,
          challenge: {
            description: `Print "2024-12-25" using three separate values ("2024", "12", "25") joined with the sep parameter. Then print "Hello World" using two print statements on the same line (use end parameter).`,
            starterCode: `# Print date with sep="-"

# Print "Hello " without newline, then "World"
`,
            expectedOutput: `2024-12-25
Hello World`,
            hints: ['print("2024", "12", "25", sep="-")', 'print("Hello", end=" ")', 'The second print("World") goes on the same line']
          },
          quiz: [
            {
              question: `What does sep do in print()?`,
              options: [
                `Separates the output into lines`,
                `Changes the separator between items`,
                `Stops the print`,
                `Adds a separator at the end`
              ],
              correct: 1
            },
            {
              question: `What does end="\\n" mean in print()?`,
              options: ['Custom ending character', 'Default behavior - newline at end', 'No ending', 'Error'],
              correct: 1
            },
            {
              question: `What does print() with no arguments do?`,
              options: ['Error', 'Prints None', 'Prints an empty line', 'Nothing'],
              correct: 2
            },
            {
              question: `What escape character creates a new line inside a string?`,
              options: ['\\t', '\\n', '\\r', '\\s'],
              correct: 1
            },
            {
              question: `What does \\t produce in a string?`,
              options: ['A new line', 'A tab space', 'The letter t', 'An error'],
              correct: 1
            }
          ]
        },
        {
          id: `output_with_variables`,
          title: `Output With Variables`,
          type: `challenge`,
          theory: `<h2>Printing Variables</h2><p>There are several ways to include variable values in your output.</p><h3>Method 1: Comma Separation</h3><pre><code>name = "Alice"
age = 25
print("Name:", name, "Age:", age)</code></pre><p><strong>Output:</strong> <code>Name: Alice Age: 25</code></p><p>Python adds spaces between comma-separated items automatically.</p><h3>Method 2: String Concatenation (+)</h3><pre><code>name = "Alice"
print("Hello, " + name + "!")</code></pre><p><strong>Output:</strong> <code>Hello, Alice!</code></p><p>⚠️ You can only concatenate strings with strings. Numbers must be converted first:</p><pre><code>age = 25
print("Age: " + str(age))  # Must convert int to string</code></pre><h3>Method 3: f-strings (Recommended)</h3><p>f-strings (formatted string literals) are the modern, clean way to embed variables:</p><pre><code>name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old")</code></pre><p><strong>Output:</strong> <code>My name is Alice and I am 25 years old</code></p><p>Put <code>f</code> before the opening quote, then use <code>{variable}</code> inside the string. Python replaces the braces with the variable's value. No type conversion needed!</p><h3>f-string Expressions</h3><p>You can put any expression inside the braces:</p><pre><code>x = 10
y = 3
print(f"{x} + {y} = {x + y}")</code></pre><p><strong>Output:</strong> <code>10 + 3 = 13</code></p>`,
          challenge: {
            description: `Given name = "Python" and version = 3, use an f-string to print "I am learning Python version 3".`,
            starterCode: `name = "Python"
version = 3

# Use an f-string to print the message
`,
            expectedOutput: `I am learning Python version 3`,
            hints: [
              `f-strings start with f before the quote`,
              `Use {name} and {version} inside the string`,
              `print(f"I am learning {name} version {version}")`
            ]
          },
          quiz: [
            {
              question: `What prefix creates an f-string?`,
              options: ['s', 'f', 'r', 'b'],
              correct: 1
            },
            {
              question: `What does {variable} do inside an f-string?`,
              options: ['Prints literal braces', 'Inserts the variable value', 'Creates a dictionary', 'Causes an error'],
              correct: 1
            },
            {
              question: `Can you do math inside f-string braces?`,
              options: ['No', 'Yes', 'Only addition', 'Only with integers'],
              correct: 1
            },
            {
              question: `What is wrong with: "Age: " + 25?`,
              options: ['Nothing', 'Cannot concatenate string and int', 'Wrong quotes', 'Missing print()'],
              correct: 1
            },
            {
              question: `Which is the most modern way to format strings?`,
              options: ['% formatting', '.format()', 'f-strings', 'Concatenation'],
              correct: 2
            }
          ]
        },
        {
          id: `input`,
          title: `Input`,
          type: `challenge`,
          theory: `<h2>Getting User Input</h2><p>The <code>input()</code> function pauses the program and waits for the user to type something. Whatever they type is returned as a <strong>string</strong>.</p><h3>Basic Usage</h3><pre><code>name = input("Enter your name: ")
print("Hello, " + name)</code></pre><p>When this runs:</p><ol><li>Python displays "Enter your name: " and waits</li><li>The user types something (e.g., "Alice") and presses Enter</li><li>That text is stored in the variable <code>name</code></li><li>The program continues</li></ol><h3>Important: input() Always Returns a String</h3><pre><code>age = input("Enter age: ")  # User types 25
print(type(age))  # &lt;class 'str'&gt; — it's "25" not 25!</code></pre><p>Even if the user types a number, <code>input()</code> gives you a string. We'll learn to convert it in the next lesson.</p><h3>Input Without a Prompt</h3><pre><code>data = input()  # Just waits, no message shown</code></pre><h3>Using Input in Output</h3><pre><code>city = input("City: ")
print(f"You live in {city}")</code></pre><p>If the user types "Tokyo":</p><p><strong>Output:</strong> <code>You live in Tokyo</code></p><h3>Note for This App</h3><p>In coding challenges, we simulate input. When a challenge says "input is 5", your code should use <code>input()</code> and the system will provide "5" automatically.</p>`,
          challenge: {
            description: `Ask the user for their name using input() with the prompt "Name: ". Then print "Hello, " followed by their name. (Simulated input: Alice)`,
            starterCode: `# Ask for name

# Print greeting
`,
            expectedOutput: `Hello, Alice`,
            hints: ['name = input("Name: ")', 'print("Hello, " + name)', 'Or use an f-string: print(f"Hello, {name}")']
          },
          quiz: [
            {
              question: `What does input() return?`,
              options: ['An integer', 'A float', 'Always a string', 'Depends on what user types'],
              correct: 2
            },
            {
              question: `What goes inside input() parentheses?`,
              options: ['The variable name', 'A prompt message to show the user', 'The expected type', 'Nothing is allowed'],
              correct: 1
            },
            {
              question: `If user types 42, what type is input() result?`,
              options: ['int', 'float', 'str', 'number'],
              correct: 2
            },
            {
              question: `Does input() pause the program?`,
              options: ['No', 'Yes, until user presses Enter', 'Only for 5 seconds', 'Only in interactive mode'],
              correct: 1
            },
            {
              question: `Can input() be called without a prompt?`,
              options: ['No, prompt is required', 'Yes, input() with no argument works', 'Only in Python 2', 'Only on Windows'],
              correct: 1
            }
          ]
        },
        {
          id: `cast`,
          title: `Cast`,
          type: `challenge`,
          theory: `<h2>Type Casting (Converting Types)</h2><p>Since <code>input()</code> always returns a string, you often need to <strong>cast</strong> (convert) it to another type to do math or comparisons.</p><h3>Casting Functions</h3><table><tr><th>Function</th><th>Converts to</th><th>Example</th></tr><tr><td><code>int()</code></td><td>Integer</td><td><code>int("25")</code> → <code>25</code></td></tr><tr><td><code>float()</code></td><td>Float</td><td><code>float("3.14")</code> → <code>3.14</code></td></tr><tr><td><code>str()</code></td><td>String</td><td><code>str(42)</code> → <code>"42"</code></td></tr><tr><td><code>bool()</code></td><td>Boolean</td><td><code>bool(1)</code> → <code>True</code></td></tr></table><h3>Converting Input for Math</h3><pre><code>age_str = input("Age: ")   # Returns "25"
age = int(age_str)         # Converts to 25

# Or in one line:
age = int(input("Age: "))
print(age + 5)  # 30</code></pre><h3>Converting Between Numbers</h3><pre><code>x = int(3.9)    # 3 (truncates, doesn't round!)
y = float(5)    # 5.0
print(x)
print(y)</code></pre><p><strong>Output:</strong></p><pre><code>3
5.0</code></pre><h3>Common Errors</h3><pre><code># This will crash:
int("hello")   # ValueError: can't convert "hello" to int
int("3.5")     # ValueError: can't convert "3.5" directly to int
               # Use: int(float("3.5")) → 3</code></pre><h3>Key Point</h3><p><code>int()</code> truncates floats (cuts off decimals, doesn't round). <code>int(3.9)</code> is <code>3</code>, not <code>4</code>.</p>`,
          challenge: {
            description: `Given the string values a = "15" and b = "4", convert them to integers and print their sum and product on separate lines.`,
            starterCode: `a = "15"
b = "4"

# Convert to integers

# Print their sum

# Print their product
`,
            expectedOutput: `19
60`,
            hints: ['Use int() to convert: a = int(a)', 'print(int(a) + int(b)) for the sum', 'Or convert first, then use the variables']
          },
          quiz: [
            {
              question: `What does int("42") return?`,
              options: ['"42"', '42', '42.0', 'Error'],
              correct: 1
            },
            {
              question: `What does int(3.9) return?`,
              options: ['4', '3', '3.9', 'Error'],
              correct: 1
            },
            {
              question: `What happens with int("hello")?`,
              options: ['Returns 0', 'Returns None', 'ValueError', 'Returns "hello"'],
              correct: 2
            },
            {
              question: `How do you convert input to an integer in one line?`,
              options: ['int = input()', 'int(input())', 'input(int())', 'input().int()'],
              correct: 1
            },
            {
              question: `What does float("5") return?`,
              options: ['5', '5.0', '"5.0"', 'Error'],
              correct: 1
            }
          ]
        },
        {
          id: `recap_till_120`,
          title: `Recap - Till 120`,
          type: `mastery`,
          theory: `<h2>Recap: Input, Casting, and Decisions</h2><p>Let's combine input, type casting, and if/else for a complete program.</p><h3>Pattern: Get Input → Convert → Decide → Output</h3><pre><code>age = int(input("Age: "))

if age >= 18:
    print("Welcome!")
else:
    print("Too young")</code></pre><h3>Working with Numbers from Input</h3><pre><code>price = float(input("Price: "))
quantity = int(input("Quantity: "))
total = price * quantity
print(f"Total: {total}")</code></pre><h3>Multiple Conditions</h3><pre><code>score = int(input("Score: "))

if score >= 90:
    print("Excellent")
elif score >= 70:
    print("Good")
elif score >= 50:
    print("Average")
else:
    print("Needs improvement")</code></pre><h3>The str() Function for Output</h3><p>When concatenating with <code>+</code>, convert numbers to strings:</p><pre><code>years = 5
print("Years left: " + str(years))
# Or just use f-strings:
print(f"Years left: {years}")</code></pre>`,
          challenge: {
            description: `Given age = 25, calculate how many years until the person turns 120. Print "Years to 120: X" where X is the result.`,
            starterCode: `age = 25

# Calculate years to 120

# Print the result
`,
            expectedOutput: `Years to 120: 95`,
            hints: [
              `years_left = 120 - age`,
              `Use an f-string: print(f"Years to 120: {years_left}")`,
              `Or concatenation: print("Years to 120: " + str(years_left))`
            ]
          },
          mastery: {
            description: `Given birth_year = 1995 and current_year = 2024: Calculate the age. If the person is 18 or older, print "Adult - age: X". Otherwise print "Minor - age: X". Then print "Years to 120: Y".`,
            starterCode: `birth_year = 1995
current_year = 2024

# Calculate age

# Print Adult/Minor with age

# Print years to 120
`,
            expectedOutput: `Adult - age: 29
Years to 120: 91`,
            hints: ['age = current_year - birth_year', 'if age >= 18: print(f"Adult - age: {age}")', 'years_to_120 = 120 - age']
          },
          quiz: [
            {
              question: `What does int(input("Number: ")) do?`,
              options: ['Gets input and converts to int in one step', 'Creates two variables', 'Causes an error', 'Prints a number'],
              correct: 0
            },
            {
              question: `What is 120 - int("25")?`,
              options: ['95', '"95"', 'Error', '14525'],
              correct: 0
            },
            {
              question: `Which correctly prints "Age: 25" with age = 25?`,
              options: ['print("Age: " + age)', 'print("Age: " + str(age))', 'print("Age: " + int(age))', 'print("Age: ", 25)'],
              correct: 1
            },
            {
              question: `Can f-strings handle integers without conversion?`,
              options: ['No, must use str()', 'Yes, f-strings auto-convert', 'Only for small numbers', 'Only in Python 3.8+'],
              correct: 1
            }
          ]
        },
        {
          id: `recap_true_or_false`,
          title: `Recap - True or False`,
          type: `mastery`,
          theory: `<h2>Recap: Boolean Logic in Programs</h2><p>Let's practice combining everything: variables, casting, comparisons, logical operators, and decisions.</p><h3>Truthy and Falsy Values</h3><p>In Python, every value has a "truthiness." When used in a condition:</p><ul><li><strong>Falsy:</strong> <code>False</code>, <code>0</code>, <code>0.0</code>, <code>""</code> (empty string), <code>None</code>, <code>[]</code> (empty list)</li><li><strong>Truthy:</strong> Everything else — any non-zero number, non-empty string, etc.</li></ul><pre><code>if 0:
    print("This won't print")

if "hello":
    print("This will print")</code></pre><p><strong>Output:</strong> <code>This will print</code></p><h3>Boolean Expressions in Variables</h3><pre><code>age = 20
has_id = True

is_allowed = age >= 18 and has_id
print(is_allowed)  # True

if is_allowed:
    print("Welcome")</code></pre><p><strong>Output:</strong></p><pre><code>True
Welcome</code></pre><h3>The bool() Function</h3><pre><code>print(bool(0))      # False
print(bool(42))     # True
print(bool(""))     # False
print(bool("hi"))   # True</code></pre>`,
          challenge: {
            description: `Given x = 10, y = 0, and name = "Alice": Print bool(x), bool(y), and bool(name) on separate lines.`,
            starterCode: `x = 10
y = 0
name = "Alice"

# Print bool of each
`,
            expectedOutput: `True
False
True`,
            hints: ['print(bool(x)) converts 10 to True', '0 is falsy, so bool(0) is False', 'Non-empty strings are truthy']
          },
          mastery: {
            description: `Given score = 85 and bonus = 0: Create is_passing (score >= 60), has_bonus (bool of bonus), and result = is_passing and has_bonus. Print all three on separate lines. Then print "Bonus applied" if has_bonus is True, otherwise print "No bonus".`,
            starterCode: `score = 85
bonus = 0

# Create is_passing

# Create has_bonus using bool()

# Create result

# Print all three

# Print bonus message
`,
            expectedOutput: `True
False
False
No bonus`,
            hints: ['is_passing = score >= 60', 'has_bonus = bool(bonus)  # bool(0) is False', 'result = is_passing and has_bonus']
          },
          quiz: [
            {
              question: `Which of these is falsy?`,
              options: ['1', '"hello"', '0', 'True'],
              correct: 2
            },
            {
              question: `What does bool("") return?`,
              options: ['True', 'False', 'Error', '""'],
              correct: 1
            },
            {
              question: `What does bool(42) return?`,
              options: ['42', 'True', 'False', 'Error'],
              correct: 1
            },
            {
              question: `Is an empty string truthy or falsy?`,
              options: ['Truthy', 'Falsy', 'Neither', 'Error'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: `bill_split_calculator`,
      title: `Bill Split Calculator`,
      lessons: [
        {
          id: `bill_welcome_message`,
          title: `Welcome Message`,
          type: `project`,
          theory: `<h2>Project: Bill Split Calculator</h2><p>In this project, you'll build a <strong>Bill Split Calculator</strong> — a program that helps friends split a restaurant bill including tip. We'll build it step by step across 5 lessons.</p><h3>What the Final Program Does</h3><ol><li>Shows a welcome message</li><li>Gets the bill amount, tip percentage, and number of people</li><li>Calculates the tip and total</li><li>Splits the bill equally</li><li>Displays a formatted result</li></ol><h3>Step 1: Welcome Message</h3><p>Every good program starts with a clear introduction. Let's print a welcome banner:</p><pre><code>print("===========================")
print("   Bill Split Calculator   ")
print("===========================")</code></pre><p><strong>Output:</strong></p><pre><code>===========================
   Bill Split Calculator   
===========================</code></pre><h3>Design Tips</h3><ul><li>Use separators (===) to make output look clean</li><li>Center text within the separators for visual balance</li><li>Keep messages short and clear</li></ul><p>This is the first piece of your project. Each subsequent lesson adds more functionality.</p>`,
          challenge: {
            description: `Print a welcome banner for the Bill Split Calculator with three lines: a separator line of "=" characters, the title centered, and another separator line.`,
            starterCode: `# Print the welcome banner
`,
            expectedOutput: `===========================
   Bill Split Calculator   
===========================`,
            hints: [
              `Use print("===========================") for separators`,
              `Add spaces before the title to center it`,
              `Three separate print() statements`
            ]
          },
          quiz: [
            {
              question: `Why start a program with a welcome message?`,
              options: ['Python requires it', 'It makes the program user-friendly', 'It runs faster', 'It prevents errors'],
              correct: 1
            },
            {
              question: `How many print statements do we use for this banner?`,
              options: ['1', '2', '3', '4'],
              correct: 2
            },
            {
              question: `What character do we use for the separator?`,
              options: ['*', '-', '=', '#'],
              correct: 2
            }
          ]
        },
        {
          id: `bill_getting_input`,
          title: `Getting Input`,
          type: `project`,
          theory: `<h2>Step 2: Getting User Input</h2><p>Now we need to ask the user for three pieces of information:</p><ol><li><strong>Bill amount</strong> — how much the meal cost (a decimal number)</li><li><strong>Tip percentage</strong> — how much to tip (a whole number)</li><li><strong>Number of people</strong> — how many people are splitting</li></ol><h3>Getting Numeric Input</h3><p>Remember: <code>input()</code> returns a string. We need to cast:</p><pre><code>bill = float(input("Total bill: $"))
tip_percent = int(input("Tip percentage: "))
people = int(input("Number of people: "))</code></pre><h3>Why float for bill?</h3><p>Bills often have cents: $52.75, $103.50. Using <code>float()</code> handles decimals.</p><h3>Why int for the others?</h3><p>Tip percentage is typically a whole number (15, 18, 20). Number of people is always a whole number.</p><h3>Combining With Previous Step</h3><pre><code>print("===========================")
print("   Bill Split Calculator   ")
print("===========================")

bill = float(input("Total bill: $"))
tip_percent = int(input("Tip percentage: "))
people = int(input("Number of people: "))</code></pre><p>For our challenge, we'll use hardcoded values since we're building step by step.</p>`,
          challenge: {
            description: `After the welcome banner, set bill = 100.00, tip_percent = 20, and people = 4. Print each value on its own line.`,
            starterCode: `print("===========================")
print("   Bill Split Calculator   ")
print("===========================")

# Set the values

# Print each value
`,
            expectedOutput: `===========================
   Bill Split Calculator   
===========================
100.0
20
4`,
            hints: ['bill = 100.00', 'tip_percent = 20 and people = 4', 'print(bill) will show 100.0']
          },
          quiz: [
            {
              question: `Why use float() for the bill amount?`,
              options: ['Bills are always whole numbers', 'Bills can have decimal cents', 'float() is faster', 'Python requires it'],
              correct: 1
            },
            {
              question: `What does float("52.75") return?`,
              options: ['52', '52.75', '"52.75"', 'Error'],
              correct: 1
            },
            {
              question: `If the user types "4" for people, what must we do?`,
              options: ['Nothing, it works as is', 'Convert with int()', 'Convert with float()', 'Convert with str()'],
              correct: 1
            }
          ]
        },
        {
          id: `bill_calculating_tip`,
          title: `Calculating The Tip And Total`,
          type: `project`,
          theory: `<h2>Step 3: Calculating Tip and Total</h2><p>Now we have the bill, tip percentage, and number of people. Let's calculate:</p><h3>The Math</h3><ul><li><strong>Tip amount</strong> = bill × (tip_percent / 100)</li><li><strong>Total</strong> = bill + tip_amount</li></ul><pre><code>bill = 100.00
tip_percent = 20

tip_amount = bill * (tip_percent / 100)
total = bill + tip_amount

print(tip_amount)  # 20.0
print(total)       # 120.0</code></pre><h3>Why tip_percent / 100?</h3><p>A percentage is "per hundred." 20% means 20/100 = 0.20. So:</p><p>$100 × 0.20 = $20.00 tip</p><h3>Step by Step with Example</h3><pre><code>bill = 85.50
tip_percent = 15

tip_amount = 85.50 * (15 / 100)  # 85.50 * 0.15 = 12.825
total = 85.50 + 12.825           # = 98.325</code></pre><h3>Rounding</h3><p>Money should have 2 decimal places. Use <code>round(value, 2)</code>:</p><pre><code>tip_amount = round(85.50 * 0.15, 2)  # 12.82
total = round(85.50 + tip_amount, 2)  # 98.32</code></pre>`,
          challenge: {
            description: `Given bill = 150.00 and tip_percent = 18, calculate the tip_amount and total. Print both rounded to 2 decimal places.`,
            starterCode: `bill = 150.00
tip_percent = 18

# Calculate tip amount

# Calculate total

# Print both (rounded to 2 decimal places)
`,
            expectedOutput: `27.0
177.0`,
            hints: ['tip_amount = bill * (tip_percent / 100)', 'total = bill + tip_amount', 'print(round(tip_amount, 2))']
          },
          quiz: [
            {
              question: `What is 200 * (15 / 100)?`,
              options: ['15', '30.0', '3000', '0.15'],
              correct: 1
            },
            {
              question: `What does round(3.14159, 2) return?`,
              options: ['3.14', '3.15', '3.1', '3'],
              correct: 0
            },
            {
              question: `Why divide tip_percent by 100?`,
              options: ['To make it a decimal/fraction', 'Python requires it', 'To round it', 'To make it negative'],
              correct: 0
            }
          ]
        },
        {
          id: `bill_splitting`,
          title: `Splitting The Bill`,
          type: `project`,
          theory: `<h2>Step 4: Splitting the Bill</h2><p>Now let's divide the total equally among all the people.</p><h3>The Calculation</h3><pre><code>per_person = total / people</code></pre><h3>Complete Example</h3><pre><code>bill = 150.00
tip_percent = 18
people = 5

tip_amount = bill * (tip_percent / 100)  # 27.0
total = bill + tip_amount                # 177.0
per_person = total / people              # 35.4

print(round(per_person, 2))  # 35.4</code></pre><h3>Edge Case: Non-Even Splits</h3><pre><code>total = 100.0
people = 3
per_person = total / people  # 33.333...
print(round(per_person, 2))  # 33.33</code></pre><p>Rounding to 2 decimal places handles money formatting nicely.</p><h3>Why Not Floor Division?</h3><p>Using <code>//</code> would lose cents: <code>100 // 3 = 33</code>. We want the precise amount each person pays, so regular division <code>/</code> with rounding is correct.</p>`,
          challenge: {
            description: `Given bill = 200.00, tip_percent = 15, people = 6: Calculate tip, total, and per_person amount. Print only the per_person amount rounded to 2 decimal places.`,
            starterCode: `bill = 200.00
tip_percent = 15
people = 6

# Calculate tip, total, per_person

# Print per_person rounded to 2 decimals
`,
            expectedOutput: `38.33`,
            hints: ['tip_amount = bill * (tip_percent / 100)', 'total = bill + tip_amount', 'per_person = round(total / people, 2)']
          },
          quiz: [
            {
              question: `Why use / instead of // for splitting?`,
              options: ['// is slower', '/ gives precise decimals needed for money', '// causes errors', 'No difference'],
              correct: 1
            },
            {
              question: `What is round(33.33333, 2)?`,
              options: ['33.33', '33.34', '33.3', '33'],
              correct: 0
            },
            {
              question: `If total is 100 and people is 3, what is round(100/3, 2)?`,
              options: ['33.33', '33.34', '33', '33.3'],
              correct: 0
            }
          ]
        },
        {
          id: `bill_formatted_output`,
          title: `Formatted Output`,
          type: `project`,
          theory: `<h2>Step 5: Formatted Output</h2><p>The final step is presenting the results in a clean, readable format.</p><h3>f-string Formatting for Money</h3><p>Use <code>:.2f</code> inside f-strings to always show 2 decimal places:</p><pre><code>amount = 35.4
print(f"\${amount:.2f}")  # $35.40</code></pre><p>Without <code>:.2f</code>, you'd get <code>$35.4</code> (missing the trailing zero).</p><h3>Complete Formatted Output</h3><pre><code>bill = 150.00
tip_percent = 18
people = 5

tip_amount = bill * (tip_percent / 100)
total = bill + tip_amount
per_person = total / people

print("===========================")
print(f"Bill:        \${bill:.2f}")
print(f"Tip ({tip_percent}%):    \${tip_amount:.2f}")
print(f"Total:       \${total:.2f}")
print(f"Split {people} ways: \${per_person:.2f}")
print("===========================")</code></pre><p><strong>Output:</strong></p><pre><code>===========================
Bill:        $150.00
Tip (18%):    $27.00
Total:       $177.00
Split 5 ways: $35.40
===========================</code></pre><h3>The :.2f Format Spec</h3><ul><li><code>:</code> starts the format specification</li><li><code>.2</code> means 2 decimal places</li><li><code>f</code> means fixed-point notation (regular decimals)</li></ul>`,
          challenge: {
            description: `Given bill = 120.00, tip_percent = 20, people = 3: Calculate everything and print ONLY these two lines:
"Total: $XXX.XX"
"Each person pays: $XX.XX"
Use f-strings with :.2f formatting.`,
            starterCode: `bill = 120.00
tip_percent = 20
people = 3

# Calculate
tip_amount = bill * (tip_percent / 100)
total = bill + tip_amount
per_person = total / people

# Print formatted output
`,
            expectedOutput: `Total: $144.00
Each person pays: $48.00`,
            hints: ['print(f"Total: ${total:.2f}")', 'print(f"Each person pays: ${per_person:.2f}")', ':.2f ensures two decimal places']
          },
          quiz: [
            {
              question: `What does :.2f do in an f-string?`,
              options: ['Rounds to 2 significant figures', 'Shows exactly 2 decimal places', 'Converts to fraction', 'Multiplies by 2'],
              correct: 1
            },
            {
              question: `What does f"\${35.4:.2f}" output?`,
              options: ['$35.4', '$35.40', '$35', '35.40'],
              correct: 1
            },
            {
              question: `Why is formatted output important?`,
              options: ['Python requires it', 'It makes results clear and professional', 'It runs faster', 'It saves memory'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: `loops`,
      title: `Loops`,
      lessons: [
        {
          id: `for_loop`,
          title: `For Loop`,
          type: `mastery`,
          theory: `<h2>The for Loop</h2><p>A <strong>for loop</strong> lets you repeat a block of code for each item in a sequence. Instead of writing the same code 10 times, you write it once and loop it.</p><h3>Basic Syntax</h3><pre><code>for variable in sequence:
    # code to repeat</code></pre><h3>Looping Over a Range of Numbers</h3><pre><code>for i in range(5):
    print(i)</code></pre><p><strong>Output:</strong></p><pre><code>0
1
2
3
4</code></pre><p><code>range(5)</code> generates numbers 0, 1, 2, 3, 4 (starts at 0, stops BEFORE 5).</p><h3>Looping Over a String</h3><pre><code>for char in "Hi":
    print(char)</code></pre><p><strong>Output:</strong></p><pre><code>H
i</code></pre><h3>Looping Over a List</h3><pre><code>fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)</code></pre><p><strong>Output:</strong></p><pre><code>apple
banana
cherry</code></pre><h3>How It Works</h3><ol><li>Python takes the first item from the sequence and assigns it to the variable</li><li>Runs the indented code</li><li>Goes back, takes the next item, repeats</li><li>Stops when there are no more items</li></ol><h3>The Loop Variable</h3><p>The variable name (like <code>i</code> or <code>fruit</code>) is your choice. Pick something meaningful.</p>`,
          challenge: {
            description: `Use a for loop to print numbers 1 through 5, each on a new line.`,
            starterCode: `# Print 1 to 5 using a for loop
`,
            expectedOutput: `1
2
3
4
5`,
            hints: ['range(1, 6) gives numbers 1, 2, 3, 4, 5', 'for i in range(1, 6): print(i)', 'range(start, stop) - stop is exclusive']
          },
          quiz: [
            {
              question: `What does range(3) produce?`,
              options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '1, 2'],
              correct: 1
            },
            {
              question: `What is the loop variable in "for x in range(5)"?`,
              options: ['for', 'range', 'x', '5'],
              correct: 2
            },
            {
              question: `How many times does "for i in range(4)" loop?`,
              options: ['3', '4', '5', '1'],
              correct: 1
            },
            {
              question: `Does the for loop need indentation?`,
              options: ['No', 'Yes, the body must be indented', 'Only sometimes', 'Only for range()'],
              correct: 1
            },
            {
              question: `What is the purpose of the loop variable?`,
              options: ['It stores the final value', 'It holds the current item each iteration', 'It counts errors', 'It is always i'],
              correct: 1
            }
          ],
          mastery: {
            description: `Print the sum of numbers from 1 to 100 using a for loop.`,
            starterCode: `total = 0
# Use a for loop to sum 1 to 100

# Print the total
`,
            expectedOutput: `5050`,
            hints: ['for i in range(1, 101):', 'total += i inside the loop', 'The famous result: 5050']
          }
        },
        {
          id: `while_loop`,
          title: `While Loop`,
          type: `challenge`,
          theory: `<h2>The while Loop</h2><p>A <strong>while loop</strong> keeps running as long as its condition is True. Unlike a for loop (which iterates over a sequence), a while loop is condition-based.</p><p>Think of it like saying: "While the light is red, keep waiting."</p><h3>Syntax</h3><pre><code>while condition:
    # code to repeat</code></pre><h3>Example: Countdown</h3><pre><code>count = 5
while count > 0:
    print(count)
    count -= 1</code></pre><p><strong>Output:</strong></p><pre><code>5
4
3
2
1</code></pre><h3>How It Works</h3><ol><li>Check the condition</li><li>If True, run the body</li><li>Go back to step 1</li><li>If False, stop and move past the loop</li></ol><h3>DANGER: Infinite Loops</h3><p>If the condition never becomes False, the loop runs forever!</p><pre><code># DON'T DO THIS:
while True:
    print("Forever!")  # Never stops!</code></pre><p>Always make sure something in your loop changes the condition toward False.</p><h3>When to Use while vs. for</h3><ul><li><strong>for:</strong> When you know how many times to loop (or you're iterating over a collection)</li><li><strong>while:</strong> When you don't know how many times — you loop until a condition changes</li></ul>`,
          challenge: {
            description: `Use a while loop to print numbers 1 through 4, each on a new line.`,
            starterCode: `# Use a while loop to print 1 to 4
`,
            expectedOutput: `1
2
3
4`,
            hints: ['Start with count = 1', 'Loop while count <= 4', 'Don\'t forget count += 1 inside the loop']
          },
          quiz: [
            {
              question: `When does a while loop stop?`,
              options: [
                `After a fixed number of iterations`,
                `When the condition becomes False`,
                `When it runs out of memory`,
                `After 1000 iterations`
              ],
              correct: 1
            },
            {
              question: `What causes an infinite loop?`,
              options: ['Using range()', 'Condition never becomes False', 'Too many variables', 'Missing print()'],
              correct: 1
            },
            {
              question: `Which is better for "repeat 10 times"?`,
              options: ['while loop', 'for loop', 'Both are equally good', 'Neither'],
              correct: 1
            },
            {
              question: `What must change inside a while loop?`,
              options: ['The variable name', 'Something that affects the condition', 'The print statement', 'Nothing'],
              correct: 1
            },
            {
              question: `Can a while loop run zero times?`,
              options: ['No, it always runs once', 'Yes, if condition is False initially', 'Only for loops can', 'Depends on Python version'],
              correct: 1
            }
          ]
        },
        {
          id: `break`,
          title: `Break`,
          type: `challenge`,
          theory: `<h2>The break Statement</h2><p><code>break</code> immediately <strong>exits</strong> the loop, regardless of the loop condition. The program continues with the code after the loop.</p><h3>Example</h3><pre><code>for i in range(10):
    if i == 5:
        break
    print(i)</code></pre><p><strong>Output:</strong></p><pre><code>0
1
2
3
4</code></pre><p>When <code>i</code> becomes 5, <code>break</code> exits the loop immediately. The number 5 is never printed because <code>break</code> runs before <code>print(i)</code>.</p><h3>break in while Loops</h3><pre><code>count = 0
while True:  # Infinite loop!
    if count >= 3:
        break
    print(count)
    count += 1
print("Loop ended")</code></pre><p><strong>Output:</strong></p><pre><code>0
1
2
Loop ended</code></pre><h3>Common Use Cases</h3><ul><li>Search: Stop looping once you find what you're looking for</li><li>User input: Loop until user types "quit"</li><li>Safety exit: Prevent infinite loops</li></ul><h3>Important</h3><p><code>break</code> only exits the <strong>innermost</strong> loop it's in. If you have nested loops, break exits only the inner one.</p>`,
          challenge: {
            description: `Loop through numbers 1 to 10 using a for loop, but break out when you reach 6. Print each number before the break check.`,
            starterCode: `# Loop 1 to 10, break at 6
`,
            expectedOutput: `1
2
3
4
5`,
            hints: [
              `for i in range(1, 11):`,
              `Print i first, then check if i == 5 to break`,
              `Or check if i == 6 and break before printing`
            ]
          },
          quiz: [
            {
              question: `What does break do?`,
              options: ['Pauses the loop', 'Exits the loop immediately', 'Skips to the next iteration', 'Ends the program'],
              correct: 1
            },
            {
              question: `In nested loops, what does break exit?`,
              options: ['All loops', 'The innermost loop only', 'The outermost loop', 'Both loops'],
              correct: 1
            },
            {
              question: `What prints: for i in range(3): break; print(i)?`,
              options: ['0 1 2', '0', 'Nothing', 'Error'],
              correct: 2
            },
            {
              question: `Can break be used in while loops?`,
              options: ['No, only for loops', 'Yes, in any loop', 'Only in while True', 'Only with a condition'],
              correct: 1
            },
            {
              question: `Where can break be used?`,
              options: ['Anywhere in code', 'Only inside loops', 'Only in if statements', 'Only in functions'],
              correct: 1
            }
          ]
        },
        {
          id: `continue`,
          title: `Continue`,
          type: `challenge`,
          theory: `<h2>The continue Statement</h2><p><code>continue</code> skips the rest of the current iteration and jumps to the <strong>next iteration</strong> of the loop.</p><p>Think of it like: "Skip this one and move on to the next."</p><h3>Example</h3><pre><code>for i in range(1, 6):
    if i == 3:
        continue
    print(i)</code></pre><p><strong>Output:</strong></p><pre><code>1
2
4
5</code></pre><p>When <code>i</code> is 3, <code>continue</code> skips the <code>print(i)</code> and goes straight to <code>i = 4</code>.</p><h3>break vs. continue</h3><ul><li><code>break</code>: EXIT the loop entirely</li><li><code>continue</code>: SKIP this iteration, continue the loop</li></ul><h3>Practical Example: Skip Even Numbers</h3><pre><code>for i in range(1, 8):
    if i % 2 == 0:
        continue
    print(i)</code></pre><p><strong>Output:</strong></p><pre><code>1
3
5
7</code></pre><h3>continue in while Loops</h3><pre><code>i = 0
while i < 5:
    i += 1
    if i == 3:
        continue
    print(i)</code></pre><p><strong>Output:</strong></p><pre><code>1
2
4
5</code></pre><p>⚠️ Be careful with continue in while loops — make sure the counter still updates, or you'll create an infinite loop!</p>`,
          challenge: {
            description: `Print numbers 1 through 7, but skip number 4 using continue.`,
            starterCode: `# Print 1-7 skipping 4
`,
            expectedOutput: `1
2
3
5
6
7`,
            hints: ['for i in range(1, 8):', 'if i == 4: continue', 'print(i) after the continue check']
          },
          quiz: [
            {
              question: `What does continue do?`,
              options: ['Exits the loop', 'Skips to next iteration', 'Pauses execution', 'Restarts the loop from beginning'],
              correct: 1
            },
            {
              question: `What is the output of: for i in range(3): continue; print(i)?`,
              options: ['0 1 2', 'Nothing (all iterations skipped)', '0', 'Error'],
              correct: 1
            },
            {
              question: `How is continue different from break?`,
              options: [
                `They are the same`,
                `continue skips one iteration, break exits the loop`,
                `break skips one, continue exits`,
                `No difference in loops`
              ],
              correct: 1
            },
            {
              question: `Does continue skip the entire remaining loop?`,
              options: ['Yes', 'No, only the current iteration', 'It depends', 'Only in for loops'],
              correct: 1
            }
          ]
        },
        {
          id: `recap_factorial`,
          title: `Recap - Factorial`,
          type: `mastery`,
          theory: `<h2>Recap: Loops for Calculations</h2><p>Loops are perfect for repetitive calculations. Let's learn about factorials.</p><h3>What is a Factorial?</h3><p>The factorial of n (written n!) is the product of all positive integers up to n:</p><ul><li>5! = 5 × 4 × 3 × 2 × 1 = 120</li><li>4! = 4 × 3 × 2 × 1 = 24</li><li>1! = 1</li><li>0! = 1 (by definition)</li></ul><h3>Calculating with a Loop</h3><pre><code>n = 5
result = 1

for i in range(1, n + 1):
    result *= i

print(result)  # 120</code></pre><h3>Trace Through</h3><pre><code># i=1: result = 1 * 1 = 1
# i=2: result = 1 * 2 = 2
# i=3: result = 2 * 3 = 6
# i=4: result = 6 * 4 = 24
# i=5: result = 24 * 5 = 120</code></pre><h3>Pattern: Accumulator</h3><p>This pattern — start with an initial value and repeatedly update it — is called an <strong>accumulator</strong>. It's one of the most common loop patterns:</p><pre><code># Sum of 1 to n
total = 0
for i in range(1, 6):
    total += i
print(total)  # 15</code></pre>`,
          challenge: {
            description: `Calculate and print the factorial of 6 (6!).`,
            starterCode: `n = 6
result = 1

# Calculate factorial using a loop

# Print result
`,
            expectedOutput: `720`,
            hints: ['Use a for loop: for i in range(1, n + 1):', 'Multiply result by i each time: result *= i', '6! = 720']
          },
          mastery: {
            description: `Calculate the sum of all numbers from 1 to 100 using a loop. Print the sum.`,
            starterCode: `# Calculate sum of 1 to 100

# Print the result
`,
            expectedOutput: `5050`,
            hints: [
              `total = 0, then loop and add each number`,
              `for i in range(1, 101): total += i`,
              `The answer is 5050 (Gauss would be proud!)`
            ]
          },
          quiz: [
            {
              question: `What is 5!?`,
              options: ['25', '120', '15', '5'],
              correct: 1
            },
            {
              question: `What is the "accumulator" pattern?`,
              options: ['Breaking out of loops', 'Building up a value through repeated operations', 'Counting loop iterations', 'Nested loops'],
              correct: 1
            },
            {
              question: `Why start result = 1 for factorial (not 0)?`,
              options: ['Because multiplying by 0 gives 0', 'Python requires it', 'It makes the loop shorter', 'No reason'],
              correct: 0
            },
            {
              question: `What is range(1, n+1) when n=5?`,
              options: ['1,2,3,4', '1,2,3,4,5', '0,1,2,3,4,5', '1,2,3,4,5,6'],
              correct: 1
            }
          ]
        },
        {
          id: `range_function`,
          title: `The Range Function`,
          type: `challenge`,
          theory: `<h2>The range() Function</h2><p><code>range()</code> generates a sequence of numbers. It's your primary tool for controlling for loops.</p><h3>Three Forms of range()</h3><table><tr><th>Form</th><th>Meaning</th><th>Example</th><th>Produces</th></tr><tr><td><code>range(stop)</code></td><td>0 to stop-1</td><td><code>range(5)</code></td><td>0, 1, 2, 3, 4</td></tr><tr><td><code>range(start, stop)</code></td><td>start to stop-1</td><td><code>range(2, 6)</code></td><td>2, 3, 4, 5</td></tr><tr><td><code>range(start, stop, step)</code></td><td>start to stop-1 by step</td><td><code>range(0, 10, 2)</code></td><td>0, 2, 4, 6, 8</td></tr></table><h3>Examples</h3><pre><code># Count by 2s
for i in range(0, 10, 2):
    print(i, end=" ")
# Output: 0 2 4 6 8</code></pre><pre><code># Count backwards
for i in range(5, 0, -1):
    print(i, end=" ")
# Output: 5 4 3 2 1</code></pre><h3>Key Points</h3><ul><li>The <strong>stop</strong> value is NEVER included</li><li>Step can be negative for counting down</li><li>If start >= stop (with positive step), range is empty</li><li>range() is memory-efficient — it doesn't create all numbers at once</li></ul><h3>Negative Step</h3><pre><code>for i in range(10, 0, -2):
    print(i, end=" ")
# Output: 10 8 6 4 2</code></pre>`,
          challenge: {
            description: `Print even numbers from 2 to 10 (inclusive) using range with a step. Each on a new line.`,
            starterCode: `# Print even numbers 2 to 10
`,
            expectedOutput: `2
4
6
8
10`,
            hints: ['Use range(2, 11, 2)', 'The stop is exclusive, so use 11 to include 10', 'for i in range(2, 11, 2): print(i)']
          },
          quiz: [
            {
              question: `What does range(1, 10, 3) produce?`,
              options: ['1, 4, 7', '1, 4, 7, 10', '3, 6, 9', '1, 3, 6, 9'],
              correct: 0
            },
            {
              question: `How do you count backwards from 5 to 1?`,
              options: ['range(5, 1)', 'range(5, 0, -1)', 'range(1, 5, -1)', 'range(5, 1, 1)'],
              correct: 1
            },
            {
              question: `Is the stop value included in range()?`,
              options: ['Yes', 'No, it is exclusive', 'Sometimes', 'Only with step'],
              correct: 1
            },
            {
              question: `What does range(5, 5) produce?`,
              options: ['5', '0, 1, 2, 3, 4', 'Nothing (empty range)', 'Error'],
              correct: 2
            },
            {
              question: `Is range(0) empty?`,
              options: ['No, it contains 0', 'Yes, it produces nothing', 'It contains [0]', 'Error'],
              correct: 1
            }
          ]
        },
        {
          id: `nested_loop`,
          title: `Nested Loop`,
          type: `challenge`,
          theory: `<h2>Nested Loops</h2><p>A <strong>nested loop</strong> is a loop inside another loop. The inner loop runs completely for each iteration of the outer loop.</p><h3>Example</h3><pre><code>for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i},{j}", end=" ")
    print()  # New line after inner loop</code></pre><p><strong>Output:</strong></p><pre><code>1,1 1,2 1,3 
2,1 2,2 2,3 
3,1 3,2 3,3 </code></pre><h3>How It Works</h3><ol><li>Outer loop sets i=1</li><li>Inner loop runs completely (j=1, j=2, j=3)</li><li>print() creates a new line</li><li>Outer loop sets i=2</li><li>Inner loop runs completely again</li><li>...and so on</li></ol><h3>Multiplication Table</h3><pre><code>for i in range(1, 4):
    for j in range(1, 4):
        print(i * j, end="\\t")
    print()</code></pre><p><strong>Output:</strong></p><pre><code>1\\t2\\t3\\t
2\\t4\\t6\\t
3\\t6\\t9\\t</code></pre><h3>Pattern: Rows and Columns</h3><p>Nested loops naturally create grid patterns — the outer loop controls rows, the inner loop controls columns.</p><pre><code>for row in range(3):
    for col in range(4):
        print("*", end="")
    print()
# Output:
# ****
# ****
# ****</code></pre>`,
          challenge: {
            description: `Print a 3x3 grid of stars. Each row has 3 stars with no spaces, and each row is on a new line.`,
            starterCode: `# Print 3x3 grid of stars
`,
            expectedOutput: `***
***
***`,
            hints: [
              `Outer loop: for row in range(3):`,
              `Inner loop: for col in range(3): print("*", end="")`,
              `After inner loop: print() for new line`
            ]
          },
          quiz: [
            {
              question: `If outer loops 3 times and inner loops 4 times, how many total inner iterations?`,
              options: ['3', '4', '7', '12'],
              correct: 3
            },
            {
              question: `What does print() (empty) do in nested loops?`,
              options: ['Nothing', 'Creates a new line', 'Stops the loop', 'Prints None'],
              correct: 1
            },
            {
              question: `Which loop represents rows in a grid?`,
              options: ['Inner loop', 'Outer loop', 'Both', 'Neither'],
              correct: 1
            },
            {
              question: `Can you nest a while loop inside a for loop?`,
              options: ['No', 'Yes', 'Only in Python 3', 'Only for small loops'],
              correct: 1
            },
            {
              question: `How many lines does a 4x4 grid pattern have?`,
              options: ['4', '16', '8', '2'],
              correct: 0
            }
          ]
        },
        {
          id: `recap_dynamic_input`,
          title: `Recap - Dynamic Input`,
          type: `mastery`,
          theory: `<h2>Recap: Loops with Conditions</h2><p>Let's combine loops with conditions, break, and continue for powerful programs.</p><h3>Pattern: Loop Until Valid Input</h3><pre><code>while True:
    value = int(input("Enter positive number: "))
    if value > 0:
        break
    print("Invalid! Try again.")</code></pre><h3>Pattern: Filter with Conditions</h3><pre><code># Print only even numbers from a range
for i in range(1, 11):
    if i % 2 != 0:
        continue
    print(i)</code></pre><p><strong>Output:</strong> 2 4 6 8 10 (each on new line)</p><h3>Pattern: Counting Matches</h3><pre><code>count = 0
for i in range(1, 21):
    if i % 3 == 0:
        count += 1
print(f"Found {count} multiples of 3")
# Output: Found 6 multiples of 3</code></pre><h3>Pattern: Sum Until Condition</h3><pre><code>total = 0
for i in range(1, 101):
    total += i
    if total > 100:
        print(f"Reached 100 at number {i}")
        break</code></pre>`,
          challenge: {
            description: `Print all numbers from 1 to 20 that are divisible by both 3 and 5.`,
            starterCode: `# Print numbers 1-20 divisible by both 3 and 5
`,
            expectedOutput: `15`,
            hints: ['Use a for loop with range(1, 21)', 'Check if i % 3 == 0 and i % 5 == 0', 'Only 15 satisfies both conditions']
          },
          mastery: {
            description: `Print all numbers from 1 to 30. But for multiples of 3, print "Fizz" instead. For multiples of 5, print "Buzz" instead. For multiples of both, print "FizzBuzz".`,
            starterCode: `# FizzBuzz from 1 to 30
`,
            expectedOutput: `1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz`,
            hints: [
              `Check divisible by both 3 AND 5 first`,
              `if i % 3 == 0 and i % 5 == 0: print("FizzBuzz")`,
              `Use elif for the individual checks`
            ]
          },
          quiz: [
            {
              question: `What does "for i in range(1, 21): if i % 3 == 0: print(i)" print?`,
              options: ['All numbers 1-20', 'Multiples of 3 between 1 and 20', 'All odd numbers', '3'],
              correct: 1
            },
            {
              question: `How do you count items matching a condition in a loop?`,
              options: ['Use len()', 'Initialize a counter and increment it in the loop', 'Use count()', 'Python counts automatically'],
              correct: 1
            },
            {
              question: `What is the accumulator pattern?`,
              options: ['A type of variable', 'Building a result by updating a variable each iteration', 'A counting mechanism', 'A loop type'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: `functions`,
      title: `Functions`,
      lessons: [
        {
          id: `declare_a_function`,
          title: `Declare a Function`,
          type: `challenge`,
          theory: `<h2>What Are Functions?</h2><p>A <strong>function</strong> is a reusable block of code that performs a specific task. You define it once, then call it whenever you need it.</p><p>Think of a function like a recipe: you write it once, and you can make that dish anytime by following it.</p><h3>Why Use Functions?</h3><ul><li><strong>Reusability:</strong> Write code once, use it many times</li><li><strong>Organization:</strong> Break complex programs into smaller, manageable pieces</li><li><strong>Readability:</strong> Give meaningful names to blocks of code</li></ul><h3>Defining a Function</h3><pre><code>def greet():
    print("Hello!")
    print("Welcome to Python")</code></pre><p><code>def</code> keyword defines the function, followed by the name and parentheses <code>()</code>, then a colon. The body is indented.</p><h3>Calling a Function</h3><pre><code>def greet():
    print("Hello!")
    print("Welcome to Python")

# Call the function
greet()</code></pre><p><strong>Output:</strong></p><pre><code>Hello!
Welcome to Python</code></pre><h3>Key Points</h3><ul><li>A function does <strong>nothing</strong> until you call it</li><li>You can call a function multiple times</li><li>The function must be defined <strong>before</strong> you call it</li></ul><pre><code>def say_hi():
    print("Hi!")

say_hi()  # Hi!
say_hi()  # Hi!
say_hi()  # Hi!</code></pre>`,
          challenge: {
            description: `Define a function called "welcome" that prints "Welcome!" and "Let us begin." on separate lines. Then call it once.`,
            starterCode: `# Define the welcome function

# Call it
`,
            expectedOutput: `Welcome!
Let us begin.`,
            hints: ['def welcome():', '    print("Welcome!")', 'Call with: welcome()']
          },
          quiz: [
            {
              question: `Which keyword defines a function?`,
              options: ['func', 'function', 'def', 'define'],
              correct: 2
            },
            {
              question: `What happens when you define a function but never call it?`,
              options: ['It runs automatically', 'Nothing happens', 'Error', 'It runs once'],
              correct: 1
            },
            {
              question: `How do you call a function named "greet"?`,
              options: ['call greet', 'greet()', 'run greet()', 'def greet()'],
              correct: 1
            },
            {
              question: `Can you call a function multiple times?`,
              options: ['No, only once', 'Yes', 'Only twice', 'Only in loops'],
              correct: 1
            },
            {
              question: `Does a function run when you define it?`,
              options: ['Yes', 'No, only when called', 'Only if it has no params', 'Yes, once automatically'],
              correct: 1
            }
          ]
        },
        {
          id: `arguments`,
          title: `Arguments`,
          type: `challenge`,
          theory: `<h2>Function Arguments (Parameters)</h2><p><strong>Arguments</strong> (also called parameters) let you pass data into a function, making it flexible and reusable.</p><h3>Defining Parameters</h3><pre><code>def greet(name):
    print(f"Hello, {name}!")

greet("Alice")   # Hello, Alice!
greet("Bob")     # Hello, Bob!</code></pre><p><code>name</code> is a <strong>parameter</strong> (in the definition). <code>"Alice"</code> is an <strong>argument</strong> (the value passed when calling).</p><h3>Multiple Parameters</h3><pre><code>def add(a, b):
    print(a + b)

add(3, 5)    # 8
add(10, 20)  # 30</code></pre><h3>Order Matters</h3><pre><code>def describe(name, age):
    print(f"{name} is {age} years old")

describe("Alice", 30)  # Alice is 30 years old
describe(30, "Alice")  # 30 is Alice years old (wrong!)</code></pre><p>Arguments are assigned to parameters in order.</p><h3>Any Data Type</h3><p>You can pass any type as an argument: strings, numbers, booleans, lists...</p><pre><code>def double(n):
    print(n * 2)

double(5)       # 10
double("ha")    # haha (string repetition!)</code></pre>`,
          challenge: {
            description: `Define a function "introduce" that takes two parameters: name and language. It should print "My name is [name] and I code in [language]". Call it with "Alice" and "Python".`,
            starterCode: `# Define introduce function

# Call it
`,
            expectedOutput: `My name is Alice and I code in Python`,
            hints: [
              `def introduce(name, language):`,
              `print(f"My name is {name} and I code in {language}")`,
              `introduce("Alice", "Python")`
            ]
          },
          quiz: [
            {
              question: `What is the difference between a parameter and an argument?`,
              options: [
                `No difference`,
                `Parameter is in definition, argument is in the call`,
                `Argument is in definition, parameter is in the call`,
                `Parameters are strings only`
              ],
              correct: 1
            },
            {
              question: `How many arguments can a function have?`,
              options: ['Only 1', 'Up to 5', 'Any number', 'Exactly 2'],
              correct: 2
            },
            {
              question: `What happens if you call f(1, 2) but f is defined with 3 parameters?`,
              options: ['It works with None', 'TypeError', 'The third is 0', 'Nothing'],
              correct: 1
            },
            {
              question: `In def add(a, b): which are parameters?`,
              options: ['a and b', 'def and add', 'add', 'The values passed'],
              correct: 0
            },
            {
              question: `What error occurs if you pass too few arguments?`,
              options: ['ValueError', 'TypeError', 'NameError', 'SyntaxError'],
              correct: 1
            }
          ]
        },
        {
          id: `return`,
          title: `Return`,
          type: `challenge`,
          theory: `<h2>The return Statement</h2><p>A function can <strong>send back a value</strong> using <code>return</code>. This lets you use the function's result in other operations.</p><h3>Without return (just prints)</h3><pre><code>def add(a, b):
    print(a + b)

add(3, 5)  # Prints 8, but you can't use the result</code></pre><h3>With return (sends value back)</h3><pre><code>def add(a, b):
    return a + b

result = add(3, 5)  # result = 8
print(result)       # 8
print(add(10, 20))  # 30</code></pre><h3>Key Differences</h3><ul><li><code>print()</code> displays on screen but doesn't give you a value to use</li><li><code>return</code> sends a value back to where the function was called</li></ul><h3>return Stops the Function</h3><pre><code>def check(n):
    if n > 0:
        return "Positive"
    return "Not positive"
    print("This never runs!")  # Dead code after return

result = check(5)
print(result)  # Positive</code></pre><h3>Storing Return Values</h3><pre><code>def square(n):
    return n ** 2

a = square(4)   # 16
b = square(3)   # 9
print(a + b)    # 25</code></pre><h3>Functions Without return</h3><p>If a function has no return statement, it returns <code>None</code> by default.</p>`,
          challenge: {
            description: `Define a function "multiply" that takes two numbers and RETURNS their product (don't print inside the function). Then print the result of multiply(6, 7).`,
            starterCode: `# Define multiply function with return

# Call it and print the result
`,
            expectedOutput: `42`,
            hints: ['def multiply(a, b): return a * b', 'Use return, not print, inside the function', 'print(multiply(6, 7))']
          },
          quiz: [
            {
              question: `What does return do?`,
              options: ['Prints a value', 'Sends a value back to the caller', 'Ends the program', 'Creates a variable'],
              correct: 1
            },
            {
              question: `What does a function return if it has no return statement?`,
              options: ['0', '""', 'None', 'Error'],
              correct: 2
            },
            {
              question: `What happens to code after a return statement?`,
              options: ['It runs next', 'It never runs', 'It runs in a loop', 'Error'],
              correct: 1
            },
            {
              question: `Can you store a function's return value in a variable?`,
              options: ['No', 'Yes', 'Only strings', 'Only numbers'],
              correct: 1
            },
            {
              question: `Can a function return multiple values?`,
              options: ['No', 'Yes, using a tuple', 'Only 2', 'Only with a list'],
              correct: 1
            }
          ]
        },
        {
          id: `recap_sigma_function`,
          title: `Recap - Sigma Function`,
          type: `mastery`,
          theory: `<h2>Recap: Functions with Loops</h2><p>Functions are powerful when combined with loops. Let's build a sigma (sum) function.</p><h3>The Sigma Function</h3><p>In math, Σ (sigma) means "sum of." Σ(1 to n) means add all numbers from 1 to n.</p><pre><code>def sigma(n):
    total = 0
    for i in range(1, n + 1):
        total += i
    return total

print(sigma(5))   # 15 (1+2+3+4+5)
print(sigma(10))  # 55</code></pre><h3>Functions Calling Functions</h3><pre><code>def square(n):
    return n ** 2

def sum_of_squares(n):
    total = 0
    for i in range(1, n + 1):
        total += square(i)
    return total

print(sum_of_squares(3))  # 1+4+9 = 14</code></pre><h3>Best Practices</h3><ul><li>Each function should do <strong>one thing</strong></li><li>Use descriptive names: <code>calculate_total</code> not <code>ct</code></li><li>Return values rather than printing (more flexible)</li><li>Keep functions short — under 20 lines ideally</li></ul>`,
          challenge: {
            description: `Write a function "sigma" that takes n and returns the sum of numbers from 1 to n. Print sigma(10).`,
            starterCode: `# Define sigma function

# Print sigma(10)
`,
            expectedOutput: `55`,
            hints: ['def sigma(n):', 'Use a loop to add numbers 1 to n', 'return total at the end']
          },
          mastery: {
            description: `Write a function "power_sum" that takes n and returns the sum of each number squared from 1 to n. (1^2 + 2^2 + ... + n^2). Print power_sum(4).`,
            starterCode: `# Define power_sum function

# Print power_sum(4)
`,
            expectedOutput: `30`,
            hints: [
              `Inside the loop: total += i ** 2`,
              `1 + 4 + 9 + 16 = 30`,
              `def power_sum(n): total = 0; for i in range(1, n+1): total += i**2; return total`
            ]
          },
          quiz: [
            {
              question: `What is sigma(3)?`,
              options: ['3', '6', '9', '1'],
              correct: 1
            },
            {
              question: `Can a function call another function?`,
              options: ['No', 'Yes', 'Only built-in functions', 'Only once'],
              correct: 1
            },
            {
              question: `What should a well-designed function do?`,
              options: ['Everything the program needs', 'One specific task', 'At least 3 things', 'Only print'],
              correct: 1
            }
          ]
        },
        {
          id: `recap_validation_function`,
          title: `Recap - Validation Function`,
          type: `mastery`,
          theory: `<h2>Recap: Validation Functions</h2><p>A common pattern is writing functions that <strong>validate</strong> input — check if data meets certain criteria and return True or False.</p><h3>Example: Age Validation</h3><pre><code>def is_valid_age(age):
    if age >= 0 and age <= 150:
        return True
    return False

print(is_valid_age(25))   # True
print(is_valid_age(-5))   # False
print(is_valid_age(200))  # False</code></pre><h3>Simpler Version</h3><p>Since the comparison already returns a boolean, you can simplify:</p><pre><code>def is_valid_age(age):
    return age >= 0 and age <= 150</code></pre><h3>Multiple Validations</h3><pre><code>def is_valid_password(password):
    if len(password) < 8:
        return False
    return True

print(is_valid_password("hi"))        # False
print(is_valid_password("secure123"))  # True</code></pre><h3>Using Validation Functions</h3><pre><code>def is_even(n):
    return n % 2 == 0

for i in range(1, 6):
    if is_even(i):
        print(f"{i} is even")</code></pre><p><strong>Output:</strong></p><pre><code>2 is even
4 is even</code></pre>`,
          challenge: {
            description: `Write a function "is_positive" that takes a number and returns True if it is greater than 0, False otherwise. Print is_positive(5) and is_positive(-3).`,
            starterCode: `# Define is_positive

# Test it
`,
            expectedOutput: `True
False`,
            hints: ['def is_positive(n): return n > 0', 'print(is_positive(5))', 'print(is_positive(-3))']
          },
          mastery: {
            description: `Write a function "is_leap_year" that takes a year and returns True if it is a leap year. Rules: divisible by 4, BUT not by 100, UNLESS also by 400. Test with 2024 (True), 1900 (False), 2000 (True).`,
            starterCode: `# Define is_leap_year

# Test with 2024, 1900, 2000
`,
            expectedOutput: `True
False
True`,
            hints: [
              `if year % 400 == 0: return True`,
              `elif year % 100 == 0: return False`,
              `elif year % 4 == 0: return True else: return False`
            ]
          },
          quiz: [
            {
              question: `What should a validation function return?`,
              options: ['A string message', 'True or False', 'The input value', '0 or 1'],
              correct: 1
            },
            {
              question: `Is "return n > 0" valid?`,
              options: ['No, must use if/else', 'Yes, comparisons return booleans', 'Only for integers', 'Only in functions'],
              correct: 1
            },
            {
              question: `What does len("hello") return?`,
              options: ['hello', '5', '4', 'Error'],
              correct: 1
            }
          ]
        },
        {
          id: `default_values`,
          title: `Default Values`,
          type: `challenge`,
          theory: `<h2>Default Parameter Values</h2><p>You can give parameters <strong>default values</strong>. If the caller doesn't provide that argument, the default is used.</p><h3>Syntax</h3><pre><code>def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")            # Hello, Alice!
greet("Bob", "Hi")        # Hi, Bob!
greet("Charlie", "Hey")   # Hey, Charlie!</code></pre><p>If no greeting is provided, "Hello" is used. If one is provided, it overrides the default.</p><h3>Multiple Defaults</h3><pre><code>def power(base, exponent=2):
    return base ** exponent

print(power(5))      # 25 (5^2, default exponent)
print(power(2, 10))  # 1024 (2^10)</code></pre><h3>Rules</h3><ul><li>Default parameters must come <strong>after</strong> non-default ones</li><li><code>def f(a=1, b)</code> → Error! <code>b</code> has no default but comes after <code>a</code> which does</li><li><code>def f(a, b=1)</code> → Correct!</li></ul><h3>Practical Example</h3><pre><code>def calculate_tax(amount, rate=10):
    tax = amount * rate / 100
    return tax

print(calculate_tax(100))      # 10.0 (10% default)
print(calculate_tax(100, 20))  # 20.0 (20% specified)</code></pre>`,
          challenge: {
            description: `Define a function "repeat_word" that takes a word and an optional count (default 3). It prints the word that many times on one line separated by spaces. Call it with "Hi" (default count) and then with "Yo" and count 2.`,
            starterCode: `# Define repeat_word with default count=3

# Call with "Hi" (default)

# Call with "Yo" and count 2
`,
            expectedOutput: `Hi Hi Hi
Yo Yo`,
            hints: [
              `def repeat_word(word, count=3):`,
              `print((word + " ") * count) won't work perfectly - use join or careful logic`,
              `print(" ".join([word] * count))`
            ]
          },
          quiz: [
            {
              question: `What is a default parameter?`,
              options: [
                `A parameter that cannot change`,
                `A value used when no argument is provided`,
                `The first parameter`,
                `A required parameter`
              ],
              correct: 1
            },
            {
              question: `In def f(a, b=5): what is the default for a?`,
              options: ['5', '0', 'None', 'There is no default for a'],
              correct: 3
            },
            {
              question: `Is def f(a=1, b): valid?`,
              options: ['Yes', 'No, defaults must come after required params', 'Only in Python 3', 'Depends on the values'],
              correct: 1
            },
            {
              question: `What does power(3) return if def power(n, exp=2)?`,
              options: ['3', '6', '9', 'Error'],
              correct: 2
            },
            {
              question: `Can you have multiple default parameters?`,
              options: ['No', 'Yes', 'Only the last one', 'Maximum 2'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: `fizzbuzz_with_a_twist`,
      title: `FizzBuzz with a Twist`,
      lessons: [
        {
          id: `fizzbuzz_game_overview`,
          title: `Game Overview`,
          type: `project`,
          theory: `<h2>Project: FizzBuzz with a Twist</h2><p>FizzBuzz is a classic programming challenge used in coding interviews worldwide. Let's build it with our own twist!</p><h3>Standard FizzBuzz Rules</h3><ul><li>Loop through numbers 1 to N</li><li>If divisible by 3, print "Fizz"</li><li>If divisible by 5, print "Buzz"</li><li>If divisible by both 3 and 5, print "FizzBuzz"</li><li>Otherwise, print the number itself</li></ul><h3>Our Twist</h3><p>We'll add a custom word for a custom divisor! For example, if the user picks 7 with the word "Jazz", any multiple of 7 also prints "Jazz".</p><h3>Project Structure</h3><ol><li><strong>This lesson:</strong> Understand the game and print examples</li><li><strong>Next:</strong> Build the FizzBuzz function</li><li><strong>Then:</strong> Loop through numbers</li><li><strong>Finally:</strong> Add the twist (custom divisor)</li></ol><h3>Example Output (1-15, standard)</h3><pre><code>1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz</code></pre>`,
          challenge: {
            description: `Print the word "FizzBuzz" to show you understand the concept. Then print a brief description: "Divisible by 3: Fizz, by 5: Buzz, by both: FizzBuzz".`,
            starterCode: `# Print FizzBuzz

# Print the description
`,
            expectedOutput: `FizzBuzz
Divisible by 3: Fizz, by 5: Buzz, by both: FizzBuzz`,
            hints: ['print("FizzBuzz")', 'print("Divisible by 3: Fizz, by 5: Buzz, by both: FizzBuzz")', 'Two simple print statements']
          },
          quiz: [
            {
              question: `In FizzBuzz, what do you print for multiples of 3?`,
              options: ['Buzz', 'Fizz', 'FizzBuzz', 'The number'],
              correct: 1
            },
            {
              question: `What do you print for multiples of both 3 and 5?`,
              options: ['Fizz', 'Buzz', 'FizzBuzz', 'Nothing'],
              correct: 2
            },
            {
              question: `What is 15 in FizzBuzz?`,
              options: ['15', 'Fizz', 'Buzz', 'FizzBuzz'],
              correct: 3
            },
            {
              question: `Which check should come first: divisible by 3 and 5, or just by 3?`,
              options: ['Just by 3', 'Divisible by both (3 and 5)', 'Doesn\'t matter', 'Just by 5'],
              correct: 1
            }
          ]
        },
        {
          id: `fizzbuzz_function`,
          title: `The FizzBuzz Function`,
          type: `project`,
          theory: `<h2>Step 2: The FizzBuzz Function</h2><p>Let's create a function that takes a number and returns the appropriate FizzBuzz response.</p><h3>Why a Function?</h3><p>By putting the logic in a function, we can:</p><ul><li>Test it with individual numbers</li><li>Reuse it in different loops</li><li>Add the twist later without rewriting everything</li></ul><h3>Implementation</h3><pre><code>def fizzbuzz(n):
    if n % 3 == 0 and n % 5 == 0:
        return "FizzBuzz"
    elif n % 3 == 0:
        return "Fizz"
    elif n % 5 == 0:
        return "Buzz"
    else:
        return str(n)</code></pre><h3>Why Check "Both" First?</h3><p>15 is divisible by both 3 and 5. If we check <code>% 3</code> first, it would match and return "Fizz" — missing the "FizzBuzz". Always check the most specific condition first!</p><h3>Why return str(n)?</h3><p>Returning the number as a string keeps the return type consistent — the function always returns a string.</p><h3>Testing</h3><pre><code>print(fizzbuzz(9))   # Fizz
print(fizzbuzz(10))  # Buzz
print(fizzbuzz(15))  # FizzBuzz
print(fizzbuzz(7))   # 7</code></pre>`,
          challenge: {
            description: `Define the fizzbuzz function and test it by printing the result for numbers 3, 5, 15, and 7.`,
            starterCode: `# Define the fizzbuzz function

# Test with 3, 5, 15, 7
`,
            expectedOutput: `Fizz
Buzz
FizzBuzz
7`,
            hints: [
              `if n % 15 == 0: return "FizzBuzz", elif n % 3: return "Fizz", elif n % 5: return "Buzz"`,
              `print(fizzbuzz(3))`,
              `Remember to return str(n) for non-matching numbers`
            ]
          },
          quiz: [
            {
              question: `Why check "divisible by both" before "divisible by 3"?`,
              options: ['It runs faster', 'Specific conditions must come before general ones', 'Python requires it', 'It doesn\'t matter'],
              correct: 1
            },
            {
              question: `What does fizzbuzz(4) return?`,
              options: ['Fizz', 'Buzz', '4', '"4"'],
              correct: 3
            },
            {
              question: `Why return str(n) instead of n?`,
              options: ['Consistency - function always returns a string', 'Python can\'t return numbers', 'str is faster', 'No reason'],
              correct: 0
            }
          ]
        },
        {
          id: `fizzbuzz_looping`,
          title: `Looping The Numbers`,
          type: `project`,
          theory: `<h2>Step 3: Looping Through Numbers</h2><p>Now let's use our function in a loop to process a range of numbers.</p><h3>Basic Loop</h3><pre><code>def fizzbuzz(n):
    if n % 3 == 0 and n % 5 == 0:
        return "FizzBuzz"
    elif n % 3 == 0:
        return "Fizz"
    elif n % 5 == 0:
        return "Buzz"
    else:
        return str(n)

for i in range(1, 16):
    print(fizzbuzz(i))</code></pre><h3>Making it Configurable</h3><p>Let's make the upper limit a variable:</p><pre><code>limit = 20
for i in range(1, limit + 1):
    print(fizzbuzz(i))</code></pre><h3>Wrapping in a Function</h3><pre><code>def run_fizzbuzz(limit):
    for i in range(1, limit + 1):
        print(fizzbuzz(i))

run_fizzbuzz(5)</code></pre><p><strong>Output:</strong></p><pre><code>1
2
Fizz
4
Buzz</code></pre>`,
          challenge: {
            description: `Define the fizzbuzz function and use a loop to print FizzBuzz results for numbers 1 through 7.`,
            starterCode: `# Define fizzbuzz function
def fizzbuzz(n):
    if n % 3 == 0 and n % 5 == 0:
        return "FizzBuzz"
    elif n % 3 == 0:
        return "Fizz"
    elif n % 5 == 0:
        return "Buzz"
    else:
        return str(n)

# Loop 1 to 7 and print results
`,
            expectedOutput: `1
2
Fizz
4
Buzz
Fizz
7`,
            hints: ['for i in range(1, 8):', 'print(fizzbuzz(i))', 'range(1, 8) gives 1 through 7']
          },
          quiz: [
            {
              question: `What does range(1, 16) produce?`,
              options: ['1 to 16', '1 to 15', '0 to 15', '0 to 16'],
              correct: 1
            },
            {
              question: `Why use limit + 1 in range(1, limit + 1)?`,
              options: ['To include the limit number', 'Python requires it', 'For safety', 'It runs faster'],
              correct: 0
            },
            {
              question: `What is the benefit of using a function inside a loop?`,
              options: ['Speed', 'The logic is separate and testable', 'Less memory', 'Required by Python'],
              correct: 1
            }
          ]
        },
        {
          id: `fizzbuzz_twist`,
          title: `Adding The Twist`,
          type: `project`,
          theory: `<h2>Step 4: The Twist</h2><p>Now for our twist! We'll add a custom rule: a custom number and word. For example, multiples of 7 become "Jazz".</p><h3>Enhanced Function</h3><pre><code>def fizzbuzz_twist(n, custom_num=7, custom_word="Jazz"):
    result = ""
    if n % 3 == 0:
        result += "Fizz"
    if n % 5 == 0:
        result += "Buzz"
    if n % custom_num == 0:
        result += custom_word
    if result == "":
        result = str(n)
    return result</code></pre><h3>How This Works</h3><p>Instead of if/elif (only one matches), we use multiple if statements so a number can match <strong>multiple</strong> rules. We build the result string by concatenation.</p><h3>Example: 21 (divisible by both 3 and 7)</h3><pre><code>print(fizzbuzz_twist(21))  # FizzJazz</code></pre><h3>Example: 35 (divisible by both 5 and 7)</h3><pre><code>print(fizzbuzz_twist(35))  # BuzzJazz</code></pre><h3>Full Run 1-7</h3><pre><code>for i in range(1, 8):
    print(fizzbuzz_twist(i))
# 1, 2, Fizz, 4, Buzz, Fizz, Jazz</code></pre>`,
          challenge: {
            description: `Define fizzbuzz_twist with custom_num=7 and custom_word="Jazz". Print results for numbers 1 through 7.`,
            starterCode: `# Define fizzbuzz_twist
def fizzbuzz_twist(n, custom_num=7, custom_word="Jazz"):
    result = ""
    if n % 3 == 0:
        result += "Fizz"
    if n % 5 == 0:
        result += "Buzz"
    if n % custom_num == 0:
        result += custom_word
    if result == "":
        result = str(n)
    return result

# Print results for 1-7
`,
            expectedOutput: `1
2
Fizz
4
Buzz
Fizz
Jazz`,
            hints: [
              `for i in range(1, 8): print(fizzbuzz_twist(i))`,
              `Number 7 is divisible by 7, so it prints Jazz`,
              `Numbers 3 and 6 print Fizz`
            ]
          },
          quiz: [
            {
              question: `Why use multiple "if" instead of "if/elif" for the twist?`,
              options: ['Runs faster', 'A number can match multiple rules', 'Python requires it', 'Less code'],
              correct: 1
            },
            {
              question: `What does fizzbuzz_twist(21) return with custom_num=7?`,
              options: ['Fizz', 'Jazz', 'FizzJazz', '21'],
              correct: 2
            },
            {
              question: `What does the default parameter custom_word="Jazz" mean?`,
              options: ['Jazz is always used', 'Jazz is used only if no word is provided', 'The function only works with Jazz', 'Error'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: `lists_basics`,
      title: `Lists Basics`,
      lessons: [
        {
          id: `declaring_a_list`,
          title: `Declaring a List`,
          type: `challenge`,
          theory: `<h2>What Are Lists?</h2><p>A <strong>list</strong> is an ordered collection of items. Unlike single variables that hold one value, a list can hold multiple values of any type.</p><p>Think of a list like a shopping list — a numbered sequence of items you can add to, remove from, or rearrange.</p><h3>Creating a List</h3><pre><code>fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]
empty = []</code></pre><h3>Key Characteristics</h3><ul><li><strong>Ordered:</strong> Items maintain their position</li><li><strong>Mutable:</strong> You can change, add, or remove items</li><li><strong>Any type:</strong> Can mix strings, numbers, booleans, etc.</li><li><strong>Duplicates allowed:</strong> Same value can appear multiple times</li></ul><h3>Getting the Length</h3><pre><code>fruits = ["apple", "banana", "cherry"]
print(len(fruits))  # 3</code></pre><h3>Printing a List</h3><pre><code>colors = ["red", "green", "blue"]
print(colors)  # ['red', 'green', 'blue']
print(len(colors))  # 3</code></pre>`,
          challenge: {
            description: `Create a list called "colors" with three strings: "red", "green", "blue". Print the list and its length.`,
            starterCode: `# Create the colors list

# Print the list

# Print its length
`,
            expectedOutput: `['red', 'green', 'blue']
3`,
            hints: ['colors = ["red", "green", "blue"]', 'print(colors) shows the whole list', 'print(len(colors)) shows the count']
          },
          quiz: [
            {
              question: `How do you create a list?`,
              options: ['list = (1, 2, 3)', 'list = [1, 2, 3]', 'list = {1, 2, 3}', 'list(1, 2, 3)'],
              correct: 1
            },
            {
              question: `Can a list contain different data types?`,
              options: ['No, must be same type', 'Yes', 'Only numbers and strings', 'Only in Python 3'],
              correct: 1
            },
            {
              question: `What does len([1, 2, 3]) return?`,
              options: ['2', '3', '4', '[3]'],
              correct: 1
            },
            {
              question: `What is an empty list?`,
              options: ['None', '[]', '""', '()'],
              correct: 1
            },
            {
              question: `Can a list contain another list?`,
              options: ['No', 'Yes, lists can be nested', 'Only tuples', 'Only in Python 3'],
              correct: 1
            }
          ]
        },
        {
          id: `accessing_list_elements`,
          title: `Accessing List Elements`,
          type: `mastery`,
          theory: `<h2>Accessing List Elements</h2><p>Each item in a list has a position called an <strong>index</strong>. Python uses <strong>zero-based indexing</strong> — the first item is at index 0.</p><h3>Positive Indexing</h3><pre><code>fruits = ["apple", "banana", "cherry", "date"]
print(fruits[0])   # apple (first)
print(fruits[1])   # banana (second)
print(fruits[3])   # date (fourth/last)</code></pre><h3>Negative Indexing</h3><p>Negative indices count from the end:</p><pre><code>fruits = ["apple", "banana", "cherry", "date"]
print(fruits[-1])  # date (last)
print(fruits[-2])  # cherry (second to last)</code></pre><h3>Visual Guide</h3><pre><code>           [  "apple",  "banana",  "cherry",  "date"  ]
Positive:      0          1          2          3
Negative:     -4         -3         -2         -1</code></pre><h3>Index Out of Range</h3><pre><code>fruits = ["apple", "banana", "cherry"]
# print(fruits[5])  # IndexError! Only indices 0-2 exist</code></pre><p>Accessing an index that doesn't exist causes an <code>IndexError</code>.</p><h3>Using Variables as Indices</h3><pre><code>i = 2
print(fruits[i])  # cherry</code></pre>`,
          challenge: {
            description: `Given the list animals = ["cat", "dog", "bird", "fish"], print the first element, the last element (using negative indexing), and the third element.`,
            starterCode: `animals = ["cat", "dog", "bird", "fish"]

# Print first element

# Print last element (negative index)

# Print third element
`,
            expectedOutput: `cat
fish
bird`,
            hints: ['First element: animals[0]', 'Last element: animals[-1]', 'Third element: animals[2]']
          },
          quiz: [
            {
              question: `What index is the first element of a list?`,
              options: ['1', '0', '-1', 'first'],
              correct: 1
            },
            {
              question: `What does fruits[-1] access?`,
              options: ['The first element', 'The last element', 'Nothing', 'An error'],
              correct: 1
            },
            {
              question: `If a list has 4 items, what is the highest valid positive index?`,
              options: ['4', '3', '5', '2'],
              correct: 1
            },
            {
              question: `What happens if you access an index that doesn't exist?`,
              options: ['Returns None', 'Returns 0', 'IndexError', 'Returns empty string'],
              correct: 2
            },
            {
              question: `What is the index of the last item in a 5-element list?`,
              options: ['5', '4', '-5', '3'],
              correct: 1
            }
          ],
          mastery: {
            description: `Given data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], print the first element, middle two elements (5th and 6th), and last element using indexing.`,
            starterCode: `data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

# Print first

# Print 5th element

# Print 6th element

# Print last
`,
            expectedOutput: `10
50
60
100`,
            hints: ['First: data[0]', '5th element: data[4] (0-indexed!)', 'Last: data[-1]']
          }
        },
        {
          id: `modifying_lists`,
          title: `Modifying Lists`,
          type: `challenge`,
          theory: `<h2>Modifying Lists</h2><p>Lists are <strong>mutable</strong> — you can change their contents after creation.</p><h3>Changing an Element</h3><pre><code>fruits = ["apple", "banana", "cherry"]
fruits[1] = "mango"
print(fruits)  # ['apple', 'mango', 'cherry']</code></pre><h3>Adding Elements</h3><pre><code># append() adds to the end
fruits = ["apple", "banana"]
fruits.append("cherry")
print(fruits)  # ['apple', 'banana', 'cherry']

# insert() adds at a specific position
fruits.insert(1, "mango")
print(fruits)  # ['apple', 'mango', 'banana', 'cherry']</code></pre><h3>Removing Elements</h3><pre><code>fruits = ["apple", "banana", "cherry", "banana"]

# remove() removes the first occurrence
fruits.remove("banana")
print(fruits)  # ['apple', 'cherry', 'banana']

# pop() removes by index (default: last)
last = fruits.pop()
print(last)    # banana
print(fruits)  # ['apple', 'cherry']</code></pre><h3>pop() Returns the Removed Item</h3><p>Unlike <code>remove()</code>, <code>pop()</code> gives you back the item it removed — useful when you need to use that value.</p><h3>del Statement</h3><pre><code>numbers = [1, 2, 3, 4, 5]
del numbers[2]  # Removes item at index 2
print(numbers)  # [1, 2, 4, 5]</code></pre>`,
          challenge: {
            description: `Start with numbers = [10, 20, 30, 40]. Change the second element to 25. Append 50. Print the final list.`,
            starterCode: `numbers = [10, 20, 30, 40]

# Change second element to 25

# Append 50

# Print the list
`,
            expectedOutput: `[10, 25, 30, 40, 50]`,
            hints: ['numbers[1] = 25 (index 1 is the second element)', 'numbers.append(50)', 'print(numbers)']
          },
          quiz: [
            {
              question: `What does append() do?`,
              options: ['Adds to the beginning', 'Adds to the end', 'Removes from the end', 'Sorts the list'],
              correct: 1
            },
            {
              question: `What does fruits.pop() return?`,
              options: ['Nothing', 'The last item (and removes it)', 'The first item', 'True or False'],
              correct: 1
            },
            {
              question: `What is the difference between remove() and pop()?`,
              options: [
                `No difference`,
                `remove() uses value, pop() uses index`,
                `pop() uses value, remove() uses index`,
                `One works on strings only`
              ],
              correct: 1
            },
            {
              question: `What does insert(0, "x") do?`,
              options: ['Adds "x" at the end', 'Adds "x" at the beginning', 'Replaces first item', 'Error'],
              correct: 1
            },
            {
              question: `What does insert(0, x) do?`,
              options: ['Error', 'Adds x at the beginning', 'Adds x at the end', 'Replaces index 0'],
              correct: 1
            }
          ]
        },
        {
          id: `list_methods`,
          title: `List Methods`,
          type: `challenge`,
          theory: `<h2>Useful List Methods</h2><p>Lists come with many built-in methods for common operations.</p><h3>Sorting</h3><pre><code>numbers = [3, 1, 4, 1, 5, 9]
numbers.sort()
print(numbers)  # [1, 1, 3, 4, 5, 9]

# Reverse sort
numbers.sort(reverse=True)
print(numbers)  # [9, 5, 4, 3, 1, 1]</code></pre><h3>Reversing</h3><pre><code>items = [1, 2, 3, 4]
items.reverse()
print(items)  # [4, 3, 2, 1]</code></pre><h3>Counting and Finding</h3><pre><code>nums = [1, 2, 3, 2, 4, 2]
print(nums.count(2))  # 3 (appears 3 times)
print(nums.index(3))  # 2 (first occurrence at index 2)</code></pre><h3>Clearing</h3><pre><code>items = [1, 2, 3]
items.clear()
print(items)  # []</code></pre><h3>Copying</h3><pre><code>original = [1, 2, 3]
copy = original.copy()
copy.append(4)
print(original)  # [1, 2, 3] (unchanged!)
print(copy)      # [1, 2, 3, 4]</code></pre><h3>Important: sort() and reverse() modify the list in place and return None!</h3><pre><code>nums = [3, 1, 2]
result = nums.sort()  # DON'T do this
print(result)  # None! (sort returns None)</code></pre>`,
          challenge: {
            description: `Given numbers = [5, 2, 8, 1, 9, 3], sort it in ascending order and print the sorted list. Then print how many times 2 appears.`,
            starterCode: `numbers = [5, 2, 8, 1, 9, 3]

# Sort the list

# Print the sorted list

# Print count of 2
`,
            expectedOutput: `[1, 2, 3, 5, 8, 9]
1`,
            hints: ['numbers.sort() sorts in place', 'print(numbers) after sorting', 'numbers.count(2) returns how many times 2 appears']
          },
          quiz: [
            {
              question: `Does sort() return the sorted list?`,
              options: ['Yes', 'No, it returns None and sorts in place', 'Only for numbers', 'Only with reverse=True'],
              correct: 1
            },
            {
              question: `What does .count(x) do?`,
              options: ['Counts all elements', 'Counts occurrences of x', 'Returns the index of x', 'Removes x'],
              correct: 1
            },
            {
              question: `What does .index(x) return?`,
              options: ['True/False', 'The position of first occurrence of x', 'How many times x appears', 'The last index'],
              correct: 1
            },
            {
              question: `What does .clear() do?`,
              options: ['Deletes the variable', 'Removes all elements, leaving empty list', 'Resets to original', 'Prints the list'],
              correct: 1
            },
            {
              question: `What does sorted() do differently from .sort()?`,
              options: ['Nothing', 'Returns a new list instead of modifying in place', 'Only works on numbers', 'Sorts in reverse'],
              correct: 1
            }
          ]
        },
        {
          id: `recap_product_list`,
          title: `Recap - Product List`,
          type: `mastery`,
          theory: `<h2>Recap: Working with Lists</h2><p>Let's combine list creation, modification, and methods.</p><h3>Building a List Dynamically</h3><pre><code>squares = []
for i in range(1, 6):
    squares.append(i ** 2)
print(squares)  # [1, 4, 9, 16, 25]</code></pre><h3>Processing List Data</h3><pre><code>prices = [10, 25, 5, 30, 15]
total = 0
for price in prices:
    total += price
print(f"Total: {total}")  # Total: 85
print(f"Items: {len(prices)}")  # Items: 5</code></pre><h3>Finding Max and Min</h3><pre><code>scores = [85, 92, 78, 95, 88]
print(max(scores))  # 95
print(min(scores))  # 78
print(sum(scores))  # 438</code></pre><p>Python has built-in <code>max()</code>, <code>min()</code>, and <code>sum()</code> functions that work on lists.</p>`,
          challenge: {
            description: `Create a list of the first 5 positive integers [1, 2, 3, 4, 5]. Print the sum of all elements and the maximum value.`,
            starterCode: `# Create the list
numbers = [1, 2, 3, 4, 5]

# Print the sum

# Print the maximum
`,
            expectedOutput: `15
5`,
            hints: ['print(sum(numbers))', 'print(max(numbers))', 'sum() and max() are built-in Python functions']
          },
          mastery: {
            description: `Build a list of even numbers from 2 to 10 using a loop and append. Print the list, its length, and its sum.`,
            starterCode: `# Build list of even numbers 2-10
evens = []

# Use a loop to append even numbers

# Print the list, length, and sum
`,
            expectedOutput: `[2, 4, 6, 8, 10]
5
30`,
            hints: [
              `for i in range(2, 11, 2): evens.append(i)`,
              `print(evens), print(len(evens)), print(sum(evens))`,
              `Or use range(1, 11) with if i % 2 == 0`
            ]
          },
          quiz: [
            {
              question: `What does sum([1, 2, 3, 4]) return?`,
              options: ['4', '10', '[10]', '1234'],
              correct: 1
            },
            {
              question: `What does max([5, 2, 8, 1]) return?`,
              options: ['1', '5', '8', '[8]'],
              correct: 2
            },
            {
              question: `How do you add an item to a list dynamically?`,
              options: ['list + item', 'list.append(item)', 'list.add(item)', 'list[item]'],
              correct: 1
            }
          ]
        },
        {
          id: `recap_reversed_list`,
          title: `Recap - Reversed List`,
          type: `mastery`,
          theory: `<h2>Recap: List Manipulation</h2><p>Let's practice more complex list operations.</p><h3>Building a Reversed Copy</h3><pre><code>original = [1, 2, 3, 4, 5]

# Method 1: reverse() modifies in place
original.reverse()
print(original)  # [5, 4, 3, 2, 1]

# Method 2: Slicing (creates new list)
original = [1, 2, 3, 4, 5]
reversed_list = original[::-1]
print(reversed_list)  # [5, 4, 3, 2, 1]
print(original)       # [1, 2, 3, 4, 5] (unchanged!)</code></pre><h3>Building Reversed List with Loop</h3><pre><code>original = [1, 2, 3, 4, 5]
reversed_list = []
for i in range(len(original) - 1, -1, -1):
    reversed_list.append(original[i])
print(reversed_list)  # [5, 4, 3, 2, 1]</code></pre><h3>The reversed() Function</h3><pre><code>nums = [1, 2, 3]
for n in reversed(nums):
    print(n, end=" ")  # 3 2 1</code></pre><h3>Joining List Elements</h3><pre><code>words = ["Hello", "World"]
result = " ".join(words)
print(result)  # Hello World</code></pre>`,
          challenge: {
            description: `Given words = ["Python", "is", "fun"], print the list reversed (as a list). Then print the words joined with a space.`,
            starterCode: `words = ["Python", "is", "fun"]

# Print reversed list

# Print joined with space
`,
            expectedOutput: `['fun', 'is', 'Python']
Python is fun`,
            hints: ['Use words[::-1] for reversed copy', 'print(words[::-1])', '" ".join(words) joins with spaces']
          },
          mastery: {
            description: `Given nums = [4, 2, 7, 1, 9, 3], sort a copy (don't modify original), print the sorted version, print the original to prove it's unchanged, and print the sorted list in reverse.`,
            starterCode: `nums = [4, 2, 7, 1, 9, 3]

# Create a sorted copy

# Print sorted copy

# Print original

# Print sorted in reverse
`,
            expectedOutput: `[1, 2, 3, 4, 7, 9]
[4, 2, 7, 1, 9, 3]
[9, 7, 4, 3, 2, 1]`,
            hints: [
              `sorted_nums = sorted(nums) creates a new sorted list`,
              `sorted() returns a new list without modifying the original`,
              `For reverse: sorted(nums, reverse=True) or sorted_nums[::-1]`
            ]
          },
          quiz: [
            {
              question: `What is the difference between sort() and sorted()?`,
              options: [
                `No difference`,
                `sort() modifies in place, sorted() returns new list`,
                `sorted() modifies in place`,
                `sort() returns new list`
              ],
              correct: 1
            },
            {
              question: `What does [::-1] do?`,
              options: ['Copies the list', 'Reverses the list', 'Removes last element', 'Sorts the list'],
              correct: 1
            },
            {
              question: `What does " ".join(["a", "b", "c"]) return?`,
              options: ['abc', 'a b c', 'a, b, c', '[a b c]'],
              correct: 1
            }
          ]
        },
        {
          id: `tuple`,
          title: `Tuple`,
          type: `challenge`,
          theory: `<h2>Tuples</h2><p>A <strong>tuple</strong> is like a list, but <strong>immutable</strong> — once created, it cannot be changed. Use tuples for data that shouldn't be modified.</p><h3>Creating Tuples</h3><pre><code>coordinates = (10, 20)
colors = ("red", "green", "blue")
single = (42,)  # Note the comma! Without it, it's just a number in parentheses</code></pre><h3>Accessing Elements</h3><pre><code>point = (5, 10, 15)
print(point[0])   # 5
print(point[-1])  # 15
print(len(point)) # 3</code></pre><h3>Immutability</h3><pre><code>coords = (10, 20)
# coords[0] = 30  # TypeError! Tuples can't be modified</code></pre><h3>Why Use Tuples?</h3><ul><li><strong>Protection:</strong> Data that shouldn't change (coordinates, RGB colors, dates)</li><li><strong>Performance:</strong> Slightly faster than lists</li><li><strong>Dictionary keys:</strong> Tuples can be used as dict keys, lists cannot</li></ul><h3>Tuple Unpacking</h3><pre><code>point = (3, 7)
x, y = point
print(x)  # 3
print(y)  # 7</code></pre><h3>Tuple vs List</h3><table><tr><th>Feature</th><th>List</th><th>Tuple</th></tr><tr><td>Syntax</td><td>[1, 2, 3]</td><td>(1, 2, 3)</td></tr><tr><td>Mutable?</td><td>Yes</td><td>No</td></tr><tr><td>Use case</td><td>Data that changes</td><td>Data that stays fixed</td></tr></table>`,
          challenge: {
            description: `Create a tuple called "point" with values (4, 7). Unpack it into variables x and y. Print x and y on separate lines.`,
            starterCode: `# Create the tuple

# Unpack into x and y

# Print x and y
`,
            expectedOutput: `4
7`,
            hints: ['point = (4, 7)', 'x, y = point', 'print(x) and print(y)']
          },
          quiz: [
            {
              question: `What makes tuples different from lists?`,
              options: ['Tuples use parentheses', 'Tuples are immutable', 'Tuples can only hold numbers', 'Tuples are faster to create'],
              correct: 1
            },
            {
              question: `How do you create a tuple with one element?`,
              options: ['(42)', '(42,)', '[42]', 'tuple(42)'],
              correct: 1
            },
            {
              question: `Can you change an element in a tuple?`,
              options: ['Yes', 'No, tuples are immutable', 'Only the last element', 'Only with a method'],
              correct: 1
            },
            {
              question: `What is tuple unpacking?`,
              options: ['Deleting a tuple', 'Assigning tuple elements to individual variables', 'Converting to a list', 'Adding elements'],
              correct: 1
            },
            {
              question: `Can tuples be used as dictionary keys?`,
              options: ['No', 'Yes, because they are immutable', 'Only string tuples', 'Only in Python 3'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: `iterating_over_sequences`,
      title: `Iterating Over Sequences`,
      lessons: [
        {
          id: `iterating_over_elements`,
          title: `Iterating Over Elements`,
          type: `mastery`,
          theory: `<h2>Iterating Over Lists</h2><p>The <code>for</code> loop is the natural way to go through each element in a list, one at a time.</p><h3>Basic Iteration</h3><pre><code>fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)</code></pre><p><strong>Output:</strong></p><pre><code>apple
banana
cherry</code></pre><p>Each iteration, the variable <code>fruit</code> takes the value of the next element.</p><h3>Processing Each Element</h3><pre><code>numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num * 2)</code></pre><p><strong>Output:</strong></p><pre><code>2
4
6
8
10</code></pre><h3>Accumulating Results</h3><pre><code>prices = [10.50, 23.00, 7.99, 15.00]
total = 0
for price in prices:
    total += price
print(f"Total: {total}")  # Total: 56.49</code></pre><h3>Conditional Processing</h3><pre><code>numbers = [1, 2, 3, 4, 5, 6, 7, 8]
for num in numbers:
    if num % 2 == 0:
        print(num)</code></pre><p><strong>Output:</strong></p><pre><code>2
4
6
8</code></pre><h3>Building New Lists from Old</h3><pre><code>names = ["alice", "bob", "charlie"]
upper_names = []
for name in names:
    upper_names.append(name.upper())
print(upper_names)  # ['ALICE', 'BOB', 'CHARLIE']</code></pre>`,
          challenge: {
            description: `Given numbers = [3, 7, 2, 9, 4], iterate over them and print only numbers greater than 5.`,
            starterCode: `numbers = [3, 7, 2, 9, 4]

# Print numbers greater than 5
`,
            expectedOutput: `7
9`,
            hints: ['for num in numbers:', 'if num > 5: print(num)', 'Only 7 and 9 are greater than 5']
          },
          quiz: [
            {
              question: `In "for item in mylist:", what does item represent?`,
              options: ['The index', 'The current element', 'The whole list', 'The length'],
              correct: 1
            },
            {
              question: `How many times does the loop run for a list of 5 elements?`,
              options: ['4', '5', '6', 'Depends'],
              correct: 1
            },
            {
              question: `Can you modify the list while iterating over it?`,
              options: ['Yes, always safe', 'Possible but generally not recommended', 'Never possible', 'Only with while loops'],
              correct: 1
            },
            {
              question: `What happens when the loop finishes all elements?`,
              options: ['Error', 'Program continues after the loop', 'It restarts', 'Program ends'],
              correct: 1
            }
          ],
          mastery: {
            description: `Given words = ["hello", "world", "python", "code"], print each word with its length in format "word: X chars".`,
            starterCode: `words = ["hello", "world", "python", "code"]

# Print each word with its length
`,
            expectedOutput: `hello: 5 chars
world: 5 chars
python: 6 chars
code: 4 chars`,
            hints: [
              `for word in words: print(f"{word}: {len(word)} chars")`,
              `len() gives the length of a string`,
              `Use an f-string for formatting`
            ]
          }
        },
        {
          id: `enumerate_function`,
          title: `The Enumerate Function`,
          type: `challenge`,
          theory: `<h2>The enumerate() Function</h2><p>Sometimes you need both the <strong>index</strong> and the <strong>value</strong> while looping. <code>enumerate()</code> gives you both.</p><h3>Without enumerate (manual counter)</h3><pre><code>fruits = ["apple", "banana", "cherry"]
i = 0
for fruit in fruits:
    print(f"{i}: {fruit}")
    i += 1</code></pre><h3>With enumerate (much cleaner!)</h3><pre><code>fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")</code></pre><p><strong>Output:</strong></p><pre><code>0: apple
1: banana
2: cherry</code></pre><h3>How It Works</h3><p><code>enumerate()</code> wraps each element with its index as a tuple: <code>(0, "apple")</code>, <code>(1, "banana")</code>, etc. The <code>index, fruit</code> syntax unpacks these tuples.</p><h3>Custom Start Index</h3><pre><code>fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")</code></pre><p><strong>Output:</strong></p><pre><code>1. apple
2. banana
3. cherry</code></pre><h3>Practical Use: Finding Position</h3><pre><code>scores = [85, 92, 78, 95, 88]
for i, score in enumerate(scores):
    if score > 90:
        print(f"High score at position {i}: {score}")</code></pre>`,
          challenge: {
            description: `Given items = ["pen", "book", "bag"], use enumerate with start=1 to print each item numbered: "1. pen", "2. book", "3. bag".`,
            starterCode: `items = ["pen", "book", "bag"]

# Use enumerate to print numbered items
`,
            expectedOutput: `1. pen
2. book
3. bag`,
            hints: ['for i, item in enumerate(items, start=1):', 'print(f"{i}. {item}")', 'start=1 makes counting begin at 1']
          },
          quiz: [
            {
              question: `What does enumerate() provide?`,
              options: ['Just indices', 'Just values', 'Both index and value', 'The length'],
              correct: 2
            },
            {
              question: `What does enumerate(["a", "b"], start=1) give first?`,
              options: ['(0, "a")', '(1, "a")', '(1, "b")', '("a", 1)'],
              correct: 1
            },
            {
              question: `What is the default start value for enumerate?`,
              options: ['1', '0', '-1', 'None'],
              correct: 1
            },
            {
              question: `Can enumerate work with strings?`,
              options: ['No, only lists', 'Yes', 'Only with tuples', 'Only with numbers'],
              correct: 1
            },
            {
              question: `What does enumerate return for each item?`,
              options: ['Just the index', 'A tuple of (index, value)', 'Just the value', 'A dictionary'],
              correct: 1
            }
          ]
        },
        {
          id: `iterating_strings_part_1`,
          title: `Iterating Over Strings Part 1`,
          type: `challenge`,
          theory: `<h2>Iterating Over Strings</h2><p>Strings are sequences too! You can loop through each character just like list elements.</p><h3>Character by Character</h3><pre><code>word = "Python"
for char in word:
    print(char)</code></pre><p><strong>Output:</strong></p><pre><code>P
y
t
h
o
n</code></pre><h3>String Length and Indexing</h3><pre><code>text = "Hello"
print(len(text))   # 5
print(text[0])     # H
print(text[-1])    # o</code></pre><h3>Counting Characters</h3><pre><code>sentence = "hello world"
vowel_count = 0
for char in sentence:
    if char in "aeiou":
        vowel_count += 1
print(vowel_count)  # 3</code></pre><h3>The "in" Operator with Strings</h3><pre><code>print("h" in "hello")     # True
print("xyz" in "hello")   # False
print("ell" in "hello")   # True (substring check!)</code></pre><h3>String Methods</h3><pre><code>text = "Hello World"
print(text.upper())    # HELLO WORLD
print(text.lower())    # hello world
print(text.count("l")) # 3</code></pre>`,
          challenge: {
            description: `Count and print the number of vowels (a, e, i, o, u) in the string "programming".`,
            starterCode: `word = "programming"
vowel_count = 0

# Count vowels

# Print the count
`,
            expectedOutput: `3`,
            hints: [
              `for char in word: if char in "aeiou": vowel_count += 1`,
              `The vowels in "programming" are: o, a, i`,
              `print(vowel_count) at the end`
            ]
          },
          quiz: [
            {
              question: `Can you iterate over a string with a for loop?`,
              options: ['No, only lists', 'Yes, character by character', 'Only with enumerate', 'Only numbers'],
              correct: 1
            },
            {
              question: `What does "x" in "text" return?`,
              options: ['True', 'False', '1', 'Error'],
              correct: 0
            },
            {
              question: `What does "Hello".upper() return?`,
              options: ['Hello', 'HELLO', 'hello', 'hELLO'],
              correct: 1
            },
            {
              question: `What is len("Python")?`,
              options: ['5', '6', '7', '4'],
              correct: 1
            },
            {
              question: `What does "hello".count("l") return?`,
              options: ['1', '2', '3', '0'],
              correct: 1
            }
          ]
        },
        {
          id: `iterating_strings_part_2`,
          title: `Iterating Over Strings Part 2`,
          type: `challenge`,
          theory: `<h2>More String Operations</h2><p>Let's explore more ways to process strings character by character.</p><h3>Building New Strings</h3><pre><code>text = "hello"
result = ""
for char in text:
    result += char.upper()
print(result)  # HELLO</code></pre><h3>Filtering Characters</h3><pre><code>message = "h3ll0 w0rld"
letters_only = ""
for char in message:
    if char.isalpha():  # Check if it's a letter
        letters_only += char
print(letters_only)  # hllwrld</code></pre><h3>Useful String Methods</h3><ul><li><code>.isalpha()</code> — True if all characters are letters</li><li><code>.isdigit()</code> — True if all characters are digits</li><li><code>.isalnum()</code> — True if letters or digits</li><li><code>.isspace()</code> — True if whitespace</li></ul><h3>Reversing a String</h3><pre><code>word = "Python"
reversed_word = ""
for char in word:
    reversed_word = char + reversed_word
print(reversed_word)  # nohtyP</code></pre><p>Or simply: <code>word[::-1]</code></p><h3>Checking Palindromes</h3><pre><code>word = "racecar"
is_palindrome = word == word[::-1]
print(is_palindrome)  # True</code></pre>`,
          challenge: {
            description: `Given text = "Hello World", build a new string with only the uppercase letters and print it.`,
            starterCode: `text = "Hello World"
result = ""

# Keep only uppercase letters

# Print result
`,
            expectedOutput: `HW`,
            hints: [
              `for char in text: if char.isupper(): result += char`,
              `isupper() returns True for uppercase letters`,
              `H and W are the uppercase letters`
            ]
          },
          quiz: [
            {
              question: `What does "hello".isalpha() return?`,
              options: ['True', 'False', '"hello"', 'Error'],
              correct: 0
            },
            {
              question: `What does "123".isdigit() return?`,
              options: ['False', 'True', '123', 'Error'],
              correct: 1
            },
            {
              question: `What is "hello"[::-1]?`,
              options: ['hello', 'olleh', 'h', 'Error'],
              correct: 1
            },
            {
              question: `How do you build a string character by character?`,
              options: ['String concatenation with +=', 'append()', 'insert()', 'add()'],
              correct: 0
            },
            {
              question: `Is a string immutable in Python?`,
              options: ['No', 'Yes', 'Only single characters', 'Depends'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: `lists_advanced`,
      title: `Lists Advanced`,
      lessons: [
        {
          id: `list_slicing_part_1`,
          title: `List Slicing Part 1`,
          type: `challenge`,
          theory: `<h2>List Slicing</h2><p><strong>Slicing</strong> extracts a portion (sub-list) from a list. It creates a new list without modifying the original.</p><h3>Syntax</h3><pre><code>list[start:stop]</code></pre><ul><li><code>start</code>: Index where the slice begins (inclusive)</li><li><code>stop</code>: Index where the slice ends (exclusive)</li></ul><h3>Examples</h3><pre><code>nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(nums[2:5])   # [2, 3, 4]
print(nums[0:3])   # [0, 1, 2]
print(nums[5:8])   # [5, 6, 7]</code></pre><h3>Omitting Start or Stop</h3><pre><code>nums = [0, 1, 2, 3, 4, 5]

print(nums[:3])   # [0, 1, 2] (from beginning to index 3)
print(nums[3:])   # [3, 4, 5] (from index 3 to end)
print(nums[:])    # [0, 1, 2, 3, 4, 5] (full copy)</code></pre><h3>Negative Indices in Slicing</h3><pre><code>nums = [0, 1, 2, 3, 4, 5]
print(nums[-3:])   # [3, 4, 5] (last 3 elements)
print(nums[:-2])   # [0, 1, 2, 3] (all except last 2)</code></pre><h3>Key Points</h3><ul><li>Slicing NEVER causes an IndexError (out-of-range is handled gracefully)</li><li>The original list is NOT modified</li><li>An empty slice returns an empty list: <code>nums[5:5]</code> → <code>[]</code></li></ul>`,
          challenge: {
            description: `Given letters = ["a", "b", "c", "d", "e", "f"], print the first 3 elements, then print the last 2 elements using slicing.`,
            starterCode: `letters = ["a", "b", "c", "d", "e", "f"]

# Print first 3

# Print last 2
`,
            expectedOutput: `['a', 'b', 'c']
['e', 'f']`,
            hints: ['letters[:3] gives first 3 elements', 'letters[-2:] gives last 2 elements', 'Remember: stop index is exclusive']
          },
          quiz: [
            {
              question: `What does [1, 2, 3, 4, 5][1:4] return?`,
              options: ['[1, 2, 3, 4]', '[2, 3, 4]', '[2, 3, 4, 5]', '[1, 2, 3]'],
              correct: 1
            },
            {
              question: `What does nums[:3] mean?`,
              options: ['From index 3 to end', 'From beginning to index 3 (exclusive)', 'First 3 skipped', 'Error'],
              correct: 1
            },
            {
              question: `Does slicing modify the original list?`,
              options: ['Yes', 'No, it creates a new list', 'Sometimes', 'Only with negative indices'],
              correct: 1
            },
            {
              question: `What does nums[-2:] return?`,
              options: ['First 2 elements', 'Last 2 elements', 'All except last 2', 'Error'],
              correct: 1
            },
            {
              question: `What does [1,2,3][10:20] return?`,
              options: ['Error', '[]', 'None', '[3]'],
              correct: 1
            }
          ]
        },
        {
          id: `list_slicing_part_2`,
          title: `List Slicing Part 2`,
          type: `challenge`,
          theory: `<h2>Slicing with Step</h2><p>You can add a third value — the <strong>step</strong> — to skip elements while slicing.</p><h3>Syntax</h3><pre><code>list[start:stop:step]</code></pre><h3>Examples</h3><pre><code>nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(nums[::2])    # [0, 2, 4, 6, 8] (every 2nd element)
print(nums[1::2])   # [1, 3, 5, 7, 9] (odd indices)
print(nums[0:6:3])  # [0, 3] (every 3rd from 0 to 5)</code></pre><h3>Reversing with Slicing</h3><pre><code>nums = [1, 2, 3, 4, 5]
print(nums[::-1])  # [5, 4, 3, 2, 1]</code></pre><p><code>::-1</code> means "go backwards through the entire list."</p><h3>More Negative Step Examples</h3><pre><code>nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(nums[8:2:-1])   # [8, 7, 6, 5, 4, 3]
print(nums[::-2])     # [9, 7, 5, 3, 1] (reverse, skip one)</code></pre><h3>Slice Assignment</h3><p>You can also replace a slice of a list:</p><pre><code>nums = [1, 2, 3, 4, 5]
nums[1:4] = [20, 30, 40]
print(nums)  # [1, 20, 30, 40, 5]</code></pre>`,
          challenge: {
            description: `Given nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], print every other element starting from the first (1, 3, 5, 7, 9), then print the list reversed.`,
            starterCode: `nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Every other element from first

# Reversed list
`,
            expectedOutput: `[1, 3, 5, 7, 9]
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`,
            hints: ['nums[::2] gets every other element', 'nums[::-1] reverses the list', 'The step value of 2 skips every second element']
          },
          quiz: [
            {
              question: `What does [1,2,3,4,5][::2] return?`,
              options: ['[1, 3, 5]', '[2, 4]', '[1, 2]', '[3, 5]'],
              correct: 0
            },
            {
              question: `What does [::-1] do?`,
              options: ['Removes last element', 'Reverses the sequence', 'Gets first element', 'Error'],
              correct: 1
            },
            {
              question: `What does [0,1,2,3,4,5][1::2] return?`,
              options: ['[0, 2, 4]', '[1, 3, 5]', '[1, 2, 3]', '[0, 1, 2]'],
              correct: 1
            },
            {
              question: `Can you assign to a slice?`,
              options: ['No', 'Yes, it replaces that portion', 'Only with positive indices', 'Only for strings'],
              correct: 1
            },
            {
              question: `What does [1,2,3,4,5][4:1:-1] return?`,
              options: ['[5, 4, 3]', '[4, 3, 2]', '[5, 4, 3, 2]', 'Error'],
              correct: 0
            }
          ]
        },
        {
          id: `sequence_operators`,
          title: `Sequence Operators`,
          type: `challenge`,
          theory: `<h2>Sequence Operators</h2><p>Python provides operators that work on sequences (lists, tuples, strings).</p><h3>Concatenation (+)</h3><pre><code>a = [1, 2, 3]
b = [4, 5, 6]
c = a + b
print(c)  # [1, 2, 3, 4, 5, 6]</code></pre><p>Creates a NEW list; doesn't modify a or b.</p><h3>Repetition (*)</h3><pre><code>a = [0] * 5
print(a)  # [0, 0, 0, 0, 0]

b = [1, 2] * 3
print(b)  # [1, 2, 1, 2, 1, 2]</code></pre><h3>Works with Strings Too</h3><pre><code>print("ha" * 3)     # hahaha
print("=" * 20)     # ====================</code></pre><h3>Comparison Operators</h3><p>Lists can be compared element by element:</p><pre><code>print([1, 2, 3] == [1, 2, 3])  # True
print([1, 2, 3] == [1, 2, 4])  # False
print([1, 2] < [1, 3])         # True (compares element by element)</code></pre><h3>Length, Min, Max, Sum</h3><pre><code>nums = [5, 2, 8, 1, 9]
print(len(nums))  # 5
print(min(nums))  # 1
print(max(nums))  # 9
print(sum(nums))  # 25</code></pre>`,
          challenge: {
            description: `Create list a = [1, 2, 3] and list b = [4, 5, 6]. Print a + b (concatenation), then print a * 2 (repetition).`,
            starterCode: `a = [1, 2, 3]
b = [4, 5, 6]

# Print concatenation

# Print repetition of a
`,
            expectedOutput: `[1, 2, 3, 4, 5, 6]
[1, 2, 3, 1, 2, 3]`,
            hints: ['print(a + b)', 'print(a * 2)', '+ joins lists, * repeats them']
          },
          quiz: [
            {
              question: `What does [1, 2] + [3, 4] produce?`,
              options: ['[1, 2, 3, 4]', '[[1,2],[3,4]]', '[4, 6]', 'Error'],
              correct: 0
            },
            {
              question: `What does [0] * 3 produce?`,
              options: ['[0, 0, 0]', '[000]', '[3]', 'Error'],
              correct: 0
            },
            {
              question: `Does + modify the original lists?`,
              options: ['Yes', 'No, creates a new list', 'Only the first one', 'Depends'],
              correct: 1
            },
            {
              question: `What does "ab" * 2 produce?`,
              options: ['ab2', 'abab', 'aabb', 'Error'],
              correct: 1
            },
            {
              question: `Does list * 0 produce?`,
              options: ['The same list', '[]', 'Error', 'None'],
              correct: 1
            }
          ]
        },
        {
          id: `membership`,
          title: `Membership`,
          type: `challenge`,
          theory: `<h2>Membership Operators: in and not in</h2><p>The <code>in</code> operator checks if a value exists in a sequence. <code>not in</code> checks if it doesn't exist.</p><h3>With Lists</h3><pre><code>fruits = ["apple", "banana", "cherry"]

print("banana" in fruits)     # True
print("grape" in fruits)      # False
print("grape" not in fruits)  # True</code></pre><h3>With Strings</h3><pre><code>message = "Hello World"

print("Hello" in message)    # True
print("hello" in message)    # False (case sensitive!)
print("xyz" not in message)  # True</code></pre><h3>In Conditions</h3><pre><code>allowed = ["admin", "editor", "viewer"]
user_role = "editor"

if user_role in allowed:
    print("Access granted")
else:
    print("Access denied")</code></pre><p><strong>Output:</strong> <code>Access granted</code></p><h3>In Loops (Filtering)</h3><pre><code>numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = [2, 4, 6, 8, 10]

for n in numbers:
    if n not in evens:
        print(n, end=" ")  # 1 3 5 7 9</code></pre><h3>Performance Note</h3><p>For lists, <code>in</code> checks each element one by one. For large data, other structures (like sets) are faster — but lists work great for small collections.</p>`,
          challenge: {
            description: `Given colors = ["red", "green", "blue", "yellow"], check and print whether "green" is in the list, and whether "purple" is in the list.`,
            starterCode: `colors = ["red", "green", "blue", "yellow"]

# Check if "green" is in colors

# Check if "purple" is in colors
`,
            expectedOutput: `True
False`,
            hints: ['print("green" in colors)', 'print("purple" in colors)', 'The in operator returns True or False']
          },
          quiz: [
            {
              question: `What does "x" in [1, 2, "x", 4] return?`,
              options: ['False', 'True', 'Error', '"x"'],
              correct: 1
            },
            {
              question: `Is the "in" operator case-sensitive for strings?`,
              options: ['No', 'Yes', 'Only for single characters', 'Depends on the OS'],
              correct: 1
            },
            {
              question: `What does "not in" return when the item IS found?`,
              options: ['True', 'False', 'None', 'Error'],
              correct: 1
            },
            {
              question: `What does 5 in [1, 2, 3] return?`,
              options: ['True', 'False', '5', 'Error'],
              correct: 1
            },
            {
              question: `What is the time complexity of "in" for lists?`,
              options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: `daily_expense_tracker`,
      title: `Daily Expense Tracker`,
      lessons: [
        {
          id: `expense_project_overview`,
          title: `Project Overview`,
          type: `project`,
          theory: `<h2>Project: Daily Expense Tracker</h2><p>In this project, you'll build an interactive expense tracker that lets users add expenses, view them, calculate totals, and clear all data. This combines everything you've learned!</p><h3>Features</h3><ol><li>Add an expense (amount + description)</li><li>View all expenses</li><li>Show total and average</li><li>Clear all expenses</li><li>Exit the program</li></ol><h3>Data Structure</h3><p>We'll store expenses as a list of lists:</p><pre><code>expenses = []
# Each expense: [amount, description]
# Example: [[12.50, "Lunch"], [3.00, "Coffee"], [45.00, "Groceries"]]</code></pre><h3>Menu-Driven Program</h3><pre><code>print("=== Expense Tracker ===")
print("1. Add expense")
print("2. View expenses")
print("3. Total & average")
print("4. Clear all")
print("5. Exit")</code></pre><p>The program will loop, showing this menu and acting on the user's choice until they choose to exit.</p>`,
          challenge: {
            description: `Print the expense tracker menu with 5 options as shown above. Include the title with === separators.`,
            starterCode: `# Print the menu
`,
            expectedOutput: `=== Expense Tracker ===
1. Add expense
2. View expenses
3. Total & average
4. Clear all
5. Exit`,
            hints: ['print("=== Expense Tracker ===")', 'print("1. Add expense")', 'Five print statements for the menu items']
          },
          quiz: [
            {
              question: `What data structure will store our expenses?`,
              options: ['A string', 'A list of lists', 'A single number', 'A tuple'],
              correct: 1
            },
            {
              question: `Why use a list of lists?`,
              options: [
                `Each expense has multiple pieces of data (amount + description)`,
                `Python requires it`,
                `Lists are faster`,
                `For sorting`
              ],
              correct: 0
            },
            {
              question: `What is a menu-driven program?`,
              options: [
                `A program that shows options and acts on user choice`,
                `A program about restaurants`,
                `A program without loops`,
                `A program with one function`
              ],
              correct: 0
            },
            {
              question: `What is a menu-driven program pattern?`,
              options: ['Only has functions', 'Loops showing options until user exits', 'Has no loops', 'Only works in terminal'],
              correct: 1
            }
          ]
        },
        {
          id: `expense_exit`,
          title: `Exit The Program`,
          type: `project`,
          theory: `<h2>Step 2: The Main Loop and Exit</h2><p>Let's create the main loop that shows the menu and handles the exit option.</p><h3>Pattern: Menu Loop</h3><pre><code>while True:
    # Show menu
    print("\\n=== Menu ===")
    print("1. Option A")
    print("2. Exit")
    
    choice = input("Choice: ")
    
    if choice == "5":
        print("Goodbye!")
        break</code></pre><h3>Why while True with break?</h3><p>This pattern is ideal for menus:</p><ul><li>The loop runs indefinitely</li><li>The user decides when to stop</li><li><code>break</code> cleanly exits when they choose "Exit"</li></ul><h3>For Our Project</h3><p>Since we're building step by step without actual input(), we'll simulate the flow. In this step, let's just demonstrate the exit functionality.</p><pre><code>expenses = []
choice = "5"  # Simulated input

if choice == "5":
    print("Goodbye!")</code></pre>`,
          challenge: {
            description: `Create an empty expenses list. Set choice = "5" (simulating exit). Print "Goodbye!" if choice is "5".`,
            starterCode: `expenses = []
choice = "5"

# Check if user wants to exit
`,
            expectedOutput: `Goodbye!`,
            hints: ['if choice == "5": print("Goodbye!")', 'The choice is "5" which matches exit', 'Simple if statement']
          },
          quiz: [
            {
              question: `Why use while True for a menu loop?`,
              options: ['It runs exactly once', 'It runs until break is called', 'It is faster', 'Python requires it'],
              correct: 1
            },
            {
              question: `What statement exits a while True loop?`,
              options: ['exit', 'stop', 'break', 'return'],
              correct: 2
            },
            {
              question: `What type is choice from input()?`,
              options: ['int', 'str', 'bool', 'list'],
              correct: 1
            },
            {
              question: `What does break do in a while True loop?`,
              options: ['Pauses it', 'Exits it permanently', 'Restarts it', 'Nothing'],
              correct: 1
            }
          ]
        },
        {
          id: `expense_add`,
          title: `Add Expense`,
          type: `project`,
          theory: `<h2>Step 3: Adding Expenses</h2><p>Let's implement the "Add expense" feature. Each expense has an amount and a description.</p><h3>Implementation</h3><pre><code>expenses = []

# Simulating adding an expense
amount = 12.50
description = "Lunch"

expenses.append([amount, description])
print(f"Added: \${amount:.2f} - {description}")</code></pre><p><strong>Output:</strong> <code>Added: $12.50 - Lunch</code></p><h3>Adding Multiple Expenses</h3><pre><code>expenses = []

expenses.append([12.50, "Lunch"])
expenses.append([3.00, "Coffee"])
expenses.append([45.00, "Groceries"])

print(f"Total expenses: {len(expenses)}")</code></pre><p><strong>Output:</strong> <code>Total expenses: 3</code></p><h3>The Data Structure</h3><p>After adding 3 expenses, the list looks like:</p><pre><code>[[12.50, "Lunch"], [3.00, "Coffee"], [45.00, "Groceries"]]</code></pre><p>Each inner list is one expense: <code>[amount, description]</code>.</p>`,
          challenge: {
            description: `Create an empty expenses list. Add three expenses: [25.00, "Dinner"], [5.50, "Coffee"], [12.00, "Transport"]. Print the number of expenses.`,
            starterCode: `expenses = []

# Add three expenses

# Print number of expenses
`,
            expectedOutput: `3`,
            hints: ['expenses.append([25.00, "Dinner"])', 'Add all three with append()', 'print(len(expenses))']
          },
          quiz: [
            {
              question: `How do we store one expense?`,
              options: ['As a string', 'As a list [amount, description]', 'As two variables', 'As a tuple only'],
              correct: 1
            },
            {
              question: `What does expenses.append([10, "Food"]) do?`,
              options: ['Adds a number to the list', 'Adds a sub-list with amount and description', 'Replaces the list', 'Error'],
              correct: 1
            },
            {
              question: `After 3 appends, what is len(expenses)?`,
              options: ['2', '3', '6', '1'],
              correct: 1
            },
            {
              question: `Why use a list inside a list for expenses?`,
              options: ['Each expense has multiple fields', 'Python requires it', 'For speed', 'For sorting'],
              correct: 0
            }
          ]
        },
        {
          id: `expense_view_all`,
          title: `View All Expenses`,
          type: `project`,
          theory: `<h2>Step 4: Viewing All Expenses</h2><p>Let's display all expenses in a formatted way.</p><h3>Iterating Over Nested Lists</h3><pre><code>expenses = [[12.50, "Lunch"], [3.00, "Coffee"], [45.00, "Groceries"]]

print("--- Your Expenses ---")
for i, expense in enumerate(expenses, start=1):
    amount = expense[0]
    desc = expense[1]
    print(f"{i}. {desc}: \${amount:.2f}")</code></pre><p><strong>Output:</strong></p><pre><code>--- Your Expenses ---
1. Lunch: $12.50
2. Coffee: $3.00
3. Groceries: $45.00</code></pre><h3>Handling Empty List</h3><pre><code>if len(expenses) == 0:
    print("No expenses recorded yet.")
else:
    for i, expense in enumerate(expenses, start=1):
        print(f"{i}. {expense[1]}: \${expense[0]:.2f}")</code></pre><h3>Unpacking in Loop</h3><p>You can unpack the inner list directly:</p><pre><code>for i, [amount, desc] in enumerate(expenses, start=1):
    print(f"{i}. {desc}: \${amount:.2f}")</code></pre>`,
          challenge: {
            description: `Given expenses = [[25.00, "Dinner"], [5.50, "Coffee"], [12.00, "Transport"]], print each expense numbered with description and amount formatted to 2 decimals.`,
            starterCode: `expenses = [[25.00, "Dinner"], [5.50, "Coffee"], [12.00, "Transport"]]

# Print each expense formatted
`,
            expectedOutput: `1. Dinner: $25.00
2. Coffee: $5.50
3. Transport: $12.00`,
            hints: [
              `for i, expense in enumerate(expenses, start=1):`,
              `print(f"{i}. {expense[1]}: \${expense[0]:.2f}")`,
              `expense[0] is amount, expense[1] is description`
            ]
          },
          quiz: [
            {
              question: `How do you access the description in [12.50, "Lunch"]?`,
              options: ['expense[0]', 'expense[1]', 'expense.desc', 'expense[-2]'],
              correct: 1
            },
            {
              question: `Why check if the list is empty before displaying?`,
              options: ['Python requires it', 'To show a helpful message instead of nothing', 'It prevents errors', 'For performance'],
              correct: 1
            },
            {
              question: `What does :.2f do in an f-string?`,
              options: ['Rounds to 2 digits', 'Shows 2 decimal places', 'Multiplies by 2', 'Adds 2 zeros'],
              correct: 1
            },
            {
              question: `What does enumerate(list, start=1) do differently?`,
              options: ['Skips first element', 'Starts index counting at 1 instead of 0', 'Reverses the list', 'Nothing different'],
              correct: 1
            }
          ]
        },
        {
          id: `expense_total_average`,
          title: `Total And Average`,
          type: `project`,
          theory: `<h2>Step 5: Total and Average</h2><p>Let's calculate and display the total and average expense amount.</p><h3>Calculating Total</h3><pre><code>expenses = [[12.50, "Lunch"], [3.00, "Coffee"], [45.00, "Groceries"]]

total = 0
for expense in expenses:
    total += expense[0]  # expense[0] is the amount

print(f"Total: \${total:.2f}")</code></pre><p><strong>Output:</strong> <code>Total: $60.50</code></p><h3>Calculating Average</h3><pre><code>average = total / len(expenses)
print(f"Average: \${average:.2f}")</code></pre><p><strong>Output:</strong> <code>Average: $20.17</code></p><h3>Complete Function</h3><pre><code>def show_summary(expenses):
    if len(expenses) == 0:
        print("No expenses to summarize.")
        return
    
    total = sum(expense[0] for expense in expenses)
    average = total / len(expenses)
    
    print(f"Total: \${total:.2f}")
    print(f"Average: \${average:.2f}")
    print(f"Expenses: {len(expenses)}")</code></pre>`,
          challenge: {
            description: `Given expenses = [[25.00, "Dinner"], [5.50, "Coffee"], [12.00, "Transport"]], calculate and print the total and average (both formatted to 2 decimals).`,
            starterCode: `expenses = [[25.00, "Dinner"], [5.50, "Coffee"], [12.00, "Transport"]]

total = 0
for expense in expenses:
    total += expense[0]

average = total / len(expenses)

# Print total and average
`,
            expectedOutput: `Total: $42.50
Average: $14.17`,
            hints: ['print(f"Total: ${total:.2f}")', 'print(f"Average: ${average:.2f}")', '42.50 / 3 = 14.166... rounds to 14.17']
          },
          quiz: [
            {
              question: `How do you get just the amounts from expenses?`,
              options: ['expenses[0]', 'Loop and access expense[0] for each', 'expenses.amounts', 'sum(expenses)'],
              correct: 1
            },
            {
              question: `What is the formula for average?`,
              options: ['total * count', 'total / count', 'total + count', 'total - count'],
              correct: 1
            },
            {
              question: `Why check len(expenses) == 0 before calculating average?`,
              options: ['For formatting', 'Division by zero would crash', 'Python requires it', 'To save time'],
              correct: 1
            },
            {
              question: `What built-in function can sum a list?`,
              options: ['total()', 'sum()', 'add()', 'accumulate()'],
              correct: 1
            }
          ]
        },
        {
          id: `expense_clear_all`,
          title: `Clear All`,
          type: `project`,
          theory: `<h2>Step 6: Clearing All Expenses</h2><p>Let's implement the "Clear all" feature that removes all expenses.</p><h3>Using .clear()</h3><pre><code>expenses = [[12.50, "Lunch"], [3.00, "Coffee"]]
print(f"Before: {len(expenses)} expenses")

expenses.clear()
print(f"After: {len(expenses)} expenses")</code></pre><p><strong>Output:</strong></p><pre><code>Before: 2 expenses
After: 0 expenses</code></pre><h3>Adding Confirmation</h3><p>In a real program, you'd ask for confirmation before deleting everything:</p><pre><code>confirm = input("Clear all expenses? (y/n): ")
if confirm == "y":
    expenses.clear()
    print("All expenses cleared!")
else:
    print("Cancelled.")</code></pre><h3>Alternative: Reassignment</h3><pre><code>expenses = []  # Creates a new empty list</code></pre><p>Both <code>.clear()</code> and reassignment to <code>[]</code> work. <code>.clear()</code> empties the existing list; reassignment creates a new one.</p>`,
          challenge: {
            description: `Given expenses = [[25.00, "Dinner"], [5.50, "Coffee"]], print the count, clear the list, then print the count again and "All cleared!".`,
            starterCode: `expenses = [[25.00, "Dinner"], [5.50, "Coffee"]]

# Print count before
print(len(expenses))

# Clear the list

# Print count after and confirmation
`,
            expectedOutput: `2
0
All cleared!`,
            hints: ['expenses.clear()', 'print(len(expenses)) after clearing shows 0', 'print("All cleared!")']
          },
          quiz: [
            {
              question: `What does .clear() do to a list?`,
              options: ['Deletes the variable', 'Removes all elements, making it empty', 'Fills with zeros', 'Sorts it'],
              correct: 1
            },
            {
              question: `After expenses.clear(), what is expenses?`,
              options: ['None', '[]', 'Deleted', '0'],
              correct: 1
            },
            {
              question: `Why ask for confirmation before clearing?`,
              options: ['Python requires it', 'Prevent accidental data loss', 'It runs faster', 'For documentation'],
              correct: 1
            },
            {
              question: `Is .clear() the same as del list?`,
              options: ['Yes', 'No, .clear() empties it, del removes the variable', 'No difference', 'Only in Python 3'],
              correct: 1
            }
          ]
        },
        {
          id: `expense_handling_errors`,
          title: `Handling Errors`,
          type: `project`,
          theory: `<h2>Step 7: Handling Errors</h2><p>Real programs need to handle invalid input gracefully. Let's add basic error handling.</p><h3>The try/except Pattern</h3><pre><code>try:
    amount = float(input("Amount: "))
except ValueError:
    print("Invalid amount! Please enter a number.")</code></pre><p>If the user types "abc" instead of a number, <code>float()</code> would crash. <code>try/except</code> catches the error and shows a friendly message instead.</p><h3>Validating Menu Choices</h3><pre><code>choice = "7"  # Invalid choice

if choice not in ["1", "2", "3", "4", "5"]:
    print("Invalid choice! Please pick 1-5.")
else:
    print(f"You chose {choice}")</code></pre><p><strong>Output:</strong> <code>Invalid choice! Please pick 1-5.</code></p><h3>Validating Amounts</h3><pre><code>def validate_amount(amount_str):
    try:
        amount = float(amount_str)
        if amount <= 0:
            print("Amount must be positive!")
            return None
        return amount
    except ValueError:
        print("Invalid number!")
        return None</code></pre><h3>Complete Error Handling Example</h3><pre><code>amount_str = "abc"
try:
    amount = float(amount_str)
    print(f"Valid: \${amount:.2f}")
except ValueError:
    print("Error: not a valid number")</code></pre><p><strong>Output:</strong> <code>Error: not a valid number</code></p>`,
          challenge: {
            description: `Use try/except to attempt converting "abc" to a float. If it fails, print "Error: invalid number". Then try converting "25.50" and print the value formatted to 2 decimals.`,
            starterCode: `# Try converting "abc"
try:
    value = float("abc")
    print(f"\${value:.2f}")
except ValueError:
    print("Error: invalid number")

# Try converting "25.50"
`,
            expectedOutput: `Error: invalid number
$25.50`,
            hints: [
              `The first try will fail and trigger except`,
              `The second try will succeed`,
              `try: value = float("25.50"); print(f"\${value:.2f}")`
            ]
          },
          quiz: [
            {
              question: `What does try/except do?`,
              options: [
                `Tries two different approaches`,
                `Catches errors and handles them gracefully`,
                `Tries to run code faster`,
                `Loops until success`
              ],
              correct: 1
            },
            {
              question: `What error does float("abc") raise?`,
              options: ['TypeError', 'ValueError', 'SyntaxError', 'NameError'],
              correct: 1
            },
            {
              question: `Why is error handling important?`,
              options: ['Python requires it', 'Prevents the program from crashing on bad input', 'It makes code faster', 'For documentation'],
              correct: 1
            },
            {
              question: `What goes in the except block?`,
              options: ['The main code', 'Code that runs if an error occurs', 'The import statements', 'Nothing'],
              correct: 1
            },
            {
              question: `What is the purpose of try/except?`,
              options: ['To try alternative code', 'To catch and handle runtime errors gracefully', 'To optimize code', 'To test code'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: `final_challenges`,
      title: `Final Challenges`,
      lessons: [
        {
          id: `flat_asterisk_pyramid`,
          title: `Flat Asterisk Pyramid`,
          type: `mastery`,
          theory: `<h2>Challenge: Flat Asterisk Pyramid</h2><p>Pattern printing is a classic programming exercise that tests your understanding of nested loops.</p><h3>The Pattern</h3><p>Print a pyramid of asterisks with n rows:</p><pre><code>*
**
***
****
*****</code></pre><h3>Analysis</h3><ul><li>Row 1: 1 asterisk</li><li>Row 2: 2 asterisks</li><li>Row 3: 3 asterisks</li><li>Row n: n asterisks</li></ul><h3>Solution Approach</h3><pre><code>n = 5
for i in range(1, n + 1):
    print("*" * i)</code></pre><p>The <code>*</code> operator with strings repeats them: <code>"*" * 3</code> gives <code>"***"</code>.</p><h3>Alternative with Nested Loop</h3><pre><code>n = 5
for i in range(1, n + 1):
    for j in range(i):
        print("*", end="")
    print()  # New line</code></pre><h3>Inverted Pyramid</h3><pre><code>n = 5
for i in range(n, 0, -1):
    print("*" * i)</code></pre><p><strong>Output:</strong></p><pre><code>*****
****
***
**
*</code></pre>`,
          challenge: {
            description: `Print a left-aligned asterisk pyramid with 5 rows.`,
            starterCode: `# Print pyramid with 5 rows
n = 5
`,
            expectedOutput: `*
**
***
****
*****`,
            hints: ['for i in range(1, n + 1): print("*" * i)', 'String repetition: "*" * 3 gives "***"', 'Loop from 1 to n inclusive']
          },
          mastery: {
            description: `Print a centered pyramid with 5 rows (use spaces for centering). The widest row has 9 characters.
Row 1: 4 spaces + 1 star
Row 2: 3 spaces + 3 stars
Row 3: 2 spaces + 5 stars
Row 4: 1 space + 7 stars
Row 5: 0 spaces + 9 stars`,
            starterCode: `n = 5
# Print centered pyramid
`,
            expectedOutput: `    *
   ***
  *****
 *******
*********`,
            hints: [
              `Spaces per row: n - i, Stars per row: 2*i - 1`,
              `for i in range(1, n+1): print(" " * (n-i) + "*" * (2*i-1))`,
              `Row 1: 4 spaces + 1 star, Row 5: 0 spaces + 9 stars`
            ]
          },
          quiz: [
            {
              question: `What does "*" * 4 produce?`,
              options: ['*4', '****', '* * * *', 'Error'],
              correct: 1
            },
            {
              question: `In a 5-row pyramid, how many stars in row 3?`,
              options: ['3', '5', '7', '2'],
              correct: 0
            },
            {
              question: `What loop prints rows 1 to 5?`,
              options: ['for i in range(5)', 'for i in range(1, 6)', 'for i in range(1, 5)', 'for i in range(6)'],
              correct: 1
            },
            {
              question: `How do you print without a newline at the end?`,
              options: ['print(x, end="")', 'print(x, no_newline)', 'write(x)', 'print(x, sep="")'],
              correct: 0
            },
            {
              question: `What is "star" * 0?`,
              options: ['star', '" "', '""', 'Error'],
              correct: 2
            }
          ]
        },
        {
          id: `pattern_finder`,
          title: `Pattern Finder`,
          type: `mastery`,
          theory: `<h2>Challenge: Pattern Finder</h2><p>Let's build a function that finds patterns in lists — specifically, finding the longest streak of consecutive identical elements.</p><h3>Problem</h3><p>Given a list like <code>[1, 1, 2, 2, 2, 3, 3]</code>, find the longest run of the same value.</p><h3>Approach</h3><ol><li>Track the current element and its streak length</li><li>Compare each new element to the current one</li><li>If same, increment streak; if different, reset</li><li>Keep track of the maximum streak seen</li></ol><h3>Solution</h3><pre><code>def longest_streak(lst):
    if len(lst) == 0:
        return 0
    
    max_streak = 1
    current_streak = 1
    
    for i in range(1, len(lst)):
        if lst[i] == lst[i-1]:
            current_streak += 1
            if current_streak > max_streak:
                max_streak = current_streak
        else:
            current_streak = 1
    
    return max_streak

print(longest_streak([1, 1, 2, 2, 2, 3]))  # 3</code></pre><h3>Trace Through</h3><pre><code># [1, 1, 2, 2, 2, 3]
# i=1: 1==1 → streak=2, max=2
# i=2: 2!=1 → streak=1
# i=3: 2==2 → streak=2
# i=4: 2==2 → streak=3, max=3
# i=5: 3!=2 → streak=1
# Result: 3</code></pre>`,
          challenge: {
            description: `Write a function longest_streak that takes a list and returns the length of the longest consecutive sequence of the same element. Test with [1, 2, 2, 3, 3, 3, 2, 2].`,
            starterCode: `# Define longest_streak function

# Test it
print(longest_streak([1, 2, 2, 3, 3, 3, 2, 2]))
`,
            expectedOutput: `3`,
            hints: ['Start with max_streak = 1 and current_streak = 1', 'Compare lst[i] with lst[i-1]', 'The longest streak is three 3s']
          },
          mastery: {
            description: `Write a function find_pattern that takes a list and a pattern (smaller list), and returns how many times the pattern appears in the list (overlapping allowed). Test: find_pattern([1,2,1,2,1,2,1], [1,2,1]) should return 3.`,
            starterCode: `# Define find_pattern(lst, pattern)

# Test it
print(find_pattern([1, 2, 1, 2, 1, 2, 1], [1, 2, 1]))
`,
            expectedOutput: `3`,
            hints: [
              `Use a sliding window approach`,
              `for i in range(len(lst) - len(pattern) + 1)`,
              `Check if lst[i:i+len(pattern)] == pattern`
            ]
          },
          quiz: [
            {
              question: `What is a "streak" in a list?`,
              options: ['Any sublist', 'Consecutive identical elements', 'The longest list', 'Sorted elements'],
              correct: 1
            },
            {
              question: `Why start current_streak at 1 (not 0)?`,
              options: ['Because the first element is already a streak of 1', 'Python requires it', 'It makes the math easier', 'No reason'],
              correct: 0
            },
            {
              question: `What does lst[i] == lst[i-1] check?`,
              options: ['If adjacent elements are equal', 'If the list is sorted', 'If the element exists', 'If i is valid'],
              correct: 0
            },
            {
              question: `What is a sliding window?`,
              options: ['A GUI element', 'A technique of checking sequential subsets of a list', 'A type of loop', 'A sorting method'],
              correct: 1
            }
          ]
        },
        {
          id: `what_to_buy`,
          title: `What To Buy`,
          type: `mastery`,
          theory: `<h2>Challenge: What To Buy</h2><p>Build a shopping assistant! Given a budget, a list of items with prices, and a shopping list, determine which items you can afford.</p><h3>Problem</h3><p>You have a budget and a store inventory (items + prices). Determine which items from your shopping list you can buy without exceeding the budget.</p><h3>Approach</h3><pre><code>def what_to_buy(budget, store, shopping_list):
    cart = []
    remaining = budget
    
    for item in shopping_list:
        for store_item in store:
            if store_item[0] == item and store_item[1] <= remaining:
                cart.append(item)
                remaining -= store_item[1]
                break
    
    return cart</code></pre><h3>Example</h3><pre><code>budget = 50
store = [["apple", 2], ["bread", 3], ["milk", 4], ["cheese", 8]]
shopping_list = ["milk", "bread", "cheese", "apple"]

result = what_to_buy(budget, store, shopping_list)
print(result)  # ['milk', 'bread', 'cheese', 'apple']
# Total: 4+3+8+2 = 17, within budget of 50</code></pre><h3>When Budget is Tight</h3><pre><code>budget = 10
result = what_to_buy(budget, store, shopping_list)
print(result)  # ['milk', 'bread', 'apple']
# milk=4, bread=3, cheese would be 8 (4+3+8=15 > 10), apple=2
# Total: 4+3+2 = 9</code></pre>`,
          challenge: {
            description: `Given budget = 15, store = [["pen", 2], ["notebook", 5], ["backpack", 12], ["eraser", 1]], and shopping_list = ["notebook", "pen", "eraser", "backpack"]: determine which items can be bought in order without exceeding budget. Print the resulting cart.`,
            starterCode: `budget = 15
store = [["pen", 2], ["notebook", 5], ["backpack", 12], ["eraser", 1]]
shopping_list = ["notebook", "pen", "eraser", "backpack"]

# Determine what can be bought
cart = []
remaining = budget

for item in shopping_list:
    for store_item in store:
        if store_item[0] == item and store_item[1] <= remaining:
            cart.append(item)
            remaining -= store_item[1]
            break

print(cart)
`,
            expectedOutput: `['notebook', 'pen', 'eraser']`,
            hints: [
              `Process items in shopping_list order`,
              `notebook=5, pen=2, eraser=1 = 8 total, backpack=12 would exceed 15`,
              `Check if store_item[1] <= remaining budget`
            ]
          },
          mastery: {
            description: `Enhance the solution: write a function "shopping_report" that takes budget, store, and shopping_list. It should print each item attempted with "BOUGHT" or "SKIPPED (over budget)", then print the total spent and remaining budget.`,
            starterCode: `budget = 20
store = [["apple", 3], ["bread", 4], ["milk", 5], ["cheese", 10]]
shopping_list = ["bread", "cheese", "milk", "apple"]

def shopping_report(budget, store, shopping_list):
    remaining = budget
    total = 0
    # Your code here

shopping_report(budget, store, shopping_list)
`,
            expectedOutput: `bread - BOUGHT - $4
cheese - BOUGHT - $10
milk - BOUGHT - $5
apple - SKIPPED (over budget)
Total spent: $19
Remaining: $1`,
            hints: [
              `For each item, find its price in store`,
              `If price <= remaining: buy it, else skip`,
              `Track total_spent and remaining budget`
            ]
          },
          quiz: [
            {
              question: `Why process items in shopping_list order?`,
              options: ['Python requires it', 'To prioritize what the user wants most', 'For alphabetical order', 'It doesn\'t matter'],
              correct: 1
            },
            {
              question: `What happens when an item exceeds remaining budget?`,
              options: ['Error', 'It is skipped', 'Budget goes negative', 'The program stops'],
              correct: 1
            },
            {
              question: `What data structure represents the store inventory?`,
              options: ['Dictionary', 'List of [name, price] pairs', 'Tuple', 'Single list'],
              correct: 1
            },
            {
              question: `What does "break" do after finding an item in the store?`,
              options: ['Exits the program', 'Stops looking for that item in the store (already found)', 'Removes the item', 'Nothing'],
              correct: 1
            }
          ]
        }
      ]
    }
  ]
};
