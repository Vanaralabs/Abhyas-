import { useState, useCallback } from 'react'
import { useStore } from '../utils/store'
import languages from '../data/languages'
import Editor from '@monaco-editor/react'
import { Play, RotateCcw, CheckCircle2, ChevronLeft, Swords, Trophy, Loader2 } from 'lucide-react'
import { executeCode } from '../utils/codeRunner'
import { getMonacoLanguage } from '../utils/courseData'

// Arena challenges per language
const arenaChallenges = {
  python: [
    {
      id: 'fizzbuzz',
      title: 'FizzBuzz',
      difficulty: 'Easy',
      description: 'Print numbers from 1 to 15. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", for both print "FizzBuzz".',
      starterCode: '# Print FizzBuzz for 1 to 15\n',
      expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz',
      hints: ['Use a for loop with range(1, 16)', 'Check divisibility by 15 first, then 3, then 5', 'Use the modulo operator %'],
    },
    {
      id: 'sum_even',
      title: 'Sum of Evens',
      difficulty: 'Easy',
      description: 'Calculate and print the sum of all even numbers from 1 to 20.',
      starterCode: '# Sum all even numbers from 1 to 20\n',
      expectedOutput: '110',
      hints: ['Use range(2, 21, 2) to get even numbers', 'Or use a loop and check if num % 2 == 0', 'sum() with a generator works too'],
    },
    {
      id: 'factorial',
      title: 'Factorial',
      difficulty: 'Medium',
      description: 'Write a function factorial(n) that returns n!. Print factorial(7).',
      starterCode: '# Define factorial function and print factorial(7)\n',
      expectedOutput: '5040',
      hints: ['def factorial(n): multiply from 1 to n', 'Base case: factorial(0) = 1', 'Use a loop or recursion'],
    },
    {
      id: 'count_vowels',
      title: 'Count Vowels',
      difficulty: 'Medium',
      description: 'Count and print the number of vowels (a, e, i, o, u) in "programming is fun".',
      starterCode: 'text = "programming is fun"\n# Count vowels\n',
      expectedOutput: '5',
      hints: ['Define vowels = "aeiou"', 'Loop through each character in text', 'Check if char.lower() is in vowels'],
    },
    {
      id: 'prime_check',
      title: 'List Primes',
      difficulty: 'Hard',
      description: 'Print all prime numbers between 2 and 30, separated by spaces on one line.',
      starterCode: '# Print all primes from 2 to 30\n',
      expectedOutput: '2 3 5 7 11 13 17 19 23 29',
      hints: ['A prime is only divisible by 1 and itself', 'For each number, check divisibility from 2 to sqrt(n)', 'Collect primes in a list, then join with spaces'],
    },
    {
      id: 'flatten_list',
      title: 'Flatten Nested List',
      difficulty: 'Hard',
      description: 'Flatten [[1, 2], [3, 4], [5, 6]] into a single list and print it.',
      starterCode: 'nested = [[1, 2], [3, 4], [5, 6]]\n# Flatten and print\n',
      expectedOutput: '[1, 2, 3, 4, 5, 6]',
      hints: ['Use a list comprehension with two for clauses', '[item for sublist in nested for item in sublist]', 'Or use itertools.chain'],
    },
  ],
  javascript: [
    {
      id: 'fizzbuzz',
      title: 'FizzBuzz',
      difficulty: 'Easy',
      description: 'Print numbers from 1 to 15. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", for both print "FizzBuzz".',
      starterCode: '// Print FizzBuzz for 1 to 15\n',
      expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz',
      hints: ['Use a for loop from 1 to 15', 'Check i % 15 === 0 first', 'Use console.log() to print'],
    },
    {
      id: 'array_sum',
      title: 'Array Sum',
      difficulty: 'Easy',
      description: 'Calculate the sum of [10, 20, 30, 40, 50] and print it.',
      starterCode: 'const nums = [10, 20, 30, 40, 50];\n// Calculate and print the sum\n',
      expectedOutput: '150',
      hints: ['Use reduce((acc, n) => acc + n, 0)', 'Or use a for...of loop with a total variable', 'console.log the final sum'],
    },
    {
      id: 'palindrome',
      title: 'Palindrome Check',
      difficulty: 'Medium',
      description: 'Write a function isPalindrome(str). Print the result for "racecar" and "hello".',
      starterCode: '// Define isPalindrome and test with "racecar" and "hello"\n',
      expectedOutput: 'true\nfalse',
      hints: ['Reverse: str.split("").reverse().join("")', 'Compare reversed to original', 'console.log the boolean result'],
    },
    {
      id: 'remove_duplicates',
      title: 'Remove Duplicates',
      difficulty: 'Medium',
      description: 'Remove duplicates from [1, 2, 2, 3, 4, 4, 5] and print the result as a string.',
      starterCode: 'const arr = [1, 2, 2, 3, 4, 4, 5];\n// Remove duplicates and print\n',
      expectedOutput: '1,2,3,4,5',
      hints: ['Use [...new Set(arr)]', 'Or filter with indexOf', 'Print with .join(",")'],
    },
    {
      id: 'deep_clone',
      title: 'Object Deep Clone',
      difficulty: 'Hard',
      description: 'Deep clone the object {a: 1, b: {c: 2}} without using JSON methods. Change clone.b.c to 99. Print original.b.c and clone.b.c.',
      starterCode: 'const original = {a: 1, b: {c: 2}};\n// Deep clone, modify, and print both\n',
      expectedOutput: '2\n99',
      hints: ['Write a recursive function that checks typeof', 'If value is object, recurse into it', 'Arrays need Array.isArray check'],
    },
    {
      id: 'debounce',
      title: 'Implement Debounce',
      difficulty: 'Hard',
      description: 'Implement a debounce function. Call the debounced function 3 times rapidly, then after 100ms print how many times the original ran (should be 1).',
      starterCode: '// Implement debounce(fn, delay)\n',
      expectedOutput: '1',
      hints: ['debounce returns a new function', 'Use setTimeout and clearTimeout', 'Store the timeout ID in closure'],
    },
  ],
  html: [
    {
      id: 'basic_page',
      title: 'Basic Page Structure',
      difficulty: 'Easy',
      description: 'Create a complete HTML page with a heading "My Website" and a paragraph "Welcome to my site".',
      starterCode: '<!-- Create a full HTML page -->\n',
      expectedOutput: '<h1>My Website</h1>',
      hints: ['Start with <!DOCTYPE html>', 'Use <h1> for the heading', 'Use <p> for the paragraph'],
    },
    {
      id: 'nav_links',
      title: 'Navigation Links',
      difficulty: 'Easy',
      description: 'Create a <nav> with three links: Home (/), About (/about), Contact (/contact).',
      starterCode: '<!-- Create navigation -->\n',
      expectedOutput: '<nav>',
      hints: ['Wrap links in <nav> element', 'Use <a href="/"> for each link', 'Three <a> tags inside the <nav>'],
    },
    {
      id: 'form_validation',
      title: 'Registration Form',
      difficulty: 'Medium',
      description: 'Create a form with required fields: name (text), email (email), password (password, min 8 chars), and a submit button.',
      starterCode: '<!-- Registration form with validation -->\n',
      expectedOutput: '<form>',
      hints: ['Use required attribute for required fields', 'type="email" adds email validation', 'minlength="8" for password length'],
    },
    {
      id: 'table_data',
      title: 'Data Table',
      difficulty: 'Medium',
      description: 'Create a table with headers (Name, Age, City) and two rows of data.',
      starterCode: '<!-- Create a data table -->\n',
      expectedOutput: '<table>',
      hints: ['Use <thead> and <tbody> for structure', '<tr> for rows, <th> for headers, <td> for data', 'Two <tr> elements in tbody'],
    },
    {
      id: 'semantic_article',
      title: 'Blog Post Layout',
      difficulty: 'Hard',
      description: 'Create a semantic blog post with: <article>, <header> with <h1> and <time>, <section> for content, <aside> for related links, <footer> with author.',
      starterCode: '<!-- Semantic blog post -->\n',
      expectedOutput: '<article>',
      hints: ['<article> wraps the whole post', '<header> contains title and date', '<time datetime="2024-01-15"> for the date'],
    },
    {
      id: 'accessible_form',
      title: 'Accessible Form',
      difficulty: 'Hard',
      description: 'Create a form with proper accessibility: <fieldset>, <legend>, labels linked via for/id, aria-describedby for help text, and aria-required.',
      starterCode: '<!-- Accessible form -->\n',
      expectedOutput: '<fieldset>',
      hints: ['<fieldset> groups related inputs', '<legend> describes the group', '<label for="inputId"> links label to input'],
    },
  ],
  css: [
    {
      id: 'center_div',
      title: 'Center a Div',
      difficulty: 'Easy',
      description: 'Write CSS to center a div both horizontally and vertically using flexbox on the parent.',
      starterCode: '/* Center the child div */\n.parent {\n\n}',
      expectedOutput: 'display: flex',
      hints: ['display: flex on the parent', 'justify-content: center for horizontal', 'align-items: center for vertical'],
    },
    {
      id: 'hover_button',
      title: 'Button Hover Effect',
      difficulty: 'Easy',
      description: 'Style a button with blue (#3b82f6) background, white text, rounded corners, and a darker blue on hover with smooth transition.',
      starterCode: '/* Button with hover */\n.btn {\n\n}\n\n.btn:hover {\n\n}',
      expectedOutput: 'transition',
      hints: ['Set background-color: #3b82f6', 'border-radius for rounded corners', 'transition: background-color 0.2s'],
    },
    {
      id: 'responsive_grid',
      title: 'Responsive Grid',
      difficulty: 'Medium',
      description: 'Create a 3-column grid that becomes 1 column below 768px using CSS Grid and a media query.',
      starterCode: '/* Responsive grid */\n.grid {\n\n}\n\n@media (max-width: 768px) {\n  .grid {\n\n  }\n}',
      expectedOutput: 'grid-template-columns',
      hints: ['display: grid on .grid', 'grid-template-columns: repeat(3, 1fr)', 'Change to 1fr in the media query'],
    },
    {
      id: 'card_shadow',
      title: 'Card with Shadow',
      difficulty: 'Medium',
      description: 'Style a card with: white background, 1rem padding, 0.5rem border-radius, and a subtle box-shadow that increases on hover.',
      starterCode: '/* Card styling */\n.card {\n\n}\n\n.card:hover {\n\n}',
      expectedOutput: 'box-shadow',
      hints: ['box-shadow: 0 2px 8px rgba(0,0,0,0.1)', 'Increase shadow on hover', 'Add transition for smooth effect'],
    },
    {
      id: 'sticky_nav',
      title: 'Sticky Navigation',
      difficulty: 'Hard',
      description: 'Create a sticky nav that stays at the top when scrolling, has a backdrop blur, and a bottom border.',
      starterCode: '/* Sticky navigation */\n.nav {\n\n}',
      expectedOutput: 'position: sticky',
      hints: ['position: sticky; top: 0', 'backdrop-filter: blur(10px)', 'z-index to stay above content'],
    },
    {
      id: 'animation_keyframes',
      title: 'Pulse Animation',
      difficulty: 'Hard',
      description: 'Create a pulse animation using @keyframes that scales an element from 1 to 1.1 and back, running infinitely over 2 seconds.',
      starterCode: '/* Pulse animation */\n@keyframes pulse {\n\n}\n\n.pulse {\n\n}',
      expectedOutput: '@keyframes pulse',
      hints: ['0% and 100%: transform: scale(1)', '50%: transform: scale(1.1)', 'animation: pulse 2s infinite on .pulse'],
    },
  ],
  typescript: [
    {
      id: 'typed_function',
      title: 'Typed Add Function',
      difficulty: 'Easy',
      description: 'Create a function add(a: number, b: number): number. Print add(5, 3).',
      starterCode: '// Typed add function\n',
      expectedOutput: '8',
      hints: ['function add(a: number, b: number): number', 'return a + b', 'console.log(add(5, 3))'],
    },
    {
      id: 'interface_use',
      title: 'Interface Object',
      difficulty: 'Easy',
      description: 'Define interface User with name: string and age: number. Create a User and print their name.',
      starterCode: '// Define User interface\n',
      expectedOutput: 'Alice',
      hints: ['interface User { name: string; age: number }', 'const user: User = { name: "Alice", age: 30 }', 'console.log(user.name)'],
    },
    {
      id: 'generic_function',
      title: 'Generic Identity',
      difficulty: 'Medium',
      description: 'Create a generic function identity<T>(arg: T): T that returns its argument. Print identity(42) and identity("hello").',
      starterCode: '// Generic identity function\n',
      expectedOutput: '42\nhello',
      hints: ['function identity<T>(arg: T): T { return arg }', 'console.log(identity(42))', 'console.log(identity("hello"))'],
    },
    {
      id: 'union_narrowing',
      title: 'Union Type Guard',
      difficulty: 'Medium',
      description: 'Write function formatValue(val: string | number): string that returns "NUM: 42" for numbers and "STR: hello" for strings. Print results for 42 and "hello".',
      starterCode: '// Union type with narrowing\n',
      expectedOutput: 'NUM: 42\nSTR: hello',
      hints: ['Use typeof val === "number" to narrow', 'Return "NUM: " + val or "STR: " + val', 'console.log each call'],
    },
    {
      id: 'mapped_type',
      title: 'Readonly Mapped Type',
      difficulty: 'Hard',
      description: 'Create a type MyReadonly<T> that makes all properties of T readonly (without using built-in Readonly). Demonstrate it prevents mutation by printing "Readonly works".',
      starterCode: '// Custom Readonly mapped type\n',
      expectedOutput: 'Readonly works',
      hints: ['type MyReadonly<T> = { readonly [K in keyof T]: T[K] }', 'Create an object with MyReadonly<{name: string}>', 'Print "Readonly works" to confirm'],
    },
    {
      id: 'discriminated_union',
      title: 'Discriminated Union',
      difficulty: 'Hard',
      description: 'Define Shape = Circle(kind, radius) | Rectangle(kind, width, height). Write getArea function. Print area of circle(r=5) and rectangle(3x4).',
      starterCode: '// Discriminated union shapes\n',
      expectedOutput: '78.54\n12',
      hints: ['Each shape has a kind property as literal type', 'switch(shape.kind) to narrow', 'Circle area = Math.PI * r * r, round to 2 decimals'],
    },
  ],
  cpp: [
    {
      id: 'hello_cpp',
      title: 'Hello C++',
      difficulty: 'Easy',
      description: 'Print "Hello, C++!" using cout.',
      starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print here\n    return 0;\n}',
      expectedOutput: 'Hello, C++!',
      hints: ['cout << "Hello, C++!" << endl;', 'endl adds a newline', 'Don\'t forget the semicolon'],
    },
    {
      id: 'swap_vars',
      title: 'Swap Two Variables',
      difficulty: 'Easy',
      description: 'Swap two integers a=5 and b=10 without a temp variable. Print a and b after swapping.',
      starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 10;\n    // Swap without temp\n    cout << a << endl << b << endl;\n    return 0;\n}',
      expectedOutput: '10\n5',
      hints: ['a = a + b; b = a - b; a = a - b;', 'Or use XOR: a ^= b; b ^= a; a ^= b;', 'Or use std::swap(a, b)'],
    },
    {
      id: 'fibonacci',
      title: 'Fibonacci Sequence',
      difficulty: 'Medium',
      description: 'Print the first 10 Fibonacci numbers separated by spaces: 0 1 1 2 3 5 8 13 21 34',
      starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Fibonacci\n    return 0;\n}',
      expectedOutput: '0 1 1 2 3 5 8 13 21 34',
      hints: ['Start with a=0, b=1', 'Each new = a + b, then shift', 'Print with spaces between'],
    },
    {
      id: 'reverse_array',
      title: 'Reverse an Array',
      difficulty: 'Medium',
      description: 'Reverse the array {1, 2, 3, 4, 5} in place and print elements space-separated.',
      starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    // Reverse and print\n    return 0;\n}',
      expectedOutput: '5 4 3 2 1',
      hints: ['Swap arr[i] with arr[n-1-i]', 'Loop from 0 to n/2', 'Print with spaces after reversing'],
    },
    {
      id: 'binary_search',
      title: 'Binary Search',
      difficulty: 'Hard',
      description: 'Implement binary search on sorted array {2, 5, 8, 12, 16, 23, 38, 45, 56, 72}. Find index of 23 and print it.',
      starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {2, 5, 8, 12, 16, 23, 38, 45, 56, 72};\n    int target = 23;\n    // Binary search\n    return 0;\n}',
      expectedOutput: '5',
      hints: ['Set low=0, high=n-1', 'While low <= high, check mid = (low+high)/2', 'If arr[mid] == target, print mid'],
    },
    {
      id: 'linked_list_sum',
      title: 'Linked List Sum',
      difficulty: 'Hard',
      description: 'Create a linked list with values 10, 20, 30, 40. Traverse and print the sum.',
      starterCode: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n};\n\nint main() {\n    // Create list and sum\n    return 0;\n}',
      expectedOutput: '100',
      hints: ['Create nodes with new Node{value, nullptr}', 'Link them: node1->next = node2', 'Traverse with while(current) loop, sum data'],
    },
  ],
  java: [
    {
      id: 'hello_java',
      title: 'Hello Java',
      difficulty: 'Easy',
      description: 'Print "Hello, Java!" to the console.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Print here\n    }\n}',
      expectedOutput: 'Hello, Java!',
      hints: ['System.out.println("Hello, Java!");', 'println adds a newline automatically', 'String goes in double quotes'],
    },
    {
      id: 'max_of_three',
      title: 'Max of Three',
      difficulty: 'Easy',
      description: 'Find and print the maximum of three numbers: 15, 42, 8.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int a = 15, b = 42, c = 8;\n        // Find and print max\n    }\n}',
      expectedOutput: '42',
      hints: ['Use Math.max(a, Math.max(b, c))', 'Or use nested if-else', 'Print the result'],
    },
    {
      id: 'reverse_string',
      title: 'Reverse String',
      difficulty: 'Medium',
      description: 'Reverse the string "Hello World" and print it.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        String s = "Hello World";\n        // Reverse and print\n    }\n}',
      expectedOutput: 'dlroW olleH',
      hints: ['Use new StringBuilder(s).reverse().toString()', 'Or loop from end to start', 'Build a new string char by char'],
    },
    {
      id: 'count_words',
      title: 'Word Counter',
      difficulty: 'Medium',
      description: 'Count and print the number of words in "Java is a powerful programming language".',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        String text = "Java is a powerful programming language";\n        // Count and print words\n    }\n}',
      expectedOutput: '6',
      hints: ['Use text.split(" ").length', 'split returns an array of words', 'Print the array length'],
    },
    {
      id: 'sort_array',
      title: 'Bubble Sort',
      difficulty: 'Hard',
      description: 'Implement bubble sort for {64, 34, 25, 12, 22, 11, 90}. Print sorted array space-separated.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {64, 34, 25, 12, 22, 11, 90};\n        // Bubble sort and print\n    }\n}',
      expectedOutput: '11 12 22 25 34 64 90',
      hints: ['Nested loops: outer for passes, inner for comparisons', 'Swap if arr[j] > arr[j+1]', 'Print with spaces after sorting'],
    },
    {
      id: 'matrix_diagonal',
      title: 'Matrix Diagonal Sum',
      difficulty: 'Hard',
      description: 'For a 3x3 matrix {{1,2,3},{4,5,6},{7,8,9}}, print the sum of the main diagonal (1+5+9).',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};\n        // Sum main diagonal\n    }\n}',
      expectedOutput: '15',
      hints: ['Main diagonal: matrix[i][i]', 'Loop i from 0 to 2', 'Sum and print'],
    },
  ],
  sql: [
    {
      id: 'select_all',
      title: 'SELECT All',
      difficulty: 'Easy',
      description: 'Write a query to select all columns from a table called "users".',
      starterCode: '-- Select all users\n',
      expectedOutput: 'SELECT * FROM users',
      hints: ['SELECT * gets all columns', 'FROM specifies the table', 'End with semicolon'],
    },
    {
      id: 'where_filter',
      title: 'Filter with WHERE',
      difficulty: 'Easy',
      description: 'Select name and email from "users" where age is greater than 25.',
      starterCode: '-- Filter users by age\n',
      expectedOutput: 'WHERE age > 25',
      hints: ['SELECT name, email FROM users', 'Add WHERE clause after FROM', 'Use > for greater than'],
    },
    {
      id: 'join_tables',
      title: 'INNER JOIN',
      difficulty: 'Medium',
      description: 'Join "orders" with "users" on orders.user_id = users.id. Select user name and order total.',
      starterCode: '-- Join orders with users\n',
      expectedOutput: 'INNER JOIN',
      hints: ['SELECT users.name, orders.total', 'FROM orders INNER JOIN users', 'ON orders.user_id = users.id'],
    },
    {
      id: 'group_count',
      title: 'GROUP BY Count',
      difficulty: 'Medium',
      description: 'Count users per city, ordered by count descending.',
      starterCode: '-- Count users per city\n',
      expectedOutput: 'GROUP BY city',
      hints: ['SELECT city, COUNT(*) FROM users', 'GROUP BY city', 'ORDER BY COUNT(*) DESC'],
    },
    {
      id: 'subquery',
      title: 'Subquery Filter',
      difficulty: 'Hard',
      description: 'Select users whose age is above the average age of all users.',
      starterCode: '-- Users above average age\n',
      expectedOutput: 'SELECT',
      hints: ['Subquery: (SELECT AVG(age) FROM users)', 'WHERE age > (subquery)', 'This is a correlated subquery alternative'],
    },
    {
      id: 'window_function',
      title: 'Rank with Window',
      difficulty: 'Hard',
      description: 'Rank users by score within each department using RANK() window function.',
      starterCode: '-- Rank users by score per department\n',
      expectedOutput: 'RANK()',
      hints: ['RANK() OVER (PARTITION BY dept ORDER BY score DESC)', 'SELECT name, dept, score, RANK() OVER(...)', 'PARTITION BY creates groups'],
    },
  ],
  r: [
    {
      id: 'vector_mean',
      title: 'Vector Mean',
      difficulty: 'Easy',
      description: 'Create a vector of 1 to 10 and print its mean.',
      starterCode: '# Vector mean\n',
      expectedOutput: '5.5',
      hints: ['x <- 1:10', 'mean(x) calculates average', 'cat() to print without [1] prefix'],
    },
    {
      id: 'sequence_ops',
      title: 'Sequence Operations',
      difficulty: 'Easy',
      description: 'Create a vector c(4, 8, 15, 16, 23, 42). Print the sum and length.',
      starterCode: '# Sum and length\n',
      expectedOutput: '108\n6',
      hints: ['x <- c(4, 8, 15, 16, 23, 42)', 'sum(x) and length(x)', 'Use cat() with "\n" between'],
    },
    {
      id: 'filter_dataframe',
      title: 'Filter Data Frame',
      difficulty: 'Medium',
      description: 'Create a data frame with names (Alice, Bob, Charlie) and ages (25, 30, 35). Print names where age > 28.',
      starterCode: '# Filter data frame\n',
      expectedOutput: 'Bob Charlie',
      hints: ['df <- data.frame(name=c(...), age=c(...))', 'Filter: df[df$age > 28, "name"]', 'Use cat() to print space-separated'],
    },
    {
      id: 'apply_rowsums',
      title: 'Matrix Row Sums',
      difficulty: 'Medium',
      description: 'Create a 3x3 matrix (1:9, filled by row) and print the sum of each row.',
      starterCode: '# Row sums of 3x3 matrix\n',
      expectedOutput: '6 15 24',
      hints: ['matrix(1:9, nrow=3, byrow=TRUE)', 'apply(mat, 1, sum) for row sums', 'cat(result) prints space-separated'],
    },
    {
      id: 'custom_function',
      title: 'Custom Statistics',
      difficulty: 'Hard',
      description: 'Write a function stats(x) that returns a named list with mean, median, and sd. Call on c(2,4,4,4,5,5,7,9). Print mean.',
      starterCode: '# Custom stats function\n',
      expectedOutput: '5',
      hints: ['stats <- function(x) list(mean=mean(x), ...)', 'result <- stats(c(2,4,4,4,5,5,7,9))', 'cat(result$mean)'],
    },
    {
      id: 'regex_extract',
      title: 'Regex Extract',
      difficulty: 'Hard',
      description: 'Extract all numbers from "Order 123 has 4 items worth $56.78". Print them space-separated.',
      starterCode: '# Extract numbers with regex\n',
      expectedOutput: '123 4 56.78',
      hints: ['Use regmatches() with gregexpr()', 'Pattern: "[0-9]+\\.?[0-9]*"', 'cat(unlist(result)) to print'],
    },
  ],
  git: [
    {
      id: 'init_commit',
      title: 'Init and Commit',
      difficulty: 'Easy',
      description: 'Write the 3 commands to: initialize a repo, stage all files, commit with message "Initial commit".',
      starterCode: '# Git commands (one per line)\n',
      expectedOutput: 'git init\ngit add .\ngit commit -m "Initial commit"',
      hints: ['git init creates a new repo', 'git add . stages everything', 'git commit -m "message" commits'],
    },
    {
      id: 'check_status',
      title: 'Check Status and Log',
      difficulty: 'Easy',
      description: 'Write commands to check repo status and view the last 3 commits (one-line format).',
      starterCode: '# Status and log commands\n',
      expectedOutput: 'git status\ngit log --oneline -3',
      hints: ['git status shows working tree state', 'git log shows commit history', '--oneline -3 for compact 3 entries'],
    },
    {
      id: 'branch_workflow',
      title: 'Feature Branch',
      difficulty: 'Medium',
      description: 'Write commands to: create branch "feature", switch to it, then switch back to main and merge feature.',
      starterCode: '# Branch workflow\n',
      expectedOutput: 'git branch feature\ngit checkout feature\ngit checkout main\ngit merge feature',
      hints: ['git branch name creates a branch', 'git checkout name switches to it', 'Merge from main into feature'],
    },
    {
      id: 'stash_apply',
      title: 'Stash Changes',
      difficulty: 'Medium',
      description: 'Write commands to: stash current changes with message "WIP: login", list stashes, then apply the latest stash.',
      starterCode: '# Stash workflow\n',
      expectedOutput: 'git stash push -m "WIP: login"\ngit stash list\ngit stash apply',
      hints: ['git stash push -m "message" saves changes', 'git stash list shows all stashes', 'git stash apply restores latest'],
    },
    {
      id: 'rebase_interactive',
      title: 'Interactive Rebase',
      difficulty: 'Hard',
      description: 'Write the command to interactively rebase the last 4 commits (to squash, reorder, or edit them).',
      starterCode: '# Interactive rebase\n',
      expectedOutput: 'git rebase -i HEAD~4',
      hints: ['git rebase -i for interactive mode', 'HEAD~4 means last 4 commits', 'This opens an editor to pick/squash/edit'],
    },
    {
      id: 'cherry_pick',
      title: 'Cherry Pick',
      difficulty: 'Hard',
      description: 'Write commands to: cherry-pick commit abc123 onto current branch, then if there is a conflict, abort the cherry-pick.',
      starterCode: '# Cherry pick workflow\n',
      expectedOutput: 'git cherry-pick abc123\ngit cherry-pick --abort',
      hints: ['git cherry-pick <hash> applies that commit', '--abort cancels if conflicts arise', 'These are two separate scenarios'],
    },
  ],
  docker: [
    {
      id: 'run_container',
      title: 'Run a Container',
      difficulty: 'Easy',
      description: 'Write the command to run nginx, mapping port 8080 to 80, in detached mode, named "web".',
      starterCode: '# Docker run\n',
      expectedOutput: 'docker run -d --name web -p 8080:80 nginx',
      hints: ['-d for detached (background)', '--name web gives it a name', '-p 8080:80 maps host:container ports'],
    },
    {
      id: 'list_stop',
      title: 'List and Stop',
      difficulty: 'Easy',
      description: 'Write commands to: list running containers, then stop the container named "web".',
      starterCode: '# List and stop\n',
      expectedOutput: 'docker ps\ndocker stop web',
      hints: ['docker ps shows running containers', 'docker stop <name> stops it gracefully', 'Use the container name "web"'],
    },
    {
      id: 'dockerfile_node',
      title: 'Node.js Dockerfile',
      difficulty: 'Medium',
      description: 'Write a Dockerfile: FROM node:18-alpine, WORKDIR /app, COPY package*.json, RUN npm install, COPY ., EXPOSE 3000, CMD ["node", "index.js"].',
      starterCode: '# Dockerfile\n',
      expectedOutput: 'FROM node:18-alpine',
      hints: ['Each instruction on its own line', 'COPY package*.json ./ before npm install (layer caching)', 'CMD uses exec form ["node", "index.js"]'],
    },
    {
      id: 'compose_two',
      title: 'Docker Compose',
      difficulty: 'Medium',
      description: 'Write a docker-compose.yml with services: web (build: ., ports 3000:3000) and db (image: postgres:15, environment POSTGRES_PASSWORD=secret).',
      starterCode: '# docker-compose.yml\n',
      expectedOutput: 'services:',
      hints: ['Start with services:', 'web: build: . and ports:', 'db: image: postgres:15 and environment:'],
    },
    {
      id: 'multi_stage',
      title: 'Multi-Stage Build',
      difficulty: 'Hard',
      description: 'Write a multi-stage Dockerfile: Stage 1 (builder) uses node:18 to build, Stage 2 uses node:18-alpine and copies only the built output.',
      starterCode: '# Multi-stage Dockerfile\n',
      expectedOutput: 'FROM node:18-alpine',
      hints: ['FROM node:18 AS builder (first stage)', 'RUN npm run build in first stage', 'FROM node:18-alpine (second stage), COPY --from=builder'],
    },
    {
      id: 'volume_network',
      title: 'Volumes & Networks',
      difficulty: 'Hard',
      description: 'Write a docker run command with: named volume "dbdata" mounted at /var/lib/postgresql/data, connected to network "backend", image postgres:15.',
      starterCode: '# Run with volume and network\n',
      expectedOutput: 'docker run',
      hints: ['-v dbdata:/var/lib/postgresql/data', '--network backend', 'Combine: docker run -d -v ... --network ... postgres:15'],
    },
  ],
  'ai-prompts': [
    {
      id: 'clear_prompt',
      title: 'Clear Instructions',
      difficulty: 'Easy',
      description: 'Write a prompt asking AI to explain what an API is to a 10-year-old in exactly 3 sentences, using a restaurant analogy.',
      starterCode: '# Write your prompt\n',
      expectedOutput: 'Explain',
      hints: ['Specify audience: "to a 10-year-old"', 'Set constraint: "in exactly 3 sentences"', 'Request analogy: "using a restaurant analogy"'],
    },
    {
      id: 'format_output',
      title: 'Formatted Output',
      difficulty: 'Easy',
      description: 'Write a prompt asking AI to compare Python vs JavaScript as a markdown table with columns: Feature, Python, JavaScript (minimum 4 rows).',
      starterCode: '# Formatted output prompt\n',
      expectedOutput: 'table',
      hints: ['Specify "as a markdown table"', 'Name the columns explicitly', 'Set minimum: "at least 4 rows"'],
    },
    {
      id: 'role_prompt',
      title: 'Role-Based Prompt',
      difficulty: 'Medium',
      description: 'Write a prompt that assigns AI the role of a senior security engineer reviewing a login function for vulnerabilities. Specify to check for 3 specific things.',
      starterCode: '# Role-based prompt\n',
      expectedOutput: 'You are',
      hints: ['Start with "You are a senior security engineer"', 'Define task: "review this login function"', 'List specifics: SQL injection, XSS, brute force'],
    },
    {
      id: 'chain_of_thought',
      title: 'Chain of Thought',
      difficulty: 'Medium',
      description: 'Write a prompt that asks AI to solve: "A store has 15% off and the item costs $80, what is the final price?" Step by step with clear reasoning.',
      starterCode: '# Chain of thought prompt\n',
      expectedOutput: 'step by step',
      hints: ['Include "think step by step"', 'State the problem clearly with all numbers', 'Ask for final answer at the end'],
    },
    {
      id: 'few_shot',
      title: 'Few-Shot Learning',
      difficulty: 'Hard',
      description: 'Write a few-shot prompt with 2 examples that teaches AI to classify movie reviews as Positive/Negative, then ask it to classify "The plot was confusing and boring".',
      starterCode: '# Few-shot classification prompt\n',
      expectedOutput: 'Negative',
      hints: ['Give 2 examples: review -> classification', 'Example 1: positive review -> Positive', 'Then ask: "Now classify: The plot was..."'],
    },
    {
      id: 'meta_prompt',
      title: 'Meta-Prompting',
      difficulty: 'Hard',
      description: 'Write a meta-prompt asking AI to generate the best possible prompt for writing a cover letter, asking what information it needs from you first.',
      starterCode: '# Meta-prompt\n',
      expectedOutput: 'prompt',
      hints: ['Ask AI to create a prompt, not do the task', '"What is the best prompt to get..." format', 'Ask it what info it needs: "What should I tell you?"'],
    },
  ],
}

