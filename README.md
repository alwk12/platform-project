# Personal Project Showcase App

A small React app built for my Summative Lab (SPA with React). It shows a list
of projects, lets you add new ones with a form, and lets you search through them.
The layout is based on the mock-up from the lab.

## Features
- Landing page with a list of projects
- Form to add a new project (title + description)
- Search bar that filters projects by title while you type
- Simple validation (you can't add an empty project)
- Responsive layout that works on phones and desktop

## Setup and Usage
1. Make sure Node.js is installed.
2. Open the project folder in a terminal and run:
   ```
   npm install
   npm run dev
   ```
3. Open the link shown in the terminal (usually http://localhost:5173).

To run the tests:
```
npm test
```

## Component Tree
```
App                (state: projects, searchTerm)
├── Header
├── ProjectForm    (state: title, description, error)
├── SearchBar
└── ProjectList
    └── ProjectCard
```

## State and Props
- `App` holds `projects` and `searchTerm` because several components need them.
- `ProjectForm` gets `onAddProject` as a prop and calls it when the form is submitted.
- `SearchBar` gets `searchTerm` and `onSearchChange`.
- `ProjectList` gets the already filtered `projects` array.
- `ProjectCard` gets `title` and `description`.

## Folder Structure
```
src/
├── components/   React components
├── styles/       CSS file
├── tests/        Jest + React Testing Library tests
├── App.jsx
└── main.jsx
```

## Known Limitations
- Projects are not saved. They disappear when the page is refreshed.
- You can't edit or delete a project yet.
- Search only checks the project title.
- The image box is just a placeholder (no image upload).

## Technologies
React, Vite, CSS, Jest, React Testing Library
