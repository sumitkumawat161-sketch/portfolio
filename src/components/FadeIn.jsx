import { motion } from 'framer-motion'

/**
 * FadeIn
 * A small reusable wrapper that fades + slides content in as it enters the viewport.
 * Used throughout the site instead of scattering animation logic in every section.
 *
 * Props:
 * - delay: seconds to delay the animation (for staggering)
 * - y: initial vertical offset in px
 * - className: passthrough classes
 */
export default function FadeIn({ children, delay = 0, y = 16, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
