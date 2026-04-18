import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './FeatureSection.module.css'

export default function FeatureSection({
  id,
  color = 'teal',
  shape = 'circle',
  title,
  description,
  bullets = [],
  partnerLabel,
  partnerHref = '#',
  btnLabel,
  btnHref = '#',
  images = [],
  reverse = false,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  const prev   = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next   = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const goTo   = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi])

  return (
    <section
      id={id}
      className={`${styles.section} ${reverse ? styles.reverse : ''}`}
      aria-label={title}
    >
      {/* ── Image slider ── */}
      <div className={styles.imageCol} data-animate>
        <div className={styles.sliderWrapper}>
          <div className={styles.slider} ref={emblaRef}>
            <div className={styles.track}>
              {images.length > 0 ? images.map((src, i) => (
                <div key={i} className={styles.slide}>
                  <img src={src} alt={title} className={styles.image} draggable={false} />
                </div>
              )) : (
                <div className={styles.slide}>
                  <div className={`${styles.imagePlaceholder} ${styles[`placeholder_${color}`]}`} />
                </div>
              )}
            </div>
          </div>

          {images.length > 1 && (
            <>
              <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous image">
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
                  <path d="M24.0004 28.8001L14.4004 19.2001L24.0004 9.6001" stroke="white" strokeOpacity="0.69" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next image">
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
                  <path d="M14.4004 28.8001L24.0004 19.2001L14.4004 9.6001" stroke="white" strokeOpacity="0.69" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Pagination dots — mobile only */}
        {images.length > 1 && (
          <div className={styles.pgDots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.pgDot} ${i === current ? styles[`pgDotActive_${color}`] : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className={styles.contentCol}>

        <div className={styles.iconTitleRow}>
          <div className={`${styles.icon} ${styles[`icon_${color}`]} ${styles[`shape_${shape}`]}`} aria-hidden="true" />
          <h2 className={`${styles.title} ${styles[`title_${color}`]}`}>{title}</h2>
        </div>

        <p className={styles.description}>{description}</p>

        {bullets.length > 0 && (
          <>
            <hr className={`${styles.divider} ${styles[`divider_${color}`]}`} />
            <ul className={styles.bullets}>
              {bullets.map((item, i) => (
                <li key={i} className={styles.bulletItem}>
                  <span className={`${styles.dot} ${styles[`dot_${color}`]}`}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}

        {partnerLabel && (
          <a href={partnerHref} className={styles.partnerLink}>{partnerLabel}</a>
        )}

        <a href={btnHref} className={`${styles.btn} ${styles[`btn_${color}`]}`}>{btnLabel}</a>

      </div>
    </section>
  )
}
