import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="03 · Projects"
          title="Things I've built"
          subtitle="A mix of full-stack, AI, and systems projects — each one solving a real problem end to end."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} featured={project.featured} />
          ))}
        </div>
      </div>
    </section>
  )
}
