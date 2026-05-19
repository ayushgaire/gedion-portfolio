import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Scene3D from './components/Scene3D'
import CursorGlow from './components/CursorGlow'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
import { Separator } from './components/Section'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>

      <div className="noise" />
      <Scene3D />
      <CursorGlow />
      <ScrollProgress />

      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Navbar />
            <main>
              <Hero />
              <Separator />
              <About />
              <Separator />
              <Education />
              <Separator />
              <Experience />
              <Separator />
              <Skills />
              <Separator />
              <Contact />
              <Separator />
              <Resume />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
