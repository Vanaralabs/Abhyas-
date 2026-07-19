export const pythonOOP = {
  id: 'oop',
  title: 'Object Oriented Programming',
  description: 'Discover how to organize code with classes, objects, and reusable structures',
  totalLessons: 64,
  totalChallenges: 53,
  totalQuizQuestions: 400,
  projects: 1,
  chapters: [
    {
      id: 'oop_fundamentals',
      title: 'Fundamentals of OOP',
      lessons: [
        {
          id: 'oop_external_files',
          title: 'External Files',
          type: 'challenge',
          theory: `<h2>Working with External Files in Python</h2>
<p>Before diving into Object-Oriented Programming, let's master working with external files. In real projects, your code is split across multiple files called <strong>modules</strong>. This keeps things organized — just like how a library separates books into sections.</p>

<h3>Why Use Multiple Files?</h3>
<p>Imagine writing a 10,000-line program in one file. Finding anything would be a nightmare! Instead, we split code into logical files:</p>
<ul>
<li><code>utils.py</code> — helper functions</li>
<li><code>models.py</code> — data classes</li>
<li><code>main.py</code> — entry point</li>
</ul>

<h3>Importing Modules</h3>
<pre><code># math_helpers.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b</code></pre>

<pre><code># main.py
import math_helpers

result = math_helpers.add(3, 5)
print(result)  # 8</code></pre>

<h3>Different Import Styles</h3>
<pre><code># Import specific functions
from math_helpers import add, multiply
print(add(2, 3))  # 5

# Import with alias
import math_helpers as mh
print(mh.multiply(4, 5))  # 20

# Import everything (use sparingly!)
from math_helpers import *
print(add(1, 1))  # 2</code></pre>

<h3>The __name__ Variable</h3>
<p>Every Python file has a special <code>__name__</code> variable. When you run a file directly, <code>__name__</code> equals <code>"__main__"</code>. When it's imported, <code>__name__</code> equals the module name.</p>
<pre><code># greet.py
def say_hello(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    # This only runs when greet.py is executed directly
    print(say_hello("World"))</code></pre>

<p>This pattern prevents code from running when a module is imported elsewhere.</p>

<h3>Built-in Modules</h3>
<pre><code>import os
print(os.getcwd())  # Current working directory

import random
print(random.randint(1, 10))  # Random number 1-10

import datetime
print(datetime.date.today())  # Today's date</code></pre>`,
          challenge: {
            description: 'Create a function called file_info that takes a filename (string) and returns a dictionary with two keys: "name" (the filename without extension) and "extension" (just the extension without the dot). Use the os.path module. Then call it with "report.pdf" and print the result.',
            starterCode: `import os\n\ndef file_info(filename):\n    # Split filename into name and extension\n    pass\n\nresult = file_info("report.pdf")\nprint(result)`,
            expectedOutput: "{'name': 'report', 'extension': 'pdf'}",
            hints: [
              'Use os.path.splitext(filename) to split into name and extension',
              'splitext returns a tuple like ("report", ".pdf") — note the dot in extension',
              'Use [1:] to remove the leading dot from the extension'
            ]
          },
          quiz: [
            {
              question: 'What does from math import sqrt do?',
              options: ['Imports the entire math module', 'Imports only the sqrt function from math', 'Creates a new sqrt module', 'Renames the math module to sqrt'],
              correct: 1
            },
            {
              question: 'What is the value of __name__ when a script is run directly?',
              options: ['"__script__"', '"__main__"', 'The filename', 'None'],
              correct: 1
            },
            {
              question: 'Which import style lets you use a shorter name for a module?',
              options: ['from module import *', 'import module', 'import module as alias', 'from module import func'],
              correct: 2
            },
            {
              question: 'What does import os; os.path.exists("file.txt") check?',
              options: ['If the file is readable', 'If the file path exists', 'If the file is a Python file', 'If the os module is installed'],
              correct: 1
            },
            {
              question: 'Why is from module import * generally discouraged?',
              options: ['It is slower', 'It can cause name conflicts and makes code harder to read', 'It only works in Python 2', 'It imports private functions'],
              correct: 1
            },
            {
              question: 'What does os.path.splitext("data.csv") return?',
              options: ['["data", "csv"]', '("data", ".csv")', '("data.csv", "")', '{"name": "data", "ext": "csv"}'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_intro',
          title: 'Introduction to OOP',
          type: 'challenge',
          theory: `<h2>Introduction to Object-Oriented Programming</h2>
<p>Object-Oriented Programming (OOP) is a way of organizing code that models real-world things. Instead of writing loose functions and variables, you bundle related data and behavior together into <strong>objects</strong>.</p>

<h3>The Problem OOP Solves</h3>
<p>Imagine you're building a game with 50 characters. Without OOP:</p>
<pre><code># Messy procedural approach
player1_name = "Alice"
player1_health = 100
player1_score = 0

player2_name = "Bob"
player2_health = 100
player2_score = 0

# Need separate functions for each...
def damage_player1(amount):
    global player1_health
    player1_health -= amount</code></pre>

<p>This becomes unmanageable fast! OOP gives us a better way.</p>

<h3>The Four Pillars of OOP</h3>
<ol>
<li><strong>Encapsulation</strong> — Bundling data and methods together, hiding internal details</li>
<li><strong>Inheritance</strong> — Creating new classes based on existing ones</li>
<li><strong>Polymorphism</strong> — Same interface, different implementations</li>
<li><strong>Abstraction</strong> — Hiding complexity, showing only essentials</li>
</ol>

<h3>Real-World Analogy</h3>
<p>Think of a <strong>car</strong>:</p>
<ul>
<li><strong>Encapsulation</strong>: The engine is hidden under the hood. You use the steering wheel and pedals (interface) without knowing how pistons work.</li>
<li><strong>Inheritance</strong>: A Tesla IS-A Car. It inherits wheels, doors, seats but adds electric motors.</li>
<li><strong>Polymorphism</strong>: Both a car and bicycle respond to "move forward" — same action, different mechanism.</li>
<li><strong>Abstraction</strong>: The gas pedal abstracts away fuel injection, combustion, and transmission.</li>
</ul>

<h3>Your First Class</h3>
<pre><code>class Dog:
    def bark(self):
        return "Woof!"

my_dog = Dog()
print(my_dog.bark())  # Woof!</code></pre>

<p>We'll explore each concept in depth throughout this section. By the end, you'll be building complex systems with clean, reusable code.</p>`,
          challenge: {
            description: 'Create a simple class called Greeter with a method greet that takes a name parameter and returns "Hello, {name}! Welcome to OOP." Create an instance and print the greeting for "Python".',
            starterCode: `# Create a class called Greeter\n# It should have a method called greet that takes a name\n\n# Create an instance and call greet with "Python"`,
            expectedOutput: 'Hello, Python! Welcome to OOP.',
            hints: [
              'Define the class with: class Greeter:',
              'Methods need self as the first parameter: def greet(self, name):',
              'Create an instance: g = Greeter()',
              'Call the method: print(g.greet("Python"))'
            ]
          },
          quiz: [
            {
              question: 'Which is NOT one of the four pillars of OOP?',
              options: ['Encapsulation', 'Compilation', 'Inheritance', 'Polymorphism'],
              correct: 1
            },
            {
              question: 'What is the relationship between a class and an object?',
              options: ['They are the same thing', 'A class is a blueprint; an object is an instance of that blueprint', 'An object is a blueprint; a class is an instance', 'Classes contain objects'],
              correct: 1
            },
            {
              question: 'What keyword is used to define a class in Python?',
              options: ['def', 'class', 'object', 'new'],
              correct: 1
            },
            {
              question: 'What does encapsulation mean?',
              options: ['Running code faster', 'Bundling data and methods together and hiding internal details', 'Copying objects', 'Writing shorter code'],
              correct: 1
            },
            {
              question: 'What does polymorphism allow?',
              options: ['Multiple inheritance only', 'Same interface with different implementations', 'Hiding all variables', 'Automatic memory management'],
              correct: 1
            },
            {
              question: 'In the analogy class = blueprint, object = house, how many houses can one blueprint create?',
              options: ['Only one', 'Exactly two', 'Unlimited', 'Depends on the blueprint'],
              correct: 2
            }
          ]
        },
        {
          id: 'oop_classes_vs_objects',
          title: 'Classes vs Objects',
          type: 'challenge',
          theory: `<h2>Classes vs Objects</h2>
<p>Understanding the difference between classes and objects is the foundation of OOP. Let's use a clear analogy:</p>

<h3>The Blueprint Analogy</h3>
<p>A <strong>class</strong> is like a cookie cutter — it defines the shape. An <strong>object</strong> (also called an <strong>instance</strong>) is the actual cookie made with that cutter. One cookie cutter can make hundreds of cookies, and each cookie can have different decorations (data).</p>

<h3>Defining a Class</h3>
<pre><code>class Car:
    # Class body defines what all cars have
    wheels = 4
    
    def start_engine(self):
        return "Vroom! Engine started."

# Creating objects (instances)
my_car = Car()
your_car = Car()

print(my_car.wheels)        # 4
print(your_car.wheels)      # 4
print(my_car.start_engine())  # Vroom! Engine started.</code></pre>

<h3>Each Object is Independent</h3>
<pre><code>class Player:
    score = 0

p1 = Player()
p2 = Player()

p1.score = 10  # Only changes p1
print(p1.score)  # 10
print(p2.score)  # 0 — p2 is unchanged!</code></pre>

<h3>Checking Types</h3>
<pre><code>class Animal:
    pass

cat = Animal()
dog = Animal()

print(type(cat))           # <class '__main__.Animal'>
print(isinstance(cat, Animal))  # True
print(isinstance(42, Animal))   # False</code></pre>

<h3>Multiple Classes</h3>
<pre><code>class Circle:
    def area(self, radius):
        return 3.14159 * radius ** 2

class Square:
    def area(self, side):
        return side ** 2

c = Circle()
s = Square()
print(c.area(5))   # 78.53975
print(s.area(4))   # 16</code></pre>

<p><strong>Key takeaway:</strong> A class defines structure and behavior. Objects are specific instances with their own data. You can create as many objects as you want from one class.</p>`,
          challenge: {
            description: 'Create a class called Fruit with a class variable category set to "Food". Add a method called describe that returns "I am a fruit". Create two Fruit instances called apple and banana. Print the category from the class itself, then print describe() from the apple instance.',
            starterCode: `class Fruit:\n    # Add class variable category = "Food"\n    # Add method describe() returning "I am a fruit"\n    pass\n\n# Create two instances: apple and banana\n# Print Fruit.category\n# Print apple.describe()`,
            expectedOutput: `Food\nI am a fruit`,
            hints: [
              'Class variables go directly inside the class body',
              'def describe(self): return "I am a fruit"',
              'Create instances: apple = Fruit()',
              'Access class variable: Fruit.category'
            ]
          },
          quiz: [
            {
              question: 'What is an object in Python OOP?',
              options: ['A function definition', 'An instance of a class', 'A module', 'A variable type'],
              correct: 1
            },
            {
              question: 'How do you create an instance of class Dog?',
              options: ['Dog.new()', 'new Dog()', 'Dog()', 'create Dog'],
              correct: 2
            },
            {
              question: 'What does isinstance(obj, ClassName) return?',
              options: ['The object type', 'True if obj is an instance of ClassName, else False', 'The class name as a string', 'A new instance'],
              correct: 1
            },
            {
              question: 'Can you create multiple objects from the same class?',
              options: ['No, only one', 'Yes, but only two', 'Yes, unlimited instances', 'Only if the class allows it'],
              correct: 2
            },
            {
              question: 'What does type(obj) return?',
              options: ['The object value', 'The class that the object is an instance of', 'The object id', 'The memory address'],
              correct: 1
            },
            {
              question: 'What is the pass keyword used for in a class?',
              options: ['To pass data to the class', 'As a placeholder for an empty class body', 'To skip inheritance', 'To create a private class'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_self_parameter',
          title: 'The self Parameter',
          type: 'challenge',
          theory: `<h2>The self Parameter</h2>
<p>In Python classes, <code>self</code> is a reference to the <strong>current instance</strong> of the class. It's how an object refers to itself — like saying "my name" instead of "Alice's name".</p>

<h3>Why Do We Need self?</h3>
<p>When you call <code>my_dog.bark()</code>, Python needs to know WHICH dog is barking. <code>self</code> tells the method which specific object called it.</p>

<pre><code>class Dog:
    def set_name(self, name):
        self.name = name  # Store name on THIS specific dog
    
    def introduce(self):
        return f"I am {self.name}"

dog1 = Dog()
dog2 = Dog()

dog1.set_name("Rex")
dog2.set_name("Bella")

print(dog1.introduce())  # I am Rex
print(dog2.introduce())  # I am Bella</code></pre>

<h3>How self Works Behind the Scenes</h3>
<p>When you write <code>dog1.introduce()</code>, Python actually calls <code>Dog.introduce(dog1)</code>. The object before the dot is automatically passed as <code>self</code>.</p>

<pre><code>class Counter:
    def __init__(self):
        self.count = 0
    
    def increment(self):
        self.count += 1
        return self.count

c = Counter()
print(c.increment())  # 1
print(c.increment())  # 2

# These are equivalent:
# c.increment()  is the same as  Counter.increment(c)</code></pre>

<h3>Common Mistake: Forgetting self</h3>
<pre><code>class Broken:
    def set_value(value):  # WRONG! Missing self
        value = value

class Fixed:
    def set_value(self, value):  # Correct!
        self.value = value</code></pre>

<h3>self Can Access Other Methods</h3>
<pre><code>class Calculator:
    def __init__(self):
        self.result = 0
    
    def add(self, n):
        self.result += n
        return self  # Return self for chaining!
    
    def get_result(self):
        return self.result

calc = Calculator()
calc.add(5).add(3).add(2)  # Method chaining
print(calc.get_result())  # 10</code></pre>

<p><strong>Remember:</strong> <code>self</code> is just a convention name — you could use any name, but <code>self</code> is universally expected in Python.</p>`,
          challenge: {
            description: 'Create a class Temperature with a method set_celsius that stores the temperature, and a method to_fahrenheit that converts and returns it using the formula F = C * 9/5 + 32. Set it to 100 degrees C and print the Fahrenheit value.',
            starterCode: `class Temperature:\n    def set_celsius(self, celsius):\n        # Store celsius on self\n        pass\n    \n    def to_fahrenheit(self):\n        # Convert self.celsius to fahrenheit\n        pass\n\ntemp = Temperature()\ntemp.set_celsius(100)\nprint(temp.to_fahrenheit())`,
            expectedOutput: '212.0',
            hints: [
              'In set_celsius: self.celsius = celsius',
              'In to_fahrenheit: return self.celsius * 9/5 + 32',
              'Make sure to use self.celsius (not just celsius) in to_fahrenheit',
              '100 * 9/5 + 32 = 212.0'
            ]
          },
          quiz: [
            {
              question: 'What does self refer to in a Python class method?',
              options: ['The class itself', 'The current instance of the class', 'The parent class', 'A global variable'],
              correct: 1
            },
            {
              question: 'What happens if you forget to include self as the first parameter?',
              options: ['Nothing, it works fine', 'Python adds it automatically', 'You get a TypeError when calling the method', 'The class cannot be instantiated'],
              correct: 2
            },
            {
              question: 'What does self.name = name do?',
              options: ['Creates a global variable', 'Stores the value as an attribute on the current instance', 'Creates a class variable', 'Deletes the name variable'],
              correct: 1
            },
            {
              question: 'Is self a keyword in Python?',
              options: ['Yes, it must always be called self', 'No, it is a convention but any name works', 'Yes, it is reserved', 'No, and you should use this instead'],
              correct: 1
            },
            {
              question: 'What does dog1.bark() translate to internally?',
              options: ['bark(dog1)', 'Dog.bark(dog1)', 'self.bark()', 'Dog.dog1.bark()'],
              correct: 1
            },
            {
              question: 'What is method chaining?',
              options: ['Calling multiple classes', 'Returning self from methods to allow consecutive calls', 'Inheriting multiple methods', 'Linking two classes together'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_methods',
          title: 'Methods',
          type: 'challenge',
          theory: `<h2>Methods in Python Classes</h2>
<p>Methods are functions that belong to a class. They define the <strong>behavior</strong> of objects — what they can DO. Think of attributes as nouns (name, age, color) and methods as verbs (run, speak, calculate).</p>

<h3>Instance Methods</h3>
<p>The most common type. They take <code>self</code> as the first parameter and can access/modify instance data.</p>
<pre><code>class BankAccount:
    def __init__(self):
        self.balance = 0
    
    def deposit(self, amount):
        self.balance += amount
        return f"Deposited \${amount}. Balance: \${self.balance}"
    
    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient funds!"
        self.balance -= amount
        return f"Withdrew \${amount}. Balance: \${self.balance}"

acc = BankAccount()
print(acc.deposit(100))   # Deposited $100. Balance: $100
print(acc.withdraw(30))   # Withdrew $30. Balance: $70
print(acc.withdraw(80))   # Insufficient funds!</code></pre>

<h3>Methods Can Call Other Methods</h3>
<pre><code>class TextProcessor:
    def clean(self, text):
        return text.strip().lower()
    
    def word_count(self, text):
        cleaned = self.clean(text)  # Calling another method
        return len(cleaned.split())
    
    def summary(self, text):
        count = self.word_count(text)
        return f"{count} words"

tp = TextProcessor()
print(tp.summary("  Hello World  "))  # 2 words</code></pre>

<h3>Methods with Default Parameters</h3>
<pre><code>class Logger:
    def log(self, message, level="INFO"):
        print(f"[{level}] {message}")

logger = Logger()
logger.log("System started")       # [INFO] System started
logger.log("Disk full", "ERROR")   # [ERROR] Disk full</code></pre>

<h3>Methods Returning Objects</h3>
<pre><code>class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def move(self, dx, dy):
        return Point(self.x + dx, self.y + dy)
    
    def display(self):
        return f"({self.x}, {self.y})"

p1 = Point(1, 2)
p2 = p1.move(3, 4)
print(p1.display())  # (1, 2)
print(p2.display())  # (4, 6)</code></pre>`,
          challenge: {
            description: 'Create a class ShoppingCart with an __init__ that initializes an empty items list. Add methods: add_item(item, price) that appends a tuple, total() that returns the sum of prices, and item_count() that returns number of items. Add "Apple" at 1.5, "Bread" at 3.0, "Milk" at 2.5. Print item_count() and total().',
            starterCode: `class ShoppingCart:\n    def __init__(self):\n        self.items = []\n    \n    def add_item(self, item, price):\n        pass\n    \n    def total(self):\n        pass\n    \n    def item_count(self):\n        pass\n\ncart = ShoppingCart()\ncart.add_item("Apple", 1.5)\ncart.add_item("Bread", 3.0)\ncart.add_item("Milk", 2.5)\nprint(cart.item_count())\nprint(cart.total())`,
            expectedOutput: `3\n7.0`,
            hints: [
              'In add_item: self.items.append((item, price))',
              'In total: return sum(price for item, price in self.items)',
              'In item_count: return len(self.items)',
              'The total of 1.5 + 3.0 + 2.5 = 7.0'
            ]
          },
          quiz: [
            {
              question: 'What is an instance method?',
              options: ['A function outside a class', 'A function inside a class that takes self as first parameter', 'A function that creates instances', 'A static function'],
              correct: 1
            },
            {
              question: 'Can a method call another method of the same class?',
              options: ['No, methods are isolated', 'Yes, using self.method_name()', 'Only if they are in the same order', 'Only with special permission'],
              correct: 1
            },
            {
              question: 'What does a method return if there is no return statement?',
              options: ['0', 'An empty string', 'None', 'An error'],
              correct: 2
            },
            {
              question: 'How are methods different from regular functions?',
              options: ['They are faster', 'They belong to a class and receive self automatically', 'They cannot take parameters', 'They must return a value'],
              correct: 1
            },
            {
              question: 'What does self.balance += amount do?',
              options: ['Creates a new variable', 'Adds amount to the instance attribute balance', 'Adds amount to a global variable', 'Creates a class variable'],
              correct: 1
            },
            {
              question: 'Can a method return a new instance of the same class?',
              options: ['No, that causes infinite recursion', 'Yes, methods can return any value including new instances', 'Only in special classes', 'Only with __new__'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_attributes',
          title: 'Attributes',
          type: 'challenge',
          theory: `<h2>Attributes in Python Classes</h2>
<p>Attributes are variables that belong to an object or class. They store the <strong>data</strong> (state) of an object. If methods are what an object can DO, attributes are what an object HAS.</p>

<h3>Instance Attributes vs Class Attributes</h3>
<pre><code>class Student:
    # Class attribute — shared by ALL students
    school = "Python Academy"
    
    def __init__(self, name, grade):
        # Instance attributes — unique to each student
        self.name = name
        self.grade = grade

s1 = Student("Alice", "A")
s2 = Student("Bob", "B")

print(s1.name)    # Alice (instance)
print(s2.name)    # Bob (instance)
print(s1.school)  # Python Academy (class)
print(s2.school)  # Python Academy (class - same!)</code></pre>

<h3>Dynamic Attributes</h3>
<p>Python lets you add attributes anytime — even after creation!</p>
<pre><code>class Flexible:
    pass

obj = Flexible()
obj.x = 10        # Add attribute dynamically
obj.y = 20
print(obj.x + obj.y)  # 30</code></pre>

<h3>The __dict__ Attribute</h3>
<p>Every object has a <code>__dict__</code> that shows all its instance attributes:</p>
<pre><code>class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p = Person("Alice", 30)
print(p.__dict__)  # {'name': 'Alice', 'age': 30}</code></pre>

<h3>hasattr, getattr, setattr</h3>
<pre><code>class Config:
    def __init__(self):
        self.debug = True
        self.version = "1.0"

c = Config()
print(hasattr(c, 'debug'))      # True
print(hasattr(c, 'missing'))    # False
print(getattr(c, 'version'))    # 1.0
print(getattr(c, 'missing', 'default'))  # default

setattr(c, 'theme', 'dark')
print(c.theme)  # dark</code></pre>

<h3>Deleting Attributes</h3>
<pre><code>class Temp:
    def __init__(self):
        self.data = [1, 2, 3]

t = Temp()
del t.data
print(hasattr(t, 'data'))  # False</code></pre>`,
          challenge: {
            description: 'Create a class Profile with __init__ taking name and email. Initialize an empty skills list. Add a method add_skill(skill) that appends to skills. Add a method display() that returns "{name} ({email}) - Skills: {comma-separated skills}". Create profile for "Alice" with "alice@dev.com", add "Python" and "SQL", print display().',
            starterCode: `class Profile:\n    def __init__(self, name, email):\n        pass\n    \n    def add_skill(self, skill):\n        pass\n    \n    def display(self):\n        pass\n\np = Profile("Alice", "alice@dev.com")\np.add_skill("Python")\np.add_skill("SQL")\nprint(p.display())`,
            expectedOutput: 'Alice (alice@dev.com) - Skills: Python, SQL',
            hints: [
              'In __init__: self.name = name, self.email = email, self.skills = []',
              'In add_skill: self.skills.append(skill)',
              'Use ", ".join(self.skills) to create comma-separated string',
              'f"{self.name} ({self.email}) - Skills: {\", \".join(self.skills)}"'
            ]
          },
          quiz: [
            {
              question: 'What is the difference between a class attribute and an instance attribute?',
              options: ['No difference', 'Class attributes are shared by all instances; instance attributes are unique to each', 'Instance attributes are shared; class attributes are unique', 'Class attributes cannot be changed'],
              correct: 1
            },
            {
              question: 'What does obj.__dict__ show?',
              options: ['All methods of the object', 'All instance attributes as a dictionary', 'The class definition', 'Memory address'],
              correct: 1
            },
            {
              question: 'What does hasattr(obj, "name") return?',
              options: ['The value of name', 'True if obj has attribute name, else False', 'The type of name', 'None'],
              correct: 1
            },
            {
              question: 'Can you add new attributes to an object after it is created?',
              options: ['No, all attributes must be in __init__', 'Yes, Python allows dynamic attributes', 'Only with setattr()', 'Only in special classes'],
              correct: 1
            },
            {
              question: 'What does getattr(obj, "x", 42) return if obj has no attribute x?',
              options: ['None', 'An error', '42 (the default value)', 'False'],
              correct: 2
            },
            {
              question: 'What happens when you access an instance attribute with the same name as a class attribute?',
              options: ['Error occurs', 'The instance attribute takes priority', 'The class attribute takes priority', 'Both are returned'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_constructor',
          title: 'Constructor Method (__init__)',
          type: 'challenge',
          theory: `<h2>The Constructor Method: __init__</h2>
<p>The <code>__init__</code> method is Python's constructor — it's automatically called when you create a new object. Think of it as the "setup" method that initializes an object's starting state.</p>

<h3>Basic Constructor</h3>
<pre><code>class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        print(f"Created person: {name}")

# __init__ is called automatically!
p = Person("Alice", 30)  # Created person: Alice
print(p.name)  # Alice
print(p.age)   # 30</code></pre>

<h3>Default Parameters in __init__</h3>
<pre><code>class Connection:
    def __init__(self, host, port=3306, secure=False):
        self.host = host
        self.port = port
        self.secure = secure
    
    def info(self):
        protocol = "https" if self.secure else "http"
        return f"{protocol}://{self.host}:{self.port}"

c1 = Connection("localhost")
c2 = Connection("api.example.com", 443, True)
print(c1.info())  # http://localhost:3306
print(c2.info())  # https://api.example.com:443</code></pre>

<h3>Validation in Constructor</h3>
<pre><code>class Age:
    def __init__(self, value):
        if value < 0 or value > 150:
            raise ValueError(f"Invalid age: {value}")
        self.value = value

a = Age(25)    # OK
print(a.value) # 25
# Age(-5)  # Would raise ValueError!</code></pre>

<h3>Constructor with Computed Attributes</h3>
<pre><code>class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.area = width * height
        self.perimeter = 2 * (width + height)

r = Rectangle(5, 3)
print(f"Area: {r.area}")          # Area: 15
print(f"Perimeter: {r.perimeter}")  # Perimeter: 16</code></pre>

<h3>Constructor with Collections</h3>
<pre><code>class Playlist:
    def __init__(self, name, songs=None):
        self.name = name
        # Never use mutable default arguments!
        self.songs = songs if songs is not None else []
    
    def add(self, song):
        self.songs.append(song)
        return f"Added '{song}' to {self.name}"

rock = Playlist("Rock Hits")
print(rock.add("Bohemian Rhapsody"))
# Added 'Bohemian Rhapsody' to Rock Hits</code></pre>

<p><strong>Important:</strong> Never use mutable objects (lists, dicts) as default parameter values — use <code>None</code> and create them inside __init__.</p>`,
          challenge: {
            description: 'Create a class Student with __init__ taking name and grades (a list of numbers). Add a method average() that returns the average grade rounded to 1 decimal place. Add a method status() that returns "Passing" if average >= 60, else "Failing". Create student "Bob" with grades [85, 92, 78, 90, 88] and print average and status.',
            starterCode: `class Student:\n    def __init__(self, name, grades):\n        pass\n    \n    def average(self):\n        pass\n    \n    def status(self):\n        pass\n\nbob = Student("Bob", [85, 92, 78, 90, 88])\nprint(bob.average())\nprint(bob.status())`,
            expectedOutput: `86.6\nPassing`,
            hints: [
              'In __init__: self.name = name and self.grades = grades',
              'In average: return round(sum(self.grades) / len(self.grades), 1)',
              'In status: return "Passing" if self.average() >= 60 else "Failing"',
              'sum([85, 92, 78, 90, 88]) / 5 = 86.6'
            ]
          },
          quiz: [
            {
              question: 'When is __init__ called?',
              options: ['When you import the class', 'Automatically when a new object is created', 'When you call it explicitly', 'When the program ends'],
              correct: 1
            },
            {
              question: 'Does __init__ need to return a value?',
              options: ['Yes, it must return the object', 'Yes, it must return True', 'No, it should return None (or have no return statement)', 'It must return self'],
              correct: 2
            },
            {
              question: 'Why avoid mutable default arguments like def __init__(self, items=[])?',
              options: ['It causes a syntax error', 'The list is shared across all instances created with the default', 'It makes the code slower', 'Python does not allow lists as defaults'],
              correct: 1
            },
            {
              question: 'What is the correct pattern for a mutable default?',
              options: ['def __init__(self, items=[])', 'def __init__(self, items=None): self.items = items if items is not None else []', 'def __init__(self, items=list)', 'def __init__(self, items={}): pass'],
              correct: 1
            },
            {
              question: 'Can __init__ raise exceptions?',
              options: ['No, constructors cannot fail', 'Yes, for example to validate input', 'Only TypeError', 'Only in Python 3'],
              correct: 1
            },
            {
              question: 'What is the primary purpose of __init__?',
              options: ['To destroy objects', 'To initialize attributes of a new instance', 'To define class methods', 'To import modules'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_recap_calculator',
          title: 'Recap - Simple Calculator',
          type: 'mastery',
          theory: `<h2>Recap: Building a Simple Calculator Class</h2>
<p>Let's combine everything from this chapter — classes, objects, self, methods, attributes, and constructors — to build a functional calculator.</p>

<h3>Design Thinking</h3>
<p>Before coding, think about what a calculator HAS (attributes) and DOES (methods):</p>
<ul>
<li><strong>Has:</strong> a current result (starts at 0), a history of operations</li>
<li><strong>Does:</strong> add, subtract, multiply, divide, reset, show history</li>
</ul>

<h3>Complete Implementation</h3>
<pre><code>class Calculator:
    def __init__(self):
        self.result = 0
        self.history = []
    
    def add(self, value):
        self.result += value
        self.history.append(f"+ {value}")
        return self
    
    def subtract(self, value):
        self.result -= value
        self.history.append(f"- {value}")
        return self
    
    def multiply(self, value):
        self.result *= value
        self.history.append(f"* {value}")
        return self
    
    def divide(self, value):
        if value == 0:
            print("Error: Division by zero!")
            return self
        self.result /= value
        self.history.append(f"/ {value}")
        return self
    
    def reset(self):
        self.result = 0
        self.history = []
        return self
    
    def show_history(self):
        return " -> ".join(self.history) if self.history else "No operations"

# Usage with method chaining
calc = Calculator()
calc.add(10).subtract(3).multiply(2)
print(f"Result: {calc.result}")
# Result: 14
print(f"History: {calc.show_history()}")
# History: + 10 -> - 3 -> * 2</code></pre>

<h3>Key Concepts Applied</h3>
<ol>
<li><strong>Constructor</strong>: Sets up initial state</li>
<li><strong>self</strong>: Tracks state across method calls</li>
<li><strong>Methods</strong>: Each operation modifies the state</li>
<li><strong>Method chaining</strong>: return self enables fluent interface</li>
<li><strong>Validation</strong>: Division by zero check</li>
</ol>`,
          challenge: {
            description: 'Create a Calculator class with __init__ setting result to 0. Add methods: add(n), subtract(n), multiply(n), divide(n) — each updates self.result and returns self for chaining. divide should set result to "Error" if n is 0. Add get_result(). Chain: add(10).multiply(3).subtract(5).divide(5) then print get_result().',
            starterCode: `class Calculator:\n    def __init__(self):\n        self.result = 0\n    \n    def add(self, n):\n        self.result += n\n        return self\n    \n    def subtract(self, n):\n        self.result -= n\n        return self\n    \n    def multiply(self, n):\n        self.result *= n\n        return self\n    \n    def divide(self, n):\n        if n == 0:\n            self.result = "Error"\n        else:\n            self.result /= n\n        return self\n    \n    def get_result(self):\n        return self.result\n\ncalc = Calculator()\ncalc.add(10).multiply(3).subtract(5).divide(5)\nprint(calc.get_result())`,
            expectedOutput: '5.0',
            hints: [
              'Start: result = 0',
              'add(10): 0 + 10 = 10',
              'multiply(3): 10 * 3 = 30',
              'subtract(5): 30 - 5 = 25, divide(5): 25 / 5 = 5.0'
            ]
          },
          mastery: {
            description: 'Extend the Calculator to also track operation history as a list of strings like ["add 10", "multiply 3"]. Add a method undo() that removes the last operation and recalculates from scratch. Do: add(20).subtract(5).multiply(2). Print result, call undo(), print result again.',
            starterCode: `class Calculator:\n    def __init__(self):\n        self.result = 0\n        self.operations = []\n    \n    def _recalculate(self):\n        self.result = 0\n        for op, val in self.operations:\n            if op == "add": self.result += val\n            elif op == "subtract": self.result -= val\n            elif op == "multiply": self.result *= val\n            elif op == "divide": self.result /= val\n    \n    # Implement add, subtract, multiply, divide with operations tracking\n    # Implement undo\n    pass`,
            expectedOutput: `30\n15`,
            hints: [
              'Store operations as tuples: self.operations.append(("add", n))',
              'undo: self.operations.pop() then self._recalculate()',
              '(0+20-5)*2 = 30, then undo multiply: 0+20-5 = 15'
            ]
          },
          quiz: [
            {
              question: 'What does return self in a method enable?',
              options: ['Recursion', 'Method chaining', 'Creating new instances', 'Error handling'],
              correct: 1
            },
            {
              question: 'Why does each method update self.result instead of a local variable?',
              options: ['Local variables are slower', 'self.result persists across method calls; locals disappear', 'Python requires it', 'Local variables cause errors in classes'],
              correct: 1
            },
            {
              question: 'What happens if you divide by zero without checking?',
              options: ['Result becomes 0', 'Result becomes infinity', 'ZeroDivisionError is raised', 'Nothing happens'],
              correct: 2
            },
            {
              question: 'What design pattern does calc.add(5).subtract(2) demonstrate?',
              options: ['Singleton', 'Fluent interface / method chaining', 'Observer', 'Factory'],
              correct: 1
            },
            {
              question: 'How would you implement an undo feature?',
              options: ['Delete the object', 'Store operations in a list and replay without the last one', 'Use a global variable', 'Override __del__'],
              correct: 1
            },
            {
              question: 'Which OOP concepts does the Calculator use?',
              options: ['Only inheritance', 'Encapsulation (bundled state + methods) and constructor', 'Only polymorphism', 'Only abstraction'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: 'oop_decorators',
      title: 'Decorators',
      lessons: [
        {
          id: 'oop_intro_decorators',
          title: 'Introduction to Decorators',
          type: 'challenge',
          theory: `<h2>Introduction to Decorators</h2>
<p>A <strong>decorator</strong> is a function that takes another function, adds some functionality, and returns it. Think of it like gift wrapping — the gift (function) stays the same, but the wrapping (decorator) adds something extra.</p>

<h3>Functions Are Objects</h3>
<p>In Python, functions are first-class objects — you can pass them around like variables:</p>
<pre><code>def greet(name):
    return f"Hello, {name}!"

# Assign function to variable
say_hi = greet
print(say_hi("Alice"))  # Hello, Alice!

# Pass function as argument
def execute(func, value):
    return func(value)

print(execute(greet, "Bob"))  # Hello, Bob!</code></pre>

<h3>Your First Decorator</h3>
<pre><code>def uppercase_decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@uppercase_decorator
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # HELLO, ALICE!</code></pre>

<p>The <code>@uppercase_decorator</code> is syntactic sugar for: <code>greet = uppercase_decorator(greet)</code></p>

<h3>Decorator with Timing</h3>
<pre><code>import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(0.1)
    return "Done"

result = slow_function()  # slow_function took 0.100Xs</code></pre>

<h3>Decorator That Logs Calls</h3>
<pre><code>def log_calls(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@log_calls
def add(a, b):
    return a + b

add(3, 5)
# Calling add with (3, 5)
# add returned 8</code></pre>`,
          challenge: {
            description: 'Create a decorator called double_result that takes a function and returns a wrapper that doubles the numeric result. Apply it to a function called add(a, b) that returns a + b. Print the result of add(3, 5).',
            starterCode: `def double_result(func):\n    def wrapper(*args, **kwargs):\n        # Call func, double the result\n        pass\n    return wrapper\n\n@double_result\ndef add(a, b):\n    return a + b\n\nprint(add(3, 5))`,
            expectedOutput: '16',
            hints: [
              'Inside wrapper: result = func(*args, **kwargs)',
              'Return result * 2',
              'add(3, 5) normally returns 8, doubled = 16',
              'The @double_result applies the decorator to add'
            ]
          },
          quiz: [
            {
              question: 'What is a decorator in Python?',
              options: ['A class attribute', 'A function that modifies another function', 'A type of loop', 'A way to create classes'],
              correct: 1
            },
            {
              question: 'What does @decorator_name above a function do?',
              options: ['Comments out the function', 'Applies the decorator to the function', 'Makes the function private', 'Deletes the function'],
              correct: 1
            },
            {
              question: 'What does *args in a wrapper function allow?',
              options: ['Only one argument', 'Any number of positional arguments', 'Only keyword arguments', 'No arguments'],
              correct: 1
            },
            {
              question: '@my_dec\ndef func(): pass\n\nThis is equivalent to:',
              options: ['func = my_dec()', 'func = my_dec(func)', 'my_dec = func()', 'func.my_dec()'],
              correct: 1
            },
            {
              question: 'Why do decorators typically use *args and **kwargs?',
              options: ['For performance', 'To work with functions that have any number of parameters', 'It is required syntax', 'To avoid errors'],
              correct: 1
            },
            {
              question: 'What must a decorator function return?',
              options: ['None', 'The original function unchanged', 'A new function (the wrapper)', 'A string'],
              correct: 2
            }
          ]
        },
        {
          id: 'oop_property_decorator',
          title: 'Property Decorator',
          type: 'challenge',
          theory: `<h2>The @property Decorator</h2>
<p>The <code>@property</code> decorator lets you define methods that behave like attributes. Instead of calling <code>obj.get_value()</code>, you just use <code>obj.value</code> — cleaner and more Pythonic!</p>

<h3>Why Use @property?</h3>
<p>Imagine you have a Circle class. The area depends on the radius — it should update automatically when radius changes:</p>

<pre><code>class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        return 3.14159 * self._radius ** 2

c = Circle(5)
print(c.radius)  # 5 (looks like attribute access!)
print(c.area)    # 78.53975

c.radius = 10   # Uses the setter
print(c.area)    # 314.159

# c.radius = -1  # Raises ValueError!</code></pre>

<h3>Read-Only Properties</h3>
<p>Without a setter, a property is read-only:</p>
<pre><code>class Person:
    def __init__(self, first, last):
        self.first = first
        self.last = last
    
    @property
    def full_name(self):
        return f"{self.first} {self.last}"

p = Person("John", "Doe")
print(p.full_name)  # John Doe
# p.full_name = "Jane"  # AttributeError: can't set!</code></pre>

<h3>Computed Properties</h3>
<pre><code>class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        self._celsius = value
    
    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32

t = Temperature(0)
print(t.fahrenheit)  # 32.0
t.celsius = 100
print(t.fahrenheit)  # 212.0</code></pre>`,
          challenge: {
            description: 'Create a class Rectangle with __init__ taking width and height. Add @property methods for area (width * height) and perimeter (2 * (width + height)). Both should be read-only computed properties. Create a Rectangle(4, 6) and print its area and perimeter.',
            starterCode: `class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    @property\n    def area(self):\n        pass\n    \n    @property\n    def perimeter(self):\n        pass\n\nr = Rectangle(4, 6)\nprint(r.area)\nprint(r.perimeter)`,
            expectedOutput: `24\n20`,
            hints: [
              'area property: return self.width * self.height',
              'perimeter property: return 2 * (self.width + self.height)',
              'No setter needed — these are read-only',
              '4*6=24, 2*(4+6)=20'
            ]
          },
          quiz: [
            {
              question: 'What does @property do?',
              options: ['Makes an attribute private', 'Allows a method to be accessed like an attribute', 'Creates a class variable', 'Deletes an attribute'],
              correct: 1
            },
            {
              question: 'How do you make a property read-only?',
              options: ['Use @readonly decorator', 'Define only the @property getter without a setter', 'Set it to None', 'Use a private variable'],
              correct: 1
            },
            {
              question: 'What happens when you try to set a read-only property?',
              options: ['Nothing', 'AttributeError is raised', 'The value is silently ignored', 'A warning is printed'],
              correct: 1
            },
            {
              question: 'How do you define a setter for a property called "name"?',
              options: ['@setter\ndef name(self, value):', '@name.setter\ndef name(self, value):', 'def set_name(self, value):', '@property.setter\ndef name(self, value):'],
              correct: 1
            },
            {
              question: 'When is a @property method called?',
              options: ['Only once when the object is created', 'Every time the property is accessed', 'Only when explicitly called with ()', 'Never automatically'],
              correct: 1
            },
            {
              question: 'What is the advantage of @property over direct attribute access?',
              options: ['It is faster', 'You can add validation, computation, or make attributes read-only', 'It uses less memory', 'It is required in Python 3'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_static_method',
          title: 'Static Method Decorator',
          type: 'challenge',
          theory: `<h2>The @staticmethod Decorator</h2>
<p>A <strong>static method</strong> belongs to a class but doesn't access instance (<code>self</code>) or class (<code>cls</code>) data. It's basically a regular function that lives inside a class for organizational purposes.</p>

<h3>When to Use Static Methods</h3>
<p>Use them for utility functions that are logically related to the class but don't need instance or class data:</p>

<pre><code>class MathUtils:
    @staticmethod
    def add(a, b):
        return a + b
    
    @staticmethod
    def is_even(n):
        return n % 2 == 0
    
    @staticmethod
    def factorial(n):
        if n <= 1:
            return 1
        return n * MathUtils.factorial(n - 1)

# No need to create an instance!
print(MathUtils.add(3, 5))      # 8
print(MathUtils.is_even(4))     # True
print(MathUtils.factorial(5))   # 120

# Can also call on an instance (but no need)
m = MathUtils()
print(m.add(2, 3))  # 5</code></pre>

<h3>Static Methods vs Instance Methods</h3>
<pre><code>class Validator:
    def __init__(self, min_length):
        self.min_length = min_length
    
    # Instance method — uses self
    def validate_length(self, text):
        return len(text) >= self.min_length
    
    # Static method — no self needed
    @staticmethod
    def is_email(text):
        return "@" in text and "." in text
    
    @staticmethod
    def is_numeric(text):
        return text.isdigit()

v = Validator(5)
print(v.validate_length("Hello"))  # True (uses self.min_length)
print(Validator.is_email("a@b.com"))  # True (no instance needed)
print(Validator.is_numeric("123"))    # True</code></pre>

<h3>Organizing Related Functions</h3>
<pre><code>class StringHelper:
    @staticmethod
    def reverse(s):
        return s[::-1]
    
    @staticmethod
    def capitalize_words(s):
        return " ".join(word.capitalize() for word in s.split())
    
    @staticmethod
    def count_vowels(s):
        return sum(1 for c in s.lower() if c in "aeiou")

print(StringHelper.reverse("hello"))          # olleh
print(StringHelper.capitalize_words("hello world"))  # Hello World
print(StringHelper.count_vowels("education"))  # 5</code></pre>`,
          challenge: {
            description: 'Create a class DateUtils with static methods: is_leap_year(year) that returns True if year is divisible by 4 but not 100, unless also divisible by 400; and days_in_month(month, year) that returns days for the given month (use 28/29 for Feb based on leap year). Print is_leap_year(2024) and days_in_month(2, 2024).',
            starterCode: `class DateUtils:\n    @staticmethod\n    def is_leap_year(year):\n        pass\n    \n    @staticmethod\n    def days_in_month(month, year):\n        days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n        if month == 2 and DateUtils.is_leap_year(year):\n            return 29\n        return days[month - 1]\n\nprint(DateUtils.is_leap_year(2024))\nprint(DateUtils.days_in_month(2, 2024))`,
            expectedOutput: `True\n29`,
            hints: [
              'Leap year: (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)',
              '2024 % 4 == 0 and 2024 % 100 != 0, so it is a leap year',
              'February in a leap year has 29 days',
              'Static methods use @staticmethod and have no self parameter'
            ]
          },
          quiz: [
            {
              question: 'What is a static method?',
              options: ['A method that cannot be changed', 'A method that belongs to a class but does not access self or cls', 'A method that runs only once', 'A method that is always private'],
              correct: 1
            },
            {
              question: 'What decorator marks a static method?',
              options: ['@static', '@staticmethod', '@classmethod', '@no_self'],
              correct: 1
            },
            {
              question: 'Can you call a static method without creating an instance?',
              options: ['No, you always need an instance', 'Yes, using ClassName.method_name()', 'Only with special syntax', 'Only in Python 3'],
              correct: 1
            },
            {
              question: 'What parameters does a static method take?',
              options: ['self is required', 'cls is required', 'Neither self nor cls — just regular parameters', 'Both self and cls'],
              correct: 2
            },
            {
              question: 'When should you use a static method instead of a regular function?',
              options: ['Always', 'When the function is logically related to the class', 'Never, use regular functions', 'Only for private functions'],
              correct: 1
            },
            {
              question: 'Can a static method access instance attributes?',
              options: ['Yes, through self', 'No, it has no access to self', 'Only if passed explicitly', 'Only class attributes'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_class_method',
          title: 'Class Method Decorator',
          type: 'challenge',
          theory: `<h2>The @classmethod Decorator</h2>
<p>A <strong>class method</strong> receives the class itself as its first argument (<code>cls</code>) instead of an instance (<code>self</code>). It can access and modify class-level data and create new instances in alternative ways.</p>

<h3>Basic Class Method</h3>
<pre><code>class Employee:
    raise_amount = 1.04  # 4% raise
    employee_count = 0
    
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        Employee.employee_count += 1
    
    @classmethod
    def set_raise_amount(cls, amount):
        cls.raise_amount = amount
    
    @classmethod
    def get_count(cls):
        return cls.employee_count

e1 = Employee("Alice", 50000)
e2 = Employee("Bob", 60000)
print(Employee.get_count())  # 2

Employee.set_raise_amount(1.05)
print(Employee.raise_amount)  # 1.05</code></pre>

<h3>Alternative Constructors</h3>
<p>The most powerful use of class methods — creating objects in different ways:</p>
<pre><code>class Date:
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day
    
    @classmethod
    def from_string(cls, date_string):
        year, month, day = map(int, date_string.split("-"))
        return cls(year, month, day)
    
    @classmethod
    def today(cls):
        import datetime
        t = datetime.date.today()
        return cls(t.year, t.month, t.day)
    
    def display(self):
        return f"{self.year}-{self.month:02d}-{self.day:02d}"

d1 = Date(2024, 1, 15)
d2 = Date.from_string("2024-06-20")
print(d1.display())  # 2024-01-15
print(d2.display())  # 2024-06-20</code></pre>

<h3>cls vs self</h3>
<ul>
<li><code>self</code> — refers to the specific instance</li>
<li><code>cls</code> — refers to the class itself</li>
</ul>
<pre><code>class Config:
    _instance = None
    
    @classmethod
    def get_instance(cls):
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance

c1 = Config.get_instance()
c2 = Config.get_instance()
print(c1 is c2)  # True — same instance!</code></pre>

<p>This is actually the Singleton pattern — ensuring only one instance exists!</p>`,
          challenge: {
            description: 'Create a class Person with __init__(self, name, age). Add a class method from_birth_year(cls, name, birth_year) that calculates age from 2024 and returns a new Person. Add a display() method returning "{name} is {age}". Create a person using from_birth_year("Alice", 1990) and print display().',
            starterCode: `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    @classmethod\n    def from_birth_year(cls, name, birth_year):\n        pass\n    \n    def display(self):\n        pass\n\np = Person.from_birth_year("Alice", 1990)\nprint(p.display())`,
            expectedOutput: 'Alice is 34',
            hints: [
              'Calculate age: 2024 - birth_year',
              'Return cls(name, age) to create a new Person',
              'display: return f"{self.name} is {self.age}"',
              '2024 - 1990 = 34'
            ]
          },
          quiz: [
            {
              question: 'What does cls represent in a class method?',
              options: ['The current instance', 'The class itself', 'A closure', 'A class variable'],
              correct: 1
            },
            {
              question: 'What is the primary use of class methods?',
              options: ['Replacing instance methods', 'Alternative constructors and modifying class state', 'Making methods private', 'Improving performance'],
              correct: 1
            },
            {
              question: 'How do you call a class method?',
              options: ['Only through an instance', 'ClassName.method_name() or instance.method_name()', 'Only inside the class', 'Using super()'],
              correct: 1
            },
            {
              question: 'What does cls(args) do inside a class method?',
              options: ['Calls __init__ on the current instance', 'Creates a new instance of the class', 'Modifies the class', 'Returns cls'],
              correct: 1
            },
            {
              question: 'What is an alternative constructor?',
              options: ['A second __init__ method', 'A class method that creates instances in a different way', 'A subclass constructor', 'A factory function'],
              correct: 1
            },
            {
              question: 'Can a class method access instance attributes?',
              options: ['Yes, through self', 'No, it only has access to cls (class-level data)', 'Only private ones', 'Only with getattr'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: 'oop_class_properties',
      title: 'Class Properties',
      lessons: [
        {
          id: 'oop_instance_vs_class_vars',
          title: 'Instance vs Class Variables',
          type: 'challenge',
          theory: `<h2>Instance vs Class Variables</h2>
<p>Understanding the difference between instance and class variables is crucial. They behave differently and serve different purposes.</p>

<h3>Class Variables — Shared Data</h3>
<p>Class variables are defined directly in the class body and are shared by ALL instances:</p>
<pre><code>class Dog:
    species = "Canis familiaris"  # Class variable
    all_dogs = []                  # Shared list
    
    def __init__(self, name):
        self.name = name           # Instance variable
        Dog.all_dogs.append(self)

d1 = Dog("Rex")
d2 = Dog("Bella")
print(Dog.species)        # Canis familiaris
print(len(Dog.all_dogs))  # 2
print(Dog.all_dogs[0].name)  # Rex</code></pre>

<h3>Instance Variables — Unique Data</h3>
<pre><code>class Student:
    school = "Python High"  # Class variable
    
    def __init__(self, name, grade):
        self.name = name    # Instance variable
        self.grade = grade  # Instance variable

s1 = Student("Alice", "A")
s2 = Student("Bob", "B")

# Each has their own name and grade
print(s1.name, s1.grade)  # Alice A
print(s2.name, s2.grade)  # Bob B

# Both share the school
print(s1.school)  # Python High
print(s2.school)  # Python High</code></pre>

<h3>The Shadowing Trap</h3>
<pre><code>class Counter:
    count = 0  # Class variable
    
    def increment(self):
        self.count += 1  # Creates instance variable! Shadows class var

c1 = Counter()
c2 = Counter()
c1.increment()
c1.increment()
print(c1.count)       # 2 (instance variable)
print(c2.count)       # 0 (still reading class variable)
print(Counter.count)  # 0 (class variable unchanged!)

# Correct way to modify class variable:
class Counter2:
    count = 0
    
    def increment(self):
        Counter2.count += 1  # Modifies class variable directly</code></pre>

<h3>When to Use Each</h3>
<ul>
<li><strong>Class variables:</strong> Constants, counters, shared configuration, default values</li>
<li><strong>Instance variables:</strong> Data unique to each object (name, age, score)</li>
</ul>`,
          challenge: {
            description: 'Create a class Pet with a class variable total_pets = 0 and instance variables name and animal_type. Each time a Pet is created, increment total_pets on the CLASS (not self). Create Pet("Rex", "dog") and Pet("Whiskers", "cat"). Print Pet.total_pets, then print each pet name.',
            starterCode: `class Pet:\n    total_pets = 0\n    \n    def __init__(self, name, animal_type):\n        self.name = name\n        self.animal_type = animal_type\n        # Increment class variable\n        pass\n\np1 = Pet("Rex", "dog")\np2 = Pet("Whiskers", "cat")\nprint(Pet.total_pets)\nprint(p1.name)\nprint(p2.name)`,
            expectedOutput: `2\nRex\nWhiskers`,
            hints: [
              'Use Pet.total_pets += 1 (not self.total_pets)',
              'If you use self.total_pets += 1, it creates an instance variable',
              'Class variables are modified via ClassName.variable',
              'Instance variables are set via self.variable'
            ]
          },
          quiz: [
            {
              question: 'Where are class variables defined?',
              options: ['Inside __init__', 'Directly in the class body, outside any method', 'Inside a @classmethod', 'Outside the class'],
              correct: 1
            },
            {
              question: 'What happens when you write self.x += 1 where x is a class variable?',
              options: ['It modifies the class variable', 'It creates a new instance variable that shadows the class variable', 'It raises an error', 'Nothing happens'],
              correct: 1
            },
            {
              question: 'How should you modify a class variable from within an instance method?',
              options: ['self.variable += 1', 'ClassName.variable += 1', 'cls.variable += 1', 'global variable'],
              correct: 1
            },
            {
              question: 'If a class variable is a list, and you call self.list.append(x), what happens?',
              options: ['Creates a new instance list', 'Modifies the shared class list (all instances see the change)', 'Raises an error', 'Appends only for that instance'],
              correct: 1
            },
            {
              question: 'Which is a good use case for a class variable?',
              options: ['Storing a person name', 'Counting total instances created', 'Storing individual scores', 'Storing unique IDs'],
              correct: 1
            },
            {
              question: 'Can instances access class variables?',
              options: ['No, only through ClassName.var', 'Yes, through self.var (reads class var if no instance var shadows it)', 'Only with getattr', 'Only class methods can'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_property_decorators_adv',
          title: 'Property Decorators',
          type: 'challenge',
          theory: `<h2>Property Decorators — Getter, Setter, Deleter</h2>
<p>Properties provide a clean interface for controlled attribute access. The full property system includes getter, setter, and deleter:</p>

<h3>Complete Property Pattern</h3>
<pre><code>class Product:
    def __init__(self, name, price):
        self.name = name
        self._price = price  # Private backing field
    
    @property
    def price(self):
        """Getter - runs when you READ price"""
        return self._price
    
    @price.setter
    def price(self, value):
        """Setter - runs when you WRITE to price"""
        if value < 0:
            raise ValueError("Price cannot be negative")
        self._price = value
    
    @price.deleter
    def price(self):
        """Deleter - runs when you del price"""
        print("Deleting price")
        self._price = 0

p = Product("Widget", 9.99)
print(p.price)     # 9.99 (getter)
p.price = 14.99    # (setter)
print(p.price)     # 14.99
del p.price        # Deleting price (deleter)
print(p.price)     # 0</code></pre>

<h3>Validation with Properties</h3>
<pre><code>class User:
    def __init__(self, username, email):
        self.username = username  # Goes through setter!
        self.email = email
    
    @property
    def username(self):
        return self._username
    
    @username.setter
    def username(self, value):
        if len(value) < 3:
            raise ValueError("Username must be at least 3 characters")
        self._username = value
    
    @property
    def email(self):
        return self._email
    
    @email.setter
    def email(self, value):
        if "@" not in value:
            raise ValueError("Invalid email")
        self._email = value

u = User("alice", "alice@test.com")
print(u.username)  # alice
print(u.email)     # alice@test.com</code></pre>

<h3>Dependent Properties</h3>
<pre><code>class BMI:
    def __init__(self, weight_kg, height_m):
        self.weight = weight_kg
        self.height = height_m
    
    @property
    def bmi(self):
        return round(self.weight / (self.height ** 2), 1)
    
    @property
    def category(self):
        b = self.bmi
        if b < 18.5: return "Underweight"
        elif b < 25: return "Normal"
        elif b < 30: return "Overweight"
        else: return "Obese"

p = BMI(70, 1.75)
print(p.bmi)       # 22.9
print(p.category)  # Normal</code></pre>`,
          challenge: {
            description: 'Create a class Score with a property "value" that has a setter ensuring the value stays between 0 and 100 (clip it: below 0 becomes 0, above 100 becomes 100). Add a read-only property "grade" that returns "A" for 90+, "B" for 80+, "C" for 70+, "D" for 60+, "F" otherwise. Set value to 85, print grade. Set value to 150, print value and grade.',
            starterCode: `class Score:\n    def __init__(self, value):\n        self.value = value  # Uses setter\n    \n    @property\n    def value(self):\n        return self._value\n    \n    @value.setter\n    def value(self, v):\n        # Clip between 0 and 100\n        pass\n    \n    @property\n    def grade(self):\n        pass\n\ns = Score(85)\nprint(s.grade)\ns.value = 150\nprint(s.value)\nprint(s.grade)`,
            expectedOutput: `B\n100\nA`,
            hints: [
              'Clip: self._value = max(0, min(100, v))',
              'Grade: if self._value >= 90: return "A", elif >= 80: return "B", etc.',
              '85 gives B, 150 clips to 100 which gives A',
              'The setter is called even from __init__ when you write self.value = value'
            ]
          },
          quiz: [
            {
              question: 'What decorator creates a setter for property "name"?',
              options: ['@setter', '@name.setter', '@property.setter', '@set_name'],
              correct: 1
            },
            {
              question: 'When is the property getter called?',
              options: ['Only once at creation', 'Every time you read/access the property', 'Only when print() is used', 'Only with getattr()'],
              correct: 1
            },
            {
              question: 'What happens if __init__ uses self.x = val and x has a setter?',
              options: ['The setter is bypassed', 'The setter is called — validation happens even in __init__', 'An error occurs', 'It depends on the order'],
              correct: 1
            },
            {
              question: 'What is the backing field convention for a property called "price"?',
              options: ['self.price', 'self._price', 'self.__price', 'self.price_'],
              correct: 1
            },
            {
              question: 'What does @price.deleter define?',
              options: ['A method to delete the object', 'Code that runs when del obj.price is used', 'A method to reset the price', 'A destructor'],
              correct: 1
            },
            {
              question: 'Why use properties instead of direct attribute access?',
              options: ['Properties are faster', 'To add validation, computation, or controlled access transparently', 'Python requires properties', 'To make code longer'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_private_attributes',
          title: 'Private Attributes',
          type: 'challenge',
          theory: `<h2>Private Attributes in Python</h2>
<p>Python doesn't have truly private attributes like Java or C++. Instead, it uses <strong>naming conventions</strong> to signal access levels:</p>

<h3>Naming Conventions</h3>
<ul>
<li><code>name</code> — Public: anyone can access</li>
<li><code>_name</code> — Protected: "please don't access from outside" (convention only)</li>
<li><code>__name</code> — Private: name mangling makes it harder to access</li>
</ul>

<pre><code>class Account:
    def __init__(self, owner, balance):
        self.owner = owner        # Public
        self._account_type = "savings"  # Protected (convention)
        self.__balance = balance   # Private (name mangled)
    
    def get_balance(self):
        return self.__balance
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

acc = Account("Alice", 1000)
print(acc.owner)          # Alice — works fine
print(acc._account_type)  # savings — works (just a convention)
# print(acc.__balance)    # AttributeError! Name mangling
print(acc.get_balance())  # 1000 — proper access via method</code></pre>

<h3>Name Mangling Explained</h3>
<p>Python renames <code>__attribute</code> to <code>_ClassName__attribute</code>:</p>
<pre><code>class Secret:
    def __init__(self):
        self.__hidden = "secret data"

s = Secret()
# print(s.__hidden)              # AttributeError
print(s._Secret__hidden)         # secret data (mangled name)
print(dir(s))  # Shows _Secret__hidden in the list</code></pre>

<h3>When to Use Each</h3>
<pre><code>class Database:
    def __init__(self, host, password):
        self.host = host            # Public — users need this
        self._connection = None     # Protected — internal use
        self.__password = password  # Private — must not leak
    
    def connect(self):
        self._connection = f"Connected to {self.host}"
        return self._connection
    
    def _validate(self):
        # Internal helper — protected
        return self.__password is not None

db = Database("localhost", "secret123")
print(db.connect())  # Connected to localhost</code></pre>

<p><strong>Philosophy:</strong> Python follows "we are all consenting adults" — conventions signal intent, but nothing is truly hidden. Use <code>_single</code> for internal APIs and <code>__double</code> only to prevent name clashes in inheritance.</p>`,
          challenge: {
            description: 'Create a class Wallet with a private attribute __balance (set in __init__). Add methods: deposit(amount) that only works for positive amounts, withdraw(amount) that only works if sufficient balance, and get_balance() that returns the balance. Start with 100, deposit 50, withdraw 30, print get_balance().',
            starterCode: `class Wallet:\n    def __init__(self, balance):\n        self.__balance = balance\n    \n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n    \n    def withdraw(self, amount):\n        if amount <= self.__balance:\n            self.__balance -= amount\n    \n    def get_balance(self):\n        return self.__balance\n\nw = Wallet(100)\nw.deposit(50)\nw.withdraw(30)\nprint(w.get_balance())`,
            expectedOutput: '120',
            hints: [
              '__balance is private — access only through methods',
              'deposit 50: 100 + 50 = 150',
              'withdraw 30: 150 - 30 = 120',
              'get_balance returns self.__balance'
            ]
          },
          quiz: [
            {
              question: 'What does a single underscore prefix (_var) mean in Python?',
              options: ['The variable is deleted', 'Convention: it is meant for internal use only', 'It cannot be accessed', 'It is a constant'],
              correct: 1
            },
            {
              question: 'What does double underscore prefix (__var) trigger?',
              options: ['Makes it truly private', 'Name mangling — renames to _ClassName__var', 'Deletes the variable', 'Makes it a class variable'],
              correct: 1
            },
            {
              question: 'Can you still access a name-mangled attribute?',
              options: ['No, it is impossible', 'Yes, via _ClassName__attribute', 'Only inside the class', 'Only with special tools'],
              correct: 1
            },
            {
              question: 'What error do you get trying to access obj.__private directly?',
              options: ['TypeError', 'AttributeError', 'NameError', 'ValueError'],
              correct: 1
            },
            {
              question: 'What is Python\'s philosophy on private attributes?',
              options: ['Strict enforcement like Java', 'We are all consenting adults — conventions signal intent', 'No private attributes exist', 'Use properties instead'],
              correct: 1
            },
            {
              question: 'When should you use double underscore (__var)?',
              options: ['For all internal variables', 'Only to prevent name clashes in inheritance hierarchies', 'For passwords only', 'Never'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_recap_bank_account',
          title: 'Recap - Bank Account Manager',
          type: 'mastery',
          theory: `<h2>Recap: Bank Account Manager</h2>
<p>Let's combine class properties, private attributes, and property decorators to build a secure bank account system.</p>

<h3>Complete Implementation</h3>
<pre><code>class BankAccount:
    _interest_rate = 0.05  # 5% — protected class variable
    _total_accounts = 0
    
    def __init__(self, owner, balance=0):
        self._owner = owner
        self.__balance = balance  # Private
        self.__transactions = []
        BankAccount._total_accounts += 1
        self._account_id = BankAccount._total_accounts
    
    @property
    def balance(self):
        return self.__balance
    
    @property
    def owner(self):
        return self._owner
    
    def deposit(self, amount):
        if amount <= 0:
            return "Amount must be positive"
        self.__balance += amount
        self.__transactions.append(f"+{amount}")
        return f"Deposited {amount}. Balance: {self.__balance}"
    
    def withdraw(self, amount):
        if amount <= 0:
            return "Amount must be positive"
        if amount > self.__balance:
            return "Insufficient funds"
        self.__balance -= amount
        self.__transactions.append(f"-{amount}")
        return f"Withdrew {amount}. Balance: {self.__balance}"
    
    def apply_interest(self):
        interest = self.__balance * BankAccount._interest_rate
        self.__balance += interest
        self.__transactions.append(f"+{interest} (interest)")
        return f"Interest applied: {interest}"
    
    @classmethod
    def set_interest_rate(cls, rate):
        cls._interest_rate = rate
    
    @classmethod
    def get_total_accounts(cls):
        return cls._total_accounts
    
    def get_statement(self):
        return f"Account #{self._account_id} ({self._owner}): Balance = {self.__balance}"

# Usage
acc = BankAccount("Alice", 1000)
acc.deposit(500)
acc.withdraw(200)
print(acc.get_statement())
# Account #1 (Alice): Balance = 1300</code></pre>`,
          challenge: {
            description: 'Create a BankAccount class with private __balance, a property balance (read-only), deposit(amount) and withdraw(amount) methods with validation, and a class method from_dict(cls, data) that creates an account from {"owner": "...", "balance": ...}. Create account from {"owner": "Alice", "balance": 500}, deposit 200, withdraw 100, print balance property.',
            starterCode: `class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.__balance = balance\n    \n    @property\n    def balance(self):\n        return self.__balance\n    \n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n    \n    def withdraw(self, amount):\n        if 0 < amount <= self.__balance:\n            self.__balance -= amount\n    \n    @classmethod\n    def from_dict(cls, data):\n        return cls(data["owner"], data["balance"])\n\nacc = BankAccount.from_dict({"owner": "Alice", "balance": 500})\nacc.deposit(200)\nacc.withdraw(100)\nprint(acc.balance)`,
            expectedOutput: '600',
            hints: [
              'from_dict: return cls(data["owner"], data["balance"])',
              'Start 500, deposit 200 = 700, withdraw 100 = 600',
              'balance property just returns self.__balance',
              'Validation: amount > 0 for deposit, 0 < amount <= balance for withdraw'
            ]
          },
          mastery: {
            description: 'Add transaction history. Each deposit/withdraw should append to a __transactions list as {"type": "deposit"/"withdraw", "amount": X}. Add a method get_statement() that returns a string with the owner name and each transaction on a new line like "deposit: +200\nwithdraw: -100". Create account with 1000, deposit 500, withdraw 200, print get_statement().',
            starterCode: `class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.__balance = balance\n        self.__transactions = []\n    \n    # Add deposit, withdraw with transaction tracking\n    # Add get_statement method\n    pass`,
            expectedOutput: `Alice's Account:\ndeposit: +500\nwithdraw: -200`,
            hints: [
              'Append {"type": "deposit", "amount": amount} to __transactions',
              'get_statement builds a string from owner and transactions',
              'Use a loop or join to format each transaction'
            ]
          },
          quiz: [
            {
              question: 'Why make __balance private instead of public?',
              options: ['For performance', 'To prevent direct modification without validation', 'Python requires it', 'To save memory'],
              correct: 1
            },
            {
              question: 'What does a read-only property mean?',
              options: ['You cannot read it', 'It has a getter but no setter — you cannot assign to it', 'It returns None', 'It is a constant'],
              correct: 1
            },
            {
              question: 'What advantage does from_dict classmethod provide?',
              options: ['Better performance', 'An alternative way to create instances from dictionary data', 'It replaces __init__', 'It makes the class immutable'],
              correct: 1
            },
            {
              question: 'How does the bank account protect against negative deposits?',
              options: ['Name mangling', 'Checking amount > 0 in the deposit method', 'Using a property setter', 'Raising TypeError'],
              correct: 1
            },
            {
              question: 'What combines properties, private attributes, and class methods?',
              options: ['Polymorphism', 'Encapsulation — controlling access and bundling data with behavior', 'Inheritance', 'Abstraction only'],
              correct: 1
            },
            {
              question: 'Why track transactions in a list rather than just the balance?',
              options: ['Lists are faster', 'To maintain an audit trail and enable features like statements and undo', 'Python requires it', 'For security'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: 'oop_inheritance',
      title: 'Inheritance',
      lessons: [
        {
          id: 'oop_basic_inheritance',
          title: 'Basic Inheritance',
          type: 'challenge',
          theory: `<h2>Basic Inheritance</h2>
<p>Inheritance lets you create a new class based on an existing one. The new class (child/subclass) <strong>inherits</strong> all attributes and methods from the parent (superclass), and can add or modify behavior.</p>

<h3>Real-World Analogy</h3>
<p>Think of biological inheritance: a child inherits traits from parents (eye color, height) but also has their own unique features. Similarly, a <code>Dog</code> class inherits from <code>Animal</code> (has name, can eat) but adds dog-specific behavior (bark).</p>

<h3>Basic Syntax</h3>
<pre><code>class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def speak(self):
        return f"{self.name} makes a sound"
    
    def describe(self):
        return f"{self.name} is a {self.species}"

class Dog(Animal):  # Dog inherits from Animal
    def fetch(self):
        return f"{self.name} fetches the ball!"

class Cat(Animal):  # Cat inherits from Animal
    def purr(self):
        return f"{self.name} purrs..."

# Dog gets ALL of Animal's methods + its own
rex = Dog("Rex", "dog")
print(rex.describe())  # Rex is a dog (inherited)
print(rex.speak())     # Rex makes a sound (inherited)
print(rex.fetch())     # Rex fetches the ball! (own method)

whiskers = Cat("Whiskers", "cat")
print(whiskers.purr())  # Whiskers purrs...</code></pre>

<h3>isinstance and issubclass</h3>
<pre><code>print(isinstance(rex, Dog))     # True
print(isinstance(rex, Animal))  # True (Dog IS-A Animal)
print(isinstance(rex, Cat))     # False

print(issubclass(Dog, Animal))  # True
print(issubclass(Animal, Dog))  # False</code></pre>

<h3>Extending with __init__</h3>
<pre><code>class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

class ElectricVehicle(Vehicle):
    def __init__(self, make, model, year, battery_size):
        super().__init__(make, model, year)
        self.battery_size = battery_size
    
    def range(self):
        return f"{self.battery_size * 4} miles"

tesla = ElectricVehicle("Tesla", "Model 3", 2024, 75)
print(f"{tesla.make} {tesla.model}")  # Tesla Model 3
print(tesla.range())  # 300 miles</code></pre>`,
          challenge: {
            description: 'Create a base class Shape with __init__(self, color) and a method describe() returning "{color} shape". Create a child class Circle(Shape) with __init__(self, color, radius) that calls super().__init__(color) and stores radius. Add a method area() returning 3.14159 * radius ** 2. Create a Circle("red", 5) and print describe() and area().',
            starterCode: `class Shape:\n    def __init__(self, color):\n        self.color = color\n    \n    def describe(self):\n        return f"{self.color} shape"\n\nclass Circle(Shape):\n    def __init__(self, color, radius):\n        pass\n    \n    def area(self):\n        pass\n\nc = Circle("red", 5)\nprint(c.describe())\nprint(c.area())`,
            expectedOutput: `red shape\n78.53975`,
            hints: [
              'In Circle.__init__: call super().__init__(color) then self.radius = radius',
              'area: return 3.14159 * self.radius ** 2',
              'describe() is inherited from Shape',
              '3.14159 * 25 = 78.53975'
            ]
          },
          quiz: [
            {
              question: 'What does inheritance allow?',
              options: ['Copying files', 'Creating new classes based on existing ones, reusing code', 'Deleting classes', 'Making classes private'],
              correct: 1
            },
            {
              question: 'In class Dog(Animal), which is the parent class?',
              options: ['Dog', 'Animal', 'Both', 'Neither'],
              correct: 1
            },
            {
              question: 'What does isinstance(obj, ParentClass) return if obj is an instance of a child class?',
              options: ['False', 'True', 'None', 'Error'],
              correct: 1
            },
            {
              question: 'Can a child class access methods of the parent class?',
              options: ['No', 'Yes, all public and protected methods are inherited', 'Only static methods', 'Only with permission'],
              correct: 1
            },
            {
              question: 'What does issubclass(Dog, Animal) check?',
              options: ['If Dog is an instance of Animal', 'If Dog is a subclass of Animal', 'If they are the same class', 'If Animal inherits from Dog'],
              correct: 1
            },
            {
              question: 'What is the syntax for creating a child class?',
              options: ['class Child inherits Parent:', 'class Child(Parent):', 'class Child extends Parent:', 'class Child -> Parent:'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_super_function',
          title: 'The super() Function',
          type: 'challenge',
          theory: `<h2>The super() Function</h2>
<p><code>super()</code> gives you access to the parent class methods. It's most commonly used in <code>__init__</code> to call the parent's constructor, ensuring proper initialization.</p>

<h3>Why We Need super()</h3>
<p>When a child class has its own <code>__init__</code>, the parent's <code>__init__</code> is NOT called automatically. You must use <code>super()</code> to call it:</p>

<pre><code>class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hi, I'm {self.name}"

class Student(Person):
    def __init__(self, name, age, university):
        super().__init__(name, age)  # Call Person's __init__
        self.university = university
    
    def study(self):
        return f"{self.name} is studying at {self.university}"

s = Student("Alice", 20, "MIT")
print(s.greet())  # Hi, I'm Alice (inherited, works because super() set name)
print(s.study())  # Alice is studying at MIT</code></pre>

<h3>What Happens Without super()?</h3>
<pre><code>class BadStudent(Person):
    def __init__(self, name, age, university):
        # Forgot super().__init__()!
        self.university = university

bs = BadStudent("Bob", 21, "Harvard")
# print(bs.name)  # AttributeError! name was never set</code></pre>

<h3>super() in Other Methods</h3>
<pre><code>class Logger:
    def log(self, message):
        return f"[LOG] {message}"

class TimedLogger(Logger):
    def log(self, message):
        base = super().log(message)  # Call parent's log
        return f"[2024-01-01] {base}"

tl = TimedLogger()
print(tl.log("Started"))  # [2024-01-01] [LOG] Started</code></pre>

<h3>Multi-level Inheritance</h3>
<pre><code>class A:
    def __init__(self):
        self.a = "A"
        print("A init")

class B(A):
    def __init__(self):
        super().__init__()
        self.b = "B"
        print("B init")

class C(B):
    def __init__(self):
        super().__init__()
        self.c = "C"
        print("C init")

obj = C()
# A init
# B init
# C init
print(obj.a, obj.b, obj.c)  # A B C</code></pre>`,
          challenge: {
            description: 'Create class Employee with __init__(name, salary) and a method info() returning "{name} earns {salary}". Create class Manager(Employee) with __init__(name, salary, department) using super(). Add method team_info() returning "{name} manages {department}". Create Manager("Alice", 80000, "Engineering"), print info() and team_info().',
            starterCode: `class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n    \n    def info(self):\n        return f"{self.name} earns {self.salary}"\n\nclass Manager(Employee):\n    def __init__(self, name, salary, department):\n        pass\n    \n    def team_info(self):\n        pass\n\nm = Manager("Alice", 80000, "Engineering")\nprint(m.info())\nprint(m.team_info())`,
            expectedOutput: `Alice earns 80000\nAlice manages Engineering`,
            hints: [
              'In Manager.__init__: super().__init__(name, salary)',
              'Then: self.department = department',
              'team_info: return f"{self.name} manages {self.department}"',
              'info() is inherited from Employee and works because super() set name and salary'
            ]
          },
          quiz: [
            {
              question: 'What does super() do?',
              options: ['Creates a new parent class', 'Returns a proxy object to access parent class methods', 'Makes the class faster', 'Deletes the parent class'],
              correct: 1
            },
            {
              question: 'What happens if you forget to call super().__init__() in a child class?',
              options: ['Nothing, it is automatic', 'Parent attributes are not initialized, causing AttributeError later', 'A warning is printed', 'The class cannot be created'],
              correct: 1
            },
            {
              question: 'Can you use super() in methods other than __init__?',
              options: ['No, only in __init__', 'Yes, to call any parent method', 'Only in class methods', 'Only in static methods'],
              correct: 1
            },
            {
              question: 'In multi-level inheritance A -> B -> C, what does super().__init__() in C call?',
              options: ['A.__init__', 'B.__init__ (the immediate parent)', 'Both A and B', 'Nothing'],
              correct: 1
            },
            {
              question: 'What is the old-style way to call parent __init__ (before super)?',
              options: ['parent.__init__(self)', 'ParentClass.__init__(self, args)', 'init(parent)', 'self.parent.__init__()'],
              correct: 1
            },
            {
              question: 'Does super() require arguments in Python 3?',
              options: ['Yes, always super(ClassName, self)', 'No, just super() works in Python 3', 'Yes, super(self)', 'Depends on the situation'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_method_overriding',
          title: 'Method Overriding',
          type: 'challenge',
          theory: `<h2>Method Overriding</h2>
<p>When a child class defines a method with the same name as a parent method, the child's version <strong>overrides</strong> (replaces) the parent's version. This is how child classes customize inherited behavior.</p>

<h3>Basic Override</h3>
<pre><code>class Animal:
    def speak(self):
        return "Some generic sound"
    
    def describe(self):
        return f"I am an animal"

class Dog(Animal):
    def speak(self):  # Override!
        return "Woof!"

class Cat(Animal):
    def speak(self):  # Override!
        return "Meow!"

animals = [Dog(), Cat(), Animal()]
for a in animals:
    print(a.speak())
# Woof!
# Meow!
# Some generic sound</code></pre>

<h3>Override + Extend (using super)</h3>
<p>Sometimes you want to ADD to parent behavior, not replace it entirely:</p>
<pre><code>class Report:
    def generate(self):
        return "=== Report ===\nGenerated report content"

class DetailedReport(Report):
    def generate(self):
        base = super().generate()  # Get parent's output
        return f"{base}\nDetailed analysis included\nCharts attached"

r = DetailedReport()
print(r.generate())
# === Report ===
# Generated report content
# Detailed analysis included
# Charts attached</code></pre>

<h3>Override __init__ Properly</h3>
<pre><code>class Shape:
    def __init__(self, color="black"):
        self.color = color
    
    def area(self):
        return 0  # Base implementation

class Rectangle(Shape):
    def __init__(self, width, height, color="black"):
        super().__init__(color)
        self.width = width
        self.height = height
    
    def area(self):  # Override
        return self.width * self.height

class Square(Rectangle):
    def __init__(self, side, color="black"):
        super().__init__(side, side, color)
    # No need to override area — Rectangle's works!

s = Square(5, "blue")
print(s.area())   # 25
print(s.color)    # blue</code></pre>

<h3>Checking Which Method Runs</h3>
<pre><code>class Parent:
    def greet(self):
        return "Hello from Parent"

class Child(Parent):
    def greet(self):
        return "Hello from Child"

c = Child()
print(c.greet())          # Hello from Child (override wins)
print(Parent.greet(c))    # Hello from Parent (explicit parent call)</code></pre>`,
          challenge: {
            description: 'Create class Notification with method send() returning "Sending notification". Create EmailNotification(Notification) that overrides send() to return "Sending email to {self.recipient}" (set recipient in __init__). Create SMSNotification(Notification) overriding send() to return "Sending SMS to {self.phone}". Create both and print send() for each.',
            starterCode: `class Notification:\n    def send(self):\n        return "Sending notification"\n\nclass EmailNotification(Notification):\n    def __init__(self, recipient):\n        self.recipient = recipient\n    \n    def send(self):\n        pass\n\nclass SMSNotification(Notification):\n    def __init__(self, phone):\n        self.phone = phone\n    \n    def send(self):\n        pass\n\nemail = EmailNotification("alice@test.com")\nsms = SMSNotification("555-0123")\nprint(email.send())\nprint(sms.send())`,
            expectedOutput: `Sending email to alice@test.com\nSending SMS to 555-0123`,
            hints: [
              'EmailNotification.send: return f"Sending email to {self.recipient}"',
              'SMSNotification.send: return f"Sending SMS to {self.phone}"',
              'The child method completely replaces the parent method',
              'Each class has its own version of send()'
            ]
          },
          quiz: [
            {
              question: 'What is method overriding?',
              options: ['Deleting a parent method', 'A child class redefining a method that exists in the parent', 'Adding parameters to a method', 'Calling a method twice'],
              correct: 1
            },
            {
              question: 'When you override a method, which version runs on a child instance?',
              options: ['Parent version', 'Child version (the override)', 'Both', 'Neither'],
              correct: 1
            },
            {
              question: 'How can you call the parent version of an overridden method?',
              options: ['parent.method()', 'super().method()', 'self.parent.method()', 'It is impossible'],
              correct: 1
            },
            {
              question: 'What is the difference between overriding and extending?',
              options: ['They are the same', 'Overriding replaces; extending uses super() to add to parent behavior', 'Extending removes methods', 'Overriding only works with __init__'],
              correct: 1
            },
            {
              question: 'If a child does not override a method, what happens when you call it?',
              options: ['Error', 'The parent version is used', 'None is returned', 'The method does nothing'],
              correct: 1
            },
            {
              question: 'Can you override __init__?',
              options: ['No, __init__ cannot be overridden', 'Yes, but you should call super().__init__() for proper parent initialization', 'Only with @override decorator', 'Only in Python 3.10+'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_multiple_inheritance',
          title: 'Multiple Inheritance',
          type: 'challenge',
          theory: `<h2>Multiple Inheritance</h2>
<p>Python supports inheriting from <strong>multiple</strong> parent classes. A child class can combine features from several parents — like a smartphone that inherits from both Phone and Camera.</p>

<h3>Basic Multiple Inheritance</h3>
<pre><code>class Flyable:
    def fly(self):
        return "Flying high!"

class Swimmable:
    def swim(self):
        return "Swimming fast!"

class Duck(Flyable, Swimmable):
    def quack(self):
        return "Quack!"

donald = Duck()
print(donald.fly())    # Flying high! (from Flyable)
print(donald.swim())   # Swimming fast! (from Swimmable)
print(donald.quack())  # Quack! (own method)</code></pre>

<h3>Mixins — A Common Pattern</h3>
<p>Mixins are small classes that add specific functionality:</p>
<pre><code>class JsonMixin:
    def to_json(self):
        import json
        return json.dumps(self.__dict__)

class PrintMixin:
    def print_info(self):
        for key, val in self.__dict__.items():
            print(f"  {key}: {val}")

class User(JsonMixin, PrintMixin):
    def __init__(self, name, email):
        self.name = name
        self.email = email

u = User("Alice", "alice@test.com")
print(u.to_json())
# {"name": "Alice", "email": "alice@test.com"}
u.print_info()
#   name: Alice
#   email: alice@test.com</code></pre>

<h3>The Diamond Problem</h3>
<pre><code>class A:
    def greet(self):
        return "Hello from A"

class B(A):
    def greet(self):
        return "Hello from B"

class C(A):
    def greet(self):
        return "Hello from C"

class D(B, C):  # Diamond: D -> B -> A, D -> C -> A
    pass

d = D()
print(d.greet())  # Hello from B
# Python uses MRO (Method Resolution Order) — left to right</code></pre>

<h3>Cooperative Multiple Inheritance</h3>
<pre><code>class Base:
    def __init__(self, **kwargs):
        pass

class Name(Base):
    def __init__(self, name="", **kwargs):
        super().__init__(**kwargs)
        self.name = name

class Age(Base):
    def __init__(self, age=0, **kwargs):
        super().__init__(**kwargs)
        self.age = age

class Person(Name, Age):
    pass

p = Person(name="Alice", age=30)
print(p.name, p.age)  # Alice 30</code></pre>`,
          challenge: {
            description: 'Create class Printable with method print_info() returning "Info: " + str(self.__dict__). Create class Saveable with method save() returning "Saved: " + self.name. Create class Document(Printable, Saveable) with __init__(name, content). Create Document("report", "data"), print print_info() and save().',
            starterCode: `class Printable:\n    def print_info(self):\n        return "Info: " + str(self.__dict__)\n\nclass Saveable:\n    def save(self):\n        return "Saved: " + self.name\n\nclass Document(Printable, Saveable):\n    def __init__(self, name, content):\n        self.name = name\n        self.content = content\n\ndoc = Document("report", "data")\nprint(doc.print_info())\nprint(doc.save())`,
            expectedOutput: `Info: {'name': 'report', 'content': 'data'}\nSaved: report`,
            hints: [
              'Document inherits from both Printable and Saveable',
              'print_info uses self.__dict__ which shows all instance attributes',
              'save uses self.name which is set in Document.__init__',
              'Multiple inheritance syntax: class Child(Parent1, Parent2):'
            ]
          },
          quiz: [
            {
              question: 'How do you inherit from multiple classes?',
              options: ['class Child(Parent1 + Parent2):', 'class Child(Parent1, Parent2):', 'class Child extends Parent1, Parent2:', 'class Child[Parent1, Parent2]:'],
              correct: 1
            },
            {
              question: 'What is a mixin?',
              options: ['A broken class', 'A small class that adds specific functionality to be combined with other classes', 'A type of decorator', 'A Python keyword'],
              correct: 1
            },
            {
              question: 'What is the Diamond Problem?',
              options: ['A syntax error', 'Ambiguity when a class inherits from two classes that share a common ancestor', 'A type of loop', 'A memory leak'],
              correct: 1
            },
            {
              question: 'How does Python resolve the Diamond Problem?',
              options: ['It raises an error', 'Using MRO (Method Resolution Order) — C3 linearization', 'It picks randomly', 'It uses both versions'],
              correct: 1
            },
            {
              question: 'In class D(B, C), if both B and C have method foo(), which is called?',
              options: ['C.foo() (rightmost)', 'B.foo() (leftmost in the list)', 'Both', 'Error'],
              correct: 1
            },
            {
              question: 'What is the main risk of multiple inheritance?',
              options: ['Slower performance', 'Complexity and ambiguity in method resolution', 'It uses more memory', 'It only works in Python 3'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_mro',
          title: 'Method Resolution Order',
          type: 'challenge',
          theory: `<h2>Method Resolution Order (MRO)</h2>
<p>When a class has multiple parents, Python needs a rule to decide which method to call. The <strong>MRO</strong> defines the order Python searches through classes — it uses the C3 linearization algorithm.</p>

<h3>Viewing the MRO</h3>
<pre><code>class A:
    def who(self):
        return "A"

class B(A):
    def who(self):
        return "B"

class C(A):
    def who(self):
        return "C"

class D(B, C):
    pass

# View MRO
print(D.__mro__)
# (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)

# Or as a list
print(D.mro())

d = D()
print(d.who())  # "B" — first match in MRO after D</code></pre>

<h3>MRO Rules</h3>
<ol>
<li>Child comes before parents</li>
<li>Parents maintain their order from left to right</li>
<li>A class appears only once in the MRO</li>
<li>Every class eventually leads to <code>object</code> (the ultimate base)</li>
</ol>

<h3>Cooperative Methods with super()</h3>
<pre><code>class A:
    def greet(self):
        return "A"

class B(A):
    def greet(self):
        return "B -> " + super().greet()

class C(A):
    def greet(self):
        return "C -> " + super().greet()

class D(B, C):
    def greet(self):
        return "D -> " + super().greet()

d = D()
print(d.greet())  # D -> B -> C -> A
# super() follows MRO: D -> B -> C -> A</code></pre>

<h3>Why MRO Matters</h3>
<pre><code>class Serializer:
    def serialize(self):
        return "base"

class JSONSerializer(Serializer):
    def serialize(self):
        return "json:" + super().serialize()

class XMLSerializer(Serializer):
    def serialize(self):
        return "xml:" + super().serialize()

class HybridSerializer(JSONSerializer, XMLSerializer):
    def serialize(self):
        return "hybrid:" + super().serialize()

h = HybridSerializer()
print(h.serialize())  # hybrid:json:xml:base
print(HybridSerializer.__mro__)
# HybridSerializer -> JSONSerializer -> XMLSerializer -> Serializer -> object</code></pre>

<p><strong>Key insight:</strong> <code>super()</code> doesn't always call the parent — it calls the next class in the MRO. This enables cooperative multiple inheritance.</p>`,
          challenge: {
            description: 'Create classes A, B(A), C(A), D(B, C) each with a method order() that returns their letter. D.order() should use super() and return "D" + super().order(). B.order() returns "B" + super().order(). C.order() returns "C" + super().order(). A.order() returns "A". Print D().order() and the MRO class names.',
            starterCode: `class A:\n    def order(self):\n        return "A"\n\nclass B(A):\n    def order(self):\n        return "B" + super().order()\n\nclass C(A):\n    def order(self):\n        return "C" + super().order()\n\nclass D(B, C):\n    def order(self):\n        return "D" + super().order()\n\nprint(D().order())\nprint([cls.__name__ for cls in D.__mro__])`,
            expectedOutput: `DBCA\n['D', 'B', 'C', 'A', 'object']`,
            hints: [
              'MRO for D(B, C): D -> B -> C -> A -> object',
              'super() in D calls B.order(), super() in B calls C.order(), super() in C calls A.order()',
              'Result: "D" + "B" + "C" + "A" = "DBCA"',
              '__mro__ is a tuple of classes in resolution order'
            ]
          },
          quiz: [
            {
              question: 'What does MRO stand for?',
              options: ['Multiple Return Object', 'Method Resolution Order', 'Module Resource Optimizer', 'Method Reference Origin'],
              correct: 1
            },
            {
              question: 'How do you view a class MRO?',
              options: ['class.mro or class.__mro__', 'class.order()', 'type(class)', 'inspect(class)'],
              correct: 0
            },
            {
              question: 'What algorithm does Python use for MRO?',
              options: ['Breadth-first search', 'C3 linearization', 'Depth-first search', 'Random selection'],
              correct: 1
            },
            {
              question: 'In MRO, does a child come before or after its parents?',
              options: ['After', 'Before', 'Same level', 'Depends on the order'],
              correct: 1
            },
            {
              question: 'What does super() actually call in multiple inheritance?',
              options: ['Always the direct parent', 'The next class in the MRO', 'All parents', 'The topmost class'],
              correct: 1
            },
            {
              question: 'What is always the last class in any MRO?',
              options: ['The child class', 'The first parent', 'object (the base of all classes)', 'None'],
              correct: 2
            }
          ]
        },
        {
          id: 'oop_recap_employee',
          title: 'Recap - Employee Hierarchy',
          type: 'mastery',
          theory: `<h2>Recap: Employee Hierarchy</h2>
<p>Let's build a realistic employee hierarchy using inheritance, super(), and method overriding.</p>

<h3>Design</h3>
<pre><code>class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
    
    def get_pay(self):
        return self.salary
    
    def description(self):
        return f"{self.name} - ${self.get_pay()}/year"

class Manager(Employee):
    def __init__(self, name, salary, bonus):
        super().__init__(name, salary)
        self.bonus = bonus
    
    def get_pay(self):
        return self.salary + self.bonus
    
    def description(self):
        return f"Manager: {super().description()}"

class Developer(Employee):
    def __init__(self, name, salary, language):
        super().__init__(name, salary)
        self.language = language
    
    def description(self):
        return f"Developer ({self.language}): {self.name} - ${self.get_pay()}/year"

class Intern(Employee):
    def __init__(self, name):
        super().__init__(name, 0)  # Interns start at 0
    
    def get_pay(self):
        return 0
    
    def description(self):
        return f"Intern: {self.name} (unpaid)"

# Usage
team = [
    Manager("Alice", 90000, 15000),
    Developer("Bob", 85000, "Python"),
    Developer("Carol", 80000, "JavaScript"),
    Intern("Dave")
]

for emp in team:
    print(emp.description())
# Manager: Alice - $105000/year  
# Developer (Python): Bob - $85000/year
# Developer (JavaScript): Carol - $80000/year
# Intern: Dave (unpaid)</code></pre>

<h3>Key Patterns</h3>
<ol>
<li><strong>Base class</strong> provides common interface (get_pay, description)</li>
<li><strong>Method overriding</strong> customizes behavior per type</li>
<li><strong>super()</strong> reuses parent initialization</li>
<li><strong>Polymorphism</strong>: loop works on any Employee subclass</li>
</ol>`,
          challenge: {
            description: 'Create Employee(name, salary) with method get_annual_pay() returning salary. Create Manager(name, salary, bonus) overriding get_annual_pay() to return salary + bonus. Create Director(name, salary, bonus, stock) extending Manager, overriding get_annual_pay() to add stock. Create a Director("Alice", 120000, 20000, 50000) and print get_annual_pay().',
            starterCode: `class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n    \n    def get_annual_pay(self):\n        return self.salary\n\nclass Manager(Employee):\n    def __init__(self, name, salary, bonus):\n        super().__init__(name, salary)\n        self.bonus = bonus\n    \n    def get_annual_pay(self):\n        return self.salary + self.bonus\n\nclass Director(Manager):\n    def __init__(self, name, salary, bonus, stock):\n        super().__init__(name, salary, bonus)\n        self.stock = stock\n    \n    def get_annual_pay(self):\n        return super().get_annual_pay() + self.stock\n\nd = Director("Alice", 120000, 20000, 50000)\nprint(d.get_annual_pay())`,
            expectedOutput: '190000',
            hints: [
              'Director inherits from Manager which inherits from Employee',
              'Director.get_annual_pay calls super().get_annual_pay() which is Manager version',
              'Manager.get_annual_pay returns salary + bonus = 140000',
              'Director adds stock: 140000 + 50000 = 190000'
            ]
          },
          mastery: {
            description: 'Add a class method Employee.from_data(cls, data_dict) that creates the right type based on a "role" key in the dict. Data format: {"name": "...", "salary": ..., "role": "employee/manager/director", ...}. Create instances from [{"name": "Bob", "salary": 70000, "role": "employee"}, {"name": "Carol", "salary": 90000, "bonus": 10000, "role": "manager"}] and print each get_annual_pay().',
            starterCode: `# Extend the hierarchy with a factory class method`,
            expectedOutput: `70000\n100000`,
            hints: [
              'Use if/elif on data["role"] to create the right class',
              'Employee.from_data should return Manager(...) if role is "manager"',
              'This is the Factory pattern using a classmethod'
            ]
          },
          quiz: [
            {
              question: 'What is the benefit of using inheritance for an employee hierarchy?',
              options: ['Faster code', 'Code reuse — common logic in parent, specialization in children', 'Less memory', 'Required by Python'],
              correct: 1
            },
            {
              question: 'In Director(Manager(Employee)), which __init__ runs first when creating a Director?',
              options: ['Employee (top-down)', 'Director (bottom-up, calling super() up the chain)', 'All simultaneously', 'Only Director'],
              correct: 1
            },
            {
              question: 'Why override get_pay() in each subclass?',
              options: ['To break the parent', 'Each employee type calculates pay differently', 'To make it private', 'It is required'],
              correct: 1
            },
            {
              question: 'What pattern allows a loop to work on any Employee subclass?',
              options: ['Encapsulation', 'Polymorphism — same interface, different behavior', 'Composition', 'Delegation'],
              correct: 1
            },
            {
              question: 'What does super().get_annual_pay() do in Director?',
              options: ['Calls Employee.get_annual_pay', 'Calls Manager.get_annual_pay (next in MRO)', 'Calls its own method', 'Returns 0'],
              correct: 1
            },
            {
              question: 'What advantage does 3-level inheritance provide here?',
              options: ['Director automatically gets Employee AND Manager features through the chain', 'It runs faster', 'It uses less code than composition', 'Python requires it for multiple bonuses'],
              correct: 0
            }
          ]
        }
      ]
    },
    {
      id: 'oop_polymorphism',
      title: 'Polymorphism',
      lessons: [
        {
          id: 'oop_method_overriding_revisited',
          title: 'Method Overriding Revisited',
          type: 'challenge',
          theory: `<h2>Method Overriding Revisited — Polymorphism in Action</h2>
<p><strong>Polymorphism</strong> means "many forms" — the same method name behaves differently depending on the object. This is powered by method overriding and is one of OOP's most powerful features.</p>

<h3>Polymorphism Through a Common Interface</h3>
<pre><code>class Shape:
    def area(self):
        raise NotImplementedError("Subclasses must implement area()")
    
    def describe(self):
        return f"{self.__class__.__name__}: area = {self.area()}"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return round(3.14159 * self.radius ** 2, 2)

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height
    
    def area(self):
        return 0.5 * self.base * self.height

# Polymorphism: same method, different behavior
shapes = [Circle(5), Rectangle(4, 6), Triangle(3, 8)]
for shape in shapes:
    print(shape.describe())
# Circle: area = 78.54
# Rectangle: area = 24
# Triangle: area = 12.0</code></pre>

<h3>Why This Is Powerful</h3>
<p>The loop doesn't need to know WHICH shape it's dealing with. It just calls <code>area()</code> and each shape knows how to calculate its own area. You can add new shapes without changing the loop!</p>

<h3>Function That Works on Any Shape</h3>
<pre><code>def total_area(shapes):
    return sum(s.area() for s in shapes)

def largest_shape(shapes):
    return max(shapes, key=lambda s: s.area())

shapes = [Circle(3), Rectangle(10, 2), Triangle(6, 4)]
print(f"Total: {total_area(shapes)}")       # Total: 40.27
print(f"Largest: {largest_shape(shapes).describe()}")  # Rectangle</code></pre>`,
          challenge: {
            description: 'Create a base class Payment with method process() raising NotImplementedError. Create CreditCard(Payment) with __init__(amount) and process() returning "Credit card: ${amount}". Create PayPal(Payment) with __init__(amount) and process() returning "PayPal: ${amount}". Create a list of both, loop and print each process().',
            starterCode: `class Payment:\n    def process(self):\n        raise NotImplementedError\n\nclass CreditCard(Payment):\n    def __init__(self, amount):\n        self.amount = amount\n    \n    def process(self):\n        pass\n\nclass PayPal(Payment):\n    def __init__(self, amount):\n        self.amount = amount\n    \n    def process(self):\n        pass\n\npayments = [CreditCard(50), PayPal(30)]\nfor p in payments:\n    print(p.process())`,
            expectedOutput: `Credit card: $50\nPayPal: $30`,
            hints: [
              'CreditCard.process: return f"Credit card: ${self.amount}"',
              'PayPal.process: return f"PayPal: ${self.amount}"',
              'Each payment type implements the same interface differently',
              'The loop treats them all as Payment objects'
            ]
          },
          quiz: [
            {
              question: 'What is polymorphism?',
              options: ['Having multiple classes', 'Same method name behaving differently based on the object type', 'Inheriting from multiple classes', 'Using decorators'],
              correct: 1
            },
            {
              question: 'What does NotImplementedError signal?',
              options: ['A bug in Python', 'That subclasses MUST override this method', 'That the method is complete', 'That Python is outdated'],
              correct: 1
            },
            {
              question: 'Why is polymorphism useful in loops?',
              options: ['Loops run faster', 'You can process different types uniformly without knowing their specific class', 'It prevents errors', 'It uses less memory'],
              correct: 1
            },
            {
              question: 'What does self.__class__.__name__ return?',
              options: ['The parent class name', 'The name of the current object class as a string', 'The module name', 'The method name'],
              correct: 1
            },
            {
              question: 'Can you add new subclasses without changing existing code that uses polymorphism?',
              options: ['No, you must update all loops', 'Yes, that is the Open/Closed principle benefit', 'Only with special syntax', 'Only if the base class allows it'],
              correct: 1
            },
            {
              question: 'What makes polymorphism work in Python?',
              options: ['Type checking', 'Method overriding — child classes provide their own implementation', 'Global functions', 'Static typing'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_duck_typing',
          title: 'Duck Typing',
          type: 'challenge',
          theory: `<h2>Duck Typing</h2>
<p>"If it walks like a duck and quacks like a duck, then it's a duck." In Python, you don't check what an object IS — you check what it can DO. This is <strong>duck typing</strong>.</p>

<h3>Duck Typing in Action</h3>
<pre><code>class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

class Robot:
    def speak(self):
        return "Beep boop!"

# This function works with ANY object that has a speak() method
def make_speak(thing):
    return thing.speak()

# No inheritance needed! They just need the same method name
print(make_speak(Dog()))    # Woof!
print(make_speak(Cat()))    # Meow!
print(make_speak(Robot()))  # Beep boop!</code></pre>

<h3>No Common Base Class Needed</h3>
<p>Unlike Java or C++, Python doesn't require objects to share a parent class. If they have the method, they work:</p>
<pre><code>class File:
    def read(self):
        return "File data"

class Network:
    def read(self):
        return "Network data"

class Sensor:
    def read(self):
        return "Sensor: 23.5C"

def collect_data(sources):
    return [s.read() for s in sources]

sources = [File(), Network(), Sensor()]
print(collect_data(sources))
# ['File data', 'Network data', 'Sensor: 23.5C']</code></pre>

<h3>Built-in Duck Typing</h3>
<pre><code># len() works on anything with __len__
class Playlist:
    def __init__(self, songs):
        self.songs = songs
    
    def __len__(self):
        return len(self.songs)

p = Playlist(["Song1", "Song2", "Song3"])
print(len(p))  # 3 — len() uses duck typing!

# for loops work on anything with __iter__
class Countdown:
    def __init__(self, start):
        self.start = start
    
    def __iter__(self):
        current = self.start
        while current > 0:
            yield current
            current -= 1

for num in Countdown(3):
    print(num)  # 3, 2, 1</code></pre>

<h3>EAFP: Easier to Ask Forgiveness than Permission</h3>
<pre><code># Python style — try it and handle failure
def get_length(obj):
    try:
        return len(obj)
    except TypeError:
        return "No length"

print(get_length([1, 2, 3]))  # 3
print(get_length(42))          # No length</code></pre>`,
          challenge: {
            description: 'Create three unrelated classes: Bird with method fly() returning "Bird flies", Airplane with fly() returning "Airplane flies", Superman with fly() returning "Superman flies". Create a function let_it_fly(thing) that calls thing.fly(). Call it with each and print results.',
            starterCode: `class Bird:\n    def fly(self):\n        return "Bird flies"\n\nclass Airplane:\n    def fly(self):\n        return "Airplane flies"\n\nclass Superman:\n    def fly(self):\n        return "Superman flies"\n\ndef let_it_fly(thing):\n    return thing.fly()\n\nprint(let_it_fly(Bird()))\nprint(let_it_fly(Airplane()))\nprint(let_it_fly(Superman()))`,
            expectedOutput: `Bird flies\nAirplane flies\nSuperman flies`,
            hints: [
              'No inheritance needed — just the same method name',
              'let_it_fly just calls thing.fly() — it does not check the type',
              'This is duck typing: if it has fly(), it can fly',
              'Each class is completely independent'
            ]
          },
          quiz: [
            {
              question: 'What is duck typing?',
              options: ['A type of inheritance', 'If an object has the right methods, it can be used — regardless of its class', 'A Python module', 'Checking type before calling methods'],
              correct: 1
            },
            {
              question: 'Does duck typing require inheritance?',
              options: ['Yes, always', 'No, objects just need the same method names', 'Only single inheritance', 'Only with ABCs'],
              correct: 1
            },
            {
              question: 'What is EAFP in Python?',
              options: ['A module name', 'Easier to Ask Forgiveness than Permission — try/except over type checking', 'A design pattern', 'Error And Failure Protocol'],
              correct: 1
            },
            {
              question: 'Which built-in function uses duck typing?',
              options: ['type()', 'len() — works on anything with __len__', 'id()', 'dir()'],
              correct: 1
            },
            {
              question: 'What happens if you call obj.fly() and obj has no fly method?',
              options: ['Returns None', 'AttributeError is raised', 'A warning is shown', 'Nothing happens'],
              correct: 1
            },
            {
              question: 'How is duck typing different from polymorphism through inheritance?',
              options: ['They are identical', 'Duck typing does not require a common base class', 'Duck typing is slower', 'Duck typing only works with built-in types'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_operator_overloading',
          title: 'Operator Overloading',
          type: 'challenge',
          theory: `<h2>Operator Overloading</h2>
<p>Python lets you define how operators (+, -, *, ==, <, etc.) work with your custom objects by implementing special <strong>dunder methods</strong> (double underscore methods).</p>

<h3>The + Operator: __add__</h3>
<pre><code>class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
v3 = v1 + v2  # Calls v1.__add__(v2)
print(v3)  # Vector(4, 6)</code></pre>

<h3>Comparison Operators</h3>
<pre><code>class Money:
    def __init__(self, amount, currency="USD"):
        self.amount = amount
        self.currency = currency
    
    def __eq__(self, other):
        return self.amount == other.amount and self.currency == other.currency
    
    def __lt__(self, other):
        return self.amount < other.amount
    
    def __gt__(self, other):
        return self.amount > other.amount
    
    def __repr__(self):
        return f"${self.amount}"

m1 = Money(100)
m2 = Money(200)
m3 = Money(100)

print(m1 == m3)  # True
print(m1 < m2)   # True
print(m2 > m1)   # True</code></pre>

<h3>Other Operators</h3>
<pre><code>class Matrix:
    def __init__(self, data):
        self.data = data
    
    def __mul__(self, scalar):
        return Matrix([[cell * scalar for cell in row] for row in self.data])
    
    def __len__(self):
        return len(self.data)
    
    def __getitem__(self, index):
        return self.data[index]
    
    def __repr__(self):
        return str(self.data)

m = Matrix([[1, 2], [3, 4]])
m2 = m * 3
print(m2)      # [[3, 6], [9, 12]]
print(len(m))  # 2
print(m[0])    # [1, 2]</code></pre>

<h3>Common Operator Methods</h3>
<table><tr><td>+</td><td>__add__</td></tr><tr><td>-</td><td>__sub__</td></tr><tr><td>*</td><td>__mul__</td></tr><tr><td>==</td><td>__eq__</td></tr><tr><td>&lt;</td><td>__lt__</td></tr><tr><td>&gt;</td><td>__gt__</td></tr><tr><td>len()</td><td>__len__</td></tr><tr><td>[]</td><td>__getitem__</td></tr></table>`,
          challenge: {
            description: 'Create a class Fraction with __init__(numerator, denominator). Implement __add__ that returns a new Fraction with proper addition (a/b + c/d = (ad+bc)/bd). Implement __str__ returning "numerator/denominator". Add Fraction(1, 3) + Fraction(1, 6) and print the result.',
            starterCode: `class Fraction:\n    def __init__(self, num, den):\n        self.num = num\n        self.den = den\n    \n    def __add__(self, other):\n        new_num = self.num * other.den + other.num * self.den\n        new_den = self.den * other.den\n        return Fraction(new_num, new_den)\n    \n    def __str__(self):\n        return f"{self.num}/{self.den}"\n\nresult = Fraction(1, 3) + Fraction(1, 6)\nprint(result)`,
            expectedOutput: '9/18',
            hints: [
              '1/3 + 1/6 = (1*6 + 1*3) / (3*6) = 9/18',
              '__add__ returns a new Fraction, not modifying the originals',
              '__str__ is called by print()',
              'For simplification you could use math.gcd but it is not required here'
            ]
          },
          quiz: [
            {
              question: 'What method is called when you use + on an object?',
              options: ['__plus__', '__add__', '__sum__', '__concat__'],
              correct: 1
            },
            {
              question: 'What method is called for == comparison?',
              options: ['__compare__', '__equals__', '__eq__', '__is__'],
              correct: 2
            },
            {
              question: 'What should __add__ typically return?',
              options: ['None', 'A new instance of the same class', 'A boolean', 'A string'],
              correct: 1
            },
            {
              question: 'What is operator overloading?',
              options: ['Using too many operators', 'Defining how operators work with custom objects', 'Overriding built-in operators globally', 'A Python error'],
              correct: 1
            },
            {
              question: 'What method makes len(obj) work?',
              options: ['__size__', '__count__', '__len__', '__length__'],
              correct: 2
            },
            {
              question: 'What method enables obj[index] access?',
              options: ['__get__', '__index__', '__getitem__', '__item__'],
              correct: 2
            }
          ]
        },
        {
          id: 'oop_abstract_classes',
          title: 'Abstract Classes',
          type: 'challenge',
          theory: `<h2>Abstract Classes</h2>
<p>An <strong>abstract class</strong> is a class that cannot be instantiated directly — it serves as a blueprint for other classes. It defines methods that subclasses MUST implement.</p>

<h3>Using the abc Module</h3>
<pre><code>from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass
    
    def description(self):
        return f"{self.__class__.__name__}: area={self.area()}"

# shape = Shape()  # TypeError! Cannot instantiate abstract class

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return round(3.14159 * self.radius ** 2, 2)
    
    def perimeter(self):
        return round(2 * 3.14159 * self.radius, 2)

c = Circle(5)
print(c.area())         # 78.54
print(c.perimeter())    # 31.42
print(c.description())  # Circle: area=78.54</code></pre>

<h3>What Happens If You Don't Implement All Abstract Methods?</h3>
<pre><code>class IncompleteShape(Shape):
    def area(self):
        return 0
    # Missing perimeter()!

# s = IncompleteShape()
# TypeError: Can't instantiate abstract class IncompleteShape
# with abstract method perimeter</code></pre>

<h3>Abstract Properties</h3>
<pre><code>from abc import ABC, abstractmethod

class Database(ABC):
    @property
    @abstractmethod
    def connection_string(self):
        pass
    
    @abstractmethod
    def connect(self):
        pass
    
    @abstractmethod
    def query(self, sql):
        pass

class PostgreSQL(Database):
    @property
    def connection_string(self):
        return "postgresql://localhost:5432/db"
    
    def connect(self):
        return f"Connected to {self.connection_string}"
    
    def query(self, sql):
        return f"Executing: {sql}"

db = PostgreSQL()
print(db.connect())  # Connected to postgresql://localhost:5432/db</code></pre>

<h3>When to Use Abstract Classes</h3>
<ul>
<li>When you want to enforce a contract — all subclasses MUST implement certain methods</li>
<li>When you have a common interface but different implementations</li>
<li>Frameworks and plugin systems</li>
</ul>`,
          challenge: {
            description: 'Create an abstract class Animal(ABC) with abstract method speak() and a concrete method info() returning "I am a " + self.__class__.__name__. Create Dog(Animal) with speak() returning "Woof" and Cat(Animal) with speak() returning "Meow". Create both, print speak() and info() for each.',
            starterCode: `from abc import ABC, abstractmethod\n\nclass Animal(ABC):\n    @abstractmethod\n    def speak(self):\n        pass\n    \n    def info(self):\n        return "I am a " + self.__class__.__name__\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof"\n\nclass Cat(Animal):\n    def speak(self):\n        return "Meow"\n\ndog = Dog()\ncat = Cat()\nprint(dog.speak())\nprint(dog.info())\nprint(cat.speak())\nprint(cat.info())`,
            expectedOutput: `Woof\nI am a Dog\nMeow\nI am a Cat`,
            hints: [
              'ABC is imported from abc module',
              '@abstractmethod forces subclasses to implement the method',
              'info() is concrete — inherited by all subclasses',
              'self.__class__.__name__ returns the actual class name'
            ]
          },
          quiz: [
            {
              question: 'What happens if you try to instantiate an abstract class?',
              options: ['Nothing', 'TypeError is raised', 'A warning is shown', 'An empty object is created'],
              correct: 1
            },
            {
              question: 'What module provides abstract class support?',
              options: ['abstract', 'abc (Abstract Base Classes)', 'interface', 'virtual'],
              correct: 1
            },
            {
              question: 'What does @abstractmethod do?',
              options: ['Makes the method private', 'Forces subclasses to implement the method', 'Makes the method static', 'Deletes the method'],
              correct: 1
            },
            {
              question: 'Can abstract classes have non-abstract (concrete) methods?',
              options: ['No, all methods must be abstract', 'Yes, they can mix abstract and concrete methods', 'Only static methods', 'Only class methods'],
              correct: 1
            },
            {
              question: 'What happens if a subclass does not implement all abstract methods?',
              options: ['It works with None return', 'TypeError when you try to instantiate it', 'A warning is shown', 'It uses the parent implementation'],
              correct: 1
            },
            {
              question: 'When should you use an abstract class vs a regular base class?',
              options: ['Always use abstract', 'When you want to FORCE subclasses to implement certain methods', 'Never use abstract', 'Only for large projects'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_recap_shape_calc',
          title: 'Recap - Shape Calculator',
          type: 'mastery',
          theory: `<h2>Recap: Shape Calculator</h2>
<p>Let's combine polymorphism, duck typing, operator overloading, and abstract classes to build a shape calculator system.</p>

<h3>Complete System</h3>
<pre><code>from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass
    
    def __gt__(self, other):
        return self.area() > other.area()
    
    def __eq__(self, other):
        return self.area() == other.area()
    
    def __str__(self):
        return f"{self.__class__.__name__}(area={self.area():.2f})"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w = w
        self.h = h
    
    def area(self):
        return self.w * self.h
    
    def perimeter(self):
        return 2 * (self.w + self.h)

# Polymorphic usage
shapes = [Circle(5), Rectangle(6, 4), Circle(3)]
total = sum(s.area() for s in shapes)
largest = max(shapes, key=lambda s: s.area())
print(f"Total area: {total:.2f}")   # Total area: 130.82
print(f"Largest: {largest}")         # Largest: Circle(area=78.54)</code></pre>`,
          challenge: {
            description: 'Create abstract class Shape with abstract area(). Create Circle(radius) and Square(side) implementing area(). Add __lt__ to Shape comparing areas. Create shapes = [Square(4), Circle(3), Square(2)]. Sort them by area and print each area rounded to 2 decimal places.',
            starterCode: `from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n    \n    def __lt__(self, other):\n        return self.area() < other.area()\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        return 3.14159 * self.radius ** 2\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n    \n    def area(self):\n        return self.side ** 2\n\nshapes = [Square(4), Circle(3), Square(2)]\nshapes.sort()\nfor s in shapes:\n    print(round(s.area(), 2))`,
            expectedOutput: `4\n16\n28.27`,
            hints: [
              'Square(2).area() = 4, Square(4).area() = 16, Circle(3).area() = 28.27',
              '__lt__ enables sort() to compare shapes by area',
              'sorted order: 4, 16, 28.27 (smallest to largest)',
              'round(3.14159 * 9, 2) = 28.27'
            ]
          },
          mastery: {
            description: 'Add a ShapeCollection class that stores shapes in a list. Add methods: add(shape), total_area(), largest(), and __len__. Also implement __add__ so two collections can be combined. Create two collections with different shapes, combine them with +, and print len and total_area of the combined.',
            starterCode: `# Build on the Shape hierarchy above`,
            expectedOutput: `4\n76.27`,
            hints: [
              'ShapeCollection stores a list of shapes',
              '__add__ creates a new collection with combined lists',
              '__len__ returns len(self.shapes)',
              'total_area: sum(s.area() for s in self.shapes)'
            ]
          },
          quiz: [
            {
              question: 'How does sort() work on custom objects?',
              options: ['It cannot sort custom objects', 'It uses __lt__ to compare objects', 'It sorts by memory address', 'It converts to strings first'],
              correct: 1
            },
            {
              question: 'What allows sum(s.area() for s in shapes) to work?',
              options: ['Magic', 'Polymorphism — each shape has area() with different implementation', 'Type casting', 'A special sum function'],
              correct: 1
            },
            {
              question: 'Why use an abstract base class for Shape?',
              options: ['Performance', 'To ensure every shape MUST implement area() and perimeter()', 'To save memory', 'Python requires it'],
              correct: 1
            },
            {
              question: 'What does max(shapes, key=lambda s: s.area()) do?',
              options: ['Finds the maximum area value', 'Finds the shape object with the largest area', 'Sorts all shapes', 'Returns all maximum shapes'],
              correct: 1
            },
            {
              question: 'Can you add new shape types without modifying existing code?',
              options: ['No', 'Yes — just implement area() and perimeter() in the new class', 'Only with a factory', 'Only by editing Shape'],
              correct: 1
            },
            {
              question: 'What OOP concepts does this shape system use?',
              options: ['Only inheritance', 'Abstraction, polymorphism, operator overloading, and inheritance', 'Only encapsulation', 'Only decorators'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: 'oop_encapsulation',
      title: 'Encapsulation',
      lessons: [
        {
          id: 'oop_public_vs_private',
          title: 'Public vs Private',
          type: 'challenge',
          theory: `<h2>Public vs Private Access</h2>
<p><strong>Encapsulation</strong> means hiding internal details and exposing only what's necessary. Think of a TV remote — you press buttons (public interface) without knowing the circuit board inside (private implementation).</p>

<h3>Access Levels in Python</h3>
<pre><code>class SmartPhone:
    def __init__(self, brand):
        self.brand = brand           # Public — anyone can access
        self._battery = 100          # Protected — internal use
        self.__serial = "XYZ123"     # Private — name mangled
    
    def get_info(self):
        return f"{self.brand} (Battery: {self._battery}%)"
    
    def _charge(self, amount):
        # Protected method — internal helper
        self._battery = min(100, self._battery + amount)
    
    def __encrypt(self, data):
        # Private method — truly internal
        return data[::-1]

phone = SmartPhone("iPhone")
print(phone.brand)       # iPhone — public works
print(phone._battery)    # 100 — protected works (but shouldn't use externally)
# print(phone.__serial)  # AttributeError — private is hidden
print(phone.get_info())  # iPhone (Battery: 100%)</code></pre>

<h3>Why Hide Data?</h3>
<pre><code>class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Hidden!
    
    def withdraw(self, amount):
        if amount <= 0:
            return "Invalid amount"
        if amount > self.__balance:
            return "Insufficient funds"
        self.__balance -= amount
        return f"Withdrew {amount}. New balance: {self.__balance}"
    
    @property
    def balance(self):
        return self.__balance

# User CANNOT do: account.__balance = 1000000 (bypassing validation)
# They MUST use withdraw() which has safeguards
acc = BankAccount(500)
print(acc.withdraw(200))  # Withdrew 200. New balance: 300
print(acc.balance)        # 300</code></pre>

<h3>Encapsulation Benefits</h3>
<ul>
<li><strong>Data integrity:</strong> Cannot set invalid values</li>
<li><strong>Flexibility:</strong> Change internal implementation without breaking external code</li>
<li><strong>Security:</strong> Sensitive data is protected</li>
<li><strong>Simplicity:</strong> Users only see what they need</li>
</ul>

<h3>Design Principle</h3>
<p>Expose the minimum necessary interface. Everything else should be internal.</p>
<pre><code>class EmailSender:
    def __init__(self, smtp_server):
        self.__server = smtp_server
        self.__connected = False
    
    def send(self, to, subject, body):
        # Simple public interface
        self.__connect()
        result = self.__transmit(to, subject, body)
        self.__disconnect()
        return result
    
    def __connect(self):
        self.__connected = True
    
    def __transmit(self, to, subject, body):
        return f"Sent '{subject}' to {to}"
    
    def __disconnect(self):
        self.__connected = False

email = EmailSender("smtp.example.com")
print(email.send("bob@test.com", "Hello", "Hi Bob!"))
# Sent 'Hello' to bob@test.com</code></pre>`,
          challenge: {
            description: 'Create a class PasswordManager with a private __passwords dict (empty). Add method add_password(site, password) that stores it. Add method get_password(site) that returns the password or "Not found". Add a private method __encrypt(password) that returns password reversed (simple mock encryption) — use it in add_password. Add "gmail" with "secret123" and print get_password("gmail").',
            starterCode: `class PasswordManager:\n    def __init__(self):\n        self.__passwords = {}\n    \n    def __encrypt(self, password):\n        return password[::-1]\n    \n    def add_password(self, site, password):\n        self.__passwords[site] = self.__encrypt(password)\n    \n    def get_password(self, site):\n        return self.__passwords.get(site, "Not found")\n\npm = PasswordManager()\npm.add_password("gmail", "secret123")\nprint(pm.get_password("gmail"))`,
            expectedOutput: '321terces',
            hints: [
              '__encrypt reverses the string: "secret123"[::-1] = "321terces"',
              'add_password stores the encrypted version',
              'get_password retrieves whatever is stored (encrypted)',
              '__passwords is private — cannot access from outside'
            ]
          },
          quiz: [
            {
              question: 'What is encapsulation?',
              options: ['Making everything public', 'Hiding internal details and providing a controlled public interface', 'Deleting private data', 'Using only global variables'],
              correct: 1
            },
            {
              question: 'What does a public attribute mean?',
              options: ['It is shared on the internet', 'It can be accessed from anywhere without restriction', 'It is stored in a database', 'It is immutable'],
              correct: 1
            },
            {
              question: 'Why hide the __balance attribute in a bank account?',
              options: ['To make code complex', 'To force users through validated methods, preventing invalid values', 'Because Python requires it', 'To save memory'],
              correct: 1
            },
            {
              question: 'What is the difference between _var and __var?',
              options: ['No difference', '_var is a convention hint; __var triggers name mangling for stronger hiding', '_var is private; __var is public', '__var is slower'],
              correct: 1
            },
            {
              question: 'What does "expose minimum interface" mean?',
              options: ['Delete all methods', 'Make only necessary methods public; keep implementation details hidden', 'Use fewer classes', 'Write less code'],
              correct: 1
            },
            {
              question: 'Can encapsulation prevent ALL unauthorized access in Python?',
              options: ['Yes, completely', 'No — name mangling can be bypassed, it signals intent', 'Only with encryption', 'Only in compiled Python'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_name_mangling',
          title: 'Name Mangling',
          type: 'challenge',
          theory: `<h2>Name Mangling Deep Dive</h2>
<p>Name mangling is Python's mechanism for double-underscore attributes. It renames <code>__attr</code> to <code>_ClassName__attr</code> to avoid name collisions in inheritance.</p>

<h3>How Mangling Works</h3>
<pre><code>class Secret:
    def __init__(self):
        self.__data = "hidden"
        self._semi_hidden = "visible"
    
    def reveal(self):
        return self.__data

s = Secret()
# print(s.__data)          # AttributeError!
print(s._Secret__data)     # hidden (mangled name)
print(s.reveal())          # hidden (internal access works)
print(s._semi_hidden)      # visible (single underscore is accessible)</code></pre>

<h3>Why Name Mangling Exists — Inheritance Safety</h3>
<pre><code>class Parent:
    def __init__(self):
        self.__value = "parent secret"
    
    def get_value(self):
        return self.__value

class Child(Parent):
    def __init__(self):
        super().__init__()
        self.__value = "child secret"  # Does NOT override parent's!
    
    def get_child_value(self):
        return self.__value

c = Child()
print(c.get_value())       # parent secret (_Parent__value)
print(c.get_child_value()) # child secret (_Child__value)
# Name mangling prevents accidental override!</code></pre>

<h3>Inspecting Mangled Names</h3>
<pre><code>class Demo:
    def __init__(self):
        self.public = "pub"
        self._protected = "prot"
        self.__private = "priv"

d = Demo()
print([attr for attr in dir(d) if 'Demo' in attr or not attr.startswith('_')])
# Shows _Demo__private in the attributes
print(d.__dict__)
# {'public': 'pub', '_protected': 'prot', '_Demo__private': 'priv'}</code></pre>

<h3>Mangling Rules</h3>
<ul>
<li><code>__name</code> → <code>_ClassName__name</code> (mangled)</li>
<li><code>__name__</code> → NOT mangled (dunder methods are special)</li>
<li><code>_name</code> → NOT mangled (single underscore)</li>
<li>Mangling only applies inside class definitions</li>
</ul>`,
          challenge: {
            description: 'Create a class Vault with __init__ setting self.__code = "1234". Add a method check_code(code) that returns True if code matches self.__code. Create a Vault, show that you can access the code through name mangling (_Vault__code) and print it. Also print check_code("1234").',
            starterCode: `class Vault:\n    def __init__(self):\n        self.__code = "1234"\n    \n    def check_code(self, code):\n        return code == self.__code\n\nv = Vault()\nprint(v._Vault__code)\nprint(v.check_code("1234"))`,
            expectedOutput: `1234\nTrue`,
            hints: [
              '__code becomes _Vault__code due to name mangling',
              'You CAN access it with the mangled name, but should not',
              'check_code uses self.__code internally — no mangling needed inside the class',
              'This demonstrates that Python privacy is a convention, not absolute'
            ]
          },
          quiz: [
            {
              question: 'What does name mangling do to __attr in class MyClass?',
              options: ['Deletes it', 'Renames it to _MyClass__attr', 'Makes it truly inaccessible', 'Encrypts it'],
              correct: 1
            },
            {
              question: 'Does name mangling apply to __init__?',
              options: ['Yes', 'No — dunder methods (__name__) are not mangled', 'Only in subclasses', 'Depends on Python version'],
              correct: 1
            },
            {
              question: 'What is the main purpose of name mangling?',
              options: ['Security', 'Preventing accidental name collisions in inheritance', 'Performance', 'Memory management'],
              correct: 1
            },
            {
              question: 'Can you access a mangled attribute from outside the class?',
              options: ['No, never', 'Yes, using _ClassName__attr', 'Only with special methods', 'Only in debug mode'],
              correct: 1
            },
            {
              question: 'In a child class, does self.__x access the parent __x?',
              options: ['Yes', 'No — it creates _Child__x, separate from _Parent__x', 'Only with super()', 'It raises an error'],
              correct: 1
            },
            {
              question: 'Which naming is NOT mangled?',
              options: ['__private', '__init__ (dunder — has trailing underscores too)', '__secret', '__data'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_getters_setters',
          title: 'Getters and Setters',
          type: 'challenge',
          theory: `<h2>Getters and Setters</h2>
<p>Getters and setters are methods that control reading and writing of attributes. They provide a way to add logic (validation, transformation, logging) when data is accessed or modified.</p>

<h3>Traditional Approach (Java-style)</h3>
<pre><code>class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
    
    def get_celsius(self):
        return self._celsius
    
    def set_celsius(self, value):
        if value < -273.15:
            raise ValueError("Below absolute zero!")
        self._celsius = value
    
    def get_fahrenheit(self):
        return self._celsius * 9/5 + 32

t = Temperature(25)
print(t.get_celsius())     # 25
print(t.get_fahrenheit())  # 77.0
t.set_celsius(100)
print(t.get_fahrenheit())  # 212.0</code></pre>

<h3>Pythonic Approach (Property)</h3>
<pre><code>class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius  # Uses setter!
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Below absolute zero!")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32

t = Temperature(25)
print(t.celsius)     # 25 (getter via property)
print(t.fahrenheit)  # 77.0
t.celsius = 100      # setter via property
print(t.fahrenheit)  # 212.0</code></pre>

<h3>Why Properties Are Better</h3>
<ul>
<li>Cleaner syntax: <code>obj.value</code> instead of <code>obj.get_value()</code></li>
<li>You can start with a plain attribute and add property later without changing external code</li>
<li>More Pythonic — follows community conventions</li>
</ul>

<h3>Logging Access</h3>
<pre><code>class AuditedData:
    def __init__(self, value):
        self._value = value
        self._access_count = 0
    
    @property
    def value(self):
        self._access_count += 1
        return self._value
    
    @value.setter
    def value(self, new_val):
        print(f"Value changed: {self._value} -> {new_val}")
        self._value = new_val

d = AuditedData(10)
print(d.value)     # 10 (access_count = 1)
print(d.value)     # 10 (access_count = 2)
d.value = 20       # Value changed: 10 -> 20</code></pre>`,
          challenge: {
            description: 'Create a class Age with a property "value" that validates: must be between 0 and 150, otherwise raise ValueError. Add a read-only property "category" returning "child" (0-12), "teen" (13-17), "adult" (18-64), "senior" (65+). Create Age with 25, print value and category. Then set to 70 and print category.',
            starterCode: `class Age:\n    def __init__(self, value):\n        self.value = value\n    \n    @property\n    def value(self):\n        return self._value\n    \n    @value.setter\n    def value(self, v):\n        if v < 0 or v > 150:\n            raise ValueError("Invalid age")\n        self._value = v\n    \n    @property\n    def category(self):\n        if self._value <= 12:\n            return "child"\n        elif self._value <= 17:\n            return "teen"\n        elif self._value <= 64:\n            return "adult"\n        else:\n            return "senior"\n\na = Age(25)\nprint(a.value)\nprint(a.category)\na.value = 70\nprint(a.category)`,
            expectedOutput: `25\nadult\nsenior`,
            hints: [
              'The setter validates and stores in self._value',
              'category checks self._value ranges',
              '25 is adult (18-64), 70 is senior (65+)',
              'Setting self.value in __init__ triggers the setter'
            ]
          },
          quiz: [
            {
              question: 'What is the purpose of a getter?',
              options: ['To delete data', 'To control how an attribute is read, possibly with logic', 'To create new attributes', 'To import modules'],
              correct: 1
            },
            {
              question: 'What is the Pythonic way to implement getters and setters?',
              options: ['get_x() and set_x() methods', 'Using @property decorator', 'Using global functions', 'Using __get__ and __set__'],
              correct: 1
            },
            {
              question: 'What advantage does @property have over explicit get/set methods?',
              options: ['Faster execution', 'Cleaner syntax — access like an attribute, but with validation', 'Uses less memory', 'Required by Python 3'],
              correct: 1
            },
            {
              question: 'Can you start with a plain attribute and switch to property later?',
              options: ['No, you must decide upfront', 'Yes, without changing the external interface', 'Only in Python 3.10+', 'Only with refactoring tools'],
              correct: 1
            },
            {
              question: 'When is the setter called?',
              options: ['When you read the attribute', 'When you assign a value to the property (obj.prop = value)', 'When the object is created only', 'When print() is called'],
              correct: 1
            },
            {
              question: 'What is a common use of getters?',
              options: ['Counting access frequency or computing derived values', 'Deleting data', 'Creating new classes', 'Importing modules'],
              correct: 0
            }
          ]
        },
        {
          id: 'oop_property_advanced',
          title: 'Property Decorator Advanced',
          type: 'challenge',
          theory: `<h2>Advanced Property Patterns</h2>
<p>Properties can do much more than simple validation. Let's explore advanced patterns.</p>

<h3>Cached Properties</h3>
<pre><code>class DataAnalyzer:
    def __init__(self, data):
        self._data = data
        self._mean_cache = None
    
    @property
    def data(self):
        return self._data
    
    @data.setter
    def data(self, value):
        self._data = value
        self._mean_cache = None  # Invalidate cache
    
    @property
    def mean(self):
        if self._mean_cache is None:
            print("Computing mean...")
            self._mean_cache = sum(self._data) / len(self._data)
        return self._mean_cache

d = DataAnalyzer([1, 2, 3, 4, 5])
print(d.mean)  # Computing mean... 3.0
print(d.mean)  # 3.0 (cached, no recompute)
d.data = [10, 20, 30]
print(d.mean)  # Computing mean... 20.0</code></pre>

<h3>Type Coercion</h3>
<pre><code>class Config:
    def __init__(self, port, debug):
        self.port = port
        self.debug = debug
    
    @property
    def port(self):
        return self._port
    
    @port.setter
    def port(self, value):
        self._port = int(value)  # Always store as int
    
    @property
    def debug(self):
        return self._debug
    
    @debug.setter
    def debug(self, value):
        self._debug = bool(value)  # Always store as bool

c = Config("8080", 1)
print(c.port)   # 8080 (int)
print(c.debug)  # True (bool)
print(type(c.port))   # <class 'int'>
print(type(c.debug))  # <class 'bool'></code></pre>

<h3>Property with Dependency</h3>
<pre><code>class Rectangle:
    def __init__(self, width, height):
        self._width = width
        self._height = height
    
    @property
    def width(self):
        return self._width
    
    @width.setter
    def width(self, value):
        if value <= 0:
            raise ValueError("Width must be positive")
        self._width = value
    
    @property
    def height(self):
        return self._height
    
    @height.setter
    def height(self, value):
        if value <= 0:
            raise ValueError("Height must be positive")
        self._height = value
    
    @property
    def area(self):
        return self._width * self._height
    
    @property
    def is_square(self):
        return self._width == self._height

r = Rectangle(5, 5)
print(r.is_square)  # True
r.width = 10
print(r.is_square)  # False
print(r.area)       # 50</code></pre>`,
          challenge: {
            description: 'Create a class Circle with a property radius (must be positive, raise ValueError otherwise). Add computed read-only properties: area (pi * r^2) and circumference (2 * pi * r). Use pi = 3.14159. Create Circle with radius 7, print area rounded to 2 places and circumference rounded to 2 places.',
            starterCode: `class Circle:\n    def __init__(self, radius):\n        self.radius = radius\n    \n    @property\n    def radius(self):\n        return self._radius\n    \n    @radius.setter\n    def radius(self, value):\n        if value <= 0:\n            raise ValueError("Radius must be positive")\n        self._radius = value\n    \n    @property\n    def area(self):\n        return 3.14159 * self._radius ** 2\n    \n    @property\n    def circumference(self):\n        return 2 * 3.14159 * self._radius\n\nc = Circle(7)\nprint(round(c.area, 2))\nprint(round(c.circumference, 2))`,
            expectedOutput: `153.94\n43.98`,
            hints: [
              'area = 3.14159 * 7^2 = 3.14159 * 49 = 153.93791',
              'round(153.93791, 2) = 153.94',
              'circumference = 2 * 3.14159 * 7 = 43.98226',
              'round(43.98226, 2) = 43.98'
            ]
          },
          quiz: [
            {
              question: 'What is a cached property?',
              options: ['A property that never changes', 'A property that computes once and stores the result until invalidated', 'A static method', 'A class variable'],
              correct: 1
            },
            {
              question: 'How do you invalidate a cache when data changes?',
              options: ['Delete the object', 'Set the cache to None in the data setter', 'Restart Python', 'Call gc.collect()'],
              correct: 1
            },
            {
              question: 'What does type coercion in a setter do?',
              options: ['Deletes the type', 'Converts the input to the expected type (e.g., int, bool)', 'Checks if types match', 'Creates a new type'],
              correct: 1
            },
            {
              question: 'Can a read-only property depend on a settable property?',
              options: ['No', 'Yes — it recomputes each time it is accessed', 'Only with caching', 'Only in Python 3.9+'],
              correct: 1
            },
            {
              question: 'What happens when you set self.radius = value in __init__ if radius has a setter?',
              options: ['The setter is bypassed', 'The setter is called, providing validation even during initialization', 'An error occurs', 'The value is stored directly'],
              correct: 1
            },
            {
              question: 'What is the relationship between area and radius in the Circle property pattern?',
              options: ['They are independent', 'area is derived from radius — changes to radius automatically affect area', 'radius is derived from area', 'They must be set together'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_recap_secure_vault',
          title: 'Recap - Secure Vault',
          type: 'mastery',
          theory: `<h2>Recap: Secure Vault</h2>
<p>Let's build a secure vault system using all encapsulation concepts — private attributes, name mangling, properties, and getters/setters.</p>

<h3>Implementation</h3>
<pre><code>class SecureVault:
    __master_key = "MASTER2024"  # Class-level private
    
    def __init__(self, owner):
        self.__owner = owner
        self.__items = {}
        self.__locked = True
        self.__attempts = 0
        self.__max_attempts = 3
    
    @property
    def is_locked(self):
        return self.__locked
    
    @property
    def owner(self):
        return self.__owner
    
    def unlock(self, key):
        if self.__attempts >= self.__max_attempts:
            return "Vault permanently locked!"
        if key == SecureVault.__master_key:
            self.__locked = False
            self.__attempts = 0
            return "Vault unlocked"
        self.__attempts += 1
        remaining = self.__max_attempts - self.__attempts
        return f"Wrong key! {remaining} attempts remaining"
    
    def lock(self):
        self.__locked = True
        return "Vault locked"
    
    def store(self, name, value):
        if self.__locked:
            return "Vault is locked!"
        self.__items[name] = value
        return f"Stored '{name}'"
    
    def retrieve(self, name):
        if self.__locked:
            return "Vault is locked!"
        return self.__items.get(name, "Item not found")

vault = SecureVault("Alice")
print(vault.unlock("wrong"))       # Wrong key! 2 attempts remaining
print(vault.unlock("MASTER2024"))  # Vault unlocked
print(vault.store("diamond", "10 carat"))  # Stored 'diamond'
print(vault.retrieve("diamond"))   # 10 carat
print(vault.lock())                # Vault locked
print(vault.retrieve("diamond"))   # Vault is locked!</code></pre>

<h3>Security Features Used</h3>
<ol>
<li><strong>Private attributes:</strong> __items, __locked cannot be accessed directly</li>
<li><strong>Read-only properties:</strong> is_locked, owner expose state safely</li>
<li><strong>Method-gated access:</strong> Must unlock before storing/retrieving</li>
<li><strong>Attempt limiting:</strong> Prevents brute force</li>
</ol>`,
          challenge: {
            description: 'Create a SecureVault class with private __pin (set in __init__), private __data dict (empty), and __locked = True. Methods: unlock(pin) — unlocks if pin matches, returns "Unlocked"/"Wrong pin". add(key, value) — only works when unlocked. get(key) — only works when unlocked, returns value or "Not found". lock() — locks the vault. Test: create vault with pin "1234", unlock, add "secret" with value "treasure", lock, try to get (should fail), unlock again, get "secret".',
            starterCode: `class SecureVault:\n    def __init__(self, pin):\n        self.__pin = pin\n        self.__data = {}\n        self.__locked = True\n    \n    def unlock(self, pin):\n        if pin == self.__pin:\n            self.__locked = False\n            return "Unlocked"\n        return "Wrong pin"\n    \n    def lock(self):\n        self.__locked = True\n        return "Locked"\n    \n    def add(self, key, value):\n        if self.__locked:\n            return "Vault is locked"\n        self.__data[key] = value\n        return f"Added {key}"\n    \n    def get(self, key):\n        if self.__locked:\n            return "Vault is locked"\n        return self.__data.get(key, "Not found")\n\nv = SecureVault("1234")\nprint(v.unlock("1234"))\nprint(v.add("secret", "treasure"))\nprint(v.lock())\nprint(v.get("secret"))\nprint(v.unlock("1234"))\nprint(v.get("secret"))`,
            expectedOutput: `Unlocked\nAdded secret\nLocked\nVault is locked\nUnlocked\ntreasure`,
            hints: [
              'unlock checks pin match and sets __locked = False',
              'add and get check self.__locked first',
              'After locking, get returns "Vault is locked"',
              'After unlocking again, get returns the stored value'
            ]
          },
          mastery: {
            description: 'Add an audit log to SecureVault — a private __log list that records every action with a timestamp-like counter. Each entry: "{counter}: {action}". Add method get_log() that only works when unlocked. Actions to log: "unlock attempt", "locked", "added {key}", "retrieved {key}", "log accessed".',
            starterCode: `# Extend SecureVault with audit logging`,
            expectedOutput: `1: unlock attempt\n2: added secret\n3: locked\n4: unlock attempt\n5: retrieved secret\n6: log accessed`,
            hints: [
              'Add self.__log = [] and self.__counter = 0 in __init__',
              'Each action: self.__counter += 1; self.__log.append(f"{self.__counter}: {action}")',
              'get_log returns newline-joined log entries'
            ]
          },
          quiz: [
            {
              question: 'Why gate data access behind an unlock method?',
              options: ['Performance', 'To ensure only authorized access — like a real vault', 'Python requires it', 'To use less memory'],
              correct: 1
            },
            {
              question: 'What does "method-gated access" mean?',
              options: ['Methods are deleted', 'You must call a specific method (like unlock) before accessing data', 'Methods have passwords', 'Only one method exists'],
              correct: 1
            },
            {
              question: 'How does attempt-limiting improve security?',
              options: ['Makes code faster', 'Prevents unlimited guessing (brute force attacks)', 'Uses less memory', 'Required by Python'],
              correct: 1
            },
            {
              question: 'What encapsulation principle does "read-only property" demonstrate?',
              options: ['Data hiding — exposing state without allowing modification', 'Inheritance', 'Polymorphism', 'Abstraction'],
              correct: 0
            },
            {
              question: 'Could someone bypass the vault using name mangling?',
              options: ['No, impossible', 'Yes, via _SecureVault__data — Python privacy is a convention', 'Only in debug mode', 'Only with admin privileges'],
              correct: 1
            },
            {
              question: 'What combines private attrs, properties, and validation methods?',
              options: ['Inheritance', 'Encapsulation — the full pattern of controlled access', 'Polymorphism', 'Abstraction'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: 'oop_magic_methods',
      title: 'Magic Methods',
      lessons: [
        {
          id: 'oop_str_repr',
          title: '__str__ and __repr__',
          type: 'challenge',
          theory: `<h2>__str__ and __repr__</h2>
<p>When you print an object, Python calls <code>__str__</code> for a human-readable representation. <code>__repr__</code> provides a developer-friendly representation, ideally one that could recreate the object.</p>

<h3>Without __str__ and __repr__</h3>
<pre><code>class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(3, 4)
print(p)  # <__main__.Point object at 0x...> — useless!</code></pre>

<h3>With __str__ and __repr__</h3>
<pre><code>class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"({self.x}, {self.y})"
    
    def __repr__(self):
        return f"Point({self.x}, {self.y})"

p = Point(3, 4)
print(p)        # (3, 4) — uses __str__
print(repr(p))  # Point(3, 4) — uses __repr__
print([p])      # [Point(3, 4)] — lists use __repr__ for items</code></pre>

<h3>Rules of Thumb</h3>
<ul>
<li><code>__str__</code>: For end users — clean, readable</li>
<li><code>__repr__</code>: For developers — unambiguous, ideally valid Python to recreate the object</li>
<li>If only one is defined, implement <code>__repr__</code> — Python falls back to it for print() if __str__ is missing</li>
</ul>

<h3>Real-World Example</h3>
<pre><code>class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    
    def __str__(self):
        return f"{self.name}: \${self.price} (x{self.quantity})"
    
    def __repr__(self):
        return f"Product('{self.name}', {self.price}, {self.quantity})"

items = [Product("Laptop", 999, 2), Product("Mouse", 29, 5)]
for item in items:
    print(item)
# Laptop: $999 (x2)
# Mouse: $29 (x5)

print(items)
# [Product('Laptop', 999, 2), Product('Mouse', 29, 5)]</code></pre>`,
          challenge: {
            description: 'Create a class Book with __init__(title, author, pages). Implement __str__ returning "{title} by {author}" and __repr__ returning "Book('{title}', '{author}', {pages})". Create Book("Python Crash Course", "Eric Matthes", 544). Print the book (uses __str__) and print repr() of the book.',
            starterCode: `class Book:\n    def __init__(self, title, author, pages):\n        self.title = title\n        self.author = author\n        self.pages = pages\n    \n    def __str__(self):\n        return f"{self.title} by {self.author}"\n    \n    def __repr__(self):\n        return f"Book('{self.title}', '{self.author}', {self.pages})"\n\nb = Book("Python Crash Course", "Eric Matthes", 544)\nprint(b)\nprint(repr(b))`,
            expectedOutput: `Python Crash Course by Eric Matthes\nBook('Python Crash Course', 'Eric Matthes', 544)`,
            hints: [
              '__str__ is called by print(obj)',
              '__repr__ is called by repr(obj)',
              '__str__ should be human-friendly',
              '__repr__ should ideally be valid Python that recreates the object'
            ]
          },
          quiz: [
            {
              question: 'When is __str__ called?',
              options: ['When you compare objects', 'When you use print() or str() on the object', 'When the object is created', 'When you delete the object'],
              correct: 1
            },
            {
              question: 'When is __repr__ called?',
              options: ['Only with repr()', 'In the interactive interpreter, repr(), and when objects are in containers like lists', 'Never automatically', 'Only for debugging'],
              correct: 1
            },
            {
              question: 'If you can only implement one, which should it be?',
              options: ['__str__', '__repr__ (Python falls back to it if __str__ is missing)', 'Either is fine', 'Neither is needed'],
              correct: 1
            },
            {
              question: 'What should __repr__ ideally return?',
              options: ['A short description', 'A string that could recreate the object (valid Python)', 'The object type', 'The memory address'],
              correct: 1
            },
            {
              question: 'In a list like [obj1, obj2], which method is used to display items?',
              options: ['__str__', '__repr__', '__display__', '__format__'],
              correct: 1
            },
            {
              question: 'What is the difference between str(obj) and repr(obj)?',
              options: ['No difference', 'str() calls __str__ (user-friendly); repr() calls __repr__ (developer-friendly)', 'repr() is faster', 'str() returns bytes'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_len_getitem',
          title: '__len__ and __getitem__',
          type: 'challenge',
          theory: `<h2>__len__ and __getitem__</h2>
<p>These methods make your objects behave like built-in collections (lists, dicts). <code>__len__</code> enables <code>len(obj)</code> and <code>__getitem__</code> enables <code>obj[index]</code>.</p>

<h3>Making Objects Sizeable</h3>
<pre><code>class Playlist:
    def __init__(self, name, songs):
        self.name = name
        self.songs = songs
    
    def __len__(self):
        return len(self.songs)
    
    def __getitem__(self, index):
        return self.songs[index]

playlist = Playlist("Rock", ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"])
print(len(playlist))     # 3
print(playlist[0])       # Bohemian Rhapsody
print(playlist[-1])      # Hotel California
print(playlist[1:])      # ['Stairway to Heaven', 'Hotel California']</code></pre>

<h3>__getitem__ Enables Iteration!</h3>
<pre><code>class NumberRange:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        self._numbers = list(range(start, end + 1))
    
    def __len__(self):
        return len(self._numbers)
    
    def __getitem__(self, index):
        return self._numbers[index]

nums = NumberRange(1, 5)
print(len(nums))  # 5

# __getitem__ enables for loops!
for n in nums:
    print(n, end=" ")  # 1 2 3 4 5

# And 'in' operator!
print(3 in nums)  # True</code></pre>

<h3>Custom Dictionary-like Object</h3>
<pre><code>class Config:
    def __init__(self):
        self._data = {}
    
    def __setitem__(self, key, value):
        self._data[key] = value
    
    def __getitem__(self, key):
        return self._data[key]
    
    def __len__(self):
        return len(self._data)
    
    def __contains__(self, key):
        return key in self._data

config = Config()
config["theme"] = "dark"
config["font_size"] = 14
print(config["theme"])       # dark
print(len(config))           # 2
print("theme" in config)     # True</code></pre>`,
          challenge: {
            description: 'Create a class Deck that initializes with a list of card strings. Implement __len__ returning the number of cards, __getitem__ for index access, and __contains__ for "in" operator checking. Create a Deck with ["Ace", "King", "Queen", "Jack"]. Print len, first card via [0], and check if "Queen" is in deck.',
            starterCode: `class Deck:\n    def __init__(self, cards):\n        self.cards = cards\n    \n    def __len__(self):\n        return len(self.cards)\n    \n    def __getitem__(self, index):\n        return self.cards[index]\n    \n    def __contains__(self, card):\n        return card in self.cards\n\ndeck = Deck(["Ace", "King", "Queen", "Jack"])\nprint(len(deck))\nprint(deck[0])\nprint("Queen" in deck)`,
            expectedOutput: `4\nAce\nTrue`,
            hints: [
              '__len__ returns len(self.cards)',
              '__getitem__ returns self.cards[index]',
              '__contains__ returns card in self.cards',
              'These make your object behave like a built-in sequence'
            ]
          },
          quiz: [
            {
              question: 'What built-in function does __len__ support?',
              options: ['size()', 'count()', 'len()', 'length()'],
              correct: 2
            },
            {
              question: 'What does __getitem__ enable?',
              options: ['Getting attributes', 'Square bracket access: obj[index]', 'Dot notation access', 'Function calls'],
              correct: 1
            },
            {
              question: 'Does __getitem__ also enable iteration with for loops?',
              options: ['No, you need __iter__', 'Yes, Python can iterate using sequential __getitem__ calls', 'Only with __next__', 'Only for lists'],
              correct: 1
            },
            {
              question: 'What method enables the "in" operator (x in obj)?',
              options: ['__in__', '__has__', '__contains__', '__includes__'],
              correct: 2
            },
            {
              question: 'What method enables obj[key] = value assignment?',
              options: ['__getitem__', '__setitem__', '__assign__', '__set__'],
              correct: 1
            },
            {
              question: 'What should __len__ return?',
              options: ['A string', 'A non-negative integer', 'A list', 'A boolean'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_eq_lt',
          title: '__eq__ and __lt__',
          type: 'challenge',
          theory: `<h2>__eq__ and __lt__ — Comparison Magic Methods</h2>
<p>By default, <code>==</code> checks if two variables reference the same object (identity). To compare by VALUE, implement <code>__eq__</code>. For ordering (<, >, sorting), implement <code>__lt__</code>.</p>

<h3>Without __eq__</h3>
<pre><code>class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p1 = Point(1, 2)
p2 = Point(1, 2)
print(p1 == p2)  # False! Different objects in memory</code></pre>

<h3>With __eq__</h3>
<pre><code>class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __eq__(self, other):
        if not isinstance(other, Point):
            return NotImplemented
        return self.x == other.x and self.y == other.y

p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = Point(3, 4)
print(p1 == p2)  # True (same values!)
print(p1 == p3)  # False</code></pre>

<h3>Ordering with __lt__</h3>
<pre><code>class Student:
    def __init__(self, name, gpa):
        self.name = name
        self.gpa = gpa
    
    def __eq__(self, other):
        return self.gpa == other.gpa
    
    def __lt__(self, other):
        return self.gpa < other.gpa
    
    def __repr__(self):
        return f"{self.name}({self.gpa})"

students = [Student("Alice", 3.8), Student("Bob", 3.5), Student("Carol", 3.9)]
students.sort()  # Uses __lt__
print(students)  # [Bob(3.5), Alice(3.8), Carol(3.9)]

print(Student("X", 3.5) == Student("Y", 3.5))  # True (same GPA)
print(Student("X", 3.5) < Student("Y", 3.9))   # True</code></pre>

<h3>functools.total_ordering</h3>
<pre><code>from functools import total_ordering

@total_ordering
class Temperature:
    def __init__(self, value):
        self.value = value
    
    def __eq__(self, other):
        return self.value == other.value
    
    def __lt__(self, other):
        return self.value < other.value

# total_ordering automatically provides >, >=, <= from __eq__ and __lt__!
t1 = Temperature(20)
t2 = Temperature(30)
print(t1 < t2)   # True
print(t1 > t2)   # False (auto-generated!)
print(t1 >= t1)  # True (auto-generated!)</code></pre>`,
          challenge: {
            description: 'Create a class Weight with __init__(kg). Implement __eq__ (equal if same kg), __lt__ (less if lower kg), and __repr__ (returning "{kg}kg"). Create weights of 5, 10, and 5 kg. Print if first == third, if first < second, and sort a list of all three and print it.',
            starterCode: `class Weight:\n    def __init__(self, kg):\n        self.kg = kg\n    \n    def __eq__(self, other):\n        return self.kg == other.kg\n    \n    def __lt__(self, other):\n        return self.kg < other.kg\n    \n    def __repr__(self):\n        return f"{self.kg}kg"\n\nw1 = Weight(5)\nw2 = Weight(10)\nw3 = Weight(5)\nprint(w1 == w3)\nprint(w1 < w2)\nweights = [w2, w1, w3]\nweights.sort()\nprint(weights)`,
            expectedOutput: `True\nTrue\n[5kg, 5kg, 10kg]`,
            hints: [
              '__eq__ compares self.kg == other.kg',
              '__lt__ compares self.kg < other.kg',
              'sort() uses __lt__ to order elements',
              '__repr__ is used when printing a list of objects'
            ]
          },
          quiz: [
            {
              question: 'What does == check by default (without __eq__)?',
              options: ['Value equality', 'Object identity (same object in memory)', 'Type equality', 'Nothing'],
              correct: 1
            },
            {
              question: 'What should __eq__ return?',
              options: ['The object', 'True or False', 'A number', 'NotImplemented only'],
              correct: 1
            },
            {
              question: 'What does NotImplemented mean when returned from __eq__?',
              options: ['An error occurred', 'Python should try the other object comparison method', 'The objects are not equal', 'Comparison is disabled'],
              correct: 1
            },
            {
              question: 'What does functools.total_ordering provide?',
              options: ['All magic methods', 'Auto-generates >, >=, <= from __eq__ and __lt__', 'A sorting algorithm', 'Type checking'],
              correct: 1
            },
            {
              question: 'What method does sort() use to compare elements?',
              options: ['__eq__', '__lt__', '__cmp__', '__sort__'],
              correct: 1
            },
            {
              question: 'Can you use == to compare objects of different classes?',
              options: ['No, always raises error', 'Yes, if __eq__ handles it (or returns NotImplemented)', 'Only with type casting', 'Only if they share a parent'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_add_mul',
          title: '__add__ and __mul__',
          type: 'challenge',
          theory: `<h2>__add__ and __mul__ — Arithmetic Magic Methods</h2>
<p>These let your objects use <code>+</code> and <code>*</code> operators with custom behavior.</p>

<h3>Vector Addition</h3>
<pre><code>class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
    
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)

v3 = v1 + v2       # __add__
print(v3)           # Vector(4, 6)

v4 = v1 * 3        # __mul__
print(v4)           # Vector(3, 6)</code></pre>

<h3>String-like Concatenation</h3>
<pre><code>class Sentence:
    def __init__(self, text):
        self.text = text
    
    def __add__(self, other):
        return Sentence(self.text + " " + other.text)
    
    def __mul__(self, times):
        return Sentence((self.text + " ") * times).text.strip()
    
    def __repr__(self):
        return f'Sentence("{self.text}")'

s1 = Sentence("Hello")
s2 = Sentence("World")
print(s1 + s2)    # Sentence("Hello World")
print(s1 * 3)     # Hello Hello Hello</code></pre>

<h3>__radd__ and __rmul__ (Right-side Operations)</h3>
<pre><code>class Money:
    def __init__(self, amount):
        self.amount = amount
    
    def __add__(self, other):
        if isinstance(other, Money):
            return Money(self.amount + other.amount)
        return Money(self.amount + other)
    
    def __radd__(self, other):
        # Called when: number + Money
        return Money(other + self.amount)
    
    def __mul__(self, factor):
        return Money(self.amount * factor)
    
    def __repr__(self):
        return f"${self.amount}"

m = Money(100)
print(m + Money(50))  # $150
print(m + 25)         # $125
print(10 + m)         # $110 (uses __radd__)
print(m * 2)          # $200</code></pre>

<h3>__iadd__ (+=) In-Place</h3>
<pre><code>class Counter:
    def __init__(self, count=0):
        self.count = count
    
    def __iadd__(self, other):
        self.count += other
        return self
    
    def __repr__(self):
        return f"Counter({self.count})"

c = Counter(5)
c += 3
print(c)  # Counter(8)</code></pre>`,
          challenge: {
            description: 'Create a class Money with __init__(amount, currency="USD"). Implement __add__ that adds amounts (same currency only, raise ValueError if different). Implement __mul__ that multiplies amount by a scalar. Implement __repr__ returning "${amount} {currency}". Add Money(100, "USD") + Money(50, "USD"), print result. Then print Money(25, "USD") * 4.',
            starterCode: `class Money:\n    def __init__(self, amount, currency="USD"):\n        self.amount = amount\n        self.currency = currency\n    \n    def __add__(self, other):\n        if self.currency != other.currency:\n            raise ValueError("Cannot add different currencies")\n        return Money(self.amount + other.amount, self.currency)\n    \n    def __mul__(self, factor):\n        return Money(self.amount * factor, self.currency)\n    \n    def __repr__(self):\n        return f"${self.amount} {self.currency}"\n\nresult = Money(100, "USD") + Money(50, "USD")\nprint(result)\nprint(Money(25, "USD") * 4)`,
            expectedOutput: `$150 USD\n$100 USD`,
            hints: [
              '__add__ creates new Money with summed amounts',
              '__mul__ creates new Money with amount * factor',
              '100 + 50 = 150, 25 * 4 = 100',
              'Check currency match in __add__ before adding'
            ]
          },
          quiz: [
            {
              question: 'What method is called for obj1 + obj2?',
              options: ['__plus__', '__add__', '__sum__', '__concat__'],
              correct: 1
            },
            {
              question: 'What method is called for obj * 3?',
              options: ['__times__', '__multiply__', '__mul__', '__product__'],
              correct: 2
            },
            {
              question: 'When is __radd__ called?',
              options: ['For right addition: other_type + your_object', 'For repeated addition', 'For recursive addition', 'Never'],
              correct: 0
            },
            {
              question: 'What should __add__ return?',
              options: ['None', 'A new object (not modifying originals)', 'A boolean', 'The left operand'],
              correct: 1
            },
            {
              question: 'What does __iadd__ implement?',
              options: ['obj + obj', 'obj += other (in-place addition)', 'obj - obj', 'obj == obj'],
              correct: 1
            },
            {
              question: 'Why should __add__ create a new object rather than modifying self?',
              options: ['Performance', 'To keep operations immutable — originals should not change', 'Python requires it', 'To avoid recursion'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_enter_exit',
          title: '__enter__ and __exit__',
          type: 'challenge',
          theory: `<h2>__enter__ and __exit__ — Context Managers</h2>
<p>Context managers let you use the <code>with</code> statement to automatically handle setup and cleanup — like opening/closing files, acquiring/releasing locks, or connecting/disconnecting.</p>

<h3>The with Statement</h3>
<pre><code># Built-in context manager for files
with open("file.txt", "w") as f:
    f.write("Hello")
# File is automatically closed, even if an error occurs!</code></pre>

<h3>Creating Your Own Context Manager</h3>
<pre><code>class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        print("Timer started")
        return self  # This is what 'as variable' receives
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        elapsed = time.time() - self.start
        print(f"Timer stopped: {elapsed:.4f}s")
        return False  # Don't suppress exceptions

with Timer() as t:
    total = sum(range(1000000))
# Timer started
# Timer stopped: 0.0312s</code></pre>

<h3>Database Connection Pattern</h3>
<pre><code>class DatabaseConnection:
    def __init__(self, db_name):
        self.db_name = db_name
        self.connected = False
    
    def __enter__(self):
        self.connected = True
        print(f"Connected to {self.db_name}")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.connected = False
        print(f"Disconnected from {self.db_name}")
        if exc_type:
            print(f"Error occurred: {exc_val}")
        return False
    
    def query(self, sql):
        if not self.connected:
            raise RuntimeError("Not connected!")
        return f"Results for: {sql}"

with DatabaseConnection("mydb") as db:
    print(db.query("SELECT * FROM users"))
# Connected to mydb
# Results for: SELECT * FROM users
# Disconnected from mydb</code></pre>

<h3>__exit__ Parameters</h3>
<ul>
<li><code>exc_type</code>: Exception class (or None)</li>
<li><code>exc_val</code>: Exception instance (or None)</li>
<li><code>exc_tb</code>: Traceback (or None)</li>
<li>Return <code>True</code> to suppress the exception, <code>False</code> to propagate it</li>
</ul>`,
          challenge: {
            description: 'Create a class FileManager context manager with __init__(filename, mode). __enter__ should print "Opening {filename}" and return self (store filename and mode). __exit__ should print "Closing {filename}" and return False. Add a method write(text) that prints "Writing: {text}". Use it with a with statement for "test.txt" in "w" mode, calling write("Hello World").',
            starterCode: `class FileManager:\n    def __init__(self, filename, mode):\n        self.filename = filename\n        self.mode = mode\n    \n    def __enter__(self):\n        print(f"Opening {self.filename}")\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(f"Closing {self.filename}")\n        return False\n    \n    def write(self, text):\n        print(f"Writing: {text}")\n\nwith FileManager("test.txt", "w") as f:\n    f.write("Hello World")`,
            expectedOutput: `Opening test.txt\nWriting: Hello World\nClosing test.txt`,
            hints: [
              '__enter__ is called at the start of with block',
              '__exit__ is called at the end, even if errors occur',
              'return self from __enter__ so "as f" gets the object',
              '__exit__ runs after the with block body completes'
            ]
          },
          quiz: [
            {
              question: 'What does __enter__ return?',
              options: ['Nothing', 'The value that "as variable" receives', 'A boolean', 'The exit code'],
              correct: 1
            },
            {
              question: 'When is __exit__ called?',
              options: ['When the program ends', 'When the with block exits (normally or due to exception)', 'Only when errors occur', 'When the object is deleted'],
              correct: 1
            },
            {
              question: 'What does returning True from __exit__ do?',
              options: ['Signals success', 'Suppresses any exception that occurred', 'Closes the context', 'Nothing special'],
              correct: 1
            },
            {
              question: 'What are the three parameters of __exit__?',
              options: ['self, args, kwargs', 'exc_type, exc_val, exc_tb (exception info)', 'enter, exit, error', 'start, end, status'],
              correct: 1
            },
            {
              question: 'What is the main benefit of context managers?',
              options: ['Speed', 'Guaranteed cleanup even if errors occur', 'Less memory', 'Type safety'],
              correct: 1
            },
            {
              question: 'Which built-in uses context manager pattern?',
              options: ['print()', 'len()', 'open() — with open("f") as f:', 'type()'],
              correct: 2
            }
          ]
        },
        {
          id: 'oop_recap_custom_collection',
          title: 'Recap - Custom Collection',
          type: 'mastery',
          theory: `<h2>Recap: Custom Collection</h2>
<p>Let's build a custom collection class that implements multiple magic methods to behave like a built-in Python collection.</p>

<h3>OrderedSet — A Set That Remembers Insertion Order</h3>
<pre><code>class OrderedSet:
    def __init__(self, items=None):
        self._items = []
        if items:
            for item in items:
                self.add(item)
    
    def add(self, item):
        if item not in self._items:
            self._items.append(item)
    
    def __len__(self):
        return len(self._items)
    
    def __contains__(self, item):
        return item in self._items
    
    def __getitem__(self, index):
        return self._items[index]
    
    def __iter__(self):
        return iter(self._items)
    
    def __add__(self, other):
        new_set = OrderedSet(self._items)
        for item in other:
            new_set.add(item)
        return new_set
    
    def __eq__(self, other):
        return self._items == other._items
    
    def __repr__(self):
        return f"OrderedSet({self._items})"
    
    def __str__(self):
        return "{" + ", ".join(str(x) for x in self._items) + "}"

os1 = OrderedSet([3, 1, 4, 1, 5, 9, 2, 6, 5])
print(os1)           # {3, 1, 4, 5, 9, 2, 6}
print(len(os1))      # 7
print(os1[0])        # 3
print(4 in os1)      # True

os2 = OrderedSet([10, 20, 3])
combined = os1 + os2
print(combined)      # {3, 1, 4, 5, 9, 2, 6, 10, 20}</code></pre>`,
          challenge: {
            description: 'Create a class Stack with internal list. Implement: __len__, __getitem__, __repr__ (showing the list), __bool__ (True if not empty), push(item) and pop() methods. Create a stack, push 1, 2, 3. Print len, print stack[0] (bottom), print bool of stack, pop and print the popped value, print len again.',
            starterCode: `class Stack:\n    def __init__(self):\n        self._items = []\n    \n    def push(self, item):\n        self._items.append(item)\n    \n    def pop(self):\n        return self._items.pop()\n    \n    def __len__(self):\n        return len(self._items)\n    \n    def __getitem__(self, index):\n        return self._items[index]\n    \n    def __bool__(self):\n        return len(self._items) > 0\n    \n    def __repr__(self):\n        return f"Stack({self._items})"\n\ns = Stack()\ns.push(1)\ns.push(2)\ns.push(3)\nprint(len(s))\nprint(s[0])\nprint(bool(s))\nprint(s.pop())\nprint(len(s))`,
            expectedOutput: `3\n1\nTrue\n3\n2`,
            hints: [
              'push appends, pop removes last element',
              's[0] is the bottom (first pushed)',
              'pop returns 3 (last pushed, LIFO)',
              'After pop, length goes from 3 to 2'
            ]
          },
          mastery: {
            description: 'Extend Stack with __add__ (concatenate two stacks into new one), __eq__ (equal if same items), and __iter__ (iterate from bottom to top). Create two stacks [1,2] and [3,4], add them, iterate and print each item, then check if Stack([1,2,3,4]) == the combined stack.',
            starterCode: `# Extend Stack with __add__, __eq__, __iter__`,
            expectedOutput: `1\n2\n3\n4\nTrue`,
            hints: [
              '__add__: create new Stack, push items from both',
              '__iter__: return iter(self._items)',
              '__eq__: return self._items == other._items'
            ]
          },
          quiz: [
            {
              question: 'What does __bool__ control?',
              options: ['The type of the object', 'The truthiness — what bool(obj) and if obj: evaluate to', 'Object deletion', 'Object creation'],
              correct: 1
            },
            {
              question: 'How many magic methods does a full collection-like class typically need?',
              options: ['Just 1', 'Several: __len__, __getitem__, __contains__, __iter__, __repr__ at minimum', 'Exactly 3', 'Only __init__'],
              correct: 1
            },
            {
              question: 'What does __iter__ enable?',
              options: ['Index access', 'for...in loops on the object', 'Length checking', 'Comparison'],
              correct: 1
            },
            {
              question: 'What is the benefit of implementing magic methods on custom classes?',
              options: ['Faster code', 'Objects can be used with built-in Python syntax (+, len, in, for, etc.)', 'Less memory', 'Required for all classes'],
              correct: 1
            },
            {
              question: 'What does __bool__ return when a Stack is empty?',
              options: ['None', 'True', 'False (len is 0)', 'An error'],
              correct: 2
            },
            {
              question: 'In LIFO order, which item is popped first from [1, 2, 3]?',
              options: ['1 (first in)', '3 (last in, first out)', '2 (middle)', 'Random'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: 'oop_composition',
      title: 'Composition',
      lessons: [
        {
          id: 'oop_has_a_vs_is_a',
          title: 'Has-A vs Is-A',
          type: 'challenge',
          theory: `<h2>Has-A vs Is-A Relationships</h2>
<p>There are two ways to combine classes: <strong>Inheritance</strong> (IS-A) and <strong>Composition</strong> (HAS-A). Choosing the right one is a critical design decision.</p>

<h3>IS-A (Inheritance)</h3>
<p>Use when the child truly IS a type of the parent:</p>
<ul>
<li>A Dog IS-A Animal ✓</li>
<li>A Manager IS-A Employee ✓</li>
<li>A Circle IS-A Shape ✓</li>
</ul>
<pre><code>class Animal:
    def breathe(self):
        return "Breathing..."

class Dog(Animal):  # Dog IS-A Animal
    def bark(self):
        return "Woof!"

rex = Dog()
print(rex.breathe())  # Inherited — makes sense!
print(rex.bark())     # Own method</code></pre>

<h3>HAS-A (Composition)</h3>
<p>Use when one class CONTAINS or USES another:</p>
<ul>
<li>A Car HAS-A Engine ✓ (Car is NOT a type of Engine)</li>
<li>A Computer HAS-A CPU ✓</li>
<li>A Library HAS-A list of Books ✓</li>
</ul>
<pre><code>class Engine:
    def __init__(self, horsepower):
        self.horsepower = horsepower
    
    def start(self):
        return f"{self.horsepower}HP engine started"

class Car:
    def __init__(self, make, engine):
        self.make = make
        self.engine = engine  # HAS-A Engine
    
    def start(self):
        return f"{self.make}: {self.engine.start()}"

v8 = Engine(450)
mustang = Car("Ford Mustang", v8)
print(mustang.start())  # Ford Mustang: 450HP engine started</code></pre>

<h3>When to Choose Which</h3>
<table>
<tr><th>Use Inheritance When</th><th>Use Composition When</th></tr>
<tr><td>True "is-a" relationship</td><td>"has-a" or "uses-a" relationship</td></tr>
<tr><td>You want polymorphism</td><td>You want flexibility</td></tr>
<tr><td>Child is a specialization</td><td>Parts can be swapped out</td></tr>
</table>

<h3>Common Mistake</h3>
<pre><code># WRONG: Stack inherits from list
class Stack(list):  # Stack IS-A list? No! Users could call sort(), insert(), etc.
    pass

# BETTER: Stack HAS-A list
class Stack:
    def __init__(self):
        self._items = []  # HAS-A list (hidden)
    
    def push(self, item):
        self._items.append(item)
    
    def pop(self):
        return self._items.pop()</code></pre>

<p><strong>Rule of thumb:</strong> Favor composition over inheritance. It's more flexible and avoids tight coupling.</p>`,
          challenge: {
            description: 'Create a class Battery with __init__(capacity) and method status() returning "{capacity}% charged". Create a class Phone with __init__(brand, battery) where battery is a Battery object. Add method phone_status() returning "{brand}: {battery.status()}". Create Phone("iPhone", Battery(85)) and print phone_status().',
            starterCode: `class Battery:\n    def __init__(self, capacity):\n        self.capacity = capacity\n    \n    def status(self):\n        return f"{self.capacity}% charged"\n\nclass Phone:\n    def __init__(self, brand, battery):\n        self.brand = brand\n        self.battery = battery\n    \n    def phone_status(self):\n        return f"{self.brand}: {self.battery.status()}"\n\nphone = Phone("iPhone", Battery(85))\nprint(phone.phone_status())`,
            expectedOutput: 'iPhone: 85% charged',
            hints: [
              'Phone HAS-A Battery (composition)',
              'phone_status delegates to self.battery.status()',
              'Battery is a separate, independent class',
              'Phone does NOT inherit from Battery'
            ]
          },
          quiz: [
            {
              question: 'What does IS-A represent?',
              options: ['Composition', 'Inheritance — the child is a type of the parent', 'Aggregation', 'Association'],
              correct: 1
            },
            {
              question: 'What does HAS-A represent?',
              options: ['Inheritance', 'Composition — one class contains another as an attribute', 'Multiple inheritance', 'Abstraction'],
              correct: 1
            },
            {
              question: 'A Car has an Engine. Which relationship is this?',
              options: ['IS-A (inheritance)', 'HAS-A (composition)', 'Both', 'Neither'],
              correct: 1
            },
            {
              question: 'Why is "class Stack(list)" often a bad idea?',
              options: ['Lists are slow', 'It exposes list methods (sort, insert) that should not be available on a Stack', 'Python does not allow it', 'It uses too much memory'],
              correct: 1
            },
            {
              question: 'What is the general guideline for choosing between inheritance and composition?',
              options: ['Always use inheritance', 'Favor composition over inheritance — it is more flexible', 'Never use inheritance', 'Use both equally'],
              correct: 1
            },
            {
              question: 'Can you swap components in composition?',
              options: ['No', 'Yes — you can replace the contained object with a different one', 'Only at creation time', 'Only with inheritance'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_composing_objects',
          title: 'Composing Objects',
          type: 'challenge',
          theory: `<h2>Composing Objects</h2>
<p>Composition lets you build complex objects from simpler parts. Each part handles its own responsibility, and the composite object coordinates them.</p>

<h3>Multi-Component System</h3>
<pre><code>class CPU:
    def __init__(self, speed_ghz):
        self.speed = speed_ghz
    
    def process(self, task):
        return f"CPU ({self.speed}GHz) processing: {task}"

class RAM:
    def __init__(self, size_gb):
        self.size = size_gb
        self.data = {}
    
    def store(self, key, value):
        self.data[key] = value
    
    def retrieve(self, key):
        return self.data.get(key, None)

class Storage:
    def __init__(self, size_tb):
        self.size = size_tb
        self.files = []
    
    def save(self, filename):
        self.files.append(filename)
        return f"Saved {filename}"

class Computer:
    def __init__(self, cpu, ram, storage):
        self.cpu = cpu
        self.ram = ram
        self.storage = storage
    
    def run_program(self, name):
        result = self.cpu.process(name)
        self.ram.store("last_program", name)
        return result
    
    def save_file(self, filename):
        return self.storage.save(filename)
    
    def specs(self):
        return f"CPU: {self.cpu.speed}GHz, RAM: {self.ram.size}GB, Storage: {self.storage.size}TB"

# Assemble a computer from parts
pc = Computer(CPU(3.5), RAM(16), Storage(1))
print(pc.specs())
# CPU: 3.5GHz, RAM: 16GB, Storage: 1TB
print(pc.run_program("Python"))
# CPU (3.5GHz) processing: Python
print(pc.save_file("report.pdf"))
# Saved report.pdf</code></pre>

<h3>Benefits of Composition</h3>
<ol>
<li><strong>Flexibility:</strong> Swap components without changing the composite</li>
<li><strong>Testability:</strong> Test each part independently</li>
<li><strong>Reusability:</strong> Same CPU class can be used in different systems</li>
<li><strong>Single Responsibility:</strong> Each class has one job</li>
</ol>

<h3>Dynamic Composition</h3>
<pre><code># Upgrade the computer!
pc.cpu = CPU(5.0)  # New faster CPU
print(pc.specs())
# CPU: 5.0GHz, RAM: 16GB, Storage: 1TB</code></pre>`,
          challenge: {
            description: 'Create classes: Engine(fuel_type) with method run() returning "{fuel_type} engine running". Wheels(count) with method roll() returning "{count} wheels rolling". Create Car(name, engine, wheels) with method drive() that returns "{name}: {engine.run()}, {wheels.roll()}". Create Car("Tesla", Engine("Electric"), Wheels(4)) and print drive().',
            starterCode: `class Engine:\n    def __init__(self, fuel_type):\n        self.fuel_type = fuel_type\n    \n    def run(self):\n        return f"{self.fuel_type} engine running"\n\nclass Wheels:\n    def __init__(self, count):\n        self.count = count\n    \n    def roll(self):\n        return f"{self.count} wheels rolling"\n\nclass Car:\n    def __init__(self, name, engine, wheels):\n        self.name = name\n        self.engine = engine\n        self.wheels = wheels\n    \n    def drive(self):\n        return f"{self.name}: {self.engine.run()}, {self.wheels.roll()}"\n\ncar = Car("Tesla", Engine("Electric"), Wheels(4))\nprint(car.drive())`,
            expectedOutput: 'Tesla: Electric engine running, 4 wheels rolling',
            hints: [
              'Car is composed of Engine and Wheels',
              'drive() delegates to engine.run() and wheels.roll()',
              'Each component is created independently',
              'The Car coordinates the components'
            ]
          },
          quiz: [
            {
              question: 'What is the main advantage of composing objects?',
              options: ['Faster execution', 'Flexibility — components can be swapped independently', 'Less code', 'Required by Python'],
              correct: 1
            },
            {
              question: 'In composition, what does the composite class do?',
              options: ['Inherits from components', 'Coordinates and delegates to component objects', 'Copies component code', 'Deletes components after use'],
              correct: 1
            },
            {
              question: 'Can you change a component at runtime in composition?',
              options: ['No, fixed at creation', 'Yes, just assign a new object to the attribute', 'Only with special methods', 'Only with inheritance'],
              correct: 1
            },
            {
              question: 'What principle does composition support?',
              options: ['DRY only', 'Single Responsibility — each class has one job', 'Open/Closed only', 'None'],
              correct: 1
            },
            {
              question: 'How do you test components in composition?',
              options: ['You cannot test them', 'Each component can be tested independently', 'Only as a whole', 'Only with mocks'],
              correct: 1
            },
            {
              question: 'What pattern does "assembling a computer from CPU, RAM, Storage" demonstrate?',
              options: ['Inheritance', 'Composition — building complex objects from simpler parts', 'Polymorphism', 'Abstraction'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_delegation',
          title: 'Delegation Pattern',
          type: 'challenge',
          theory: `<h2>The Delegation Pattern</h2>
<p><strong>Delegation</strong> is when an object handles a request by passing it to another object (the delegate). Instead of doing everything itself, it forwards work to specialized helpers.</p>

<h3>Simple Delegation</h3>
<pre><code>class Printer:
    def print_document(self, doc):
        return f"Printing: {doc}"

class Scanner:
    def scan_document(self):
        return "Scanning document..."

class MultiFunctionDevice:
    def __init__(self):
        self._printer = Printer()
        self._scanner = Scanner()
    
    def print_doc(self, doc):
        return self._printer.print_document(doc)  # Delegate!
    
    def scan(self):
        return self._scanner.scan_document()  # Delegate!

mfd = MultiFunctionDevice()
print(mfd.print_doc("Report"))  # Printing: Report
print(mfd.scan())  # Scanning document...</code></pre>

<h3>Delegation with Strategy Selection</h3>
<pre><code>class ConsoleLogger:
    def log(self, message):
        return f"[CONSOLE] {message}"

class FileLogger:
    def log(self, message):
        return f"[FILE] {message}"

class Application:
    def __init__(self, logger):
        self._logger = logger
    
    def set_logger(self, logger):
        self._logger = logger
    
    def do_work(self, task):
        result = f"Completed: {task}"
        log_msg = self._logger.log(result)  # Delegate logging
        return log_msg

app = Application(ConsoleLogger())
print(app.do_work("task1"))  # [CONSOLE] Completed: task1

app.set_logger(FileLogger())
print(app.do_work("task2"))  # [FILE] Completed: task2</code></pre>

<h3>__getattr__ Delegation</h3>
<pre><code>class LazyWrapper:
    def __init__(self, wrapped):
        self._wrapped = wrapped
    
    def __getattr__(self, name):
        # Delegate any unknown attribute access to wrapped object
        return getattr(self._wrapped, name)

wrapped_list = LazyWrapper([1, 2, 3])
wrapped_list.append(4)  # Delegated to list.append!
print(wrapped_list._wrapped)  # [1, 2, 3, 4]</code></pre>`,
          challenge: {
            description: 'Create a Formatter class with method format(text) returning text.upper(). Create a Validator class with method validate(text) that returns True if len(text) > 0. Create a TextProcessor with __init__ taking formatter and validator. Add method process(text) that validates first (return "Invalid" if fails), then formats and returns. Test with "hello".',
            starterCode: `class Formatter:\n    def format(self, text):\n        return text.upper()\n\nclass Validator:\n    def validate(self, text):\n        return len(text) > 0\n\nclass TextProcessor:\n    def __init__(self, formatter, validator):\n        self.formatter = formatter\n        self.validator = validator\n    \n    def process(self, text):\n        if not self.validator.validate(text):\n            return "Invalid"\n        return self.formatter.format(text)\n\ntp = TextProcessor(Formatter(), Validator())\nprint(tp.process("hello"))\nprint(tp.process(""))`,
            expectedOutput: `HELLO\nInvalid`,
            hints: [
              'TextProcessor delegates validation to Validator',
              'TextProcessor delegates formatting to Formatter',
              '"hello" passes validation, then gets uppercased',
              '"" fails validation (length 0), returns "Invalid"'
            ]
          },
          quiz: [
            {
              question: 'What is delegation?',
              options: ['Inheritance', 'Forwarding a task to another object that specializes in it', 'Deleting objects', 'Creating copies'],
              correct: 1
            },
            {
              question: 'How is delegation different from inheritance?',
              options: ['They are the same', 'Delegation forwards to a contained object; inheritance reuses parent code directly', 'Delegation is slower', 'Inheritance is more flexible'],
              correct: 1
            },
            {
              question: 'What does __getattr__ enable for delegation?',
              options: ['Nothing', 'Automatic forwarding of any attribute access to a wrapped object', 'Creating new attributes', 'Deleting attributes'],
              correct: 1
            },
            {
              question: 'Can you change the delegate at runtime?',
              options: ['No', 'Yes, assign a new object — behavior changes dynamically', 'Only at creation', 'Only with inheritance'],
              correct: 1
            },
            {
              question: 'What is the benefit of delegating to a logger object?',
              options: ['Faster logging', 'You can swap logging strategy without changing the main class', 'Required by Python', 'Less code'],
              correct: 1
            },
            {
              question: 'A MultiFunctionDevice delegates to Printer and Scanner. What pattern is this?',
              options: ['Inheritance', 'Composition with delegation', 'Factory', 'Singleton'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_recap_computer_builder',
          title: 'Recap - Computer Builder',
          type: 'mastery',
          theory: `<h2>Recap: Computer Builder</h2>
<p>Let's use composition and delegation to build a configurable computer system with the Builder pattern.</p>

<h3>Implementation</h3>
<pre><code>class CPU:
    def __init__(self, model, cores, speed):
        self.model = model
        self.cores = cores
        self.speed = speed
    
    def __str__(self):
        return f"{self.model} ({self.cores} cores, {self.speed}GHz)"

class RAM:
    def __init__(self, size, speed):
        self.size = size
        self.speed = speed
    
    def __str__(self):
        return f"{self.size}GB DDR4 ({self.speed}MHz)"

class Disk:
    def __init__(self, size, disk_type):
        self.size = size
        self.disk_type = disk_type
    
    def __str__(self):
        return f"{self.size}GB {self.disk_type}"

class Computer:
    def __init__(self):
        self.cpu = None
        self.ram = None
        self.disk = None
    
    def __str__(self):
        parts = []
        if self.cpu: parts.append(f"  CPU: {self.cpu}")
        if self.ram: parts.append(f"  RAM: {self.ram}")
        if self.disk: parts.append(f"  Disk: {self.disk}")
        return "Computer:\n" + "\n".join(parts)

class ComputerBuilder:
    def __init__(self):
        self.computer = Computer()
    
    def set_cpu(self, model, cores, speed):
        self.computer.cpu = CPU(model, cores, speed)
        return self
    
    def set_ram(self, size, speed):
        self.computer.ram = RAM(size, speed)
        return self
    
    def set_disk(self, size, disk_type):
        self.computer.disk = Disk(size, disk_type)
        return self
    
    def build(self):
        return self.computer

# Builder pattern with method chaining
pc = (ComputerBuilder()
    .set_cpu("Intel i7", 8, 3.6)
    .set_ram(32, 3200)
    .set_disk(1000, "SSD")
    .build())

print(pc)</code></pre>`,
          challenge: {
            description: 'Create simple CPU(model), RAM(size_gb), and Storage(size_gb) classes each with __str__ returning their info. Create a ComputerBuilder with methods add_cpu(model), add_ram(size), add_storage(size) that return self for chaining. Add a build() method returning a summary string. Build a computer with CPU "i9", RAM 32, Storage 1000. Print the built result.',
            starterCode: `class CPU:\n    def __init__(self, model):\n        self.model = model\n    def __str__(self):\n        return f"CPU: {self.model}"\n\nclass RAM:\n    def __init__(self, size):\n        self.size = size\n    def __str__(self):\n        return f"RAM: {self.size}GB"\n\nclass Storage:\n    def __init__(self, size):\n        self.size = size\n    def __str__(self):\n        return f"Storage: {self.size}GB"\n\nclass ComputerBuilder:\n    def __init__(self):\n        self.parts = []\n    \n    def add_cpu(self, model):\n        self.parts.append(CPU(model))\n        return self\n    \n    def add_ram(self, size):\n        self.parts.append(RAM(size))\n        return self\n    \n    def add_storage(self, size):\n        self.parts.append(Storage(size))\n        return self\n    \n    def build(self):\n        return " | ".join(str(p) for p in self.parts)\n\nresult = ComputerBuilder().add_cpu("i9").add_ram(32).add_storage(1000).build()\nprint(result)`,
            expectedOutput: 'CPU: i9 | RAM: 32GB | Storage: 1000GB',
            hints: [
              'Each add method creates a component and returns self',
              'build() joins all parts with " | "',
              'Method chaining: .add_cpu().add_ram().add_storage().build()',
              'Each component has __str__ for formatting'
            ]
          },
          mastery: {
            description: 'Add validation to the builder: build() should raise ValueError if no CPU is added. Also add a method clone() that creates a new builder with the same parts, allowing modifications to the clone without affecting the original. Test by building, cloning, adding more RAM to clone, and printing both.',
            starterCode: `# Extend ComputerBuilder with validation and clone()`,
            expectedOutput: `CPU: i9 | RAM: 16GB\nCPU: i9 | RAM: 16GB | RAM: 32GB`,
            hints: [
              'clone: create new builder, copy parts list (use list() for shallow copy)',
              'Validate: check if any part is CPU instance',
              'The original is unchanged when clone is modified'
            ]
          },
          quiz: [
            {
              question: 'What is the Builder pattern?',
              options: ['A way to inherit classes', 'A pattern for constructing complex objects step by step', 'A type of loop', 'A Python module'],
              correct: 1
            },
            {
              question: 'Why return self from builder methods?',
              options: ['Required by Python', 'To enable method chaining: builder.step1().step2().build()', 'For memory management', 'To avoid errors'],
              correct: 1
            },
            {
              question: 'What role does composition play in the Builder pattern?',
              options: ['None', 'The built object is composed of multiple component objects', 'It replaces the builder', 'It provides inheritance'],
              correct: 1
            },
            {
              question: 'Can you build different configurations with the same builder class?',
              options: ['No, only one configuration', 'Yes, call different methods for different builds', 'Only with subclasses', 'Only with factories'],
              correct: 1
            },
            {
              question: 'What separates Builder from just using __init__ with many parameters?',
              options: ['Nothing', 'Builder allows step-by-step construction with optional parts and validation', 'Builder is slower', 'Builder uses less memory'],
              correct: 1
            },
            {
              question: 'How does delegation work in ComputerBuilder?',
              options: ['Builder inherits from Computer', 'Builder delegates __str__ formatting to each component', 'Components inherit from Builder', 'No delegation is used'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: 'oop_design_patterns',
      title: 'Design Patterns',
      lessons: [
        {
          id: 'oop_singleton',
          title: 'Singleton Pattern',
          type: 'challenge',
          theory: `<h2>Singleton Pattern</h2>
<p>The <strong>Singleton</strong> pattern ensures a class has only ONE instance. Think of it like there's only one President at a time — no matter how many times you ask "who's the president?", you get the same person.</p>

<h3>Why Singleton?</h3>
<ul>
<li>Database connection pool — one shared pool</li>
<li>Configuration manager — one set of settings</li>
<li>Logger — one log stream</li>
<li>Cache — one shared cache</li>
</ul>

<h3>Implementation with __new__</h3>
<pre><code>class Singleton:
    _instance = None
    
    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def __init__(self, value=None):
        if value is not None:
            self.value = value

s1 = Singleton("first")
s2 = Singleton("second")
print(s1 is s2)     # True — same object!
print(s1.value)     # second (overwritten by s2's __init__)
print(id(s1) == id(s2))  # True</code></pre>

<h3>Practical Singleton: Configuration Manager</h3>
<pre><code>class Config:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._settings = {}
        return cls._instance
    
    def set(self, key, value):
        self._settings[key] = value
    
    def get(self, key, default=None):
        return self._settings.get(key, default)

# Anywhere in your code:
config1 = Config()
config1.set("theme", "dark")

# Even in a different module:
config2 = Config()
print(config2.get("theme"))  # dark — same instance!
print(config1 is config2)    # True</code></pre>

<h3>Simpler Approach: Module-Level Singleton</h3>
<pre><code># settings.py
class _Config:
    def __init__(self):
        self.data = {}
    
    def set(self, key, value):
        self.data[key] = value
    
    def get(self, key):
        return self.data.get(key)

# Module-level instance — Python modules are singletons!
config = _Config()</code></pre>`,
          challenge: {
            description: 'Create a Logger singleton class. Use __new__ to ensure only one instance exists. Add method log(message) that appends to an internal _logs list. Add method get_logs() returning the list. Create two Logger instances, log "First" on one and "Second" on the other, then print get_logs() from either (should show both).',
            starterCode: `class Logger:\n    _instance = None\n    \n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n            cls._instance._logs = []\n        return cls._instance\n    \n    def log(self, message):\n        self._logs.append(message)\n    \n    def get_logs(self):\n        return self._logs\n\nlogger1 = Logger()\nlogger2 = Logger()\nlogger1.log("First")\nlogger2.log("Second")\nprint(logger1.get_logs())\nprint(logger1 is logger2)`,
            expectedOutput: `['First', 'Second']\nTrue`,
            hints: [
              '__new__ checks if _instance already exists',
              'Both logger1 and logger2 are the SAME object',
              'Logging on either one adds to the same _logs list',
              'The _logs list is initialized only once in __new__'
            ]
          },
          quiz: [
            {
              question: 'What does the Singleton pattern ensure?',
              options: ['Multiple instances', 'Only ONE instance of a class can exist', 'No instances can be created', 'Instances are immutable'],
              correct: 1
            },
            {
              question: 'What method controls instance creation in Python?',
              options: ['__init__', '__new__', '__create__', '__singleton__'],
              correct: 1
            },
            {
              question: 'What is a real-world use case for Singleton?',
              options: ['Creating many users', 'A shared configuration or database connection pool', 'Generating random numbers', 'Sorting lists'],
              correct: 1
            },
            {
              question: 'In a Singleton, what does s1 is s2 return?',
              options: ['False', 'True — they reference the same object', 'None', 'Error'],
              correct: 1
            },
            {
              question: 'What is the simplest Singleton in Python?',
              options: ['Using __new__', 'A module-level instance (modules are naturally singletons)', 'Using metaclasses', 'Using decorators'],
              correct: 1
            },
            {
              question: 'What is a potential downside of Singleton?',
              options: ['Uses too much memory', 'Global state that is hard to test and can cause hidden dependencies', 'Too slow', 'Python does not support it well'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_factory',
          title: 'Factory Pattern',
          type: 'challenge',
          theory: `<h2>Factory Pattern</h2>
<p>The <strong>Factory</strong> pattern creates objects without specifying the exact class. You tell the factory WHAT you want, and it figures out HOW to create it. Like ordering food at a restaurant — you say "burger" without knowing the kitchen details.</p>

<h3>Simple Factory</h3>
<pre><code>class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

class Bird:
    def speak(self):
        return "Tweet!"

class AnimalFactory:
    @staticmethod
    def create(animal_type):
        animals = {
            "dog": Dog,
            "cat": Cat,
            "bird": Bird
        }
        animal_class = animals.get(animal_type.lower())
        if animal_class is None:
            raise ValueError(f"Unknown animal: {animal_type}")
        return animal_class()

# Client code doesn't need to know about specific classes
animal = AnimalFactory.create("dog")
print(animal.speak())  # Woof!

animal = AnimalFactory.create("cat")
print(animal.speak())  # Meow!</code></pre>

<h3>Factory with Configuration</h3>
<pre><code>class DatabaseConnection:
    def __init__(self, host, port):
        self.host = host
        self.port = port
    
    def connect(self):
        return f"Connected to {self.host}:{self.port}"

class ConnectionFactory:
    _configs = {
        "postgres": ("localhost", 5432),
        "mysql": ("localhost", 3306),
        "redis": ("localhost", 6379)
    }
    
    @classmethod
    def create(cls, db_type):
        if db_type not in cls._configs:
            raise ValueError(f"Unknown database: {db_type}")
        host, port = cls._configs[db_type]
        return DatabaseConnection(host, port)

db = ConnectionFactory.create("postgres")
print(db.connect())  # Connected to localhost:5432</code></pre>

<h3>When to Use Factory</h3>
<ul>
<li>When the creation logic is complex</li>
<li>When you want to decouple creation from usage</li>
<li>When the exact type depends on runtime data</li>
<li>When you want to centralize object creation</li>
</ul>`,
          challenge: {
            description: 'Create classes Circle(radius) with area() and Rectangle(width, height) with area(). Create a ShapeFactory with a static method create(shape_type, **kwargs) that returns the appropriate shape. Use it to create a circle with radius=5 and rectangle with width=4, height=6. Print each area().',
            starterCode: `class Circle:\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self):\n        return round(3.14159 * self.radius ** 2, 2)\n\nclass Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    def area(self):\n        return self.width * self.height\n\nclass ShapeFactory:\n    @staticmethod\n    def create(shape_type, **kwargs):\n        if shape_type == "circle":\n            return Circle(kwargs["radius"])\n        elif shape_type == "rectangle":\n            return Rectangle(kwargs["width"], kwargs["height"])\n        raise ValueError(f"Unknown shape: {shape_type}")\n\nc = ShapeFactory.create("circle", radius=5)\nr = ShapeFactory.create("rectangle", width=4, height=6)\nprint(c.area())\nprint(r.area())`,
            expectedOutput: `78.54\n24`,
            hints: [
              'Factory decides which class to instantiate based on shape_type',
              '**kwargs passes named arguments to the constructor',
              'circle area: 3.14159 * 25 = 78.53975, rounded to 78.54',
              'rectangle area: 4 * 6 = 24'
            ]
          },
          quiz: [
            {
              question: 'What problem does the Factory pattern solve?',
              options: ['Making code faster', 'Decoupling object creation from usage — clients do not need to know exact classes', 'Preventing inheritance', 'Managing memory'],
              correct: 1
            },
            {
              question: 'What does a factory method typically return?',
              options: ['A string', 'An instance of one of several possible classes', 'None', 'A boolean'],
              correct: 1
            },
            {
              question: 'What happens when an unknown type is passed to the factory?',
              options: ['Returns None', 'Should raise a ValueError or similar exception', 'Creates a default object', 'Crashes Python'],
              correct: 1
            },
            {
              question: 'When should you use the Factory pattern?',
              options: ['Always', 'When object creation is complex or depends on runtime data', 'Never', 'Only for simple objects'],
              correct: 1
            },
            {
              question: 'Can a factory be a class method instead of a static method?',
              options: ['No', 'Yes — @classmethod factories are common for alternative constructors', 'Only in abstract classes', 'Only with decorators'],
              correct: 1
            },
            {
              question: 'How does Factory differ from directly calling constructors?',
              options: ['No difference', 'Factory centralizes and hides the creation logic', 'Factory is slower', 'Factory creates multiple objects'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_observer',
          title: 'Observer Pattern',
          type: 'challenge',
          theory: `<h2>Observer Pattern</h2>
<p>The <strong>Observer</strong> pattern lets objects (observers) subscribe to events from another object (subject). When the subject changes, all observers are notified automatically. Like a YouTube channel — subscribers get notified of new videos.</p>

<h3>Implementation</h3>
<pre><code>class EventSystem:
    def __init__(self):
        self._subscribers = {}
    
    def subscribe(self, event_type, callback):
        if event_type not in self._subscribers:
            self._subscribers[event_type] = []
        self._subscribers[event_type].append(callback)
    
    def unsubscribe(self, event_type, callback):
        if event_type in self._subscribers:
            self._subscribers[event_type].remove(callback)
    
    def notify(self, event_type, data=None):
        if event_type in self._subscribers:
            for callback in self._subscribers[event_type]:
                callback(data)

# Usage
def email_handler(data):
    print(f"Email: New order #{data}")

def sms_handler(data):
    print(f"SMS: Order #{data} confirmed")

events = EventSystem()
events.subscribe("new_order", email_handler)
events.subscribe("new_order", sms_handler)

events.notify("new_order", "12345")
# Email: New order #12345
# SMS: Order #12345 confirmed</code></pre>

<h3>Class-Based Observers</h3>
<pre><code>class Subject:
    def __init__(self):
        self._observers = []
    
    def attach(self, observer):
        self._observers.append(observer)
    
    def detach(self, observer):
        self._observers.remove(observer)
    
    def notify_all(self, message):
        for observer in self._observers:
            observer.update(message)

class EmailNotifier:
    def update(self, message):
        print(f"[Email] {message}")

class LogNotifier:
    def update(self, message):
        print(f"[Log] {message}")

subject = Subject()
subject.attach(EmailNotifier())
subject.attach(LogNotifier())
subject.notify_all("System update available")
# [Email] System update available
# [Log] System update available</code></pre>

<h3>Real-World Example: Stock Price</h3>
<pre><code>class Stock:
    def __init__(self, symbol, price):
        self.symbol = symbol
        self._price = price
        self._watchers = []
    
    def add_watcher(self, watcher):
        self._watchers.append(watcher)
    
    @property
    def price(self):
        return self._price
    
    @price.setter
    def price(self, new_price):
        old_price = self._price
        self._price = new_price
        for watcher in self._watchers:
            watcher.price_changed(self.symbol, old_price, new_price)</code></pre>`,
          challenge: {
            description: 'Create a NewsPublisher with methods subscribe(subscriber), unsubscribe(subscriber), and publish(news) that calls notify(news) on all subscribers. Create a class EmailSubscriber with __init__(name) and notify(news) printing "{name} received: {news}". Subscribe two people, publish "Breaking News!", then unsubscribe one and publish "Update!".',
            starterCode: `class NewsPublisher:\n    def __init__(self):\n        self._subscribers = []\n    \n    def subscribe(self, subscriber):\n        self._subscribers.append(subscriber)\n    \n    def unsubscribe(self, subscriber):\n        self._subscribers.remove(subscriber)\n    \n    def publish(self, news):\n        for sub in self._subscribers:\n            sub.notify(news)\n\nclass EmailSubscriber:\n    def __init__(self, name):\n        self.name = name\n    \n    def notify(self, news):\n        print(f"{self.name} received: {news}")\n\npub = NewsPublisher()\nalice = EmailSubscriber("Alice")\nbob = EmailSubscriber("Bob")\npub.subscribe(alice)\npub.subscribe(bob)\npub.publish("Breaking News!")\npub.unsubscribe(bob)\npub.publish("Update!")`,
            expectedOutput: `Alice received: Breaking News!\nBob received: Breaking News!\nAlice received: Update!`,
            hints: [
              'publish loops through _subscribers calling notify on each',
              'After unsubscribing Bob, only Alice gets "Update!"',
              'This is the Observer pattern — pub/sub',
              'Subscribers just need a notify() method (duck typing!)'
            ]
          },
          quiz: [
            {
              question: 'What is the Observer pattern?',
              options: ['Watching files change', 'A publish-subscribe system where subjects notify observers of changes', 'A debugging tool', 'A way to observe memory usage'],
              correct: 1
            },
            {
              question: 'What is the "subject" in the Observer pattern?',
              options: ['The observer', 'The object being watched that sends notifications', 'A database', 'A test subject'],
              correct: 1
            },
            {
              question: 'What method do observers typically implement?',
              options: ['observe()', 'update() or notify() — called when the subject changes', 'watch()', 'listen()'],
              correct: 1
            },
            {
              question: 'Can you add/remove observers at runtime?',
              options: ['No, fixed at creation', 'Yes, subscribe/unsubscribe dynamically', 'Only add', 'Only remove'],
              correct: 1
            },
            {
              question: 'What real-world system uses the Observer pattern?',
              options: ['Calculator', 'Event systems, GUI callbacks, pub/sub messaging', 'File I/O', 'Sorting algorithms'],
              correct: 1
            },
            {
              question: 'Does the subject need to know the specific type of its observers?',
              options: ['Yes, it must know all types', 'No — duck typing means any object with the right method works', 'Only abstract types', 'Only with isinstance checks'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_strategy',
          title: 'Strategy Pattern',
          type: 'challenge',
          theory: `<h2>Strategy Pattern</h2>
<p>The <strong>Strategy</strong> pattern lets you swap algorithms at runtime. Instead of hardcoding one approach, you inject different strategies. Like choosing between shipping methods — same package, different delivery speeds.</p>

<h3>Without Strategy (Bad)</h3>
<pre><code># Hardcoded — adding new sorting means modifying this class
class Sorter:
    def sort(self, data, method):
        if method == "bubble":
            # bubble sort...
            pass
        elif method == "quick":
            # quick sort...
            pass
        # Adding more means more elif...</code></pre>

<h3>With Strategy (Good)</h3>
<pre><code>class BubbleSort:
    def sort(self, data):
        arr = data.copy()
        for i in range(len(arr)):
            for j in range(len(arr) - 1):
                if arr[j] > arr[j+1]:
                    arr[j], arr[j+1] = arr[j+1], arr[j]
        return arr

class QuickSort:
    def sort(self, data):
        if len(data) <= 1:
            return data
        pivot = data[0]
        less = [x for x in data[1:] if x <= pivot]
        greater = [x for x in data[1:] if x > pivot]
        return self.sort(less) + [pivot] + self.sort(greater)

class ReverseSort:
    def sort(self, data):
        return sorted(data, reverse=True)

class DataProcessor:
    def __init__(self, strategy):
        self._strategy = strategy
    
    def set_strategy(self, strategy):
        self._strategy = strategy
    
    def process(self, data):
        return self._strategy.sort(data)

# Swap strategies at runtime!
processor = DataProcessor(BubbleSort())
print(processor.process([3, 1, 4, 1, 5]))  # [1, 1, 3, 4, 5]

processor.set_strategy(ReverseSort())
print(processor.process([3, 1, 4, 1, 5]))  # [5, 4, 3, 1, 1]</code></pre>

<h3>Strategy with Functions</h3>
<pre><code>class Discount:
    def __init__(self, strategy):
        self.calculate = strategy

def no_discount(price):
    return price

def ten_percent(price):
    return price * 0.9

def fixed_20(price):
    return price - 20

cart = Discount(ten_percent)
print(cart.calculate(100))  # 90.0

cart.calculate = fixed_20
print(cart.calculate(100))  # 80</code></pre>`,
          challenge: {
            description: 'Create strategy classes: UpperCase with method transform(text) returning text.upper(), LowerCase returning text.lower(), TitleCase returning text.title(). Create TextFormatter with __init__(strategy) and format(text) delegating to strategy.transform(). Test all three strategies with "hello world".',
            starterCode: `class UpperCase:\n    def transform(self, text):\n        return text.upper()\n\nclass LowerCase:\n    def transform(self, text):\n        return text.lower()\n\nclass TitleCase:\n    def transform(self, text):\n        return text.title()\n\nclass TextFormatter:\n    def __init__(self, strategy):\n        self.strategy = strategy\n    \n    def format(self, text):\n        return self.strategy.transform(text)\n\nfmt = TextFormatter(UpperCase())\nprint(fmt.format("hello world"))\nfmt.strategy = LowerCase()\nprint(fmt.format("HELLO WORLD"))\nfmt.strategy = TitleCase()\nprint(fmt.format("hello world"))`,
            expectedOutput: `HELLO WORLD\nhello world\nHello World`,
            hints: [
              'Each strategy class implements transform() differently',
              'TextFormatter delegates to self.strategy.transform()',
              'You can swap strategy at runtime by reassigning',
              'This is the Strategy pattern — same interface, different algorithms'
            ]
          },
          quiz: [
            {
              question: 'What is the Strategy pattern?',
              options: ['A game strategy', 'Defining interchangeable algorithms and letting the client swap them', 'A sorting algorithm', 'A way to create objects'],
              correct: 1
            },
            {
              question: 'How do you swap strategies at runtime?',
              options: ['Create a new class', 'Assign a different strategy object to the context', 'Restart the program', 'Use inheritance'],
              correct: 1
            },
            {
              question: 'What must all strategy classes have in common?',
              options: ['The same __init__', 'The same interface (method name and signature)', 'The same parent class', 'The same attributes'],
              correct: 1
            },
            {
              question: 'How is Strategy different from simply using if/elif?',
              options: ['No difference', 'Strategy is extensible — add new strategies without modifying existing code', 'Strategy is slower', 'if/elif is not allowed in OOP'],
              correct: 1
            },
            {
              question: 'Can Python functions be used as strategies?',
              options: ['No, must be classes', 'Yes — functions are first-class objects and work as strategies', 'Only with decorators', 'Only lambda functions'],
              correct: 1
            },
            {
              question: 'What OOP principle does Strategy demonstrate?',
              options: ['Inheritance', 'Composition over inheritance — inject behavior rather than inherit it', 'Encapsulation only', 'Abstraction only'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_recap_plugin_system',
          title: 'Recap - Plugin System',
          type: 'mastery',
          theory: `<h2>Recap: Plugin System</h2>
<p>Let's combine multiple design patterns (Factory, Observer, Strategy) to build a plugin system — a common architecture in real applications.</p>

<h3>Plugin Architecture</h3>
<pre><code>class PluginRegistry:
    """Factory + Registry pattern"""
    _plugins = {}
    
    @classmethod
    def register(cls, name, plugin_class):
        cls._plugins[name] = plugin_class
    
    @classmethod
    def create(cls, name, *args, **kwargs):
        if name not in cls._plugins:
            raise ValueError(f"Unknown plugin: {name}")
        return cls._plugins[name](*args, **kwargs)
    
    @classmethod
    def list_plugins(cls):
        return list(cls._plugins.keys())

class Plugin:
    """Base plugin interface"""
    def execute(self, data):
        raise NotImplementedError

class UpperPlugin(Plugin):
    def execute(self, data):
        return data.upper()

class ReversePlugin(Plugin):
    def execute(self, data):
        return data[::-1]

class RepeatPlugin(Plugin):
    def __init__(self, times=2):
        self.times = times
    
    def execute(self, data):
        return data * self.times

# Register plugins
PluginRegistry.register("upper", UpperPlugin)
PluginRegistry.register("reverse", ReversePlugin)
PluginRegistry.register("repeat", RepeatPlugin)

# Pipeline: chain plugins
class Pipeline:
    def __init__(self):
        self.steps = []
    
    def add(self, plugin_name, **kwargs):
        plugin = PluginRegistry.create(plugin_name, **kwargs)
        self.steps.append(plugin)
        return self
    
    def run(self, data):
        result = data
        for step in self.steps:
            result = step.execute(result)
        return result

pipe = Pipeline()
pipe.add("upper").add("repeat", times=2)
print(pipe.run("hello"))  # HELLOHELLO</code></pre>`,
          challenge: {
            description: 'Create a PluginManager with register(name, plugin_class) and run(name, data) methods. Create plugins: DoublePlugin with execute(data) returning data*2, and ShoutPlugin with execute(data) returning data + "!!!". Register both, then run "double" with "ha" and run "shout" with "hello". Print results.',
            starterCode: `class PluginManager:\n    def __init__(self):\n        self._plugins = {}\n    \n    def register(self, name, plugin_class):\n        self._plugins[name] = plugin_class\n    \n    def run(self, name, data):\n        if name not in self._plugins:\n            return "Plugin not found"\n        plugin = self._plugins[name]()\n        return plugin.execute(data)\n\nclass DoublePlugin:\n    def execute(self, data):\n        return data * 2\n\nclass ShoutPlugin:\n    def execute(self, data):\n        return data + "!!!"\n\npm = PluginManager()\npm.register("double", DoublePlugin)\npm.register("shout", ShoutPlugin)\nprint(pm.run("double", "ha"))\nprint(pm.run("shout", "hello"))`,
            expectedOutput: `haha\nhello!!!`,
            hints: [
              'register stores the class (not instance) in the dict',
              'run creates an instance and calls execute(data)',
              '"ha" * 2 = "haha"',
              '"hello" + "!!!" = "hello!!!"'
            ]
          },
          mastery: {
            description: 'Add a Pipeline class that chains multiple plugins. Add method pipe(name) that adds a plugin name to the chain (return self). Add method execute(data) that runs data through all plugins in order. Create pipeline: pipe("upper").pipe("double"). Run with "hi". Expected: "HIHI".',
            starterCode: `# Add Pipeline class to the plugin system`,
            expectedOutput: `HIHI`,
            hints: [
              'Pipeline stores plugin names in a list',
              'execute loops through names, running each plugin on the result',
              '"hi" -> upper -> "HI" -> double -> "HIHI"'
            ]
          },
          quiz: [
            {
              question: 'What is a plugin system?',
              options: ['A type of database', 'Architecture where functionality can be added/removed without changing core code', 'A Python package manager', 'A testing framework'],
              correct: 1
            },
            {
              question: 'Which pattern does plugin registration use?',
              options: ['Observer', 'Factory/Registry — mapping names to classes', 'Singleton', 'Strategy only'],
              correct: 1
            },
            {
              question: 'What interface must all plugins share?',
              options: ['__init__ only', 'A common method (like execute) that the system calls', 'The same parent class', 'The same attributes'],
              correct: 1
            },
            {
              question: 'How does a pipeline work?',
              options: ['Runs all plugins in parallel', 'Passes data through plugins sequentially — output of one becomes input of next', 'Picks the best plugin', 'Runs only the last plugin'],
              correct: 1
            },
            {
              question: 'What design patterns combine in this plugin system?',
              options: ['Only Singleton', 'Factory (creation), Strategy (swappable behavior), and optionally Observer (events)', 'Only inheritance', 'Only composition'],
              correct: 1
            },
            {
              question: 'Can new plugins be added without modifying the PluginManager?',
              options: ['No, must edit the manager', 'Yes — just create a class with execute() and register it', 'Only by subclassing', 'Only with decorators'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: 'oop_project',
      title: 'Library Management System PROJECT',
      lessons: [
        {
          id: 'oop_project_overview',
          title: 'Project Overview',
          type: 'project',
          theory: `<h2>Project: Library Management System</h2>
<p>We'll build a complete Library Management System using all OOP concepts learned so far. This is a real-world project that combines classes, inheritance, composition, encapsulation, and design patterns.</p>

<h3>System Requirements</h3>
<ul>
<li>Track books with title, author, ISBN, and availability</li>
<li>Manage library members with membership IDs</li>
<li>Handle borrowing and returning books</li>
<li>Search books by title, author, or ISBN</li>
<li>Track borrowing history</li>
</ul>

<h3>Architecture</h3>
<pre><code>Classes:
├── Book — represents a single book
├── Member — represents a library member  
├── Library — main system (composition of books and members)
├── BorrowRecord — tracks a single borrow event
└── SearchEngine — search/filter functionality</code></pre>

<h3>Design Principles Applied</h3>
<ul>
<li><strong>Encapsulation:</strong> Private book availability, member borrow limits</li>
<li><strong>Composition:</strong> Library HAS books and members</li>
<li><strong>Properties:</strong> Controlled access to sensitive data</li>
<li><strong>Magic methods:</strong> __str__, __repr__, __len__ for nice interfaces</li>
</ul>

<p>We'll build this step by step over the next 6 lessons. Each lesson adds a component, and by the end, you'll have a fully working system!</p>`,
          challenge: {
            description: 'Start by creating a simple Book class with __init__(title, author, isbn). Add a __str__ method returning "{title} by {author} (ISBN: {isbn})" and a __repr__ returning "Book('{title}', '{author}', '{isbn}')". Create two books and print them.',
            starterCode: `class Book:\n    def __init__(self, title, author, isbn):\n        self.title = title\n        self.author = author\n        self.isbn = isbn\n    \n    def __str__(self):\n        return f"{self.title} by {self.author} (ISBN: {self.isbn})"\n    \n    def __repr__(self):\n        return f"Book('{self.title}', '{self.author}', '{self.isbn}')"\n\nb1 = Book("Python 101", "Mike", "111")\nb2 = Book("OOP Guide", "Sara", "222")\nprint(b1)\nprint(b2)`,
            expectedOutput: `Python 101 by Mike (ISBN: 111)\nOOP Guide by Sara (ISBN: 222)`,
            hints: [
              '__str__ provides human-readable format',
              '__repr__ provides developer-friendly format',
              'This is the foundation — we will expand Book in the next lesson',
              'ISBN is stored as a string'
            ]
          },
          quiz: [
            {
              question: 'What design principle suggests Library HAS Books rather than Library IS-A Book?',
              options: ['Inheritance', 'Composition', 'Polymorphism', 'Abstraction'],
              correct: 1
            },
            {
              question: 'Why use a separate BorrowRecord class instead of storing borrow info directly in Book?',
              options: ['Performance', 'Single Responsibility — each class has one purpose', 'Python requires it', 'It is simpler'],
              correct: 1
            },
            {
              question: 'What OOP concept protects book availability from invalid direct changes?',
              options: ['Inheritance', 'Encapsulation', 'Polymorphism', 'Composition'],
              correct: 1
            },
            {
              question: 'Why implement __str__ on Book?',
              options: ['Required by Python', 'So print(book) shows useful info instead of a memory address', 'For performance', 'To enable sorting'],
              correct: 1
            },
            {
              question: 'What pattern would we use if there should be only one Library instance?',
              options: ['Factory', 'Singleton', 'Observer', 'Strategy'],
              correct: 1
            },
            {
              question: 'Which relationship describes "Library contains many Books"?',
              options: ['IS-A', 'HAS-A (composition/aggregation)', 'Both', 'Neither'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_project_book',
          title: 'Book Class',
          type: 'project',
          theory: `<h2>Building the Book Class</h2>
<p>Let's build a full-featured Book class with encapsulation, properties, and status tracking.</p>

<h3>Complete Book Implementation</h3>
<pre><code>class Book:
    def __init__(self, title, author, isbn, copies=1):
        self._title = title
        self._author = author
        self._isbn = isbn
        self._total_copies = copies
        self._available_copies = copies
    
    @property
    def title(self):
        return self._title
    
    @property
    def author(self):
        return self._author
    
    @property
    def isbn(self):
        return self._isbn
    
    @property
    def available(self):
        return self._available_copies > 0
    
    @property
    def available_copies(self):
        return self._available_copies
    
    def borrow(self):
        if self._available_copies <= 0:
            return False
        self._available_copies -= 1
        return True
    
    def return_book(self):
        if self._available_copies >= self._total_copies:
            return False
        self._available_copies += 1
        return True
    
    def __str__(self):
        status = "Available" if self.available else "All copies borrowed"
        return f"'{self._title}' by {self._author} [{status}]"
    
    def __repr__(self):
        return f"Book('{self._title}', '{self._author}', '{self._isbn}', {self._total_copies})"
    
    def __eq__(self, other):
        if not isinstance(other, Book):
            return NotImplemented
        return self._isbn == other._isbn</code></pre>

<h3>Key Design Decisions</h3>
<ul>
<li>Properties make title, author, isbn read-only</li>
<li>available is computed — no way to set it incorrectly</li>
<li>borrow/return_book have validation</li>
<li>Books are equal if they have the same ISBN</li>
</ul>`,
          challenge: {
            description: 'Create the Book class with title, author, isbn, copies=1. Add read-only properties for title and author. Add property available returning True if available_copies > 0. Add borrow() method that decreases copies (returns False if none available). Add return_book() method. Create a Book with 2 copies, borrow twice, try third borrow, print results.',
            starterCode: `class Book:\n    def __init__(self, title, author, isbn, copies=1):\n        self._title = title\n        self._author = author\n        self._isbn = isbn\n        self._total_copies = copies\n        self._available_copies = copies\n    \n    @property\n    def title(self):\n        return self._title\n    \n    @property\n    def available(self):\n        return self._available_copies > 0\n    \n    def borrow(self):\n        if self._available_copies <= 0:\n            return False\n        self._available_copies -= 1\n        return True\n    \n    def return_book(self):\n        if self._available_copies >= self._total_copies:\n            return False\n        self._available_copies += 1\n        return True\n\nb = Book("Python", "Author", "123", 2)\nprint(b.borrow())\nprint(b.borrow())\nprint(b.borrow())\nprint(b.available)`,
            expectedOutput: `True\nTrue\nFalse\nFalse`,
            hints: [
              'First two borrows succeed (2 copies available)',
              'Third borrow fails (0 copies left)',
              'available returns False when _available_copies is 0',
              'borrow returns False without modifying if no copies available'
            ]
          },
          quiz: [
            {
              question: 'Why is available a computed property rather than a stored boolean?',
              options: ['Performance', 'It automatically stays correct based on actual copies count', 'Python requires it', 'It uses less memory'],
              correct: 1
            },
            {
              question: 'Why does borrow() return True/False instead of raising an exception?',
              options: ['Exceptions are wrong here', 'Not having copies is a normal case (not exceptional), so a boolean is cleaner', 'Python cannot raise in methods', 'Both work but bool is conventional for this case'],
              correct: 3
            },
            {
              question: 'What does __eq__ based on ISBN mean?',
              options: ['Books with same title are equal', 'Two Book objects are equal if they represent the same book (same ISBN)', 'All books are equal', 'ISBN must be unique per copy'],
              correct: 1
            },
            {
              question: 'Why make title and author read-only?',
              options: ['To save memory', 'Book metadata should not change after creation', 'Python requires it', 'For performance'],
              correct: 1
            },
            {
              question: 'What prevents available_copies from going negative?',
              options: ['Python type system', 'The check in borrow(): returns False if <= 0', 'Properties prevent it', 'It cannot go negative by default'],
              correct: 1
            },
            {
              question: 'What prevents available_copies from exceeding total_copies?',
              options: ['Nothing', 'The check in return_book(): returns False if at max', 'A setter', 'Python limits'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_project_member',
          title: 'Member Class',
          type: 'project',
          theory: `<h2>Building the Member Class</h2>
<p>Members can borrow books up to a limit and maintain a borrowing history.</p>

<h3>Implementation</h3>
<pre><code>class Member:
    _next_id = 1
    MAX_BORROWS = 5
    
    def __init__(self, name, email):
        self._id = Member._next_id
        Member._next_id += 1
        self._name = name
        self._email = email
        self._borrowed_books = []
        self._history = []
    
    @property
    def id(self):
        return self._id
    
    @property
    def name(self):
        return self._name
    
    @property
    def borrowed_count(self):
        return len(self._borrowed_books)
    
    @property
    def can_borrow(self):
        return self.borrowed_count < Member.MAX_BORROWS
    
    def borrow_book(self, book):
        if not self.can_borrow:
            return f"{self._name} has reached borrow limit"
        if not book.borrow():
            return f"'{book.title}' is not available"
        self._borrowed_books.append(book)
        self._history.append(f"Borrowed: {book.title}")
        return f"{self._name} borrowed '{book.title}'"
    
    def return_book(self, book):
        if book not in self._borrowed_books:
            return f"{self._name} hasn't borrowed '{book.title}'"
        book.return_book()
        self._borrowed_books.remove(book)
        self._history.append(f"Returned: {book.title}")
        return f"{self._name} returned '{book.title}'"
    
    def __str__(self):
        return f"Member #{self._id}: {self._name} ({self.borrowed_count} books)"
    
    def __repr__(self):
        return f"Member('{self._name}', '{self._email}')"</code></pre>`,
          challenge: {
            description: 'Create a Member class with a class variable _next_id starting at 1 (auto-increment in __init__) and MAX_BORROWS = 3. Add properties: id, name, can_borrow (True if borrowed less than MAX). Add borrow_book(book_title) that appends to _borrowed list if can_borrow. Create member "Alice", borrow "Book1" and "Book2", print can_borrow and borrowed count.',
            starterCode: `class Member:\n    _next_id = 1\n    MAX_BORROWS = 3\n    \n    def __init__(self, name):\n        self._id = Member._next_id\n        Member._next_id += 1\n        self._name = name\n        self._borrowed = []\n    \n    @property\n    def id(self):\n        return self._id\n    \n    @property\n    def name(self):\n        return self._name\n    \n    @property\n    def can_borrow(self):\n        return len(self._borrowed) < Member.MAX_BORROWS\n    \n    def borrow_book(self, book_title):\n        if not self.can_borrow:\n            return "Limit reached"\n        self._borrowed.append(book_title)\n        return f"Borrowed {book_title}"\n    \n    def __str__(self):\n        return f"Member #{self._id}: {self._name}"\n\nm = Member("Alice")\nprint(m.borrow_book("Book1"))\nprint(m.borrow_book("Book2"))\nprint(m.can_borrow)\nprint(len(m._borrowed))`,
            expectedOutput: `Borrowed Book1\nBorrowed Book2\nTrue\n2`,
            hints: [
              '_next_id increments in __init__ for auto-ID',
              'can_borrow checks len(_borrowed) < MAX_BORROWS',
              '2 books borrowed, MAX is 3, so can still borrow',
              'borrow_book appends to _borrowed list'
            ]
          },
          quiz: [
            {
              question: 'Why use a class variable _next_id for auto-incrementing IDs?',
              options: ['Instance variables reset each time', 'Class variable is shared — ensures unique IDs across all instances', 'Python requires class variables for IDs', 'It is faster'],
              correct: 1
            },
            {
              question: 'What does MAX_BORROWS as a class variable allow?',
              options: ['Each instance has a different limit', 'One centralized limit that applies to all members uniformly', 'Nothing special', 'It cannot be changed'],
              correct: 1
            },
            {
              question: 'Why is can_borrow a property instead of a method like check_can_borrow()?',
              options: ['Properties are faster', 'It reads naturally: if member.can_borrow (not member.check_can_borrow())', 'Python requires it', 'No difference'],
              correct: 1
            },
            {
              question: 'What happens when a member tries to borrow beyond MAX_BORROWS?',
              options: ['Crashes', 'borrow_book returns an error message without adding the book', 'The book is added anyway', 'MAX_BORROWS increases'],
              correct: 1
            },
            {
              question: 'Why track borrowed books in a list?',
              options: ['Lists are fast', 'To know what each member has, enable returns, and enforce limits', 'Python requires lists', 'For display only'],
              correct: 1
            },
            {
              question: 'How does auto-ID work across multiple Member instances?',
              options: ['Each gets ID 1', 'Class variable persists — first member gets 1, second gets 2, etc.', 'IDs are random', 'You must set them manually'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_project_library',
          title: 'Library Class',
          type: 'project',
          theory: `<h2>Building the Library Class</h2>
<p>The Library class is the central coordinator — it uses composition to manage books and members, and delegates operations to them.</p>

<h3>Implementation</h3>
<pre><code>class Library:
    def __init__(self, name):
        self._name = name
        self._books = []      # Composition: HAS books
        self._members = []    # Composition: HAS members
    
    @property
    def name(self):
        return self._name
    
    def add_book(self, book):
        self._books.append(book)
        return f"Added '{book.title}' to {self._name}"
    
    def register_member(self, member):
        self._members.append(member)
        return f"Registered {member.name}"
    
    def find_book(self, title):
        for book in self._books:
            if book.title.lower() == title.lower():
                return book
        return None
    
    def find_member(self, name):
        for member in self._members:
            if member.name.lower() == name.lower():
                return member
        return None
    
    @property
    def total_books(self):
        return len(self._books)
    
    @property
    def total_members(self):
        return len(self._members)
    
    def __str__(self):
        return f"{self._name}: {self.total_books} books, {self.total_members} members"
    
    def __len__(self):
        return self.total_books</code></pre>`,
          challenge: {
            description: 'Create a Library class with __init__(name), internal _books list. Add methods: add_book(title) appends to list and returns "Added: {title}". find_book(title) returns the title if found or "Not found". Implement __len__ returning book count. Add 3 books, print len, find one that exists and one that does not.',
            starterCode: `class Library:\n    def __init__(self, name):\n        self._name = name\n        self._books = []\n    \n    def add_book(self, title):\n        self._books.append(title)\n        return f"Added: {title}"\n    \n    def find_book(self, title):\n        if title in self._books:\n            return title\n        return "Not found"\n    \n    def __len__(self):\n        return len(self._books)\n\nlib = Library("City Library")\nprint(lib.add_book("Python 101"))\nprint(lib.add_book("OOP Guide"))\nprint(lib.add_book("Data Science"))\nprint(len(lib))\nprint(lib.find_book("OOP Guide"))\nprint(lib.find_book("Missing Book"))`,
            expectedOutput: `Added: Python 101\nAdded: OOP Guide\nAdded: Data Science\n3\nOOP Guide\nNot found`,
            hints: [
              'add_book appends to self._books',
              'find_book checks if title is in self._books',
              '__len__ returns len(self._books)',
              'Library uses composition — it HAS a list of books'
            ]
          },
          quiz: [
            {
              question: 'What relationship does Library have with Books?',
              options: ['IS-A', 'HAS-A (composition)', 'Extends', 'None'],
              correct: 1
            },
            {
              question: 'What does __len__ on Library enable?',
              options: ['Counting methods', 'len(library) returns the book count', 'Measuring string length', 'Nothing special'],
              correct: 1
            },
            {
              question: 'Why is the Library class the coordinator?',
              options: ['It is the largest class', 'It manages the interaction between books and members', 'Python requires a main class', 'It inherits from everything'],
              correct: 1
            },
            {
              question: 'What pattern does Library.find_book() implement?',
              options: ['Observer', 'A simple search/query operation', 'Singleton', 'Factory'],
              correct: 1
            },
            {
              question: 'Why store books in a list rather than a dictionary?',
              options: ['Lists are always better', 'Depends — lists work for small collections; dicts are better for lookup by key (ISBN)', 'Dictionaries cannot store objects', 'Python requires lists'],
              correct: 1
            },
            {
              question: 'What OOP concept makes Library._books inaccessible directly from outside?',
              options: ['Inheritance', 'Encapsulation (underscore convention)', 'Polymorphism', 'Abstraction'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_project_borrowing',
          title: 'Borrowing System',
          type: 'project',
          theory: `<h2>Building the Borrowing System</h2>
<p>The borrowing system connects members with books and tracks all transactions.</p>

<h3>BorrowRecord Class</h3>
<pre><code>from datetime import datetime

class BorrowRecord:
    def __init__(self, member_name, book_title):
        self.member_name = member_name
        self.book_title = book_title
        self.borrow_date = datetime.now().strftime("%Y-%m-%d")
        self.return_date = None
    
    @property
    def is_returned(self):
        return self.return_date is not None
    
    def mark_returned(self):
        self.return_date = datetime.now().strftime("%Y-%m-%d")
    
    def __str__(self):
        status = f"returned {self.return_date}" if self.is_returned else "active"
        return f"{self.member_name} -> '{self.book_title}' ({status})"</code></pre>

<h3>Integrating into Library</h3>
<pre><code>class Library:
    def __init__(self, name):
        self._name = name
        self._books = {}  # isbn -> Book
        self._members = {}  # id -> Member
        self._records = []
    
    def borrow_book(self, member_id, isbn):
        member = self._members.get(member_id)
        book = self._books.get(isbn)
        
        if not member:
            return "Member not found"
        if not book:
            return "Book not found"
        if not book.available:
            return f"'{book.title}' is not available"
        if not member.can_borrow:
            return f"{member.name} has reached borrow limit"
        
        book.borrow()
        member.borrow_book(book)
        record = BorrowRecord(member.name, book.title)
        self._records.append(record)
        return f"{member.name} borrowed '{book.title}'"</code></pre>`,
          challenge: {
            description: 'Create a simple BorrowSystem class that tracks borrows. It has _records (list of dicts). Method borrow(member, book) appends {"member": member, "book": book, "returned": False} and returns "{member} borrowed {book}". Method return_book(member, book) finds the record and sets returned to True. Method active_borrows() returns count of non-returned records. Test it.',
            starterCode: `class BorrowSystem:\n    def __init__(self):\n        self._records = []\n    \n    def borrow(self, member, book):\n        self._records.append({"member": member, "book": book, "returned": False})\n        return f"{member} borrowed {book}"\n    \n    def return_book(self, member, book):\n        for record in self._records:\n            if record["member"] == member and record["book"] == book and not record["returned"]:\n                record["returned"] = True\n                return f"{member} returned {book}"\n        return "Record not found"\n    \n    def active_borrows(self):\n        return sum(1 for r in self._records if not r["returned"])\n\nbs = BorrowSystem()\nprint(bs.borrow("Alice", "Python 101"))\nprint(bs.borrow("Bob", "OOP Guide"))\nprint(bs.active_borrows())\nprint(bs.return_book("Alice", "Python 101"))\nprint(bs.active_borrows())`,
            expectedOutput: `Alice borrowed Python 101\nBob borrowed OOP Guide\n2\nAlice returned Python 101\n1`,
            hints: [
              'borrow appends a new record dict',
              'return_book finds matching active record and sets returned=True',
              'active_borrows counts records where returned is False',
              'After Alice returns, only Bob active borrow remains'
            ]
          },
          quiz: [
            {
              question: 'Why create a separate BorrowRecord/system instead of tracking in Book?',
              options: ['Performance', 'Separation of concerns — borrowing logic is separate from book data', 'Python requires it', 'Books cannot store data'],
              correct: 1
            },
            {
              question: 'What validation should happen before a borrow?',
              options: ['None needed', 'Check: book exists, book available, member exists, member under limit', 'Only check book exists', 'Only check member exists'],
              correct: 1
            },
            {
              question: 'What does active_borrows() count?',
              options: ['All records ever', 'Only records where returned is False (still borrowed)', 'Only returned records', 'Members count'],
              correct: 1
            },
            {
              question: 'Why search for matching record in return_book instead of popping?',
              options: ['Performance', 'We want to keep the record for history — just mark it returned', 'Python does not support pop', 'Popping would crash'],
              correct: 1
            },
            {
              question: 'What pattern does BorrowSystem use?',
              options: ['Singleton', 'A form of the Repository pattern — managing records', 'Factory', 'Observer'],
              correct: 1
            },
            {
              question: 'How does this connect Member and Book?',
              options: ['Through inheritance', 'Through a record that references both (composition/association)', 'They are the same class', 'Through global variables'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_project_search',
          title: 'Search and Filter',
          type: 'project',
          theory: `<h2>Search and Filter System</h2>
<p>Let's add powerful search capabilities using the Strategy pattern for different search methods.</p>

<h3>Search Engine</h3>
<pre><code>class SearchEngine:
    def __init__(self, books):
        self._books = books
    
    def by_title(self, query):
        query = query.lower()
        return [b for b in self._books if query in b.title.lower()]
    
    def by_author(self, query):
        query = query.lower()
        return [b for b in self._books if query in b.author.lower()]
    
    def available_only(self):
        return [b for b in self._books if b.available]
    
    def search(self, query, field="title"):
        query = query.lower()
        results = []
        for book in self._books:
            if field == "title" and query in book.title.lower():
                results.append(book)
            elif field == "author" and query in book.author.lower():
                results.append(book)
            elif field == "isbn" and query in book.isbn:
                results.append(book)
        return results</code></pre>

<h3>Filter Chains</h3>
<pre><code>class BookFilter:
    @staticmethod
    def by_availability(books, available=True):
        return [b for b in books if b.available == available]
    
    @staticmethod
    def by_author(books, author):
        return [b for b in books if author.lower() in b.author.lower()]
    
    @staticmethod
    def sort_by_title(books):
        return sorted(books, key=lambda b: b.title)

# Chain filters:
results = BookFilter.by_availability(all_books, True)
results = BookFilter.by_author(results, "Python")
results = BookFilter.sort_by_title(results)</code></pre>`,
          challenge: {
            description: 'Create a SearchEngine class that takes a list of book dicts [{"title": ..., "author": ...}] in __init__. Add search_by_title(query) returning books where query (case-insensitive) is in the title. Add search_by_author(query) similarly. Test with 3 books, search for title "python" and author "smith".',
            starterCode: `class SearchEngine:\n    def __init__(self, books):\n        self._books = books\n    \n    def search_by_title(self, query):\n        query = query.lower()\n        return [b for b in self._books if query in b["title"].lower()]\n    \n    def search_by_author(self, query):\n        query = query.lower()\n        return [b for b in self._books if query in b["author"].lower()]\n\nbooks = [\n    {"title": "Python Basics", "author": "John Smith"},\n    {"title": "Advanced Python", "author": "Jane Doe"},\n    {"title": "OOP Guide", "author": "Bob Smith"}\n]\n\nse = SearchEngine(books)\nresults = se.search_by_title("python")\nprint(len(results))\nprint(results[0]["title"])\nresults2 = se.search_by_author("smith")\nprint(len(results2))`,
            expectedOutput: `2\nPython Basics\n2`,
            hints: [
              'search_by_title finds books where query is in title (case-insensitive)',
              '"python" matches "Python Basics" and "Advanced Python"',
              '"smith" matches "John Smith" and "Bob Smith"',
              'Use list comprehension with "in" for partial matching'
            ]
          },
          quiz: [
            {
              question: 'Why use case-insensitive search?',
              options: ['Faster', 'Users should not need to know exact capitalization', 'Python requires it', 'It uses less memory'],
              correct: 1
            },
            {
              question: 'What pattern does having different search methods (by_title, by_author) resemble?',
              options: ['Singleton', 'Strategy — different algorithms for the same purpose', 'Factory', 'Observer'],
              correct: 1
            },
            {
              question: 'Why return a list of results instead of a single book?',
              options: ['Lists are faster', 'Searches often match multiple items', 'Python requires lists', 'For sorting'],
              correct: 1
            },
            {
              question: 'What does "query in b.title.lower()" check?',
              options: ['Exact match', 'Whether query is a substring of the title', 'Length comparison', 'Type match'],
              correct: 1
            },
            {
              question: 'How can you chain filters?',
              options: ['You cannot', 'Pass the result of one filter as input to the next', 'Using special syntax', 'Only with decorators'],
              correct: 1
            },
            {
              question: 'What is the advantage of a SearchEngine class over search functions?',
              options: ['Speed', 'Encapsulates the book collection and provides organized search interface', 'Less code', 'Required for OOP'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_project_complete',
          title: 'Complete System',
          type: 'project',
          theory: `<h2>Complete Library Management System</h2>
<p>Let's bring everything together into a working system.</p>

<h3>Full Integration</h3>
<pre><code>class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.available = True
    
    def __str__(self):
        status = "Available" if self.available else "Borrowed"
        return f"{self.title} by {self.author} [{status}]"

class Member:
    def __init__(self, name):
        self.name = name
        self.borrowed = []

class Library:
    def __init__(self, name):
        self.name = name
        self.books = []
        self.members = []
        self.records = []
    
    def add_book(self, title, author, isbn):
        book = Book(title, author, isbn)
        self.books.append(book)
        return f"Added: {title}"
    
    def register(self, name):
        member = Member(name)
        self.members.append(member)
        return f"Registered: {name}"
    
    def borrow(self, member_name, isbn):
        member = next((m for m in self.members if m.name == member_name), None)
        book = next((b for b in self.books if b.isbn == isbn), None)
        if not member: return "Member not found"
        if not book: return "Book not found"
        if not book.available: return "Not available"
        book.available = False
        member.borrowed.append(book)
        self.records.append({"member": member_name, "book": book.title})
        return f"{member_name} borrowed '{book.title}'"
    
    def return_book(self, member_name, isbn):
        member = next((m for m in self.members if m.name == member_name), None)
        book = next((b for b in self.books if b.isbn == isbn), None)
        if not member or not book: return "Not found"
        book.available = True
        member.borrowed.remove(book)
        return f"{member_name} returned '{book.title}'"
    
    def search(self, query):
        return [b for b in self.books if query.lower() in b.title.lower()]
    
    def status(self):
        available = sum(1 for b in self.books if b.available)
        return f"{self.name}: {len(self.books)} books ({available} available), {len(self.members)} members"</code></pre>`,
          challenge: {
            description: 'Build the complete mini library system. Create a Library, add 2 books, register 2 members, borrow a book, search for it, and print the library status showing correct available count.',
            starterCode: `class Book:\n    def __init__(self, title, author, isbn):\n        self.title = title\n        self.author = author\n        self.isbn = isbn\n        self.available = True\n\nclass Library:\n    def __init__(self, name):\n        self.name = name\n        self.books = []\n        self.members = []\n    \n    def add_book(self, title, author, isbn):\n        self.books.append(Book(title, author, isbn))\n        return f"Added: {title}"\n    \n    def register(self, name):\n        self.members.append(name)\n        return f"Registered: {name}"\n    \n    def borrow(self, member, isbn):\n        book = next((b for b in self.books if b.isbn == isbn and b.available), None)\n        if book:\n            book.available = False\n            return f"{member} borrowed '{book.title}'"\n        return "Not available"\n    \n    def status(self):\n        available = sum(1 for b in self.books if b.available)\n        return f"{self.name}: {len(self.books)} books ({available} available), {len(self.members)} members"\n\nlib = Library("City Library")\nprint(lib.add_book("Python 101", "Alice", "001"))\nprint(lib.add_book("OOP Guide", "Bob", "002"))\nprint(lib.register("Charlie"))\nprint(lib.borrow("Charlie", "001"))\nprint(lib.status())`,
            expectedOutput: `Added: Python 101\nAdded: OOP Guide\nRegistered: Charlie\nCharlie borrowed 'Python 101'\nCity Library: 2 books (1 available), 1 members`,
            hints: [
              'Library composes Books and Members',
              'borrow finds available book by isbn',
              'status counts available books',
              'After borrowing 1 of 2 books, 1 remains available'
            ]
          },
          quiz: [
            {
              question: 'What OOP concepts does the complete Library system use?',
              options: ['Only inheritance', 'Encapsulation, composition, properties, magic methods, and delegation', 'Only polymorphism', 'Only abstraction'],
              correct: 1
            },
            {
              question: 'What is the role of the Library class?',
              options: ['Store data only', 'Coordinate between Books and Members — the central orchestrator', 'Replace Books', 'Only for search'],
              correct: 1
            },
            {
              question: 'Why use next() with a generator expression for finding books?',
              options: ['It is faster', 'Returns the first match or None — clean and concise', 'Python requires it', 'It returns all matches'],
              correct: 1
            },
            {
              question: 'What would you add for a production system?',
              options: ['Nothing', 'Database persistence, authentication, due dates, fines, and error handling', 'More classes only', 'Only better printing'],
              correct: 1
            },
            {
              question: 'How does this project demonstrate OOP benefits?',
              options: ['It does not', 'Organized code, reusable components, clear responsibilities, easy to extend', 'It is shorter than procedural', 'It runs faster'],
              correct: 1
            },
            {
              question: 'What design pattern could improve book creation (e.g., from different sources)?',
              options: ['Observer', 'Factory — create books from ISBNs, files, or APIs', 'Singleton', 'Strategy'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: 'oop_advanced',
      title: 'Advanced OOP',
      lessons: [
        {
          id: 'oop_metaclasses',
          title: 'Metaclasses',
          type: 'challenge',
          theory: `<h2>Metaclasses</h2>
<p>A <strong>metaclass</strong> is the class of a class. Just as objects are instances of classes, classes are instances of metaclasses. The default metaclass is <code>type</code>.</p>

<h3>Classes Are Objects Too</h3>
<pre><code># type() creates classes dynamically!
Dog = type('Dog', (), {'bark': lambda self: 'Woof!'})
rex = Dog()
print(rex.bark())  # Woof!

# This is equivalent to:
class Dog:
    def bark(self):
        return "Woof!"</code></pre>

<h3>Custom Metaclass</h3>
<pre><code>class SingletonMeta(type):
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=SingletonMeta):
    def __init__(self):
        self.connected = True

db1 = Database()
db2 = Database()
print(db1 is db2)  # True — Singleton enforced by metaclass!</code></pre>

<h3>Validation Metaclass</h3>
<pre><code>class ValidatedMeta(type):
    def __new__(mcs, name, bases, namespace):
        # Ensure all classes using this metaclass have a 'validate' method
        if name != 'Validated':  # Skip the base class
            if 'validate' not in namespace:
                raise TypeError(f"{name} must implement validate()")
        return super().__new__(mcs, name, bases, namespace)

class Validated(metaclass=ValidatedMeta):
    pass

class User(Validated):
    def validate(self):
        return True  # OK — has validate!

# class BadClass(Validated):
#     pass  # TypeError: BadClass must implement validate()</code></pre>

<h3>Registry Metaclass</h3>
<pre><code>class RegistryMeta(type):
    registry = {}
    
    def __new__(mcs, name, bases, namespace):
        cls = super().__new__(mcs, name, bases, namespace)
        if name != 'Base':
            RegistryMeta.registry[name] = cls
        return cls

class Base(metaclass=RegistryMeta):
    pass

class Plugin1(Base):
    pass

class Plugin2(Base):
    pass

print(RegistryMeta.registry)
# {'Plugin1': <class 'Plugin1'>, 'Plugin2': <class 'Plugin2'>}</code></pre>

<p><strong>When to use:</strong> Metaclasses are powerful but complex. Use them for frameworks, ORMs, or validation. For most code, decorators or __init_subclass__ are simpler alternatives.</p>`,
          challenge: {
            description: 'Create a metaclass RegistryMeta(type) that automatically registers all classes using it (except "Base") in a class-level registry dict. Create a Base class using this metaclass. Create two subclasses PluginA and PluginB. Print the registry keys.',
            starterCode: `class RegistryMeta(type):\n    registry = {}\n    \n    def __new__(mcs, name, bases, namespace):\n        cls = super().__new__(mcs, name, bases, namespace)\n        if name != "Base":\n            RegistryMeta.registry[name] = cls\n        return cls\n\nclass Base(metaclass=RegistryMeta):\n    pass\n\nclass PluginA(Base):\n    pass\n\nclass PluginB(Base):\n    pass\n\nprint(sorted(RegistryMeta.registry.keys()))`,
            expectedOutput: "['PluginA', 'PluginB']",
            hints: [
              'RegistryMeta.__new__ is called when a class is DEFINED',
              'It stores each class (except Base) in the registry dict',
              'Subclasses of Base automatically get registered',
              'This is used in plugin systems and ORMs'
            ]
          },
          quiz: [
            {
              question: 'What is a metaclass?',
              options: ['A large class', 'The class of a class — it controls how classes are created', 'A private class', 'A module'],
              correct: 1
            },
            {
              question: 'What is the default metaclass in Python?',
              options: ['object', 'type', 'meta', 'class'],
              correct: 1
            },
            {
              question: 'When is a metaclass __new__ called?',
              options: ['When an instance is created', 'When the CLASS ITSELF is defined/created', 'When a method is called', 'At import time only'],
              correct: 1
            },
            {
              question: 'How do you specify a metaclass for a class?',
              options: ['class Foo(meta=MyMeta)', 'class Foo(metaclass=MyMeta)', '@metaclass(MyMeta)', 'Foo.meta = MyMeta'],
              correct: 1
            },
            {
              question: 'What is a simpler alternative to metaclasses for most use cases?',
              options: ['Nothing', '__init_subclass__ or class decorators', 'Global variables', 'More inheritance'],
              correct: 1
            },
            {
              question: 'What real-world systems use metaclasses?',
              options: ['Simple scripts', 'ORMs (Django models), form validation frameworks, plugin registries', 'Only debugging tools', 'Only testing frameworks'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_descriptors',
          title: 'Descriptors',
          type: 'challenge',
          theory: `<h2>Descriptors</h2>
<p>A <strong>descriptor</strong> is an object that defines how attribute access works on another object. If an attribute implements <code>__get__</code>, <code>__set__</code>, or <code>__delete__</code>, it's a descriptor. This is how Python's @property, @staticmethod, and @classmethod work internally!</p>

<h3>Data Descriptor (has __set__)</h3>
<pre><code>class Validated:
    def __init__(self, min_value=None, max_value=None):
        self.min_value = min_value
        self.max_value = max_value
    
    def __set_name__(self, owner, name):
        self.name = name
        self.private_name = f"_{name}"
    
    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return getattr(obj, self.private_name, None)
    
    def __set__(self, obj, value):
        if self.min_value is not None and value < self.min_value:
            raise ValueError(f"{self.name} must be >= {self.min_value}")
        if self.max_value is not None and value > self.max_value:
            raise ValueError(f"{self.name} must be <= {self.max_value}")
        setattr(obj, self.private_name, value)

class Student:
    age = Validated(min_value=0, max_value=120)
    grade = Validated(min_value=0, max_value=100)
    
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age      # Uses Validated.__set__
        self.grade = grade  # Uses Validated.__set__

s = Student("Alice", 20, 95)
print(s.age)    # 20
print(s.grade)  # 95
# Student("Bad", -1, 50)  # ValueError: age must be >= 0</code></pre>

<h3>Non-Data Descriptor (only __get__)</h3>
<pre><code>class LazyProperty:
    def __init__(self, func):
        self.func = func
        self.name = func.__name__
    
    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        value = self.func(obj)
        setattr(obj, self.name, value)  # Cache on instance
        return value

class DataSet:
    def __init__(self, data):
        self._data = data
    
    @LazyProperty
    def mean(self):
        print("Computing mean...")
        return sum(self._data) / len(self._data)

ds = DataSet([1, 2, 3, 4, 5])
print(ds.mean)  # Computing mean... 3.0
print(ds.mean)  # 3.0 (cached — no recompute!)</code></pre>

<h3>How Property Works Internally</h3>
<p><code>@property</code> is actually a descriptor class! When you access <code>obj.x</code>, Python checks if <code>x</code> is a descriptor on the class and calls its <code>__get__</code>.</p>`,
          challenge: {
            description: 'Create a descriptor class TypeChecked that ensures a value is of a specific type. It takes expected_type in __init__. __set__ raises TypeError if value is wrong type. __get__ returns the value. Use it in a Person class to enforce name as str and age as int. Create Person("Alice", 30) and print both.',
            starterCode: `class TypeChecked:\n    def __init__(self, expected_type):\n        self.expected_type = expected_type\n    \n    def __set_name__(self, owner, name):\n        self.name = name\n        self.private_name = f"_{name}"\n    \n    def __get__(self, obj, objtype=None):\n        if obj is None:\n            return self\n        return getattr(obj, self.private_name, None)\n    \n    def __set__(self, obj, value):\n        if not isinstance(value, self.expected_type):\n            raise TypeError(f"{self.name} must be {self.expected_type.__name__}")\n        setattr(obj, self.private_name, value)\n\nclass Person:\n    name = TypeChecked(str)\n    age = TypeChecked(int)\n    \n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\np = Person("Alice", 30)\nprint(p.name)\nprint(p.age)`,
            expectedOutput: `Alice\n30`,
            hints: [
              'TypeChecked is a descriptor — it defines __get__ and __set__',
              '__set__ validates type before storing',
              'The descriptor is a class attribute shared by all instances',
              '__set_name__ is called automatically to get the attribute name'
            ]
          },
          quiz: [
            {
              question: 'What makes an object a descriptor?',
              options: ['Having __init__', 'Implementing __get__, __set__, or __delete__', 'Being a class attribute', 'Having a name starting with _'],
              correct: 1
            },
            {
              question: 'What is __set_name__ used for?',
              options: ['Setting the instance name', 'Automatically receiving the attribute name when the descriptor is assigned to a class', 'Renaming the class', 'Nothing important'],
              correct: 1
            },
            {
              question: 'What is the difference between data and non-data descriptors?',
              options: ['No difference', 'Data descriptors have __set__; non-data only have __get__', 'Non-data are faster', 'Data descriptors use databases'],
              correct: 1
            },
            {
              question: 'How is @property implemented internally?',
              options: ['Magic', 'As a descriptor class with __get__ and __set__', 'As a metaclass', 'As a function wrapper only'],
              correct: 1
            },
            {
              question: 'What is a lazy property?',
              options: ['A slow property', 'A property computed once on first access and then cached', 'A property that never computes', 'A deleted property'],
              correct: 1
            },
            {
              question: 'Where do you define descriptors?',
              options: ['In __init__', 'As class attributes (not instance attributes)', 'In a module', 'In a metaclass only'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_slots',
          title: '__slots__',
          type: 'challenge',
          theory: `<h2>__slots__</h2>
<p><code>__slots__</code> restricts what attributes an instance can have. Instead of a flexible <code>__dict__</code>, Python uses a fixed-size structure — saving memory and preventing typos.</p>

<h3>Without __slots__</h3>
<pre><code>class Normal:
    def __init__(self, x, y):
        self.x = x
        self.y = y

n = Normal(1, 2)
n.z = 3       # Allowed! Dynamic attribute
n.typo = 4   # Also allowed — silent bug!
print(n.__dict__)  # {'x': 1, 'y': 2, 'z': 3, 'typo': 4}</code></pre>

<h3>With __slots__</h3>
<pre><code>class Slotted:
    __slots__ = ['x', 'y']
    
    def __init__(self, x, y):
        self.x = x
        self.y = y

s = Slotted(1, 2)
# s.z = 3  # AttributeError: 'Slotted' object has no attribute 'z'
# No __dict__ — saves memory!
print(s.x)  # 1</code></pre>

<h3>Memory Savings</h3>
<pre><code>import sys

class WithDict:
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z

class WithSlots:
    __slots__ = ['x', 'y', 'z']
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z

d = WithDict(1, 2, 3)
s = WithSlots(1, 2, 3)
print(sys.getsizeof(d.__dict__))  # ~104 bytes
# WithSlots has no __dict__ — significant savings for millions of instances!</code></pre>

<h3>When to Use __slots__</h3>
<ul>
<li>Classes with many instances (data points, nodes, coordinates)</li>
<li>Performance-critical code</li>
<li>When you want to prevent accidental attribute creation</li>
</ul>

<h3>Limitations</h3>
<pre><code>class Point:
    __slots__ = ['x', 'y']
    
    def __init__(self, x, y):
        self.x = x
        self.y = y

# Cannot use __dict__ based features:
# - No dynamic attributes
# - Cannot use vars(point)
# - Multiple inheritance is limited
# But can still define methods, properties, class variables</code></pre>`,
          challenge: {
            description: 'Create a class Point3D with __slots__ = ["x", "y", "z"]. Add __init__ setting all three. Add a method distance_from_origin() returning (x**2 + y**2 + z**2)**0.5. Create Point3D(3, 4, 0) and print distance. Then try adding a .w attribute and catch the AttributeError.',
            starterCode: `class Point3D:\n    __slots__ = ['x', 'y', 'z']\n    \n    def __init__(self, x, y, z):\n        self.x = x\n        self.y = y\n        self.z = z\n    \n    def distance_from_origin(self):\n        return (self.x**2 + self.y**2 + self.z**2)**0.5\n\np = Point3D(3, 4, 0)\nprint(p.distance_from_origin())\n\ntry:\n    p.w = 10\nexcept AttributeError as e:\n    print("Cannot add attribute: w")`,
            expectedOutput: `5.0\nCannot add attribute: w`,
            hints: [
              '__slots__ restricts attributes to only x, y, z',
              'distance = sqrt(9 + 16 + 0) = sqrt(25) = 5.0',
              'Adding .w raises AttributeError because it is not in __slots__',
              'This prevents accidental attribute creation'
            ]
          },
          quiz: [
            {
              question: 'What does __slots__ do?',
              options: ['Makes the class faster', 'Restricts instance attributes to a fixed set, saving memory', 'Creates slots in memory', 'Enables multiple inheritance'],
              correct: 1
            },
            {
              question: 'What happens if you try to add an attribute not in __slots__?',
              options: ['It works fine', 'AttributeError is raised', 'A warning is shown', 'The slot list expands'],
              correct: 1
            },
            {
              question: 'Do classes with __slots__ have __dict__?',
              options: ['Yes', 'No — that is how they save memory', 'Only if you add it', 'Depends on Python version'],
              correct: 1
            },
            {
              question: 'When is __slots__ most beneficial?',
              options: ['For classes with one instance', 'For classes with many instances where memory matters', 'For inheritance', 'For decorators'],
              correct: 1
            },
            {
              question: 'Can you define methods on a class with __slots__?',
              options: ['No', 'Yes, __slots__ only restricts instance attributes, not methods', 'Only static methods', 'Only __init__'],
              correct: 1
            },
            {
              question: 'What is a downside of __slots__?',
              options: ['Slower code', 'Cannot add dynamic attributes or use some metaclass features', 'Cannot use inheritance', 'Cannot define properties'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_recap_orm_builder',
          title: 'Recap - ORM Builder',
          type: 'mastery',
          theory: `<h2>Recap: ORM Builder</h2>
<p>Let's combine metaclasses, descriptors, and __slots__ concepts to build a mini Object-Relational Mapping (ORM) — like Django's models in miniature.</p>

<h3>Mini ORM</h3>
<pre><code>class Field:
    """Descriptor for validated fields"""
    def __init__(self, field_type, required=True):
        self.field_type = field_type
        self.required = required
    
    def __set_name__(self, owner, name):
        self.name = name
        self.private_name = f"_{name}"
    
    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return getattr(obj, self.private_name, None)
    
    def __set__(self, obj, value):
        if value is not None and not isinstance(value, self.field_type):
            raise TypeError(f"{self.name} must be {self.field_type.__name__}")
        if self.required and value is None:
            raise ValueError(f"{self.name} is required")
        setattr(obj, self.private_name, value)

class Model:
    """Base class for ORM models"""
    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)
    
    def to_dict(self):
        fields = {}
        for name in dir(self.__class__):
            if isinstance(getattr(self.__class__, name), Field):
                fields[name] = getattr(self, name)
        return fields
    
    def __repr__(self):
        data = self.to_dict()
        pairs = [f"{k}={v!r}" for k, v in data.items()]
        return f"{self.__class__.__name__}({', '.join(pairs)})"

class User(Model):
    name = Field(str)
    age = Field(int)
    email = Field(str)

u = User(name="Alice", age=30, email="alice@test.com")
print(u)  # User(age=30, email='alice@test.com', name='Alice')
print(u.to_dict())  # {'age': 30, 'email': 'alice@test.com', 'name': 'Alice'}</code></pre>`,
          challenge: {
            description: 'Create a simple Field descriptor that stores values with type validation. Create a Model base class with __init__(**kwargs) that sets all fields. Create a Product(Model) with name = Field(str) and price = Field(float). Create Product(name="Widget", price=9.99) and print name and price.',
            starterCode: `class Field:\n    def __init__(self, field_type):\n        self.field_type = field_type\n    \n    def __set_name__(self, owner, name):\n        self.name = name\n        self.private_name = f"_{name}"\n    \n    def __get__(self, obj, objtype=None):\n        if obj is None:\n            return self\n        return getattr(obj, self.private_name, None)\n    \n    def __set__(self, obj, value):\n        if not isinstance(value, self.field_type):\n            raise TypeError(f"{self.name} must be {self.field_type.__name__}")\n        setattr(obj, self.private_name, value)\n\nclass Model:\n    def __init__(self, **kwargs):\n        for key, value in kwargs.items():\n            setattr(self, key, value)\n\nclass Product(Model):\n    name = Field(str)\n    price = Field(float)\n\np = Product(name="Widget", price=9.99)\nprint(p.name)\nprint(p.price)`,
            expectedOutput: `Widget\n9.99`,
            hints: [
              'Field is a descriptor — __get__ and __set__ control attribute access',
              'Model.__init__ uses setattr which triggers the descriptor __set__',
              'Product inherits from Model and defines Field descriptors',
              '__set_name__ is called automatically when the class is created'
            ]
          },
          mastery: {
            description: 'Add a required parameter to Field (default True). In __set__, raise ValueError if required=True and value is None. Add a to_dict() method to Model that returns all Field values as a dict. Test with a User model with optional field.',
            starterCode: `# Extend the ORM with required fields and to_dict()`,
            expectedOutput: `{'name': 'Alice', 'email': None}`,
            hints: [
              'Add required=True parameter to Field.__init__',
              'Check: if self.required and value is None: raise ValueError',
              'to_dict: loop through class attributes, check if Field instance'
            ]
          },
          quiz: [
            {
              question: 'What is an ORM?',
              options: ['A Python module', 'Object-Relational Mapping — Python classes represent database tables', 'A design pattern', 'A testing framework'],
              correct: 1
            },
            {
              question: 'How do descriptors help in an ORM?',
              options: ['They are not useful', 'They validate and control field access transparently', 'They connect to databases', 'They generate SQL'],
              correct: 1
            },
            {
              question: 'What does __set_name__ provide to the descriptor?',
              options: ['The instance', 'The name of the attribute it was assigned to on the class', 'The value', 'The metaclass'],
              correct: 1
            },
            {
              question: 'Why use **kwargs in Model.__init__?',
              options: ['Required by Python', 'Allows flexible field-based initialization: Model(name="x", age=5)', 'For performance', 'To avoid type errors'],
              correct: 1
            },
            {
              question: 'What does to_dict() provide?',
              options: ['Deletes the object', 'Serializes the model to a dictionary (useful for JSON, databases)', 'Creates a new model', 'Nothing'],
              correct: 1
            },
            {
              question: 'What advanced concepts combine in this ORM builder?',
              options: ['Only inheritance', 'Descriptors (field validation), metaclass concepts, composition, and polymorphism', 'Only decorators', 'Only __slots__'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: 'oop_final_challenges',
      title: 'Final Challenges',
      lessons: [
        {
          id: 'oop_challenge_social',
          title: 'Social Network',
          type: 'challenge',
          theory: `<h2>Challenge: Social Network</h2>
<p>Build a mini social network with users, posts, and friendships. This tests your ability to use composition, encapsulation, and relationships between objects.</p>

<h3>Design Hints</h3>
<ul>
<li><strong>User:</strong> has name, friends list, posts list</li>
<li><strong>Post:</strong> has author, content, likes count</li>
<li><strong>Relationships:</strong> Users can friend each other (bidirectional), create posts, like posts</li>
</ul>

<h3>Example Architecture</h3>
<pre><code>class Post:
    def __init__(self, author, content):
        self.author = author
        self.content = content
        self.likes = 0
    
    def like(self):
        self.likes += 1
    
    def __str__(self):
        return f"{self.author}: {self.content} ({self.likes} likes)"

class User:
    def __init__(self, name):
        self.name = name
        self.friends = []
        self.posts = []
    
    def add_friend(self, other):
        if other not in self.friends:
            self.friends.append(other)
            other.friends.append(self)
    
    def create_post(self, content):
        post = Post(self.name, content)
        self.posts.append(post)
        return post
    
    def get_feed(self):
        feed = []
        for friend in self.friends:
            feed.extend(friend.posts)
        return sorted(feed, key=lambda p: p.likes, reverse=True)</code></pre>

<h3>Key Concepts Tested</h3>
<ul>
<li>Composition (User HAS Posts)</li>
<li>Bidirectional relationships</li>
<li>Encapsulation of post data</li>
<li>Methods that coordinate between objects</li>
</ul>`,
          challenge: {
            description: 'Create a User class with name, friends list, and posts list. Add add_friend(other) that adds bidirectionally. Add create_post(content) that appends content string to posts. Add friend_count() returning number of friends. Create Alice and Bob, make them friends, Alice posts "Hello!", print Alice friend count and first post.',
            starterCode: `class User:\n    def __init__(self, name):\n        self.name = name\n        self.friends = []\n        self.posts = []\n    \n    def add_friend(self, other):\n        if other not in self.friends:\n            self.friends.append(other)\n            other.friends.append(self)\n    \n    def create_post(self, content):\n        self.posts.append(content)\n    \n    def friend_count(self):\n        return len(self.friends)\n\nalice = User("Alice")\nbob = User("Bob")\nalice.add_friend(bob)\nalice.create_post("Hello!")\nprint(alice.friend_count())\nprint(alice.posts[0])\nprint(bob.friend_count())`,
            expectedOutput: `1\nHello!\n1`,
            hints: [
              'add_friend adds to both users friend lists (bidirectional)',
              'After Alice adds Bob, both have 1 friend',
              'create_post just appends content to self.posts',
              'alice.posts[0] is "Hello!"'
            ]
          },
          quiz: [
            {
              question: 'Why is friendship bidirectional?',
              options: ['It is simpler', 'If A is friends with B, B should also be friends with A', 'Python requires it', 'For performance'],
              correct: 1
            },
            {
              question: 'What OOP concept is User HAS Posts?',
              options: ['Inheritance', 'Composition', 'Polymorphism', 'Abstraction'],
              correct: 1
            },
            {
              question: 'How would you implement a "feed" showing friends posts?',
              options: ['Global variable', 'Iterate through friends, collect their posts, sort by time/likes', 'Inheritance', 'A separate database'],
              correct: 1
            },
            {
              question: 'What check prevents duplicate friendships?',
              options: ['None', 'if other not in self.friends before adding', 'A set instead of list', 'Both B and C work'],
              correct: 3
            },
            {
              question: 'How would you add "unfriend" functionality?',
              options: ['Delete the user', 'Remove from both users friend lists', 'Set friend to None', 'Create a new user'],
              correct: 1
            },
            {
              question: 'What design pattern could a notification system use here?',
              options: ['Singleton', 'Observer — notify friends when a new post is created', 'Factory', 'Strategy'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_challenge_banking',
          title: 'Banking System',
          type: 'challenge',
          theory: `<h2>Challenge: Banking System</h2>
<p>Build a banking system with different account types, transactions, and transfers. This tests inheritance, polymorphism, and encapsulation.</p>

<h3>Design</h3>
<pre><code>class Account:
    """Base account with common functionality"""
    def __init__(self, owner, balance=0):
        self._owner = owner
        self._balance = balance
        self._transactions = []
    
    @property
    def balance(self):
        return self._balance
    
    def deposit(self, amount):
        if amount <= 0:
            return "Invalid amount"
        self._balance += amount
        self._transactions.append(f"+{amount}")
        return f"Deposited {amount}"
    
    def withdraw(self, amount):
        if amount <= 0:
            return "Invalid amount"
        if amount > self._balance:
            return "Insufficient funds"
        self._balance -= amount
        self._transactions.append(f"-{amount}")
        return f"Withdrew {amount}"

class SavingsAccount(Account):
    """Earns interest, limited withdrawals"""
    INTEREST_RATE = 0.05
    
    def apply_interest(self):
        interest = self._balance * self.INTEREST_RATE
        self._balance += interest
        return f"Interest: +{interest}"

class CheckingAccount(Account):
    """Free withdrawals, overdraft protection"""
    OVERDRAFT_LIMIT = 100
    
    def withdraw(self, amount):
        if amount > self._balance + self.OVERDRAFT_LIMIT:
            return "Exceeds overdraft limit"
        self._balance -= amount
        self._transactions.append(f"-{amount}")
        return f"Withdrew {amount}"</code></pre>

<h3>Transfer Between Accounts</h3>
<pre><code>class Bank:
    @staticmethod
    def transfer(from_acc, to_acc, amount):
        result = from_acc.withdraw(amount)
        if "Withdrew" in result:
            to_acc.deposit(amount)
            return f"Transferred {amount}"
        return f"Transfer failed: {result}"</code></pre>`,
          challenge: {
            description: 'Create Account(owner, balance=0) with deposit/withdraw methods and balance property. Create SavingsAccount(Account) with apply_interest() that adds 5% interest. Create a SavingsAccount for "Alice" with 1000, deposit 500, apply interest, print balance.',
            starterCode: `class Account:\n    def __init__(self, owner, balance=0):\n        self._owner = owner\n        self._balance = balance\n    \n    @property\n    def balance(self):\n        return self._balance\n    \n    def deposit(self, amount):\n        if amount > 0:\n            self._balance += amount\n            return f"Deposited {amount}"\n        return "Invalid"\n    \n    def withdraw(self, amount):\n        if 0 < amount <= self._balance:\n            self._balance -= amount\n            return f"Withdrew {amount}"\n        return "Failed"\n\nclass SavingsAccount(Account):\n    INTEREST_RATE = 0.05\n    \n    def apply_interest(self):\n        interest = self._balance * self.INTEREST_RATE\n        self._balance += interest\n        return f"Interest: {interest}"\n\nacc = SavingsAccount("Alice", 1000)\nprint(acc.deposit(500))\nprint(acc.apply_interest())\nprint(acc.balance)`,
            expectedOutput: `Deposited 500\nInterest: 75.0\n1575.0`,
            hints: [
              'Start 1000, deposit 500 = 1500',
              'Interest: 1500 * 0.05 = 75.0',
              'Final balance: 1500 + 75 = 1575.0',
              'SavingsAccount inherits deposit/withdraw from Account'
            ]
          },
          quiz: [
            {
              question: 'Why use inheritance for account types?',
              options: ['Performance', 'Common behavior in base class, specialized behavior in subclasses', 'Python requires it', 'Less typing'],
              correct: 1
            },
            {
              question: 'What does CheckingAccount overriding withdraw() demonstrate?',
              options: ['Encapsulation', 'Polymorphism — same method, different rules', 'Composition', 'Abstraction'],
              correct: 1
            },
            {
              question: 'Why make _balance private?',
              options: ['To hide it completely', 'To prevent direct modification without validation', 'Python requires it', 'For performance'],
              correct: 1
            },
            {
              question: 'What is the benefit of a Bank.transfer static method?',
              options: ['Speed', 'Coordinates between two accounts without belonging to either', 'Required by Python', 'Memory savings'],
              correct: 1
            },
            {
              question: 'How does SavingsAccount get deposit() without defining it?',
              options: ['Magic', 'Inherited from Account', 'Imported from a module', 'Defined implicitly'],
              correct: 1
            },
            {
              question: 'What pattern ensures interest rate applies to all savings accounts uniformly?',
              options: ['Instance variable', 'Class variable (INTEREST_RATE) — shared by all instances', 'Global variable', 'A decorator'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_challenge_game_engine',
          title: 'Game Engine',
          type: 'challenge',
          theory: `<h2>Challenge: Game Engine</h2>
<p>Build a simple game engine with entities, components, and game logic. This tests composition, polymorphism, and the Entity-Component pattern.</p>

<h3>Design</h3>
<pre><code>class Entity:
    """Base game entity"""
    _next_id = 0
    
    def __init__(self, name, x=0, y=0):
        Entity._next_id += 1
        self.id = Entity._next_id
        self.name = name
        self.x = x
        self.y = y
        self.alive = True
    
    def move(self, dx, dy):
        self.x += dx
        self.y += dy
    
    def distance_to(self, other):
        return ((self.x - other.x)**2 + (self.y - other.y)**2)**0.5
    
    def __str__(self):
        return f"{self.name} at ({self.x}, {self.y})"

class Player(Entity):
    def __init__(self, name, health=100):
        super().__init__(name)
        self.health = health
        self.score = 0
        self.inventory = []
    
    def take_damage(self, amount):
        self.health -= amount
        if self.health <= 0:
            self.alive = False
            return f"{self.name} was defeated!"
        return f"{self.name} took {amount} damage. HP: {self.health}"
    
    def collect(self, item):
        self.inventory.append(item)
        self.score += 10
        return f"Collected {item}! Score: {self.score}"

class Enemy(Entity):
    def __init__(self, name, damage, x=0, y=0):
        super().__init__(name, x, y)
        self.damage = damage
    
    def attack(self, player):
        return player.take_damage(self.damage)</code></pre>

<h3>Game Loop</h3>
<pre><code>class Game:
    def __init__(self):
        self.entities = []
    
    def add_entity(self, entity):
        self.entities.append(entity)
    
    def get_nearby(self, entity, radius):
        return [e for e in self.entities 
                if e != entity and entity.distance_to(e) <= radius]</code></pre>`,
          challenge: {
            description: 'Create Entity(name, x, y) with move(dx, dy) method. Create Player(Entity) with health=100, take_damage(amount) that reduces health and returns "Defeated!" if health <= 0. Create Enemy(Entity) with damage attribute and attack(player) method. Create a player, enemy with damage 30, attack 3 times, print result each time.',
            starterCode: `class Entity:\n    def __init__(self, name, x=0, y=0):\n        self.name = name\n        self.x = x\n        self.y = y\n    \n    def move(self, dx, dy):\n        self.x += dx\n        self.y += dy\n\nclass Player(Entity):\n    def __init__(self, name):\n        super().__init__(name)\n        self.health = 100\n    \n    def take_damage(self, amount):\n        self.health -= amount\n        if self.health <= 0:\n            return "Defeated!"\n        return f"HP: {self.health}"\n\nclass Enemy(Entity):\n    def __init__(self, name, damage):\n        super().__init__(name)\n        self.damage = damage\n    \n    def attack(self, player):\n        return player.take_damage(self.damage)\n\nhero = Player("Hero")\ngoblin = Enemy("Goblin", 30)\nprint(goblin.attack(hero))\nprint(goblin.attack(hero))\nprint(goblin.attack(hero))\nprint(goblin.attack(hero))`,
            expectedOutput: `HP: 70\nHP: 40\nHP: 10\nDefeated!`,
            hints: [
              '100 - 30 = 70, 70 - 30 = 40, 40 - 30 = 10, 10 - 30 = -20 (defeated)',
              'take_damage checks if health <= 0 after reducing',
              'Enemy.attack delegates to player.take_damage',
              'Player inherits position from Entity via super()'
            ]
          },
          quiz: [
            {
              question: 'What pattern does Entity -> Player/Enemy demonstrate?',
              options: ['Composition', 'Inheritance hierarchy with polymorphism', 'Singleton', 'Observer'],
              correct: 1
            },
            {
              question: 'Why does Enemy.attack() delegate to player.take_damage()?',
              options: ['Required', 'The player knows how to handle its own health — single responsibility', 'Cannot access player directly', 'For performance'],
              correct: 1
            },
            {
              question: 'What composition example would improve this game engine?',
              options: ['More inheritance', 'Components: HealthComponent, PositionComponent attached to entities', 'Global variables', 'Fewer classes'],
              correct: 1
            },
            {
              question: 'How does super().__init__(name) work in Player?',
              options: ['Creates a new Entity', 'Calls Entity.__init__ to set up name, x, y', 'Overwrites Player', 'Nothing'],
              correct: 1
            },
            {
              question: 'What would make the game loop more realistic?',
              options: ['Remove classes', 'Add turn system, collision detection, and event handling', 'Use only functions', 'Remove enemies'],
              correct: 1
            },
            {
              question: 'What OOP concept allows both Player and Enemy to have move()?',
              options: ['Encapsulation', 'Inheritance — both inherit move from Entity', 'Composition', 'Metaclasses'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_challenge_ecommerce',
          title: 'E-commerce Cart',
          type: 'challenge',
          theory: `<h2>Challenge: E-commerce Shopping Cart</h2>
<p>Build a shopping cart system with products, quantities, discounts, and checkout. Tests composition, strategy pattern, and operator overloading.</p>

<h3>Design</h3>
<pre><code>class Product:
    def __init__(self, name, price, stock=10):
        self.name = name
        self.price = price
        self.stock = stock
    
    def __str__(self):
        return f"{self.name} (${self.price})"

class CartItem:
    def __init__(self, product, quantity=1):
        self.product = product
        self.quantity = quantity
    
    @property
    def subtotal(self):
        return self.product.price * self.quantity
    
    def __str__(self):
        return f"{self.product.name} x{self.quantity} = ${self.subtotal}"

class Cart:
    def __init__(self):
        self.items = []
        self._discount = None
    
    def add(self, product, quantity=1):
        for item in self.items:
            if item.product.name == product.name:
                item.quantity += quantity
                return
        self.items.append(CartItem(product, quantity))
    
    def set_discount(self, discount_strategy):
        self._discount = discount_strategy
    
    @property
    def subtotal(self):
        return sum(item.subtotal for item in self.items)
    
    @property
    def total(self):
        amount = self.subtotal
        if self._discount:
            amount = self._discount.apply(amount)
        return amount
    
    def __len__(self):
        return sum(item.quantity for item in self.items)</code></pre>`,
          challenge: {
            description: 'Create Product(name, price) and Cart with add(product, qty) method. Cart should store items as list of {"product": product, "qty": qty}. Add total() method returning sum of price*qty for all items. Add item_count() returning total quantity. Add 2 "Widget" at $10 and 3 "Gadget" at $25. Print item_count and total.',
            starterCode: `class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nclass Cart:\n    def __init__(self):\n        self.items = []\n    \n    def add(self, product, qty=1):\n        self.items.append({"product": product, "qty": qty})\n    \n    def total(self):\n        return sum(item["product"].price * item["qty"] for item in self.items)\n    \n    def item_count(self):\n        return sum(item["qty"] for item in self.items)\n\ncart = Cart()\ncart.add(Product("Widget", 10), 2)\ncart.add(Product("Gadget", 25), 3)\nprint(cart.item_count())\nprint(cart.total())`,
            expectedOutput: `5\n95`,
            hints: [
              'item_count: 2 + 3 = 5 total items',
              'total: (10*2) + (25*3) = 20 + 75 = 95',
              'Each item is a dict with product and quantity',
              'total uses sum with generator expression'
            ]
          },
          quiz: [
            {
              question: 'Why separate Product from CartItem?',
              options: ['Performance', 'Product is the item itself; CartItem adds quantity context for the cart', 'Python requires it', 'Less code'],
              correct: 1
            },
            {
              question: 'What pattern would discount strategies use?',
              options: ['Singleton', 'Strategy pattern — different discount algorithms swappable at runtime', 'Observer', 'Factory'],
              correct: 1
            },
            {
              question: 'Why check if product already exists in cart before adding?',
              options: ['Performance', 'To update quantity instead of creating duplicate entries', 'Python requires it', 'To prevent errors'],
              correct: 1
            },
            {
              question: 'What does __len__ on Cart represent?',
              options: ['Number of products', 'Total quantity of all items', 'Cart weight', 'Number of methods'],
              correct: 1
            },
            {
              question: 'How would you implement "buy 2 get 1 free"?',
              options: ['Hardcode in Cart', 'As a discount strategy class with its own apply() logic', 'Cannot be done with OOP', 'Global variable'],
              correct: 1
            },
            {
              question: 'What OOP concept makes subtotal a computed value?',
              options: ['Inheritance', 'Properties — computed on access from quantity and price', 'Metaclasses', 'Descriptors'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_challenge_scheduler',
          title: 'Task Scheduler',
          type: 'challenge',
          theory: `<h2>Challenge: Task Scheduler</h2>
<p>Build a priority-based task scheduler. Tests operator overloading, composition, and encapsulation.</p>

<h3>Design</h3>
<pre><code>class Task:
    def __init__(self, name, priority=0):
        self.name = name
        self.priority = priority
        self.completed = False
    
    def complete(self):
        self.completed = True
    
    def __lt__(self, other):
        return self.priority > other.priority  # Higher priority = first
    
    def __repr__(self):
        status = "✓" if self.completed else "○"
        return f"[{status}] {self.name} (P{self.priority})"

class Scheduler:
    def __init__(self):
        self._tasks = []
    
    def add_task(self, name, priority=0):
        task = Task(name, priority)
        self._tasks.append(task)
        self._tasks.sort()  # Auto-sort by priority
        return task
    
    def next_task(self):
        for task in self._tasks:
            if not task.completed:
                return task
        return None
    
    def complete_next(self):
        task = self.next_task()
        if task:
            task.complete()
            return f"Completed: {task.name}"
        return "No pending tasks"
    
    @property
    def pending_count(self):
        return sum(1 for t in self._tasks if not t.completed)</code></pre>`,
          challenge: {
            description: 'Create a Task(name, priority) class with __lt__ comparing by priority (higher priority = comes first in sort). Create Scheduler with add_task(name, priority) and get_next() returning highest priority incomplete task name. Add tasks: "Email" (priority 1), "Meeting" (priority 3), "Code" (priority 2). Print get_next() three times (completing each).',
            starterCode: `class Task:\n    def __init__(self, name, priority):\n        self.name = name\n        self.priority = priority\n        self.done = False\n    \n    def __lt__(self, other):\n        return self.priority > other.priority\n\nclass Scheduler:\n    def __init__(self):\n        self._tasks = []\n    \n    def add_task(self, name, priority):\n        self._tasks.append(Task(name, priority))\n        self._tasks.sort()\n    \n    def get_next(self):\n        for task in self._tasks:\n            if not task.done:\n                task.done = True\n                return task.name\n        return None\n\ns = Scheduler()\ns.add_task("Email", 1)\ns.add_task("Meeting", 3)\ns.add_task("Code", 2)\nprint(s.get_next())\nprint(s.get_next())\nprint(s.get_next())`,
            expectedOutput: `Meeting\nCode\nEmail`,
            hints: [
              '__lt__ reverses comparison: higher priority sorts first',
              'Priority 3 (Meeting) > 2 (Code) > 1 (Email)',
              'get_next finds first non-done task and marks it done',
              'sort() uses __lt__ to order tasks'
            ]
          },
          quiz: [
            {
              question: 'Why reverse the comparison in __lt__?',
              options: ['A bug', 'So sort() puts higher priority tasks first (descending)', 'Python requires it', 'For readability'],
              correct: 1
            },
            {
              question: 'What does auto-sorting after each add_task provide?',
              options: ['Performance', 'Tasks are always in priority order — get_next is simple', 'Required by Python', 'Memory savings'],
              correct: 1
            },
            {
              question: 'What data structure would be more efficient than sorting a list?',
              options: ['Dictionary', 'A heap/priority queue (heapq module)', 'A set', 'A tuple'],
              correct: 1
            },
            {
              question: 'How does get_next() find the right task?',
              options: ['Random', 'First non-completed task in the sorted list (highest priority)', 'Last task', 'Searches by name'],
              correct: 1
            },
            {
              question: 'What OOP concept does Task.__lt__ demonstrate?',
              options: ['Inheritance', 'Operator overloading — custom < comparison', 'Composition', 'Encapsulation'],
              correct: 1
            },
            {
              question: 'How would you add task dependencies (B depends on A)?',
              options: ['Cannot be done', 'Add a dependencies list to Task; get_next checks if dependencies are done', 'Use inheritance', 'Use a global variable'],
              correct: 1
            }
          ]
        },
        {
          id: 'oop_challenge_filesystem',
          title: 'File System Simulator',
          type: 'challenge',
          theory: `<h2>Challenge: File System Simulator</h2>
<p>Build a virtual file system with files, folders, and navigation. This tests the Composite pattern, recursion, and tree structures in OOP.</p>

<h3>Design</h3>
<pre><code>class FileSystemItem:
    """Base class for files and folders"""
    def __init__(self, name):
        self.name = name
        self.parent = None
    
    def get_path(self):
        if self.parent is None:
            return "/" + self.name
        return self.parent.get_path() + "/" + self.name
    
    def size(self):
        raise NotImplementedError

class File(FileSystemItem):
    def __init__(self, name, content=""):
        super().__init__(name)
        self.content = content
    
    def size(self):
        return len(self.content)
    
    def __str__(self):
        return f"📄 {self.name} ({self.size()} bytes)"

class Folder(FileSystemItem):
    def __init__(self, name):
        super().__init__(name)
        self.children = []
    
    def add(self, item):
        item.parent = self
        self.children.append(item)
        return self
    
    def size(self):
        return sum(child.size() for child in self.children)
    
    def list_contents(self):
        return [child.name for child in self.children]
    
    def find(self, name):
        for child in self.children:
            if child.name == name:
                return child
            if isinstance(child, Folder):
                result = child.find(name)
                if result:
                    return result
        return None
    
    def __str__(self):
        return f"📁 {self.name} ({len(self.children)} items, {self.size()} bytes)"

# Usage
root = Folder("root")
docs = Folder("docs")
root.add(docs)
docs.add(File("readme.txt", "Hello World"))
docs.add(File("notes.txt", "Some notes here"))
root.add(File("config.py", "x = 1"))

print(root)  # 📁 root (2 items, 29 bytes)
print(root.find("readme.txt").get_path())  # /root/docs/readme.txt</code></pre>`,
          challenge: {
            description: 'Create File(name, size) with a size attribute. Create Folder(name) with children list, add(item) method, and total_size() that sums all children sizes (recursively for nested folders). Create a root folder, add a "docs" subfolder with File("a.txt", 100) and File("b.txt", 200), add File("c.txt", 50) directly to root. Print root total_size().',
            starterCode: `class File:\n    def __init__(self, name, size):\n        self.name = name\n        self.size = size\n\nclass Folder:\n    def __init__(self, name):\n        self.name = name\n        self.children = []\n    \n    def add(self, item):\n        self.children.append(item)\n        return self\n    \n    def total_size(self):\n        total = 0\n        for child in self.children:\n            if isinstance(child, Folder):\n                total += child.total_size()\n            else:\n                total += child.size\n        return total\n\nroot = Folder("root")\ndocs = Folder("docs")\ndocs.add(File("a.txt", 100))\ndocs.add(File("b.txt", 200))\nroot.add(docs)\nroot.add(File("c.txt", 50))\nprint(root.total_size())`,
            expectedOutput: '350',
            hints: [
              'root contains: docs folder (300 bytes) + c.txt (50 bytes)',
              'docs contains: a.txt (100) + b.txt (200) = 300',
              'total: 300 + 50 = 350',
              'total_size recursively sums nested folder sizes'
            ]
          },
          quiz: [
            {
              question: 'What design pattern does a file system tree use?',
              options: ['Singleton', 'Composite — files and folders share an interface, folders contain both', 'Observer', 'Strategy'],
              correct: 1
            },
            {
              question: 'Why does Folder.total_size() need recursion?',
              options: ['It does not', 'Folders can contain other folders — recursion handles nested structures', 'For performance', 'Python requires it'],
              correct: 1
            },
            {
              question: 'What does isinstance(child, Folder) check in total_size?',
              options: ['If it is a file', 'Whether to recurse (folders) or use size directly (files)', 'If it exists', 'If it is empty'],
              correct: 1
            },
            {
              question: 'How would you implement get_path() (like /root/docs/file.txt)?',
              options: ['Store full path in each item', 'Each item has a parent reference — walk up to build the path', 'Use a global variable', 'Cannot be done'],
              correct: 1
            },
            {
              question: 'What makes File and Folder work together uniformly?',
              options: ['Nothing', 'Both can be added to a Folder and have a size concept (polymorphism)', 'They inherit from each other', 'Global functions handle both'],
              correct: 1
            },
            {
              question: 'What OOP concepts does this challenge combine?',
              options: ['Only inheritance', 'Composition, polymorphism, recursion, and the Composite pattern', 'Only encapsulation', 'Only decorators'],
              correct: 1
            }
          ]
        }
      ]
    }
  ]
};