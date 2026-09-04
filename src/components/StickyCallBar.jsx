import { Phone } from 'lucide-react'
import { useScrolled } from '../lib/motion.jsx'
import { business } from '../data/site.js'
import './StickyCallBar.css'

export default function StickyCallBar() {
  const scrolled = useScrolled(420)

  return (
    <div className="scb" data-show={scrolled ? 'true' : 'false'} aria-hidden={!scrolled}>
      <a className="scb__link" href={business.phoneHref} tabIndex={scrolled ? 0 : -1}>
        <span className="scb__icon" aria-hidden="true">
          <Phone size={17} strokeWidth={2.5} />
        </span>
        <span className="scb__text">
          <span className="scb__kicker">Master Electrician answers</span>
          <span className="scb__number">Call {business.phoneDisplay}</span>
        </span>
      </a>
    </div>
  )
}
