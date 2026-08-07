import FadeIn from './FadeIn.jsx'

/**
 * SectionHeading
 * Consistent heading block used at the top of every section:
 * a small monospace eyebrow label + a large display heading + optional subtitle.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <FadeIn className={`mb-14 flex flex-col gap-3 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-display text-3xl font-semibold text-ink-100 sm:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-ink-400">{subtitle}</p>}
    </FadeIn>
  )
}
