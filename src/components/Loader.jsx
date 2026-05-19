import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      exit={{ opacity: 0, filter: 'blur(12px)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative flex h-44 w-44 items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full border border-gold/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          style={{ borderTopColor: 'transparent', borderRightColor: 'transparent' }}
        />
        <motion.div
          className="absolute inset-3 rounded-full border border-aqua/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{ borderBottomColor: 'transparent', borderLeftColor: 'transparent' }}
        />
        <motion.div
          className="absolute inset-7 rounded-full border border-violet/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ borderTopColor: 'transparent' }}
        />
        <motion.span
          className="font-display text-3xl font-bold text-gradient"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          GG
        </motion.span>
      </div>

      <motion.div
        className="mt-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="font-display text-sm tracking-[0.5em] text-white/60">
          GEDION&nbsp;&nbsp;GIZAW
        </p>
      </motion.div>

      <div className="mt-6 h-px w-48 overflow-hidden bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-gold via-aqua to-violet"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
