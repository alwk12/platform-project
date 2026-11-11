import { useState } from "react";


function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // stop the page from refreshing

    if (title.trim() === "" || description.trim() === "") {
      setError("Please fill in both the title and the description.");
      return;
    }

    onAddProject(title.trim(), description.trim());

    setTitle("");
    setDescription("");
    setError("");
  }

  return (
    <section className="card form-card">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {error && <p className="error">{error}</p>}

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default ProjectForm;
