import { FiCpu, FiCode, FiTarget } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import FadeIn from './FadeIn.jsx'
import { aboutText } from '../data/info.js'

const highlights = [
  {
    icon: FiCpu,
    title: 'Electronics & Communication',
    description: 'B.Tech student building a strong foundation in core engineering principles.',
  },
  {
    icon: FiCode,
    title: 'Full Stack + AI/ML',
    description: 'Passionate about building complete products, from UI to AI-powered backends.',
  },
  {
    icon: FiTarget,
    title: 'Real-World Problem Solving',
    description: 'Motivated by using software to solve practical, everyday problems.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <SectionHeading eyebrow="01 · About" title="A little about me" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <FadeIn delay={0.05} className="lg:col-span-3">
            <div className="space-y-5 text-ink-300">
              {aboutText.paragraphs.map((para, i) => (
                <p key={i} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={0.1 + i * 0.08}>
                <div className="card flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600/10 text-primary-400">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-ink-100">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-400">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
