import { useLanguage } from '@/context/LanguageContext'
import styles from './Services.module.css'

const t = {
  en: {
    heading: 'Our Services',
    services: [
      {
        id:      'ponds',
        shape:   'circle',
        color:   'teal',
        title:   'Swimming Ponds\n& Living Pool',
        items:   ['Biotopes', 'Swimming Ponds', 'Living Pools', 'Garden Ponds', 'Water in the Garden', 'Fountains & Water Features'],
        extras:  [],
        btn:     'See more',
        href:    '/swimming-ponds',
      },
      {
        id:      'roofs',
        shape:   'triangle',
        color:   'lime',
        title:   'Green Roofs',
        items:   ['Extensive Greening', 'Intensive Greening', 'Facade Greening', 'Roof Greening from Carport', 'Up to Industrial Halls'],
        extras:  ['Maintenance Work'],
        btn:     'See more',
        href:    '/green-roofs',
      },
      {
        id:      'gardens',
        shape:   'square',
        color:   'olive',
        title:   'Gardens',
        items:   ['Lawn Systems', 'Planting', 'Stonework', 'Irrigation Systems', 'Masonry', 'Fences'],
        extras:  ['Mowing Work', 'Seasonal Maintenance Service'],
        btn:     'See more',
        href:    '/gardens',
      },
    ],
  },
  fr: {
    heading: 'Nos Services',
    services: [
      {
        id:      'ponds',
        shape:   'circle',
        color:   'teal',
        title:   'Étangs de Baignade\n& Piscine Naturelle',
        items:   ['Biotopes', 'Étangs de Baignade', 'Piscines Naturelles', 'Étangs de Jardin', 'Eau dans le Jardin', "Fontaines & Jeux d'Eau"],
        extras:  [],
        btn:     'Voir plus',
        href:    '/swimming-ponds',
      },
      {
        id:      'roofs',
        shape:   'triangle',
        color:   'lime',
        title:   'Toits Verts',
        items:   ['Végétalisation Extensive', 'Végétalisation Intensive', 'Végétalisation de Façade', 'Toiture depuis Carport', "Jusqu'aux Halls Industriels"],
        extras:  ["Travaux d'Entretien"],
        btn:     'Voir plus',
        href:    '/green-roofs',
      },
      {
        id:      'gardens',
        shape:   'square',
        color:   'olive',
        title:   'Jardins',
        items:   ['Systèmes de Pelouse', 'Plantation', 'Travaux en Pierre', "Systèmes d'Irrigation", 'Maçonnerie', 'Clôtures'],
        extras:  ['Travaux de Tonte', "Service d'Entretien Saisonnier"],
        btn:     'Voir plus',
        href:    '/gardens',
      },
    ],
  },
  de: {
    heading: 'Unsere Leistungen',
    services: [
      {
        id:      'ponds',
        shape:   'circle',
        color:   'teal',
        title:   'Schwimmteiche\n& Living Pool',
        items:   ['Biotope', 'Schwimmteiche', 'Living Pools', 'Gartenteiche', 'Wasser Im Garten', 'Brunnen – Wasserspiele'],
        extras:  [],
        btn:     'Mehr sehen',
        href:    '/swimming-ponds',
      },
      {
        id:      'roofs',
        shape:   'triangle',
        color:   'lime',
        title:   'Dachbegrünung',
        items:   ['Extensivbegrünung', 'Intensivbegrünung', 'Fassadenbegrünung', 'Dachbegrünen Vom Carport', 'Bis Zu Industriehallen'],
        extras:  ['Pflegearbeiten'],
        btn:     'Mehr sehen',
        href:    '/green-roofs',
      },
      {
        id:      'gardens',
        shape:   'square',
        color:   'olive',
        title:   'Gärten',
        items:   ['Rasenanlagen', 'Pflanzungen', 'Steinarbeiten', 'Bewässerungssysteme', 'Mauerbau', 'Zäune'],
        extras:  ['Mäharbeiten', 'Pflegearbeiten Saisonaler Service'],
        btn:     'Mehr sehen',
        href:    '/gardens',
      },
    ],
  },
}

export default function Services() {
  const { lang } = useLanguage()
  const content  = t[lang]

  return (
    <section className={styles.section} id="services" aria-label="Our services">
      <div className={styles.inner}>

        <h2 className={styles.heading}>{content.heading}</h2>

        <div className={styles.grid}>
          {content.services.map(service => (
            <div key={service.id} className={styles.card} data-animate>

              {/* Icon + Title row */}
              <div className={styles.iconTitleRow}>
                <div className={`${styles.icon} ${styles[`icon_${service.color}`]} ${styles[`shape_${service.shape}`]}`} aria-hidden="true" />
                <h3 className={`${styles.title} ${styles[`title_${service.color}`]}`}>
                  {service.title.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < service.title.split('\n').length - 1 && <br />}</span>
                  ))}
                </h3>
              </div>

              {/* Main list */}
              <ul className={styles.list}>
                {service.items.map(item => (
                  <li key={item} className={styles.listItem}>• {item}</li>
                ))}
              </ul>

              {/* Extras with divider */}
              {service.extras.length > 0 && (
                <>
                  <hr className={`${styles.divider} ${styles[`divider_${service.color}`]}`} />
                  <ul className={styles.list}>
                    {service.extras.map(item => (
                      <li key={item} className={styles.listItem}>• {item}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Button */}
              <a href={service.href} className={`${styles.btn} ${styles[`btn_${service.color}`]}`}>
                {service.btn}
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
