import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-[2] hidden md:block"
      style={{ left: pos.x, top: pos.y }}
      animate={{ x: '-50%', y: '-50%' }}
    >
      <div
        className="h-[460px] w-[460px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(99,102,241,0.07) 40%, transparent 70%)',
          filter: 'blur(32px)',
        }}
      />
    </motion.div>
  )
}
