import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
  { id: 'resume', label: 'Resume' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const offsets = LINKS.map((l) => {
        const el = document.getElementById(l.id)

        if (!el) return { id: l.id, top: Infinity }

        return {
          id: l.id,
          top: Math.abs(el.getBoundingClientRect().top - 120),
        }
      })

      offsets.sort((a, b) => a.top - b.top)

      setActive(offsets[0].id)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* Powered By Codyza */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[80] w-[92%] max-w-md"
      >
        <div className="glass flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
          
          {/* LEFT */}
          <a
            href="https://codyza.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <img
              src="/codyza.png"
              alt="Codyza"
              className="h-9 w-9 rounded-xl object-cover"
            />

            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base font-medium tracking-wide text-[#7dd3fc]">
                codyza.com
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#7dd3fc]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 3h7v7m0-7L10 14"
                />
              </svg>
            </div>
          </a>

          {/* RIGHT SMALL 3 DOT */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1.5"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-2 w-2 rounded-full bg-cyan-400"
                animate={{
                  y: [0, -2, 0],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </button>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="glass fixed top-24 left-1/2 z-[70] flex w-[92%] max-w-md -translate-x-1/2 flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.button
                key={l.id}
                onClick={() => go(l.id)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-xl px-4 py-3 text-left font-display text-sm transition-colors ${
                  active === l.id
                    ? 'bg-white/5 text-cyan-300'
                    : 'text-white/65 hover:bg-white/5'
                }`}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}