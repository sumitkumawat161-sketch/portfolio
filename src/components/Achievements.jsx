import SectionHeading from './SectionHeading.jsx'
import FadeIn from './FadeIn.jsx'
import { achievements } from '../data/achievements.js'

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-base-900/40">
      <div className="section-container">
        <SectionHeading eyebrow="04 · Achievements" title="Milestones along the way" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {achievements.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="card flex h-full flex-col p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-600/10 text-primary-400">
                  <item.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
