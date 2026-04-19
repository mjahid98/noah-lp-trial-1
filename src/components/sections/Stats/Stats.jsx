import { useLanguage } from '@/context/LanguageContext'
import { useCountUp } from '@hooks/useCountUp'
import grassImage       from '@assets/images/grass-image.webp'
import grassImageSrcSet from '@assets/images/grass-image.webp?w=480;768;1280&format=webp&as=srcset'
import styles from './Stats.module.css'

const t = {
  en: {
    stats: [
      { value: 20,  suffix: '+', label: 'Years of experience' },
      { value: 150, suffix: '',  label: 'Completed projects'  },
      { value: 100, suffix: '',  label: 'Happy clients'       },
    ],
    description: "After more than 20 years of creating gardens and landscapes, we have built solid expertise while staying open to new ideas, because every garden is unique",
  },
  fr: {
    stats: [
      { value: 20,  suffix: '+', label: "Ans d'expérience"   },
      { value: 150, suffix: '',  label: 'Projets réalisés'    },
      { value: 100, suffix: '',  label: 'Clients satisfaits'  },
    ],
    description: "Après plus de 20 ans de création de jardins et de paysages, nous avons acquis une solide expertise tout en restant ouverts aux nouvelles idées, car chaque jardin est unique",
  },
  de: {
    stats: [
      { value: 20,  suffix: '+', label: 'Jahre Erfahrung'           },
      { value: 150, suffix: '',  label: 'Abgeschlossene Projekte'    },
      { value: 100, suffix: '',  label: 'Zufriedene Kunden'          },
    ],
    description: "Nach mehr als 20 Jahren der Garten- und Landschaftsgestaltung haben wir solide Expertise gewonnen und bleiben dennoch offen für neue Ideen, denn jeder Garten ist einzigartig",
  },
}

function StatItem({ value, suffix, label }) {
  const { count, ref } = useCountUp(value, 2000)
  return (
    <div className={styles.statItem} ref={ref} data-animate>
      <span className={styles.statValue}>{count}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export default function Stats() {
  const { lang }  = useLanguage()
  const content   = t[lang]

  return (
    <section className={styles.section} id="stats" aria-label="Statistics">
      <div className={styles.inner}>

        {/* Left — image, no padding, goes to left viewport edge */}
        <img
          src={grassImage}
          srcSet={grassImageSrcSet}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Lush green garden grass"
          className={styles.image}
          data-animate
        />

        {/* Right — stats + divider + description */}
        <div className={styles.contentCol}>
          <div className={styles.statsRow}>
            {content.stats.map(stat => (
              <StatItem
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>

          <hr className={styles.divider} />

          <p className={styles.description}>
            {content.description}
          </p>
        </div>

      </div>
    </section>
  )
}
