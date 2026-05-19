import Section, { Reveal } from './Section'
import { motion } from 'framer-motion'
import { FiDownload, FiFileText } from 'react-icons/fi'

export default function Resume() {
  return (
    <Section id="resume" label="Credentials" title="Resume">
      <Reveal delay={0.1}>
        <div className="glow-border glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
          <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-violet/10 blur-3xl" />
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-gold/20 to-violet/20"
            >
              <FiFileText className="text-4xl text-gold" />
            </motion.div>

            <h3 className="mt-8 font-display text-2xl font-semibold text-white sm:text-3xl">
              View My Full Resume
            </h3>
            <p className="mt-3 max-w-md text-sm text-white/50">
              A detailed overview of my professional experience, education, and
              capabilities in direct support care.
            </p>

            <motion.a
              href="/Resume 2.pdf"
              download="Gedion Gizaw - Resume.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-9 flex items-center gap-3 rounded-full bg-gradient-to-r from-gold to-violet px-9 py-4 font-display text-sm font-medium text-ink transition hover:shadow-[0_10px_40px_rgba(212,175,106,0.4)]"
            >
              <FiDownload />
              Download Resume
            </motion.a>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
