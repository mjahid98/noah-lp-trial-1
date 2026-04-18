import { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './ServiceGallery.module.css'

/**
 * ServiceGallery — centered peek carousel.
 * Active slide: full opacity. Adjacent slides: dimmed and partially visible.
 *
 * images: [{ src: string, alt: string }]
 */
export default function ServiceGallery({ images = [] }) {
  /* Duplicate slides when there are too few for Embla's loop clones to fill
     the viewport on both sides (needed for < 5 slides at ~48% width) */
  const slides = images.length < 5
    ? [...images, ...images, ...images]
    : images

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop:          true,
    align:         'center',
    containScroll: false,
  })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  /* Auto-slide every 3s — pauses on hover */
  useEffect(() => {
    if (!emblaApi) return
    let timer = setInterval(() => emblaApi.scrollNext(), 3000)
    const pause  = () => clearInterval(timer)
    const resume = () => { timer = setInterval(() => emblaApi.scrollNext(), 3000) }
    const root = emblaApi.rootNode()
    root.addEventListener('mouseenter', pause)
    root.addEventListener('mouseleave', resume)
    return () => {
      clearInterval(timer)
      root.removeEventListener('mouseenter', pause)
      root.removeEventListener('mouseleave', resume)
    }
  }, [emblaApi])

  return (
    <section className={styles.section}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.track}>
          {slides.map((img, i) => (
            <div
              key={i}
              className={`${styles.slide} ${i === current ? styles.slideActive : styles.slideDim}`}
            >
              <img src={img.src} alt={img.alt} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
