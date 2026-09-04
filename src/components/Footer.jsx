import { Facebook, Instagram, Mail, MapPin, MessageSquare, Phone, Youtube } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { business, footer } from '../data/site.js'
import Wordmark from './Wordmark.jsx'
import './Footer.css'

const SOCIALS = [
  { label: 'Instagram', Icon: Instagram },
  { label: 'Facebook', Icon: Facebook },
  { label: 'YouTube', Icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="ftr" id="footer">
      <span className="grid-overlay ftr__grid-bg" aria-hidden="true" />
      <div className="shell ftr__inner">
        <Stagger className="ftr__cols" step={110}>
          <Reveal className="ftr__col ftr__col--brand" variant="rise-sm">
            <Wordmark variant="accent" />
            <p className="ftr__mission">{footer.mission}</p>
            <ul className="ftr__socials">
              {SOCIALS.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    className="ftr__social"
                    href={business.socialFallback}
                    rel="noreferrer noopener"
                    target="_blank"
                    aria-label={`${label} — placeholder link, points to the business site`}
                  >
                    <Icon size={17} strokeWidth={2.1} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="ftr__col" variant="rise-sm">
            <h3 className="ftr__heading">{footer.servicesHeading}</h3>
            <ul className="ftr__list">
              {footer.services.map((item) => (
                <li key={item}>
                  <a className="ftr__link" href="#services">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="ftr__col" variant="rise-sm">
            <h3 className="ftr__heading">{footer.linksHeading}</h3>
            <ul className="ftr__list">
              {footer.links.map((item) => (
                <li key={item.label}>
                  <a className="ftr__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="ftr__col" variant="rise-sm">
            <h3 className="ftr__heading">{footer.contactHeading}</h3>
            <address className="ftr__address">
              <span className="ftr__biz">{business.name}</span>
              <span className="ftr__line">
                <MapPin size={14} strokeWidth={2.1} aria-hidden="true" />
                {business.locationLabel}
              </span>
              <a className="ftr__link ftr__line" href={business.phoneHref}>
                <Phone size={14} strokeWidth={2.1} aria-hidden="true" />
                {business.phoneDisplay}
              </a>
              <a className="ftr__link ftr__line" href={business.smsHref}>
                <MessageSquare size={14} strokeWidth={2.1} aria-hidden="true" />
                Text {business.phoneDisplay}
              </a>
              <a className="ftr__link ftr__line" href={business.emailHref}>
                <Mail size={14} strokeWidth={2.1} aria-hidden="true" />
                {business.email}
              </a>
            </address>
          </Reveal>
        </Stagger>
      </div>

      <div className="ftr__base">
        <div className="shell ftr__base-inner">
          <p className="ftr__copy">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
          <p className="ftr__demo">
            Unsolicited demo concept — not affiliated with the business, set to noindex.
          </p>
        </div>
      </div>
    </footer>
  )
}
