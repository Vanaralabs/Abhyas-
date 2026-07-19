export const pythonLogicFlow = {
  id: 'logic-flow',
  title: 'Logic & Flow',
  description: 'Develop problem-solving skills and create dynamic, interactive programs',
  totalLessons: 78,
  totalChallenges: 77,
  totalQuizQuestions: 331,
  projects: 3,
  chapters: [
    {
      id: 'variables-exploration',
      title: 'Variables Exploration',
      lessons: [
        {
          id: 'constants',
          title: 'Constants',
          type: 'challenge',
          theory: `<h2>Constants in Python</h2>
<p>In programming, a <strong>constant</strong> is a value that should never change during the execution of a program. Think of it like the speed of light in physics — it is a fixed value that you reference but never modify.</p>

<p>Unlike languages like Java or C++ that have a <code>const</code> keyword, Python does not have true constants built into the language. Instead, Python uses a <strong>naming convention</strong>: variables written in ALL_UPPERCASE with underscores separating words are treated as constants by convention.</p>

<h3>Why Use Constants?</h3>
<ul>
<li><strong>Readability</strong>: Anyone reading your code knows this value should not change</li>
<li><strong>Maintainability</strong>: Change the value in one place, and it updates everywhere</li>
<li><strong>Avoiding magic numbers</strong>: Named constants explain what a number means</li>
</ul>

<h3>Examples:</h3>
<pre><code># Good: Using constants
MAX_SPEED = 120
PI = 3.14159
GRAVITY = 9.8
APP_NAME = "MyApp"
MAX_RETRIES = 3

# Using constants in code
circumference = 2 * PI * 5
print(circumference)  # 31.4159

# Bad: Magic numbers without explanation
result = 2 * 3.14159 * 5  # What does 3.14159 mean?
</code></pre>

<h3>Convention Rules:</h3>
<pre><code># Constants are typically defined at the top of a file
TAX_RATE = 0.08
MIN_AGE = 18
DATABASE_URL = "localhost:5432"

# They can be used throughout your code
price = 100
total = price + (price * TAX_RATE)
print(total)  # 108.0
</code></pre>

<p><strong>Important:</strong> Python will not stop you from changing a "constant" — it is purely a convention. But good programmers respect the ALL_CAPS naming and never reassign these values.</p>`,
          challenge: {
            description: `Create three constants: MAX_STUDENTS with value 30, PASSING_GRADE with value 60, and SCHOOL_NAME with value "Python Academy". Then print each constant on a separate line.`,
            starterCode: `# Define your constants here\n\n\n# Print each constant`,
            expectedOutput: `30\n60\nPython Academy`,
            hints: [
              `Use ALL_CAPS with underscores for constant names`,
              `MAX_STUDENTS = 30`,
              `Use print() for each constant separately`,
            ]
          },
          quiz: [
            {
              question: `How are constants named in Python by convention?`,
              options: [
                `camelCase`,
                `ALL_UPPERCASE_WITH_UNDERSCORES`,
                `With a $ prefix`,
                `With the const keyword`,
              ],
              correct: 1
            },
            {
              question: `Does Python enforce that constants cannot be changed?`,
              options: [
                `Yes, Python raises an error`,
                `No, it is only a naming convention`,
                `Only in Python 3.10+`,
                `Only inside functions`,
              ],
              correct: 1
            },
            {
              question: `Which is a valid constant declaration?`,
              options: [
                `const MAX = 10`,
                `MAX_VALUE = 100`,
                `final MAX = 10`,
                `CONST max_value = 100`,
              ],
              correct: 1
            },
            {
              question: `Why should you use constants instead of magic numbers?`,
              options: [
                `They run faster`,
                `They improve readability and maintainability`,
                `Python requires them`,
                `They use less memory`,
              ],
              correct: 1
            },
            {
              question: `Where should constants be defined in a file?`,
              options: [`Inside functions`, `At the top of the file`, `At the bottom`, `In a separate file always`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'multiple-variable-assignments',
          title: 'Multiple Variable Assignments',
          type: 'challenge',
          theory: `<h2>Multiple Variable Assignments</h2>
<p>Python provides elegant ways to assign values to multiple variables simultaneously. This makes your code more concise and readable.</p>

<h3>Method 1: Multiple Values to Multiple Variables</h3>
<pre><code># Instead of three lines:
name, age, city = "Alice", 25, "NYC"
print(name)  # Alice
print(age)   # 25
print(city)  # NYC
</code></pre>

<h3>Method 2: Same Value to Multiple Variables</h3>
<pre><code>x = y = z = 0
print(x)  # 0
print(y)  # 0
print(z)  # 0

first = second = third = "pending"
print(first)   # pending
</code></pre>

<h3>Method 3: Unpacking from a List or Tuple</h3>
<pre><code>coordinates = [10, 20, 30]
x, y, z = coordinates
print(x)  # 10
print(y)  # 20
print(z)  # 30

point = (5, 8)
a, b = point
print(a)  # 5
print(b)  # 8
</code></pre>

<h3>Important Rule:</h3>
<p>The number of variables on the left must match the number of values on the right:</p>
<pre><code># This causes an error:
# a, b = 1, 2, 3  # ValueError: too many values to unpack
# a, b, c = 1, 2  # ValueError: not enough values to unpack
</code></pre>

<p>Multiple assignment is especially useful for function returns and loop unpacking.</p>`,
          challenge: {
            description: `Use multiple assignment to set first_name to "John", last_name to "Doe", and age to 30 in one line. Then set score1, score2, and score3 all to 0 in one line. Print all variables, each on a new line.`,
            starterCode: `# Assign first_name, last_name, age in one line\n\n# Assign score1, score2, score3 all to 0\n\n# Print all variables`,
            expectedOutput: `John\nDoe\n30\n0\n0\n0`,
            hints: [
              `first_name, last_name, age = "John", "Doe", 30`,
              `score1 = score2 = score3 = 0`,
              `Print each variable with a separate print() call`,
            ]
          },
          quiz: [
            {
              question: `What does x, y, z = 1, 2, 3 do?`,
              options: [
                `Assigns 1 to x, 2 to y, 3 to z`,
                `Creates a tuple`,
                `Causes an error`,
                `Assigns 3 to all variables`,
              ],
              correct: 0
            },
            {
              question: `What does a = b = c = 10 do?`,
              options: [
                `Only c gets 10`,
                `Causes an error`,
                `All three variables get value 10`,
                `Creates a linked list`,
              ],
              correct: 2
            },
            {
              question: `What happens with a, b = [1, 2, 3]?`,
              options: [
                `a=1, b=[2,3]`,
                `a=[1,2], b=3`,
                `ValueError: too many values to unpack`,
                `a=1, b=2, ignores 3`,
              ],
              correct: 2
            },
            {
              question: `Which correctly unpacks coordinates = (4, 7)?`,
              options: [
                `x, y = coordinates`,
                `x = coordinates[0, 1]`,
                `[x, y] == coordinates`,
                `x and y = coordinates`,
              ],
              correct: 0
            },
            {
              question: `names, ages = ["Al","Bo"], [20,25] works because?`,
              options: [`Python is dynamic`, `Both sides have equal number of items`, `Lists auto-unpack`, `It does not work`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'swapping-variables',
          title: 'Swapping Variables',
          type: 'challenge',
          theory: `<h2>Swapping Variables</h2>
<p>Swapping means exchanging the values of two variables. In most languages, you need a temporary variable. Python makes this much simpler with tuple unpacking!</p>

<h3>The Traditional Way (Using a Temp Variable):</h3>
<pre><code>a = 5
b = 10
temp = a    # temp = 5
a = b       # a = 10
b = temp    # b = 5
print(a)  # 10
print(b)  # 5
</code></pre>

<h3>The Pythonic Way (Tuple Unpacking):</h3>
<pre><code>a = 5
b = 10
a, b = b, a
print(a)  # 10
print(b)  # 5
</code></pre>

<p>This works because Python first evaluates the right side (b, a) creating a tuple (10, 5), then unpacks it into the left side variables.</p>

<h3>Swapping Multiple Variables:</h3>
<pre><code>x, y, z = 1, 2, 3
x, y, z = y, z, x
print(x)  # 2
print(y)  # 3
print(z)  # 1
</code></pre>

<h3>Practical Example - Sorting two values:</h3>
<pre><code>a = 8
b = 3
if a > b:
    a, b = b, a
print(a)  # 3
print(b)  # 8
</code></pre>

<p><strong>Why is Python swap special?</strong> In C or Java, you always need a temporary variable. Python tuple unpacking makes swapping elegant and readable.</p>`,
          challenge: {
            description: `Create variables x = 100 and y = 200. Swap them using Python one-line swap. Then create a, b, c = 1, 2, 3 and rotate them so a gets b value, b gets c value, and c gets a value. Print x, y, then a, b, c (each on new line).`,
            starterCode: `x = 100\ny = 200\n\n# Swap x and y\n\n# Print x and y\n\na, b, c = 1, 2, 3\n\n# Rotate: a=b, b=c, c=a\n\n# Print a, b, c`,
            expectedOutput: `200\n100\n2\n3\n1`,
            hints: [
              `Use x, y = y, x to swap`,
              `Use a, b, c = b, c, a to rotate`,
              `Print each variable on its own line`,
            ]
          },
          quiz: [
            {
              question: `What is the Pythonic way to swap a and b?`,
              options: [
                `temp = a; a = b; b = temp`,
                `a, b = b, a`,
                `swap(a, b)`,
                `a <=> b`,
              ],
              correct: 1
            },
            {
              question: `After x, y = 3, 7 then x, y = y, x, what are x and y?`,
              options: [
                `x=3, y=7`,
                `x=7, y=3`,
                `x=7, y=7`,
                `x=3, y=3`,
              ],
              correct: 1
            },
            {
              question: `Why does Python swap work without a temp variable?`,
              options: [
                `It uses pointers`,
                `The right side is evaluated as a tuple first`,
                `It modifies memory directly`,
                `It uses a hidden temp variable`,
              ],
              correct: 1
            },
            {
              question: `After a,b,c = 1,2,3 then a,b,c = c,a,b what is b?`,
              options: [
                `1`,
                `2`,
                `3`,
                `Error`,
              ],
              correct: 0
            },
            {
              question: `Can you swap more than 2 variables at once?`,
              options: [`No, only 2`, `Yes, e.g. a,b,c = c,a,b`, `Only with temp variable`, `Only numbers`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'placeholder-variables',
          title: 'Placeholder Variables',
          type: 'challenge',
          theory: `<h2>Placeholder Variables</h2>
<p>Sometimes when unpacking values, you do not need all of them. Python uses the underscore <code>_</code> as a convention for placeholder variables — values you want to ignore.</p>

<h3>The Underscore Convention:</h3>
<pre><code>name, _ = "Alice", 25
print(name)  # Alice

first, _, last = "John", "Michael", "Doe"
print(first)  # John
print(last)   # Doe
</code></pre>

<h3>Ignoring Multiple Values with *_:</h3>
<pre><code>first, *_, last = [1, 2, 3, 4, 5]
print(first)  # 1
print(last)   # 5

head, *_ = [10, 20, 30, 40]
print(head)  # 10
</code></pre>

<h3>In Loops:</h3>
<pre><code>for _ in range(3):
    print("Hello")
# Prints Hello three times

pairs = [(1, "a"), (2, "b"), (3, "c")]
for number, _ in pairs:
    print(number)
# Prints 1, 2, 3
</code></pre>

<h3>Practical Example:</h3>
<pre><code>def get_user_info():
    return "Alice", 30, "alice@email.com", "NYC"

name, _, email, _ = get_user_info()
print(name)   # Alice
print(email)  # alice@email.com
</code></pre>

<p><strong>Note:</strong> The underscore _ is a valid variable — it does hold the value. But by convention, programmers understand it means "I do not care about this value."</p>`,
          challenge: {
            description: `Given data = ("Python", 3.11, "Guido", 1991), use unpacking with placeholders to extract only the language name (first) and creator (third). Print them. Then use a loop with _ to print "Learning!" exactly 4 times.`,
            starterCode: `data = ("Python", 3.11, "Guido", 1991)\n\n# Unpack only language and creator\n\n# Print language and creator\n\n# Print "Learning!" 4 times using _ in loop`,
            expectedOutput: `Python\nGuido\nLearning!\nLearning!\nLearning!\nLearning!`,
            hints: [
              `language, _, creator, _ = data`,
              `Use for _ in range(4): to loop without needing the counter`,
              `Print each value with print()`,
            ]
          },
          quiz: [
            {
              question: `What does _ represent in Python unpacking?`,
              options: [
                `An error`,
                `A value you want to discard/ignore`,
                `A null value`,
                `A private variable`,
              ],
              correct: 1
            },
            {
              question: `What does first, *_, last = [1,2,3,4,5] assign to last?`,
              options: [
                `[3,4,5]`,
                `5`,
                `[2,3,4,5]`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `In for _ in range(5), what does _ mean?`,
              options: [
                `The loop runs 0 times`,
                `The counter value is not needed`,
                `It creates 5 underscores`,
                `It skips iterations`,
              ],
              correct: 1
            },
            {
              question: `Is _ a valid variable that holds a value?`,
              options: [
                `No, it discards the value completely`,
                `Yes, but convention says ignore it`,
                `Only in Python 3`,
                `Only inside functions`,
              ],
              correct: 1
            },
            {
              question: `head, *rest = [1,2,3,4] - what is rest?`,
              options: [`[2,3,4]`, `(2,3,4)`, `2`, `[1]`],
              correct: 0
            },
          ]
        }
,
        {
          id: 'round-numbers',
          title: 'Round Numbers',
          type: 'challenge',
          theory: `<h2>Rounding Numbers</h2>
<p>When working with decimal numbers (floats), you often need to round them to a specific number of decimal places. Python built-in <code>round()</code> function handles this.</p>

<h3>Basic Usage:</h3>
<pre><code>print(round(3.14159))      # 3
print(round(3.14159, 2))   # 3.14
print(round(3.14159, 3))   # 3.142
print(round(3.14159, 4))   # 3.1416
</code></pre>

<h3>Rounding to Integer:</h3>
<pre><code>print(round(4.7))    # 5
print(round(4.3))    # 4
print(round(4.5))    # 4  (Bankers rounding!)
print(round(5.5))    # 6  (Bankers rounding!)
</code></pre>

<h3>Bankers Rounding (Round Half to Even):</h3>
<p>Python uses "round half to even" — when exactly halfway, it rounds to nearest even:</p>
<pre><code>print(round(0.5))   # 0
print(round(1.5))   # 2
print(round(2.5))   # 2
print(round(3.5))   # 4
</code></pre>

<h3>Negative Decimal Places:</h3>
<pre><code>print(round(1234, -1))   # 1230
print(round(1234, -2))   # 1200
print(round(1234, -3))   # 1000
</code></pre>

<h3>Practical Examples:</h3>
<pre><code>price = 19.99
tax_rate = 0.08
total = price * (1 + tax_rate)
print(round(total, 2))  # 21.59

scores = [85, 92, 78, 95, 88]
average = sum(scores) / len(scores)
print(round(average, 1))  # 87.6
</code></pre>`,
          challenge: {
            description: `Calculate the average of these scores: 88, 92, 75, 95, 83. Round the average to 1 decimal place and print it. Then calculate 100 / 3, round to 2 decimal places, and print it. Finally, round 2750 to the nearest hundred and print it.`,
            starterCode: `scores = [88, 92, 75, 95, 83]\n\n# Calculate average, round to 1 decimal\n\n# 100 / 3 rounded to 2 decimals\n\n# Round 2750 to nearest hundred`,
            expectedOutput: `86.6\n33.33\n2800`,
            hints: [
              `average = sum(scores) / len(scores)`,
              `Use round(average, 1) for 1 decimal place`,
              `Use round(2750, -2) to round to nearest hundred`,
            ]
          },
          quiz: [
            {
              question: `What does round(3.14159, 2) return?`,
              options: [
                `3.14`,
                `3.15`,
                `3.1`,
                `3`,
              ],
              correct: 0
            },
            {
              question: `What does round(2.5) return in Python?`,
              options: [
                `3`,
                `2`,
                `2.5`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `What does round(1850, -2) return?`,
              options: [
                `1800`,
                `1900`,
                `1850`,
                `2000`,
              ],
              correct: 0
            },
            {
              question: `What rounding strategy does Python use for .5 values?`,
              options: [
                `Always round up`,
                `Always round down`,
                `Round half to even (Bankers rounding)`,
                `Random rounding`,
              ],
              correct: 2
            },
          ]
        }
,
        {
          id: 'list-casting',
          title: 'List Casting',
          type: 'mastery',
          theory: `<h2>List Casting</h2>
<p>List casting means converting other data types into lists using the <code>list()</code> function. Think of it as pouring different containers into a list-shaped mold.</p>

<h3>String to List:</h3>
<pre><code>letters = list("hello")
print(letters)  # ['h', 'e', 'l', 'l', 'o']

word = list("Python")
print(word)  # ['P', 'y', 't', 'h', 'o', 'n']
</code></pre>

<h3>Range to List:</h3>
<pre><code>numbers = list(range(5))
print(numbers)  # [0, 1, 2, 3, 4]

evens = list(range(0, 10, 2))
print(evens)  # [0, 2, 4, 6, 8]

countdown = list(range(5, 0, -1))
print(countdown)  # [5, 4, 3, 2, 1]
</code></pre>

<h3>Tuple to List:</h3>
<pre><code>colors_tuple = ("red", "green", "blue")
colors_list = list(colors_tuple)
print(colors_list)  # ['red', 'green', 'blue']
colors_list.append("yellow")
print(colors_list)  # ['red', 'green', 'blue', 'yellow']
</code></pre>

<h3>Split String to List:</h3>
<pre><code>sentence = "Python is awesome"
words = sentence.split()
print(words)  # ['Python', 'is', 'awesome']

csv_data = "apple,banana,cherry"
fruits = csv_data.split(",")
print(fruits)  # ['apple', 'banana', 'cherry']
</code></pre>

<h3>Dictionary Keys/Values to List:</h3>
<pre><code>person = {"name": "Alice", "age": 25}
keys = list(person.keys())
values = list(person.values())
print(keys)    # ['name', 'age']
print(values)  # ['Alice', 25]
</code></pre>

<p><strong>Key insight:</strong> list() works on any iterable — anything you can loop over.</p>`,
          challenge: {
            description: `Convert the string "ABCDE" to a list and print it. Convert range(1, 6) to a list and print it. Split "one-two-three" by "-" and print the resulting list.`,
            starterCode: `# Convert "ABCDE" to a list\n\n# Convert range(1, 6) to a list\n\n# Split "one-two-three" by "-"`,
            expectedOutput: `['A', 'B', 'C', 'D', 'E']\n[1, 2, 3, 4, 5]\n['one', 'two', 'three']`,
            hints: [
              `Use list("ABCDE")`,
              `Use list(range(1, 6))`,
              `Use "one-two-three".split("-")`,
            ]
          },
          quiz: [
            {
              question: `What does list("cat") return?`,
              options: [
                `["cat"]`,
                `['c', 'a', 't']`,
                `['cat']`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `What does list(range(3)) return?`,
              options: [
                `[1, 2, 3]`,
                `[0, 1, 2]`,
                `[0, 1, 2, 3]`,
                `range(0, 3)`,
              ],
              correct: 1
            },
            {
              question: `What does "a,b,c".split(",") return?`,
              options: [
                `['a,b,c']`,
                `['a', 'b', 'c']`,
                `['a,', 'b,', 'c']`,
                `('a', 'b', 'c')`,
              ],
              correct: 1
            },
            {
              question: `Can list() convert a dictionary to a list?`,
              options: [
                `No, it causes an error`,
                `Yes, it creates a list of keys`,
                `Yes, it creates a list of values`,
                `Yes, it creates a list of tuples`,
              ],
              correct: 1
            },
            {
              question: `What does list({}) return?`,
              options: [`[{}]`, `[]`, `Error`, `[None]`],
              correct: 1
            },
          ]
          ,mastery: {
            description: `Create a variable sentence = "the quick brown fox". Split it into words, convert the first word to a list of characters, and print both results. Then convert the tuple (10, 20, 30, 40, 50) to a list, reverse it, and print it.`,
            starterCode: `sentence = "the quick brown fox"\n# Split into words and print\n\n# Convert first word to character list and print\n\n# Convert tuple to list, reverse, and print`,
            expectedOutput: `['the', 'quick', 'brown', 'fox']\n['t', 'h', 'e']\n[50, 40, 30, 20, 10]`,
            hints: [
              `words = sentence.split()`,
              `chars = list(words[0])`,
              `Use .reverse() method or [::-1] slicing`,
            ]
          }
        }
      ]
    },
    {
      id: 'dictionaries-part-1',
      title: 'Dictionaries Part 1',
      lessons: [
        {
          id: 'what-is-a-dictionary',
          title: 'What is a Dictionary?',
          type: 'challenge',
          theory: `<h2>What is a Dictionary?</h2>
<p>A <strong>dictionary</strong> in Python stores data as <strong>key-value pairs</strong>. Think of it like a real dictionary: you look up a word (the key) to find its definition (the value).</p>

<h3>Why Dictionaries?</h3>
<p>Lists use numeric indices (0, 1, 2...) to access items. Dictionaries let you use meaningful labels:</p>
<pre><code># With a list - what does index 0 mean?
student_list = ["Alice", 22, "Computer Science"]

# With a dictionary - crystal clear!
student_dict = {"name": "Alice", "age": 22, "major": "Computer Science"}
</code></pre>

<h3>Key Characteristics:</h3>
<ul>
<li><strong>Mutable</strong> — you can add, remove, and change items</li>
<li><strong>Keys must be unique</strong> — no duplicate keys</li>
<li><strong>Keys must be immutable</strong> — strings, numbers, tuples work; lists do not</li>
<li><strong>Values can be anything</strong> — any data type</li>
<li><strong>Ordered</strong> (Python 3.7+) — maintains insertion order</li>
</ul>

<h3>Syntax:</h3>
<pre><code>my_dict = {"key1": "value1", "key2": "value2"}

empty = {}

person = {
    "name": "Bob",
    "age": 30,
    "hobbies": ["reading", "coding"],
    "employed": True
}
print(type(person))  # &lt;class 'dict'&gt;
print(len(person))   # 4
</code></pre>

<p>Dictionaries are one of Python most powerful data structures. They are used for JSON data, configurations, counting, caching, and much more.</p>`,
          challenge: {
            description: `Create a dictionary called book with keys "title" (value: "Python Basics"), "author" (value: "John Smith"), "pages" (value: 350), and "published" (value: True). Print the type of book and its length.`,
            starterCode: `# Create the book dictionary\n\n\n# Print type and length`,
            expectedOutput: `<class 'dict'>\n4`,
            hints: [
              `book = {"title": "Python Basics", "author": "John Smith", "pages": 350, "published": True}`,
              `Use type(book) and len(book)`,
              `print(type(book)) then print(len(book))`,
            ]
          },
          quiz: [
            {
              question: `What symbol is used to create a dictionary?`,
              options: [
                `Square brackets []`,
                `Curly braces {}`,
                `Parentheses ()`,
                `Angle brackets <>`,
              ],
              correct: 1
            },
            {
              question: `Which of these can NOT be a dictionary key?`,
              options: [
                `A string`,
                `A number`,
                `A list`,
                `A tuple`,
              ],
              correct: 2
            },
            {
              question: `What happens if you use a duplicate key in a dictionary?`,
              options: [
                `Error is raised`,
                `Both values are kept`,
                `The last value overwrites the first`,
                `The first value is kept`,
              ],
              correct: 2
            },
            {
              question: `What does len({"a": 1, "b": 2, "c": 3}) return?`,
              options: [
                `6`,
                `3`,
                `2`,
                `9`,
              ],
              correct: 1
            },
          ]
        }
,
        {
          id: 'creating-a-dictionary',
          title: 'Creating a Dictionary',
          type: 'challenge',
          theory: `<h2>Creating a Dictionary</h2>
<p>There are several ways to create dictionaries in Python. Knowing all methods helps you choose the most readable approach.</p>

<h3>Method 1: Literal Syntax (Most Common)</h3>
<pre><code>fruit_colors = {"apple": "red", "banana": "yellow", "grape": "purple"}
print(fruit_colors)
</code></pre>

<h3>Method 2: dict() Constructor</h3>
<pre><code>person = dict(name="Alice", age=25, city="NYC")
print(person)  # {'name': 'Alice', 'age': 25, 'city': 'NYC'}

pairs = [("x", 10), ("y", 20), ("z", 30)]
coords = dict(pairs)
print(coords)  # {'x': 10, 'y': 20, 'z': 30}
</code></pre>

<h3>Method 3: dict.fromkeys()</h3>
<pre><code>keys = ["a", "b", "c"]
defaults = dict.fromkeys(keys, 0)
print(defaults)  # {'a': 0, 'b': 0, 'c': 0}

empty_vals = dict.fromkeys(["x", "y"])
print(empty_vals)  # {'x': None, 'y': None}
</code></pre>

<h3>Method 4: Building Incrementally</h3>
<pre><code>inventory = {}
inventory["apples"] = 50
inventory["bananas"] = 30
inventory["oranges"] = 45
print(inventory)
</code></pre>

<h3>Method 5: From zip()</h3>
<pre><code>names = ["Alice", "Bob", "Charlie"]
scores = [95, 87, 92]
grade_book = dict(zip(names, scores))
print(grade_book)  # {'Alice': 95, 'Bob': 87, 'Charlie': 92}
</code></pre>`,
          challenge: {
            description: `Create a dictionary called scores using dict(zip()) from: names = ["Alice", "Bob", "Charlie"] and points = [85, 92, 78]. Print it. Then create a dictionary called template using dict.fromkeys() with keys ["name", "age", "email"] and default value "unknown". Print template.`,
            starterCode: `names = ["Alice", "Bob", "Charlie"]\npoints = [85, 92, 78]\n\n# Create scores using zip\n\n# Create template using fromkeys`,
            expectedOutput: `{'Alice': 85, 'Bob': 92, 'Charlie': 78}\n{'name': 'unknown', 'age': 'unknown', 'email': 'unknown'}`,
            hints: [
              `scores = dict(zip(names, points))`,
              `template = dict.fromkeys(["name", "age", "email"], "unknown")`,
              `Print both dictionaries`,
            ]
          },
          quiz: [
            {
              question: `What does dict(name="Alice", age=25) create?`,
              options: [
                `{"name": "Alice", "age": 25}`,
                `Error - invalid syntax`,
                `A list of tuples`,
                `{"Alice": "name", 25: "age"}`,
              ],
              correct: 0
            },
            {
              question: `What does dict.fromkeys(["a","b"], 0) return?`,
              options: [
                `{"a": 0, "b": 0}`,
                `[0, 0]`,
                `{"a": "b"}`,
                `Error`,
              ],
              correct: 0
            },
            {
              question: `What does dict(zip(["x","y"], [1,2])) produce?`,
              options: [
                `{"x": 1, "y": 2}`,
                `{1: "x", 2: "y"}`,
                `[("x",1), ("y",2)]`,
                `Error`,
              ],
              correct: 0
            },
            {
              question: `How do you create an empty dictionary?`,
              options: [
                `empty = {}`,
                `empty = dict()`,
                `Both {} and dict() work`,
                `empty = new dict`,
              ],
              correct: 2
            },
            {
              question: `dict([(1,2),(3,4)]) creates?`,
              options: [`{1: 2, 3: 4}`, `[(1,2),(3,4)]`, `{(1,2): (3,4)}`, `Error`],
              correct: 0
            },
          ]
        }
,
        {
          id: 'accessing-values',
          title: 'Accessing Values',
          type: 'challenge',
          theory: `<h2>Accessing Dictionary Values</h2>
<p>Python provides two main approaches to retrieve values, each with different behavior when a key does not exist.</p>

<h3>Method 1: Square Bracket Notation</h3>
<pre><code>student = {"name": "Alice", "grade": "A", "age": 20}
print(student["name"])   # Alice
print(student["grade"])  # A
# print(student["email"])  # KeyError: 'email'
</code></pre>

<h3>Method 2: get() Method (Safer)</h3>
<pre><code>student = {"name": "Alice", "grade": "A", "age": 20}
print(student.get("name"))     # Alice
print(student.get("email"))    # None (no error!)
print(student.get("email", "N/A"))  # N/A (custom default)
</code></pre>

<h3>Accessing All Keys, Values, and Items:</h3>
<pre><code>car = {"brand": "Toyota", "model": "Camry", "year": 2022}
print(list(car.keys()))    # ['brand', 'model', 'year']
print(list(car.values()))  # ['Toyota', 'Camry', 2022]
print(list(car.items()))   # [('brand', 'Toyota'), ...]
</code></pre>

<h3>When to Use Which:</h3>
<ul>
<li><code>dict["key"]</code> — when you are SURE the key exists</li>
<li><code>dict.get("key")</code> — when the key might not exist</li>
</ul>

<pre><code>settings = {"volume": 80, "brightness": 70}
volume = settings.get("volume", 50)
contrast = settings.get("contrast", 50)
print(volume)    # 80 (exists)
print(contrast)  # 50 (default)
</code></pre>`,
          challenge: {
            description: `Create: product = {"name": "Laptop", "price": 999, "brand": "TechCo"}. Print the name using bracket notation. Print the "color" using .get() with default "Silver". Print all keys as a list.`,
            starterCode: `product = {"name": "Laptop", "price": 999, "brand": "TechCo"}\n\n# Print name using brackets\n\n# Print color with default "Silver"\n\n# Print all keys as a list`,
            expectedOutput: `Laptop\nSilver\n['name', 'price', 'brand']`,
            hints: [
              `print(product["name"])`,
              `print(product.get("color", "Silver"))`,
              `print(list(product.keys()))`,
            ]
          },
          quiz: [
            {
              question: `What happens with dict["nonexistent_key"]?`,
              options: [
                `Returns None`,
                `Returns 0`,
                `Raises KeyError`,
                `Returns empty string`,
              ],
              correct: 2
            },
            {
              question: `What does {"a": 1}.get("b", 5) return?`,
              options: [
                `None`,
                `1`,
                `5`,
                `KeyError`,
              ],
              correct: 2
            },
            {
              question: `What does {"a": 1}.get("a", 5) return?`,
              options: [
                `5`,
                `1`,
                `None`,
                `(1, 5)`,
              ],
              correct: 1
            },
            {
              question: `What does list({"x": 1, "y": 2}.values()) return?`,
              options: [
                `["x", "y"]`,
                `[1, 2]`,
                `[("x",1), ("y",2)]`,
                `{"x": 1, "y": 2}`,
              ],
              correct: 1
            },
            {
              question: `Can you chain .get() calls for nested dicts?`,
              options: [`No`, `Yes: d.get("a",{}).get("b",default)`, `Only 2 levels`, `Only with []`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'modifying-dictionaries',
          title: 'Modifying Dictionaries',
          type: 'challenge',
          theory: `<h2>Modifying Dictionaries</h2>
<p>Dictionaries are mutable — you can add, change, and remove entries after creation.</p>

<h3>Adding and Updating Values:</h3>
<pre><code>profile = {"name": "Alice", "age": 25}
profile["email"] = "alice@example.com"  # Add new
profile["age"] = 26  # Update existing
print(profile)
# {'name': 'Alice', 'age': 26, 'email': 'alice@example.com'}
</code></pre>

<h3>The update() Method:</h3>
<pre><code>profile = {"name": "Alice", "age": 25}
profile.update({"age": 26, "city": "NYC", "job": "Developer"})
print(profile)
# {'name': 'Alice', 'age': 26, 'city': 'NYC', 'job': 'Developer'}
</code></pre>

<h3>Removing Entries:</h3>
<pre><code>data = {"a": 1, "b": 2, "c": 3, "d": 4}

del data["a"]          # Remove by key
print(data)            # {'b': 2, 'c': 3, 'd': 4}

value = data.pop("b") # Remove and return value
print(value)           # 2

missing = data.pop("z", "not found")  # Safe pop
print(missing)         # not found

last = data.popitem()  # Remove last inserted
print(last)            # ('d', 4)

data.clear()           # Remove everything
print(data)            # {}
</code></pre>

<h3>Practical Example:</h3>
<pre><code>cart = {}
cart["apple"] = 3
cart["banana"] = 2
cart["apple"] = 5     # Update quantity
del cart["banana"]    # Remove item
cart["orange"] = 4    # Add new
print(cart)  # {'apple': 5, 'orange': 4}
</code></pre>`,
          challenge: {
            description: `Start with inventory = {"apples": 50, "bananas": 30, "oranges": 20}. Add "grapes" with value 40. Update "apples" to 45. Remove "bananas" using pop() and print the popped value. Print the final inventory.`,
            starterCode: `inventory = {"apples": 50, "bananas": 30, "oranges": 20}\n\n# Add grapes\n\n# Update apples\n\n# Pop bananas and print value\n\n# Print final inventory`,
            expectedOutput: `30\n{'apples': 45, 'oranges': 20, 'grapes': 40}`,
            hints: [
              `inventory["grapes"] = 40`,
              `inventory["apples"] = 45`,
              `print(inventory.pop("bananas"))`,
            ]
          },
          quiz: [
            {
              question: `How do you add a new key-value pair to a dictionary?`,
              options: [
                `dict.add("key", value)`,
                `dict["key"] = value`,
                `dict.insert("key", value)`,
                `dict.append("key": value)`,
              ],
              correct: 1
            },
            {
              question: `What does dict.pop("key") do?`,
              options: [
                `Just removes the key`,
                `Removes and returns the value`,
                `Returns True/False`,
                `Always raises error`,
              ],
              correct: 1
            },
            {
              question: `What does dict.update({"a": 1, "b": 2}) do?`,
              options: [
                `Replaces entire dictionary`,
                `Adds/updates multiple key-value pairs`,
                `Only adds new keys`,
                `Only updates existing keys`,
              ],
              correct: 1
            },
            {
              question: `What does del dict["key"] do if key does not exist?`,
              options: [
                `Nothing`,
                `Returns None`,
                `Raises KeyError`,
                `Removes closest match`,
              ],
              correct: 2
            },
          ]
        }
,
        {
          id: 'recap-recipe-manager',
          title: 'Recap - Recipe Manager',
          type: 'mastery',
          theory: `<h2>Recap: Recipe Manager</h2>
<p>Let us combine everything about dictionaries to build a mini recipe manager.</p>

<h3>Review of Key Concepts:</h3>
<pre><code>recipe = {
    "name": "Pancakes",
    "servings": 4,
    "ingredients": ["flour", "eggs", "milk", "butter"],
    "time_minutes": 20
}

# Accessing
print(recipe["name"])              # Pancakes
print(recipe.get("difficulty", "Easy"))  # Easy

# Modifying
recipe["servings"] = 6            # Update
recipe["difficulty"] = "Easy"     # Add new
del recipe["time_minutes"]        # Remove

print(list(recipe.keys()))
</code></pre>

<h3>Building a Recipe Collection:</h3>
<pre><code>cookbook = {}
cookbook["pancakes"] = {"servings": 4, "time": 20}
cookbook["pasta"] = {"servings": 2, "time": 30}
cookbook["salad"] = {"servings": 1, "time": 10}

print(cookbook["pasta"]["time"])  # 30
print(len(cookbook))  # 3
</code></pre>

<h3>Useful Patterns:</h3>
<pre><code>if "pancakes" in cookbook:
    print("Found:", cookbook["pancakes"])

print(list(cookbook.keys()))
# ['pancakes', 'pasta', 'salad']
</code></pre>

<p>Storing structured data in dictionaries is the foundation for databases, APIs, and configuration files.</p>`,
          challenge: {
            description: `Create a recipe dictionary with: name "Smoothie", servings 2, ingredients ["banana", "milk", "honey"]. Print the recipe name. Add key "prep_time" with value 5. Update servings to 3. Print the number of ingredients. Print the final dictionary.`,
            starterCode: `# Create recipe\n\n# Print name\n\n# Add prep_time\n\n# Update servings\n\n# Print ingredient count\n\n# Print final dict`,
            expectedOutput: `Smoothie\n3\n{'name': 'Smoothie', 'servings': 3, 'ingredients': ['banana', 'milk', 'honey'], 'prep_time': 5}`,
            hints: [
              `recipe = {"name": "Smoothie", "servings": 2, "ingredients": ["banana", "milk", "honey"]}`,
              `len(recipe["ingredients"]) gives the count`,
              `recipe["prep_time"] = 5`,
            ]
          },
          quiz: [
            {
              question: `How do you count items in a dictionary?`,
              options: [
                `dict.count()`,
                `dict.size()`,
                `len(dict)`,
                `dict.length`,
              ],
              correct: 2
            },
            {
              question: `Can dictionary values be lists?`,
              options: [
                `No, only strings and numbers`,
                `Yes, values can be any type`,
                `Only tuples`,
                `Only if key is a number`,
              ],
              correct: 1
            },
            {
              question: `How do you check if a key exists in a dictionary?`,
              options: [
                `dict.has("key")`,
                `"key" in dict`,
                `dict.exists("key")`,
                `dict.contains("key")`,
              ],
              correct: 1
            },
            {
              question: `What does {} create?`,
              options: [
                `An empty set`,
                `An empty dictionary`,
                `An error`,
                `An empty tuple`,
              ],
              correct: 1
            },
          ]
          ,mastery: {
            description: `Create empty dict recipes. Add three entries: "soup" with {"time": 15, "rating": 4}, "salad" with {"time": 5, "rating": 5}, "toast" with {"time": 3, "rating": 3}. Pop "toast" and print removed value. Print remaining recipe names as a list.`,
            starterCode: `# Create empty recipes and add entries\n\n\n# Pop toast and print\n\n# Print remaining names as list`,
            expectedOutput: `{'time': 3, 'rating': 3}\n['soup', 'salad']`,
            hints: [
              `recipes["soup"] = {"time": 15, "rating": 4}`,
              `removed = recipes.pop("toast")`,
              `print(list(recipes.keys()))`,
            ]
          }
        }
      ]
    },
    {
      id: 'dictionaries-part-2',
      title: 'Dictionaries Part 2',
      lessons: [
        {
          id: 'dictionary-methods',
          title: 'Dictionary Methods',
          type: 'challenge',
          theory: `<h2>Dictionary Methods</h2>
<p>Python dictionaries have many built-in methods beyond basic access and modification.</p>

<h3>setdefault() - Get or Set</h3>
<pre><code>scores = {"Alice": 95, "Bob": 87}

val = scores.setdefault("Alice", 0)
print(val)  # 95 (exists, not changed)

val = scores.setdefault("Charlie", 0)
print(val)     # 0 (new, inserted)
print(scores)  # {'Alice': 95, 'Bob': 87, 'Charlie': 0}
</code></pre>

<h3>copy() - Shallow Copy</h3>
<pre><code>original = {"a": 1, "b": 2, "c": 3}
duplicate = original.copy()
duplicate["d"] = 4
print(original)   # {'a': 1, 'b': 2, 'c': 3}
print(duplicate)  # {'a': 1, 'b': 2, 'c': 3, 'd': 4}
</code></pre>

<h3>Membership Checks:</h3>
<pre><code>menu = {"coffee": 3.50, "tea": 2.50, "juice": 4.00}
print("coffee" in menu)        # True
print(3.50 in menu.values())   # True
</code></pre>

<h3>Merging Dictionaries:</h3>
<pre><code>defaults = {"color": "blue", "size": "medium"}
custom = {"size": "large", "font": "Arial"}

# Using unpacking (works in all Python 3)
merged = {**defaults, **custom}
print(merged)
# {'color': 'blue', 'size': 'large', 'font': 'Arial'}
</code></pre>

<p>The later dictionary wins when keys conflict during merging.</p>`,
          challenge: {
            description: `Create counts = {"apple": 3, "banana": 5}. Use setdefault to get "banana" with default 0 and print result. Use setdefault to get "cherry" with default 0 and print result. Print the full dictionary.`,
            starterCode: `counts = {"apple": 3, "banana": 5}\n\n# setdefault for banana\n\n# setdefault for cherry\n\n# Print full dictionary`,
            expectedOutput: `5\n0\n{'apple': 3, 'banana': 5, 'cherry': 0}`,
            hints: [
              `print(counts.setdefault("banana", 0))`,
              `print(counts.setdefault("cherry", 0))`,
              `print(counts)`,
            ]
          },
          quiz: [
            {
              question: `What does setdefault("key", 10) do if key exists with value 5?`,
              options: [
                `Changes it to 10`,
                `Returns 5 (no change)`,
                `Returns 10`,
                `Raises an error`,
              ],
              correct: 1
            },
            {
              question: `What does dict.copy() create?`,
              options: [
                `A deep copy`,
                `A shallow copy`,
                `A reference to same dict`,
                `An empty dict`,
              ],
              correct: 1
            },
            {
              question: `What does {**d1, **d2} do?`,
              options: [
                `Raises error`,
                `Merges two dicts (d2 overwrites conflicts)`,
                `Creates list of tuples`,
                `Deletes both`,
              ],
              correct: 1
            },
            {
              question: `What does "key" in dict check?`,
              options: [
                `If value exists`,
                `If key exists`,
                `If both exist`,
                `If dict is empty`,
              ],
              correct: 1
            },
            {
              question: `dict.clear() returns what?`,
              options: [`Empty dict`, `The cleared items`, `None (modifies in place)`, `True`],
              correct: 2
            },
          ]
        }
,
        {
          id: 'nested-dictionaries',
          title: 'Nested Dictionaries',
          type: 'challenge',
          theory: `<h2>Nested Dictionaries</h2>
<p>A nested dictionary is a dictionary inside another dictionary — like folders within folders, each level adds more detail.</p>

<h3>Creating Nested Dictionaries:</h3>
<pre><code>school = {
    "student1": {
        "name": "Alice",
        "age": 20,
        "grades": {"math": 95, "science": 88}
    },
    "student2": {
        "name": "Bob",
        "age": 21,
        "grades": {"math": 82, "science": 91}
    }
}
</code></pre>

<h3>Accessing Nested Values:</h3>
<pre><code>print(school["student1"]["name"])            # Alice
print(school["student2"]["grades"]["math"])  # 82

# Using get() for safety
grade = school.get("student1", {}).get("grades", {}).get("math", 0)
print(grade)  # 95
</code></pre>

<h3>Modifying Nested Values:</h3>
<pre><code>school["student1"]["age"] = 21
school["student2"]["grades"]["science"] = 95

school["student3"] = {
    "name": "Charlie",
    "age": 19,
    "grades": {"math": 90, "science": 87}
}
</code></pre>

<h3>Iterating:</h3>
<pre><code>employees = {
    "emp1": {"name": "Alice", "dept": "Engineering"},
    "emp2": {"name": "Bob", "dept": "Marketing"}
}

for emp_id, info in employees.items():
    print(f"{info['name']} - {info['dept']}")
# Alice - Engineering
# Bob - Marketing
</code></pre>`,
          challenge: {
            description: `Create a nested dictionary called company with: "emp1" having name "Alice" and salary 75000, "emp2" having name "Bob" and salary 82000. Print emp1 name. Print emp2 salary. Update emp1 salary to 80000. Print emp1 new salary.`,
            starterCode: `# Create company dictionary\n\n\n# Print emp1 name\n\n# Print emp2 salary\n\n# Update emp1 salary\n\n# Print emp1 new salary`,
            expectedOutput: `Alice\n82000\n80000`,
            hints: [
              `company = {"emp1": {"name": "Alice", "salary": 75000}, "emp2": {"name": "Bob", "salary": 82000}}`,
              `print(company["emp1"]["name"])`,
              `company["emp1"]["salary"] = 80000`,
            ]
          },
          quiz: [
            {
              question: `How do you access a value two levels deep?`,
              options: [
                `dict["key1", "key2"]`,
                `dict["key1"]["key2"]`,
                `dict.get("key1.key2")`,
                `dict["key1.key2"]`,
              ],
              correct: 1
            },
            {
              question: `Can a dictionary value be another dictionary?`,
              options: [
                `No, only primitive types`,
                `Yes, dictionaries can be nested`,
                `Only one level deep`,
                `Only with special syntax`,
              ],
              correct: 1
            },
            {
              question: `What does d.get("a", {}).get("b", 0) return if "a" does not exist?`,
              options: [
                `Raises KeyError`,
                `Returns None`,
                `Returns 0`,
                `Returns {}`,
              ],
              correct: 2
            },
            {
              question: `How do you add a new key to a nested dictionary?`,
              options: [
                `dict["outer"]["new_key"] = value`,
                `dict.add("outer", "new_key", value)`,
                `dict["outer"].append()`,
                `Not possible`,
              ],
              correct: 0
            },
            {
              question: `How deep can dictionaries be nested?`,
              options: [`3 levels max`, `5 levels max`, `No limit (as deep as needed)`, `Depends on Python version`],
              correct: 2
            },
          ]
        }
,
        {
          id: 'checking-for-keys',
          title: 'Checking for Keys',
          type: 'challenge',
          theory: `<h2>Checking for Keys</h2>
<p>Before accessing a dictionary value, it is important to check if the key exists to prevent KeyError exceptions.</p>

<h3>The in Operator:</h3>
<pre><code>user = {"name": "Alice", "age": 25, "email": "alice@mail.com"}
print("name" in user)     # True
print("phone" in user)    # False
print("phone" not in user)  # True
</code></pre>

<h3>Using in with Conditionals:</h3>
<pre><code>config = {"theme": "dark", "language": "en"}

if "theme" in config:
    print(f"Theme: {config['theme']}")
else:
    print("Theme not set")
# Theme: dark
</code></pre>

<h3>Checking Values:</h3>
<pre><code>scores = {"Alice": 95, "Bob": 87, "Charlie": 92}
print(95 in scores.values())   # True
print(100 in scores.values())  # False
</code></pre>

<h3>Counting Pattern:</h3>
<pre><code>words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counter = {}
for word in words:
    if word in counter:
        counter[word] += 1
    else:
        counter[word] = 1
print(counter)  # {'apple': 3, 'banana': 2, 'cherry': 1}
</code></pre>

<p>Using <code>in</code> is the standard Pythonic way to check for key existence.</p>`,
          challenge: {
            description: `Given settings = {"volume": 80, "brightness": 60, "wifi": True}, check if "volume" exists and print "Volume: 80". Check if "bluetooth" exists — if not, print "Bluetooth not configured". Then count values that are boolean True and print the count.`,
            starterCode: `settings = {"volume": 80, "brightness": 60, "wifi": True}\n\n# Check for volume\n\n# Check for bluetooth\n\n# Count True values`,
            expectedOutput: `Volume: 80\nBluetooth not configured\n1`,
            hints: [
              `if "volume" in settings: print("Volume:", settings["volume"])`,
              `if "bluetooth" not in settings: print("Bluetooth not configured")`,
              `count = sum(1 for v in settings.values() if v is True)`,
            ]
          },
          quiz: [
            {
              question: `What does "key" in dict check?`,
              options: [
                `If key is in values`,
                `If key is in keys`,
                `If key is in items`,
                `If dict is empty`,
              ],
              correct: 1
            },
            {
              question: `What does "x" not in {"x": 1, "y": 2} return?`,
              options: [
                `True`,
                `False`,
                `None`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `How do you check if a value exists in a dictionary?`,
              options: [
                `value in dict`,
                `value in dict.values()`,
                `dict.has_value(value)`,
                `dict.contains(value)`,
              ],
              correct: 1
            },
            {
              question: `What is the safest way to access a key that might not exist?`,
              options: [
                `Always use dict["key"]`,
                `Use try/except`,
                `Check with in first or use .get()`,
                `Use dict.safe_get()`,
              ],
              correct: 2
            },
            {
              question: `("a", 1) in {"a": 1}.items() returns?`,
              options: [`True`, `False`, `Error`, `None`],
              correct: 0
            },
          ]
        }
,
        {
          id: 'looping-through-dictionaries',
          title: 'Looping Through Dictionaries',
          type: 'challenge',
          theory: `<h2>Looping Through Dictionaries</h2>
<p>Python provides multiple ways to loop through keys, values, or both.</p>

<h3>Looping Through Keys (Default):</h3>
<pre><code>fruits = {"apple": 3, "banana": 5, "cherry": 2}
for fruit in fruits:
    print(fruit)
# apple
# banana
# cherry
</code></pre>

<h3>Looping Through Values:</h3>
<pre><code>for count in fruits.values():
    print(count)
# 3, 5, 2

total = sum(fruits.values())
print(total)  # 10
</code></pre>

<h3>Looping Through Key-Value Pairs:</h3>
<pre><code>for fruit, count in fruits.items():
    print(f"{fruit}: {count}")
# apple: 3
# banana: 5
# cherry: 2
</code></pre>

<h3>Finding Maximum:</h3>
<pre><code>prices = {"laptop": 999, "phone": 699, "tablet": 449}
max_item = ""
max_price = 0
for item, price in prices.items():
    if price > max_price:
        max_price = price
        max_item = item
print(f"Most expensive: {max_item} (${max_price})")
</code></pre>

<h3>Filtering:</h3>
<pre><code>scores = {"Alice": 92, "Bob": 65, "Charlie": 88, "Diana": 45}
passing = {}
for name, score in scores.items():
    if score >= 70:
        passing[name] = score
print(passing)  # {'Alice': 92, 'Charlie': 88}
</code></pre>`,
          challenge: {
            description: `Given grades = {"Math": 92, "Science": 85, "English": 78, "History": 95}, loop through items and print each as "Subject: Grade". Then calculate and print the average rounded to 1 decimal.`,
            starterCode: `grades = {"Math": 92, "Science": 85, "English": 78, "History": 95}\n\n# Print each subject: grade\n\n# Calculate and print average`,
            expectedOutput: `Math: 92\nScience: 85\nEnglish: 78\nHistory: 95\n87.5`,
            hints: [
              `for subject, grade in grades.items(): print(f"{subject}: {grade}")`,
              `average = sum(grades.values()) / len(grades)`,
              `print(round(average, 1))`,
            ]
          },
          quiz: [
            {
              question: `What does "for x in dict" iterate over?`,
              options: [
                `Values`,
                `Keys`,
                `Key-value tuples`,
                `Indices`,
              ],
              correct: 1
            },
            {
              question: `How do you iterate over both keys and values?`,
              options: [
                `for k, v in dict`,
                `for k, v in dict.items()`,
                `for k, v in dict.pairs()`,
                `for (k,v) in dict.all()`,
              ],
              correct: 1
            },
            {
              question: `What does sum(dict.values()) do?`,
              options: [
                `Sums the keys`,
                `Sums all numeric values`,
                `Counts items`,
                `Returns string`,
              ],
              correct: 1
            },
            {
              question: `Can you modify a dictionary while iterating over it?`,
              options: [
                `Yes always`,
                `No, it raises RuntimeError`,
                `Only values not keys`,
                `Only with .items()`,
              ],
              correct: 1
            },
            {
              question: `Can you use enumerate() with dict.items()?`,
              options: [`No`, `Yes, gives index + (key, value)`, `Only with keys`, `Only in Python 3.9+`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recap-frequency-counter',
          title: 'Recap - Frequency Counter',
          type: 'mastery',
          theory: `<h2>Recap: Frequency Counter</h2>
<p>A frequency counter counts how often each item appears in a collection. Dictionaries are perfect: keys are unique items, values are counts.</p>

<h3>Using get() for Clean Counting:</h3>
<pre><code>words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counter = {}
for word in words:
    counter[word] = counter.get(word, 0) + 1
print(counter)  # {'apple': 3, 'banana': 2, 'cherry': 1}
</code></pre>

<h3>Finding Most Frequent:</h3>
<pre><code>most_common = ""
max_count = 0
for item, count in counter.items():
    if count > max_count:
        max_count = count
        most_common = item
print(f"Most common: {most_common} ({max_count} times)")
</code></pre>

<h3>Sorting by Frequency:</h3>
<pre><code>sorted_items = sorted(counter.items(), key=lambda x: x[1], reverse=True)
for item, count in sorted_items:
    print(f"{item}: {count}")
</code></pre>

<h3>Character Frequency:</h3>
<pre><code>text = "hello"
freq = {}
for char in text:
    freq[char] = freq.get(char, 0) + 1
print(freq)  # {'h': 1, 'e': 1, 'l': 2, 'o': 1}
</code></pre>

<p>Frequency counters are used in text analysis, data science, finding duplicates, and voting systems.</p>`,
          challenge: {
            description: `Count frequency of each word in: words = ["python", "java", "python", "javascript", "java", "python", "ruby"]. Print the frequency dictionary. Find and print the most frequent word as "Most common: word (count)".`,
            starterCode: `words = ["python", "java", "python", "javascript", "java", "python", "ruby"]\n\n# Count frequencies\n\n# Print frequency dict\n\n# Find and print most common`,
            expectedOutput: `{'python': 3, 'java': 2, 'javascript': 1, 'ruby': 1}\nMost common: python (3)`,
            hints: [
              `Use counter[word] = counter.get(word, 0) + 1`,
              `Loop through items() tracking max_count and most_common`,
              `print(f"Most common: {most_common} ({max_count})")`,
            ]
          },
          quiz: [
            {
              question: `What does counter.get(word, 0) + 1 do?`,
              options: [
                `Gets count or 0 if missing, then adds 1`,
                `Always returns 1`,
                `Sets count to 0`,
                `Error if missing`,
              ],
              correct: 0
            },
            {
              question: `What is the most Pythonic way to count items?`,
              options: [
                `Using a list`,
                `Using dict.get(key, 0) + 1 in a loop`,
                `Using if/else with indexing`,
                `Using a global variable`,
              ],
              correct: 1
            },
            {
              question: `How do you sort dict items by value?`,
              options: [
                `dict.sort()`,
                `sorted(dict)`,
                `sorted(dict.items(), key=lambda x: x[1])`,
                `dict.sort_by_value()`,
              ],
              correct: 2
            },
            {
              question: `In sorted(d.items(), key=lambda x: x[1]), what is x[1]?`,
              options: [
                `The key`,
                `The value`,
                `The index`,
                `The tuple itself`,
              ],
              correct: 1
            },
          ]
          ,mastery: {
            description: `Given text = "to be or not to be that is the question", count word frequencies. Print each word and count sorted alphabetically (format: "word: count"). Then print words appearing more than once as "Words appearing more than once: word1, word2".`,
            starterCode: `text = "to be or not to be that is the question"\n\n# Count frequencies\n\n# Print sorted alphabetically\n\n# Print words appearing more than once`,
            expectedOutput: `be: 2\nis: 1\nnot: 1\nor: 1\nquestion: 1\nthat: 1\nthe: 1\nto: 2\nWords appearing more than once: be, to`,
            hints: [
              `words = text.split() then loop to count`,
              `for word, count in sorted(freq.items()): print(f"{word}: {count}")`,
              `Filter with if count > 1, join with ", "`,
            ]
          }
        }
      ]
    },
    {
      id: 'contact-book-application',
      title: 'Contact Book Application',
      lessons: [
        {
          id: 'project-display-menu',
          title: 'Display Menu',
          type: 'project',
          theory: `<h2>Project: Contact Book - Display Menu</h2>
<p>We are building a Contact Book Application that stores, retrieves, edits, and deletes contacts using dictionaries.</p>

<h3>Project Overview:</h3>
<p>Our contact book will support: Add, View, Edit, Delete, and List contacts.</p>

<h3>Step 1: The Menu Function</h3>
<pre><code>def display_menu():
    print("===== Contact Book =====")
    print("1. Add Contact")
    print("2. View Contact")
    print("3. Edit Contact")
    print("4. Delete Contact")
    print("5. List All Contacts")
    print("6. Exit")
    print("========================")
</code></pre>

<h3>Design Decisions:</h3>
<ul>
<li>Clear visual separators make the menu stand out</li>
<li>Numbered options are easy to select</li>
<li>An exit option lets users quit gracefully</li>
<li>The function takes no parameters and returns nothing</li>
</ul>

<p>This is the foundation — each lesson builds one feature.</p>`,
          challenge: {
            description: `Create a function called display_menu() that prints this exact menu, then call it:\n===== Contact Book =====\n1. Add Contact\n2. View Contact\n3. Edit Contact\n4. Delete Contact\n5. List All Contacts\n6. Exit\n========================`,
            starterCode: `# Create the display_menu function\n\n\n# Call it`,
            expectedOutput: `===== Contact Book =====\n1. Add Contact\n2. View Contact\n3. Edit Contact\n4. Delete Contact\n5. List All Contacts\n6. Exit\n========================`,
            hints: [
              `def display_menu(): use multiple print() statements for each menu option`,
              `Use print("===== Contact Book =====") for header`,
              `Call display_menu() at the end`,
            ]
          },
          quiz: [
            {
              question: `Why put menu display in a function?`,
              options: [
                `It runs faster`,
                `It can be reused and keeps code organized`,
                `Python requires it`,
                `It uses less memory`,
              ],
              correct: 1
            },
            {
              question: `What does the display_menu function return?`,
              options: [
                `The menu string`,
                `A list of options`,
                `None (it only prints)`,
                `User choice`,
              ],
              correct: 2
            },
            {
              question: `Why include an Exit option?`,
              options: [
                `Python requires it`,
                `To let users quit gracefully`,
                `To save memory`,
                `To prevent errors`,
              ],
              correct: 1
            },
            {
              question: `What data structure will store our contacts?`,
              options: [`List`, `Dictionary`, `Tuple`, `Set`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-add-contact',
          title: 'Add Contact',
          type: 'project',
          theory: `<h2>Contact Book: Add Contact</h2>
<p>The add function inserts a new contact. The contact book is a dictionary where keys are names and values are detail dictionaries.</p>

<h3>Data Structure:</h3>
<pre><code>contacts = {
    "Alice": {"phone": "555-0101", "email": "alice@mail.com"},
    "Bob": {"phone": "555-0102", "email": "bob@mail.com"}
}
</code></pre>

<h3>The Add Function:</h3>
<pre><code>def add_contact(contacts, name, phone, email):
    if name in contacts:
        print(f"Contact '{name}' already exists!")
        return False
    contacts[name] = {"phone": phone, "email": email}
    print(f"Contact '{name}' added successfully!")
    return True
</code></pre>

<h3>Key Design Choices:</h3>
<ul>
<li>Check for duplicates to prevent overwriting</li>
<li>Return True/False for success/failure</li>
<li>Provide user feedback messages</li>
<li>Modifies the dict in place (mutable)</li>
</ul>`,
          challenge: {
            description: `Create add_contact(contacts, name, phone, email). If name exists, print "Contact '[name]' already exists!" and return False. Otherwise add it and print "Contact '[name]' added successfully!" Return True. Test: add "Alice" with "555-0101"/"alice@mail.com" to empty dict, then try adding "Alice" again.`,
            starterCode: `def add_contact(contacts, name, phone, email):\n    pass\n\ncontacts = {}\nadd_contact(contacts, "Alice", "555-0101", "alice@mail.com")\nadd_contact(contacts, "Alice", "555-9999", "new@mail.com")`,
            expectedOutput: `Contact 'Alice' added successfully!\nContact 'Alice' already exists!`,
            hints: [
              `if name in contacts: print message and return False`,
              `contacts[name] = {"phone": phone, "email": email}`,
              `Use f-string with escaped quotes for name`,
            ]
          },
          quiz: [
            {
              question: `Why check if contact already exists before adding?`,
              options: [
                `Python requires it`,
                `To prevent overwriting existing data`,
                `To save memory`,
                `Not necessary`,
              ],
              correct: 1
            },
            {
              question: `When a function modifies a dictionary parameter, does it persist?`,
              options: [
                `No, dicts are copied`,
                `Yes, dicts are mutable and passed by reference`,
                `Only with global`,
                `Only if returned`,
              ],
              correct: 1
            },
            {
              question: `What is the benefit of returning True/False?`,
              options: [
                `Required by Python`,
                `Calling code can check if operation succeeded`,
                `It prints the result`,
                `Prevents errors`,
              ],
              correct: 1
            },
            {
              question: `What does contacts[name] = {...} do?`,
              options: [`Creates a new dictionary`, `Adds a key-value pair`, `Replaces the dictionary`, `Deletes the key`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-view-contact',
          title: 'View Contact',
          type: 'project',
          theory: `<h2>Contact Book: View Contact</h2>
<p>The view function retrieves and displays a specific contact. It handles missing contacts gracefully.</p>

<h3>The View Function:</h3>
<pre><code>def view_contact(contacts, name):
    if name not in contacts:
        print(f"Contact '{name}' not found!")
        return None
    contact = contacts[name]
    print(f"Name: {name}")
    print(f"Phone: {contact['phone']}")
    print(f"Email: {contact['email']}")
    return contact
</code></pre>

<h3>Design Choices:</h3>
<ul>
<li>Check existence first — prevents KeyError</li>
<li>Formatted output — readable presentation</li>
<li>Returns the contact dict (or None)</li>
</ul>

<h3>Usage:</h3>
<pre><code>contacts = {"Alice": {"phone": "555-0101", "email": "alice@mail.com"}}
view_contact(contacts, "Alice")
# Name: Alice
# Phone: 555-0101
# Email: alice@mail.com

view_contact(contacts, "Bob")
# Contact 'Bob' not found!
</code></pre>`,
          challenge: {
            description: `Create view_contact(contacts, name). If not found, print "Contact '[name]' not found!" and return None. If found, print Name, Phone, Email each on separate lines. Test: view Alice (exists), then view Bob (missing).`,
            starterCode: `def view_contact(contacts, name):\n    pass\n\ncontacts = {"Alice": {"phone": "555-0101", "email": "alice@mail.com"}}\nview_contact(contacts, "Alice")\nview_contact(contacts, "Bob")`,
            expectedOutput: `Name: Alice\nPhone: 555-0101\nEmail: alice@mail.com\nContact 'Bob' not found!`,
            hints: [
              `if name not in contacts: print not found message`,
              `contact = contacts[name] to get the nested dict`,
              `print(f"Phone: {contact['phone']}")`,
            ]
          },
          quiz: [
            {
              question: `Why return None when contact not found?`,
              options: [
                `Python requires return`,
                `Signals lookup failed to calling code`,
                `Deletes entry`,
                `Required for loops`,
              ],
              correct: 1
            },
            {
              question: `What happens with contacts[name] if name missing?`,
              options: [
                `Returns None`,
                `Returns empty dict`,
                `Raises KeyError`,
                `Returns False`,
              ],
              correct: 2
            },
            {
              question: `What does contacts.get(name) return if missing?`,
              options: [
                `KeyError`,
                `None`,
                `False`,
                `Empty string`,
              ],
              correct: 1
            },
            {
              question: `Why format output with f-strings?`,
              options: [`Required by Python`, `More readable and maintainable`, `Faster execution`, `Prevents errors`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-edit-contact',
          title: 'Edit Contact',
          type: 'project',
          theory: `<h2>Contact Book: Edit Contact</h2>
<p>The edit function updates a contact field. It validates both contact existence and field validity.</p>

<h3>The Edit Function:</h3>
<pre><code>def edit_contact(contacts, name, field, new_value):
    if name not in contacts:
        print(f"Contact '{name}' not found!")
        return False
    if field not in contacts[name]:
        print(f"Field '{field}' does not exist!")
        return False
    old_value = contacts[name][field]
    contacts[name][field] = new_value
    print(f"Updated {name}'s {field}: '{old_value}' -> '{new_value}'")
    return True
</code></pre>

<h3>Usage:</h3>
<pre><code>contacts = {"Alice": {"phone": "555-0101", "email": "alice@mail.com"}}
edit_contact(contacts, "Alice", "phone", "555-9999")
# Updated Alice's phone: '555-0101' -> '555-9999'

edit_contact(contacts, "Bob", "phone", "555-0000")
# Contact 'Bob' not found!
</code></pre>

<p>This demonstrates <strong>defensive programming</strong> — validating inputs before performing operations.</p>`,
          challenge: {
            description: `Create edit_contact(contacts, name, field, new_value). Validate contact and field exist. Show old -> new values. Test: edit Alice phone to "555-9999", then try editing Bob (missing).`,
            starterCode: `def edit_contact(contacts, name, field, new_value):\n    pass\n\ncontacts = {"Alice": {"phone": "555-0101", "email": "alice@mail.com"}}\nedit_contact(contacts, "Alice", "phone", "555-9999")\nedit_contact(contacts, "Bob", "phone", "555-0000")`,
            expectedOutput: `Updated Alice's phone: '555-0101' -> '555-9999'\nContact 'Bob' not found!`,
            hints: [
              `Check if name not in contacts first`,
              `old_value = contacts[name][field]`,
              `contacts[name][field] = new_value`,
            ]
          },
          quiz: [
            {
              question: `Why validate the field before editing?`,
              options: [
                `Required by Python`,
                `To prevent creating unwanted fields`,
                `To save memory`,
                `Fields cannot be changed`,
              ],
              correct: 1
            },
            {
              question: `What is defensive programming?`,
              options: [
                `Writing secure code`,
                `Validating inputs before operations`,
                `Using try/except everywhere`,
                `Avoiding globals`,
              ],
              correct: 1
            },
            {
              question: `Why show old value when editing?`,
              options: [
                `Required`,
                `User can verify what changed`,
                `Prevent data loss`,
                `Runs faster`,
              ],
              correct: 1
            },
            {
              question: `What is the time complexity of dict key lookup?`,
              options: [`O(n)`, `O(1) average`, `O(log n)`, `O(n^2)`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-delete-contact',
          title: 'Delete Contact',
          type: 'project',
          theory: `<h2>Contact Book: Delete Contact</h2>
<p>The delete function removes a contact entirely. Since deletion is destructive, we validate first.</p>

<h3>The Delete Function:</h3>
<pre><code>def delete_contact(contacts, name):
    if name not in contacts:
        print(f"Contact '{name}' not found!")
        return False
    del contacts[name]
    print(f"Contact '{name}' deleted successfully!")
    return True
</code></pre>

<h3>Alternative with pop():</h3>
<pre><code>def delete_contact_v2(contacts, name):
    removed = contacts.pop(name, None)
    if removed is None:
        print(f"Contact '{name}' not found!")
        return None
    print(f"Contact '{name}' deleted successfully!")
    return removed
</code></pre>

<h3>Usage:</h3>
<pre><code>contacts = {"Alice": {"phone": "555-0101", "email": "alice@mail.com"}}
delete_contact(contacts, "Alice")
# Contact 'Alice' deleted successfully!
delete_contact(contacts, "Bob")
# Contact 'Bob' not found!
</code></pre>`,
          challenge: {
            description: `Create delete_contact(contacts, name). If missing, print "Contact '[name]' not found!" and return False. Otherwise delete and print "Contact '[name]' deleted successfully!" Test: delete Alice from dict with Alice and Bob, try deleting Charlie, print remaining.`,
            starterCode: `def delete_contact(contacts, name):\n    pass\n\ncontacts = {\n    "Alice": {"phone": "555-0101", "email": "alice@mail.com"},\n    "Bob": {"phone": "555-0102", "email": "bob@mail.com"}\n}\ndelete_contact(contacts, "Alice")\ndelete_contact(contacts, "Charlie")\nprint(contacts)`,
            expectedOutput: `Contact 'Alice' deleted successfully!\nContact 'Charlie' not found!\n{'Bob': {'phone': '555-0102', 'email': 'bob@mail.com'}}`,
            hints: [
              `if name not in contacts: handle missing`,
              `del contacts[name]`,
              `Return True on success, False on failure`,
            ]
          },
          quiz: [
            {
              question: `Difference between del dict[key] and dict.pop(key)?`,
              options: [
                `No difference`,
                `pop() returns the removed value`,
                `del is faster`,
                `pop() only works with strings`,
              ],
              correct: 1
            },
            {
              question: `What does dict.pop("key", None) do if key missing?`,
              options: [
                `Raises KeyError`,
                `Returns None`,
                `Deletes random item`,
                `Returns False`,
              ],
              correct: 1
            },
            {
              question: `Why validate before destructive operations?`,
              options: [
                `Performance`,
                `Meaningful errors and prevent crashes`,
                `Required`,
                `Save disk space`,
              ],
              correct: 1
            },
            {
              question: `After del dict["key"], what happens to the value?`,
              options: [`It stays in memory forever`, `It becomes eligible for garbage collection`, `It moves to a recycle bin`, `It converts to None`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-list-all',
          title: 'List All',
          type: 'project',
          theory: `<h2>Contact Book: List All Contacts</h2>
<p>The list function displays all contacts in a readable format, handling the empty case gracefully.</p>

<h3>The List Function:</h3>
<pre><code>def list_contacts(contacts):
    if not contacts:
        print("Contact book is empty!")
        return
    print(f"--- All Contacts ({len(contacts)}) ---")
    for name, info in contacts.items():
        print(f"  {name}: {info['phone']} | {info['email']}")
</code></pre>

<h3>Understanding "if not contacts":</h3>
<p>An empty dictionary is falsy in Python:</p>
<pre><code>empty = {}
if not empty:
    print("Dict is empty!")  # Prints

data = {"a": 1}
if not data:
    print("Empty")  # Does NOT print
</code></pre>

<h3>Usage:</h3>
<pre><code>contacts = {
    "Alice": {"phone": "555-0101", "email": "alice@mail.com"},
    "Bob": {"phone": "555-0102", "email": "bob@mail.com"}
}
list_contacts(contacts)
# --- All Contacts (2) ---
#   Alice: 555-0101 | alice@mail.com
#   Bob: 555-0102 | bob@mail.com

list_contacts({})
# Contact book is empty!
</code></pre>`,
          challenge: {
            description: `Create list_contacts(contacts). If empty, print "Contact book is empty!". Otherwise print "--- All Contacts (N) ---" then each contact as "  Name: phone | email". Test with Alice and Bob, then empty dict.`,
            starterCode: `def list_contacts(contacts):\n    pass\n\ncontacts = {\n    "Alice": {"phone": "555-0101", "email": "alice@mail.com"},\n    "Bob": {"phone": "555-0102", "email": "bob@mail.com"}\n}\nlist_contacts(contacts)\nlist_contacts({})`,
            expectedOutput: `--- All Contacts (2) ---\n  Alice: 555-0101 | alice@mail.com\n  Bob: 555-0102 | bob@mail.com\nContact book is empty!`,
            hints: [
              `if not contacts: print empty message and return`,
              `Use f"--- All Contacts ({len(contacts)}) ---"`,
              `for name, info in contacts.items():`,
            ]
          },
          quiz: [
            {
              question: `What does "if not dict" check?`,
              options: [
                `If dict is None`,
                `If dict is empty`,
                `If dict has no values`,
                `If undefined`,
              ],
              correct: 1
            },
            {
              question: `Empty dictionary in boolean context?`,
              options: [
                `True`,
                `False`,
                `None`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `Why handle empty case separately?`,
              options: [
                `Avoid errors`,
                `Give meaningful user feedback`,
                `Python requires it`,
                `Save time`,
              ],
              correct: 1
            },
            {
              question: `What does items() return?`,
              options: [`List of keys`, `List of values`, `List of key-value tuples`, `A copy of the dict`],
              correct: 2
            },
          ]
        }
,
        {
          id: 'project-everything-together',
          title: 'Everything Together',
          type: 'project',
          theory: `<h2>Contact Book: Everything Together</h2>
<p>Now we bring all pieces into a complete working application, demonstrating how functions compose into a full program.</p>

<h3>Complete Application:</h3>
<pre><code>def add_contact(contacts, name, phone, email):
    if name in contacts:
        print(f"Contact '{name}' already exists!")
        return False
    contacts[name] = {"phone": phone, "email": email}
    print(f"Contact '{name}' added successfully!")
    return True

def delete_contact(contacts, name):
    if name not in contacts:
        print(f"Contact '{name}' not found!")
        return False
    del contacts[name]
    print(f"Contact '{name}' deleted successfully!")
    return True

def list_contacts(contacts):
    if not contacts:
        print("Contact book is empty!")
        return
    print(f"--- All Contacts ({len(contacts)}) ---")
    for name, info in contacts.items():
        print(f"  {name}: {info['phone']} | {info['email']}")
</code></pre>

<h3>Key Takeaway:</h3>
<p>Breaking a program into small, focused functions makes it easier to build, test, and maintain. Each function has a single responsibility.</p>`,
          challenge: {
            description: `Build the complete contact book: define add_contact, delete_contact, and list_contacts. Simulate: add Alice (555-0101, alice@mail.com), add Bob (555-0102, bob@mail.com), add Charlie (555-0103, charlie@mail.com), delete Bob, then list all.`,
            starterCode: `def add_contact(contacts, name, phone, email):\n    if name in contacts:\n        print(f"Contact \'{name}\' already exists!")\n        return False\n    contacts[name] = {"phone": phone, "email": email}\n    print(f"Contact \'{name}\' added successfully!")\n    return True\n\ndef delete_contact(contacts, name):\n    pass\n\ndef list_contacts(contacts):\n    pass\n\ncontacts = {}\nadd_contact(contacts, "Alice", "555-0101", "alice@mail.com")\nadd_contact(contacts, "Bob", "555-0102", "bob@mail.com")\nadd_contact(contacts, "Charlie", "555-0103", "charlie@mail.com")\ndelete_contact(contacts, "Bob")\nlist_contacts(contacts)`,
            expectedOutput: `Contact 'Alice' added successfully!\nContact 'Bob' added successfully!\nContact 'Charlie' added successfully!\nContact 'Bob' deleted successfully!\n--- All Contacts (2) ---\n  Alice: 555-0101 | alice@mail.com\n  Charlie: 555-0103 | charlie@mail.com`,
            hints: [
              `delete_contact: check existence, del contacts[name]`,
              `list_contacts: check if not contacts, then loop items()`,
              `Two spaces before each contact name in list output`,
            ]
          },
          quiz: [
            {
              question: `What principle does this project demonstrate?`,
              options: [
                `OOP`,
                `Separation of concerns`,
                `Functional programming`,
                `TDD`,
              ],
              correct: 1
            },
            {
              question: `Why use dictionary for contact book instead of list?`,
              options: [
                `Lists are slower`,
                `Dictionaries allow lookup by name`,
                `Lists cannot store strings`,
                `Dicts are immutable`,
              ],
              correct: 1
            },
            {
              question: `Advantage of separate functions for each operation?`,
              options: [
                `Required`,
                `Each can be tested and reused independently`,
                `Uses less memory`,
                `Runs in parallel`,
              ],
              correct: 1
            },
            {
              question: `What does modular code mean?`,
              options: [`Code using modules`, `Code broken into independent, reusable functions`, `Code that uses classes`, `Code without variables`],
              correct: 1
            },
          ]
        }
      ]
    },
    {
      id: 'advanced-decision-making',
      title: 'Advanced Decision Making',
      lessons: [
        {
          id: 'ternary-operator',
          title: 'Ternary Operator',
          type: 'challenge',
          theory: `<h2>The Ternary Operator</h2>
<p>The ternary operator (conditional expression) lets you write simple if/else logic in a single line. It is like a shorthand for choosing between two values based on a condition.</p>

<h3>Syntax:</h3>
<pre><code>value_if_true if condition else value_if_false</code></pre>

<h3>Basic Examples:</h3>
<pre><code>age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # adult

score = 45
result = "Pass" if score >= 50 else "Fail"
print(result)  # Fail

x = 10
parity = "even" if x % 2 == 0 else "odd"
print(parity)  # even
</code></pre>

<h3>Compared to Regular if/else:</h3>
<pre><code># Regular way (4 lines)
if temperature > 30:
    weather = "hot"
else:
    weather = "cool"

# Ternary way (1 line)
weather = "hot" if temperature > 30 else "cool"
</code></pre>

<h3>In Print Statements:</h3>
<pre><code>count = 1
print(f"{count} item" if count == 1 else f"{count} items")
# 1 item

count = 5
print(f"{count} item" if count == 1 else f"{count} items")
# 5 items
</code></pre>

<h3>Nested Ternary (use sparingly):</h3>
<pre><code>score = 85
grade = "A" if score >= 90 else "B" if score >= 80 else "C"
print(grade)  # B
</code></pre>

<p><strong>Best Practice:</strong> Use ternary for simple conditions. For complex logic, stick with regular if/else for readability.</p>`,
          challenge: {
            description: `Use ternary operator: Set status to "even" if 42 is even, else "odd" and print it. Set access to "granted" if age=17 is >= 18, else "denied" and print it. Set size to "big" if len([1,2,3,4,5]) > 3 else "small" and print it.`,
            starterCode: `num = 42\n# Set status using ternary\n\nage = 17\n# Set access using ternary\n\nmy_list = [1, 2, 3, 4, 5]\n# Set size using ternary`,
            expectedOutput: `even\ndenied\nbig`,
            hints: [
              `status = "even" if num % 2 == 0 else "odd"`,
              `access = "granted" if age >= 18 else "denied"`,
              `size = "big" if len(my_list) > 3 else "small"`,
            ]
          },
          quiz: [
            {
              question: `What is the syntax of Python ternary operator?`,
              options: [
                `condition ? true : false`,
                `value_if_true if condition else value_if_false`,
                `if condition then value else value`,
                `condition && true || false`,
              ],
              correct: 1
            },
            {
              question: `What does "yes" if True else "no" return?`,
              options: [
                `"yes"`,
                `"no"`,
                `True`,
                `Error`,
              ],
              correct: 0
            },
            {
              question: `When should you avoid ternary operators?`,
              options: [
                `Always`,
                `When logic is complex or nested`,
                `For string values`,
                `For numeric values`,
              ],
              correct: 1
            },
            {
              question: `What does x = 5; "pos" if x > 0 else "neg" evaluate to?`,
              options: [
                `"pos"`,
                `"neg"`,
                `5`,
                `True`,
              ],
              correct: 0
            },
            {
              question: `Can ternary operator be used inside f-strings?`,
              options: [`No`, `Yes, wrap in the f-string expression`, `Only with parentheses`, `Only for numbers`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'membership-checks',
          title: 'Membership Checks',
          type: 'challenge',
          theory: `<h2>Membership Checks</h2>
<p>The <code>in</code> and <code>not in</code> operators check whether a value exists within a collection. They work with strings, lists, tuples, sets, and dictionaries.</p>

<h3>With Lists:</h3>
<pre><code>fruits = ["apple", "banana", "cherry"]
print("apple" in fruits)      # True
print("grape" in fruits)      # False
print("grape" not in fruits)  # True
</code></pre>

<h3>With Strings:</h3>
<pre><code>message = "Hello, World!"
print("Hello" in message)     # True
print("hello" in message)     # False (case-sensitive!)
print("xyz" not in message)   # True
</code></pre>

<h3>With Tuples:</h3>
<pre><code>colors = ("red", "green", "blue")
print("red" in colors)   # True
print("pink" in colors)  # False
</code></pre>

<h3>With Dictionaries (checks keys by default):</h3>
<pre><code>person = {"name": "Alice", "age": 25}
print("name" in person)   # True (checks keys)
print("Alice" in person)  # False (Alice is a value, not key)
print(25 in person.values())  # True (checking values)
</code></pre>

<h3>Practical Pattern:</h3>
<pre><code>valid_commands = ["start", "stop", "pause", "reset"]
user_input = "stop"

if user_input in valid_commands:
    print(f"Executing: {user_input}")
else:
    print(f"Unknown command: {user_input}")
# Executing: stop
</code></pre>

<h3>With Conditional Logic:</h3>
<pre><code>banned_words = ["spam", "scam", "fake"]
comment = "This is a great product"

has_banned = any(word in comment.lower() for word in banned_words)
print(has_banned)  # False
</code></pre>`,
          challenge: {
            description: `Given colors = ["red", "blue", "green", "yellow"], check if "blue" is in colors and print the result (True/False). Check if "purple" is not in colors and print result. Check if "lo" is in the string "Hello World" and print result.`,
            starterCode: `colors = ["red", "blue", "green", "yellow"]\n\n# Check if "blue" in colors\n\n# Check if "purple" not in colors\n\n# Check if "lo" in "Hello World"`,
            expectedOutput: `True\nTrue\nTrue`,
            hints: [
              `print("blue" in colors)`,
              `print("purple" not in colors)`,
              `print("lo" in "Hello World")`,
            ]
          },
          quiz: [
            {
              question: `What does "x" in ["x", "y", "z"] return?`,
              options: [
                `0`,
                `True`,
                `"x"`,
                `1`,
              ],
              correct: 1
            },
            {
              question: `What does "key" in {"key": "value"} check?`,
              options: [
                `If "key" is a value`,
                `If "key" is a key`,
                `If "key" exists anywhere`,
                `Both keys and values`,
              ],
              correct: 1
            },
            {
              question: `Is "Hello" in "hello world" True or False?`,
              options: [
                `True`,
                `False (case-sensitive)`,
                `Error`,
                `None`,
              ],
              correct: 1
            },
            {
              question: `What does "cat" not in ["dog", "fish"] return?`,
              options: [
                `True`,
                `False`,
                `None`,
                `Error`,
              ],
              correct: 0
            },
            {
              question: `"py" in "python" returns?`,
              options: [`True (substring check)`, `False`, `Error`, `0`],
              correct: 0
            },
          ]
        }
,
        {
          id: 'identity-checks',
          title: 'Identity Checks',
          type: 'challenge',
          theory: `<h2>Identity Checks: is vs ==</h2>
<p>Python has two ways to compare: <code>==</code> checks if values are equal, while <code>is</code> checks if two variables point to the exact same object in memory.</p>

<h3>The Difference:</h3>
<pre><code>a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)  # True (same values)
print(a is b)  # False (different objects)
print(a is c)  # True (same object)
</code></pre>

<h3>When to Use is:</h3>
<pre><code># Use 'is' for None checks (most common use)
x = None
print(x is None)      # True
print(x is not None)  # False

result = some_function()
if result is None:
    print("No result")
</code></pre>

<h3>Why is for None?</h3>
<pre><code># None is a singleton - only one None exists
a = None
b = None
print(a is b)  # True (same object)

# == can be overridden by classes, is cannot
print(a == b)  # True (also works, but 'is' is preferred)
</code></pre>

<h3>Integer Caching (Gotcha!):</h3>
<pre><code># Python caches small integers (-5 to 256)
a = 100
b = 100
print(a is b)  # True (cached)

a = 1000
b = 1000
print(a is b)  # May be False! (not cached)
# Always use == for number comparison!
</code></pre>

<h3>Boolean Identity:</h3>
<pre><code>print(True is True)   # True
print(False is False) # True

x = 1
print(x is True)   # False (different types!)
print(x == True)   # True (value comparison)
</code></pre>

<p><strong>Rule of thumb:</strong> Use <code>is</code> only for None, True, False comparisons. Use <code>==</code> for everything else.</p>`,
          challenge: {
            description: `Create x = None and y = 5. Check if x is None and print result. Check if y is not None and print result. Create two lists a = [1,2] and b = [1,2], then print whether a == b and whether a is b.`,
            starterCode: `x = None\ny = 5\n\n# Check x is None\n\n# Check y is not None\n\na = [1, 2]\nb = [1, 2]\n\n# Print a == b\n\n# Print a is b`,
            expectedOutput: `True\nTrue\nTrue\nFalse`,
            hints: [
              `print(x is None)`,
              `print(y is not None)`,
              `a == b is True (same values), a is b is False (different objects)`,
            ]
          },
          quiz: [
            {
              question: `What does "is" check?`,
              options: [
                `Value equality`,
                `Type equality`,
                `Same object in memory`,
                `Same variable name`,
              ],
              correct: 2
            },
            {
              question: `What is the correct way to check for None?`,
              options: [
                `x == None`,
                `x is None`,
                `x.isNone()`,
                `None(x)`,
              ],
              correct: 1
            },
            {
              question: `[1,2] == [1,2] is __ and [1,2] is [1,2] is __`,
              options: [
                `True, True`,
                `True, False`,
                `False, True`,
                `False, False`,
              ],
              correct: 1
            },
            {
              question: `Why use "is" for None instead of "=="?`,
              options: [
                `Faster and None is a singleton`,
                `Required by Python`,
                `More readable`,
                `== does not work with None`,
              ],
              correct: 0
            },
            {
              question: `True is 1 returns?`,
              options: [`True`, `False`, `Error`, `1`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'indentation-errors',
          title: 'Indentation Errors',
          type: 'challenge',
          theory: `<h2>Indentation Errors</h2>
<p>Python uses indentation (whitespace) to define code blocks. Unlike languages that use braces {}, Python REQUIRES consistent indentation. Getting it wrong causes IndentationError.</p>

<h3>Common Indentation Errors:</h3>
<pre><code># ERROR 1: Missing indentation
if True:
print("hello")  # IndentationError!

# CORRECT:
if True:
    print("hello")

# ERROR 2: Unexpected indentation
x = 5
    y = 10  # IndentationError!

# CORRECT:
x = 5
y = 10

# ERROR 3: Inconsistent indentation
if True:
    print("a")
      print("b")  # IndentationError!

# CORRECT:
if True:
    print("a")
    print("b")
</code></pre>

<h3>Tabs vs Spaces:</h3>
<pre><code># NEVER mix tabs and spaces!
# Python 3 raises TabError if you mix them
# Best practice: Use 4 spaces (PEP 8 standard)
</code></pre>

<h3>Nested Indentation:</h3>
<pre><code>for i in range(3):
    if i > 0:
        print(f"{i} is positive")
    else:
        print(f"{i} is zero")
    print("---")  # Same level as if/else
</code></pre>

<h3>Function Indentation:</h3>
<pre><code>def greet(name):
    message = f"Hello, {name}!"
    print(message)
    return message

# This is outside the function
greet("Alice")
</code></pre>

<p><strong>Tips:</strong> Configure your editor to show whitespace characters. Use 4 spaces per level consistently. Most editors convert Tab to 4 spaces automatically.</p>`,
          challenge: {
            description: `Write a function called check_number that takes n. If n > 0, print "positive". Elif n < 0, print "negative". Else print "zero". Then call it with 5, -3, and 0. Make sure your indentation is correct!`,
            starterCode: `# Define check_number with proper indentation\ndef check_number(n):\n    pass\n\n# Test calls\ncheck_number(5)\ncheck_number(-3)\ncheck_number(0)`,
            expectedOutput: `positive\nnegative\nzero`,
            hints: [
              `Use 4 spaces for each indentation level`,
              `if n > 0: print("positive") elif n < 0: print("negative") else: print("zero")`,
              `Each print must be indented under its condition`,
            ]
          },
          quiz: [
            {
              question: `How many spaces is standard Python indentation?`,
              options: [
                `2`,
                `4`,
                `8`,
                `It does not matter`,
              ],
              correct: 1
            },
            {
              question: `What error do you get from incorrect indentation?`,
              options: [
                `SyntaxError`,
                `IndentationError`,
                `TypeError`,
                `ValueError`,
              ],
              correct: 1
            },
            {
              question: `Can you mix tabs and spaces in Python 3?`,
              options: [
                `Yes`,
                `No, it raises TabError`,
                `Only in functions`,
                `Only at top level`,
              ],
              correct: 1
            },
            {
              question: `What defines a code block in Python?`,
              options: [
                `Curly braces {}`,
                `Consistent indentation`,
                `Parentheses ()`,
                `begin/end keywords`,
              ],
              correct: 1
            },
            {
              question: `What is PEP 8?`,
              options: [`Python version`, `Python style guide`, `Error type`, `A module`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recap-vacation-filter',
          title: 'Recap - Vacation Filter',
          type: 'mastery',
          theory: `<h2>Recap: Vacation Filter</h2>
<p>Let us combine ternary operators, membership checks, identity checks, and proper control flow to build a vacation destination filter.</p>

<h3>Combining Concepts:</h3>
<pre><code>destinations = [
    {"name": "Paris", "budget": "high", "climate": "mild"},
    {"name": "Bali", "budget": "medium", "climate": "tropical"},
    {"name": "Iceland", "budget": "high", "climate": "cold"},
    {"name": "Thailand", "budget": "low", "climate": "tropical"}
]

# Filter by budget
budget = "low"
matches = []
for dest in destinations:
    if dest["budget"] == budget:
        matches.append(dest["name"])

status = "Found matches" if matches else "No matches"
print(status)
print(matches)
</code></pre>

<h3>Using Multiple Criteria:</h3>
<pre><code>preferred_climates = ["tropical", "mild"]
max_budget = "medium"
budget_levels = {"low": 1, "medium": 2, "high": 3}

for dest in destinations:
    climate_ok = dest["climate"] in preferred_climates
    budget_ok = budget_levels[dest["budget"]] <= budget_levels[max_budget]
    
    status = "Recommended" if climate_ok and budget_ok else "Skip"
    print(f"{dest['name']}: {status}")
</code></pre>

<p>This combines all decision-making tools: membership (in), ternary, conditionals, and dictionary lookups.</p>`,
          challenge: {
            description: `Given destinations = [{"name": "Paris", "budget": 2000}, {"name": "Tokyo", "budget": 3000}, {"name": "Bali", "budget": 1000}, {"name": "London", "budget": 2500}], filter those with budget <= 2000. Print each matching name. Then print the count using ternary: "Found N destination(s)" if any matches, else "No affordable destinations".`,
            starterCode: `destinations = [\n    {"name": "Paris", "budget": 2000},\n    {"name": "Tokyo", "budget": 3000},\n    {"name": "Bali", "budget": 1000},\n    {"name": "London", "budget": 2500}\n]\n\n# Filter affordable (budget <= 2000)\n\n# Print matching names\n\n# Print count message with ternary`,
            expectedOutput: `Paris\nBali\nFound 2 destination(s)`,
            hints: [
              `affordable = [d for d in destinations if d["budget"] <= 2000]`,
              `Or loop and check: if dest["budget"] <= 2000`,
              `msg = f"Found {len(affordable)} destination(s)" if affordable else "No affordable destinations"`,
            ]
          },
          quiz: [
            {
              question: `What does "result" if items else "empty" evaluate when items = []?`,
              options: [
                `"result"`,
                `"empty"`,
                `None`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `How do you check if a value is in a list of acceptable options?`,
              options: [
                `value.in(options)`,
                `value in options`,
                `options.contains(value)`,
                `options.has(value)`,
              ],
              correct: 1
            },
            {
              question: `What is the most Pythonic way to filter a list by condition?`,
              options: [
                `Using a for loop with if`,
                `List comprehension with condition`,
                `Both are acceptable`,
                `Using filter() only`,
              ],
              correct: 2
            },
            {
              question: `Empty list [] is truthy or falsy?`,
              options: [
                `Truthy`,
                `Falsy`,
                `Neither`,
                `Error`,
              ],
              correct: 1
            },
          ]
          ,mastery: {
            description: `Given items = [{"name": "Laptop", "price": 999, "in_stock": True}, {"name": "Phone", "price": 699, "in_stock": False}, {"name": "Tablet", "price": 449, "in_stock": True}, {"name": "Watch", "price": 299, "in_stock": True}], print each item with status: "Name - $price - Available/Sold Out" using ternary for availability. Then print count of available items under $500.`,
            starterCode: `items = [\n    {"name": "Laptop", "price": 999, "in_stock": True},\n    {"name": "Phone", "price": 699, "in_stock": False},\n    {"name": "Tablet", "price": 449, "in_stock": True},\n    {"name": "Watch", "price": 299, "in_stock": True}\n]\n\n# Print each item with availability\n\n# Count and print available items under $500`,
            expectedOutput: `Laptop - $999 - Available\nPhone - $699 - Sold Out\nTablet - $449 - Available\nWatch - $299 - Available\nAffordable and available: 2`,
            hints: [
              `status = "Available" if item["in_stock"] else "Sold Out"`,
              `print(f"{item["name"]} - ${item["price"]} - {status}")`,
              `Count where price < 500 and in_stock is True`,
            ]
          }
        }
      ]
    },
    {
      id: 'sets-part-1',
      title: 'Sets Part 1',
      lessons: [
        {
          id: 'what-is-a-set',
          title: 'What is a Set?',
          type: 'challenge',
          theory: `<h2>What is a Set?</h2>
<p>A <strong>set</strong> is an unordered collection of <strong>unique</strong> elements. Think of it like a bag of distinct items — no duplicates allowed, and there is no specific order.</p>

<h3>Key Characteristics:</h3>
<ul>
<li><strong>Unordered</strong> — no index access, no guaranteed order</li>
<li><strong>Unique elements only</strong> — duplicates are automatically removed</li>
<li><strong>Mutable</strong> — you can add/remove elements</li>
<li><strong>Elements must be immutable</strong> — strings, numbers, tuples (not lists)</li>
</ul>

<h3>Creating Sets:</h3>
<pre><code># With curly braces
fruits = {"apple", "banana", "cherry"}
print(fruits)  # {'cherry', 'apple', 'banana'} (order may vary)
print(type(fruits))  # &lt;class 'set'&gt;

# Duplicates are removed automatically
numbers = {1, 2, 2, 3, 3, 3}
print(numbers)  # {1, 2, 3}

# From a list (removes duplicates!)
my_list = [1, 1, 2, 2, 3, 3]
unique = set(my_list)
print(unique)  # {1, 2, 3}

# Empty set (NOT {} which creates dict)
empty = set()
print(type(empty))  # &lt;class 'set'&gt;
</code></pre>

<h3>Basic Operations:</h3>
<pre><code>s = {1, 2, 3}
print(len(s))      # 3
print(2 in s)      # True
print(5 in s)      # False
print(5 not in s)  # True
</code></pre>

<p><strong>Important:</strong> {} creates an empty dict, NOT an empty set. Use set() for empty sets.</p>`,
          challenge: {
            description: `Create a set called colors with "red", "blue", "green", "blue", "red". Print it (duplicates removed). Print its length. Check if "blue" is in the set and print result. Create a set from [5,3,1,3,5,7,1] and print it.`,
            starterCode: `# Create colors set with duplicates\n\n# Print colors\n\n# Print length\n\n# Check if blue is in set\n\n# Create set from list`,
            expectedOutput: `{'red', 'green', 'blue'}\n3\nTrue\n{1, 3, 5, 7}`,
            hints: [
              `colors = {"red", "blue", "green", "blue", "red"}`,
              `print(len(colors)) gives 3 since duplicates removed`,
              `print(set([5,3,1,3,5,7,1]))`,
            ]
          },
          quiz: [
            {
              question: `What makes sets different from lists?`,
              options: [
                `Sets are ordered`,
                `Sets only store unique values`,
                `Sets can store lists`,
                `Sets are immutable`,
              ],
              correct: 1
            },
            {
              question: `How do you create an empty set?`,
              options: [
                `{}`,
                `set()`,
                `[]`,
                `set{}`,
              ],
              correct: 1
            },
            {
              question: `What does set([1,1,2,2,3]) return?`,
              options: [
                `{1, 1, 2, 2, 3}`,
                `{1, 2, 3}`,
                `[1, 2, 3]`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `Can sets contain lists as elements?`,
              options: [
                `Yes`,
                `No, elements must be immutable`,
                `Only empty lists`,
                `Only with special syntax`,
              ],
              correct: 1
            },
            {
              question: `What does len({1,1,2,2,3,3}) return?`,
              options: [`6`, `3`, `2`, `1`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'basic-set-operations',
          title: 'Basic Operations',
          type: 'challenge',
          theory: `<h2>Basic Set Operations</h2>
<p>Sets support adding, removing, and various operations for manipulating their elements.</p>

<h3>Adding Elements:</h3>
<pre><code>fruits = {"apple", "banana"}
fruits.add("cherry")
print(fruits)  # {'apple', 'banana', 'cherry'}

# Adding duplicate does nothing
fruits.add("apple")
print(fruits)  # {'apple', 'banana', 'cherry'} (no change)
</code></pre>

<h3>Removing Elements:</h3>
<pre><code>fruits = {"apple", "banana", "cherry"}

# remove() - raises KeyError if missing
fruits.remove("banana")
print(fruits)  # {'apple', 'cherry'}

# discard() - no error if missing
fruits.discard("grape")  # No error
print(fruits)  # {'apple', 'cherry'}

# pop() - removes and returns arbitrary element
item = fruits.pop()
print(item)  # (random element)

# clear() - removes all
fruits.clear()
print(fruits)  # set()
</code></pre>

<h3>Update (Add Multiple):</h3>
<pre><code>s = {1, 2, 3}
s.update([4, 5, 6])
print(s)  # {1, 2, 3, 4, 5, 6}

s.update({7, 8}, [9, 10])
print(s)  # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
</code></pre>

<h3>Copying Sets:</h3>
<pre><code>original = {1, 2, 3}
copy = original.copy()
copy.add(4)
print(original)  # {1, 2, 3}
print(copy)      # {1, 2, 3, 4}
</code></pre>

<h3>Converting Between Types:</h3>
<pre><code>my_list = [1, 2, 2, 3, 3]
unique_set = set(my_list)
back_to_list = sorted(unique_set)
print(back_to_list)  # [1, 2, 3]
</code></pre>`,
          challenge: {
            description: `Create a set nums = {1, 2, 3}. Add 4 and 5. Remove 2. Print the set. Then create another set letters = {"a", "b"} and update it with ["c", "d", "e"]. Print letters. Print the total combined length of both sets.`,
            starterCode: `nums = {1, 2, 3}\n\n# Add 4 and 5\n\n# Remove 2\n\n# Print nums\n\nletters = {"a", "b"}\n# Update with c, d, e\n\n# Print letters\n\n# Print combined length`,
            expectedOutput: `{1, 3, 4, 5}\n{'a', 'b', 'c', 'd', 'e'}\n9`,
            hints: [
              `nums.add(4); nums.add(5); nums.remove(2)`,
              `letters.update(["c", "d", "e"])`,
              `print(len(nums) + len(letters))`,
            ]
          },
          quiz: [
            {
              question: `What is the difference between remove() and discard()?`,
              options: [
                `No difference`,
                `remove() raises error if missing, discard() does not`,
                `discard() is slower`,
                `remove() returns the element`,
              ],
              correct: 1
            },
            {
              question: `What does set.add() do if element already exists?`,
              options: [
                `Raises error`,
                `Adds duplicate`,
                `Nothing (no error)`,
                `Returns False`,
              ],
              correct: 2
            },
            {
              question: `What does set.update([4,5,6]) do?`,
              options: [
                `Replaces the set`,
                `Adds all elements from the list`,
                `Adds the list as one element`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `What does set.pop() return?`,
              options: [
                `The last element`,
                `The first element`,
                `An arbitrary element`,
                `None`,
              ],
              correct: 2
            },
            {
              question: `s = {1,2,3}; s.add(2); len(s) is?`,
              options: [`4`, `3`, `Error`, `2`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'set-methods',
          title: 'Set Methods',
          type: 'challenge',
          theory: `<h2>Set Methods</h2>
<p>Sets have unique methods for mathematical set operations: union, intersection, and difference.</p>

<h3>Union (All elements from both sets):</h3>
<pre><code>a = {1, 2, 3}
b = {3, 4, 5}

# Two ways to get union
print(a.union(b))    # {1, 2, 3, 4, 5}
print(a | b)         # {1, 2, 3, 4, 5}
</code></pre>

<h3>Intersection (Common elements):</h3>
<pre><code>a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a.intersection(b))  # {3, 4}
print(a & b)              # {3, 4}
</code></pre>

<h3>Difference (In first but not second):</h3>
<pre><code>a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a.difference(b))  # {1, 2}  (in a but not b)
print(a - b)            # {1, 2}

print(b.difference(a))  # {5, 6}  (in b but not a)
print(b - a)            # {5, 6}
</code></pre>

<h3>Symmetric Difference (In one but not both):</h3>
<pre><code>a = {1, 2, 3}
b = {2, 3, 4}

print(a.symmetric_difference(b))  # {1, 4}
print(a ^ b)                      # {1, 4}
</code></pre>

<h3>Practical Example:</h3>
<pre><code># Find students taking both Math and Science
math_students = {"Alice", "Bob", "Charlie", "Diana"}
science_students = {"Bob", "Diana", "Eve", "Frank"}

both = math_students & science_students
print(f"Taking both: {both}")  # {'Bob', 'Diana'}

only_math = math_students - science_students
print(f"Only math: {only_math}")  # {'Alice', 'Charlie'}
</code></pre>`,
          challenge: {
            description: `Create set_a = {1, 2, 3, 4, 5} and set_b = {4, 5, 6, 7, 8}. Print their union (sorted as a list). Print their intersection (sorted as a list). Print elements in set_a but not set_b (sorted as a list).`,
            starterCode: `set_a = {1, 2, 3, 4, 5}\nset_b = {4, 5, 6, 7, 8}\n\n# Print union sorted\n\n# Print intersection sorted\n\n# Print difference (a - b) sorted`,
            expectedOutput: `[1, 2, 3, 4, 5, 6, 7, 8]\n[4, 5]\n[1, 2, 3]`,
            hints: [
              `print(sorted(set_a | set_b)) or print(sorted(set_a.union(set_b)))`,
              `print(sorted(set_a & set_b))`,
              `print(sorted(set_a - set_b))`,
            ]
          },
          quiz: [
            {
              question: `What operator gives the union of two sets?`,
              options: [
                `&`,
                `|`,
                `-`,
                `^`,
              ],
              correct: 1
            },
            {
              question: `What does {1,2,3} & {2,3,4} return?`,
              options: [
                `{1,2,3,4}`,
                `{2,3}`,
                `{1,4}`,
                `{1}`,
              ],
              correct: 1
            },
            {
              question: `What does {1,2,3} - {2,3,4} return?`,
              options: [
                `{1}`,
                `{4}`,
                `{1,2,3,4}`,
                `{2,3}`,
              ],
              correct: 0
            },
            {
              question: `What does symmetric_difference (^) give?`,
              options: [
                `Common elements`,
                `All elements`,
                `Elements in one set but not both`,
                `Empty set`,
              ],
              correct: 2
            },
            {
              question: `{1,2,3}.union({3,4,5}) same as?`,
              options: [`{1,2,3} & {3,4,5}`, `{1,2,3} | {3,4,5}`, `{1,2,3} - {3,4,5}`, `{1,2,3} ^ {3,4,5}`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recap-remove-duplicates',
          title: 'Recap - Remove Duplicates',
          type: 'mastery',
          theory: `<h2>Recap: Remove Duplicates</h2>
<p>One of the most common uses of sets is removing duplicates from data. Sets automatically enforce uniqueness.</p>

<h3>Basic Deduplication:</h3>
<pre><code>numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
unique = list(set(numbers))
print(sorted(unique))  # [1, 2, 3, 4, 5, 6, 9]
</code></pre>

<h3>Preserving Order (Python 3.7+):</h3>
<pre><code>items = ["banana", "apple", "banana", "cherry", "apple"]
seen = set()
unique_ordered = []
for item in items:
    if item not in seen:
        seen.add(item)
        unique_ordered.append(item)
print(unique_ordered)  # ['banana', 'apple', 'cherry']
</code></pre>

<h3>Using dict.fromkeys() to preserve order:</h3>
<pre><code>items = ["banana", "apple", "banana", "cherry", "apple"]
unique = list(dict.fromkeys(items))
print(unique)  # ['banana', 'apple', 'cherry']
</code></pre>

<h3>Finding Duplicates:</h3>
<pre><code>data = [1, 2, 3, 2, 4, 3, 5]
seen = set()
duplicates = set()
for item in data:
    if item in seen:
        duplicates.add(item)
    seen.add(item)
print(duplicates)  # {2, 3}
</code></pre>

<h3>Counting Unique Items:</h3>
<pre><code>words = "the cat sat on the mat the cat".split()
unique_count = len(set(words))
print(f"Total words: {len(words)}")      # 8
print(f"Unique words: {unique_count}")   # 5
</code></pre>`,
          challenge: {
            description: `Given data = [5, 2, 8, 2, 5, 1, 8, 3, 1, 5], remove duplicates and print sorted unique values as a list. Then print how many duplicates were removed (original length minus unique length). Finally, find and print the duplicate values as a sorted list.`,
            starterCode: `data = [5, 2, 8, 2, 5, 1, 8, 3, 1, 5]\n\n# Print sorted unique values\n\n# Print count of removed duplicates\n\n# Find and print duplicate values sorted`,
            expectedOutput: `[1, 2, 3, 5, 8]\n5\n[1, 2, 5, 8]`,
            hints: [
              `unique = sorted(set(data))`,
              `removed = len(data) - len(set(data))`,
              `Find items that appear more than once using a seen set`,
            ]
          },
          quiz: [
            {
              question: `Fastest way to remove duplicates from a list?`,
              options: [
                `Loop with if`,
                `list(set(my_list))`,
                `Using dict`,
                `sorted(my_list)`,
              ],
              correct: 1
            },
            {
              question: `Does set() preserve the original order?`,
              options: [
                `Yes always`,
                `No, sets are unordered`,
                `Only in Python 3`,
                `Only for numbers`,
              ],
              correct: 1
            },
            {
              question: `How to remove duplicates while preserving order?`,
              options: [
                `Use set()`,
                `Use dict.fromkeys()`,
                `Use sorted()`,
                `Not possible`,
              ],
              correct: 1
            },
            {
              question: `len([1,1,2,2,3]) - len(set([1,1,2,2,3])) equals?`,
              options: [
                `0`,
                `2`,
                `3`,
                `5`,
              ],
              correct: 1
            },
          ]
          ,mastery: {
            description: `Given two lists: enrolled = ["Alice", "Bob", "Charlie", "Diana", "Eve"] and completed = ["Bob", "Diana", "Frank"]. Find students who are enrolled but have NOT completed (sorted). Find names in completed but NOT enrolled (sorted). Print both results.`,
            starterCode: `enrolled = ["Alice", "Bob", "Charlie", "Diana", "Eve"]\ncompleted = ["Bob", "Diana", "Frank"]\n\n# Enrolled but not completed\n\n# Completed but not enrolled`,
            expectedOutput: `['Alice', 'Charlie', 'Eve']\n['Frank']`,
            hints: [
              `Convert to sets: set(enrolled) - set(completed)`,
              `sorted(set(enrolled) - set(completed))`,
              `sorted(set(completed) - set(enrolled))`,
            ]
          }
        }
      ]
    },
    {
      id: 'sets-part-2',
      title: 'Sets Part 2',
      lessons: [
        {
          id: 'mathematical-operations-part-1',
          title: 'Mathematical Operations Part 1',
          type: 'challenge',
          theory: `<h2>Mathematical Set Operations Part 1</h2>
<p>Sets in Python directly implement mathematical set theory. These operations create NEW sets without modifying the originals.</p>

<h3>Union - Combining Sets:</h3>
<pre><code>team_a = {"Alice", "Bob", "Charlie"}
team_b = {"Charlie", "Diana", "Eve"}

# All unique members from both teams
all_members = team_a | team_b
print(all_members)
# {'Alice', 'Bob', 'Charlie', 'Diana', 'Eve'}

# Multiple unions
team_c = {"Frank", "Alice"}
everyone = team_a | team_b | team_c
print(len(everyone))  # 6
</code></pre>

<h3>Intersection - Finding Overlap:</h3>
<pre><code>python_devs = {"Alice", "Bob", "Charlie", "Diana"}
java_devs = {"Bob", "Diana", "Eve", "Frank"}

# Who knows both?
both = python_devs & java_devs
print(both)  # {'Bob', 'Diana'}
</code></pre>

<h3>In-Place Operations:</h3>
<pre><code># |= (union update)
skills = {"Python", "SQL"}
skills |= {"JavaScript", "Python"}
print(skills)  # {'Python', 'SQL', 'JavaScript'}

# &= (intersection update)  
required = {"Python", "SQL", "Docker", "AWS"}
my_skills = {"Python", "SQL", "JavaScript", "React"}
my_skills &= required  # Keep only what is required
print(my_skills)  # {'Python', 'SQL'}
</code></pre>

<h3>Practical: Tag System</h3>
<pre><code>post1_tags = {"python", "tutorial", "beginner"}
post2_tags = {"python", "advanced", "algorithms"}

# Common tags
common = post1_tags & post2_tags
print(common)  # {'python'}

# All tags used
all_tags = post1_tags | post2_tags
print(len(all_tags))  # 5
</code></pre>`,
          challenge: {
            description: `Create morning_shift = {"Alice", "Bob", "Charlie"} and evening_shift = {"Charlie", "Diana", "Eve"}. Print all unique workers (union) sorted. Print workers on both shifts (intersection). Print count of workers on only one shift (symmetric difference).`,
            starterCode: `morning_shift = {"Alice", "Bob", "Charlie"}\nevening_shift = {"Charlie", "Diana", "Eve"}\n\n# All workers sorted\n\n# Workers on both shifts\n\n# Count of workers on only one shift`,
            expectedOutput: `['Alice', 'Bob', 'Charlie', 'Diana', 'Eve']\n{'Charlie'}\n4`,
            hints: [
              `print(sorted(morning_shift | evening_shift))`,
              `print(morning_shift & evening_shift)`,
              `print(len(morning_shift ^ evening_shift))`,
            ]
          },
          quiz: [
            {
              question: `What does |= do with sets?`,
              options: [
                `Compares sets`,
                `Adds all elements from right set to left set`,
                `Creates a new set`,
                `Removes elements`,
              ],
              correct: 1
            },
            {
              question: `What does &= do with sets?`,
              options: [
                `Adds elements`,
                `Keeps only elements present in both`,
                `Removes duplicates`,
                `Creates intersection as new set`,
              ],
              correct: 1
            },
            {
              question: `Do set operations modify the original sets?`,
              options: [
                `Yes always`,
                `No, they create new sets (unless using |= or &=)`,
                `Only union modifies`,
                `Only if assigned back`,
              ],
              correct: 1
            },
            {
              question: `{1,2,3} | {3,4,5} gives how many elements?`,
              options: [
                `3`,
                `4`,
                `5`,
                `6`,
              ],
              correct: 2
            },
            {
              question: `Can you union more than 2 sets?`,
              options: [`No`, `Yes: a | b | c`, `Only with method`, `Max 3`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'mathematical-operations-part-2',
          title: 'Mathematical Operations Part 2',
          type: 'challenge',
          theory: `<h2>Mathematical Set Operations Part 2</h2>
<p>Continuing with difference and symmetric difference operations, plus combining multiple operations.</p>

<h3>Difference - Exclusive Elements:</h3>
<pre><code>all_students = {"Alice", "Bob", "Charlie", "Diana", "Eve"}
passed = {"Alice", "Charlie", "Eve"}

# Who failed? (in all but not in passed)
failed = all_students - passed
print(failed)  # {'Bob', 'Diana'}

# Difference is NOT symmetric:
print(passed - all_students)  # set() (empty - all passed are students)
</code></pre>

<h3>Symmetric Difference - XOR:</h3>
<pre><code>set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Elements in one OR the other, but NOT both
xor = set1 ^ set2
print(xor)  # {1, 2, 5, 6}

# Equivalent to:
print((set1 | set2) - (set1 & set2))  # {1, 2, 5, 6}
</code></pre>

<h3>In-Place Difference:</h3>
<pre><code>inventory = {"apple", "banana", "cherry", "date"}
sold_out = {"banana", "date"}

inventory -= sold_out  # Remove sold items
print(inventory)  # {'apple', 'cherry'}
</code></pre>

<h3>Chaining Operations:</h3>
<pre><code>a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7}
c = {5, 6, 7, 8}

# Elements in a but not in b or c
exclusive_a = a - b - c
print(exclusive_a)  # {1, 2, 3}

# Elements common to all three
common_all = a & b & c
print(common_all)  # {5}
</code></pre>

<h3>isdisjoint() - No Common Elements:</h3>
<pre><code>evens = {2, 4, 6, 8}
odds = {1, 3, 5, 7}
print(evens.isdisjoint(odds))  # True (no overlap)

mixed = {1, 2, 3}
print(evens.isdisjoint(mixed))  # False (2 is common)
</code></pre>`,
          challenge: {
            description: `Create all_skills = {"Python", "Java", "SQL", "Docker", "AWS"} and my_skills = {"Python", "SQL", "React", "Node"}. Print skills I need to learn (in all_skills but not my_skills) sorted. Print my extra skills (in my but not all_skills) sorted. Print if my_skills and {"Go", "Rust"} are disjoint.`,
            starterCode: `all_skills = {"Python", "Java", "SQL", "Docker", "AWS"}\nmy_skills = {"Python", "SQL", "React", "Node"}\n\n# Skills to learn (sorted)\n\n# Extra skills (sorted)\n\n# Are my_skills and {"Go", "Rust"} disjoint?`,
            expectedOutput: `['AWS', 'Docker', 'Java']\n['Node', 'React']\nTrue`,
            hints: [
              `to_learn = sorted(all_skills - my_skills)`,
              `extra = sorted(my_skills - all_skills)`,
              `print(my_skills.isdisjoint({"Go", "Rust"}))`,
            ]
          },
          quiz: [
            {
              question: `Is set difference symmetric? (a-b == b-a)?`,
              options: [
                `Yes always`,
                `No, order matters`,
                `Only for equal sets`,
                `Only for numbers`,
              ],
              correct: 1
            },
            {
              question: `What does -= do with sets?`,
              options: [
                `Subtracts numbers`,
                `Removes elements of right set from left`,
                `Error`,
                `Creates new set`,
              ],
              correct: 1
            },
            {
              question: `What does isdisjoint() return?`,
              options: [
                `The disjoint elements`,
                `True if no common elements`,
                `The common elements`,
                `Always True`,
              ],
              correct: 1
            },
            {
              question: `{1,2,3} ^ {2,3,4} equals?`,
              options: [
                `{2,3}`,
                `{1,4}`,
                `{1,2,3,4}`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `{1,2,3}.isdisjoint({4,5,6}) returns?`,
              options: [`True (no overlap)`, `False`, `{1,2,3,4,5,6}`, `Error`],
              correct: 0
            },
          ]
        }
,
        {
          id: 'recap-treasure-hunt',
          title: 'Recap - Treasure Hunt',
          type: 'challenge',
          theory: `<h2>Recap: Treasure Hunt</h2>
<p>Let us practice set operations with a treasure hunt scenario where we track found items, required items, and bonus items.</p>

<h3>Scenario:</h3>
<pre><code>required_items = {"map", "compass", "key", "torch", "rope"}
found_items = {"map", "compass", "gem", "torch", "coin"}

# What do we still need?
still_needed = required_items - found_items
print(f"Still need: {still_needed}")
# Still need: {'key', 'rope'}

# Bonus items found (not required)
bonus = found_items - required_items
print(f"Bonus items: {bonus}")
# Bonus items: {'gem', 'coin'}

# Progress check
progress = len(required_items & found_items)
total = len(required_items)
print(f"Progress: {progress}/{total}")
# Progress: 3/5
</code></pre>

<h3>Multiple Players:</h3>
<pre><code>player1_items = {"sword", "shield", "potion"}
player2_items = {"bow", "potion", "map"}

# Items both players have
shared = player1_items & player2_items
print(f"Shared: {shared}")  # {'potion'}

# All unique items between players
combined = player1_items | player2_items
print(f"Combined: {len(combined)} items")  # 5 items
</code></pre>`,
          challenge: {
            description: `required = {"sword", "shield", "potion", "map", "key"} and collected = {"sword", "potion", "gem", "map", "coin"}. Print items still needed (sorted). Print bonus items collected (sorted). Print completion percentage as integer (items found from required / total required * 100).`,
            starterCode: `required = {"sword", "shield", "potion", "map", "key"}\ncollected = {"sword", "potion", "gem", "map", "coin"}\n\n# Items still needed sorted\n\n# Bonus items sorted\n\n# Completion percentage`,
            expectedOutput: `['key', 'shield']\n['coin', 'gem']\n60`,
            hints: [
              `still_needed = sorted(required - collected)`,
              `bonus = sorted(collected - required)`,
              `pct = len(required & collected) * 100 // len(required)`,
            ]
          },
          quiz: [
            {
              question: `How to find elements in A but not in B?`,
              options: [
                `A & B`,
                `A | B`,
                `A - B`,
                `A ^ B`,
              ],
              correct: 2
            },
            {
              question: `How to calculate progress (found required items)?`,
              options: [
                `len(required)`,
                `len(found & required)`,
                `len(found | required)`,
                `len(found - required)`,
              ],
              correct: 1
            },
            {
              question: `What are "bonus" items in this context?`,
              options: [
                `Items in required`,
                `Items in found but not required`,
                `Items in both`,
                `All items`,
              ],
              correct: 1
            },
          ]
        }
,
        {
          id: 'subsets-and-supersets',
          title: 'Subsets and Supersets',
          type: 'challenge',
          theory: `<h2>Subsets and Supersets</h2>
<p>A <strong>subset</strong> is a set where ALL its elements are contained in another set. A <strong>superset</strong> is the opposite — it contains all elements of another set.</p>

<h3>Subset Check:</h3>
<pre><code>small = {1, 2, 3}
big = {1, 2, 3, 4, 5}

print(small.issubset(big))   # True
print(small <= big)          # True (operator version)

print(big.issubset(small))   # False
</code></pre>

<h3>Superset Check:</h3>
<pre><code>print(big.issuperset(small))  # True
print(big >= small)           # True

print(small.issuperset(big))  # False
</code></pre>

<h3>Proper Subset/Superset:</h3>
<pre><code># Proper subset: subset but NOT equal
a = {1, 2, 3}
b = {1, 2, 3}
c = {1, 2, 3, 4}

print(a <= b)   # True (subset or equal)
print(a < b)    # False (not proper subset - they are equal)
print(a < c)    # True (proper subset)
</code></pre>

<h3>Practical Example - Permission System:</h3>
<pre><code>admin_permissions = {"read", "write", "delete", "manage"}
editor_permissions = {"read", "write"}
viewer_permissions = {"read"}

# Check if viewer has subset of editor permissions
print(viewer_permissions <= editor_permissions)  # True
print(editor_permissions <= admin_permissions)   # True

# Check required permissions
required = {"read", "write"}
user_perms = {"read", "write", "delete"}
has_access = required <= user_perms
print(f"Access granted: {has_access}")  # True
</code></pre>`,
          challenge: {
            description: `Create basics = {"read", "write"} and admin = {"read", "write", "delete", "manage"}. Check if basics is a subset of admin and print. Check if admin is a superset of basics and print. Check if basics is a proper subset of admin (using <) and print.`,
            starterCode: `basics = {"read", "write"}\nadmin = {"read", "write", "delete", "manage"}\n\n# Is basics subset of admin?\n\n# Is admin superset of basics?\n\n# Is basics proper subset of admin?`,
            expectedOutput: `True\nTrue\nTrue`,
            hints: [
              `print(basics.issubset(admin)) or print(basics <= admin)`,
              `print(admin.issuperset(basics)) or print(admin >= basics)`,
              `print(basics < admin) for proper subset`,
            ]
          },
          quiz: [
            {
              question: `What does A.issubset(B) check?`,
              options: [
                `A contains all of B`,
                `All elements of A are in B`,
                `A and B are equal`,
                `A and B have no common elements`,
              ],
              correct: 1
            },
            {
              question: `What is the difference between <= and < for sets?`,
              options: [
                `No difference`,
                `<= allows equal sets, < requires strict subset`,
                `< is faster`,
                `<= checks values, < checks types`,
              ],
              correct: 1
            },
            {
              question: `{1,2} <= {1,2} is?`,
              options: [
                `True`,
                `False`,
                `Error`,
                `None`,
              ],
              correct: 0
            },
            {
              question: `{1,2} < {1,2} is?`,
              options: [
                `True`,
                `False`,
                `Error`,
                `None`,
              ],
              correct: 1
            },
            {
              question: `set() <= {1,2,3} returns?`,
              options: [`True (empty set is subset of everything)`, `False`, `Error`, `None`],
              correct: 0
            },
          ]
        }
,
        {
          id: 'iterating-over-sets',
          title: 'Iterating Over Sets',
          type: 'challenge',
          theory: `<h2>Iterating Over Sets</h2>
<p>You can loop through sets just like lists, but remember: the order is not guaranteed (though CPython tends to maintain insertion order for small sets).</p>

<h3>Basic Iteration:</h3>
<pre><code>colors = {"red", "green", "blue"}
for color in colors:
    print(color)
# Output order may vary!
</code></pre>

<h3>Sorted Iteration:</h3>
<pre><code>numbers = {5, 2, 8, 1, 9}
for n in sorted(numbers):
    print(n)
# 1, 2, 5, 8, 9 (guaranteed order)
</code></pre>

<h3>With Enumerate:</h3>
<pre><code>fruits = {"apple", "banana", "cherry"}
for i, fruit in enumerate(sorted(fruits), 1):
    print(f"{i}. {fruit}")
# 1. apple
# 2. banana
# 3. cherry
</code></pre>

<h3>Filtering During Iteration:</h3>
<pre><code>scores = {85, 92, 67, 45, 78, 93, 55}
high_scores = set()
for score in scores:
    if score >= 80:
        high_scores.add(score)
print(sorted(high_scores))  # [85, 92, 93]
</code></pre>

<h3>Set Comprehension:</h3>
<pre><code># Create sets with comprehension syntax
squares = {x**2 for x in range(1, 6)}
print(squares)  # {1, 4, 9, 16, 25}

# With condition
evens = {x for x in range(10) if x % 2 == 0}
print(evens)  # {0, 2, 4, 6, 8}
</code></pre>

<h3>Converting While Iterating:</h3>
<pre><code>names = {"alice", "BOB", "Charlie"}
normalized = {name.lower() for name in names}
print(normalized)  # {'alice', 'bob', 'charlie'}
</code></pre>`,
          challenge: {
            description: `Create scores = {72, 85, 91, 68, 55, 88, 43}. Iterate through sorted scores and print each. Then use set comprehension to create passing_scores containing only scores >= 60 and print it sorted as a list.`,
            starterCode: `scores = {72, 85, 91, 68, 55, 88, 43}\n\n# Print each score sorted\n\n# Set comprehension for passing scores\n\n# Print passing sorted as list`,
            expectedOutput: `43\n55\n68\n72\n85\n88\n91\n[68, 72, 85, 88, 91]`,
            hints: [
              `for score in sorted(scores): print(score)`,
              `passing_scores = {s for s in scores if s >= 60}`,
              `print(sorted(passing_scores))`,
            ]
          },
          quiz: [
            {
              question: `Is the iteration order of a set guaranteed?`,
              options: [
                `Yes, always sorted`,
                `Yes, insertion order`,
                `No, unordered`,
                `Only for strings`,
              ],
              correct: 2
            },
            {
              question: `How to iterate a set in sorted order?`,
              options: [
                `set.sort()`,
                `for x in sorted(set)`,
                `set.order()`,
                `Not possible`,
              ],
              correct: 1
            },
            {
              question: `What does {x**2 for x in range(4)} create?`,
              options: [
                `[0, 1, 4, 9]`,
                `{0, 1, 4, 9}`,
                `(0, 1, 4, 9)`,
                `{0: 0, 1: 1, 2: 4, 3: 9}`,
              ],
              correct: 1
            },
            {
              question: `What is a set comprehension?`,
              options: [
                `A way to read sets`,
                `A concise way to create sets with {}`,
                `A set method`,
                `A loop type`,
              ],
              correct: 1
            },
            {
              question: `{x for x in "hello"} returns?`,
              options: [`{'hello'}`, `{'h','e','l','o'}`, `['h','e','l','l','o']`, `Error`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recap-tournament-tracker',
          title: 'Recap - Tournament Tracker',
          type: 'mastery',
          theory: `<h2>Recap: Tournament Tracker</h2>
<p>Let us combine all set operations to build a tournament tracking system.</p>

<h3>Scenario:</h3>
<pre><code>registered = {"Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"}
round1_players = {"Alice", "Bob", "Charlie", "Diana"}
round2_players = {"Alice", "Charlie", "Diana"}
winners = {"Alice", "Diana"}

# Who did not play in round 1?
no_shows = registered - round1_players
print(f"No-shows: {sorted(no_shows)}")

# Who was eliminated in round 1?
eliminated_r1 = round1_players - round2_players
print(f"Eliminated R1: {sorted(eliminated_r1)}")

# Players in both rounds
veterans = round1_players & round2_players
print(f"Both rounds: {sorted(veterans)}")
</code></pre>

<h3>Statistics:</h3>
<pre><code># Participation rate
rate = len(round1_players) / len(registered) * 100
print(f"Participation: {rate:.0f}%")

# Is winners a subset of round2?
print(winners <= round2_players)  # True
</code></pre>`,
          challenge: {
            description: `Given registered = {"Alice", "Bob", "Charlie", "Diana", "Eve"}, played = {"Alice", "Bob", "Diana", "Eve"}, and advanced = {"Alice", "Eve"}. Print who did not play (sorted). Print who was eliminated (played but did not advance, sorted). Print if advanced is a subset of played.`,
            starterCode: `registered = {"Alice", "Bob", "Charlie", "Diana", "Eve"}\nplayed = {"Alice", "Bob", "Diana", "Eve"}\nadvanced = {"Alice", "Eve"}\n\n# Did not play (sorted)\n\n# Eliminated (sorted)\n\n# Is advanced subset of played?`,
            expectedOutput: `['Charlie']\n['Bob', 'Diana']\nTrue`,
            hints: [
              `print(sorted(registered - played))`,
              `print(sorted(played - advanced))`,
              `print(advanced <= played) or print(advanced.issubset(played))`,
            ]
          },
          quiz: [
            {
              question: `How to find eliminated players (played but did not advance)?`,
              options: [
                `played & advanced`,
                `played | advanced`,
                `played - advanced`,
                `advanced - played`,
              ],
              correct: 2
            },
            {
              question: `How to check if all winners actually played?`,
              options: [
                `winners == played`,
                `winners <= played`,
                `winners >= played`,
                `winners & played`,
              ],
              correct: 1
            },
            {
              question: `Participation rate formula?`,
              options: [
                `len(played) / len(registered) * 100`,
                `len(registered) / len(played)`,
                `len(played) + len(registered)`,
                `len(played & registered)`,
              ],
              correct: 0
            },
            {
              question: `sorted() on a set returns what type?`,
              options: [
                `A set`,
                `A list`,
                `A tuple`,
                `A string`,
              ],
              correct: 1
            },
          ]
          ,mastery: {
            description: `Simulate a 3-round tournament. round1 = {"A","B","C","D","E","F","G","H"}, round2 = {"A","C","E","G"}, round3 = {"A","E"}. Print eliminated in each round (sorted). Print the champion (final round winner that we will say is "A"). Print total unique participants.`,
            starterCode: `round1 = {"A","B","C","D","E","F","G","H"}\nround2 = {"A","C","E","G"}\nround3 = {"A","E"}\nchampion = {"A"}\n\n# Eliminated in round 1 (sorted)\n\n# Eliminated in round 2 (sorted)\n\n# Eliminated in round 3 (sorted)\n\n# Print champion\n\n# Total participants`,
            expectedOutput: `['B', 'D', 'F', 'H']\n['C', 'G']\n['E']\n{'A'}\n8`,
            hints: [
              `eliminated_r1 = sorted(round1 - round2)`,
              `eliminated_r2 = sorted(round2 - round3)`,
              `eliminated_r3 = sorted(round3 - champion)`,
            ]
          }
        }
      ]
    },
    {
      id: 'student-records-manager',
      title: 'Student Records Manager',
      lessons: [
        {
          id: 'project-overview-student',
          title: 'Project Overview',
          type: 'project',
          theory: `<h2>Project: Student Records Manager</h2>
<p>We are building a Student Records Manager that tracks students, their courses, and grades. This project combines dictionaries, sets, lists, and functions.</p>

<h3>Data Structure:</h3>
<pre><code># Each student has: name, courses (set), grades (dict of course: list)
students = {
    "Alice": {
        "courses": {"Math", "Science"},
        "grades": {"Math": [90, 85, 92], "Science": [88, 91]}
    }
}
</code></pre>

<h3>Functions We Will Build:</h3>
<ol>
<li><strong>add_student()</strong> - Register a new student</li>
<li><strong>add_grade()</strong> - Add a grade for a course</li>
<li><strong>is_enrolled()</strong> - Check if student takes a course</li>
<li><strong>average_grade()</strong> - Calculate course average</li>
<li><strong>list_by_course()</strong> - Find all students in a course</li>
<li><strong>top_students()</strong> - Find highest-performing students</li>
</ol>

<h3>Why This Design?</h3>
<ul>
<li>Sets for courses — no duplicate enrollments</li>
<li>Dictionary for grades — easy lookup by course</li>
<li>Lists for grade values — multiple grades per course</li>
</ul>`,
          challenge: {
            description: `Create the initial data structure. Make an empty dictionary called students. Add "Alice" with courses {"Math", "Science"} and grades {"Math": [90, 85], "Science": [88]}. Add "Bob" with courses {"Math", "English"} and grades {"Math": [75, 80], "English": [92]}. Print the number of students and Alice courses.`,
            starterCode: `# Create students dictionary\nstudents = {}\n\n# Add Alice\n\n# Add Bob\n\n# Print number of students\n\n# Print Alice courses`,
            expectedOutput: `2\n{'Math', 'Science'}`,
            hints: [
              `students["Alice"] = {"courses": {"Math", "Science"}, "grades": {"Math": [90, 85], "Science": [88]}}`,
              `print(len(students))`,
              `print(students["Alice"]["courses"])`,
            ]
          },
          quiz: [
            {
              question: `Why use a set for courses?`,
              options: [
                `Sets are faster`,
                `No duplicate enrollments`,
                `Sets are ordered`,
                `Required by Python`,
              ],
              correct: 1
            },
            {
              question: `Why use a list for grades?`,
              options: [
                `Lists are immutable`,
                `Multiple grades per course need ordering`,
                `Lists prevent duplicates`,
                `Required for numbers`,
              ],
              correct: 1
            },
            {
              question: `How many levels of nesting does this structure have?`,
              options: [
                `1`,
                `2`,
                `3`,
                `4`,
              ],
              correct: 2
            },
            {
              question: `What operation is O(1) on sets but O(n) on lists?`,
              options: [`Append`, `Membership check (in)`, `Iteration`, `Length`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-add-student',
          title: 'Add Student',
          type: 'project',
          theory: `<h2>Student Records: Add Student</h2>
<p>The add_student function registers a new student with an initial course enrollment.</p>

<h3>Implementation:</h3>
<pre><code>def add_student(students, name, course):
    if name in students:
        # Student exists, just add the course
        students[name]["courses"].add(course)
        if course not in students[name]["grades"]:
            students[name]["grades"][course] = []
        print(f"{name} enrolled in {course}")
    else:
        # New student
        students[name] = {
            "courses": {course},
            "grades": {course: []}
        }
        print(f"Added {name}, enrolled in {course}")
</code></pre>

<h3>Key Points:</h3>
<ul>
<li>If student exists, add the course to their set</li>
<li>If new student, create full record structure</li>
<li>Initialize empty grade list for the course</li>
<li>courses.add() works because courses is a set</li>
</ul>`,
          challenge: {
            description: `Create add_student(students, name, course). If student exists, add course and print "[name] enrolled in [course]". If new, create record and print "Added [name], enrolled in [course]". Test: add Alice to Math, then add Alice to Science, then add Bob to English.`,
            starterCode: `def add_student(students, name, course):\n    pass\n\nstudents = {}\nadd_student(students, "Alice", "Math")\nadd_student(students, "Alice", "Science")\nadd_student(students, "Bob", "English")`,
            expectedOutput: `Added Alice, enrolled in Math\nAlice enrolled in Science\nAdded Bob, enrolled in English`,
            hints: [
              `if name in students: add course with .add()`,
              `else: create new dict with courses as set and grades as dict`,
              `Initialize grades[course] = [] for new courses`,
            ]
          },
          quiz: [
            {
              question: `Why use set.add() for courses?`,
              options: [
                `It is faster`,
                `Automatically prevents duplicate enrollment`,
                `Required for strings`,
                `It returns True/False`,
              ],
              correct: 1
            },
            {
              question: `Why initialize grades[course] = []?`,
              options: [
                `Required syntax`,
                `Ready to append grades later`,
                `Creates a set`,
                `Prevents KeyError`,
              ],
              correct: 1
            },
            {
              question: `What data type is courses in this design?`,
              options: [
                `list`,
                `dict`,
                `set`,
                `tuple`,
              ],
              correct: 2
            },
            {
              question: `What does {course} create?`,
              options: [`A list with one item`, `A set with one item`, `A dict with one key`, `A tuple`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-add-grade',
          title: 'Add Grade',
          type: 'project',
          theory: `<h2>Student Records: Add Grade</h2>
<p>The add_grade function records a grade for a specific student and course, validating that both exist.</p>

<h3>Implementation:</h3>
<pre><code>def add_grade(students, name, course, grade):
    if name not in students:
        print(f"Student '{name}' not found!")
        return False
    if course not in students[name]["courses"]:
        print(f"{name} is not enrolled in {course}!")
        return False
    students[name]["grades"][course].append(grade)
    print(f"Added grade {grade} for {name} in {course}")
    return True
</code></pre>

<h3>Validation Chain:</h3>
<ol>
<li>Check if student exists</li>
<li>Check if student is enrolled in that course</li>
<li>Only then add the grade</li>
</ol>

<h3>Usage:</h3>
<pre><code>students = {"Alice": {"courses": {"Math"}, "grades": {"Math": [90]}}}
add_grade(students, "Alice", "Math", 85)
# Added grade 85 for Alice in Math
# Now: students["Alice"]["grades"]["Math"] == [90, 85]
</code></pre>`,
          challenge: {
            description: `Create add_grade(students, name, course, grade). Validate student exists and is enrolled. Test with pre-built data: add grade 95 for Alice in Math, try adding grade for Bob (not found), try adding grade for Alice in History (not enrolled).`,
            starterCode: `def add_grade(students, name, course, grade):\n    pass\n\nstudents = {\n    "Alice": {"courses": {"Math", "Science"}, "grades": {"Math": [90], "Science": [88]}}\n}\nadd_grade(students, "Alice", "Math", 95)\nadd_grade(students, "Bob", "Math", 80)\nadd_grade(students, "Alice", "History", 75)`,
            expectedOutput: `Added grade 95 for Alice in Math\nStudent 'Bob' not found!\nAlice is not enrolled in History!`,
            hints: [
              `First check: if name not in students`,
              `Second check: if course not in students[name]["courses"]`,
              `students[name]["grades"][course].append(grade)`,
            ]
          },
          quiz: [
            {
              question: `Why check enrollment before adding a grade?`,
              options: [
                `Performance`,
                `Prevent grades for wrong courses`,
                `Required`,
                `Grades need courses`,
              ],
              correct: 1
            },
            {
              question: `What method adds to the grade list?`,
              options: [
                `add()`,
                `append()`,
                `insert()`,
                `push()`,
              ],
              correct: 1
            },
            {
              question: `How many validations before adding a grade?`,
              options: [
                `0`,
                `1`,
                `2`,
                `3`,
              ],
              correct: 2
            },
            {
              question: `What does list.append(x) return?`,
              options: [`The new list`, `The added item`, `None (modifies in place)`, `True/False`],
              correct: 2
            },
          ]
        }
,
        {
          id: 'project-is-enrolled',
          title: 'Is Enrolled',
          type: 'project',
          theory: `<h2>Student Records: Is Enrolled</h2>
<p>A utility function that checks whether a student is enrolled in a specific course. Simple but essential for other functions.</p>

<h3>Implementation:</h3>
<pre><code>def is_enrolled(students, name, course):
    if name not in students:
        return False
    return course in students[name]["courses"]
</code></pre>

<h3>Usage:</h3>
<pre><code>students = {
    "Alice": {"courses": {"Math", "Science"}, "grades": {}}
}

print(is_enrolled(students, "Alice", "Math"))     # True
print(is_enrolled(students, "Alice", "History"))  # False
print(is_enrolled(students, "Bob", "Math"))       # False
</code></pre>

<h3>Using in Other Functions:</h3>
<pre><code>def add_grade_v2(students, name, course, grade):
    if not is_enrolled(students, name, course):
        print(f"Cannot add grade - not enrolled")
        return False
    students[name]["grades"][course].append(grade)
    return True
</code></pre>

<p>Helper functions like this keep code DRY (Do not Repeat Yourself) and make logic reusable.</p>`,
          challenge: {
            description: `Create is_enrolled(students, name, course) that returns True/False. Test with Alice (enrolled in Math and Science): check Math (True), History (False), and check Bob who does not exist (False). Print each result.`,
            starterCode: `def is_enrolled(students, name, course):\n    pass\n\nstudents = {\n    "Alice": {"courses": {"Math", "Science"}, "grades": {"Math": [], "Science": []}}\n}\nprint(is_enrolled(students, "Alice", "Math"))\nprint(is_enrolled(students, "Alice", "History"))\nprint(is_enrolled(students, "Bob", "Math"))`,
            expectedOutput: `True\nFalse\nFalse`,
            hints: [
              `if name not in students: return False`,
              `return course in students[name]["courses"]`,
              `The "in" operator works on sets`,
            ]
          },
          quiz: [
            {
              question: `Why create a separate is_enrolled function?`,
              options: [
                `Required`,
                `Reusable check, keeps code DRY`,
                `Faster execution`,
                `Better error messages`,
              ],
              correct: 1
            },
            {
              question: `What does "course in set" check?`,
              options: [
                `Position`,
                `Membership (is element in set)`,
                `Count`,
                `Type`,
              ],
              correct: 1
            },
            {
              question: `What does DRY stand for?`,
              options: [
                `Do Repeat Yourself`,
                `Do not Repeat Yourself`,
                `Data Ready Yet`,
                `Dynamic Runtime Yield`,
              ],
              correct: 1
            },
            {
              question: `What is a utility/helper function?`,
              options: [`Main function`, `A small reusable function for common operations`, `A built-in function`, `A lambda function`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-average-grade',
          title: 'Average Grade',
          type: 'project',
          theory: `<h2>Student Records: Average Grade</h2>
<p>Calculate the average grade for a student in a specific course or across all courses.</p>

<h3>Per-Course Average:</h3>
<pre><code>def average_grade(students, name, course=None):
    if name not in students:
        print(f"Student '{name}' not found!")
        return None
    
    if course:
        # Average for specific course
        grades = students[name]["grades"].get(course, [])
        if not grades:
            return 0
        return round(sum(grades) / len(grades), 1)
    else:
        # Overall average across all courses
        all_grades = []
        for grade_list in students[name]["grades"].values():
            all_grades.extend(grade_list)
        if not all_grades:
            return 0
        return round(sum(all_grades) / len(all_grades), 1)
</code></pre>

<h3>Usage:</h3>
<pre><code>students = {
    "Alice": {
        "courses": {"Math", "Science"},
        "grades": {"Math": [90, 85, 92], "Science": [88, 91, 87]}
    }
}

print(average_grade(students, "Alice", "Math"))  # 89.0
print(average_grade(students, "Alice"))          # 88.8
</code></pre>`,
          challenge: {
            description: `Create average_grade(students, name, course) that returns the rounded average (1 decimal). If course given, average that course grades. Test: get Alice Math average (grades [90, 85, 95]) and Science average (grades [88, 92]). Print both.`,
            starterCode: `def average_grade(students, name, course):\n    pass\n\nstudents = {\n    "Alice": {\n        "courses": {"Math", "Science"},\n        "grades": {"Math": [90, 85, 95], "Science": [88, 92]}\n    }\n}\nprint(average_grade(students, "Alice", "Math"))\nprint(average_grade(students, "Alice", "Science"))`,
            expectedOutput: `90.0\n90.0`,
            hints: [
              `grades = students[name]["grades"][course]`,
              `return round(sum(grades) / len(grades), 1)`,
              `Check if name exists and course has grades`,
            ]
          },
          quiz: [
            {
              question: `How to calculate average of a list?`,
              options: [
                `avg(list)`,
                `sum(list) / len(list)`,
                `list.average()`,
                `mean(list)`,
              ],
              correct: 1
            },
            {
              question: `What does .extend() do vs .append()?`,
              options: [
                `Same thing`,
                `extend adds each element, append adds the whole list as one element`,
                `extend is faster`,
                `append adds multiple items`,
              ],
              correct: 1
            },
            {
              question: `Why check "if not grades" before calculating average?`,
              options: [
                `Style preference`,
                `Prevent division by zero`,
                `Required`,
                `Faster`,
              ],
              correct: 1
            },
            {
              question: `What does dict.values() return?`,
              options: [`A list`, `A view object of all values`, `A tuple`, `A set`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-list-by-course',
          title: 'List by Course',
          type: 'project',
          theory: `<h2>Student Records: List by Course</h2>
<p>Find all students enrolled in a specific course. This requires iterating through all students and checking their course sets.</p>

<h3>Implementation:</h3>
<pre><code>def list_by_course(students, course):
    enrolled = []
    for name, info in students.items():
        if course in info["courses"]:
            enrolled.append(name)
    return sorted(enrolled)
</code></pre>

<h3>Usage:</h3>
<pre><code>students = {
    "Alice": {"courses": {"Math", "Science"}, "grades": {}},
    "Bob": {"courses": {"Math", "English"}, "grades": {}},
    "Charlie": {"courses": {"Science", "English"}, "grades": {}}
}

math_students = list_by_course(students, "Math")
print(math_students)  # ['Alice', 'Bob']

science_students = list_by_course(students, "Science")
print(science_students)  # ['Alice', 'Charlie']
</code></pre>

<h3>Enhanced Version with Grades:</h3>
<pre><code>def list_by_course_detailed(students, course):
    result = []
    for name, info in students.items():
        if course in info["courses"]:
            avg = sum(info["grades"].get(course, [0])) / max(len(info["grades"].get(course, [1])), 1)
            result.append((name, round(avg, 1)))
    return sorted(result)
</code></pre>`,
          challenge: {
            description: `Create list_by_course(students, course) that returns a sorted list of student names enrolled in that course. Test with 3 students and print who is in "Math" and who is in "English".`,
            starterCode: `def list_by_course(students, course):\n    pass\n\nstudents = {\n    "Alice": {"courses": {"Math", "Science"}, "grades": {}},\n    "Bob": {"courses": {"Math", "English"}, "grades": {}},\n    "Charlie": {"courses": {"Science", "English"}, "grades": {}}\n}\nprint(list_by_course(students, "Math"))\nprint(list_by_course(students, "English"))`,
            expectedOutput: `['Alice', 'Bob']\n['Bob', 'Charlie']`,
            hints: [
              `Loop through students.items()`,
              `Check if course in info["courses"]`,
              `Return sorted(enrolled)`,
            ]
          },
          quiz: [
            {
              question: `Why return sorted list?`,
              options: [
                `Required`,
                `Consistent, predictable output`,
                `Faster`,
                `Sets require sorting`,
              ],
              correct: 1
            },
            {
              question: `How to check if a course is in a student record?`,
              options: [
                `course in students[name]`,
                `course in students[name]["courses"]`,
                `students[name].has(course)`,
                `students.find(course)`,
              ],
              correct: 1
            },
            {
              question: `What pattern is "loop through all, filter by condition"?`,
              options: [
                `Map`,
                `Filter/Search`,
                `Reduce`,
                `Sort`,
              ],
              correct: 1
            },
            {
              question: `What is the filter pattern used here?`,
              options: [`map`, `Loop + condition + append`, `recursion`, `lambda`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-top-students',
          title: 'Top Students',
          type: 'project',
          theory: `<h2>Student Records: Top Students</h2>
<p>Find the top-performing students based on their overall grade averages. This combines iteration, aggregation, and sorting.</p>

<h3>Implementation:</h3>
<pre><code>def top_students(students, n=3):
    averages = []
    for name, info in students.items():
        all_grades = []
        for grade_list in info["grades"].values():
            all_grades.extend(grade_list)
        if all_grades:
            avg = round(sum(all_grades) / len(all_grades), 1)
            averages.append((name, avg))
    
    # Sort by average descending
    averages.sort(key=lambda x: x[1], reverse=True)
    return averages[:n]
</code></pre>

<h3>Usage:</h3>
<pre><code>result = top_students(students, 2)
for name, avg in result:
    print(f"{name}: {avg}")
# Alice: 91.2
# Charlie: 88.5
</code></pre>

<h3>Key Techniques:</h3>
<ul>
<li><strong>extend()</strong> - flatten grade lists into one</li>
<li><strong>lambda sort</strong> - sort tuples by second element</li>
<li><strong>slicing [:n]</strong> - get top N results</li>
</ul>`,
          challenge: {
            description: `Create top_students(students, n) returning top n students as list of (name, average) tuples sorted by average descending. Test with 3 students and print top 2.`,
            starterCode: `def top_students(students, n):\n    pass\n\nstudents = {\n    "Alice": {"courses": {"Math"}, "grades": {"Math": [90, 95, 88]}},\n    "Bob": {"courses": {"Math"}, "grades": {"Math": [75, 80, 70]}},\n    "Charlie": {"courses": {"Math"}, "grades": {"Math": [85, 88, 92]}}\n}\nresult = top_students(students, 2)\nfor name, avg in result:\n    print(f"{name}: {avg}")`,
            expectedOutput: `Alice: 91.0\nCharlie: 88.3`,
            hints: [
              `Calculate average for each student using sum/len`,
              `Store as (name, avg) tuples in a list`,
              `Sort by avg descending: .sort(key=lambda x: x[1], reverse=True)`,
            ]
          },
          quiz: [
            {
              question: `What does list.sort(key=lambda x: x[1], reverse=True) do?`,
              options: [
                `Sorts by first element ascending`,
                `Sorts by second element descending`,
                `Reverses the list`,
                `Sorts alphabetically`,
              ],
              correct: 1
            },
            {
              question: `What does [:n] do on a sorted list?`,
              options: [
                `Gets last n elements`,
                `Gets first n elements`,
                `Removes n elements`,
                `Skips n elements`,
              ],
              correct: 1
            },
            {
              question: `What does extend() do vs append()?`,
              options: [
                `Same thing`,
                `Adds elements individually vs as one item`,
                `extend is for sets`,
                `append is deprecated`,
              ],
              correct: 1
            },
            {
              question: `What does list[:n] do?`,
              options: [`Gets last n items`, `Gets first n items`, `Removes n items`, `Gets every nth item`],
              correct: 1
            },
          ]
        }
      ]
    },
    {
      id: 'advanced-data-aggregation',
      title: 'Advanced Data Aggregation',
      lessons: [
        {
          id: 'using-sum',
          title: 'Using Sum',
          type: 'challenge',
          theory: `<h2>Using Sum</h2>
<p>Python built-in <code>sum()</code> function adds up all elements in an iterable. It is more Pythonic and efficient than manual loops.</p>

<h3>Basic Usage:</h3>
<pre><code>numbers = [10, 20, 30, 40, 50]
total = sum(numbers)
print(total)  # 150

# With a start value
total_with_base = sum(numbers, 100)
print(total_with_base)  # 250 (100 + 150)
</code></pre>

<h3>With Different Iterables:</h3>
<pre><code># Tuples
print(sum((1, 2, 3)))  # 6

# Sets
print(sum({5, 10, 15}))  # 30

# Range
print(sum(range(1, 11)))  # 55 (1+2+...+10)

# Generator expression
print(sum(x**2 for x in range(1, 5)))  # 30 (1+4+9+16)
</code></pre>

<h3>Practical Examples:</h3>
<pre><code># Shopping cart total
prices = [9.99, 14.50, 3.25, 7.99]
total = round(sum(prices), 2)
print(f"Total: ${total}")  # Total: $35.73

# Sum of dictionary values
sales = {"Mon": 150, "Tue": 200, "Wed": 180}
weekly = sum(sales.values())
print(f"Weekly sales: ${weekly}")  # Weekly sales: $530

# Conditional sum with generator
numbers = [1, -2, 3, -4, 5, -6]
pos_sum = sum(n for n in numbers if n > 0)
print(pos_sum)  # 9
</code></pre>

<h3>Average Pattern:</h3>
<pre><code>data = [85, 92, 78, 95, 88]
average = sum(data) / len(data)
print(round(average, 1))  # 87.6
</code></pre>`,
          challenge: {
            description: `Given expenses = {"rent": 1200, "food": 400, "transport": 150, "utilities": 100, "entertainment": 200}, calculate and print total expenses. Then calculate sum of only expenses over 200 and print it. Print the average expense rounded to 1 decimal.`,
            starterCode: `expenses = {"rent": 1200, "food": 400, "transport": 150, "utilities": 100, "entertainment": 200}\n\n# Total expenses\n\n# Sum of expenses over 200\n\n# Average expense`,
            expectedOutput: `2050\n1600\n410.0`,
            hints: [
              `total = sum(expenses.values())`,
              `over_200 = sum(v for v in expenses.values() if v > 200)`,
              `avg = round(sum(expenses.values()) / len(expenses), 1)`,
            ]
          },
          quiz: [
            {
              question: `What does sum([1,2,3], 10) return?`,
              options: [
                `6`,
                `16`,
                `10`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `Can sum() work with dictionary values?`,
              options: [
                `No`,
                `Yes, using sum(dict.values())`,
                `Only with numbers`,
                `Only with list()`,
              ],
              correct: 1
            },
            {
              question: `What does sum(x for x in [1,-2,3] if x>0) return?`,
              options: [
                `2`,
                `4`,
                `6`,
                `1`,
              ],
              correct: 1
            },
            {
              question: `Can sum() add strings?`,
              options: [
                `Yes`,
                `No, use "".join() for strings`,
                `Only with start=""`,
                `Only single characters`,
              ],
              correct: 1
            },
            {
              question: `sum(range(1,6)) equals?`,
              options: [`10`, `15`, `21`, `6`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'finding-min-max',
          title: 'Finding Minimum and Maximum',
          type: 'challenge',
          theory: `<h2>Finding Minimum and Maximum</h2>
<p>Python provides <code>min()</code> and <code>max()</code> built-in functions that work on any iterable of comparable elements.</p>

<h3>Basic Usage:</h3>
<pre><code>numbers = [34, 12, 89, 5, 67]
print(min(numbers))  # 5
print(max(numbers))  # 89

# With strings (alphabetical)
words = ["banana", "apple", "cherry"]
print(min(words))  # apple
print(max(words))  # cherry
</code></pre>

<h3>With key Parameter:</h3>
<pre><code># Find shortest/longest string
names = ["Alice", "Bob", "Christopher", "Diana"]
shortest = min(names, key=len)
longest = max(names, key=len)
print(shortest)  # Bob
print(longest)   # Christopher

# Find dict with max value
students = {"Alice": 92, "Bob": 85, "Charlie": 95}
top = max(students, key=students.get)
print(top)  # Charlie
</code></pre>

<h3>With Multiple Arguments:</h3>
<pre><code>print(min(5, 3, 8, 1))   # 1
print(max(5, 3, 8, 1))   # 8
</code></pre>

<h3>With Dictionaries:</h3>
<pre><code>prices = {"laptop": 999, "phone": 699, "tablet": 449}

cheapest = min(prices, key=prices.get)
most_expensive = max(prices, key=prices.get)
print(f"Cheapest: {cheapest} (${prices[cheapest]})")
print(f"Priciest: {most_expensive} (${prices[most_expensive]})")
</code></pre>

<h3>Default for Empty:</h3>
<pre><code># Avoid error on empty iterables
print(min([], default=0))   # 0
print(max([], default=0))   # 0
</code></pre>`,
          challenge: {
            description: `Given temps = {"Mon": 72, "Tue": 68, "Wed": 75, "Thu": 80, "Fri": 65}, find and print the hottest day name and temp, then the coldest day name and temp. Format: "Hottest: Day (temp)" and "Coldest: Day (temp)".`,
            starterCode: `temps = {"Mon": 72, "Tue": 68, "Wed": 75, "Thu": 80, "Fri": 65}\n\n# Find and print hottest day\n\n# Find and print coldest day`,
            expectedOutput: `Hottest: Thu (80)\nColdest: Fri (65)`,
            hints: [
              `hottest = max(temps, key=temps.get)`,
              `coldest = min(temps, key=temps.get)`,
              `print(f"Hottest: {hottest} ({temps[hottest]})")`,
            ]
          },
          quiz: [
            {
              question: `What does min(dict) return by default?`,
              options: [
                `Minimum value`,
                `Key with minimum value`,
                `Minimum key (alphabetical)`,
                `A tuple`,
              ],
              correct: 2
            },
            {
              question: `How to find the key with maximum value in a dict?`,
              options: [
                `max(dict.values())`,
                `max(dict)`,
                `max(dict, key=dict.get)`,
                `dict.max()`,
              ],
              correct: 2
            },
            {
              question: `What does min([], default=0) return?`,
              options: [
                `Error`,
                `0`,
                `None`,
                `[]`,
              ],
              correct: 1
            },
            {
              question: `What does max(["cat","a","elephant"], key=len) return?`,
              options: [
                `"cat"`,
                `"a"`,
                `"elephant"`,
                `8`,
              ],
              correct: 2
            },
            {
              question: `Can min/max work on strings?`,
              options: [`No`, `Yes, alphabetically`, `Only single chars`, `Only with key`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'sorting-data-efficiently',
          title: 'Sorting Data Efficiently',
          type: 'challenge',
          theory: `<h2>Sorting Data Efficiently</h2>
<p>Python provides <code>sorted()</code> (returns new list) and <code>.sort()</code> (modifies in place) for ordering data.</p>

<h3>sorted() vs .sort():</h3>
<pre><code>nums = [3, 1, 4, 1, 5]

# sorted() - returns new list, original unchanged
result = sorted(nums)
print(result)  # [1, 1, 3, 4, 5]
print(nums)    # [3, 1, 4, 1, 5] (unchanged)

# .sort() - modifies in place, returns None
nums.sort()
print(nums)    # [1, 1, 3, 4, 5] (changed)
</code></pre>

<h3>Reverse Sorting:</h3>
<pre><code>nums = [3, 1, 4, 1, 5]
print(sorted(nums, reverse=True))  # [5, 4, 3, 1, 1]
</code></pre>

<h3>Custom Sort with key:</h3>
<pre><code># Sort strings by length
words = ["python", "is", "awesome", "and", "fun"]
print(sorted(words, key=len))
# ['is', 'and', 'fun', 'python', 'awesome']

# Sort tuples by second element
students = [("Alice", 88), ("Bob", 95), ("Charlie", 72)]
by_grade = sorted(students, key=lambda x: x[1], reverse=True)
print(by_grade)
# [('Bob', 95), ('Alice', 88), ('Charlie', 72)]
</code></pre>

<h3>Sorting Dictionaries:</h3>
<pre><code>scores = {"Alice": 88, "Bob": 95, "Charlie": 72}

# Sort by value
by_score = sorted(scores.items(), key=lambda x: x[1], reverse=True)
print(by_score)
# [('Bob', 95), ('Alice', 88), ('Charlie', 72)]

# Sort by key
by_name = sorted(scores.items())
print(by_name)
# [('Alice', 88), ('Bob', 95), ('Charlie', 72)]
</code></pre>

<h3>Case-Insensitive Sort:</h3>
<pre><code>names = ["charlie", "Alice", "Bob"]
print(sorted(names, key=str.lower))
# ['Alice', 'Bob', 'charlie']
</code></pre>`,
          challenge: {
            description: `Given products = [("Laptop", 999), ("Phone", 699), ("Tablet", 449), ("Watch", 299)], sort by price ascending and print. Then sort by name length descending and print. Finally sort dict scores = {"Alice": 88, "Bob": 95, "Charlie": 72} by value descending and print.`,
            starterCode: `products = [("Laptop", 999), ("Phone", 699), ("Tablet", 449), ("Watch", 299)]\n\n# Sort by price ascending\n\n# Sort by name length descending\n\nscores = {"Alice": 88, "Bob": 95, "Charlie": 72}\n# Sort by value descending`,
            expectedOutput: `[('Watch', 299), ('Tablet', 449), ('Phone', 699), ('Laptop', 999)]\n[('Laptop', 999), ('Tablet', 449), ('Phone', 699), ('Watch', 299)]\n[('Bob', 95), ('Alice', 88), ('Charlie', 72)]`,
            hints: [
              `sorted(products, key=lambda x: x[1])`,
              `sorted(products, key=lambda x: len(x[0]), reverse=True)`,
              `sorted(scores.items(), key=lambda x: x[1], reverse=True)`,
            ]
          },
          quiz: [
            {
              question: `Difference between sorted() and .sort()?`,
              options: [
                `No difference`,
                `sorted() returns new list, .sort() modifies in place`,
                `.sort() is faster`,
                `sorted() only works with numbers`,
              ],
              correct: 1
            },
            {
              question: `What does sorted() return?`,
              options: [
                `None`,
                `A new sorted list`,
                `The original modified`,
                `A tuple`,
              ],
              correct: 1
            },
            {
              question: `What does key=lambda x: x[1] do in sorted()?`,
              options: [
                `Sorts by first element`,
                `Sorts by second element`,
                `Filters elements`,
                `Reverses order`,
              ],
              correct: 1
            },
            {
              question: `How to sort case-insensitively?`,
              options: [
                `sorted(list, case=False)`,
                `sorted(list, key=str.lower)`,
                `sorted(list.lower())`,
                `list.sort(ignore_case=True)`,
              ],
              correct: 1
            },
            {
              question: `What does .sort() return?`,
              options: [`Sorted list`, `None (modifies in place)`, `True`, `New list`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recap-dictionary-sorter',
          title: 'Recap - Dictionary Sorter',
          type: 'mastery',
          theory: `<h2>Recap: Dictionary Sorter</h2>
<p>Combine sum, min, max, and sorted to perform comprehensive data analysis on dictionaries.</p>

<h3>Complete Analysis Pattern:</h3>
<pre><code>sales = {"Mon": 250, "Tue": 180, "Wed": 320, "Thu": 290, "Fri": 410}

# Total
print(f"Total: ${sum(sales.values())}")

# Best/Worst days
best = max(sales, key=sales.get)
worst = min(sales, key=sales.get)
print(f"Best: {best} (${sales[best]})")
print(f"Worst: {worst} (${sales[worst]})")

# Average
avg = round(sum(sales.values()) / len(sales), 1)
print(f"Average: ${avg}")

# Sorted by sales
ranked = sorted(sales.items(), key=lambda x: x[1], reverse=True)
for day, amount in ranked:
    print(f"  {day}: ${amount}")
</code></pre>

<h3>Filtering and Aggregating:</h3>
<pre><code># Days above average
above_avg = {k: v for k, v in sales.items() if v > avg}
print(f"Above average: {above_avg}")
</code></pre>`,
          challenge: {
            description: `Given inventory = {"apples": 50, "bananas": 120, "cherries": 30, "dates": 80, "elderberries": 15}, print total items. Print item with most stock and its count. Print items sorted by stock ascending (as list of tuples). Print items with stock below 50 (sorted).`,
            starterCode: `inventory = {"apples": 50, "bananas": 120, "cherries": 30, "dates": 80, "elderberries": 15}\n\n# Total items\n\n# Most stock\n\n# Sorted by stock ascending\n\n# Items below 50 sorted by name`,
            expectedOutput: `295\nbananas: 120\n[('elderberries', 15), ('cherries', 30), ('apples', 50), ('dates', 80), ('bananas', 120)]\n['cherries', 'elderberries']`,
            hints: [
              `print(sum(inventory.values()))`,
              `top = max(inventory, key=inventory.get)`,
              `print(sorted(inventory.items(), key=lambda x: x[1]))`,
              `below = sorted(k for k, v in inventory.items() if v < 50)`,
            ]
          },
          quiz: [
            {
              question: `How to find the key with minimum value in a dict?`,
              options: [
                `min(dict)`,
                `min(dict.values())`,
                `min(dict, key=dict.get)`,
                `dict.min()`,
              ],
              correct: 2
            },
            {
              question: `sorted(dict.items(), key=lambda x: x[1]) sorts by?`,
              options: [
                `Keys`,
                `Values`,
                `Both`,
                `Length`,
              ],
              correct: 1
            },
            {
              question: `How to get sum of specific values from a dict?`,
              options: [
                `sum(dict)`,
                `sum(v for v in dict.values() if condition)`,
                `dict.sum()`,
                `total(dict.values())`,
              ],
              correct: 1
            },
            {
              question: `What does round(sum(vals)/len(vals), 1) compute?`,
              options: [
                `Total`,
                `Count`,
                `Average to 1 decimal`,
                `Median`,
              ],
              correct: 2
            },
          ]
          ,mastery: {
            description: `Given student_scores = {"Alice": [88, 92, 85], "Bob": [75, 80, 90], "Charlie": [95, 88, 92], "Diana": [70, 65, 80]}, calculate each student average, print sorted by average descending as "Name: avg", then print the class average rounded to 1 decimal.`,
            starterCode: `student_scores = {"Alice": [88, 92, 85], "Bob": [75, 80, 90], "Charlie": [95, 88, 92], "Diana": [70, 65, 80]}\n\n# Calculate averages and sort\n\n# Print class average`,
            expectedOutput: `Charlie: 91.7\nAlice: 88.3\nBob: 81.7\nDiana: 71.7\nClass average: 83.4`,
            hints: [
              `avgs = {name: round(sum(scores)/len(scores), 1) for name, scores in student_scores.items()}`,
              `sorted_avgs = sorted(avgs.items(), key=lambda x: x[1], reverse=True)`,
              `class_avg = round(sum(avgs.values()) / len(avgs), 1)`,
            ]
          }
        }
      ]
    },
    {
      id: 'basic-list-comprehensions',
      title: 'Basic List Comprehensions',
      lessons: [
        {
          id: 'the-syntax',
          title: 'The Syntax',
          type: 'challenge',
          theory: `<h2>List Comprehension Syntax</h2>
<p>List comprehensions provide a concise way to create lists. They replace multi-line for loops with a single readable expression.</p>

<h3>Basic Syntax:</h3>
<pre><code>[expression for item in iterable]</code></pre>

<h3>Comparison:</h3>
<pre><code># Traditional loop
squares = []
for x in range(5):
    squares.append(x ** 2)
print(squares)  # [0, 1, 4, 9, 16]

# List comprehension (same result)
squares = [x ** 2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]
</code></pre>

<h3>More Examples:</h3>
<pre><code># Double each number
doubled = [n * 2 for n in [1, 2, 3, 4, 5]]
print(doubled)  # [2, 4, 6, 8, 10]

# Convert to uppercase
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
print(upper)  # ['HELLO', 'WORLD', 'PYTHON']

# String lengths
names = ["Alice", "Bob", "Charlie"]
lengths = [len(name) for name in names]
print(lengths)  # [5, 3, 7]
</code></pre>

<h3>With Different Expressions:</h3>
<pre><code># Boolean expressions
nums = [1, 2, 3, 4, 5]
is_even = [n % 2 == 0 for n in nums]
print(is_even)  # [False, True, False, True, False]

# f-strings
items = ["apple", "banana"]
formatted = [f"I like {item}" for item in items]
print(formatted)
# ['I like apple', 'I like banana']
</code></pre>`,
          challenge: {
            description: `Create a list of cubes for numbers 1-5 using list comprehension. Print it. Create a list of the first letter of each word in ["Python", "Is", "Great"]. Print it. Create a list of numbers 1-10 multiplied by 3. Print it.`,
            starterCode: `# Cubes of 1-5\n\n# First letters\n\n# Multiples of 3`,
            expectedOutput: `[1, 8, 27, 64, 125]\n['P', 'I', 'G']\n[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]`,
            hints: [
              `cubes = [x**3 for x in range(1, 6)]`,
              `firsts = [w[0] for w in ["Python", "Is", "Great"]]`,
              `multiples = [x * 3 for x in range(1, 11)]`,
            ]
          },
          quiz: [
            {
              question: `What is the basic syntax of list comprehension?`,
              options: [
                `[for item in iterable: expression]`,
                `[expression for item in iterable]`,
                `list(expression for item)`,
                `{expression: item for iterable}`,
              ],
              correct: 1
            },
            {
              question: `What does [x*2 for x in [1,2,3]] produce?`,
              options: [
                `[1, 2, 3]`,
                `[2, 4, 6]`,
                `[1, 4, 9]`,
                `6`,
              ],
              correct: 1
            },
            {
              question: `List comprehension is equivalent to what pattern?`,
              options: [
                `while loop`,
                `for loop with append`,
                `recursive function`,
                `map only`,
              ],
              correct: 1
            },
            {
              question: `[len(w) for w in ["hi","bye"]] returns?`,
              options: [
                `[2, 3]`,
                `["hi", "bye"]`,
                `[5]`,
                `Error`,
              ],
              correct: 0
            },
            {
              question: `[x for x in range(3)] is same as?`,
              options: [`range(3)`, `[0, 1, 2]`, `(0, 1, 2)`, `{0, 1, 2}`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'creating-simple-lists',
          title: 'Creating Simple Lists',
          type: 'challenge',
          theory: `<h2>Creating Simple Lists with Comprehensions</h2>
<p>List comprehensions excel at transforming data from one form to another in a single line.</p>

<h3>Number Transformations:</h3>
<pre><code># Fahrenheit to Celsius
fahrenheit = [32, 68, 86, 104]
celsius = [round((f - 32) * 5/9, 1) for f in fahrenheit]
print(celsius)  # [0.0, 20.0, 30.0, 40.0]

# Percentage calculation
scores = [45, 67, 89, 92, 55]
total = 100
percentages = [round(s/total*100, 1) for s in scores]
print(percentages)  # [45.0, 67.0, 89.0, 92.0, 55.0]
</code></pre>

<h3>String Transformations:</h3>
<pre><code># Clean whitespace
raw = ["  hello  ", " world ", "  python  "]
clean = [s.strip() for s in raw]
print(clean)  # ['hello', 'world', 'python']

# Title case
names = ["john doe", "jane smith", "bob jones"]
titled = [name.title() for name in names]
print(titled)  # ['John Doe', 'Jane Smith', 'Bob Jones']
</code></pre>

<h3>Type Conversions:</h3>
<pre><code># Strings to integers
str_nums = ["1", "2", "3", "4", "5"]
integers = [int(x) for x in str_nums]
print(integers)  # [1, 2, 3, 4, 5]

# Integers to strings
nums = [10, 20, 30]
strings = [str(n) for n in nums]
print(strings)  # ['10', '20', '30']
</code></pre>

<h3>From Range:</h3>
<pre><code># Even numbers
evens = [x for x in range(0, 20, 2)]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Powers of 2
powers = [2**n for n in range(8)]
print(powers)  # [1, 2, 4, 8, 16, 32, 64, 128]
</code></pre>`,
          challenge: {
            description: `Convert string numbers str_prices = ["10.5", "20.0", "15.75", "8.25"] to floats using comprehension and print. Then take names = ["  alice  ", "  BOB  ", " Charlie "] and create cleaned lowercase versions. Print the cleaned list.`,
            starterCode: `str_prices = ["10.5", "20.0", "15.75", "8.25"]\n# Convert to floats\n\nnames = ["  alice  ", "  BOB  ", " Charlie "]\n# Clean and lowercase`,
            expectedOutput: `[10.5, 20.0, 15.75, 8.25]\n['alice', 'bob', 'charlie']`,
            hints: [
              `prices = [float(p) for p in str_prices]`,
              `cleaned = [name.strip().lower() for name in names]`,
              `Chain .strip() and .lower() together`,
            ]
          },
          quiz: [
            {
              question: `[int(x) for x in ["1","2","3"]] returns?`,
              options: [
                `["1","2","3"]`,
                `[1, 2, 3]`,
                `[1.0, 2.0, 3.0]`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `[s.strip() for s in [" hi ", " bye "]] returns?`,
              options: [
                `[" hi ", " bye "]`,
                `["hi", "bye"]`,
                `["h i", "b y e"]`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `Can you chain string methods in comprehension?`,
              options: [
                `No`,
                `Yes, like s.strip().lower()`,
                `Only one method`,
                `Only with lambda`,
              ],
              correct: 1
            },
            {
              question: `[2**n for n in range(4)] returns?`,
              options: [
                `[2, 4, 6, 8]`,
                `[1, 2, 4, 8]`,
                `[0, 2, 4, 8]`,
                `[2, 4, 8, 16]`,
              ],
              correct: 1
            },
            {
              question: `[float(x) for x in ["1","2.5"]] returns?`,
              options: [`[1, 2.5]`, `[1.0, 2.5]`, `["1.0", "2.5"]`, `Error`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'adding-conditions',
          title: 'Adding Conditions',
          type: 'challenge',
          theory: `<h2>Adding Conditions to List Comprehensions</h2>
<p>You can filter elements by adding an <code>if</code> clause to your list comprehension.</p>

<h3>Syntax with Condition:</h3>
<pre><code>[expression for item in iterable if condition]</code></pre>

<h3>Basic Filtering:</h3>
<pre><code># Only even numbers
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# Only positive numbers
numbers = [-3, -1, 0, 2, 5, -4, 8]
positives = [n for n in numbers if n > 0]
print(positives)  # [2, 5, 8]
</code></pre>

<h3>String Filtering:</h3>
<pre><code>words = ["hello", "Hi", "hey", "world", "help"]
h_words = [w for w in words if w.startswith("h")]
print(h_words)  # ['hello', 'hey', 'help']

# Long words only
long_words = [w for w in words if len(w) > 3]
print(long_words)  # ['hello', 'world', 'help']
</code></pre>

<h3>With if-else (Ternary in Expression):</h3>
<pre><code># Note: if-else goes in the EXPRESSION part
nums = [1, 2, 3, 4, 5]
labels = ["even" if x % 2 == 0 else "odd" for x in nums]
print(labels)  # ['odd', 'even', 'odd', 'even', 'odd']

# Transform conditionally
values = [-2, -1, 0, 1, 2]
absolute = [x if x >= 0 else -x for x in values]
print(absolute)  # [2, 1, 0, 1, 2]
</code></pre>

<h3>Important Distinction:</h3>
<pre><code># FILTER (if at end) - fewer items out
[x for x in items if condition]

# TRANSFORM (if-else in expression) - same number of items
[x if condition else y for x in items]
</code></pre>`,
          challenge: {
            description: `From numbers = list(range(1, 21)), create a list of only numbers divisible by 3 and print it. Then create a list that labels each number as "fizz" if divisible by 3, else the number itself, for range(1,11). Print it.`,
            starterCode: `numbers = list(range(1, 21))\n\n# Numbers divisible by 3\n\n# Fizz labels for 1-10`,
            expectedOutput: `[3, 6, 9, 12, 15, 18]\n[1, 2, 'fizz', 4, 5, 'fizz', 7, 8, 'fizz', 10]`,
            hints: [
              `div_by_3 = [n for n in numbers if n % 3 == 0]`,
              `fizz = ["fizz" if x % 3 == 0 else x for x in range(1, 11)]`,
              `Note: filter uses if at end, transform uses if-else in expression`,
            ]
          },
          quiz: [
            {
              question: `Where does the filter condition go in list comprehension?`,
              options: [
                `Before the for`,
                `After the for and iterable`,
                `In the expression`,
                `Before the expression`,
              ],
              correct: 1
            },
            {
              question: `[x for x in [1,2,3,4] if x > 2] returns?`,
              options: [
                `[1, 2]`,
                `[3, 4]`,
                `[True, True]`,
                `[1, 2, 3, 4]`,
              ],
              correct: 1
            },
            {
              question: `Where does if-else go for transformation?`,
              options: [
                `At the end`,
                `In the expression (before for)`,
                `After the iterable`,
                `Not possible`,
              ],
              correct: 1
            },
            {
              question: `["yes" if x>0 else "no" for x in [-1,0,1]] returns?`,
              options: [
                `["no", "no", "yes"]`,
                `["yes"]`,
                `["no", "yes"]`,
                `Error`,
              ],
              correct: 0
            },
            {
              question: `[x for x in range(10) if x%2==0 if x%3==0] means?`,
              options: [`x%2==0 OR x%3==0`, `x%2==0 AND x%3==0`, `Only x%2==0`, `Only x%3==0`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'using-data-aggregation',
          title: 'Using Data Aggregation',
          type: 'challenge',
          theory: `<h2>Combining Comprehensions with Aggregation</h2>
<p>List comprehensions become powerful when combined with sum(), min(), max(), len(), and other aggregation functions.</p>

<h3>Sum with Comprehension:</h3>
<pre><code>orders = [{"item": "book", "price": 15}, {"item": "pen", "price": 3}, {"item": "laptop", "price": 999}]

total = sum(order["price"] for order in orders)
print(total)  # 1017

# Sum of squares
sum_sq = sum(x**2 for x in range(1, 6))
print(sum_sq)  # 55
</code></pre>

<h3>Count with Comprehension:</h3>
<pre><code>words = ["hello", "world", "hi", "python", "hey"]
short_count = sum(1 for w in words if len(w) <= 3)
print(short_count)  # 2

# Same as len with filter
short_count = len([w for w in words if len(w) <= 3])
print(short_count)  # 2
</code></pre>

<h3>Combined Patterns:</h3>
<pre><code>students = [
    {"name": "Alice", "score": 92},
    {"name": "Bob", "score": 65},
    {"name": "Charlie", "score": 88},
    {"name": "Diana", "score": 45}
]

# Average of passing scores
passing = [s["score"] for s in students if s["score"] >= 70]
avg_passing = round(sum(passing) / len(passing), 1)
print(avg_passing)  # 90.0

# Names of failing students
failing = [s["name"] for s in students if s["score"] < 70]
print(failing)  # ['Bob', 'Diana']
</code></pre>

<h3>Nested Access:</h3>
<pre><code>data = {"scores": [85, 92, 78, 95]}
above_avg = [s for s in data["scores"] if s > sum(data["scores"])/len(data["scores"])]
print(above_avg)  # [92, 95]
</code></pre>`,
          challenge: {
            description: `Given products = [{"name": "A", "price": 25}, {"name": "B", "price": 50}, {"name": "C", "price": 15}, {"name": "D", "price": 75}], use comprehension to get total price of items over $20. Print it. Count items under $30. Print names of expensive items (>$40) sorted.`,
            starterCode: `products = [{"name": "A", "price": 25}, {"name": "B", "price": 50}, {"name": "C", "price": 15}, {"name": "D", "price": 75}]\n\n# Total price of items over $20\n\n# Count items under $30\n\n# Names of expensive items (>$40) sorted`,
            expectedOutput: `150\n2\n['B', 'D']`,
            hints: [
              `total = sum(p["price"] for p in products if p["price"] > 20)`,
              `count = sum(1 for p in products if p["price"] < 30)`,
              `expensive = sorted(p["name"] for p in products if p["price"] > 40)`,
            ]
          },
          quiz: [
            {
              question: `sum(x for x in [1,2,3]) - what is this called?`,
              options: [
                `List comprehension`,
                `Generator expression`,
                `Lambda function`,
                `Map function`,
              ],
              correct: 1
            },
            {
              question: `How to count items matching a condition?`,
              options: [
                `count(items if condition)`,
                `sum(1 for x in items if condition)`,
                `len(items, condition)`,
                `items.count(condition)`,
              ],
              correct: 1
            },
            {
              question: `sum(p["price"] for p in products) does what?`,
              options: [
                `Counts products`,
                `Sums all prices`,
                `Gets max price`,
                `Creates a list`,
              ],
              correct: 1
            },
            {
              question: `Can you nest comprehension inside sum()?`,
              options: [
                `No`,
                `Yes, using generator expression (no brackets)`,
                `Only with list`,
                `Only for numbers`,
              ],
              correct: 1
            },
            {
              question: `len([x for x in items if condition]) counts what?`,
              options: [`All items`, `Items matching condition`, `Items not matching`, `Characters`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recap-house-of-lists',
          title: 'Recap - House Of Lists',
          type: 'challenge',
          theory: `<h2>Recap: House of Lists</h2>
<p>Nested list comprehensions create lists of lists or flatten nested structures.</p>

<h3>Creating a Matrix:</h3>
<pre><code># 3x3 matrix of zeros
matrix = [[0 for _ in range(3)] for _ in range(3)]
print(matrix)  # [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

# Multiplication table
table = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print(table)
# [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
</code></pre>

<h3>Flattening Nested Lists:</h3>
<pre><code>nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [x for row in nested for x in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
</code></pre>

<h3>Reading Order of Nested Comprehensions:</h3>
<pre><code># [expression for outer_loop for inner_loop]
# is equivalent to:
# for outer_loop:
#     for inner_loop:
#         expression

pairs = [(x, y) for x in [1, 2] for y in ["a", "b"]]
print(pairs)  # [(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]
</code></pre>

<h3>Transforming Nested Data:</h3>
<pre><code>grades = [[85, 90, 78], [92, 88, 95], [70, 75, 80]]
averages = [round(sum(row)/len(row), 1) for row in grades]
print(averages)  # [84.3, 91.7, 75.0]
</code></pre>`,
          challenge: {
            description: `Create a 3x4 matrix where each element is row*col (1-indexed) using nested comprehension. Print it. Then flatten nested = [[1,2],[3,4],[5,6]] into a single list and print. Calculate the sum of all elements in the flattened list.`,
            starterCode: `# 3x4 matrix (row * col)\n\n# Flatten nested list\nnested = [[1, 2], [3, 4], [5, 6]]\n\n# Sum of flattened`,
            expectedOutput: `[[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12]]\n[1, 2, 3, 4, 5, 6]\n21`,
            hints: [
              `matrix = [[r*c for c in range(1,5)] for r in range(1,4)]`,
              `flat = [x for row in nested for x in row]`,
              `print(sum(flat))`,
            ]
          },
          quiz: [
            {
              question: `[[0]*3 for _ in range(2)] creates?`,
              options: [
                `[0, 0, 0, 0, 0, 0]`,
                `[[0,0,0], [0,0,0]]`,
                `[[0,0], [0,0], [0,0]]`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `How to flatten [[1,2],[3,4]] to [1,2,3,4]?`,
              options: [
                `[x for x in nested]`,
                `[x for row in nested for x in row]`,
                `nested.flatten()`,
                `list(nested)`,
              ],
              correct: 1
            },
            {
              question: `In nested comprehension, which loop is outer?`,
              options: [
                `The last for clause`,
                `The first for clause`,
                `It does not matter`,
                `Depends on brackets`,
              ],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recap-elements-of-freedom',
          title: 'Recap - Elements Of Freedom',
          type: 'mastery',
          theory: `<h2>Recap: Elements of Freedom</h2>
<p>Combine all list comprehension techniques: filtering, transforming, nesting, and aggregating.</p>

<h3>Dictionary Comprehension:</h3>
<pre><code># Create dict from lists
names = ["Alice", "Bob", "Charlie"]
scores = [88, 92, 75]
grade_book = {name: score for name, score in zip(names, scores)}
print(grade_book)  # {'Alice': 88, 'Bob': 92, 'Charlie': 75}

# Filter dict
passing = {k: v for k, v in grade_book.items() if v >= 80}
print(passing)  # {'Alice': 88, 'Bob': 92}
</code></pre>

<h3>Set Comprehension:</h3>
<pre><code>words = ["hello", "HELLO", "Hello", "world", "WORLD"]
unique_lower = {w.lower() for w in words}
print(unique_lower)  # {'hello', 'world'}
</code></pre>

<h3>Complex Transform + Filter:</h3>
<pre><code>data = [
    {"name": "Product A", "price": 10, "qty": 5},
    {"name": "Product B", "price": 20, "qty": 3},
    {"name": "Product C", "price": 5, "qty": 10}
]

# Products with total value > 30
valuable = [(d["name"], d["price"]*d["qty"]) 
            for d in data 
            if d["price"] * d["qty"] > 30]
print(valuable)
# [('Product A', 50), ('Product B', 60), ('Product C', 50)]
</code></pre>

<h3>Multiple Conditions:</h3>
<pre><code>nums = range(1, 31)
special = [n for n in nums if n % 2 == 0 if n % 3 == 0]
print(special)  # [6, 12, 18, 24, 30]
# Same as: n % 2 == 0 and n % 3 == 0
</code></pre>`,
          challenge: {
            description: `Create a dict comprehension: {word: len(word) for word in ["python", "is", "amazing"]} and print it. Then from numbers 1-20, use comprehension to get numbers divisible by both 3 AND 5. Print the result.`,
            starterCode: `# Dict comprehension: word lengths\n\n# Numbers 1-20 divisible by both 3 and 5`,
            expectedOutput: `{'python': 6, 'is': 2, 'amazing': 7}\n[15]`,
            hints: [
              `word_lens = {w: len(w) for w in ["python", "is", "amazing"]}`,
              `result = [n for n in range(1, 21) if n % 3 == 0 and n % 5 == 0]`,
              `Only 15 is divisible by both 3 and 5 in range 1-20`,
            ]
          },
          quiz: [
            {
              question: `What does {k: v for k, v in dict.items() if v > 5} create?`,
              options: [
                `A list`,
                `A filtered dictionary`,
                `A set`,
                `A tuple`,
              ],
              correct: 1
            },
            {
              question: `What type does {x.lower() for x in words} create?`,
              options: [
                `list`,
                `dict`,
                `set`,
                `tuple`,
              ],
              correct: 2
            },
            {
              question: `Can you have multiple if conditions in comprehension?`,
              options: [
                `No, only one`,
                `Yes, they act as AND`,
                `Yes, they act as OR`,
                `Only with elif`,
              ],
              correct: 1
            },
            {
              question: `[x for x in range(20) if x%2==0 if x%3==0] same as?`,
              options: [
                `x%2==0 or x%3==0`,
                `x%2==0 and x%3==0`,
                `x%6==0`,
                `Both B and C`,
              ],
              correct: 3
            },
          ]
          ,mastery: {
            description: `Given students = [{"name": "Alice", "grades": [90,85,92]}, {"name": "Bob", "grades": [75,80,70]}, {"name": "Charlie", "grades": [95,92,88]}], create a list of (name, average) tuples only for students with average >= 85, sorted by average descending. Print it.`,
            starterCode: `students = [\n    {"name": "Alice", "grades": [90, 85, 92]},\n    {"name": "Bob", "grades": [75, 80, 70]},\n    {"name": "Charlie", "grades": [95, 92, 88]}\n]\n\n# List of (name, avg) for avg >= 85, sorted desc`,
            expectedOutput: `[('Charlie', 91.7), ('Alice', 89.0)]`,
            hints: [
              `First calculate: [(s["name"], round(sum(s["grades"])/len(s["grades"]),1)) for s in students]`,
              `Filter with if avg >= 85`,
              `Sort with sorted(..., key=lambda x: x[1], reverse=True)`,
            ]
          }
        }
      ]
    },
    {
      id: 'advanced-functions',
      title: 'Advanced Functions',
      lessons: [
        {
          id: 'returning-multiple-values',
          title: 'Returning Multiple Values',
          type: 'challenge',
          theory: `<h2>Returning Multiple Values</h2>
<p>Python functions can return multiple values as a tuple, which can be unpacked by the caller.</p>

<h3>Basic Pattern:</h3>
<pre><code>def min_max(numbers):
    return min(numbers), max(numbers)

lowest, highest = min_max([3, 1, 7, 4, 9])
print(lowest)   # 1
print(highest)  # 9
</code></pre>

<h3>Multiple Return Values:</h3>
<pre><code>def analyze(data):
    total = sum(data)
    count = len(data)
    average = total / count
    return total, count, average

t, c, a = analyze([10, 20, 30, 40])
print(f"Total: {t}, Count: {c}, Avg: {a}")
# Total: 100, Count: 4, Avg: 25.0
</code></pre>

<h3>Returning as Named Tuple or Dict:</h3>
<pre><code>def get_stats(numbers):
    return {
        "min": min(numbers),
        "max": max(numbers),
        "sum": sum(numbers),
        "avg": round(sum(numbers)/len(numbers), 1)
    }

stats = get_stats([5, 10, 15, 20])
print(stats["avg"])  # 12.5
</code></pre>

<h3>Ignoring Some Returns:</h3>
<pre><code>def get_coordinates():
    return 10, 20, 30

x, _, z = get_coordinates()  # Ignore y
print(x, z)  # 10 30
</code></pre>`,
          challenge: {
            description: `Create a function get_stats(numbers) that returns the minimum, maximum, and average (rounded to 1 decimal) as three separate values. Call it with [23, 45, 12, 67, 34] and unpack into min_val, max_val, avg_val. Print each.`,
            starterCode: `def get_stats(numbers):\n    pass\n\nmin_val, max_val, avg_val = get_stats([23, 45, 12, 67, 34])\nprint(min_val)\nprint(max_val)\nprint(avg_val)`,
            expectedOutput: `12\n67\n36.2`,
            hints: [
              `return min(numbers), max(numbers), round(sum(numbers)/len(numbers), 1)`,
              `Multiple values are returned as a tuple`,
              `Unpack with min_val, max_val, avg_val = get_stats(...)`,
            ]
          },
          quiz: [
            {
              question: `How does Python return multiple values?`,
              options: [
                `As a list`,
                `As a tuple`,
                `As a dictionary`,
                `Not possible`,
              ],
              correct: 1
            },
            {
              question: `What does a, b = func() do?`,
              options: [
                `Calls func twice`,
                `Unpacks the returned tuple`,
                `Creates two functions`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `Can you ignore return values with _?`,
              options: [
                `No`,
                `Yes, _ acts as placeholder`,
                `Only first value`,
                `Only last value`,
              ],
              correct: 1
            },
            {
              question: `def f(): return 1,2,3 - what type is returned?`,
              options: [`list`, `tuple`, `int`, `dict`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'lambda-functions-part-1',
          title: 'Lambda Functions Part 1',
          type: 'challenge',
          theory: `<h2>Lambda Functions Part 1</h2>
<p>A lambda function is a small anonymous function defined in one line. It can have any number of parameters but only one expression.</p>

<h3>Syntax:</h3>
<pre><code>lambda parameters: expression</code></pre>

<h3>Basic Examples:</h3>
<pre><code># Regular function
def double(x):
    return x * 2

# Same as lambda
double = lambda x: x * 2
print(double(5))  # 10

# Multiple parameters
add = lambda a, b: a + b
print(add(3, 7))  # 10

# No parameters
greet = lambda: "Hello!"
print(greet())  # Hello!
</code></pre>

<h3>Common Use with sorted():</h3>
<pre><code>names = ["Charlie", "Alice", "Bob"]
sorted_names = sorted(names, key=lambda x: len(x))
print(sorted_names)  # ['Bob', 'Alice', 'Charlie']

points = [(3, 2), (1, 5), (4, 1)]
by_y = sorted(points, key=lambda p: p[1])
print(by_y)  # [(4, 1), (3, 2), (1, 5)]
</code></pre>

<h3>When to Use Lambda:</h3>
<ul>
<li>Short, simple operations (one expression)</li>
<li>As arguments to functions like sorted(), map(), filter()</li>
<li>When naming the function is unnecessary</li>
</ul>

<p><strong>Do not use lambda for:</strong> Complex logic, multiple statements, or when a named function would be clearer.</p>`,
          challenge: {
            description: `Create a lambda called square that squares a number. Print square(7). Create a lambda called full_name that takes first, last and returns them joined with space. Print full_name("John", "Doe"). Sort the list [(2,5),(1,3),(4,1)] by second element using lambda and print.`,
            starterCode: `# Lambda to square\n\n# Lambda for full name\n\n# Sort by second element\npoints = [(2, 5), (1, 3), (4, 1)]`,
            expectedOutput: `49\nJohn Doe\n[(4, 1), (1, 3), (2, 5)]`,
            hints: [
              `square = lambda x: x ** 2`,
              `full_name = lambda first, last: first + " " + last`,
              `print(sorted(points, key=lambda p: p[1]))`,
            ]
          },
          quiz: [
            {
              question: `What is a lambda function?`,
              options: [
                `A named function`,
                `An anonymous one-line function`,
                `A class method`,
                `A built-in function`,
              ],
              correct: 1
            },
            {
              question: `lambda x, y: x + y is equivalent to?`,
              options: [
                `def f(x, y): return x + y`,
                `def f(x, y): x + y`,
                `def f: return x + y`,
                `x + y`,
              ],
              correct: 0
            },
            {
              question: `Can lambda have multiple expressions?`,
              options: [
                `Yes`,
                `No, only one expression`,
                `With semicolons`,
                `With commas`,
              ],
              correct: 1
            },
            {
              question: `Where are lambdas most commonly used?`,
              options: [
                `Replacing all functions`,
                `As key argument in sorted/map/filter`,
                `In class definitions`,
                `For loops`,
              ],
              correct: 1
            },
            {
              question: `(lambda x: x+1)(5) returns?`,
              options: [`5`, `6`, `lambda`, `Error`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'lambda-functions-part-2',
          title: 'Lambda Functions Part 2',
          type: 'challenge',
          theory: `<h2>Lambda Functions Part 2</h2>
<p>Advanced lambda patterns including using them with data structures and multiple sort criteria.</p>

<h3>Lambda with Dictionaries:</h3>
<pre><code>students = [
    {"name": "Alice", "grade": 92},
    {"name": "Bob", "grade": 85},
    {"name": "Charlie", "grade": 95}
]

# Sort by grade descending
by_grade = sorted(students, key=lambda s: s["grade"], reverse=True)
for s in by_grade:
    print(f"{s['name']}: {s['grade']}")
# Charlie: 95
# Alice: 92
# Bob: 85
</code></pre>

<h3>Lambda in max/min:</h3>
<pre><code>products = [
    {"name": "Laptop", "price": 999},
    {"name": "Phone", "price": 699},
    {"name": "Tablet", "price": 449}
]

cheapest = min(products, key=lambda p: p["price"])
print(cheapest["name"])  # Tablet
</code></pre>

<h3>Multiple Sort Criteria:</h3>
<pre><code>data = [("Alice", 88), ("Bob", 88), ("Charlie", 95), ("Alice", 92)]

# Sort by score desc, then name asc
result = sorted(data, key=lambda x: (-x[1], x[0]))
print(result)
# [('Charlie', 95), ('Alice', 92), ('Alice', 88), ('Bob', 88)]
</code></pre>

<h3>Lambda with Conditional:</h3>
<pre><code>classify = lambda x: "positive" if x > 0 else "negative" if x < 0 else "zero"
print(classify(5))   # positive
print(classify(-3))  # negative
print(classify(0))   # zero
</code></pre>`,
          challenge: {
            description: `Given people = [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}, {"name": "Charlie", "age": 35}], sort by age and print names in age order. Then find the oldest person using max with lambda and print their name.`,
            starterCode: `people = [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}, {"name": "Charlie", "age": 35}]\n\n# Sort by age, print names\n\n# Find oldest person`,
            expectedOutput: `Bob\nAlice\nCharlie\nOldest: Charlie`,
            hints: [
              `by_age = sorted(people, key=lambda p: p["age"])`,
              `for p in by_age: print(p["name"])`,
              `oldest = max(people, key=lambda p: p["age"])`,
            ]
          },
          quiz: [
            {
              question: `sorted(items, key=lambda x: x["price"]) sorts by?`,
              options: [
                `Item name`,
                `Item price`,
                `Item index`,
                `Alphabetical`,
              ],
              correct: 1
            },
            {
              question: `How to sort by multiple criteria?`,
              options: [
                `Multiple sorted() calls`,
                `Lambda returning tuple`,
                `Not possible`,
                `Using two keys`,
              ],
              correct: 1
            },
            {
              question: `min(list, key=lambda x: x["val"]) returns?`,
              options: [
                `The minimum value`,
                `The item with minimum value`,
                `The key`,
                `The index`,
              ],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recap-lambda-sort',
          title: 'Recap Challenge - Lambda Sort',
          type: 'challenge',
          theory: `<h2>Recap: Lambda Sort Challenge</h2>
<p>Combine lambda functions with sorting for real-world data manipulation.</p>

<h3>Multi-Level Sort:</h3>
<pre><code>employees = [
    {"name": "Alice", "dept": "Engineering", "salary": 95000},
    {"name": "Bob", "dept": "Marketing", "salary": 75000},
    {"name": "Charlie", "dept": "Engineering", "salary": 88000},
    {"name": "Diana", "dept": "Marketing", "salary": 82000}
]

# Sort by department, then salary descending
result = sorted(employees, key=lambda e: (e["dept"], -e["salary"]))
for emp in result:
    print(f"{emp['name']} ({emp['dept']}): ${emp['salary']}")
</code></pre>

<h3>Sorting with Computed Values:</h3>
<pre><code>words = ["python", "is", "absolutely", "amazing"]
# Sort by vowel count
by_vowels = sorted(words, key=lambda w: sum(1 for c in w if c in "aeiou"), reverse=True)
print(by_vowels)  # ['absolutely', 'amazing', 'python', 'is']
</code></pre>

<h3>Top-N Pattern:</h3>
<pre><code>scores = [("Alice", 88), ("Bob", 95), ("Charlie", 72), ("Diana", 91)]
top_2 = sorted(scores, key=lambda x: x[1], reverse=True)[:2]
print(top_2)  # [('Bob', 95), ('Diana', 91)]
</code></pre>`,
          challenge: {
            description: `Given items = [("banana", 3), ("apple", 5), ("cherry", 1), ("date", 3)], sort by quantity descending, then name ascending for ties. Print result. Then get the top 2 by quantity.`,
            starterCode: `items = [("banana", 3), ("apple", 5), ("cherry", 1), ("date", 3)]\n\n# Sort by quantity desc, name asc for ties\n\n# Top 2 by quantity`,
            expectedOutput: `[('apple', 5), ('banana', 3), ('date', 3), ('cherry', 1)]\n[('apple', 5), ('banana', 3)]`,
            hints: [
              `sorted(items, key=lambda x: (-x[1], x[0]))`,
              `Negate numeric for descending, string stays for ascending`,
              `Use [:2] slicing for top 2`,
            ]
          },
          quiz: [
            {
              question: `key=lambda x: (-x[1], x[0]) does what?`,
              options: [
                `Sorts by x[1] asc, x[0] desc`,
                `Sorts by x[1] desc, x[0] asc`,
                `Reverses everything`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `How to get top 3 from sorted list?`,
              options: [
                `sorted(list)[:3]`,
                `sorted(list)[:-3]`,
                `sorted(list, top=3)`,
                `list.top(3)`,
              ],
              correct: 0
            },
            {
              question: `Can lambda compute complex expressions?`,
              options: [
                `No, only simple math`,
                `Yes, any single expression`,
                `Only comparisons`,
                `Only with imports`,
              ],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recursive-functions-part-1',
          title: 'Recursive Functions Part 1',
          type: 'challenge',
          theory: `<h2>Recursive Functions Part 1</h2>
<p>A recursive function is one that calls itself. It needs a <strong>base case</strong> (when to stop) and a <strong>recursive case</strong> (where it calls itself with a simpler problem).</p>

<h3>Simple Example - Countdown:</h3>
<pre><code>def countdown(n):
    if n <= 0:        # Base case
        print("Go!")
        return
    print(n)
    countdown(n - 1)  # Recursive case

countdown(3)
# 3
# 2
# 1
# Go!
</code></pre>

<h3>Factorial:</h3>
<pre><code>def factorial(n):
    if n <= 1:       # Base case
        return 1
    return n * factorial(n - 1)  # Recursive case

print(factorial(5))  # 120 (5*4*3*2*1)
print(factorial(3))  # 6 (3*2*1)
</code></pre>

<h3>How It Works:</h3>
<pre><code># factorial(4) trace:
# factorial(4) = 4 * factorial(3)
#              = 4 * 3 * factorial(2)
#              = 4 * 3 * 2 * factorial(1)
#              = 4 * 3 * 2 * 1
#              = 24
</code></pre>

<h3>Sum of List:</h3>
<pre><code>def recursive_sum(lst):
    if not lst:      # Base case: empty list
        return 0
    return lst[0] + recursive_sum(lst[1:])  # First + sum of rest

print(recursive_sum([1, 2, 3, 4]))  # 10
</code></pre>

<p><strong>Key Rules:</strong> Always have a base case. Always move toward the base case. Without these, you get infinite recursion (stack overflow).</p>`,
          challenge: {
            description: `Write a recursive function power(base, exp) that calculates base^exp. Base case: exp == 0 returns 1. Recursive case: base * power(base, exp-1). Test with power(2, 5) and power(3, 4). Print both results.`,
            starterCode: `def power(base, exp):\n    pass\n\nprint(power(2, 5))\nprint(power(3, 4))`,
            expectedOutput: `32\n81`,
            hints: [
              `Base case: if exp == 0: return 1`,
              `Recursive: return base * power(base, exp - 1)`,
              `2^5 = 2*2*2*2*2 = 32`,
            ]
          },
          quiz: [
            {
              question: `What are the two parts of a recursive function?`,
              options: [
                `Input and output`,
                `Base case and recursive case`,
                `Header and body`,
                `Call and return`,
              ],
              correct: 1
            },
            {
              question: `What happens without a base case?`,
              options: [
                `Returns None`,
                `Infinite recursion (stack overflow)`,
                `Returns 0`,
                `Skips the function`,
              ],
              correct: 1
            },
            {
              question: `What is factorial(0)?`,
              options: [
                `0`,
                `1`,
                `Error`,
                `None`,
              ],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recursive-functions-part-2',
          title: 'Recursive Functions Part 2',
          type: 'challenge',
          theory: `<h2>Recursive Functions Part 2</h2>
<p>More advanced recursion patterns including Fibonacci, string reversal, and when to use recursion vs iteration.</p>

<h3>Fibonacci:</h3>
<pre><code>def fibonacci(n):
    if n <= 0:
        return 0
    if n == 1:
        return 1
    return fibonacci(n-1) + fibonacci(n-2)

for i in range(8):
    print(fibonacci(i), end=" ")
# 0 1 1 2 3 5 8 13
</code></pre>

<h3>String Reversal:</h3>
<pre><code>def reverse(s):
    if len(s) <= 1:
        return s
    return reverse(s[1:]) + s[0]

print(reverse("hello"))  # olleh
</code></pre>

<h3>Count Occurrences:</h3>
<pre><code>def count(lst, target):
    if not lst:
        return 0
    match = 1 if lst[0] == target else 0
    return match + count(lst[1:], target)

print(count([1, 2, 3, 2, 2, 4], 2))  # 3
</code></pre>

<h3>When to Use Recursion:</h3>
<ul>
<li>Tree/graph traversal</li>
<li>Problems that naturally divide into sub-problems</li>
<li>When the recursive solution is clearer</li>
</ul>

<h3>When NOT to Use:</h3>
<ul>
<li>Simple loops work fine</li>
<li>Very deep recursion (Python limit ~1000)</li>
<li>When efficiency matters (use iteration + caching)</li>
</ul>`,
          challenge: {
            description: `Write a recursive function sum_digits(n) that sums all digits of a positive integer. Base case: n < 10 returns n. Recursive: n%10 + sum_digits(n//10). Test with 123 (6) and 9999 (36).`,
            starterCode: `def sum_digits(n):\n    pass\n\nprint(sum_digits(123))\nprint(sum_digits(9999))`,
            expectedOutput: `6\n36`,
            hints: [
              `Base case: if n < 10: return n`,
              `Recursive: return n % 10 + sum_digits(n // 10)`,
              `123: 3 + sum_digits(12) -> 3 + 2 + sum_digits(1) -> 3+2+1 = 6`,
            ]
          },
          quiz: [
            {
              question: `What is the Python default recursion limit?`,
              options: [
                `100`,
                `1000`,
                `10000`,
                `No limit`,
              ],
              correct: 1
            },
            {
              question: `fibonacci(5) returns?`,
              options: [
                `5`,
                `8`,
                `3`,
                `13`,
              ],
              correct: 0
            },
            {
              question: `When is recursion better than iteration?`,
              options: [
                `Always`,
                `For tree traversal and divide-and-conquer`,
                `Never`,
                `Only for math`,
              ],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recap-sum-nested-list',
          title: 'Recap - Sum Nested List',
          type: 'mastery',
          theory: `<h2>Recap: Sum Nested List</h2>
<p>A classic recursion problem: summing all numbers in a deeply nested list structure.</p>

<h3>The Problem:</h3>
<pre><code># Input: [1, [2, 3], [4, [5, 6]], 7]
# Sum: 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28
</code></pre>

<h3>Solution:</h3>
<pre><code>def sum_nested(lst):
    total = 0
    for item in lst:
        if isinstance(item, list):
            total += sum_nested(item)  # Recurse into sublists
        else:
            total += item              # Add numbers
    return total

print(sum_nested([1, [2, 3], [4, [5, 6]], 7]))  # 28
</code></pre>

<h3>How isinstance Works:</h3>
<pre><code>print(isinstance([1,2], list))   # True
print(isinstance(5, list))       # False
print(isinstance("hi", str))     # True
print(isinstance(5, (int, float)))  # True
</code></pre>

<h3>Deeper Nesting:</h3>
<pre><code>deep = [1, [2, [3, [4, [5]]]]]
print(sum_nested(deep))  # 15
</code></pre>`,
          challenge: {
            description: `Write sum_nested(lst) that recursively sums all numbers in a nested list. Test with [1, [2, 3], [4, [5, 6]], 7] (should be 28) and [[1, 1], [1, 1], [1, [1, [1]]]] (should be 7).`,
            starterCode: `def sum_nested(lst):\n    pass\n\nprint(sum_nested([1, [2, 3], [4, [5, 6]], 7]))\nprint(sum_nested([[1, 1], [1, 1], [1, [1, [1]]]]))`,
            expectedOutput: `28\n7`,
            hints: [
              `Loop through items in lst`,
              `if isinstance(item, list): total += sum_nested(item)`,
              `else: total += item`,
            ]
          },
          quiz: [
            {
              question: `What does isinstance(x, list) check?`,
              options: [
                `If x is empty`,
                `If x is a list type`,
                `If x contains lists`,
                `If x is iterable`,
              ],
              correct: 1
            },
            {
              question: `Why use recursion for nested lists?`,
              options: [
                `Faster`,
                `Unknown depth requires recursive approach`,
                `Only way`,
                `Simpler syntax`,
              ],
              correct: 1
            },
            {
              question: `What is the base case for sum_nested?`,
              options: [
                `Empty list`,
                `When item is a number (not a list)`,
                `When total > 0`,
                `When depth = 0`,
              ],
              correct: 1
            },
          ]
          ,mastery: {
            description: `Write flatten(lst) that recursively flattens a nested list into a single flat list. Test with [1, [2, 3], [4, [5, 6]], 7]. Print the flattened result.`,
            starterCode: `def flatten(lst):\n    pass\n\nprint(flatten([1, [2, 3], [4, [5, 6]], 7]))`,
            expectedOutput: `[1, 2, 3, 4, 5, 6, 7]`,
            hints: [
              `result = [] then loop through items`,
              `if isinstance(item, list): result.extend(flatten(item))`,
              `else: result.append(item)`,
            ]
          }
        }
      ]
    },
    {
      id: 'basic-error-handling',
      title: 'Basic Error Handling',
      lessons: [
        {
          id: 'what-is-error-handling',
          title: 'What is Error Handling?',
          type: 'challenge',
          theory: `<h2>What is Error Handling?</h2>
<p>Errors (exceptions) are events that disrupt normal program flow. Error handling lets your program respond to problems gracefully instead of crashing.</p>

<h3>Common Python Exceptions:</h3>
<pre><code># ZeroDivisionError
# result = 10 / 0

# TypeError
# result = "hello" + 5

# ValueError
# number = int("abc")

# KeyError
# d = {}; d["missing"]

# IndexError
# lst = [1, 2]; lst[5]

# FileNotFoundError
# open("nonexistent.txt")
</code></pre>

<h3>Why Handle Errors?</h3>
<ul>
<li>Prevent program crashes</li>
<li>Provide helpful messages to users</li>
<li>Handle edge cases (user input, network, files)</li>
<li>Continue execution after recoverable errors</li>
</ul>

<h3>Without Error Handling:</h3>
<pre><code># This crashes the entire program
numbers = [1, 2, 3]
print(numbers[10])  # IndexError! Program stops here
print("This never runs")
</code></pre>

<h3>With Error Handling:</h3>
<pre><code>numbers = [1, 2, 3]
try:
    print(numbers[10])
except IndexError:
    print("Index out of range!")
print("Program continues!")
# Index out of range!
# Program continues!
</code></pre>`,
          challenge: {
            description: `Without using try/except yet, identify what type of error each would cause. Create a list errors = ["ZeroDivisionError", "ValueError", "KeyError"] corresponding to: 10/0, int("hello"), {}["x"]. Print each error type.`,
            starterCode: `# What error does each cause?\n# 10 / 0 -> ?\n# int("hello") -> ?\n# {}["x"] -> ?\n\nerrors = ["ZeroDivisionError", "ValueError", "KeyError"]\nfor error in errors:\n    print(error)`,
            expectedOutput: `ZeroDivisionError\nValueError\nKeyError`,
            hints: [
              `Division by zero causes ZeroDivisionError`,
              `Converting non-numeric string causes ValueError`,
              `Accessing missing dict key causes KeyError`,
            ]
          },
          quiz: [
            {
              question: `What happens when an unhandled exception occurs?`,
              options: [
                `Returns None`,
                `Program crashes`,
                `Skips the line`,
                `Retries automatically`,
              ],
              correct: 1
            },
            {
              question: `What error does int("abc") raise?`,
              options: [
                `TypeError`,
                `ValueError`,
                `SyntaxError`,
                `NameError`,
              ],
              correct: 1
            },
            {
              question: `What error does [1,2][5] raise?`,
              options: [
                `KeyError`,
                `ValueError`,
                `IndexError`,
                `TypeError`,
              ],
              correct: 2
            },
          ]
        }
,
        {
          id: 'try-except-block',
          title: 'The Try and Except Block',
          type: 'challenge',
          theory: `<h2>The Try and Except Block</h2>
<p>The <code>try/except</code> block catches exceptions and handles them gracefully.</p>

<h3>Basic Syntax:</h3>
<pre><code>try:
    # Code that might fail
    risky_operation()
except ExceptionType:
    # What to do if it fails
    handle_error()
</code></pre>

<h3>Examples:</h3>
<pre><code># Handling division by zero
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
    result = 0
print(f"Result: {result}")
# Cannot divide by zero!
# Result: 0
</code></pre>

<h3>try/except/else/finally:</h3>
<pre><code>try:
    number = int("42")
except ValueError:
    print("Not a valid number!")
else:
    print(f"Success! Got {number}")  # Runs if NO exception
finally:
    print("This always runs")       # ALWAYS runs

# Success! Got 42
# This always runs
</code></pre>

<h3>Catching the Exception Object:</h3>
<pre><code>try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
# Error: division by zero
</code></pre>

<h3>Generic Exception (use sparingly):</h3>
<pre><code>try:
    # some code
    x = int("abc")
except Exception as e:
    print(f"Something went wrong: {e}")
# Something went wrong: invalid literal for int() with base 10: 'abc'
</code></pre>`,
          challenge: {
            description: `Write code that tries to convert "hello" to int. If ValueError occurs, print "Invalid number!". Then try to access index 10 of [1,2,3]. If IndexError, print "Index out of range!". Print "Done" at the end.`,
            starterCode: `# Try converting "hello" to int\n\n\n# Try accessing index 10\n\n\nprint("Done")`,
            expectedOutput: `Invalid number!\nIndex out of range!\nDone`,
            hints: [
              `try: int("hello") except ValueError: print(...)`,
              `try: [1,2,3][10] except IndexError: print(...)`,
              `Each try/except is independent`,
            ]
          },
          quiz: [
            {
              question: `What does the "else" block run?`,
              options: [
                `Always`,
                `Only if exception occurred`,
                `Only if NO exception occurred`,
                `Before try`,
              ],
              correct: 2
            },
            {
              question: `What does "finally" block do?`,
              options: [
                `Runs only on error`,
                `Runs only on success`,
                `Always runs regardless`,
                `Stops the program`,
              ],
              correct: 2
            },
            {
              question: `"except Exception as e" - what is e?`,
              options: [
                `Error code number`,
                `The exception object with details`,
                `A boolean`,
                `The line number`,
              ],
              correct: 1
            },
            {
              question: `Should you catch all exceptions with bare "except:"?`,
              options: [
                `Yes, always`,
                `No, catch specific exceptions`,
                `Only in production`,
                `Only for debugging`,
              ],
              correct: 1
            },
            {
              question: `Can try/except be nested?`,
              options: [`No`, `Yes, inner try/except inside outer`, `Only 2 levels`, `Only in functions`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'handling-multiple-exceptions',
          title: 'Handling Multiple Exceptions',
          type: 'challenge',
          theory: `<h2>Handling Multiple Exceptions</h2>
<p>Code can raise different types of exceptions. You can handle each one differently.</p>

<h3>Multiple except Blocks:</h3>
<pre><code>def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
        return None
    except TypeError:
        print("Error: Invalid types for division!")
        return None

print(safe_divide(10, 2))     # 5.0
print(safe_divide(10, 0))     # Error: Cannot divide by zero! None
print(safe_divide("10", 2))   # Error: Invalid types... None
</code></pre>

<h3>Catching Multiple in One Block:</h3>
<pre><code>try:
    value = int(input_data)
except (ValueError, TypeError) as e:
    print(f"Conversion error: {e}")
</code></pre>

<h3>Order Matters:</h3>
<pre><code># More specific exceptions first, general last
try:
    result = some_operation()
except ValueError:
    print("Value error")
except TypeError:
    print("Type error")
except Exception as e:
    print(f"Unexpected: {e}")
</code></pre>

<h3>Practical Pattern:</h3>
<pre><code>def parse_data(data):
    try:
        value = int(data)
        result = 100 / value
        return round(result, 2)
    except ValueError:
        return "Error: not a number"
    except ZeroDivisionError:
        return "Error: cannot divide by zero"

print(parse_data("5"))      # 20.0
print(parse_data("abc"))    # Error: not a number
print(parse_data("0"))      # Error: cannot divide by zero
</code></pre>`,
          challenge: {
            description: `Write safe_calculate(a, b) that tries to return a/b rounded to 2 decimals. Handle ZeroDivisionError (print "Cannot divide by zero"), TypeError (print "Invalid types"), and any other Exception (print "Unexpected error"). Return None on any error. Test with (10,3), (10,0), and ("a",2).`,
            starterCode: `def safe_calculate(a, b):\n    pass\n\nprint(safe_calculate(10, 3))\nprint(safe_calculate(10, 0))\nprint(safe_calculate("a", 2))`,
            expectedOutput: `3.33\nCannot divide by zero\nNone\nInvalid types\nNone`,
            hints: [
              `try: return round(a/b, 2)`,
              `except ZeroDivisionError: print(...); return None`,
              `except TypeError: print(...); return None`,
            ]
          },
          quiz: [
            {
              question: `Can you have multiple except blocks?`,
              options: [
                `No, only one`,
                `Yes, for different exception types`,
                `Only two`,
                `Only with finally`,
              ],
              correct: 1
            },
            {
              question: `except (ValueError, TypeError) catches?`,
              options: [
                `Only ValueError`,
                `Only TypeError`,
                `Either one`,
                `Both at same time`,
              ],
              correct: 2
            },
            {
              question: `Should specific or general exceptions come first?`,
              options: [
                `General first`,
                `Specific first`,
                `Order does not matter`,
                `Only one allowed`,
              ],
              correct: 1
            },
            {
              question: `Does except Exception catch all errors?`,
              options: [`All including SystemExit`, `Most exceptions except SystemExit/KeyboardInterrupt`, `Only built-in`, `Only custom`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recap-shopping-cart-errors',
          title: 'Recap - Shopping Cart Errors',
          type: 'mastery',
          theory: `<h2>Recap: Shopping Cart Errors</h2>
<p>Build a robust shopping cart that handles various errors gracefully.</p>

<h3>Error-Prone Operations:</h3>
<pre><code>def add_to_cart(cart, item, quantity, price):
    try:
        qty = int(quantity)
        prc = float(price)
        if qty <= 0 or prc <= 0:
            raise ValueError("Quantity and price must be positive")
        cart[item] = {"qty": qty, "price": prc}
        print(f"Added {item}: {qty} x ${prc}")
        return True
    except ValueError as e:
        print(f"Error adding {item}: {e}")
        return False
    except TypeError as e:
        print(f"Type error for {item}: {e}")
        return False

def get_total(cart):
    try:
        total = sum(info["qty"] * info["price"] for info in cart.values())
        return round(total, 2)
    except (TypeError, KeyError) as e:
        print(f"Error calculating total: {e}")
        return 0
</code></pre>

<h3>Raising Custom Errors:</h3>
<pre><code># Use raise to create your own errors
if quantity < 0:
    raise ValueError("Quantity cannot be negative")
</code></pre>`,
          challenge: {
            description: `Create add_to_cart(cart, item, quantity) that converts quantity to int (handle ValueError), checks quantity > 0 (print "Quantity must be positive" if not), and adds to cart dict. Test: add "apple" qty "3", add "banana" qty "abc", add "cherry" qty "-1". Print final cart.`,
            starterCode: `def add_to_cart(cart, item, quantity):\n    pass\n\ncart = {}\nadd_to_cart(cart, "apple", "3")\nadd_to_cart(cart, "banana", "abc")\nadd_to_cart(cart, "cherry", "-1")\nprint(cart)`,
            expectedOutput: `Added apple: 3\nError: invalid quantity\nQuantity must be positive\n{'apple': 3}`,
            hints: [
              `try: qty = int(quantity) except ValueError: print("Error: invalid quantity"); return`,
              `if qty <= 0: print("Quantity must be positive"); return`,
              `cart[item] = qty; print(f"Added {item}: {qty}")`,
            ]
          },
          quiz: [
            {
              question: `What does "raise ValueError(msg)" do?`,
              options: [
                `Prints msg`,
                `Creates and throws an exception`,
                `Returns msg`,
                `Logs msg`,
              ],
              correct: 1
            },
            {
              question: `Can you raise exceptions manually?`,
              options: [
                `No`,
                `Yes, with the raise keyword`,
                `Only built-in ones`,
                `Only in except blocks`,
              ],
              correct: 1
            },
            {
              question: `Best practice for error messages?`,
              options: [
                `Be vague`,
                `Be specific about what went wrong`,
                `Use error codes only`,
                `Never show errors`,
              ],
              correct: 1
            },
          ]
          ,mastery: {
            description: `Create safe_divide_list(numbers, divisor) that divides each number by divisor, handling ZeroDivisionError and TypeError. Return list of results (None for errors). Test with [10, 20, 30] / 5 and [10, 20, 30] / 0.`,
            starterCode: `def safe_divide_list(numbers, divisor):\n    pass\n\nprint(safe_divide_list([10, 20, 30], 5))\nprint(safe_divide_list([10, 20, 30], 0))`,
            expectedOutput: `[2.0, 4.0, 6.0]\nCannot divide by zero\nNone`,
            hints: [
              `try: return [n / divisor for n in numbers]`,
              `except ZeroDivisionError: print message, return None`,
              `except TypeError: return None`,
            ]
          }
        }
      ]
    },
    {
      id: 'inventory-management-system',
      title: 'Inventory Management System',
      lessons: [
        {
          id: 'project-overview-inventory',
          title: 'Project Overview',
          type: 'project',
          theory: `<h2>Project: Inventory Management System</h2>
<p>We are building an inventory system that tracks products, their stock levels, and generates reports. This combines error handling, dictionaries, and data aggregation.</p>

<h3>Data Structure:</h3>
<pre><code>inventory = {
    "laptop": {"price": 999.99, "stock": 50, "category": "electronics"},
    "notebook": {"price": 4.99, "stock": 200, "category": "stationery"}
}
</code></pre>

<h3>Functions to Build:</h3>
<ol>
<li><strong>add_item()</strong> - Add new product to inventory</li>
<li><strong>update_stock()</strong> - Increase/decrease stock</li>
<li><strong>check_availability()</strong> - Check if item is in stock</li>
<li><strong>generate_report()</strong> - Summary statistics</li>
</ol>

<h3>Error Handling Throughout:</h3>
<ul>
<li>Validate item exists before operations</li>
<li>Prevent negative stock levels</li>
<li>Handle invalid input types</li>
</ul>`,
          challenge: {
            description: `Create the initial inventory structure with: "laptop" (price: 999.99, stock: 50, category: "electronics"), "phone" (price: 699.99, stock: 100, category: "electronics"), "notebook" (price: 4.99, stock: 200, category: "stationery"). Print the number of products and the laptop stock.`,
            starterCode: `# Create inventory\ninventory = {}\n\n# Add items\n\n# Print product count and laptop stock`,
            expectedOutput: `3\n50`,
            hints: [
              `inventory["laptop"] = {"price": 999.99, "stock": 50, "category": "electronics"}`,
              `print(len(inventory))`,
              `print(inventory["laptop"]["stock"])`,
            ]
          },
          quiz: [
            {
              question: `Why use nested dicts for inventory?`,
              options: [
                `Required`,
                `Each item has multiple attributes`,
                `Faster`,
                `Only way to store data`,
              ],
              correct: 1
            },
            {
              question: `What error might occur accessing inventory["missing"]?`,
              options: [
                `IndexError`,
                `KeyError`,
                `ValueError`,
                `TypeError`,
              ],
              correct: 1
            },
            {
              question: `Why track category in inventory?`,
              options: [
                `Required`,
                `Enables filtering and reporting by category`,
                `Prevents errors`,
                `Saves memory`,
              ],
              correct: 1
            },
            {
              question: `What makes nested dicts good for inventory?`,
              options: [`Speed`, `Each product has multiple named attributes`, `Required for numbers`, `Python standard`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-add-item-inventory',
          title: 'Add Item',
          type: 'project',
          theory: `<h2>Inventory: Add Item</h2>
<p>Add new products with validation for duplicates and data types.</p>

<h3>Implementation:</h3>
<pre><code>def add_item(inventory, name, price, stock, category):
    if name in inventory:
        print(f"'{name}' already exists in inventory!")
        return False
    try:
        price = float(price)
        stock = int(stock)
    except (ValueError, TypeError):
        print("Invalid price or stock value!")
        return False
    if price <= 0 or stock < 0:
        print("Price must be positive, stock non-negative!")
        return False
    inventory[name] = {"price": price, "stock": stock, "category": category}
    print(f"Added '{name}' - ${price}, {stock} in stock")
    return True
</code></pre>`,
          challenge: {
            description: `Create add_item(inventory, name, price, stock, category) with validation. Test: add "tablet" (449.99, 75, "electronics") - success. Try adding "tablet" again - duplicate. Try adding "pen" with price "abc" - invalid.`,
            starterCode: `def add_item(inventory, name, price, stock, category):\n    pass\n\ninventory = {}\nadd_item(inventory, "tablet", 449.99, 75, "electronics")\nadd_item(inventory, "tablet", 299.99, 50, "electronics")\nadd_item(inventory, "pen", "abc", 100, "stationery")`,
            expectedOutput: `Added 'tablet' - $449.99, 75 in stock\n'tablet' already exists in inventory!\nInvalid price or stock value!`,
            hints: [
              `Check if name in inventory first`,
              `try: price = float(price); stock = int(stock)`,
              `except (ValueError, TypeError): print error`,
            ]
          },
          quiz: [
            {
              question: `Why validate price and stock types?`,
              options: [
                `Performance`,
                `User input might be strings or wrong types`,
                `Required`,
                `Style`,
              ],
              correct: 1
            },
            {
              question: `Why check price > 0?`,
              options: [
                `Python requires it`,
                `Negative prices make no business sense`,
                `Prevents overflow`,
                `Type safety`,
              ],
              correct: 1
            },
            {
              question: `What does float(price) do if price is already a float?`,
              options: [
                `Error`,
                `Returns it unchanged`,
                `Converts to int`,
                `Returns string`,
              ],
              correct: 1
            },
            {
              question: `Why use try/except for type conversion?`,
              options: [`Style`, `Input might be wrong type causing ValueError`, `Required`, `Performance`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-update-stock',
          title: 'Update Stock',
          type: 'project',
          theory: `<h2>Inventory: Update Stock</h2>
<p>Increase or decrease stock levels with validation to prevent negative stock.</p>

<h3>Implementation:</h3>
<pre><code>def update_stock(inventory, name, change):
    if name not in inventory:
        print(f"'{name}' not found in inventory!")
        return False
    try:
        change = int(change)
    except (ValueError, TypeError):
        print("Invalid stock change value!")
        return False
    new_stock = inventory[name]["stock"] + change
    if new_stock < 0:
        print(f"Insufficient stock! Current: {inventory[name]['stock']}")
        return False
    inventory[name]["stock"] = new_stock
    action = "Added" if change > 0 else "Removed"
    print(f"{action} {abs(change)} units of '{name}'. New stock: {new_stock}")
    return True
</code></pre>

<h3>Usage:</h3>
<pre><code>update_stock(inventory, "laptop", 10)   # Add stock
update_stock(inventory, "laptop", -5)   # Remove stock
update_stock(inventory, "laptop", -100) # Error: insufficient
</code></pre>`,
          challenge: {
            description: `Create update_stock(inventory, name, change). Handle: item not found, invalid change type, insufficient stock. Test: update "laptop" +20, then -5, then -100 (insufficient when stock is 65).`,
            starterCode: `def update_stock(inventory, name, change):\n    pass\n\ninventory = {"laptop": {"price": 999.99, "stock": 50, "category": "electronics"}}\nupdate_stock(inventory, "laptop", 20)\nupdate_stock(inventory, "laptop", -5)\nupdate_stock(inventory, "laptop", -100)`,
            expectedOutput: `Added 20 units of 'laptop'. New stock: 70\nRemoved 5 units of 'laptop'. New stock: 65\nInsufficient stock! Current: 65`,
            hints: [
              `Check if name in inventory first`,
              `new_stock = inventory[name]["stock"] + change`,
              `if new_stock < 0: print insufficient message`,
            ]
          },
          quiz: [
            {
              question: `Why prevent negative stock?`,
              options: [
                `Python requires it`,
                `Cannot have negative physical items`,
                `Causes errors`,
                `Type safety`,
              ],
              correct: 1
            },
            {
              question: `How to handle stock increase vs decrease?`,
              options: [
                `Separate functions`,
                `Single function with positive/negative change`,
                `Only increase allowed`,
                `Use a flag`,
              ],
              correct: 1
            },
            {
              question: `What does abs(change) do?`,
              options: [
                `Makes it positive (absolute value)`,
                `Makes it negative`,
                `Returns string`,
                `Rounds it`,
              ],
              correct: 0
            },
            {
              question: `What pattern handles both increase and decrease?`,
              options: [`Two functions`, `Single function with signed integer parameter`, `Boolean flag`, `Global variable`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-check-availability',
          title: 'Check Availability',
          type: 'project',
          theory: `<h2>Inventory: Check Availability</h2>
<p>Check if an item is available (exists and has stock > 0) and optionally check if a requested quantity is available.</p>

<h3>Implementation:</h3>
<pre><code>def check_availability(inventory, name, quantity=1):
    if name not in inventory:
        print(f"'{name}' not found!")
        return False
    stock = inventory[name]["stock"]
    if stock >= quantity:
        print(f"'{name}' available: {stock} in stock")
        return True
    else:
        print(f"'{name}' insufficient: only {stock} available, need {quantity}")
        return False
</code></pre>

<h3>Usage:</h3>
<pre><code>check_availability(inventory, "laptop")        # Available
check_availability(inventory, "laptop", 100)   # Insufficient
check_availability(inventory, "unicorn")       # Not found
</code></pre>`,
          challenge: {
            description: `Create check_availability(inventory, name, quantity=1). Test with inventory having laptop (stock: 50): check "laptop" qty 1, check "laptop" qty 100, check "tablet" (not found).`,
            starterCode: `def check_availability(inventory, name, quantity=1):\n    pass\n\ninventory = {"laptop": {"price": 999.99, "stock": 50, "category": "electronics"}}\ncheck_availability(inventory, "laptop")\ncheck_availability(inventory, "laptop", 100)\ncheck_availability(inventory, "tablet")`,
            expectedOutput: `'laptop' available: 50 in stock\n'laptop' insufficient: only 50 available, need 100\n'tablet' not found!`,
            hints: [
              `if name not in inventory: print not found`,
              `stock = inventory[name]["stock"]`,
              `if stock >= quantity: available else: insufficient`,
            ]
          },
          quiz: [
            {
              question: `Why have quantity default to 1?`,
              options: [
                `Required`,
                `Common case is checking if ANY are available`,
                `Prevents errors`,
                `Python syntax`,
              ],
              correct: 1
            },
            {
              question: `What is a default parameter?`,
              options: [
                `Required value`,
                `Value used when argument not provided`,
                `Global variable`,
                `Constant`,
              ],
              correct: 1
            },
            {
              question: `check_availability returns what type?`,
              options: [
                `The stock number`,
                `Boolean (True/False)`,
                `The item dict`,
                `A string`,
              ],
              correct: 1
            },
            {
              question: `What does a default parameter like quantity=1 provide?`,
              options: [`Required argument`, `Optional argument with fallback value`, `Global variable`, `Type hint`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'project-generate-report',
          title: 'Generate Report',
          type: 'project',
          theory: `<h2>Inventory: Generate Report</h2>
<p>Create a comprehensive report showing inventory statistics using all aggregation tools.</p>

<h3>Implementation:</h3>
<pre><code>def generate_report(inventory):
    if not inventory:
        print("Inventory is empty!")
        return
    
    total_items = len(inventory)
    total_stock = sum(item["stock"] for item in inventory.values())
    total_value = sum(item["price"] * item["stock"] for item in inventory.values())
    
    print("=== Inventory Report ===")
    print(f"Total products: {total_items}")
    print(f"Total units: {total_stock}")
    print(f"Total value: ${round(total_value, 2)}")
    
    # Low stock warning
    low_stock = [name for name, info in inventory.items() if info["stock"] < 10]
    if low_stock:
        print(f"Low stock alert: {', '.join(low_stock)}")
</code></pre>`,
          challenge: {
            description: `Create generate_report(inventory) that prints: total products, total units in stock, total inventory value (price*stock for each). Test with: laptop (999.99, 50), phone (699.99, 100), notebook (4.99, 200).`,
            starterCode: `def generate_report(inventory):\n    pass\n\ninventory = {\n    "laptop": {"price": 999.99, "stock": 50, "category": "electronics"},\n    "phone": {"price": 699.99, "stock": 100, "category": "electronics"},\n    "notebook": {"price": 4.99, "stock": 200, "category": "stationery"}\n}\ngenerate_report(inventory)`,
            expectedOutput: `=== Inventory Report ===\nTotal products: 3\nTotal units: 350\nTotal value: $121997.3`,
            hints: [
              `total_stock = sum(item["stock"] for item in inventory.values())`,
              `total_value = sum(item["price"] * item["stock"] for item in inventory.values())`,
              `print(f"Total value: ${round(total_value, 2)}")`,
            ]
          },
          quiz: [
            {
              question: `How to calculate total inventory value?`,
              options: [
                `sum(prices)`,
                `sum(price * stock for each item)`,
                `sum(stocks)`,
                `max(prices) * len(items)`,
              ],
              correct: 1
            },
            {
              question: `What aggregation function totals stock?`,
              options: [
                `max()`,
                `len()`,
                `sum()`,
                `count()`,
              ],
              correct: 2
            },
            {
              question: `Generator expression vs list comprehension in sum()?`,
              options: [
                `No difference`,
                `Generator uses less memory (no list created)`,
                `List comp is faster`,
                `Generator returns different type`,
              ],
              correct: 1
            },
            {
              question: `sum(x["price"]*x["stock"] for x in inv.values()) is a?`,
              options: [`List comprehension`, `Generator expression`, `Lambda function`, `Map call`],
              correct: 1
            },
          ]
        }
      ]
    },
    {
      id: 'higher-order-functions',
      title: 'Higher-Order Functions',
      lessons: [
        {
          id: 'the-map-function',
          title: 'The Map Function',
          type: 'challenge',
          theory: `<h2>The Map Function</h2>
<p><code>map()</code> applies a function to every item in an iterable and returns a map object (which can be converted to a list).</p>

<h3>Syntax:</h3>
<pre><code>map(function, iterable)</code></pre>

<h3>Basic Examples:</h3>
<pre><code># Double each number
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)  # [2, 4, 6, 8, 10]

# Convert strings to integers
str_nums = ["1", "2", "3", "4"]
integers = list(map(int, str_nums))
print(integers)  # [1, 2, 3, 4]

# Uppercase
words = ["hello", "world"]
upper = list(map(str.upper, words))
print(upper)  # ['HELLO', 'WORLD']
</code></pre>

<h3>With Named Functions:</h3>
<pre><code>def celsius_to_fahrenheit(c):
    return round(c * 9/5 + 32, 1)

temps_c = [0, 20, 37, 100]
temps_f = list(map(celsius_to_fahrenheit, temps_c))
print(temps_f)  # [32.0, 68.0, 98.6, 212.0]
</code></pre>

<h3>Multiple Iterables:</h3>
<pre><code>a = [1, 2, 3]
b = [10, 20, 30]
sums = list(map(lambda x, y: x + y, a, b))
print(sums)  # [11, 22, 33]
</code></pre>

<h3>map() vs List Comprehension:</h3>
<pre><code># These are equivalent:
result1 = list(map(lambda x: x**2, range(5)))
result2 = [x**2 for x in range(5)]
# Both give [0, 1, 4, 9, 16]
</code></pre>`,
          challenge: {
            description: `Use map() to: 1) Convert ["10", "20", "30", "40"] to integers and print. 2) Square each number in [1,2,3,4,5] and print. 3) Get lengths of ["python", "is", "great"] and print.`,
            starterCode: `# Convert strings to ints\n\n# Square numbers\n\n# Get word lengths`,
            expectedOutput: `[10, 20, 30, 40]\n[1, 4, 9, 16, 25]\n[6, 2, 5]`,
            hints: [
              `list(map(int, ["10", "20", "30", "40"]))`,
              `list(map(lambda x: x**2, [1,2,3,4,5]))`,
              `list(map(len, ["python", "is", "great"]))`,
            ]
          },
          quiz: [
            {
              question: `What does map() return?`,
              options: [
                `A list`,
                `A map object (iterator)`,
                `A dictionary`,
                `None`,
              ],
              correct: 1
            },
            {
              question: `map(int, ["1","2","3"]) is equivalent to?`,
              options: [
                `int(["1","2","3"])`,
                `[int(x) for x in ["1","2","3"]]`,
                `list(int, ["1","2","3"])`,
                `["1","2","3"].map(int)`,
              ],
              correct: 1
            },
            {
              question: `Can map() take multiple iterables?`,
              options: [
                `No`,
                `Yes, the function should accept same number of args`,
                `Only two`,
                `Only with zip()`,
              ],
              correct: 1
            },
            {
              question: `Why convert map() result to list?`,
              options: [
                `Required`,
                `To see/use all values (map is lazy)`,
                `To avoid errors`,
                `For performance`,
              ],
              correct: 1
            },
            {
              question: `Is map() lazy (processes on demand)?`,
              options: [`No, processes immediately`, `Yes, that is why we wrap in list()`, `Only in Python 3`, `Depends on function`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'the-filter-function',
          title: 'The Filter Function',
          type: 'challenge',
          theory: `<h2>The Filter Function</h2>
<p><code>filter()</code> creates an iterator of elements for which a function returns True. It selects items that match a condition.</p>

<h3>Syntax:</h3>
<pre><code>filter(function, iterable)</code></pre>

<h3>Basic Examples:</h3>
<pre><code># Keep only even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8]

# Keep positive numbers
values = [-3, -1, 0, 2, 5, -4, 8]
positives = list(filter(lambda x: x > 0, values))
print(positives)  # [2, 5, 8]
</code></pre>

<h3>With Strings:</h3>
<pre><code># Filter long words
words = ["hi", "hello", "hey", "wonderful", "ok"]
long_words = list(filter(lambda w: len(w) > 3, words))
print(long_words)  # ['hello', 'wonderful']

# Filter non-empty strings
data = ["hello", "", "world", "", "python"]
non_empty = list(filter(None, data))
print(non_empty)  # ['hello', 'world', 'python']
</code></pre>

<h3>With Dictionaries:</h3>
<pre><code>students = [
    {"name": "Alice", "grade": 92},
    {"name": "Bob", "grade": 65},
    {"name": "Charlie", "grade": 88}
]

passing = list(filter(lambda s: s["grade"] >= 70, students))
print([s["name"] for s in passing])
# ['Alice', 'Charlie']
</code></pre>

<h3>filter() vs List Comprehension:</h3>
<pre><code># Equivalent:
result1 = list(filter(lambda x: x > 0, numbers))
result2 = [x for x in numbers if x > 0]
</code></pre>`,
          challenge: {
            description: `Use filter() to: 1) Get numbers greater than 10 from [5, 12, 3, 18, 7, 25, 1] and print. 2) Get words starting with "p" from ["python", "java", "perl", "ruby", "php"] and print. 3) Filter None values from [1, None, 3, None, 5] and print.`,
            starterCode: `# Numbers greater than 10\n\n# Words starting with "p"\n\n# Remove None values`,
            expectedOutput: `[12, 18, 25]\n[&apos;python&apos;, &apos;perl&apos;, &apos;php&apos;]\n[1, 3, 5]`,
            hints: [
              `list(filter(lambda x: x > 10, [5,12,3,18,7,25,1]))`,
              `list(filter(lambda w: w.startswith("p"), words))`,
              `list(filter(None, [1, None, 3, None, 5])) removes falsy values`,
            ]
          },
          quiz: [
            {
              question: `What does filter() keep?`,
              options: [
                `All items`,
                `Items where function returns True`,
                `Items where function returns False`,
                `First matching item`,
              ],
              correct: 1
            },
            {
              question: `What does filter(None, iterable) do?`,
              options: [
                `Removes all items`,
                `Keeps only truthy items`,
                `Returns None`,
                `Error`,
              ],
              correct: 1
            },
            {
              question: `filter() returns what type?`,
              options: [
                `list`,
                `filter object (iterator)`,
                `tuple`,
                `set`,
              ],
              correct: 1
            },
            {
              question: `filter(lambda x: x>5, [3,6,1,8]) equals?`,
              options: [
                `[3, 1]`,
                `[6, 8]`,
                `[True, True]`,
                `[6, 1, 8]`,
              ],
              correct: 1
            },
            {
              question: `filter(lambda x: x, [0, 1, "", "hi", None]) keeps?`,
              options: [`All items`, `[1, "hi"] (truthy values)`, `[0, "", None]`, `Error`],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recap-email-validator',
          title: 'Recap - Email Validator',
          type: 'challenge',
          theory: `<h2>Recap: Email Validator</h2>
<p>Combine map and filter to validate and process email addresses.</p>

<h3>Email Validation Rules:</h3>
<pre><code>def is_valid_email(email):
    """Basic email validation."""
    if "@" not in email:
        return False
    if "." not in email.split("@")[1]:
        return False
    if email.startswith("@") or email.endswith("@"):
        return False
    return True

emails = [
    "alice@example.com",
    "invalid-email",
    "bob@mail.org",
    "@missing.com",
    "test@noext"
]

valid = list(filter(is_valid_email, emails))
print(valid)  # ['alice@example.com', 'bob@mail.org']
</code></pre>

<h3>Processing Valid Emails:</h3>
<pre><code># Clean and validate
raw_emails = ["  Alice@Example.COM  ", "bob@MAIL.org", "invalid"]
cleaned = list(map(lambda e: e.strip().lower(), raw_emails))
valid = list(filter(is_valid_email, cleaned))
print(valid)  # ['alice@example.com', 'bob@mail.org']
</code></pre>

<h3>Pipeline Pattern:</h3>
<pre><code># Clean -> Validate -> Extract domains
domains = list(map(lambda e: e.split("@")[1], valid))
print(domains)  # ['example.com', 'mail.org']
</code></pre>`,
          challenge: {
            description: `Create is_valid_email(email) that checks: contains "@" and has "." after "@". Use filter to get valid emails from ["user@mail.com", "bad-email", "test@site.org", "no-at-sign", "x@y.z"]. Print valid list. Then use map to extract just the domains from valid emails and print.`,
            starterCode: `def is_valid_email(email):\n    pass\n\nemails = ["user@mail.com", "bad-email", "test@site.org", "no-at-sign", "x@y.z"]\n\n# Filter valid emails\n\n# Extract domains from valid emails`,
            expectedOutput: `['user@mail.com', 'test@site.org', 'x@y.z']\n['mail.com', 'site.org', 'y.z']`,
            hints: [
              `Check "@" in email and "." in email.split("@")[1]`,
              `valid = list(filter(is_valid_email, emails))`,
              `domains = list(map(lambda e: e.split("@")[1], valid))`,
            ]
          },
          quiz: [
            {
              question: `What is a data pipeline?`,
              options: [
                `A physical pipe`,
                `Chaining operations (clean -> validate -> transform)`,
                `A type of list`,
                `A Python module`,
              ],
              correct: 1
            },
            {
              question: `Can you chain map() and filter()?`,
              options: [
                `No`,
                `Yes, output of one feeds into the other`,
                `Only with list()`,
                `Only in Python 3`,
              ],
              correct: 1
            },
            {
              question: `"a@b.c".split("@")[1] returns?`,
              options: [
                `"a"`,
                `"b.c"`,
                `"@"`,
                `["a", "b.c"]`,
              ],
              correct: 1
            },
          ]
        }
,
        {
          id: 'recap-number-processor',
          title: 'Recap - Number Processor',
          type: 'mastery',
          theory: `<h2>Recap: Number Processor</h2>
<p>Build a number processing pipeline using map, filter, and aggregation functions together.</p>

<h3>Processing Pipeline:</h3>
<pre><code>raw_data = ["10", "abc", "25", "0", "42", "xyz", "7"]

# Step 1: Try to convert to int (handle errors)
def safe_int(s):
    try:
        return int(s)
    except ValueError:
        return None

# Step 2: Convert (map)
converted = list(map(safe_int, raw_data))
print(converted)  # [10, None, 25, 0, 42, None, 7]

# Step 3: Remove None (filter)
numbers = list(filter(None, converted))
print(numbers)  # [10, 25, 42, 7]
# Note: filter(None,...) also removes 0!

# Better: filter explicitly
numbers = [x for x in converted if x is not None]
print(numbers)  # [10, 0, 25, 42, 7]

# Step 4: Aggregate
print(f"Sum: {sum(numbers)}")
print(f"Avg: {round(sum(numbers)/len(numbers), 1)}")
</code></pre>

<h3>Complete Processor:</h3>
<pre><code>def process_numbers(raw_data):
    converted = list(map(safe_int, raw_data))
    valid = [x for x in converted if x is not None]
    return {
        "valid_count": len(valid),
        "invalid_count": converted.count(None),
        "sum": sum(valid),
        "average": round(sum(valid)/len(valid), 1) if valid else 0
    }
</code></pre>`,
          challenge: {
            description: `Process raw_data = ["5", "10", "abc", "15", "xyz", "20"]. Use map with a safe_int function (returns None on error). Filter out None values. Print the valid numbers list, their sum, and their average rounded to 1 decimal.`,
            starterCode: `def safe_int(s):\n    try:\n        return int(s)\n    except ValueError:\n        return None\n\nraw_data = ["5", "10", "abc", "15", "xyz", "20"]\n\n# Map with safe_int\n\n# Filter None values\n\n# Print valid numbers, sum, average`,
            expectedOutput: `[5, 10, 15, 20]\n50\n12.5`,
            hints: [
              `converted = list(map(safe_int, raw_data))`,
              `valid = [x for x in converted if x is not None]`,
              `print(round(sum(valid)/len(valid), 1))`,
            ]
          },
          quiz: [
            {
              question: `What is safe_int pattern for?`,
              options: [
                `Speed`,
                `Converting strings without crashing on errors`,
                `Memory saving`,
                `Type checking`,
              ],
              correct: 1
            },
            {
              question: `Does filter(None, [0, 1, 2]) keep 0?`,
              options: [
                `Yes`,
                `No, 0 is falsy`,
                `Error`,
                `Only in Python 3`,
              ],
              correct: 1
            },
            {
              question: `Pipeline = map + filter + aggregate means?`,
              options: [
                `One function`,
                `Transform -> Select -> Summarize`,
                `Three separate programs`,
                `Only for numbers`,
              ],
              correct: 1
            },
          ]
          ,mastery: {
            description: `Create a pipeline: from data = [" 15 ", "hello", " 30 ", "42", "world", " 8 "], strip whitespace with map, convert with safe_int, filter None, then filter to keep only values > 10. Print final result and the max value.`,
            starterCode: `def safe_int(s):\n    try:\n        return int(s)\n    except ValueError:\n        return None\n\ndata = [" 15 ", "hello", " 30 ", "42", "world", " 8 "]\n\n# Step 1: Strip whitespace\n\n# Step 2: Convert to int\n\n# Step 3: Remove None\n\n# Step 4: Keep > 10\n\n# Print result and max`,
            expectedOutput: `[15, 30, 42]\n42`,
            hints: [
              `stripped = list(map(str.strip, data))`,
              `converted = list(map(safe_int, stripped))`,
              `valid = [x for x in converted if x is not None]`,
              `big = list(filter(lambda x: x > 10, valid))`,
            ]
          }
        }
      ]
    },
    {
      id: 'final-challenges',
      title: 'Final Challenges',
      lessons: [
        {
          id: 'smart-contact-manager',
          title: 'Smart Contact Manager',
          type: 'mastery',
          theory: `<h2>Final Challenge: Smart Contact Manager</h2>
<p>Build an enhanced contact manager that uses all concepts from this section: dictionaries, sets, error handling, list comprehensions, and higher-order functions.</p>

<h3>Requirements:</h3>
<ul>
<li>Store contacts with name, phone, email, and tags (set)</li>
<li>Search contacts by tag</li>
<li>Find contacts with common tags</li>
<li>Generate contact statistics</li>
</ul>

<h3>Architecture:</h3>
<pre><code>contacts = {
    "Alice": {
        "phone": "555-0101",
        "email": "alice@mail.com",
        "tags": {"friend", "work", "python"}
    },
    "Bob": {
        "phone": "555-0102",
        "email": "bob@mail.com",
        "tags": {"work", "java"}
    }
}

# Search by tag
def find_by_tag(contacts, tag):
    return [name for name, info in contacts.items() 
            if tag in info["tags"]]

# Common tags between two contacts
def common_tags(contacts, name1, name2):
    tags1 = contacts.get(name1, {}).get("tags", set())
    tags2 = contacts.get(name2, {}).get("tags", set())
    return tags1 & tags2
</code></pre>

<p>This challenge tests your ability to combine multiple concepts into a cohesive solution.</p>`,
          challenge: {
            description: `Create contacts with Alice (tags: {"friend","work"}), Bob (tags: {"work","gym"}), Charlie (tags: {"friend","gym"}). Write find_by_tag(contacts, tag) returning names with that tag sorted. Print contacts tagged "work". Print contacts tagged "friend". Print all unique tags across all contacts sorted.`,
            starterCode: `contacts = {\n    "Alice": {"phone": "555-0101", "tags": {"friend", "work"}},\n    "Bob": {"phone": "555-0102", "tags": {"work", "gym"}},\n    "Charlie": {"phone": "555-0103", "tags": {"friend", "gym"}}\n}\n\ndef find_by_tag(contacts, tag):\n    pass\n\n# Find work contacts\n\n# Find friend contacts\n\n# All unique tags sorted`,
            expectedOutput: `['Alice', 'Bob']\n['Alice', 'Charlie']\n['friend', 'gym', 'work']`,
            hints: [
              `return sorted([name for name, info in contacts.items() if tag in info["tags"]])`,
              `All tags: combine all tag sets with union`,
              `all_tags = set(); for info in contacts.values(): all_tags |= info["tags"]`,
            ]
          },
          quiz: [
            {
              question: `Why use sets for tags?`,
              options: [
                `Faster`,
                `Unique tags, easy intersection/union`,
                `Required`,
                `Order matters`,
              ],
              correct: 1
            },
            {
              question: `How to find shared tags between contacts?`,
              options: [
                `Compare lists`,
                `Set intersection (&)`,
                `String comparison`,
                `Loop and count`,
              ],
              correct: 1
            },
            {
              question: `tags1 | tags2 gives?`,
              options: [
                `Common tags`,
                `All unique tags from both`,
                `Difference`,
                `Error`,
              ],
              correct: 1
            },
          ]
          ,mastery: {
            description: `Extend the contact manager: add find_common_tags(contacts, name1, name2) that returns shared tags. Add get_stats(contacts) returning dict with total_contacts, total_unique_tags, most_common_tag. Test with the 3 contacts above.`,
            starterCode: `contacts = {\n    "Alice": {"phone": "555-0101", "tags": {"friend", "work"}},\n    "Bob": {"phone": "555-0102", "tags": {"work", "gym"}},\n    "Charlie": {"phone": "555-0103", "tags": {"friend", "gym"}}\n}\n\ndef find_common_tags(contacts, name1, name2):\n    pass\n\ndef get_stats(contacts):\n    pass\n\nprint(sorted(find_common_tags(contacts, "Alice", "Bob")))\nprint(sorted(find_common_tags(contacts, "Bob", "Charlie")))\nstats = get_stats(contacts)\nprint(f"Contacts: {stats['total_contacts']}")\nprint(f"Tags: {stats['total_unique_tags']}")`,
            expectedOutput: `['work']\n['gym']\nContacts: 3\nTags: 3`,
            hints: [
              `return contacts[name1]["tags"] & contacts[name2]["tags"]`,
              `Count tag occurrences across all contacts to find most common`,
              `Use a frequency counter on all tags`,
            ]
          }
        }
,
        {
          id: 'word-analytics',
          title: 'Word Analytics',
          type: 'mastery',
          theory: `<h2>Final Challenge: Word Analytics</h2>
<p>Build a text analytics tool that processes text using all the techniques learned.</p>

<h3>Features:</h3>
<ul>
<li>Word frequency counting</li>
<li>Finding longest/shortest words</li>
<li>Filtering by word length</li>
<li>Statistics (average word length, unique word count)</li>
</ul>

<h3>Architecture:</h3>
<pre><code>def analyze_text(text):
    words = text.lower().split()
    
    # Frequency
    freq = {}
    for word in words:
        freq[word] = freq.get(word, 0) + 1
    
    # Stats
    unique_count = len(set(words))
    avg_length = round(sum(len(w) for w in words) / len(words), 1)
    longest = max(words, key=len)
    most_common = max(freq, key=freq.get)
    
    return {
        "total_words": len(words),
        "unique_words": unique_count,
        "avg_length": avg_length,
        "longest": longest,
        "most_common": most_common,
        "frequency": freq
    }
</code></pre>

<p>This combines: dictionaries (frequency), sets (unique words), aggregation (sum, max, min), comprehensions, and lambda functions.</p>`,
          challenge: {
            description: `Analyze text = "the quick brown fox jumps over the lazy dog the fox". Print total words, unique word count, the most frequent word and its count, and the longest word.`,
            starterCode: `text = "the quick brown fox jumps over the lazy dog the fox"\nwords = text.lower().split()\n\n# Total words\n\n# Unique words\n\n# Most frequent word and count\n\n# Longest word`,
            expectedOutput: `Total: 11\nUnique: 8\nMost common: the (3)\nLongest: jumps`,
            hints: [
              `print(f"Total: {len(words)}")`,
              `print(f"Unique: {len(set(words))}")`,
              `Build freq dict, then max(freq, key=freq.get)`,
              `longest = max(words, key=len)`,
            ]
          },
          quiz: [
            {
              question: `How to count unique words in a text?`,
              options: [
                `len(text)`,
                `len(set(text.split()))`,
                `text.count(" ")`,
                `len(text.split())`,
              ],
              correct: 1
            },
            {
              question: `max(words, key=len) finds?`,
              options: [
                `Most frequent`,
                `Longest word`,
                `Last word`,
                `First word`,
              ],
              correct: 1
            },
            {
              question: `Average word length formula?`,
              options: [
                `len(text)/word_count`,
                `sum(len(w) for w in words)/len(words)`,
                `max(len(w) for w in words)`,
                `len(words)/unique`,
              ],
              correct: 1
            },
          ]
          ,mastery: {
            description: `Build full analyze_text(text) function returning a dict with: total_words, unique_words, avg_length, longest_word, most_common_word. Test with "python is great and python is fun and python is powerful". Print each stat.`,
            starterCode: `def analyze_text(text):\n    pass\n\nresult = analyze_text("python is great and python is fun and python is powerful")\nprint(f"Total: {result['total_words']}")\nprint(f"Unique: {result['unique_words']}")\nprint(f"Avg length: {result['avg_length']}")\nprint(f"Longest: {result['longest_word']}")\nprint(f"Most common: {result['most_common_word']}")`,
            expectedOutput: `Total: 11\nUnique: 6\nAvg length: 3.7\nLongest: powerful\nMost common: python`,
            hints: [
              `words = text.lower().split()`,
              `avg_length = round(sum(len(w) for w in words) / len(words), 1)`,
              `Build frequency dict, use max with key=freq.get`,
            ]
          }
        }
,
        {
          id: 'data-transformer',
          title: 'Data Transformer',
          type: 'mastery',
          theory: `<h2>Final Challenge: Data Transformer</h2>
<p>Build a data transformation pipeline that cleans, validates, transforms, and aggregates data using all techniques.</p>

<h3>The Pipeline:</h3>
<pre><code>def transform_data(raw_records):
    # Step 1: Clean (map - strip whitespace)
    cleaned = list(map(lambda r: {k: v.strip() if isinstance(v, str) else v 
                                   for k, v in r.items()}, raw_records))
    
    # Step 2: Validate (filter - required fields)
    valid = list(filter(lambda r: r.get("name") and r.get("score"), cleaned))
    
    # Step 3: Transform (map - convert types)
    transformed = []
    for r in valid:
        try:
            transformed.append({
                "name": r["name"],
                "score": int(r["score"]),
                "grade": "A" if int(r["score"]) >= 90 else 
                         "B" if int(r["score"]) >= 80 else
                         "C" if int(r["score"]) >= 70 else "F"
            })
        except ValueError:
            continue
    
    # Step 4: Aggregate
    if transformed:
        avg = round(sum(t["score"] for t in transformed) / len(transformed), 1)
        top = max(transformed, key=lambda x: x["score"])
        return {"records": transformed, "average": avg, "top_student": top["name"]}
    return {"records": [], "average": 0, "top_student": None}
</code></pre>

<p>This final challenge brings together: map/filter, lambda, comprehensions, error handling, dictionaries, ternary operators, and aggregation.</p>`,
          challenge: {
            description: `Process records = [{"name": "Alice", "score": "92"}, {"name": "Bob", "score": "78"}, {"name": "Charlie", "score": "85"}, {"name": "Diana", "score": "abc"}]. Convert scores to int (skip invalid), assign grades (A>=90, B>=80, C>=70, F<70). Print each valid student as "Name: score (grade)". Print average of valid scores.`,
            starterCode: `records = [\n    {"name": "Alice", "score": "92"},\n    {"name": "Bob", "score": "78"},\n    {"name": "Charlie", "score": "85"},\n    {"name": "Diana", "score": "abc"}\n]\n\n# Process records, skip invalid scores\n\n# Print each as "Name: score (grade)"\n\n# Print average`,
            expectedOutput: `Alice: 92 (A)\nBob: 78 (C)\nCharlie: 85 (B)\nAverage: 85.0`,
            hints: [
              `Loop through records, try int(r["score"]), except ValueError: continue`,
              `grade = "A" if score >= 90 else "B" if score >= 80 else "C" if score >= 70 else "F"`,
              `Collect valid scores for average calculation`,
            ]
          },
          quiz: [
            {
              question: `What is a data pipeline?`,
              options: [
                `A single function`,
                `Sequential stages: clean -> validate -> transform -> aggregate`,
                `A loop`,
                `A class`,
              ],
              correct: 1
            },
            {
              question: `Why skip invalid records instead of crashing?`,
              options: [
                `Faster`,
                `Real data often has errors; process what you can`,
                `Required`,
                `Saves memory`,
              ],
              correct: 1
            },
            {
              question: `What function pattern combines map+filter+reduce?`,
              options: [
                `Pipeline`,
                `Recursion`,
                `Iterator`,
                `Generator`,
              ],
              correct: 0
            },
          ]
          ,mastery: {
            description: `Build a complete transform_pipeline(records) function that: cleans (strip name), validates (skip if score cannot convert to int), transforms (add grade and pass/fail), aggregates (returns dict with processed list, average, pass_count, fail_count). Test with 5 records including one invalid.`,
            starterCode: `def transform_pipeline(records):\n    pass\n\nrecords = [\n    {"name": " Alice ", "score": "95"},\n    {"name": "Bob", "score": "62"},\n    {"name": " Charlie", "score": "88"},\n    {"name": "Diana ", "score": "bad"},\n    {"name": "Eve", "score": "71"}\n]\n\nresult = transform_pipeline(records)\nprint(f"Processed: {result['count']}")\nprint(f"Average: {result['average']}")\nprint(f"Pass: {result['pass_count']}")\nprint(f"Fail: {result['fail_count']}")`,
            expectedOutput: `Processed: 4\nAverage: 79.0\nPass: 3\nFail: 1`,
            hints: [
              `Clean: name.strip() for each record`,
              `Validate: try int(score) except continue`,
              `pass_count = sum(1 for r in valid if r["score"] >= 70)`,
            ]
          }
        }
      ]
    }
  ]
};