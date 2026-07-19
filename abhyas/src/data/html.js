const htmlCourse = {
  id: 'html',
  title: 'Learn HTML',
  icon: '🌐',
  description: 'Master HTML from basics to advanced concepts. Build real web pages with semantic markup, forms, multimedia, and accessibility best practices.',
  totalLessons: 60,
  sections: [
    {
      id: 'html-basics',
      title: 'HTML Basics',
      description: 'Learn the fundamentals of HTML markup and document structure',
      modules: [
        {
          id: 'intro-to-html',
          title: 'Introduction to HTML',
          lessons: [
            {
              id: 'html-intro-1',
              title: 'What is HTML?',
              type: 'challenge',
              theory: `<h2>What is HTML?</h2>
<p><strong>HTML (HyperText Markup Language)</strong> is the standard language used to create and structure content on the web. Every website you visit is built using HTML as its foundation. Think of HTML as the skeleton of a webpage — it provides the structure that holds everything together.</p>
<p>HTML uses a system of <strong>tags</strong> to define different types of content. Tags are special keywords surrounded by angle brackets, like <code>&lt;p&gt;</code> for paragraphs or <code>&lt;h1&gt;</code> for headings. Most tags come in pairs: an opening tag and a closing tag (with a forward slash).</p>
<p>Here's a simple example:</p>
<pre><code>&lt;p&gt;Hello, World!&lt;/p&gt;</code></pre>
<p>In this example, <code>&lt;p&gt;</code> is the opening tag, <code>&lt;/p&gt;</code> is the closing tag, and "Hello, World!" is the content between them. Together, they form an HTML <strong>element</strong>.</p>
<p>HTML was created by <strong>Tim Berners-Lee</strong> in 1991 and has evolved significantly. The current version, <strong>HTML5</strong>, introduced many powerful features including multimedia support, semantic elements, and new form controls. HTML works alongside CSS (for styling) and JavaScript (for interactivity) to create modern web experiences.</p>
<p>Key concepts to remember:</p>
<ul>
<li>HTML defines the <em>structure</em> of web content</li>
<li>Tags tell the browser how to display content</li>
<li>Elements consist of opening tag + content + closing tag</li>
<li>HTML5 is the current standard</li>
</ul>`,
              challenge: {
                description: 'Create your first HTML element! Write a paragraph tag containing the text "Hello, World!"',
                starterCode: '<!-- Write a paragraph element below -->\n',
                expectedOutput: '<p>Hello, World!</p>',
                hints: [
                  'A paragraph uses the <p> tag',
                  'Remember to close the tag with </p>',
                  'The text goes between the opening and closing tags'
                ]
              },
              quiz: [
                {
                  question: 'What does HTML stand for?',
                  options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyper Transfer Markup Language', 'Home Tool Markup Language'],
                  correct: 0
                },
                {
                  question: 'Who created HTML?',
                  options: ['Steve Jobs', 'Tim Berners-Lee', 'Bill Gates', 'Mark Zuckerberg'],
                  correct: 1
                },
                {
                  question: 'What is the current version of HTML?',
                  options: ['HTML3', 'HTML4', 'HTML5', 'HTML6'],
                  correct: 2
                },
                {
                  question: 'Which symbol is used to close an HTML tag?',
                  options: ['\\', '/', '*', '#'],
                  correct: 1
                }
              ]
            },
            {
              id: 'html-intro-2',
              title: 'HTML Document Structure',
              type: 'challenge',
              theory: `<h2>HTML Document Structure</h2>
<p>Every HTML document follows a specific structure that browsers need to correctly render the page. Think of it as a blueprint that tells the browser what kind of document it's reading and how to organize the content.</p>
<p>Here's the basic structure of an HTML document:</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;Visible content goes here&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Let's break down each part:</p>
<ul>
<li><code>&lt;!DOCTYPE html&gt;</code> — Declares this is an HTML5 document. It must be the very first line.</li>
<li><code>&lt;html&gt;</code> — The root element that wraps everything else.</li>
<li><code>&lt;head&gt;</code> — Contains metadata (information about the page) that isn't displayed directly. This includes the title, character encoding, links to stylesheets, and more.</li>
<li><code>&lt;title&gt;</code> — Sets the text shown in the browser tab.</li>
<li><code>&lt;body&gt;</code> — Contains all the visible content that users see and interact with on the page.</li>
</ul>
<p>The <strong>head</strong> section is like the backstage area — it sets things up but isn't seen by the audience. The <strong>body</strong> is the stage where all the action happens. Proper document structure ensures your page works correctly across all browsers and devices.</p>`,
              challenge: {
                description: 'Create a complete HTML document structure with a title of "My First Page" and a paragraph in the body saying "Welcome to my website!"',
                starterCode: '<!-- Create a complete HTML document structure -->\n',
                expectedOutput: '<!DOCTYPE html>\n<html>\n<head>\n<title>My First Page</title>\n</head>\n<body>\n<p>Welcome to my website!</p>\n</body>\n</html>',
                hints: [
                  'Start with <!DOCTYPE html>',
                  'The <html> tag wraps everything',
                  'Put <title> inside <head>',
                  'Put visible content inside <body>'
                ]
              },
              quiz: [
                {
                  question: 'What must be the very first line of an HTML5 document?',
                  options: ['<html>', '<head>', '<!DOCTYPE html>', '<body>'],
                  correct: 2
                },
                {
                  question: 'Where does the <title> tag belong?',
                  options: ['In the <body>', 'In the <head>', 'Before <!DOCTYPE>', 'After </html>'],
                  correct: 1
                },
                {
                  question: 'What does the <body> element contain?',
                  options: ['Metadata only', 'CSS styles', 'Visible page content', 'JavaScript only'],
                  correct: 2
                },
                {
                  question: 'Which element is the root of an HTML document?',
                  options: ['<body>', '<head>', '<DOCTYPE>', '<html>'],
                  correct: 3
                }
              ]
            },
            {
              id: 'html-intro-3',
              title: 'HTML Elements & Attributes',
              type: 'challenge',
              theory: `<h2>HTML Elements & Attributes</h2>
<p>HTML elements can be enhanced with <strong>attributes</strong> — additional information that modifies how an element behaves or appears. Attributes are always placed in the opening tag and follow the format: <code>name="value"</code>.</p>
<p>Here's an example with an image element:</p>
<pre><code>&lt;img src="photo.jpg" alt="A beautiful sunset" width="300"&gt;</code></pre>
<p>In this example, <code>src</code>, <code>alt</code>, and <code>width</code> are all attributes. Each provides different information to the browser about how to handle the image.</p>
<p><strong>Common attributes include:</strong></p>
<ul>
<li><code>id</code> — A unique identifier for an element (used once per page)</li>
<li><code>class</code> — A reusable identifier (can be used on multiple elements)</li>
<li><code>style</code> — Inline CSS styling</li>
<li><code>title</code> — Tooltip text shown on hover</li>
<li><code>lang</code> — Specifies the language of the content</li>
</ul>
<p><strong>Self-closing elements</strong> are special HTML elements that don't need a closing tag because they can't contain content. Examples include <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, and <code>&lt;input&gt;</code>.</p>
<p>Some important rules about attributes:</p>
<ul>
<li>Always use lowercase for attribute names</li>
<li>Always quote attribute values (double quotes preferred)</li>
<li>Multiple attributes are separated by spaces</li>
<li>The order of attributes doesn't matter</li>
</ul>
<p>Understanding elements and attributes is fundamental — they're the building blocks you'll use throughout your HTML journey.</p>`,
              challenge: {
                description: 'Create a paragraph element with an id of "intro" and a class of "highlight" containing the text "Learning HTML is fun!"',
                starterCode: '<!-- Create a paragraph with id and class attributes -->\n',
                expectedOutput: '<p id="intro" class="highlight">Learning HTML is fun!</p>',
                hints: [
                  'Attributes go inside the opening <p> tag',
                  'Use the format: attribute="value"',
                  'Separate multiple attributes with spaces',
                  'Don\'t forget the closing </p> tag'
                ]
              },
              quiz: [
                {
                  question: 'Where are attributes placed in an HTML element?',
                  options: ['In the closing tag', 'In the opening tag', 'Between tags', 'After the element'],
                  correct: 1
                },
                {
                  question: 'Which attribute must be unique on a page?',
                  options: ['class', 'style', 'id', 'title'],
                  correct: 2
                },
                {
                  question: 'Which of these is a self-closing element?',
                  options: ['<p>', '<div>', '<img>', '<span>'],
                  correct: 2
                },
                {
                  question: 'What is the correct format for an HTML attribute?',
                  options: ['name:value', 'name=value', 'name="value"', 'name(value)'],
                  correct: 2
                },
                {
                  question: 'Which attribute adds tooltip text to an element?',
                  options: ['alt', 'title', 'tooltip', 'hint'],
                  correct: 1
                }
              ]
            },
            {
              id: 'html-intro-4',
              title: 'Comments & Whitespace',
              type: 'challenge',
              theory: `<h2>Comments & Whitespace in HTML</h2>
<p><strong>HTML comments</strong> allow you to add notes to your code that won't be displayed in the browser. They're incredibly useful for documenting your code, leaving reminders, or temporarily hiding content during development.</p>
<p>The syntax for HTML comments is:</p>
<pre><code>&lt;!-- This is a comment --&gt;</code></pre>
<p>Comments can span multiple lines:</p>
<pre><code>&lt;!-- 
  This is a multi-line comment.
  It can contain multiple lines of text.
--&gt;</code></pre>
<p><strong>Whitespace handling</strong> is another important concept in HTML. The browser collapses multiple spaces, tabs, and line breaks into a single space when rendering content. This means:</p>
<pre><code>&lt;p&gt;Hello     World&lt;/p&gt;</code></pre>
<p>...will display as "Hello World" (single space). This behavior gives you freedom to format your source code for readability without affecting the output.</p>
<p><strong>Indentation</strong> is a best practice that makes your code easier to read. While not required by browsers, consistent indentation (usually 2 or 4 spaces) helps you and other developers understand the nesting structure:</p>
<pre><code>&lt;div&gt;
  &lt;p&gt;Well-indented code&lt;/p&gt;
  &lt;p&gt;Is easier to read&lt;/p&gt;
&lt;/div&gt;</code></pre>
<p>To force whitespace in displayed content, you can use:</p>
<ul>
<li><code>&amp;nbsp;</code> — Non-breaking space entity</li>
<li><code>&lt;br&gt;</code> — Line break element</li>
<li><code>&lt;pre&gt;</code> — Preformatted text (preserves all whitespace)</li>
</ul>`,
              challenge: {
                description: 'Write an HTML comment that says "Navigation section" followed by a paragraph with the text "Home Page". Then add a line break and another paragraph saying "About Us".',
                starterCode: '<!-- Write your code below -->\n',
                expectedOutput: '<!-- Navigation section -->\n<p>Home Page</p>\n<br>\n<p>About Us</p>',
                hints: [
                  'Comments use <!-- and --> syntax',
                  'Line breaks use the <br> tag',
                  'Each paragraph needs its own <p> tags'
                ]
              },
              quiz: [
                {
                  question: 'What is the correct syntax for an HTML comment?',
                  options: ['// comment', '/* comment */', '<!-- comment -->', '# comment'],
                  correct: 2
                },
                {
                  question: 'How does the browser handle multiple spaces in HTML content?',
                  options: ['Displays all spaces', 'Collapses to one space', 'Removes all spaces', 'Throws an error'],
                  correct: 1
                },
                {
                  question: 'Which element preserves whitespace exactly as written?',
                  options: ['<p>', '<span>', '<pre>', '<div>'],
                  correct: 2
                },
                {
                  question: 'What does &nbsp; represent?',
                  options: ['New paragraph', 'Non-breaking space', 'Line break', 'Tab character'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'text-elements',
          title: 'Text Elements',
          lessons: [
            {
              id: 'text-1',
              title: 'Headings',
              type: 'challenge',
              theory: `<h2>HTML Headings</h2>
<p>Headings are used to define titles and subtitles in your content. HTML provides six levels of headings, from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important). They create a hierarchical structure that helps both users and search engines understand your content.</p>
<pre><code>&lt;h1&gt;Main Title&lt;/h1&gt;
&lt;h2&gt;Section Title&lt;/h2&gt;
&lt;h3&gt;Subsection Title&lt;/h3&gt;
&lt;h4&gt;Sub-subsection&lt;/h4&gt;
&lt;h5&gt;Minor Heading&lt;/h5&gt;
&lt;h6&gt;Smallest Heading&lt;/h6&gt;</code></pre>
<p><strong>Best practices for headings:</strong></p>
<ul>
<li>Use only one <code>&lt;h1&gt;</code> per page — it should describe the page's main topic</li>
<li>Don't skip heading levels (e.g., don't jump from h1 to h3)</li>
<li>Use headings for structure, not just to make text bigger</li>
<li>Headings help with accessibility — screen readers use them for navigation</li>
</ul>
<p>Each heading level gets progressively smaller by default. However, you should choose headings based on semantic meaning, not visual appearance. CSS can always adjust how they look later.</p>
<p>Search engines give extra weight to heading content, especially <code>&lt;h1&gt;</code> and <code>&lt;h2&gt;</code>. A well-structured heading hierarchy improves your page's SEO and makes content scannable for visitors.</p>`,
              challenge: {
                description: 'Create a heading structure with an h1 saying "My Blog", an h2 saying "Latest Posts", and an h3 saying "Introduction to Web Development".',
                starterCode: '<!-- Create your heading hierarchy -->\n',
                expectedOutput: '<h1>My Blog</h1>\n<h2>Latest Posts</h2>\n<h3>Introduction to Web Development</h3>',
                hints: [
                  'h1 is the largest heading',
                  'Each heading needs opening and closing tags',
                  'Place them in order from h1 to h3'
                ]
              },
              quiz: [
                {
                  question: 'How many heading levels does HTML provide?',
                  options: ['4', '5', '6', '8'],
                  correct: 2
                },
                {
                  question: 'How many <h1> tags should a page typically have?',
                  options: ['As many as needed', 'Only one', 'At least two', 'None'],
                  correct: 1
                },
                {
                  question: 'Which heading is the smallest by default?',
                  options: ['<h1>', '<h3>', '<h5>', '<h6>'],
                  correct: 3
                },
                {
                  question: 'Why should you not skip heading levels?',
                  options: ['It causes errors', 'It breaks the semantic hierarchy', 'The page won\'t load', 'CSS won\'t work'],
                  correct: 1
                }
              ]
            },
            {
              id: 'text-2',
              title: 'Paragraphs & Line Breaks',
              type: 'challenge',
              theory: `<h2>Paragraphs & Line Breaks</h2>
<p>The <code>&lt;p&gt;</code> element defines a paragraph of text. It's one of the most commonly used HTML elements. Browsers automatically add some margin (space) before and after each paragraph, creating visual separation between blocks of text.</p>
<pre><code>&lt;p&gt;This is the first paragraph. It contains a complete thought or idea.&lt;/p&gt;
&lt;p&gt;This is the second paragraph. Notice the space between them.&lt;/p&gt;</code></pre>
<p>The <code>&lt;br&gt;</code> element creates a line break within content — it forces text to continue on the next line without starting a new paragraph. It's a self-closing tag (no closing tag needed).</p>
<pre><code>&lt;p&gt;Line one&lt;br&gt;Line two&lt;br&gt;Line three&lt;/p&gt;</code></pre>
<p><strong>When to use each:</strong></p>
<ul>
<li>Use <code>&lt;p&gt;</code> for distinct blocks of content (different ideas or topics)</li>
<li>Use <code>&lt;br&gt;</code> for line breaks within related content (like addresses or poems)</li>
</ul>
<p>The <code>&lt;hr&gt;</code> element creates a horizontal rule — a thematic break between content sections. It's also self-closing:</p>
<pre><code>&lt;p&gt;Section one content&lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;Section two content&lt;/p&gt;</code></pre>
<p><strong>Important:</strong> Don't use multiple <code>&lt;br&gt;</code> tags to create spacing between paragraphs. Instead, use proper <code>&lt;p&gt;</code> elements and control spacing with CSS. This keeps your HTML semantic and maintainable.</p>`,
              challenge: {
                description: 'Create two paragraphs: "HTML is the language of the web." and "CSS makes it beautiful." Separate them with a horizontal rule.',
                starterCode: '<!-- Create paragraphs with a horizontal rule between them -->\n',
                expectedOutput: '<p>HTML is the language of the web.</p>\n<hr>\n<p>CSS makes it beautiful.</p>',
                hints: [
                  'Use <p> tags for each paragraph',
                  'Place <hr> between the paragraphs',
                  '<hr> is self-closing — no closing tag needed'
                ]
              },
              quiz: [
                {
                  question: 'What does the <br> element do?',
                  options: ['Creates a new paragraph', 'Creates a line break', 'Creates bold text', 'Creates a border'],
                  correct: 1
                },
                {
                  question: 'Which element creates a thematic break (horizontal line)?',
                  options: ['<br>', '<line>', '<hr>', '<break>'],
                  correct: 2
                },
                {
                  question: 'Does the <br> tag need a closing tag?',
                  options: ['Yes, always', 'No, it\'s self-closing', 'Only in HTML5', 'Depends on the browser'],
                  correct: 1
                },
                {
                  question: 'When should you use <br> instead of <p>?',
                  options: ['For all text', 'For line breaks within related content', 'To create spacing', 'Never'],
                  correct: 1
                }
              ]
            },
            {
              id: 'text-3',
              title: 'Bold, Italic & Emphasis',
              type: 'challenge',
              theory: `<h2>Bold, Italic & Emphasis</h2>
<p>HTML provides several elements for emphasizing text. It's important to understand the difference between <strong>semantic</strong> elements (which convey meaning) and <strong>presentational</strong> elements (which only affect appearance).</p>
<p><strong>Semantic emphasis elements:</strong></p>
<ul>
<li><code>&lt;strong&gt;</code> — Indicates strong importance. Browsers display it as bold, and screen readers may emphasize it vocally.</li>
<li><code>&lt;em&gt;</code> — Indicates emphasis (stress). Browsers display it as italic, and screen readers change their tone.</li>
</ul>
<p><strong>Presentational elements:</strong></p>
<ul>
<li><code>&lt;b&gt;</code> — Makes text bold without implying importance</li>
<li><code>&lt;i&gt;</code> — Makes text italic without implying emphasis (used for technical terms, foreign words, etc.)</li>
</ul>
<pre><code>&lt;p&gt;This is &lt;strong&gt;very important&lt;/strong&gt; information.&lt;/p&gt;
&lt;p&gt;You &lt;em&gt;must&lt;/em&gt; complete this step.&lt;/p&gt;
&lt;p&gt;The word &lt;i&gt;saudade&lt;/i&gt; is Portuguese.&lt;/p&gt;</code></pre>
<p><strong>Other useful text elements:</strong></p>
<ul>
<li><code>&lt;mark&gt;</code> — Highlights text (like a yellow marker)</li>
<li><code>&lt;small&gt;</code> — Represents fine print or side comments</li>
<li><code>&lt;del&gt;</code> — Shows deleted/removed text (strikethrough)</li>
<li><code>&lt;ins&gt;</code> — Shows inserted/added text (underline)</li>
</ul>
<p>Always prefer semantic elements (<code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>) over presentational ones (<code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>) when the text truly has importance or emphasis. This improves accessibility and SEO.</p>`,
              challenge: {
                description: 'Create a paragraph that says "HTML is the foundation of every website." Make "foundation" bold using <strong> and "every" italic using <em>.',
                starterCode: '<!-- Style text with semantic elements -->\n',
                expectedOutput: '<p>HTML is the <strong>foundation</strong> of <em>every</em> website.</p>',
                hints: [
                  'Wrap "foundation" in <strong> tags',
                  'Wrap "every" in <em> tags',
                  'Both elements go inside the <p> element'
                ]
              },
              quiz: [
                {
                  question: 'Which tag adds semantic importance (strong emphasis)?',
                  options: ['<b>', '<strong>', '<bold>', '<important>'],
                  correct: 1
                },
                {
                  question: 'What is the difference between <strong> and <b>?',
                  options: ['No difference', '<strong> conveys importance, <b> is visual only', '<b> is newer', '<strong> is deprecated'],
                  correct: 1
                },
                {
                  question: 'Which element highlights text like a marker?',
                  options: ['<highlight>', '<mark>', '<em>', '<color>'],
                  correct: 1
                },
                {
                  question: 'What does <del> display?',
                  options: ['Bold text', 'Underlined text', 'Strikethrough text', 'Deleted element'],
                  correct: 2
                }
              ]
            },
            {
              id: 'text-4',
              title: 'Subscript, Superscript & Special Text',
              type: 'challenge',
              theory: `<h2>Subscript, Superscript & Special Text</h2>
<p>HTML provides elements for displaying text in special positions and formats. These are particularly useful for mathematical formulas, chemical notations, and technical content.</p>
<p><strong>Subscript and Superscript:</strong></p>
<ul>
<li><code>&lt;sub&gt;</code> — Subscript text (appears slightly below the baseline). Used for chemical formulas: H<sub>2</sub>O</li>
<li><code>&lt;sup&gt;</code> — Superscript text (appears slightly above the baseline). Used for exponents: x<sup>2</sup></li>
</ul>
<pre><code>&lt;p&gt;Water is H&lt;sub&gt;2&lt;/sub&gt;O&lt;/p&gt;
&lt;p&gt;The area is r&lt;sup&gt;2&lt;/sup&gt;&lt;/p&gt;</code></pre>
<p><strong>Code and Technical Text:</strong></p>
<ul>
<li><code>&lt;code&gt;</code> — Displays inline code in a monospace font</li>
<li><code>&lt;pre&gt;</code> — Preformatted text that preserves whitespace and line breaks</li>
<li><code>&lt;kbd&gt;</code> — Represents keyboard input</li>
<li><code>&lt;samp&gt;</code> — Represents sample output from a program</li>
<li><code>&lt;var&gt;</code> — Represents a variable in a mathematical or programming context</li>
</ul>
<pre><code>&lt;p&gt;Press &lt;kbd&gt;Ctrl+S&lt;/kbd&gt; to save.&lt;/p&gt;
&lt;p&gt;Use the &lt;code&gt;console.log()&lt;/code&gt; function.&lt;/p&gt;</code></pre>
<p><strong>Quotation Elements:</strong></p>
<ul>
<li><code>&lt;blockquote&gt;</code> — For long, block-level quotations</li>
<li><code>&lt;q&gt;</code> — For short, inline quotations (adds quote marks automatically)</li>
<li><code>&lt;cite&gt;</code> — For referencing a creative work title</li>
<li><code>&lt;abbr&gt;</code> — For abbreviations (use title attribute for full form)</li>
</ul>`,
              challenge: {
                description: 'Create a paragraph showing the chemical formula for water: "The formula for water is H2O" where the 2 is subscript. Then create another paragraph showing "E = mc2" where the 2 is superscript.',
                starterCode: '<!-- Use subscript and superscript -->\n',
                expectedOutput: '<p>The formula for water is H<sub>2</sub>O</p>\n<p>E = mc<sup>2</sup></p>',
                hints: [
                  'Use <sub> for the 2 in H2O',
                  'Use <sup> for the 2 in mc2',
                  'The sub/sup tags go around the number only'
                ]
              },
              quiz: [
                {
                  question: 'Which tag is used for chemical formula subscripts?',
                  options: ['<sup>', '<sub>', '<small>', '<down>'],
                  correct: 1
                },
                {
                  question: 'Which element represents keyboard input?',
                  options: ['<key>', '<kbd>', '<input>', '<keyboard>'],
                  correct: 1
                },
                {
                  question: 'What does the <code> element do?',
                  options: ['Runs JavaScript', 'Displays code in monospace font', 'Creates a code editor', 'Links to a file'],
                  correct: 1
                },
                {
                  question: 'Which element adds quotation marks automatically?',
                  options: ['<blockquote>', '<quote>', '<q>', '<cite>'],
                  correct: 2
                }
              ]
            },
            {
              id: 'text-5',
              title: 'HTML Entities & Special Characters',
              type: 'challenge',
              theory: `<h2>HTML Entities & Special Characters</h2>
<p>Some characters have special meaning in HTML (like &lt; and &gt;), so you can't use them directly in your content. <strong>HTML entities</strong> are special codes that let you display these reserved characters and other symbols.</p>
<p>Entity format: <code>&amp;name;</code> or <code>&amp;#number;</code></p>
<p><strong>Essential HTML entities:</strong></p>
<table>
<tr><th>Character</th><th>Entity Name</th><th>Entity Number</th></tr>
<tr><td>&lt;</td><td>&amp;lt;</td><td>&amp;#60;</td></tr>
<tr><td>&gt;</td><td>&amp;gt;</td><td>&amp;#62;</td></tr>
<tr><td>&amp;</td><td>&amp;amp;</td><td>&amp;#38;</td></tr>
<tr><td>"</td><td>&amp;quot;</td><td>&amp;#34;</td></tr>
<tr><td> (non-breaking space)</td><td>&amp;nbsp;</td><td>&amp;#160;</td></tr>
</table>
<p><strong>Commonly used symbol entities:</strong></p>
<ul>
<li><code>&amp;copy;</code> — © Copyright symbol</li>
<li><code>&amp;reg;</code> — ® Registered trademark</li>
<li><code>&amp;trade;</code> — ™ Trademark</li>
<li><code>&amp;hearts;</code> — ♥ Heart</li>
<li><code>&amp;larr;</code> — ← Left arrow</li>
<li><code>&amp;rarr;</code> — → Right arrow</li>
<li><code>&amp;euro;</code> — € Euro sign</li>
</ul>
<p><strong>Why entities matter:</strong> If you write <code>&lt;p&gt;</code> in your content, the browser thinks it's an HTML tag. To display the literal text "&lt;p&gt;", you must write <code>&amp;lt;p&amp;gt;</code>. Entities ensure your content renders correctly and prevents HTML injection vulnerabilities.</p>
<p>The non-breaking space (<code>&amp;nbsp;</code>) is special — it prevents the browser from breaking a line at that point, keeping words together.</p>`,
              challenge: {
                description: 'Create a paragraph that displays the literal text: "Use <p> for paragraphs & <br> for line breaks" followed by another paragraph showing "© 2024 My Website"',
                starterCode: '<!-- Use HTML entities to display special characters -->\n',
                expectedOutput: '<p>Use &lt;p&gt; for paragraphs &amp; &lt;br&gt; for line breaks</p>\n<p>&copy; 2024 My Website</p>',
                hints: [
                  'Use &lt; for < and &gt; for >',
                  'Use &amp; for the ampersand',
                  'Use &copy; for the copyright symbol'
                ]
              },
              quiz: [
                {
                  question: 'How do you display a < character in HTML?',
                  options: ['<', '&lt;', '&#lt;', '\\<'],
                  correct: 1
                },
                {
                  question: 'What does &amp; represent?',
                  options: ['The word "and"', 'The & symbol', 'A line break', 'An ampersand entity start'],
                  correct: 1
                },
                {
                  question: 'Which entity represents the copyright symbol?',
                  options: ['&copyright;', '&copy;', '&cr;', '&(c);'],
                  correct: 1
                },
                {
                  question: 'Why are HTML entities necessary?',
                  options: ['They make code faster', 'They display reserved characters safely', 'They add styling', 'They are required by HTML5'],
                  correct: 1
                },
                {
                  question: 'What does &nbsp; prevent?',
                  options: ['Bold formatting', 'Line breaking at that space', 'Paragraph creation', 'Text wrapping entirely'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'links-images',
          title: 'Links & Images',
          lessons: [
            {
              id: 'links-1',
              title: 'Creating Hyperlinks',
              type: 'challenge',
              theory: `<h2>Creating Hyperlinks</h2>
<p>Hyperlinks are the foundation of the web — they connect pages together and allow users to navigate between documents. The <code>&lt;a&gt;</code> (anchor) element creates clickable links.</p>
<p><strong>Basic link syntax:</strong></p>
<pre><code>&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;</code></pre>
<p>The <code>href</code> (hypertext reference) attribute specifies where the link goes. The text between the tags is what users see and click.</p>
<p><strong>Types of links:</strong></p>
<ul>
<li><strong>Absolute URLs</strong> — Full web addresses: <code>href="https://www.google.com"</code></li>
<li><strong>Relative URLs</strong> — Paths relative to current page: <code>href="about.html"</code></li>
<li><strong>Email links</strong> — Opens email client: <code>href="mailto:info@example.com"</code></li>
<li><strong>Phone links</strong> — Initiates phone call: <code>href="tel:+1234567890"</code></li>
<li><strong>Anchor links</strong> — Jumps to page section: <code>href="#section-id"</code></li>
</ul>
<p><strong>Important attributes:</strong></p>
<ul>
<li><code>target="_blank"</code> — Opens link in a new tab</li>
<li><code>rel="noopener noreferrer"</code> — Security best practice when using target="_blank"</li>
<li><code>title</code> — Provides tooltip text on hover</li>
</ul>
<pre><code>&lt;a href="https://www.example.com" target="_blank" rel="noopener noreferrer"&gt;
  Open in New Tab
&lt;/a&gt;</code></pre>
<p>Links are styled differently by browsers — typically blue and underlined for unvisited, purple for visited. You can customize this with CSS.</p>`,
              challenge: {
                description: 'Create a link to "https://www.google.com" with the text "Search Google" that opens in a new tab.',
                starterCode: '<!-- Create a link that opens in a new tab -->\n',
                expectedOutput: '<a href="https://www.google.com" target="_blank">Search Google</a>',
                hints: [
                  'Use the <a> element with href attribute',
                  'Add target="_blank" to open in new tab',
                  'Put the link text between the tags'
                ]
              },
              quiz: [
                {
                  question: 'Which element creates a hyperlink?',
                  options: ['<link>', '<a>', '<href>', '<url>'],
                  correct: 1
                },
                {
                  question: 'What does href stand for?',
                  options: ['Hyper Resource File', 'Hypertext Reference', 'HTML Reference', 'Hyper Redirect Format'],
                  correct: 1
                },
                {
                  question: 'How do you open a link in a new tab?',
                  options: ['new="true"', 'target="_blank"', 'open="new"', 'tab="new"'],
                  correct: 1
                },
                {
                  question: 'Which link type starts with mailto:?',
                  options: ['Phone link', 'Email link', 'File link', 'Anchor link'],
                  correct: 1
                }
              ]
            },
            {
              id: 'links-2',
              title: 'Adding Images',
              type: 'challenge',
              theory: `<h2>Adding Images</h2>
<p>The <code>&lt;img&gt;</code> element embeds images into your web page. It's a self-closing element — it doesn't need a closing tag because it can't contain other content.</p>
<p><strong>Basic image syntax:</strong></p>
<pre><code>&lt;img src="photo.jpg" alt="Description of the image"&gt;</code></pre>
<p><strong>Required attributes:</strong></p>
<ul>
<li><code>src</code> — The path or URL to the image file</li>
<li><code>alt</code> — Alternative text describing the image (crucial for accessibility)</li>
</ul>
<p><strong>Optional but recommended attributes:</strong></p>
<ul>
<li><code>width</code> — Width in pixels or percentage</li>
<li><code>height</code> — Height in pixels</li>
<li><code>loading="lazy"</code> — Defers loading until the image is near the viewport</li>
</ul>
<pre><code>&lt;img src="hero.jpg" alt="Mountain landscape at sunset" width="800" height="600" loading="lazy"&gt;</code></pre>
<p><strong>Image file formats:</strong></p>
<ul>
<li><strong>JPEG (.jpg)</strong> — Best for photographs, doesn't support transparency</li>
<li><strong>PNG (.png)</strong> — Supports transparency, good for graphics and screenshots</li>
<li><strong>GIF (.gif)</strong> — Supports animation, limited to 256 colors</li>
<li><strong>WebP (.webp)</strong> — Modern format with better compression</li>
<li><strong>SVG (.svg)</strong> — Vector format, scales without losing quality</li>
</ul>
<p><strong>Why alt text matters:</strong></p>
<ul>
<li>Screen readers read it aloud for visually impaired users</li>
<li>Displays when images fail to load</li>
<li>Helps search engines understand image content</li>
<li>Use descriptive text, not "image of" or "picture of"</li>
</ul>`,
              challenge: {
                description: 'Add an image with src="landscape.jpg", alt text "Beautiful mountain landscape", width of 600, and height of 400.',
                starterCode: '<!-- Add an image element -->\n',
                expectedOutput: '<img src="landscape.jpg" alt="Beautiful mountain landscape" width="600" height="400">',
                hints: [
                  'The img tag is self-closing',
                  'Include src, alt, width, and height attributes',
                  'No closing tag is needed'
                ]
              },
              quiz: [
                {
                  question: 'Which attribute specifies the image file path?',
                  options: ['href', 'src', 'url', 'path'],
                  correct: 1
                },
                {
                  question: 'Why is the alt attribute important?',
                  options: ['It makes images load faster', 'It provides accessibility and fallback text', 'It adds styling', 'It\'s optional and not important'],
                  correct: 1
                },
                {
                  question: 'Which image format supports transparency?',
                  options: ['JPEG', 'PNG', 'BMP', 'TIFF'],
                  correct: 1
                },
                {
                  question: 'What does loading="lazy" do?',
                  options: ['Loads image slowly', 'Defers loading until near viewport', 'Reduces image quality', 'Disables image caching'],
                  correct: 1
                }
              ]
            },
            {
              id: 'links-3',
              title: 'Image Links & Figure Element',
              type: 'challenge',
              theory: `<h2>Image Links & Figure Element</h2>
<p>You can combine links and images to create clickable images — a common pattern on the web for thumbnails, logos, and image galleries.</p>
<p><strong>Creating a clickable image:</strong></p>
<pre><code>&lt;a href="https://www.example.com"&gt;
  &lt;img src="logo.png" alt="Company Logo"&gt;
&lt;/a&gt;</code></pre>
<p>Simply wrap an <code>&lt;img&gt;</code> element inside an <code>&lt;a&gt;</code> element. When users click the image, they'll navigate to the link destination.</p>
<p><strong>The &lt;figure&gt; and &lt;figcaption&gt; elements:</strong></p>
<p>HTML5 introduced the <code>&lt;figure&gt;</code> element to semantically group an image with its caption. This is much better than using a plain <code>&lt;div&gt;</code> with text.</p>
<pre><code>&lt;figure&gt;
  &lt;img src="chart.png" alt="Sales data for Q4 2024"&gt;
  &lt;figcaption&gt;Figure 1: Quarterly sales report showing 20% growth&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
<p><strong>Benefits of using &lt;figure&gt;:</strong></p>
<ul>
<li>Semantically associates image with its caption</li>
<li>Can contain multiple images or other content</li>
<li>Screen readers understand the relationship</li>
<li>Search engines recognize the grouped content</li>
</ul>
<p>The <code>&lt;figcaption&gt;</code> can appear before or after the image inside <code>&lt;figure&gt;</code>. While <code>&lt;figure&gt;</code> is most commonly used with images, it can also wrap code snippets, diagrams, poems, or any self-contained content referenced from the main text.</p>`,
              challenge: {
                description: 'Create a figure element containing an image (src="sunset.jpg", alt="Ocean sunset") with a figcaption that says "A beautiful sunset over the Pacific Ocean".',
                starterCode: '<!-- Create a figure with image and caption -->\n',
                expectedOutput: '<figure>\n<img src="sunset.jpg" alt="Ocean sunset">\n<figcaption>A beautiful sunset over the Pacific Ocean</figcaption>\n</figure>',
                hints: [
                  'Wrap everything in <figure> tags',
                  'Place the <img> inside the figure',
                  'Add <figcaption> after the image'
                ]
              },
              quiz: [
                {
                  question: 'How do you make an image clickable?',
                  options: ['Add click attribute to img', 'Wrap img in an <a> tag', 'Use <link> instead', 'Add href to img'],
                  correct: 1
                },
                {
                  question: 'What is <figcaption> used for?',
                  options: ['Image alt text', 'A caption for a figure', 'Image title tooltip', 'Image file name'],
                  correct: 1
                },
                {
                  question: 'Where must <figcaption> be placed?',
                  options: ['Inside <figure>', 'Inside <img>', 'In the <head>', 'Anywhere on the page'],
                  correct: 0
                },
                {
                  question: 'Can <figure> contain content other than images?',
                  options: ['No, images only', 'Yes, any self-contained content', 'Only images and videos', 'Only media elements'],
                  correct: 1
                }
              ]
            },
            {
              id: 'links-4',
              title: 'Navigation & Internal Links',
              type: 'challenge',
              theory: `<h2>Navigation & Internal Links</h2>
<p>Internal links allow users to navigate within the same page or between pages of your website. Combined with the <code>&lt;nav&gt;</code> element, they create effective navigation systems.</p>
<p><strong>Anchor links (same-page navigation):</strong></p>
<p>You can link to specific sections of a page using IDs:</p>
<pre><code>&lt;!-- Navigation links --&gt;
&lt;nav&gt;
  &lt;a href="#about"&gt;About&lt;/a&gt;
  &lt;a href="#services"&gt;Services&lt;/a&gt;
  &lt;a href="#contact"&gt;Contact&lt;/a&gt;
&lt;/nav&gt;

&lt;!-- Target sections --&gt;
&lt;section id="about"&gt;
  &lt;h2&gt;About Us&lt;/h2&gt;
&lt;/section&gt;</code></pre>
<p>The <code>#</code> symbol in the href tells the browser to look for an element with that ID on the current page. Clicking the link smoothly scrolls to that section.</p>
<p><strong>Relative links between pages:</strong></p>
<ul>
<li><code>href="about.html"</code> — Same directory</li>
<li><code>href="pages/about.html"</code> — Subdirectory</li>
<li><code>href="../index.html"</code> — Parent directory</li>
</ul>
<p><strong>The &lt;nav&gt; element:</strong></p>
<p>HTML5's <code>&lt;nav&gt;</code> element wraps navigation links, telling browsers and screen readers that the contained links are for site navigation:</p>
<pre><code>&lt;nav&gt;
  &lt;a href="index.html"&gt;Home&lt;/a&gt;
  &lt;a href="about.html"&gt;About&lt;/a&gt;
  &lt;a href="contact.html"&gt;Contact&lt;/a&gt;
&lt;/nav&gt;</code></pre>
<p>Using <code>&lt;nav&gt;</code> improves accessibility because screen readers can skip directly to navigation or skip past it.</p>`,
              challenge: {
                description: 'Create a nav element with three links: "Home" linking to "index.html", "About" linking to "#about", and "Contact" linking to "contact.html".',
                starterCode: '<!-- Create a navigation with three links -->\n',
                expectedOutput: '<nav>\n<a href="index.html">Home</a>\n<a href="#about">About</a>\n<a href="contact.html">Contact</a>\n</nav>',
                hints: [
                  'Wrap all links in a <nav> element',
                  'Use # prefix for same-page anchors',
                  'Relative links don\'t need the full URL'
                ]
              },
              quiz: [
                {
                  question: 'What does the # symbol in a link href indicate?',
                  options: ['External link', 'An ID on the current page', 'A comment', 'A file path'],
                  correct: 1
                },
                {
                  question: 'What does ../ mean in a relative path?',
                  options: ['Current directory', 'Parent directory', 'Root directory', 'Home directory'],
                  correct: 1
                },
                {
                  question: 'What is the purpose of the <nav> element?',
                  options: ['Styling links', 'Indicating navigation links', 'Creating buttons', 'Adding animations'],
                  correct: 1
                },
                {
                  question: 'Which link navigates to an element with id="contact"?',
                  options: ['href="contact"', 'href="#contact"', 'href="@contact"', 'href=".contact"'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'lists',
          title: 'Lists',
          lessons: [
            {
              id: 'lists-1',
              title: 'Ordered & Unordered Lists',
              type: 'challenge',
              theory: `<h2>Ordered & Unordered Lists</h2>
<p>Lists are essential for organizing related items. HTML provides two main list types: <strong>unordered lists</strong> (bullet points) and <strong>ordered lists</strong> (numbered items).</p>
<p><strong>Unordered Lists (<code>&lt;ul&gt;</code>):</strong></p>
<p>Used when the order doesn't matter — like a shopping list or feature list:</p>
<pre><code>&lt;ul&gt;
  &lt;li&gt;Apples&lt;/li&gt;
  &lt;li&gt;Bananas&lt;/li&gt;
  &lt;li&gt;Oranges&lt;/li&gt;
&lt;/ul&gt;</code></pre>
<p><strong>Ordered Lists (<code>&lt;ol&gt;</code>):</strong></p>
<p>Used when sequence matters — like instructions or rankings:</p>
<pre><code>&lt;ol&gt;
  &lt;li&gt;Preheat the oven&lt;/li&gt;
  &lt;li&gt;Mix ingredients&lt;/li&gt;
  &lt;li&gt;Bake for 30 minutes&lt;/li&gt;
&lt;/ol&gt;</code></pre>
<p>Both list types use <code>&lt;li&gt;</code> (list item) for each item inside them.</p>
<p><strong>Ordered list attributes:</strong></p>
<ul>
<li><code>type="A"</code> — Uppercase letters (A, B, C)</li>
<li><code>type="a"</code> — Lowercase letters (a, b, c)</li>
<li><code>type="I"</code> — Roman numerals (I, II, III)</li>
<li><code>start="5"</code> — Start numbering from 5</li>
<li><code>reversed</code> — Count backwards</li>
</ul>
<p><strong>Important rules:</strong></p>
<ul>
<li>Only <code>&lt;li&gt;</code> elements should be direct children of <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code></li>
<li><code>&lt;li&gt;</code> can contain any other HTML elements (paragraphs, links, images, etc.)</li>
<li>Lists can be nested inside other lists</li>
</ul>`,
              challenge: {
                description: 'Create an unordered list with three programming languages: "JavaScript", "Python", "Java". Then create an ordered list with three steps: "Learn HTML", "Learn CSS", "Learn JavaScript".',
                starterCode: '<!-- Create an unordered and an ordered list -->\n',
                expectedOutput: '<ul>\n<li>JavaScript</li>\n<li>Python</li>\n<li>Java</li>\n</ul>\n<ol>\n<li>Learn HTML</li>\n<li>Learn CSS</li>\n<li>Learn JavaScript</li>\n</ol>',
                hints: [
                  'Use <ul> for unordered (bullet) lists',
                  'Use <ol> for ordered (numbered) lists',
                  'Each item goes in <li> tags'
                ]
              },
              quiz: [
                {
                  question: 'Which element creates a bulleted list?',
                  options: ['<ol>', '<ul>', '<list>', '<bl>'],
                  correct: 1
                },
                {
                  question: 'What does <li> stand for?',
                  options: ['Link item', 'List item', 'Line item', 'Layout item'],
                  correct: 1
                },
                {
                  question: 'Which attribute changes ordered list numbering to letters?',
                  options: ['style="letters"', 'numbering="alpha"', 'type="A"', 'format="alpha"'],
                  correct: 2
                },
                {
                  question: 'What should be the only direct child of <ul>?',
                  options: ['<p>', '<div>', '<li>', '<span>'],
                  correct: 2
                }
              ]
            },
            {
              id: 'lists-2',
              title: 'Nested Lists & Description Lists',
              type: 'challenge',
              theory: `<h2>Nested Lists & Description Lists</h2>
<p><strong>Nested lists</strong> allow you to create sub-items within a list. This is useful for hierarchical data like site maps, outlines, or categorized items.</p>
<pre><code>&lt;ul&gt;
  &lt;li&gt;Fruits
    &lt;ul&gt;
      &lt;li&gt;Apple&lt;/li&gt;
      &lt;li&gt;Banana&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Vegetables
    &lt;ul&gt;
      &lt;li&gt;Carrot&lt;/li&gt;
      &lt;li&gt;Broccoli&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
<p>The nested list goes <em>inside</em> the parent <code>&lt;li&gt;</code> element. You can nest any combination of <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>.</p>
<p><strong>Description Lists (<code>&lt;dl&gt;</code>):</strong></p>
<p>A third type of list for term-definition pairs — perfect for glossaries, FAQs, or metadata:</p>
<pre><code>&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;HyperText Markup Language - the structure of web pages&lt;/dd&gt;
  &lt;dt&gt;CSS&lt;/dt&gt;
  &lt;dd&gt;Cascading Style Sheets - the presentation of web pages&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
<p><strong>Description list elements:</strong></p>
<ul>
<li><code>&lt;dl&gt;</code> — Description list (container)</li>
<li><code>&lt;dt&gt;</code> — Description term (the word or phrase being defined)</li>
<li><code>&lt;dd&gt;</code> — Description details (the definition or explanation)</li>
</ul>
<p>A single term can have multiple definitions, and multiple terms can share one definition. Description lists are often overlooked but are semantically perfect for key-value type information.</p>`,
              challenge: {
                description: 'Create a description list with two terms: "HTML" defined as "The language of web structure" and "CSS" defined as "The language of web styling".',
                starterCode: '<!-- Create a description list -->\n',
                expectedOutput: '<dl>\n<dt>HTML</dt>\n<dd>The language of web structure</dd>\n<dt>CSS</dt>\n<dd>The language of web styling</dd>\n</dl>',
                hints: [
                  'Use <dl> for the description list container',
                  'Use <dt> for each term',
                  'Use <dd> for each definition'
                ]
              },
              quiz: [
                {
                  question: 'Where should a nested list be placed?',
                  options: ['After the parent list', 'Inside a <li> element', 'Before the parent list', 'Outside any list'],
                  correct: 1
                },
                {
                  question: 'What does <dt> represent?',
                  options: ['Data table', 'Description term', 'Definition text', 'Document title'],
                  correct: 1
                },
                {
                  question: 'What does <dd> represent?',
                  options: ['Data definition', 'Description details', 'Document data', 'Div description'],
                  correct: 1
                },
                {
                  question: 'Can you nest an <ol> inside a <ul>?',
                  options: ['No, they must match', 'Yes, any combination works', 'Only <ul> inside <ol>', 'Only with special attributes'],
                  correct: 1
                }
              ]
            },
            {
              id: 'lists-3',
              title: 'Practical List Patterns',
              type: 'challenge',
              theory: `<h2>Practical List Patterns</h2>
<p>Lists are used in many real-world web design patterns beyond simple bullet points. Understanding these patterns helps you build professional websites.</p>
<p><strong>Navigation menus</strong> are typically built with unordered lists:</p>
<pre><code>&lt;nav&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
<p><strong>Breadcrumb navigation</strong> uses ordered lists (since order matters):</p>
<pre><code>&lt;ol class="breadcrumb"&gt;
  &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="/products"&gt;Products&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;Current Page&lt;/li&gt;
&lt;/ol&gt;</code></pre>
<p><strong>Feature lists</strong> with icons or checks:</p>
<pre><code>&lt;ul class="features"&gt;
  &lt;li&gt;✓ Free shipping on orders over $50&lt;/li&gt;
  &lt;li&gt;✓ 30-day money-back guarantee&lt;/li&gt;
  &lt;li&gt;✓ 24/7 customer support&lt;/li&gt;
&lt;/ul&gt;</code></pre>
<p><strong>Social media link lists:</strong></p>
<pre><code>&lt;ul class="social-links"&gt;
  &lt;li&gt;&lt;a href="https://twitter.com"&gt;Twitter&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="https://github.com"&gt;GitHub&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
<p>With CSS, these same HTML list structures can be transformed into horizontal navigation bars, card grids, timeline displays, and more. The semantic HTML stays the same — only the visual presentation changes. This separation of concerns is a fundamental principle of web development.</p>`,
              challenge: {
                description: 'Create a navigation menu using a nav element containing an unordered list with three list items, each containing a link: "Home" (href="/"), "Blog" (href="/blog"), "Contact" (href="/contact").',
                starterCode: '<!-- Create a nav menu with links in a list -->\n',
                expectedOutput: '<nav>\n<ul>\n<li><a href="/">Home</a></li>\n<li><a href="/blog">Blog</a></li>\n<li><a href="/contact">Contact</a></li>\n</ul>\n</nav>',
                hints: [
                  'Wrap everything in <nav>',
                  'Put an <ul> inside the nav',
                  'Each <li> contains an <a> link'
                ]
              },
              quiz: [
                {
                  question: 'Why are navigation menus built with lists?',
                  options: ['It\'s required by HTML spec', 'It provides semantic structure for related links', 'Lists are faster to render', 'CSS only works with lists'],
                  correct: 1
                },
                {
                  question: 'Which list type is best for breadcrumb navigation?',
                  options: ['<ul> (unordered)', '<ol> (ordered)', '<dl> (description)', 'Any type works equally'],
                  correct: 1
                },
                {
                  question: 'Can list items contain links and other HTML elements?',
                  options: ['No, text only', 'Yes, any HTML content', 'Only inline elements', 'Only text and images'],
                  correct: 1
                },
                {
                  question: 'How do you visually transform a vertical list into a horizontal navigation?',
                  options: ['Change to <ol>', 'Use different HTML', 'Apply CSS styling', 'Use the horizontal attribute'],
                  correct: 2
                }
              ]
            }
          ]
        },
        {
          id: 'tables',
          title: 'Tables',
          lessons: [
            {
              id: 'tables-1',
              title: 'Basic Table Structure',
              type: 'challenge',
              theory: `<h2>Basic Table Structure</h2>
<p>HTML tables display data in rows and columns. They're perfect for tabular data like schedules, statistics, price comparisons, and spreadsheet-like information.</p>
<p><strong>Core table elements:</strong></p>
<ul>
<li><code>&lt;table&gt;</code> — The table container</li>
<li><code>&lt;tr&gt;</code> — Table row</li>
<li><code>&lt;th&gt;</code> — Table header cell (bold and centered by default)</li>
<li><code>&lt;td&gt;</code> — Table data cell</li>
</ul>
<pre><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Name&lt;/th&gt;
    &lt;th&gt;Age&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Alice&lt;/td&gt;
    &lt;td&gt;25&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Bob&lt;/td&gt;
    &lt;td&gt;30&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
<p><strong>Important concepts:</strong></p>
<ul>
<li>Each <code>&lt;tr&gt;</code> creates a new row</li>
<li>The number of <code>&lt;th&gt;</code>/<code>&lt;td&gt;</code> cells in each row should be consistent</li>
<li><code>&lt;th&gt;</code> is used for headers — it tells screen readers this cell is a label for other cells</li>
<li>Tables should ONLY be used for tabular data, never for page layout</li>
</ul>
<p><strong>Accessibility tip:</strong> Always use <code>&lt;th&gt;</code> for headers rather than styling <code>&lt;td&gt;</code> elements to look like headers. Screen readers use <code>&lt;th&gt;</code> to associate data cells with their headers, making tables navigable for visually impaired users.</p>`,
              challenge: {
                description: 'Create a table with a header row containing "Product" and "Price", then two data rows: "Laptop" / "$999" and "Phone" / "$699".',
                starterCode: '<!-- Create a basic table -->\n',
                expectedOutput: '<table>\n<tr>\n<th>Product</th>\n<th>Price</th>\n</tr>\n<tr>\n<td>Laptop</td>\n<td>$999</td>\n</tr>\n<tr>\n<td>Phone</td>\n<td>$699</td>\n</tr>\n</table>',
                hints: [
                  'Start with <table> and add <tr> for each row',
                  'Use <th> for the header row cells',
                  'Use <td> for data row cells'
                ]
              },
              quiz: [
                {
                  question: 'What does <tr> stand for?',
                  options: ['Table reference', 'Table row', 'Text row', 'Table record'],
                  correct: 1
                },
                {
                  question: 'What is the difference between <th> and <td>?',
                  options: ['No difference', '<th> is for headers, <td> is for data', '<th> is larger', '<td> is newer'],
                  correct: 1
                },
                {
                  question: 'Should tables be used for page layout?',
                  options: ['Yes, it\'s best practice', 'No, only for tabular data', 'Sometimes for complex layouts', 'Yes, but only in HTML5'],
                  correct: 1
                },
                {
                  question: 'How do you create a new column in a table?',
                  options: ['Add a <col> element', 'Add another <td>/<th> in each row', 'Use the columns attribute', 'Add a <tc> element'],
                  correct: 1
                }
              ]
            },
            {
              id: 'tables-2',
              title: 'Table Sections & Caption',
              type: 'challenge',
              theory: `<h2>Table Sections & Caption</h2>
<p>For better organization and accessibility, HTML provides elements to divide tables into logical sections: header, body, and footer.</p>
<p><strong>Table section elements:</strong></p>
<ul>
<li><code>&lt;thead&gt;</code> — Groups the header rows</li>
<li><code>&lt;tbody&gt;</code> — Groups the main data rows</li>
<li><code>&lt;tfoot&gt;</code> — Groups footer rows (totals, summaries)</li>
<li><code>&lt;caption&gt;</code> — Provides a title/description for the table</li>
</ul>
<pre><code>&lt;table&gt;
  &lt;caption&gt;Monthly Sales Report&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Month&lt;/th&gt;
      &lt;th&gt;Revenue&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;January&lt;/td&gt;
      &lt;td&gt;$10,000&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;February&lt;/td&gt;
      &lt;td&gt;$12,000&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;td&gt;Total&lt;/td&gt;
      &lt;td&gt;$22,000&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</code></pre>
<p><strong>Benefits of table sections:</strong></p>
<ul>
<li>Screen readers can navigate sections independently</li>
<li>Browsers can scroll tbody while keeping thead/tfoot visible</li>
<li>CSS can style each section differently</li>
<li>The caption provides context for the entire table</li>
</ul>
<p>The <code>&lt;caption&gt;</code> should be the first child of <code>&lt;table&gt;</code>. It's visible to all users and announced by screen readers before reading table data.</p>`,
              challenge: {
                description: 'Create a table with caption "Student Grades", a thead with headers "Name" and "Grade", a tbody with one row: "Alice" and "A+", and a tfoot with "Average" and "A".',
                starterCode: '<!-- Create a table with sections -->\n',
                expectedOutput: '<table>\n<caption>Student Grades</caption>\n<thead>\n<tr>\n<th>Name</th>\n<th>Grade</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Alice</td>\n<td>A+</td>\n</tr>\n</tbody>\n<tfoot>\n<tr>\n<td>Average</td>\n<td>A</td>\n</tr>\n</tfoot>\n</table>',
                hints: [
                  'Caption goes first, right after <table>',
                  'Wrap header row in <thead>',
                  'Wrap data rows in <tbody>',
                  'Wrap footer row in <tfoot>'
                ]
              },
              quiz: [
                {
                  question: 'Where should the <caption> element be placed?',
                  options: ['Before <table>', 'First child of <table>', 'Inside <thead>', 'After </table>'],
                  correct: 1
                },
                {
                  question: 'What is <tbody> used for?',
                  options: ['Bold text in tables', 'The main data rows', 'Table borders', 'Table background'],
                  correct: 1
                },
                {
                  question: 'What content typically goes in <tfoot>?',
                  options: ['Page footer links', 'Totals and summaries', 'Footnotes', 'Copyright info'],
                  correct: 1
                },
                {
                  question: 'What benefit do table sections provide for long tables?',
                  options: ['Faster loading', 'Scrollable body with fixed header/footer', 'Smaller file size', 'Better colors'],
                  correct: 1
                }
              ]
            },
            {
              id: 'tables-3',
              title: 'Spanning Rows & Columns',
              type: 'challenge',
              theory: `<h2>Spanning Rows & Columns</h2>
<p>Sometimes you need a cell to stretch across multiple columns or rows. HTML provides the <code>colspan</code> and <code>rowspan</code> attributes for this purpose.</p>
<p><strong>Column spanning (colspan):</strong></p>
<p>Makes a cell stretch horizontally across multiple columns:</p>
<pre><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th colspan="2"&gt;Full Name&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;First&lt;/td&gt;
    &lt;td&gt;Last&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
<p><strong>Row spanning (rowspan):</strong></p>
<p>Makes a cell stretch vertically across multiple rows:</p>
<pre><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;td rowspan="2"&gt;Category A&lt;/td&gt;
    &lt;td&gt;Item 1&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Item 2&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
<p><strong>Key rules:</strong></p>
<ul>
<li>When a cell spans 2 columns, the row needs one fewer <code>&lt;td&gt;</code>/<code>&lt;th&gt;</code></li>
<li>When a cell spans 2 rows, the next row needs one fewer cell in that position</li>
<li>The total "cell units" in each row must still add up correctly</li>
<li>You can combine colspan and rowspan on the same cell</li>
</ul>
<p><strong>Common use cases:</strong></p>
<ul>
<li>Merged header cells spanning sub-columns</li>
<li>Category labels spanning multiple data rows</li>
<li>Footer totals spanning the full width</li>
</ul>`,
              challenge: {
                description: 'Create a table where the first row has a header "Schedule" spanning 2 columns (colspan="2"), then a second row with "Monday" and "Math", and a third row with "Tuesday" and "Science".',
                starterCode: '<!-- Create a table with colspan -->\n',
                expectedOutput: '<table>\n<tr>\n<th colspan="2">Schedule</th>\n</tr>\n<tr>\n<td>Monday</td>\n<td>Math</td>\n</tr>\n<tr>\n<td>Tuesday</td>\n<td>Science</td>\n</tr>\n</table>',
                hints: [
                  'The first row only has one cell that spans 2 columns',
                  'Use colspan="2" on the <th> element',
                  'Subsequent rows have their normal 2 cells'
                ]
              },
              quiz: [
                {
                  question: 'What does colspan="3" do?',
                  options: ['Creates 3 columns', 'Spans 3 rows', 'Spans 3 columns', 'Sets column width to 3'],
                  correct: 2
                },
                {
                  question: 'If a cell has rowspan="2", what happens to the next row?',
                  options: ['It gets an extra cell', 'It needs one fewer cell in that position', 'Nothing changes', 'The row is skipped'],
                  correct: 1
                },
                {
                  question: 'Can you use both colspan and rowspan on the same cell?',
                  options: ['No', 'Yes', 'Only on <th>', 'Only in <thead>'],
                  correct: 1
                },
                {
                  question: 'What is a common use case for colspan in table footers?',
                  options: ['Adding borders', 'Spanning a total across all columns', 'Creating empty cells', 'Hiding columns'],
                  correct: 1
                }
              ]
            },
            {
              id: 'tables-4',
              title: 'Accessible Tables',
              type: 'challenge',
              theory: `<h2>Accessible Tables</h2>
<p>Making tables accessible ensures that all users, including those using screen readers, can understand and navigate your data. Here are the key techniques:</p>
<p><strong>The scope attribute:</strong></p>
<p>Tells screen readers whether a header applies to a row or column:</p>
<pre><code>&lt;thead&gt;
  &lt;tr&gt;
    &lt;th scope="col"&gt;Name&lt;/th&gt;
    &lt;th scope="col"&gt;Price&lt;/th&gt;
  &lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
  &lt;tr&gt;
    &lt;th scope="row"&gt;Widget&lt;/th&gt;
    &lt;td&gt;$10&lt;/td&gt;
  &lt;/tr&gt;
&lt;/tbody&gt;</code></pre>
<p><strong>Scope values:</strong></p>
<ul>
<li><code>scope="col"</code> — Header for the entire column below it</li>
<li><code>scope="row"</code> — Header for the entire row beside it</li>
<li><code>scope="colgroup"</code> — Header for a group of columns</li>
<li><code>scope="rowgroup"</code> — Header for a group of rows</li>
</ul>
<p><strong>Other accessibility features:</strong></p>
<ul>
<li><code>&lt;caption&gt;</code> — Always include to describe the table's purpose</li>
<li><code>aria-describedby</code> — Links to a longer description if needed</li>
<li>Keep tables simple — complex spanning makes navigation difficult</li>
<li>Don't use tables for layout — only for actual data</li>
</ul>
<p><strong>Summary:</strong> Use <code>&lt;th&gt;</code> with <code>scope</code>, include <code>&lt;caption&gt;</code>, use proper sections (<code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>), and keep the structure as simple as possible. These practices help screen reader users understand relationships between cells.</p>`,
              challenge: {
                description: 'Create an accessible table with caption "Price List". The thead should have two th elements with scope="col": "Item" and "Cost". The tbody should have one row with a th (scope="row") saying "Book" and a td saying "$15".',
                starterCode: '<!-- Create an accessible table with scope attributes -->\n',
                expectedOutput: '<table>\n<caption>Price List</caption>\n<thead>\n<tr>\n<th scope="col">Item</th>\n<th scope="col">Cost</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<th scope="row">Book</th>\n<td>$15</td>\n</tr>\n</tbody>\n</table>',
                hints: [
                  'Add scope="col" to column headers in thead',
                  'Add scope="row" to row headers in tbody',
                  'Include a caption element'
                ]
              },
              quiz: [
                {
                  question: 'What does scope="col" indicate?',
                  options: ['A column will be collapsed', 'The header applies to the column', 'The column has color', 'A column is created'],
                  correct: 1
                },
                {
                  question: 'When should you use scope="row"?',
                  options: ['On every <td>', 'On <th> elements that label a row', 'On <tr> elements', 'Never in modern HTML'],
                  correct: 1
                },
                {
                  question: 'What is the most important accessibility feature for tables?',
                  options: ['Colors', 'Using <th> with scope for headers', 'Borders', 'Width attributes'],
                  correct: 1
                },
                {
                  question: 'Why should complex spanning be minimized?',
                  options: ['It slows rendering', 'It makes screen reader navigation difficult', 'It breaks CSS', 'It\'s not valid HTML5'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'forms-1',
          title: 'Forms Part 1',
          lessons: [
            {
              id: 'forms1-1',
              title: 'Form Basics & Text Inputs',
              type: 'challenge',
              theory: `<h2>Form Basics & Text Inputs</h2>
<p>HTML forms allow users to submit data to a server. They're used for login pages, search bars, registration forms, contact forms, and much more. The <code>&lt;form&gt;</code> element wraps all form controls.</p>
<pre><code>&lt;form action="/submit" method="POST"&gt;
  &lt;label for="name"&gt;Name:&lt;/label&gt;
  &lt;input type="text" id="name" name="name"&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
<p><strong>Key form attributes:</strong></p>
<ul>
<li><code>action</code> — URL where form data is sent</li>
<li><code>method</code> — HTTP method (GET or POST)</li>
</ul>
<p><strong>The &lt;input&gt; element:</strong></p>
<p>The most versatile form element. Its <code>type</code> attribute determines what kind of input it creates:</p>
<ul>
<li><code>type="text"</code> — Single-line text input</li>
<li><code>type="password"</code> — Masked text input</li>
<li><code>type="email"</code> — Email with validation</li>
<li><code>type="number"</code> — Numeric input with arrows</li>
<li><code>type="tel"</code> — Phone number input</li>
</ul>
<p><strong>Important input attributes:</strong></p>
<ul>
<li><code>name</code> — Identifies the data when submitted (required!)</li>
<li><code>id</code> — Connects to the label's <code>for</code> attribute</li>
<li><code>placeholder</code> — Hint text shown when empty</li>
<li><code>required</code> — Makes the field mandatory</li>
<li><code>value</code> — Pre-fills the input with a value</li>
</ul>
<p><strong>Labels are essential:</strong> Always pair inputs with <code>&lt;label&gt;</code> elements. The <code>for</code> attribute on the label must match the <code>id</code> of the input. This improves accessibility and allows clicking the label to focus the input.</p>`,
              challenge: {
                description: 'Create a form with action="/login" and method="POST". Include a label "Email:" with a corresponding email input (id="email", name="email", required), and a submit button saying "Log In".',
                starterCode: '<!-- Create a login form -->\n',
                expectedOutput: '<form action="/login" method="POST">\n<label for="email">Email:</label>\n<input type="email" id="email" name="email" required>\n<button type="submit">Log In</button>\n</form>',
                hints: [
                  'The form needs action and method attributes',
                  'Label\'s for must match input\'s id',
                  'Use type="email" for email validation',
                  'Add the required attribute (no value needed)'
                ]
              },
              quiz: [
                {
                  question: 'What attribute specifies where form data is sent?',
                  options: ['method', 'action', 'target', 'submit'],
                  correct: 1
                },
                {
                  question: 'Why is the name attribute important on inputs?',
                  options: ['For styling', 'It identifies the data when submitted', 'It\'s optional', 'For JavaScript only'],
                  correct: 1
                },
                {
                  question: 'How do you connect a label to an input?',
                  options: ['Put them next to each other', 'Match label\'s for with input\'s id', 'Use the link attribute', 'Wrap label around input'],
                  correct: 1
                },
                {
                  question: 'Which input type provides built-in email validation?',
                  options: ['type="text"', 'type="mail"', 'type="email"', 'type="validate"'],
                  correct: 2
                }
              ]
            },
            {
              id: 'forms1-2',
              title: 'Checkboxes & Radio Buttons',
              type: 'challenge',
              theory: `<h2>Checkboxes & Radio Buttons</h2>
<p>Checkboxes and radio buttons let users select options. The key difference: checkboxes allow multiple selections, while radio buttons allow only one selection within a group.</p>
<p><strong>Checkboxes (<code>type="checkbox"</code>):</strong></p>
<pre><code>&lt;label&gt;
  &lt;input type="checkbox" name="skills" value="html"&gt; HTML
&lt;/label&gt;
&lt;label&gt;
  &lt;input type="checkbox" name="skills" value="css"&gt; CSS
&lt;/label&gt;
&lt;label&gt;
  &lt;input type="checkbox" name="skills" value="js" checked&gt; JavaScript
&lt;/label&gt;</code></pre>
<p>Users can check multiple checkboxes. The <code>checked</code> attribute pre-selects a checkbox.</p>
<p><strong>Radio Buttons (<code>type="radio"</code>):</strong></p>
<pre><code>&lt;label&gt;
  &lt;input type="radio" name="color" value="red"&gt; Red
&lt;/label&gt;
&lt;label&gt;
  &lt;input type="radio" name="color" value="blue"&gt; Blue
&lt;/label&gt;
&lt;label&gt;
  &lt;input type="radio" name="color" value="green"&gt; Green
&lt;/label&gt;</code></pre>
<p><strong>Critical rule for radio buttons:</strong> All radio buttons in the same group MUST share the same <code>name</code> attribute. This is what makes them mutually exclusive — selecting one deselects others in the group.</p>
<p><strong>The value attribute:</strong></p>
<ul>
<li>Specifies what data is sent when the form is submitted</li>
<li>Unlike text inputs where the user types the value, checkboxes and radios send their <code>value</code> attribute</li>
<li>If no value is set, "on" is sent by default</li>
</ul>
<p><strong>Wrapping pattern:</strong> You can wrap the input inside the label element (as shown above). This eliminates the need for for/id matching and makes the entire label text clickable.</p>`,
              challenge: {
                description: 'Create a group of three radio buttons for selecting a size. All should have name="size". Values should be "small", "medium", "large" with labels "Small", "Medium", "Large". Pre-select "medium".',
                starterCode: '<!-- Create radio button group for size selection -->\n',
                expectedOutput: '<label><input type="radio" name="size" value="small"> Small</label>\n<label><input type="radio" name="size" value="medium" checked> Medium</label>\n<label><input type="radio" name="size" value="large"> Large</label>',
                hints: [
                  'All radios need the same name to form a group',
                  'Use value attribute for submitted data',
                  'Add checked attribute to pre-select medium',
                  'Wrap each input in a label'
                ]
              },
              quiz: [
                {
                  question: 'What makes radio buttons mutually exclusive?',
                  options: ['The type attribute', 'Sharing the same name attribute', 'The radio attribute', 'Being in the same form'],
                  correct: 1
                },
                {
                  question: 'How many checkboxes in a group can be selected?',
                  options: ['Only one', 'Only two', 'Any number', 'Depends on the limit attribute'],
                  correct: 2
                },
                {
                  question: 'What does the checked attribute do?',
                  options: ['Validates the input', 'Pre-selects the option', 'Disables the input', 'Makes it required'],
                  correct: 1
                },
                {
                  question: 'If no value is set on a checkbox, what is submitted?',
                  options: ['Nothing', 'The label text', '"on"', 'true'],
                  correct: 2
                }
              ]
            },
            {
              id: 'forms1-3',
              title: 'Select Dropdowns & Textareas',
              type: 'challenge',
              theory: `<h2>Select Dropdowns & Textareas</h2>
<p>Beyond text inputs and buttons, HTML forms offer dropdown menus and multi-line text areas for more complex data entry.</p>
<p><strong>Select Dropdowns (<code>&lt;select&gt;</code>):</strong></p>
<pre><code>&lt;label for="country"&gt;Country:&lt;/label&gt;
&lt;select id="country" name="country"&gt;
  &lt;option value=""&gt;Select a country&lt;/option&gt;
  &lt;option value="us"&gt;United States&lt;/option&gt;
  &lt;option value="uk"&gt;United Kingdom&lt;/option&gt;
  &lt;option value="in"&gt;India&lt;/option&gt;
&lt;/select&gt;</code></pre>
<p><strong>Select features:</strong></p>
<ul>
<li><code>&lt;option&gt;</code> — Each choice in the dropdown</li>
<li><code>value</code> — What gets submitted (on option)</li>
<li><code>selected</code> — Pre-selects an option</li>
<li><code>multiple</code> — Allows selecting multiple options (on select)</li>
<li><code>&lt;optgroup&gt;</code> — Groups related options with a label</li>
</ul>
<pre><code>&lt;select name="car"&gt;
  &lt;optgroup label="Swedish"&gt;
    &lt;option value="volvo"&gt;Volvo&lt;/option&gt;
    &lt;option value="saab"&gt;Saab&lt;/option&gt;
  &lt;/optgroup&gt;
&lt;/select&gt;</code></pre>
<p><strong>Textareas (<code>&lt;textarea&gt;</code>):</strong></p>
<p>For multi-line text input like comments, messages, or descriptions:</p>
<pre><code>&lt;label for="message"&gt;Message:&lt;/label&gt;
&lt;textarea id="message" name="message" rows="5" cols="40" placeholder="Enter your message..."&gt;&lt;/textarea&gt;</code></pre>
<p><strong>Textarea attributes:</strong></p>
<ul>
<li><code>rows</code> — Visible height (number of text lines)</li>
<li><code>cols</code> — Visible width (number of characters)</li>
<li><code>maxlength</code> — Maximum character limit</li>
<li><code>placeholder</code> — Hint text when empty</li>
</ul>
<p>Note: <code>&lt;textarea&gt;</code> uses opening and closing tags — any text between them becomes the default value.</p>`,
              challenge: {
                description: 'Create a label "Language:" with a select dropdown (id="lang", name="language") containing options: "Choose..." (value=""), "English" (value="en"), "Spanish" (value="es"), "French" (value="fr").',
                starterCode: '<!-- Create a select dropdown -->\n',
                expectedOutput: '<label for="lang">Language:</label>\n<select id="lang" name="language">\n<option value="">Choose...</option>\n<option value="en">English</option>\n<option value="es">Spanish</option>\n<option value="fr">French</option>\n</select>',
                hints: [
                  'Use <select> with <option> elements inside',
                  'Each option needs a value attribute',
                  'The first option can serve as a placeholder',
                  'Connect label with for/id'
                ]
              },
              quiz: [
                {
                  question: 'Which element creates a dropdown menu?',
                  options: ['<dropdown>', '<menu>', '<select>', '<list>'],
                  correct: 2
                },
                {
                  question: 'How do you allow multiple selections in a dropdown?',
                  options: ['multi="true"', 'multiple attribute on select', 'type="multiple"', 'selections="many"'],
                  correct: 1
                },
                {
                  question: 'What element groups related options together?',
                  options: ['<group>', '<optgroup>', '<optionset>', '<selectgroup>'],
                  correct: 1
                },
                {
                  question: 'How is textarea different from input type="text"?',
                  options: ['No difference', 'Textarea allows multi-line text', 'Textarea is faster', 'Input is deprecated'],
                  correct: 1
                },
                {
                  question: 'How do you set a default value in a textarea?',
                  options: ['value attribute', 'Text between opening and closing tags', 'default attribute', 'placeholder attribute'],
                  correct: 1
                }
              ]
            },
            {
              id: 'forms1-4',
              title: 'Form Buttons & Submission',
              type: 'challenge',
              theory: `<h2>Form Buttons & Submission</h2>
<p>Forms need buttons to submit data or perform actions. HTML provides several ways to create buttons within forms.</p>
<p><strong>The &lt;button&gt; element:</strong></p>
<pre><code>&lt;button type="submit"&gt;Submit Form&lt;/button&gt;
&lt;button type="reset"&gt;Reset Form&lt;/button&gt;
&lt;button type="button"&gt;Click Me&lt;/button&gt;</code></pre>
<p><strong>Button types:</strong></p>
<ul>
<li><code>type="submit"</code> — Submits the form (default if type is omitted)</li>
<li><code>type="reset"</code> — Resets all form fields to their initial values</li>
<li><code>type="button"</code> — Generic button (no default action, used with JavaScript)</li>
</ul>
<p><strong>Input submit vs Button:</strong></p>
<pre><code>&lt;!-- Input method (limited - text only) --&gt;
&lt;input type="submit" value="Submit"&gt;

&lt;!-- Button method (flexible - can contain HTML) --&gt;
&lt;button type="submit"&gt;
  &lt;strong&gt;Submit&lt;/strong&gt; Form
&lt;/button&gt;</code></pre>
<p>The <code>&lt;button&gt;</code> element is preferred because it can contain HTML content (icons, formatted text, etc.), while <code>&lt;input type="submit"&gt;</code> can only display plain text.</p>
<p><strong>Form submission process:</strong></p>
<ol>
<li>User clicks submit button</li>
<li>Browser validates required fields</li>
<li>Data is collected from all named inputs</li>
<li>Data is sent to the URL specified in action</li>
<li>GET: data appears in the URL query string</li>
<li>POST: data is sent in the request body (more secure)</li>
</ol>
<p><strong>The disabled attribute:</strong> Adding <code>disabled</code> to any form control prevents interaction and excludes it from submission.</p>`,
              challenge: {
                description: 'Create a form (action="/register", method="POST") with a text input (name="username", placeholder="Enter username", required), a submit button saying "Register", and a reset button saying "Clear".',
                starterCode: '<!-- Create a form with submit and reset buttons -->\n',
                expectedOutput: '<form action="/register" method="POST">\n<input type="text" name="username" placeholder="Enter username" required>\n<button type="submit">Register</button>\n<button type="reset">Clear</button>\n</form>',
                hints: [
                  'Use <button> with different type attributes',
                  'type="submit" sends the form',
                  'type="reset" clears all fields',
                  'Add required attribute for validation'
                ]
              },
              quiz: [
                {
                  question: 'What is the default type of a <button> in a form?',
                  options: ['button', 'submit', 'reset', 'action'],
                  correct: 1
                },
                {
                  question: 'What does type="reset" do?',
                  options: ['Deletes the form', 'Clears all fields to initial values', 'Reloads the page', 'Removes validation'],
                  correct: 1
                },
                {
                  question: 'Why is <button> preferred over <input type="submit">?',
                  options: ['It\'s faster', 'It can contain HTML content', 'It\'s more secure', 'It\'s required in HTML5'],
                  correct: 1
                },
                {
                  question: 'With method="GET", where does form data appear?',
                  options: ['In the request body', 'In the URL query string', 'In cookies', 'In local storage'],
                  correct: 1
                }
              ]
            },
            {
              id: 'forms1-5',
              title: 'Fieldset & Legend',
              type: 'challenge',
              theory: `<h2>Fieldset & Legend</h2>
<p>The <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> elements help organize forms into logical groups. This improves both visual presentation and accessibility.</p>
<p><strong>Fieldset:</strong> Groups related form controls together, typically rendered with a border:</p>
<pre><code>&lt;fieldset&gt;
  &lt;legend&gt;Personal Information&lt;/legend&gt;
  &lt;label for="fname"&gt;First Name:&lt;/label&gt;
  &lt;input type="text" id="fname" name="firstname"&gt;
  &lt;label for="lname"&gt;Last Name:&lt;/label&gt;
  &lt;input type="text" id="lname" name="lastname"&gt;
&lt;/fieldset&gt;</code></pre>
<p><strong>Legend:</strong> Provides a caption for the fieldset. It must be the first child of <code>&lt;fieldset&gt;</code>.</p>
<p><strong>Why use fieldset and legend?</strong></p>
<ul>
<li>Screen readers announce the legend when entering the fieldset, giving context</li>
<li>Visually groups related fields, reducing cognitive load</li>
<li>Particularly important for radio button and checkbox groups</li>
<li>The disabled attribute on fieldset disables all controls within it</li>
</ul>
<pre><code>&lt;fieldset&gt;
  &lt;legend&gt;Choose your plan&lt;/legend&gt;
  &lt;label&gt;&lt;input type="radio" name="plan" value="basic"&gt; Basic&lt;/label&gt;
  &lt;label&gt;&lt;input type="radio" name="plan" value="pro"&gt; Pro&lt;/label&gt;
  &lt;label&gt;&lt;input type="radio" name="plan" value="enterprise"&gt; Enterprise&lt;/label&gt;
&lt;/fieldset&gt;</code></pre>
<p><strong>Disabling an entire group:</strong></p>
<pre><code>&lt;fieldset disabled&gt;
  &lt;legend&gt;Account (Locked)&lt;/legend&gt;
  &lt;!-- All inputs here are disabled --&gt;
&lt;/fieldset&gt;</code></pre>
<p>You can have multiple fieldsets in a single form, each grouping related information (personal info, address, payment details, etc.).</p>`,
              challenge: {
                description: 'Create a fieldset with legend "Contact Details" containing two labeled inputs: "Phone" (type="tel", id="phone", name="phone") and "Email" (type="email", id="email", name="email").',
                starterCode: '<!-- Create a fieldset with grouped inputs -->\n',
                expectedOutput: '<fieldset>\n<legend>Contact Details</legend>\n<label for="phone">Phone</label>\n<input type="tel" id="phone" name="phone">\n<label for="email">Email</label>\n<input type="email" id="email" name="email">\n</fieldset>',
                hints: [
                  'Legend must be the first child of fieldset',
                  'Each input needs a matching label',
                  'Use type="tel" for phone numbers',
                  'Use type="email" for email addresses'
                ]
              },
              quiz: [
                {
                  question: 'What is the purpose of <fieldset>?',
                  options: ['Creating a field', 'Grouping related form controls', 'Setting field width', 'Validating inputs'],
                  correct: 1
                },
                {
                  question: 'Where must <legend> be placed?',
                  options: ['Anywhere in the form', 'First child of fieldset', 'Before the form', 'After all inputs'],
                  correct: 1
                },
                {
                  question: 'What happens when you add disabled to a fieldset?',
                  options: ['Only fieldset is disabled', 'All controls inside are disabled', 'The legend disappears', 'Nothing happens'],
                  correct: 1
                },
                {
                  question: 'When is fieldset most important for accessibility?',
                  options: ['With text inputs', 'With radio button and checkbox groups', 'With buttons', 'With hidden fields'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'forms-2',
          title: 'Forms Part 2',
          lessons: [
            {
              id: 'forms2-1',
              title: 'HTML5 Input Types',
              type: 'challenge',
              theory: `<h2>HTML5 Input Types</h2>
<p>HTML5 introduced many new input types that provide better user experience through specialized keyboards on mobile devices and built-in validation.</p>
<p><strong>Date and Time inputs:</strong></p>
<ul>
<li><code>type="date"</code> — Date picker (YYYY-MM-DD)</li>
<li><code>type="time"</code> — Time picker (HH:MM)</li>
<li><code>type="datetime-local"</code> — Combined date and time</li>
<li><code>type="month"</code> — Month and year</li>
<li><code>type="week"</code> — Week number and year</li>
</ul>
<p><strong>Numeric and Range inputs:</strong></p>
<ul>
<li><code>type="number"</code> — Numeric input with spinners. Use <code>min</code>, <code>max</code>, and <code>step</code> attributes.</li>
<li><code>type="range"</code> — Slider control. Also uses min, max, step.</li>
</ul>
<pre><code>&lt;input type="number" min="1" max="100" step="1" value="50"&gt;
&lt;input type="range" min="0" max="100" step="5"&gt;</code></pre>
<p><strong>Other HTML5 types:</strong></p>
<ul>
<li><code>type="color"</code> — Color picker (returns hex value)</li>
<li><code>type="url"</code> — URL input with validation</li>
<li><code>type="search"</code> — Search field (may have clear button)</li>
<li><code>type="file"</code> — File upload control</li>
</ul>
<pre><code>&lt;input type="color" name="favcolor" value="#ff0000"&gt;
&lt;input type="file" name="resume" accept=".pdf,.doc"&gt;</code></pre>
<p><strong>Graceful degradation:</strong> If a browser doesn't support an HTML5 input type, it automatically falls back to <code>type="text"</code>. This means your forms still work everywhere, just with less enhancement in older browsers.</p>`,
              challenge: {
                description: 'Create a form with: a date input (name="birthday", id="bday") with label "Birthday:", a number input (name="quantity", id="qty", min="1", max="10") with label "Quantity:", and a color input (name="theme", id="theme") with label "Theme Color:".',
                starterCode: '<!-- Create a form with HTML5 input types -->\n',
                expectedOutput: '<form>\n<label for="bday">Birthday:</label>\n<input type="date" id="bday" name="birthday">\n<label for="qty">Quantity:</label>\n<input type="number" id="qty" name="quantity" min="1" max="10">\n<label for="theme">Theme Color:</label>\n<input type="color" id="theme" name="theme">\n</form>',
                hints: [
                  'Use type="date" for date pickers',
                  'Use type="number" with min and max',
                  'Use type="color" for color pickers',
                  'Each input needs a label'
                ]
              },
              quiz: [
                {
                  question: 'Which input type shows a date picker?',
                  options: ['type="calendar"', 'type="date"', 'type="datepicker"', 'type="day"'],
                  correct: 1
                },
                {
                  question: 'What format does type="color" return?',
                  options: ['RGB', 'Color name', 'Hex value', 'HSL'],
                  correct: 2
                },
                {
                  question: 'What happens if a browser doesn\'t support type="date"?',
                  options: ['Error', 'Falls back to type="text"', 'Input disappears', 'Form breaks'],
                  correct: 1
                },
                {
                  question: 'Which attributes control the range of type="number"?',
                  options: ['low and high', 'min and max', 'start and end', 'from and to'],
                  correct: 1
                }
              ]
            },
            {
              id: 'forms2-2',
              title: 'Form Validation',
              type: 'challenge',
              theory: `<h2>Form Validation</h2>
<p>HTML5 provides built-in form validation that checks user input before submission — no JavaScript required! This gives immediate feedback and prevents invalid data from being sent.</p>
<p><strong>Validation attributes:</strong></p>
<ul>
<li><code>required</code> — Field must be filled before submission</li>
<li><code>minlength</code> / <code>maxlength</code> — Min/max character count for text</li>
<li><code>min</code> / <code>max</code> — Min/max values for numbers and dates</li>
<li><code>pattern</code> — Regular expression the value must match</li>
<li><code>step</code> — Valid number intervals</li>
</ul>
<pre><code>&lt;input type="text" name="username" 
  required 
  minlength="3" 
  maxlength="20" 
  pattern="[a-zA-Z0-9]+"
  title="Only letters and numbers, 3-20 characters"&gt;</code></pre>
<p><strong>The pattern attribute:</strong></p>
<p>Uses regular expressions for custom validation:</p>
<ul>
<li><code>pattern="[0-9]{5}"</code> — Exactly 5 digits (zip code)</li>
<li><code>pattern="[A-Za-z]+"</code> — Letters only</li>
<li><code>pattern=".{8,}"</code> — At least 8 characters</li>
</ul>
<p><strong>The title attribute:</strong> When used with pattern, the title text appears in validation error messages, explaining what format is expected.</p>
<p><strong>Built-in type validation:</strong></p>
<p>Some input types validate automatically:</p>
<ul>
<li><code>type="email"</code> — Must contain @ and domain</li>
<li><code>type="url"</code> — Must be a valid URL format</li>
<li><code>type="number"</code> — Must be numeric</li>
</ul>
<p>The <code>novalidate</code> attribute on <code>&lt;form&gt;</code> disables all HTML validation (useful during development).</p>`,
              challenge: {
                description: 'Create a text input for a username with: name="username", required, minlength="3", maxlength="15", pattern="[a-zA-Z0-9_]+", and title="Letters, numbers, and underscores only".',
                starterCode: '<!-- Create a validated username input -->\n',
                expectedOutput: '<input type="text" name="username" required minlength="3" maxlength="15" pattern="[a-zA-Z0-9_]+" title="Letters, numbers, and underscores only">',
                hints: [
                  'Add all validation attributes to one input',
                  'pattern uses regex syntax',
                  'title explains the expected format',
                  'required needs no value'
                ]
              },
              quiz: [
                {
                  question: 'Which attribute makes a field mandatory?',
                  options: ['mandatory', 'validate', 'required', 'needed'],
                  correct: 2
                },
                {
                  question: 'What does the pattern attribute use?',
                  options: ['CSS selectors', 'Regular expressions', 'JavaScript', 'XPath'],
                  correct: 1
                },
                {
                  question: 'What does novalidate do on a form?',
                  options: ['Removes all inputs', 'Disables HTML validation', 'Hides error messages', 'Prevents submission'],
                  correct: 1
                },
                {
                  question: 'Which input type automatically validates email format?',
                  options: ['type="text"', 'type="email"', 'type="mail"', 'type="validate"'],
                  correct: 1
                },
                {
                  question: 'What does the title attribute do when used with pattern?',
                  options: ['Sets the page title', 'Shows in validation error messages', 'Creates a tooltip only', 'Names the input'],
                  correct: 1
                }
              ]
            },
            {
              id: 'forms2-3',
              title: 'Datalist & Output Elements',
              type: 'challenge',
              theory: `<h2>Datalist & Output Elements</h2>
<p>HTML5 introduced elements that enhance form interactivity: <code>&lt;datalist&gt;</code> for autocomplete suggestions and <code>&lt;output&gt;</code> for displaying calculated results.</p>
<p><strong>Datalist — Autocomplete Suggestions:</strong></p>
<p>The <code>&lt;datalist&gt;</code> element provides a predefined list of suggestions for an input field. Users can either select a suggestion or type their own value.</p>
<pre><code>&lt;label for="browser"&gt;Browser:&lt;/label&gt;
&lt;input list="browsers" id="browser" name="browser"&gt;
&lt;datalist id="browsers"&gt;
  &lt;option value="Chrome"&gt;
  &lt;option value="Firefox"&gt;
  &lt;option value="Safari"&gt;
  &lt;option value="Edge"&gt;
&lt;/datalist&gt;</code></pre>
<p><strong>Key points about datalist:</strong></p>
<ul>
<li>Connect it to an input using the <code>list</code> attribute (matching datalist id)</li>
<li>Unlike <code>&lt;select&gt;</code>, users aren't restricted to the provided options</li>
<li>Options filter as the user types</li>
<li>Works with text, url, email, number, range, and other types</li>
</ul>
<p><strong>Output — Calculation Display:</strong></p>
<p>The <code>&lt;output&gt;</code> element represents the result of a calculation:</p>
<pre><code>&lt;form oninput="result.value = parseInt(a.value) + parseInt(b.value)"&gt;
  &lt;input type="number" id="a" value="0"&gt; +
  &lt;input type="number" id="b" value="0"&gt; =
  &lt;output name="result" for="a b"&gt;0&lt;/output&gt;
&lt;/form&gt;</code></pre>
<p>The <code>for</code> attribute on output lists the IDs of elements that contribute to the calculation. This is semantic — it helps assistive technology understand relationships.</p>
<p><strong>The &lt;meter&gt; and &lt;progress&gt; elements:</strong></p>
<ul>
<li><code>&lt;meter&gt;</code> — Displays a scalar value within a known range (like disk usage)</li>
<li><code>&lt;progress&gt;</code> — Shows completion progress of a task</li>
</ul>`,
              challenge: {
                description: 'Create a text input with id="city" and list="cities", then create a datalist with id="cities" containing options for "New York", "London", "Tokyo", and "Paris".',
                starterCode: '<!-- Create an input with datalist suggestions -->\n',
                expectedOutput: '<input type="text" id="city" name="city" list="cities">\n<datalist id="cities">\n<option value="New York">\n<option value="London">\n<option value="Tokyo">\n<option value="Paris">\n</datalist>',
                hints: [
                  'The input\'s list attribute must match datalist\'s id',
                  'Datalist options use value attribute',
                  'Options in datalist are self-closing',
                  'Users can still type custom values'
                ]
              },
              quiz: [
                {
                  question: 'How do you connect a datalist to an input?',
                  options: ['datalist attribute', 'Match input list attr to datalist id', 'Put input inside datalist', 'Use the connect attribute'],
                  correct: 1
                },
                {
                  question: 'Can users type values not in the datalist?',
                  options: ['No, they must select from options', 'Yes, datalist only suggests', 'Only if you add the free attribute', 'Depends on the browser'],
                  correct: 1
                },
                {
                  question: 'What does the <output> element represent?',
                  options: ['Text output', 'Console output', 'Result of a calculation', 'Print output'],
                  correct: 2
                },
                {
                  question: 'Which element shows completion progress?',
                  options: ['<meter>', '<progress>', '<output>', '<range>'],
                  correct: 1
                }
              ]
            },
            {
              id: 'forms2-4',
              title: 'Hidden Fields & Form Data',
              type: 'challenge',
              theory: `<h2>Hidden Fields & Form Data</h2>
<p>Not all form data comes from user input. Hidden fields store data that needs to be submitted with the form but shouldn't be visible or editable by users.</p>
<p><strong>Hidden inputs:</strong></p>
<pre><code>&lt;input type="hidden" name="user_id" value="12345"&gt;
&lt;input type="hidden" name="csrf_token" value="abc123xyz"&gt;</code></pre>
<p><strong>Common uses for hidden fields:</strong></p>
<ul>
<li>User IDs or session tokens</li>
<li>CSRF (Cross-Site Request Forgery) protection tokens</li>
<li>Tracking form source or version</li>
<li>Timestamps or generated values</li>
<li>Data from previous form steps in multi-step forms</li>
</ul>
<p><strong>The formaction and formmethod attributes:</strong></p>
<p>Individual buttons can override the form's default action and method:</p>
<pre><code>&lt;form action="/save" method="POST"&gt;
  &lt;input type="text" name="data"&gt;
  &lt;button type="submit"&gt;Save&lt;/button&gt;
  &lt;button type="submit" formaction="/save-draft" formmethod="POST"&gt;Save Draft&lt;/button&gt;
&lt;/form&gt;</code></pre>
<p><strong>The autocomplete attribute:</strong></p>
<ul>
<li><code>autocomplete="on"</code> — Browser can auto-fill (default)</li>
<li><code>autocomplete="off"</code> — Disable auto-fill</li>
<li>Specific values: <code>"name"</code>, <code>"email"</code>, <code>"tel"</code>, <code>"address-line1"</code>, etc.</li>
</ul>
<pre><code>&lt;input type="text" name="cc" autocomplete="cc-number"&gt;</code></pre>
<p><strong>Encoding types (enctype):</strong></p>
<ul>
<li><code>application/x-www-form-urlencoded</code> — Default, URL-encoded data</li>
<li><code>multipart/form-data</code> — Required for file uploads</li>
<li><code>text/plain</code> — Unencoded (rarely used)</li>
</ul>`,
              challenge: {
                description: 'Create a form (action="/process", method="POST") with a hidden input (name="token", value="secure123"), a text input (name="comment", placeholder="Your comment"), and a submit button "Post Comment".',
                starterCode: '<!-- Create a form with a hidden field -->\n',
                expectedOutput: '<form action="/process" method="POST">\n<input type="hidden" name="token" value="secure123">\n<input type="text" name="comment" placeholder="Your comment">\n<button type="submit">Post Comment</button>\n</form>',
                hints: [
                  'Hidden inputs are invisible but still submitted',
                  'type="hidden" makes the input invisible',
                  'The hidden field still needs name and value',
                  'Users won\'t see the hidden field'
                ]
              },
              quiz: [
                {
                  question: 'Are hidden inputs visible to users?',
                  options: ['Yes', 'No, but they\'re in the source code', 'No, and they\'re encrypted', 'Only in developer tools'],
                  correct: 1
                },
                {
                  question: 'What enctype is required for file uploads?',
                  options: ['text/plain', 'application/json', 'multipart/form-data', 'application/x-www-form-urlencoded'],
                  correct: 2
                },
                {
                  question: 'What does formaction on a button do?',
                  options: ['Formats the button', 'Overrides the form\'s action URL', 'Creates a new form', 'Validates the form'],
                  correct: 1
                },
                {
                  question: 'What is a common use for hidden fields?',
                  options: ['Styling forms', 'Storing CSRF tokens', 'Creating animations', 'Adding tooltips'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'semantic-html',
          title: 'Semantic HTML',
          lessons: [
            {
              id: 'semantic-1',
              title: 'Semantic vs Non-Semantic Elements',
              type: 'challenge',
              theory: `<h2>Semantic vs Non-Semantic Elements</h2>
<p><strong>Semantic HTML</strong> means using elements that clearly describe their meaning to both the browser and the developer. Instead of using generic <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> for everything, semantic elements communicate the purpose of the content they contain.</p>
<p><strong>Non-semantic elements</strong> (tell nothing about content):</p>
<ul>
<li><code>&lt;div&gt;</code> — Generic block container</li>
<li><code>&lt;span&gt;</code> — Generic inline container</li>
</ul>
<p><strong>Semantic elements</strong> (clearly define their content):</p>
<ul>
<li><code>&lt;header&gt;</code> — Introductory content or navigation</li>
<li><code>&lt;nav&gt;</code> — Navigation links</li>
<li><code>&lt;main&gt;</code> — The dominant content of the page</li>
<li><code>&lt;article&gt;</code> — Self-contained, independently distributable content</li>
<li><code>&lt;section&gt;</code> — Thematic grouping of content</li>
<li><code>&lt;aside&gt;</code> — Content tangentially related to surrounding content</li>
<li><code>&lt;footer&gt;</code> — Footer for a section or page</li>
</ul>
<p><strong>Why semantic HTML matters:</strong></p>
<ul>
<li><strong>Accessibility:</strong> Screen readers use semantic elements to navigate pages efficiently</li>
<li><strong>SEO:</strong> Search engines understand page structure and content importance</li>
<li><strong>Maintainability:</strong> Code is easier to read and understand</li>
<li><strong>Consistency:</strong> Standard elements mean consistent behavior across browsers</li>
</ul>
<p>Think of it this way: <code>&lt;div class="header"&gt;</code> and <code>&lt;header&gt;</code> might look the same, but only <code>&lt;header&gt;</code> conveys meaning to machines. Always choose semantic elements when they fit your content's purpose.</p>`,
              challenge: {
                description: 'Convert this non-semantic structure to semantic HTML: Create a header with an h1 "My Blog", a main with an article containing an h2 "First Post" and a paragraph "Hello world!", and a footer with a paragraph "© 2024".',
                starterCode: '<!-- Use semantic HTML elements -->\n',
                expectedOutput: '<header>\n<h1>My Blog</h1>\n</header>\n<main>\n<article>\n<h2>First Post</h2>\n<p>Hello world!</p>\n</article>\n</main>\n<footer>\n<p>&copy; 2024</p>\n</footer>',
                hints: [
                  'Use <header> instead of <div class="header">',
                  'Use <main> for primary content',
                  'Use <article> for self-contained content',
                  'Use <footer> for footer content'
                ]
              },
              quiz: [
                {
                  question: 'Which is a non-semantic element?',
                  options: ['<article>', '<div>', '<header>', '<nav>'],
                  correct: 1
                },
                {
                  question: 'What does the <main> element represent?',
                  options: ['The header', 'The dominant content of the page', 'The navigation', 'The sidebar'],
                  correct: 1
                },
                {
                  question: 'Why is semantic HTML important for accessibility?',
                  options: ['It looks better', 'Screen readers use it for navigation', 'It loads faster', 'It adds colors'],
                  correct: 1
                },
                {
                  question: 'Which element represents self-contained content?',
                  options: ['<section>', '<article>', '<aside>', '<div>'],
                  correct: 1
                },
                {
                  question: 'How many <main> elements should a page have?',
                  options: ['As many as needed', 'Only one', 'At least two', 'None'],
                  correct: 1
                }
              ]
            },
            {
              id: 'semantic-2',
              title: 'Article, Section & Aside',
              type: 'challenge',
              theory: `<h2>Article, Section & Aside</h2>
<p>Three of the most commonly confused semantic elements are <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;aside&gt;</code>. Understanding when to use each is key to writing good semantic HTML.</p>
<p><strong>&lt;article&gt;</strong> — Self-contained content that could stand alone:</p>
<ul>
<li>Blog posts, news articles, forum posts</li>
<li>Product cards, comments, social media posts</li>
<li>Would make sense if syndicated (shared elsewhere)</li>
</ul>
<pre><code>&lt;article&gt;
  &lt;h2&gt;Breaking News: HTML6 Announced&lt;/h2&gt;
  &lt;p&gt;Published: &lt;time datetime="2024-01-15"&gt;Jan 15, 2024&lt;/time&gt;&lt;/p&gt;
  &lt;p&gt;Content of the article...&lt;/p&gt;
&lt;/article&gt;</code></pre>
<p><strong>&lt;section&gt;</strong> — Thematic grouping of content, typically with a heading:</p>
<ul>
<li>Chapters of a document</li>
<li>Tabbed panels</li>
<li>Different sections of a homepage (hero, features, testimonials)</li>
</ul>
<pre><code>&lt;section&gt;
  &lt;h2&gt;Features&lt;/h2&gt;
  &lt;p&gt;Our product offers...&lt;/p&gt;
&lt;/section&gt;</code></pre>
<p><strong>&lt;aside&gt;</strong> — Related but tangential content:</p>
<ul>
<li>Sidebars, pull quotes, related links</li>
<li>Advertising, author bio boxes</li>
<li>Supplementary information</li>
</ul>
<pre><code>&lt;aside&gt;
  &lt;h3&gt;Related Articles&lt;/h3&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#"&gt;Article 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Article 2&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/aside&gt;</code></pre>
<p><strong>Quick decision guide:</strong> Can it stand alone? → <code>&lt;article&gt;</code>. Is it a thematic group? → <code>&lt;section&gt;</code>. Is it supplementary? → <code>&lt;aside&gt;</code>. None of these? → <code>&lt;div&gt;</code>.</p>`,
              challenge: {
                description: 'Create a page structure with: a section containing h2 "Latest News" and an article with h3 "Tech Update" and paragraph "New features released today.", plus an aside with h3 "Trending" and paragraph "Most read this week."',
                starterCode: '<!-- Use article, section, and aside correctly -->\n',
                expectedOutput: '<section>\n<h2>Latest News</h2>\n<article>\n<h3>Tech Update</h3>\n<p>New features released today.</p>\n</article>\n</section>\n<aside>\n<h3>Trending</h3>\n<p>Most read this week.</p>\n</aside>',
                hints: [
                  'Section groups related content thematically',
                  'Article is self-contained content inside section',
                  'Aside is for supplementary/sidebar content',
                  'Each should have its own heading'
                ]
              },
              quiz: [
                {
                  question: 'When should you use <article>?',
                  options: ['For any div replacement', 'For self-contained, distributable content', 'For sidebars', 'For navigation'],
                  correct: 1
                },
                {
                  question: 'What is <aside> typically used for?',
                  options: ['Main content', 'Navigation', 'Sidebars and supplementary content', 'Footers'],
                  correct: 2
                },
                {
                  question: 'Should a <section> typically have a heading?',
                  options: ['No, headings are optional', 'Yes, it should have a heading', 'Only if it contains articles', 'Never'],
                  correct: 1
                },
                {
                  question: 'Can an article contain sections?',
                  options: ['No', 'Yes', 'Only one section', 'Only in HTML5.1'],
                  correct: 1
                }
              ]
            },
            {
              id: 'semantic-3',
              title: 'Time, Address & Details Elements',
              type: 'challenge',
              theory: `<h2>Time, Address & Details Elements</h2>
<p>HTML5 provides several lesser-known semantic elements that add meaning to specific types of content.</p>
<p><strong>&lt;time&gt;</strong> — Machine-readable date/time:</p>
<pre><code>&lt;p&gt;Published on &lt;time datetime="2024-03-15"&gt;March 15, 2024&lt;/time&gt;&lt;/p&gt;
&lt;p&gt;The event starts at &lt;time datetime="14:30"&gt;2:30 PM&lt;/time&gt;&lt;/p&gt;</code></pre>
<p>The <code>datetime</code> attribute provides a machine-readable format while the display text can be human-friendly. This helps search engines, calendars, and other tools parse dates correctly.</p>
<p><strong>&lt;address&gt;</strong> — Contact information for the author/owner:</p>
<pre><code>&lt;address&gt;
  Written by &lt;a href="mailto:author@example.com"&gt;John Doe&lt;/a&gt;
  123 Main Street, City, Country
&lt;/address&gt;</code></pre>
<p>Note: <code>&lt;address&gt;</code> is for contact info related to the nearest <code>&lt;article&gt;</code> or <code>&lt;body&gt;</code>, not for any postal address.</p>
<p><strong>&lt;details&gt; and &lt;summary&gt;</strong> — Collapsible content (no JavaScript needed!):</p>
<pre><code>&lt;details&gt;
  &lt;summary&gt;Click to expand&lt;/summary&gt;
  &lt;p&gt;This content is hidden until the user clicks the summary.&lt;/p&gt;
&lt;/details&gt;</code></pre>
<p>The <code>open</code> attribute makes it expanded by default. This is one of HTML's few interactive elements that works without JavaScript.</p>
<p><strong>&lt;dialog&gt;</strong> — A dialog box or modal window:</p>
<pre><code>&lt;dialog open&gt;
  &lt;p&gt;This is a dialog box&lt;/p&gt;
&lt;/dialog&gt;</code></pre>`,
              challenge: {
                description: 'Create a details element with summary "FAQ: What is HTML?" and a paragraph answer "HTML is the standard markup language for creating web pages." Make it open by default.',
                starterCode: '<!-- Create an expandable FAQ item -->\n',
                expectedOutput: '<details open>\n<summary>FAQ: What is HTML?</summary>\n<p>HTML is the standard markup language for creating web pages.</p>\n</details>',
                hints: [
                  'Use <details> as the container',
                  'Use <summary> for the clickable title',
                  'Add the open attribute to expand by default',
                  'Content after summary is the collapsible part'
                ]
              },
              quiz: [
                {
                  question: 'What does the datetime attribute on <time> provide?',
                  options: ['A countdown', 'Machine-readable date format', 'Timezone conversion', 'A timer'],
                  correct: 1
                },
                {
                  question: 'What is <address> semantically for?',
                  options: ['Any mailing address', 'Contact info for the content author/owner', 'GPS coordinates', 'Physical locations'],
                  correct: 1
                },
                {
                  question: 'What does <details> provide without JavaScript?',
                  options: ['Modals', 'Collapsible content', 'Animations', 'Tooltips'],
                  correct: 1
                },
                {
                  question: 'How do you make a <details> element start expanded?',
                  options: ['expanded="true"', 'open attribute', 'visible="true"', 'show attribute'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'portfolio-project',
          title: 'Personal Portfolio PROJECT',
          lessons: [
            {
              id: 'project1-1',
              title: 'Portfolio - Header & Navigation',
              type: 'project',
              theory: `<h2>Portfolio Project - Header & Navigation</h2>
<p>It's time to put your HTML skills to work! We'll build a personal portfolio page step by step. A portfolio showcases your skills, projects, and contact information to potential employers or clients.</p>
<p><strong>What we're building:</strong> A single-page portfolio with header/nav, about section, skills section, projects section, and contact footer.</p>
<p><strong>Step 1: The Header & Navigation</strong></p>
<p>Every portfolio starts with a strong header that includes your name and navigation to different sections. We'll use semantic HTML throughout.</p>
<pre><code>&lt;header&gt;
  &lt;h1&gt;Your Name&lt;/h1&gt;
  &lt;p&gt;Web Developer&lt;/p&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#skills"&gt;Skills&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#projects"&gt;Projects&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;</code></pre>
<p><strong>Best practices for portfolio headers:</strong></p>
<ul>
<li>Use your real name in the h1 — it's the page's main heading</li>
<li>Include a brief title or tagline</li>
<li>Navigation should link to page sections using anchor links (#id)</li>
<li>Keep navigation items concise and clear</li>
<li>Use semantic elements: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;ul&gt;</code></li>
</ul>
<p>The navigation uses anchor links (#about, #skills, etc.) that will jump to sections we'll create in the next lessons. This is a common single-page pattern.</p>`,
              challenge: {
                description: 'Create a portfolio header with: h1 "Jane Smith", a paragraph "Full-Stack Developer", and a nav with an unordered list containing links to "#about" (About Me), "#skills" (Skills), "#projects" (Projects), "#contact" (Contact).',
                starterCode: '<!-- Build the portfolio header and navigation -->\n',
                expectedOutput: '<header>\n<h1>Jane Smith</h1>\n<p>Full-Stack Developer</p>\n<nav>\n<ul>\n<li><a href="#about">About Me</a></li>\n<li><a href="#skills">Skills</a></li>\n<li><a href="#projects">Projects</a></li>\n<li><a href="#contact">Contact</a></li>\n</ul>\n</nav>\n</header>',
                hints: [
                  'Wrap everything in a <header> element',
                  'Put the nav inside the header',
                  'Use an unordered list for nav links',
                  'Anchor links start with #'
                ]
              },
              quiz: [
                {
                  question: 'Why use anchor links in a single-page portfolio?',
                  options: ['They look nicer', 'They scroll to sections on the same page', 'They load faster', 'They\'re required for nav'],
                  correct: 1
                },
                {
                  question: 'What should the h1 typically contain on a portfolio?',
                  options: ['Portfolio', 'Your name', 'Welcome', 'Home'],
                  correct: 1
                },
                {
                  question: 'Which pattern is correct for navigation?',
                  options: ['nav > a', 'nav > ul > li > a', 'div > nav > a', 'header > a'],
                  correct: 1
                }
              ]
            },
            {
              id: 'project1-2',
              title: 'Portfolio - About & Skills Sections',
              type: 'project',
              theory: `<h2>Portfolio - About & Skills Sections</h2>
<p>Now let's build the main content sections. The About section introduces you, and the Skills section showcases your technical abilities.</p>
<p><strong>About Section:</strong></p>
<p>This should be personal and professional. Include a brief bio, your background, and what you're passionate about:</p>
<pre><code>&lt;section id="about"&gt;
  &lt;h2&gt;About Me&lt;/h2&gt;
  &lt;img src="profile.jpg" alt="Jane Smith portrait"&gt;
  &lt;p&gt;I'm a passionate web developer with 3 years of experience...&lt;/p&gt;
&lt;/section&gt;</code></pre>
<p><strong>Skills Section:</strong></p>
<p>Lists work perfectly here. You can organize skills by category:</p>
<pre><code>&lt;section id="skills"&gt;
  &lt;h2&gt;Skills&lt;/h2&gt;
  &lt;h3&gt;Frontend&lt;/h3&gt;
  &lt;ul&gt;
    &lt;li&gt;HTML5 &amp; CSS3&lt;/li&gt;
    &lt;li&gt;JavaScript (ES6+)&lt;/li&gt;
    &lt;li&gt;React&lt;/li&gt;
  &lt;/ul&gt;
  &lt;h3&gt;Backend&lt;/h3&gt;
  &lt;ul&gt;
    &lt;li&gt;Node.js&lt;/li&gt;
    &lt;li&gt;Python&lt;/li&gt;
  &lt;/ul&gt;
&lt;/section&gt;</code></pre>
<p><strong>Tips for these sections:</strong></p>
<ul>
<li>Use section IDs that match your navigation anchors</li>
<li>Keep the about section concise — 2-3 paragraphs max</li>
<li>Group skills logically (frontend, backend, tools, soft skills)</li>
<li>Don't forget alt text on your profile image</li>
<li>Use proper heading hierarchy (h2 for section, h3 for subsections)</li>
</ul>`,
              challenge: {
                description: 'Create a section with id="about" containing h2 "About Me" and a paragraph "I am a web developer who loves creating beautiful websites." Then create a section with id="skills" containing h2 "My Skills" and an unordered list with "HTML", "CSS", "JavaScript".',
                starterCode: '<!-- Build About and Skills sections -->\n',
                expectedOutput: '<section id="about">\n<h2>About Me</h2>\n<p>I am a web developer who loves creating beautiful websites.</p>\n</section>\n<section id="skills">\n<h2>My Skills</h2>\n<ul>\n<li>HTML</li>\n<li>CSS</li>\n<li>JavaScript</li>\n</ul>\n</section>',
                hints: [
                  'Section IDs must match the nav anchor links',
                  'Each section needs its own h2',
                  'Use an unordered list for skills',
                  'Keep proper semantic structure'
                ]
              },
              quiz: [
                {
                  question: 'Why must section IDs match the navigation href values?',
                  options: ['For styling', 'So anchor links scroll to the right section', 'For validation', 'It\'s not necessary'],
                  correct: 1
                },
                {
                  question: 'What\'s a good way to organize a skills section?',
                  options: ['One giant paragraph', 'Categorized lists with subheadings', 'A single numbered list', 'Tables only'],
                  correct: 1
                },
                {
                  question: 'What heading level should section titles use?',
                  options: ['h1', 'h2', 'h3', 'Any level'],
                  correct: 1
                }
              ]
            },
            {
              id: 'project1-3',
              title: 'Portfolio - Projects & Contact Footer',
              type: 'project',
              theory: `<h2>Portfolio - Projects & Contact Footer</h2>
<p>The projects section is the most important part of a portfolio — it shows your actual work. The contact section makes it easy for people to reach you.</p>
<p><strong>Projects Section:</strong></p>
<p>Each project should be an article (self-contained content) with a title, description, and link:</p>
<pre><code>&lt;section id="projects"&gt;
  &lt;h2&gt;My Projects&lt;/h2&gt;
  &lt;article&gt;
    &lt;h3&gt;Project Name&lt;/h3&gt;
    &lt;p&gt;A brief description of what this project does and technologies used.&lt;/p&gt;
    &lt;a href="https://project-url.com" target="_blank"&gt;View Project&lt;/a&gt;
  &lt;/article&gt;
&lt;/section&gt;</code></pre>
<p><strong>Contact Footer:</strong></p>
<p>Combine footer and contact info using semantic elements:</p>
<pre><code>&lt;footer id="contact"&gt;
  &lt;h2&gt;Contact Me&lt;/h2&gt;
  &lt;address&gt;
    &lt;p&gt;Email: &lt;a href="mailto:jane@example.com"&gt;jane@example.com&lt;/a&gt;&lt;/p&gt;
    &lt;p&gt;Phone: &lt;a href="tel:+1234567890"&gt;(123) 456-7890&lt;/a&gt;&lt;/p&gt;
  &lt;/address&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="https://github.com/jane"&gt;GitHub&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="https://linkedin.com/in/jane"&gt;LinkedIn&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;p&gt;&amp;copy; 2024 Jane Smith&lt;/p&gt;
&lt;/footer&gt;</code></pre>
<p><strong>Putting it all together:</strong></p>
<p>Your complete portfolio structure uses proper HTML5 semantics: <code>&lt;header&gt;</code> → <code>&lt;main&gt;</code> (containing sections and articles) → <code>&lt;footer&gt;</code>. This creates a well-structured, accessible, and SEO-friendly page.</p>`,
              challenge: {
                description: 'Create a projects section (id="projects") with h2 "Projects" and one article containing h3 "Todo App", paragraph "A task management application built with HTML, CSS, and JavaScript.", and a link "View Live" to "https://example.com". Then add a footer (id="contact") with h2 "Get In Touch", a paragraph with email link "Email Me" (href="mailto:jane@example.com"), and a paragraph "© 2024 Jane Smith".',
                starterCode: '<!-- Build Projects section and Contact footer -->\n',
                expectedOutput: '<section id="projects">\n<h2>Projects</h2>\n<article>\n<h3>Todo App</h3>\n<p>A task management application built with HTML, CSS, and JavaScript.</p>\n<a href="https://example.com">View Live</a>\n</article>\n</section>\n<footer id="contact">\n<h2>Get In Touch</h2>\n<p><a href="mailto:jane@example.com">Email Me</a></p>\n<p>&copy; 2024 Jane Smith</p>\n</footer>',
                hints: [
                  'Each project goes in an <article> element',
                  'Footer doubles as the contact section',
                  'Use mailto: for email links',
                  'Use &copy; for the copyright symbol'
                ]
              },
              quiz: [
                {
                  question: 'Why is <article> appropriate for project listings?',
                  options: ['It looks better', 'Each project is self-contained content', 'Articles have borders', 'It\'s required'],
                  correct: 1
                },
                {
                  question: 'What link protocol opens the email client?',
                  options: ['email:', 'mail:', 'mailto:', 'send:'],
                  correct: 2
                },
                {
                  question: 'What wraps the entire main content in a portfolio?',
                  options: ['<div id="content">', '<main>', '<body>', '<section>'],
                  correct: 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'html-advanced',
      title: 'Advanced HTML',
      description: 'Master multimedia, APIs, accessibility, SEO, and advanced document techniques',
      modules: [
        {
          id: 'multimedia',
          title: 'Multimedia',
          lessons: [
            {
              id: 'media-1',
              title: 'Audio Element',
              type: 'challenge',
              theory: `<h2>The Audio Element</h2>
<p>HTML5's <code>&lt;audio&gt;</code> element lets you embed sound content directly in web pages without needing third-party plugins like Flash.</p>
<pre><code>&lt;audio controls&gt;
  &lt;source src="song.mp3" type="audio/mpeg"&gt;
  &lt;source src="song.ogg" type="audio/ogg"&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;</code></pre>
<p><strong>Key attributes:</strong></p>
<ul>
<li><code>controls</code> — Shows play/pause, volume, seek bar (always include for UX)</li>
<li><code>autoplay</code> — Starts playing automatically (often blocked by browsers)</li>
<li><code>loop</code> — Repeats the audio continuously</li>
<li><code>muted</code> — Starts muted</li>
<li><code>preload</code> — Hint for loading: "auto", "metadata", or "none"</li>
</ul>
<p><strong>Multiple sources:</strong></p>
<p>Use multiple <code>&lt;source&gt;</code> elements for browser compatibility. The browser uses the first format it supports:</p>
<ul>
<li><strong>MP3</strong> (audio/mpeg) — Universal support, good compression</li>
<li><strong>OGG</strong> (audio/ogg) — Open format, good quality</li>
<li><strong>WAV</strong> (audio/wav) — Uncompressed, large files</li>
<li><strong>AAC</strong> (audio/aac) — Good compression, Apple ecosystem</li>
</ul>
<p>The text between the tags is fallback content shown in browsers that don't support <code>&lt;audio&gt;</code>. Always provide meaningful fallback.</p>
<p><strong>Accessibility:</strong> Provide transcripts for audio content so hearing-impaired users can access the information.</p>`,
              challenge: {
                description: 'Create an audio element with controls that has two sources: "podcast.mp3" (type audio/mpeg) and "podcast.ogg" (type audio/ogg), with fallback text "Your browser does not support audio."',
                starterCode: '<!-- Add an audio player -->\n',
                expectedOutput: '<audio controls>\n<source src="podcast.mp3" type="audio/mpeg">\n<source src="podcast.ogg" type="audio/ogg">\nYour browser does not support audio.\n</audio>',
                hints: [
                  'Use the <audio> element with controls attribute',
                  'Add <source> elements inside for each format',
                  'Include type attribute on each source',
                  'Fallback text goes between the tags'
                ]
              },
              quiz: [
                {
                  question: 'Which attribute shows the audio player controls?',
                  options: ['player', 'controls', 'show', 'visible'],
                  correct: 1
                },
                {
                  question: 'Why provide multiple source formats?',
                  options: ['Better quality', 'Browser compatibility', 'Smaller files', 'Required by HTML5'],
                  correct: 1
                },
                {
                  question: 'What does preload="none" do?',
                  options: ['Doesn\'t load the audio at all', 'Doesn\'t preload audio data', 'Removes the player', 'Mutes the audio'],
                  correct: 1
                },
                {
                  question: 'What audio format has universal browser support?',
                  options: ['OGG', 'WAV', 'MP3', 'FLAC'],
                  correct: 2
                }
              ]
            },
            {
              id: 'media-2',
              title: 'Video Element',
              type: 'challenge',
              theory: `<h2>The Video Element</h2>
<p>The <code>&lt;video&gt;</code> element embeds video content with built-in playback controls. Like audio, it works natively without plugins.</p>
<pre><code>&lt;video controls width="640" height="360" poster="thumbnail.jpg"&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;source src="video.webm" type="video/webm"&gt;
  Your browser does not support the video element.
&lt;/video&gt;</code></pre>
<p><strong>Video-specific attributes:</strong></p>
<ul>
<li><code>width</code> / <code>height</code> — Dimensions of the video player</li>
<li><code>poster</code> — Image shown before the video plays (thumbnail)</li>
<li><code>controls</code> — Shows player controls</li>
<li><code>autoplay</code> — Auto-plays (usually requires muted)</li>
<li><code>muted</code> — Starts without sound</li>
<li><code>loop</code> — Loops the video</li>
<li><code>playsinline</code> — Plays inline on mobile (doesn't go fullscreen)</li>
</ul>
<p><strong>Video formats:</strong></p>
<ul>
<li><strong>MP4</strong> (video/mp4) — H.264 codec, universal support</li>
<li><strong>WebM</strong> (video/webm) — VP8/VP9 codec, open format</li>
<li><strong>OGG</strong> (video/ogg) — Theora codec, open format</li>
</ul>
<p><strong>Captions and subtitles:</strong></p>
<pre><code>&lt;video controls&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;track src="captions.vtt" kind="captions" srclang="en" label="English" default&gt;
&lt;/video&gt;</code></pre>
<p>The <code>&lt;track&gt;</code> element adds subtitles, captions, or descriptions using WebVTT format files. The <code>kind</code> attribute specifies the track type.</p>`,
              challenge: {
                description: 'Create a video element with controls, width="800", height="450", and poster="preview.jpg". Add a source "intro.mp4" (type video/mp4) and a track element for English captions (src="captions.vtt", kind="captions", srclang="en", label="English", default).',
                starterCode: '<!-- Add a video player with captions -->\n',
                expectedOutput: '<video controls width="800" height="450" poster="preview.jpg">\n<source src="intro.mp4" type="video/mp4">\n<track src="captions.vtt" kind="captions" srclang="en" label="English" default>\n</video>',
                hints: [
                  'Video uses similar syntax to audio',
                  'poster shows a thumbnail before playing',
                  'track element adds captions/subtitles',
                  'Include kind, srclang, and label on track'
                ]
              },
              quiz: [
                {
                  question: 'What does the poster attribute display?',
                  options: ['A watermark', 'Image shown before video plays', 'The video title', 'A border image'],
                  correct: 1
                },
                {
                  question: 'Which element adds captions to a video?',
                  options: ['<caption>', '<subtitle>', '<track>', '<text>'],
                  correct: 2
                },
                {
                  question: 'What format do caption files use?',
                  options: ['SRT', 'WebVTT (.vtt)', 'TXT', 'XML'],
                  correct: 1
                },
                {
                  question: 'What attribute combination enables autoplay in most browsers?',
                  options: ['autoplay alone', 'autoplay with muted', 'autoplay with controls', 'autoplay with loop'],
                  correct: 1
                }
              ]
            },
            {
              id: 'media-3',
              title: 'Embedding External Content',
              type: 'challenge',
              theory: `<h2>Embedding External Content</h2>
<p>The <code>&lt;iframe&gt;</code> element embeds external web content — like YouTube videos, Google Maps, or other websites — inside your page.</p>
<pre><code>&lt;iframe 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  width="560" 
  height="315" 
  title="Video title for accessibility"
  allowfullscreen&gt;
&lt;/iframe&gt;</code></pre>
<p><strong>Common iframe attributes:</strong></p>
<ul>
<li><code>src</code> — URL of the page to embed</li>
<li><code>width</code> / <code>height</code> — Dimensions</li>
<li><code>title</code> — Describes the content (accessibility)</li>
<li><code>allowfullscreen</code> — Allows fullscreen mode</li>
<li><code>loading="lazy"</code> — Defers loading until visible</li>
<li><code>sandbox</code> — Restricts what the embedded page can do</li>
</ul>
<p><strong>Security with sandbox:</strong></p>
<pre><code>&lt;iframe src="external.html" sandbox="allow-scripts allow-same-origin"&gt;&lt;/iframe&gt;</code></pre>
<p>Sandbox values: <code>allow-scripts</code>, <code>allow-same-origin</code>, <code>allow-forms</code>, <code>allow-popups</code>, etc.</p>
<p><strong>The &lt;embed&gt; and &lt;object&gt; elements:</strong></p>
<ul>
<li><code>&lt;embed&gt;</code> — Embeds external content or plugins</li>
<li><code>&lt;object&gt;</code> — Embeds resources with fallback content</li>
</ul>
<pre><code>&lt;embed src="animation.swf" type="application/x-shockwave-flash"&gt;
&lt;object data="document.pdf" type="application/pdf" width="600" height="400"&gt;
  &lt;p&gt;PDF cannot be displayed. &lt;a href="document.pdf"&gt;Download&lt;/a&gt;&lt;/p&gt;
&lt;/object&gt;</code></pre>
<p><strong>Best practices:</strong> Always include <code>title</code> on iframes for screen readers. Use <code>loading="lazy"</code> for iframes below the fold. Consider privacy implications of embedding third-party content.</p>`,
              challenge: {
                description: 'Create an iframe embedding a YouTube video with src="https://www.youtube.com/embed/abc123", width="560", height="315", title="Tutorial Video", allowfullscreen, and loading="lazy".',
                starterCode: '<!-- Embed a YouTube video -->\n',
                expectedOutput: '<iframe src="https://www.youtube.com/embed/abc123" width="560" height="315" title="Tutorial Video" allowfullscreen loading="lazy"></iframe>',
                hints: [
                  'Use the <iframe> element',
                  'YouTube embed URLs use /embed/ path',
                  'Always add a title for accessibility',
                  'allowfullscreen needs no value'
                ]
              },
              quiz: [
                {
                  question: 'What does <iframe> embed?',
                  options: ['Images', 'Another web page inside your page', 'Audio only', 'Text files'],
                  correct: 1
                },
                {
                  question: 'Why is the title attribute important on iframes?',
                  options: ['SEO ranking', 'Screen readers describe the content', 'Displays a tooltip', 'Required by HTML5'],
                  correct: 1
                },
                {
                  question: 'What does the sandbox attribute do?',
                  options: ['Adds a border', 'Restricts embedded page capabilities', 'Creates a test environment', 'Blocks loading'],
                  correct: 1
                },
                {
                  question: 'Which is the correct YouTube embed URL format?',
                  options: ['youtube.com/watch?v=ID', 'youtube.com/embed/ID', 'youtube.com/video/ID', 'youtube.com/play/ID'],
                  correct: 1
                }
              ]
            },
            {
              id: 'media-4',
              title: 'Responsive Images & Picture Element',
              type: 'challenge',
              theory: `<h2>Responsive Images & Picture Element</h2>
<p>Responsive images serve different image files based on the user's device, screen size, or resolution — ensuring fast load times and appropriate quality.</p>
<p><strong>srcset and sizes attributes on &lt;img&gt;:</strong></p>
<pre><code>&lt;img 
  src="photo-800.jpg" 
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Responsive photo"&gt;</code></pre>
<p><strong>srcset</strong> lists available image files with their widths (w descriptor) or pixel densities (x descriptor). The browser picks the best match.</p>
<p><strong>sizes</strong> tells the browser how wide the image will display at different viewport widths, helping it choose from srcset.</p>
<p><strong>The &lt;picture&gt; element</strong> — Art direction control:</p>
<pre><code>&lt;picture&gt;
  &lt;source media="(max-width: 600px)" srcset="photo-mobile.jpg"&gt;
  &lt;source media="(max-width: 1200px)" srcset="photo-tablet.jpg"&gt;
  &lt;img src="photo-desktop.jpg" alt="Scenic landscape"&gt;
&lt;/picture&gt;</code></pre>
<p><strong>When to use which:</strong></p>
<ul>
<li><strong>srcset + sizes</strong> — Same image at different resolutions (resolution switching)</li>
<li><strong>&lt;picture&gt;</strong> — Different images for different screen sizes (art direction) or different formats</li>
</ul>
<p><strong>Format selection with picture:</strong></p>
<pre><code>&lt;picture&gt;
  &lt;source srcset="photo.avif" type="image/avif"&gt;
  &lt;source srcset="photo.webp" type="image/webp"&gt;
  &lt;img src="photo.jpg" alt="Fallback for older browsers"&gt;
&lt;/picture&gt;</code></pre>
<p>This serves modern formats (smaller files) to supporting browsers while keeping JPEG as fallback.</p>`,
              challenge: {
                description: 'Create a picture element with: a source for mobile (media="(max-width: 768px)", srcset="hero-mobile.jpg"), a source for tablet (media="(max-width: 1024px)", srcset="hero-tablet.jpg"), and a fallback img (src="hero-desktop.jpg", alt="Hero banner").',
                starterCode: '<!-- Create a responsive picture element -->\n',
                expectedOutput: '<picture>\n<source media="(max-width: 768px)" srcset="hero-mobile.jpg">\n<source media="(max-width: 1024px)" srcset="hero-tablet.jpg">\n<img src="hero-desktop.jpg" alt="Hero banner">\n</picture>',
                hints: [
                  'picture wraps source and img elements',
                  'source elements use media queries',
                  'The img is always last (fallback)',
                  'Order sources from smallest to largest'
                ]
              },
              quiz: [
                {
                  question: 'What does srcset provide?',
                  options: ['CSS styles', 'Multiple image options for the browser to choose', 'Image filters', 'Animation frames'],
                  correct: 1
                },
                {
                  question: 'When should you use <picture> over srcset?',
                  options: ['Always', 'When you need different images for different screen sizes', 'For better performance', 'When using PNG'],
                  correct: 1
                },
                {
                  question: 'What is the img inside <picture> for?',
                  options: ['Decoration', 'The main image', 'Fallback for unsupported browsers', 'Thumbnail'],
                  correct: 2
                },
                {
                  question: 'What does the "w" descriptor in srcset mean?',
                  options: ['Width of viewport', 'Width of the image file in pixels', 'Weight of the file', 'Web format'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'html5-apis',
          title: 'HTML5 APIs',
          lessons: [
            {
              id: 'api-1',
              title: 'Canvas Element',
              type: 'challenge',
              theory: `<h2>The Canvas Element</h2>
<p>The <code>&lt;canvas&gt;</code> element provides a drawable surface that you can use with JavaScript to create graphics, animations, games, and data visualizations.</p>
<pre><code>&lt;canvas id="myCanvas" width="400" height="300"&gt;
  Your browser does not support the canvas element.
&lt;/canvas&gt;</code></pre>
<p><strong>Key points about canvas:</strong></p>
<ul>
<li>Canvas is just a container — all drawing is done with JavaScript</li>
<li>Set width and height as attributes (not CSS) to avoid stretching</li>
<li>Content between tags is fallback for unsupported browsers</li>
<li>Canvas draws pixels — it's not scalable like SVG</li>
</ul>
<p><strong>Basic drawing with JavaScript:</strong></p>
<pre><code>&lt;script&gt;
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);

// Draw a circle
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();
&lt;/script&gt;</code></pre>
<p><strong>Canvas capabilities:</strong></p>
<ul>
<li>2D shapes: rectangles, circles, lines, curves</li>
<li>Text rendering and styling</li>
<li>Image manipulation and filters</li>
<li>Animations (using requestAnimationFrame)</li>
<li>3D graphics (using WebGL context)</li>
</ul>
<p><strong>Canvas vs SVG:</strong></p>
<ul>
<li>Canvas: Pixel-based, better for games and real-time graphics</li>
<li>SVG: Vector-based, better for icons, logos, and scalable graphics</li>
</ul>`,
              challenge: {
                description: 'Create a canvas element with id="gameCanvas", width="800", height="600", and fallback text "Canvas not supported in your browser."',
                starterCode: '<!-- Create a canvas element -->\n',
                expectedOutput: '<canvas id="gameCanvas" width="800" height="600">Canvas not supported in your browser.</canvas>',
                hints: [
                  'Canvas needs width and height attributes',
                  'Always include an id for JavaScript access',
                  'Fallback text goes between the tags',
                  'Don\'t use CSS for canvas dimensions'
                ]
              },
              quiz: [
                {
                  question: 'How is drawing done on a canvas?',
                  options: ['HTML attributes', 'CSS styles', 'JavaScript', 'Special canvas tags'],
                  correct: 2
                },
                {
                  question: 'Why set canvas width/height as attributes, not CSS?',
                  options: ['CSS doesn\'t work on canvas', 'To avoid stretching/distortion', 'Attributes load faster', 'It\'s required by HTML5'],
                  correct: 1
                },
                {
                  question: 'What is canvas best used for?',
                  options: ['Text content', 'Navigation menus', 'Games and dynamic graphics', 'Static images'],
                  correct: 2
                },
                {
                  question: 'How do you get the drawing context?',
                  options: ['canvas.draw()', 'canvas.getContext("2d")', 'canvas.pen()', 'new Context(canvas)'],
                  correct: 1
                }
              ]
            },
            {
              id: 'api-2',
              title: 'SVG Basics',
              type: 'challenge',
              theory: `<h2>SVG Basics</h2>
<p><strong>SVG (Scalable Vector Graphics)</strong> is an XML-based format for creating vector images directly in HTML. Unlike canvas pixels, SVG shapes scale perfectly at any size.</p>
<pre><code>&lt;svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;circle cx="100" cy="100" r="80" fill="blue" /&gt;
  &lt;rect x="50" y="50" width="100" height="100" fill="red" opacity="0.5" /&gt;
&lt;/svg&gt;</code></pre>
<p><strong>Common SVG elements:</strong></p>
<ul>
<li><code>&lt;circle&gt;</code> — cx, cy (center), r (radius)</li>
<li><code>&lt;rect&gt;</code> — x, y, width, height, rx/ry (rounded corners)</li>
<li><code>&lt;line&gt;</code> — x1, y1, x2, y2</li>
<li><code>&lt;ellipse&gt;</code> — cx, cy, rx, ry</li>
<li><code>&lt;polygon&gt;</code> — points (space-separated coordinate pairs)</li>
<li><code>&lt;text&gt;</code> — Text with x, y positioning</li>
<li><code>&lt;path&gt;</code> — Complex shapes using path commands</li>
</ul>
<p><strong>SVG attributes for styling:</strong></p>
<ul>
<li><code>fill</code> — Interior color</li>
<li><code>stroke</code> — Border/line color</li>
<li><code>stroke-width</code> — Border thickness</li>
<li><code>opacity</code> — Transparency (0-1)</li>
</ul>
<p><strong>Advantages of inline SVG:</strong></p>
<ul>
<li>Scales without quality loss (vector)</li>
<li>Can be styled with CSS</li>
<li>Can be animated with CSS or JavaScript</li>
<li>Individual elements are accessible to screen readers</li>
<li>Small file sizes for simple graphics</li>
</ul>
<p>SVG is perfect for icons, logos, illustrations, charts, and any graphics that need to look sharp at all sizes.</p>`,
              challenge: {
                description: 'Create an SVG (width="300", height="200") containing a blue rectangle (x="10", y="10", width="280", height="180", fill="blue") and a white circle (cx="150", cy="100", r="60", fill="white").',
                starterCode: '<!-- Create an SVG with shapes -->\n',
                expectedOutput: '<svg width="300" height="200">\n<rect x="10" y="10" width="280" height="180" fill="blue"></rect>\n<circle cx="150" cy="100" r="60" fill="white"></circle>\n</svg>',
                hints: [
                  'SVG contains shape elements',
                  'rect needs x, y, width, height',
                  'circle needs cx, cy, r (radius)',
                  'fill sets the color'
                ]
              },
              quiz: [
                {
                  question: 'What does SVG stand for?',
                  options: ['Simple Vector Graphics', 'Scalable Vector Graphics', 'Standard Visual Graphics', 'Styled Vector Geometry'],
                  correct: 1
                },
                {
                  question: 'What happens when you zoom into an SVG?',
                  options: ['It gets pixelated', 'It stays sharp at any size', 'It breaks', 'It gets blurry'],
                  correct: 1
                },
                {
                  question: 'Which attribute sets the fill color of an SVG shape?',
                  options: ['color', 'background', 'fill', 'bg-color'],
                  correct: 2
                },
                {
                  question: 'Can SVG elements be styled with CSS?',
                  options: ['No', 'Yes', 'Only with inline styles', 'Only stroke and fill'],
                  correct: 1
                }
              ]
            },
            {
              id: 'api-3',
              title: 'Web Storage & Data Attributes',
              type: 'challenge',
              theory: `<h2>Web Storage & Data Attributes</h2>
<p>HTML5 introduced <strong>Web Storage</strong> for saving data in the browser and <strong>data attributes</strong> for embedding custom data in HTML elements.</p>
<p><strong>Data Attributes (data-*):</strong></p>
<p>Custom attributes that store extra information on HTML elements:</p>
<pre><code>&lt;div id="product" data-id="123" data-price="29.99" data-category="electronics"&gt;
  Product Name
&lt;/div&gt;

&lt;button data-action="delete" data-target="item-5"&gt;Delete&lt;/button&gt;</code></pre>
<p><strong>Rules for data attributes:</strong></p>
<ul>
<li>Must start with <code>data-</code></li>
<li>Can contain any value (strings)</li>
<li>Multiple words use hyphens: <code>data-user-name</code></li>
<li>Accessed in JavaScript via <code>element.dataset.propertyName</code></li>
<li>Can be targeted in CSS: <code>[data-category="electronics"]</code></li>
</ul>
<p><strong>Web Storage API (localStorage & sessionStorage):</strong></p>
<p>While accessed via JavaScript, the HTML setup is important:</p>
<pre><code>&lt;script&gt;
// localStorage persists until cleared
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');

// sessionStorage clears when tab closes
sessionStorage.setItem('tempData', 'value');
&lt;/script&gt;</code></pre>
<p><strong>localStorage vs sessionStorage:</strong></p>
<ul>
<li><code>localStorage</code> — Persists until explicitly cleared. Shared across tabs.</li>
<li><code>sessionStorage</code> — Cleared when the browser tab closes. Tab-specific.</li>
</ul>
<p>Data attributes are a clean way to attach metadata to elements without using hidden inputs or JavaScript variables. They keep your HTML semantic while providing hooks for JavaScript functionality.</p>`,
              challenge: {
                description: 'Create a div with id="user-card" and three data attributes: data-user-id="42", data-role="admin", data-joined="2024-01-15". Inside it, put an h3 "John Doe" and a paragraph "System Administrator".',
                starterCode: '<!-- Create an element with data attributes -->\n',
                expectedOutput: '<div id="user-card" data-user-id="42" data-role="admin" data-joined="2024-01-15">\n<h3>John Doe</h3>\n<p>System Administrator</p>\n</div>',
                hints: [
                  'Data attributes start with data-',
                  'They go on the element like any attribute',
                  'Values are always strings',
                  'Use hyphens for multi-word names'
                ]
              },
              quiz: [
                {
                  question: 'What prefix must custom data attributes have?',
                  options: ['custom-', 'attr-', 'data-', 'info-'],
                  correct: 2
                },
                {
                  question: 'How do you access data-user-id in JavaScript?',
                  options: ['element.data.userId', 'element.dataset.userId', 'element.getAttribute("userId")', 'element.userData.id'],
                  correct: 1
                },
                {
                  question: 'What is the difference between localStorage and sessionStorage?',
                  options: ['Size limit', 'localStorage persists, sessionStorage clears on tab close', 'Speed', 'Security level'],
                  correct: 1
                },
                {
                  question: 'Can CSS target data attributes?',
                  options: ['No', 'Yes, using attribute selectors', 'Only with JavaScript', 'Only data-class'],
                  correct: 1
                }
              ]
            },
            {
              id: 'api-4',
              title: 'Geolocation & Drag and Drop',
              type: 'challenge',
              theory: `<h2>Geolocation & Drag and Drop</h2>
<p>HTML5 introduced several powerful APIs that extend what's possible in the browser. Two commonly used ones are the Geolocation API and the Drag and Drop API.</p>
<p><strong>Drag and Drop:</strong></p>
<p>HTML5 makes elements draggable with the <code>draggable</code> attribute:</p>
<pre><code>&lt;div draggable="true" id="drag-item"&gt;Drag me!&lt;/div&gt;
&lt;div id="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)"&gt;
  Drop here
&lt;/div&gt;</code></pre>
<p><strong>Drag and Drop attributes:</strong></p>
<ul>
<li><code>draggable="true"</code> — Makes an element draggable</li>
<li><code>ondragstart</code> — Fires when dragging begins</li>
<li><code>ondragover</code> — Fires when dragging over a target (must prevent default)</li>
<li><code>ondrop</code> — Fires when dropped on a target</li>
<li><code>ondragend</code> — Fires when dragging ends</li>
</ul>
<p><strong>Geolocation API:</strong></p>
<p>Requests the user's geographic location (requires permission):</p>
<pre><code>&lt;button onclick="getLocation()"&gt;Find My Location&lt;/button&gt;
&lt;p id="location"&gt;&lt;/p&gt;
&lt;script&gt;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}
function showPosition(position) {
  document.getElementById("location").innerHTML = 
    "Lat: " + position.coords.latitude + 
    " Long: " + position.coords.longitude;
}
&lt;/script&gt;</code></pre>
<p><strong>Other HTML5 APIs worth knowing:</strong></p>
<ul>
<li><strong>Web Workers</strong> — Run JavaScript in background threads</li>
<li><strong>History API</strong> — Manipulate browser history</li>
<li><strong>Notification API</strong> — Show system notifications</li>
<li><strong>Fullscreen API</strong> — Make elements fullscreen</li>
</ul>`,
              challenge: {
                description: 'Create a draggable div (id="item", draggable="true") with text "Drag Me" and a drop target div (id="dropzone") with text "Drop Here". The dropzone should have ondrop="drop(event)" and ondragover="allowDrop(event)".',
                starterCode: '<!-- Create draggable and drop target elements -->\n',
                expectedOutput: '<div id="item" draggable="true">Drag Me</div>\n<div id="dropzone" ondrop="drop(event)" ondragover="allowDrop(event)">Drop Here</div>',
                hints: [
                  'Add draggable="true" to make an element draggable',
                  'The drop zone needs ondrop and ondragover handlers',
                  'ondragover must prevent default to allow dropping',
                  'Both divs need id attributes'
                ]
              },
              quiz: [
                {
                  question: 'What attribute makes an element draggable?',
                  options: ['drag="true"', 'draggable="true"', 'movable="true"', 'canDrag="true"'],
                  correct: 1
                },
                {
                  question: 'Why must ondragover prevent default?',
                  options: ['To style the element', 'By default, dropping is not allowed', 'To trigger animations', 'To stop scrolling'],
                  correct: 1
                },
                {
                  question: 'What does the Geolocation API require?',
                  options: ['An API key', 'User permission', 'HTTPS only', 'Both user permission and usually HTTPS'],
                  correct: 3
                },
                {
                  question: 'Which HTML5 API runs JavaScript in a background thread?',
                  options: ['Geolocation', 'Web Workers', 'Drag and Drop', 'Storage'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'accessibility',
          title: 'Accessibility',
          lessons: [
            {
              id: 'a11y-1',
              title: 'ARIA Roles & Attributes',
              type: 'challenge',
              theory: `<h2>ARIA Roles & Attributes</h2>
<p><strong>ARIA (Accessible Rich Internet Applications)</strong> provides attributes that enhance accessibility when native HTML semantics aren't sufficient. ARIA adds meaning for assistive technologies like screen readers.</p>
<p><strong>The first rule of ARIA:</strong> Don't use ARIA if a native HTML element already conveys the meaning. For example, use <code>&lt;button&gt;</code> instead of <code>&lt;div role="button"&gt;</code>.</p>
<p><strong>ARIA Roles:</strong></p>
<pre><code>&lt;div role="navigation"&gt;...&lt;/div&gt;
&lt;div role="main"&gt;...&lt;/div&gt;
&lt;div role="alert"&gt;Error message&lt;/div&gt;
&lt;div role="dialog"&gt;Modal content&lt;/div&gt;</code></pre>
<p><strong>Common ARIA attributes:</strong></p>
<ul>
<li><code>aria-label</code> — Labels an element that has no visible text</li>
<li><code>aria-labelledby</code> — Points to another element's ID for label text</li>
<li><code>aria-describedby</code> — Points to element with additional description</li>
<li><code>aria-hidden="true"</code> — Hides element from screen readers</li>
<li><code>aria-expanded</code> — Indicates if a collapsible section is open</li>
<li><code>aria-required</code> — Indicates required field</li>
<li><code>aria-live</code> — Announces dynamic content changes</li>
</ul>
<pre><code>&lt;button aria-label="Close menu" aria-expanded="false"&gt;
  &lt;span aria-hidden="true"&gt;&amp;times;&lt;/span&gt;
&lt;/button&gt;

&lt;div aria-live="polite" id="status"&gt;
  &lt;!-- Screen reader announces changes here --&gt;
&lt;/div&gt;</code></pre>
<p><strong>ARIA live regions</strong> announce content updates without requiring focus:</p>
<ul>
<li><code>aria-live="polite"</code> — Waits for user to finish current task</li>
<li><code>aria-live="assertive"</code> — Interrupts immediately (for errors)</li>
</ul>`,
              challenge: {
                description: 'Create a button with aria-label="Close dialog" and aria-expanded="false" containing an X character. Then create a div with role="alert" and aria-live="assertive" containing "Form submitted successfully!"',
                starterCode: '<!-- Add ARIA attributes for accessibility -->\n',
                expectedOutput: '<button aria-label="Close dialog" aria-expanded="false">X</button>\n<div role="alert" aria-live="assertive">Form submitted successfully!</div>',
                hints: [
                  'aria-label provides text alternative for screen readers',
                  'aria-expanded indicates toggle state',
                  'role="alert" makes content announced immediately',
                  'aria-live="assertive" interrupts to announce'
                ]
              },
              quiz: [
                {
                  question: 'What is the first rule of ARIA?',
                  options: ['Always use ARIA', 'Don\'t use ARIA if native HTML works', 'Use ARIA on every element', 'ARIA is required for validation'],
                  correct: 1
                },
                {
                  question: 'What does aria-hidden="true" do?',
                  options: ['Hides visually', 'Hides from screen readers', 'Hides from search engines', 'Deletes the element'],
                  correct: 1
                },
                {
                  question: 'When should you use aria-live="assertive"?',
                  options: ['For all updates', 'For important/urgent messages', 'For navigation', 'For images'],
                  correct: 1
                },
                {
                  question: 'What does aria-labelledby reference?',
                  options: ['A URL', 'Another element\'s ID', 'A CSS class', 'A file path'],
                  correct: 1
                }
              ]
            },
            {
              id: 'a11y-2',
              title: 'Keyboard Navigation & Focus',
              type: 'challenge',
              theory: `<h2>Keyboard Navigation & Focus</h2>
<p>Many users navigate websites using only a keyboard — either by preference or necessity. Ensuring your HTML supports keyboard navigation is a fundamental accessibility requirement.</p>
<p><strong>Naturally focusable elements:</strong></p>
<ul>
<li>Links (<code>&lt;a href&gt;</code>)</li>
<li>Buttons (<code>&lt;button&gt;</code>)</li>
<li>Form inputs (<code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>)</li>
</ul>
<p><strong>The tabindex attribute:</strong></p>
<ul>
<li><code>tabindex="0"</code> — Makes a non-interactive element focusable in natural order</li>
<li><code>tabindex="-1"</code> — Makes element focusable via JavaScript only (not Tab key)</li>
<li><code>tabindex="1+"</code> — Avoid! Changes tab order (creates confusion)</li>
</ul>
<pre><code>&lt;div tabindex="0" role="button" onkeydown="handleKey(event)"&gt;
  Custom Button
&lt;/div&gt;

&lt;section id="content" tabindex="-1"&gt;
  &lt;!-- Can receive focus programmatically for skip links --&gt;
&lt;/section&gt;</code></pre>
<p><strong>Skip links:</strong></p>
<p>Allow keyboard users to skip repetitive navigation:</p>
<pre><code>&lt;a href="#main-content" class="skip-link"&gt;Skip to main content&lt;/a&gt;
&lt;nav&gt;...long navigation...&lt;/nav&gt;
&lt;main id="main-content" tabindex="-1"&gt;
  Content starts here
&lt;/main&gt;</code></pre>
<p><strong>Focus indicators:</strong> Never remove the default focus outline without providing a visible alternative. The outline helps keyboard users know where they are on the page.</p>
<p><strong>Key handlers:</strong> Custom interactive elements must respond to Enter and Space keys, not just clicks.</p>`,
              challenge: {
                description: 'Create a skip link (class="skip-link") that links to "#main" with text "Skip to content". Then create a main element with id="main" and tabindex="-1" containing an h1 "Page Content".',
                starterCode: '<!-- Create a skip link for keyboard navigation -->\n',
                expectedOutput: '<a href="#main" class="skip-link">Skip to content</a>\n<main id="main" tabindex="-1">\n<h1>Page Content</h1>\n</main>',
                hints: [
                  'Skip link is a regular anchor tag',
                  'It links to the main content area by ID',
                  'tabindex="-1" allows programmatic focus',
                  'Main content gets the matching id'
                ]
              },
              quiz: [
                {
                  question: 'What does tabindex="0" do?',
                  options: ['Removes from tab order', 'Adds to natural tab order', 'Makes it first in tab order', 'Disables focus'],
                  correct: 1
                },
                {
                  question: 'Why should you avoid tabindex > 0?',
                  options: ['It\'s invalid', 'It creates confusing custom tab order', 'It breaks the page', 'It\'s too slow'],
                  correct: 1
                },
                {
                  question: 'What is a skip link for?',
                  options: ['Skipping ads', 'Bypassing repetitive navigation', 'Skipping animations', 'Hiding content'],
                  correct: 1
                },
                {
                  question: 'Why is tabindex="-1" useful?',
                  options: ['Hides the element', 'Allows focus via JavaScript without Tab access', 'Disables the element', 'Makes it invisible'],
                  correct: 1
                }
              ]
            },
            {
              id: 'a11y-3',
              title: 'Alt Text & Accessible Media',
              type: 'challenge',
              theory: `<h2>Alt Text & Accessible Media</h2>
<p>Making media content accessible ensures that all users can understand your page's content, regardless of their abilities.</p>
<p><strong>Writing good alt text:</strong></p>
<ul>
<li><strong>Descriptive:</strong> "Golden retriever playing fetch in a park" (not "dog")</li>
<li><strong>Functional:</strong> For buttons/links, describe the action: "Submit form" or "Go to homepage"</li>
<li><strong>Contextual:</strong> Consider what information the image conveys in context</li>
<li><strong>Concise:</strong> Usually 1-2 sentences. Don't start with "Image of" or "Picture of"</li>
</ul>
<p><strong>When to use empty alt (alt=""):</strong></p>
<ul>
<li>Decorative images that add no information</li>
<li>Images already described by adjacent text</li>
<li>Background textures or spacers</li>
</ul>
<pre><code>&lt;!-- Informative image --&gt;
&lt;img src="chart.png" alt="Sales grew 45% in Q4 2024 compared to Q3"&gt;

&lt;!-- Decorative image --&gt;
&lt;img src="divider.png" alt=""&gt;

&lt;!-- Complex image with extended description --&gt;
&lt;img src="diagram.png" alt="Network topology diagram" aria-describedby="diagram-desc"&gt;
&lt;p id="diagram-desc"&gt;The diagram shows three servers connected to a load balancer...&lt;/p&gt;</code></pre>
<p><strong>Accessible video and audio:</strong></p>
<ul>
<li>Provide captions for video (deaf/hard-of-hearing users)</li>
<li>Provide transcripts for audio content</li>
<li>Audio descriptions for important visual content in videos</li>
<li>Don't autoplay media with sound</li>
</ul>
<p><strong>Testing tip:</strong> Try navigating your page with a screen reader (VoiceOver on Mac, NVDA on Windows) to experience how accessible your content is.</p>`,
              challenge: {
                description: 'Create an informative image (src="data-chart.png") with descriptive alt text "Bar chart showing monthly revenue: Jan $10K, Feb $15K, Mar $22K". Then create a decorative image (src="decorative-line.png") with empty alt text.',
                starterCode: '<!-- Use proper alt text strategies -->\n',
                expectedOutput: '<img src="data-chart.png" alt="Bar chart showing monthly revenue: Jan $10K, Feb $15K, Mar $22K">\n<img src="decorative-line.png" alt="">',
                hints: [
                  'Informative images need descriptive alt text',
                  'Decorative images use alt="" (empty)',
                  'Describe what information the image conveys',
                  'Empty alt tells screen readers to skip it'
                ]
              },
              quiz: [
                {
                  question: 'When should alt text be empty (alt="")?',
                  options: ['Always', 'For decorative/non-informative images', 'For important images', 'Never'],
                  correct: 1
                },
                {
                  question: 'What should alt text for a link icon describe?',
                  options: ['The icon appearance', 'The link\'s destination or action', 'The file format', 'The icon size'],
                  correct: 1
                },
                {
                  question: 'What accessibility feature should videos have?',
                  options: ['High resolution', 'Captions/subtitles', 'Autoplay', 'Background music'],
                  correct: 1
                },
                {
                  question: 'How should alt text begin?',
                  options: ['Image of...', 'Picture showing...', 'Direct description of content', 'Alt:'],
                  correct: 2
                }
              ]
            },
            {
              id: 'a11y-4',
              title: 'Accessible Forms & Error Handling',
              type: 'challenge',
              theory: `<h2>Accessible Forms & Error Handling</h2>
<p>Forms are one of the most important areas for accessibility. Users with disabilities must be able to understand, fill out, and submit forms independently.</p>
<p><strong>Essential form accessibility:</strong></p>
<pre><code>&lt;form aria-labelledby="form-title"&gt;
  &lt;h2 id="form-title"&gt;Registration Form&lt;/h2&gt;
  
  &lt;label for="email"&gt;Email (required):&lt;/label&gt;
  &lt;input type="email" id="email" name="email" 
    required 
    aria-required="true"
    aria-describedby="email-help email-error"&gt;
  &lt;span id="email-help"&gt;We'll never share your email.&lt;/span&gt;
  &lt;span id="email-error" role="alert" aria-live="polite"&gt;&lt;/span&gt;
&lt;/form&gt;</code></pre>
<p><strong>Key principles:</strong></p>
<ul>
<li>Every input MUST have a visible label (or aria-label)</li>
<li>Use aria-describedby to link help text and error messages</li>
<li>Group related inputs with fieldset/legend</li>
<li>Error messages should use role="alert" for immediate announcement</li>
<li>Indicate required fields clearly (visually and with aria-required)</li>
</ul>
<p><strong>Error handling patterns:</strong></p>
<pre><code>&lt;div role="alert" aria-live="assertive"&gt;
  &lt;h3&gt;Please fix the following errors:&lt;/h3&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#email"&gt;Email is required&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#password"&gt;Password must be 8+ characters&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
<p><strong>Best practices:</strong></p>
<ul>
<li>Show error summary at the top linking to each error field</li>
<li>Display inline errors near the relevant input</li>
<li>Use color PLUS text/icons for errors (not color alone)</li>
<li>Move focus to error summary on submission failure</li>
<li>Mark invalid fields with aria-invalid="true"</li>
</ul>`,
              challenge: {
                description: 'Create a form input for "password" with: label "Password (required):", input (type="password", id="pw", name="password", required, aria-required="true", aria-describedby="pw-help"), and a span (id="pw-help") saying "Must be at least 8 characters".',
                starterCode: '<!-- Create an accessible form field -->\n',
                expectedOutput: '<label for="pw">Password (required):</label>\n<input type="password" id="pw" name="password" required aria-required="true" aria-describedby="pw-help">\n<span id="pw-help">Must be at least 8 characters</span>',
                hints: [
                  'Label for must match input id',
                  'aria-describedby links to the help text',
                  'aria-required communicates to screen readers',
                  'Help text needs an id for aria-describedby'
                ]
              },
              quiz: [
                {
                  question: 'What does aria-describedby do for form inputs?',
                  options: ['Adds a tooltip', 'Links to element with additional description', 'Validates the input', 'Creates placeholder text'],
                  correct: 1
                },
                {
                  question: 'How should form errors be announced to screen readers?',
                  options: ['They\'re automatic', 'Using role="alert"', 'By changing colors', 'Using bold text'],
                  correct: 1
                },
                {
                  question: 'Why shouldn\'t errors rely solely on color?',
                  options: ['Colors look bad', 'Color-blind users won\'t see them', 'It\'s against HTML spec', 'Screens vary too much'],
                  correct: 1
                },
                {
                  question: 'What marks an input as invalid for screen readers?',
                  options: ['class="invalid"', 'aria-invalid="true"', 'invalid="true"', 'error="true"'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'seo-basics',
          title: 'SEO Basics',
          lessons: [
            {
              id: 'seo-1',
              title: 'Search Engine Optimization Fundamentals',
              type: 'challenge',
              theory: `<h2>SEO Fundamentals</h2>
<p><strong>SEO (Search Engine Optimization)</strong> is the practice of structuring your HTML to help search engines understand, index, and rank your content. Good HTML structure is the foundation of technical SEO.</p>
<p><strong>How search engines work:</strong></p>
<ol>
<li><strong>Crawling</strong> — Bots follow links to discover pages</li>
<li><strong>Indexing</strong> — Content is analyzed and stored</li>
<li><strong>Ranking</strong> — Pages are ordered by relevance for queries</li>
</ol>
<p><strong>HTML elements that impact SEO:</strong></p>
<ul>
<li><code>&lt;title&gt;</code> — Most important on-page SEO element (appears in search results)</li>
<li><code>&lt;meta name="description"&gt;</code> — Snippet shown in search results</li>
<li><code>&lt;h1&gt; - &lt;h6&gt;</code> — Heading hierarchy shows content structure</li>
<li><code>&lt;a&gt;</code> — Links pass authority; anchor text describes destinations</li>
<li><code>&lt;img alt&gt;</code> — Helps images appear in image search</li>
<li>Semantic elements — Help bots understand page structure</li>
</ul>
<p><strong>Title tag best practices:</strong></p>
<ul>
<li>Keep under 60 characters</li>
<li>Include primary keyword near the beginning</li>
<li>Make each page title unique</li>
<li>Format: "Primary Keyword - Brand Name"</li>
</ul>
<p><strong>Meta description best practices:</strong></p>
<ul>
<li>Keep under 160 characters</li>
<li>Include a call to action</li>
<li>Make it compelling (it's your search result "ad copy")</li>
<li>Include relevant keywords naturally</li>
</ul>`,
              challenge: {
                description: 'Create a head section with: a title "Learn HTML - Free Web Development Tutorial | CodeAcademy" and a meta description "Master HTML from scratch with our free tutorial. Learn tags, forms, semantic elements, and build your first website today."',
                starterCode: '<!-- Create SEO-optimized head content -->\n',
                expectedOutput: '<head>\n<title>Learn HTML - Free Web Development Tutorial | CodeAcademy</title>\n<meta name="description" content="Master HTML from scratch with our free tutorial. Learn tags, forms, semantic elements, and build your first website today.">\n</head>',
                hints: [
                  'Title should be descriptive with keywords',
                  'Meta description uses name and content attributes',
                  'Keep title under 60 characters',
                  'Description should be compelling'
                ]
              },
              quiz: [
                {
                  question: 'What is the most important on-page SEO element?',
                  options: ['Meta keywords', 'Title tag', 'H1 heading', 'Meta description'],
                  correct: 1
                },
                {
                  question: 'Where does the meta description appear?',
                  options: ['On the page', 'In search result snippets', 'In the browser tab', 'In page headers'],
                  correct: 1
                },
                {
                  question: 'What is the recommended max length for title tags?',
                  options: ['30 characters', '60 characters', '100 characters', '160 characters'],
                  correct: 1
                },
                {
                  question: 'What are the three steps of how search engines work?',
                  options: ['Read, Save, Show', 'Crawl, Index, Rank', 'Scan, Store, Sort', 'Find, Parse, Display'],
                  correct: 1
                }
              ]
            },
            {
              id: 'seo-2',
              title: 'Structured Data & Open Graph',
              type: 'challenge',
              theory: `<h2>Structured Data & Open Graph</h2>
<p><strong>Structured data</strong> helps search engines understand your content better, potentially earning rich snippets in search results (star ratings, images, prices, etc.).</p>
<p><strong>JSON-LD structured data:</strong></p>
<pre><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Learn HTML",
  "author": {"@type": "Person", "name": "Jane Doe"},
  "datePublished": "2024-01-15"
}
&lt;/script&gt;</code></pre>
<p><strong>Open Graph meta tags</strong> (for social media sharing):</p>
<pre><code>&lt;meta property="og:title" content="My Page Title"&gt;
&lt;meta property="og:description" content="A great description"&gt;
&lt;meta property="og:image" content="https://example.com/image.jpg"&gt;
&lt;meta property="og:url" content="https://example.com/page"&gt;
&lt;meta property="og:type" content="website"&gt;</code></pre>
<p><strong>Twitter Card meta tags:</strong></p>
<pre><code>&lt;meta name="twitter:card" content="summary_large_image"&gt;
&lt;meta name="twitter:title" content="My Page Title"&gt;
&lt;meta name="twitter:description" content="Description"&gt;
&lt;meta name="twitter:image" content="https://example.com/image.jpg"&gt;</code></pre>
<p><strong>Why these matter:</strong></p>
<ul>
<li>Structured data can earn rich snippets in Google (stars, prices, etc.)</li>
<li>Open Graph controls how your page looks when shared on Facebook, LinkedIn</li>
<li>Twitter Cards control appearance on Twitter/X</li>
<li>All improve click-through rates from search and social</li>
</ul>`,
              challenge: {
                description: 'Add Open Graph meta tags for a blog post: og:title "10 HTML Tips for Beginners", og:description "Essential HTML tips every new developer should know", og:image "https://example.com/html-tips.jpg", og:type "article".',
                starterCode: '<!-- Add Open Graph meta tags -->\n',
                expectedOutput: '<meta property="og:title" content="10 HTML Tips for Beginners">\n<meta property="og:description" content="Essential HTML tips every new developer should know">\n<meta property="og:image" content="https://example.com/html-tips.jpg">\n<meta property="og:type" content="article">',
                hints: [
                  'Open Graph uses property attribute, not name',
                  'Each og: tag is a separate meta element',
                  'Content attribute holds the value',
                  'og:type indicates the content type'
                ]
              },
              quiz: [
                {
                  question: 'What do Open Graph tags control?',
                  options: ['Page styling', 'How pages appear when shared on social media', 'JavaScript behavior', 'Browser rendering'],
                  correct: 1
                },
                {
                  question: 'What format is recommended for structured data?',
                  options: ['XML', 'JSON-LD', 'CSV', 'YAML'],
                  correct: 1
                },
                {
                  question: 'What can structured data earn in search results?',
                  options: ['Higher position', 'Rich snippets', 'Paid placement', 'More keywords'],
                  correct: 1
                },
                {
                  question: 'Open Graph meta tags use which attribute for the property name?',
                  options: ['name', 'property', 'type', 'og'],
                  correct: 1
                }
              ]
            },
            {
              id: 'seo-3',
              title: 'Semantic SEO & Link Building',
              type: 'challenge',
              theory: `<h2>Semantic SEO & Link Building</h2>
<p>Beyond meta tags, how you structure your HTML content directly impacts how well search engines understand and rank your pages.</p>
<p><strong>Heading hierarchy for SEO:</strong></p>
<pre><code>&lt;h1&gt;Main Topic (only one per page)&lt;/h1&gt;
  &lt;h2&gt;Major Subtopic&lt;/h2&gt;
    &lt;h3&gt;Supporting Point&lt;/h3&gt;
    &lt;h3&gt;Supporting Point&lt;/h3&gt;
  &lt;h2&gt;Another Major Subtopic&lt;/h2&gt;
    &lt;h3&gt;Supporting Detail&lt;/h3&gt;</code></pre>
<p><strong>Link SEO best practices:</strong></p>
<ul>
<li>Use descriptive anchor text (not "click here")</li>
<li><code>rel="nofollow"</code> — Tells search engines not to follow/pass authority</li>
<li><code>rel="sponsored"</code> — Marks paid links</li>
<li><code>rel="ugc"</code> — User-generated content links</li>
</ul>
<pre><code>&lt;!-- Good: descriptive anchor text --&gt;
&lt;a href="/guide"&gt;complete HTML guide for beginners&lt;/a&gt;

&lt;!-- Bad: non-descriptive --&gt;
&lt;a href="/guide"&gt;click here&lt;/a&gt;

&lt;!-- Nofollow external link --&gt;
&lt;a href="https://external.com" rel="nofollow"&gt;External resource&lt;/a&gt;</code></pre>
<p><strong>Canonical URLs:</strong></p>
<pre><code>&lt;link rel="canonical" href="https://example.com/original-page"&gt;</code></pre>
<p>Tells search engines which version of a page is the "official" one (prevents duplicate content issues).</p>
<p><strong>Robots meta:</strong></p>
<pre><code>&lt;meta name="robots" content="index, follow"&gt;
&lt;meta name="robots" content="noindex, nofollow"&gt;</code></pre>
<p>Controls whether search engines index the page and follow its links.</p>`,
              challenge: {
                description: 'Create a link with descriptive text "Read our comprehensive CSS tutorial" linking to "/tutorials/css" and a canonical link element pointing to "https://example.com/tutorials/html".',
                starterCode: '<!-- Create SEO-friendly link and canonical -->\n',
                expectedOutput: '<a href="/tutorials/css">Read our comprehensive CSS tutorial</a>\n<link rel="canonical" href="https://example.com/tutorials/html">',
                hints: [
                  'Use descriptive text, not "click here"',
                  'Canonical uses <link> element with rel="canonical"',
                  'The href is the canonical URL',
                  'Descriptive anchor text helps SEO'
                ]
              },
              quiz: [
                {
                  question: 'What is bad anchor text for SEO?',
                  options: ['"Read our HTML guide"', '"click here"', '"HTML tutorial for beginners"', '"Learn more about CSS"'],
                  correct: 1
                },
                {
                  question: 'What does rel="nofollow" tell search engines?',
                  options: ['Don\'t display the link', 'Don\'t pass authority through this link', 'The link is broken', 'The link is internal'],
                  correct: 1
                },
                {
                  question: 'What is a canonical URL?',
                  options: ['The shortest URL', 'The official version of a page', 'The homepage', 'The first URL created'],
                  correct: 1
                },
                {
                  question: 'What does "noindex, nofollow" in robots meta do?',
                  options: ['Speeds up the page', 'Prevents indexing and link following', 'Makes the page private', 'Removes from cache'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'meta-head',
          title: 'Meta & Head',
          lessons: [
            {
              id: 'meta-1',
              title: 'Essential Meta Tags',
              type: 'challenge',
              theory: `<h2>Essential Meta Tags</h2>
<p>The <code>&lt;head&gt;</code> section contains metadata — information about your page that isn't displayed directly but is crucial for browsers, search engines, and social platforms.</p>
<p><strong>Must-have meta tags:</strong></p>
<pre><code>&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Page Title&lt;/title&gt;
  &lt;meta name="description" content="Page description"&gt;
&lt;/head&gt;</code></pre>
<p><strong>Character encoding (<code>charset</code>):</strong></p>
<ul>
<li><code>UTF-8</code> supports virtually all characters from all languages</li>
<li>Must be within the first 1024 bytes of the document</li>
<li>Without it, special characters may display incorrectly</li>
</ul>
<p><strong>Viewport meta tag:</strong></p>
<ul>
<li>Essential for responsive design on mobile devices</li>
<li><code>width=device-width</code> — Sets viewport to device width</li>
<li><code>initial-scale=1.0</code> — Sets initial zoom level</li>
<li>Without it, mobile browsers render at desktop width and zoom out</li>
</ul>
<p><strong>Other useful meta tags:</strong></p>
<ul>
<li><code>&lt;meta name="author" content="Name"&gt;</code></li>
<li><code>&lt;meta name="theme-color" content="#ffffff"&gt;</code> — Browser address bar color on mobile</li>
<li><code>&lt;meta http-equiv="refresh" content="30"&gt;</code> — Auto-refresh (use sparingly)</li>
<li><code>&lt;meta name="format-detection" content="telephone=no"&gt;</code> — Prevent auto-linking phone numbers</li>
</ul>`,
              challenge: {
                description: 'Create a complete head section with: charset UTF-8, viewport meta tag (width=device-width, initial-scale=1.0), title "My Website", description "A personal website showcasing my projects", and author "John Doe".',
                starterCode: '<!-- Create a complete head section -->\n',
                expectedOutput: '<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>My Website</title>\n<meta name="description" content="A personal website showcasing my projects">\n<meta name="author" content="John Doe">\n</head>',
                hints: [
                  'charset should be first meta tag',
                  'viewport is essential for mobile',
                  'Each meta tag is self-closing',
                  'Description goes in content attribute'
                ]
              },
              quiz: [
                {
                  question: 'What character encoding should modern websites use?',
                  options: ['ASCII', 'UTF-8', 'ISO-8859-1', 'UTF-16'],
                  correct: 1
                },
                {
                  question: 'What happens without the viewport meta tag on mobile?',
                  options: ['Page won\'t load', 'Page renders at desktop width and zooms out', 'Images don\'t display', 'CSS breaks'],
                  correct: 1
                },
                {
                  question: 'What does initial-scale=1.0 mean?',
                  options: ['Page is zoomed in', 'No initial zoom (100%)', 'Page is zoomed out', 'Scaling is disabled'],
                  correct: 1
                },
                {
                  question: 'What does meta theme-color affect?',
                  options: ['Page background', 'Text color', 'Browser address bar color on mobile', 'Link colors'],
                  correct: 2
                }
              ]
            },
            {
              id: 'meta-2',
              title: 'Linking External Resources',
              type: 'challenge',
              theory: `<h2>Linking External Resources</h2>
<p>The <code>&lt;link&gt;</code> element connects external resources to your HTML document. It's used for stylesheets, icons, fonts, and more.</p>
<p><strong>Stylesheets:</strong></p>
<pre><code>&lt;link rel="stylesheet" href="styles.css"&gt;
&lt;link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto"&gt;</code></pre>
<p><strong>Favicons (site icons):</strong></p>
<pre><code>&lt;link rel="icon" type="image/x-icon" href="/favicon.ico"&gt;
&lt;link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png"&gt;
&lt;link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"&gt;</code></pre>
<p><strong>Preloading & Prefetching:</strong></p>
<pre><code>&lt;!-- Preload critical resources --&gt;
&lt;link rel="preload" href="critical.css" as="style"&gt;
&lt;link rel="preload" href="hero.jpg" as="image"&gt;
&lt;link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin&gt;

&lt;!-- Prefetch for likely next pages --&gt;
&lt;link rel="prefetch" href="next-page.html"&gt;

&lt;!-- DNS prefetch for external domains --&gt;
&lt;link rel="dns-prefetch" href="https://fonts.googleapis.com"&gt;</code></pre>
<p><strong>Other link relationships:</strong></p>
<ul>
<li><code>rel="canonical"</code> — Preferred URL version</li>
<li><code>rel="alternate"</code> — Alternative versions (languages, RSS)</li>
<li><code>rel="manifest"</code> — Web app manifest for PWAs</li>
<li><code>rel="preconnect"</code> — Establish early connection to domain</li>
</ul>
<pre><code>&lt;link rel="alternate" type="application/rss+xml" href="/feed.xml"&gt;
&lt;link rel="manifest" href="/manifest.json"&gt;
&lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&gt;</code></pre>`,
              challenge: {
                description: 'Create link elements for: a stylesheet "styles.css", a favicon (type="image/png", href="favicon.png"), and a preconnect to "https://fonts.googleapis.com".',
                starterCode: '<!-- Link external resources -->\n',
                expectedOutput: '<link rel="stylesheet" href="styles.css">\n<link rel="icon" type="image/png" href="favicon.png">\n<link rel="preconnect" href="https://fonts.googleapis.com">',
                hints: [
                  'Stylesheets use rel="stylesheet"',
                  'Favicons use rel="icon"',
                  'Preconnect establishes early connections',
                  'All are self-closing <link> elements'
                ]
              },
              quiz: [
                {
                  question: 'What rel value links a CSS file?',
                  options: ['css', 'style', 'stylesheet', 'link'],
                  correct: 2
                },
                {
                  question: 'What does rel="preload" do?',
                  options: ['Loads page before user visits', 'Tells browser to fetch resource early', 'Caches the resource', 'Compresses the resource'],
                  correct: 1
                },
                {
                  question: 'What is a favicon?',
                  options: ['A hero image', 'The small icon in the browser tab', 'A social media image', 'A background image'],
                  correct: 1
                },
                {
                  question: 'When should you use rel="preconnect"?',
                  options: ['For local files', 'For external domains you\'ll request resources from', 'For all links', 'For images only'],
                  correct: 1
                }
              ]
            },
            {
              id: 'meta-3',
              title: 'Scripts & Performance',
              type: 'challenge',
              theory: `<h2>Scripts & Performance</h2>
<p>How you include JavaScript in your HTML significantly affects page load performance. Understanding script loading strategies is essential.</p>
<p><strong>Script inclusion methods:</strong></p>
<pre><code>&lt;!-- External script --&gt;
&lt;script src="app.js"&gt;&lt;/script&gt;

&lt;!-- Inline script --&gt;
&lt;script&gt;
  console.log('Hello!');
&lt;/script&gt;

&lt;!-- Module script --&gt;
&lt;script type="module" src="module.js"&gt;&lt;/script&gt;</code></pre>
<p><strong>Script loading attributes:</strong></p>
<ul>
<li><strong>No attribute</strong> — Blocks HTML parsing until script downloads and executes</li>
<li><code>async</code> — Downloads in parallel, executes as soon as ready (order not guaranteed)</li>
<li><code>defer</code> — Downloads in parallel, executes after HTML parsing (order preserved)</li>
</ul>
<pre><code>&lt;!-- Blocks rendering (avoid in head) --&gt;
&lt;script src="blocking.js"&gt;&lt;/script&gt;

&lt;!-- Downloads async, executes ASAP --&gt;
&lt;script async src="analytics.js"&gt;&lt;/script&gt;

&lt;!-- Downloads async, executes after DOM ready --&gt;
&lt;script defer src="app.js"&gt;&lt;/script&gt;</code></pre>
<p><strong>When to use which:</strong></p>
<ul>
<li><strong>defer</strong> — Most scripts that need the DOM (recommended default)</li>
<li><strong>async</strong> — Independent scripts like analytics or ads</li>
<li><strong>No attribute at end of body</strong> — Legacy approach, still works</li>
</ul>
<p><strong>The noscript element:</strong></p>
<pre><code>&lt;noscript&gt;
  &lt;p&gt;This website requires JavaScript to function properly.&lt;/p&gt;
&lt;/noscript&gt;</code></pre>
<p>Shows content when JavaScript is disabled. Good for providing fallback messages or alternative content.</p>`,
              challenge: {
                description: 'Add three script tags in the head: "analytics.js" with async, "app.js" with defer, and a module script "components.js". Then add a noscript element saying "Please enable JavaScript to use this app."',
                starterCode: '<!-- Add scripts with proper loading strategies -->\n',
                expectedOutput: '<script async src="analytics.js"></script>\n<script defer src="app.js"></script>\n<script type="module" src="components.js"></script>\n<noscript>Please enable JavaScript to use this app.</noscript>',
                hints: [
                  'async for independent scripts like analytics',
                  'defer for scripts needing the DOM',
                  'type="module" for ES modules',
                  'noscript shows content when JS is disabled'
                ]
              },
              quiz: [
                {
                  question: 'What does the defer attribute do?',
                  options: ['Delays download', 'Downloads parallel, executes after HTML parsing', 'Prevents execution', 'Loads synchronously'],
                  correct: 1
                },
                {
                  question: 'When should you use async?',
                  options: ['For all scripts', 'For independent scripts that don\'t need DOM order', 'For critical scripts', 'Never'],
                  correct: 1
                },
                {
                  question: 'What does <noscript> display?',
                  options: ['Always', 'When JavaScript is disabled', 'On mobile only', 'In older browsers'],
                  correct: 1
                },
                {
                  question: 'Which is the recommended default for most scripts?',
                  options: ['async', 'defer', 'No attribute', 'type="module"'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'multipage-project',
          title: 'Multi-page Site PROJECT',
          lessons: [
            {
              id: 'project2-1',
              title: 'Multi-page Site - Home Page',
              type: 'project',
              theory: `<h2>Multi-page Site - Home Page</h2>
<p>Let's build a multi-page website that demonstrates all the HTML concepts we've learned. We'll create a small business website with Home, About, Services, and Contact pages.</p>
<p><strong>Project structure:</strong></p>
<pre><code>my-site/
├── index.html (Home)
├── about.html
├── services.html
├── contact.html
├── css/
│   └── styles.css
└── images/
    └── logo.png</code></pre>
<p><strong>The Home page should include:</strong></p>
<ul>
<li>Complete HTML5 document structure with proper head tags</li>
<li>Header with logo area and navigation to all pages</li>
<li>Hero section with main headline and call-to-action</li>
<li>Features/services preview section</li>
<li>Footer with contact info and copyright</li>
</ul>
<p><strong>Navigation consistency:</strong></p>
<p>All pages should share the same navigation structure so users can move between pages easily. This is where relative links between HTML files become important.</p>
<p>When building the home page, think about:</p>
<ul>
<li>What's the site's purpose? (We'll make a web design agency)</li>
<li>What should visitors see first?</li>
<li>What action do you want them to take?</li>
</ul>`,
              challenge: {
                description: 'Create the home page hero section: a main element containing a section with id="hero" that has an h1 "Creative Web Solutions", a paragraph "We build beautiful, accessible websites that drive results.", and a link (href="contact.html", class="cta-button") saying "Get Started".',
                starterCode: '<!-- Create the home page hero section -->\n',
                expectedOutput: '<main>\n<section id="hero">\n<h1>Creative Web Solutions</h1>\n<p>We build beautiful, accessible websites that drive results.</p>\n<a href="contact.html" class="cta-button">Get Started</a>\n</section>\n</main>',
                hints: [
                  'Main wraps the primary content',
                  'Section with id for the hero area',
                  'CTA links to the contact page',
                  'Use descriptive, action-oriented text'
                ]
              },
              quiz: [
                {
                  question: 'What is the standard filename for a homepage?',
                  options: ['home.html', 'index.html', 'main.html', 'default.html'],
                  correct: 1
                },
                {
                  question: 'What is a CTA (Call to Action)?',
                  options: ['A heading style', 'A button/link encouraging user action', 'A form element', 'A navigation item'],
                  correct: 1
                },
                {
                  question: 'How do you link between pages in the same directory?',
                  options: ['href="https://page.html"', 'href="page.html"', 'href="#page"', 'href="./root/page.html"'],
                  correct: 1
                }
              ]
            },
            {
              id: 'project2-2',
              title: 'Multi-page Site - About & Services',
              type: 'project',
              theory: `<h2>Multi-page Site - About & Services Pages</h2>
<p>The About page tells visitors who you are, and the Services page details what you offer. Both should maintain consistent navigation and branding.</p>
<p><strong>About page content ideas:</strong></p>
<ul>
<li>Company story or personal background</li>
<li>Team member profiles (figure + figcaption)</li>
<li>Mission statement</li>
<li>Timeline or milestones</li>
</ul>
<p><strong>Services page patterns:</strong></p>
<pre><code>&lt;section id="services"&gt;
  &lt;h1&gt;Our Services&lt;/h1&gt;
  &lt;article class="service-card"&gt;
    &lt;h2&gt;Web Design&lt;/h2&gt;
    &lt;p&gt;Custom, responsive designs...&lt;/p&gt;
    &lt;ul&gt;
      &lt;li&gt;UI/UX Design&lt;/li&gt;
      &lt;li&gt;Responsive Layouts&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/article&gt;
&lt;/section&gt;</code></pre>
<p><strong>Using tables for pricing:</strong></p>
<pre><code>&lt;table&gt;
  &lt;caption&gt;Pricing Plans&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Plan&lt;/th&gt;&lt;th&gt;Features&lt;/th&gt;&lt;th&gt;Price&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;Basic&lt;/td&gt;&lt;td&gt;5 pages&lt;/td&gt;&lt;td&gt;$499&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
<p>Tables are perfect for comparing services and pricing — this is genuine tabular data. Each service article should be self-contained with its own heading, description, and feature list.</p>`,
              challenge: {
                description: 'Create a services section with two service articles. First: h2 "Web Design", paragraph "Beautiful responsive websites tailored to your brand.", list with "Custom Layouts" and "Mobile Responsive". Second: h2 "SEO", paragraph "Boost your search rankings.", list with "Keyword Research" and "Technical SEO".',
                starterCode: '<!-- Create service cards -->\n',
                expectedOutput: '<section id="services">\n<article>\n<h2>Web Design</h2>\n<p>Beautiful responsive websites tailored to your brand.</p>\n<ul>\n<li>Custom Layouts</li>\n<li>Mobile Responsive</li>\n</ul>\n</article>\n<article>\n<h2>SEO</h2>\n<p>Boost your search rankings.</p>\n<ul>\n<li>Keyword Research</li>\n<li>Technical SEO</li>\n</ul>\n</article>\n</section>',
                hints: [
                  'Wrap all services in a section',
                  'Each service is an article',
                  'Include heading, description, and feature list',
                  'Use unordered lists for features'
                ]
              },
              quiz: [
                {
                  question: 'Why is <article> appropriate for service cards?',
                  options: ['It has special styling', 'Each service is self-contained content', 'It\'s required', 'For animations'],
                  correct: 1
                },
                {
                  question: 'When is a table appropriate on a services page?',
                  options: ['For layout', 'For comparing plans/pricing', 'For descriptions', 'Never on services pages'],
                  correct: 1
                },
                {
                  question: 'What should every page share in a multi-page site?',
                  options: ['The same content', 'Consistent navigation', 'The same heading', 'Identical meta descriptions'],
                  correct: 1
                }
              ]
            },
            {
              id: 'project2-3',
              title: 'Multi-page Site - Contact Form',
              type: 'project',
              theory: `<h2>Multi-page Site - Contact Form</h2>
<p>The contact page is often the most important conversion page on a business website. It should be simple, accessible, and trustworthy.</p>
<p><strong>A well-structured contact form:</strong></p>
<pre><code>&lt;section id="contact"&gt;
  &lt;h1&gt;Contact Us&lt;/h1&gt;
  &lt;form action="/submit-contact" method="POST"&gt;
    &lt;fieldset&gt;
      &lt;legend&gt;Your Information&lt;/legend&gt;
      &lt;label for="name"&gt;Full Name *&lt;/label&gt;
      &lt;input type="text" id="name" name="name" required&gt;
      
      &lt;label for="email"&gt;Email Address *&lt;/label&gt;
      &lt;input type="email" id="email" name="email" required&gt;
      
      &lt;label for="phone"&gt;Phone Number&lt;/label&gt;
      &lt;input type="tel" id="phone" name="phone"&gt;
    &lt;/fieldset&gt;
    
    &lt;fieldset&gt;
      &lt;legend&gt;Your Message&lt;/legend&gt;
      &lt;label for="subject"&gt;Subject *&lt;/label&gt;
      &lt;select id="subject" name="subject" required&gt;
        &lt;option value=""&gt;Choose a topic&lt;/option&gt;
        &lt;option value="quote"&gt;Request a Quote&lt;/option&gt;
        &lt;option value="support"&gt;Support&lt;/option&gt;
        &lt;option value="other"&gt;Other&lt;/option&gt;
      &lt;/select&gt;
      
      &lt;label for="message"&gt;Message *&lt;/label&gt;
      &lt;textarea id="message" name="message" rows="5" required&gt;&lt;/textarea&gt;
    &lt;/fieldset&gt;
    
    &lt;button type="submit"&gt;Send Message&lt;/button&gt;
  &lt;/form&gt;
&lt;/section&gt;</code></pre>
<p><strong>Contact form best practices:</strong></p>
<ul>
<li>Mark required fields clearly (both visually and with required attribute)</li>
<li>Group related fields with fieldset/legend</li>
<li>Use appropriate input types for validation</li>
<li>Keep the form short — only ask for what you need</li>
<li>Add alternative contact methods (email, phone, address)</li>
</ul>`,
              challenge: {
                description: 'Create a contact form (action="/contact", method="POST") with: label/input for "Name" (type text, required), label/input for "Email" (type email, required), label/textarea for "Message" (rows="4", required), and a submit button "Send".',
                starterCode: '<!-- Create a contact form -->\n',
                expectedOutput: '<form action="/contact" method="POST">\n<label for="name">Name</label>\n<input type="text" id="name" name="name" required>\n<label for="email">Email</label>\n<input type="email" id="email" name="email" required>\n<label for="message">Message</label>\n<textarea id="message" name="message" rows="4" required></textarea>\n<button type="submit">Send</button>\n</form>',
                hints: [
                  'Each input needs a matching label',
                  'Use appropriate input types',
                  'textarea needs rows attribute',
                  'Add required to mandatory fields'
                ]
              },
              quiz: [
                {
                  question: 'What method should contact forms typically use?',
                  options: ['GET', 'POST', 'PUT', 'DELETE'],
                  correct: 1
                },
                {
                  question: 'How should required fields be indicated?',
                  options: ['Color only', 'Both visually and with required attribute', 'Just the required attribute', 'With a tooltip'],
                  correct: 1
                },
                {
                  question: 'Why keep contact forms short?',
                  options: ['To save bandwidth', 'Higher completion rates', 'Faster validation', 'Better SEO'],
                  correct: 1
                }
              ]
            },
            {
              id: 'project2-4',
              title: 'Multi-page Site - Final Assembly',
              type: 'project',
              theory: `<h2>Multi-page Site - Final Assembly</h2>
<p>Let's assemble all the pieces into a complete, well-structured page that demonstrates everything we've learned throughout this course.</p>
<p><strong>Complete page template:</strong></p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;meta name="description" content="Professional web solutions"&gt;
  &lt;title&gt;Creative Web Solutions | Professional Web Design&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
  &lt;link rel="icon" href="favicon.png"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;a href="#main" class="skip-link"&gt;Skip to content&lt;/a&gt;
  &lt;header&gt;...&lt;/header&gt;
  &lt;main id="main"&gt;...&lt;/main&gt;
  &lt;footer&gt;...&lt;/footer&gt;
  &lt;script defer src="js/app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p><strong>Final checklist for any HTML page:</strong></p>
<ul>
<li>✅ DOCTYPE declaration</li>
<li>✅ lang attribute on html element</li>
<li>✅ charset and viewport meta tags</li>
<li>✅ Descriptive title and meta description</li>
<li>✅ Semantic structure (header, main, footer)</li>
<li>✅ Skip link for keyboard users</li>
<li>✅ Accessible forms with labels</li>
<li>✅ Alt text on all informative images</li>
<li>✅ Proper heading hierarchy</li>
<li>✅ Scripts with defer/async</li>
</ul>
<p>This template represents best practices for any modern HTML page. Use it as a starting point for every new project.</p>`,
              challenge: {
                description: 'Create a complete HTML5 document with: lang="en", charset, viewport, title "My Site | Home", a skip link to "#main", a header with nav containing a link to "index.html" (Home), a main (id="main") with h1 "Welcome", and a footer with "© 2024".',
                starterCode: '<!-- Assemble a complete HTML5 page -->\n',
                expectedOutput: '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>My Site | Home</title>\n</head>\n<body>\n<a href="#main" class="skip-link">Skip to content</a>\n<header>\n<nav>\n<a href="index.html">Home</a>\n</nav>\n</header>\n<main id="main">\n<h1>Welcome</h1>\n</main>\n<footer>\n<p>&copy; 2024</p>\n</footer>\n</body>\n</html>',
                hints: [
                  'Start with DOCTYPE and html lang="en"',
                  'Include charset and viewport in head',
                  'Skip link goes before header in body',
                  'Use semantic elements throughout'
                ]
              },
              quiz: [
                {
                  question: 'What should be the first element inside <body> for accessibility?',
                  options: ['<header>', '<h1>', '<a class="skip-link">', '<main>'],
                  correct: 2
                },
                {
                  question: 'Which attribute on <html> specifies the page language?',
                  options: ['language', 'lang', 'locale', 'xml:lang'],
                  correct: 1
                },
                {
                  question: 'Where should scripts with defer be placed?',
                  options: ['First in head', 'Anywhere — defer handles timing', 'Only in body', 'After footer only'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'best-practices',
          title: 'Best Practices',
          lessons: [
            {
              id: 'bp-1',
              title: 'Code Organization & Style',
              type: 'challenge',
              theory: `<h2>Code Organization & Style</h2>
<p>Writing clean, well-organized HTML makes your code easier to read, maintain, and debug. Following consistent conventions benefits you and your team.</p>
<p><strong>Indentation & formatting:</strong></p>
<ul>
<li>Use consistent indentation (2 or 4 spaces — pick one and stick with it)</li>
<li>Each nested element indents one level deeper</li>
<li>Keep line lengths reasonable (80-120 characters)</li>
<li>Put block-level elements on new lines</li>
<li>Inline elements can stay on the same line as their parent</li>
</ul>
<pre><code>&lt;!-- Good formatting --&gt;
&lt;article&gt;
  &lt;h2&gt;Title&lt;/h2&gt;
  &lt;p&gt;This is &lt;strong&gt;important&lt;/strong&gt; text.&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;Item one&lt;/li&gt;
    &lt;li&gt;Item two&lt;/li&gt;
  &lt;/ul&gt;
&lt;/article&gt;</code></pre>
<p><strong>Naming conventions:</strong></p>
<ul>
<li>IDs: lowercase, hyphenated (<code>id="main-nav"</code>)</li>
<li>Classes: lowercase, hyphenated (<code>class="card-title"</code>)</li>
<li>Be descriptive: <code>class="user-profile"</code> not <code>class="up"</code></li>
<li>Use BEM or similar methodology for larger projects</li>
</ul>
<p><strong>File organization:</strong></p>
<ul>
<li>Keep HTML, CSS, and JS in separate files</li>
<li>Use a logical folder structure (css/, js/, images/, pages/)</li>
<li>Name files descriptively in lowercase with hyphens</li>
</ul>
<p><strong>Comments:</strong> Use them to mark major sections and explain non-obvious code:</p>
<pre><code>&lt;!-- Main Navigation --&gt;
&lt;nav&gt;...&lt;/nav&gt;

&lt;!-- Hero Section --&gt;
&lt;section id="hero"&gt;...&lt;/section&gt;

&lt;!-- TODO: Add testimonials section --&gt;</code></pre>`,
              challenge: {
                description: 'Rewrite this poorly formatted HTML with proper indentation: A div with class="card" containing an h3 "Title", a paragraph "Description text", and a link "Read More" to "#".',
                starterCode: '<!-- Write clean, properly indented HTML -->\n',
                expectedOutput: '<div class="card">\n  <h3>Title</h3>\n  <p>Description text</p>\n  <a href="#">Read More</a>\n</div>',
                hints: [
                  'Use 2-space indentation',
                  'Nested elements are indented',
                  'Each block element on its own line',
                  'Consistent formatting throughout'
                ]
              },
              quiz: [
                {
                  question: 'What naming convention is recommended for HTML IDs and classes?',
                  options: ['camelCase', 'UPPERCASE', 'lowercase-hyphenated', 'snake_case'],
                  correct: 2
                },
                {
                  question: 'How many spaces of indentation is common?',
                  options: ['1 or 3', '2 or 4', '3 or 5', '8'],
                  correct: 1
                },
                {
                  question: 'Why separate HTML, CSS, and JavaScript into different files?',
                  options: ['Faster loading', 'Separation of concerns and maintainability', 'Required by HTML5', 'Better SEO'],
                  correct: 1
                },
                {
                  question: 'What is a "TODO" comment used for?',
                  options: ['Styling', 'Marking tasks to complete later', 'Creating todo lists', 'Hiding content'],
                  correct: 1
                }
              ]
            },
            {
              id: 'bp-2',
              title: 'Performance & Loading',
              type: 'challenge',
              theory: `<h2>Performance & Loading</h2>
<p>Page load speed directly affects user experience, bounce rates, and search rankings. HTML choices significantly impact performance.</p>
<p><strong>Image optimization:</strong></p>
<ul>
<li>Always specify width and height (prevents layout shift)</li>
<li>Use loading="lazy" for images below the fold</li>
<li>Use modern formats (WebP, AVIF) with fallbacks</li>
<li>Serve appropriately sized images (don't send 4000px for a 400px space)</li>
<li>Use srcset for responsive images</li>
</ul>
<p><strong>Resource loading order:</strong></p>
<pre><code>&lt;head&gt;
  &lt;!-- Critical CSS first --&gt;
  &lt;link rel="preload" href="critical.css" as="style"&gt;
  &lt;link rel="stylesheet" href="critical.css"&gt;
  
  &lt;!-- Preconnect to external domains --&gt;
  &lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
  
  &lt;!-- Non-critical CSS loaded async --&gt;
  &lt;link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'"&gt;
  
  &lt;!-- Scripts deferred --&gt;
  &lt;script defer src="app.js"&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>
<p><strong>Reducing HTML bloat:</strong></p>
<ul>
<li>Avoid unnecessary wrapper divs ("div soup")</li>
<li>Use semantic elements that serve a purpose</li>
<li>Remove commented-out code before deploying</li>
<li>Minimize inline styles and scripts</li>
</ul>
<p><strong>Core Web Vitals to consider:</strong></p>
<ul>
<li><strong>LCP</strong> (Largest Contentful Paint) — How fast main content loads</li>
<li><strong>FID</strong> (First Input Delay) — How fast page responds to interaction</li>
<li><strong>CLS</strong> (Cumulative Layout Shift) — Visual stability during loading</li>
</ul>`,
              challenge: {
                description: 'Create an optimized image element with: src="hero.webp", alt="Hero banner", width="1200", height="600", loading="lazy", and wrap it in a picture element with an AVIF source (srcset="hero.avif", type="image/avif").',
                starterCode: '<!-- Create a performance-optimized image -->\n',
                expectedOutput: '<picture>\n<source srcset="hero.avif" type="image/avif">\n<img src="hero.webp" alt="Hero banner" width="1200" height="600" loading="lazy">\n</picture>',
                hints: [
                  'picture wraps source and img',
                  'Modern format (AVIF) in source',
                  'WebP as fallback in img src',
                  'Always include width, height, and loading'
                ]
              },
              quiz: [
                {
                  question: 'Why specify width and height on images?',
                  options: ['Better quality', 'Prevents Cumulative Layout Shift', 'Faster download', 'Required by HTML5'],
                  correct: 1
                },
                {
                  question: 'What does loading="lazy" do?',
                  options: ['Slows loading', 'Defers loading until image approaches viewport', 'Reduces quality', 'Disables caching'],
                  correct: 1
                },
                {
                  question: 'What is "div soup"?',
                  options: ['A design pattern', 'Excessive unnecessary wrapper divs', 'A CSS framework', 'An accessibility issue'],
                  correct: 1
                },
                {
                  question: 'Which Core Web Vital measures visual stability?',
                  options: ['LCP', 'FID', 'CLS', 'TTFB'],
                  correct: 2
                }
              ]
            },
            {
              id: 'bp-3',
              title: 'Validation & Cross-Browser Compatibility',
              type: 'challenge',
              theory: `<h2>Validation & Cross-Browser Compatibility</h2>
<p>Valid HTML ensures your pages work consistently across browsers. While modern browsers are forgiving of errors, valid markup prevents unexpected rendering issues.</p>
<p><strong>HTML validation:</strong></p>
<ul>
<li>Use the W3C Validator (validator.w3.org) to check your HTML</li>
<li>Fix errors (breaking issues) before warnings</li>
<li>Common errors: unclosed tags, missing alt attributes, duplicate IDs, improper nesting</li>
</ul>
<p><strong>Common validation errors:</strong></p>
<pre><code>&lt;!-- ERROR: p cannot contain div --&gt;
&lt;p&gt;&lt;div&gt;wrong&lt;/div&gt;&lt;/p&gt;

&lt;!-- ERROR: duplicate IDs --&gt;
&lt;div id="main"&gt;&lt;/div&gt;
&lt;div id="main"&gt;&lt;/div&gt;

&lt;!-- ERROR: ul direct child must be li --&gt;
&lt;ul&gt;&lt;div&gt;wrong&lt;/div&gt;&lt;/ul&gt;

&lt;!-- WARNING: missing alt --&gt;
&lt;img src="photo.jpg"&gt;</code></pre>
<p><strong>Cross-browser best practices:</strong></p>
<ul>
<li>Use standard HTML5 elements and attributes</li>
<li>Test in multiple browsers (Chrome, Firefox, Safari, Edge)</li>
<li>Use feature detection, not browser detection</li>
<li>Provide fallbacks for newer features</li>
<li>Use autoprefixer for CSS and polyfills for JS when needed</li>
</ul>
<p><strong>Progressive Enhancement:</strong></p>
<p>Build your page so the core content works everywhere, then enhance for modern browsers:</p>
<ol>
<li>Start with semantic HTML that works without CSS or JS</li>
<li>Add CSS for visual enhancement</li>
<li>Add JavaScript for interactivity</li>
</ol>
<p>This ensures your content is accessible even if styles or scripts fail to load.</p>`,
              challenge: {
                description: 'Fix these validation errors: Create a proper structure with a div (id="content") containing a paragraph "Hello World", followed by a separate div (id="sidebar") containing an unordered list with one li "Menu Item".',
                starterCode: '<!-- Write valid HTML structure -->\n',
                expectedOutput: '<div id="content">\n<p>Hello World</p>\n</div>\n<div id="sidebar">\n<ul>\n<li>Menu Item</li>\n</ul>\n</div>',
                hints: [
                  'Each ID must be unique',
                  'Only <li> can be direct children of <ul>',
                  'Block elements can\'t go inside <p>',
                  'Proper nesting is essential'
                ]
              },
              quiz: [
                {
                  question: 'What tool validates HTML?',
                  options: ['CSS Validator', 'W3C HTML Validator', 'JavaScript Lint', 'Browser Console'],
                  correct: 1
                },
                {
                  question: 'What is progressive enhancement?',
                  options: ['Adding features gradually over time', 'Building core content first, enhancing for modern browsers', 'Using the latest HTML only', 'A JavaScript framework'],
                  correct: 1
                },
                {
                  question: 'Which is a valid nesting?',
                  options: ['<p><div>text</div></p>', '<ul><div>item</div></ul>', '<div><p>text</p></div>', '<a><a>link</a></a>'],
                  correct: 2
                },
                {
                  question: 'Why is valid HTML important?',
                  options: ['Higher search ranking', 'Consistent cross-browser rendering', 'Both A and B', 'Neither'],
                  correct: 2
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default htmlCourse;