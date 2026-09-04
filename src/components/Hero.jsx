import { useEffect, useState } from 'react'
import { ArrowDown, Clock, Phone, ShieldCheck, Timer, Zap } from 'lucide-react'
import { Reveal, Stagger, WordReveal } from '../lib/motion.jsx'
import { business, hero } from '../data/site.js'
import PhotoDiagnosis from './PhotoDiagnosis.jsx'
import './Hero.css'

const ICONS = { Clock, Zap, ShieldCheck, Timer }

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__fields" aria-hidden="true">
        <span className="hero__field-ink" />
        <span className="hero__field-photo duo">
          <img
            className="duo__img"
            src={`/images/${hero.image.name}.webp`}
            srcSet={`/images/${hero.image.name}-800.webp 800w, /images/${hero.image.name}.webp 1600w`}
            sizes="(max-width: 900px) 100vw, 45vw"
            width={hero.image.width}
            height={hero.image.height}
            alt=""
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </span>
        <span className="grid-overlay hero__grid" />
        <span className="hero__seam" />
      </div>

      <div className="shell hero__inner">
        <div className="hero__copy" data-in={loaded ? 'true' : 'false'}>
          <p className="label hero__eyebrow">
            <span className="label__tick" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1 className="hero__title" id="hero-title">
            <WordReveal text={hero.headline} trigger={loaded} delay={140} step={62} />
          </h1>

          <p className="hero__sub">{hero.subheadline}</p>

          <ul className="hero__badges">
            {hero.badges.map((badge) => {
              const Icon = ICONS[badge.icon]
              return (
                <li className="hero__badge" key={badge.label}>
                  <span className="hero__badge-icon" aria-hidden="true">
                    <Icon size={16} strokeWidth={2.1} />
                  </span>
                  <span className="hero__badge-label">{badge.label}</span>
                </li>
              )
            })}
          </ul>

          <div className="hero__ctas">
            <a className="btn btn--lg hero__cta" href={business.phoneHref}>
              <span className="btn__wipe" aria-hidden="true" />
              <span className="btn__inner">
                <Phone className="btn__icon" size={17} strokeWidth={2.4} aria-hidden="true" />
                {hero.primaryCta}
              </span>
            </a>
            <a className="btn btn--lg btn--ghost-dark hero__cta" href="#services">
              <span className="btn__wipe" aria-hidden="true" />
              <span className="btn__inner">
                {hero.secondaryCta}
                <ArrowDown className="btn__icon" size={16} strokeWidth={2.4} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        <div className="hero__console">
          <PhotoDiagnosis />
        </div>
      </div>

      {/* Embedded trust stat bar — only figures the business genuinely posts. */}
      <div className="hero__stats">
        <div className="shell">
          <Stagger className="hero__stats-row" step={110} as="ul">
            {hero.stats.map((stat) => (
              <Reveal className="hero__stat" as="li" variant="rise-sm" key={stat.label}>
                <span className="hero__stat-figure">{stat.figure}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
