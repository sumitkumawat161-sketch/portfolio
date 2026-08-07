import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { personalInfo } from '../data/info.js'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add a subtle background/border once the user scrolls past the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-base-border bg-base-950/80 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a href="#hero" className="font-display text-lg font-semibold text-ink-100">
          <span className="text-primary-500">&lt;</span>
          {personalInfo.name.split(' ')[0]}
          <span className="text-primary-500">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-400 transition-colors hover:text-ink-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={personalInfo.resumeUrl} download className="hidden btn-primary md:inline-flex !py-2.5 !px-5 text-sm">
          Resume
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-base-border p-2 text-ink-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-base-border bg-base-950/95 backdrop-blur-md md:hidden">
          <ul className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-300 hover:bg-base-800 hover:text-ink-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={personalInfo.resumeUrl} download onClick={closeMenu} className="btn-primary w-full text-sm">
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
