const cssCourse = {
  id: 'css',
  title: 'Learn CSS',
  icon: '🎨',
  description: 'Master CSS from fundamentals to advanced layouts. Learn selectors, Flexbox, Grid, animations, responsive design, and build stunning web interfaces.',
  totalLessons: 70,
  sections: [
    {
      id: 'css-fundamentals',
      title: 'CSS Fundamentals',
      description: 'Learn the core concepts of CSS styling, selectors, and the box model',
      modules: [
        {
          id: 'css-intro',
          title: 'Introduction',
          lessons: [
            {
              id: 'css-intro-1',
              title: 'What is CSS?',
              type: 'challenge',
              theory: `<h2>What is CSS?</h2>
<p><strong>CSS (Cascading Style Sheets)</strong> is the language used to control the visual presentation of HTML documents. While HTML provides structure, CSS adds colors, fonts, spacing, layouts, and animations — everything that makes a website look good.</p>
<p><strong>Three ways to add CSS:</strong></p>
<ul>
<li><strong>External stylesheet</strong> (recommended): <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></li>
<li><strong>Internal styles</strong>: <code>&lt;style&gt;</code> block in the HTML <code>&lt;head&gt;</code></li>
<li><strong>Inline styles</strong>: <code>style</code> attribute on an element (avoid when possible)</li>
</ul>
<p><strong>CSS syntax:</strong></p>
<pre><code>selector {
  property: value;
  property: value;
}</code></pre>
<p>Example:</p>
<pre><code>h1 {
  color: blue;
  font-size: 24px;
  margin-bottom: 10px;
}</code></pre>
<p>A CSS <strong>rule</strong> consists of:</p>
<ul>
<li><strong>Selector</strong> — What element(s) to style</li>
<li><strong>Declaration block</strong> — Curly braces containing declarations</li>
<li><strong>Declaration</strong> — A property-value pair ending with semicolon</li>
</ul>
<p><strong>The "Cascading" part:</strong> When multiple styles target the same element, CSS uses specificity, source order, and importance to determine which style wins. This cascade is what gives CSS its name and its power.</p>
<p>CSS transforms plain HTML into visually stunning, user-friendly websites. Let's learn how!</p>`,
              challenge: {
                description: 'Write a CSS rule that makes all h1 elements have a color of navy and a font-size of 32px.',
                starterCode: '/* Style the h1 element */\n',
                expectedOutput: 'h1 {\n  color: navy;\n  font-size: 32px;\n}',
                hints: [
                  'Start with the selector (h1)',
                  'Open curly braces after the selector',
                  'Each property ends with a semicolon',
                  'Close the curly brace at the end'
                ]
              },
              quiz: [
                {
                  question: 'What does CSS stand for?',
                  options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
                  correct: 1
                },
                {
                  question: 'Which is the recommended way to add CSS?',
                  options: ['Inline styles', 'Internal <style> tag', 'External stylesheet', 'JavaScript'],
                  correct: 2
                },
                {
                  question: 'What separates a property from its value in CSS?',
                  options: ['Equals sign (=)', 'Colon (:)', 'Dash (-)', 'Semicolon (;)'],
                  correct: 1
                },
                {
                  question: 'What must end every CSS declaration?',
                  options: ['Colon', 'Comma', 'Semicolon', 'Period'],
                  correct: 2
                }
              ]
            },
            {
              id: 'css-intro-2',
              title: 'How CSS Works: Cascade & Specificity',
              type: 'challenge',
              theory: `<h2>How CSS Works: Cascade & Specificity</h2>
<p>When multiple CSS rules target the same element, the browser must decide which style to apply. It uses three main factors:</p>
<p><strong>1. Specificity (most important):</strong></p>
<p>Each selector has a specificity weight:</p>
<ul>
<li>Inline styles: <strong>1000</strong></li>
<li>ID selectors (#id): <strong>100</strong></li>
<li>Class selectors (.class), attributes, pseudo-classes: <strong>10</strong></li>
<li>Element selectors (div, p), pseudo-elements: <strong>1</strong></li>
</ul>
<pre><code>p { color: blue; }              /* Specificity: 0,0,1 */
.intro { color: green; }        /* Specificity: 0,1,0 */
#main { color: red; }           /* Specificity: 1,0,0 */
p.intro { color: purple; }     /* Specificity: 0,1,1 */</code></pre>
<p>The selector with higher specificity wins, regardless of source order.</p>
<p><strong>2. Source Order:</strong></p>
<p>When specificity is equal, the last rule in the source wins:</p>
<pre><code>p { color: blue; }
p { color: red; }  /* This wins — comes last */</code></pre>
<p><strong>3. Importance:</strong></p>
<p><code>!important</code> overrides everything (use sparingly!):</p>
<pre><code>p { color: red !important; }  /* Overrides all normal rules */</code></pre>
<p><strong>Inheritance:</strong></p>
<p>Some properties are inherited from parent elements (like color, font-family), while others are not (like margin, padding, border). You can force inheritance with <code>inherit</code> or reset with <code>initial</code>.</p>`,
              challenge: {
                description: 'Write three rules: p { color: blue; }, then .highlight { color: green; }, then #special { color: red; }. This demonstrates increasing specificity.',
                starterCode: '/* Write rules with increasing specificity */\n',
                expectedOutput: 'p {\n  color: blue;\n}\n\n.highlight {\n  color: green;\n}\n\n#special {\n  color: red;\n}',
                hints: [
                  'Element selector has lowest specificity',
                  'Class selector (.name) is more specific',
                  'ID selector (#name) is most specific',
                  'Each rule needs its own selector and braces'
                ]
              },
              quiz: [
                {
                  question: 'Which has the highest specificity?',
                  options: ['Element selector', 'Class selector', 'ID selector', 'Universal selector'],
                  correct: 2
                },
                {
                  question: 'When two rules have equal specificity, which wins?',
                  options: ['The first one', 'The last one', 'Neither', 'Both apply'],
                  correct: 1
                },
                {
                  question: 'What does !important do?',
                  options: ['Makes text bold', 'Overrides normal specificity rules', 'Adds emphasis', 'Creates a comment'],
                  correct: 1
                },
                {
                  question: 'Which property is typically inherited?',
                  options: ['margin', 'padding', 'color', 'border'],
                  correct: 2
                }
              ]
            },
            {
              id: 'css-intro-3',
              title: 'CSS Reset & Browser Defaults',
              type: 'challenge',
              theory: `<h2>CSS Reset & Browser Defaults</h2>
<p>Browsers apply their own default styles to HTML elements. These <strong>user agent stylesheets</strong> vary between browsers, which can cause inconsistencies in how your page looks across different platforms.</p>
<p><strong>Common browser defaults:</strong></p>
<ul>
<li>Body has 8px margin</li>
<li>Headings have specific font sizes and margins</li>
<li>Lists have left padding and bullet styles</li>
<li>Links are blue and underlined</li>
<li>Paragraphs have top and bottom margins</li>
</ul>
<p><strong>CSS Reset (Eric Meyer's approach):</strong></p>
<p>Removes ALL browser default styles for a completely blank canvas:</p>
<pre><code>* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  line-height: 1.5;
}</code></pre>
<p><strong>Normalize.css approach:</strong></p>
<p>Instead of removing everything, it makes defaults consistent across browsers while keeping useful defaults. This is generally preferred for most projects.</p>
<p><strong>Modern CSS reset (recommended starting point):</strong></p>
<pre><code>*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}
</code></pre>
<p>The <code>box-sizing: border-box</code> rule is especially important — it makes width and height include padding and border, making sizing much more intuitive.</p>`,
              challenge: {
                description: 'Write a basic CSS reset: Use the universal selector (*) to set margin: 0, padding: 0, and box-sizing: border-box. Then set the body to font-family: Arial, sans-serif and line-height: 1.6.',
                starterCode: '/* Write a CSS reset */\n',
                expectedOutput: '* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  line-height: 1.6;\n}',
                hints: [
                  'The universal selector * targets all elements',
                  'box-sizing: border-box makes sizing intuitive',
                  'Body styles set defaults for the page',
                  'sans-serif is the fallback font'
                ]
              },
              quiz: [
                {
                  question: 'What is the default body margin in most browsers?',
                  options: ['0px', '8px', '16px', '10px'],
                  correct: 1
                },
                {
                  question: 'What does box-sizing: border-box do?',
                  options: ['Adds a box shadow', 'Includes padding and border in width/height', 'Creates a border', 'Sets the box color'],
                  correct: 1
                },
                {
                  question: 'What is the purpose of a CSS reset?',
                  options: ['Make pages load faster', 'Create consistent starting point across browsers', 'Remove all CSS', 'Fix browser bugs'],
                  correct: 1
                },
                {
                  question: 'What does the * selector target?',
                  options: ['Only divs', 'The body', 'All elements on the page', 'Only visible elements'],
                  correct: 2
                }
              ]
            }
          ]
        },
        {
          id: 'css-selectors',
          title: 'Selectors',
          lessons: [
            {
              id: 'sel-1',
              title: 'Basic Selectors',
              type: 'challenge',
              theory: `<h2>Basic Selectors</h2>
<p>CSS selectors determine which HTML elements your styles apply to. Mastering selectors is essential for writing efficient CSS.</p>
<p><strong>Element (Type) Selector:</strong></p>
<pre><code>p { color: gray; }       /* All paragraphs */
h1 { font-size: 2em; }  /* All h1 elements */
a { text-decoration: none; }  /* All links */</code></pre>
<p><strong>Class Selector (.class):</strong></p>
<pre><code>.card { border: 1px solid #ddd; }
.highlight { background: yellow; }
.btn-primary { background: blue; color: white; }</code></pre>
<p>Classes can be reused on multiple elements. An element can have multiple classes.</p>
<p><strong>ID Selector (#id):</strong></p>
<pre><code>#header { position: fixed; top: 0; }
#main-content { padding: 20px; }
</code></pre>
<p>IDs should be unique per page. They have high specificity — use sparingly.</p>
<p><strong>Universal Selector (*):</strong></p>
<pre><code>* { box-sizing: border-box; }</code></pre>
<p><strong>Grouping Selectors:</strong></p>
<pre><code>h1, h2, h3 {
  font-family: Georgia, serif;
  color: #333;
}</code></pre>
<p>Comma-separated selectors apply the same styles to multiple elements. This reduces code repetition.</p>
<p><strong>Best practices:</strong></p>
<ul>
<li>Prefer classes over IDs for styling (lower specificity, reusable)</li>
<li>Keep selectors as simple as possible</li>
<li>Use meaningful class names that describe purpose, not appearance</li>
</ul>`,
              challenge: {
                description: 'Write CSS rules: 1) All paragraphs should have color: #333, 2) Elements with class "active" should have background-color: #007bff and color: white, 3) Group h1, h2, h3 to have font-family: Georgia, serif.',
                starterCode: '/* Write basic selectors */\n',
                expectedOutput: 'p {\n  color: #333;\n}\n\n.active {\n  background-color: #007bff;\n  color: white;\n}\n\nh1, h2, h3 {\n  font-family: Georgia, serif;\n}',
                hints: [
                  'Element selectors use the tag name directly',
                  'Class selectors start with a dot (.)',
                  'Group selectors with commas',
                  'Don\'t forget semicolons'
                ]
              },
              quiz: [
                {
                  question: 'How do you select an element by class?',
                  options: ['#classname', '.classname', 'classname', '*classname'],
                  correct: 1
                },
                {
                  question: 'Can an element have multiple classes?',
                  options: ['No', 'Yes', 'Only two', 'Only in HTML5'],
                  correct: 1
                },
                {
                  question: 'How do you group selectors?',
                  options: ['With spaces', 'With commas', 'With + sign', 'With semicolons'],
                  correct: 1
                },
                {
                  question: 'Why prefer classes over IDs for styling?',
                  options: ['IDs don\'t work', 'Classes have lower specificity and are reusable', 'Classes are faster', 'IDs are deprecated'],
                  correct: 1
                }
              ]
            },
            {
              id: 'sel-2',
              title: 'Combinator Selectors',
              type: 'challenge',
              theory: `<h2>Combinator Selectors</h2>
<p>Combinators express relationships between elements, letting you target elements based on their position in the HTML structure.</p>
<p><strong>Descendant Selector (space):</strong></p>
<pre><code>article p { color: #555; }  /* Any p inside an article, any depth */
nav a { text-decoration: none; }  /* Any link inside nav */</code></pre>
<p><strong>Child Selector (&gt;):</strong></p>
<pre><code>ul > li { list-style: none; }  /* Only direct children */
.card > h2 { margin-top: 0; }  /* Only direct h2 children of .card */</code></pre>
<p><strong>Adjacent Sibling Selector (+):</strong></p>
<pre><code>h2 + p { font-size: 1.1em; }  /* First p immediately after h2 */
.title + .subtitle { margin-top: 5px; }</code></pre>
<p><strong>General Sibling Selector (~):</strong></p>
<pre><code>h2 ~ p { color: gray; }  /* All p elements that follow an h2 */</code></pre>
<p><strong>Key differences:</strong></p>
<ul>
<li><strong>space</strong> — Any descendant (child, grandchild, etc.)</li>
<li><strong>&gt;</strong> — Direct children only</li>
<li><strong>+</strong> — Immediately following sibling only</li>
<li><strong>~</strong> — All following siblings</li>
</ul>
<pre><code>/* Practical examples */
.sidebar > ul > li { padding: 10px; }
.form-group + .form-group { margin-top: 15px; }
.hero ~ section { padding: 40px 0; }</code></pre>
<p>Combinators are powerful but keep them short (2-3 levels max) for readability and specificity management.</p>`,
              challenge: {
                description: 'Write three rules: 1) Any link inside a nav should have color: white, 2) Direct li children of .menu should have display: inline-block, 3) Any paragraph immediately after an h2 should have font-size: 1.2em.',
                starterCode: '/* Use combinator selectors */\n',
                expectedOutput: 'nav a {\n  color: white;\n}\n\n.menu > li {\n  display: inline-block;\n}\n\nh2 + p {\n  font-size: 1.2em;\n}',
                hints: [
                  'Descendant uses a space between selectors',
                  'Child combinator uses > symbol',
                  'Adjacent sibling uses + symbol',
                  'Each combinator targets different relationships'
                ]
              },
              quiz: [
                {
                  question: 'What does "div p" select?',
                  options: ['Only direct p children of div', 'All p elements anywhere inside any div', 'p elements next to div', 'p and div elements'],
                  correct: 1
                },
                {
                  question: 'What does the > combinator select?',
                  options: ['All descendants', 'Direct children only', 'Siblings', 'Parents'],
                  correct: 1
                },
                {
                  question: 'What does h1 + p select?',
                  options: ['All p after h1', 'Only the first p immediately after h1', 'p inside h1', 'h1 and p together'],
                  correct: 1
                },
                {
                  question: 'What is the difference between + and ~?',
                  options: ['No difference', '+ selects one sibling, ~ selects all following siblings', '+ is faster', '~ only works with classes'],
                  correct: 1
                }
              ]
            },
            {
              id: 'sel-3',
              title: 'Pseudo-classes',
              type: 'challenge',
              theory: `<h2>Pseudo-classes</h2>
<p>Pseudo-classes select elements based on their state or position — things you can't target with regular selectors. They start with a single colon (:).</p>
<p><strong>Interactive pseudo-classes:</strong></p>
<pre><code>a:hover { color: red; }        /* Mouse over */
a:active { color: darkred; }   /* Being clicked */
a:visited { color: purple; }   /* Already visited */
input:focus { border-color: blue; outline: none; }  /* Has focus */</code></pre>
<p><strong>Structural pseudo-classes:</strong></p>
<pre><code>li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(2) { color: red; }         /* 2nd item */
li:nth-child(odd) { background: #f5f5f5; }  /* Odd items */
li:nth-child(even) { background: white; }
li:nth-child(3n) { color: blue; }       /* Every 3rd */</code></pre>
<p><strong>Form pseudo-classes:</strong></p>
<pre><code>input:required { border-left: 3px solid red; }
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:disabled { opacity: 0.5; }
input:checked { accent-color: blue; }
input:placeholder-shown { font-style: italic; }</code></pre>
<p><strong>Negation and other useful pseudo-classes:</strong></p>
<pre><code>p:not(.special) { color: gray; }  /* All p except .special */
div:empty { display: none; }       /* Empty divs */
:root { --primary: #007bff; }      /* HTML root element */</code></pre>
<p>Pseudo-classes are powerful for creating interactive experiences without JavaScript. The :hover, :focus, and :nth-child families are used daily in professional CSS.</p>`,
              challenge: {
                description: 'Write CSS for: 1) Links on hover should have color: #ff6600 and text-decoration: underline, 2) Every odd table row (tr:nth-child(odd)) should have background-color: #f9f9f9, 3) Required inputs should have border-left: 3px solid red.',
                starterCode: '/* Use pseudo-classes */\n',
                expectedOutput: 'a:hover {\n  color: #ff6600;\n  text-decoration: underline;\n}\n\ntr:nth-child(odd) {\n  background-color: #f9f9f9;\n}\n\ninput:required {\n  border-left: 3px solid red;\n}',
                hints: [
                  'Pseudo-classes use : before the name',
                  ':hover applies on mouse over',
                  ':nth-child(odd) targets odd-numbered items',
                  ':required targets required form fields'
                ]
              },
              quiz: [
                {
                  question: 'Which pseudo-class applies when the mouse is over an element?',
                  options: [':active', ':hover', ':focus', ':visited'],
                  correct: 1
                },
                {
                  question: 'What does :nth-child(3n) select?',
                  options: ['Third child only', 'Every 3rd child', 'First 3 children', 'Last 3 children'],
                  correct: 1
                },
                {
                  question: 'Which pseudo-class targets a focused input?',
                  options: [':active', ':selected', ':focus', ':hover'],
                  correct: 2
                },
                {
                  question: 'What does :not(.hidden) select?',
                  options: ['Hidden elements', 'All elements except those with class hidden', 'Elements without any class', 'Invisible elements'],
                  correct: 1
                }
              ]
            },
            {
              id: 'sel-4',
              title: 'Pseudo-elements',
              type: 'challenge',
              theory: `<h2>Pseudo-elements</h2>
<p>Pseudo-elements create virtual elements that you can style, even though they don't exist in the HTML. They use double colons (::) to distinguish from pseudo-classes.</p>
<p><strong>::before and ::after:</strong></p>
<p>Insert generated content before or after an element's content:</p>
<pre><code>.required::after {
  content: " *";
  color: red;
}

.quote::before {
  content: "\\201C";  /* Opening curly quote */
  font-size: 3em;
  color: #ccc;
}</code></pre>
<p><strong>Important:</strong> ::before and ::after MUST have the <code>content</code> property to appear. Use <code>content: ""</code> for purely decorative elements.</p>
<p><strong>::first-line and ::first-letter:</strong></p>
<pre><code>p::first-line {
  font-weight: bold;
  color: #333;
}

.article::first-letter {
  font-size: 3em;
  float: left;
  line-height: 1;
  margin-right: 8px;
}</code></pre>
<p><strong>::placeholder:</strong></p>
<pre><code>input::placeholder {
  color: #aaa;
  font-style: italic;
}</code></pre>
<p><strong>::selection:</strong></p>
<pre><code>::selection {
  background: #007bff;
  color: white;
}</code></pre>
<p><strong>Creative uses of ::before/::after:</strong></p>
<ul>
<li>Adding decorative icons or shapes</li>
<li>Creating tooltips</li>
<li>Adding overlay layers</li>
<li>Building CSS-only shapes and decorations</li>
<li>Creating clearfix for floated layouts</li>
</ul>
<p>Pseudo-elements are incredibly powerful for adding visual flair without cluttering your HTML with extra elements.</p>`,
              challenge: {
                description: 'Write CSS: 1) Add a red asterisk after elements with class "required-field" using ::after with content: " *" and color: red, 2) Style the first letter of .article with font-size: 3em and color: #333.',
                starterCode: '/* Use pseudo-elements */\n',
                expectedOutput: '.required-field::after {\n  content: " *";\n  color: red;\n}\n\n.article::first-letter {\n  font-size: 3em;\n  color: #333;\n}',
                hints: [
                  'Pseudo-elements use :: (double colon)',
                  '::after requires the content property',
                  'content can be a string in quotes',
                  '::first-letter styles the first letter only'
                ]
              },
              quiz: [
                {
                  question: 'What property is required for ::before and ::after?',
                  options: ['display', 'position', 'content', 'visibility'],
                  correct: 2
                },
                {
                  question: 'How many colons do pseudo-elements use?',
                  options: ['One (:)', 'Two (::)', 'Three (:::)', 'None'],
                  correct: 1
                },
                {
                  question: 'What does ::selection style?',
                  options: ['Selected dropdown options', 'Text highlighted by the user', 'Checked checkboxes', 'Active tabs'],
                  correct: 1
                },
                {
                  question: 'Can ::before/::after be used on self-closing elements like <img>?',
                  options: ['Yes', 'No — they need content to attach to', 'Only ::before', 'Only with position absolute'],
                  correct: 1
                }
              ]
            },
            {
              id: 'sel-5',
              title: 'Attribute Selectors',
              type: 'challenge',
              theory: `<h2>Attribute Selectors</h2>
<p>Attribute selectors target elements based on their HTML attributes and values. They're especially useful for styling form elements and links.</p>
<p><strong>Presence selector [attr]:</strong></p>
<pre><code>[disabled] { opacity: 0.5; }    /* Any element with disabled attribute */
[required] { border-left: 3px solid red; }</code></pre>
<p><strong>Exact value [attr="value"]:</strong></p>
<pre><code>[type="email"] { background: url(email-icon.svg) no-repeat; }
[target="_blank"] { padding-right: 15px; }</code></pre>
<p><strong>Partial match selectors:</strong></p>
<ul>
<li><code>[attr^="val"]</code> — Starts with "val"</li>
<li><code>[attr$="val"]</code> — Ends with "val"</li>
<li><code>[attr*="val"]</code> — Contains "val" anywhere</li>
<li><code>[attr~="val"]</code> — Contains "val" as whole word in space-separated list</li>
</ul>
<pre><code>/* Links starting with https */
a[href^="https"] { color: green; }

/* Files ending in .pdf */
a[href$=".pdf"] { background: url(pdf-icon.svg); }

/* Any href containing "example" */
a[href*="example"] { font-weight: bold; }

/* Data attribute targeting */
[data-theme="dark"] { background: #222; color: #fff; }
[data-size="large"] { font-size: 1.5em; }</code></pre>
<p><strong>Case-insensitive flag:</strong></p>
<pre><code>a[href$=".PDF" i] { /* Matches .pdf, .PDF, .Pdf */ }</code></pre>
<p>Attribute selectors are perfect for styling different input types, external vs internal links, file type indicators, and data-attribute-driven interfaces.</p>`,
              challenge: {
                description: 'Write CSS: 1) Style all inputs with type="text" to have padding: 8px and border: 1px solid #ccc, 2) Style all links starting with "https" (a[href^="https"]) to have color: green, 3) Style elements with data-status="active" to have background: #e8f5e9.',
                starterCode: '/* Use attribute selectors */\n',
                expectedOutput: 'input[type="text"] {\n  padding: 8px;\n  border: 1px solid #ccc;\n}\n\na[href^="https"] {\n  color: green;\n}\n\n[data-status="active"] {\n  background: #e8f5e9;\n}',
                hints: [
                  'Attribute selectors use square brackets',
                  'Exact match: [attr="value"]',
                  'Starts with: [attr^="value"]',
                  'Data attributes work like any other attribute'
                ]
              },
              quiz: [
                {
                  question: 'What does [href$=".pdf"] match?',
                  options: ['Links starting with .pdf', 'Links ending with .pdf', 'Links containing .pdf', 'Links equal to .pdf'],
                  correct: 1
                },
                {
                  question: 'What does the ^ symbol mean in attribute selectors?',
                  options: ['Ends with', 'Contains', 'Starts with', 'Not equal to'],
                  correct: 2
                },
                {
                  question: 'How do you select all disabled elements?',
                  options: ['[disabled]', '.disabled', '#disabled', ':disabled'],
                  correct: 0
                },
                {
                  question: 'What does the i flag do in [attr="val" i]?',
                  options: ['Makes it italic', 'Case-insensitive matching', 'Inverts the match', 'Immediate mode'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'colors-backgrounds',
          title: 'Colors & Backgrounds',
          lessons: [
            {
              id: 'color-1',
              title: 'Color Values & Systems',
              type: 'challenge',
              theory: `<h2>Color Values & Systems</h2>
<p>CSS offers multiple ways to specify colors. Understanding each system helps you choose the right one for different situations.</p>
<p><strong>Named Colors:</strong></p>
<pre><code>color: red;
color: dodgerblue;
color: darkslategray;</code></pre>
<p>147 named colors exist in CSS. Good for quick prototyping but limited for precise design.</p>
<p><strong>Hexadecimal (#RRGGBB):</strong></p>
<pre><code>color: #ff0000;      /* Red */
color: #00ff00;      /* Green */
color: #0000ff;      /* Blue */
color: #333;         /* Shorthand: #333333 */
color: #ff000080;    /* With 50% alpha (transparency) */</code></pre>
<p><strong>RGB and RGBA:</strong></p>
<pre><code>color: rgb(255, 0, 0);        /* Red */
color: rgb(100, 150, 200);    /* Custom blue */
color: rgba(0, 0, 0, 0.5);   /* 50% transparent black */</code></pre>
<p><strong>HSL and HSLA (most intuitive):</strong></p>
<pre><code>color: hsl(0, 100%, 50%);     /* Red (0° hue) */
color: hsl(120, 100%, 50%);   /* Green (120° hue) */
color: hsl(240, 100%, 50%);   /* Blue (240° hue) */
color: hsla(200, 80%, 50%, 0.8);  /* Semi-transparent */</code></pre>
<p><strong>HSL breakdown:</strong></p>
<ul>
<li><strong>H (Hue):</strong> Color wheel position (0-360°)</li>
<li><strong>S (Saturation):</strong> Color intensity (0% gray, 100% vivid)</li>
<li><strong>L (Lightness):</strong> Light/dark (0% black, 50% pure, 100% white)</li>
</ul>
<p>HSL is often preferred because it's intuitive to adjust — want it lighter? Increase L. Less vivid? Decrease S. Different color? Change H.</p>`,
              challenge: {
                description: 'Style a .card class with: background-color using hex #f8f9fa, color using rgb(51, 51, 51), and border using 2px solid with hsl(210, 100%, 50%).',
                starterCode: '/* Use different color formats */\n',
                expectedOutput: '.card {\n  background-color: #f8f9fa;\n  color: rgb(51, 51, 51);\n  border: 2px solid hsl(210, 100%, 50%);\n}',
                hints: [
                  'Hex starts with # followed by 6 characters',
                  'RGB uses rgb(red, green, blue) from 0-255',
                  'HSL uses hsl(hue, saturation%, lightness%)',
                  'All three are valid in any CSS property'
                ]
              },
              quiz: [
                {
                  question: 'What does the A in RGBA stand for?',
                  options: ['Alignment', 'Alpha (transparency)', 'Attribute', 'Alternate'],
                  correct: 1
                },
                {
                  question: 'In HSL, what does H (Hue) represent?',
                  options: ['Height', 'Position on the color wheel (0-360)', 'Horizontal offset', 'Highlight level'],
                  correct: 1
                },
                {
                  question: 'What is #000000?',
                  options: ['White', 'Black', 'Gray', 'Transparent'],
                  correct: 1
                },
                {
                  question: 'What alpha value makes an element fully transparent?',
                  options: ['1', '0', '0.5', '100'],
                  correct: 1
                }
              ]
            },
            {
              id: 'color-2',
              title: 'Backgrounds & Gradients',
              type: 'challenge',
              theory: `<h2>Backgrounds & Gradients</h2>
<p>CSS background properties control what appears behind an element's content. You can use colors, images, gradients, and even multiple backgrounds.</p>
<p><strong>Background properties:</strong></p>
<pre><code>.hero {
  background-color: #f0f0f0;
  background-image: url('bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}</code></pre>
<p><strong>Shorthand:</strong></p>
<pre><code>background: #f0f0f0 url('bg.jpg') center/cover no-repeat fixed;</code></pre>
<p><strong>Linear Gradients:</strong></p>
<pre><code>background: linear-gradient(to right, #ff6b6b, #feca57);
background: linear-gradient(135deg, #667eea, #764ba2);
background: linear-gradient(to bottom, #000 0%, transparent 100%);</code></pre>
<p><strong>Radial Gradients:</strong></p>
<pre><code>background: radial-gradient(circle, #fff, #000);
background: radial-gradient(ellipse at top left, #ff6b6b, transparent);</code></pre>
<p><strong>Multiple backgrounds:</strong></p>
<pre><code>.overlay {
  background: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('hero.jpg') center/cover;
}</code></pre>
<p>This layers a dark overlay on top of an image — a very common pattern for text readability over images.</p>
<p><strong>background-size values:</strong></p>
<ul>
<li><code>cover</code> — Fills the entire area (may crop)</li>
<li><code>contain</code> — Fits entirely within area (may leave gaps)</li>
<li><code>100% 100%</code> — Stretches to fill (may distort)</li>
</ul>`,
              challenge: {
                description: 'Create a .hero class with a linear gradient background going from #667eea to #764ba2 at 135deg, min-height of 400px, and a .overlay class with background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)).',
                starterCode: '/* Create gradient backgrounds */\n',
                expectedOutput: '.hero {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  min-height: 400px;\n}\n\n.overlay {\n  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6));\n}',
                hints: [
                  'linear-gradient takes direction and color stops',
                  '135deg goes from top-left to bottom-right',
                  'rgba with alpha creates semi-transparent colors',
                  'Gradients are set as background or background-image'
                ]
              },
              quiz: [
                {
                  question: 'What does background-size: cover do?',
                  options: ['Stretches the image', 'Fills area completely, may crop', 'Fits entirely, may leave gaps', 'Tiles the image'],
                  correct: 1
                },
                {
                  question: 'What direction does "to right" go in a gradient?',
                  options: ['Right to left', 'Left to right', 'Top to bottom', 'Bottom to top'],
                  correct: 1
                },
                {
                  question: 'How do you create a dark overlay on an image?',
                  options: ['opacity property', 'Layer a semi-transparent gradient over the image', 'Use filter: dark', 'Set brightness to 0'],
                  correct: 1
                },
                {
                  question: 'What does background-attachment: fixed do?',
                  options: ['Fixes position on screen', 'Background doesn\'t scroll with content', 'Locks the image', 'Prevents changes'],
                  correct: 1
                }
              ]
            },
            {
              id: 'color-3',
              title: 'Opacity & Transparency',
              type: 'challenge',
              theory: `<h2>Opacity & Transparency</h2>
<p>CSS provides several ways to make elements transparent. Understanding the differences is important for building layered, modern interfaces.</p>
<p><strong>The opacity property:</strong></p>
<pre><code>.faded {
  opacity: 0.5;  /* 50% transparent — affects EVERYTHING including children */
}

.invisible {
  opacity: 0;    /* Fully transparent but still takes up space */
}</code></pre>
<p><strong>Important:</strong> <code>opacity</code> affects the entire element AND all its children. If you set opacity: 0.5 on a container, all text inside becomes semi-transparent too.</p>
<p><strong>RGBA/HSLA for selective transparency:</strong></p>
<pre><code>.card {
  background: rgba(255, 255, 255, 0.9);  /* Only background is transparent */
  color: #333;  /* Text stays fully opaque */
}

.overlay {
  background: hsla(0, 0%, 0%, 0.7);  /* Semi-transparent black */
}</code></pre>
<p>This is better when you only want the background transparent but keep text readable.</p>
<p><strong>visibility vs opacity vs display:</strong></p>
<ul>
<li><code>opacity: 0</code> — Invisible but still takes space, still interactive</li>
<li><code>visibility: hidden</code> — Invisible, takes space, NOT interactive</li>
<li><code>display: none</code> — Removed from layout completely</li>
</ul>
<p><strong>Practical use cases:</strong></p>
<pre><code>/* Hover effect */
.card:hover { opacity: 0.8; }

/* Glass morphism */
.glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</code></pre>
<p>The <code>backdrop-filter</code> property creates frosted glass effects by blurring what's behind the element — a popular modern design trend.</p>`,
              challenge: {
                description: 'Create a .modal-backdrop with background: rgba(0, 0, 0, 0.5), position: fixed, and a .glass-card with background: rgba(255, 255, 255, 0.2) and backdrop-filter: blur(10px).',
                starterCode: '/* Create transparency effects */\n',
                expectedOutput: '.modal-backdrop {\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n}\n\n.glass-card {\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n}',
                hints: [
                  'rgba allows transparent backgrounds only',
                  'position: fixed keeps it in viewport',
                  'backdrop-filter blurs content behind element',
                  'Use rgba instead of opacity to keep text readable'
                ]
              },
              quiz: [
                {
                  question: 'What is the difference between opacity and rgba transparency?',
                  options: ['No difference', 'opacity affects entire element including children, rgba only affects that property', 'rgba is newer', 'opacity is faster'],
                  correct: 1
                },
                {
                  question: 'What does opacity: 0 do to an element?',
                  options: ['Removes it completely', 'Makes it invisible but it still takes space', 'Hides only the text', 'Makes background transparent'],
                  correct: 1
                },
                {
                  question: 'What property creates a frosted glass effect?',
                  options: ['filter: blur()', 'backdrop-filter: blur()', 'opacity: blur', 'glass-effect'],
                  correct: 1
                },
                {
                  question: 'Which hides an element AND removes it from layout?',
                  options: ['opacity: 0', 'visibility: hidden', 'display: none', 'z-index: -1'],
                  correct: 2
                }
              ]
            },
            {
              id: 'color-4',
              title: 'Shadows & Visual Effects',
              type: 'challenge',
              theory: `<h2>Shadows & Visual Effects</h2>
<p>Shadows add depth and dimension to elements, making interfaces feel more tangible and layered.</p>
<p><strong>box-shadow:</strong></p>
<pre><code>/* x-offset  y-offset  blur  spread  color */
.card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-elevated {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Inset shadow (inner shadow) */
.inset {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Multiple shadows */
.fancy {
  box-shadow: 
    0 1px 3px rgba(0,0,0,0.12),
    0 1px 2px rgba(0,0,0,0.24);
}</code></pre>
<p><strong>text-shadow:</strong></p>
<pre><code>.title {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Glowing text */
.glow {
  text-shadow: 0 0 10px #fff, 0 0 20px #ff0, 0 0 30px #ff0;
}</code></pre>
<p><strong>CSS Filters:</strong></p>
<pre><code>.photo {
  filter: brightness(1.1) contrast(1.1);
}

.grayscale {
  filter: grayscale(100%);
}

.blurred {
  filter: blur(5px);
}

img:hover {
  filter: brightness(1.1) saturate(1.2);
}</code></pre>
<p><strong>Filter functions:</strong> blur(), brightness(), contrast(), grayscale(), hue-rotate(), invert(), opacity(), saturate(), sepia(), drop-shadow()</p>
<p><strong>Common shadow patterns:</strong></p>
<ul>
<li>Subtle card: <code>0 2px 8px rgba(0,0,0,0.1)</code></li>
<li>Medium elevation: <code>0 4px 16px rgba(0,0,0,0.12)</code></li>
<li>High elevation: <code>0 12px 40px rgba(0,0,0,0.2)</code></li>
</ul>`,
              challenge: {
                description: 'Style .card with box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) and border-radius: 8px. Then style .card:hover with box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) and transform: translateY(-2px).',
                starterCode: '/* Add shadows and hover effects */\n',
                expectedOutput: '.card {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n.card:hover {\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}',
                hints: [
                  'box-shadow: x y blur spread color',
                  'Larger blur = softer shadow',
                  'On hover, increase shadow for lift effect',
                  'translateY(-2px) lifts the element up'
                ]
              },
              quiz: [
                {
                  question: 'What are the box-shadow values in order?',
                  options: ['blur x y color', 'x-offset y-offset blur spread color', 'color x y blur', 'spread blur x y color'],
                  correct: 1
                },
                {
                  question: 'What does the "inset" keyword do in box-shadow?',
                  options: ['Makes shadow larger', 'Creates an inner shadow', 'Removes the shadow', 'Makes it colored'],
                  correct: 1
                },
                {
                  question: 'Which filter removes all color from an image?',
                  options: ['blur()', 'grayscale(100%)', 'opacity(0)', 'invert()'],
                  correct: 1
                },
                {
                  question: 'Can you apply multiple shadows to one element?',
                  options: ['No', 'Yes, comma-separated', 'Only two', 'Only with JavaScript'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'typography',
          title: 'Typography',
          lessons: [
            {
              id: 'typo-1',
              title: 'Font Properties',
              type: 'challenge',
              theory: `<h2>Font Properties</h2>
<p>Typography is one of the most impactful aspects of web design. CSS provides extensive control over how text appears.</p>
<p><strong>font-family:</strong></p>
<pre><code>body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  font-family: Georgia, 'Times New Roman', serif;
}

code {
  font-family: 'Fira Code', 'Courier New', monospace;
}</code></pre>
<p>Always provide fallback fonts! The browser tries each font in order and uses the first available. End with a generic family (serif, sans-serif, monospace).</p>
<p><strong>font-size:</strong></p>
<pre><code>h1 { font-size: 2.5rem; }    /* Relative to root */
h2 { font-size: 2rem; }
p { font-size: 1rem; }        /* Usually 16px */
small { font-size: 0.875em; } /* Relative to parent */</code></pre>
<p><strong>font-weight:</strong></p>
<pre><code>.light { font-weight: 300; }
.normal { font-weight: 400; }    /* or: normal */
.medium { font-weight: 500; }
.bold { font-weight: 700; }      /* or: bold */
.heavy { font-weight: 900; }</code></pre>
<p><strong>font-style:</strong></p>
<pre><code>.italic { font-style: italic; }
.normal { font-style: normal; }</code></pre>
<p><strong>Font shorthand:</strong></p>
<pre><code>/* style weight size/line-height family */
p { font: italic 400 1rem/1.6 'Open Sans', sans-serif; }</code></pre>
<p><strong>Loading web fonts:</strong></p>
<pre><code>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700');</code></pre>`,
              challenge: {
                description: 'Style the body with font-family: "Inter", "Helvetica Neue", sans-serif and font-size: 16px. Style h1 with font-size: 2.5rem and font-weight: 700. Style .subtitle with font-size: 1.2rem and font-style: italic.',
                starterCode: '/* Style fonts */\n',
                expectedOutput: 'body {\n  font-family: "Inter", "Helvetica Neue", sans-serif;\n  font-size: 16px;\n}\n\nh1 {\n  font-size: 2.5rem;\n  font-weight: 700;\n}\n\n.subtitle {\n  font-size: 1.2rem;\n  font-style: italic;\n}',
                hints: [
                  'Quote font names with spaces',
                  'End font stack with generic family',
                  'rem is relative to root font size',
                  'font-weight: 700 equals bold'
                ]
              },
              quiz: [
                {
                  question: 'Why should you include fallback fonts?',
                  options: ['For speed', 'In case primary font fails to load', 'For accessibility', 'It\'s required'],
                  correct: 1
                },
                {
                  question: 'What is 1rem relative to?',
                  options: ['Parent element', 'Root (html) element font size', 'Browser default', 'Viewport width'],
                  correct: 1
                },
                {
                  question: 'What numeric value equals "bold"?',
                  options: ['500', '600', '700', '800'],
                  correct: 2
                },
                {
                  question: 'Which generic font family should code use?',
                  options: ['serif', 'sans-serif', 'monospace', 'cursive'],
                  correct: 2
                }
              ]
            },
            {
              id: 'typo-2',
              title: 'Text Properties',
              type: 'challenge',
              theory: `<h2>Text Properties</h2>
<p>Beyond fonts, CSS provides many properties to control how text is displayed, spaced, and aligned.</p>
<p><strong>text-align:</strong></p>
<pre><code>.center { text-align: center; }
.right { text-align: right; }
.justify { text-align: justify; }  /* Even edges */</code></pre>
<p><strong>text-decoration:</strong></p>
<pre><code>a { text-decoration: none; }  /* Remove underline */
.underline { text-decoration: underline; }
.strike { text-decoration: line-through; }
.fancy { text-decoration: underline wavy red; }</code></pre>
<p><strong>text-transform:</strong></p>
<pre><code>.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }  /* First Letter Of Each Word */</code></pre>
<p><strong>Spacing properties:</strong></p>
<pre><code>.spaced {
  letter-spacing: 2px;      /* Space between characters */
  word-spacing: 4px;        /* Space between words */
  line-height: 1.6;         /* Space between lines */
  text-indent: 2em;         /* First line indentation */
}</code></pre>
<p><strong>line-height</strong> is one of the most important readability properties. For body text, 1.5-1.7 is ideal. For headings, 1.1-1.3 works well.</p>
<p><strong>Text overflow:</strong></p>
<pre><code>.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;   /* Shows ... when text overflows */
}</code></pre>
<p>This three-property combination is the standard pattern for single-line text truncation with ellipsis.</p>`,
              challenge: {
                description: 'Style .heading with text-align: center, text-transform: uppercase, and letter-spacing: 2px. Style .truncate with white-space: nowrap, overflow: hidden, and text-overflow: ellipsis.',
                starterCode: '/* Style text properties */\n',
                expectedOutput: '.heading {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\n.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}',
                hints: [
                  'text-align centers block content',
                  'text-transform changes letter case',
                  'letter-spacing adds space between characters',
                  'Truncation needs all three properties together'
                ]
              },
              quiz: [
                {
                  question: 'What line-height is best for body text readability?',
                  options: ['1.0', '1.5-1.7', '2.5', '3.0'],
                  correct: 1
                },
                {
                  question: 'What does text-overflow: ellipsis show?',
                  options: ['Scroll bar', '... when text is cut off', 'More button', 'Nothing'],
                  correct: 1
                },
                {
                  question: 'What does text-transform: capitalize do?',
                  options: ['ALL CAPS', 'First letter of each word capitalized', 'all lowercase', 'First letter only'],
                  correct: 1
                },
                {
                  question: 'How do you remove the underline from links?',
                  options: ['underline: none', 'text-decoration: none', 'text-style: none', 'border-bottom: none'],
                  correct: 1
                }
              ]
            },
            {
              id: 'typo-3',
              title: 'Web Fonts & @font-face',
              type: 'challenge',
              theory: `<h2>Web Fonts & @font-face</h2>
<p>Web fonts let you use custom fonts that aren't installed on the user's device. There are two main ways to load them.</p>
<p><strong>Google Fonts (external service):</strong></p>
<pre><code>/* In HTML head */
&lt;link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"&gt;

/* In CSS */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

body { font-family: 'Roboto', sans-serif; }</code></pre>
<p><strong>@font-face (self-hosted):</strong></p>
<pre><code>@font-face {
  font-family: 'MyFont';
  src: url('fonts/myfont.woff2') format('woff2'),
       url('fonts/myfont.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}</code></pre>
<p><strong>font-display values:</strong></p>
<ul>
<li><code>swap</code> — Show fallback immediately, swap when loaded (recommended)</li>
<li><code>block</code> — Hide text briefly, then show custom font</li>
<li><code>fallback</code> — Brief block period, then fallback if not loaded fast</li>
<li><code>optional</code> — Browser decides based on connection speed</li>
</ul>
<p><strong>Font format priority:</strong></p>
<ol>
<li>WOFF2 — Best compression, wide support</li>
<li>WOFF — Good support, larger than WOFF2</li>
<li>TTF/OTF — Fallback for older systems</li>
</ol>
<p><strong>Performance tips:</strong></p>
<ul>
<li>Only load weights you actually use</li>
<li>Use <code>font-display: swap</code> to prevent invisible text</li>
<li>Preload critical fonts: <code>&lt;link rel="preload" href="font.woff2" as="font"&gt;</code></li>
<li>Consider variable fonts for multiple weights in one file</li>
</ul>`,
              challenge: {
                description: 'Write a @font-face rule for "CustomFont" using "fonts/custom.woff2" (format woff2) with font-weight: 400 and font-display: swap. Then use it on body with fallback sans-serif.',
                starterCode: '/* Load and use a custom font */\n',
                expectedOutput: '@font-face {\n  font-family: "CustomFont";\n  src: url("fonts/custom.woff2") format("woff2");\n  font-weight: 400;\n  font-display: swap;\n}\n\nbody {\n  font-family: "CustomFont", sans-serif;\n}',
                hints: [
                  '@font-face defines the font details',
                  'src specifies file path and format',
                  'font-display: swap prevents invisible text',
                  'Always include a fallback generic family'
                ]
              },
              quiz: [
                {
                  question: 'What is the most efficient web font format?',
                  options: ['TTF', 'OTF', 'WOFF2', 'EOT'],
                  correct: 2
                },
                {
                  question: 'What does font-display: swap do?',
                  options: ['Swaps two fonts', 'Shows fallback immediately, swaps when custom loads', 'Hides text until font loads', 'Removes the font'],
                  correct: 1
                },
                {
                  question: 'Why limit the number of font weights loaded?',
                  options: ['Browser limit', 'Each weight is a separate file that affects performance', 'Fonts look bad with many weights', 'CSS limit'],
                  correct: 1
                },
                {
                  question: 'What is a variable font?',
                  options: ['A font that changes randomly', 'Single file containing multiple weights/styles', 'A JavaScript-powered font', 'A responsive font'],
                  correct: 1
                }
              ]
            },
            {
              id: 'typo-4',
              title: 'Responsive Typography',
              type: 'challenge',
              theory: `<h2>Responsive Typography</h2>
<p>Text should be readable and proportional at every screen size. Responsive typography adapts font sizes, line heights, and spacing based on the viewport.</p>
<p><strong>Using rem units:</strong></p>
<pre><code>html { font-size: 16px; }  /* 1rem = 16px */

h1 { font-size: 2.5rem; }  /* 40px */
h2 { font-size: 2rem; }    /* 32px */
p { font-size: 1rem; }     /* 16px */

/* Change root = change everything */
@media (max-width: 768px) {
  html { font-size: 14px; }  /* Now 1rem = 14px everywhere */
}</code></pre>
<p><strong>Fluid typography with clamp():</strong></p>
<pre><code>h1 {
  font-size: clamp(1.8rem, 4vw, 3.5rem);
  /* min: 1.8rem, preferred: 4vw, max: 3.5rem */
}

p {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
}</code></pre>
<p><code>clamp(min, preferred, max)</code> creates fluid scaling between a minimum and maximum value. The preferred value (usually in vw) makes it scale with the viewport.</p>
<p><strong>Modular type scale:</strong></p>
<pre><code>:root {
  --scale-ratio: 1.25;  /* Major Third */
  --text-base: 1rem;
  --text-sm: calc(var(--text-base) / var(--scale-ratio));
  --text-lg: calc(var(--text-base) * var(--scale-ratio));
  --text-xl: calc(var(--text-lg) * var(--scale-ratio));
  --text-2xl: calc(var(--text-xl) * var(--scale-ratio));
}</code></pre>
<p><strong>Reading width:</strong></p>
<pre><code>.content {
  max-width: 65ch;  /* ~65 characters per line is optimal */
  margin: 0 auto;
}</code></pre>
<p>The <code>ch</code> unit equals the width of the "0" character. 45-75 characters per line is considered optimal for readability.</p>`,
              challenge: {
                description: 'Style h1 with font-size: clamp(2rem, 5vw, 4rem) and line-height: 1.2. Style p with font-size: clamp(1rem, 2vw, 1.25rem) and max-width: 65ch.',
                starterCode: '/* Create responsive typography */\n',
                expectedOutput: 'h1 {\n  font-size: clamp(2rem, 5vw, 4rem);\n  line-height: 1.2;\n}\n\np {\n  font-size: clamp(1rem, 2vw, 1.25rem);\n  max-width: 65ch;\n}',
                hints: [
                  'clamp(min, preferred, max) creates fluid sizing',
                  'vw units scale with viewport width',
                  'Headings need tighter line-height than body',
                  '65ch is optimal reading width'
                ]
              },
              quiz: [
                {
                  question: 'What does clamp() do?',
                  options: ['Clamps element position', 'Sets min, preferred, and max values', 'Limits number of lines', 'Clips overflow'],
                  correct: 1
                },
                {
                  question: 'What is the optimal line length for readability?',
                  options: ['20-30 characters', '45-75 characters', '100+ characters', '10-20 words'],
                  correct: 1
                },
                {
                  question: 'What does the ch unit represent?',
                  options: ['Character height', 'Width of the "0" character', 'Centimeters/hundredths', 'Chain length'],
                  correct: 1
                },
                {
                  question: 'Why use rem instead of px for font sizes?',
                  options: ['Smaller files', 'Scales with user preferences and responsive changes', 'Required by HTML5', 'Faster rendering'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'box-model',
          title: 'Box Model',
          lessons: [
            {
              id: 'box-1',
              title: 'Understanding the Box Model',
              type: 'challenge',
              theory: `<h2>Understanding the Box Model</h2>
<p>Every HTML element is a rectangular box. The <strong>CSS Box Model</strong> describes the space an element occupies, consisting of four layers from inside to outside:</p>
<ol>
<li><strong>Content</strong> — The actual content (text, images)</li>
<li><strong>Padding</strong> — Space between content and border</li>
<li><strong>Border</strong> — The border around the padding</li>
<li><strong>Margin</strong> — Space outside the border (between elements)</li>
</ol>
<pre><code>.box {
  width: 300px;           /* Content width */
  height: 200px;          /* Content height */
  padding: 20px;          /* Inner space */
  border: 2px solid #333; /* Border */
  margin: 10px;           /* Outer space */
}</code></pre>
<p><strong>Default box model (content-box):</strong></p>
<p>Total width = width + padding-left + padding-right + border-left + border-right</p>
<p>So a 300px wide box with 20px padding and 2px border = 344px total!</p>
<p><strong>border-box (recommended):</strong></p>
<pre><code>* { box-sizing: border-box; }</code></pre>
<p>With border-box, width includes padding and border. A 300px wide element stays 300px regardless of padding and border. This is much more intuitive!</p>
<p><strong>Inspecting the box model:</strong></p>
<p>Every browser's DevTools shows the box model visually. Right-click → Inspect → the Computed tab shows exact dimensions for content, padding, border, and margin.</p>`,
              challenge: {
                description: 'Create a .box class with: width: 300px, padding: 20px, border: 2px solid #333, margin: 15px, and box-sizing: border-box. The total rendered width will be exactly 300px.',
                starterCode: '/* Define a box with border-box sizing */\n',
                expectedOutput: '.box {\n  width: 300px;\n  padding: 20px;\n  border: 2px solid #333;\n  margin: 15px;\n  box-sizing: border-box;\n}',
                hints: [
                  'box-sizing: border-box includes padding and border in width',
                  'Without border-box, total width would be 344px',
                  'Margin is always outside the width',
                  'This is why we reset box-sizing globally'
                ]
              },
              quiz: [
                {
                  question: 'What are the four layers of the box model (inside to outside)?',
                  options: ['Margin, border, padding, content', 'Content, padding, border, margin', 'Border, content, padding, margin', 'Padding, content, margin, border'],
                  correct: 1
                },
                {
                  question: 'With box-sizing: content-box, what is the total width of a 200px wide box with 20px padding?',
                  options: ['200px', '220px', '240px', '260px'],
                  correct: 2
                },
                {
                  question: 'What does box-sizing: border-box do?',
                  options: ['Adds a box', 'Includes padding and border in the width', 'Removes the box model', 'Sets all borders'],
                  correct: 1
                },
                {
                  question: 'Is margin included in the element\'s width with border-box?',
                  options: ['Yes', 'No — margin is always external', 'Only horizontal margin', 'Depends on display type'],
                  correct: 1
                }
              ]
            },
            {
              id: 'box-2',
              title: 'Padding & Margin',
              type: 'challenge',
              theory: `<h2>Padding & Margin</h2>
<p><strong>Padding</strong> creates space inside an element (between content and border). <strong>Margin</strong> creates space outside an element (between elements).</p>
<p><strong>Individual sides:</strong></p>
<pre><code>.box {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
}</code></pre>
<p><strong>Shorthand (clockwise: top, right, bottom, left):</strong></p>
<pre><code>padding: 10px 20px 10px 20px;  /* All four sides */
padding: 10px 20px;             /* top/bottom | left/right */
padding: 10px;                  /* All sides equal */
padding: 10px 20px 30px;        /* top | left+right | bottom */</code></pre>
<p><strong>Margin collapsing:</strong></p>
<p>Vertical margins between adjacent elements collapse — only the larger margin applies:</p>
<pre><code>h2 { margin-bottom: 20px; }
p { margin-top: 15px; }
/* Space between h2 and p = 20px (not 35px!) */</code></pre>
<p><strong>Centering with margin:</strong></p>
<pre><code>.centered {
  width: 800px;
  margin: 0 auto;  /* Centers horizontally */
}</code></pre>
<p><code>margin: 0 auto</code> only works on block elements with a defined width.</p>
<p><strong>Key differences:</strong></p>
<ul>
<li>Padding adds to background area; margin is always transparent</li>
<li>Padding never has negative values; margin can be negative</li>
<li>Vertical margins collapse; padding never does</li>
<li>Clicking padding triggers the element's events; margin doesn't</li>
</ul>`,
              challenge: {
                description: 'Style .container with max-width: 1200px, margin: 0 auto (centered), and padding: 0 20px. Style .section with margin-bottom: 40px and padding: 30px.',
                starterCode: '/* Use padding and margin effectively */\n',
                expectedOutput: '.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.section {\n  margin-bottom: 40px;\n  padding: 30px;\n}',
                hints: [
                  'margin: 0 auto centers block elements',
                  'max-width + auto margin = responsive centering',
                  'Padding 0 20px = no top/bottom, 20px sides',
                  'margin-bottom creates space between sections'
                ]
              },
              quiz: [
                {
                  question: 'What does margin: 0 auto do?',
                  options: ['Sets all margins to 0', 'Centers the element horizontally', 'Removes margins', 'Auto-sizes margins'],
                  correct: 1
                },
                {
                  question: 'What is margin collapsing?',
                  options: ['Margins disappear', 'Adjacent vertical margins merge into the larger one', 'Margins become padding', 'Negative margins'],
                  correct: 1
                },
                {
                  question: 'Which shorthand means 10px top/bottom, 20px left/right?',
                  options: ['padding: 10px 20px 10px 20px', 'padding: 10px 20px', 'padding: 20px 10px', 'padding: 10px/20px'],
                  correct: 1
                },
                {
                  question: 'Can margins have negative values?',
                  options: ['No', 'Yes — to overlap elements', 'Only margin-top', 'Only with position: relative'],
                  correct: 1
                }
              ]
            },
            {
              id: 'box-3',
              title: 'Borders & Border Radius',
              type: 'challenge',
              theory: `<h2>Borders & Border Radius</h2>
<p>Borders add visual structure and separation to elements. CSS provides extensive control over border appearance.</p>
<p><strong>Border shorthand:</strong></p>
<pre><code>.box {
  border: 2px solid #333;     /* width style color */
}

.dashed {
  border: 1px dashed #ccc;
}

.double-border {
  border: 4px double #000;
}</code></pre>
<p><strong>Border styles:</strong> solid, dashed, dotted, double, groove, ridge, inset, outset, none, hidden</p>
<p><strong>Individual sides:</strong></p>
<pre><code>.card {
  border-bottom: 3px solid #007bff;  /* Bottom accent */
  border-left: 4px solid red;        /* Left indicator */
}</code></pre>
<p><strong>border-radius (rounded corners):</strong></p>
<pre><code>.rounded { border-radius: 8px; }          /* All corners */
.pill { border-radius: 50px; }            /* Pill shape */
.circle { border-radius: 50%; }           /* Perfect circle */
.custom { border-radius: 10px 0 10px 0; } /* Diagonal corners */

/* Individual corners */
.card {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}</code></pre>
<p><strong>Outline (not part of box model):</strong></p>
<pre><code>button:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;  /* Space between element and outline */
}</code></pre>
<p>Outline is similar to border but doesn't take up space or affect layout. It's commonly used for focus indicators.</p>`,
              challenge: {
                description: 'Style .card with border: 1px solid #e0e0e0 and border-radius: 12px. Style .avatar with border-radius: 50% (circle) and border: 3px solid #007bff. Style .alert with border-left: 4px solid #ff4444 and padding: 16px.',
                starterCode: '/* Style borders and rounded corners */\n',
                expectedOutput: '.card {\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n}\n\n.avatar {\n  border-radius: 50%;\n  border: 3px solid #007bff;\n}\n\n.alert {\n  border-left: 4px solid #ff4444;\n  padding: 16px;\n}',
                hints: [
                  'border-radius: 50% creates a circle',
                  'Border shorthand: width style color',
                  'Individual sides use border-left, border-top, etc.',
                  'Left border accent is a common UI pattern'
                ]
              },
              quiz: [
                {
                  question: 'What border-radius value creates a perfect circle?',
                  options: ['100px', '50%', 'circle', 'round'],
                  correct: 1
                },
                {
                  question: 'What is the border shorthand order?',
                  options: ['color style width', 'width style color', 'style width color', 'width color style'],
                  correct: 1
                },
                {
                  question: 'Does outline affect the box model layout?',
                  options: ['Yes, like border', 'No, it doesn\'t take up space', 'Only with outline-offset', 'Depends on the element'],
                  correct: 1
                },
                {
                  question: 'Which border style creates dots?',
                  options: ['dashed', 'dotted', 'pointed', 'spotted'],
                  correct: 1
                }
              ]
            },
            {
              id: 'box-4',
              title: 'Width, Height & Overflow',
              type: 'challenge',
              theory: `<h2>Width, Height & Overflow</h2>
<p>Controlling element dimensions and handling content that doesn't fit is essential for building robust layouts.</p>
<p><strong>Width and Height:</strong></p>
<pre><code>.box {
  width: 300px;       /* Fixed width */
  max-width: 100%;   /* Never exceeds parent */
  min-width: 200px;  /* Never smaller than this */
  
  height: auto;       /* Grows with content (default) */
  min-height: 400px; /* At least this tall */
  max-height: 600px; /* Never taller than this */
}</code></pre>
<p><strong>Common responsive pattern:</strong></p>
<pre><code>img {
  max-width: 100%;    /* Never overflow container */
  height: auto;       /* Maintain aspect ratio */
}</code></pre>
<p><strong>Overflow — what happens when content exceeds the box:</strong></p>
<pre><code>.box {
  overflow: visible;  /* Default — content spills out */
  overflow: hidden;   /* Clips overflow content */
  overflow: scroll;   /* Always shows scrollbars */
  overflow: auto;     /* Shows scrollbars only when needed */
}

/* Control axes independently */
.box {
  overflow-x: auto;   /* Horizontal scrolling */
  overflow-y: hidden; /* No vertical overflow */
}</code></pre>
<p><strong>Aspect ratio (modern CSS):</strong></p>
<pre><code>.video-container {
  aspect-ratio: 16 / 9;   /* Maintains 16:9 ratio */
  width: 100%;
}

.square {
  aspect-ratio: 1;  /* Perfect square */
  width: 200px;
}</code></pre>
<p><strong>Best practices:</strong></p>
<ul>
<li>Prefer max-width over width for responsive design</li>
<li>Avoid fixed heights — let content determine height</li>
<li>Use min-height when you need a minimum size</li>
<li>Use overflow: auto (not scroll) to avoid unnecessary scrollbars</li>
</ul>`,
              challenge: {
                description: 'Style .container with max-width: 1000px, min-height: 100vh, and overflow-x: hidden. Style .image-responsive with max-width: 100%, height: auto, and display: block.',
                starterCode: '/* Control dimensions and overflow */\n',
                expectedOutput: '.container {\n  max-width: 1000px;\n  min-height: 100vh;\n  overflow-x: hidden;\n}\n\n.image-responsive {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}',
                hints: [
                  'max-width prevents overflow on small screens',
                  '100vh = full viewport height',
                  'overflow-x controls horizontal overflow only',
                  'height: auto maintains image aspect ratio'
                ]
              },
              quiz: [
                {
                  question: 'What does overflow: auto do?',
                  options: ['Always shows scrollbars', 'Shows scrollbars only when needed', 'Hides overflow', 'Auto-adjusts size'],
                  correct: 1
                },
                {
                  question: 'What is the responsive image pattern?',
                  options: ['width: 100%', 'max-width: 100%; height: auto;', 'display: block', 'object-fit: cover'],
                  correct: 1
                },
                {
                  question: 'What does aspect-ratio: 16 / 9 do?',
                  options: ['Sets width to 16px', 'Maintains a 16:9 width-to-height ratio', 'Creates a 16x9 grid', 'Scales by 16/9'],
                  correct: 1
                },
                {
                  question: 'Why avoid fixed heights?',
                  options: ['They\'re not valid CSS', 'Content may overflow on different devices/content lengths', 'They\'re slower', 'They break flexbox'],
                  correct: 1
                }
              ]
            },
            {
              id: 'box-5',
              title: 'Box Model Practical Patterns',
              type: 'challenge',
              theory: `<h2>Box Model Practical Patterns</h2>
<p>Let's look at real-world patterns that combine box model properties effectively.</p>
<p><strong>Card component:</strong></p>
<pre><code>.card {
  padding: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  max-width: 400px;
  margin: 16px;
}</code></pre>
<p><strong>Container with breathing room:</strong></p>
<pre><code>.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 48px);
}</code></pre>
<p><strong>Sticky footer layout:</strong></p>
<pre><code>.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content { flex: 1; }
.footer { margin-top: auto; }</code></pre>
<p><strong>Spacing system using margin:</strong></p>
<pre><code>.stack > * + * {
  margin-top: 16px;  /* Space between all children */
}

/* Or with custom property */
.stack { --space: 1.5rem; }
.stack > * + * { margin-top: var(--space); }</code></pre>
<p><strong>Full-bleed images inside containers:</strong></p>
<pre><code>.full-bleed {
  width: 100vw;
  margin-left: calc(50% - 50vw);
}</code></pre>
<p><strong>Equal-height sidebar and main:</strong></p>
<pre><code>.layout {
  display: flex;
}

.sidebar {
  width: 250px;
  padding: 20px;
  border-right: 1px solid #eee;
}

.main {
  flex: 1;
  padding: 20px;
}</code></pre>`,
              challenge: {
                description: 'Create a .card class with padding: 24px, border-radius: 8px, box-shadow: 0 2px 8px rgba(0,0,0,0.1), max-width: 350px, and margin: 16px auto (centered). Add .stack > * + * with margin-top: 16px.',
                starterCode: '/* Create practical box model patterns */\n',
                expectedOutput: '.card {\n  padding: 24px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  max-width: 350px;\n  margin: 16px auto;\n}\n\n.stack > * + * {\n  margin-top: 16px;\n}',
                hints: [
                  'margin: 16px auto centers with top/bottom margin',
                  'box-shadow adds depth without borders',
                  '> * + * selects all children except first',
                  'This "lobotomized owl" selector creates uniform spacing'
                ]
              },
              quiz: [
                {
                  question: 'What does .stack > * + * select?',
                  options: ['All children', 'First child only', 'All direct children except the first', 'Last child only'],
                  correct: 2
                },
                {
                  question: 'How do you center a block element with margin?',
                  options: ['margin: center', 'margin: 0 auto (with defined width)', 'margin: auto', 'margin: 50%'],
                  correct: 1
                },
                {
                  question: 'What is min-height: 100vh useful for?',
                  options: ['Making scrollable pages', 'Ensuring page fills at least the full viewport', 'Setting font size', 'Responsive images'],
                  correct: 1
                },
                {
                  question: 'What does the full-bleed pattern achieve?',
                  options: ['Red background', 'Element stretches beyond its container to viewport edges', 'Blood-red text', 'Removes borders'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'display-positioning',
          title: 'Display & Positioning',
          lessons: [
            {
              id: 'display-1',
              title: 'Display Property',
              type: 'challenge',
              theory: `<h2>Display Property</h2>
<p>The <code>display</code> property determines how an element behaves in the layout flow. It's one of the most fundamental CSS properties.</p>
<p><strong>Block elements</strong> (display: block):</p>
<ul>
<li>Take full available width</li>
<li>Start on a new line</li>
<li>Width, height, margin, padding all work</li>
<li>Examples: div, p, h1-h6, section, article</li>
</ul>
<p><strong>Inline elements</strong> (display: inline):</p>
<ul>
<li>Only take the width of their content</li>
<li>Don't start on a new line</li>
<li>Width and height have no effect</li>
<li>Only horizontal margin/padding work</li>
<li>Examples: span, a, strong, em</li>
</ul>
<p><strong>Inline-block</strong> (display: inline-block):</p>
<ul>
<li>Flows inline like text</li>
<li>But respects width, height, and all margins/padding like block</li>
<li>Perfect for buttons and badges in text</li>
</ul>
<pre><code>.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  background: #007bff;
  color: white;
}</code></pre>
<p><strong>None</strong> (display: none):</p>
<pre><code>.hidden { display: none; }  /* Completely removed from layout */</code></pre>
<p><strong>Other display values:</strong></p>
<ul>
<li><code>flex</code> — Flexbox container (next module!)</li>
<li><code>grid</code> — Grid container (advanced section)</li>
<li><code>inline-flex</code> — Inline flexbox</li>
<li><code>contents</code> — Element disappears, children promote up</li>
</ul>`,
              challenge: {
                description: 'Style .tag as inline-block with padding: 4px 12px, background: #e8f5e9, border-radius: 20px. Style .hidden with display: none. Style .full-width as display: block with width: 100%.',
                starterCode: '/* Use different display values */\n',
                expectedOutput: '.tag {\n  display: inline-block;\n  padding: 4px 12px;\n  background: #e8f5e9;\n  border-radius: 20px;\n}\n\n.hidden {\n  display: none;\n}\n\n.full-width {\n  display: block;\n  width: 100%;\n}',
                hints: [
                  'inline-block combines inline flow with block properties',
                  'display: none removes from layout entirely',
                  'Block elements take full width by default',
                  'Tags/badges commonly use inline-block'
                ]
              },
              quiz: [
                {
                  question: 'What is the default display for a <div>?',
                  options: ['inline', 'block', 'inline-block', 'flex'],
                  correct: 1
                },
                {
                  question: 'Can you set width on an inline element?',
                  options: ['Yes', 'No — width has no effect on inline', 'Only with important', 'Only percentage widths'],
                  correct: 1
                },
                {
                  question: 'What does display: none do?',
                  options: ['Makes element transparent', 'Completely removes from layout', 'Hides but keeps space', 'Disables interactions'],
                  correct: 1
                },
                {
                  question: 'What is inline-block good for?',
                  options: ['Page layout', 'Elements that flow inline but need block properties', 'Hiding elements', 'Creating tables'],
                  correct: 1
                }
              ]
            },
            {
              id: 'display-2',
              title: 'Position Property',
              type: 'challenge',
              theory: `<h2>Position Property</h2>
<p>The <code>position</code> property controls how an element is placed in the document. It works with <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>, and <code>z-index</code>.</p>
<p><strong>static</strong> (default):</p>
<pre><code>.normal { position: static; }  /* Normal document flow */</code></pre>
<p><strong>relative:</strong></p>
<pre><code>.shifted {
  position: relative;
  top: 10px;    /* Moves down 10px from normal position */
  left: 20px;   /* Moves right 20px from normal position */
}</code></pre>
<p>Element stays in flow (space preserved) but renders offset. Also creates a positioning context for absolute children.</p>
<p><strong>absolute:</strong></p>
<pre><code>.popup {
  position: absolute;
  top: 0;
  right: 0;     /* Positioned to nearest positioned ancestor */
}</code></pre>
<p>Removed from normal flow. Positioned relative to the nearest ancestor with position: relative/absolute/fixed/sticky.</p>
<p><strong>fixed:</strong></p>
<pre><code>.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;  /* Stays in viewport even when scrolling */
}</code></pre>
<p><strong>sticky:</strong></p>
<pre><code>.header {
  position: sticky;
  top: 0;       /* Becomes fixed when scrolled past this point */
}</code></pre>
<p>Behaves like relative until the element reaches the specified offset, then becomes fixed. Perfect for sticky headers and sidebars.</p>
<p><strong>z-index:</strong> Controls stacking order (higher = in front). Only works on positioned elements (not static).</p>`,
              challenge: {
                description: 'Style .navbar with position: fixed, top: 0, left: 0, width: 100%, z-index: 1000, and background: white. Style .badge-corner with position: absolute, top: -5px, and right: -5px.',
                starterCode: '/* Use positioning */\n',
                expectedOutput: '.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n}\n\n.badge-corner {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n}',
                hints: [
                  'Fixed stays in viewport on scroll',
                  'Absolute positions relative to nearest positioned parent',
                  'z-index controls stacking order',
                  'Negative top/right moves outside parent bounds'
                ]
              },
              quiz: [
                {
                  question: 'What is the default position value?',
                  options: ['relative', 'absolute', 'static', 'fixed'],
                  correct: 2
                },
                {
                  question: 'What does position: fixed do?',
                  options: ['Stays in normal flow', 'Positioned relative to viewport (stays on scroll)', 'Positioned relative to parent', 'Cannot be moved'],
                  correct: 1
                },
                {
                  question: 'What must the parent have for absolute positioning to work relative to it?',
                  options: ['display: block', 'A position value other than static', 'overflow: hidden', 'z-index'],
                  correct: 1
                },
                {
                  question: 'What does position: sticky do?',
                  options: ['Always fixed', 'Switches between relative and fixed based on scroll', 'Sticks to the mouse', 'Sticks to the bottom'],
                  correct: 1
                }
              ]
            },
            {
              id: 'display-3',
              title: 'Z-Index & Stacking Context',
              type: 'challenge',
              theory: `<h2>Z-Index & Stacking Context</h2>
<p>When elements overlap, <code>z-index</code> determines which appears on top. Understanding stacking contexts prevents common layering bugs.</p>
<p><strong>Basic z-index:</strong></p>
<pre><code>.background { z-index: 1; }
.content { z-index: 10; }
.modal { z-index: 100; }
.tooltip { z-index: 1000; }</code></pre>
<p><strong>Rules of z-index:</strong></p>
<ul>
<li>Only works on positioned elements (not static)</li>
<li>Higher values appear in front of lower values</li>
<li>Can be negative (goes behind parent)</li>
<li>Default is auto (follows DOM order)</li>
</ul>
<p><strong>Stacking context:</strong></p>
<p>A stacking context is a group. Z-index only competes within the same context. A new context is created by:</p>
<ul>
<li>Position + z-index (not auto)</li>
<li>opacity less than 1</li>
<li>transform (any value)</li>
<li>filter</li>
<li>isolation: isolate</li>
</ul>
<pre><code>/* Common z-index scale */
:root {
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-tooltip: 600;
}</code></pre>
<p><strong>Debugging stacking issues:</strong></p>
<p>If z-index isn't working, check: Is the element positioned? Is there a stacking context on an ancestor limiting it? Use CSS variables to maintain a consistent z-index scale across your project.</p>`,
              challenge: {
                description: 'Create a z-index system: .dropdown with position: absolute and z-index: 100, .modal-overlay with position: fixed and z-index: 900, .modal with position: fixed and z-index: 1000.',
                starterCode: '/* Create a z-index layering system */\n',
                expectedOutput: '.dropdown {\n  position: absolute;\n  z-index: 100;\n}\n\n.modal-overlay {\n  position: fixed;\n  z-index: 900;\n}\n\n.modal {\n  position: fixed;\n  z-index: 1000;\n}',
                hints: [
                  'z-index only works on positioned elements',
                  'Higher values appear in front',
                  'Modals should be above overlays',
                  'Use a consistent scale (100s or 1000s)'
                ]
              },
              quiz: [
                {
                  question: 'Does z-index work on position: static elements?',
                  options: ['Yes', 'No', 'Only with !important', 'Only positive values'],
                  correct: 1
                },
                {
                  question: 'What creates a new stacking context?',
                  options: ['display: block', 'opacity less than 1', 'margin: auto', 'padding'],
                  correct: 1
                },
                {
                  question: 'Can z-index be negative?',
                  options: ['No', 'Yes — element goes behind its parent', 'Only -1', 'Only with position: absolute'],
                  correct: 1
                },
                {
                  question: 'Why use CSS variables for z-index values?',
                  options: ['They\'re faster', 'Maintains consistent scale across project', 'Required for z-index', 'Better browser support'],
                  correct: 1
                }
              ]
            },
            {
              id: 'display-4',
              title: 'Float & Clear',
              type: 'challenge',
              theory: `<h2>Float & Clear</h2>
<p>Floats were originally designed for wrapping text around images. While largely replaced by Flexbox and Grid for layouts, floats are still useful for their original purpose.</p>
<p><strong>Basic float:</strong></p>
<pre><code>.float-left {
  float: left;
  margin-right: 15px;  /* Space between float and text */
  margin-bottom: 10px;
}

.float-right {
  float: right;
  margin-left: 15px;
}</code></pre>
<p><strong>How floats work:</strong></p>
<ul>
<li>Element is removed from normal flow</li>
<li>Moves to the left or right of its container</li>
<li>Other content wraps around it</li>
<li>The parent container collapses (doesn't contain the float)</li>
</ul>
<p><strong>Clearing floats:</strong></p>
<pre><code>.clear { clear: both; }  /* No floats on either side */

/* Modern clearfix (apply to float parent) */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}</code></pre>
<p><strong>Text wrapping around images (primary modern use):</strong></p>
<pre><code>article img {
  float: left;
  margin: 0 20px 10px 0;
  max-width: 50%;
}
</code></pre>
<p><strong>When to use floats today:</strong></p>
<ul>
<li>✅ Wrapping text around images</li>
<li>✅ Drop caps (float first letter)</li>
<li>❌ Multi-column layouts (use Flexbox/Grid)</li>
<li>❌ Navigation bars (use Flexbox)</li>
</ul>`,
              challenge: {
                description: 'Style .article-image with float: left, margin: 0 20px 10px 0, and max-width: 50%. Create a .clearfix::after with content: "", display: table, and clear: both.',
                starterCode: '/* Float an image with text wrapping */\n',
                expectedOutput: '.article-image {\n  float: left;\n  margin: 0 20px 10px 0;\n  max-width: 50%;\n}\n\n.clearfix::after {\n  content: "";\n  display: table;\n  clear: both;\n}',
                hints: [
                  'Float pulls element to one side',
                  'Margin creates space between float and text',
                  'Clearfix prevents parent collapse',
                  '::after with clear: both is the clearfix technique'
                ]
              },
              quiz: [
                {
                  question: 'What was float originally designed for?',
                  options: ['Page layouts', 'Wrapping text around images', 'Animations', 'Centering elements'],
                  correct: 1
                },
                {
                  question: 'What problem does clearfix solve?',
                  options: ['Slow loading', 'Parent container collapsing around floated children', 'Text overflow', 'Z-index issues'],
                  correct: 1
                },
                {
                  question: 'Should you use floats for page layouts today?',
                  options: ['Yes, it\'s best practice', 'No, use Flexbox or Grid instead', 'Only for 2-column layouts', 'Only in IE'],
                  correct: 1
                },
                {
                  question: 'What does clear: both do?',
                  options: ['Clears all styles', 'Ensures no floats on either side', 'Removes the element', 'Clears background'],
                  correct: 1
                }
              ]
            },
            {
              id: 'display-5',
              title: 'Centering Techniques',
              type: 'challenge',
              theory: `<h2>Centering Techniques</h2>
<p>Centering elements is one of the most common CSS tasks. Here are all the reliable methods.</p>
<p><strong>Horizontal centering:</strong></p>
<pre><code>/* Block element with defined width */
.center-block {
  max-width: 800px;
  margin: 0 auto;
}

/* Inline/text content */
.center-text { text-align: center; }

/* Flexbox */
.center-flex { 
  display: flex; 
  justify-content: center; 
}</code></pre>
<p><strong>Vertical centering:</strong></p>
<pre><code>/* Flexbox (most common) */
.center-vertical {
  display: flex;
  align-items: center;
  min-height: 300px;
}

/* Absolute + transform */
.center-absolute {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}</code></pre>
<p><strong>Both axes (perfect center):</strong></p>
<pre><code>/* Method 1: Flexbox (recommended) */
.center-both {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Method 2: Grid (simplest) */
.center-grid {
  display: grid;
  place-items: center;
}

/* Method 3: Absolute + transform */
.center-transform {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Method 4: Margin auto with flexbox */
.parent { display: flex; }
.child { margin: auto; }</code></pre>
<p><strong>Quick reference:</strong></p>
<ul>
<li>Horizontal text: <code>text-align: center</code></li>
<li>Horizontal block: <code>margin: 0 auto</code> (needs width)</li>
<li>Both axes: <code>display: grid; place-items: center;</code></li>
</ul>`,
              challenge: {
                description: 'Create three centering approaches: .center-horizontal with text-align: center, .center-flex with display: flex, justify-content: center, and align-items: center, and .center-grid with display: grid and place-items: center.',
                starterCode: '/* Multiple centering techniques */\n',
                expectedOutput: '.center-horizontal {\n  text-align: center;\n}\n\n.center-flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.center-grid {\n  display: grid;\n  place-items: center;\n}',
                hints: [
                  'text-align centers inline content',
                  'Flexbox needs justify + align for both axes',
                  'Grid place-items is the shortest method',
                  'Each method has different use cases'
                ]
              },
              quiz: [
                {
                  question: 'What is the simplest way to center both horizontally and vertically?',
                  options: ['margin: auto', 'display: grid; place-items: center;', 'text-align: center', 'position: center'],
                  correct: 1
                },
                {
                  question: 'What does margin: 0 auto require to work?',
                  options: ['display: flex', 'A defined width/max-width', 'position: relative', 'text-align: center'],
                  correct: 1
                },
                {
                  question: 'In flexbox, which property centers items vertically?',
                  options: ['justify-content', 'align-items', 'flex-direction', 'align-self'],
                  correct: 1
                },
                {
                  question: 'What does transform: translate(-50%, -50%) do in centering?',
                  options: ['Moves to center of page', 'Offsets the element back by half its own size', 'Scales to 50%', 'Rotates 50%'],
                  correct: 1
                }
              ]
            },
            {
              id: 'display-6',
              title: 'Visibility & Element Hiding',
              type: 'challenge',
              theory: `<h2>Visibility & Element Hiding</h2>
<p>There are many ways to hide elements in CSS, each with different behaviors. Choosing the right method depends on your use case.</p>
<p><strong>display: none</strong></p>
<pre><code>.removed { display: none; }
/* Element is completely removed from layout and accessibility tree */</code></pre>
<p><strong>visibility: hidden</strong></p>
<pre><code>.invisible { visibility: hidden; }
/* Hidden but still takes up space in layout */</code></pre>
<p><strong>opacity: 0</strong></p>
<pre><code>.transparent { opacity: 0; }
/* Invisible, takes space, still interactive (clickable!) */</code></pre>
<p><strong>Comparison table:</strong></p>
<table>
<tr><th>Method</th><th>Space?</th><th>Clickable?</th><th>Accessible?</th><th>Animatable?</th></tr>
<tr><td>display: none</td><td>No</td><td>No</td><td>No</td><td>No</td></tr>
<tr><td>visibility: hidden</td><td>Yes</td><td>No</td><td>No</td><td>Yes</td></tr>
<tr><td>opacity: 0</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td>clip-path</td><td>Yes</td><td>No</td><td>Depends</td><td>Yes</td></tr>
</table>
<p><strong>Visually hidden (screen-reader only):</strong></p>
<pre><code>.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}</code></pre>
<p>This pattern hides content visually while keeping it accessible to screen readers — perfect for labels and descriptive text that sighted users don't need.</p>`,
              challenge: {
                description: 'Create a .sr-only class (visually hidden but accessible) with position: absolute, width: 1px, height: 1px, overflow: hidden, and clip: rect(0, 0, 0, 0). Also create .fade-out with opacity: 0 and visibility: hidden.',
                starterCode: '/* Different ways to hide elements */\n',
                expectedOutput: '.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n}\n\n.fade-out {\n  opacity: 0;\n  visibility: hidden;\n}',
                hints: [
                  'sr-only is visible to screen readers only',
                  'Combining opacity: 0 + visibility: hidden prevents clicks',
                  'clip: rect(0,0,0,0) clips to nothing',
                  'Both patterns serve different accessibility needs'
                ]
              },
              quiz: [
                {
                  question: 'Which method removes element from layout AND accessibility tree?',
                  options: ['opacity: 0', 'visibility: hidden', 'display: none', 'clip-path'],
                  correct: 2
                },
                {
                  question: 'Which hidden method still allows clicks?',
                  options: ['display: none', 'visibility: hidden', 'opacity: 0', 'clip: rect(0,0,0,0)'],
                  correct: 2
                },
                {
                  question: 'What is the .sr-only pattern for?',
                  options: ['Hiding from everyone', 'Content visible only to screen readers', 'Hiding on small screens', 'Security purposes'],
                  correct: 1
                },
                {
                  question: 'Which properties can be animated in transitions?',
                  options: ['display only', 'opacity and visibility (not display)', 'All of them', 'None of them'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'flexbox',
          title: 'Flexbox',
          lessons: [
            {
              id: 'flex-1',
              title: 'Flexbox Fundamentals',
              type: 'challenge',
              theory: `<h2>Flexbox Fundamentals</h2>
<p><strong>Flexbox</strong> (Flexible Box Layout) is a one-dimensional layout system designed for arranging items in rows or columns. It handles alignment, distribution, and ordering with ease.</p>
<p><strong>Activating flexbox:</strong></p>
<pre><code>.container {
  display: flex;  /* Makes children flex items */
}</code></pre>
<p>Once you set <code>display: flex</code> on a container, all direct children become <strong>flex items</strong> that automatically align in a row.</p>
<p><strong>Key terminology:</strong></p>
<ul>
<li><strong>Flex container</strong> — The parent with display: flex</li>
<li><strong>Flex items</strong> — Direct children of the container</li>
<li><strong>Main axis</strong> — The primary direction (default: horizontal/row)</li>
<li><strong>Cross axis</strong> — Perpendicular to main axis (default: vertical)</li>
</ul>
<p><strong>flex-direction:</strong></p>
<pre><code>.row { flex-direction: row; }           /* Default: left to right */
.row-reverse { flex-direction: row-reverse; }  /* Right to left */
.column { flex-direction: column; }     /* Top to bottom */
.column-reverse { flex-direction: column-reverse; }</code></pre>
<p><strong>flex-wrap:</strong></p>
<pre><code>.wrap { flex-wrap: wrap; }       /* Items wrap to next line */
.nowrap { flex-wrap: nowrap; }   /* Default: single line */</code></pre>
<p><strong>Shorthand:</strong></p>
<pre><code>.container {
  display: flex;
  flex-flow: row wrap;  /* direction + wrap */
}</code></pre>`,
              challenge: {
                description: 'Create a .flex-container with display: flex, flex-direction: row, flex-wrap: wrap, and gap: 16px. Create a .flex-column with display: flex and flex-direction: column.',
                starterCode: '/* Set up flexbox containers */\n',
                expectedOutput: '.flex-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.flex-column {\n  display: flex;\n  flex-direction: column;\n}',
                hints: [
                  'display: flex activates flexbox',
                  'flex-direction sets the main axis',
                  'flex-wrap: wrap allows items to wrap',
                  'gap adds space between flex items'
                ]
              },
              quiz: [
                {
                  question: 'What does display: flex do?',
                  options: ['Makes element flexible', 'Makes direct children flex items', 'Creates a grid', 'Adds flexibility to text'],
                  correct: 1
                },
                {
                  question: 'What is the default flex-direction?',
                  options: ['column', 'row', 'row-reverse', 'inherit'],
                  correct: 1
                },
                {
                  question: 'What does flex-wrap: wrap do?',
                  options: ['Wraps text', 'Allows items to wrap to next line when space runs out', 'Wraps the container', 'Adds word wrap'],
                  correct: 1
                },
                {
                  question: 'What is the main axis when flex-direction is column?',
                  options: ['Horizontal', 'Vertical', 'Diagonal', 'Both'],
                  correct: 1
                }
              ]
            },
            {
              id: 'flex-2',
              title: 'Justify & Align',
              type: 'challenge',
              theory: `<h2>Justify & Align</h2>
<p>The most powerful aspect of flexbox is its alignment capabilities. Two main properties control distribution along each axis.</p>
<p><strong>justify-content</strong> (main axis distribution):</p>
<pre><code>.container {
  justify-content: flex-start;     /* Default: pack to start */
  justify-content: flex-end;       /* Pack to end */
  justify-content: center;         /* Center all items */
  justify-content: space-between;  /* Even space, no edge gaps */
  justify-content: space-around;   /* Even space, half-size edge gaps */
  justify-content: space-evenly;   /* Perfectly even spacing */
}</code></pre>
<p><strong>align-items</strong> (cross axis alignment):</p>
<pre><code>.container {
  align-items: stretch;     /* Default: items stretch to fill */
  align-items: flex-start;  /* Align to top (in row) */
  align-items: flex-end;    /* Align to bottom */
  align-items: center;      /* Center vertically */
  align-items: baseline;    /* Align text baselines */
}</code></pre>
<p><strong>Common patterns:</strong></p>
<pre><code>/* Perfect center */
.center-all {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Space between with centered vertically (navbar) */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Push last item to the end */
.spacer { margin-left: auto; }</code></pre>
<p><strong>align-content</strong> (for wrapped multi-line flex):</p>
<p>When items wrap to multiple lines, <code>align-content</code> controls the spacing between lines (similar values to justify-content).</p>`,
              challenge: {
                description: 'Create a .navbar with display: flex, justify-content: space-between, align-items: center, and padding: 0 20px. Create .center-page with display: flex, justify-content: center, align-items: center, min-height: 100vh.',
                starterCode: '/* Align flex items */\n',
                expectedOutput: '.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.center-page {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}',
                hints: [
                  'justify-content works on the main axis',
                  'align-items works on the cross axis',
                  'space-between pushes first/last to edges',
                  'center + center = perfect centering'
                ]
              },
              quiz: [
                {
                  question: 'Which property distributes items along the main axis?',
                  options: ['align-items', 'justify-content', 'flex-direction', 'align-content'],
                  correct: 1
                },
                {
                  question: 'What does space-between do?',
                  options: ['Equal space including edges', 'Equal space between items, none at edges', 'Centers items', 'Fills all space'],
                  correct: 1
                },
                {
                  question: 'What is the default align-items value?',
                  options: ['center', 'flex-start', 'stretch', 'baseline'],
                  correct: 2
                },
                {
                  question: 'How do you push an item to the far right in a flex row?',
                  options: ['float: right', 'margin-left: auto on that item', 'align-self: end', 'justify-self: end'],
                  correct: 1
                }
              ]
            },
            {
              id: 'flex-3',
              title: 'Flex Item Properties',
              type: 'challenge',
              theory: `<h2>Flex Item Properties</h2>
<p>Properties on flex items control how they grow, shrink, and size themselves within the container.</p>
<p><strong>flex-grow:</strong></p>
<pre><code>.item { flex-grow: 1; }  /* Takes available space */
.item-double { flex-grow: 2; }  /* Takes twice as much available space */
</code></pre>
<p>Default is 0 (don't grow). When set, items expand to fill remaining space proportionally.</p>
<p><strong>flex-shrink:</strong></p>
<pre><code>.item { flex-shrink: 1; }  /* Default: can shrink */
.no-shrink { flex-shrink: 0; }  /* Won't shrink below basis */</code></pre>
<p><strong>flex-basis:</strong></p>
<pre><code>.item { flex-basis: 200px; }  /* Starting size before grow/shrink */
.item { flex-basis: 25%; }    /* 25% of container */
.item { flex-basis: auto; }   /* Use content/width (default) */</code></pre>
<p><strong>The flex shorthand:</strong></p>
<pre><code>/* flex: grow shrink basis */
.item { flex: 0 1 auto; }    /* Default */
.item { flex: 1; }           /* grow:1, shrink:1, basis:0 (fill equally) */
.item { flex: 1 0 300px; }   /* Grow from 300px, don't shrink */
.item { flex: none; }        /* 0 0 auto (don't flex at all) */</code></pre>
<p><strong>align-self:</strong></p>
<pre><code>.item { align-self: flex-end; }  /* Override align-items for this item */</code></pre>
<p><strong>order:</strong></p>
<pre><code>.first { order: -1; }   /* Move before others */
.last { order: 99; }    /* Move to end */</code></pre>
<p>Default order is 0. Lower values appear first.</p>`,
              challenge: {
                description: 'Create a layout: .sidebar with flex: 0 0 250px (fixed width, no grow/shrink). .main-content with flex: 1 (takes remaining space). .aside with flex: 0 0 200px.',
                starterCode: '/* Control flex item sizing */\n',
                expectedOutput: '.sidebar {\n  flex: 0 0 250px;\n}\n\n.main-content {\n  flex: 1;\n}\n\n.aside {\n  flex: 0 0 200px;\n}',
                hints: [
                  'flex: 0 0 250px means don\'t grow, don\'t shrink, start at 250px',
                  'flex: 1 means grow to fill available space',
                  'This creates a classic sidebar-main-sidebar layout',
                  'flex shorthand: grow shrink basis'
                ]
              },
              quiz: [
                {
                  question: 'What does flex: 1 mean?',
                  options: ['Width of 1px', 'Grow to fill available space equally', 'Shrink to 1px', 'Order of 1'],
                  correct: 1
                },
                {
                  question: 'What does flex-shrink: 0 do?',
                  options: ['Removes the item', 'Item won\'t shrink below its basis', 'Item shrinks to 0', 'No effect'],
                  correct: 1
                },
                {
                  question: 'What is flex-basis?',
                  options: ['Minimum size', 'Maximum size', 'Initial size before grow/shrink', 'Final size'],
                  correct: 2
                },
                {
                  question: 'What does order: -1 do?',
                  options: ['Hides the item', 'Moves item before all default-order items', 'Reverses direction', 'Removes from DOM'],
                  correct: 1
                }
              ]
            },
            {
              id: 'flex-4',
              title: 'Flexbox Gap & Spacing',
              type: 'challenge',
              theory: `<h2>Flexbox Gap & Spacing</h2>
<p>The <code>gap</code> property is the modern, clean way to add spacing between flex items without margin hacks.</p>
<p><strong>The gap property:</strong></p>
<pre><code>.container {
  display: flex;
  gap: 20px;              /* Equal gap in both directions */
  row-gap: 20px;          /* Gap between rows (wrapped items) */
  column-gap: 16px;       /* Gap between columns */
  gap: 20px 16px;         /* row-gap column-gap */
}</code></pre>
<p><strong>Before gap (old approach):</strong></p>
<pre><code>/* Had to use margins and negative margins */
.container {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}
.item {
  margin: 8px;
}</code></pre>
<p><strong>Why gap is better:</strong></p>
<ul>
<li>No extra margin on first/last items</li>
<li>No negative margin hacks needed</li>
<li>Works perfectly with wrap</li>
<li>Simple and predictable</li>
</ul>
<p><strong>Spacing patterns:</strong></p>
<pre><code>/* Card grid */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

/* Navigation */
.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}

/* Form fields stacked */
.form-stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
}</code></pre>
<p>The gap property also works with CSS Grid (where it was first introduced) and even with multi-column layout.</p>`,
              challenge: {
                description: 'Create .card-grid with display: flex, flex-wrap: wrap, and gap: 24px. Create .nav with display: flex, align-items: center, and gap: 32px. Create .form-fields with display: flex, flex-direction: column, and gap: 12px.',
                starterCode: '/* Use gap for flex spacing */\n',
                expectedOutput: '.card-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n}\n\n.form-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}',
                hints: [
                  'gap adds space between items only',
                  'No space at edges (unlike margin)',
                  'Works with both row and column direction',
                  'Replaces the old margin-based spacing hacks'
                ]
              },
              quiz: [
                {
                  question: 'What is the advantage of gap over margin for spacing?',
                  options: ['It\'s faster', 'No space at edges, cleaner with wrap', 'It\'s required', 'Better colors'],
                  correct: 1
                },
                {
                  question: 'What does gap: 20px 16px mean?',
                  options: ['20px all around', '20px row gap, 16px column gap', '20px left, 16px right', '20px top, 16px bottom'],
                  correct: 1
                },
                {
                  question: 'Does gap work with flex-wrap?',
                  options: ['No', 'Yes, perfectly', 'Only gap between columns', 'Only with grid'],
                  correct: 1
                },
                {
                  question: 'Does gap add space at the container edges?',
                  options: ['Yes', 'No — only between items', 'Only on the right', 'Depends on direction'],
                  correct: 1
                }
              ]
            },
            {
              id: 'flex-5',
              title: 'Common Flexbox Patterns',
              type: 'challenge',
              theory: `<h2>Common Flexbox Patterns</h2>
<p>Here are battle-tested flexbox patterns you'll use in nearly every project.</p>
<p><strong>Header/Navbar:</strong></p>
<pre><code>.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
}

.header .nav-links {
  display: flex;
  gap: 24px;
}</code></pre>
<p><strong>Card layout with equal heights:</strong></p>
<pre><code>.card-container {
  display: flex;
  gap: 24px;
}

.card {
  flex: 1;           /* Equal width cards */
  display: flex;
  flex-direction: column;
}

.card-body { flex: 1; }  /* Pushes footer down */
</code></pre>
<p><strong>Media object (image + text):</strong></p>
<pre><code>.media {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.media-image { flex-shrink: 0; }
.media-body { flex: 1; }</code></pre>
<p><strong>Holy grail layout:</strong></p>
<pre><code>.page { display: flex; flex-direction: column; min-height: 100vh; }
.content-area { display: flex; flex: 1; }
.sidebar { flex: 0 0 250px; }
.main { flex: 1; }
.footer { /* stays at bottom */ }</code></pre>
<p><strong>Input with button:</strong></p>
<pre><code>.input-group {
  display: flex;
}
.input-group input { flex: 1; }
.input-group button { flex-shrink: 0; }</code></pre>`,
              challenge: {
                description: 'Create a .media-object with display: flex, gap: 16px, align-items: flex-start. Create .media-image with flex-shrink: 0 and width: 80px. Create .media-body with flex: 1.',
                starterCode: '/* Build a media object pattern */\n',
                expectedOutput: '.media-object {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n\n.media-image {\n  flex-shrink: 0;\n  width: 80px;\n}\n\n.media-body {\n  flex: 1;\n}',
                hints: [
                  'Media object = image side by side with text',
                  'flex-shrink: 0 prevents image from shrinking',
                  'flex: 1 on body fills remaining space',
                  'align-items: flex-start aligns to top'
                ]
              },
              quiz: [
                {
                  question: 'How do you make flex cards equal width?',
                  options: ['width: 33%', 'flex: 1 on each card', 'equal-width: true', 'justify-content: equal'],
                  correct: 1
                },
                {
                  question: 'How do you push a footer to the bottom in a flex column?',
                  options: ['position: absolute', 'margin-top: auto on footer or flex: 1 on content', 'vertical-align: bottom', 'align-self: end'],
                  correct: 1
                },
                {
                  question: 'Why use flex-shrink: 0 on a fixed-size element?',
                  options: ['Makes it bigger', 'Prevents it from shrinking below its defined size', 'Removes it from flex', 'Fixes a bug'],
                  correct: 1
                },
                {
                  question: 'What is the media object pattern?',
                  options: ['A video player', 'Image/avatar alongside text content', 'A slideshow', 'Audio player with controls'],
                  correct: 1
                }
              ]
            },
            {
              id: 'flex-6',
              title: 'Responsive Flexbox',
              type: 'challenge',
              theory: `<h2>Responsive Flexbox</h2>
<p>Flexbox naturally lends itself to responsive design. Combined with media queries, it creates layouts that adapt beautifully to any screen size.</p>
<p><strong>Wrap-based responsiveness:</strong></p>
<pre><code>.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px;  /* Grow, shrink, minimum 300px */
  /* Cards will wrap when they can't fit at 300px */
}</code></pre>
<p>This pattern creates a responsive grid without media queries! Cards fill available space but wrap when they'd be smaller than 300px.</p>
<p><strong>Direction change on mobile:</strong></p>
<pre><code>.layout {
  display: flex;
  gap: 24px;
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }
}
</code></pre>
<p><strong>Responsive navigation:</strong></p>
<pre><code>.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 16px;
  }
}</code></pre>
<p><strong>Container queries (modern):</strong></p>
<pre><code>.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card { flex-direction: row; }
}</code></pre>
<p><strong>Responsive patterns without media queries:</strong></p>
<ul>
<li><code>flex-wrap: wrap</code> with appropriate flex-basis</li>
<li><code>min()</code> and <code>max()</code> functions</li>
<li><code>clamp()</code> for fluid sizing</li>
</ul>`,
              challenge: {
                description: 'Create .responsive-grid with display: flex, flex-wrap: wrap, and gap: 20px. Create .grid-item with flex: 1 1 280px (minimum 280px, grows and wraps). Add a media query at max-width: 600px that changes .responsive-grid gap to 12px.',
                starterCode: '/* Create responsive flexbox layout */\n',
                expectedOutput: '.responsive-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.grid-item {\n  flex: 1 1 280px;\n}\n\n@media (max-width: 600px) {\n  .responsive-grid {\n    gap: 12px;\n  }\n}',
                hints: [
                  'flex: 1 1 280px = grow, shrink, min 280px',
                  'Items automatically wrap when below 280px',
                  'Media queries can fine-tune at breakpoints',
                  'This creates responsive grids without complex media queries'
                ]
              },
              quiz: [
                {
                  question: 'How does flex: 1 1 300px create responsive behavior?',
                  options: ['It doesn\'t', 'Items wrap when they can\'t fit at 300px, filling space otherwise', 'Forces 300px width', 'Only on mobile'],
                  correct: 1
                },
                {
                  question: 'What is the simplest way to make a flex layout stack on mobile?',
                  options: ['display: none', 'Change flex-direction to column in a media query', 'Remove display: flex', 'Set width: 100%'],
                  correct: 1
                },
                {
                  question: 'Can flexbox create responsive layouts without media queries?',
                  options: ['No, always needs them', 'Yes, using flex-wrap with flex-basis', 'Only with JavaScript', 'Only for simple layouts'],
                  correct: 1
                },
                {
                  question: 'What are container queries useful for?',
                  options: ['Viewport-based styling', 'Styling based on parent container size', 'Creating containers', 'Database queries'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'card-project',
          title: 'Card Component PROJECT',
          lessons: [
            {
              id: 'proj-card-1',
              title: 'Card - Structure & Base Styles',
              type: 'project',
              theory: `<h2>Card Component - Structure & Base Styles</h2>
<p>Cards are one of the most common UI components on the web. Let's build a complete, reusable card component from scratch using everything we've learned.</p>
<p><strong>What we're building:</strong> A product card with image, title, description, price, and action button.</p>
<p><strong>Base card styles:</strong></p>
<pre><code>.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  max-width: 350px;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}</code></pre>
<p><strong>Design decisions:</strong></p>
<ul>
<li><code>overflow: hidden</code> — Clips the image to the rounded corners</li>
<li><code>transition</code> — Smooth hover animation</li>
<li><code>object-fit: cover</code> — Image fills area without distortion</li>
<li><code>max-width</code> — Prevents card from stretching too wide</li>
</ul>`,
              challenge: {
                description: 'Create the base .card styles with: background: white, border-radius: 12px, overflow: hidden, box-shadow: 0 2px 8px rgba(0,0,0,0.1), and max-width: 350px. Add .card-image with width: 100%, height: 200px, object-fit: cover, and display: block.',
                starterCode: '/* Build the card base styles */\n',
                expectedOutput: '.card {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  max-width: 350px;\n}\n\n.card-image {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  display: block;\n}',
                hints: [
                  'overflow: hidden clips content to border-radius',
                  'object-fit: cover fills without distortion',
                  'display: block removes inline image gap',
                  'max-width keeps cards a reasonable size'
                ]
              },
              quiz: [
                {
                  question: 'Why use overflow: hidden on a card with border-radius?',
                  options: ['Hides text', 'Clips child content to rounded corners', 'Removes scrollbars', 'Makes it smaller'],
                  correct: 1
                },
                {
                  question: 'What does object-fit: cover do?',
                  options: ['Stretches the image', 'Fills area maintaining aspect ratio, may crop', 'Shows entire image with gaps', 'Creates a cover page'],
                  correct: 1
                },
                {
                  question: 'Why add display: block to images?',
                  options: ['Makes them bigger', 'Removes the default inline whitespace gap below', 'Required for width', 'Adds a border'],
                  correct: 1
                }
              ]
            },
            {
              id: 'proj-card-2',
              title: 'Card - Typography & Spacing',
              type: 'project',
              theory: `<h2>Card - Typography & Spacing</h2>
<p>Now let's style the text content inside our card with proper hierarchy, spacing, and readability.</p>
<pre><code>.card-content {
  padding: 20px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 8px;
  line-height: 1.3;
}

.card-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 16px;
}

.card-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #16213e;
  margin-bottom: 16px;
}

.card-price .original-price {
  font-size: 0.9rem;
  color: #999;
  text-decoration: line-through;
  font-weight: 400;
  margin-left: 8px;
}</code></pre>
<p><strong>Typography principles for cards:</strong></p>
<ul>
<li>Clear hierarchy: title is largest/boldest, description is smaller/lighter</li>
<li>Consistent spacing using multiples of 4 or 8px</li>
<li>Color contrast: dark titles, medium descriptions, muted meta info</li>
<li>Line heights: tighter for headings (1.2-1.3), looser for body (1.5-1.6)</li>
</ul>`,
              challenge: {
                description: 'Style .card-content with padding: 20px. Style .card-title with font-size: 1.25rem, font-weight: 600, color: #1a1a2e, margin-bottom: 8px. Style .card-description with font-size: 0.9rem, color: #666, line-height: 1.5, margin-bottom: 16px.',
                starterCode: '/* Style card typography */\n',
                expectedOutput: '.card-content {\n  padding: 20px;\n}\n\n.card-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 8px;\n}\n\n.card-description {\n  font-size: 0.9rem;\n  color: #666;\n  line-height: 1.5;\n  margin-bottom: 16px;\n}',
                hints: [
                  'Establish clear visual hierarchy with size and weight',
                  'Use spacing multiples of 8px for rhythm',
                  'Lighter colors for less important text',
                  'Good line-height improves readability'
                ]
              },
              quiz: [
                {
                  question: 'What creates visual hierarchy in card typography?',
                  options: ['Same size, different colors', 'Different font sizes, weights, and colors', 'All bold text', 'All the same size'],
                  correct: 1
                },
                {
                  question: 'What spacing system creates visual rhythm?',
                  options: ['Random values', 'Multiples of 4 or 8', 'Always 10px', 'Percentage only'],
                  correct: 1
                },
                {
                  question: 'What line-height is best for card descriptions?',
                  options: ['1.0', '1.5-1.6', '2.5', '3.0'],
                  correct: 1
                }
              ]
            },
            {
              id: 'proj-card-3',
              title: 'Card - Button & Hover Effects',
              type: 'project',
              theory: `<h2>Card - Button & Hover Effects</h2>
<p>Let's add a call-to-action button and polished hover interactions to complete our card component.</p>
<pre><code>.card-button {
  display: block;
  width: 100%;
  padding: 12px 24px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  text-align: center;
  text-decoration: none;
}

.card-button:hover {
  background: #0056b3;
}

.card-button:active {
  transform: scale(0.98);
}

/* Card hover lift effect */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

/* Badge/tag on card */
.card-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #ff4444;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}</code></pre>
<p><strong>The parent needs position: relative for the absolute badge:</strong></p>
<pre><code>.card { position: relative; }</code></pre>`,
              challenge: {
                description: 'Style .card-button with display: block, width: 100%, padding: 12px, background: #007bff, color: white, border: none, border-radius: 8px, cursor: pointer, transition: background 0.2s. Style .card-button:hover with background: #0056b3.',
                starterCode: '/* Style the card button */\n',
                expectedOutput: '.card-button {\n  display: block;\n  width: 100%;\n  padding: 12px;\n  background: #007bff;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n\n.card-button:hover {\n  background: #0056b3;\n}',
                hints: [
                  'display: block + width: 100% makes full-width button',
                  'border: none removes default button border',
                  'cursor: pointer shows clickable hand',
                  'transition makes hover smooth'
                ]
              },
              quiz: [
                {
                  question: 'Why add cursor: pointer to buttons?',
                  options: ['It\'s required', 'Shows the hand cursor indicating clickability', 'Makes it bigger', 'Adds animation'],
                  correct: 1
                },
                {
                  question: 'What does transition: background 0.2s do?',
                  options: ['Changes background after 0.2s delay', 'Smoothly animates background color changes over 0.2s', 'Fades in the element', 'Moves the background'],
                  correct: 1
                },
                {
                  question: 'What creates the card lift effect on hover?',
                  options: ['margin-top: -4px', 'transform: translateY(-4px) + shadow increase', 'top: -4px', 'padding change'],
                  correct: 1
                }
              ]
            },
            {
              id: 'proj-card-4',
              title: 'Card - Responsive Grid Layout',
              type: 'project',
              theory: `<h2>Card - Responsive Grid Layout</h2>
<p>A single card is great, but most UIs display multiple cards in a responsive grid. Let's create a card grid that works on all screen sizes.</p>
<pre><code>.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;
}

.card-grid .card {
  flex: 1 1 300px;  /* Responsive without media queries! */
  max-width: 400px;
}

/* Or with explicit breakpoints */
@media (max-width: 768px) {
  .card-grid .card {
    flex: 1 1 100%;  /* Full width on mobile */
    max-width: none;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .card-grid .card {
    flex: 1 1 calc(50% - 12px);  /* 2 columns on tablet */
  }
}

@media (min-width: 1025px) {
  .card-grid .card {
    flex: 1 1 calc(33.333% - 16px);  /* 3 columns on desktop */
  }
}</code></pre>
<p><strong>Complete card component CSS brings together:</strong></p>
<ul>
<li>Box model (padding, margin, border-radius)</li>
<li>Typography (font sizing, weights, colors)</li>
<li>Colors & backgrounds (gradients, shadows)</li>
<li>Flexbox (layout, alignment, responsiveness)</li>
<li>Transitions (smooth hover effects)</li>
<li>Positioning (badge overlay)</li>
</ul>
<p>This card pattern is used on virtually every modern website — from e-commerce product grids to blog post listings to team member profiles.</p>`,
              challenge: {
                description: 'Create .card-grid with display: flex, flex-wrap: wrap, gap: 24px, and justify-content: center. Style .card-grid .card with flex: 1 1 300px and max-width: 380px. Add a media query at max-width: 640px setting .card-grid .card to flex: 1 1 100%.',
                starterCode: '/* Create responsive card grid */\n',
                expectedOutput: '.card-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n}\n\n.card-grid .card {\n  flex: 1 1 300px;\n  max-width: 380px;\n}\n\n@media (max-width: 640px) {\n  .card-grid .card {\n    flex: 1 1 100%;\n  }\n}',
                hints: [
                  'flex: 1 1 300px = responsive minimum width',
                  'max-width prevents cards from being too wide',
                  'On mobile, flex: 1 1 100% makes full-width cards',
                  'justify-content: center centers incomplete rows'
                ]
              },
              quiz: [
                {
                  question: 'What does flex: 1 1 300px do for responsive cards?',
                  options: ['Fixed 300px', 'Cards are min 300px wide, grow to fill space, wrap when needed', 'Max 300px', 'Exactly 300px always'],
                  correct: 1
                },
                {
                  question: 'Why add max-width to cards in a flex grid?',
                  options: ['Required by flexbox', 'Prevents a single card from stretching too wide', 'For animation', 'Browser compatibility'],
                  correct: 1
                },
                {
                  question: 'What pattern creates a responsive grid without media queries?',
                  options: ['display: grid only', 'flex-wrap: wrap + flex-basis', 'float: left', 'display: inline-block'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'units-values',
          title: 'Units & Values',
          lessons: [
            {
              id: 'units-1',
              title: 'Absolute vs Relative Units',
              type: 'challenge',
              theory: `<h2>Absolute vs Relative Units</h2>
<p>CSS offers many measurement units. Choosing the right one affects responsiveness, accessibility, and maintainability.</p>
<p><strong>Absolute units (fixed size):</strong></p>
<ul>
<li><code>px</code> — Pixels (most common absolute unit)</li>
<li><code>pt</code> — Points (1/72 inch, mainly for print)</li>
<li><code>cm</code>, <code>mm</code>, <code>in</code> — Physical units (rarely used for screens)</li>
</ul>
<p><strong>Relative units (scale with context):</strong></p>
<ul>
<li><code>em</code> — Relative to parent's font-size</li>
<li><code>rem</code> — Relative to root (html) font-size</li>
<li><code>%</code> — Relative to parent's size</li>
<li><code>vw</code> — 1% of viewport width</li>
<li><code>vh</code> — 1% of viewport height</li>
<li><code>vmin</code> — 1% of smaller viewport dimension</li>
<li><code>vmax</code> — 1% of larger viewport dimension</li>
<li><code>ch</code> — Width of the "0" character</li>
</ul>
<p><strong>When to use which:</strong></p>
<ul>
<li><code>rem</code> — Font sizes, spacing (respects user preferences)</li>
<li><code>px</code> — Borders, shadows, small fixed details</li>
<li><code>%</code> — Widths relative to parent</li>
<li><code>vw/vh</code> — Full-screen sections, fluid typography</li>
<li><code>em</code> — Component-relative spacing (e.g., padding on buttons)</li>
<li><code>ch</code> — Text width constraints</li>
</ul>
<pre><code>html { font-size: 16px; }  /* 1rem = 16px */

body { font-size: 1rem; }  /* Scales with user preference */
h1 { font-size: 2.5rem; }  /* 40px at default */
.container { max-width: 75rem; } /* 1200px at default */
.hero { min-height: 100vh; }     /* Full viewport height */</code></pre>`,
              challenge: {
                description: 'Style html with font-size: 16px. Style .container with max-width: 75rem and padding: 0 1.5rem. Style .hero with min-height: 100vh. Style .content with max-width: 65ch.',
                starterCode: '/* Use appropriate CSS units */\n',
                expectedOutput: 'html {\n  font-size: 16px;\n}\n\n.container {\n  max-width: 75rem;\n  padding: 0 1.5rem;\n}\n\n.hero {\n  min-height: 100vh;\n}\n\n.content {\n  max-width: 65ch;\n}',
                hints: [
                  'rem is relative to root font-size',
                  'vh is viewport height percentage',
                  'ch is character width for readable lines',
                  'Mix units based on their purpose'
                ]
              },
              quiz: [
                {
                  question: 'What is 1rem equal to by default?',
                  options: ['10px', '12px', '16px', '20px'],
                  correct: 2
                },
                {
                  question: 'What does 100vh represent?',
                  options: ['100% of parent height', '100% of viewport height', '100 pixels', '100% width'],
                  correct: 1
                },
                {
                  question: 'Which unit is relative to parent font-size?',
                  options: ['rem', 'em', 'px', 'vh'],
                  correct: 1
                },
                {
                  question: 'Why prefer rem over px for font sizes?',
                  options: ['Smaller files', 'Respects user browser font preferences', 'Faster rendering', 'Required by spec'],
                  correct: 1
                }
              ]
            },
            {
              id: 'units-2',
              title: 'CSS Functions: calc, min, max, clamp',
              type: 'challenge',
              theory: `<h2>CSS Functions: calc, min, max, clamp</h2>
<p>CSS mathematical functions let you compute values dynamically, mixing units and creating responsive solutions without media queries.</p>
<p><strong>calc() — Perform math with mixed units:</strong></p>
<pre><code>.sidebar { width: calc(100% - 300px); }
.container { padding: calc(2rem + 1vw); }
.offset { margin-top: calc(var(--header-height) + 20px); }</code></pre>
<p><strong>min() — Use the smaller value:</strong></p>
<pre><code>.container { width: min(1200px, 90%); }
/* Uses 90% on small screens, caps at 1200px */</code></pre>
<p><strong>max() — Use the larger value:</strong></p>
<pre><code>.element { font-size: max(16px, 1.5vw); }
/* Never smaller than 16px, but scales with viewport */</code></pre>
<p><strong>clamp(min, preferred, max) — Best of all worlds:</strong></p>
<pre><code>.title { font-size: clamp(1.5rem, 4vw, 3rem); }
.container { width: clamp(300px, 80%, 1200px); }
.padding { padding: clamp(16px, 4vw, 48px); }</code></pre>
<p><strong>Practical examples:</strong></p>
<pre><code>/* Responsive container */
.container {
  width: min(1200px, 100% - 3rem);
  margin: 0 auto;
}

/* Fluid spacing */
.section {
  padding: clamp(2rem, 5vw, 5rem) 0;
}

/* Dynamic grid gap */
.grid {
  gap: clamp(12px, 2vw, 32px);
}</code></pre>
<p>These functions reduce the need for media queries and create smoother responsive behavior. They're especially powerful combined with CSS custom properties.</p>`,
              challenge: {
                description: 'Style .container with width: min(1200px, 90%) and margin: 0 auto. Style .fluid-padding with padding: clamp(16px, 4vw, 48px). Style .sidebar with width: calc(100% - 320px).',
                starterCode: '/* Use CSS math functions */\n',
                expectedOutput: '.container {\n  width: min(1200px, 90%);\n  margin: 0 auto;\n}\n\n.fluid-padding {\n  padding: clamp(16px, 4vw, 48px);\n}\n\n.sidebar {\n  width: calc(100% - 320px);\n}',
                hints: [
                  'min() picks the smaller of two values',
                  'clamp(min, preferred, max) sets a range',
                  'calc() can mix different units',
                  'These reduce need for media queries'
                ]
              },
              quiz: [
                {
                  question: 'What does min(1200px, 90%) return on a 1000px screen?',
                  options: ['1200px', '900px (90% of 1000)', '1000px', '90%'],
                  correct: 1
                },
                {
                  question: 'What does clamp(1rem, 3vw, 2rem) do at very wide viewports?',
                  options: ['Returns 3vw', 'Returns 2rem (the max)', 'Returns 1rem', 'Returns the viewport width'],
                  correct: 1
                },
                {
                  question: 'Can calc() mix pixels and percentages?',
                  options: ['No', 'Yes — calc(100% - 50px) is valid', 'Only with same units', 'Only rem and px'],
                  correct: 1
                },
                {
                  question: 'Which function is best for fluid typography?',
                  options: ['calc()', 'min()', 'max()', 'clamp()'],
                  correct: 3
                }
              ]
            },
            {
              id: 'units-3',
              title: 'Custom Properties (CSS Variables)',
              type: 'challenge',
              theory: `<h2>Custom Properties (CSS Variables)</h2>
<p>CSS Custom Properties (also called CSS variables) let you store values and reuse them throughout your stylesheet. They're declared with <code>--</code> prefix and accessed with <code>var()</code>.</p>
<p><strong>Declaring variables:</strong></p>
<pre><code>:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size-base: 1rem;
  --spacing-unit: 8px;
  --border-radius: 8px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
}</code></pre>
<p><strong>Using variables:</strong></p>
<pre><code>.button {
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 3);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
}

.card {
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
}</code></pre>
<p><strong>Fallback values:</strong></p>
<pre><code>color: var(--text-color, #333);  /* Uses #333 if --text-color is not defined */</code></pre>
<p><strong>Scoped variables:</strong></p>
<pre><code>.dark-theme {
  --primary-color: #4fc3f7;
  --bg-color: #1a1a2e;
  --text-color: #e0e0e0;
}
/* Only applies within .dark-theme elements */</code></pre>
<p><strong>Why use CSS variables:</strong></p>
<ul>
<li>Single source of truth (change once, updates everywhere)</li>
<li>Theming (dark mode) becomes trivial</li>
<li>Component customization from parent context</li>
<li>Can be manipulated with JavaScript</li>
<li>Cascade and inherit like other properties</li>
</ul>`,
              challenge: {
                description: 'Define variables in :root: --primary: #3b82f6, --radius: 8px, --shadow: 0 2px 8px rgba(0,0,0,0.1). Then use them in .btn with background: var(--primary), border-radius: var(--radius), and box-shadow: var(--shadow).',
                starterCode: '/* Define and use CSS variables */\n',
                expectedOutput: ':root {\n  --primary: #3b82f6;\n  --radius: 8px;\n  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.btn {\n  background: var(--primary);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n}',
                hints: [
                  'Declare variables in :root for global scope',
                  'Variable names start with --',
                  'Access with var(--name)',
                  'Can be reused across multiple rules'
                ]
              },
              quiz: [
                {
                  question: 'How do you declare a CSS variable?',
                  options: ['$variable: value', '@variable: value', '--variable: value', 'var(name): value'],
                  correct: 2
                },
                {
                  question: 'How do you use a CSS variable?',
                  options: ['$(--name)', 'var(--name)', '--name', '#{name}'],
                  correct: 1
                },
                {
                  question: 'Where should global variables be declared?',
                  options: ['In body', 'In :root', 'In * selector', 'In html'],
                  correct: 1
                },
                {
                  question: 'Can CSS variables be changed with JavaScript?',
                  options: ['No', 'Yes', 'Only global ones', 'Only with frameworks'],
                  correct: 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'css-advanced',
      title: 'Advanced CSS',
      description: 'Master Grid layout, responsive design, animations, and build a complete landing page',
      modules: [
        {
          id: 'grid-layout',
          title: 'Grid Layout',
          lessons: [
            {
              id: 'grid-1',
              title: 'Grid Fundamentals',
              type: 'challenge',
              theory: `<h2>CSS Grid Fundamentals</h2>
<p><strong>CSS Grid</strong> is a two-dimensional layout system that handles both rows and columns simultaneously. While Flexbox is one-dimensional, Grid excels at complex page layouts.</p>
<p><strong>Activating Grid:</strong></p>
<pre><code>.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}</code></pre>
<p><strong>Key terminology:</strong></p>
<ul>
<li><strong>Grid container</strong> — Parent with display: grid</li>
<li><strong>Grid items</strong> — Direct children</li>
<li><strong>Grid lines</strong> — Dividing lines (numbered starting at 1)</li>
<li><strong>Grid tracks</strong> — Rows or columns</li>
<li><strong>Grid cells</strong> — Single intersections</li>
<li><strong>Grid areas</strong> — Named rectangular regions</li>
</ul>
<p><strong>Defining columns and rows:</strong></p>
<pre><code>/* Fixed sizes */
grid-template-columns: 100px 200px 100px;

/* Fractional units (fr) */
grid-template-columns: 1fr 2fr 1fr;  /* 25% 50% 25% */

/* Mixed */
grid-template-columns: 250px 1fr;  /* Sidebar + flexible main */

/* Repeat */
grid-template-columns: repeat(3, 1fr);  /* Three equal columns */
grid-template-columns: repeat(4, 250px);  /* Four 250px columns */</code></pre>
<p>The <code>fr</code> unit represents a fraction of available space. <code>1fr 2fr</code> means the second column gets twice the space of the first.</p>`,
              challenge: {
                description: 'Create a .grid-container with display: grid, grid-template-columns: repeat(3, 1fr), grid-template-rows: auto, and gap: 20px. Create .grid-sidebar-layout with display: grid and grid-template-columns: 250px 1fr.',
                starterCode: '/* Set up CSS Grid */\n',
                expectedOutput: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto;\n  gap: 20px;\n}\n\n.grid-sidebar-layout {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n}',
                hints: [
                  'display: grid activates grid layout',
                  'repeat(3, 1fr) creates 3 equal columns',
                  'fr distributes available space',
                  '250px 1fr = fixed sidebar + flexible main'
                ]
              },
              quiz: [
                {
                  question: 'What is the difference between Grid and Flexbox?',
                  options: ['No difference', 'Grid is 2D (rows+columns), Flexbox is 1D', 'Flexbox is newer', 'Grid only does columns'],
                  correct: 1
                },
                {
                  question: 'What does the fr unit represent?',
                  options: ['Frames', 'A fraction of available space', 'A fixed ratio', 'Font relative'],
                  correct: 1
                },
                {
                  question: 'What does repeat(4, 1fr) create?',
                  options: ['4 rows', '4 equal-width columns', '4 pixels', '4 gaps'],
                  correct: 1
                },
                {
                  question: 'What does grid-template-columns: 200px 1fr do?',
                  options: ['Two 200px columns', '200px first column, rest fills remaining space', 'One column at 200px', 'Error'],
                  correct: 1
                }
              ]
            },
            {
              id: 'grid-2',
              title: 'Grid Item Placement',
              type: 'challenge',
              theory: `<h2>Grid Item Placement</h2>
<p>Grid items can be precisely placed using line numbers, spans, or named areas.</p>
<p><strong>Line-based placement:</strong></p>
<pre><code>.item {
  grid-column-start: 1;
  grid-column-end: 3;    /* Spans columns 1-2 */
  grid-row-start: 1;
  grid-row-end: 2;
}

/* Shorthand */
.item {
  grid-column: 1 / 3;    /* Start line 1, end line 3 */
  grid-row: 1 / 2;
}

/* Span keyword */
.wide-item {
  grid-column: span 2;   /* Spans 2 columns from current position */
}

.tall-item {
  grid-row: span 3;      /* Spans 3 rows */
}</code></pre>
<p><strong>Named grid areas:</strong></p>
<pre><code>.layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 16px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }</code></pre>
<p><strong>Key points:</strong></p>
<ul>
<li>Grid lines are numbered starting at 1 (not 0)</li>
<li>Negative numbers count from the end (-1 = last line)</li>
<li><code>grid-column: 1 / -1</code> spans the full width</li>
<li>Named areas create a visual ASCII representation of your layout</li>
</ul>`,
              challenge: {
                description: 'Create .page-layout with display: grid, grid-template-columns: 1fr 3fr, grid-template-areas: "header header" "nav main" "footer footer", and gap: 16px. Then assign: .header { grid-area: header; }, .nav { grid-area: nav; }, .main { grid-area: main; }, .footer { grid-area: footer; }.',
                starterCode: '/* Place grid items with named areas */\n',
                expectedOutput: '.page-layout {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-areas:\n    "header header"\n    "nav main"\n    "footer footer";\n  gap: 16px;\n}\n\n.header { grid-area: header; }\n.nav { grid-area: nav; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }',
                hints: [
                  'grid-template-areas uses quoted strings for each row',
                  'Repeat a name to span multiple columns',
                  'grid-area assigns an item to a named area',
                  'Area names create a visual map of the layout'
                ]
              },
              quiz: [
                {
                  question: 'What does grid-column: 1 / 3 mean?',
                  options: ['Column width 1/3', 'Start at line 1, end at line 3', 'Columns 1 and 3', '1 to 3 pixels wide'],
                  correct: 1
                },
                {
                  question: 'What does grid-column: span 2 do?',
                  options: ['Makes column 2px wide', 'Item spans across 2 columns', 'Creates 2 columns', 'Starts at column 2'],
                  correct: 1
                },
                {
                  question: 'How do you make an item span the full grid width?',
                  options: ['width: 100%', 'grid-column: 1 / -1', 'grid-column: full', 'span: all'],
                  correct: 1
                },
                {
                  question: 'What does a "." (dot) represent in grid-template-areas?',
                  options: ['A named area', 'An empty cell', 'A separator', 'The center'],
                  correct: 1
                }
              ]
            },
            {
              id: 'grid-3',
              title: 'Auto-fit & Auto-fill',
              type: 'challenge',
              theory: `<h2>Auto-fit & Auto-fill</h2>
<p>The <code>auto-fit</code> and <code>auto-fill</code> keywords create responsive grids that automatically adjust the number of columns based on available space — no media queries needed!</p>
<p><strong>auto-fill:</strong></p>
<pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}</code></pre>
<p>Creates as many 250px columns as fit, keeping empty tracks at the end.</p>
<p><strong>auto-fit:</strong></p>
<pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}</code></pre>
<p>Same behavior, but collapses empty tracks so items stretch to fill space.</p>
<p><strong>The difference:</strong></p>
<ul>
<li><code>auto-fill</code> — Keeps empty columns (items don't stretch)</li>
<li><code>auto-fit</code> — Collapses empty columns (items stretch to fill)</li>
</ul>
<p>With 3 items in a wide container:<br>
- auto-fill: 3 items at 250px, empty tracks at the end<br>
- auto-fit: 3 items stretch to fill the entire width</p>
<p><strong>minmax():</strong></p>
<pre><code>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
/* Columns are at least 200px, grow to fill space */

grid-template-columns: minmax(250px, 300px) 1fr;
/* First column 250-300px, second fills rest */</code></pre>
<p>This pattern is the single most useful responsive Grid technique. It replaces complex media query breakpoints with a single line of CSS.</p>`,
              challenge: {
                description: 'Create .auto-grid with display: grid, grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)), and gap: 24px. Create .auto-fill-grid with display: grid, grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)), and gap: 16px.',
                starterCode: '/* Create auto-responsive grids */\n',
                expectedOutput: '.auto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}\n\n.auto-fill-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}',
                hints: [
                  'auto-fit collapses empty tracks (items stretch)',
                  'auto-fill keeps empty tracks (items don\'t stretch)',
                  'minmax(min, max) sets column size range',
                  'This creates responsive grids without media queries'
                ]
              },
              quiz: [
                {
                  question: 'What does repeat(auto-fit, minmax(250px, 1fr)) do?',
                  options: ['Creates 250px fixed columns', 'Auto-creates responsive columns that are at least 250px', 'Fills the grid with 1fr columns', 'Creates exactly 250 columns'],
                  correct: 1
                },
                {
                  question: 'What is the difference between auto-fit and auto-fill?',
                  options: ['No difference', 'auto-fit collapses empty tracks, auto-fill keeps them', 'auto-fill is newer', 'auto-fit only works with minmax'],
                  correct: 1
                },
                {
                  question: 'What does minmax(200px, 1fr) define?',
                  options: ['Exactly 200px', 'At least 200px, grows to fill available space', 'Maximum 200px', 'Between 200px and 1px'],
                  correct: 1
                },
                {
                  question: 'Does this responsive grid pattern need media queries?',
                  options: ['Yes, always', 'No — it automatically adjusts', 'Only for mobile', 'Only for IE support'],
                  correct: 1
                }
              ]
            },
            {
              id: 'grid-4',
              title: 'Grid Alignment',
              type: 'challenge',
              theory: `<h2>Grid Alignment</h2>
<p>Grid provides comprehensive alignment controls for both the grid tracks within the container and items within their cells.</p>
<p><strong>Aligning items within cells:</strong></p>
<pre><code>/* All items */
.container {
  justify-items: center;   /* Horizontal within cell */
  align-items: center;     /* Vertical within cell */
  place-items: center;     /* Both (shorthand) */
}

/* Individual item */
.item {
  justify-self: end;       /* This item only */
  align-self: start;
  place-self: center;
}</code></pre>
<p><strong>Aligning tracks within container:</strong></p>
<pre><code>.container {
  justify-content: center;    /* Horizontal track alignment */
  align-content: space-between; /* Vertical track alignment */
  place-content: center;      /* Both */
}

/* Values: start, end, center, space-between, space-around, space-evenly */</code></pre>
<p><strong>Key distinction:</strong></p>
<ul>
<li><code>justify-items</code> / <code>align-items</code> — Items within their grid cells</li>
<li><code>justify-content</code> / <code>align-content</code> — Tracks within the container</li>
</ul>
<p><strong>Perfect centering with Grid:</strong></p>
<pre><code>.center-everything {
  display: grid;
  place-items: center;
  min-height: 100vh;
}</code></pre>
<p>This is the simplest centering technique in CSS — just two properties to perfectly center content both horizontally and vertically!</p>`,
              challenge: {
                description: 'Create .grid-center with display: grid, place-items: center, and min-height: 100vh. Create .grid-spread with display: grid, grid-template-columns: repeat(3, 1fr), align-items: center, and justify-items: start.',
                starterCode: '/* Align grid items */\n',
                expectedOutput: '.grid-center {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n}\n\n.grid-spread {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  justify-items: start;\n}',
                hints: [
                  'place-items is shorthand for align-items + justify-items',
                  'It centers items within their grid cells',
                  'align-items handles vertical alignment',
                  'justify-items handles horizontal alignment'
                ]
              },
              quiz: [
                {
                  question: 'What does place-items: center do?',
                  options: ['Centers the grid', 'Centers items both vertically and horizontally within cells', 'Centers one item', 'Places items in center column'],
                  correct: 1
                },
                {
                  question: 'What is the difference between justify-items and justify-content in Grid?',
                  options: ['No difference', 'items: within cells, content: tracks within container', 'content is for text only', 'items is deprecated'],
                  correct: 1
                },
                {
                  question: 'How do you center one specific item differently from others?',
                  options: ['Use a class', 'Use place-self on that item', 'It\'s not possible', 'Wrap it in a div'],
                  correct: 1
                },
                {
                  question: 'What is the shortest CSS to center something perfectly?',
                  options: ['margin: auto', 'display: grid; place-items: center;', 'text-align: center; vertical-align: middle;', 'position: absolute; top: 50%; left: 50%;'],
                  correct: 1
                }
              ]
            },
            {
              id: 'grid-5',
              title: 'Grid vs Flexbox: When to Use Each',
              type: 'challenge',
              theory: `<h2>Grid vs Flexbox: When to Use Each</h2>
<p>Grid and Flexbox are complementary tools. Understanding when to use each makes you a more effective developer.</p>
<p><strong>Use Flexbox when:</strong></p>
<ul>
<li>Content flows in one direction (row OR column)</li>
<li>Items should distribute based on content size</li>
<li>You need items to wrap naturally</li>
<li>Building components: navbars, card internals, form rows</li>
</ul>
<p><strong>Use Grid when:</strong></p>
<ul>
<li>You need rows AND columns simultaneously</li>
<li>Layout is determined by the container (not content)</li>
<li>You need precise placement of items</li>
<li>Building page-level layouts, dashboards, galleries</li>
</ul>
<p><strong>They work great together:</strong></p>
<pre><code>/* Grid for overall page layout */
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
}

/* Flexbox for component-level layout */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card {
  display: flex;
  flex-direction: column;
}

/* Grid for card grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}</code></pre>
<p><strong>Quick decision guide:</strong></p>
<ul>
<li>Laying out items in a line? → Flexbox</li>
<li>Laying out items in a grid? → Grid</li>
<li>Content dictates layout? → Flexbox</li>
<li>Container dictates layout? → Grid</li>
<li>Not sure? → Try both, pick what feels simpler</li>
</ul>`,
              challenge: {
                description: 'Create a page layout combining both: .page with display: grid and grid-template-columns: 200px 1fr. Then .page-header with display: flex, justify-content: space-between, align-items: center, grid-column: 1 / -1.',
                starterCode: '/* Combine Grid and Flexbox */\n',
                expectedOutput: '.page {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n}\n\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  grid-column: 1 / -1;\n}',
                hints: [
                  'Grid for page-level layout',
                  'Flexbox for component-level (header)',
                  'grid-column: 1 / -1 spans full width',
                  'A flex container can be a grid item'
                ]
              },
              quiz: [
                {
                  question: 'When is Grid better than Flexbox?',
                  options: ['Always', 'When you need 2D layout (rows and columns)', 'For simple lists', 'For single items'],
                  correct: 1
                },
                {
                  question: 'Can you nest Flexbox inside Grid?',
                  options: ['No', 'Yes — they work great together', 'Only Grid inside Flexbox', 'Only with display: contents'],
                  correct: 1
                },
                {
                  question: 'Which is better for a navigation bar?',
                  options: ['Grid', 'Flexbox', 'Neither', 'Float'],
                  correct: 1
                },
                {
                  question: 'Which is better for a dashboard with precise cell placement?',
                  options: ['Flexbox', 'Grid', 'Tables', 'Position absolute'],
                  correct: 1
                }
              ]
            },
            {
              id: 'grid-6',
              title: 'Advanced Grid Techniques',
              type: 'challenge',
              theory: `<h2>Advanced Grid Techniques</h2>
<p>Let's explore powerful Grid features for complex real-world layouts.</p>
<p><strong>Implicit vs Explicit Grid:</strong></p>
<pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Explicit */
  grid-auto-rows: minmax(150px, auto);   /* Implicit row sizing */
  grid-auto-flow: dense;                  /* Fill gaps */
}</code></pre>
<p><strong>Subgrid (nested grids that inherit parent tracks):</strong></p>
<pre><code>.parent { display: grid; grid-template-columns: repeat(4, 1fr); }
.child { 
  grid-column: span 2; 
  display: grid;
  grid-template-columns: subgrid;  /* Uses parent's column tracks */
}</code></pre>
<p><strong>Dense packing:</strong></p>
<pre><code>.masonry-like {
  grid-auto-flow: dense;  /* Fills gaps with smaller items */
}</code></pre>
<p><strong>Overlapping items:</strong></p>
<pre><code>.item1 { grid-area: 1 / 1 / 3 / 3; }
.item2 { grid-area: 2 / 2 / 4 / 4; z-index: 1; }
/* Items overlap! z-index controls stacking */</code></pre>
<p><strong>Grid for magazine layouts:</strong></p>
<pre><code>.magazine {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 100px;
  gap: 16px;
}

.featured { grid-column: span 4; grid-row: span 3; }
.small { grid-column: span 2; grid-row: span 2; }
.wide { grid-column: span 3; grid-row: span 1; }</code></pre>
<p>Grid enables magazine-style, Pinterest-style, and dashboard layouts that would be extremely difficult with any other technique.</p>`,
              challenge: {
                description: 'Create .masonry with display: grid, grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)), grid-auto-rows: 100px, grid-auto-flow: dense, and gap: 12px. Create .masonry-large with grid-column: span 2 and grid-row: span 2.',
                starterCode: '/* Create advanced grid layout */\n',
                expectedOutput: '.masonry {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-auto-rows: 100px;\n  grid-auto-flow: dense;\n  gap: 12px;\n}\n\n.masonry-large {\n  grid-column: span 2;\n  grid-row: span 2;\n}',
                hints: [
                  'grid-auto-rows sets implicit row height',
                  'grid-auto-flow: dense fills gaps',
                  'span 2 makes item take 2 tracks',
                  'Combining creates masonry-like layouts'
                ]
              },
              quiz: [
                {
                  question: 'What does grid-auto-flow: dense do?',
                  options: ['Makes items smaller', 'Fills gaps by moving items out of order', 'Adds more columns', 'Removes gaps'],
                  correct: 1
                },
                {
                  question: 'What is the implicit grid?',
                  options: ['The invisible grid', 'Rows/columns auto-created for items beyond explicit definition', 'A hidden layout', 'The default grid'],
                  correct: 1
                },
                {
                  question: 'Can grid items overlap?',
                  options: ['No', 'Yes, using overlapping grid-area assignments', 'Only with position: absolute', 'Only with z-index'],
                  correct: 1
                },
                {
                  question: 'What does subgrid do?',
                  options: ['Creates a smaller grid', 'Child uses parent\'s track lines', 'Nests a grid', 'Adds sub-columns'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'responsive-design',
          title: 'Responsive Design',
          lessons: [
            {
              id: 'resp-1',
              title: 'Media Queries',
              type: 'challenge',
              theory: `<h2>Media Queries</h2>
<p>Media queries let you apply different styles based on device characteristics, primarily screen width. They're the foundation of responsive web design.</p>
<p><strong>Basic syntax:</strong></p>
<pre><code>@media (max-width: 768px) {
  .container { padding: 16px; }
  .sidebar { display: none; }
}

@media (min-width: 769px) {
  .container { max-width: 1200px; }
}</code></pre>
<p><strong>Common breakpoints:</strong></p>
<ul>
<li>Mobile: 0 - 767px</li>
<li>Tablet: 768px - 1023px</li>
<li>Desktop: 1024px+</li>
<li>Wide: 1200px+</li>
</ul>
<p><strong>Mobile-first approach (recommended):</strong></p>
<pre><code>/* Base styles = mobile */
.nav { flex-direction: column; }

/* Tablet and up */
@media (min-width: 768px) {
  .nav { flex-direction: row; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container { max-width: 1200px; }
}</code></pre>
<p><strong>Other media features:</strong></p>
<pre><code>@media (prefers-color-scheme: dark) { /* Dark mode */ }
@media (prefers-reduced-motion: reduce) { /* Less animation */ }
@media (hover: hover) { /* Device has hover capability */ }
@media (orientation: landscape) { /* Landscape mode */ }
@media print { /* Print styles */ }</code></pre>
<p><strong>Mobile-first vs Desktop-first:</strong></p>
<ul>
<li>Mobile-first: Base styles for mobile, add complexity with min-width</li>
<li>Desktop-first: Base styles for desktop, simplify with max-width</li>
<li>Mobile-first is preferred — starts simple, adds complexity</li>
</ul>`,
              challenge: {
                description: 'Write mobile-first CSS: base .grid with display: grid and grid-template-columns: 1fr (single column). At min-width: 768px, change to grid-template-columns: repeat(2, 1fr). At min-width: 1024px, change to repeat(3, 1fr).',
                starterCode: '/* Mobile-first responsive grid */\n',
                expectedOutput: '.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n}\n\n@media (min-width: 768px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 1024px) {\n  .grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}',
                hints: [
                  'Start with mobile (single column)',
                  'Use min-width for mobile-first',
                  'Each breakpoint adds more columns',
                  'Base styles apply to all sizes'
                ]
              },
              quiz: [
                {
                  question: 'What is mobile-first design?',
                  options: ['Designing for mobile only', 'Starting with mobile styles, enhancing for larger screens', 'Making sites mobile-only', 'Using mobile frameworks'],
                  correct: 1
                },
                {
                  question: 'Which media query targets tablets and up (mobile-first)?',
                  options: ['@media (max-width: 768px)', '@media (min-width: 768px)', '@media (width: 768px)', '@media tablet'],
                  correct: 1
                },
                {
                  question: 'What does prefers-color-scheme: dark detect?',
                  options: ['Dark images', 'User\'s OS dark mode preference', 'Low brightness', 'Night time'],
                  correct: 1
                },
                {
                  question: 'What does prefers-reduced-motion detect?',
                  options: ['Slow internet', 'User prefers less animation (accessibility)', 'Mobile device', 'Battery saver mode'],
                  correct: 1
                }
              ]
            },
            {
              id: 'resp-2',
              title: 'Responsive Patterns',
              type: 'challenge',
              theory: `<h2>Responsive Patterns</h2>
<p>Common responsive design patterns solve recurring layout challenges across screen sizes.</p>
<p><strong>The Stack Pattern (column on mobile, row on desktop):</strong></p>
<pre><code>.stack-to-row {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 768px) {
  .stack-to-row {
    flex-direction: row;
  }
}</code></pre>
<p><strong>The Sidebar Pattern:</strong></p>
<pre><code>.with-sidebar {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.sidebar { flex: 1 1 250px; }
.main-content { flex: 999 1 60%; }</code></pre>
<p>The main content has a much higher flex-grow so it takes priority. When there isn't room for both, they stack.</p>
<p><strong>The Pancake Stack (header/main/footer):</strong></p>
<pre><code>.pancake {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}</code></pre>
<p><strong>Responsive images/video:</strong></p>
<pre><code>img, video { max-width: 100%; height: auto; }

.video-wrapper {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.video-wrapper iframe {
  width: 100%;
  height: 100%;
}</code></pre>
<p><strong>Responsive text:</strong></p>
<pre><code>h1 { font-size: clamp(2rem, 5vw, 4rem); }
p { font-size: clamp(1rem, 1.5vw, 1.25rem); }</code></pre>`,
              challenge: {
                description: 'Create .stack-row with display: flex, flex-direction: column, and gap: 16px. Add a media query at min-width: 768px changing it to flex-direction: row. Add .stack-row > * with flex: 1 inside the media query.',
                starterCode: '/* Create a responsive stack-to-row pattern */\n',
                expectedOutput: '.stack-row {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n@media (min-width: 768px) {\n  .stack-row {\n    flex-direction: row;\n  }\n  .stack-row > * {\n    flex: 1;\n  }\n}',
                hints: [
                  'Column by default (mobile)',
                  'Row at larger sizes',
                  'flex: 1 makes items equal width in row',
                  'Gap works for both directions'
                ]
              },
              quiz: [
                {
                  question: 'What is the Stack pattern?',
                  options: ['Always stacked', 'Column on mobile, row on desktop', 'Always in a row', 'Overlapping elements'],
                  correct: 1
                },
                {
                  question: 'How do you make responsive images?',
                  options: ['Fixed width', 'max-width: 100%; height: auto;', 'width: 100vw', 'display: none on mobile'],
                  correct: 1
                },
                {
                  question: 'What does the Pancake Stack pattern create?',
                  options: ['Horizontal layout', 'Header/main/footer with main filling available space', 'Nested grids', 'Stacked cards'],
                  correct: 1
                },
                {
                  question: 'How do you maintain video aspect ratio responsively?',
                  options: ['Fixed height', 'aspect-ratio: 16/9 with width: 100%', 'min-height', 'overflow: hidden'],
                  correct: 1
                }
              ]
            },
            {
              id: 'resp-3',
              title: 'Container Queries',
              type: 'challenge',
              theory: `<h2>Container Queries</h2>
<p>Container queries are a modern CSS feature that lets you style elements based on the size of their container, not the viewport. This makes components truly modular and context-aware.</p>
<pre><code>/* Define a container */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

/* Style based on container size */
@container card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}

@container card (max-width: 399px) {
  .card {
    display: flex;
    flex-direction: column;
  }
}</code></pre>
<p><strong>container-type values:</strong></p>
<ul>
<li><code>inline-size</code> — Enables width-based queries</li>
<li><code>size</code> — Enables both width and height queries</li>
<li><code>normal</code> — Default, no containment</li>
</ul>
<p><strong>Why container queries matter:</strong></p>
<ul>
<li>Components adapt to their context, not the viewport</li>
<li>Same component works in sidebar (narrow) and main area (wide)</li>
<li>True component-based design becomes possible</li>
<li>Reduces need for variant classes</li>
</ul>
<p><strong>Container query units:</strong></p>
<pre><code>/* cqw = 1% of container width */
.card-title {
  font-size: clamp(1rem, 3cqw, 1.5rem);
}</code></pre>
<p>Container queries are the future of responsive component design, enabling truly reusable UI components.</p>`,
              challenge: {
                description: 'Create .widget-container with container-type: inline-size. Then write a @container rule: at min-width: 500px, set .widget to display: grid and grid-template-columns: 1fr 2fr.',
                starterCode: '/* Use container queries */\n',
                expectedOutput: '.widget-container {\n  container-type: inline-size;\n}\n\n@container (min-width: 500px) {\n  .widget {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n  }\n}',
                hints: [
                  'First set container-type on the parent',
                  '@container syntax is like @media',
                  'Styles apply based on container size',
                  'component adapts to its context'
                ]
              },
              quiz: [
                {
                  question: 'What do container queries respond to?',
                  options: ['Viewport size', 'The container element\'s size', 'Screen resolution', 'Device type'],
                  correct: 1
                },
                {
                  question: 'What property makes an element a query container?',
                  options: ['display: container', 'container-type: inline-size', 'container: true', 'query-container: on'],
                  correct: 1
                },
                {
                  question: 'Why are container queries better than media queries for components?',
                  options: ['They\'re faster', 'Components adapt to their context, not just viewport', 'Better browser support', 'Simpler syntax'],
                  correct: 1
                },
                {
                  question: 'What does cqw unit represent?',
                  options: ['Container query width', '1% of container width', 'Custom query width', 'Current query width'],
                  correct: 1
                }
              ]
            },
            {
              id: 'resp-4',
              title: 'Mobile Navigation Patterns',
              type: 'challenge',
              theory: `<h2>Mobile Navigation Patterns</h2>
<p>Navigation is one of the trickiest responsive challenges. Here are CSS patterns for common mobile nav solutions.</p>
<p><strong>Hamburger menu (CSS-only toggle):</strong></p>
<pre><code>.nav-toggle { display: none; }  /* Hidden checkbox */
.nav-label { display: none; }   /* Hamburger icon */

@media (max-width: 768px) {
  .nav-label {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
  }
  
  .nav-menu {
    display: none;
    flex-direction: column;
    width: 100%;
  }
  
  .nav-toggle:checked ~ .nav-menu {
    display: flex;
  }
}</code></pre>
<p><strong>Off-canvas navigation:</strong></p>
<pre><code>.sidebar-nav {
  position: fixed;
  top: 0;
  left: -280px;
  width: 280px;
  height: 100vh;
  background: white;
  transition: transform 0.3s ease;
  z-index: 1000;
}

.sidebar-nav.open {
  transform: translateX(280px);
}</code></pre>
<p><strong>Bottom navigation (mobile app style):</strong></p>
<pre><code>@media (max-width: 768px) {
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    background: white;
    padding: 8px 0;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  }
}</code></pre>
<p><strong>Priority+ pattern:</strong> Show most important items, collapse rest into "More" menu as space decreases.</p>`,
              challenge: {
                description: 'Create a .bottom-nav with position: fixed, bottom: 0, left: 0, right: 0, display: flex, justify-content: space-around, align-items: center, padding: 12px 0, background: white, box-shadow: 0 -2px 10px rgba(0,0,0,0.1).',
                starterCode: '/* Create mobile bottom navigation */\n',
                expectedOutput: '.bottom-nav {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 12px 0;\n  background: white;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n}',
                hints: [
                  'Fixed position at bottom of viewport',
                  'left: 0; right: 0 stretches full width',
                  'Flex with space-around distributes items evenly',
                  'Box-shadow creates subtle top edge'
                ]
              },
              quiz: [
                {
                  question: 'What CSS technique can create a hamburger toggle without JavaScript?',
                  options: ['Media queries alone', 'Hidden checkbox + :checked selector', 'Hover effects', 'CSS animations'],
                  correct: 1
                },
                {
                  question: 'What is off-canvas navigation?',
                  options: ['Navigation that disappears', 'Nav hidden off-screen, slides in when activated', 'Canvas-based nav', 'SVG navigation'],
                  correct: 1
                },
                {
                  question: 'Where is bottom navigation typically used?',
                  options: ['Desktop sites', 'Mobile apps and mobile web', 'Print layouts', 'Email templates'],
                  correct: 1
                },
                {
                  question: 'What creates the sliding effect for off-canvas nav?',
                  options: ['margin animation', 'transform: translateX() with transition', 'left animation', 'display toggle'],
                  correct: 1
                }
              ]
            },
            {
              id: 'resp-5',
              title: 'Responsive Best Practices',
              type: 'challenge',
              theory: `<h2>Responsive Best Practices</h2>
<p>Building truly responsive sites goes beyond just adding media queries. Here are professional patterns and principles.</p>
<p><strong>Design tokens for breakpoints:</strong></p>
<pre><code>/* Use consistent, meaningful breakpoints */
:root {
  --bp-sm: 640px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;
}
/* Note: CSS custom properties can't be used directly in media queries */</code></pre>
<p><strong>Fluid spacing:</strong></p>
<pre><code>.section {
  padding: clamp(2rem, 5vw, 5rem) clamp(1rem, 3vw, 3rem);
}

.container {
  width: min(1200px, 100% - 2rem);
  margin: 0 auto;
}</code></pre>
<p><strong>Responsive typography scale:</strong></p>
<pre><code>h1 { font-size: clamp(2rem, 5vw + 1rem, 4rem); }
h2 { font-size: clamp(1.5rem, 3vw + 0.5rem, 2.5rem); }
h3 { font-size: clamp(1.2rem, 2vw + 0.5rem, 1.8rem); }
p { font-size: clamp(1rem, 1vw + 0.5rem, 1.25rem); }</code></pre>
<p><strong>Touch-friendly targets:</strong></p>
<pre><code>button, .tap-target {
  min-height: 44px;
  min-width: 44px;  /* Apple's minimum recommended */
  padding: 12px 24px;
}</code></pre>
<p><strong>Testing checklist:</strong></p>
<ul>
<li>✅ Test on real devices (not just browser resize)</li>
<li>✅ Check landscape AND portrait orientations</li>
<li>✅ Verify touch targets are large enough (44x44px)</li>
<li>✅ Ensure text is readable without zooming</li>
<li>✅ Test with slow connections</li>
<li>✅ Verify images don't overflow or break layout</li>
</ul>`,
              challenge: {
                description: 'Create responsive spacing: .section with padding: clamp(2rem, 5vw, 5rem) clamp(1rem, 3vw, 3rem). Create .responsive-container with width: min(1200px, 100% - 2rem) and margin: 0 auto. Create .touch-target with min-height: 44px and min-width: 44px.',
                starterCode: '/* Responsive best practices */\n',
                expectedOutput: '.section {\n  padding: clamp(2rem, 5vw, 5rem) clamp(1rem, 3vw, 3rem);\n}\n\n.responsive-container {\n  width: min(1200px, 100% - 2rem);\n  margin: 0 auto;\n}\n\n.touch-target {\n  min-height: 44px;\n  min-width: 44px;\n}',
                hints: [
                  'clamp() creates fluid spacing',
                  'min() caps max width while staying responsive',
                  '44px is the minimum recommended touch target',
                  'These patterns work without media queries'
                ]
              },
              quiz: [
                {
                  question: 'What is the minimum recommended touch target size?',
                  options: ['24x24px', '32x32px', '44x44px', '64x64px'],
                  correct: 2
                },
                {
                  question: 'What does width: min(1200px, 100% - 2rem) do?',
                  options: ['Fixed 1200px', 'Responsive with 1200px max and 1rem padding on each side', 'Always 100%', 'Error'],
                  correct: 1
                },
                {
                  question: 'Why use clamp() for spacing instead of fixed values?',
                  options: ['It\'s shorter', 'Creates fluid spacing that scales between min and max', 'Required for mobile', 'Better performance'],
                  correct: 1
                },
                {
                  question: 'Should you test responsive designs only by resizing the browser?',
                  options: ['Yes, that\'s sufficient', 'No — also test on real devices', 'Only browser tools needed', 'Only mobile testing needed'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'transitions-animations',
          title: 'Transitions & Animations',
          lessons: [
            {
              id: 'anim-1',
              title: 'CSS Transitions',
              type: 'challenge',
              theory: `<h2>CSS Transitions</h2>
<p>Transitions create smooth changes between property values when triggered by a state change (hover, focus, class toggle, etc.).</p>
<p><strong>Transition syntax:</strong></p>
<pre><code>/* transition: property duration timing-function delay */
.button {
  background: #007bff;
  color: white;
  transition: background 0.3s ease, transform 0.2s ease;
}

.button:hover {
  background: #0056b3;
  transform: scale(1.05);
}</code></pre>
<p><strong>Timing functions:</strong></p>
<ul>
<li><code>ease</code> — Starts slow, speeds up, slows at end (default)</li>
<li><code>linear</code> — Constant speed</li>
<li><code>ease-in</code> — Starts slow, ends fast</li>
<li><code>ease-out</code> — Starts fast, ends slow</li>
<li><code>ease-in-out</code> — Slow start and end</li>
<li><code>cubic-bezier(x1,y1,x2,y2)</code> — Custom curve</li>
</ul>
<p><strong>Transition all (use carefully):</strong></p>
<pre><code>.card { transition: all 0.3s ease; }
/* Convenient but less performant than specifying properties */</code></pre>
<p><strong>Best practices:</strong></p>
<ul>
<li>Only animate <code>transform</code> and <code>opacity</code> for best performance (GPU-accelerated)</li>
<li>Keep transitions short (0.15s - 0.4s for UI, longer for dramatic effects)</li>
<li>Use <code>ease-out</code> for entering elements, <code>ease-in</code> for leaving</li>
<li>Respect <code>prefers-reduced-motion</code></li>
</ul>
<pre><code>@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; }
}</code></pre>`,
              challenge: {
                description: 'Style .btn with background: #3b82f6, color: white, padding: 12px 24px, border: none, border-radius: 8px, cursor: pointer, and transition: background 0.2s ease, transform 0.2s ease. On hover, set background: #2563eb and transform: translateY(-2px).',
                starterCode: '/* Add smooth transitions */\n',
                expectedOutput: '.btn {\n  background: #3b82f6;\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n\n.btn:hover {\n  background: #2563eb;\n  transform: translateY(-2px);\n}',
                hints: [
                  'transition goes on the base state, not hover',
                  'List multiple properties with commas',
                  'translateY(-2px) creates subtle lift',
                  'Keep duration short for buttons (0.2s)'
                ]
              },
              quiz: [
                {
                  question: 'Where should the transition property be declared?',
                  options: ['On the :hover state', 'On the base state of the element', 'In a separate rule', 'In the HTML'],
                  correct: 1
                },
                {
                  question: 'Which properties are most performant to animate?',
                  options: ['width and height', 'transform and opacity', 'margin and padding', 'background and color'],
                  correct: 1
                },
                {
                  question: 'What timing function starts slow and ends fast?',
                  options: ['ease-out', 'ease-in', 'linear', 'ease'],
                  correct: 1
                },
                {
                  question: 'Why respect prefers-reduced-motion?',
                  options: ['Save battery', 'Some users have motion sensitivity/vestibular disorders', 'Required by law', 'Faster pages'],
                  correct: 1
                }
              ]
            },
            {
              id: 'anim-2',
              title: 'Keyframe Animations',
              type: 'challenge',
              theory: `<h2>Keyframe Animations</h2>
<p>While transitions handle simple state changes, <code>@keyframes</code> animations allow complex, multi-step sequences that can run independently of user interaction.</p>
<p><strong>Defining keyframes:</strong></p>
<pre><code>@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}</code></pre>
<p><strong>Applying animations:</strong></p>
<pre><code>.element {
  animation: fadeIn 0.5s ease forwards;
}

/* Full syntax */
.element {
  animation-name: slideUp;
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-delay: 0.2s;
  animation-iteration-count: 1;      /* or: infinite */
  animation-direction: normal;        /* or: reverse, alternate */
  animation-fill-mode: forwards;      /* Keeps final state */
}</code></pre>
<p><strong>animation-fill-mode:</strong></p>
<ul>
<li><code>none</code> — Returns to original state after animation</li>
<li><code>forwards</code> — Keeps the final keyframe state</li>
<li><code>backwards</code> — Applies first keyframe before animation starts</li>
<li><code>both</code> — Applies both forwards and backwards</li>
</ul>
<p><strong>Shorthand:</strong></p>
<pre><code>/* name duration timing delay iterations direction fill */
animation: bounce 1s ease-in-out 0s infinite alternate both;</code></pre>`,
              challenge: {
                description: 'Define a @keyframes fadeInUp animation: at 0% set opacity: 0 and transform: translateY(20px), at 100% set opacity: 1 and transform: translateY(0). Apply it to .animate-in with animation: fadeInUp 0.6s ease-out forwards.',
                starterCode: '/* Create a keyframe animation */\n',
                expectedOutput: '@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.animate-in {\n  animation: fadeInUp 0.6s ease-out forwards;\n}',
                hints: [
                  '@keyframes defines the animation sequence',
                  '0% is the start, 100% is the end',
                  'animation shorthand applies it to an element',
                  'forwards keeps the final state'
                ]
              },
              quiz: [
                {
                  question: 'What does @keyframes define?',
                  options: ['A transition', 'The stages/steps of an animation', 'A media query', 'A variable'],
                  correct: 1
                },
                {
                  question: 'What does animation-fill-mode: forwards do?',
                  options: ['Plays forward', 'Element keeps its final animation state', 'Moves element forward', 'Plays only once'],
                  correct: 1
                },
                {
                  question: 'How do you make an animation loop forever?',
                  options: ['animation-loop: true', 'animation-iteration-count: infinite', 'animation-repeat: always', '@keyframes with loop keyword'],
                  correct: 1
                },
                {
                  question: 'What does animation-direction: alternate do?',
                  options: ['Plays randomly', 'Alternates between forward and reverse', 'Plays on alternate elements', 'Skips frames'],
                  correct: 1
                }
              ]
            },
            {
              id: 'anim-3',
              title: 'Practical Animation Examples',
              type: 'challenge',
              theory: `<h2>Practical Animation Examples</h2>
<p>Let's look at animations you'll use in real projects — loading spinners, skeleton screens, and entrance animations.</p>
<p><strong>Loading spinner:</strong></p>
<pre><code>@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}</code></pre>
<p><strong>Skeleton loading animation:</strong></p>
<pre><code>@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: 4px;
}</code></pre>
<p><strong>Staggered entrance animations:</strong></p>
<pre><code>.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }

/* Or with custom properties */
.card { animation-delay: calc(var(--index) * 0.1s); }</code></pre>
<p><strong>Attention-seeking pulse:</strong></p>
<pre><code>@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(0, 123, 255, 0); }
}

.notification-dot {
  animation: pulse 2s infinite;
}</code></pre>`,
              challenge: {
                description: 'Create a @keyframes spin that goes from transform: rotate(0deg) to rotate(360deg). Create .spinner with width: 40px, height: 40px, border: 3px solid #eee, border-top-color: #3b82f6, border-radius: 50%, animation: spin 0.8s linear infinite.',
                starterCode: '/* Create a loading spinner */\n',
                expectedOutput: '@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #eee;\n  border-top-color: #3b82f6;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}',
                hints: [
                  'Spin goes from 0deg to 360deg',
                  'Use linear for constant rotation speed',
                  'Border trick: gray border + colored top',
                  'border-radius: 50% makes it circular'
                ]
              },
              quiz: [
                {
                  question: 'What timing function should a loading spinner use?',
                  options: ['ease', 'linear (constant speed)', 'ease-in-out', 'bounce'],
                  correct: 1
                },
                {
                  question: 'How do you create staggered animations for multiple items?',
                  options: ['Different keyframes', 'Different animation-delay on each item', 'Different durations', 'JavaScript only'],
                  correct: 1
                },
                {
                  question: 'What creates the spinner circle shape?',
                  options: ['display: circle', 'border-radius: 50%', 'shape: circle', 'clip-path: circle()'],
                  correct: 1
                },
                {
                  question: 'What is a skeleton screen?',
                  options: ['A wireframe', 'Placeholder shapes that show while content loads', 'An error state', 'A framework'],
                  correct: 1
                }
              ]
            },
            {
              id: 'anim-4',
              title: 'Animation Performance',
              type: 'challenge',
              theory: `<h2>Animation Performance</h2>
<p>Smooth 60fps animations require understanding what the browser can efficiently animate. Poor animation choices cause jank and battery drain.</p>
<p><strong>The rendering pipeline:</strong></p>
<ol>
<li><strong>Style</strong> — Calculate computed styles</li>
<li><strong>Layout</strong> — Calculate geometry and positions</li>
<li><strong>Paint</strong> — Fill in pixels</li>
<li><strong>Composite</strong> — Layer composition (GPU-accelerated)</li>
</ol>
<p><strong>Best properties to animate (composite only):</strong></p>
<ul>
<li><code>transform</code> — translate, rotate, scale (GPU)</li>
<li><code>opacity</code> — Transparency changes (GPU)</li>
</ul>
<p><strong>Avoid animating (trigger layout/paint):</strong></p>
<ul>
<li>width, height, margin, padding, top, left</li>
<li>border, font-size, color, background</li>
</ul>
<pre><code>/* BAD — triggers layout on every frame */
.bad { transition: left 0.3s; }
.bad:hover { left: 100px; }

/* GOOD — composite only */
.good { transition: transform 0.3s; }
.good:hover { transform: translateX(100px); }</code></pre>
<p><strong>will-change hint:</strong></p>
<pre><code>.will-animate {
  will-change: transform, opacity;
  /* Tells browser to prepare for animation */
}

/* Remove after animation */
.done { will-change: auto; }</code></pre>
<p><strong>Reduce motion for accessibility:</strong></p>
<pre><code>@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}</code></pre>`,
              challenge: {
                description: 'Create a .slide-in with transform: translateX(-100%), opacity: 0, and transition: transform 0.4s ease-out, opacity 0.4s ease-out. Create .slide-in.active with transform: translateX(0) and opacity: 1. Add @media (prefers-reduced-motion: reduce) that sets .slide-in transition to none.',
                starterCode: '/* Performance-optimized animations */\n',
                expectedOutput: '.slide-in {\n  transform: translateX(-100%);\n  opacity: 0;\n  transition: transform 0.4s ease-out, opacity 0.4s ease-out;\n}\n\n.slide-in.active {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .slide-in {\n    transition: none;\n  }\n}',
                hints: [
                  'Only animate transform and opacity for 60fps',
                  'Use translateX instead of left for movement',
                  'Respect prefers-reduced-motion',
                  'Class toggle triggers the transition'
                ]
              },
              quiz: [
                {
                  question: 'Which properties are GPU-accelerated and best for animation?',
                  options: ['width and height', 'margin and padding', 'transform and opacity', 'color and background'],
                  correct: 2
                },
                {
                  question: 'Why avoid animating width or left?',
                  options: ['They don\'t animate', 'They trigger expensive layout recalculation', 'They\'re deprecated', 'Browser doesn\'t support it'],
                  correct: 1
                },
                {
                  question: 'What does will-change tell the browser?',
                  options: ['What will change in the future (prepare GPU layers)', 'What changed in the past', 'What to change now', 'Nothing useful'],
                  correct: 0
                },
                {
                  question: 'How do you use translateX instead of left for movement?',
                  options: ['They\'re the same', 'transform: translateX(100px) instead of left: 100px', 'left: translateX(100px)', 'position: translate'],
                  correct: 1
                }
              ]
            },
            {
              id: 'anim-5',
              title: 'Scroll-Based Animations',
              type: 'challenge',
              theory: `<h2>Scroll-Based Animations</h2>
<p>Modern CSS can create animations that respond to scrolling, without JavaScript libraries.</p>
<p><strong>Scroll-driven animations (modern CSS):</strong></p>
<pre><code>@keyframes reveal {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.scroll-reveal {
  animation: reveal linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}</code></pre>
<p><strong>Scroll progress indicator:</strong></p>
<pre><code>@keyframes progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #007bff;
  transform-origin: left;
  animation: progress linear;
  animation-timeline: scroll();
}</code></pre>
<p><strong>Parallax with CSS:</strong></p>
<pre><code>.parallax-container {
  perspective: 1px;
  overflow-y: auto;
  height: 100vh;
}

.parallax-bg {
  transform: translateZ(-1px) scale(2);
  /* Moves slower than foreground */
}</code></pre>
<p><strong>Intersection Observer approach (with CSS classes):</strong></p>
<pre><code>.fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
/* JS adds .visible when element enters viewport */</code></pre>
<p>Scroll-driven animations are the newest CSS feature — they replace heavy JavaScript scroll libraries with native, performant CSS.</p>`,
              challenge: {
                description: 'Create .fade-up with opacity: 0, transform: translateY(30px), and transition: opacity 0.6s ease-out, transform 0.6s ease-out. Create .fade-up.visible with opacity: 1 and transform: translateY(0). Create .progress-bar with position: fixed, top: 0, left: 0, height: 4px, background: #3b82f6, and transform-origin: left.',
                starterCode: '/* Create scroll-triggered animations */\n',
                expectedOutput: '.fade-up {\n  opacity: 0;\n  transform: translateY(30px);\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.fade-up.visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.progress-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3b82f6;\n  transform-origin: left;\n}',
                hints: [
                  'Start hidden and offset, reveal on .visible',
                  'Transition handles the smooth animation',
                  'transform-origin: left makes scaleX grow from left',
                  'JavaScript adds .visible class on scroll'
                ]
              },
              quiz: [
                {
                  question: 'What does animation-timeline: scroll() do?',
                  options: ['Adds a timeline', 'Links animation progress to scroll position', 'Creates a scrollbar', 'Scrolls automatically'],
                  correct: 1
                },
                {
                  question: 'How does the fade-up pattern trigger?',
                  options: ['Automatically on load', 'When a class (like .visible) is added', 'On hover', 'After a delay'],
                  correct: 1
                },
                {
                  question: 'What does transform-origin: left do for a progress bar?',
                  options: ['Moves it left', 'Makes scaleX grow from the left edge', 'Aligns text left', 'Fixes it to the left'],
                  correct: 1
                },
                {
                  question: 'What CSS property creates a parallax scrolling effect?',
                  options: ['scroll-behavior', 'perspective and translateZ', 'overflow: parallax', 'scroll-snap'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'transforms',
          title: 'Transforms',
          lessons: [
            {
              id: 'transform-1',
              title: '2D Transforms',
              type: 'challenge',
              theory: `<h2>2D Transforms</h2>
<p>CSS transforms change an element's shape, size, and position without affecting the layout flow. They're GPU-accelerated and perfect for animations.</p>
<p><strong>Transform functions:</strong></p>
<pre><code>/* Move */
transform: translateX(50px);
transform: translateY(-20px);
transform: translate(50px, -20px);

/* Scale */
transform: scale(1.5);          /* 150% size */
transform: scaleX(2);           /* Stretch horizontally */
transform: scale(0.5);          /* Shrink to 50% */

/* Rotate */
transform: rotate(45deg);       /* Clockwise */
transform: rotate(-90deg);      /* Counter-clockwise */

/* Skew */
transform: skewX(10deg);
transform: skew(10deg, 5deg);</code></pre>
<p><strong>Combining transforms:</strong></p>
<pre><code>transform: translate(50px, 0) rotate(45deg) scale(1.2);
/* ORDER MATTERS! Applied right to left */</code></pre>
<p><strong>transform-origin:</strong></p>
<pre><code>.rotate-corner {
  transform-origin: top left;  /* Rotates around top-left */
  transform: rotate(45deg);
}

/* Default is center center */
transform-origin: center;
transform-origin: 50% 50%;
transform-origin: top right;</code></pre>
<p><strong>Practical uses:</strong></p>
<ul>
<li>Hover effects (scale, lift with translateY)</li>
<li>Centering with translate(-50%, -50%)</li>
<li>Icon animations (rotate arrows, spinning loaders)</li>
<li>Card flip effects</li>
<li>Tooltips positioning</li>
</ul>`,
              challenge: {
                description: 'Style .card-hover with transition: transform 0.3s ease. On .card-hover:hover apply transform: translateY(-8px) scale(1.02). Style .rotate-icon with transition: transform 0.3s. On .rotate-icon:hover apply transform: rotate(180deg).',
                starterCode: '/* Use 2D transforms */\n',
                expectedOutput: '.card-hover {\n  transition: transform 0.3s ease;\n}\n\n.card-hover:hover {\n  transform: translateY(-8px) scale(1.02);\n}\n\n.rotate-icon {\n  transition: transform 0.3s;\n}\n\n.rotate-icon:hover {\n  transform: rotate(180deg);\n}',
                hints: [
                  'Multiple transforms go in one transform property',
                  'translateY with negative value moves up',
                  'scale(1.02) is a subtle 2% enlargement',
                  'Always add transition for smooth effect'
                ]
              },
              quiz: [
                {
                  question: 'Does transform affect surrounding elements\' positions?',
                  options: ['Yes', 'No — it only visually changes the element', 'Only translate does', 'Only scale does'],
                  correct: 1
                },
                {
                  question: 'What does transform: scale(0.5) do?',
                  options: ['Moves 0.5px', 'Shrinks element to 50% size', 'Rotates 0.5deg', 'Sets opacity to 0.5'],
                  correct: 1
                },
                {
                  question: 'What does transform-origin change?',
                  options: ['Where the element is placed', 'The point around which transforms are applied', 'The starting animation state', 'The original position'],
                  correct: 1
                },
                {
                  question: 'Does the order of multiple transform functions matter?',
                  options: ['No', 'Yes — they\'re applied right to left', 'Only for rotate', 'Only for 3D'],
                  correct: 1
                }
              ]
            },
            {
              id: 'transform-2',
              title: '3D Transforms',
              type: 'challenge',
              theory: `<h2>3D Transforms</h2>
<p>CSS can create 3D effects by transforming elements in three-dimensional space. This enables card flips, 3D carousels, and depth effects.</p>
<p><strong>3D transform functions:</strong></p>
<pre><code>transform: translateZ(50px);      /* Move toward viewer */
transform: rotateX(45deg);        /* Rotate around X axis */
transform: rotateY(180deg);       /* Rotate around Y axis (card flip) */
transform: rotateZ(45deg);        /* Same as rotate() */
transform: perspective(500px);    /* Inline perspective */</code></pre>
<p><strong>perspective (required for 3D):</strong></p>
<pre><code>.parent {
  perspective: 1000px;  /* Lower = more dramatic 3D */
  perspective-origin: center;
}

.child {
  transform: rotateY(30deg);
}</code></pre>
<p><strong>Card flip effect:</strong></p>
<pre><code>.flip-card {
  perspective: 1000px;
  width: 300px;
  height: 200px;
}

.flip-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
}

.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}

.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-back {
  transform: rotateY(180deg);
}</code></pre>
<p><strong>Key 3D properties:</strong></p>
<ul>
<li><code>perspective</code> — Depth of 3D space (on parent)</li>
<li><code>transform-style: preserve-3d</code> — Children maintain 3D positioning</li>
<li><code>backface-visibility: hidden</code> — Hides element when facing away</li>
</ul>`,
              challenge: {
                description: 'Create .flip-container with perspective: 1000px. Create .flip-card with transition: transform 0.6s and transform-style: preserve-3d. Create .flip-container:hover .flip-card with transform: rotateY(180deg). Create .flip-back with transform: rotateY(180deg) and backface-visibility: hidden.',
                starterCode: '/* Create a 3D card flip */\n',
                expectedOutput: '.flip-container {\n  perspective: 1000px;\n}\n\n.flip-card {\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n}\n\n.flip-container:hover .flip-card {\n  transform: rotateY(180deg);\n}\n\n.flip-back {\n  transform: rotateY(180deg);\n  backface-visibility: hidden;\n}',
                hints: [
                  'perspective on parent creates 3D space',
                  'preserve-3d keeps children in 3D',
                  'rotateY flips around vertical axis',
                  'backface-visibility hides the back'
                ]
              },
              quiz: [
                {
                  question: 'What does perspective do?',
                  options: ['Adds shadow', 'Creates the illusion of depth/distance', 'Changes opacity', 'Adds parallax'],
                  correct: 1
                },
                {
                  question: 'What hides an element when it\'s facing away?',
                  options: ['display: none', 'visibility: hidden', 'backface-visibility: hidden', 'opacity: 0'],
                  correct: 2
                },
                {
                  question: 'What does transform-style: preserve-3d do?',
                  options: ['Adds 3D shadow', 'Children maintain their 3D position', 'Enables perspective', 'Adds depth'],
                  correct: 1
                },
                {
                  question: 'What axis does rotateY rotate around?',
                  options: ['Horizontal (left-right)', 'Vertical (up-down)', 'Depth (toward viewer)', 'Diagonal'],
                  correct: 1
                }
              ]
            },
            {
              id: 'transform-3',
              title: 'Creative Transform Effects',
              type: 'challenge',
              theory: `<h2>Creative Transform Effects</h2>
<p>Transforms combined with transitions and pseudo-elements enable creative visual effects without images or JavaScript.</p>
<p><strong>Tooltip with transform:</strong></p>
<pre><code>.tooltip {
  position: relative;
}

.tooltip::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) scale(0.8);
  opacity: 0;
  transition: transform 0.2s, opacity 0.2s;
  background: #333;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
}

.tooltip:hover::after {
  transform: translateX(-50%) scale(1);
  opacity: 1;
}</code></pre>
<p><strong>Image zoom on hover:</strong></p>
<pre><code>.image-container {
  overflow: hidden;
  border-radius: 8px;
}

.image-container img {
  transition: transform 0.4s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}</code></pre>
<p><strong>Skewed section backgrounds:</strong></p>
<pre><code>.skewed-section {
  position: relative;
  padding: 80px 0;
}

.skewed-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #007bff;
  transform: skewY(-3deg);
  z-index: -1;
}</code></pre>
<p><strong>Button press effect:</strong></p>
<pre><code>.press-button:active {
  transform: scale(0.95);
  transition: transform 0.1s;
}</code></pre>`,
              challenge: {
                description: 'Create .zoom-container with overflow: hidden and border-radius: 12px. Create .zoom-container img with transition: transform 0.4s ease and display: block. Create .zoom-container:hover img with transform: scale(1.15).',
                starterCode: '/* Create image zoom hover effect */\n',
                expectedOutput: '.zoom-container {\n  overflow: hidden;\n  border-radius: 12px;\n}\n\n.zoom-container img {\n  transition: transform 0.4s ease;\n  display: block;\n}\n\n.zoom-container:hover img {\n  transform: scale(1.15);\n}',
                hints: [
                  'overflow: hidden clips the zoomed image',
                  'Transition on the image, not the container',
                  'scale(1.15) = 15% zoom',
                  'display: block removes image bottom gap'
                ]
              },
              quiz: [
                {
                  question: 'Why add overflow: hidden to an image zoom container?',
                  options: ['Better performance', 'Clips the scaled image to container bounds', 'Required for transform', 'Hides the image'],
                  correct: 1
                },
                {
                  question: 'What does pointer-events: none do on a tooltip?',
                  options: ['Disables animations', 'Prevents the tooltip from capturing mouse events', 'Hides the tooltip', 'Removes the cursor'],
                  correct: 1
                },
                {
                  question: 'How do you create a skewed background without skewing content?',
                  options: ['Skew the whole section', 'Use ::before pseudo-element with skew', 'Use an image', 'SVG background'],
                  correct: 1
                },
                {
                  question: 'What does :active trigger?',
                  options: ['On page load', 'While the element is being clicked/pressed', 'When element gains focus', 'On hover'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'variables-custom',
          title: 'Variables & Custom Properties',
          lessons: [
            {
              id: 'var-1',
              title: 'Theming with CSS Variables',
              type: 'challenge',
              theory: `<h2>Theming with CSS Variables</h2>
<p>CSS Custom Properties make theming (like dark mode) elegant and maintainable. By changing a few variables, the entire UI updates.</p>
<p><strong>Light/Dark theme system:</strong></p>
<pre><code>:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #1a1a2e;
  --text-secondary: #666666;
  --accent: #007bff;
  --border: #e0e0e0;
  --shadow: rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  --bg-primary: #1a1a2e;
  --bg-secondary: #16213e;
  --text-primary: #e0e0e0;
  --text-secondary: #a0a0a0;
  --accent: #4fc3f7;
  --border: #333;
  --shadow: rgba(0, 0, 0, 0.3);
}

/* Usage */
body {
  background: var(--bg-primary);
  color: var(--text-primary);
}

.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  box-shadow: 0 2px 8px var(--shadow);
}

a { color: var(--accent); }</code></pre>
<p><strong>System preference detection:</strong></p>
<pre><code>@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1a2e;
    --text-primary: #e0e0e0;
    /* ... dark values */
  }
}</code></pre>
<p><strong>Component-scoped variables:</strong></p>
<pre><code>.btn {
  --btn-bg: var(--accent);
  --btn-color: white;
  --btn-padding: 10px 20px;
  
  background: var(--btn-bg);
  color: var(--btn-color);
  padding: var(--btn-padding);
}

.btn-outline {
  --btn-bg: transparent;
  --btn-color: var(--accent);
}</code></pre>`,
              challenge: {
                description: 'Define :root with --bg: #ffffff, --text: #333333, --accent: #3b82f6. Define [data-theme="dark"] with --bg: #1e293b, --text: #e2e8f0, --accent: #60a5fa. Apply them: body with background: var(--bg) and color: var(--text).',
                starterCode: '/* Create a theme system */\n',
                expectedOutput: ':root {\n  --bg: #ffffff;\n  --text: #333333;\n  --accent: #3b82f6;\n}\n\n[data-theme="dark"] {\n  --bg: #1e293b;\n  --text: #e2e8f0;\n  --accent: #60a5fa;\n}\n\nbody {\n  background: var(--bg);\n  color: var(--text);\n}',
                hints: [
                  'Define defaults in :root',
                  'Override in [data-theme="dark"]',
                  'Use var(--name) to apply',
                  'Adding data-theme="dark" to html switches theme'
                ]
              },
              quiz: [
                {
                  question: 'How do you switch themes with CSS variables?',
                  options: ['Reload the page', 'Change variable values on a parent element', 'Use JavaScript to rewrite all styles', 'Different stylesheets'],
                  correct: 1
                },
                {
                  question: 'What does [data-theme="dark"] select?',
                  options: ['All dark elements', 'Elements with data-theme attribute set to "dark"', 'The dark mode media query', 'Elements with class dark'],
                  correct: 1
                },
                {
                  question: 'Can CSS variables be changed with JavaScript?',
                  options: ['No', 'Yes — element.style.setProperty("--var", "value")', 'Only in React', 'Only at page load'],
                  correct: 1
                },
                {
                  question: 'What does prefers-color-scheme: dark detect?',
                  options: ['Dark images on page', 'User\'s OS/browser dark mode setting', 'Low screen brightness', 'Dark backgrounds'],
                  correct: 1
                }
              ]
            },
            {
              id: 'var-2',
              title: 'Design Tokens & Spacing Systems',
              type: 'challenge',
              theory: `<h2>Design Tokens & Spacing Systems</h2>
<p>Design tokens are the atomic values of your design system — colors, spacing, typography, shadows — stored as CSS variables for consistency.</p>
<p><strong>Complete token system:</strong></p>
<pre><code>:root {
  /* Spacing scale (multiples of 4) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  
  /* Colors */
  --gray-100: #f7fafc;
  --gray-200: #edf2f7;
  --gray-500: #718096;
  --gray-800: #2d3748;
  --gray-900: #1a202c;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  
  /* Borders */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
}</code></pre>
<p><strong>Using tokens consistently:</strong></p>
<pre><code>.card {
  padding: var(--space-6);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--space-4);
}

h1 { font-size: var(--text-3xl); }
h2 { font-size: var(--text-2xl); }</code></pre>
<p>Design tokens create a single source of truth. Change a token value, and every component using it updates automatically.</p>`,
              challenge: {
                description: 'Define tokens in :root: --space-sm: 8px, --space-md: 16px, --space-lg: 24px, --radius: 8px, --shadow: 0 2px 8px rgba(0,0,0,0.1). Use them in .card with padding: var(--space-lg), border-radius: var(--radius), box-shadow: var(--shadow), and margin-bottom: var(--space-md).',
                starterCode: '/* Create a design token system */\n',
                expectedOutput: ':root {\n  --space-sm: 8px;\n  --space-md: 16px;\n  --space-lg: 24px;\n  --radius: 8px;\n  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.card {\n  padding: var(--space-lg);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n  margin-bottom: var(--space-md);\n}',
                hints: [
                  'Tokens are named for their purpose/scale',
                  'Spacing uses a consistent scale (multiples of 4 or 8)',
                  'var() references work anywhere in CSS',
                  'Change a token = change everywhere it\'s used'
                ]
              },
              quiz: [
                {
                  question: 'What are design tokens?',
                  options: ['JavaScript variables', 'Atomic design values stored as CSS variables', 'HTML data attributes', 'Build tool constants'],
                  correct: 1
                },
                {
                  question: 'What is the benefit of a spacing scale?',
                  options: ['Smaller files', 'Visual consistency and rhythm throughout the UI', 'Required by browsers', 'Better SEO'],
                  correct: 1
                },
                {
                  question: 'What happens when you change --radius from 8px to 12px?',
                  options: ['Nothing', 'Every element using var(--radius) updates', 'Only the root element changes', 'Need to refresh'],
                  correct: 1
                },
                {
                  question: 'Why use multiples of 4 for spacing?',
                  options: ['Browser requirement', 'Creates consistent visual rhythm and alignment', 'Faster rendering', 'Better compression'],
                  correct: 1
                }
              ]
            },
            {
              id: 'var-3',
              title: 'Dynamic Variables & Calculations',
              type: 'challenge',
              theory: `<h2>Dynamic Variables & Calculations</h2>
<p>CSS variables combined with calc() and other functions enable dynamic, computed styles that adapt to context.</p>
<p><strong>Dynamic sizing:</strong></p>
<pre><code>.grid-item {
  --columns: 3;
  width: calc(100% / var(--columns) - var(--gap));
}

@media (max-width: 768px) {
  .grid-item { --columns: 2; }
}

@media (max-width: 480px) {
  .grid-item { --columns: 1; }
}</code></pre>
<p><strong>Component variants with variables:</strong></p>
<pre><code>.button {
  --btn-size: 1rem;
  font-size: var(--btn-size);
  padding: calc(var(--btn-size) * 0.75) calc(var(--btn-size) * 1.5);
  border-radius: calc(var(--btn-size) * 0.5);
}

.button-sm { --btn-size: 0.875rem; }
.button-lg { --btn-size: 1.25rem; }</code></pre>
<p><strong>Animation with variables:</strong></p>
<pre><code>.stagger {
  --delay: 0;
  animation: fadeIn 0.5s ease calc(var(--delay) * 100ms) forwards;
}

/* Set in HTML: style="--delay: 1", style="--delay: 2", etc. */</code></pre>
<p><strong>Color manipulation:</strong></p>
<pre><code>:root {
  --hue: 210;
  --primary: hsl(var(--hue), 80%, 50%);
  --primary-light: hsl(var(--hue), 80%, 70%);
  --primary-dark: hsl(var(--hue), 80%, 30%);
}

/* Change --hue to instantly change entire color scheme! */</code></pre>
<p>By separating the hue value into a variable, you can generate an entire color palette from a single number.</p>`,
              challenge: {
                description: 'Create a color system: :root with --hue: 220, --primary: hsl(var(--hue), 80%, 50%), --primary-light: hsl(var(--hue), 80%, 70%), --primary-dark: hsl(var(--hue), 80%, 35%). Apply .btn-primary with background: var(--primary) and .btn-primary:hover with background: var(--primary-dark).',
                starterCode: '/* Create dynamic color variables */\n',
                expectedOutput: ':root {\n  --hue: 220;\n  --primary: hsl(var(--hue), 80%, 50%);\n  --primary-light: hsl(var(--hue), 80%, 70%);\n  --primary-dark: hsl(var(--hue), 80%, 35%);\n}\n\n.btn-primary {\n  background: var(--primary);\n}\n\n.btn-primary:hover {\n  background: var(--primary-dark);\n}',
                hints: [
                  'HSL with variable hue enables easy color changes',
                  'Lightness variations create light/dark variants',
                  'Changing --hue changes all derived colors',
                  'This is the basis of theme color generators'
                ]
              },
              quiz: [
                {
                  question: 'Can CSS variables be used inside calc()?',
                  options: ['No', 'Yes', 'Only with px values', 'Only for width'],
                  correct: 1
                },
                {
                  question: 'How do you change a CSS variable from HTML inline styles?',
                  options: ['You can\'t', 'style="--variable: value"', 'data-variable="value"', 'class="variable-value"'],
                  correct: 1
                },
                {
                  question: 'What advantage does HSL with variable hue provide?',
                  options: ['Better colors', 'Change entire color scheme by changing one number', 'Smaller file size', 'Browser compatibility'],
                  correct: 1
                },
                {
                  question: 'How do you create button size variants with variables?',
                  options: ['Different classes with all properties', 'Override one --size variable, derive all proportions from it', 'JavaScript', 'Different stylesheets'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'landing-project',
          title: 'Landing Page PROJECT',
          lessons: [
            {
              id: 'proj-lp-1',
              title: 'Landing Page - Hero Section',
              type: 'project',
              theory: `<h2>Landing Page - Hero Section</h2>
<p>Let's build a complete, responsive landing page that showcases all CSS skills. We'll start with an impactful hero section.</p>
<p><strong>Hero section pattern:</strong></p>
<pre><code>.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: clamp(2rem, 5vw, 5rem);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.hero-cta {
  display: inline-block;
  padding: 16px 32px;
  background: white;
  color: #667eea;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.hero-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}</code></pre>`,
              challenge: {
                description: 'Create .hero with min-height: 100vh, display: flex, align-items: center, justify-content: center, text-align: center, background: linear-gradient(135deg, #667eea, #764ba2), color: white, padding: 2rem. Create .hero-title with font-size: clamp(2.5rem, 5vw, 4.5rem) and font-weight: 800.',
                starterCode: '/* Build the hero section */\n',
                expectedOutput: '.hero {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  padding: 2rem;\n}\n\n.hero-title {\n  font-size: clamp(2.5rem, 5vw, 4.5rem);\n  font-weight: 800;\n}',
                hints: [
                  'Flexbox centers content vertically and horizontally',
                  'min-height: 100vh fills the viewport',
                  'Gradient creates a vibrant background',
                  'clamp() makes typography fluid'
                ]
              },
              quiz: [
                {
                  question: 'What makes a hero section fill the viewport?',
                  options: ['height: 100%', 'min-height: 100vh', 'display: fullscreen', 'overflow: cover'],
                  correct: 1
                },
                {
                  question: 'How do you vertically center content in a hero?',
                  options: ['vertical-align: middle', 'display: flex; align-items: center;', 'margin: auto', 'top: 50%'],
                  correct: 1
                },
                {
                  question: 'Why use clamp() for hero title font size?',
                  options: ['Required', 'Creates fluid responsive sizing without media queries', 'Better font rendering', 'Smaller file'],
                  correct: 1
                }
              ]
            },
            {
              id: 'proj-lp-2',
              title: 'Landing Page - Features Grid',
              type: 'project',
              theory: `<h2>Landing Page - Features Grid</h2>
<p>The features section showcases product benefits in a responsive grid of cards.</p>
<pre><code>.features {
  padding: clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 3rem);
  max-width: 1200px;
  margin: 0 auto;
}

.features-title {
  text-align: center;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  margin-bottom: clamp(2rem, 4vw, 4rem);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  padding: 32px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.feature-desc {
  color: #666;
  line-height: 1.6;
}</code></pre>`,
              challenge: {
                description: 'Create .features-grid with display: grid, grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)), and gap: 24px. Create .feature-card with padding: 32px, border-radius: 12px, background: white, box-shadow: 0 2px 12px rgba(0,0,0,0.08), transition: transform 0.2s. Add hover: transform: translateY(-4px).',
                starterCode: '/* Build the features grid */\n',
                expectedOutput: '.features-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}\n\n.feature-card {\n  padding: 32px;\n  border-radius: 12px;\n  background: white;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s;\n}\n\n.feature-card:hover {\n  transform: translateY(-4px);\n}',
                hints: [
                  'auto-fit with minmax creates responsive grid',
                  'Cards hover up for interactive feel',
                  'Subtle shadows add depth',
                  'Transition smooths the hover movement'
                ]
              },
              quiz: [
                {
                  question: 'Why use auto-fit with minmax for the features grid?',
                  options: ['It\'s simpler', 'Creates responsive columns without media queries', 'Required for grid', 'Better browser support'],
                  correct: 1
                },
                {
                  question: 'What creates the card lift effect?',
                  options: ['margin-top change', 'transform: translateY(-4px) on hover', 'top: -4px', 'padding change'],
                  correct: 1
                },
                {
                  question: 'Why add transition to the base state, not hover?',
                  options: ['It doesn\'t matter', 'So the animation works both on hover in AND out', 'Required syntax', 'Performance'],
                  correct: 1
                }
              ]
            },
            {
              id: 'proj-lp-3',
              title: 'Landing Page - Testimonials & CTA',
              type: 'project',
              theory: `<h2>Landing Page - Testimonials & CTA</h2>
<p>Social proof and a strong call-to-action section drive conversions.</p>
<pre><code>.testimonials {
  background: var(--bg-secondary, #f8f9fa);
  padding: clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 3rem);
}

.testimonial-card {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
}

.testimonial-text {
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.7;
  color: #444;
  margin-bottom: 24px;
}

.testimonial-author {
  font-weight: 600;
  color: #222;
}

/* CTA Section */
.cta-section {
  text-align: center;
  padding: clamp(4rem, 10vw, 8rem) 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-button {
  display: inline-block;
  padding: 18px 40px;
  background: white;
  color: #667eea;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.cta-button:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}</code></pre>`,
              challenge: {
                description: 'Create .cta-section with text-align: center, padding: clamp(4rem, 10vw, 8rem) 2rem, background: linear-gradient(135deg, #667eea, #764ba2), color: white. Create .cta-button with display: inline-block, padding: 16px 36px, background: white, color: #667eea, border-radius: 50px, font-weight: 600, text-decoration: none, transition: transform 0.2s.',
                starterCode: '/* Build CTA section */\n',
                expectedOutput: '.cta-section {\n  text-align: center;\n  padding: clamp(4rem, 10vw, 8rem) 2rem;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n}\n\n.cta-button {\n  display: inline-block;\n  padding: 16px 36px;\n  background: white;\n  color: #667eea;\n  border-radius: 50px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: transform 0.2s;\n}',
                hints: [
                  'CTA repeats hero gradient for brand consistency',
                  'Pill-shaped button with border-radius: 50px',
                  'Inverted colors (white button on colored bg)',
                  'Fluid padding with clamp()'
                ]
              },
              quiz: [
                {
                  question: 'Why repeat the hero gradient in the CTA section?',
                  options: ['Looks random', 'Visual consistency and brand reinforcement', 'Required for accessibility', 'Saves bandwidth'],
                  correct: 1
                },
                {
                  question: 'What makes a button pill-shaped?',
                  options: ['width: pill', 'A large border-radius (like 50px)', 'border-style: pill', 'shape: pill'],
                  correct: 1
                },
                {
                  question: 'What is a CTA in web design?',
                  options: ['Creative Text Animation', 'Call To Action — encouraging user to do something', 'CSS Transform Animation', 'Content Toggle Area'],
                  correct: 1
                }
              ]
            },
            {
              id: 'proj-lp-4',
              title: 'Landing Page - Navigation & Footer',
              type: 'project',
              theory: `<h2>Landing Page - Navigation & Footer</h2>
<p>Let's complete the landing page with a sticky navigation and a comprehensive footer.</p>
<pre><code>.navbar {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px clamp(1rem, 3vw, 3rem);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  z-index: 100;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover { color: #667eea; }

/* Footer */
.footer {
  background: #1a1a2e;
  color: #a0a0a0;
  padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 3rem);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-title {
  color: white;
  font-weight: 600;
  margin-bottom: 16px;
}

.footer-bottom {
  border-top: 1px solid #333;
  margin-top: 40px;
  padding-top: 24px;
  text-align: center;
}</code></pre>`,
              challenge: {
                description: 'Create .navbar with position: sticky, top: 0, display: flex, justify-content: space-between, align-items: center, padding: 16px 24px, background: rgba(255,255,255,0.95), backdrop-filter: blur(10px), z-index: 100. Create .footer with background: #1a1a2e, color: #a0a0a0, padding: 48px 24px.',
                starterCode: '/* Build navigation and footer */\n',
                expectedOutput: '.navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(10px);\n  z-index: 100;\n}\n\n.footer {\n  background: #1a1a2e;\n  color: #a0a0a0;\n  padding: 48px 24px;\n}',
                hints: [
                  'Sticky nav stays visible while scrolling',
                  'backdrop-filter creates glass effect',
                  'rgba background with blur = modern glass nav',
                  'z-index ensures nav stays above content'
                ]
              },
              quiz: [
                {
                  question: 'What creates the glass-morphism navbar effect?',
                  options: ['opacity: 0.5', 'Semi-transparent background + backdrop-filter: blur()', 'filter: blur()', 'glassmorphism: true'],
                  correct: 1
                },
                {
                  question: 'Why use position: sticky instead of fixed for nav?',
                  options: ['It\'s the same', 'Sticky stays in flow until scroll point, then becomes fixed', 'Fixed is deprecated', 'Sticky is faster'],
                  correct: 1
                },
                {
                  question: 'Why use dark backgrounds for footers?',
                  options: ['Convention only', 'Creates visual separation and signals end of page', 'Required', 'Better for SEO'],
                  correct: 1
                }
              ]
            },
            {
              id: 'proj-lp-5',
              title: 'Landing Page - Responsive & Polish',
              type: 'project',
              theory: `<h2>Landing Page - Responsive & Polish</h2>
<p>Let's add responsive breakpoints and final polish to make our landing page perfect on all devices.</p>
<pre><code>/* Mobile adjustments */
@media (max-width: 768px) {
  .navbar {
    flex-wrap: wrap;
  }
  
  .nav-links {
    gap: 16px;
    font-size: 0.9rem;
  }
  
  .hero {
    min-height: 80vh;
    padding: 2rem 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

/* Smooth scrolling */
html { scroll-behavior: smooth; }

/* Selection color */
::selection {
  background: #667eea;
  color: white;
}

/* Focus styles */
:focus-visible {
  outline: 2px solid #667eea;
  outline-offset: 3px;
}

/* Scroll padding for sticky nav */
html {
  scroll-padding-top: 80px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  html { scroll-behavior: auto; }
}</code></pre>
<p><strong>Final checklist:</strong></p>
<ul>
<li>✅ Fluid typography with clamp()</li>
<li>✅ Responsive grid that wraps naturally</li>
<li>✅ Mobile navigation adjustments</li>
<li>✅ Smooth scrolling with scroll-padding</li>
<li>✅ Focus visible styles for accessibility</li>
<li>✅ Reduced motion support</li>
<li>✅ Consistent hover/transition effects</li>
</ul>`,
              challenge: {
                description: 'Add final polish: html with scroll-behavior: smooth and scroll-padding-top: 80px. Add ::selection with background: #667eea and color: white. Add @media (prefers-reduced-motion: reduce) with * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }.',
                starterCode: '/* Add final polish and accessibility */\n',
                expectedOutput: 'html {\n  scroll-behavior: smooth;\n  scroll-padding-top: 80px;\n}\n\n::selection {\n  background: #667eea;\n  color: white;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  * {\n    transition-duration: 0.01ms !important;\n    animation-duration: 0.01ms !important;\n  }\n}',
                hints: [
                  'scroll-behavior: smooth enables smooth anchor scrolling',
                  'scroll-padding-top accounts for sticky nav height',
                  '::selection customizes text highlight color',
                  'prefers-reduced-motion respects accessibility settings'
                ]
              },
              quiz: [
                {
                  question: 'What does scroll-padding-top fix?',
                  options: ['Page speed', 'Content hidden behind sticky nav when anchor-scrolling', 'Scrollbar styling', 'Mobile overflow'],
                  correct: 1
                },
                {
                  question: 'What does scroll-behavior: smooth affect?',
                  options: ['All scrolling', 'Anchor link navigation (# links)', 'Mouse wheel', 'Touch scrolling'],
                  correct: 1
                },
                {
                  question: 'Why support prefers-reduced-motion?',
                  options: ['Better performance', 'Users with motion sensitivity need reduced/no animation', 'Required by law', 'Search engines prefer it'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'advanced-selectors',
          title: 'Advanced Selectors',
          lessons: [
            {
              id: 'adv-sel-1',
              title: ':is(), :where(), and :has()',
              type: 'challenge',
              theory: `<h2>:is(), :where(), and :has()</h2>
<p>Modern CSS introduces powerful pseudo-class functions that simplify complex selectors.</p>
<p><strong>:is() — Matches any of the listed selectors:</strong></p>
<pre><code>/* Instead of repeating: */
article h1, article h2, article h3 { color: navy; }

/* Use :is(): */
article :is(h1, h2, h3) { color: navy; }

/* Complex grouping */
:is(header, main, footer) :is(h1, h2) { font-family: serif; }</code></pre>
<p>:is() takes the highest specificity of its arguments.</p>
<p><strong>:where() — Same as :is() but zero specificity:</strong></p>
<pre><code>:where(article, section, aside) p { line-height: 1.7; }
/* Easy to override because :where() adds 0 specificity */</code></pre>
<p><strong>:has() — The "parent selector" (game-changer!):</strong></p>
<pre><code>/* Style a card that contains an image */
.card:has(img) { padding-top: 0; }

/* Style a form group with an invalid input */
.form-group:has(:invalid) { border-color: red; }

/* Change layout when sidebar exists */
.page:has(.sidebar) { grid-template-columns: 250px 1fr; }
.page:not(:has(.sidebar)) { grid-template-columns: 1fr; }

/* Style label when checkbox is checked */
label:has(input:checked) { font-weight: bold; }</code></pre>
<p>:has() is revolutionary — it's the first true "parent selector" in CSS. You can style a parent based on what it contains!</p>`,
              challenge: {
                description: 'Style article :is(h1, h2, h3) with color: #1a1a2e and font-family: Georgia, serif. Style .card:has(img) with padding-top: 0. Style .card:has(.badge) with border: 2px solid #3b82f6.',
                starterCode: '/* Use modern selector functions */\n',
                expectedOutput: 'article :is(h1, h2, h3) {\n  color: #1a1a2e;\n  font-family: Georgia, serif;\n}\n\n.card:has(img) {\n  padding-top: 0;\n}\n\n.card:has(.badge) {\n  border: 2px solid #3b82f6;\n}',
                hints: [
                  ':is() groups multiple selectors cleanly',
                  ':has() styles parent based on children',
                  ':has(img) matches elements containing an img',
                  'These reduce repetition significantly'
                ]
              },
              quiz: [
                {
                  question: 'What does :is(h1, h2, h3) match?',
                  options: ['Only h1', 'Any of h1, h2, or h3', 'All three together', 'None'],
                  correct: 1
                },
                {
                  question: 'What is the specificity of :where()?',
                  options: ['Same as :is()', 'Zero specificity', 'Highest specificity', 'Depends on contents'],
                  correct: 1
                },
                {
                  question: 'What does .card:has(img) select?',
                  options: ['Images inside cards', 'Cards that contain an image', 'Cards next to images', 'All cards'],
                  correct: 1
                },
                {
                  question: 'Why is :has() called a "parent selector"?',
                  options: ['It selects parents', 'It styles elements based on what they contain (children)', 'It goes up the DOM', 'It\'s the root'],
                  correct: 1
                }
              ]
            },
            {
              id: 'adv-sel-2',
              title: 'Complex :nth-child Patterns',
              type: 'challenge',
              theory: `<h2>Complex :nth-child Patterns</h2>
<p>The :nth-child() selector is more powerful than most developers realize. Its formula <code>An+B</code> enables complex selection patterns.</p>
<p><strong>The An+B formula:</strong></p>
<ul>
<li><code>n</code> counts from 0: (0, 1, 2, 3, ...)</li>
<li><code>2n</code> = even items (0, 2, 4, 6, ...)</li>
<li><code>2n+1</code> = odd items (1, 3, 5, 7, ...)</li>
<li><code>3n</code> = every 3rd (3, 6, 9, ...)</li>
<li><code>3n+1</code> = 1st of every group of 3 (1, 4, 7, ...)</li>
</ul>
<p><strong>Useful patterns:</strong></p>
<pre><code>/* First 3 items */
li:nth-child(-n+3) { font-weight: bold; }

/* Items 4 and after */
li:nth-child(n+4) { opacity: 0.8; }

/* Items 3 through 7 */
li:nth-child(n+3):nth-child(-n+7) { background: yellow; }

/* Last 3 items */
li:nth-last-child(-n+3) { color: red; }</code></pre>
<p><strong>:nth-child() with selector list (modern):</strong></p>
<pre><code>/* Every odd paragraph (filtering) */
:nth-child(odd of p) { background: #f5f5f5; }

/* Every 3rd article that has .featured class */
:nth-child(3n of .featured) { border: 2px solid gold; }</code></pre>
<p><strong>Related selectors:</strong></p>
<ul>
<li><code>:nth-last-child()</code> — Counts from the end</li>
<li><code>:nth-of-type()</code> — Counts only elements of same type</li>
<li><code>:nth-last-of-type()</code> — Same type, from end</li>
<li><code>:only-child</code> — Only child of parent</li>
<li><code>:only-of-type</code> — Only element of that type</li>
</ul>`,
              challenge: {
                description: 'Style li:nth-child(odd) with background: #f8f9fa. Style .card:nth-child(3n) with grid-column: span 2. Style li:nth-child(-n+3) with font-weight: bold (first 3 items).',
                starterCode: '/* Use advanced nth-child patterns */\n',
                expectedOutput: 'li:nth-child(odd) {\n  background: #f8f9fa;\n}\n\n.card:nth-child(3n) {\n  grid-column: span 2;\n}\n\nli:nth-child(-n+3) {\n  font-weight: bold;\n}',
                hints: [
                  'odd selects 1st, 3rd, 5th... items',
                  '3n selects every 3rd (3, 6, 9...)',
                  '-n+3 selects first 3 items',
                  'Combine for powerful selections'
                ]
              },
              quiz: [
                {
                  question: 'What does :nth-child(-n+5) select?',
                  options: ['5th item only', 'First 5 items', 'Every 5th item', 'Items after 5th'],
                  correct: 1
                },
                {
                  question: 'What does :nth-child(3n+1) select?',
                  options: ['Every 3rd', '1st, 4th, 7th, 10th... (first of every group of 3)', 'Only the 4th', 'Items 3 and 1'],
                  correct: 1
                },
                {
                  question: 'How do you select the last 3 items?',
                  options: [':nth-child(-3)', ':nth-last-child(-n+3)', ':last-child(3)', ':nth-child(last-3)'],
                  correct: 1
                },
                {
                  question: 'What is :nth-of-type() vs :nth-child()?',
                  options: ['Same thing', ':nth-of-type counts only elements of the same tag type', ':nth-child is newer', ':nth-of-type is faster'],
                  correct: 1
                }
              ]
            },
            {
              id: 'adv-sel-3',
              title: 'Selector Strategies & Architecture',
              type: 'challenge',
              theory: `<h2>Selector Strategies & Architecture</h2>
<p>As projects grow, selector strategy becomes critical for maintainability. Let's look at professional CSS architecture approaches.</p>
<p><strong>BEM (Block Element Modifier):</strong></p>
<pre><code>/* Block */
.card { }

/* Element (part of block) */
.card__title { }
.card__image { }
.card__body { }

/* Modifier (variation) */
.card--featured { }
.card--compact { }
.card__title--large { }</code></pre>
<p><strong>Utility-first (like Tailwind):</strong></p>
<pre><code>.flex { display: flex; }
.items-center { align-items: center; }
.gap-4 { gap: 16px; }
.p-6 { padding: 24px; }
.rounded-lg { border-radius: 12px; }
.shadow-md { box-shadow: 0 4px 6px rgba(0,0,0,0.1); }</code></pre>
<p><strong>Specificity management tips:</strong></p>
<ul>
<li>Keep specificity low and flat (prefer classes)</li>
<li>Avoid IDs for styling</li>
<li>Avoid !important (except for utilities)</li>
<li>Use :where() for base styles that should be easily overridden</li>
<li>Layer your CSS with @layer</li>
</ul>
<p><strong>CSS @layer (cascade layers):</strong></p>
<pre><code>@layer base, components, utilities;

@layer base {
  * { box-sizing: border-box; }
  body { font-family: sans-serif; }
}

@layer components {
  .card { padding: 24px; }
  .btn { padding: 12px 24px; }
}

@layer utilities {
  .hidden { display: none; }
  .text-center { text-align: center; }
}</code></pre>
<p>Layers control cascade order regardless of specificity or source order. Later layers override earlier ones.</p>`,
              challenge: {
                description: 'Write BEM-style CSS: .card with padding: 24px and border-radius: 12px. .card__title with font-size: 1.25rem and font-weight: 600. .card__body with color: #666. .card--featured with border: 2px solid #3b82f6.',
                starterCode: '/* Use BEM naming convention */\n',
                expectedOutput: '.card {\n  padding: 24px;\n  border-radius: 12px;\n}\n\n.card__title {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n\n.card__body {\n  color: #666;\n}\n\n.card--featured {\n  border: 2px solid #3b82f6;\n}',
                hints: [
                  'BEM: block, __element, --modifier',
                  'Double underscore for elements (parts)',
                  'Double dash for modifiers (variants)',
                  'All selectors stay flat (single class)'
                ]
              },
              quiz: [
                {
                  question: 'In BEM, what does __ (double underscore) indicate?',
                  options: ['A modifier', 'An element (part of a block)', 'A state', 'A child component'],
                  correct: 1
                },
                {
                  question: 'What does @layer control?',
                  options: ['Z-index', 'Cascade ordering of CSS rules', 'Visual layers', 'DOM depth'],
                  correct: 1
                },
                {
                  question: 'Why avoid styling with IDs?',
                  options: ['IDs don\'t work', 'High specificity makes overriding difficult', 'IDs are slow', 'Browser compatibility'],
                  correct: 1
                },
                {
                  question: 'What is the benefit of flat specificity?',
                  options: ['Faster rendering', 'Predictable cascade — easy to override and maintain', 'Required by BEM', 'Better animations'],
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

export default cssCourse;