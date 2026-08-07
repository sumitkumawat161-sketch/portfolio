import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { personalInfo } from '../data/info.js'

const socialLinks = [
  { icon: FiGithub, href: personalInfo.socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: personalInfo.socials.leetcode, label: 'LeetCode' },
  { icon: FiMail, href: personalInfo.socials.email, label: 'Email' },
]

export default function Hero() {
  const roles = personalInfo.roles
  const [roleIndex, setRoleIndex] = useState(0)

  // Cycle through roles slowly — a single, restrained animated element for the hero
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid-pattern bg-[size:44px_44px] pt-16"
    >
      {/* Radial fade so the grid pattern stays subtle and doesn't compete with content */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(79,70,229,0.16),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(10,10,15,0.9),#0a0a0f)]" />

      <div className="section-container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="eyebrow mb-5 inline-block">Hi, my name is</span>

          <h1 className="font-display text-4xl font-bold leading-tight text-ink-100 sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>

          {/* Cycling role — monospace with a blinking cursor, a small nod to the terminal */}
          <div className="mt-4 h-9 font-mono text-lg text-primary-400 sm:text-xl">
            <span>{roles[roleIndex]}</span>
            <span className="ml-0.5 animate-blink text-primary-500">_</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-400 sm:text-lg">
            {personalInfo.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href={personalInfo.resumeUrl} download className="btn-secondary">
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="text-ink-400 transition-colors hover:text-primary-400"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink-500 transition-colors hover:text-primary-400 sm:block"
      >
        <FiArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
