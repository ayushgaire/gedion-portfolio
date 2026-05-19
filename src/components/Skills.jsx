import Section, { Reveal } from './Section'
import { motion } from 'framer-motion'
import {
  FiHeart,
  FiActivity,
  FiAlertCircle,
  FiSmile,
  FiNavigation,
  FiFileText,
  FiUsers,
  FiShield,
  FiMessageCircle,
  FiUserCheck,
  FiMonitor,
} from 'react-icons/fi'

const MAIN = [
  { name: 'Daily Living Support', icon: FiHeart },
  { name: 'Medication Administration', icon: FiActivity },
  { name: 'Crisis Intervention', icon: FiAlertCircle },
  { name: 'Emotional Support', icon: FiSmile },
  { name: 'Mobility Assistance', icon: FiNavigation },
  { name: 'Documentation', icon: FiFileText },
  { name: 'Community Engagement', icon: FiUsers },
  { name: 'Behavioral Support', icon: FiShield },
  { name: 'Communication', icon: FiMessageCircle },
  { name: 'Team Collaboration', icon: FiUserCheck },
]

const COMPUTER = [
  'Microsoft Word',
  'Excel',
  'PowerPoint',
  'Outlook',
  'Strong Typing Skills',
]

function SkillCard({ name, Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, rotateX: 6, rotateY: -6 }}
      style={{ transformStyle: 'preserve-3d', perspective: 800 }}
      className="glow-border glass group flex items-center gap-4 rounded-2xl p-5"
    >
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-violet/15 transition-colors group-hover:from-gold/30 group-hover:to-violet/30">
        <Icon className="text-lg text-gold" />
      </div>
      <span className="font-display text-sm text-white/80">{name}</span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <Section id="skills" label="Capabilities" title="Skills">
      <Reveal>
        <p className="mb-6 font-display text-sm tracking-[0.3em] text-white/40">
          CORE COMPETENCIES
        </p>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MAIN.map((s, i) => (
          <SkillCard key={s.name} name={s.name} Icon={s.icon} index={i} />
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mb-6 mt-16 font-display text-sm tracking-[0.3em] text-white/40">
          COMPUTER SKILLS
        </p>
      </Reveal>
      <div className="flex flex-wrap gap-3">
        {COMPUTER.map((c, i) => (
          <motion.span
            key={c}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="glow-border glass flex items-center gap-2 rounded-full px-5 py-3 font-display text-sm text-white/75"
          >
            <FiMonitor className="text-aqua" />
            {c}
          </motion.span>
        ))}
      </div>
    </Section>
  )
}
