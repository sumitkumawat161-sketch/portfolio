import SectionHeading from './SectionHeading.jsx'
import FadeIn from './FadeIn.jsx'
import { skillCategories } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-base-900/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="02 · Skills"
          title="Technologies I work with"
          subtitle="A snapshot of the languages, frameworks, and tools I use to design, build, and ship software."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <FadeIn key={category.title} delay={i * 0.06}>
              <div className="card h-full p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-primary-400">
                  {category.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-base-border bg-base-800/80 px-3 py-1.5 text-sm text-ink-300 transition-colors hover:border-primary-600/50 hover:text-ink-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
