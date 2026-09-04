import { useId, useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { business, faq } from '../data/site.js'
import './FAQ.css'

export default function FAQ() {
  const uid = useId()
  const [open, setOpen] = useState(0)

  return (
    <section className="faq section field-ink" id="faq" aria-labelledby="faq-title">
      <div className="shell">
        <div className="section-head faq__head">
          <span className="label faq__eyebrow">
            <span className="label__tick" aria-hidden="true" />
            {faq.eyebrow}
          </span>
          <h2 className="section-head__title" id="faq-title">
            {faq.heading}
          </h2>
        </div>

        <Stagger className="faq__grid" step={90} as="ul">
          {faq.items.map((item, i) => {
            const isOpen = open === i
            const btnId = `${uid}-q${i}`
            const panelId = `${uid}-a${i}`
            return (
              <Reveal className="faq__card" as="li" variant="rise-sm" key={item.q} data-open={isOpen}>
                <h3 className="faq__q">
                  <button
                    type="button"
                    id={btnId}
                    className="faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="faq__ref" aria-hidden="true">
                      Q{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="faq__q-text">{item.q}</span>
                    <span className="faq__toggle" aria-hidden="true">
                      {isOpen ? (
                        <Minus size={16} strokeWidth={2.6} />
                      ) : (
                        <Plus size={16} strokeWidth={2.6} />
                      )}
                    </span>
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                >
                  <p className="faq__a">{item.a}</p>
                </div>
              </Reveal>
            )
          })}
        </Stagger>

        <p className="faq__foot">
          Something not covered here? Call{' '}
          <a className="faq__foot-link" href={business.phoneHref}>
            {business.phoneDisplay}
          </a>{' '}
          and ask — a certified Master Electrician picks up.
        </p>
      </div>
    </section>
  )
}
