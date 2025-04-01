# Personal Portfolio Website

A modern, responsive portfolio website built with React and TypeScript. This website showcases my web development projects, skills, and professional information.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 📝 Multiple sections including:
  - Home/About Me
  - Projects showcase
  - Skills and expertise
  - Learning resources
  - Development environment setup

## Tech Stack

- React 18
- TypeScript
- CSS3 with modern features
- React Router for navigation
- Docker for containerization

## Running portfolio site

To run portfolio site locally, follow these steps below:

1. Make sure you have [Docker](https://www.docker.com/get-started) installed.

2. Build the Docker image in the root directory of the project:

   ```bash
   docker build -t my-portfolio-site .
   ```

3. Run a Docker container named "peixuan_coding_assignment14" and map the port to `5575`:

   ```bash
   docker run --name peixuan_coding_assignment14 -p 5575:3000 my-portfolio-site
   ```

4. Open your browser and go to [http://localhost:5575](http://localhost:5575) to view the react site.
