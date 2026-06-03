import type { Project } from '../types/Project'
import ProjectCard from './ProjectCard'

type ProjectsProps = {
    headline: string
    projects: Project[]
}

function Projects({ headline, projects }: ProjectsProps) {
    return (
        <section id="projects">
            <h2>{headline}</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects