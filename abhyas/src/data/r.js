const course = {
  id: 'r',
  title: 'Learn R',
  icon: '📊',
  description: 'Master R programming for data analysis and statistics. From variables to data frames, build practical data skills with hands-on challenges.',
  totalLessons: 40,
  sections: [
    {
      id: 'basics',
      title: 'R Basics',
      description: 'Learn core R programming concepts from variables to functions',
      totalLessons: 25,
      totalChallenges: 25,
      totalQuizQuestions: 100,
      projects: 0,
      chapters: [
        {
          id: 'introduction',
          title: 'Introduction',
          lessons: [
            {
              id: 'what_is_r',
              title: 'What is R?',
              type: 'challenge',
              theory: `<h2>What is R?</h2><p><strong>R</strong> is a programming language designed specifically for statistical computing, data analysis, and visualization. Created in 1993 by Ross Ihaka and Robert Gentleman at the University of Auckland, it has become the lingua franca of statisticians and data scientists worldwide.</p><h3>Why Learn R?</h3><ul><li><strong>Data Analysis:</strong> Built-in functions for statistics, modeling, and data manipulation</li><li><strong>Visualization:</strong> Powerful plotting libraries (ggplot2, plotly) create publication-quality graphics</li><li><strong>Packages:</strong> Over 19,000 packages on CRAN for every conceivable data task</li><li><strong>Industry:</strong> Used by pharmaceutical companies, finance, academia, and tech giants</li><li><strong>Free:</strong> Open-source with a massive community</li></ul><h3>R vs Python</h3><p>Both are excellent for data work. R excels at statistical analysis and visualization; Python is more general-purpose. Many data scientists use both.</p><h3>Your First R Code</h3><pre><code>print("Hello, R!")
# This is a comment
x <- 42  # Assign 42 to x
print(x)</code></pre><p>R uses <code><-</code> for assignment (not <code>=</code>, though that works too). Comments start with <code>#</code>.</p><h3>RStudio</h3><p>RStudio is the most popular IDE for R. It provides a console, script editor, environment viewer, and plot panel all in one window.</p>`,
              challenge: {
                description: 'Write R code that prints "Hello, R!" to the console.',
                starterCode: '# Print Hello, R!\n',
                expectedOutput: 'Hello, R!',
                hints: ['Use the print() function', 'Put text in double quotes', 'print("Hello, R!")']
              },
              quiz: [
                {
                  question: 'What was R primarily designed for?',
                  options: ['Web development', 'Statistical computing and data analysis', 'Game development', 'Mobile apps'],
                  correct: 1
                },
                {
                  question: 'What is the assignment operator in R?',
                  options: ['=', ':=', '<-', '->'],
                  correct: 2
                },
                {
                  question: 'Where are R packages hosted?',
                  options: ['npm', 'PyPI', 'CRAN', 'Maven'],
                  correct: 2
                },
                {
                  question: 'Which IDE is most popular for R?',
                  options: ['VS Code', 'RStudio', 'Eclipse', 'Jupyter'],
                  correct: 1
                }
              ]
            },
            {
              id: 'r_console_basics',
              title: 'R Console Basics',
              type: 'challenge',
              theory: `<h2>R Console Basics</h2><p>The R console is an interactive environment where you type commands and see results immediately. It's like a sophisticated calculator that can also process text, data, and create graphics.</p><h3>Basic Arithmetic</h3><pre><code>2 + 3     # 5
10 - 4    # 6
3 * 7     # 21
15 / 4    # 3.75
2 ^ 3     # 8 (exponentiation)
17 %% 5   # 2 (modulo - remainder)
17 %/% 5  # 3 (integer division)</code></pre><h3>The print() Function</h3><pre><code>print("Hello!")
print(42)
print(3.14)</code></pre><p>In the console, R auto-prints the result of expressions. In scripts, use <code>print()</code> explicitly.</p><h3>The cat() Function</h3><pre><code>cat("Hello", "World", "\\n")  # Hello World (with newline)
cat("Score:", 95, "\\n")      # Score: 95</code></pre><p><code>cat()</code> concatenates and prints without quotes or [1] prefix — cleaner for user-facing output.</p><h3>Getting Help</h3><pre><code>?print       # Help for print function
help(mean)   # Help for mean function</code></pre>`,
              challenge: {
                description: 'Use cat() to print "Score: 100" followed by a newline.',
                starterCode: '# Print Score: 100 using cat()\n',
                expectedOutput: 'Score: 100',
                hints: ['cat() concatenates arguments', 'Separate items with commas', 'cat("Score:", 100, "\\n")']
              },
              quiz: [
                {
                  question: 'What does %% do in R?',
                  options: ['Division', 'Modulo (remainder)', 'Exponentiation', 'Integer division'],
                  correct: 1
                },
                {
                  question: 'Difference between print() and cat()?',
                  options: ['No difference', 'cat() gives cleaner output without quotes/[1]', 'print() is faster', 'cat() only works with numbers'],
                  correct: 1
                },
                {
                  question: 'What does 2^3 equal in R?',
                  options: ['6', '8', '5', '23'],
                  correct: 1
                },
                {
                  question: 'How do you get help on a function?',
                  options: ['help me', '?function_name', 'info()', 'manual()'],
                  correct: 1
                }
              ]
            },
            {
              id: 'comments_scripts',
              title: 'Comments & Scripts',
              type: 'challenge',
              theory: `<h2>Comments & Scripts</h2><p>Comments explain your code. R uses <code>#</code> for comments — everything after # on a line is ignored.</p><h3>Comments</h3><pre><code># This is a full-line comment
x <- 10  # This is an inline comment
# Calculate the area
area <- 3.14 * radius^2</code></pre><h3>R Scripts</h3><p>An R script is a <code>.R</code> file containing a sequence of R commands. When you "source" a script, R executes all commands top-to-bottom.</p><pre><code># my_analysis.R
# Load data
data <- read.csv("sales.csv")

# Calculate summary
total <- sum(data$revenue)
avg <- mean(data$revenue)

# Print results
cat("Total Revenue:", total, "\\n")
cat("Average Revenue:", avg, "\\n")</code></pre><h3>Best Practices</h3><ul><li>Comment WHY, not WHAT (code shows what)</li><li>Use section headers: <code># --- Data Loading ---</code></li><li>Keep scripts focused on one task</li><li>Put library() calls at the top</li></ul>`,
              challenge: {
                description: 'Write a comment saying "Calculate area" on line 1, then print the result of 3.14 * 5^2.',
                starterCode: '# Write your code here\n',
                expectedOutput: '78.5',
                hints: ['Comments start with #', 'Use print() for output', 'print(3.14 * 5^2)']
              },
              quiz: [
                {
                  question: 'What character starts a comment in R?',
                  options: ['//', '#', '/*', '--'],
                  correct: 1
                },
                {
                  question: 'What file extension do R scripts use?',
                  options: ['.r', '.R', '.rs', '.rscript'],
                  correct: 1
                },
                {
                  question: 'What does "sourcing" a script mean?',
                  options: ['Downloading it', 'Executing all commands in it', 'Compiling it', 'Sharing it'],
                  correct: 1
                },
                {
                  question: 'Where should library() calls go?',
                  options: ['Anywhere', 'At the top of the script', 'At the bottom', 'Inside functions only'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'variables-types',
          title: 'Variables & Types',
          lessons: [
            {
              id: 'variables',
              title: 'Variables & Assignment',
              type: 'challenge',
              theory: `<h2>Variables & Assignment</h2><p>Variables store values for later use. In R, the primary assignment operator is <code><-</code> (left arrow).</p><h3>Assignment</h3><pre><code>x <- 10
name <- "Alice"
pi_val <- 3.14159
is_valid <- TRUE</code></pre><h3>Assignment Operators</h3><ul><li><code><-</code> Preferred, standard R style</li><li><code>=</code> Works but less idiomatic</li><li><code>-></code> Right assignment (rare)</li></ul><h3>Naming Rules</h3><ul><li>Can contain letters, numbers, dots, underscores</li><li>Must start with a letter or dot</li><li>Case-sensitive: <code>myVar</code> ≠ <code>myvar</code></li><li>Cannot use reserved words (if, else, for, etc.)</li></ul><h3>Viewing Variables</h3><pre><code>x <- 42
x        # Just typing the name prints it
print(x) # Explicit print
ls()     # List all variables in environment</code></pre><h3>Conventions</h3><p>R community uses snake_case or dot.case:</p><pre><code>my_variable <- 10     # snake_case
my.variable <- 10     # dot.case (R tradition)
myVariable <- 10      # camelCase (less common in R)</code></pre>`,
              challenge: {
                description: 'Create a variable called "age" with value 25, then print it.',
                starterCode: '# Create age variable and print it\n',
                expectedOutput: '25',
                hints: ['Use <- for assignment', 'age <- 25', 'Then print(age)']
              },
              quiz: [
                {
                  question: 'What is the preferred assignment operator in R?',
                  options: ['=', ':=', '<-', '<<-'],
                  correct: 2
                },
                {
                  question: 'Which is a valid variable name?',
                  options: ['2name', 'my-var', 'my_var', 'for'],
                  correct: 2
                },
                {
                  question: 'Is R case-sensitive?',
                  options: ['No', 'Yes', 'Only for functions', 'Only for strings'],
                  correct: 1
                },
                {
                  question: 'What does ls() do?',
                  options: ['Lists files', 'Lists all variables', 'Lists packages', 'Clears console'],
                  correct: 1
                }
              ]
            },
            {
              id: 'data_types',
              title: 'Data Types',
              type: 'challenge',
              theory: `<h2>Data Types in R</h2><p>R has several fundamental data types (called "atomic types"):</p><h3>Numeric (Double)</h3><pre><code>x <- 42.5
class(x)  # "numeric"</code></pre><h3>Integer</h3><pre><code>n <- 10L   # L suffix makes it integer
class(n)   # "integer"</code></pre><h3>Character (String)</h3><pre><code>name <- "Alice"
greeting <- 'Hello'  # Single or double quotes
class(name)  # "character"</code></pre><h3>Logical (Boolean)</h3><pre><code>flag <- TRUE
done <- FALSE
class(flag)  # "logical"</code></pre><h3>Checking Types</h3><pre><code>class(x)       # Returns the class
typeof(x)      # Returns internal type
is.numeric(x)  # TRUE/FALSE check
is.character(name)  # TRUE</code></pre><h3>Type Conversion</h3><pre><code>as.numeric("42")      # 42
as.character(3.14)    # "3.14"
as.integer(7.9)       # 7 (truncates)
as.logical(1)         # TRUE
as.logical(0)         # FALSE</code></pre>`,
              challenge: {
                description: 'Create a numeric variable x = 3.14, then print its class using class().',
                starterCode: '# Create x and print its class\n',
                expectedOutput: 'numeric',
                hints: ['x <- 3.14', 'Use class() to check type', 'print(class(x))']
              },
              quiz: [
                {
                  question: 'How do you create an integer in R?',
                  options: ['int(10)', '10L', 'integer(10)', '10i'],
                  correct: 1
                },
                {
                  question: 'What does class() return for "hello"?',
                  options: ['string', 'text', 'character', 'char'],
                  correct: 2
                },
                {
                  question: 'as.integer(7.9) returns?',
                  options: ['8', '7', '7.9', 'Error'],
                  correct: 1
                },
                {
                  question: 'What is the logical type in R?',
                  options: ['true/false', 'TRUE/FALSE', '1/0', 'T/F only'],
                  correct: 1
                }
              ]
            },
            {
              id: 'strings',
              title: 'Working with Strings',
              type: 'challenge',
              theory: `<h2>Working with Strings</h2><p>Strings in R are called "character" values. R has many built-in string functions.</p><h3>Creating Strings</h3><pre><code>s1 <- "Hello"
s2 <- 'World'</code></pre><h3>String Functions</h3><pre><code>nchar("Hello")          # 5 (length)
toupper("hello")        # "HELLO"
tolower("HELLO")        # "hello"
substring("Hello", 1, 3) # "Hel"
trimws("  hi  ")        # "hi"</code></pre><h3>Concatenation with paste()</h3><pre><code>paste("Hello", "World")       # "Hello World"
paste("Hello", "World", sep="-") # "Hello-World"
paste0("Hello", "World")      # "HelloWorld" (no separator)</code></pre><h3>String Formatting</h3><pre><code>name <- "Alice"
age <- 30
sprintf("Name: %s, Age: %d", name, age)
# "Name: Alice, Age: 30"</code></pre><h3>String Operations</h3><pre><code>grepl("lo", "Hello")    # TRUE (contains)
gsub("l", "L", "hello") # "heLLo" (replace all)
strsplit("a,b,c", ",")  # list: "a" "b" "c"</code></pre>`,
              challenge: {
                description: 'Use paste() to combine "Hello" and "World" with a space, then print the result.',
                starterCode: '# Combine Hello and World\n',
                expectedOutput: 'Hello World',
                hints: ['paste() combines strings', 'Default separator is space', 'print(paste("Hello", "World"))']
              },
              quiz: [
                {
                  question: 'What does nchar("Hello") return?',
                  options: ['4', '5', '6', 'Error'],
                  correct: 1
                },
                {
                  question: 'Difference between paste() and paste0()?',
                  options: ['No difference', 'paste0 has no separator', 'paste is faster', 'paste0 adds newline'],
                  correct: 1
                },
                {
                  question: 'How to check if string contains a pattern?',
                  options: ['contains()', 'grepl()', 'has()', 'includes()'],
                  correct: 1
                },
                {
                  question: 'sprintf("%d", 42) returns?',
                  options: ['"42"', '42', '"%d"', 'Error'],
                  correct: 0
                }
              ]
            },
            {
              id: 'type_coercion',
              title: 'Type Coercion',
              type: 'challenge',
              theory: `<h2>Type Coercion</h2><p>R automatically converts types when needed (implicit coercion) or you can do it manually (explicit coercion).</p><h3>Implicit Coercion Hierarchy</h3><p>logical → integer → numeric → character</p><pre><code>c(TRUE, 1, 2.5)      # All become numeric: 1.0 2.0 2.5
c(TRUE, 1, "hello")  # All become character: "TRUE" "1" "hello"
TRUE + 5             # 6 (TRUE becomes 1)</code></pre><h3>Explicit Coercion</h3><pre><code>as.numeric("42")     # 42
as.character(100)    # "100"
as.logical(0)        # FALSE
as.integer(3.7)      # 3</code></pre><h3>Failed Coercion</h3><pre><code>as.numeric("hello")  # NA with warning
as.integer("abc")    # NA with warning</code></pre><p>When coercion fails, R returns <code>NA</code> (Not Available) — R's missing value indicator.</p><h3>Checking for NA</h3><pre><code>x <- NA
is.na(x)     # TRUE
!is.na(x)    # FALSE</code></pre>`,
              challenge: {
                description: 'Convert the string "99" to numeric and add 1. Print the result.',
                starterCode: '# Convert "99" to number and add 1\n',
                expectedOutput: '100',
                hints: ['Use as.numeric()', 'as.numeric("99") + 1', 'print(as.numeric("99") + 1)']
              },
              quiz: [
                {
                  question: 'TRUE + 5 equals?',
                  options: ['Error', '6', 'TRUE5', '5'],
                  correct: 1
                },
                {
                  question: 'as.numeric("hello") returns?',
                  options: ['0', 'Error', 'NA', '"hello"'],
                  correct: 2
                },
                {
                  question: 'Coercion hierarchy order?',
                  options: ['character→numeric→logical', 'logical→integer→numeric→character', 'numeric→character→logical', 'integer→logical→numeric'],
                  correct: 1
                },
                {
                  question: 'How to check for missing values?',
                  options: ['== NA', 'is.na()', 'isNull()', '== NULL'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'vectors',
          title: 'Vectors',
          lessons: [
            {
              id: 'creating_vectors',
              title: 'Creating Vectors',
              type: 'challenge',
              theory: `<h2>Creating Vectors</h2><p>A <strong>vector</strong> is R's fundamental data structure — an ordered collection of elements of the same type. Almost everything in R is a vector!</p><h3>c() Function</h3><pre><code>nums <- c(1, 2, 3, 4, 5)
names <- c("Alice", "Bob", "Carol")
flags <- c(TRUE, FALSE, TRUE)</code></pre><h3>Sequence Shortcuts</h3><pre><code>1:10          # 1, 2, 3, ..., 10
seq(0, 1, by=0.1)  # 0.0, 0.1, 0.2, ..., 1.0
seq(1, 20, length.out=5)  # 5 evenly spaced values</code></pre><h3>Repeat</h3><pre><code>rep(0, 5)         # 0, 0, 0, 0, 0
rep(c(1,2), 3)    # 1, 2, 1, 2, 1, 2
rep(c(1,2), each=3) # 1, 1, 1, 2, 2, 2</code></pre><h3>Vector Properties</h3><pre><code>x <- c(10, 20, 30)
length(x)    # 3
class(x)     # "numeric"</code></pre><h3>Key Point</h3><p>All elements must be the same type. If you mix types, R coerces to the most general type:</p><pre><code>c(1, "two", TRUE)  # "1" "two" "TRUE" (all character)</code></pre>`,
              challenge: {
                description: 'Create a vector called "scores" with values 85, 92, 78, 96, 88 and print it.',
                starterCode: '# Create scores vector\n',
                expectedOutput: '85 92 78 96 88',
                hints: ['Use c() to create vectors', 'scores <- c(85, 92, 78, 96, 88)', 'print(scores)']
              },
              quiz: [
                {
                  question: 'What function creates a vector?',
                  options: ['vector()', 'c()', 'vec()', 'list()'],
                  correct: 1
                },
                {
                  question: 'What does 1:5 produce?',
                  options: ['Just 1 and 5', 'Vector 1,2,3,4,5', 'The fraction 1/5', 'Error'],
                  correct: 1
                },
                {
                  question: 'c(1, "two") produces?',
                  options: ['Error', 'Mixed type vector', 'All character: "1" "two"', 'All numeric'],
                  correct: 2
                },
                {
                  question: 'What does length(c(3,6,9)) return?',
                  options: ['9', '3', '18', '1'],
                  correct: 1
                }
              ]
            },
            {
              id: 'vector_indexing',
              title: 'Vector Indexing',
              type: 'challenge',
              theory: `<h2>Vector Indexing</h2><p>Access vector elements by position. <strong>R uses 1-based indexing</strong> (first element is index 1, not 0).</p><h3>Single Element</h3><pre><code>x <- c(10, 20, 30, 40, 50)
x[1]   # 10 (first element)
x[3]   # 30 (third element)
x[5]   # 50 (last element)</code></pre><h3>Multiple Elements</h3><pre><code>x[c(1, 3, 5)]    # 10, 30, 50
x[2:4]            # 20, 30, 40</code></pre><h3>Negative Indexing (Exclusion)</h3><pre><code>x[-1]          # 20, 30, 40, 50 (all except first)
x[-c(1, 5)]    # 20, 30, 40 (exclude first and last)</code></pre><h3>Logical Indexing</h3><pre><code>x[x > 25]      # 30, 40, 50 (elements > 25)
x[c(TRUE, FALSE, TRUE, FALSE, TRUE)]  # 10, 30, 50</code></pre><h3>Named Vectors</h3><pre><code>ages <- c(alice=30, bob=25, carol=28)
ages["alice"]   # 30
ages[c("bob", "carol")]  # 25, 28</code></pre>`,
              challenge: {
                description: 'Create vector x <- c(5, 10, 15, 20, 25). Print the third element.',
                starterCode: '# Access the third element\n',
                expectedOutput: '15',
                hints: ['R indexing starts at 1', 'x[3] gets third element', 'print(x[3])']
              },
              quiz: [
                {
                  question: 'R indexing starts at?',
                  options: ['0', '1', '-1', 'Depends'],
                  correct: 1
                },
                {
                  question: 'x[-2] does what?',
                  options: ['Gets element -2', 'Returns all except element 2', 'Error', 'Reverses vector'],
                  correct: 1
                },
                {
                  question: 'x[x > 10] returns?',
                  options: ['TRUE/FALSE values', 'Elements greater than 10', 'Indices > 10', 'Error'],
                  correct: 1
                },
                {
                  question: 'How to get elements 2 through 4?',
                  options: ['x[2,4]', 'x[2:4]', 'x(2:4)', 'x{2:4}'],
                  correct: 1
                }
              ]
            },
            {
              id: 'vector_operations',
              title: 'Vector Operations',
              type: 'challenge',
              theory: `<h2>Vector Operations</h2><p>R is <strong>vectorized</strong> — operations apply to every element automatically, no loops needed!</p><h3>Arithmetic</h3><pre><code>x <- c(1, 2, 3, 4, 5)
x + 10     # 11, 12, 13, 14, 15
x * 2      # 2, 4, 6, 8, 10
x ^ 2      # 1, 4, 9, 16, 25</code></pre><h3>Vector + Vector</h3><pre><code>a <- c(1, 2, 3)
b <- c(10, 20, 30)
a + b      # 11, 22, 33
a * b      # 10, 40, 90</code></pre><h3>Recycling</h3><p>If vectors have different lengths, the shorter one "recycles":</p><pre><code>c(1, 2, 3, 4) + c(10, 20)  # 11, 22, 13, 24</code></pre><h3>Comparison (returns logical vector)</h3><pre><code>x > 3      # FALSE, FALSE, FALSE, TRUE, TRUE
x == 3     # FALSE, FALSE, TRUE, FALSE, FALSE</code></pre><h3>Summary Functions</h3><pre><code>sum(x)     # 15
mean(x)    # 3
max(x)     # 5
min(x)     # 1
sd(x)      # standard deviation</code></pre>`,
              challenge: {
                description: 'Create vector x <- c(2, 4, 6, 8, 10). Print the sum of all elements.',
                starterCode: '# Sum of vector elements\n',
                expectedOutput: '30',
                hints: ['Use sum() function', 'sum(x) adds all elements', 'print(sum(x))']
              },
              quiz: [
                {
                  question: 'c(1,2,3) * 2 gives?',
                  options: ['Error', 'c(2,4,6)', 'c(1,2,3,1,2,3)', '6'],
                  correct: 1
                },
                {
                  question: 'What is recycling?',
                  options: ['Garbage collection', 'Shorter vector repeats to match longer', 'Reusing variables', 'Memory management'],
                  correct: 1
                },
                {
                  question: 'c(1,2,3) > 2 returns?',
                  options: ['TRUE', 'c(FALSE, FALSE, TRUE)', 'c(3)', '1'],
                  correct: 1
                },
                {
                  question: 'mean(c(10, 20, 30)) returns?',
                  options: ['10', '20', '30', '60'],
                  correct: 1
                }
              ]
            },
            {
              id: 'vector_functions',
              title: 'Useful Vector Functions',
              type: 'challenge',
              theory: `<h2>Useful Vector Functions</h2><h3>Sorting</h3><pre><code>x <- c(3, 1, 4, 1, 5)
sort(x)           # 1, 1, 3, 4, 5
sort(x, decreasing=TRUE)  # 5, 4, 3, 1, 1
order(x)          # 2, 4, 1, 3, 5 (indices that would sort)</code></pre><h3>Finding Values</h3><pre><code>which(x > 3)      # 3, 5 (indices where condition is TRUE)
which.max(x)      # 5 (index of maximum)
which.min(x)      # 2 (index of minimum)</code></pre><h3>Modifying</h3><pre><code>x <- c(1, 2, 3)
append(x, 4)           # 1, 2, 3, 4
rev(x)                 # 3, 2, 1
unique(c(1,1,2,2,3))   # 1, 2, 3</code></pre><h3>Set Operations</h3><pre><code>a <- c(1, 2, 3, 4)
b <- c(3, 4, 5, 6)
intersect(a, b)   # 3, 4
union(a, b)       # 1, 2, 3, 4, 5, 6
setdiff(a, b)     # 1, 2</code></pre><h3>Logical Tests</h3><pre><code>any(x > 4)    # TRUE if any element > 4
all(x > 0)    # TRUE if all elements > 0</code></pre>`,
              challenge: {
                description: 'Create x <- c(5, 3, 8, 1, 9). Print the sorted vector (ascending).',
                starterCode: '# Sort the vector\n',
                expectedOutput: '1 3 5 8 9',
                hints: ['Use sort() function', 'sort(x) sorts ascending', 'print(sort(x))']
              },
              quiz: [
                {
                  question: 'sort() vs order()?',
                  options: ['Same thing', 'sort returns values, order returns indices', 'order returns values', 'sort returns indices'],
                  correct: 1
                },
                {
                  question: 'which(x > 5) returns?',
                  options: ['Values > 5', 'Indices where x > 5', 'TRUE/FALSE', 'Count'],
                  correct: 1
                },
                {
                  question: 'unique(c(1,1,2,2,3)) returns?',
                  options: ['c(1,2,3)', 'c(1,2)', '3', 'c(1,1,2,2,3)'],
                  correct: 0
                },
                {
                  question: 'any(c(FALSE, FALSE, TRUE))?',
                  options: ['FALSE', 'TRUE', 'NA', 'Error'],
                  correct: 1
                }
              ]
            },
            {
              id: 'vector_filtering',
              title: 'Vector Filtering',
              type: 'challenge',
              theory: `<h2>Vector Filtering</h2><p>Filtering means selecting elements that meet a condition. This is one of R's most powerful features.</p><h3>Logical Filtering</h3><pre><code>scores <- c(85, 92, 78, 96, 65, 88)
# Step 1: Create logical mask
mask <- scores >= 80   # TRUE TRUE FALSE TRUE FALSE TRUE
# Step 2: Apply mask
passing <- scores[mask]  # 85, 92, 96, 88</code></pre><h3>One-Line Filtering</h3><pre><code>scores[scores >= 80]        # 85, 92, 96, 88
scores[scores > 70 & scores < 90]  # 85, 78, 88</code></pre><h3>Logical Operators</h3><ul><li><code>&</code> — AND (element-wise)</li><li><code>|</code> — OR (element-wise)</li><li><code>!</code> — NOT</li></ul><h3>Replacing Values</h3><pre><code>x <- c(1, -2, 3, -4, 5)
x[x < 0] <- 0   # Replace negatives with 0
# Result: 1, 0, 3, 0, 5</code></pre><h3>%in% Operator</h3><pre><code>fruits <- c("apple", "banana", "cherry", "date")
fruits[fruits %in% c("apple", "cherry")]
# "apple", "cherry"</code></pre>`,
              challenge: {
                description: 'Create ages <- c(15, 22, 17, 30, 12, 25). Print only ages >= 18 (adults).',
                starterCode: '# Filter for adults (18+)\n',
                expectedOutput: '22 30 25',
                hints: ['Use logical indexing', 'ages[ages >= 18]', 'print(ages[ages >= 18])']
              },
              quiz: [
                {
                  question: 'x[x > 5] returns?',
                  options: ['Indices > 5', 'Elements where value > 5', 'TRUE/FALSE vector', 'Count of elements > 5'],
                  correct: 1
                },
                {
                  question: '& vs && in R?',
                  options: ['Same', '& is element-wise, && is single value', '&& is element-wise', 'No && in R'],
                  correct: 1
                },
                {
                  question: 'x[x < 0] <- 0 does?',
                  options: ['Deletes negatives', 'Replaces negatives with 0', 'Error', 'Filters negatives'],
                  correct: 1
                },
                {
                  question: 'What does %in% check?',
                  options: ['Division', 'Membership in a set', 'Modulo', 'Substring'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'data-frames',
          title: 'Data Frames',
          lessons: [
            {
              id: 'creating_dataframes',
              title: 'Creating Data Frames',
              type: 'challenge',
              theory: `<h2>Creating Data Frames</h2><p>A <strong>data frame</strong> is R's primary structure for tabular data — like a spreadsheet or database table. Each column can have a different type.</p><h3>Creating with data.frame()</h3><pre><code>df <- data.frame(
  name = c("Alice", "Bob", "Carol"),
  age = c(30, 25, 28),
  score = c(85, 92, 78)
)
print(df)</code></pre><p><strong>Output:</strong></p><pre><code>   name age score
1 Alice  30    85
2   Bob  25    92
3 Carol  28    78</code></pre><h3>Structure</h3><pre><code>str(df)       # Structure: column types, preview
nrow(df)      # 3 (number of rows)
ncol(df)      # 3 (number of columns)
dim(df)       # 3 3 (rows, cols)
names(df)     # "name" "age" "score"
head(df, 2)   # First 2 rows</code></pre><h3>Key Points</h3><ul><li>Each column is a vector (same type within column)</li><li>Different columns can have different types</li><li>All columns must have the same length</li><li>Row names are assigned automatically (1, 2, 3...)</li></ul>`,
              challenge: {
                description: 'Create a data frame with columns: city = c("NYC", "LA", "Chicago") and pop = c(8, 4, 2). Print it.',
                starterCode: '# Create city data frame\n',
                expectedOutput: '     city pop\n1     NYC   8\n2      LA   4\n3 Chicago   2',
                hints: ['Use data.frame()', 'df <- data.frame(city=c(...), pop=c(...))', 'print(df)']
              },
              quiz: [
                {
                  question: 'Can data frame columns have different types?',
                  options: ['No', 'Yes', 'Only numeric and character', 'Only with special functions'],
                  correct: 1
                },
                {
                  question: 'What does str(df) show?',
                  options: ['String version', 'Structure: types and preview', 'Size only', 'First row'],
                  correct: 1
                },
                {
                  question: 'nrow(df) returns?',
                  options: ['Column count', 'Row count', 'Total cells', 'Data types'],
                  correct: 1
                },
                {
                  question: 'All columns must have same?',
                  options: ['Type', 'Length', 'Name format', 'Values'],
                  correct: 1
                }
              ]
            },
            {
              id: 'accessing_columns',
              title: 'Accessing Columns & Rows',
              type: 'challenge',
              theory: `<h2>Accessing Columns & Rows</h2><h3>Column Access</h3><pre><code>df$name           # Vector of names ($ notation)
df[["age"]]       # Same thing (bracket notation)
df[, "score"]     # Same (matrix-style)
df[, 2]           # Second column by position</code></pre><h3>Row Access</h3><pre><code>df[1, ]           # First row (all columns)
df[2:3, ]         # Rows 2 and 3
df[c(1,3), ]      # Rows 1 and 3</code></pre><h3>Specific Cell</h3><pre><code>df[1, 2]          # Row 1, Column 2
df[2, "name"]     # Row 2, name column: "Bob"</code></pre><h3>Filtering Rows</h3><pre><code>df[df$age > 26, ]    # Rows where age > 26
df[df$name == "Alice", ]  # Alice's row</code></pre><h3>Adding Columns</h3><pre><code>df$grade <- c("A", "A+", "B+")  # New column
df$age_group <- ifelse(df$age >= 28, "senior", "junior")</code></pre>`,
              challenge: {
                description: 'Given df with name/age/score columns, print just the "age" column using $ notation.',
                starterCode: 'df <- data.frame(name=c("Alice","Bob","Carol"), age=c(30,25,28), score=c(85,92,78))\n# Print the age column\n',
                expectedOutput: '30 25 28',
                hints: ['Use $ to access columns', 'df$age returns the age vector', 'print(df$age)']
              },
              quiz: [
                {
                  question: 'df$name returns?',
                  options: ['Column names', 'The name column as vector', 'First row', 'Data frame structure'],
                  correct: 1
                },
                {
                  question: 'df[2, 3] accesses?',
                  options: ['Row 2', 'Column 3', 'Row 2, Column 3 cell', 'Rows 2 and 3'],
                  correct: 2
                },
                {
                  question: 'df[df$age > 25, ] returns?',
                  options: ['Ages > 25', 'All rows where age > 25', 'TRUE/FALSE', 'Just age column'],
                  correct: 1
                },
                {
                  question: 'How to add a new column?',
                  options: ['add_column()', 'df$new_col <- values', 'append(df, col)', 'df + col'],
                  correct: 1
                }
              ]
            },
            {
              id: 'dataframe_operations',
              title: 'Data Frame Operations',
              type: 'challenge',
              theory: `<h2>Data Frame Operations</h2><h3>Sorting</h3><pre><code>df[order(df$age), ]              # Sort by age ascending
df[order(-df$score), ]           # Sort by score descending
df[order(df$name), ]             # Alphabetical by name</code></pre><h3>Summary Statistics</h3><pre><code>summary(df)         # Min, max, mean, quartiles per column
colMeans(df[, 2:3]) # Mean of numeric columns
sapply(df[, 2:3], sd)  # SD of numeric columns</code></pre><h3>Subset</h3><pre><code>subset(df, age > 25)                # Filter rows
subset(df, age > 25, select = c(name, score))  # Filter + select columns</code></pre><h3>Merging (Join)</h3><pre><code>df1 <- data.frame(id=1:3, name=c("A","B","C"))
df2 <- data.frame(id=1:3, score=c(90,85,92))
merge(df1, df2, by="id")  # Join on id column</code></pre><h3>Aggregation</h3><pre><code>aggregate(score ~ grade, data=df, FUN=mean)
# Average score per grade</code></pre>`,
              challenge: {
                description: 'Create df with name/score columns. Sort by score descending and print.',
                starterCode: 'df <- data.frame(name=c("Alice","Bob","Carol"), score=c(78,92,85))\n# Sort by score descending\n',
                expectedOutput: '   name score\n2   Bob    92\n3 Carol    85\n1 Alice    78',
                hints: ['Use order() with negative for descending', 'df[order(-df$score), ]', 'print(df[order(-df$score), ])']
              },
              quiz: [
                {
                  question: 'How to sort descending in R?',
                  options: ['sort(desc)', 'order(-column)', 'reverse()', 'desc(column)'],
                  correct: 1
                },
                {
                  question: 'summary(df) gives?',
                  options: ['Row count only', 'Min, max, mean, quartiles', 'Column names', 'Data types only'],
                  correct: 1
                },
                {
                  question: 'merge() is equivalent to SQL?',
                  options: ['WHERE', 'JOIN', 'GROUP BY', 'UNION'],
                  correct: 1
                },
                {
                  question: 'aggregate() does?',
                  options: ['Adds columns', 'Groups and applies function', 'Filters rows', 'Sorts data'],
                  correct: 1
                }
              ]
            },
            {
              id: 'reading_data',
              title: 'Reading & Writing Data',
              type: 'challenge',
              theory: `<h2>Reading & Writing Data</h2><h3>CSV Files</h3><pre><code># Read
df <- read.csv("data.csv")
df <- read.csv("data.csv", stringsAsFactors=FALSE)

# Write
write.csv(df, "output.csv", row.names=FALSE)</code></pre><h3>read.csv Options</h3><pre><code>read.csv("file.csv",
  header = TRUE,       # First row is header
  sep = ",",           # Delimiter
  na.strings = c("", "NA", "N/A"),
  stringsAsFactors = FALSE
)</code></pre><h3>Other Formats</h3><pre><code>read.table("data.txt", header=TRUE)  # Tab/space delimited
readRDS("data.rds")                   # R binary format
saveRDS(df, "data.rds")               # Save R object</code></pre><h3>Quick Data Inspection</h3><pre><code>head(df)        # First 6 rows
tail(df)        # Last 6 rows
str(df)         # Structure
dim(df)         # Dimensions
complete.cases(df)  # Rows with no NAs</code></pre>`,
              challenge: {
                description: 'Create a data frame and use head() to show the first 2 rows.',
                starterCode: 'df <- data.frame(x=1:5, y=c(10,20,30,40,50))\n# Show first 2 rows\n',
                expectedOutput: '  x  y\n1 1 10\n2 2 20',
                hints: ['head(df, n) shows first n rows', 'head(df, 2)', 'print(head(df, 2))']
              },
              quiz: [
                {
                  question: 'read.csv() reads?',
                  options: ['R scripts', 'Comma-separated files', 'Excel files', 'JSON files'],
                  correct: 1
                },
                {
                  question: 'head(df) shows how many rows by default?',
                  options: ['3', '5', '6', '10'],
                  correct: 2
                },
                {
                  question: 'write.csv row.names=FALSE does?',
                  options: ['Removes column names', 'Removes row numbers from output', 'Deletes rows', 'Sorts by name'],
                  correct: 1
                },
                {
                  question: 'Which format is R binary?',
                  options: ['.csv', '.rds', '.txt', '.dat'],
                  correct: 1
                }
              ]
            },
            {
              id: 'dataframe_manipulation',
              title: 'Data Frame Manipulation',
              type: 'challenge',
              theory: `<h2>Data Frame Manipulation</h2><h3>Adding/Removing Columns</h3><pre><code>df$new_col <- df$x * 2    # Add calculated column
df$old_col <- NULL         # Remove column
df <- df[, -3]             # Remove 3rd column</code></pre><h3>Renaming Columns</h3><pre><code>names(df)[1] <- "new_name"     # Rename first column
colnames(df) <- c("a", "b", "c")  # Rename all</code></pre><h3>Applying Functions</h3><pre><code>sapply(df, class)              # Apply to each column
lapply(df, summary)            # Returns list
apply(df[,2:3], 2, mean)       # Apply to columns (2=cols)</code></pre><h3>Combining Data Frames</h3><pre><code>rbind(df1, df2)   # Stack rows (same columns)
cbind(df1, df2)   # Side by side (same rows)</code></pre><h3>Handling NAs</h3><pre><code>na.omit(df)                    # Remove rows with any NA
df[complete.cases(df), ]       # Same thing
df$col[is.na(df$col)] <- 0    # Replace NAs with 0</code></pre>`,
              challenge: {
                description: 'Create df with x=1:3 and y=c(10,20,30). Add column z = x + y. Print df.',
                starterCode: 'df <- data.frame(x=1:3, y=c(10,20,30))\n# Add z column\n',
                expectedOutput: '  x  y  z\n1 1 10 11\n2 2 20 22\n3 3 30 33',
                hints: ['df$z <- df$x + df$y', 'Vectorized addition works', 'print(df)']
              },
              quiz: [
                {
                  question: 'df$col <- NULL does?',
                  options: ['Sets to NA', 'Removes the column', 'Error', 'Sets to empty'],
                  correct: 1
                },
                {
                  question: 'rbind() does?',
                  options: ['Joins columns side by side', 'Stacks rows vertically', 'Renames', 'Filters'],
                  correct: 1
                },
                {
                  question: 'na.omit(df) does?',
                  options: ['Counts NAs', 'Removes rows with any NA', 'Replaces NAs', 'Marks NAs'],
                  correct: 1
                },
                {
                  question: 'apply(df, 2, mean) applies mean to?',
                  options: ['Rows', 'Columns', 'Cells', 'Names'],
                  correct: 1
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
              id: 'if_else',
              title: 'If/Else Statements',
              type: 'challenge',
              theory: `<h2>If/Else Statements</h2><pre><code>x <- 15

if (x > 10) {
  print("Large")
} else if (x > 5) {
  print("Medium")
} else {
  print("Small")
}</code></pre><h3>Single Line</h3><pre><code>if (x > 0) print("Positive")</code></pre><h3>ifelse() — Vectorized</h3><pre><code>scores <- c(85, 42, 91, 67)
result <- ifelse(scores >= 70, "Pass", "Fail")
# "Pass" "Fail" "Pass" "Fail"</code></pre><p><code>ifelse()</code> works on entire vectors at once — much faster than looping.</p><h3>Conditions</h3><ul><li><code>==</code> equal, <code>!=</code> not equal</li><li><code>></code>, <code><</code>, <code>>=</code>, <code><=</code></li><li><code>&&</code> AND (single value), <code>||</code> OR (single value)</li><li><code>&</code> AND (vectorized), <code>|</code> OR (vectorized)</li></ul>`,
              challenge: {
                description: 'Write an if/else: if x > 0 print "Positive", else print "Non-positive". Set x <- 5.',
                starterCode: 'x <- 5\n# If/else statement\n',
                expectedOutput: 'Positive',
                hints: ['if (condition) { } else { }', 'Check x > 0', 'if (x > 0) print("Positive") else print("Non-positive")']
              },
              quiz: [
                {
                  question: 'ifelse() vs if/else?',
                  options: ['Same', 'ifelse is vectorized, if/else is scalar', 'if/else is vectorized', 'No ifelse in R'],
                  correct: 1
                },
                {
                  question: '&& vs & in conditions?',
                  options: ['Same', '&& is single value, & is vectorized', '& is single value', 'No && in R'],
                  correct: 1
                },
                {
                  question: 'Where do braces {} go?',
                  options: ['Optional always', 'Required for multi-line bodies', 'Never used in R', 'Only with else'],
                  correct: 1
                },
                {
                  question: 'ifelse(c(T,F,T), "Y", "N") returns?',
                  options: ['"Y"', 'c("Y","N","Y")', 'Error', 'c(TRUE,FALSE,TRUE)'],
                  correct: 1
                }
              ]
            },
            {
              id: 'for_loops',
              title: 'For Loops',
              type: 'challenge',
              theory: `<h2>For Loops</h2><pre><code>for (i in 1:5) {
  print(i)
}

# Iterate over vector
fruits <- c("apple", "banana", "cherry")
for (fruit in fruits) {
  cat(fruit, "\\n")
}</code></pre><h3>Common Patterns</h3><pre><code># Accumulator
total <- 0
for (x in c(10, 20, 30)) {
  total <- total + x
}
print(total)  # 60

# Index-based
for (i in seq_along(fruits)) {
  cat(i, ":", fruits[i], "\\n")
}</code></pre><h3>When to Use Loops</h3><p>R is optimized for vectorized operations. Use loops when:</p><ul><li>Each iteration depends on the previous</li><li>Operations have side effects (file I/O, plots)</li><li>Logic is too complex for vectorized approach</li></ul><p>Prefer <code>sapply()</code>, <code>lapply()</code>, or vectorized operations when possible — they're faster.</p>`,
              challenge: {
                description: 'Write a for loop that prints numbers 1 through 5, each on its own line.',
                starterCode: '# Print 1 to 5\n',
                expectedOutput: '1\n2\n3\n4\n5',
                hints: ['for (i in 1:5)', 'print(i) inside the loop', 'for (i in 1:5) { print(i) }']
              },
              quiz: [
                {
                  question: 'for (x in vec) — x is?',
                  options: ['Index', 'Current element value', 'Vector length', 'Counter'],
                  correct: 1
                },
                {
                  question: 'seq_along(x) returns?',
                  options: ['The values of x', 'Indices 1 to length(x)', 'Sorted x', 'Length of x'],
                  correct: 1
                },
                {
                  question: 'Why prefer vectorized over loops?',
                  options: ['Loops don\\'t work', 'Vectorized is faster', 'Loops use more memory', 'No reason'],
                  correct: 1
                },
                {
                  question: 'Which is vectorized: sapply() or for?',
                  options: ['for', 'sapply()', 'Both', 'Neither'],
                  correct: 1
                }
              ]
            },
            {
              id: 'while_loops',
              title: 'While Loops',
              type: 'challenge',
              theory: `<h2>While Loops</h2><pre><code>count <- 1
while (count <= 5) {
  print(count)
  count <- count + 1
}</code></pre><h3>Break & Next</h3><pre><code># break exits the loop
i <- 1
while (TRUE) {
  if (i > 5) break
  print(i)
  i <- i + 1
}

# next skips to the next iteration
for (i in 1:10) {
  if (i %% 2 == 0) next  # Skip even numbers
  print(i)  # Only prints odd: 1, 3, 5, 7, 9
}</code></pre><h3>Repeat Loop</h3><pre><code>repeat {
  x <- readline("Enter 'quit' to exit: ")
  if (x == "quit") break
}</code></pre><p><strong>Warning:</strong> Always ensure while/repeat loops have a way to terminate, or you'll create an infinite loop!</p>`,
              challenge: {
                description: 'Write a while loop that prints numbers 1 to 3.',
                starterCode: '# While loop printing 1 to 3\n',
                expectedOutput: '1\n2\n3',
                hints: ['Initialize counter before loop', 'Check condition: count <= 3', 'Increment inside loop']
              },
              quiz: [
                {
                  question: 'What does break do?',
                  options: ['Pauses loop', 'Exits loop entirely', 'Skips iteration', 'Restarts loop'],
                  correct: 1
                },
                {
                  question: 'What does next do?',
                  options: ['Exits loop', 'Skips to next iteration', 'Goes to next function', 'Pauses'],
                  correct: 1
                },
                {
                  question: 'repeat {} is like?',
                  options: ['for loop', 'while(TRUE)', 'if/else', 'function'],
                  correct: 1
                },
                {
                  question: 'How to prevent infinite loops?',
                  options: ['Use for instead', 'Ensure termination condition', 'Use break always', 'Limit iterations'],
                  correct: 1
                }
              ]
            },
            {
              id: 'apply_family',
              title: 'Apply Family',
              type: 'challenge',
              theory: `<h2>The Apply Family</h2><p>R's apply functions replace loops with more efficient, readable alternatives.</p><h3>sapply() — Simplify Apply</h3><pre><code>nums <- list(1:3, 4:6, 7:9)
sapply(nums, mean)  # 2, 5, 8 (returns vector)</code></pre><h3>lapply() — List Apply</h3><pre><code>lapply(nums, sum)  # Returns list: 6, 15, 24</code></pre><h3>apply() — Matrix/Data Frame</h3><pre><code>mat <- matrix(1:12, nrow=3)
apply(mat, 1, sum)   # Row sums
apply(mat, 2, mean)  # Column means</code></pre><h3>tapply() — Grouped Apply</h3><pre><code>scores <- c(85, 92, 78, 88, 95, 70)
groups <- c("A", "A", "B", "B", "A", "B")
tapply(scores, groups, mean)
# A: 90.67, B: 78.67</code></pre><h3>Quick Guide</h3><ul><li><code>sapply</code> — vector/matrix result</li><li><code>lapply</code> — list result</li><li><code>apply</code> — over matrix rows/cols</li><li><code>tapply</code> — grouped operations</li></ul>`,
              challenge: {
                description: 'Use sapply to get the length of each string in c("hello", "hi", "hey").',
                starterCode: 'words <- c("hello", "hi", "hey")\n# Get lengths with sapply\n',
                expectedOutput: '5 2 3',
                hints: ['sapply(vector, function)', 'nchar gives string length', 'print(sapply(words, nchar))']
              },
              quiz: [
                {
                  question: 'sapply vs lapply?',
                  options: ['Same output', 'sapply simplifies to vector, lapply returns list', 'lapply is faster', 'sapply only works on numbers'],
                  correct: 1
                },
                {
                  question: 'apply(mat, 1, sum) applies sum to?',
                  options: ['Columns', 'Rows', 'All elements', 'Diagonal'],
                  correct: 1
                },
                {
                  question: 'tapply is for?',
                  options: ['Matrix operations', 'Grouped/split operations', 'Sorting', 'Filtering'],
                  correct: 1
                },
                {
                  question: 'Apply family replaces?',
                  options: ['If/else', 'Loops', 'Functions', 'Variables'],
                  correct: 1
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
              id: 'creating_functions',
              title: 'Creating Functions',
              type: 'challenge',
              theory: `<h2>Creating Functions</h2><pre><code>my_function <- function(parameters) {
  # body
  return(result)
}

# Example
square <- function(x) {
  return(x^2)
}
square(5)  # 25</code></pre><h3>Multiple Parameters</h3><pre><code>greet <- function(name, greeting="Hello") {
  msg <- paste(greeting, name)
  return(msg)
}
greet("Alice")            # "Hello Alice"
greet("Bob", "Hi")        # "Hi Bob"</code></pre><h3>Implicit Return</h3><p>R returns the last expression if no explicit return():</p><pre><code>add <- function(a, b) {
  a + b  # This value is returned
}</code></pre><h3>Multiple Returns</h3><pre><code>stats <- function(x) {
  list(
    mean = mean(x),
    sd = sd(x),
    n = length(x)
  )
}</code></pre>`,
              challenge: {
                description: 'Create a function called "double" that takes x and returns x * 2. Call it with 7 and print.',
                starterCode: '# Create double function\n',
                expectedOutput: '14',
                hints: ['function(x) { return(x * 2) }', 'double <- function(x) x * 2', 'print(double(7))']
              },
              quiz: [
                {
                  question: 'How to define a function in R?',
                  options: ['def func()', 'function() {}', 'name <- function() {}', 'func name() {}'],
                  correct: 2
                },
                {
                  question: 'What does R return if no return() is used?',
                  options: ['NULL', 'Last expression value', 'Error', 'First expression'],
                  correct: 1
                },
                {
                  question: 'Default parameter syntax?',
                  options: ['param: value', 'param = value', 'param := value', 'default param value'],
                  correct: 1
                },
                {
                  question: 'How to return multiple values?',
                  options: ['Multiple return()', 'Return a list', 'Use global variables', 'Not possible'],
                  correct: 1
                }
              ]
            },
            {
              id: 'function_scope',
              title: 'Scope & Environments',
              type: 'challenge',
              theory: `<h2>Scope & Environments</h2><p>Variables inside a function are local — they don't affect the outside world.</p><h3>Local vs Global</h3><pre><code>x <- 10  # Global

my_func <- function() {
  x <- 99  # Local (different x!)
  print(x) # 99
}

my_func()
print(x)  # Still 10!</code></pre><h3>Accessing Global Variables</h3><p>Functions CAN read global variables but shouldn't modify them:</p><pre><code>multiplier <- 3  # Global

scale <- function(x) {
  x * multiplier  # Reads global multiplier
}</code></pre><h3><<- Operator (Avoid!)</h3><pre><code>counter <- 0
increment <- function() {
  counter <<- counter + 1  # Modifies global!
}</code></pre><p><strong>Best practice:</strong> Avoid <<-. Pass values as parameters and return results.</p><h3>Closures</h3><pre><code>make_adder <- function(n) {
  function(x) x + n  # n is "enclosed"
}
add5 <- make_adder(5)
add5(3)  # 8</code></pre>`,
              challenge: {
                description: 'Create function that sets local x=100 and prints it. Then print global x=5 after calling.',
                starterCode: 'x <- 5\nmy_func <- function() {\n  x <- 100\n  print(x)\n}\nmy_func()\nprint(x)\n',
                expectedOutput: '100\n5',
                hints: ['Local x inside function is separate', 'Global x unchanged', 'Run the code as-is']
              },
              quiz: [
                {
                  question: 'Variable inside function is?',
                  options: ['Global', 'Local', 'Shared', 'Permanent'],
                  correct: 1
                },
                {
                  question: 'What does <<- do?',
                  options: ['Local assignment', 'Modifies parent/global variable', 'Creates constant', 'Error'],
                  correct: 1
                },
                {
                  question: 'Best practice for modifying external state?',
                  options: ['Use <<-', 'Return value and reassign outside', 'Use global variables', 'Use print()'],
                  correct: 1
                },
                {
                  question: 'What is a closure?',
                  options: ['Closed function', 'Function that captures its environment', 'Deleted function', 'Private function'],
                  correct: 1
                }
              ]
            },
            {
              id: 'anonymous_functions',
              title: 'Anonymous & Higher-Order',
              type: 'challenge',
              theory: `<h2>Anonymous & Higher-Order Functions</h2><h3>Anonymous Functions</h3><p>Functions without a name, used inline:</p><pre><code>sapply(1:5, function(x) x^2)   # 1, 4, 9, 16, 25

# R 4.1+ shorthand
sapply(1:5, \\(x) x^2)          # Same thing</code></pre><h3>Higher-Order Functions</h3><p>Functions that take or return other functions:</p><pre><code># Filter with custom condition
Filter(function(x) x > 3, 1:5)   # 4, 5

# Map (transform each element)
Map(function(x, y) x + y, 1:3, 4:6)  # 5, 7, 9

# Reduce (accumulate)
Reduce("+", 1:5)  # 15 (1+2+3+4+5)</code></pre><h3>do.call</h3><pre><code># Call function with list of args
do.call(paste, list("a", "b", "c"))  # "a b c"</code></pre><h3>Pipe Operator (R 4.1+)</h3><pre><code>c(3, 1, 4, 1, 5) |> sort() |> unique() |> rev()
# 5, 4, 3, 1</code></pre>`,
              challenge: {
                description: 'Use sapply with anonymous function to square numbers 1:5. Print result.',
                starterCode: '# Square 1 to 5 with sapply\n',
                expectedOutput: '1  4  9 16 25',
                hints: ['sapply(vector, function(x) ...)', 'Square is x^2', 'print(sapply(1:5, function(x) x^2))']
              },
              quiz: [
                {
                  question: 'Anonymous function syntax?',
                  options: ['lambda x: x^2', 'function(x) x^2', 'def(x) x^2', '(x) => x^2'],
                  correct: 1
                },
                {
                  question: 'What does Filter() do?',
                  options: ['Removes NAs', 'Keeps elements matching condition', 'Sorts', 'Counts'],
                  correct: 1
                },
                {
                  question: 'Reduce("+", 1:4) returns?',
                  options: ['c(1,3,6,10)', '10', '4', 'Error'],
                  correct: 1
                },
                {
                  question: 'R 4.1+ pipe operator?',
                  options: ['%>%', '|>', '>>', '->'],
                  correct: 1
                }
              ]
            },
            {
              id: 'error_handling',
              title: 'Error Handling',
              type: 'challenge',
              theory: `<h2>Error Handling</h2><h3>tryCatch</h3><pre><code>result <- tryCatch({
  log(-1)
}, warning = function(w) {
  cat("Warning:", conditionMessage(w), "\\n")
  NA
}, error = function(e) {
  cat("Error:", conditionMessage(e), "\\n")
  NA
})</code></pre><h3>try()</h3><pre><code>result <- try(log("abc"), silent=TRUE)
if (inherits(result, "try-error")) {
  print("Operation failed!")
}</code></pre><h3>stop() & warning()</h3><pre><code>divide <- function(a, b) {
  if (b == 0) stop("Cannot divide by zero!")
  if (b < 0) warning("Negative divisor")
  a / b
}</code></pre><h3>stopifnot() — Assertions</h3><pre><code>process_age <- function(age) {
  stopifnot(is.numeric(age), age > 0, age < 150)
  # ... process
}</code></pre>`,
              challenge: {
                description: 'Create a function safe_divide(a, b) that returns "Error: division by zero" if b==0, otherwise a/b. Test with safe_divide(10, 0).',
                starterCode: '# Safe division function\n',
                expectedOutput: 'Error: division by zero',
                hints: ['Check if b == 0 with if statement', 'Return or print error message', 'Otherwise return a/b']
              },
              quiz: [
                {
                  question: 'tryCatch catches?',
                  options: ['Only errors', 'Errors and warnings', 'Only warnings', 'Nothing'],
                  correct: 1
                },
                {
                  question: 'stop() does?',
                  options: ['Pauses execution', 'Raises an error', 'Prints message', 'Exits R'],
                  correct: 1
                },
                {
                  question: 'stopifnot(x > 0) does what if x = -1?',
                  options: ['Nothing', 'Raises error', 'Warning', 'Sets x to 0'],
                  correct: 1
                },
                {
                  question: 'Best way to validate function inputs?',
                  options: ['Hope for best', 'stopifnot() or if/stop()', 'try()', 'Ignore errors'],
                  correct: 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      description: 'Apply R skills to real data analysis tasks including manipulation, visualization, and statistics',
      totalLessons: 15,
      totalChallenges: 15,
      totalQuizQuestions: 60,
      projects: 3,
      chapters: [
        {
          id: 'data-manipulation',
          title: 'Data Manipulation',
          lessons: [
            {
              id: 'filtering_selecting',
              title: 'Filtering & Selecting',
              type: 'challenge',
              theory: `<h2>Filtering & Selecting Data</h2><h3>Base R Filtering</h3><pre><code>df <- data.frame(name=c("Alice","Bob","Carol","Dave"),
                 age=c(30,25,28,35),
                 dept=c("Sales","IT","IT","Sales"))

# Filter rows
df[df$age > 27, ]           # Age > 27
df[df$dept == "IT", ]       # IT department

# Multiple conditions
df[df$age > 25 & df$dept == "Sales", ]</code></pre><h3>subset() Function</h3><pre><code>subset(df, age > 27)
subset(df, dept == "IT", select = c(name, age))</code></pre><h3>which() for Indices</h3><pre><code>idx <- which(df$age == max(df$age))
df[idx, ]  # Row with max age</code></pre><h3>Selecting Columns</h3><pre><code>df[, c("name", "age")]      # By name
df[, 1:2]                   # By position
df[, -3]                    # Exclude 3rd column</code></pre>`,
              challenge: {
                description: 'Filter df for rows where age > 26. Print the result.',
                starterCode: 'df <- data.frame(name=c("Alice","Bob","Carol"), age=c(30,25,28), score=c(85,92,78))\n# Filter age > 26\n',
                expectedOutput: '   name age score\n1 Alice  30    85\n3 Carol  28    78',
                hints: ['df[df$age > 26, ]', 'Comma after condition for all columns', 'print(df[df$age > 26, ])']
              },
              quiz: [
                {
                  question: 'df[df$x > 5, ] — the comma means?',
                  options: ['Error', 'Select all columns', 'Select all rows', 'Separator'],
                  correct: 1
                },
                {
                  question: 'subset() advantage over bracket notation?',
                  options: ['Faster', 'More readable, no $ needed', 'More features', 'Required for large data'],
                  correct: 1
                },
                {
                  question: 'df[, -2] does?',
                  options: ['Removes row 2', 'Removes column 2', 'Gets negative values', 'Error'],
                  correct: 1
                },
                {
                  question: 'How to filter multiple conditions?',
                  options: ['Use &&', 'Use & between conditions', 'Use AND keyword', 'Multiple subset calls'],
                  correct: 1
                }
              ]
            },
            {
              id: 'transforming_data',
              title: 'Transforming Data',
              type: 'challenge',
              theory: `<h2>Transforming Data</h2><h3>Creating Computed Columns</h3><pre><code>df$bmi <- df$weight / (df$height/100)^2
df$age_group <- ifelse(df$age >= 30, "Senior", "Junior")
df$name_upper <- toupper(df$name)</code></pre><h3>Recoding Values</h3><pre><code># Using ifelse chain
df$grade <- ifelse(df$score >= 90, "A",
            ifelse(df$score >= 80, "B",
            ifelse(df$score >= 70, "C", "F")))

# Using cut() for bins
df$age_bin <- cut(df$age, breaks=c(0,25,35,50,100),
                  labels=c("Young","Adult","Middle","Senior"))</code></pre><h3>Applying to Multiple Columns</h3><pre><code>numeric_cols <- sapply(df, is.numeric)
df[numeric_cols] <- lapply(df[numeric_cols], round, 2)</code></pre><h3>within() — Modify in Place</h3><pre><code>df <- within(df, {
  total <- price * quantity
  discount_price <- price * 0.9
  rm(old_column)  # Remove column
})</code></pre>`,
              challenge: {
                description: 'Add a "status" column to df: "Pass" if score >= 80, "Fail" otherwise. Print df.',
                starterCode: 'df <- data.frame(name=c("Alice","Bob","Carol"), score=c(85,72,91))\n# Add status column\n',
                expectedOutput: '   name score status\n1 Alice    85   Pass\n2   Bob    72   Fail\n3 Carol    91   Pass',
                hints: ['Use ifelse() for vectorized condition', 'df$status <- ifelse(df$score >= 80, "Pass", "Fail")', 'print(df)']
              },
              quiz: [
                {
                  question: 'ifelse() is preferred over if/else for columns because?',
                  options: ['Faster syntax', 'Works on entire vector at once', 'Required for data frames', 'More readable'],
                  correct: 1
                },
                {
                  question: 'cut() is used for?',
                  options: ['Removing rows', 'Binning numeric data into categories', 'String splitting', 'Column deletion'],
                  correct: 1
                },
                {
                  question: 'within(df, {...}) advantage?',
                  options: ['Faster', 'No need for df$ prefix inside', 'Creates copy', 'Required for transforms'],
                  correct: 1
                },
                {
                  question: 'How to round all numeric columns?',
                  options: ['round(df)', 'lapply on numeric columns', 'round each manually', 'Not possible'],
                  correct: 1
                }
              ]
            },
            {
              id: 'reshaping_data',
              title: 'Reshaping Data',
              type: 'challenge',
              theory: `<h2>Reshaping Data</h2><h3>Wide to Long (stack/melt)</h3><pre><code># Base R
df_long <- reshape(df, direction="long",
  varying=c("jan","feb","mar"),
  v.names="sales", timevar="month")

# Using stack()
scores <- data.frame(math=c(90,80), sci=c(85,92))
stack(scores)
#   values  ind
# 1     90 math
# 2     80 math
# 3     85  sci
# 4     92  sci</code></pre><h3>Long to Wide</h3><pre><code>reshape(df_long, direction="wide",
  idvar="student", timevar="subject")</code></pre><h3>Transposing</h3><pre><code>t(df)  # Swap rows and columns (returns matrix)</code></pre><h3>Splitting & Combining</h3><pre><code># Split by group
split_data <- split(df, df$category)

# Combine list of data frames
do.call(rbind, list_of_dfs)</code></pre>`,
              challenge: {
                description: 'Use stack() on data.frame(a=c(1,2), b=c(3,4)) and print the result.',
                starterCode: 'df <- data.frame(a=c(1,2), b=c(3,4))\n# Stack the data frame\n',
                expectedOutput: '  values ind\n1      1   a\n2      2   a\n3      3   b\n4      4   b',
                hints: ['stack() converts wide to long', 'stack(df)', 'print(stack(df))']
              },
              quiz: [
                {
                  question: 'Wide format means?',
                  options: ['Many rows few columns', 'Variables as separate columns', 'Only one column', 'Sorted data'],
                  correct: 1
                },
                {
                  question: 'stack() converts?',
                  options: ['Long to wide', 'Wide to long', 'Matrix to df', 'List to vector'],
                  correct: 1
                },
                {
                  question: 't(df) does?',
                  options: ['Tests df', 'Transposes (swap rows/cols)', 'Trims df', 'Types of df'],
                  correct: 1
                },
                {
                  question: 'split(df, df$group) returns?',
                  options: ['Filtered df', 'List of data frames per group', 'Two vectors', 'Error'],
                  correct: 1
                }
              ]
            },
            {
              id: 'aggregating_data',
              title: 'Aggregating Data',
              type: 'challenge',
              theory: `<h2>Aggregating Data</h2><h3>aggregate()</h3><pre><code>df <- data.frame(dept=c("Sales","IT","Sales","IT","Sales"),
                 salary=c(50,60,55,65,52))

# Mean salary by department
aggregate(salary ~ dept, data=df, FUN=mean)
#   dept salary
# 1   IT   62.5
# 2 Sales  52.3</code></pre><h3>Multiple Aggregations</h3><pre><code>aggregate(cbind(salary, bonus) ~ dept, data=df, FUN=mean)</code></pre><h3>tapply() Alternative</h3><pre><code>tapply(df$salary, df$dept, mean)
tapply(df$salary, df$dept, summary)</code></pre><h3>Table & Counts</h3><pre><code>table(df$dept)        # Count per category
prop.table(table(df$dept))  # Proportions
xtabs(~ dept + level, data=df)  # Cross-tabulation</code></pre>`,
              challenge: {
                description: 'Use aggregate to find mean score by group. Print result.',
                starterCode: 'df <- data.frame(group=c("A","B","A","B","A"), score=c(80,90,85,95,82))\n# Mean score by group\n',
                expectedOutput: '  group score\n1     A  82.3\n2     B  92.5',
                hints: ['aggregate(score ~ group, data=df, FUN=mean)', 'Formula: response ~ grouping', 'print(aggregate(score ~ group, data=df, FUN=mean))']
              },
              quiz: [
                {
                  question: 'aggregate formula syntax?',
                  options: ['value = group', 'value ~ group', 'group ~ value', 'value : group'],
                  correct: 1
                },
                {
                  question: 'table() returns?',
                  options: ['Data frame', 'Frequency counts', 'Percentages', 'Summary stats'],
                  correct: 1
                },
                {
                  question: 'prop.table() converts to?',
                  options: ['Counts', 'Proportions (0-1)', 'Percentages', 'Cumulative sums'],
                  correct: 1
                },
                {
                  question: 'tapply(x, group, func) is like SQL?',
                  options: ['WHERE', 'JOIN', 'GROUP BY + aggregate', 'ORDER BY'],
                  correct: 2
                }
              ]
            },
            {
              id: 'string_manipulation',
              title: 'String Manipulation',
              type: 'challenge',
              theory: `<h2>String Manipulation</h2><h3>Pattern Matching</h3><pre><code>x <- c("apple123", "banana456", "cherry789")
grep("na", x)           # 2 (index)
grepl("na", x)          # FALSE TRUE FALSE
regexpr("[0-9]+", x)    # Position of first number match</code></pre><h3>Substitution</h3><pre><code>sub("a", "X", "banana")    # "bXnana" (first only)
gsub("a", "X", "banana")   # "bXnXnX" (all)
gsub("[0-9]", "", "abc123") # "abc" (remove digits)</code></pre><h3>Extraction</h3><pre><code>substr("Hello World", 1, 5)   # "Hello"
strsplit("a,b,c", ",")        # list("a","b","c")
regmatches(x, regexpr("[0-9]+", x))  # "123" "456" "789"</code></pre><h3>Formatting</h3><pre><code>sprintf("Name: %s, Score: %d%%", "Alice", 95)
formatC(12345.6, format="f", digits=2)  # "12345.60"
format(Sys.Date(), "%Y-%m-%d")           # "2024-03-15"</code></pre>`,
              challenge: {
                description: 'Use gsub to replace all spaces with underscores in "hello world test". Print result.',
                starterCode: '# Replace spaces with underscores\n',
                expectedOutput: 'hello_world_test',
                hints: ['gsub(pattern, replacement, string)', 'gsub(" ", "_", ...)', 'print(gsub(" ", "_", "hello world test"))']
              },
              quiz: [
                {
                  question: 'grep vs grepl?',
                  options: ['Same', 'grep returns indices, grepl returns TRUE/FALSE', 'grepl returns indices', 'grep is for files'],
                  correct: 1
                },
                {
                  question: 'sub vs gsub?',
                  options: ['Same', 'sub replaces first match, gsub replaces all', 'gsub is slower', 'sub replaces all'],
                  correct: 1
                },
                {
                  question: 'strsplit("a-b-c", "-") returns?',
                  options: ['Vector c("a","b","c")', 'List containing c("a","b","c")', 'String "abc"', 'Error'],
                  correct: 1
                },
                {
                  question: 'gsub("[0-9]", "", "abc123")?',
                  options: ['"123"', '"abc"', '"abc123"', 'Error'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'basic-plotting',
          title: 'Basic Plotting',
          lessons: [
            {
              id: 'plot_basics',
              title: 'Plot Basics',
              type: 'challenge',
              theory: `<h2>Plot Basics</h2><p>R has powerful built-in plotting. The <code>plot()</code> function is versatile.</p><h3>Scatter Plot</h3><pre><code>x <- 1:10
y <- x^2
plot(x, y, main="Square Function",
     xlab="x", ylab="x squared",
     col="blue", pch=16)</code></pre><h3>Plot Parameters</h3><ul><li><code>main</code> — Title</li><li><code>xlab, ylab</code> — Axis labels</li><li><code>col</code> — Color</li><li><code>pch</code> — Point shape (1-25)</li><li><code>type</code> — "p" points, "l" lines, "b" both</li><li><code>lwd</code> — Line width</li></ul><h3>Adding to Plots</h3><pre><code>plot(x, y, type="p")
lines(x, y, col="red")    # Add line
points(x, y+1, col="blue") # Add points
abline(h=50, lty=2)        # Horizontal line
legend("topleft", legend=c("Data"), col="blue", pch=16)</code></pre>`,
              challenge: {
                description: 'Create x=1:5 and y=c(2,4,6,8,10). Print y (we cannot render plots in challenges).',
                starterCode: 'x <- 1:5\ny <- c(2,4,6,8,10)\n# In real R you would: plot(x, y)\n',
                expectedOutput: '2  4  6  8 10',
                hints: ['Create the vectors', 'print(y) to show values', 'In RStudio, plot(x,y) shows graph']
              },
              quiz: [
                {
                  question: 'plot(x, y, type="l") draws?',
                  options: ['Points', 'Lines', 'Bars', 'Histogram'],
                  correct: 1
                },
                {
                  question: 'What does pch control?',
                  options: ['Color', 'Point shape', 'Line type', 'Font size'],
                  correct: 1
                },
                {
                  question: 'How to add a line to existing plot?',
                  options: ['plot() again', 'lines()', 'add_line()', 'draw()'],
                  correct: 1
                },
                {
                  question: 'abline(h=5) draws?',
                  options: ['Vertical line at x=5', 'Horizontal line at y=5', 'Diagonal line', 'Nothing'],
                  correct: 1
                }
              ]
            },
            {
              id: 'histograms_barplots',
              title: 'Histograms & Bar Plots',
              type: 'challenge',
              theory: `<h2>Histograms & Bar Plots</h2><h3>Histogram</h3><pre><code>data <- rnorm(1000, mean=50, sd=10)
hist(data, main="Distribution",
     xlab="Value", col="lightblue",
     breaks=30)  # Number of bins</code></pre><h3>Bar Plot</h3><pre><code>counts <- c(25, 40, 15, 30)
names(counts) <- c("A", "B", "C", "D")
barplot(counts, main="Categories",
        col=rainbow(4),
        ylab="Count")</code></pre><h3>Grouped Bar Plot</h3><pre><code>data <- matrix(c(10,20,15,25,30,20), nrow=2)
barplot(data, beside=TRUE,
        names.arg=c("Q1","Q2","Q3"),
        legend=c("Product A","Product B"))</code></pre><h3>Pie Chart</h3><pre><code>slices <- c(30, 25, 20, 15, 10)
labels <- c("Chrome", "Safari", "Firefox", "Edge", "Other")
pie(slices, labels=labels, col=rainbow(5))</code></pre>`,
              challenge: {
                description: 'Create a named vector: scores <- c(A=30, B=25, C=20, D=15). Print it.',
                starterCode: '# Named vector for bar plot data\n',
                expectedOutput: ' A  B  C  D \n30 25 20 15',
                hints: ['c(name=value, ...)', 'scores <- c(A=30, B=25, C=20, D=15)', 'print(scores)']
              },
              quiz: [
                {
                  question: 'hist() creates?',
                  options: ['Bar chart', 'Histogram (frequency distribution)', 'Scatter plot', 'Line chart'],
                  correct: 1
                },
                {
                  question: 'breaks parameter controls?',
                  options: ['X axis range', 'Number of bins', 'Y axis range', 'Color breaks'],
                  correct: 1
                },
                {
                  question: 'barplot(beside=TRUE) makes?',
                  options: ['Stacked bars', 'Grouped/side-by-side bars', 'Horizontal bars', '3D bars'],
                  correct: 1
                },
                {
                  question: 'rainbow(n) returns?',
                  options: ['A plot', 'n rainbow colors', 'Random numbers', 'Color palette name'],
                  correct: 1
                }
              ]
            },
            {
              id: 'boxplots_advanced',
              title: 'Box Plots & Advanced',
              type: 'challenge',
              theory: `<h2>Box Plots & Advanced Plotting</h2><h3>Box Plot</h3><pre><code>boxplot(score ~ group, data=df,
        main="Scores by Group",
        col=c("lightblue","lightgreen"))</code></pre><p>Shows median, quartiles, whiskers, and outliers.</p><h3>Multiple Plots</h3><pre><code>par(mfrow=c(2,2))  # 2x2 grid
plot(x, y)
hist(x)
barplot(table(group))
boxplot(y ~ group)
par(mfrow=c(1,1))  # Reset</code></pre><h3>Saving Plots</h3><pre><code>png("my_plot.png", width=800, height=600)
plot(x, y, main="My Plot")
dev.off()  # Close device and save

pdf("my_plots.pdf")
# ... multiple plots ...
dev.off()</code></pre><h3>Colors</h3><pre><code>colors()       # All 657 named colors
palette()      # Current palette
rgb(1, 0, 0)   # Red in hex
adjustcolor("blue", alpha=0.5)  # Transparency</code></pre>`,
              challenge: {
                description: 'Create groups and values for a boxplot. Print the table of groups.',
                starterCode: 'groups <- c("A","A","A","B","B","B")\nvalues <- c(10,12,11,20,22,21)\n# Print group counts\n',
                expectedOutput: '\nA B \n3 3',
                hints: ['Use table() for counts', 'table(groups)', 'print(table(groups))']
              },
              quiz: [
                {
                  question: 'Box plot shows?',
                  options: ['Mean only', 'Median, quartiles, outliers', 'All data points', 'Standard deviation'],
                  correct: 1
                },
                {
                  question: 'par(mfrow=c(2,2)) does?',
                  options: ['Makes plot bigger', 'Creates 2x2 grid for multiple plots', 'Changes colors', 'Saves plot'],
                  correct: 1
                },
                {
                  question: 'dev.off() does?',
                  options: ['Turns off R', 'Closes graphics device (saves file)', 'Clears plot', 'Resets parameters'],
                  correct: 1
                },
                {
                  question: 'How many named colors does R have?',
                  options: ['50', '100', '657', '16'],
                  correct: 2
                }
              ]
            },
            {
              id: 'ggplot_intro',
              title: 'Introduction to ggplot2',
              type: 'challenge',
              theory: `<h2>Introduction to ggplot2</h2><p>ggplot2 is the gold standard for R visualization, based on the Grammar of Graphics.</p><h3>Basic Structure</h3><pre><code>library(ggplot2)

ggplot(data=df, aes(x=col1, y=col2)) +
  geom_point()  # Add points layer</code></pre><h3>Common Geoms</h3><pre><code>geom_point()      # Scatter
geom_line()       # Line
geom_bar()        # Bar chart
geom_histogram()  # Histogram
geom_boxplot()    # Box plot
geom_smooth()     # Trend line</code></pre><h3>Customization</h3><pre><code>ggplot(df, aes(x=age, y=score, color=group)) +
  geom_point(size=3) +
  labs(title="Scores by Age", x="Age", y="Score") +
  theme_minimal()</code></pre><h3>Key Concepts</h3><ul><li><code>aes()</code> — Aesthetic mappings (data → visual)</li><li><code>geom_*</code> — Geometric layers</li><li><code>labs()</code> — Labels</li><li><code>theme_*</code> — Visual themes</li><li><code>+</code> — Add layers</li></ul>`,
              challenge: {
                description: 'Create sample data for ggplot: df with x=1:5 and y=c(2,4,1,5,3). Print df.',
                starterCode: '# Create data for plotting\ndf <- data.frame(x=1:5, y=c(2,4,1,5,3))\n',
                expectedOutput: '  x y\n1 1 2\n2 2 4\n3 3 1\n4 4 5\n5 5 3',
                hints: ['Data frame is ready', 'print(df)', 'In RStudio: ggplot(df, aes(x,y)) + geom_point()']
              },
              quiz: [
                {
                  question: 'ggplot2 is based on?',
                  options: ['Base R', 'Grammar of Graphics', 'Lattice', 'matplotlib'],
                  correct: 1
                },
                {
                  question: 'aes() defines?',
                  options: ['Colors only', 'Data to visual mappings', 'Plot title', 'File output'],
                  correct: 1
                },
                {
                  question: 'Layers are added with?',
                  options: ['&', '|', '+', '>>'],
                  correct: 2
                },
                {
                  question: 'geom_smooth() adds?',
                  options: ['Smooth colors', 'Trend/regression line', 'Smoothed points', 'Background'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'statistics-basics',
          title: 'Statistics Basics',
          lessons: [
            {
              id: 'descriptive_stats',
              title: 'Descriptive Statistics',
              type: 'challenge',
              theory: `<h2>Descriptive Statistics</h2><h3>Central Tendency</h3><pre><code>x <- c(12, 15, 18, 22, 25, 28, 30, 35)
mean(x)       # 23.125 (average)
median(x)     # 23.5 (middle value)
# Mode (no built-in, use table)
names(which.max(table(x)))</code></pre><h3>Spread</h3><pre><code>sd(x)         # Standard deviation
var(x)        # Variance
IQR(x)        # Interquartile range
range(x)      # Min and max
diff(range(x)) # Range width</code></pre><h3>Quantiles</h3><pre><code>quantile(x)              # 0%, 25%, 50%, 75%, 100%
quantile(x, probs=0.9)   # 90th percentile</code></pre><h3>summary()</h3><pre><code>summary(x)
# Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
# 12.00   17.25   23.50   23.12   28.50   35.00</code></pre>`,
              challenge: {
                description: 'Calculate and print the mean of c(10, 20, 30, 40, 50).',
                starterCode: 'x <- c(10, 20, 30, 40, 50)\n# Calculate mean\n',
                expectedOutput: '30',
                hints: ['Use mean() function', 'mean(x)', 'print(mean(x))']
              },
              quiz: [
                {
                  question: 'Median of c(1,2,3,4,5)?',
                  options: ['2.5', '3', '15', '1'],
                  correct: 1
                },
                {
                  question: 'sd() calculates?',
                  options: ['Sum of differences', 'Standard deviation', 'Sorted data', 'Sample data'],
                  correct: 1
                },
                {
                  question: 'IQR is?',
                  options: ['Full range', 'Q3 - Q1 (middle 50%)', 'Mean - median', 'Max - min'],
                  correct: 1
                },
                {
                  question: 'quantile(x, 0.75) gives?',
                  options: ['75th value', '75th percentile', '75% of max', 'Third value'],
                  correct: 1
                }
              ]
            },
            {
              id: 'correlation_regression',
              title: 'Correlation & Regression',
              type: 'challenge',
              theory: `<h2>Correlation & Regression</h2><h3>Correlation</h3><pre><code>x <- c(1, 2, 3, 4, 5)
y <- c(2, 4, 5, 4, 5)
cor(x, y)           # Pearson correlation
cor(x, y, method="spearman")  # Rank correlation
cor.test(x, y)      # With p-value</code></pre><h3>Simple Linear Regression</h3><pre><code>model <- lm(y ~ x)   # y = mx + b
summary(model)        # Coefficients, R-squared, p-values

# Extract values
coef(model)           # Intercept and slope
predict(model, data.frame(x=6))  # Predict for x=6
residuals(model)      # Errors</code></pre><h3>Multiple Regression</h3><pre><code>model2 <- lm(y ~ x1 + x2 + x3, data=df)
summary(model2)</code></pre><h3>Interpreting</h3><ul><li><strong>R-squared:</strong> % of variance explained (0-1)</li><li><strong>p-value:</strong> < 0.05 = statistically significant</li><li><strong>Coefficients:</strong> Effect size of each predictor</li></ul>`,
              challenge: {
                description: 'Calculate correlation between x=c(1,2,3,4,5) and y=c(2,4,6,8,10). Print it.',
                starterCode: 'x <- c(1,2,3,4,5)\ny <- c(2,4,6,8,10)\n# Calculate correlation\n',
                expectedOutput: '1',
                hints: ['Use cor() function', 'Perfect linear = 1', 'print(cor(x, y))']
              },
              quiz: [
                {
                  question: 'Correlation of 1 means?',
                  options: ['No relationship', 'Perfect positive linear', 'Perfect negative', 'Error'],
                  correct: 1
                },
                {
                  question: 'lm(y ~ x) fits?',
                  options: ['Logarithmic model', 'Linear model', 'Logistic model', 'Polynomial'],
                  correct: 1
                },
                {
                  question: 'R-squared of 0.85 means?',
                  options: ['85% error', '85% of variance explained', '85% confidence', '15% fit'],
                  correct: 1
                },
                {
                  question: 'p-value < 0.05 means?',
                  options: ['Not significant', 'Statistically significant', '5% error rate', 'Model is bad'],
                  correct: 1
                }
              ]
            },
            {
              id: 'hypothesis_testing',
              title: 'Hypothesis Testing',
              type: 'challenge',
              theory: `<h2>Hypothesis Testing</h2><h3>t-test</h3><pre><code># One-sample: is mean different from 0?
t.test(x, mu=0)

# Two-sample: are means different?
t.test(group1, group2)

# Paired t-test
t.test(before, after, paired=TRUE)</code></pre><h3>Chi-squared Test</h3><pre><code># Test independence of categorical variables
tbl <- table(df$gender, df$preference)
chisq.test(tbl)</code></pre><h3>ANOVA</h3><pre><code># Compare means across 3+ groups
model <- aov(score ~ group, data=df)
summary(model)
TukeyHSD(model)  # Which groups differ?</code></pre><h3>Interpreting Results</h3><ul><li><strong>p < 0.05:</strong> Reject null hypothesis (significant difference)</li><li><strong>p >= 0.05:</strong> Fail to reject null (no significant difference)</li><li><strong>Confidence interval:</strong> Range likely containing true value</li></ul>`,
              challenge: {
                description: 'Perform a t-test checking if mean of c(5,6,7,8,9) differs from 5. Print the p-value.',
                starterCode: 'x <- c(5,6,7,8,9)\n# t-test against mu=5\n',
                expectedOutput: '0.03759',
                hints: ['t.test(x, mu=5)', 'Access p.value from result', 'result <- t.test(x, mu=5); print(round(result$p.value, 5))']
              },
              quiz: [
                {
                  question: 'Null hypothesis typically states?',
                  options: ['There is a difference', 'There is no difference', 'Data is normal', 'Sample is large'],
                  correct: 1
                },
                {
                  question: 't.test compares?',
                  options: ['Variances', 'Means', 'Medians', 'Modes'],
                  correct: 1
                },
                {
                  question: 'ANOVA is used when?',
                  options: ['2 groups', '3 or more groups', 'Paired data', 'Categorical only'],
                  correct: 1
                },
                {
                  question: 'p = 0.03 means?',
                  options: ['Not significant', 'Significant at 0.05 level', '3% chance model is correct', '97% confidence'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'data-cleaning-project',
          title: 'Data Cleaning PROJECT',
          lessons: [
            {
              id: 'handling_missing_data',
              title: 'Handling Missing Data',
              type: 'project',
              theory: `<h2>Project: Handling Missing Data</h2><p>Real-world data is messy. Missing values (NA) are everywhere. Let's learn to detect and handle them.</p><h3>Detecting NAs</h3><pre><code>sum(is.na(df))           # Total NAs
colSums(is.na(df))       # NAs per column
complete.cases(df)       # Rows with no NAs</code></pre><h3>Strategies</h3><pre><code># Remove rows with NAs
df_clean <- na.omit(df)

# Replace with mean
df$age[is.na(df$age)] <- mean(df$age, na.rm=TRUE)

# Replace with median (better for skewed data)
df$income[is.na(df$income)] <- median(df$income, na.rm=TRUE)

# Replace with category mode
mode_val <- names(which.max(table(df$category)))
df$category[is.na(df$category)] <- mode_val</code></pre>`,
              challenge: {
                description: 'Count total NAs in data.frame(a=c(1,NA,3), b=c(NA,5,6)). Print the count.',
                starterCode: 'df <- data.frame(a=c(1,NA,3), b=c(NA,5,6))\n# Count total NAs\n',
                expectedOutput: '2',
                hints: ['sum(is.na(df)) counts all NAs', 'is.na returns TRUE for NAs', 'print(sum(is.na(df)))']
              },
              quiz: [
                {
                  question: 'na.rm=TRUE in mean() does?',
                  options: ['Removes the function', 'Ignores NA values in calculation', 'Removes all NAs from data', 'Returns NA'],
                  correct: 1
                },
                {
                  question: 'When to use median instead of mean for imputation?',
                  options: ['Always', 'When data is skewed/has outliers', 'Never', 'Only for integers'],
                  correct: 1
                },
                {
                  question: 'na.omit(df) removes?',
                  options: ['NA columns', 'Rows with any NA', 'All NAs (fills with 0)', 'Nothing'],
                  correct: 1
                },
                {
                  question: 'complete.cases(df) returns?',
                  options: ['Count of complete rows', 'Logical vector (TRUE=no NAs in row)', 'Cleaned data frame', 'Column names'],
                  correct: 1
                }
              ]
            },
            {
              id: 'outlier_detection',
              title: 'Outlier Detection',
              type: 'project',
              theory: `<h2>Project: Outlier Detection</h2><h3>IQR Method</h3><pre><code>Q1 <- quantile(x, 0.25)
Q3 <- quantile(x, 0.75)
IQR_val <- Q3 - Q1
lower <- Q1 - 1.5 * IQR_val
upper <- Q3 + 1.5 * IQR_val

outliers <- x[x < lower | x > upper]
clean <- x[x >= lower & x <= upper]</code></pre><h3>Z-Score Method</h3><pre><code>z_scores <- (x - mean(x)) / sd(x)
outliers <- x[abs(z_scores) > 3]  # Beyond 3 SD</code></pre><h3>Visual Detection</h3><pre><code>boxplot(x)  # Outliers shown as dots beyond whiskers
plot(x)     # Look for extreme values</code></pre><h3>Handling Outliers</h3><ul><li><strong>Remove:</strong> If clearly erroneous</li><li><strong>Cap/Winsorize:</strong> Replace with boundary value</li><li><strong>Transform:</strong> log() or sqrt() to reduce impact</li><li><strong>Keep:</strong> If legitimate extreme values</li></ul>`,
              challenge: {
                description: 'Find outliers in x using IQR method. Print values outside 1.5*IQR from quartiles.',
                starterCode: 'x <- c(10, 12, 14, 15, 16, 18, 100)\nQ1 <- quantile(x, 0.25)\nQ3 <- quantile(x, 0.75)\nIQR_val <- Q3 - Q1\nlower <- Q1 - 1.5 * IQR_val\nupper <- Q3 + 1.5 * IQR_val\n# Print outliers\n',
                expectedOutput: '100',
                hints: ['Filter x where x < lower or x > upper', 'x[x < lower | x > upper]', 'print(x[x < lower | x > upper])']
              },
              quiz: [
                {
                  question: 'IQR method flags values beyond?',
                  options: ['1 SD', '2 SD', '1.5 * IQR from quartiles', 'Mean ± range'],
                  correct: 2
                },
                {
                  question: 'Z-score > 3 indicates?',
                  options: ['Normal value', 'Potential outlier', 'Missing value', 'Error'],
                  correct: 1
                },
                {
                  question: 'Winsorizing means?',
                  options: ['Removing outliers', 'Capping at boundary values', 'Log transform', 'Ignoring outliers'],
                  correct: 1
                },
                {
                  question: 'When should you keep outliers?',
                  options: ['Never', 'When they represent legitimate extreme values', 'Always', 'Only with large datasets'],
                  correct: 1
                }
              ]
            },
            {
              id: 'full_cleaning_pipeline',
              title: 'Full Cleaning Pipeline',
              type: 'project',
              theory: `<h2>Project: Full Cleaning Pipeline</h2><p>Combine all techniques into a complete data cleaning workflow.</p><h3>The Pipeline</h3><pre><code># 1. Inspect
str(df)
summary(df)
colSums(is.na(df))

# 2. Fix types
df$date <- as.Date(df$date)
df$price <- as.numeric(gsub("\\\\$", "", df$price))

# 3. Handle NAs
df$age[is.na(df$age)] <- median(df$age, na.rm=TRUE)
df <- df[!is.na(df$id), ]  # Remove rows with no ID

# 4. Remove duplicates
df <- df[!duplicated(df), ]

# 5. Fix outliers
df$income[df$income > upper] <- upper

# 6. Standardize text
df$name <- trimws(toupper(df$name))

# 7. Validate
stopifnot(sum(is.na(df)) == 0)
stopifnot(nrow(df) == nrow(unique(df)))</code></pre>`,
              challenge: {
                description: 'Remove duplicates from df and print the number of remaining rows.',
                starterCode: 'df <- data.frame(x=c(1,2,2,3,3,3), y=c("a","b","b","c","c","c"))\n# Remove duplicates and count rows\n',
                expectedOutput: '3',
                hints: ['!duplicated(df) marks unique rows', 'df <- df[!duplicated(df), ]', 'print(nrow(df))']
              },
              quiz: [
                {
                  question: 'duplicated() returns?',
                  options: ['Duplicate values', 'Logical: TRUE for duplicate rows', 'Count of duplicates', 'Unique rows'],
                  correct: 1
                },
                {
                  question: 'First step in cleaning pipeline?',
                  options: ['Remove NAs', 'Inspect/understand the data', 'Remove outliers', 'Fix types'],
                  correct: 1
                },
                {
                  question: 'trimws() does?',
                  options: ['Trims rows', 'Removes leading/trailing whitespace', 'Truncates strings', 'Removes special chars'],
                  correct: 1
                },
                {
                  question: 'Why validate at the end?',
                  options: ['Optional step', 'Confirm cleaning was successful', 'R requires it', 'Performance check'],
                  correct: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default course
