
# Task Manager Frontend

A simple and modern task manager built with React, TypeScript, Vite, and Styled Components.

## Features

- Add and list tasks
- Responsive and dark-themed UI
- API integration for tasks (fetch/add)
- ESLint and TypeScript for code quality

## Tech Stack

- **React** (v19)
- **TypeScript**
- **Vite**
- **Styled Components**
- **ESLint**

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
  @types/           # TypeScript type declarations
  common/api/       # API functions for tasks
  task/             # Task page and styles
  assets/           # Static assets
  main.tsx          # App entry point
  index.css         # Global styles
```

## API

Set the environment variable `VITE_API_TASK_MANAGER` to your backend URL.

Example `.env`:

```
VITE_API_TASK_MANAGER=http://localhost:3000
```

## License

MIT
