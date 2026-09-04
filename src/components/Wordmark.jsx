import './Wordmark.css'

/**
 * The mark: a hard-edged "MW" monogram block. Two stacked planes — arc-spark
 * over arctic ink — echoing the page's colour-blocking language. Set in the
 * display face so the logotype and the H1 share one voice.
 */
export default function Wordmark({ variant = 'dark' }) {
  return (
    <span className="wm" data-variant={variant}>
      <span className="wm__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="40" height="40" role="presentation" focusable="false">
          <rect className="wm__plate" x="0" y="0" width="40" height="40" />
          <rect className="wm__plane" x="0" y="0" width="40" height="7" />
          {/* M, then the same letterform flipped on Y to draw the W — one
              contour, so both glyphs carry identical stroke weight. */}
          <g transform="translate(-0.1, 6) scale(0.72)">
            <path
              className="wm__glyph"
              d="M7 33V13h4.6l4.6 10.4L20.8 13h4.6v20h-3.9V20.6l-3.7 8.2h-2.2l-3.7-8.2V33H7Z"
            />
          </g>
          <g transform="translate(14.6, 39.2) scale(0.72, -0.72)">
            <path
              className="wm__glyph"
              d="M7 33V13h4.6l4.6 10.4L20.8 13h4.6v20h-3.9V20.6l-3.7 8.2h-2.2l-3.7-8.2V33H7Z"
            />
          </g>
        </svg>
      </span>
      <span className="wm__type">
        <span className="wm__name">Mega Watt</span>
        <span className="wm__sub">Electric &amp; Construction</span>
      </span>
    </span>
  )
}
