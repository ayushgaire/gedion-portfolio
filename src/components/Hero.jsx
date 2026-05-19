import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiPhone } from 'react-icons/fi'

const TITLE = 'Direct Support Professional'

function useTyping(text, speed = 70) {
  const [out, setOut] = useState('')
  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      setOut(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(t)
    }, speed)
    return () => clearInterval(t)
  }, [text, speed])
  return out
}

export default function Hero() {
  const typed = useTyping(TITLE)

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center justify-center px-5 pt-28 sm:px-8"
    >
      <div className="grid w-full max-w-6xl items-center gap-14 md:grid-cols-2">
        {/* Text */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-label"
          >
            Marshall, Minnesota
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display text-5xl font-bold leading-[0.95] sm:text-7xl"
          >
            <span className="text-gradient">GEDION</span>
            <br />
            <span className="text-white">GIZAW</span>
          </motion.h1>

          <div className="mt-5 h-7">
            <span className="font-display text-lg text-gold sm:text-xl">
              {typed}
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-aqua align-middle" />
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/55 md:mx-0"
          >
            Compassionate and dedicated Direct Support Professional committed to
            improving lives through dignity-centered care, emotional support, and
            community engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="glow-border group flex items-center gap-2 rounded-full bg-white/5 px-7 py-3.5 font-display text-sm text-white transition hover:bg-white/10"
            >
              View Resume
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-violet px-7 py-3.5 font-display text-sm font-medium text-ink transition hover:shadow-[0_8px_30px_rgba(212,175,106,0.35)]"
            >
              <FiPhone />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center md:order-2"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative h-64 w-64 sm:h-80 sm:w-80"
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, #22d3ee, #38bdf8, #6366f1, #22d3ee)',
                filter: 'blur(2px)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-[6px] rounded-full bg-ink" />
            <motion.div
              className="absolute -inset-6 rounded-full border border-gold/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-[10px] overflow-hidden rounded-full">
              <img
                src="/image.png"
                alt="Gedion Gizaw"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              <div
                className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-white/5 to-white/0 font-display text-6xl text-white/30"
                style={{ display: 'none' }}
              >
                GG
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-10 w-6 rounded-full border border-white/20 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  )
}
