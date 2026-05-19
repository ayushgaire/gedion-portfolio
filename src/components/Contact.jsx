import Section from './Section'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiArrowUpRight } from 'react-icons/fi'

const CARDS = [
  {
    icon: FiPhone,
    label: 'Call Me',
    value: '571-338-9854',
    href: 'tel:+15713389854',
  },
  {
    icon: FiMail,
    label: 'Email Me',
    value: 'gediontilahun17@gmail.com',
    href: 'mailto:gediontilahun17@gmail.com',
  },
]

export default function Contact() {
  return (
    <Section id="contact" label="Get In Touch" title="Contact">
      <div className="grid gap-6 sm:grid-cols-2">
        {CARDS.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="glow-border glass group relative overflow-hidden rounded-3xl p-9"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:bg-gold/20" />
            <div className="relative flex items-center justify-between">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-violet/20">
                  <c.icon className="text-2xl text-gold" />
                </div>
                <p className="mt-6 font-display text-xs tracking-[0.3em] text-white/40">
                  {c.label.toUpperCase()}
                </p>
                <p className="mt-2 font-display text-lg text-white sm:text-xl">
                  {c.value}
                </p>
              </div>
              <FiArrowUpRight className="text-2xl text-white/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold" />
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
