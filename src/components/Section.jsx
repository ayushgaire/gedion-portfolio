import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, y = 40 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Separator() {
  return (
    <div className="relative mx-auto my-2 h-px w-full max-w-6xl">
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
    </div>
  )
}

export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="relative z-10 mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="section-label">{label}</p>
        <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
          <span className="text-gradient">{title}</span>
        </h2>
        <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-gold to-violet" />
      </Reveal>
      <div className="mt-14">{children}</div>
    </section>
  )
}
