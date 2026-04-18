import { useState, useEffect, useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './ServiceCards.module.css'

/**
 * ServiceCards — portrait card grid on desktop, auto-sliding carousel on mobile.
 *
 * cards: [{ icon: <svg/img>, title: string, description: string }]
 * color: 'teal' | 'lime' | 'olive'
 */
export default function ServiceCards({ cards = [], color = 'teal', columns = 4, title, cardMinHeight, noAspectRatio = false }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [current, setCurrent] = useState(0)
  const contentRefs = useRef([])

  /* Equalise content div heights on desktop so icons/titles align across cards.
     Recalculates on mount, card change, and window resize (incl. orientation). */
  useEffect(() => {
    const equalise = () => {
      const divs = contentRefs.current.filter(Boolean)
      if (!divs.length) return
      divs.forEach(d => { d.style.height = 'auto' })
      const maxH = Math.max(...divs.map(d => d.offsetHeight))
      divs.forEach(d => { d.style.height = `${maxH}px` })
    }

    equalise()

    const observer = new ResizeObserver(equalise)
    const divs = contentRefs.current.filter(Boolean)
    divs.forEach(d => observer.observe(d))

    return () => observer.disconnect()
  }, [cards])

  /* Track selected slide */
  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  /* Auto-slide every 5s — pauses on pointer interaction */
  useEffect(() => {
    if (!emblaApi) return
    let timer = setInterval(() => emblaApi.scrollNext(), 5000)
    const pause  = () => clearInterval(timer)
    const resume = () => { timer = setInterval(() => emblaApi.scrollNext(), 5000) }
    emblaApi.on('pointerDown', pause)
    emblaApi.on('pointerUp',   resume)
    return () => {
      clearInterval(timer)
      emblaApi.off('pointerDown', pause)
      emblaApi.off('pointerUp',   resume)
    }
  }, [emblaApi])

  const goTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi])

  return (
    <section className={styles.section}>

      {title && <h2 className={`${styles.sectionTitle} ${styles[`sectionTitle_${color}`]}`}>{title}</h2>}

      {/* ── Desktop grid — hidden on mobile ── */}
      <ul className={`${styles.grid} ${columns === 3 ? styles.grid3 : ''}`}>
        {cards.map((card, i) => (
          <li key={i} className={`${styles.card} ${styles[`card_${color}`]}`} style={{ ...(cardMinHeight ? { minHeight: cardMinHeight } : {}), ...(noAspectRatio ? { aspectRatio: 'unset' } : {}) }} data-animate>
            <div
              className={styles.content}
              ref={el => { contentRefs.current[i] = el }}
            >
              <div className={styles.icon}>{card.icon}</div>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.description}>{card.description}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* ── Mobile carousel — hidden on desktop ── */}
      <div className={styles.carousel}>
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaTrack}>
            {cards.map((card, i) => (
              <div key={i} className={styles.emblaSlide}>
                <div className={`${styles.card} ${styles[`card_${color}`]}`}>
                  <div className={styles.icon}>{card.icon}</div>
                  <h3 className={styles.title}>{card.title}</h3>
                  <p className={styles.description}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className={styles.dots}>
          {cards.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles[`dotActive_${color}`] : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  )
}
