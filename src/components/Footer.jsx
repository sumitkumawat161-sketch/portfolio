import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { personalInfo } from '../data/info.js'

const socialLinks = [
  { icon: FiGithub, href: personalInfo.socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: personalInfo.socials.leetcode, label: 'LeetCode' },
  { icon: FiMail, href: personalInfo.socials.email, label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-base-border">
      <div className="section-container flex flex-col items-center gap-5 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-ink-500">
          © {year} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="text-ink-500 transition-colors hover:text-primary-400"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-ink-500">Built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
