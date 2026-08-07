import { FiGithub, FiExternalLink } from 'react-icons/fi'
import FadeIn from './FadeIn.jsx'

/**
 * ProjectCard
 * Renders a single project with title, description, tag list, and action buttons.
 * `featured` projects render slightly larger to stand out (used for the flagship project).
 */
export default function ProjectCard({ project, delay = 0, featured = false }) {
  return (
    <FadeIn delay={delay} className={featured ? 'md:col-span-2' : ''}>
      <div className="card group flex h-full flex-col p-6 transition-colors duration-200 hover:border-primary-600/40 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg font-semibold text-ink-100 sm:text-xl">{project.title}</h3>
          {featured && (
            <span className="shrink-0 rounded-full bg-primary-600/10 px-3 py-1 font-mono text-xs text-primary-400">
              Featured
            </span>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-base-border bg-base-800/60 px-2.5 py-1 text-xs text-ink-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-base-border pt-5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-300 transition-colors hover:text-primary-400"
            >
              <FiGithub size={16} /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-300 transition-colors hover:text-primary-400"
            >
              <FiExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </FadeIn>
  )
}
