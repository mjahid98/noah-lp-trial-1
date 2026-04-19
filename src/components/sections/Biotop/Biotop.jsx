import { useLanguage } from '@/context/LanguageContext'
import ImageOverlayCard from '@ui/ImageOverlayCard/ImageOverlayCard'
import poolsImg         from '@assets/images/swimming-pools-from-biotop.webp'
import pondsImg         from '@assets/images/swimming-ponds-from-biotop.webp'
import styles           from './Biotop.module.css'

const t = {
  en: {
    heading_main:    'We create all our swimming ponds and living pools with our',
    heading_accent:  'specialized quality partner, Biotop',
    body:            "Natural pools from my Garden are aesthetically pleasing and idyllic, and they are all built with the expertise of our partner Biotop.",
    cta_text:        'Visit our licensed partner and be inspired.',
    btn:             'Contact us',
    card1_label:     'Swimming Pools from Biotop',
    card2_label:     'Swimming Ponds from Biotop',
  },
  fr: {
    heading_main:    'Nous créons toutes nos piscines naturelles et bassins de vie avec notre',
    heading_accent:  'partenaire qualité spécialisé, Biotop',
    body:            "Les piscines naturelles de my Garden sont aussi esthétiques qu'idylliques, et elles sont réalisées avec l'expertise de notre partenaire Biotop.",
    cta_text:        'Visitez notre partenaire agréé et laissez-vous inspirer.',
    btn:             'Contactez-nous',
    card1_label:     'Piscines de Biotop',
    card2_label:     'Étangs de Baignade de Biotop',
  },
  de: {
    heading_main:    'Alle unsere Schwimmteiche und Living Pools entstehen mit unserem',
    heading_accent:  'spezialisierten Qualitätspartner, Biotop',
    body:            'Naturpools von my Garden sind ästhetisch und idyllisch und werden mit der Expertise unseres Partners Biotop gebaut.',
    cta_text:        'Besuchen Sie unseren lizenzierten Partner und lassen Sie sich inspirieren.',
    btn:             'Kontakt',
    card1_label:     'Schwimmbäder von Biotop',
    card2_label:     'Schwimmteiche von Biotop',
  },
}

export default function Biotop() {
  const { lang } = useLanguage()
  const content  = t[lang]

  return (
    <section className={styles.section} id="biotop" aria-label="Biotop partner">
      <div className={styles.inner}>

        {/* ── Left — text ── */}
        <div className={styles.textCol}>
          <h2 className={styles.heading}>
            <span className={styles.headingMain}>{content.heading_main} </span>
            <em className={styles.headingAccent}>{content.heading_accent}</em>
          </h2>
          <p className={styles.body}>{content.body}</p>
          <p className={styles.ctaText}>{content.cta_text}</p>
          <a href="#contact" className={styles.btn}>{content.btn}</a>
        </div>

        {/* ── Right — stacked image cards ── */}
        <div className={styles.imageCol} data-animate>
          <ImageOverlayCard
            src={poolsImg}
            alt={content.card1_label}
            label={content.card1_label}
          />
          <ImageOverlayCard
            src={pondsImg}
            alt={content.card2_label}
            label={content.card2_label}
          />
        </div>

      </div>
    </section>
  )
}
