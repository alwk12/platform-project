import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of the project" },
    { id: 2, title: "Project 2", description: "Description of the project" },
    { id: 3, title: "Project 3", description: "Description of the project" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function handleAddProject(title, description) {
    const newProject = {
      id: Date.now(),
      title: title,
      description: description,
    };
    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <Header />
      <main className="container">
        <ProjectForm onAddProject={handleAddProject} />

        <section className="card">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <ProjectList projects={filteredProjects} />
        </section>
      </main>
    </div>
  );
}

export default App;
