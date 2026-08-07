import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import SectionHeading from './SectionHeading.jsx'
import FadeIn from './FadeIn.jsx'
import { personalInfo } from '../data/info.js'

const contactLinks = [
  { icon: FiMail, label: personalInfo.email, href: personalInfo.socials.email },
  { icon: FiLinkedin, label: 'LinkedIn', href: personalInfo.socials.linkedin },
  { icon: FiGithub, label: 'GitHub', href: personalInfo.socials.github },
  { icon: SiLeetcode, label: 'LeetCode', href: personalInfo.socials.leetcode },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: This form is UI-only. Wire it up to a service like Formspree,
    // EmailJS, or your own API endpoint to actually send messages.
    console.log('Contact form submitted:', formData)
    setStatus('sent')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="05 · Contact"
          title="Let's build something together"
          subtitle="Have a project in mind, an opportunity, or just want to say hi? My inbox is open."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Contact links */}
          <FadeIn className="lg:col-span-2">
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="card flex items-center gap-4 p-4 transition-colors hover:border-primary-600/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600/10 text-primary-400">
                    <Icon size={18} />
                  </div>
                  <span className="text-sm font-medium text-ink-200">{label}</span>
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-base-border bg-base-800/60 px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-500 outline-none transition-colors focus:border-primary-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-base-border bg-base-800/60 px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-500 outline-none transition-colors focus:border-primary-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about your project or idea..."
                  className="w-full resize-none rounded-lg border border-base-border bg-base-800/60 px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-500 outline-none transition-colors focus:border-primary-600"
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                {status === 'sent' ? 'Message Sent ✓' : (
                  <>
                    Send Message <FiSend size={16} />
                  </>
                )}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
