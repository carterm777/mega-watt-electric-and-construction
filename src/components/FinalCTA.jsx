import { MessageSquare, Phone } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { business, finalCta } from '../data/site.js'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="cta" id="cta" aria-labelledby="cta-title">
      <div className="cta__grid">
        <Stagger className="cta__panel" step={120}>
          <div className="cta__panel-inner">
            <Reveal className="label cta__eyebrow" variant="rise-sm" as="p">
              <span className="label__tick cta__tick" aria-hidden="true" />
              {finalCta.eyebrow}
            </Reveal>
            <Reveal variant="rise">
              <h2 className="cta__title" id="cta-title">
                {finalCta.heading}
              </h2>
            </Reveal>
            <Reveal variant="rise" as="p" className="cta__support">
              {finalCta.support}
            </Reveal>
            <Reveal variant="rise" className="cta__actions">
              <a className="btn btn--lg btn--ink" href={business.phoneHref}>
                <span className="btn__wipe" aria-hidden="true" />
                <span className="btn__inner">
                  <Phone className="btn__icon" size={17} strokeWidth={2.4} aria-hidden="true" />
                  {finalCta.button}
                </span>
              </a>
              <a className="btn btn--lg btn--ghost-light" href={business.smsHref}>
                <span className="btn__wipe" aria-hidden="true" />
                <span className="btn__inner">
                  <MessageSquare
                    className="btn__icon"
                    size={17}
                    strokeWidth={2.4}
                    aria-hidden="true"
                  />
                  {finalCta.textButton}
                </span>
              </a>
            </Reveal>
          </div>
        </Stagger>

        <div className="cta__scene">
          <span className="cta__plate duo">
            <img
              className="duo__img"
              src={`/images/${finalCta.image.name}.webp`}
              srcSet={`/images/${finalCta.image.name}-800.webp 800w, /images/${finalCta.image.name}.webp 1600w`}
              sizes="(max-width: 940px) 100vw, 48vw"
              width={finalCta.image.width}
              height={finalCta.image.height}
              alt={finalCta.image.alt}
              loading="lazy"
              decoding="async"
            />
          </span>
          <span className="grid-overlay cta__grid-bg" aria-hidden="true" />
          <p className="cta__caption">
            <span className="cta__pulse" aria-hidden="true" />
            Lines open now — day, night, weekends and holidays.
          </p>
        </div>
      </div>
    </section>
  )
}
