import type { Project } from "../types/Project";

type ProjectCardProps = {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-list">
                {project.tech.map((t) => (<li key={t}>{t}</li>))}
            </ul>
            <div className="project-links">
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live demo
                    </a>
                )}
                {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                )}
            </div>
        </article>

    )

}
export default ProjectCard