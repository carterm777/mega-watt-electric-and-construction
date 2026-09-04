import { ArrowUpRight } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { business, services } from '../data/site.js'
import './Services.css'

export default function Services() {
  return (
    <section className="svc section field-ink" id="services" aria-labelledby="svc-title">
      <span className="grid-overlay svc__grid-bg" aria-hidden="true" />

      <div className="shell svc__inner">
        <div className="section-head svc__head">
          <span className="label svc__eyebrow">
            <span className="label__tick" aria-hidden="true" />
            {services.eyebrow}
          </span>
          <h2 className="section-head__title" id="svc-title">
            {services.heading}
          </h2>
        </div>

        <Stagger className="svc__grid" step={110} as="ul">
          {services.items.map((item) => (
            <Reveal
              className="svc__card"
              as="li"
              variant="rise"
              key={item.title}
              data-feature={item.feature ? 'true' : 'false'}
            >
              <span className="svc__plate duo duo--zoom">
                <img
                  className="duo__img"
                  src={`/images/${item.image.name}.webp`}
                  srcSet={`/images/${item.image.name}-800.webp 800w, /images/${item.image.name}.webp 1600w`}
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  width={item.image.width}
                  height={item.image.height}
                  alt={item.image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </span>

              <div className="svc__body">
                {item.feature ? (
                  <span className="svc__feature-label">{services.featureLabel}</span>
                ) : null}
                <h3 className="svc__title">{item.title}</h3>
                <p className="svc__copy">{item.body}</p>
                {item.price ? <span className="svc__price">{item.price}</span> : null}
              </div>
            </Reveal>
          ))}
        </Stagger>

        <p className="svc__foot">
          <span>Not on the list? We take on most of it — ask.</span>
          <a className="svc__foot-link" href={business.phoneHref}>
            <span>Call {business.phoneDisplay}</span>
            <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  )
}
