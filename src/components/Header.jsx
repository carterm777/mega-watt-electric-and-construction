import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react'
import { useScrolled } from '../lib/motion.jsx'
import { business, nav } from '../data/site.js'
import Wordmark from './Wordmark.jsx'
import './Header.css'

function NavDropdown({ item, openId, setOpenId }) {
  const id = useId()
  const wrapRef = useRef(null)
  const open = openId === id

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenId(null)
        wrapRef.current?.querySelector('.nav__trigger')?.focus()
      }
    }
    const onPointer = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpenId(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open, setOpenId])

  const columns = item.items.length > 10 ? 3 : 2

  return (
    <li
      className="nav__item nav__item--has-menu"
      ref={wrapRef}
      onMouseEnter={() => setOpenId(id)}
      onMouseLeave={() => setOpenId(null)}
      onFocus={() => setOpenId(id)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpenId(null)
      }}
    >
      <button
        type="button"
        className="nav__link nav__trigger"
        aria-expanded={open}
        aria-controls={`${id}-menu`}
        onClick={() => setOpenId(open ? null : id)}
      >
        <span className="nav__label">{item.label}</span>
        <ChevronDown className="nav__chev" size={13} strokeWidth={2.4} aria-hidden="true" />
      </button>

      <div
        className="nav__menu"
        id={`${id}-menu`}
        data-open={open ? 'true' : 'false'}
        hidden={!open}
      >
        <div className="nav__menu-head">
          <span className="label">
            <span className="label__tick" aria-hidden="true" />
            {item.label}
          </span>
          <a className="nav__menu-all" href={item.href} onClick={() => setOpenId(null)}>
            View section
          </a>
        </div>
        <ul className="nav__menu-list" data-cols={columns}>
          {item.items.map((sub) => (
            <li key={sub}>
              <a className="nav__menu-link" href={item.href} onClick={() => setOpenId(null)}>
                {sub}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default function Header() {
  const scrolled = useScrolled(48)
  const [openId, setOpenId] = useState(null)

  return (
    <header className="hdr" data-scrolled={scrolled ? 'true' : 'false'}>
      <div className="hdr__bar">
        <div className="shell hdr__bar-inner">
          <a className="hdr__meta" href={business.phoneHref}>
            <Phone size={13} strokeWidth={2.2} aria-hidden="true" />
            <span>{business.phoneDisplay}</span>
          </a>
          <a className="hdr__meta" href={business.emailHref}>
            <Mail size={13} strokeWidth={2.2} aria-hidden="true" />
            <span>{business.email}</span>
          </a>
          <span className="hdr__meta hdr__meta--static">
            <MapPin size={13} strokeWidth={2.2} aria-hidden="true" />
            <span>{business.locationLabel}</span>
          </span>
        </div>
      </div>

      <div className="hdr__main">
        <div className="shell hdr__main-inner">
          <a className="hdr__brand" href="#top" aria-label={`${business.name} — home`}>
            <Wordmark />
          </a>

          <nav className="nav" aria-label="Primary">
            <ul className="nav__list">
              {nav.primary.map((item) =>
                item.items ? (
                  <NavDropdown key={item.label} item={item} openId={openId} setOpenId={setOpenId} />
                ) : (
                  <li className="nav__item" key={item.label}>
                    <a className="nav__link" href={item.href}>
                      <span className="nav__label">{item.label}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <a className="hdr__call" href={business.phoneHref}>
            <span className="hdr__call-icon" aria-hidden="true">
              <Phone size={16} strokeWidth={2.4} />
            </span>
            <span className="hdr__call-text">
              <span className="hdr__call-kicker">Call the crew</span>
              <span className="hdr__call-number">{business.phoneDisplay}</span>
            </span>
          </a>
        </div>
      </div>

      <nav className="mnav" aria-label="Section shortcuts">
        <ul className="mnav__list">
          {nav.mobile.map((item) => (
            <li key={item.label}>
              <a className="mnav__link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
