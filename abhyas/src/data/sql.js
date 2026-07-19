const course = {
  id: 'sql',
  title: 'Learn SQL',
  icon: '🗃️',
  description: 'Master SQL from basic queries to complex joins and database design. Practice with real-world scenarios and build an e-commerce query system.',
  totalLessons: 45,
  sections: [
    {
      id: 'basics',
      title: 'SQL Basics',
      description: 'Learn foundational SQL skills from SELECT queries to aggregate functions',
      totalLessons: 25,
      totalChallenges: 25,
      totalQuizQuestions: 100,
      projects: 3,
      chapters: [
        {
          id: 'introduction-to-databases',
          title: 'Introduction to Databases',
          lessons: [
            {
              id: 'what_is_a_database',
              title: 'What is a Database?',
              type: 'challenge',
              theory: `<h2>What is a Database?</h2><p>A <strong>database</strong> is an organized collection of structured data stored electronically. Think of it like a highly efficient digital filing cabinet that can store millions of records and retrieve any piece of information in milliseconds.</p><h3>Why Databases Matter</h3><p>Almost every application you use relies on databases:</p><ul><li><strong>Social media:</strong> Stores your posts, friends, messages</li><li><strong>Banking:</strong> Tracks accounts, transactions, balances</li><li><strong>E-commerce:</strong> Manages products, orders, customers</li><li><strong>Healthcare:</strong> Patient records, appointments, prescriptions</li></ul><h3>Types of Databases</h3><p><strong>Relational databases</strong> (what we'll learn) organize data into tables with rows and columns, like spreadsheets on steroids. Popular ones include MySQL, PostgreSQL, SQLite, and SQL Server.</p><p><strong>Non-relational databases</strong> (NoSQL) store data differently — as documents, key-value pairs, or graphs. Examples: MongoDB, Redis, Neo4j.</p><h3>Tables, Rows, and Columns</h3><p>In a relational database:</p><ul><li>A <strong>table</strong> represents one type of entity (e.g., customers, orders)</li><li>A <strong>row</strong> (record) is one instance (e.g., one specific customer)</li><li>A <strong>column</strong> (field) is one attribute (e.g., customer name, email)</li></ul><pre><code>| id | name    | email           |
|----|---------|-----------------|
| 1  | Alice   | alice@mail.com  |
| 2  | Bob     | bob@mail.com    |</code></pre><p><strong>Key takeaway:</strong> Databases let us store, organize, and retrieve massive amounts of data efficiently using a structured approach.</p>`,
              challenge: {
                description: 'Write a SQL query that selects all columns from a table called "users".',
                starterCode: '-- Select all data from the users table\n',
                expectedOutput: 'SELECT * FROM users;',
                hints: ['Use SELECT to retrieve data', 'The asterisk * means all columns', 'SELECT * FROM table_name;']
              },
              quiz: [
                {
                  question: 'What is a database?',
                  options: ['A programming language', 'An organized collection of structured data', 'A web browser', 'A type of computer'],
                  correct: 1
                },
                {
                  question: 'Which of these is a relational database?',
                  options: ['MongoDB', 'Redis', 'PostgreSQL', 'Neo4j'],
                  correct: 2
                },
                {
                  question: 'What is a row in a database table?',
                  options: ['A column header', 'A single record/instance', 'The table name', 'A database type'],
                  correct: 1
                },
                {
                  question: 'What does a column represent in a table?',
                  options: ['A complete record', 'An attribute/field', 'A database', 'A query'],
                  correct: 1
                }
              ]
            },
            {
              id: 'what_is_sql',
              title: 'What is SQL?',
              type: 'challenge',
              theory: `<h2>What is SQL?</h2><p><strong>SQL</strong> (Structured Query Language) is the standard language for communicating with relational databases. Pronounced either "sequel" or "S-Q-L", it lets you ask questions about data, insert new records, update existing ones, and delete what you no longer need.</p><h3>Why Learn SQL?</h3><ul><li><strong>Universal:</strong> SQL works across MySQL, PostgreSQL, SQLite, SQL Server, and Oracle</li><li><strong>In demand:</strong> One of the most requested skills in data, backend, and analytics roles</li><li><strong>Powerful:</strong> Can process millions of rows in seconds</li><li><strong>Declarative:</strong> You describe WHAT you want, not HOW to get it</li></ul><h3>SQL Categories</h3><p>SQL statements fall into categories:</p><ul><li><strong>DQL (Data Query Language):</strong> SELECT — retrieving data</li><li><strong>DML (Data Manipulation Language):</strong> INSERT, UPDATE, DELETE — modifying data</li><li><strong>DDL (Data Definition Language):</strong> CREATE, ALTER, DROP — defining structure</li><li><strong>DCL (Data Control Language):</strong> GRANT, REVOKE — permissions</li></ul><h3>Your First Query</h3><pre><code>SELECT name FROM employees;</code></pre><p>This reads: "Get the name column from the employees table." SQL is designed to read like English, making it intuitive once you learn the basic patterns.</p><h3>SQL Syntax Basics</h3><p>SQL statements end with a semicolon <code>;</code>. Keywords like SELECT and FROM are case-insensitive but conventionally written in UPPERCASE. Table and column names are case-sensitive in some systems.</p>`,
              challenge: {
                description: 'Write a SQL query to select the "name" column from the "employees" table.',
                starterCode: '-- Select the name column from employees\n',
                expectedOutput: 'SELECT name FROM employees;',
                hints: ['Use SELECT followed by the column name', 'Use FROM to specify the table', 'SELECT name FROM employees;']
              },
              quiz: [
                {
                  question: 'What does SQL stand for?',
                  options: ['Standard Query Logic', 'Structured Query Language', 'Simple Question Language', 'System Query Lookup'],
                  correct: 1
                },
                {
                  question: 'SQL is which type of language?',
                  options: ['Imperative', 'Object-oriented', 'Declarative', 'Functional'],
                  correct: 2
                },
                {
                  question: 'Which category does SELECT belong to?',
                  options: ['DDL', 'DML', 'DQL', 'DCL'],
                  correct: 2
                },
                {
                  question: 'What character ends a SQL statement?',
                  options: ['Period .', 'Colon :', 'Semicolon ;', 'Comma ,'],
                  correct: 2
                }
              ]
            },
            {
              id: 'database_tools',
              title: 'Database Tools & Setup',
              type: 'challenge',
              theory: `<h2>Database Tools & Setup</h2><p>To practice SQL, you need a database system. There are many options from lightweight local tools to cloud-based solutions.</p><h3>Popular Database Systems</h3><ul><li><strong>SQLite:</strong> File-based, zero configuration, perfect for learning. Comes built into Python, mobile apps, and browsers.</li><li><strong>MySQL:</strong> Most popular open-source database. Powers WordPress, Facebook, and Twitter.</li><li><strong>PostgreSQL:</strong> Advanced open-source database with excellent standards compliance. Used by Apple, Reddit, and Spotify.</li><li><strong>SQL Server:</strong> Microsoft's enterprise database system.</li></ul><h3>Practice Environments</h3><p>You don't need to install anything to start learning:</p><ul><li><strong>This app!</strong> Practice directly in each lesson</li><li><strong>DB Fiddle:</strong> Online SQL playground (db-fiddle.com)</li><li><strong>SQLite Online:</strong> Browser-based SQLite (sqliteonline.com)</li><li><strong>Mode Analytics:</strong> Free SQL editor with sample datasets</li></ul><h3>How Queries Execute</h3><p>When you run a SQL query:</p><ol><li>The database <strong>parses</strong> your SQL statement</li><li>It creates an <strong>execution plan</strong> (the most efficient way to get your data)</li><li>It <strong>executes</strong> the plan against the stored data</li><li>It <strong>returns</strong> the result set to you</li></ol><pre><code>SELECT * FROM products WHERE price > 10;</code></pre><p>This asks the database: "Show me all products that cost more than 10." The database figures out the fastest way to find those records and returns them.</p><p><strong>Key takeaway:</strong> You write the question; the database optimizes and executes it for you.</p>`,
              challenge: {
                description: 'Write a query that selects all columns from a table called "products" where the price is greater than 10.',
                starterCode: '-- Get all products with price > 10\n',
                expectedOutput: 'SELECT * FROM products WHERE price > 10;',
                hints: ['Use SELECT * to get all columns', 'Use WHERE to filter rows', 'Use > for greater than comparison']
              },
              quiz: [
                {
                  question: 'Which database is file-based and requires zero configuration?',
                  options: ['MySQL', 'PostgreSQL', 'SQLite', 'Oracle'],
                  correct: 2
                },
                {
                  question: 'What is the first step when a database processes a query?',
                  options: ['Execute', 'Return results', 'Parse the SQL', 'Create backup'],
                  correct: 2
                },
                {
                  question: 'Which database does WordPress primarily use?',
                  options: ['PostgreSQL', 'SQLite', 'MySQL', 'SQL Server'],
                  correct: 2
                },
                {
                  question: 'What does an execution plan determine?',
                  options: ['The color of output', 'The most efficient way to get data', 'Which user ran the query', 'The database password'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'select-queries',
          title: 'SELECT Queries',
          lessons: [
            {
              id: 'select_all',
              title: 'SELECT All Columns',
              type: 'challenge',
              theory: `<h2>SELECT All Columns</h2><p>The <code>SELECT</code> statement is the most fundamental SQL command. It retrieves data from one or more tables. The asterisk <code>*</code> is a wildcard meaning "all columns."</p><h3>Basic Syntax</h3><pre><code>SELECT * FROM table_name;</code></pre><p>This returns every column and every row from the specified table. It's great for exploring a table's structure and contents.</p><h3>Example</h3><p>Given a <code>students</code> table:</p><pre><code>SELECT * FROM students;</code></pre><p><strong>Result:</strong></p><pre><code>| id | name  | age | grade |
|----|-------|-----|-------|
| 1  | Alice | 20  | A     |
| 2  | Bob   | 22  | B     |
| 3  | Carol | 21  | A     |</code></pre><h3>When to Use SELECT *</h3><ul><li><strong>Exploring:</strong> When you want to see what's in a table</li><li><strong>Small tables:</strong> When the table has few columns</li><li><strong>Development:</strong> Quick checks during coding</li></ul><h3>When NOT to Use SELECT *</h3><ul><li><strong>Production code:</strong> Always specify columns explicitly for performance</li><li><strong>Large tables:</strong> Selecting all columns wastes bandwidth</li><li><strong>Joins:</strong> Can cause ambiguous column names</li></ul><p><strong>Best practice:</strong> Use <code>SELECT *</code> for exploration, but in real applications, always name your columns explicitly. This makes code clearer and faster.</p>`,
              challenge: {
                description: 'Write a query to select all columns from the "customers" table.',
                starterCode: '-- Retrieve all data from customers\n',
                expectedOutput: 'SELECT * FROM customers;',
                hints: ['Use the asterisk * for all columns', 'FROM specifies the table', 'SELECT * FROM customers;']
              },
              quiz: [
                {
                  question: 'What does * mean in SELECT *?',
                  options: ['Multiply', 'All columns', 'First column', 'Primary key'],
                  correct: 1
                },
                {
                  question: 'Why should you avoid SELECT * in production?',
                  options: ['It causes errors', 'It wastes bandwidth and is slower', 'It is not valid SQL', 'It deletes data'],
                  correct: 1
                },
                {
                  question: 'What does FROM specify?',
                  options: ['The column to select', 'The database name', 'The table to query', 'The output format'],
                  correct: 2
                },
                {
                  question: 'SELECT * FROM orders; returns what?',
                  options: ['Only the first row', 'All columns and rows from orders', 'Only numeric columns', 'The table structure only'],
                  correct: 1
                }
              ]
            },
            {
              id: 'select_specific_columns',
              title: 'Selecting Specific Columns',
              type: 'challenge',
              theory: `<h2>Selecting Specific Columns</h2><p>Instead of retrieving all columns with <code>*</code>, you can specify exactly which columns you want. This is more efficient and makes your intent clear.</p><h3>Syntax</h3><pre><code>SELECT column1, column2 FROM table_name;</code></pre><p>List column names separated by commas after SELECT.</p><h3>Example</h3><pre><code>SELECT name, email FROM customers;</code></pre><p><strong>Result:</strong></p><pre><code>| name    | email            |
|---------|------------------|
| Alice   | alice@mail.com   |
| Bob     | bob@mail.com     |</code></pre><p>Only the requested columns appear in the result — even if the table has 20 other columns.</p><h3>Column Order</h3><p>Columns appear in the order you list them, regardless of their order in the table:</p><pre><code>SELECT email, name FROM customers;
-- email appears first, then name</code></pre><h3>Benefits of Explicit Columns</h3><ul><li><strong>Performance:</strong> Less data transferred from the database</li><li><strong>Clarity:</strong> Anyone reading the query knows exactly what data is being used</li><li><strong>Safety:</strong> Won't break if new columns are added to the table</li><li><strong>Security:</strong> Avoids accidentally exposing sensitive columns</li></ul><p><strong>Best practice:</strong> Always select only the columns you need in production code.</p>`,
              challenge: {
                description: 'Write a query to select only the "name" and "price" columns from the "products" table.',
                starterCode: '-- Select name and price from products\n',
                expectedOutput: 'SELECT name, price FROM products;',
                hints: ['List columns separated by commas', 'No asterisk needed', 'SELECT name, price FROM products;']
              },
              quiz: [
                {
                  question: 'How do you select multiple specific columns?',
                  options: ['Separate with semicolons', 'Separate with commas', 'Use AND between them', 'Put them in brackets'],
                  correct: 1
                },
                {
                  question: 'SELECT email, name FROM users; — what order are results in?',
                  options: ['Alphabetical', 'email first, then name', 'name first, then email', 'Random order'],
                  correct: 1
                },
                {
                  question: 'Why select specific columns instead of *?',
                  options: ['Required by SQL standard', 'Better performance and clarity', 'Prevents table deletion', 'Faster to type'],
                  correct: 1
                },
                {
                  question: 'SELECT price FROM products; returns what?',
                  options: ['All columns', 'Only the price column', 'Products over a certain price', 'The average price'],
                  correct: 1
                }
              ]
            },
            {
              id: 'column_aliases',
              title: 'Column Aliases',
              type: 'challenge',
              theory: `<h2>Column Aliases</h2><p>An <strong>alias</strong> gives a column a temporary name in your result set. This is useful when column names are unclear or when you want friendlier output headers.</p><h3>Syntax</h3><pre><code>SELECT column_name AS alias_name FROM table_name;</code></pre><p>The <code>AS</code> keyword is optional but recommended for clarity.</p><h3>Examples</h3><pre><code>SELECT 
  first_name AS "First Name",
  last_name AS "Last Name",
  email AS "Email Address"
FROM employees;</code></pre><p><strong>Result:</strong></p><pre><code>| First Name | Last Name | Email Address    |
|-----------|-----------|------------------|
| Alice     | Smith     | alice@corp.com   |</code></pre><h3>When to Use Aliases</h3><ul><li><strong>Calculated columns:</strong> <code>SELECT price * quantity AS total</code></li><li><strong>Readable output:</strong> Rename cryptic columns like <code>emp_fn</code> to "First Name"</li><li><strong>Joins:</strong> Distinguish same-named columns from different tables</li><li><strong>Aggregations:</strong> <code>SELECT COUNT(*) AS total_orders</code></li></ul><h3>Quotes in Aliases</h3><p>If your alias contains spaces or special characters, wrap it in double quotes:</p><pre><code>SELECT name AS "Product Name" FROM products;</code></pre><p>Without spaces, quotes are optional: <code>AS product_name</code> works fine.</p><p><strong>Important:</strong> Aliases only exist in the result set. You cannot use an alias in the WHERE clause of the same query.</p>`,
              challenge: {
                description: 'Write a query that selects "name" as "product_name" and "price" as "cost" from the "products" table.',
                starterCode: '-- Select name as product_name and price as cost\n',
                expectedOutput: 'SELECT name AS product_name, price AS cost FROM products;',
                hints: ['Use the AS keyword for aliases', 'Each column gets its own alias', 'SELECT name AS product_name, price AS cost FROM products;']
              },
              quiz: [
                {
                  question: 'What does AS do in a SELECT statement?',
                  options: ['Filters rows', 'Gives a column a temporary name', 'Sorts results', 'Joins tables'],
                  correct: 1
                },
                {
                  question: 'When do you need quotes around an alias?',
                  options: ['Always', 'Never', 'When alias contains spaces', 'Only with numbers'],
                  correct: 2
                },
                {
                  question: 'Can you use an alias in the WHERE clause of the same query?',
                  options: ['Yes always', 'No', 'Only with numbers', 'Only in MySQL'],
                  correct: 1
                },
                {
                  question: 'SELECT price * 2 AS double_price — what is double_price?',
                  options: ['A new column in the table', 'A temporary alias in results', 'A variable', 'A function'],
                  correct: 1
                }
              ]
            },
            {
              id: 'distinct_values',
              title: 'DISTINCT Values',
              type: 'challenge',
              theory: `<h2>DISTINCT Values</h2><p>The <code>DISTINCT</code> keyword removes duplicate values from your result set. It's like asking "what are the unique values in this column?"</p><h3>Syntax</h3><pre><code>SELECT DISTINCT column_name FROM table_name;</code></pre><h3>Example</h3><p>Given an orders table with repeated customer cities:</p><pre><code>SELECT DISTINCT city FROM customers;</code></pre><p><strong>Without DISTINCT:</strong> New York, London, New York, Paris, London</p><p><strong>With DISTINCT:</strong> New York, London, Paris</p><h3>Multiple Columns</h3><p>DISTINCT applies to the combination of all selected columns:</p><pre><code>SELECT DISTINCT city, country FROM customers;</code></pre><p>This returns unique city-country combinations. "Paris, France" and "Paris, Texas" would both appear.</p><h3>Use Cases</h3><ul><li><strong>Finding categories:</strong> What product categories exist?</li><li><strong>Unique customers:</strong> Which customers have placed orders?</li><li><strong>Data exploration:</strong> What values does this column contain?</li></ul><h3>Performance Note</h3><p>DISTINCT requires the database to sort or hash all values to find duplicates, which can be slow on large tables. Use it when you genuinely need unique values, not as a band-aid for bad joins that create duplicates.</p>`,
              challenge: {
                description: 'Write a query to get all unique values from the "category" column in the "products" table.',
                starterCode: '-- Get unique categories from products\n',
                expectedOutput: 'SELECT DISTINCT category FROM products;',
                hints: ['DISTINCT goes between SELECT and column name', 'It removes duplicates', 'SELECT DISTINCT category FROM products;']
              },
              quiz: [
                {
                  question: 'What does DISTINCT do?',
                  options: ['Sorts results', 'Removes duplicate values', 'Counts rows', 'Filters nulls'],
                  correct: 1
                },
                {
                  question: 'Where does DISTINCT go in a query?',
                  options: ['After FROM', 'After WHERE', 'Between SELECT and column names', 'At the end'],
                  correct: 2
                },
                {
                  question: 'SELECT DISTINCT city, state — what is unique?',
                  options: ['Just city', 'Just state', 'The city-state combination', 'Neither'],
                  correct: 2
                },
                {
                  question: 'Why might DISTINCT be slow on large tables?',
                  options: ['It deletes data', 'It must compare all values to find duplicates', 'It locks the table', 'It creates indexes'],
                  correct: 1
                }
              ]
            },
            {
              id: 'expressions_calculations',
              title: 'Expressions & Calculations',
              type: 'challenge',
              theory: `<h2>Expressions & Calculations</h2><p>SQL can perform calculations directly in your SELECT statement. You can use arithmetic operators to create computed columns on the fly.</p><h3>Arithmetic Operators</h3><ul><li><code>+</code> Addition</li><li><code>-</code> Subtraction</li><li><code>*</code> Multiplication</li><li><code>/</code> Division</li><li><code>%</code> Modulo (remainder)</li></ul><h3>Examples</h3><pre><code>SELECT name, price, price * 1.1 AS price_with_tax
FROM products;

SELECT name, quantity * price AS total_value
FROM order_items;</code></pre><h3>String Concatenation</h3><p>Combine text columns using <code>||</code> (PostgreSQL/SQLite) or <code>CONCAT()</code> (MySQL):</p><pre><code>SELECT first_name || ' ' || last_name AS full_name
FROM employees;</code></pre><h3>NULL in Calculations</h3><p>Any arithmetic with NULL produces NULL:</p><pre><code>SELECT 5 + NULL;  -- Result: NULL</code></pre><p>Use <code>COALESCE(column, 0)</code> to substitute NULL with a default value before calculating.</p><h3>Best Practice</h3><p>Always alias calculated columns for clarity. Without an alias, the column header will be something ugly like <code>price * 0.9</code> instead of a meaningful name.</p>`,
              challenge: {
                description: 'Write a query that selects name, price, and a calculated column "discounted_price" (price * 0.9) from the "products" table.',
                starterCode: '-- Select name, price, and 10% discounted price\n',
                expectedOutput: 'SELECT name, price, price * 0.9 AS discounted_price FROM products;',
                hints: ['Use arithmetic in the SELECT clause', 'Multiply price by 0.9 for 10% off', 'Give the calculation an alias with AS']
              },
              quiz: [
                {
                  question: 'What does price * 0.9 calculate?',
                  options: ['90% markup', 'Price minus 90', '10% discount (90% of price)', 'Price divided by 9'],
                  correct: 2
                },
                {
                  question: 'What is 10 + NULL in SQL?',
                  options: ['10', '0', 'NULL', 'Error'],
                  correct: 2
                },
                {
                  question: 'Do calculated columns modify the original table data?',
                  options: ['Yes', 'No, they only exist in the result', 'Only with UPDATE', 'Depends on the database'],
                  correct: 1
                },
                {
                  question: 'Which operator gives the remainder of division?',
                  options: ['/', '//', '%', '&'],
                  correct: 2
                }
              ]
            }
          ]
        },
        {
          id: 'filtering-with-where',
          title: 'Filtering with WHERE',
          lessons: [
            {
              id: 'where_clause',
              title: 'The WHERE Clause',
              type: 'challenge',
              theory: `<h2>The WHERE Clause</h2><p>The <code>WHERE</code> clause filters rows based on a condition. Only rows where the condition is TRUE are included in the results.</p><h3>Syntax</h3><pre><code>SELECT columns FROM table WHERE condition;</code></pre><h3>Comparison Operators</h3><ul><li><code>=</code> Equal to</li><li><code>!=</code> or <code>&lt;&gt;</code> Not equal to</li><li><code>&gt;</code> Greater than</li><li><code>&lt;</code> Less than</li><li><code>&gt;=</code> Greater than or equal</li><li><code>&lt;=</code> Less than or equal</li></ul><h3>Examples</h3><pre><code>SELECT * FROM products WHERE price > 50;
SELECT * FROM employees WHERE department = 'Sales';
SELECT * FROM orders WHERE total >= 100;</code></pre><h3>Text Comparisons</h3><p>When comparing text values, wrap them in single quotes:</p><pre><code>SELECT * FROM users WHERE country = 'USA';</code></pre><h3>Number Comparisons</h3><p>Numbers don't need quotes:</p><pre><code>SELECT * FROM products WHERE stock < 10;</code></pre><h3>Execution Order</h3><p>SQL processes clauses in this order: FROM → WHERE → SELECT. The database first identifies the table, then filters rows, then picks columns.</p>`,
              challenge: {
                description: 'Write a query to select all columns from "orders" where the "amount" is greater than 500.',
                starterCode: '-- Find orders with amount greater than 500\n',
                expectedOutput: 'SELECT * FROM orders WHERE amount > 500;',
                hints: ['Use WHERE after FROM', 'Use > for greater than', 'Numbers do not need quotes']
              },
              quiz: [
                {
                  question: 'What does WHERE do?',
                  options: ['Sorts results', 'Filters rows based on a condition', 'Groups rows', 'Joins tables'],
                  correct: 1
                },
                {
                  question: 'Which operator means "not equal"?',
                  options: ['==', '!=', '><', '!!'],
                  correct: 1
                },
                {
                  question: 'How do you compare text in WHERE?',
                  options: ['Double quotes', 'Single quotes', 'No quotes', 'Backticks'],
                  correct: 1
                },
                {
                  question: 'In SQL execution order, what comes before WHERE?',
                  options: ['SELECT', 'ORDER BY', 'FROM', 'GROUP BY'],
                  correct: 2
                }
              ]
            },
            {
              id: 'and_or_operators',
              title: 'AND & OR Operators',
              type: 'challenge',
              theory: `<h2>AND & OR Operators</h2><p>Combine multiple conditions in a WHERE clause using <code>AND</code> and <code>OR</code> logical operators.</p><h3>AND Operator</h3><p>Both conditions must be TRUE for the row to be included:</p><pre><code>SELECT * FROM products 
WHERE category = 'Electronics' AND price < 100;</code></pre><h3>OR Operator</h3><p>At least one condition must be TRUE:</p><pre><code>SELECT * FROM products 
WHERE category = 'Books' OR category = 'Music';</code></pre><h3>Combining AND & OR</h3><p>Use parentheses to control evaluation order:</p><pre><code>SELECT * FROM products 
WHERE (category = 'Electronics' OR category = 'Toys')
AND price < 50;</code></pre><p>Without parentheses, AND is evaluated before OR, which can give unexpected results.</p><h3>NOT Operator</h3><p>Negates a condition:</p><pre><code>SELECT * FROM products WHERE NOT category = 'Clothing';</code></pre><p><strong>Best practice:</strong> Always use parentheses when mixing AND and OR to make your intent explicit and avoid bugs.</p>`,
              challenge: {
                description: 'Write a query to select all from "products" where category is \'Electronics\' AND price is less than 200.',
                starterCode: '-- Find electronics under 200\n',
                expectedOutput: "SELECT * FROM products WHERE category = 'Electronics' AND price < 200;",
                hints: ['Combine conditions with AND', 'Text values need single quotes', 'Both conditions must be true']
              },
              quiz: [
                {
                  question: 'What does AND require?',
                  options: ['At least one condition true', 'Both conditions true', 'Neither condition true', 'Exactly one true'],
                  correct: 1
                },
                {
                  question: 'What does OR require?',
                  options: ['Both conditions true', 'At least one condition true', 'Neither condition true', 'All conditions false'],
                  correct: 1
                },
                {
                  question: 'Which is evaluated first without parentheses?',
                  options: ['OR', 'AND', 'They are equal', 'LEFT to RIGHT'],
                  correct: 1
                },
                {
                  question: 'What does NOT do?',
                  options: ['Combines conditions', 'Negates a condition', 'Sorts results', 'Removes columns'],
                  correct: 1
                }
              ]
            },
            {
              id: 'in_between',
              title: 'IN & BETWEEN',
              type: 'challenge',
              theory: `<h2>IN & BETWEEN Operators</h2><p>These operators provide cleaner ways to express common filtering patterns.</p><h3>IN Operator</h3><p>Checks if a value matches any value in a list:</p><pre><code>SELECT * FROM products 
WHERE category IN ('Electronics', 'Books', 'Toys');</code></pre><p>This is equivalent to but cleaner than multiple OR conditions.</p><h3>NOT IN</h3><p>Excludes rows matching any value in the list:</p><pre><code>SELECT * FROM products 
WHERE category NOT IN ('Clothing', 'Food');</code></pre><h3>BETWEEN Operator</h3><p>Checks if a value falls within a range (inclusive on both ends):</p><pre><code>SELECT * FROM products 
WHERE price BETWEEN 10 AND 50;</code></pre><p>Equivalent to: <code>WHERE price >= 10 AND price <= 50</code></p><h3>BETWEEN with Dates</h3><pre><code>SELECT * FROM orders 
WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';</code></pre><h3>Key Points</h3><ul><li>BETWEEN is <strong>inclusive</strong> — both boundary values are included</li><li>IN is perfect for matching against a known set of values</li><li>NOT BETWEEN excludes the range</li></ul>`,
              challenge: {
                description: 'Write a query to select all from "employees" where department is IN (\'Sales\', \'Marketing\', \'HR\').',
                starterCode: '-- Find employees in Sales, Marketing, or HR\n',
                expectedOutput: "SELECT * FROM employees WHERE department IN ('Sales', 'Marketing', 'HR');",
                hints: ['Use IN with a parenthesized list', 'Values are comma-separated in quotes', "WHERE column IN ('val1', 'val2', 'val3')"]
              },
              quiz: [
                {
                  question: 'What does IN replace?',
                  options: ['Multiple AND conditions', 'Multiple OR conditions', 'BETWEEN', 'LIKE'],
                  correct: 1
                },
                {
                  question: 'Is BETWEEN inclusive or exclusive?',
                  options: ['Inclusive on both ends', 'Exclusive on both ends', 'Inclusive start, exclusive end', 'Depends on database'],
                  correct: 0
                },
                {
                  question: 'price BETWEEN 10 AND 50 includes which values?',
                  options: ['11 to 49', '10 to 50', '10 to 49', '11 to 50'],
                  correct: 1
                },
                {
                  question: 'What does NOT IN do?',
                  options: ['Includes matching values', 'Excludes matching values', 'Sorts values', 'Counts values'],
                  correct: 1
                }
              ]
            },
            {
              id: 'like_pattern',
              title: 'LIKE Pattern Matching',
              type: 'challenge',
              theory: `<h2>LIKE Pattern Matching</h2><p>The <code>LIKE</code> operator searches for patterns in text columns using wildcards.</p><h3>Wildcards</h3><ul><li><code>%</code> — Matches any sequence of characters (including none)</li><li><code>_</code> — Matches exactly one character</li></ul><h3>Examples with %</h3><pre><code>-- Names starting with 'A'
SELECT * FROM users WHERE name LIKE 'A%';

-- Names ending with 'son'
SELECT * FROM users WHERE name LIKE '%son';

-- Names containing 'art'
SELECT * FROM users WHERE name LIKE '%art%';</code></pre><h3>Examples with _</h3><pre><code>-- Exactly 3-letter names
SELECT * FROM users WHERE name LIKE '___';

-- Names where second letter is 'a'
SELECT * FROM users WHERE name LIKE '_a%';</code></pre><h3>NOT LIKE</h3><p>Exclude rows matching a pattern:</p><pre><code>SELECT * FROM users WHERE email NOT LIKE '%@spam.com';</code></pre><h3>Performance Note</h3><p>Patterns starting with <code>%</code> cannot use indexes and will be slow on large tables. Patterns starting with a literal character can use indexes efficiently.</p>`,
              challenge: {
                description: 'Write a query to select all from "customers" where the name starts with \'J\'.',
                starterCode: '-- Find customers whose name starts with J\n',
                expectedOutput: "SELECT * FROM customers WHERE name LIKE 'J%';",
                hints: ['Use LIKE for pattern matching', '% matches any sequence of characters', "Start with 'J' then % for anything after"]
              },
              quiz: [
                {
                  question: 'What does % match in LIKE?',
                  options: ['Exactly one character', 'Any sequence of characters', 'Only numbers', 'Only spaces'],
                  correct: 1
                },
                {
                  question: 'What does _ match in LIKE?',
                  options: ['Any number of characters', 'Exactly one character', 'An underscore literal', 'Nothing'],
                  correct: 1
                },
                {
                  question: 'Which pattern finds names containing "son"?',
                  options: ["'son%'", "'%son'", "'%son%'", "'_son_'"],
                  correct: 2
                },
                {
                  question: "Why is LIKE '%abc' slow on large tables?",
                  options: ['It is invalid SQL', 'It cannot use indexes', 'It locks the table', 'It modifies data'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'sorting-and-limiting',
          title: 'Sorting & Limiting',
          lessons: [
            {
              id: 'order_by',
              title: 'ORDER BY',
              type: 'challenge',
              theory: `<h2>ORDER BY</h2><p>The <code>ORDER BY</code> clause sorts your result set by one or more columns. Without it, SQL makes no guarantees about row order.</p><h3>Ascending (Default)</h3><pre><code>SELECT * FROM products ORDER BY price;
SELECT * FROM products ORDER BY price ASC;</code></pre><p>Results go from lowest to highest.</p><h3>Descending</h3><pre><code>SELECT * FROM products ORDER BY price DESC;</code></pre><p>Results go from highest to lowest.</p><h3>Multiple Columns</h3><pre><code>SELECT * FROM employees 
ORDER BY department ASC, salary DESC;</code></pre><p>First sorts by department alphabetically, then within each department, sorts by salary highest first.</p><h3>Sorting by Position</h3><pre><code>SELECT name, price FROM products ORDER BY 2 DESC;
-- Sorts by price (the 2nd column)</code></pre><h3>NULL Handling</h3><p>NULLs typically sort last in ascending order and first in descending order. PostgreSQL offers <code>NULLS FIRST</code> and <code>NULLS LAST</code> for explicit control.</p><p><strong>Key point:</strong> ORDER BY is processed after SELECT, so you CAN use column aliases here.</p>`,
              challenge: {
                description: 'Write a query to select all from "products" ordered by price in descending order.',
                starterCode: '-- Get products sorted by price, highest first\n',
                expectedOutput: 'SELECT * FROM products ORDER BY price DESC;',
                hints: ['ORDER BY comes after FROM/WHERE', 'DESC means descending (high to low)', 'SELECT * FROM products ORDER BY price DESC;']
              },
              quiz: [
                {
                  question: 'What is the default sort order?',
                  options: ['Descending', 'Ascending', 'Random', 'By primary key'],
                  correct: 1
                },
                {
                  question: 'What does DESC mean?',
                  options: ['Description', 'Descending (high to low)', 'Destroy', 'Deselect'],
                  correct: 1
                },
                {
                  question: 'Can you ORDER BY a column alias?',
                  options: ['No never', 'Yes', 'Only in MySQL', 'Only with GROUP BY'],
                  correct: 1
                },
                {
                  question: 'ORDER BY dept ASC, salary DESC does what?',
                  options: ['Sorts by dept only', 'Sorts by salary only', 'Sorts by dept then salary within each dept', 'Error'],
                  correct: 2
                }
              ]
            },
            {
              id: 'limit_offset',
              title: 'LIMIT & OFFSET',
              type: 'challenge',
              theory: `<h2>LIMIT & OFFSET</h2><p><code>LIMIT</code> restricts the number of rows returned. <code>OFFSET</code> skips a specified number of rows before starting to return results.</p><h3>LIMIT</h3><pre><code>SELECT * FROM products ORDER BY price DESC LIMIT 5;</code></pre><p>Returns only the top 5 most expensive products.</p><h3>OFFSET</h3><pre><code>SELECT * FROM products ORDER BY price DESC LIMIT 5 OFFSET 10;</code></pre><p>Skips the first 10 rows, then returns 5 rows.</p><h3>Pagination Pattern</h3><pre><code>-- Page 1 (items 1-10)
SELECT * FROM products LIMIT 10 OFFSET 0;
-- Page 2 (items 11-20)
SELECT * FROM products LIMIT 10 OFFSET 10;
-- Page 3 (items 21-30)
SELECT * FROM products LIMIT 10 OFFSET 20;</code></pre><p>Formula: <code>OFFSET = (page_number - 1) * page_size</code></p><h3>Performance Note</h3><p>Large OFFSET values are slow because the database must still process all skipped rows. For high-performance pagination, use keyset pagination instead.</p>`,
              challenge: {
                description: 'Write a query to select the top 3 most expensive products (all columns from "products", ordered by price descending, limited to 3).',
                starterCode: '-- Get the 3 most expensive products\n',
                expectedOutput: 'SELECT * FROM products ORDER BY price DESC LIMIT 3;',
                hints: ['First ORDER BY price DESC', 'Then LIMIT 3', 'LIMIT goes at the end of the query']
              },
              quiz: [
                {
                  question: 'What does LIMIT 10 do?',
                  options: ['Shows only 10 columns', 'Returns at most 10 rows', 'Skips 10 rows', 'Limits price to 10'],
                  correct: 1
                },
                {
                  question: 'What does OFFSET 5 do?',
                  options: ['Returns 5 rows', 'Skips the first 5 rows', 'Shows column 5', 'Limits to 5'],
                  correct: 1
                },
                {
                  question: 'For page 3 with 10 items per page, what is the OFFSET?',
                  options: ['10', '20', '30', '3'],
                  correct: 1
                },
                {
                  question: 'Why are large OFFSET values slow?',
                  options: ['Invalid SQL', 'Database must process all skipped rows', 'They lock the table', 'They create indexes'],
                  correct: 1
                }
              ]
            },
            {
              id: 'null_values',
              title: 'Working with NULL',
              type: 'challenge',
              theory: `<h2>Working with NULL</h2><p><code>NULL</code> represents missing or unknown data in SQL. It is NOT the same as zero, an empty string, or false.</p><h3>Checking for NULL</h3><pre><code>SELECT * FROM customers WHERE email IS NULL;
SELECT * FROM customers WHERE email IS NOT NULL;</code></pre><h3>Why = NULL Doesn't Work</h3><p>NULL represents "unknown." Comparing unknown to anything results in unknown (not TRUE):</p><pre><code>NULL = NULL   -- Result: NULL (not TRUE!)
NULL != NULL  -- Result: NULL (not TRUE!)</code></pre><h3>COALESCE Function</h3><p>Replaces NULL with a default value:</p><pre><code>SELECT name, COALESCE(phone, 'No phone') AS phone
FROM customers;</code></pre><h3>NULL in Aggregations</h3><p>Most aggregate functions ignore NULL values. <code>COUNT(*)</code> counts all rows, but <code>COUNT(column)</code> counts only non-NULL values in that column.</p>`,
              challenge: {
                description: 'Write a query to select all from "customers" where the "phone" column IS NULL.',
                starterCode: '-- Find customers without a phone number\n',
                expectedOutput: 'SELECT * FROM customers WHERE phone IS NULL;',
                hints: ['Use IS NULL, not = NULL', 'IS NULL checks for missing values', 'SELECT * FROM customers WHERE phone IS NULL;']
              },
              quiz: [
                {
                  question: 'What does NULL represent?',
                  options: ['Zero', 'Empty string', 'Missing/unknown data', 'False'],
                  correct: 2
                },
                {
                  question: 'How do you check for NULL?',
                  options: ['= NULL', '== NULL', 'IS NULL', 'EQUALS NULL'],
                  correct: 2
                },
                {
                  question: 'What does NULL = NULL return?',
                  options: ['TRUE', 'FALSE', 'NULL', 'Error'],
                  correct: 2
                },
                {
                  question: 'What does COALESCE(email, "N/A") do?',
                  options: ['Deletes NULL emails', 'Returns "N/A" if email is NULL', 'Counts NULLs', 'Converts to uppercase'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'aggregate-functions',
          title: 'Aggregate Functions',
          lessons: [
            {
              id: 'count_function',
              title: 'COUNT Function',
              type: 'challenge',
              theory: `<h2>COUNT Function</h2><p><code>COUNT()</code> counts the number of rows that match a condition. It's the simplest and most used aggregate function.</p><h3>COUNT(*)</h3><p>Counts all rows, including those with NULL values:</p><pre><code>SELECT COUNT(*) FROM orders;</code></pre><h3>COUNT(column)</h3><p>Counts non-NULL values in a specific column:</p><pre><code>SELECT COUNT(email) FROM customers;</code></pre><h3>COUNT(DISTINCT column)</h3><p>Counts unique non-NULL values:</p><pre><code>SELECT COUNT(DISTINCT category) FROM products;</code></pre><h3>COUNT with WHERE</h3><pre><code>SELECT COUNT(*) FROM orders WHERE status = 'completed';</code></pre><h3>Key Points</h3><ul><li><code>COUNT(*)</code> — counts ALL rows (including NULLs)</li><li><code>COUNT(col)</code> — counts non-NULL values</li><li><code>COUNT(DISTINCT col)</code> — counts unique non-NULL values</li><li>COUNT always returns a number, never NULL</li></ul>`,
              challenge: {
                description: 'Write a query to count the total number of rows in the "orders" table. Alias the result as "total_orders".',
                starterCode: '-- Count all orders\n',
                expectedOutput: 'SELECT COUNT(*) AS total_orders FROM orders;',
                hints: ['Use COUNT(*) to count all rows', 'Use AS to create an alias', 'SELECT COUNT(*) AS total_orders FROM orders;']
              },
              quiz: [
                {
                  question: 'What does COUNT(*) count?',
                  options: ['Only non-NULL rows', 'All rows including NULLs', 'Distinct values only', 'Columns'],
                  correct: 1
                },
                {
                  question: 'What does COUNT(email) skip?',
                  options: ['Nothing', 'NULL values', 'Duplicates', 'Empty strings'],
                  correct: 1
                },
                {
                  question: 'What does COUNT(DISTINCT city) count?',
                  options: ['All cities including duplicates', 'Unique non-NULL cities', 'NULL cities only', 'All columns'],
                  correct: 1
                },
                {
                  question: 'Can COUNT ever return NULL?',
                  options: ['Yes', 'No, it always returns a number', 'Only with DISTINCT', 'Only without WHERE'],
                  correct: 1
                }
              ]
            },
            {
              id: 'sum_avg',
              title: 'SUM & AVG',
              type: 'challenge',
              theory: `<h2>SUM & AVG Functions</h2><p><code>SUM()</code> adds up all values in a column. <code>AVG()</code> calculates the arithmetic mean. Both work on numeric columns and ignore NULL values.</p><h3>SUM</h3><pre><code>SELECT SUM(amount) AS total_revenue FROM orders;</code></pre><h3>AVG</h3><pre><code>SELECT AVG(price) AS average_price FROM products;</code></pre><h3>NULL Handling</h3><p>Both skip NULL values. This affects AVG particularly:</p><pre><code>-- Values: 10, 20, NULL, 30
AVG = (10 + 20 + 30) / 3 = 20  -- NULL is skipped</code></pre><p>If you want NULLs treated as zero:</p><pre><code>SELECT AVG(COALESCE(bonus, 0)) FROM employees;</code></pre><h3>SUM vs COUNT</h3><ul><li><code>COUNT(*)</code> — how many rows</li><li><code>SUM(quantity)</code> — total of all quantity values</li></ul><h3>Rounding AVG</h3><pre><code>SELECT ROUND(AVG(price), 2) AS avg_price FROM products;</code></pre>`,
              challenge: {
                description: 'Write a query to get the average price from the "products" table. Alias it as "avg_price".',
                starterCode: '-- Calculate average product price\n',
                expectedOutput: 'SELECT AVG(price) AS avg_price FROM products;',
                hints: ['Use AVG() for average', 'Pass the column name inside parentheses', 'Use AS for the alias']
              },
              quiz: [
                {
                  question: 'What does SUM do with NULL values?',
                  options: ['Treats them as 0', 'Ignores them', 'Returns NULL', 'Throws error'],
                  correct: 1
                },
                {
                  question: 'AVG of [10, 20, NULL, 30] is?',
                  options: ['15', '20', '60', 'NULL'],
                  correct: 1
                },
                {
                  question: 'What is the difference between COUNT and SUM?',
                  options: ['No difference', 'COUNT counts rows, SUM totals values', 'SUM counts rows', 'COUNT totals values'],
                  correct: 1
                },
                {
                  question: 'How do you round AVG to 2 decimal places?',
                  options: ['ROUND(AVG(col), 2)', 'AVG(ROUND(col, 2))', 'TRUNCATE(AVG(col))', 'AVG(col, 2)'],
                  correct: 0
                }
              ]
            },
            {
              id: 'min_max',
              title: 'MIN & MAX',
              type: 'challenge',
              theory: `<h2>MIN & MAX Functions</h2><p><code>MIN()</code> returns the smallest value and <code>MAX()</code> returns the largest value in a column. They work on numbers, text, and dates.</p><h3>With Numbers</h3><pre><code>SELECT MIN(price) AS cheapest, MAX(price) AS most_expensive FROM products;</code></pre><h3>With Dates</h3><pre><code>SELECT MIN(order_date) AS first_order FROM orders;
SELECT MAX(order_date) AS latest_order FROM orders;</code></pre><h3>With Text</h3><p>MIN returns the first alphabetically, MAX returns the last.</p><h3>Multiple Aggregates</h3><pre><code>SELECT 
  COUNT(*) AS total_products,
  MIN(price) AS cheapest,
  MAX(price) AS most_expensive,
  AVG(price) AS average_price
FROM products;</code></pre><h3>Key Points</h3><ul><li>MIN/MAX ignore NULL values</li><li>They work on any comparable data type</li><li>Useful for finding extremes, date ranges, and boundaries</li></ul>`,
              challenge: {
                description: 'Write a query to find the minimum and maximum salary from "employees". Alias them as "lowest_salary" and "highest_salary".',
                starterCode: '-- Find min and max salary\n',
                expectedOutput: 'SELECT MIN(salary) AS lowest_salary, MAX(salary) AS highest_salary FROM employees;',
                hints: ['Use MIN() and MAX() functions', 'Both can be in the same SELECT', 'Give each an alias with AS']
              },
              quiz: [
                {
                  question: 'What does MIN return for text?',
                  options: ['Shortest string', 'First alphabetically', 'Longest string', 'NULL'],
                  correct: 1
                },
                {
                  question: 'MAX(order_date) returns what?',
                  options: ['The oldest date', 'The most recent date', 'The date count', 'NULL'],
                  correct: 1
                },
                {
                  question: 'Do MIN/MAX ignore NULL?',
                  options: ['No', 'Yes', 'Only MIN', 'Only MAX'],
                  correct: 1
                },
                {
                  question: 'Can you use multiple aggregates in one SELECT?',
                  options: ['No', 'Yes', 'Only two', 'Only with GROUP BY'],
                  correct: 1
                }
              ]
            },
            {
              id: 'combining_aggregates',
              title: 'Combining Aggregates',
              type: 'challenge',
              theory: `<h2>Combining Aggregates</h2><p>You can use multiple aggregate functions together and combine them with expressions to create meaningful summaries.</p><h3>Multiple Aggregates</h3><pre><code>SELECT 
  COUNT(*) AS total_orders,
  SUM(amount) AS revenue,
  AVG(amount) AS avg_order_value,
  MIN(amount) AS smallest_order,
  MAX(amount) AS largest_order
FROM orders;</code></pre><h3>Expressions with Aggregates</h3><pre><code>SELECT 
  SUM(price * quantity) AS total_revenue
FROM order_items;</code></pre><h3>Aggregates with WHERE</h3><pre><code>SELECT 
  COUNT(*) AS q1_orders,
  SUM(amount) AS q1_revenue
FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-03-31';</code></pre><h3>Important Rule</h3><p>You cannot mix aggregate and non-aggregate columns in SELECT without GROUP BY. <code>SELECT name, COUNT(*)</code> is invalid without grouping.</p>`,
              challenge: {
                description: 'Write a query to get COUNT(*) AS total_count, SUM(amount) AS total_amount, AVG(amount) AS avg_amount from "orders".',
                starterCode: '-- Get count, sum, and average of orders\n',
                expectedOutput: 'SELECT COUNT(*) AS total_count, SUM(amount) AS total_amount, AVG(amount) AS avg_amount FROM orders;',
                hints: ['Use COUNT(*), SUM(), and AVG() together', 'Separate each with commas', 'Alias each aggregate result']
              },
              quiz: [
                {
                  question: 'Can you mix aggregate and non-aggregate columns without GROUP BY?',
                  options: ['Yes', 'No', 'Only with DISTINCT', 'Only in MySQL'],
                  correct: 1
                },
                {
                  question: 'SUM(price * quantity) calculates what?',
                  options: ['Count of items', 'Total revenue', 'Average price', 'Max quantity'],
                  correct: 1
                },
                {
                  question: 'How do you calculate a percentage of completed orders?',
                  options: ['COUNT(completed)', 'SUM(status)', 'completed_count / total_count * 100', 'MAX(status)'],
                  correct: 2
                },
                {
                  question: 'Which function rounds a decimal result?',
                  options: ['TRUNCATE', 'ROUND', 'FLOOR', 'CUT'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'group-by-having',
          title: 'GROUP BY & HAVING',
          lessons: [
            {
              id: 'group_by',
              title: 'GROUP BY',
              type: 'challenge',
              theory: `<h2>GROUP BY</h2><p><code>GROUP BY</code> divides rows into groups based on column values, then applies aggregate functions to each group separately.</p><h3>Syntax</h3><pre><code>SELECT column, AGGREGATE(other_column)
FROM table
GROUP BY column;</code></pre><h3>Example</h3><pre><code>SELECT department, COUNT(*) AS emp_count
FROM employees
GROUP BY department;</code></pre><p><strong>Result:</strong></p><pre><code>| department  | emp_count |
|-------------|-----------|
| Sales       | 15        |
| Engineering | 28        |
| Marketing   | 12        |</code></pre><h3>The Rule</h3><p>Every column in SELECT must either be in GROUP BY or inside an aggregate function.</p><h3>GROUP BY Multiple Columns</h3><pre><code>SELECT country, city, COUNT(*) AS customers
FROM customers
GROUP BY country, city;</code></pre><p>This groups by unique country-city combinations.</p>`,
              challenge: {
                description: 'Write a query to count employees per department. Select department and COUNT(*) AS emp_count, grouped by department.',
                starterCode: '-- Count employees in each department\n',
                expectedOutput: 'SELECT department, COUNT(*) AS emp_count FROM employees GROUP BY department;',
                hints: ['GROUP BY the column you want to group on', 'Use COUNT(*) for the count per group', 'The grouped column must be in SELECT']
              },
              quiz: [
                {
                  question: 'What does GROUP BY do?',
                  options: ['Sorts results', 'Divides rows into groups for aggregation', 'Filters rows', 'Joins tables'],
                  correct: 1
                },
                {
                  question: 'How many rows does GROUP BY return per group?',
                  options: ['All rows', 'One row', 'Two rows', 'Depends on LIMIT'],
                  correct: 1
                },
                {
                  question: 'Can you SELECT a column not in GROUP BY or an aggregate?',
                  options: ['Yes', 'No (it causes an error)', 'Only with DISTINCT', 'Only in MySQL'],
                  correct: 1
                },
                {
                  question: 'GROUP BY country, city groups by what?',
                  options: ['Country only', 'City only', 'Unique country-city combinations', 'All rows together'],
                  correct: 2
                }
              ]
            },
            {
              id: 'having_clause',
              title: 'HAVING Clause',
              type: 'challenge',
              theory: `<h2>HAVING Clause</h2><p><code>HAVING</code> filters groups after aggregation. WHERE filters rows before grouping; HAVING filters groups after.</p><h3>Syntax</h3><pre><code>SELECT column, AGGREGATE(col)
FROM table
GROUP BY column
HAVING condition;</code></pre><h3>Example</h3><pre><code>SELECT department, COUNT(*) AS emp_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 10;</code></pre><h3>WHERE vs HAVING</h3><ul><li><strong>WHERE:</strong> Filters rows → applies before GROUP BY</li><li><strong>HAVING:</strong> Filters groups → applies after GROUP BY</li></ul><h3>SQL Execution Order</h3><p>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY</p>`,
              challenge: {
                description: 'Write a query to find categories with more than 5 products. Select category, COUNT(*) AS product_count, grouped by category, HAVING COUNT(*) > 5.',
                starterCode: '-- Find categories with more than 5 products\n',
                expectedOutput: 'SELECT category, COUNT(*) AS product_count FROM products GROUP BY category HAVING COUNT(*) > 5;',
                hints: ['GROUP BY category first', 'HAVING filters after grouping', 'HAVING COUNT(*) > 5']
              },
              quiz: [
                {
                  question: 'When is HAVING applied?',
                  options: ['Before GROUP BY', 'After GROUP BY', 'Before WHERE', 'After ORDER BY'],
                  correct: 1
                },
                {
                  question: 'Difference between WHERE and HAVING?',
                  options: ['No difference', 'WHERE filters rows, HAVING filters groups', 'HAVING filters rows', 'WHERE is faster'],
                  correct: 1
                },
                {
                  question: 'Can WHERE use aggregate functions?',
                  options: ['Yes', 'No', 'Only COUNT', 'Only with GROUP BY'],
                  correct: 1
                },
                {
                  question: 'SQL execution order?',
                  options: ['SELECT FROM WHERE GROUP HAVING ORDER', 'FROM WHERE GROUP HAVING SELECT ORDER', 'FROM GROUP WHERE HAVING SELECT ORDER', 'SELECT WHERE FROM GROUP HAVING ORDER'],
                  correct: 1
                }
              ]
            },
            {
              id: 'group_by_advanced',
              title: 'Advanced Grouping',
              type: 'challenge',
              theory: `<h2>Advanced Grouping</h2><p>Powerful GROUP BY patterns for real-world reporting.</p><h3>GROUP BY with ORDER BY</h3><pre><code>SELECT category, SUM(quantity) AS units_sold
FROM order_items
GROUP BY category
ORDER BY units_sold DESC
LIMIT 5;</code></pre><h3>Filtering Then Grouping</h3><pre><code>SELECT department, ROUND(AVG(salary), 2) AS avg_salary
FROM employees
WHERE hire_date >= '2023-01-01'
GROUP BY department
HAVING AVG(salary) > 50000
ORDER BY avg_salary DESC;</code></pre><h3>Complete Query Pattern</h3><pre><code>SELECT column, AGG(col) AS alias
FROM table
WHERE row_condition
GROUP BY column
HAVING group_condition
ORDER BY alias DESC
LIMIT n;</code></pre><p>This pattern covers most business reporting queries: filter rows, group them, filter groups, and present the top results.</p>`,
              challenge: {
                description: 'Write a query to get each category total sales (SUM of price) from "products", grouped by category, ordered by total_sales DESC.',
                starterCode: '-- Category total sales ranked highest first\n',
                expectedOutput: 'SELECT category, SUM(price) AS total_sales FROM products GROUP BY category ORDER BY total_sales DESC;',
                hints: ['GROUP BY category', 'SUM(price) AS total_sales', 'ORDER BY total_sales DESC']
              },
              quiz: [
                {
                  question: 'Can you ORDER BY an aggregate alias?',
                  options: ['No', 'Yes', 'Only in PostgreSQL', 'Only with HAVING'],
                  correct: 1
                },
                {
                  question: 'Which clause runs first: WHERE or GROUP BY?',
                  options: ['GROUP BY', 'WHERE', 'They run together', 'ORDER BY'],
                  correct: 1
                },
                {
                  question: 'How do you get top 3 groups by count?',
                  options: ['HAVING TOP 3', 'ORDER BY COUNT DESC LIMIT 3', 'GROUP BY LIMIT 3', 'WHERE TOP 3'],
                  correct: 1
                },
                {
                  question: 'Can you GROUP BY an expression like YEAR(date)?',
                  options: ['No', 'Yes', 'Only in MySQL', 'Only with aliases'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'ecommerce-project',
          title: 'E-commerce Queries PROJECT',
          lessons: [
            {
              id: 'ecommerce_product_report',
              title: 'Product Report',
              type: 'project',
              theory: `<h2>Project: E-commerce Product Report</h2><p>You're building a product analytics dashboard for an online store with tables:</p><pre><code>products(id, name, category, price, stock, created_at)
orders(id, customer_id, order_date, status, total)
order_items(id, order_id, product_id, quantity, unit_price)</code></pre><h3>Your Task</h3><p>Create a product report showing category performance: number of products, average price, and total inventory per category.</p><h3>Approach</h3><ol><li>Select the category column for grouping</li><li>Use COUNT for product count</li><li>Use ROUND(AVG()) for average price</li><li>Use SUM for total stock</li><li>Group by category, order by product count</li></ol><p>This type of report is essential for inventory management, pricing strategy, and understanding your product catalog.</p>`,
              challenge: {
                description: 'Write a query: SELECT category, COUNT(*) AS product_count, ROUND(AVG(price), 2) AS avg_price, SUM(stock) AS total_stock FROM products GROUP BY category ORDER BY product_count DESC.',
                starterCode: '-- Build the product category report\n',
                expectedOutput: 'SELECT category, COUNT(*) AS product_count, ROUND(AVG(price), 2) AS avg_price, SUM(stock) AS total_stock FROM products GROUP BY category ORDER BY product_count DESC;',
                hints: ['Use COUNT, AVG, SUM together', 'ROUND(AVG(price), 2) for rounding', 'GROUP BY category, ORDER BY product_count DESC']
              },
              quiz: [
                {
                  question: 'Why round AVG(price) to 2 decimals?',
                  options: ['Required by SQL', 'Money typically has 2 decimal places', 'Prevents errors', 'Speeds up query'],
                  correct: 1
                },
                {
                  question: 'What does this report help with?',
                  options: ['Customer login', 'Inventory and pricing analysis', 'Database backup', 'User authentication'],
                  correct: 1
                },
                {
                  question: 'If a category has NULL prices, how does AVG handle them?',
                  options: ['Treats as 0', 'Skips them', 'Returns NULL', 'Error'],
                  correct: 1
                },
                {
                  question: 'ORDER BY product_count DESC shows what first?',
                  options: ['Fewest products', 'Most products', 'Alphabetically first', 'Most expensive'],
                  correct: 1
                }
              ]
            },
            {
              id: 'ecommerce_sales_analysis',
              title: 'Sales Analysis',
              type: 'project',
              theory: `<h2>Project: Sales Analysis</h2><p>Analyze order data to find revenue patterns by order status.</p><h3>Business Questions</h3><ul><li>How many orders are in each status?</li><li>What revenue does each status represent?</li><li>Which status has the highest revenue?</li></ul><h3>The Query</h3><pre><code>SELECT status, COUNT(*) AS order_count, SUM(total) AS revenue
FROM orders
GROUP BY status
ORDER BY revenue DESC;</code></pre><p>This gives a high-level view of order health — how many are pending, processing, completed, or cancelled. Business stakeholders check this daily to monitor operations.</p>`,
              challenge: {
                description: 'Write a query showing each order status with COUNT(*) AS order_count and SUM(total) AS revenue from "orders", grouped by status, ordered by revenue DESC.',
                starterCode: '-- Order status breakdown with revenue\n',
                expectedOutput: 'SELECT status, COUNT(*) AS order_count, SUM(total) AS revenue FROM orders GROUP BY status ORDER BY revenue DESC;',
                hints: ['GROUP BY status', 'Use COUNT(*) and SUM(total)', 'ORDER BY revenue DESC for highest first']
              },
              quiz: [
                {
                  question: 'Why is an order status breakdown useful?',
                  options: ['Decorative purposes', 'Monitor operations health', 'Create new tables', 'Delete old data'],
                  correct: 1
                },
                {
                  question: 'This query combines which SQL concepts?',
                  options: ['Only SELECT', 'Aggregation, grouping, and sorting', 'Only WHERE', 'Only JOINs'],
                  correct: 1
                },
                {
                  question: 'SUM(total) for cancelled orders means?',
                  options: ['Revenue earned', 'Potential lost revenue', 'Nothing useful', 'Average order'],
                  correct: 1
                },
                {
                  question: 'What if status has NULL values?',
                  options: ['Error', 'NULL becomes its own group', 'NULLs are excluded', 'Query fails'],
                  correct: 1
                }
              ]
            },
            {
              id: 'ecommerce_inventory_alerts',
              title: 'Inventory Alerts',
              type: 'project',
              theory: `<h2>Project: Inventory Alerts</h2><p>Build an inventory alert system identifying products needing attention — low stock items that need reordering.</p><h3>Low Stock Alert (stock between 1 and 9)</h3><pre><code>SELECT name, category, stock, price
FROM products
WHERE stock BETWEEN 1 AND 9
ORDER BY stock ASC;</code></pre><p>Items with the lowest stock appear first — they are the most urgent for reordering.</p><h3>Why This Matters</h3><p>In real e-commerce, these alerts trigger automatic reorder processes or notifications to warehouse teams. Running out of stock means lost sales and disappointed customers!</p>`,
              challenge: {
                description: 'Write a query to find products with stock BETWEEN 1 AND 9. Select name, category, stock, price from "products". Order by stock ASC.',
                starterCode: '-- Find low stock products (1-9 units)\n',
                expectedOutput: 'SELECT name, category, stock, price FROM products WHERE stock BETWEEN 1 AND 9 ORDER BY stock ASC;',
                hints: ['Use BETWEEN 1 AND 9 for the range', 'Select specific columns', 'ORDER BY stock ASC for lowest first']
              },
              quiz: [
                {
                  question: 'Why order by stock ASC for alerts?',
                  options: ['Looks prettier', 'Most urgent (lowest stock) appears first', 'Required by SQL', 'Alphabetical order'],
                  correct: 1
                },
                {
                  question: 'BETWEEN 1 AND 9 is equivalent to?',
                  options: ['stock > 1 AND stock < 9', 'stock >= 1 AND stock <= 9', 'stock = 1 OR stock = 9', 'stock != 0'],
                  correct: 1
                },
                {
                  question: 'Why are inventory alerts important?',
                  options: ['Legal requirement', 'Prevent lost sales from stockouts', 'Database optimization', 'Aesthetic purposes'],
                  correct: 1
                },
                {
                  question: 'What should happen when stock is 0?',
                  options: ['Nothing', 'Product should be flagged as out-of-stock', 'Delete the product', 'Increase price'],
                  correct: 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'intermediate',
      title: 'Intermediate SQL',
      description: 'Master JOINs, subqueries, data manipulation, and database design',
      totalLessons: 20,
      totalChallenges: 20,
      totalQuizQuestions: 80,
      projects: 2,
      chapters: [
        {
          id: 'joins',
          title: 'JOINs',
          lessons: [
            {
              id: 'inner_join',
              title: 'INNER JOIN',
              type: 'challenge',
              theory: `<h2>INNER JOIN</h2><p>An <code>INNER JOIN</code> combines rows from two tables where the join condition matches. Only rows with matching values in both tables appear in the result.</p><h3>Syntax</h3><pre><code>SELECT columns
FROM table1
INNER JOIN table2 ON table1.column = table2.column;</code></pre><h3>Example</h3><pre><code>SELECT orders.id, customers.name, orders.total
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;</code></pre><p>Orders without a valid customer_id are excluded. Customers without orders are excluded.</p><h3>Table Aliases</h3><pre><code>SELECT o.id, c.name, o.total
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;</code></pre><h3>Key Point</h3><p>INNER JOIN only returns the intersection: rows that match in both tables. The word INNER is optional — <code>JOIN</code> alone means INNER JOIN.</p>`,
              challenge: {
                description: 'Write a query joining "orders" and "customers". Select customers.name and orders.total. Join on orders.customer_id = customers.id.',
                starterCode: '-- Join orders with customers\n',
                expectedOutput: 'SELECT customers.name, orders.total FROM orders INNER JOIN customers ON orders.customer_id = customers.id;',
                hints: ['INNER JOIN connects two tables', 'ON specifies the join condition', 'Use table.column for ambiguous names']
              },
              quiz: [
                {
                  question: 'What does INNER JOIN return?',
                  options: ['All rows from both tables', 'Only matching rows from both', 'All from left table', 'All from right table'],
                  correct: 1
                },
                {
                  question: 'Non-matching rows in INNER JOIN are?',
                  options: ['Shown with NULL', 'Excluded', 'Cause errors', 'Appear at the end'],
                  correct: 1
                },
                {
                  question: 'Is "JOIN" alone the same as "INNER JOIN"?',
                  options: ['No', 'Yes', 'Only in MySQL', 'Only in PostgreSQL'],
                  correct: 1
                },
                {
                  question: 'Why use table aliases in joins?',
                  options: ['Required by SQL', 'Shorter and more readable', 'Faster performance', 'Prevents errors'],
                  correct: 1
                }
              ]
            },
            {
              id: 'left_join',
              title: 'LEFT JOIN',
              type: 'challenge',
              theory: `<h2>LEFT JOIN</h2><p>A <code>LEFT JOIN</code> returns ALL rows from the left table and matching rows from the right table. If no match, right columns are NULL.</p><h3>Example</h3><pre><code>SELECT c.name, o.id AS order_id, o.total
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;</code></pre><p>Carol has no orders but still appears with NULLs for order columns.</p><h3>Finding Non-Matches</h3><pre><code>SELECT c.name FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.id IS NULL;</code></pre><p>This finds customers with NO orders.</p><h3>Use Cases</h3><ul><li>Find customers who have never ordered</li><li>Show all products even those never sold</li><li>Display all employees including those without departments</li></ul>`,
              challenge: {
                description: 'Write a LEFT JOIN showing all customers and their orders. Select customers.name and orders.total from customers LEFT JOIN orders ON customers.id = orders.customer_id.',
                starterCode: '-- Show all customers with their orders (if any)\n',
                expectedOutput: 'SELECT customers.name, orders.total FROM customers LEFT JOIN orders ON customers.id = orders.customer_id;',
                hints: ['LEFT JOIN keeps all rows from the left table', 'Customers without orders show NULL for total', 'FROM customers LEFT JOIN orders']
              },
              quiz: [
                {
                  question: 'What does LEFT JOIN guarantee?',
                  options: ['All rows from right table', 'All rows from left table appear', 'Only matching rows', 'No NULL values'],
                  correct: 1
                },
                {
                  question: 'Non-matching right columns show?',
                  options: ['Zero', 'Empty string', 'NULL', 'Error'],
                  correct: 2
                },
                {
                  question: 'How to find customers with no orders?',
                  options: ['WHERE orders.total = 0', 'WHERE orders.id IS NULL', 'HAVING COUNT = 0', 'WHERE NOT EXISTS'],
                  correct: 1
                },
                {
                  question: 'Which table is "left" in FROM customers LEFT JOIN orders?',
                  options: ['orders', 'customers', 'Both', 'Neither'],
                  correct: 1
                }
              ]
            },
            {
              id: 'right_full_join',
              title: 'RIGHT & FULL JOIN',
              type: 'challenge',
              theory: `<h2>RIGHT & FULL JOIN</h2><h3>RIGHT JOIN</h3><p>Returns ALL rows from the right table and matching rows from the left. Mirror of LEFT JOIN.</p><h3>FULL OUTER JOIN</h3><p>Returns ALL rows from both tables. Unmatched rows get NULL on the missing side:</p><pre><code>SELECT c.name, o.id
FROM customers c
FULL OUTER JOIN orders o ON c.id = o.customer_id;</code></pre><h3>Comparison</h3><pre><code>INNER JOIN: Only matches
LEFT JOIN:  All left + matches
RIGHT JOIN: All right + matches
FULL JOIN:  Everything from both sides</code></pre><h3>Real-World Use</h3><p>FULL JOIN is useful for data reconciliation — comparing two datasets to find what's in one but not the other.</p><p><strong>Note:</strong> MySQL doesn't support FULL OUTER JOIN directly.</p>`,
              challenge: {
                description: 'Write a RIGHT JOIN showing all departments and employees. Select employees.name, departments.dept_name FROM employees RIGHT JOIN departments ON employees.dept_id = departments.id.',
                starterCode: '-- Show all departments with their employees\n',
                expectedOutput: 'SELECT employees.name, departments.dept_name FROM employees RIGHT JOIN departments ON employees.dept_id = departments.id;',
                hints: ['RIGHT JOIN keeps all from right table', 'departments is the right table', 'Empty departments show NULL for employee']
              },
              quiz: [
                {
                  question: 'RIGHT JOIN is equivalent to?',
                  options: ['INNER JOIN', 'LEFT JOIN with tables swapped', 'FULL JOIN', 'CROSS JOIN'],
                  correct: 1
                },
                {
                  question: 'FULL OUTER JOIN returns?',
                  options: ['Only matches', 'All rows from both tables', 'All from left only', 'All from right only'],
                  correct: 1
                },
                {
                  question: 'Which database lacks native FULL OUTER JOIN?',
                  options: ['PostgreSQL', 'SQL Server', 'MySQL', 'Oracle'],
                  correct: 2
                },
                {
                  question: 'When is FULL JOIN most useful?',
                  options: ['Simple queries', 'Data reconciliation', 'Counting rows', 'Sorting data'],
                  correct: 1
                }
              ]
            },
            {
              id: 'self_join',
              title: 'Self JOIN',
              type: 'challenge',
              theory: `<h2>Self JOIN</h2><p>A <strong>self join</strong> joins a table to itself. Useful for hierarchical data or comparing rows within the same table.</p><h3>Employee Hierarchy</h3><pre><code>SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;</code></pre><h3>Why Self JOIN?</h3><ul><li>Employee-manager hierarchies</li><li>Finding pairs (customers in same city)</li><li>Comparing rows (current vs previous)</li></ul><h3>Aliases Are Required</h3><p>You MUST use different aliases for the same table:</p><pre><code>FROM employees e    -- "employee" copy
JOIN employees m    -- "manager" copy</code></pre>`,
              challenge: {
                description: 'Write a self join on "employees" showing employee and manager names. SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id.',
                starterCode: '-- Show employees with their managers\n',
                expectedOutput: 'SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;',
                hints: ['Join employees to itself with aliases', 'LEFT JOIN so employees without managers appear', 'e.manager_id = m.id links to manager']
              },
              quiz: [
                {
                  question: 'What is a self join?',
                  options: ['Joining two different tables', 'Joining a table to itself', 'Joining without conditions', 'Invalid operation'],
                  correct: 1
                },
                {
                  question: 'Are aliases required for self joins?',
                  options: ['No', 'Yes', 'Only in MySQL', 'Only with LEFT JOIN'],
                  correct: 1
                },
                {
                  question: 'NULL manager_id means?',
                  options: ['Error', 'Top-level employee (no manager)', 'Unknown employee', 'Fired employee'],
                  correct: 1
                },
                {
                  question: 'Why use a.id < b.id when finding pairs?',
                  options: ['Performance', 'Prevents duplicate pairs', 'Required by SQL', 'Sorts results'],
                  correct: 1
                }
              ]
            },
            {
              id: 'multi_table_join',
              title: 'Multi-Table JOINs',
              type: 'challenge',
              theory: `<h2>Multi-Table JOINs</h2><p>Real queries often join three or more tables. Each JOIN adds more information.</p><h3>Three-Table Example</h3><pre><code>SELECT c.name, o.id AS order_id, p.name AS product, oi.quantity
FROM customers c
JOIN orders o ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id;</code></pre><h3>Tips</h3><ul><li>Always use table aliases for readability</li><li>Join on foreign key → primary key relationships</li><li>Start from the table most central to your query</li><li>Use INNER JOIN unless you need unmatched rows</li></ul>`,
              challenge: {
                description: 'Join orders, customers, and order_items. Select customers.name, orders.id AS order_id, order_items.quantity. Join orders→customers and orders→order_items.',
                starterCode: '-- Join three tables\n',
                expectedOutput: 'SELECT customers.name, orders.id AS order_id, order_items.quantity FROM orders JOIN customers ON orders.customer_id = customers.id JOIN order_items ON orders.id = order_items.order_id;',
                hints: ['Chain multiple JOINs', 'Each JOIN has its own ON condition', 'FROM orders JOIN customers ON ... JOIN order_items ON ...']
              },
              quiz: [
                {
                  question: 'Multiple JOINs are processed how?',
                  options: ['All at once', 'Left to right sequentially', 'Right to left', 'Randomly'],
                  correct: 1
                },
                {
                  question: 'What connects orders to products?',
                  options: ['Direct foreign key', 'Through order_items junction table', 'Through customers', 'No connection'],
                  correct: 1
                },
                {
                  question: 'Is there a limit on tables you can join?',
                  options: ['Maximum 3', 'Maximum 5', 'No hard limit', 'Exactly 2'],
                  correct: 2
                },
                {
                  question: 'What should you join on?',
                  options: ['Any columns', 'Foreign key to primary key', 'Matching column names', 'First column'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'subqueries',
          title: 'Subqueries',
          lessons: [
            {
              id: 'subquery_in_where',
              title: 'Subqueries in WHERE',
              type: 'challenge',
              theory: `<h2>Subqueries in WHERE</h2><p>A <strong>subquery</strong> is a query nested inside another query. The inner query runs first, and its result is used by the outer query.</p><h3>Single-Value Subquery</h3><pre><code>SELECT * FROM products
WHERE price > (SELECT AVG(price) FROM products);</code></pre><h3>Multi-Value with IN</h3><pre><code>SELECT * FROM customers
WHERE id IN (SELECT customer_id FROM orders WHERE total > 100);</code></pre><h3>EXISTS Subquery</h3><pre><code>SELECT * FROM customers c
WHERE EXISTS (SELECT 1 FROM orders WHERE customer_id = c.id);</code></pre><p>EXISTS returns TRUE if the subquery returns any rows.</p>`,
              challenge: {
                description: 'Find all products where price > average price using a subquery.',
                starterCode: '-- Find products above average price\n',
                expectedOutput: 'SELECT * FROM products WHERE price > (SELECT AVG(price) FROM products);',
                hints: ['Put AVG query inside parentheses', 'Subquery goes in WHERE clause', 'Compare price > (subquery)']
              },
              quiz: [
                {
                  question: 'Which query runs first?',
                  options: ['Outer query', 'Inner query', 'Both simultaneously', 'Depends'],
                  correct: 1
                },
                {
                  question: 'When use IN with subqueries?',
                  options: ['One value returned', 'Multiple values returned', 'Never', 'Always'],
                  correct: 1
                },
                {
                  question: 'What does EXISTS check?',
                  options: ['Table exists', 'Subquery returns any rows', 'Column has values', 'Database running'],
                  correct: 1
                },
                {
                  question: 'Can subqueries reference outer query columns?',
                  options: ['No', 'Yes (correlated subquery)', 'Only in PostgreSQL', 'Only with EXISTS'],
                  correct: 1
                }
              ]
            },
            {
              id: 'subquery_in_select',
              title: 'Subqueries in SELECT',
              type: 'challenge',
              theory: `<h2>Subqueries in SELECT</h2><p>A scalar subquery in SELECT returns one value per row as a computed column.</p><h3>Example</h3><pre><code>SELECT name, price,
  (SELECT AVG(price) FROM products) AS avg_price
FROM products;</code></pre><h3>Correlated Subquery</h3><pre><code>SELECT c.name,
  (SELECT COUNT(*) FROM orders WHERE customer_id = c.id) AS order_count
FROM customers c;</code></pre><p>Runs once per row — can be slow. A JOIN with GROUP BY is often more efficient.</p>`,
              challenge: {
                description: 'Select name, price, and a subquery getting MAX(price) from products aliased as "max_price".',
                starterCode: '-- Show each product with max price\n',
                expectedOutput: 'SELECT name, price, (SELECT MAX(price) FROM products) AS max_price FROM products;',
                hints: ['Subquery in parentheses in SELECT', 'Must return one value', '(SELECT MAX(price) FROM products) AS max_price']
              },
              quiz: [
                {
                  question: 'A scalar subquery returns?',
                  options: ['Multiple rows', 'One single value', 'A table', 'Multiple columns'],
                  correct: 1
                },
                {
                  question: 'Correlated subquery executes how often?',
                  options: ['Once total', 'Once per outer row', 'Twice', 'Depends on LIMIT'],
                  correct: 1
                },
                {
                  question: 'More efficient alternative to correlated subquery?',
                  options: ['Another subquery', 'JOIN with GROUP BY', 'HAVING', 'DISTINCT'],
                  correct: 1
                },
                {
                  question: 'Can SELECT subquery return multiple values?',
                  options: ['Yes', 'No — must be scalar', 'Only with IN', 'Only with DISTINCT'],
                  correct: 1
                }
              ]
            },
            {
              id: 'subquery_in_from',
              title: 'Derived Tables',
              type: 'challenge',
              theory: `<h2>Subqueries in FROM (Derived Tables)</h2><p>A subquery in FROM creates a derived table you can query like a regular table.</p><h3>Example</h3><pre><code>SELECT * FROM (
  SELECT customer_id, COUNT(*) AS order_count
  FROM orders GROUP BY customer_id
) AS summary
WHERE order_count > 5;</code></pre><h3>Rules</h3><ul><li>Derived tables MUST have an alias</li><li>You can join them with regular tables</li><li>Column names from subquery become column names of derived table</li></ul>`,
              challenge: {
                description: 'Query a derived table: SELECT * FROM (SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id) AS summary WHERE order_count > 3.',
                starterCode: '-- Query derived table of order counts\n',
                expectedOutput: 'SELECT * FROM (SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id) AS summary WHERE order_count > 3;',
                hints: ['Subquery after FROM in parentheses', 'Derived table needs alias (AS summary)', 'Filter with WHERE on outer query']
              },
              quiz: [
                {
                  question: 'What is a derived table?',
                  options: ['Permanent table', 'Subquery result used as table in FROM', 'A view', 'Temporary table on disk'],
                  correct: 1
                },
                {
                  question: 'Do derived tables need an alias?',
                  options: ['No', 'Yes', 'Only in PostgreSQL', 'Only with WHERE'],
                  correct: 1
                },
                {
                  question: 'Modern alternative to derived tables?',
                  options: ['Views', 'CTEs (WITH clause)', 'Temporary tables', 'HAVING'],
                  correct: 1
                },
                {
                  question: 'Can you join derived table with regular table?',
                  options: ['No', 'Yes', 'Only with INNER JOIN', 'Only in Oracle'],
                  correct: 1
                }
              ]
            },
            {
              id: 'common_table_expressions',
              title: 'CTEs (WITH Clause)',
              type: 'challenge',
              theory: `<h2>Common Table Expressions (CTEs)</h2><p>A CTE uses <code>WITH</code> to define a named temporary result set referenced in the main query.</p><h3>Syntax</h3><pre><code>WITH cte_name AS (
  SELECT ...
)
SELECT * FROM cte_name;</code></pre><h3>Multiple CTEs</h3><pre><code>WITH 
  summary AS (...),
  top_items AS (SELECT * FROM summary WHERE ...)
SELECT * FROM top_items;</code></pre><h3>Benefits over Derived Tables</h3><ul><li>Named and defined at top (readable)</li><li>Can be referenced multiple times</li><li>Support recursive queries</li></ul>`,
              challenge: {
                description: 'Write a CTE named "expensive_products" selecting name, price from products WHERE price > 100. Then SELECT * FROM the CTE.',
                starterCode: '-- CTE for expensive products\n',
                expectedOutput: 'WITH expensive_products AS (SELECT name, price FROM products WHERE price > 100) SELECT * FROM expensive_products;',
                hints: ['WITH cte_name AS (...)', 'Put query in parentheses', 'SELECT from CTE name after']
              },
              quiz: [
                {
                  question: 'What keyword introduces a CTE?',
                  options: ['CREATE', 'DEFINE', 'WITH', 'DECLARE'],
                  correct: 2
                },
                {
                  question: 'Can a CTE be referenced multiple times?',
                  options: ['No', 'Yes', 'Only twice', 'Only with UNION'],
                  correct: 1
                },
                {
                  question: 'Advantage over derived tables?',
                  options: ['Faster execution', 'Better readability and reusability', 'Permanent storage', 'No aliases needed'],
                  correct: 1
                },
                {
                  question: 'Can CTEs be recursive?',
                  options: ['No', 'Yes', 'Only in Oracle', 'Only for numbers'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'insert-update-delete',
          title: 'INSERT / UPDATE / DELETE',
          lessons: [
            {
              id: 'insert_into',
              title: 'INSERT INTO',
              type: 'challenge',
              theory: `<h2>INSERT INTO</h2><p>The <code>INSERT</code> statement adds new rows to a table.</p><h3>With Column List (Best Practice)</h3><pre><code>INSERT INTO customers (name, email, city)
VALUES ('Alice', 'alice@mail.com', 'New York');</code></pre><h3>Multiple Rows</h3><pre><code>INSERT INTO products (name, price, category) VALUES
('Widget', 9.99, 'Tools'),
('Gadget', 24.99, 'Electronics');</code></pre><h3>Insert from SELECT</h3><pre><code>INSERT INTO archived_orders (id, customer_id, total)
SELECT id, customer_id, total FROM orders
WHERE order_date < '2023-01-01';</code></pre><h3>Key Points</h3><ul><li>Always specify column list</li><li>NOT NULL columns must have values</li><li>Auto-increment PKs generate automatically</li></ul>`,
              challenge: {
                description: 'Insert into "products" a row with name \'Laptop\', price 999.99, category \'Electronics\'.',
                starterCode: '-- Insert a new product\n',
                expectedOutput: "INSERT INTO products (name, price, category) VALUES ('Laptop', 999.99, 'Electronics');",
                hints: ['INSERT INTO table (columns) VALUES (values)', 'Text needs single quotes', 'Numbers no quotes']
              },
              quiz: [
                {
                  question: 'Why specify column names in INSERT?',
                  options: ['Required', 'Protects against structure changes', 'Faster', 'Required for NULLs'],
                  correct: 1
                },
                {
                  question: 'Can you insert multiple rows at once?',
                  options: ['No', 'Yes', 'Only in MySQL', 'Only 2'],
                  correct: 1
                },
                {
                  question: 'INSERT INTO ... SELECT does what?',
                  options: ['Updates rows', 'Inserts query results into table', 'Creates table', 'Deletes and reinserts'],
                  correct: 1
                },
                {
                  question: 'Omitting NOT NULL column causes?',
                  options: ['NULL inserted', 'Error', 'Default used', 'Row skipped'],
                  correct: 1
                }
              ]
            },
            {
              id: 'update_statement',
              title: 'UPDATE',
              type: 'challenge',
              theory: `<h2>UPDATE Statement</h2><p>Modifies existing rows. Always use WHERE to avoid updating every row!</p><h3>Basic Update</h3><pre><code>UPDATE products SET price = 29.99 WHERE id = 5;</code></pre><h3>Multiple Columns</h3><pre><code>UPDATE employees SET salary = 75000, department = 'Engineering' WHERE id = 42;</code></pre><h3>Calculated</h3><pre><code>UPDATE employees SET salary = salary * 1.10 WHERE department = 'Sales';</code></pre><h3>⚠️ Without WHERE</h3><pre><code>UPDATE products SET price = 0; -- Updates ALL rows!</code></pre><p><strong>Best practices:</strong> Always WHERE, test with SELECT first, use transactions.</p>`,
              challenge: {
                description: 'Update the price to 49.99 for product id = 3 in "products".',
                starterCode: '-- Update product price\n',
                expectedOutput: 'UPDATE products SET price = 49.99 WHERE id = 3;',
                hints: ['UPDATE table SET column = value WHERE condition', 'Always include WHERE', 'UPDATE products SET price = 49.99 WHERE id = 3;']
              },
              quiz: [
                {
                  question: 'UPDATE without WHERE does what?',
                  options: ['Error', 'Updates one row', 'Updates ALL rows', 'Does nothing'],
                  correct: 2
                },
                {
                  question: '10% raise expression?',
                  options: ['SET salary = 10%', 'SET salary = salary * 1.10', 'SET salary + 10%', 'ADD salary 10%'],
                  correct: 1
                },
                {
                  question: 'Before running UPDATE you should?',
                  options: ['Run DELETE', 'Test with SELECT', 'Drop table', 'Nothing'],
                  correct: 1
                },
                {
                  question: 'Update multiple columns?',
                  options: ['No', 'Yes, comma-separated in SET', 'Only with subqueries', 'Maximum 2'],
                  correct: 1
                }
              ]
            },
            {
              id: 'delete_statement',
              title: 'DELETE',
              type: 'challenge',
              theory: `<h2>DELETE Statement</h2><p>Removes rows from a table. Always use WHERE!</p><h3>Examples</h3><pre><code>DELETE FROM orders WHERE id = 100;
DELETE FROM orders WHERE status = 'cancelled';
DELETE FROM logs WHERE created_at < '2023-01-01';</code></pre><h3>DELETE vs TRUNCATE</h3><ul><li><code>DELETE</code> — Can be rolled back, slower</li><li><code>TRUNCATE</code> — Cannot be rolled back, faster</li></ul><h3>Soft Deletes</h3><p>Consider <code>SET deleted = TRUE</code> instead of actually removing data.</p>`,
              challenge: {
                description: 'Delete all orders with status \'cancelled\' from "orders".',
                starterCode: '-- Delete cancelled orders\n',
                expectedOutput: "DELETE FROM orders WHERE status = 'cancelled';",
                hints: ['DELETE FROM table WHERE condition', 'Match status to cancelled', 'Text in single quotes']
              },
              quiz: [
                {
                  question: 'DELETE without WHERE?',
                  options: ['Error', 'Deletes one row', 'Deletes ALL rows', 'Drops table'],
                  correct: 2
                },
                {
                  question: 'DELETE vs TRUNCATE?',
                  options: ['No difference', 'DELETE can be rolled back', 'TRUNCATE can be rolled back', 'DELETE is faster'],
                  correct: 1
                },
                {
                  question: 'What is a soft delete?',
                  options: ['DELETE with LIMIT', 'Marking as deleted without removing', 'Slow deletion', 'Cache-only delete'],
                  correct: 1
                },
                {
                  question: 'ON DELETE CASCADE?',
                  options: ['Prevents deletion', 'Auto-deletes child rows', 'Backs up first', 'Logs deletion'],
                  correct: 1
                }
              ]
            },
            {
              id: 'transactions',
              title: 'Transactions',
              type: 'challenge',
              theory: `<h2>Transactions</h2><p>Groups statements into atomic unit — all succeed or none do.</p><h3>Syntax</h3><pre><code>BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;</code></pre><h3>ROLLBACK</h3><pre><code>BEGIN;
  DELETE FROM orders WHERE id = 500;
ROLLBACK;  -- Undoes the DELETE</code></pre><h3>ACID Properties</h3><ul><li><strong>Atomicity:</strong> All or nothing</li><li><strong>Consistency:</strong> Database remains valid</li><li><strong>Isolation:</strong> Concurrent transactions don't interfere</li><li><strong>Durability:</strong> Committed changes persist</li></ul>`,
              challenge: {
                description: 'Write: BEGIN; INSERT INTO orders (customer_id, total) VALUES (1, 50.00); UPDATE products SET stock = stock - 1 WHERE id = 10; COMMIT;',
                starterCode: '-- Transaction: order + stock update\n',
                expectedOutput: 'BEGIN; INSERT INTO orders (customer_id, total) VALUES (1, 50.00); UPDATE products SET stock = stock - 1 WHERE id = 10; COMMIT;',
                hints: ['Start with BEGIN;', 'End with COMMIT;', 'INSERT and UPDATE between them']
              },
              quiz: [
                {
                  question: 'Transaction guarantees?',
                  options: ['Speed', 'All succeed or none do', 'No errors', 'Faster queries'],
                  correct: 1
                },
                {
                  question: 'ROLLBACK does?',
                  options: ['Saves changes', 'Undoes transaction changes', 'Speeds up', 'Creates backup'],
                  correct: 1
                },
                {
                  question: 'A in ACID?',
                  options: ['Automatic', 'Atomicity', 'Availability', 'Authentication'],
                  correct: 1
                },
                {
                  question: 'Auto-commit means?',
                  options: ['Auto backups', 'Each statement is own transaction', 'Auto rollback', 'Commits at midnight'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'table-creation',
          title: 'Table Creation',
          lessons: [
            {
              id: 'create_table',
              title: 'CREATE TABLE',
              type: 'challenge',
              theory: `<h2>CREATE TABLE</h2><p>Defines a new table's structure — columns, data types, and constraints.</p><h3>Common Data Types</h3><ul><li><code>INTEGER</code> — Whole numbers</li><li><code>VARCHAR(n)</code> — Variable-length text</li><li><code>TEXT</code> — Unlimited text</li><li><code>DECIMAL(p,s)</code> — Precise numbers</li><li><code>DATE</code> / <code>TIMESTAMP</code> — Dates</li><li><code>BOOLEAN</code> — TRUE/FALSE</li></ul><h3>Example</h3><pre><code>CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INTEGER DEFAULT 0
);</code></pre><h3>Constraints</h3><ul><li><code>PRIMARY KEY</code> — Unique identifier</li><li><code>NOT NULL</code> — Cannot be empty</li><li><code>UNIQUE</code> — No duplicates</li><li><code>DEFAULT</code> — Default value</li></ul>`,
              challenge: {
                description: 'CREATE TABLE "students": id INTEGER PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(150) UNIQUE, age INTEGER.',
                starterCode: '-- Create the students table\n',
                expectedOutput: 'CREATE TABLE students (id INTEGER PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(150) UNIQUE, age INTEGER);',
                hints: ['CREATE TABLE name (columns...)', 'Each column: name type constraints', 'Separate with commas']
              },
              quiz: [
                {
                  question: 'PRIMARY KEY enforces?',
                  options: ['Can be NULL', 'Unique non-null identifier', 'Auto-increment', 'Foreign reference'],
                  correct: 1
                },
                {
                  question: 'NOT NULL means?',
                  options: ['No default', 'Cannot be empty', 'Always 0', 'Is unique'],
                  correct: 1
                },
                {
                  question: 'VARCHAR(100)?',
                  options: ['Exactly 100 chars', 'Up to 100 chars', 'Min 100 chars', '100 rows'],
                  correct: 1
                },
                {
                  question: 'DECIMAL(10,2)?',
                  options: ['10 digits total, 2 decimal', 'Exactly 10.2', '10 rows, 2 cols', 'Binary number'],
                  correct: 0
                }
              ]
            },
            {
              id: 'foreign_keys',
              title: 'Foreign Keys',
              type: 'challenge',
              theory: `<h2>Foreign Keys</h2><p>Creates a link between tables ensuring referential integrity.</p><h3>Syntax</h3><pre><code>CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  total DECIMAL(10,2),
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);</code></pre><h3>ON DELETE Options</h3><ul><li><code>CASCADE</code> — Delete related rows</li><li><code>SET NULL</code> — Set FK to NULL</li><li><code>RESTRICT</code> — Prevent deletion (default)</li></ul>`,
              challenge: {
                description: 'CREATE TABLE "orders": id INTEGER PRIMARY KEY, customer_id INTEGER NOT NULL, total DECIMAL(10,2), FOREIGN KEY (customer_id) REFERENCES customers(id).',
                starterCode: '-- Create orders with foreign key\n',
                expectedOutput: 'CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER NOT NULL, total DECIMAL(10,2), FOREIGN KEY (customer_id) REFERENCES customers(id));',
                hints: ['FOREIGN KEY after columns', 'FOREIGN KEY (col) REFERENCES table(col)', 'Last item in column list']
              },
              quiz: [
                {
                  question: 'Foreign key enforces?',
                  options: ['Uniqueness', 'Referential integrity', 'Auto-increment', 'NULL values'],
                  correct: 1
                },
                {
                  question: 'ON DELETE CASCADE?',
                  options: ['Prevents deletion', 'Deletes child rows', 'Sets to NULL', 'Logs deletion'],
                  correct: 1
                },
                {
                  question: 'Default ON DELETE behavior?',
                  options: ['CASCADE', 'SET NULL', 'RESTRICT', 'SET DEFAULT'],
                  correct: 2
                },
                {
                  question: 'Multiple foreign keys allowed?',
                  options: ['No', 'Yes', 'Only 2', 'Only composite'],
                  correct: 1
                }
              ]
            },
            {
              id: 'alter_drop_table',
              title: 'ALTER & DROP TABLE',
              type: 'challenge',
              theory: `<h2>ALTER & DROP TABLE</h2><h3>Add Column</h3><pre><code>ALTER TABLE products ADD COLUMN description TEXT;</code></pre><h3>Drop Column</h3><pre><code>ALTER TABLE products DROP COLUMN description;</code></pre><h3>DROP TABLE</h3><pre><code>DROP TABLE IF EXISTS products;</code></pre><p>⚠️ DROP is permanent — removes structure, data, indexes, everything.</p><h3>Best Practices</h3><ul><li>Use IF EXISTS to prevent errors</li><li>Back up before destructive changes</li><li>Use migrations in production</li></ul>`,
              challenge: {
                description: 'ALTER TABLE products ADD COLUMN description TEXT.',
                starterCode: '-- Add description column to products\n',
                expectedOutput: 'ALTER TABLE products ADD COLUMN description TEXT;',
                hints: ['ALTER TABLE table ADD COLUMN ...', 'Column name and type', 'ALTER TABLE products ADD COLUMN description TEXT;']
              },
              quiz: [
                {
                  question: 'DROP TABLE does?',
                  options: ['Empties table', 'Deletes entire table permanently', 'Removes one column', 'Renames table'],
                  correct: 1
                },
                {
                  question: 'IF EXISTS prevents?',
                  options: ['Data loss', 'Error when table missing', 'Duplicates', 'Permissions'],
                  correct: 1
                },
                {
                  question: 'Can DROP TABLE be rolled back?',
                  options: ['Yes always', 'No in most databases', 'Only MySQL', 'Only with transactions'],
                  correct: 1
                },
                {
                  question: 'Database migration is?',
                  options: ['Moving servers', 'Tracked schema changes in version control', 'Backing up', 'Deleting old data'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'indexes-constraints',
          title: 'Indexes & Constraints',
          lessons: [
            {
              id: 'indexes',
              title: 'Indexes',
              type: 'challenge',
              theory: `<h2>Indexes</h2><p>An index speeds up data retrieval — like a book's index helps find topics without reading every page.</p><h3>Creating</h3><pre><code>CREATE INDEX idx_products_category ON products(category);
CREATE UNIQUE INDEX idx_users_email ON users(email);</code></pre><h3>When to Index</h3><ul><li>Columns in WHERE clauses</li><li>JOIN condition columns</li><li>ORDER BY columns</li><li>Foreign key columns</li></ul><h3>Trade-off</h3><p>Indexes speed up reads but slow down writes. Every INSERT/UPDATE/DELETE must update indexes too.</p>`,
              challenge: {
                description: 'Create an index named "idx_orders_customer" on "orders" table for "customer_id" column.',
                starterCode: '-- Create index on orders.customer_id\n',
                expectedOutput: 'CREATE INDEX idx_orders_customer ON orders(customer_id);',
                hints: ['CREATE INDEX name ON table(column)', 'Name: idx_orders_customer', 'Column: customer_id']
              },
              quiz: [
                {
                  question: 'Index downside?',
                  options: ['Slower reads', 'Slower writes', 'More NULLs', 'Less storage'],
                  correct: 1
                },
                {
                  question: 'Which columns to index?',
                  options: ['All', 'Frequently in WHERE/JOIN/ORDER', 'Only PKs', 'Only text'],
                  correct: 1
                },
                {
                  question: 'Composite index on (A, B) helps?',
                  options: ['Only B alone', 'A alone or A+B', 'B alone or A+B', 'Neither alone'],
                  correct: 1
                },
                {
                  question: 'Without index, database does?',
                  options: ['Returns error', 'Full table scan', 'Uses cache', 'Skips query'],
                  correct: 1
                }
              ]
            },
            {
              id: 'constraints_advanced',
              title: 'Advanced Constraints',
              type: 'challenge',
              theory: `<h2>Advanced Constraints</h2><h3>CHECK</h3><pre><code>price DECIMAL(10,2) CHECK(price > 0),
stock INTEGER CHECK(stock >= 0)</code></pre><h3>UNIQUE</h3><pre><code>email VARCHAR(200) UNIQUE</code></pre><h3>Named Constraints</h3><pre><code>CONSTRAINT chk_salary CHECK(salary >= 0)</code></pre><p>Named constraints are easier to modify or drop later.</p><h3>Why Constraints Matter</h3><p>They are the last line of defense against bad data. Application bugs happen; constraints never fail.</p>`,
              challenge: {
                description: 'CREATE TABLE "accounts": id INTEGER PRIMARY KEY, balance DECIMAL(10,2) CHECK(balance >= 0), email VARCHAR(200) UNIQUE NOT NULL.',
                starterCode: '-- Create accounts with constraints\n',
                expectedOutput: 'CREATE TABLE accounts (id INTEGER PRIMARY KEY, balance DECIMAL(10,2) CHECK(balance >= 0), email VARCHAR(200) UNIQUE NOT NULL);',
                hints: ['CHECK after data type', 'UNIQUE and NOT NULL combine', 'Multiple constraints per column ok']
              },
              quiz: [
                {
                  question: 'CHECK(price > 0) enforces?',
                  options: ['Price is NULL', 'Price must be positive', 'Price is indexed', 'Price is unique'],
                  correct: 1
                },
                {
                  question: 'Why name constraints?',
                  options: ['Required', 'Easier to modify/drop later', 'Performance', 'Execute faster'],
                  correct: 1
                },
                {
                  question: 'One column multiple constraints?',
                  options: ['No', 'Yes', 'Maximum 2', 'Only with ALTER'],
                  correct: 1
                },
                {
                  question: 'Constraints protect against?',
                  options: ['Slow queries', 'Invalid data', 'Table drops', 'Index corruption'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'report-builder-project',
          title: 'Report Builder PROJECT',
          lessons: [
            {
              id: 'full_report_query',
              title: 'Building a Full Report',
              type: 'project',
              theory: `<h2>Project: Full Business Report</h2><p>Combine JOINs, aggregations, subqueries, and filtering for a customer spending report.</p><h3>Requirements</h3><ul><li>Customer name, order count, total spent, avg order value</li><li>Only completed orders</li><li>Only customers with 2+ orders</li><li>Sorted by total spent descending</li></ul><h3>Pattern</h3><pre><code>SELECT c.name, COUNT(o.id) AS order_count,
  SUM(o.total) AS total_spent,
  ROUND(AVG(o.total), 2) AS avg_order_value
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.status = 'completed'
GROUP BY c.name
HAVING COUNT(o.id) >= 2
ORDER BY total_spent DESC;</code></pre>`,
              challenge: {
                description: 'Write the full customer spending report with JOIN, WHERE, GROUP BY, HAVING, and ORDER BY.',
                starterCode: '-- Customer spending report\n',
                expectedOutput: "SELECT c.name, COUNT(o.id) AS order_count, SUM(o.total) AS total_spent, ROUND(AVG(o.total), 2) AS avg_order_value FROM customers c JOIN orders o ON c.id = o.customer_id WHERE o.status = 'completed' GROUP BY c.name HAVING COUNT(o.id) >= 2 ORDER BY total_spent DESC;",
                hints: ['JOIN customers with orders', 'WHERE status = completed', 'GROUP BY c.name, HAVING COUNT >= 2']
              },
              quiz: [
                {
                  question: 'Correct clause order?',
                  options: ['SELECT WHERE FROM GROUP ORDER', 'SELECT FROM JOIN WHERE GROUP HAVING ORDER', 'FROM SELECT WHERE', 'FROM GROUP SELECT'],
                  correct: 1
                },
                {
                  question: 'Why HAVING not WHERE for count >= 2?',
                  options: ['WHERE cannot filter aggregates', 'HAVING is faster', 'No reason', 'SQL requirement'],
                  correct: 0
                },
                {
                  question: 'Why ROUND the average?',
                  options: ['Required', 'Cleaner monetary values', 'Prevents errors', 'Speeds up'],
                  correct: 1
                },
                {
                  question: 'Concepts combined here?',
                  options: ['2', '4', '6+', '1'],
                  correct: 2
                }
              ]
            },
            {
              id: 'report_with_cte',
              title: 'Report with CTEs',
              type: 'project',
              theory: `<h2>Project: CTE-Based Report</h2><p>Use CTEs to break complex reports into readable steps.</p><h3>Pattern</h3><pre><code>WITH order_totals AS (
  SELECT customer_id, COUNT(*) AS num_orders, SUM(total) AS total_spent
  FROM orders GROUP BY customer_id
)
SELECT * FROM order_totals
WHERE total_spent > 1000
ORDER BY total_spent DESC;</code></pre><p>Each CTE has a clear purpose, is easy to debug, and self-documents through its name.</p>`,
              challenge: {
                description: 'WITH order_totals AS (SELECT customer_id, COUNT(*) AS num_orders, SUM(total) AS total_spent FROM orders GROUP BY customer_id) SELECT * FROM order_totals WHERE total_spent > 1000 ORDER BY total_spent DESC.',
                starterCode: '-- CTE-based customer report\n',
                expectedOutput: 'WITH order_totals AS (SELECT customer_id, COUNT(*) AS num_orders, SUM(total) AS total_spent FROM orders GROUP BY customer_id) SELECT * FROM order_totals WHERE total_spent > 1000 ORDER BY total_spent DESC;',
                hints: ['WITH cte_name AS (query)', 'Aggregation in CTE', 'Filter and sort in main SELECT']
              },
              quiz: [
                {
                  question: 'Main CTE advantage in reports?',
                  options: ['Faster', 'Readability and organization', 'Less memory', 'Auto indexing'],
                  correct: 1
                },
                {
                  question: 'Can one CTE reference a previous CTE?',
                  options: ['No', 'Yes', 'Only PostgreSQL', 'Only RECURSIVE'],
                  correct: 1
                },
                {
                  question: 'COALESCE(SUM(qty), 0) handles?',
                  options: ['Zero quantities', 'NULL sum for no sales', 'Negatives', 'Duplicates'],
                  correct: 1
                },
                {
                  question: 'When to prefer CTE over derived table?',
                  options: ['Never', 'Complex multi-step queries', 'Simple queries', 'Only with UNION'],
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
