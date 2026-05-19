import Section, { Reveal } from './Section'
import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'

export default function Education() {
  return (
    <Section id="education" label="Academic Path" title="Education">
      <div className="relative pl-8 sm:pl-12">
        <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-gold via-aqua/40 to-transparent sm:left-1.5" />
        <Reveal delay={0.1}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="glow-border glass relative rounded-3xl p-8 sm:p-10"
          >
            <span className="absolute -left-[34px] top-9 h-4 w-4 rounded-full border-2 border-ink bg-gold sm:-left-[46px]" />
            <span className="absolute -left-[42px] top-7 h-8 w-8 animate-ping rounded-full bg-gold/20 sm:-left-[54px]" />

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-aqua/20">
                  <FiAward className="text-2xl text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    Southwest Minnesota State University
                  </h3>
                  <p className="text-sm text-white/45">Marshall, Minnesota</p>
                </div>
              </div>
              <span className="rounded-full bg-white/5 px-4 py-1.5 font-display text-xs text-aqua">
                GPA 3.42
              </span>
            </div>

            <div className="mt-7 border-t border-white/5 pt-6">
              <p className="font-display text-lg text-white/85">
                Bachelor of Science in Management
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </Section>
  )
}
