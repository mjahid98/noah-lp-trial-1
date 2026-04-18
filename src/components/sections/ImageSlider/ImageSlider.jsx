import { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay        from 'embla-carousel-autoplay'
import styles from './ImageSlider.module.css'

/**
 * ImageSlider — full-width image-only carousel with consistent auto-advance.
 *
 * images: [{ src: string, alt: string }]
 */
export default function ImageSlider({ images = [] }) {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }))
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 35 },
    [autoplay.current]
  )
  const [current, setCurrent] = useState(0)
  const containerRef = useRef(null)

  /* Hide the container before first paint so there's no flash of un-animated state */
  useLayoutEffect(() => {
    if (containerRef.current) containerRef.current.dataset.sliderPending = '1'
  }, [])

  /* Reveal with border-radius animation when the container enters the viewport */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      delete el.dataset.sliderPending
      el.classList.add(styles.revealed)
      obs.disconnect()
    }, { threshold: 0, rootMargin: '-10% 0px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  /* Reset the live plugin timer so arrow/dot clicks don't cause a quick double-advance */
  const resetAutoplay = useCallback(() => {
    emblaApi?.plugins()?.autoplay?.reset()
  }, [emblaApi])

  const prev = useCallback(() => { emblaApi?.scrollPrev(); resetAutoplay() }, [emblaApi, resetAutoplay])
  const next = useCallback(() => { emblaApi?.scrollNext(); resetAutoplay() }, [emblaApi, resetAutoplay])
  const goTo = useCallback((i) => { emblaApi?.scrollTo(i); resetAutoplay() }, [emblaApi, resetAutoplay])

  return (
    <section className={styles.section}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.wrapper} ref={emblaRef}>
          <div className={styles.track}>
            {images.map((img, i) => (
              <div key={i} className={styles.slide}>
                <img src={img.src} alt={img.alt} className={styles.image} draggable={false} />
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous image">
              <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
                <path d="M24 28.8L14.4 19.2L24 9.6" stroke="white" strokeOpacity="0.8" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next image">
              <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
                <path d="M14.4 28.8L24 19.2L14.4 9.6" stroke="white" strokeOpacity="0.8" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.dots}>
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
