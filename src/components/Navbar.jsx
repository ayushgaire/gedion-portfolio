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
      {/* FUTURISTIC TOP BAR */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-[80] w-[95%] max-w-sm"
      >
        <div className="glass flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
          
          {/* LEFT BRANDING */}
          <a
            href="https://codyza.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img
              src="/codyza.png"
              alt="Codyza"
              className="h-8 w-8 rounded-xl object-cover"
            />

            <div className="flex items-center gap-1">
              <span className="text-xs font-medium tracking-wide text-cyan-300">
                codyza.com
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-cyan-300"
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

          {/* TINY MENU DOTS */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="ml-auto flex items-center gap-1"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-1 w-1 rounded-full bg-cyan-300"
                animate={{
                  y: [0, -1.5, 0],
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
            className="glass fixed top-20 left-1/2 z-[70] flex w-[95%] max-w-sm -translate-x-1/2 flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.button
                key={l.id}
                onClick={() => go(l.id)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-xl px-4 py-3 text-left text-sm transition-colors ${
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