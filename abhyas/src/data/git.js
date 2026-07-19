const course = {
  id: 'git',
  title: 'Learn Git',
  icon: '🔀',
  description: 'Master Git version control from basic commands to advanced collaboration workflows. Track changes, branch, merge, and work with teams effectively.',
  totalLessons: 35,
  sections: [
    {
      id: 'complete-git',
      title: 'Complete Git',
      description: 'Everything you need to know about Git version control, from initialization to team workflows',
      totalLessons: 35,
      totalChallenges: 35,
      totalQuizQuestions: 140,
      projects: 2,
      chapters: [
        {
          id: 'introduction',
          title: 'Introduction',
          lessons: [
            {
              id: 'what_is_git',
              title: 'What is Git?',
              type: 'challenge',
              theory: `<h2>What is Git?</h2><p><strong>Git</strong> is a distributed version control system created by Linus Torvalds in 2005 (the same person who created Linux). It tracks changes to files over time, allowing you to revert, compare, and collaborate.</p><h3>Why Version Control?</h3><ul><li><strong>History:</strong> See every change ever made and who made it</li><li><strong>Undo:</strong> Revert to any previous state of your code</li><li><strong>Collaboration:</strong> Multiple people work on same codebase without conflicts</li><li><strong>Branching:</strong> Work on features independently then merge</li><li><strong>Backup:</strong> Code exists on multiple machines</li></ul><h3>Distributed vs Centralized</h3><p>Git is <em>distributed</em> — every developer has a full copy of the repository history. Unlike centralized systems (SVN), you can work offline and have no single point of failure.</p><h3>Key Concepts</h3><ul><li><strong>Repository (repo):</strong> A project tracked by Git</li><li><strong>Commit:</strong> A snapshot of your files at a point in time</li><li><strong>Branch:</strong> An independent line of development</li><li><strong>Remote:</strong> A version of your repo on a server (GitHub, GitLab)</li></ul><h3>Git vs GitHub</h3><p>Git is the tool (runs locally). GitHub/GitLab/Bitbucket are hosting services for Git repositories. You can use Git without GitHub, but not GitHub without Git.</p>`,
              challenge: {
                description: 'Write the command to check if Git is installed and display its version.',
                starterCode: '# Check Git version\n',
                expectedOutput: 'git --version',
                hints: ['The command starts with git', 'Use --version flag', 'git --version']
              },
              quiz: [
                {
                  question: 'Who created Git?',
                  options: ['Bill Gates', 'Linus Torvalds', 'Mark Zuckerberg', 'Guido van Rossum'],
                  correct: 1
                },
                {
                  question: 'Git is what type of version control?',
                  options: ['Centralized', 'Distributed', 'Linear', 'Cloud-only'],
                  correct: 1
                },
                {
                  question: 'What is a commit?',
                  options: ['A file upload', 'A snapshot of files at a point in time', 'A branch', 'A merge'],
                  correct: 1
                },
                {
                  question: 'Git vs GitHub?',
                  options: ['Same thing', 'Git is local tool, GitHub hosts repos', 'GitHub is newer Git', 'Git requires GitHub'],
                  correct: 1
                }
              ]
            },
            {
              id: 'installing_configuring',
              title: 'Installing & Configuring',
              type: 'challenge',
              theory: `<h2>Installing & Configuring Git</h2><h3>Installation</h3><ul><li><strong>Windows:</strong> Download from git-scm.com (includes Git Bash)</li><li><strong>Mac:</strong> <code>brew install git</code> or Xcode Command Line Tools</li><li><strong>Linux:</strong> <code>sudo apt install git</code> (Ubuntu) or <code>sudo yum install git</code></li></ul><h3>First-Time Configuration</h3><pre><code>git config --global user.name "Your Name"
git config --global user.email "you@email.com"</code></pre><p>These identify you in every commit you make.</p><h3>Useful Config Options</h3><pre><code>git config --global init.defaultBranch main
git config --global core.editor "code --wait"
git config --global color.ui auto</code></pre><h3>Viewing Config</h3><pre><code>git config --list           # All settings
git config user.name        # Specific setting</code></pre><h3>Config Levels</h3><ul><li><code>--system</code> — All users on machine</li><li><code>--global</code> — Your user account (most common)</li><li><code>--local</code> — Current repository only</li></ul>`,
              challenge: {
                description: 'Write the command to set your Git username globally to "John Doe".',
                starterCode: '# Set global username\n',
                expectedOutput: 'git config --global user.name "John Doe"',
                hints: ['git config to set configuration', '--global for all repositories', 'user.name is the setting name']
              },
              quiz: [
                {
                  question: 'Why configure user.name and user.email?',
                  options: ['Login credentials', 'Identifies you in commits', 'Required for installation', 'Sets up GitHub account'],
                  correct: 1
                },
                {
                  question: '--global config applies to?',
                  options: ['One repository', 'All repos for your user', 'All users on machine', 'Remote repos only'],
                  correct: 1
                },
                {
                  question: 'How to see all Git settings?',
                  options: ['git settings', 'git config --list', 'git show config', 'git info'],
                  correct: 1
                },
                {
                  question: 'Which config level takes highest priority?',
                  options: ['system', 'global', 'local', 'remote'],
                  correct: 2
                }
              ]
            },
            {
              id: 'git_init',
              title: 'Initializing a Repository',
              type: 'challenge',
              theory: `<h2>Initializing a Repository</h2><h3>git init</h3><pre><code>mkdir my-project
cd my-project
git init</code></pre><p>This creates a <code>.git</code> folder inside your project — that's where Git stores all its tracking data. Your project folder is now a Git repository!</p><h3>What's in .git?</h3><ul><li><code>.git/objects/</code> — All file snapshots and commits</li><li><code>.git/refs/</code> — Branch and tag pointers</li><li><code>.git/HEAD</code> — Points to current branch</li><li><code>.git/config</code> — Repository-level settings</li></ul><h3>Cloning Instead</h3><p>To get an existing repository:</p><pre><code>git clone https://github.com/user/repo.git
git clone https://github.com/user/repo.git my-folder</code></pre><p>Clone creates a copy including full history.</p><h3>Checking Status</h3><pre><code>git status</code></pre><p>Shows: current branch, staged files, unstaged changes, untracked files. Use it constantly!</p>`,
              challenge: {
                description: 'Write the command to initialize a new Git repository in the current directory.',
                starterCode: '# Initialize new repository\n',
                expectedOutput: 'git init',
                hints: ['The command is git init', 'Run it in your project folder', 'git init']
              },
              quiz: [
                {
                  question: 'What does git init create?',
                  options: ['A new file', 'A .git directory', 'A GitHub repo', 'A branch'],
                  correct: 1
                },
                {
                  question: 'What does git clone do?',
                  options: ['Creates empty repo', 'Copies existing repo with full history', 'Copies files only', 'Creates a branch'],
                  correct: 1
                },
                {
                  question: 'git status shows?',
                  options: ['Commit history', 'Current state: staged, unstaged, untracked', 'Remote info', 'Config settings'],
                  correct: 1
                },
                {
                  question: 'Where is Git data stored?',
                  options: ['In each file', 'In .git directory', 'On GitHub only', 'In system files'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'basic-commands',
          title: 'Basic Commands',
          lessons: [
            {
              id: 'git_add',
              title: 'git add (Staging)',
              type: 'challenge',
              theory: `<h2>git add (Staging)</h2><p><code>git add</code> moves changes from your working directory to the <strong>staging area</strong> (also called "index"). Only staged changes get included in the next commit.</p><h3>The Three Areas</h3><ol><li><strong>Working Directory:</strong> Your actual files on disk</li><li><strong>Staging Area:</strong> Changes ready to be committed</li><li><strong>Repository:</strong> Committed history (.git)</li></ol><h3>Commands</h3><pre><code>git add file.txt          # Stage one file
git add file1.txt file2.txt  # Stage multiple
git add .                  # Stage ALL changes
git add *.js               # Stage all .js files
git add src/               # Stage entire directory</code></pre><h3>Unstaging</h3><pre><code>git reset HEAD file.txt    # Unstage a file
git restore --staged file.txt  # Same (newer Git)</code></pre><h3>Why a Staging Area?</h3><p>It lets you selectively commit. You might have 5 changed files but only want to commit 2 of them together as a logical unit. Stage those 2, commit, then stage the others separately.</p>`,
              challenge: {
                description: 'Write the command to stage all changes in the current directory.',
                starterCode: '# Stage all changes\n',
                expectedOutput: 'git add .',
                hints: ['git add stages files', 'The dot . means current directory', 'git add .']
              },
              quiz: [
                {
                  question: 'What does the staging area hold?',
                  options: ['All files', 'Changes ready to be committed', 'Committed history', 'Remote changes'],
                  correct: 1
                },
                {
                  question: 'git add . does what?',
                  options: ['Adds one file', 'Stages all changes in current directory', 'Creates a commit', 'Pushes to remote'],
                  correct: 1
                },
                {
                  question: 'Why use staging instead of committing directly?',
                  options: ['Required by Git', 'Allows selective, logical commits', 'Faster', 'Prevents errors'],
                  correct: 1
                },
                {
                  question: 'How to unstage a file?',
                  options: ['git remove', 'git restore --staged file', 'git delete staged', 'git undo add'],
                  correct: 1
                }
              ]
            },
            {
              id: 'git_commit',
              title: 'git commit',
              type: 'challenge',
              theory: `<h2>git commit</h2><p><code>git commit</code> saves staged changes as a permanent snapshot in the repository history. Each commit has a unique SHA-1 hash identifier.</p><h3>Basic Commit</h3><pre><code>git commit -m "Add login feature"</code></pre><h3>Multi-line Message</h3><pre><code>git commit -m "Add user authentication" -m "Implements JWT tokens for API auth.
Includes login, logout, and token refresh."</code></pre><h3>Commit Without Staging (Skip add)</h3><pre><code>git commit -am "Fix typo in README"
# -a stages all TRACKED file changes (not new files)</code></pre><h3>What's in a Commit?</h3><ul><li>Snapshot of all staged files</li><li>Author name and email</li><li>Timestamp</li><li>Commit message</li><li>Parent commit reference (history chain)</li><li>Unique SHA-1 hash (e.g., a1b2c3d)</li></ul><h3>Good Commit Messages</h3><ul><li>Start with imperative verb: "Add", "Fix", "Update", "Remove"</li><li>Keep subject under 50 characters</li><li>Explain WHY, not just WHAT</li><li>Reference issue numbers if applicable</li></ul>`,
              challenge: {
                description: 'Write a commit command with the message "Initial commit".',
                starterCode: '# Create initial commit\n',
                expectedOutput: 'git commit -m "Initial commit"',
                hints: ['git commit creates a snapshot', '-m flag for inline message', 'Message in quotes after -m']
              },
              quiz: [
                {
                  question: 'What does -m flag do in git commit?',
                  options: ['Merge', 'Specify commit message inline', 'Move files', 'Main branch'],
                  correct: 1
                },
                {
                  question: 'git commit -am does what?',
                  options: ['Stages and commits all tracked changes', 'Adds new files', 'Amends last commit', 'Auto-merges'],
                  correct: 0
                },
                {
                  question: 'What identifies a commit uniquely?',
                  options: ['Commit message', 'SHA-1 hash', 'Author name', 'Timestamp'],
                  correct: 1
                },
                {
                  question: 'Good commit message starts with?',
                  options: ['Past tense verb', 'Imperative verb (Add, Fix)', 'File name', 'Date'],
                  correct: 1
                }
              ]
            },
            {
              id: 'git_log',
              title: 'git log (Viewing History)',
              type: 'challenge',
              theory: `<h2>git log (Viewing History)</h2><p><code>git log</code> shows the commit history — who changed what and when.</p><h3>Basic Log</h3><pre><code>git log</code></pre><p>Shows full details: hash, author, date, message.</p><h3>Compact Formats</h3><pre><code>git log --oneline              # One line per commit
git log --oneline -5           # Last 5 commits
git log --graph                # Visual branch graph
git log --graph --oneline --all  # Full picture</code></pre><h3>Filtering</h3><pre><code>git log --author="Alice"       # By author
git log --since="2024-01-01"   # By date
git log --grep="fix"           # By message content
git log -- path/to/file        # Changes to specific file</code></pre><h3>Detailed View</h3><pre><code>git log -p                     # Show actual changes (diff)
git log --stat                 # Show files changed per commit
git show abc123                # Details of specific commit</code></pre>`,
              challenge: {
                description: 'Write the command to view commit history in compact one-line format.',
                starterCode: '# View compact history\n',
                expectedOutput: 'git log --oneline',
                hints: ['git log shows history', '--oneline for compact view', 'git log --oneline']
              },
              quiz: [
                {
                  question: 'git log --oneline shows?',
                  options: ['Full details', 'Short hash and message per line', 'Only hashes', 'Only messages'],
                  correct: 1
                },
                {
                  question: 'How to see changes in each commit?',
                  options: ['git log --changes', 'git log -p', 'git log --full', 'git diff log'],
                  correct: 1
                },
                {
                  question: 'git log --graph shows?',
                  options: ['A chart', 'Visual representation of branches', 'Performance stats', 'File tree'],
                  correct: 1
                },
                {
                  question: 'How to filter log by author?',
                  options: ['git log -author', 'git log --author="Name"', 'git log --by="Name"', 'git log Name'],
                  correct: 1
                }
              ]
            },
            {
              id: 'git_diff',
              title: 'git diff',
              type: 'challenge',
              theory: `<h2>git diff</h2><p><code>git diff</code> shows the exact changes between different states of your files.</p><h3>Working vs Staging</h3><pre><code>git diff                # Unstaged changes
git diff --staged       # Staged changes (ready to commit)
git diff --cached       # Same as --staged</code></pre><h3>Between Commits</h3><pre><code>git diff abc123 def456   # Between two commits
git diff HEAD~3 HEAD     # Last 3 commits of changes
git diff main feature    # Between two branches</code></pre><h3>Reading the Output</h3><pre><code>--- a/file.txt          # Old version
+++ b/file.txt          # New version
@@ -1,3 +1,4 @@        # Line numbers
 unchanged line
-removed line            # Red (deleted)
+added line              # Green (added)
+another new line</code></pre><h3>Specific Files</h3><pre><code>git diff -- file.txt         # Only changes to file.txt
git diff --stat              # Summary (files changed, +/- counts)
git diff --name-only         # Only file names that changed</code></pre>`,
              challenge: {
                description: 'Write the command to see staged changes (changes ready to be committed).',
                starterCode: '# View staged changes\n',
                expectedOutput: 'git diff --staged',
                hints: ['git diff shows changes', '--staged for staging area', 'git diff --staged']
              },
              quiz: [
                {
                  question: 'git diff (no flags) shows?',
                  options: ['Staged changes', 'Unstaged working directory changes', 'All changes', 'Committed changes'],
                  correct: 1
                },
                {
                  question: 'Lines starting with + mean?',
                  options: ['Deleted', 'Added', 'Modified', 'Unchanged'],
                  correct: 1
                },
                {
                  question: 'git diff --stat shows?',
                  options: ['Full diff', 'Summary of files changed and +/- counts', 'Statistics', 'Performance'],
                  correct: 1
                },
                {
                  question: 'git diff main feature compares?',
                  options: ['Two files', 'Two branches', 'Two commits', 'Main with staging'],
                  correct: 1
                }
              ]
            },
            {
              id: 'gitignore',
              title: '.gitignore',
              type: 'challenge',
              theory: `<h2>.gitignore</h2><p>A <code>.gitignore</code> file tells Git which files to ignore — never track or stage them.</p><h3>Common Patterns</h3><pre><code># Compiled files
*.class
*.o
*.pyc

# Dependencies
node_modules/
vendor/
venv/

# Build output
dist/
build/
*.min.js

# Environment & secrets
.env
*.pem
secrets.json

# IDE files
.vscode/
.idea/
*.swp

# OS files
.DS_Store
Thumbs.db</code></pre><h3>Pattern Rules</h3><ul><li><code>*</code> — matches anything</li><li><code>?</code> — matches one character</li><li><code>/</code> — directory separator</li><li><code>!</code> — negate (don't ignore)</li><li><code>#</code> — comment</li></ul><h3>Already Tracked Files</h3><pre><code># If file is already tracked, .gitignore won't help
# First remove from tracking:
git rm --cached file.txt
# Then add to .gitignore</code></pre>`,
              challenge: {
                description: 'Write a .gitignore pattern to ignore all files in the node_modules directory.',
                starterCode: '# Ignore node_modules\n',
                expectedOutput: 'node_modules/',
                hints: ['Directory patterns end with /', 'Just the name and /', 'node_modules/']
              },
              quiz: [
                {
                  question: '.gitignore affects which files?',
                  options: ['Already tracked', 'Untracked files only', 'All files', 'Remote files'],
                  correct: 1
                },
                {
                  question: '*.log ignores?',
                  options: ['Only log directory', 'All files ending in .log', 'File named *.log', 'Nothing'],
                  correct: 1
                },
                {
                  question: 'How to stop tracking an already-tracked file?',
                  options: ['Add to .gitignore only', 'git rm --cached file then add to .gitignore', 'Delete the file', 'git forget file'],
                  correct: 1
                },
                {
                  question: '! in .gitignore means?',
                  options: ['Important', 'Negate (DO track this)', 'Error', 'Comment'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'staging-committing',
          title: 'Staging & Committing',
          lessons: [
            {
              id: 'staging_strategies',
              title: 'Staging Strategies',
              type: 'challenge',
              theory: `<h2>Staging Strategies</h2><h3>Partial Staging (Hunks)</h3><pre><code>git add -p file.txt   # Interactive: stage parts of a file</code></pre><p>Options: y(yes), n(no), s(split), q(quit)</p><h3>Stage by Pattern</h3><pre><code>git add *.css          # All CSS files
git add src/**/*.js    # All JS files in src and subdirs
git add -A             # ALL changes including deletions</code></pre><h3>Checking What's Staged</h3><pre><code>git status             # Overview
git diff --staged      # Exact staged changes
git diff --staged --stat  # Summary of staged</code></pre><h3>Best Practices</h3><ul><li><strong>Atomic commits:</strong> Each commit should be one logical change</li><li><strong>Related changes together:</strong> Don't mix a bugfix with a feature</li><li><strong>Working state:</strong> Each commit should leave code in a working state</li><li><strong>Review before commit:</strong> Always check git diff --staged</li></ul>`,
              challenge: {
                description: 'Write the command to interactively stage parts of a file (patch mode).',
                starterCode: '# Stage file interactively\n',
                expectedOutput: 'git add -p',
                hints: ['-p flag for patch/interactive mode', 'git add -p', 'Allows staging portions of changes']
              },
              quiz: [
                {
                  question: 'git add -p allows?',
                  options: ['Push to remote', 'Stage parts of a file interactively', 'Print changes', 'Pull from remote'],
                  correct: 1
                },
                {
                  question: 'git add -A vs git add .?',
                  options: ['Same', '-A includes deletions from anywhere', '. is recursive, -A is not', '-A is for amend'],
                  correct: 1
                },
                {
                  question: 'What is an atomic commit?',
                  options: ['Very small', 'One logical change per commit', 'Cannot be split', 'First commit'],
                  correct: 1
                },
                {
                  question: 'When should each commit leave the code?',
                  options: ['Incomplete', 'In a working state', 'With TODO comments', 'Without tests'],
                  correct: 1
                }
              ]
            },
            {
              id: 'amending_commits',
              title: 'Amending Commits',
              type: 'challenge',
              theory: `<h2>Amending Commits</h2><h3>Fix Last Commit Message</h3><pre><code>git commit --amend -m "Corrected message"</code></pre><h3>Add Forgotten Files to Last Commit</h3><pre><code>git add forgotten_file.txt
git commit --amend --no-edit   # Keep same message</code></pre><h3>How Amend Works</h3><p>Amend doesn't edit the old commit — it replaces it with a new one. The old commit is discarded. This is safe for local commits but dangerous for commits already pushed.</p><h3>⚠️ Warning</h3><p>Never amend commits that have been pushed to a shared remote! It rewrites history and will cause problems for collaborators. Only amend local, unpushed commits.</p><h3>Interactive Rebase (Edit Older Commits)</h3><pre><code>git rebase -i HEAD~3   # Edit last 3 commits
# In editor: change 'pick' to 'reword', 'edit', or 'squash'</code></pre>`,
              challenge: {
                description: 'Write the command to amend the last commit with a new message "Fix typo in header".',
                starterCode: '# Amend last commit message\n',
                expectedOutput: 'git commit --amend -m "Fix typo in header"',
                hints: ['--amend modifies last commit', '-m for new message', 'git commit --amend -m "..."']
              },
              quiz: [
                {
                  question: 'What does --amend do?',
                  options: ['Creates new commit', 'Replaces the last commit', 'Deletes last commit', 'Merges commits'],
                  correct: 1
                },
                {
                  question: '--no-edit with amend means?',
                  options: ['No editor opens', 'Keep the same commit message', 'No files changed', 'Cannot edit later'],
                  correct: 1
                },
                {
                  question: 'When is amend dangerous?',
                  options: ['Always', 'After pushing to shared remote', 'On main branch', 'With merge commits'],
                  correct: 1
                },
                {
                  question: 'To edit older commits use?',
                  options: ['git amend -3', 'git rebase -i HEAD~3', 'git edit HEAD~3', 'git modify -3'],
                  correct: 1
                }
              ]
            },
            {
              id: 'stashing',
              title: 'git stash',
              type: 'challenge',
              theory: `<h2>git stash</h2><p><code>git stash</code> temporarily saves uncommitted changes so you can work on something else, then come back to them later.</p><h3>Basic Usage</h3><pre><code>git stash              # Save changes, clean working dir
git stash pop          # Restore and delete stash
git stash apply        # Restore but keep stash</code></pre><h3>Stash Management</h3><pre><code>git stash list         # Show all stashes
git stash show         # Preview latest stash
git stash show -p      # Show stash diff
git stash drop         # Delete latest stash
git stash clear        # Delete ALL stashes</code></pre><h3>Named Stashes</h3><pre><code>git stash save "WIP: login feature"
git stash apply stash@{2}   # Apply specific stash</code></pre><h3>Use Cases</h3><ul><li>Need to switch branches but have uncommitted work</li><li>Want to pull latest changes on a dirty tree</li><li>Testing something but want to save current state</li><li>Interrupted by urgent bugfix</li></ul>`,
              challenge: {
                description: 'Write the command to stash your current changes.',
                starterCode: '# Stash current work\n',
                expectedOutput: 'git stash',
                hints: ['Simple command', 'Saves and cleans working directory', 'git stash']
              },
              quiz: [
                {
                  question: 'git stash does?',
                  options: ['Commits changes', 'Temporarily saves and hides changes', 'Deletes changes', 'Pushes changes'],
                  correct: 1
                },
                {
                  question: 'Difference between pop and apply?',
                  options: ['Same', 'pop removes stash after applying, apply keeps it', 'apply removes stash', 'pop keeps stash'],
                  correct: 1
                },
                {
                  question: 'When to use git stash?',
                  options: ['Instead of commit always', 'When switching tasks with uncommitted work', 'Before every push', 'After every pull'],
                  correct: 1
                },
                {
                  question: 'git stash list shows?',
                  options: ['Committed files', 'All saved stashes', 'Branch list', 'Remote repos'],
                  correct: 1
                }
              ]
            },
            {
              id: 'commit_history_management',
              title: 'Managing Commit History',
              type: 'challenge',
              theory: `<h2>Managing Commit History</h2><h3>Interactive Rebase</h3><pre><code>git rebase -i HEAD~4</code></pre><p>Opens editor with last 4 commits. Actions:</p><ul><li><code>pick</code> — keep commit as-is</li><li><code>reword</code> — change message</li><li><code>squash</code> — combine with previous commit</li><li><code>fixup</code> — squash but discard message</li><li><code>drop</code> — remove commit entirely</li><li><code>reorder</code> — change commit order</li></ul><h3>Squashing Commits</h3><pre><code># Squash last 3 into 1
git rebase -i HEAD~3
# Change 'pick' to 'squash' for commits 2 and 3</code></pre><h3>Cherry-Pick</h3><pre><code>git cherry-pick abc123    # Apply specific commit to current branch</code></pre><h3>Clean History Benefits</h3><ul><li>Easier to review</li><li>Simpler to bisect bugs</li><li>Clearer project story</li></ul>`,
              challenge: {
                description: 'Write the command to start an interactive rebase of the last 3 commits.',
                starterCode: '# Interactive rebase last 3 commits\n',
                expectedOutput: 'git rebase -i HEAD~3',
                hints: ['-i for interactive', 'HEAD~3 means last 3 commits', 'git rebase -i HEAD~3']
              },
              quiz: [
                {
                  question: 'squash in rebase does?',
                  options: ['Deletes commit', 'Combines with previous commit', 'Moves commit', 'Reverts commit'],
                  correct: 1
                },
                {
                  question: 'cherry-pick does?',
                  options: ['Deletes a commit', 'Applies a specific commit to current branch', 'Creates a branch', 'Merges branches'],
                  correct: 1
                },
                {
                  question: 'fixup vs squash?',
                  options: ['Same', 'fixup discards the commit message', 'squash discards message', 'fixup keeps message'],
                  correct: 1
                },
                {
                  question: 'Should you rebase pushed shared commits?',
                  options: ['Yes always', 'No — rewrites shared history', 'Only on main', 'Only with permission'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'branching',
          title: 'Branching',
          lessons: [
            {
              id: 'creating_branches',
              title: 'Creating Branches',
              type: 'challenge',
              theory: `<h2>Creating Branches</h2><p>A <strong>branch</strong> is a lightweight pointer to a commit. Branching lets you develop features independently without affecting the main code.</p><h3>Commands</h3><pre><code>git branch                  # List branches
git branch feature-login    # Create new branch
git checkout feature-login  # Switch to branch
git checkout -b feature-login  # Create AND switch (shortcut)
git switch feature-login    # Switch (newer syntax)
git switch -c new-branch    # Create and switch (newer)</code></pre><h3>How Branches Work</h3><p>A branch is just a pointer to a commit. When you commit on a branch, the pointer moves forward. Other branches stay where they are.</p><h3>Branch Naming Conventions</h3><ul><li><code>feature/login-page</code> — New features</li><li><code>bugfix/header-overflow</code> — Bug fixes</li><li><code>hotfix/security-patch</code> — Urgent fixes</li><li><code>release/v2.0</code> — Release preparation</li></ul><h3>Viewing Branches</h3><pre><code>git branch            # Local branches
git branch -r         # Remote branches
git branch -a         # All branches
git branch -v         # With last commit info</code></pre>`,
              challenge: {
                description: 'Write the command to create and switch to a new branch called "feature-login".',
                starterCode: '# Create and switch to new branch\n',
                expectedOutput: 'git checkout -b feature-login',
                hints: ['checkout -b creates AND switches', 'Or use: git switch -c', 'git checkout -b feature-login']
              },
              quiz: [
                {
                  question: 'What is a branch in Git?',
                  options: ['A copy of the repo', 'A pointer to a commit', 'A separate folder', 'A remote connection'],
                  correct: 1
                },
                {
                  question: 'git checkout -b name does?',
                  options: ['Deletes branch', 'Creates and switches to branch', 'Lists branches', 'Renames branch'],
                  correct: 1
                },
                {
                  question: 'feature/login-page follows which convention?',
                  options: ['Random', 'type/description naming', 'Alphabetical', 'Date-based'],
                  correct: 1
                },
                {
                  question: 'git branch -a shows?',
                  options: ['Active branch only', 'All local and remote branches', 'Archived branches', 'Anonymous branches'],
                  correct: 1
                }
              ]
            },
            {
              id: 'switching_branches',
              title: 'Switching & Deleting Branches',
              type: 'challenge',
              theory: `<h2>Switching & Deleting Branches</h2><h3>Switching</h3><pre><code>git checkout main           # Switch to main
git switch main             # Same (newer)
git checkout -              # Switch to previous branch</code></pre><h3>Deleting Branches</h3><pre><code>git branch -d feature-login   # Delete (safe - only if merged)
git branch -D feature-login   # Force delete (even if not merged)
git push origin --delete feature-login  # Delete remote branch</code></pre><h3>Renaming</h3><pre><code>git branch -m old-name new-name   # Rename branch
git branch -m new-name            # Rename current branch</code></pre><h3>Important Notes</h3><ul><li>You cannot delete the branch you're currently on</li><li>-d is safe (warns if unmerged changes would be lost)</li><li>-D force deletes regardless</li><li>Switch to main before deleting a feature branch</li></ul>`,
              challenge: {
                description: 'Write the command to safely delete a branch called "old-feature".',
                starterCode: '# Delete merged branch\n',
                expectedOutput: 'git branch -d old-feature',
                hints: ['-d for safe delete', 'git branch -d branch-name', 'Only works if branch is merged']
              },
              quiz: [
                {
                  question: 'git branch -d vs -D?',
                  options: ['Same', '-d is safe (merged only), -D force deletes', '-D is safe', '-d deletes remote'],
                  correct: 1
                },
                {
                  question: 'Can you delete the branch you are on?',
                  options: ['Yes', 'No — switch to another first', 'Only with -D', 'Only main branch'],
                  correct: 1
                },
                {
                  question: 'git checkout - does?',
                  options: ['Undo changes', 'Switch to previous branch', 'Delete branch', 'Create branch'],
                  correct: 1
                },
                {
                  question: 'How to delete a remote branch?',
                  options: ['git branch -d remote/name', 'git push origin --delete name', 'git remote delete name', 'git rm branch name'],
                  correct: 1
                }
              ]
            },
            {
              id: 'branch_workflows',
              title: 'Branch Workflows',
              type: 'challenge',
              theory: `<h2>Branch Workflows</h2><h3>Feature Branch Workflow</h3><pre><code># 1. Start from up-to-date main
git checkout main
git pull

# 2. Create feature branch
git checkout -b feature/user-profile

# 3. Work and commit
git add .
git commit -m "Add profile page layout"
git commit -m "Add profile edit form"

# 4. Push feature branch
git push -u origin feature/user-profile

# 5. Create Pull Request (on GitHub)
# 6. After review, merge to main</code></pre><h3>Git Flow</h3><ul><li><code>main</code> — Production-ready code</li><li><code>develop</code> — Integration branch</li><li><code>feature/*</code> — New features</li><li><code>release/*</code> — Release preparation</li><li><code>hotfix/*</code> — Emergency production fixes</li></ul><h3>Trunk-Based Development</h3><p>Everyone commits to main with short-lived feature branches (< 1 day). Used by many modern teams.</p>`,
              challenge: {
                description: 'Write the command to push a new branch "feature/auth" and set up tracking.',
                starterCode: '# Push new branch with tracking\n',
                expectedOutput: 'git push -u origin feature/auth',
                hints: ['-u sets upstream tracking', 'origin is the remote', 'git push -u origin branch-name']
              },
              quiz: [
                {
                  question: 'Feature branch workflow starts from?',
                  options: ['Any branch', 'Up-to-date main', 'Previous feature', 'Develop branch'],
                  correct: 1
                },
                {
                  question: 'What does -u flag do in git push?',
                  options: ['Update', 'Sets upstream tracking for the branch', 'Undo', 'Upload only'],
                  correct: 1
                },
                {
                  question: 'In Git Flow, hotfix branches from?',
                  options: ['develop', 'main (production)', 'feature', 'release'],
                  correct: 1
                },
                {
                  question: 'Trunk-based development means?',
                  options: ['Long feature branches', 'Short-lived branches, frequent merges to main', 'No branches ever', 'One developer at a time'],
                  correct: 1
                }
              ]
            },
            {
              id: 'head_detached',
              title: 'HEAD & Detached HEAD',
              type: 'challenge',
              theory: `<h2>HEAD & Detached HEAD</h2><h3>What is HEAD?</h3><p>HEAD is a pointer to the current commit/branch you're working on. Usually it points to a branch name:</p><pre><code>HEAD -> main -> commit abc123</code></pre><h3>Detached HEAD</h3><p>When you checkout a specific commit (not a branch), HEAD points directly to a commit:</p><pre><code>git checkout abc123   # Detached HEAD!
# HEAD -> commit abc123 (no branch)</code></pre><h3>What Can You Do in Detached HEAD?</h3><ul><li>Look around at old code</li><li>Run tests on old versions</li><li>Create a new branch from this point</li></ul><pre><code># Save your work by creating a branch
git checkout -b rescue-branch</code></pre><h3>HEAD References</h3><pre><code>HEAD          # Current commit
HEAD~1        # Parent commit (1 back)
HEAD~3        # 3 commits back
HEAD^         # First parent (same as ~1)
HEAD^2        # Second parent (merge commits)</code></pre>`,
              challenge: {
                description: 'Write the command to see what commit HEAD currently points to.',
                starterCode: '# Show current HEAD commit\n',
                expectedOutput: 'git rev-parse HEAD',
                hints: ['rev-parse resolves references', 'Shows the full SHA hash', 'git rev-parse HEAD']
              },
              quiz: [
                {
                  question: 'HEAD normally points to?',
                  options: ['A file', 'The current branch', 'Remote', 'First commit'],
                  correct: 1
                },
                {
                  question: 'Detached HEAD means?',
                  options: ['Error state', 'HEAD points to a commit, not a branch', 'Branch deleted', 'Merge conflict'],
                  correct: 1
                },
                {
                  question: 'HEAD~2 means?',
                  options: ['Two branches', 'Two commits back from HEAD', 'Second file', 'Two remotes'],
                  correct: 1
                },
                {
                  question: 'How to save work in detached HEAD state?',
                  options: ['Just commit', 'Create a new branch', 'Push immediately', 'Stash it'],
                  correct: 1
                }
              ]
            },
            {
              id: 'comparing_branches',
              title: 'Comparing Branches',
              type: 'challenge',
              theory: `<h2>Comparing Branches</h2><h3>Diff Between Branches</h3><pre><code>git diff main..feature      # Changes in feature not in main
git diff main...feature     # Changes since branches diverged
git diff main feature -- file.txt  # Specific file</code></pre><h3>Log Comparisons</h3><pre><code>git log main..feature --oneline  # Commits in feature not in main
git log feature..main --oneline  # Commits in main not in feature
git log --left-right main...feature  # Both sides</code></pre><h3>Merge Preview</h3><pre><code># See what would be merged
git log main..feature --oneline
git diff main...feature --stat</code></pre><h3>Which Branches Contain a Commit?</h3><pre><code>git branch --contains abc123
git branch --merged          # Branches fully merged into current
git branch --no-merged       # Branches with unmerged work</code></pre>`,
              challenge: {
                description: 'Write the command to see commits in "feature" branch that are not in "main".',
                starterCode: '# Commits in feature not in main\n',
                expectedOutput: 'git log main..feature --oneline',
                hints: ['Double dots .. for range', 'main..feature = in feature, not in main', 'Add --oneline for compact view']
              },
              quiz: [
                {
                  question: 'git diff main..feature shows?',
                  options: ['All differences', 'Changes in feature not yet in main', 'Only conflicts', 'Merge result'],
                  correct: 1
                },
                {
                  question: 'git branch --merged shows?',
                  options: ['All branches', 'Branches already merged into current', 'Merge conflicts', 'Remote branches'],
                  correct: 1
                },
                {
                  question: '.. vs ... in diff?',
                  options: ['Same', '.. direct comparison, ... since divergence', '... is invalid', '.. is invalid'],
                  correct: 1
                },
                {
                  question: 'How to preview what a merge would include?',
                  options: ['git merge --preview', 'git log main..feature', 'git show merge', 'git merge --dry-run'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'merging',
          title: 'Merging',
          lessons: [
            {
              id: 'basic_merge',
              title: 'Basic Merge',
              type: 'challenge',
              theory: `<h2>Basic Merge</h2><p>Merging integrates changes from one branch into another.</p><h3>Fast-Forward Merge</h3><pre><code>git checkout main
git merge feature-login</code></pre><p>If main hasn't changed since feature branched, Git just moves the pointer forward — no merge commit needed.</p><h3>Three-Way Merge</h3><p>When both branches have new commits, Git creates a merge commit that combines both:</p><pre><code>git checkout main
git merge feature-login
# Creates a merge commit with two parents</code></pre><h3>Merge Message</h3><pre><code>git merge feature --no-edit    # Use default message
git merge feature -m "Merge feature into main"</code></pre><h3>After Merging</h3><pre><code>git branch -d feature-login    # Delete merged branch
git push                        # Push to remote</code></pre>`,
              challenge: {
                description: 'Write the commands to switch to main and merge "feature-login" into it.',
                starterCode: '# Merge feature-login into main\n',
                expectedOutput: 'git checkout main\ngit merge feature-login',
                hints: ['First checkout main', 'Then merge the feature branch', 'Two commands needed']
              },
              quiz: [
                {
                  question: 'Fast-forward merge happens when?',
                  options: ['Always', 'Target branch has no new commits since branching', 'Both have changes', 'Only with rebase'],
                  correct: 1
                },
                {
                  question: 'A merge commit has how many parents?',
                  options: ['One', 'Two', 'Three', 'Zero'],
                  correct: 1
                },
                {
                  question: 'Which branch should you be ON when merging?',
                  options: ['The feature branch', 'The target/receiving branch', 'Either one', 'A new branch'],
                  correct: 1
                },
                {
                  question: 'After merging feature into main, you should?',
                  options: ['Delete main', 'Delete the feature branch', 'Create new branch', 'Revert'],
                  correct: 1
                }
              ]
            },
            {
              id: 'merge_conflicts',
              title: 'Merge Conflicts',
              type: 'challenge',
              theory: `<h2>Merge Conflicts</h2><p>Conflicts occur when both branches changed the same lines in the same file. Git cannot auto-resolve these.</p><h3>Conflict Markers</h3><pre><code><<<<<<< HEAD
This is the current branch's version
=======
This is the incoming branch's version
>>>>>>> feature-branch</code></pre><h3>Resolving</h3><ol><li>Open conflicted files</li><li>Edit to keep what you want (remove markers)</li><li>Stage resolved files: <code>git add file.txt</code></li><li>Complete the merge: <code>git commit</code></li></ol><h3>Tools</h3><pre><code>git mergetool            # Open visual merge tool
git merge --abort        # Cancel merge entirely
git diff                 # See conflicts</code></pre><h3>Preventing Conflicts</h3><ul><li>Keep branches short-lived</li><li>Regularly merge main into feature branches</li><li>Communicate with team about which files you're changing</li><li>Use smaller, focused files</li></ul>`,
              challenge: {
                description: 'Write the command to abort a merge that has conflicts (cancel the merge).',
                starterCode: '# Abort current merge\n',
                expectedOutput: 'git merge --abort',
                hints: ['--abort cancels the merge', 'Returns to pre-merge state', 'git merge --abort']
              },
              quiz: [
                {
                  question: 'When do merge conflicts happen?',
                  options: ['Every merge', 'When same lines changed in both branches', 'When files are deleted', 'Only with rebase'],
                  correct: 1
                },
                {
                  question: '<<<<<<< HEAD marks?',
                  options: ['End of conflict', 'Start of current branch content', 'Incoming content', 'Resolution'],
                  correct: 1
                },
                {
                  question: 'After resolving conflicts, you must?',
                  options: ['git push', 'git add then git commit', 'git merge again', 'git reset'],
                  correct: 1
                },
                {
                  question: 'git merge --abort does?',
                  options: ['Deletes branch', 'Cancels merge, returns to pre-merge state', 'Forces merge', 'Removes conflicts'],
                  correct: 1
                }
              ]
            },
            {
              id: 'rebase',
              title: 'Rebase',
              type: 'challenge',
              theory: `<h2>Rebase</h2><p><code>git rebase</code> moves your branch's commits on top of another branch, creating a linear history (no merge commits).</p><h3>Basic Rebase</h3><pre><code>git checkout feature
git rebase main</code></pre><p>Replays feature commits on top of main's latest commit.</p><h3>Merge vs Rebase</h3><ul><li><strong>Merge:</strong> Preserves history as it happened (non-linear)</li><li><strong>Rebase:</strong> Creates clean linear history (rewrites commits)</li></ul><h3>The Golden Rule</h3><p><strong>Never rebase commits that have been pushed to a shared remote.</strong> Rebase rewrites history — if others have those commits, you'll create chaos.</p><h3>Safe Rebase Workflow</h3><pre><code># Update feature branch with latest main (instead of merge)
git checkout feature
git rebase main
# If conflicts: resolve, git add, git rebase --continue</code></pre>`,
              challenge: {
                description: 'Write the command to rebase the current branch onto main.',
                starterCode: '# Rebase onto main\n',
                expectedOutput: 'git rebase main',
                hints: ['Simple command', 'Replays current branch on top of main', 'git rebase main']
              },
              quiz: [
                {
                  question: 'Rebase creates what kind of history?',
                  options: ['Non-linear', 'Linear (straight line)', 'Circular', 'No history'],
                  correct: 1
                },
                {
                  question: 'The golden rule of rebase?',
                  options: ['Always rebase', 'Never rebase pushed/shared commits', 'Only on main', 'Rebase before merge'],
                  correct: 1
                },
                {
                  question: 'During rebase conflict, what to do after resolving?',
                  options: ['git commit', 'git rebase --continue', 'git merge', 'git push'],
                  correct: 1
                },
                {
                  question: 'Merge vs rebase?',
                  options: ['Same result', 'Merge preserves history, rebase linearizes', 'Rebase preserves history', 'Merge is newer'],
                  correct: 1
                }
              ]
            },
            {
              id: 'merge_strategies',
              title: 'Merge Strategies',
              type: 'challenge',
              theory: `<h2>Merge Strategies</h2><h3>No Fast-Forward</h3><pre><code>git merge --no-ff feature   # Always create merge commit</code></pre><p>Useful to preserve that a feature branch existed.</p><h3>Squash Merge</h3><pre><code>git merge --squash feature
git commit -m "Add login feature"</code></pre><p>Combines all feature commits into one. Clean main history but loses individual commits.</p><h3>Choosing a Strategy</h3><ul><li><strong>Fast-forward:</strong> For simple, single-commit branches</li><li><strong>No-ff:</strong> To preserve feature branch history</li><li><strong>Squash:</strong> For clean main with atomic features</li><li><strong>Rebase + ff:</strong> Linear history purists</li></ul><h3>Pull Request Merge Options (GitHub)</h3><ul><li><strong>Create merge commit:</strong> --no-ff (preserves all)</li><li><strong>Squash and merge:</strong> --squash (one commit)</li><li><strong>Rebase and merge:</strong> Linear history</li></ul>`,
              challenge: {
                description: 'Write the command to merge "feature" branch with a squash (combine all commits into one).',
                starterCode: '# Squash merge feature\n',
                expectedOutput: 'git merge --squash feature',
                hints: ['--squash combines all commits', 'After squash, you need to git commit', 'git merge --squash feature']
              },
              quiz: [
                {
                  question: '--no-ff forces?',
                  options: ['Fast forward', 'A merge commit even when FF is possible', 'No merge', 'Delete branch'],
                  correct: 1
                },
                {
                  question: 'Squash merge does?',
                  options: ['Normal merge', 'Combines all branch commits into one', 'Deletes commits', 'Splits commits'],
                  correct: 1
                },
                {
                  question: 'After git merge --squash, what is needed?',
                  options: ['Nothing', 'A separate git commit', 'git push', 'git merge again'],
                  correct: 1
                },
                {
                  question: 'Best for clean main branch history?',
                  options: ['Regular merge', 'Squash merge or rebase', 'Fast-forward only', 'No-ff always'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'remote-repositories',
          title: 'Remote Repositories',
          lessons: [
            {
              id: 'adding_remotes',
              title: 'Adding Remotes',
              type: 'challenge',
              theory: `<h2>Adding Remotes</h2><p>A <strong>remote</strong> is a version of your repository hosted on a server (GitHub, GitLab, Bitbucket).</p><h3>Adding a Remote</h3><pre><code>git remote add origin https://github.com/user/repo.git</code></pre><p>"origin" is the conventional name for your primary remote.</p><h3>Managing Remotes</h3><pre><code>git remote -v              # List remotes with URLs
git remote show origin     # Detailed remote info
git remote rename old new  # Rename remote
git remote remove name     # Remove remote</code></pre><h3>Multiple Remotes</h3><pre><code>git remote add upstream https://github.com/original/repo.git
git remote add backup https://gitlab.com/user/repo.git</code></pre><h3>Changing Remote URL</h3><pre><code>git remote set-url origin https://github.com/user/new-repo.git</code></pre>`,
              challenge: {
                description: 'Write the command to add a remote called "origin" with URL "https://github.com/user/myproject.git".',
                starterCode: '# Add remote origin\n',
                expectedOutput: 'git remote add origin https://github.com/user/myproject.git',
                hints: ['git remote add name URL', 'origin is the standard name', 'Full URL after the name']
              },
              quiz: [
                {
                  question: 'What is "origin"?',
                  options: ['The first commit', 'Convention name for primary remote', 'Main branch', 'Your machine'],
                  correct: 1
                },
                {
                  question: 'git remote -v shows?',
                  options: ['Verbose log', 'Remotes with their URLs', 'Version info', 'Branch connections'],
                  correct: 1
                },
                {
                  question: 'Can you have multiple remotes?',
                  options: ['No', 'Yes', 'Only 2', 'Only with SSH'],
                  correct: 1
                },
                {
                  question: '"upstream" remote typically refers to?',
                  options: ['Your fork', 'The original repository you forked from', 'Backup', 'Production server'],
                  correct: 1
                }
              ]
            },
            {
              id: 'push_pull',
              title: 'Push & Pull',
              type: 'challenge',
              theory: `<h2>Push & Pull</h2><h3>git push</h3><pre><code>git push origin main         # Push main to origin
git push -u origin main      # Push and set upstream
git push                     # Push current branch (if tracking set)
git push --force             # Force push (⚠️ dangerous)
git push --force-with-lease  # Safer force push</code></pre><h3>git pull</h3><pre><code>git pull                     # Fetch + merge from upstream
git pull origin main         # Pull specific branch
git pull --rebase            # Fetch + rebase (cleaner)</code></pre><h3>git fetch</h3><pre><code>git fetch                    # Download remote changes (no merge)
git fetch --all              # From all remotes
git fetch origin feature     # Specific branch</code></pre><h3>Fetch vs Pull</h3><ul><li><code>fetch</code> — Downloads changes but doesn't modify your work</li><li><code>pull</code> — Fetch + automatically merge (or rebase)</li></ul><p>Fetch is safer — you can review before integrating.</p>`,
              challenge: {
                description: 'Write the command to pull latest changes from remote with rebase instead of merge.',
                starterCode: '# Pull with rebase\n',
                expectedOutput: 'git pull --rebase',
                hints: ['--rebase flag for cleaner history', 'git pull --rebase', 'Avoids merge commits from pulls']
              },
              quiz: [
                {
                  question: 'git push -u sets?',
                  options: ['Update mode', 'Upstream tracking for branch', 'Username', 'URL'],
                  correct: 1
                },
                {
                  question: 'git fetch vs git pull?',
                  options: ['Same', 'fetch downloads only, pull downloads and merges', 'pull downloads only', 'fetch merges'],
                  correct: 1
                },
                {
                  question: 'When is --force push dangerous?',
                  options: ['Never', 'When others have pulled those commits', 'On local branches', 'With new repos'],
                  correct: 1
                },
                {
                  question: 'git pull --rebase does?',
                  options: ['Fetch + merge', 'Fetch + rebase on top of remote', 'Only rebase', 'Delete and re-pull'],
                  correct: 1
                }
              ]
            },
            {
              id: 'tracking_branches',
              title: 'Tracking Branches',
              type: 'challenge',
              theory: `<h2>Tracking Branches</h2><p>A tracking branch has a direct relationship with a remote branch. It knows where to push/pull automatically.</p><h3>Setting Up Tracking</h3><pre><code>git push -u origin feature        # Sets upstream on push
git branch --set-upstream-to=origin/main main  # Explicit
git checkout --track origin/feature  # Create local from remote</code></pre><h3>Viewing Tracking</h3><pre><code>git branch -vv     # Shows tracking info for all branches
# * main    abc123 [origin/main] Latest commit message
#   feature def456 [origin/feature: ahead 2] My work</code></pre><h3>Ahead/Behind</h3><pre><code>git status    # Shows "ahead by X, behind by Y"
# ahead = local commits not yet pushed
# behind = remote commits not yet pulled</code></pre><h3>Remote Tracking Branches</h3><pre><code>origin/main     # Read-only reference to remote state
origin/feature  # Updated by git fetch</code></pre>`,
              challenge: {
                description: 'Write the command to see all branches with their tracking information.',
                starterCode: '# Show branches with tracking info\n',
                expectedOutput: 'git branch -vv',
                hints: ['-vv for very verbose', 'Shows upstream and ahead/behind', 'git branch -vv']
              },
              quiz: [
                {
                  question: 'A tracking branch knows?',
                  options: ['File locations', 'Which remote branch to push/pull from', 'Commit messages', 'User permissions'],
                  correct: 1
                },
                {
                  question: '"ahead 3" means?',
                  options: ['3 commits behind remote', '3 local commits not yet pushed', '3 conflicts', '3 branches'],
                  correct: 1
                },
                {
                  question: 'origin/main is?',
                  options: ['Your local main', 'Read-only reference to remote main state', 'A copy of main', 'Remote configuration'],
                  correct: 1
                },
                {
                  question: 'How to create local branch from remote?',
                  options: ['git branch remote', 'git checkout --track origin/branch', 'git copy remote', 'git pull branch'],
                  correct: 1
                }
              ]
            },
            {
              id: 'forking_workflow',
              title: 'Forking Workflow',
              type: 'challenge',
              theory: `<h2>Forking Workflow</h2><p>Forking creates your own copy of someone else's repository. Standard for open-source contributions.</p><h3>Fork Workflow Steps</h3><ol><li>Fork the repo on GitHub (creates your copy)</li><li>Clone YOUR fork locally</li><li>Add original as "upstream" remote</li><li>Create feature branch</li><li>Make changes and push to YOUR fork</li><li>Create Pull Request from your fork to original</li></ol><h3>Setup</h3><pre><code>git clone https://github.com/YOU/repo.git
cd repo
git remote add upstream https://github.com/ORIGINAL/repo.git</code></pre><h3>Staying Updated</h3><pre><code>git fetch upstream
git checkout main
git merge upstream/main
git push origin main</code></pre><h3>Contributing</h3><pre><code>git checkout -b fix/typo
# Make changes...
git push origin fix/typo
# Create PR on GitHub</code></pre>`,
              challenge: {
                description: 'Write the command to fetch updates from the "upstream" remote.',
                starterCode: '# Fetch from upstream\n',
                expectedOutput: 'git fetch upstream',
                hints: ['Fetch downloads without merging', 'upstream is the remote name', 'git fetch upstream']
              },
              quiz: [
                {
                  question: 'What is forking?',
                  options: ['Creating a branch', 'Creating your own copy of a repo on GitHub', 'Merging', 'Deleting a repo'],
                  correct: 1
                },
                {
                  question: 'In fork workflow, "upstream" is?',
                  options: ['Your fork', 'The original repository', 'Your local copy', 'A branch name'],
                  correct: 1
                },
                {
                  question: 'Pull Requests go from?',
                  options: ['Original to fork', 'Your fork to original', 'Branch to branch locally', 'Main to feature'],
                  correct: 1
                },
                {
                  question: 'How to sync fork with original?',
                  options: ['Auto-syncs', 'Fetch upstream, merge into main, push', 'Delete and re-fork', 'git sync'],
                  correct: 1
                }
              ]
            },
            {
              id: 'pull_requests',
              title: 'Pull Requests',
              type: 'challenge',
              theory: `<h2>Pull Requests (PRs)</h2><p>A Pull Request is a proposal to merge your changes into another branch/repository. It enables code review and discussion.</p><h3>Creating a Good PR</h3><ul><li><strong>Title:</strong> Clear summary of changes</li><li><strong>Description:</strong> What, why, and how</li><li><strong>Small:</strong> Easier to review (< 400 lines ideal)</li><li><strong>Tests:</strong> Include relevant tests</li><li><strong>Screenshots:</strong> For UI changes</li></ul><h3>PR Workflow</h3><pre><code># 1. Create and push feature branch
git checkout -b feature/add-search
# ... make changes ...
git push -u origin feature/add-search

# 2. Create PR on GitHub/GitLab

# 3. Address review feedback
git add .
git commit -m "Address review: add input validation"
git push

# 4. After approval, merge (usually on web UI)

# 5. Clean up
git checkout main
git pull
git branch -d feature/add-search</code></pre><h3>Review Best Practices</h3><ul><li>Be constructive and respectful</li><li>Explain WHY you suggest changes</li><li>Approve when satisfied, request changes when not</li></ul>`,
              challenge: {
                description: 'Write the commands to create a branch "fix/typo", make it ready for a PR by pushing with upstream tracking.',
                starterCode: '# Prepare branch for PR\n',
                expectedOutput: 'git checkout -b fix/typo\ngit push -u origin fix/typo',
                hints: ['Create branch then push', 'Two commands needed', '-u sets tracking for PR']
              },
              quiz: [
                {
                  question: 'What is a Pull Request?',
                  options: ['git pull command', 'Proposal to merge changes with review', 'Request to pull from remote', 'Downloading code'],
                  correct: 1
                },
                {
                  question: 'Ideal PR size?',
                  options: ['As large as possible', 'Small and focused (< 400 lines)', 'Exactly 100 lines', 'One file only'],
                  correct: 1
                },
                {
                  question: 'After PR is merged, you should?',
                  options: ['Create another PR', 'Delete the feature branch', 'Push again', 'Rebase main'],
                  correct: 1
                },
                {
                  question: 'Code review should be?',
                  options: ['Harsh and critical', 'Constructive and respectful', 'Optional', 'Done by author only'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'collaboration-workflow',
          title: 'Collaboration Workflow',
          lessons: [
            {
              id: 'team_workflows',
              title: 'Team Workflows',
              type: 'challenge',
              theory: `<h2>Team Workflows</h2><h3>Daily Developer Workflow</h3><pre><code># Morning: Get latest
git checkout main
git pull
git checkout my-feature
git rebase main    # Keep feature updated

# Work: Make focused commits
git add -p         # Stage carefully
git commit -m "Add user validation"

# Before PR: Clean up
git rebase -i HEAD~3   # Squash/reword if needed
git push origin my-feature</code></pre><h3>Code Review Protocol</h3><ol><li>Reviewer checks out PR branch locally</li><li>Reviews diff, runs tests</li><li>Leaves comments, approves or requests changes</li><li>Author addresses feedback</li><li>Reviewer re-reviews, approves</li><li>Maintainer merges</li></ol><h3>Conflict Resolution Protocol</h3><pre><code># When your PR has conflicts:
git checkout my-feature
git fetch origin
git rebase origin/main
# Resolve conflicts...
git push --force-with-lease</code></pre>`,
              challenge: {
                description: 'Write the command to safely force push after rebasing (preserves others\' work).',
                starterCode: '# Safe force push after rebase\n',
                expectedOutput: 'git push --force-with-lease',
                hints: ['--force-with-lease is the safe version', 'Fails if remote changed unexpectedly', 'git push --force-with-lease']
              },
              quiz: [
                {
                  question: '--force-with-lease vs --force?',
                  options: ['Same', 'force-with-lease fails if remote has unexpected changes', 'force is safer', 'force-with-lease is slower'],
                  correct: 1
                },
                {
                  question: 'Before creating a PR you should?',
                  options: ['Push immediately', 'Rebase on latest main, clean up commits', 'Delete main', 'Merge main into feature'],
                  correct: 1
                },
                {
                  question: 'Who typically merges PRs?',
                  options: ['The author', 'The reviewer/maintainer after approval', 'Anyone', 'CI/CD system'],
                  correct: 1
                },
                {
                  question: 'Daily workflow starts with?',
                  options: ['Committing', 'Pulling latest changes', 'Creating branch', 'Pushing'],
                  correct: 1
                }
              ]
            },
            {
              id: 'tags_releases',
              title: 'Tags & Releases',
              type: 'challenge',
              theory: `<h2>Tags & Releases</h2><p>Tags mark specific points in history as important — typically used for releases.</p><h3>Creating Tags</h3><pre><code>git tag v1.0.0                    # Lightweight tag
git tag -a v1.0.0 -m "Release 1.0"  # Annotated (recommended)
git tag -a v1.0.0 abc123          # Tag specific commit</code></pre><h3>Listing & Viewing</h3><pre><code>git tag                 # List all tags
git tag -l "v1.*"       # Filter tags
git show v1.0.0         # Tag details</code></pre><h3>Pushing Tags</h3><pre><code>git push origin v1.0.0      # Push specific tag
git push origin --tags      # Push all tags</code></pre><h3>Semantic Versioning</h3><p><code>MAJOR.MINOR.PATCH</code> (e.g., v2.1.3)</p><ul><li><strong>MAJOR:</strong> Breaking changes</li><li><strong>MINOR:</strong> New features (backwards compatible)</li><li><strong>PATCH:</strong> Bug fixes</li></ul>`,
              challenge: {
                description: 'Write the command to create an annotated tag "v1.0.0" with message "First release".',
                starterCode: '# Create annotated tag\n',
                expectedOutput: 'git tag -a v1.0.0 -m "First release"',
                hints: ['-a for annotated', '-m for message', 'git tag -a v1.0.0 -m "First release"']
              },
              quiz: [
                {
                  question: 'Annotated vs lightweight tag?',
                  options: ['Same', 'Annotated has message, author, date', 'Lightweight has more info', 'Annotated is temporary'],
                  correct: 1
                },
                {
                  question: 'In semver v2.1.3, what does 2 represent?',
                  options: ['Patch', 'Minor', 'Major version', 'Build number'],
                  correct: 2
                },
                {
                  question: 'Tags are pushed with?',
                  options: ['git push (automatically)', 'git push --tags', 'git tag push', 'Tags auto-push'],
                  correct: 1
                },
                {
                  question: 'When to bump MAJOR version?',
                  options: ['Bug fixes', 'New features', 'Breaking changes', 'Every release'],
                  correct: 2
                }
              ]
            },
            {
              id: 'git_hooks',
              title: 'Git Hooks',
              type: 'challenge',
              theory: `<h2>Git Hooks</h2><p>Hooks are scripts that run automatically at certain Git events — like spell-checkers for your workflow.</p><h3>Common Hooks</h3><ul><li><code>pre-commit</code> — Before commit (lint, format, test)</li><li><code>commit-msg</code> — Validate commit message format</li><li><code>pre-push</code> — Before push (run full tests)</li><li><code>post-merge</code> — After merge (install dependencies)</li></ul><h3>Location</h3><pre><code>.git/hooks/           # Local hooks directory
.git/hooks/pre-commit # Must be executable</code></pre><h3>Example pre-commit Hook</h3><pre><code>#!/bin/sh
# Run linter before allowing commit
npm run lint
if [ $? -ne 0 ]; then
  echo "Lint failed! Fix errors before committing."
  exit 1
fi</code></pre><h3>Husky (Popular Tool)</h3><pre><code># package.json
"husky": {
  "hooks": {
    "pre-commit": "npm run lint",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}</code></pre>`,
              challenge: {
                description: 'Write the path where Git looks for the pre-commit hook script.',
                starterCode: '# Pre-commit hook location\n',
                expectedOutput: '.git/hooks/pre-commit',
                hints: ['Hooks are in .git/hooks/', 'Named after the event', '.git/hooks/pre-commit']
              },
              quiz: [
                {
                  question: 'pre-commit hook runs?',
                  options: ['After commit', 'Before commit is created', 'Before push', 'After merge'],
                  correct: 1
                },
                {
                  question: 'If a hook exits with non-zero?',
                  options: ['Nothing happens', 'The Git action is cancelled', 'Warning only', 'Hook is deleted'],
                  correct: 1
                },
                {
                  question: 'Hooks must be?',
                  options: ['In JavaScript', 'Executable scripts', 'Registered online', 'In package.json'],
                  correct: 1
                },
                {
                  question: 'What tool manages hooks in JS projects?',
                  options: ['npm', 'Husky', 'Webpack', 'Babel'],
                  correct: 1
                }
              ]
            },
            {
              id: 'git_bisect',
              title: 'git bisect (Finding Bugs)',
              type: 'challenge',
              theory: `<h2>git bisect (Finding Bugs)</h2><p><code>git bisect</code> uses binary search to find which commit introduced a bug.</p><h3>Usage</h3><pre><code>git bisect start
git bisect bad            # Current commit is broken
git bisect good v1.0.0    # This tag/commit was working

# Git checks out middle commit. Test it, then:
git bisect good   # If this commit works
git bisect bad    # If this commit is broken

# Repeat until Git finds the exact commit
git bisect reset  # Return to original state</code></pre><h3>How It Works</h3><p>With 1000 commits between good and bad, bisect finds the culprit in ~10 steps (log2(1000) ≈ 10). Much faster than checking each commit!</p><h3>Automated Bisect</h3><pre><code>git bisect start
git bisect bad HEAD
git bisect good v1.0
git bisect run npm test   # Auto-runs test at each step</code></pre>`,
              challenge: {
                description: 'Write the command to start a bisect session.',
                starterCode: '# Start bisecting\n',
                expectedOutput: 'git bisect start',
                hints: ['Simple start command', 'Begins the binary search', 'git bisect start']
              },
              quiz: [
                {
                  question: 'git bisect uses which search algorithm?',
                  options: ['Linear', 'Binary search', 'Random', 'Depth-first'],
                  correct: 1
                },
                {
                  question: '1000 commits requires approximately how many bisect steps?',
                  options: ['1000', '500', '10', '100'],
                  correct: 2
                },
                {
                  question: 'git bisect run does?',
                  options: ['Runs Git', 'Automates bisect with a test command', 'Runs all commits', 'Speeds up Git'],
                  correct: 1
                },
                {
                  question: 'After bisect, what returns to normal?',
                  options: ['git bisect end', 'git bisect reset', 'git bisect stop', 'git checkout main'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'undoing-changes',
          title: 'Undoing Changes',
          lessons: [
            {
              id: 'restore_reset',
              title: 'Restore & Reset',
              type: 'challenge',
              theory: `<h2>Restore & Reset</h2><h3>Discard Working Directory Changes</h3><pre><code>git restore file.txt           # Discard unstaged changes
git checkout -- file.txt       # Same (older syntax)</code></pre><h3>Unstage Files</h3><pre><code>git restore --staged file.txt  # Remove from staging
git reset HEAD file.txt        # Same (older syntax)</code></pre><h3>git reset Levels</h3><pre><code>git reset --soft HEAD~1   # Undo commit, keep staged
git reset --mixed HEAD~1  # Undo commit, unstage (default)
git reset --hard HEAD~1   # Undo commit, discard all changes ⚠️</code></pre><h3>When to Use Each</h3><ul><li><strong>--soft:</strong> Oops, I committed too early (keep changes staged)</li><li><strong>--mixed:</strong> I want to re-organize my staged files</li><li><strong>--hard:</strong> I want to completely discard recent work</li></ul><p>⚠️ <code>--hard</code> is destructive! Changes are permanently lost (unless you use reflog).</p>`,
              challenge: {
                description: 'Write the command to undo the last commit but keep changes staged (soft reset).',
                starterCode: '# Soft reset last commit\n',
                expectedOutput: 'git reset --soft HEAD~1',
                hints: ['--soft keeps changes staged', 'HEAD~1 means one commit back', 'git reset --soft HEAD~1']
              },
              quiz: [
                {
                  question: 'git reset --hard HEAD~1 does?',
                  options: ['Keeps changes', 'Permanently discards last commit and changes', 'Stages changes', 'Nothing'],
                  correct: 1
                },
                {
                  question: 'git restore file.txt discards?',
                  options: ['Staged changes', 'Unstaged working directory changes', 'Commits', 'Remote changes'],
                  correct: 1
                },
                {
                  question: 'Default reset mode is?',
                  options: ['soft', 'mixed', 'hard', 'none'],
                  correct: 1
                },
                {
                  question: '--soft reset keeps changes where?',
                  options: ['Working directory only', 'Staged (ready to re-commit)', 'Deleted', 'In stash'],
                  correct: 1
                }
              ]
            },
            {
              id: 'git_revert',
              title: 'git revert',
              type: 'challenge',
              theory: `<h2>git revert</h2><p><code>git revert</code> creates a NEW commit that undoes a previous commit. Unlike reset, it doesn't rewrite history — safe for shared branches!</p><h3>Revert a Commit</h3><pre><code>git revert abc123     # Creates new commit undoing abc123
git revert HEAD       # Undo the most recent commit</code></pre><h3>Revert Multiple</h3><pre><code>git revert HEAD~3..HEAD  # Revert last 3 commits
git revert --no-commit HEAD~3..HEAD  # Revert without auto-committing</code></pre><h3>Revert vs Reset</h3><ul><li><strong>reset:</strong> Rewrites history (use locally)</li><li><strong>revert:</strong> Adds new commit (safe for shared/pushed)</li></ul><h3>Revert a Merge Commit</h3><pre><code>git revert -m 1 abc123   # -m 1 specifies which parent to keep</code></pre><p>Reverting merges is tricky — the -m flag tells Git which side of the merge to consider as "mainline."</p>`,
              challenge: {
                description: 'Write the command to revert the most recent commit (creating a new undo commit).',
                starterCode: '# Revert last commit safely\n',
                expectedOutput: 'git revert HEAD',
                hints: ['revert creates undo commit', 'HEAD is the latest commit', 'git revert HEAD']
              },
              quiz: [
                {
                  question: 'git revert creates?',
                  options: ['Nothing', 'A new commit that undoes a previous one', 'Deletes a commit', 'A branch'],
                  correct: 1
                },
                {
                  question: 'Why use revert over reset for shared branches?',
                  options: ['Faster', 'Doesn\\'t rewrite history', 'Simpler', 'More features'],
                  correct: 1
                },
                {
                  question: 'git revert abc123 — after running, history shows?',
                  options: ['abc123 removed', 'abc123 still there plus new revert commit', 'Clean slate', 'Only revert commit'],
                  correct: 1
                },
                {
                  question: '-m 1 in merge revert specifies?',
                  options: ['Message', 'Which parent is mainline', 'Mode', 'Number of reverts'],
                  correct: 1
                }
              ]
            },
            {
              id: 'reflog',
              title: 'Reflog (Safety Net)',
              type: 'challenge',
              theory: `<h2>Reflog (Safety Net)</h2><p><code>git reflog</code> records every movement of HEAD — even commits "lost" by reset or rebase. It's your safety net!</p><h3>Viewing Reflog</h3><pre><code>git reflog                # Show HEAD history
git reflog show main      # History of main branch</code></pre><h3>Recovering Lost Commits</h3><pre><code># Oops! Did a hard reset
git reflog
# Find the commit hash before the reset
git reset --hard abc123   # Recover to that point

# Or create a branch from the lost commit
git checkout -b recovery abc123</code></pre><h3>Reflog Entries</h3><pre><code>abc123 HEAD@{0}: commit: Add feature
def456 HEAD@{1}: reset: moving to HEAD~1
ghi789 HEAD@{2}: commit: Old commit (still recoverable!)</code></pre><h3>Time-Based Access</h3><pre><code>git diff HEAD@{yesterday}    # Changes since yesterday
git checkout main@{2.days.ago}</code></pre><h3>Retention</h3><p>Reflog entries expire after 90 days (30 for unreachable commits). Before that, almost nothing is truly lost in Git!</p>`,
              challenge: {
                description: 'Write the command to view the reflog (HEAD movement history).',
                starterCode: '# View reflog\n',
                expectedOutput: 'git reflog',
                hints: ['Simple command', 'Shows all HEAD movements', 'git reflog']
              },
              quiz: [
                {
                  question: 'Reflog records?',
                  options: ['Remote changes', 'Every HEAD movement (commits, resets, rebases)', 'Only pushes', 'File changes'],
                  correct: 1
                },
                {
                  question: 'Can you recover from git reset --hard using reflog?',
                  options: ['No, it is permanent', 'Yes, within retention period', 'Only with backup', 'Only on remote'],
                  correct: 1
                },
                {
                  question: 'Default reflog retention?',
                  options: ['Forever', '90 days (30 for unreachable)', '7 days', '1 year'],
                  correct: 1
                },
                {
                  question: 'HEAD@{2} refers to?',
                  options: ['2nd commit ever', 'Where HEAD was 2 movements ago', '2nd branch', '2 days ago'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'git-project-workflow',
          title: 'Git Project Workflow PROJECT',
          lessons: [
            {
              id: 'project_setup',
              title: 'Project Setup & First PR',
              type: 'project',
              theory: `<h2>Project: Complete Git Workflow</h2><p>Let's walk through a real project workflow from initialization to pull request.</p><h3>The Full Workflow</h3><pre><code># 1. Initialize
git init
git add .
git commit -m "Initial commit"

# 2. Connect to remote
git remote add origin https://github.com/user/project.git
git push -u origin main

# 3. Create feature branch
git checkout -b feature/user-auth

# 4. Make changes, commit
git add src/auth.js
git commit -m "Add JWT authentication"
git add src/auth.test.js
git commit -m "Add auth unit tests"

# 5. Push feature branch
git push -u origin feature/user-auth

# 6. Create PR, get review, merge

# 7. Clean up
git checkout main
git pull
git branch -d feature/user-auth</code></pre><p>This is the workflow used daily by professional developers worldwide.</p>`,
              challenge: {
                description: 'Write the sequence: init, add all, commit "Initial commit", add remote origin (https://github.com/user/project.git), push with upstream tracking.',
                starterCode: '# Full project setup\n',
                expectedOutput: 'git init\ngit add .\ngit commit -m "Initial commit"\ngit remote add origin https://github.com/user/project.git\ngit push -u origin main',
                hints: ['5 commands in sequence', 'init → add → commit → remote → push', 'Each on its own line']
              },
              quiz: [
                {
                  question: 'First commit message is typically?',
                  options: ['"First"', '"Initial commit"', '"Start"', '"Begin project"'],
                  correct: 1
                },
                {
                  question: 'After PR is merged, local cleanup involves?',
                  options: ['Delete repo', 'Switch to main, pull, delete feature branch', 'Nothing', 'Push again'],
                  correct: 1
                },
                {
                  question: 'How many steps in a typical feature workflow?',
                  options: ['2', '3-4', '5-7', '10+'],
                  correct: 2
                },
                {
                  question: 'This workflow is used by?',
                  options: ['Only beginners', 'Professional developers daily', 'Only open source', 'Only large companies'],
                  correct: 1
                }
              ]
            },
            {
              id: 'project_collaboration',
              title: 'Handling Team Scenarios',
              type: 'project',
              theory: `<h2>Project: Team Scenarios</h2><h3>Scenario: Conflict During PR</h3><pre><code>git checkout feature/my-work
git fetch origin
git rebase origin/main
# Fix conflicts in each file
git add .
git rebase --continue
git push --force-with-lease</code></pre><h3>Scenario: Urgent Hotfix</h3><pre><code># Stash current work
git stash
git checkout main
git pull
git checkout -b hotfix/critical-bug
# Fix bug...
git commit -m "Fix critical security vulnerability"
git push -u origin hotfix/critical-bug
# Create PR, merge immediately
git checkout main
git pull
git checkout feature/my-work
git stash pop
git rebase main</code></pre><h3>Scenario: Wrong Branch Commit</h3><pre><code># Committed to main instead of feature
git checkout -b feature/oops    # Create branch at current spot
git checkout main
git reset --hard HEAD~1         # Remove commit from main
</code></pre>`,
              challenge: {
                description: 'Write the commands to stash work, switch to main, pull latest, then return and pop stash.',
                starterCode: '# Handle interruption\n',
                expectedOutput: 'git stash\ngit checkout main\ngit pull\ngit checkout -\ngit stash pop',
                hints: ['Stash → switch → pull → switch back → pop', 'git checkout - returns to previous branch', '5 commands']
              },
              quiz: [
                {
                  question: 'Best way to handle PR conflicts?',
                  options: ['Delete branch', 'Rebase on latest main, resolve, force-with-lease push', 'Merge main in', 'Recreate PR'],
                  correct: 1
                },
                {
                  question: 'Committed to wrong branch — fix?',
                  options: ['Delete commit', 'Create branch at commit, reset original', 'Nothing you can do', 'Push anyway'],
                  correct: 1
                },
                {
                  question: 'For urgent hotfix, first step is?',
                  options: ['Commit everything', 'Stash work, switch to main', 'Push immediately', 'Create PR'],
                  correct: 1
                },
                {
                  question: 'git checkout - is shortcut for?',
                  options: ['git checkout main', 'Switch to previous branch', 'Undo changes', 'Delete branch'],
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
