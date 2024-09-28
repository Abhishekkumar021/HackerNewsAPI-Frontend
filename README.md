# Hacker News Stories App || [Visit Here](https://top-tech-news.vercel.app/)

This project is a React-based web application that displays the top stories from Hacker News. It pulls data from an external API, showing various categories of stories like top, new, job, show, and more. The app uses `react-router-dom` for routing and `axios` for API requests.



## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)


## Project Structure
        Frontend
        ├── public/     # Favicon
        ├── src/
        │   ├── assets/     # Image and media assets
        │   ├── components/     #React components
        │   ├── styles/     # CSS files
        │    
        ├── .env
        ├── .gitignore
        ├── Dockerfile
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── README.md
        └── vite.config.js



## Features

- Displays top 10 stories from Hacker News in various categories.
- Responsive design and easy navigation.
- Error handling and loading states using a custom `Loader` component.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (v1.22 or higher)
- [Docker](https://www.docker.com/) (optional, for Docker setup)

### Installation

1. Clone the repository :

   ```bash
   git clone https://github.com/Abhishekkumar021/HackerNewsAPI-Frontend.git
   ```
2. Navigate to the project directory :
    
    ```bash
    cd HackerNewsAPI-Frontend
    ```

3. Install the dependencies:

    Using npm :
    ```bash
    npm install
    ```
    Or using Yarn :
    ```bash
    yarn install
    ```

## Running the Project

Running Locally
1. Start the development server :
    ```bash
    vite
    ```
    Or
    
    ```bash
    npm run dev
    ```
    Or with Yarn :
    ```bash
    yarn dev
    ```

2. Open the application in your browser at
    ```bash
    http://localhost:5173
    ```

## Docker Setup (Optional)

1. Build the Docker image :
    ```bash
    docker build -t hacker-news-stories-app .
    ```
2. Run the Docker container :
    ```bash
    docker run -p 5173:5173 hacker-news-stories-app
    ```
3. Open the application in your browser at
    ```bash
    http://localhost:5173
    ```

## Environment Variables
The app requires certain environment variables to function correctly. Create a .env file in the root directory with the following variables
:
```bash
VITE_BACKEND_URL=http://localhost:8000
```

## Contributing
Feel free to submit issues or pull requests for new features or bug fixes. Please ensure that your code adheres to the existing code style and passes all tests before submitting a PR.
