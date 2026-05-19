import { useState } from 'react'
import Section from './Section'
import { motion, AnimatePresence } from 'framer-motion'
import { FiBriefcase, FiChevronDown } from 'react-icons/fi'

const JOBS = [
  {
    company: 'Prairie Community Services',
    location: 'Marshall, MN',
    role: 'Direct Support Professional',
    period: 'Oct 2024 – Present',
    points: [
      'Provided emotional and behavioral support.',
      'Administered medications and monitored side effects.',
      'Conducted overnight supervision and safety checks.',
      'Responded to crisis situations using de-escalation techniques.',
      'Maintained accurate care documentation.',
      'Encouraged trust and client engagement.',
    ],
  },
  {
    company: 'Forward Focus',
    location: 'Marshall, MN',
    role: 'Direct Support Professional',
    period: 'Oct 2024 – Present',
    points: [
      'Assisted individuals with mental health and developmental disabilities.',
      'Implemented individualized care plans.',
      'Assisted with crisis intervention.',
      'Conducted overnight monitoring and supervision.',
      'Maintained compliance documentation.',
      'Supported emotional regulation and independence.',
    ],
  },
  {
    company: 'Sevita',
    location: 'Marshall, MN',
    role: 'Direct Support Professional',
    period: 'Jan 2021 – Oct 2023',
    points: [
      'Supported individuals with developmental and intellectual disabilities in daily living activities.',
      'Assisted with hygiene, mobility, medication administration, and meal preparation.',
      'Implemented individualized support plans.',
      'Facilitated recreational and skill-building activities.',
      'Maintained safe and supportive environments.',
      'Collaborated with healthcare teams and guardians.',
    ],
  },
]

function JobCard({ job, index, open, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 sm:pl-14"
    >
      <span className="absolute -left-[1px] top-8 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-ink bg-gradient-to-br from-gold to-violet" />

      <motion.button
        onClick={onToggle}
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glow-border glass w-full rounded-3xl p-7 text-left sm:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-violet/20">
              <FiBriefcase className="text-xl text-gold" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                {job.company}
              </h3>
              <p className="text-sm text-white/45">
                {job.role} · {job.location}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/5 px-4 py-1.5 font-display text-xs text-aqua">
              {job.period}
            </span>
            <motion.span animate={{ rotate: open ? 180 : 0 }}>
              <FiChevronDown className="text-white/40" />
            </motion.span>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-3 border-t border-white/5 pt-6">
                {job.points.map((p, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 text-sm text-white/60"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    {p}
                  </motion.li>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  )
}

export default function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="experience" label="Career Journey" title="Experience">
      <div className="relative space-y-8">
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-gold via-aqua/30 to-transparent" />
        {JOBS.map((job, i) => (
          <JobCard
            key={i}
            job={job}
            index={i}
            open={open === i}
            onToggle={() => setOpen(open === i ? -1 : i)}
          />
        ))}
      </div>
    </Section>
  )
}
