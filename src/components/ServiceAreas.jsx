import { useMemo, useState } from 'react'
import { Phone, Search } from 'lucide-react'
import { Reveal, useDraw } from '../lib/motion.jsx'
import { business, coverage } from '../data/site.js'
import './ServiceAreas.css'

const SHORT = { 'Surrounding acreages & farm properties': 'Acreages' }

export default function ServiceAreas() {
  const [query, setQuery] = useState('')
  const [drawRef, drawn] = useDraw()

  const q = query.trim().toLowerCase()
  const matches = useMemo(
    () => coverage.towns.filter((t) => (q ? t.name.toLowerCase().includes(q) : true)),
    [q]
  )
  // The accent is the answer to a query, not the resting state: with an empty
  // field the schematic sits quiet and only the Edmonton hub is lit.
  const matchNames = useMemo(() => (q ? new Set(matches.map((t) => t.name)) : new Set()), [matches, q])
  const hub = coverage.towns.find((t) => t.name === coverage.hub)

  return (
    <section className="cov section field-light" id="coverage" aria-labelledby="cov-title">
      <div className="shell cov__inner">
        <div className="cov__copy">
          <span className="label cov__eyebrow">
            <span className="label__tick" aria-hidden="true" />
            {coverage.eyebrow}
          </span>
          <h2 className="section-head__title cov__title" id="cov-title">
            {coverage.heading}
          </h2>
          <p className="cov__lead">{coverage.body}</p>
          <p className="cov__served">{coverage.served}</p>

          <div className="cov__finder">
            <label className="cov__label" htmlFor="cov-filter">
              {coverage.filterLabel}
            </label>
            <div className="cov__field">
              <Search className="cov__field-icon" size={17} strokeWidth={2.2} aria-hidden="true" />
              <input
                id="cov-filter"
                className="cov__input"
                type="search"
                autoComplete="off"
                value={query}
                placeholder={coverage.filterPlaceholder}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <p className="cov__hint" id="cov-hint">
              {coverage.filterHint}
            </p>

            {matches.length ? (
              <ul className="cov__index" aria-describedby="cov-hint">
                {matches.map((town) => (
                  <li className="cov__town" key={town.name} data-kind={town.kind}>
                    <span className="cov__town-name">{town.name}</span>
                    <span className="cov__town-kind">{town.kind}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="cov__empty">
                <span>{coverage.emptyState}</span>
                <a className="cov__empty-call" href={business.phoneHref}>
                  <Phone size={15} strokeWidth={2.4} aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
              </p>
            )}
            <p className="sr-only" role="status" aria-live="polite">
              {matches.length
                ? `${matches.length} of ${coverage.towns.length} coverage entries shown.`
                : 'No coverage entries match that search.'}
            </p>
          </div>
        </div>

        <Reveal className="cov__schematic" variant="fade">
          <div className="cov__plate" ref={drawRef}>
            <span className="grid-overlay grid-overlay--dense cov__plate-grid" aria-hidden="true" />
            <svg
              className="cov__svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Abstract schematic of the crew's coverage list: Edmonton at the centre with run lines out to St. Albert, Sherwood Park, Leduc, Spruce Grove, Stony Plain, Fort Saskatchewan, Beaumont, Morinville, Devon and the surrounding acreages. Diagram only, not a map."
            >
              {coverage.towns
                .filter((t) => t.name !== coverage.hub)
                .map((town, i) => (
                  <line
                    key={`run-${town.name}`}
                    className={`cov__run draw${drawn ? ' is-in' : ''}`}
                    x1={hub.x}
                    y1={hub.y}
                    x2={town.x}
                    y2={town.y}
                    pathLength="1"
                    style={{ '--rv-delay': `${180 + i * 70}ms` }}
                    data-on={matchNames.has(town.name) ? 'true' : 'false'}
                  />
                ))}

              {coverage.towns.map((town) => (
                <g
                  key={`node-${town.name}`}
                  className="cov__node"
                  data-on={matchNames.has(town.name) ? 'true' : 'false'}
                  data-hub={town.name === coverage.hub ? 'true' : 'false'}
                >
                  <rect
                    className="cov__node-box"
                    x={town.x - 2.1}
                    y={town.y - 2.1}
                    width="4.2"
                    height="4.2"
                  />
                  <text className="cov__node-text" x={town.x} y={town.y - 3.6}>
                    {SHORT[town.name] || town.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <p className="cov__note">{coverage.schematicNote}</p>
          <p className="cov__cta">
            <span className="cov__cta-lead">{coverage.ctaLead}</span>
            <a className="btn" href={business.phoneHref}>
              <span className="btn__wipe" aria-hidden="true" />
              <span className="btn__inner">
                <Phone className="btn__icon" size={16} strokeWidth={2.4} aria-hidden="true" />
                {coverage.ctaButton}
              </span>
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
