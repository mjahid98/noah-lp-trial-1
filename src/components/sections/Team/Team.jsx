import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useLanguage }  from '@/context/LanguageContext'
import styles           from './Team.module.css'

import img1 from '@assets/images/team-img-1.webp'
import img2 from '@assets/images/team-img-2.webp'
import img3 from '@assets/images/team-img-3.webp'
import img4 from '@assets/images/team-img-4.webp'

const photos = [img1, img2, img3, img4]

const t = {
  en: {
    title:       'Our Team',
    description: 'Our team of professionals has been making gardens more beautiful and inviting for over twenty years',
    photoAlts:   ['Team member 1', 'Team member 2', 'Team member 3', 'Team member 4'],
  },
  fr: {
    title:       'Notre Équipe',
    description: 'Notre équipe de professionnels embellit et aménage les jardins depuis plus de vingt ans',
    photoAlts:   ["Membre de l'équipe 1", "Membre de l'équipe 2", "Membre de l'équipe 3", "Membre de l'équipe 4"],
  },
  de: {
    title:       'Unser Team',
    description: 'Unser Team aus Fachleuten verschönert und gestaltet Gärten seit über zwanzig Jahren',
    photoAlts:   ['Teammitglied 1', 'Teammitglied 2', 'Teammitglied 3', 'Teammitglied 4'],
  },
}

export default function Team() {
  const { lang }    = useLanguage()
  const content     = t[lang]
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  const goTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi])

  return (
    <section className={styles.section} id="team" aria-label="Our team">

      <div className={styles.header}>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.description}>{content.description}</p>
      </div>

      {/* Desktop grid */}
      <div className={styles.grid}>
        {photos.map((src, i) => (
          <div key={i} className={styles.cardWrapper} data-animate>
            <img src={src} alt={content.photoAlts[i]} className={styles.gridImage} />
          </div>
        ))}
      </div>

      {/* Mobile carousel — Embla */}
      <div className={styles.carousel}>
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaTrack}>
            {photos.map((src, i) => (
              <div key={i} className={styles.emblaSlide}>
                <img src={src} alt={content.photoAlts[i]} className={styles.carouselImage} draggable={false} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className={styles.dots}>
          {photos.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  )
}
