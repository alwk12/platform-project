function ProjectCard({ title, description }) {
  return (
    <div className="project-card">
      <div className="project-image">X</div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
