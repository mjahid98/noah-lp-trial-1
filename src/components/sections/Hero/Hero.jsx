import { useLanguage } from '@/context/LanguageContext'
import scrollIcon from '@assets/icons/scroll-down-icon.svg'
import heroBg from '@assets/images/home-hero-image.jpg'
import styles from './Hero.module.css'

const t = {
  en: {
    headline_1:    'We are your quality partner',
    headline_2:    'for garden & landscape',
    cta_primary:   'Request a Free Quote',
    cta_secondary: 'Explore Our Services',
  },
  fr: {
    headline_1:    'Votre partenaire de qualité',
    headline_2:    'pour jardin & paysage',
    cta_primary:   'Demander un Devis Gratuit',
    cta_secondary: 'Nos Services',
  },
  de: {
    headline_1:    'Wir sind Ihr Qualitätspartner',
    headline_2:    'für Garten & Landschaft',
    cta_primary:   'Kostenloses Angebot',
    cta_secondary: 'Unsere Leistungen',
  },
}

export default function Hero() {
  const { lang } = useLanguage()
  const content = t[lang]

  return (
    <section className={styles.section} aria-label="Hero">
      <div className={styles.imageWrapper}>

        {/* Background image */}
        <img
          src={heroBg}
          alt="Beautiful garden with natural swimming pond"
          className={styles.bgImage}
        />

        {/* Dark overlay */}
        <div className={styles.overlay} />

        {/* Content */}
        <div className={styles.content}>
          <h1 className={styles.headline}>
            {content.headline_1}<br />
            {content.headline_2}
          </h1>

          <div className={styles.ctaGroup}>
            <a href="#contact" className={styles.ctaBtn}>
              {content.cta_primary}
            </a>
            <a href="#services" className={styles.ctaBtnSecondary}>
              {content.cta_secondary}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#stats" className={styles.scrollDown} aria-label="Scroll down">
          <img src={scrollIcon} alt="" aria-hidden="true" />
        </a>

      </div>
    </section>
  )
}