export default function Arena() {
  const [selectedLang, setSelectedLang] = useState(null)
  const [selectedChallenge, setSelectedChallenge] = useState(null)
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const { completeArenaChallenge, getArenaSolved, arenaProgress } = useStore()

  const challenges = selectedLang ? (arenaChallenges[selectedLang] || []) : []
  const solved = selectedLang ? getArenaSolved(selectedLang) : 0

  const handleSelectChallenge = (challenge) => {
    setSelectedChallenge(challenge)
    setCode(challenge.starterCode)
    setOutput('')
    setError('')
    setIsCorrect(false)
    setShowHints(false)
  }

  const handleRun = useCallback(() => {
    if (!selectedChallenge) return
    setError('')
    setIsCorrect(false)

    const result = executeCode(code, selectedLang)
    if (result.error) {
      setError(result.error)
      setOutput('')
      return
    }

    setOutput(result.output)
    if (result.output.trim() === selectedChallenge.expectedOutput.trim()) {
      setIsCorrect(true)
      completeArenaChallenge(selectedLang, selectedChallenge.id)
    }
  }, [code, selectedLang, selectedChallenge, completeArenaChallenge])

  const handleReset = () => {
    if (selectedChallenge) {
      setCode(selectedChallenge.starterCode)
      setOutput('')
      setError('')
      setIsCorrect(false)
    }
  }

  // Keyboard shortcut: Ctrl+Enter to run
  const handleKeyDown = useCallback((e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      handleRun()
    }
  }, [handleRun])

  // Language selection screen
  if (!selectedLang) {
    return (
      <div className="page-transition max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Swords size={28} className="text-accent-orange" aria-hidden="true" />
            <h1 className="text-3xl font-bold text-text-primary">Arena</h1>
          </div>
          <p className="text-text-secondary">Pick a language and solve coding challenges to sharpen your skills.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" role="list" aria-label="Available languages">
          {languages.map(lang => {
            const hasChallenges = !!arenaChallenges[lang.id]
            const langSolved = getArenaSolved(lang.id)
            const total = arenaChallenges[lang.id]?.length || 0

            return (
              <button
                key={lang.id}
                role="listitem"
                onClick={() => hasChallenges && setSelectedLang(lang.id)}
                disabled={!hasChallenges}
                className={`p-4 rounded-xl border text-left transition-all ${
                  hasChallenges
                    ? 'bg-surface-800 border-surface-700 hover:border-surface-600 hover:translate-y-[-2px] cursor-pointer'
                    : 'bg-surface-800/50 border-surface-700/50 opacity-50 cursor-not-allowed'
                }`}
              >
                <span className="text-2xl" aria-hidden="true">{lang.icon}</span>
                <h3 className="font-medium text-text-primary mt-2">{lang.title}</h3>
                {hasChallenges ? (
                  <p className="text-xs text-text-muted mt-1">{total} challenges {langSolved > 0 && `• ${langSolved} solved`}</p>
                ) : (
                  <p className="text-xs text-text-muted mt-1">Coming soon</p>
                )}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // Challenge list (no challenge selected yet)
  if (!selectedChallenge) {
    const langMeta = languages.find(l => l.id === selectedLang)
    return (
      <div className="page-transition max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <button
          onClick={() => setSelectedLang(null)}
          className="flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors mb-6"
          aria-label="Back to all languages"
        >
          <ChevronLeft size={16} aria-hidden="true" /> All Languages
        </button>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl" aria-hidden="true">{langMeta?.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-text-primary">{langMeta?.title} Arena</h1>
            <p className="text-sm text-text-secondary">{solved}/{challenges.length} challenges solved</p>
          </div>
        </div>

        <div className="space-y-3" role="list" aria-label="Challenges">
          {challenges.map(challenge => {
            const isSolved = arenaProgress[selectedLang]?.[challenge.id]
            return (
              <button
                key={challenge.id}
                role="listitem"
                onClick={() => handleSelectChallenge(challenge)}
                className="w-full text-left p-4 bg-surface-800 rounded-xl border border-surface-700 hover:border-surface-600 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {isSolved ? (
                      <CheckCircle2 size={20} className="text-accent-green" aria-label="Solved" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-surface-500" aria-label="Unsolved" />
                    )}
                    <div>
                      <h3 className="font-medium text-text-primary group-hover:text-accent-blue transition-colors">
                        {challenge.title}
                      </h3>
                      <p className="text-xs text-text-muted mt-0.5">{challenge.description.slice(0, 80)}...</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    challenge.difficulty === 'Easy' ? 'bg-accent-green/10 text-accent-green' :
                    challenge.difficulty === 'Medium' ? 'bg-accent-orange/10 text-accent-orange' :
                    'bg-accent-red/10 text-accent-red'
                  }`}>
                    {challenge.difficulty}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // Active challenge
  return (
    <div className="page-transition max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <button
        onClick={() => { setSelectedChallenge(null); setOutput(''); setError('') }}
        className="flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors mb-4"
        aria-label="Back to challenge list"
      >
        <ChevronLeft size={16} aria-hidden="true" /> Back to challenges
      </button>

      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-xl font-bold text-text-primary">{selectedChallenge.title}</h1>
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          selectedChallenge.difficulty === 'Easy' ? 'bg-accent-green/10 text-accent-green' :
          selectedChallenge.difficulty === 'Medium' ? 'bg-accent-orange/10 text-accent-orange' :
          'bg-accent-red/10 text-accent-red'
        }`}>
          {selectedChallenge.difficulty}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" onKeyDown={handleKeyDown}>
        {/* Left: Problem */}
        <div className="space-y-4">
          <div className="p-4 bg-surface-800 rounded-xl border border-surface-700">
            <p className="text-sm text-text-secondary leading-relaxed">{selectedChallenge.description}</p>
          </div>

          <div className="p-4 bg-surface-800 rounded-xl border border-surface-700">
            <h4 className="text-sm font-medium text-text-muted mb-2">Expected Output</h4>
            <pre className="text-sm font-mono text-accent-green bg-surface-900 p-3 rounded-lg whitespace-pre-wrap">
              {selectedChallenge.expectedOutput}
            </pre>
          </div>

          {selectedChallenge.hints && (
            <div className="p-4 bg-surface-800 rounded-xl border border-surface-700">
              <button
                onClick={() => setShowHints(!showHints)}
                className="text-sm font-medium text-accent-orange hover:text-orange-300 transition-colors"
                aria-expanded={showHints}
              >
                {showHints ? 'Hide Hints' : 'Show Hints'}
              </button>
              {showHints && (
                <ul className="mt-3 space-y-1.5" aria-label="Hints">
                  {selectedChallenge.hints.map((hint, i) => (
                    <li key={i} className="text-sm text-text-secondary">• {hint}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Right: Editor */}
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden border border-surface-700">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-800 border-b border-surface-700">
              <span className="text-xs text-text-muted font-mono">{selectedLang}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-text-muted hidden sm:inline">Ctrl+Enter to run</span>
                <button onClick={handleReset} className="p-1.5 text-text-muted hover:text-text-secondary" aria-label="Reset code">
                  <RotateCcw size={14} />
                </button>
                <button
                  onClick={handleRun}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-green text-surface-900 text-xs font-semibold rounded-md hover:bg-green-300 transition-colors"
                  aria-label="Run code"
                >
                  <Play size={12} aria-hidden="true" /> Run
                </button>
              </div>
            </div>
            <Editor
              height="300px"
              language={getMonacoLanguage(selectedLang)}
              value={code}
              onChange={(val) => setCode(val || '')}
              theme="vs-dark"
              loading={
                <div className="flex items-center justify-center h-[300px] bg-surface-900">
                  <Loader2 size={24} className="animate-spin text-text-muted" />
                  <span className="ml-2 text-sm text-text-muted">Loading editor...</span>
                </div>
              }
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "'JetBrains Mono', monospace",
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                padding: { top: 12, bottom: 12 },
                wordWrap: 'on',
                tabSize: 4,
                insertSpaces: true,
                automaticLayout: true,
              }}
            />
          </div>

          <div className="rounded-xl border border-surface-700 overflow-hidden" role="status" aria-live="polite">
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-800 border-b border-surface-700">
              <span className="text-xs text-text-muted">Output</span>
              {isCorrect && (
                <span className="flex items-center gap-1 text-xs text-accent-green font-medium">
                  <CheckCircle2 size={12} aria-hidden="true" /> Solved!
                </span>
              )}
            </div>
            <div className="p-4 bg-surface-900 min-h-[100px] max-h-[200px] overflow-auto">
              {error ? (
                <pre className="text-sm font-mono text-accent-red whitespace-pre-wrap">{error}</pre>
              ) : output ? (
                <pre className="text-sm font-mono text-text-primary whitespace-pre-wrap">{output}</pre>
              ) : (
                <span className="text-sm text-text-muted">Run your code to see output...</span>
              )}
            </div>
          </div>

          {isCorrect && (
            <div className="p-4 bg-accent-green/10 border border-accent-green/20 rounded-xl flex items-center gap-3" role="alert">
              <Trophy size={22} className="text-accent-green" aria-hidden="true" />
              <div>
                <p className="font-semibold text-accent-green">Challenge Solved!</p>
                <p className="text-sm text-text-secondary">+50 XP earned</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
