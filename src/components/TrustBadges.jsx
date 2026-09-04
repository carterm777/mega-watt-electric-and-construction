import { Award, HardHat, MapPin, Trophy } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { trustBadges } from '../data/site.js'
import './TrustBadges.css'

const ICONS = { Award, HardHat, Trophy, MapPin }

export default function TrustBadges() {
  return (
    <section className="tb field-accent" aria-labelledby="tb-title">
      <div className="shell tb__inner">
        <h2 className="tb__title label" id="tb-title">
          <span className="label__tick tb__tick" aria-hidden="true" />
          {trustBadges.heading}
        </h2>

        <Stagger className="tb__wall" step={95} as="ul">
          {trustBadges.items.map((badge) => {
            const Icon = ICONS[badge.icon]
            return (
              <Reveal className="tb__badge" as="li" variant="scale" key={badge.label}>
                <span className="tb__seal" aria-hidden="true">
                  <Icon size={26} strokeWidth={1.7} />
                </span>
                <h3 className="tb__label">{badge.label}</h3>
              </Reveal>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
