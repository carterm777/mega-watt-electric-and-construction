import { Reveal, Stagger, useParallax } from '../lib/motion.jsx'
import { story } from '../data/site.js'
import './Story.css'

export default function Story() {
  const parallaxRef = useParallax(0.08)

  return (
    <section className="story field-void" id="story" aria-labelledby="story-title">
      <div className="shell story__inner">
        <Reveal className="story__media" variant="clip">
          <span className="story__plane" aria-hidden="true" />
          <span className="story__plate duo">
            <img
              className="duo__img"
              ref={parallaxRef}
              src={`/images/${story.image.name}.webp`}
              srcSet={`/images/${story.image.name}-800.webp 800w, /images/${story.image.name}.webp 1600w`}
              sizes="(max-width: 940px) 100vw, 42vw"
              width={story.image.width}
              height={story.image.height}
              alt={story.image.alt}
              loading="lazy"
              decoding="async"
            />
          </span>
        </Reveal>

        <div className="story__copy">
          <span className="label story__eyebrow">
            <span className="label__tick" aria-hidden="true" />
            {story.eyebrow}
          </span>
          <h2 className="story__title" id="story-title">
            {story.heading}
          </h2>

          <Stagger className="story__blocks" step={140}>
            {story.blocks.map((block) => (
              <Reveal className="story__block" variant="rise" key={block.label}>
                <h3 className="story__block-label">{block.label}</h3>
                <p className="story__block-body">{block.body}</p>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
