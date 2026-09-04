import { Info, Phone, Star } from 'lucide-react'
import { CountUp, Reveal, Stagger } from '../lib/motion.jsx'
import { business, reviews } from '../data/site.js'
import './GoogleReviews.css'

function Stars({ size = 15 }) {
  return (
    <span className="gr__stars" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={size} strokeWidth={0} fill="currentColor" />
      ))}
    </span>
  )
}

/*
 * The only raw colour values in the project outside tokens.css: these are
 * Google brand hexes on the official mark, not palette decisions, so they are
 * deliberately not tokenised.
 */
function GoogleMark() {
  return (
    <span className="gr__mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="18" height="18" role="presentation" focusable="false">
        <path
          fill="#4285F4"
          d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.5 5.5 0 0 1-2.39 3.6v3h3.86c2.26-2.08 3.58-5.15 3.58-8.79Z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.96-1.08 7.94-2.92l-3.86-3c-1.08.72-2.45 1.15-4.08 1.15-3.13 0-5.79-2.11-6.74-4.96H1.28v3.09A12 12 0 0 0 12 24Z"
        />
        <path
          fill="#FBBC05"
          d="M5.26 14.27a7.2 7.2 0 0 1 0-4.55V6.63H1.28a12 12 0 0 0 0 10.74l3.98-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.28 6.63l3.98 3.09C6.21 6.87 8.87 4.75 12 4.75Z"
        />
      </svg>
    </span>
  )
}

export default function GoogleReviews() {
  return (
    <section className="gr section field-light" id="reviews" aria-labelledby="gr-title">
      <div className="shell gr__inner">
        <div className="gr__aggregate">
          <span className="label gr__eyebrow">
            <span className="label__tick" aria-hidden="true" />
            {reviews.eyebrow}
          </span>
          <h2 className="gr__title" id="gr-title">
            {reviews.heading}
          </h2>

          <div className="gr__score">
            <CountUp
              className="gr__score-figure"
              end={reviews.aggregateFigure}
              decimals={1}
              duration={1600}
            />
            <span className="gr__score-meta">
              <Stars size={17} />
              <span className="gr__score-line">
                <span className="gr__score-out">{reviews.aggregateSuffix}</span>
                <span className="gr__score-support">{reviews.aggregateSupport}</span>
              </span>
            </span>
          </div>

          <p className="gr__source">
            <GoogleMark />
            <span>Google Reviews</span>
          </p>

          <div className="gr__ask">
            <span className="gr__ask-lead">{reviews.ctaLead}</span>
            <a className="btn btn--wide" href={business.phoneHref}>
              <span className="btn__wipe" aria-hidden="true" />
              <span className="btn__inner">
                <Phone className="btn__icon" size={16} strokeWidth={2.4} aria-hidden="true" />
                Call {business.phoneDisplay}
              </span>
            </a>
          </div>

          <p className="gr__disclaimer">
            <Info size={14} strokeWidth={2.1} aria-hidden="true" />
            <span>{reviews.placeholderNote}</span>
          </p>
        </div>

        <Stagger className="gr__grid" step={110} as="ul">
          {reviews.items.map((item) => (
            <Reveal className="gr__card" as="li" variant="rise" key={item.name}>
              <Stars />
              <p className="gr__quote">{item.quote}</p>
              <p className="gr__who">
                <span className="gr__initial" aria-hidden="true">
                  {item.name.charAt(0)}
                </span>
                <span className="gr__name">{item.name}</span>
                <span className="gr__via">Google review</span>
              </p>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
