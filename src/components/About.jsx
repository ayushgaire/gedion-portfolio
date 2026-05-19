import Section, { Reveal } from './Section'
import { FiHeart } from 'react-icons/fi'

export default function About() {
  return (
    <Section id="about" label="Who I Am" title="About">
      <Reveal delay={0.1}>
        <div className="glow-border glass relative overflow-hidden rounded-3xl p-8 sm:p-14">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet/10 blur-3xl" />
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-violet/20">
              <FiHeart className="text-2xl text-gold" />
            </div>
            <p className="mt-8 text-lg leading-relaxed text-white/70 sm:text-2xl sm:leading-relaxed">
              Dedicated healthcare and support professional with experience
              assisting individuals with{' '}
              <span className="text-white">developmental disabilities</span>,{' '}
              <span className="text-white">mental illness</span>, and{' '}
              <span className="text-white">behavioral support needs</span>.
              Passionate about creating safe, respectful, and empowering
              environments that promote independence, trust, and quality of
              life.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
