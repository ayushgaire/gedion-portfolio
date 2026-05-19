import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-sm text-white/45"
        >
          © 2026 Gedion Gizaw
        </motion.p>
        <motion.a
          href="https://codyza.com"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="link-underline font-display text-sm text-white/45 transition-colors hover:text-gold"
        >
          Powered by Codyza.com
        </motion.a>
      </div>
    </footer>
  )
}
