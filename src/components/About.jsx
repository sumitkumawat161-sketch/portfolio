import { FiCpu, FiCode, FiTarget } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import FadeIn from './FadeIn.jsx'
import { aboutText } from '../data/info.js'

const highlights = [
  {
    icon: FiCpu,
    title: 'Malaviya National Institute of Technology, Jaipur',
    description: (
      <>
        B.Tech in Electronics & Communication Engineering (2023–2027) •{' '}
        <strong>CGPA: 7.89</strong>
      </>
    ),
  },
  {
    icon: FiCode,
    title: 'Full Stack + AI/ML',
    description:
      'Building end-to-end applications using React, Node.js, Python, FastAPI, RAG, LangChain, and modern AI technologies.',
  },
  {
    icon: FiTarget,
    title: 'Problem Solving & Systems',
    description: (
      <>
        <strong>500+ DSA problems</strong> solved •{' '}
        <strong>1600+ LeetCode rating</strong> • Hands-on experience with
        algorithms, multithreading, backend systems, and performance testing.
      </>
    ),
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
