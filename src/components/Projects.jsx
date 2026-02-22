import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} />
          <div className="project-content">
            <h3>{project.title}</h3>
            <p className="project-description">
            {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
              >
              View Project →
            </a>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;