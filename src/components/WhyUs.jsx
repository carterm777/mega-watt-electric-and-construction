import { PhoneCall, Receipt, Snowflake, UserCheck } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { whyUs } from '../data/site.js'
import './WhyUs.css'

const ICONS = { UserCheck, Receipt, PhoneCall, Snowflake }

export default function WhyUs() {
  return (
    <section className="why section field-light" id="why" aria-labelledby="why-title">
      <div className="shell">
        <div className="section-head why__head">
          <span className="label why__eyebrow">
            <span className="label__tick" aria-hidden="true" />
            {whyUs.eyebrow}
          </span>
          <h2 className="section-head__title" id="why-title">
            {whyUs.heading}
          </h2>
        </div>

        <ul className="why__list">
          {whyUs.items.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Stagger className="why__row" step={130} as="li" key={item.title} data-flip={i % 2}>
                <Reveal className="why__media" variant={i % 2 ? 'right' : 'left'}>
                  <span className="why__plate duo duo--zoom">
                    <img
                      className="duo__img"
                      src={`/images/${item.image.name}.webp`}
                      srcSet={`/images/${item.image.name}-800.webp 800w, /images/${item.image.name}.webp 1600w`}
                      sizes="(max-width: 900px) 100vw, 46vw"
                      width={item.image.width}
                      height={item.image.height}
                      alt={item.image.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="why__index" aria-hidden="true" />
                </Reveal>

                <Reveal className="why__body" variant="rise">
                  <span className="why__icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="why__title">{item.title}</h3>
                  <p className="why__copy">{item.body}</p>
                </Reveal>
              </Stagger>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
