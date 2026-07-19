const course = {
  id: 'docker',
  title: 'Learn Docker',
  icon: '🐳',
  description: 'Master containerization with Docker. Build, ship, and run applications anywhere with containers, images, volumes, and Docker Compose.',
  totalLessons: 30,
  sections: [
    {
      id: 'docker-essentials',
      title: 'Docker Essentials',
      description: 'Everything you need to containerize applications — from images to multi-container orchestration',
      totalLessons: 30,
      totalChallenges: 30,
      totalQuizQuestions: 120,
      projects: 4,
      chapters: [
        {
          id: 'introduction',
          title: 'Introduction',
          lessons: [
            {
              id: 'what_is_docker',
              title: 'What is Docker?',
              type: 'challenge',
              theory: `<h2>What is Docker?</h2><p><strong>Docker</strong> is a platform for developing, shipping, and running applications in <strong>containers</strong>. A container packages your app with everything it needs (code, runtime, libraries, settings) so it runs identically everywhere.</p><h3>The Problem Docker Solves</h3><p>"It works on my machine!" — Docker eliminates environment differences between development, testing, and production. If it runs in a Docker container locally, it will run the same way in production.</p><h3>Containers vs Virtual Machines</h3><ul><li><strong>VMs:</strong> Full OS per instance, heavy (GBs), slow to start (minutes)</li><li><strong>Containers:</strong> Share host OS kernel, lightweight (MBs), instant start (seconds)</li></ul><h3>Key Concepts</h3><ul><li><strong>Image:</strong> A blueprint/template (read-only). Like a class in OOP.</li><li><strong>Container:</strong> A running instance of an image. Like an object from a class.</li><li><strong>Registry:</strong> Storage for images (Docker Hub, ECR, GCR)</li><li><strong>Dockerfile:</strong> Instructions to build an image</li></ul><h3>Docker Architecture</h3><p>Docker uses a client-server architecture: the Docker CLI (client) talks to the Docker daemon (server) which manages containers, images, networks, and volumes.</p>`,
              challenge: {
                description: 'Write the command to check the installed Docker version.',
                starterCode: '# Check Docker version\n',
                expectedOutput: 'docker --version',
                hints: ['Similar to git --version', 'docker --version', 'Shows Docker version info']
              },
              quiz: [
                {
                  question: 'What problem does Docker solve?',
                  options: ['Slow internet', 'Environment inconsistency between machines', 'Code compilation', 'Database design'],
                  correct: 1
                },
                {
                  question: 'Containers vs VMs — containers are?',
                  options: ['Heavier', 'Lighter, share host OS kernel', 'Slower to start', 'More isolated'],
                  correct: 1
                },
                {
                  question: 'A Docker image is like?',
                  options: ['A running process', 'A blueprint/template', 'A virtual machine', 'A config file'],
                  correct: 1
                },
                {
                  question: 'What is Docker Hub?',
                  options: ['IDE for Docker', 'Public registry for Docker images', 'Docker documentation', 'Container orchestrator'],
                  correct: 1
                }
              ]
            },
            {
              id: 'docker_architecture',
              title: 'Docker Architecture',
              type: 'challenge',
              theory: `<h2>Docker Architecture</h2><h3>Components</h3><ul><li><strong>Docker Client:</strong> CLI tool you interact with (docker commands)</li><li><strong>Docker Daemon (dockerd):</strong> Background service managing containers</li><li><strong>Docker Registry:</strong> Stores images (Docker Hub is the default public one)</li></ul><h3>How It Works</h3><pre><code># You type:
docker run nginx

# What happens:
# 1. Client sends request to daemon
# 2. Daemon checks for nginx image locally
# 3. If not found, pulls from Docker Hub
# 4. Daemon creates container from image
# 5. Container starts running</code></pre><h3>Image Layers</h3><p>Images are built in layers. Each instruction in a Dockerfile creates a layer. Layers are cached and shared between images — saving space and build time.</p><pre><code>Layer 4: Your app code
Layer 3: npm install (dependencies)
Layer 2: Node.js runtime
Layer 1: Ubuntu base OS</code></pre><h3>Container Lifecycle</h3><pre><code>Created → Running → Paused → Stopped → Removed</code></pre>`,
              challenge: {
                description: 'Write the command to display system-wide Docker information (daemon details).',
                starterCode: '# Show Docker system info\n',
                expectedOutput: 'docker info',
                hints: ['Shows daemon information', 'docker info', 'Displays containers, images, storage details']
              },
              quiz: [
                {
                  question: 'Docker daemon is?',
                  options: ['CLI tool', 'Background service managing containers', 'A container type', 'Web interface'],
                  correct: 1
                },
                {
                  question: 'Image layers are?',
                  options: ['Always rebuilt', 'Cached and shared between images', 'Only for base images', 'Optional'],
                  correct: 1
                },
                {
                  question: 'If image not found locally, Docker?',
                  options: ['Errors', 'Pulls from registry', 'Creates empty container', 'Asks user'],
                  correct: 1
                },
                {
                  question: 'Container lifecycle starts with?',
                  options: ['Running', 'Created', 'Pulled', 'Built'],
                  correct: 1
                }
              ]
            },
            {
              id: 'docker_installation',
              title: 'Installation & First Container',
              type: 'challenge',
              theory: `<h2>Installation & First Container</h2><h3>Installing Docker</h3><ul><li><strong>Mac/Windows:</strong> Docker Desktop (includes everything)</li><li><strong>Linux:</strong> Docker Engine via package manager</li></ul><h3>Verifying Installation</h3><pre><code>docker --version
docker run hello-world</code></pre><p>The hello-world container confirms Docker is working correctly.</p><h3>Your First Real Container</h3><pre><code># Run nginx web server
docker run -d -p 8080:80 nginx

# -d: detached (background)
# -p 8080:80: map port 8080 on host to 80 in container</code></pre><p>Visit http://localhost:8080 — you're running a web server in a container!</p><h3>Basic Workflow</h3><pre><code>docker pull image       # Download image
docker run image        # Create and start container
docker ps               # List running containers
docker stop container   # Stop container
docker rm container     # Remove container</code></pre>`,
              challenge: {
                description: 'Write the command to run the "hello-world" container.',
                starterCode: '# Run hello-world container\n',
                expectedOutput: 'docker run hello-world',
                hints: ['docker run starts a container', 'Image name is hello-world', 'docker run hello-world']
              },
              quiz: [
                {
                  question: 'docker run does?',
                  options: ['Downloads image only', 'Creates and starts a container', 'Lists containers', 'Builds an image'],
                  correct: 1
                },
                {
                  question: '-d flag means?',
                  options: ['Delete', 'Detached (background)', 'Debug', 'Download'],
                  correct: 1
                },
                {
                  question: '-p 8080:80 maps?',
                  options: ['Container 8080 to host 80', 'Host 8080 to container 80', 'Both ports to 8080', 'Nothing'],
                  correct: 1
                },
                {
                  question: 'docker ps shows?',
                  options: ['All images', 'Running containers', 'Processes', 'Ports'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'images-containers',
          title: 'Images & Containers',
          lessons: [
            {
              id: 'managing_images',
              title: 'Managing Images',
              type: 'challenge',
              theory: `<h2>Managing Images</h2><h3>Pulling Images</h3><pre><code>docker pull nginx           # Latest tag
docker pull nginx:1.25      # Specific version
docker pull node:18-alpine  # Variant (alpine = minimal)</code></pre><h3>Listing Images</h3><pre><code>docker images              # List all local images
docker image ls            # Same thing</code></pre><h3>Image Tags</h3><p>Tags identify versions: <code>image:tag</code></p><pre><code>node:latest     # Latest (default, avoid in production)
node:18         # Major version
node:18.17.1    # Exact version (best for production)
node:18-alpine  # Alpine variant (smaller)</code></pre><h3>Removing Images</h3><pre><code>docker rmi nginx           # Remove image
docker image prune         # Remove unused images
docker image prune -a      # Remove ALL unused images</code></pre><h3>Image Size</h3><pre><code>docker images --format "{{.Repository}}:{{.Tag}} {{.Size}}"
# node:18         900MB
# node:18-alpine  170MB  (much smaller!)</code></pre>`,
              challenge: {
                description: 'Write the command to pull the Node.js 18 Alpine image.',
                starterCode: '# Pull Node 18 Alpine\n',
                expectedOutput: 'docker pull node:18-alpine',
                hints: ['docker pull image:tag', 'Alpine is the lightweight variant', 'docker pull node:18-alpine']
              },
              quiz: [
                {
                  question: 'Why use Alpine variants?',
                  options: ['Faster apps', 'Much smaller image size', 'More packages', 'Better security always'],
                  correct: 1
                },
                {
                  question: 'What tag should you use in production?',
                  options: ['latest', 'Specific version (e.g., 18.17.1)', 'alpine always', 'No tag'],
                  correct: 1
                },
                {
                  question: 'docker rmi does?',
                  options: ['Removes container', 'Removes image', 'Removes volume', 'Removes network'],
                  correct: 1
                },
                {
                  question: 'docker image prune -a removes?',
                  options: ['Running containers', 'All unused images', 'All images', 'Dangling only'],
                  correct: 1
                }
              ]
            },
            {
              id: 'running_containers',
              title: 'Running Containers',
              type: 'challenge',
              theory: `<h2>Running Containers</h2><h3>Run Options</h3><pre><code>docker run [OPTIONS] IMAGE [COMMAND]

docker run -d nginx                    # Detached
docker run -it ubuntu bash             # Interactive terminal
docker run --name my-app nginx         # Named container
docker run --rm nginx                  # Auto-remove on stop
docker run -p 3000:3000 node-app       # Port mapping
docker run -e NODE_ENV=production app  # Environment variable</code></pre><h3>Common Flags</h3><ul><li><code>-d</code> — Detached (background)</li><li><code>-it</code> — Interactive + TTY (terminal access)</li><li><code>--name</code> — Give container a name</li><li><code>--rm</code> — Remove when stopped</li><li><code>-p host:container</code> — Port mapping</li><li><code>-e KEY=VALUE</code> — Environment variable</li><li><code>-v host:container</code> — Volume mount</li></ul><h3>Executing in Running Containers</h3><pre><code>docker exec -it my-container bash     # Open shell
docker exec my-container ls /app      # Run command</code></pre>`,
              challenge: {
                description: 'Write the command to run nginx in detached mode with name "web" mapping port 8080 to 80.',
                starterCode: '# Run named nginx container\n',
                expectedOutput: 'docker run -d --name web -p 8080:80 nginx',
                hints: ['-d for detached', '--name web for the name', '-p 8080:80 for port mapping']
              },
              quiz: [
                {
                  question: '-it flags together give?',
                  options: ['Italian mode', 'Interactive terminal access', 'Image tag', 'Install tool'],
                  correct: 1
                },
                {
                  question: '--rm flag does?',
                  options: ['Removes image', 'Auto-removes container when it stops', 'Removes volumes', 'Forces removal'],
                  correct: 1
                },
                {
                  question: 'docker exec is for?',
                  options: ['Starting containers', 'Running commands in running container', 'Building images', 'Stopping containers'],
                  correct: 1
                },
                {
                  question: '-e KEY=VALUE sets?',
                  options: ['Port', 'Environment variable inside container', 'Volume', 'Network'],
                  correct: 1
                }
              ]
            },
            {
              id: 'container_lifecycle',
              title: 'Container Lifecycle',
              type: 'challenge',
              theory: `<h2>Container Lifecycle</h2><h3>Listing Containers</h3><pre><code>docker ps                  # Running only
docker ps -a               # All (including stopped)</code></pre><h3>Stopping & Starting</h3><pre><code>docker stop my-container       # Graceful stop (SIGTERM)
docker kill my-container       # Force stop (SIGKILL)
docker start my-container      # Start stopped container
docker restart my-container    # Stop + Start</code></pre><h3>Removing Containers</h3><pre><code>docker rm my-container         # Remove stopped container
docker rm -f my-container      # Force remove (even if running)
docker container prune         # Remove all stopped containers</code></pre><h3>Logs & Inspection</h3><pre><code>docker logs my-container       # View logs
docker logs -f my-container    # Follow logs (live)
docker inspect my-container    # Full details (JSON)
docker stats                   # Live resource usage</code></pre><h3>Copying Files</h3><pre><code>docker cp my-container:/app/log.txt ./log.txt   # From container
docker cp ./config.json my-container:/app/       # To container</code></pre>`,
              challenge: {
                description: 'Write the command to view live (following) logs of a container named "web".',
                starterCode: '# Follow container logs\n',
                expectedOutput: 'docker logs -f web',
                hints: ['-f means follow (like tail -f)', 'docker logs -f container-name', 'docker logs -f web']
              },
              quiz: [
                {
                  question: 'docker ps -a shows?',
                  options: ['All images', 'All containers including stopped', 'Active ports', 'All networks'],
                  correct: 1
                },
                {
                  question: 'docker stop vs docker kill?',
                  options: ['Same', 'stop is graceful (SIGTERM), kill is force (SIGKILL)', 'kill is graceful', 'stop removes container'],
                  correct: 1
                },
                {
                  question: 'docker container prune removes?',
                  options: ['Running containers', 'All stopped containers', 'Images', 'Everything'],
                  correct: 1
                },
                {
                  question: 'docker inspect returns?',
                  options: ['Logs', 'Full container details as JSON', 'Resource usage', 'Image layers'],
                  correct: 1
                }
              ]
            },
            {
              id: 'container_networking',
              title: 'Container Networking Basics',
              type: 'challenge',
              theory: `<h2>Container Networking Basics</h2><h3>Port Mapping</h3><pre><code>docker run -p 8080:80 nginx        # Host 8080 → Container 80
docker run -p 127.0.0.1:8080:80 nginx  # Only localhost
docker run -P nginx                 # Random high port → exposed ports</code></pre><h3>Exposing Multiple Ports</h3><pre><code>docker run -p 3000:3000 -p 3001:3001 my-app</code></pre><h3>Container Communication</h3><p>Containers on the same network can talk to each other by container name:</p><pre><code>docker network create my-net
docker run -d --name db --network my-net postgres
docker run -d --name app --network my-net my-app
# Inside 'app', connect to db using hostname "db"</code></pre><h3>Network Types</h3><ul><li><code>bridge</code> — Default. Containers can communicate via IP.</li><li><code>host</code> — Container uses host networking directly</li><li><code>none</code> — No networking</li></ul>`,
              challenge: {
                description: 'Write the command to create a Docker network named "app-network".',
                starterCode: '# Create a network\n',
                expectedOutput: 'docker network create app-network',
                hints: ['docker network create name', 'Network name: app-network', 'docker network create app-network']
              },
              quiz: [
                {
                  question: '-p 3000:80 means?',
                  options: ['Container 3000, host 80', 'Host 3000, container 80', '3000 containers on port 80', 'Publish port 3000'],
                  correct: 1
                },
                {
                  question: 'Containers on same network communicate by?',
                  options: ['IP only', 'Container name as hostname', 'Port numbers only', 'Cannot communicate'],
                  correct: 1
                },
                {
                  question: 'Default network type?',
                  options: ['host', 'bridge', 'none', 'overlay'],
                  correct: 1
                },
                {
                  question: 'host network mode means?',
                  options: ['Default mode', 'Container shares host networking directly', 'Host cannot access container', 'No network'],
                  correct: 1
                }
              ]
            },
            {
              id: 'environment_variables',
              title: 'Environment Variables',
              type: 'challenge',
              theory: `<h2>Environment Variables</h2><p>Environment variables configure containers without modifying images — the 12-factor app approach.</p><h3>Setting Variables</h3><pre><code># Single variable
docker run -e DATABASE_URL=postgres://db:5432/mydb my-app

# Multiple variables
docker run -e NODE_ENV=production -e PORT=3000 my-app

# From a file
docker run --env-file .env my-app</code></pre><h3>.env File Format</h3><pre><code>DATABASE_URL=postgres://localhost:5432/mydb
REDIS_URL=redis://localhost:6379
SECRET_KEY=my-secret-key-123
NODE_ENV=production</code></pre><h3>In Dockerfile</h3><pre><code>ENV NODE_ENV=production
ENV PORT=3000</code></pre><p>Dockerfile ENV sets defaults. Runtime -e overrides them.</p><h3>Viewing Container Environment</h3><pre><code>docker exec my-container env        # All environment vars
docker inspect my-container | grep -A 20 "Env"</code></pre>`,
              challenge: {
                description: 'Write the command to run "my-app" image with environment variable NODE_ENV=production.',
                starterCode: '# Run with environment variable\n',
                expectedOutput: 'docker run -e NODE_ENV=production my-app',
                hints: ['-e sets environment variable', '-e KEY=VALUE', 'docker run -e NODE_ENV=production my-app']
              },
              quiz: [
                {
                  question: 'Why use environment variables in containers?',
                  options: ['Required by Docker', 'Configure without modifying image', 'Faster containers', 'Security only'],
                  correct: 1
                },
                {
                  question: '--env-file loads variables from?',
                  options: ['Docker Hub', 'A local .env file', 'Remote server', 'Dockerfile'],
                  correct: 1
                },
                {
                  question: 'Runtime -e vs Dockerfile ENV?',
                  options: ['Same priority', 'Runtime -e overrides Dockerfile ENV', 'Dockerfile wins', 'They conflict'],
                  correct: 1
                },
                {
                  question: 'What is the 12-factor app approach for config?',
                  options: ['Hardcode values', 'Store config in environment variables', 'Use config files', 'Compile-time settings'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'dockerfile',
          title: 'Dockerfile',
          lessons: [
            {
              id: 'dockerfile_basics',
              title: 'Dockerfile Basics',
              type: 'challenge',
              theory: `<h2>Dockerfile Basics</h2><p>A <strong>Dockerfile</strong> is a text file with instructions to build a Docker image. Each instruction creates a layer.</p><h3>Basic Structure</h3><pre><code>FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]</code></pre><h3>Key Instructions</h3><ul><li><code>FROM</code> — Base image (required first instruction)</li><li><code>WORKDIR</code> — Set working directory inside container</li><li><code>COPY</code> — Copy files from host to container</li><li><code>RUN</code> — Execute command during build</li><li><code>EXPOSE</code> — Document which port the app uses</li><li><code>CMD</code> — Default command when container starts</li></ul><h3>Building</h3><pre><code>docker build -t my-app .        # Build with tag
docker build -t my-app:v1.0 .   # With version tag
docker build -f Dockerfile.dev . # Custom filename</code></pre>`,
              challenge: {
                description: 'Write the docker build command to build an image tagged "my-app" from the current directory.',
                starterCode: '# Build Docker image\n',
                expectedOutput: 'docker build -t my-app .',
                hints: ['-t for tag/name', '. is the build context (current dir)', 'docker build -t my-app .']
              },
              quiz: [
                {
                  question: 'FROM instruction does?',
                  options: ['Copies files', 'Specifies base image', 'Sets working directory', 'Runs command'],
                  correct: 1
                },
                {
                  question: 'RUN vs CMD?',
                  options: ['Same', 'RUN executes at build time, CMD at container start', 'CMD at build time', 'RUN at start time'],
                  correct: 1
                },
                {
                  question: 'What does the . in docker build . mean?',
                  options: ['Current commit', 'Build context (current directory)', 'All files', 'Hidden files'],
                  correct: 1
                },
                {
                  question: 'EXPOSE does?',
                  options: ['Opens the port', 'Documents which port the app uses', 'Maps ports', 'Blocks ports'],
                  correct: 1
                }
              ]
            },
            {
              id: 'dockerfile_instructions',
              title: 'Dockerfile Instructions Deep Dive',
              type: 'challenge',
              theory: `<h2>Dockerfile Instructions Deep Dive</h2><h3>COPY vs ADD</h3><pre><code>COPY ./src /app/src          # Simple copy (preferred)
ADD archive.tar.gz /app/     # Auto-extracts archives
ADD https://url/file /app/   # Can download URLs</code></pre><p>Use COPY unless you need ADD's extra features.</p><h3>RUN (Build-time Commands)</h3><pre><code>RUN apt-get update && apt-get install -y curl
RUN npm install
RUN mkdir -p /app/logs</code></pre><h3>CMD vs ENTRYPOINT</h3><pre><code># CMD: Default command (can be overridden)
CMD ["node", "server.js"]

# ENTRYPOINT: Always runs (CMD becomes arguments)
ENTRYPOINT ["node"]
CMD ["server.js"]
# docker run my-app           → node server.js
# docker run my-app worker.js → node worker.js</code></pre><h3>ARG (Build Arguments)</h3><pre><code>ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine

docker build --build-arg NODE_VERSION=20 .</code></pre><h3>HEALTHCHECK</h3><pre><code>HEALTHCHECK --interval=30s --timeout=3s \\
  CMD curl -f http://localhost:3000/health || exit 1</code></pre>`,
              challenge: {
                description: 'Write a CMD instruction in exec form to run "node" with argument "app.js".',
                starterCode: '# CMD to run node app.js\n',
                expectedOutput: 'CMD ["node", "app.js"]',
                hints: ['Exec form uses JSON array', 'CMD ["executable", "arg"]', 'CMD ["node", "app.js"]']
              },
              quiz: [
                {
                  question: 'COPY vs ADD — when to use ADD?',
                  options: ['Always', 'Only when auto-extracting archives', 'For large files', 'Never'],
                  correct: 1
                },
                {
                  question: 'ENTRYPOINT + CMD together?',
                  options: ['Error', 'ENTRYPOINT is the executable, CMD provides default args', 'CMD overrides ENTRYPOINT', 'Same thing'],
                  correct: 1
                },
                {
                  question: 'ARG vs ENV?',
                  options: ['Same', 'ARG is build-time only, ENV persists in container', 'ENV is build-time only', 'ARG persists in container'],
                  correct: 1
                },
                {
                  question: 'HEALTHCHECK does?',
                  options: ['Checks Dockerfile syntax', 'Monitors container health at runtime', 'Tests during build', 'Validates ports'],
                  correct: 1
                }
              ]
            },
            {
              id: 'layer_caching',
              title: 'Layer Caching & Optimization',
              type: 'challenge',
              theory: `<h2>Layer Caching & Optimization</h2><h3>How Caching Works</h3><p>Each instruction creates a layer. If an instruction hasn't changed, Docker reuses the cached layer. But if one layer changes, all subsequent layers are rebuilt.</p><h3>Bad: Slow Builds</h3><pre><code>FROM node:18-alpine
WORKDIR /app
COPY . .                    # ANY file change invalidates cache
RUN npm install             # Reinstalls every time!</code></pre><h3>Good: Fast Builds</h3><pre><code>FROM node:18-alpine
WORKDIR /app
COPY package*.json ./       # Only changes if deps change
RUN npm install             # Cached unless package.json changed
COPY . .                    # App code (changes frequently)</code></pre><h3>Optimization Tips</h3><ul><li>Put rarely-changing instructions first</li><li>Copy dependency files before source code</li><li>Combine RUN commands to reduce layers</li><li>Use .dockerignore to exclude unnecessary files</li></ul><h3>.dockerignore</h3><pre><code>node_modules
.git
*.md
.env
dist</code></pre>`,
              challenge: {
                description: 'Write the correct order: COPY package*.json first, then RUN npm install, then COPY . . (for optimal caching).',
                starterCode: '# Optimal layer order for Node.js\n',
                expectedOutput: 'COPY package*.json ./\nRUN npm install\nCOPY . .',
                hints: ['Dependencies first (change rarely)', 'Install dependencies', 'Then copy app code (changes often)']
              },
              quiz: [
                {
                  question: 'Why copy package.json before source code?',
                  options: ['Alphabetical order', 'npm install cache is preserved when only code changes', 'Required by Docker', 'Smaller image'],
                  correct: 1
                },
                {
                  question: 'If layer 3 changes, what happens?',
                  options: ['Only layer 3 rebuilds', 'Layers 3 and all after rebuild', 'Everything rebuilds', 'Nothing changes'],
                  correct: 1
                },
                {
                  question: '.dockerignore is like?',
                  options: ['.gitignore for Docker builds', 'Dockerfile comments', 'Docker config', 'Container settings'],
                  correct: 0
                },
                {
                  question: 'Why combine RUN commands?',
                  options: ['Faster execution', 'Fewer layers = smaller image', 'Required', 'Better logs'],
                  correct: 1
                }
              ]
            },
            {
              id: 'multi_stage_builds',
              title: 'Multi-Stage Builds',
              type: 'challenge',
              theory: `<h2>Multi-Stage Builds</h2><p>Multi-stage builds use multiple FROM instructions. Build tools stay in early stages; only the final artifact goes to the production image.</p><h3>Problem: Large Images</h3><pre><code># Single stage: 1.2GB image with build tools!
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build   # Includes dev deps, TypeScript, etc.</code></pre><h3>Solution: Multi-Stage</h3><pre><code># Stage 1: Build
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production (only ~50MB!)
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]</code></pre><h3>Benefits</h3><ul><li>Final image contains only runtime needs</li><li>Build tools, source code, dev deps excluded</li><li>Dramatically smaller images (often 10x reduction)</li><li>Better security (less attack surface)</li></ul>`,
              challenge: {
                description: 'Write the COPY instruction that copies from the "builder" stage: COPY --from=builder /app/dist ./dist',
                starterCode: '# Copy build output from builder stage\n',
                expectedOutput: 'COPY --from=builder /app/dist ./dist',
                hints: ['--from=stage_name copies from another stage', 'builder is the stage name (AS builder)', 'COPY --from=builder /app/dist ./dist']
              },
              quiz: [
                {
                  question: 'Multi-stage builds reduce?',
                  options: ['Build time', 'Final image size dramatically', 'Layer count', 'Number of stages'],
                  correct: 1
                },
                {
                  question: '--from=builder refers to?',
                  options: ['Docker Hub', 'A named build stage', 'A volume', 'A network'],
                  correct: 1
                },
                {
                  question: 'What stays in early stages?',
                  options: ['Final app', 'Build tools, dev deps, source', 'Nothing', 'Production config'],
                  correct: 1
                },
                {
                  question: 'AS keyword in FROM does?',
                  options: ['Creates alias for image', 'Names the build stage for later reference', 'Sets architecture', 'Assigns user'],
                  correct: 1
                }
              ]
            },
            {
              id: 'building_best_practices',
              title: 'Building Best Practices',
              type: 'challenge',
              theory: `<h2>Building Best Practices</h2><h3>Use Specific Base Tags</h3><pre><code># Bad
FROM node:latest
# Good
FROM node:18.17.1-alpine</code></pre><h3>Non-Root User</h3><pre><code>RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser</code></pre><h3>Minimize Layers</h3><pre><code># Bad: 3 layers
RUN apt-get update
RUN apt-get install -y curl
RUN rm -rf /var/lib/apt/lists/*

# Good: 1 layer
RUN apt-get update && \\
    apt-get install -y curl && \\
    rm -rf /var/lib/apt/lists/*</code></pre><h3>Security Scanning</h3><pre><code>docker scout cves my-image     # Scan for vulnerabilities</code></pre><h3>Labels (Metadata)</h3><pre><code>LABEL maintainer="team@company.com"
LABEL version="1.0"
LABEL description="Production API server"</code></pre>`,
              challenge: {
                description: 'Write the USER instruction to switch to a non-root user called "appuser".',
                starterCode: '# Switch to non-root user\n',
                expectedOutput: 'USER appuser',
                hints: ['USER instruction changes the running user', 'USER username', 'USER appuser']
              },
              quiz: [
                {
                  question: 'Why avoid FROM node:latest?',
                  options: ['Slower', 'Unpredictable — version can change unexpectedly', 'Larger', 'Deprecated'],
                  correct: 1
                },
                {
                  question: 'Why use non-root USER?',
                  options: ['Faster', 'Security — limits damage if container is compromised', 'Required by Docker', 'Smaller image'],
                  correct: 1
                },
                {
                  question: 'Why clean up in same RUN as install?',
                  options: ['Cleaner code', 'Removal is in same layer so space is actually freed', 'Required', 'Faster builds'],
                  correct: 1
                },
                {
                  question: 'LABEL instruction provides?',
                  options: ['Container name', 'Image metadata (maintainer, version, etc.)', 'Port labels', 'Volume names'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'volumes-networks',
          title: 'Volumes & Networks',
          lessons: [
            {
              id: 'docker_volumes',
              title: 'Docker Volumes',
              type: 'challenge',
              theory: `<h2>Docker Volumes</h2><p>Containers are ephemeral — data is lost when removed. <strong>Volumes</strong> persist data beyond container lifecycle.</p><h3>Volume Types</h3><ul><li><strong>Named volumes:</strong> Docker-managed, best for persistent data</li><li><strong>Bind mounts:</strong> Map host directory to container</li><li><strong>tmpfs:</strong> In-memory only (Linux)</li></ul><h3>Named Volumes</h3><pre><code>docker volume create my-data
docker run -v my-data:/app/data my-app
docker volume ls
docker volume inspect my-data
docker volume rm my-data</code></pre><h3>Bind Mounts</h3><pre><code># Mount current directory into container
docker run -v $(pwd):/app my-app
docker run -v /host/path:/container/path my-app</code></pre><h3>In Dockerfile</h3><pre><code>VOLUME ["/app/data"]   # Declares mount point</code></pre><h3>Use Cases</h3><ul><li><strong>Database:</strong> Persist database files</li><li><strong>Dev:</strong> Bind mount source code for hot-reload</li><li><strong>Logs:</strong> Persist application logs</li><li><strong>Config:</strong> Share config between containers</li></ul>`,
              challenge: {
                description: 'Write the command to create a Docker volume named "db-data".',
                starterCode: '# Create a volume\n',
                expectedOutput: 'docker volume create db-data',
                hints: ['docker volume create name', 'Volume name: db-data', 'docker volume create db-data']
              },
              quiz: [
                {
                  question: 'Why use volumes?',
                  options: ['Faster containers', 'Persist data beyond container lifecycle', 'Smaller images', 'Required by Docker'],
                  correct: 1
                },
                {
                  question: 'Named volume vs bind mount?',
                  options: ['Same', 'Named is Docker-managed, bind mount maps host path', 'Bind mount is Docker-managed', 'Named maps host path'],
                  correct: 1
                },
                {
                  question: '-v mydata:/app/data uses?',
                  options: ['Bind mount', 'Named volume', 'tmpfs', 'Network volume'],
                  correct: 1
                },
                {
                  question: 'Bind mounts are great for?',
                  options: ['Production databases', 'Development with hot-reload', 'Security', 'Networking'],
                  correct: 1
                }
              ]
            },
            {
              id: 'docker_networks',
              title: 'Docker Networks',
              type: 'challenge',
              theory: `<h2>Docker Networks</h2><h3>Network Management</h3><pre><code>docker network create my-net
docker network ls
docker network inspect my-net
docker network rm my-net</code></pre><h3>Connecting Containers</h3><pre><code># Create network
docker network create app-net

# Run containers on same network
docker run -d --name postgres --network app-net postgres
docker run -d --name api --network app-net my-api

# api can reach postgres by name:
# DATABASE_URL=postgres://postgres:5432/mydb</code></pre><h3>Network Drivers</h3><ul><li><code>bridge</code> — Default for single host (isolated)</li><li><code>host</code> — Remove network isolation</li><li><code>overlay</code> — Multi-host (Docker Swarm)</li><li><code>none</code> — Disable networking</li></ul><h3>Connect/Disconnect</h3><pre><code>docker network connect my-net my-container
docker network disconnect my-net my-container</code></pre>`,
              challenge: {
                description: 'Write the command to run a "postgres" container on network "app-net" with name "db".',
                starterCode: '# Run postgres on app-net\n',
                expectedOutput: 'docker run -d --name db --network app-net postgres',
                hints: ['--network specifies the network', '--name gives container a name', '-d for detached']
              },
              quiz: [
                {
                  question: 'Containers on same network can use what as hostname?',
                  options: ['IP addresses only', 'Container names', 'Random ports', 'Network name'],
                  correct: 1
                },
                {
                  question: 'Default network driver?',
                  options: ['host', 'bridge', 'overlay', 'none'],
                  correct: 1
                },
                {
                  question: 'Overlay network is for?',
                  options: ['Single host', 'Multi-host communication (Swarm)', 'No network', 'Testing'],
                  correct: 1
                },
                {
                  question: 'Can a container be on multiple networks?',
                  options: ['No', 'Yes', 'Only 2', 'Only with docker-compose'],
                  correct: 1
                }
              ]
            },
            {
              id: 'data_management',
              title: 'Data Management Patterns',
              type: 'challenge',
              theory: `<h2>Data Management Patterns</h2><h3>Database Persistence</h3><pre><code>docker run -d --name postgres \\
  -v pgdata:/var/lib/postgresql/data \\
  -e POSTGRES_PASSWORD=secret \\
  postgres:15</code></pre><h3>Backup & Restore</h3><pre><code># Backup volume
docker run --rm -v pgdata:/data -v $(pwd):/backup alpine \\
  tar czf /backup/pgdata-backup.tar.gz /data

# Restore
docker run --rm -v pgdata:/data -v $(pwd):/backup alpine \\
  tar xzf /backup/pgdata-backup.tar.gz -C /</code></pre><h3>Sharing Data Between Containers</h3><pre><code># Shared volume
docker run -d --name writer -v shared:/data writer-app
docker run -d --name reader -v shared:/data:ro reader-app  # :ro = read-only</code></pre><h3>Development with Bind Mounts</h3><pre><code>docker run -d -v $(pwd)/src:/app/src -p 3000:3000 my-app
# Changes to ./src reflect immediately in container</code></pre>`,
              challenge: {
                description: 'Write a docker run command for postgres with volume "pgdata" mounted to /var/lib/postgresql/data.',
                starterCode: '# Run postgres with persistent volume\n',
                expectedOutput: 'docker run -d --name postgres -v pgdata:/var/lib/postgresql/data postgres',
                hints: ['-v volume:path for mounting', 'PostgreSQL data path: /var/lib/postgresql/data', 'docker run -d --name postgres -v pgdata:/var/lib/postgresql/data postgres']
              },
              quiz: [
                {
                  question: ':ro in volume mount means?',
                  options: ['Read-only', 'Reorder', 'Root only', 'Remote origin'],
                  correct: 0
                },
                {
                  question: 'How to backup a Docker volume?',
                  options: ['docker backup', 'Mount volume in temporary container, tar it', 'Copy .git folder', 'docker volume export'],
                  correct: 1
                },
                {
                  question: 'Bind mount for development allows?',
                  options: ['Faster builds', 'Code changes without rebuilding container', 'Better security', 'Smaller images'],
                  correct: 1
                },
                {
                  question: 'Without volumes, what happens to database data when container is removed?',
                  options: ['Saved automatically', 'Lost permanently', 'Backed up to host', 'Moved to image'],
                  correct: 1
                }
              ]
            },
            {
              id: 'security_basics',
              title: 'Container Security',
              type: 'challenge',
              theory: `<h2>Container Security</h2><h3>Non-Root Users</h3><pre><code>FROM node:18-alpine
RUN addgroup -S app && adduser -S app -G app
WORKDIR /app
COPY --chown=app:app . .
USER app
CMD ["node", "server.js"]</code></pre><h3>Read-Only Filesystem</h3><pre><code>docker run --read-only --tmpfs /tmp my-app</code></pre><h3>Resource Limits</h3><pre><code>docker run --memory=512m --cpus=1.0 my-app</code></pre><h3>Secrets Management</h3><pre><code># Never put secrets in images!
# Bad: ENV API_KEY=sk-12345 (visible in image history)
# Good: Use runtime env or secrets management
docker run -e API_KEY=$API_KEY my-app</code></pre><h3>Security Checklist</h3><ul><li>Use minimal base images (Alpine)</li><li>Run as non-root</li><li>Scan for vulnerabilities regularly</li><li>Don't store secrets in images</li><li>Keep images updated</li><li>Use read-only filesystem when possible</li></ul>`,
              challenge: {
                description: 'Write the docker run command with memory limited to 256m and cpus limited to 0.5.',
                starterCode: '# Run with resource limits\n',
                expectedOutput: 'docker run --memory=256m --cpus=0.5 my-app',
                hints: ['--memory for RAM limit', '--cpus for CPU limit', 'docker run --memory=256m --cpus=0.5 my-app']
              },
              quiz: [
                {
                  question: 'Why run as non-root in containers?',
                  options: ['Performance', 'Limits damage if container is compromised', 'Required', 'Saves memory'],
                  correct: 1
                },
                {
                  question: 'Where should secrets go?',
                  options: ['In Dockerfile', 'Runtime env vars or secrets manager', 'In image layers', 'In comments'],
                  correct: 1
                },
                {
                  question: '--read-only does?',
                  options: ['Prevents reading', 'Makes container filesystem read-only', 'Read-only volume', 'Prevents logging'],
                  correct: 1
                },
                {
                  question: 'Why use Alpine base images?',
                  options: ['Prettier output', 'Smaller = less attack surface', 'Faster networking', 'Better logging'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'docker-compose',
          title: 'Docker Compose',
          lessons: [
            {
              id: 'compose_basics',
              title: 'Compose Basics',
              type: 'challenge',
              theory: `<h2>Docker Compose Basics</h2><p>Docker Compose defines multi-container applications in a YAML file. One command starts everything.</p><h3>docker-compose.yml</h3><pre><code>version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
  
  db:
    image: postgres:15
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=secret

volumes:
  pgdata:</code></pre><h3>Commands</h3><pre><code>docker compose up              # Start all services
docker compose up -d           # Detached
docker compose down            # Stop and remove
docker compose ps              # List services
docker compose logs            # View all logs
docker compose build           # Rebuild images</code></pre>`,
              challenge: {
                description: 'Write the command to start all services defined in docker-compose.yml in detached mode.',
                starterCode: '# Start compose services in background\n',
                expectedOutput: 'docker compose up -d',
                hints: ['docker compose up starts services', '-d for detached/background', 'docker compose up -d']
              },
              quiz: [
                {
                  question: 'Docker Compose is for?',
                  options: ['Single containers', 'Multi-container applications', 'Image building only', 'Deployment only'],
                  correct: 1
                },
                {
                  question: 'docker compose down does?',
                  options: ['Pauses services', 'Stops and removes containers, networks', 'Deletes volumes', 'Removes images'],
                  correct: 1
                },
                {
                  question: 'Compose file format?',
                  options: ['JSON', 'YAML', 'TOML', 'XML'],
                  correct: 1
                },
                {
                  question: 'services: section defines?',
                  options: ['Volumes', 'Container configurations', 'Networks only', 'Build steps'],
                  correct: 1
                }
              ]
            },
            {
              id: 'compose_services',
              title: 'Compose Services Configuration',
              type: 'challenge',
              theory: `<h2>Compose Services Configuration</h2><h3>Build from Dockerfile</h3><pre><code>services:
  api:
    build:
      context: ./api
      dockerfile: Dockerfile
    ports:
      - "3000:3000"</code></pre><h3>Use Existing Image</h3><pre><code>services:
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"</code></pre><h3>Dependencies</h3><pre><code>services:
  api:
    depends_on:
      - db
      - redis
  db:
    image: postgres:15
  redis:
    image: redis:7</code></pre><h3>Health Checks</h3><pre><code>services:
  db:
    image: postgres:15
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 10s
      timeout: 5s
      retries: 5</code></pre><h3>Restart Policies</h3><pre><code>services:
  web:
    restart: unless-stopped   # always, on-failure, no</code></pre>`,
              challenge: {
                description: 'Write the depends_on configuration for an "api" service that depends on "db" (in YAML format).',
                starterCode: '# Service dependency\n',
                expectedOutput: 'depends_on:\n  - db',
                hints: ['depends_on takes a list', 'List items with - prefix', 'depends_on:\\n  - db']
              },
              quiz: [
                {
                  question: 'depends_on ensures?',
                  options: ['Service is healthy', 'Service starts before dependent', 'Port is available', 'Data is ready'],
                  correct: 1
                },
                {
                  question: 'build: context specifies?',
                  options: ['Image name', 'Directory with Dockerfile', 'Port number', 'Network name'],
                  correct: 1
                },
                {
                  question: 'restart: unless-stopped means?',
                  options: ['Never restart', 'Always restart unless manually stopped', 'Restart once', 'Restart on error only'],
                  correct: 1
                },
                {
                  question: 'healthcheck verifies?',
                  options: ['Image exists', 'Service is actually ready/healthy', 'Port is open', 'CPU usage'],
                  correct: 1
                }
              ]
            },
            {
              id: 'compose_volumes_networks',
              title: 'Compose Volumes & Networks',
              type: 'challenge',
              theory: `<h2>Compose Volumes & Networks</h2><h3>Volumes in Compose</h3><pre><code>services:
  db:
    image: postgres:15
    volumes:
      - pgdata:/var/lib/postgresql/data   # Named volume
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql  # Bind mount

volumes:
  pgdata:    # Declare named volume</code></pre><h3>Networks in Compose</h3><pre><code>services:
  frontend:
    networks:
      - frontend-net
  api:
    networks:
      - frontend-net
      - backend-net
  db:
    networks:
      - backend-net

networks:
  frontend-net:
  backend-net:</code></pre><p>This isolates the database — only the API can reach it, not the frontend.</p><h3>Default Network</h3><p>Compose automatically creates a network. All services can communicate by service name without explicit network config.</p>`,
              challenge: {
                description: 'Write the volumes section declaring a named volume "pgdata" (top-level in compose file).',
                starterCode: '# Declare named volume\n',
                expectedOutput: 'volumes:\n  pgdata:',
                hints: ['Top-level volumes section', 'Volume name followed by colon', 'volumes:\\n  pgdata:']
              },
              quiz: [
                {
                  question: 'In Compose, services communicate by?',
                  options: ['IP only', 'Service name as hostname', 'Port only', 'Cannot communicate'],
                  correct: 1
                },
                {
                  question: 'Why use multiple networks?',
                  options: ['Performance', 'Isolate services (DB only accessible by API)', 'Required', 'Naming'],
                  correct: 1
                },
                {
                  question: 'Does Compose create a default network?',
                  options: ['No', 'Yes, automatically', 'Only with network config', 'Only in v3'],
                  correct: 1
                },
                {
                  question: 'Named volumes in Compose persist after docker compose down?',
                  options: ['No', 'Yes (unless --volumes flag used)', 'Sometimes', 'Only bind mounts persist'],
                  correct: 1
                }
              ]
            },
            {
              id: 'compose_development',
              title: 'Compose for Development',
              type: 'challenge',
              theory: `<h2>Compose for Development</h2><h3>Dev Override File</h3><pre><code># docker-compose.yml (base)
services:
  api:
    build: .
    ports:
      - "3000:3000"

# docker-compose.override.yml (auto-loaded for dev)
services:
  api:
    volumes:
      - .:/app         # Bind mount for hot reload
      - /app/node_modules  # Anonymous volume (keeps container's modules)
    environment:
      - DEBUG=true
    command: npm run dev</code></pre><h3>Multiple Compose Files</h3><pre><code>docker compose -f docker-compose.yml -f docker-compose.prod.yml up</code></pre><h3>Watch Mode (Compose Watch)</h3><pre><code>services:
  api:
    develop:
      watch:
        - action: sync
          path: ./src
          target: /app/src
        - action: rebuild
          path: package.json</code></pre><h3>Running One-Off Commands</h3><pre><code>docker compose run api npm test           # Run tests
docker compose exec api sh                # Shell in running service</code></pre>`,
              challenge: {
                description: 'Write the command to execute a shell (sh) in a running compose service named "api".',
                starterCode: '# Open shell in running api service\n',
                expectedOutput: 'docker compose exec api sh',
                hints: ['exec runs command in running service', 'sh opens a shell', 'docker compose exec api sh']
              },
              quiz: [
                {
                  question: 'docker-compose.override.yml is?',
                  options: ['Required', 'Auto-loaded to override base config (dev settings)', 'Production only', 'Manual only'],
                  correct: 1
                },
                {
                  question: 'Bind mount in dev allows?',
                  options: ['Faster builds', 'Code changes reflect without rebuild', 'Better security', 'Smaller containers'],
                  correct: 1
                },
                {
                  question: 'docker compose run vs exec?',
                  options: ['Same', 'run starts new container, exec uses running one', 'exec starts new', 'run is deprecated'],
                  correct: 1
                },
                {
                  question: '/app/node_modules anonymous volume purpose?',
                  options: ['Saves space', 'Prevents host node_modules overriding container ones', 'Caching', 'Security'],
                  correct: 1
                }
              ]
            },
            {
              id: 'compose_production',
              title: 'Compose for Production',
              type: 'challenge',
              theory: `<h2>Compose for Production</h2><h3>Production Compose File</h3><pre><code># docker-compose.prod.yml
services:
  api:
    image: myregistry/api:v1.2.3    # Use built image, not build
    restart: always
    environment:
      - NODE_ENV=production
    deploy:
      replicas: 3
      resources:
        limits:
          memory: 512M
          cpus: '0.5'
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - api</code></pre><h3>Production Checklist</h3><ul><li>Use specific image tags (never :latest)</li><li>Set restart: always</li><li>Add resource limits</li><li>Use secrets management</li><li>Enable healthchecks</li><li>Configure logging</li><li>Use read-only where possible</li></ul>`,
              challenge: {
                description: 'Write the restart policy line for a production service that should always restart.',
                starterCode: '# Production restart policy\n',
                expectedOutput: 'restart: always',
                hints: ['restart key with value', 'always means restart on any failure', 'restart: always']
              },
              quiz: [
                {
                  question: 'In production, use image: vs build:?',
                  options: ['build:', 'image: (pre-built tagged image)', 'Either', 'Neither'],
                  correct: 1
                },
                {
                  question: 'restart: always means?',
                  options: ['Never restart', 'Container restarts automatically on failure/reboot', 'Manual restart only', 'Restart once'],
                  correct: 1
                },
                {
                  question: 'Resource limits prevent?',
                  options: ['Slow code', 'One container consuming all host resources', 'Network issues', 'Image pulls'],
                  correct: 1
                },
                {
                  question: 'Why never use :latest in production?',
                  options: ['Slower', 'Unpredictable — image can change without notice', 'Larger images', 'Deprecated'],
                  correct: 1
                }
              ]
            }
          ]
        },
        {
          id: 'multi-container-project',
          title: 'Multi-Container App PROJECT',
          lessons: [
            {
              id: 'project_architecture',
              title: 'Project Architecture',
              type: 'project',
              theory: `<h2>Project: Full-Stack Multi-Container App</h2><p>Build a complete application with frontend, API, database, and cache — all containerized.</p><h3>Architecture</h3><pre><code>┌─────────┐     ┌─────────┐     ┌──────────┐
│  Nginx  │────▶│  API    │────▶│ Postgres │
│  :80    │     │  :3000  │     │  :5432   │
└─────────┘     └────┬────┘     └──────────┘
                     │
                     ▼
                ┌─────────┐
                │  Redis  │
                │  :6379  │
                └─────────┘</code></pre><h3>Files Needed</h3><ul><li><code>docker-compose.yml</code> — Service definitions</li><li><code>api/Dockerfile</code> — API container build</li><li><code>nginx/nginx.conf</code> — Reverse proxy config</li><li><code>.env</code> — Environment variables</li></ul>`,
              challenge: {
                description: 'Write the docker-compose services section with api (build: ./api, ports 3000:3000) and db (image: postgres:15, environment POSTGRES_PASSWORD=secret).',
                starterCode: '# Multi-container compose\n',
                expectedOutput: 'services:\n  api:\n    build: ./api\n    ports:\n      - "3000:3000"\n  db:\n    image: postgres:15\n    environment:\n      - POSTGRES_PASSWORD=secret',
                hints: ['services: at top', 'api uses build:, db uses image:', 'Proper YAML indentation']
              },
              quiz: [
                {
                  question: 'Reverse proxy (nginx) purpose?',
                  options: ['Database', 'Routes external traffic to internal services', 'Builds images', 'Manages volumes'],
                  correct: 1
                },
                {
                  question: 'Redis in this architecture is for?',
                  options: ['Database', 'Caching (fast data access)', 'File storage', 'Logging'],
                  correct: 1
                },
                {
                  question: 'Why separate services into containers?',
                  options: ['More complex', 'Independent scaling, deployment, and maintenance', 'Required by Docker', 'Smaller app'],
                  correct: 1
                },
                {
                  question: '.env file contains?',
                  options: ['Source code', 'Environment variables for compose', 'Docker commands', 'Image definitions'],
                  correct: 1
                }
              ]
            },
            {
              id: 'project_api_container',
              title: 'API Container Setup',
              type: 'project',
              theory: `<h2>Project: API Container</h2><h3>Dockerfile for Node.js API</h3><pre><code>FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

FROM node:18-alpine
WORKDIR /app
RUN addgroup -S app && adduser -S app -G app
COPY --from=builder --chown=app:app /app .
USER app
EXPOSE 3000
HEALTHCHECK --interval=30s CMD wget -qO- http://localhost:3000/health || exit 1
CMD ["node", "server.js"]</code></pre><h3>Best Practices Applied</h3><ul><li>Multi-stage build (smaller final image)</li><li>Non-root user (security)</li><li>Healthcheck (monitoring)</li><li>Alpine base (minimal size)</li><li>npm ci instead of npm install (deterministic)</li></ul>`,
              challenge: {
                description: 'Write the HEALTHCHECK instruction that checks localhost:3000/health every 30 seconds.',
                starterCode: '# Add healthcheck\n',
                expectedOutput: 'HEALTHCHECK --interval=30s CMD wget -qO- http://localhost:3000/health || exit 1',
                hints: ['HEALTHCHECK --interval=time CMD command', 'wget or curl to check endpoint', '|| exit 1 for failure signal']
              },
              quiz: [
                {
                  question: 'npm ci vs npm install?',
                  options: ['Same', 'ci is faster and deterministic (uses lock file exactly)', 'install is better', 'ci is for testing'],
                  correct: 1
                },
                {
                  question: '--chown=app:app in COPY does?',
                  options: ['Changes directory', 'Sets file ownership to app user', 'Checks ownership', 'Creates user'],
                  correct: 1
                },
                {
                  question: 'Why healthcheck in production?',
                  options: ['Logging', 'Docker can restart unhealthy containers', 'Required', 'Performance'],
                  correct: 1
                },
                {
                  question: 'Multi-stage build reduces final image because?',
                  options: ['Compresses files', 'Build tools excluded from final stage', 'Uses less RAM', 'Faster network'],
                  correct: 1
                }
              ]
            },
            {
              id: 'project_complete_compose',
              title: 'Complete Compose Configuration',
              type: 'project',
              theory: `<h2>Project: Complete Compose</h2><pre><code>version: '3.8'
services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - api
    restart: always

  api:
    build: ./api
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    restart: always

  db:
    image: postgres:15-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=mydb
    restart: always

  redis:
    image: redis:7-alpine
    restart: always

volumes:
  pgdata:</code></pre>`,
              challenge: {
                description: 'Write the command to start this entire stack, rebuild images, and run in detached mode.',
                starterCode: '# Start full stack with rebuild\n',
                expectedOutput: 'docker compose up -d --build',
                hints: ['up starts services', '-d for background', '--build forces image rebuild']
              },
              quiz: [
                {
                  question: 'API connects to db using hostname?',
                  options: ['localhost', 'db (service name)', '127.0.0.1', 'postgres.local'],
                  correct: 1
                },
                {
                  question: '--build flag does?',
                  options: ['Only builds', 'Rebuilds images before starting', 'Builds new compose file', 'Build cache'],
                  correct: 1
                },
                {
                  question: 'nginx depends_on api ensures?',
                  options: ['API is healthy', 'API container starts before nginx', 'API is on same port', 'Nothing'],
                  correct: 1
                },
                {
                  question: 'All services have restart: always because?',
                  options: ['Required', 'Auto-recover from crashes in production', 'Faster startup', 'Less memory'],
                  correct: 1
                }
              ]
            },
            {
              id: 'project_deployment',
              title: 'Deployment & CI/CD',
              type: 'project',
              theory: `<h2>Project: Deployment</h2><h3>Push to Registry</h3><pre><code>docker login
docker build -t myregistry/api:v1.0.0 .
docker push myregistry/api:v1.0.0</code></pre><h3>CI/CD Pipeline</h3><pre><code># .github/workflows/deploy.yml concept:
# 1. Run tests
# 2. Build image
# 3. Push to registry
# 4. Deploy to server (pull & restart)</code></pre><h3>Deployment Commands</h3><pre><code># On production server:
docker compose pull           # Get latest images
docker compose up -d          # Restart with new images
docker compose logs -f        # Verify everything works
docker system prune -f        # Clean up old images</code></pre><h3>Rollback</h3><pre><code># If something goes wrong:
docker compose down
# Update compose to use previous version tag
docker compose up -d</code></pre>`,
              challenge: {
                description: 'Write the command to push an image "myapp:v1.0" to Docker Hub.',
                starterCode: '# Push image to registry\n',
                expectedOutput: 'docker push myapp:v1.0',
                hints: ['docker push image:tag', 'Must be logged in first', 'docker push myapp:v1.0']
              },
              quiz: [
                {
                  question: 'docker push sends image to?',
                  options: ['Local storage', 'A container registry', 'Production server', 'GitHub'],
                  correct: 1
                },
                {
                  question: 'For rollback, you change?',
                  options: ['Dockerfile', 'Image tag to previous version', 'Network', 'Volume'],
                  correct: 1
                },
                {
                  question: 'docker system prune does?',
                  options: ['Deletes everything', 'Removes unused images, containers, networks', 'Resets Docker', 'Clears cache'],
                  correct: 1
                },
                {
                  question: 'docker compose pull does?',
                  options: ['Pulls compose file', 'Downloads latest images for services', 'Pulls code from git', 'Nothing'],
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
              id: 'image_optimization',
              title: 'Image Optimization',
              type: 'challenge',
              theory: `<h2>Image Optimization</h2><h3>Size Reduction Techniques</h3><pre><code># 1. Use Alpine or distroless base
FROM node:18-alpine          # 170MB vs 900MB

# 2. Multi-stage builds
FROM node:18 AS build
RUN npm run build
FROM node:18-alpine
COPY --from=build /app/dist .

# 3. Minimize layers
RUN apt-get update && \\
    apt-get install -y --no-install-recommends curl && \\
    rm -rf /var/lib/apt/lists/*

# 4. Use .dockerignore
node_modules
.git
*.md
tests/</code></pre><h3>Build Speed</h3><ul><li>Order Dockerfile from least → most frequently changing</li><li>Use BuildKit: <code>DOCKER_BUILDKIT=1 docker build</code></li><li>Leverage layer cache</li><li>Use specific COPY instead of COPY . .</li></ul>`,
              challenge: {
                description: 'Write a .dockerignore entry to exclude node_modules and .git directories.',
                starterCode: '# .dockerignore content\n',
                expectedOutput: 'node_modules\n.git',
                hints: ['One pattern per line', 'Like .gitignore syntax', 'node_modules\\n.git']
              },
              quiz: [
                {
                  question: 'node:alpine vs node:latest size difference?',
                  options: ['Same', 'Alpine is ~5x smaller', 'Latest is smaller', 'Minimal difference'],
                  correct: 1
                },
                {
                  question: '--no-install-recommends does?',
                  options: ['Installs nothing', 'Skips optional packages (smaller image)', 'Faster install', 'Security check'],
                  correct: 1
                },
                {
                  question: 'BuildKit advantage?',
                  options: ['Different syntax', 'Faster parallel builds and better caching', 'Required for multi-stage', 'Smaller images'],
                  correct: 1
                },
                {
                  question: '.dockerignore reduces?',
                  options: ['Image size', 'Build context sent to daemon', 'Both', 'Neither'],
                  correct: 2
                }
              ]
            },
            {
              id: 'debugging_containers',
              title: 'Debugging Containers',
              type: 'challenge',
              theory: `<h2>Debugging Containers</h2><h3>Common Commands</h3><pre><code>docker logs container-name         # View logs
docker logs --tail 50 container    # Last 50 lines
docker exec -it container sh       # Shell access
docker inspect container           # Full details
docker stats                       # Resource monitoring
docker top container               # Running processes</code></pre><h3>Debugging Build Failures</h3><pre><code># Build with progress output
docker build --progress=plain .

# Build specific stage
docker build --target builder .

# No cache (fresh build)
docker build --no-cache .</code></pre><h3>Common Issues</h3><ul><li><strong>Container exits immediately:</strong> Check CMD/ENTRYPOINT, view logs</li><li><strong>Cannot connect:</strong> Check port mapping, network, service health</li><li><strong>Permission denied:</strong> Check USER, file ownership, volume permissions</li><li><strong>Out of memory:</strong> Increase limits or optimize app</li></ul><h3>Debug Container</h3><pre><code># Override entrypoint to debug
docker run -it --entrypoint sh my-app</code></pre>`,
              challenge: {
                description: 'Write the command to override the entrypoint and open a shell in "my-app" image for debugging.',
                starterCode: '# Debug with shell override\n',
                expectedOutput: 'docker run -it --entrypoint sh my-app',
                hints: ['--entrypoint overrides CMD/ENTRYPOINT', '-it for interactive terminal', 'docker run -it --entrypoint sh my-app']
              },
              quiz: [
                {
                  question: 'Container exits immediately — first step?',
                  options: ['Restart it', 'Check logs (docker logs)', 'Rebuild image', 'Delete container'],
                  correct: 1
                },
                {
                  question: '--no-cache forces?',
                  options: ['No logs', 'Complete rebuild without cache', 'No network', 'No volumes'],
                  correct: 1
                },
                {
                  question: 'docker stats shows?',
                  options: ['Build history', 'Live CPU/memory/network usage', 'Image stats', 'Push/pull stats'],
                  correct: 1
                },
                {
                  question: '--entrypoint sh allows?',
                  options: ['Running the app', 'Getting a shell instead of running the app', 'Changing the image', 'Debugging network'],
                  correct: 1
                }
              ]
            },
            {
              id: 'monitoring_logging',
              title: 'Monitoring & Logging',
              type: 'challenge',
              theory: `<h2>Monitoring & Logging</h2><h3>Container Logging</h3><pre><code># Configure log driver
docker run --log-driver json-file \\
  --log-opt max-size=10m \\
  --log-opt max-file=3 \\
  my-app</code></pre><h3>In Compose</h3><pre><code>services:
  api:
    logging:
      driver: json-file
      options:
        max-size: "10m"
        max-file: "3"</code></pre><h3>Health Monitoring</h3><pre><code>docker inspect --format='{{.State.Health.Status}}' container
# healthy, unhealthy, starting</code></pre><h3>Resource Monitoring</h3><pre><code>docker stats --format "table {{.Name}}\\t{{.CPUPerc}}\\t{{.MemUsage}}"</code></pre><h3>Best Practices</h3><ul><li>Log to stdout/stderr (Docker captures it)</li><li>Set log rotation (max-size, max-file)</li><li>Use structured logging (JSON)</li><li>Monitor container health and resource usage</li><li>Set up alerts for unhealthy containers</li></ul>`,
              challenge: {
                description: 'Write the docker stats command formatted to show Name, CPU%, and Memory usage.',
                starterCode: '# Formatted resource stats\n',
                expectedOutput: 'docker stats --format "table {{.Name}}\\t{{.CPUPerc}}\\t{{.MemUsage}}"',
                hints: ['--format for custom output', 'table keyword for headers', 'Use Go template syntax {{.Field}}']
              },
              quiz: [
                {
                  question: 'Containers should log to?',
                  options: ['Files inside container', 'stdout/stderr (Docker captures)', 'Database', 'Remote server directly'],
                  correct: 1
                },
                {
                  question: 'max-size log option prevents?',
                  options: ['Slow logging', 'Disk filling up from unlimited logs', 'Log loss', 'Security issues'],
                  correct: 1
                },
                {
                  question: 'Container health status values?',
                  options: ['good/bad', 'healthy/unhealthy/starting', 'up/down', 'running/stopped'],
                  correct: 1
                },
                {
                  question: 'Why structured (JSON) logging?',
                  options: ['Prettier', 'Easily parsed by monitoring tools', 'Smaller files', 'Required by Docker'],
                  correct: 1
                }
              ]
            },
            {
              id: 'docker_workflow_summary',
              title: 'Docker Workflow Summary',
              type: 'challenge',
              theory: `<h2>Docker Workflow Summary</h2><h3>Development Workflow</h3><pre><code># 1. Write Dockerfile
# 2. Create docker-compose.yml
# 3. docker compose up (with bind mounts for dev)
# 4. Develop with hot-reload
# 5. docker compose down when done</code></pre><h3>CI/CD Workflow</h3><pre><code># 1. Push code → triggers pipeline
# 2. Run tests in container
# 3. Build production image
# 4. Push to registry
# 5. Deploy (pull new image, restart)</code></pre><h3>Key Commands Cheat Sheet</h3><pre><code># Images
docker build -t name .
docker push/pull name:tag
docker images

# Containers
docker run -d -p 80:80 --name web nginx
docker ps / stop / rm / logs / exec

# Compose
docker compose up -d / down / logs / ps

# Cleanup
docker system prune -a</code></pre><h3>Final Tips</h3><ul><li>One process per container</li><li>Use compose for multi-container apps</li><li>Tag images with semver for production</li><li>Keep images small with Alpine + multi-stage</li><li>Never store secrets in images</li></ul>`,
              challenge: {
                description: 'Write the command to clean up ALL unused Docker resources (images, containers, networks, cache).',
                starterCode: '# Full Docker cleanup\n',
                expectedOutput: 'docker system prune -a',
                hints: ['system prune cleans everything', '-a removes all unused (not just dangling)', 'docker system prune -a']
              },
              quiz: [
                {
                  question: 'One process per container means?',
                  options: ['Only one CPU core', 'Each container runs one main service', 'No background processes', 'Single thread'],
                  correct: 1
                },
                {
                  question: 'docker system prune -a removes?',
                  options: ['Running containers', 'All unused images, stopped containers, networks', 'Everything including volumes', 'Only cache'],
                  correct: 1
                },
                {
                  question: 'For production images, tag with?',
                  options: ['latest', 'Semantic version (v1.2.3)', 'date', 'random'],
                  correct: 1
                },
                {
                  question: 'Docker best practice for secrets?',
                  options: ['Hardcode in Dockerfile', 'Use environment variables or secrets manager', 'Store in image layers', 'Put in comments'],
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
