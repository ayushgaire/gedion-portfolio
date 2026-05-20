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
        className="fixed top-5 left-4 z-50"
      >
        <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <img
            src="/codyza.png"
            alt="Codyza"
            className="w-7 h-7 rounded-md object-cover"
          />

          <span className="text-[11px] md:text-xs tracking-[0.35em] text-blue-200 uppercase font-light whitespace-nowrap">
            Powered by Codyza.com
          </span>
        </div>
      </motion.div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-1/2 top-4 z-[70] w-[94%] max-w-6xl -translate-x-1/2"
      >
        <div
          className={`glass flex items-center justify-center rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? 'shadow-[0_8px_40px_rgba(0,0,0,0.5)]' : ''
          }`}
        >
          {/* Desktop Links */}
          <div className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`link-underline font-display text-sm transition-colors ${
                  active === l.id
                    ? 'active text-white'
                    : 'text-white/55 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center gap-1 rounded-full md:hidden"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-1.5 w-1.5 rounded-full bg-gold"
                animate={
                  open
                    ? {
                        scale: [1, 1.4, 1],
                        opacity: [1, 0.4, 1],
                      }
                    : {
                        y: [0, -2, 0],
                      }
                }
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="glass mt-3 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
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
                      ? 'bg-white/5 text-gold'
                      : 'text-white/65 hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}