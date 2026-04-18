import { useLanguage } from '@/context/LanguageContext'
import styles from './Testimonials.module.css'

const t = {
  en: {
    heading:     'What Our Clients Say',
    subheading:  'Real projects, real results — from Luxembourg homeowners and businesses who trusted my Garden with their outdoor space.',
    testimonials: [
      {
        id:      'marc',
        quote:   "my Garden transformed our backyard into something we never thought possible. The natural swimming pond is absolutely stunning — our children practically live in it during summer. Ulrich and his team were professional, tidy, and delivered exactly what they promised, on time.",
        name:    'Marc Schmit',
        location:'Luxembourg-Ville',
        service: 'Swimming Pond',
      },
      {
        id:      'sophie',
        quote:   "We had a completely overgrown plot and no idea where to start. my Garden designed and built us a beautiful, low-maintenance garden from scratch. The irrigation system alone has saved us hours of work every week. I would recommend them without hesitation.",
        name:    'Sophie Müller',
        location:'Differdange',
        service: 'Garden Design',
      },
      {
        id:      'jean',
        quote:   "We installed a certified green roof on our new commercial building. The process was seamless from start to finish — planning, permits, installation, and follow-up maintenance were all handled by my Garden. Outstanding professionalism and a result we are genuinely proud of.",
        name:    'Jean-Pierre Wagner',
        location:'Esch-sur-Alzette',
        service: 'Green Roof',
      },
    ],
  },
  fr: {
    heading:     'Ce que Disent Nos Clients',
    subheading:  "Des projets concrets, des résultats réels — des propriétaires et entreprises luxembourgeois qui ont confié leur espace extérieur à my Garden.",
    testimonials: [
      {
        id:      'marc',
        quote:   "my Garden a transformé notre jardin en quelque chose que nous n'aurions jamais imaginé. Le bassin de baignade naturel est absolument magnifique — nos enfants y passent tout l'été. Ulrich et son équipe ont été professionnels, soigneux et ont livré exactement ce qui avait été promis, dans les délais.",
        name:    'Marc Schmit',
        location:'Luxembourg-Ville',
        service: 'Bassin de Baignade',
      },
      {
        id:      'sophie',
        quote:   "Nous avions un terrain complètement envahi et ne savions pas par où commencer. my Garden nous a conçu et aménagé un beau jardin facile d'entretien, de A à Z. Le système d'irrigation seul nous fait gagner des heures chaque semaine. Je les recommande sans hésitation.",
        name:    'Sophie Müller',
        location:'Differdange',
        service: 'Aménagement de Jardin',
      },
      {
        id:      'jean',
        quote:   "Nous avons installé un toit vert certifié sur notre nouveau bâtiment commercial. Le processus a été fluide du début à la fin — planification, permis, installation et suivi ont tous été gérés par my Garden. Un professionnalisme remarquable et un résultat dont nous sommes vraiment fiers.",
        name:    'Jean-Pierre Wagner',
        location:'Esch-sur-Alzette',
        service: 'Toit Vert',
      },
    ],
  },
  de: {
    heading:     'Was Unsere Kunden Sagen',
    subheading:  'Echte Projekte, echte Ergebnisse — von Luxemburger Hausbesitzern und Unternehmen, die my Garden mit ihrem Außenbereich vertraut haben.',
    testimonials: [
      {
        id:      'marc',
        quote:   "my Garden hat unseren Garten in etwas verwandelt, das wir nie für möglich gehalten hätten. Der natürliche Schwimmteich ist absolut wunderschön — unsere Kinder verbringen den ganzen Sommer darin. Ulrich und sein Team waren professionell, sauber und haben genau das geliefert, was versprochen wurde — pünktlich.",
        name:    'Marc Schmit',
        location:'Luxemburg-Stadt',
        service: 'Schwimmteich',
      },
      {
        id:      'sophie',
        quote:   "Wir hatten ein völlig verwildertes Grundstück und wussten nicht, wo wir anfangen sollten. my Garden hat uns von Grund auf einen schönen, pflegeleichten Garten geplant und gebaut. Das Bewässerungssystem allein spart uns jede Woche Stunden Arbeit. Ich empfehle sie ohne Zögern.",
        name:    'Sophie Müller',
        location:'Differdange',
        service: 'Gartengestaltung',
      },
      {
        id:      'jean',
        quote:   "Wir haben eine zertifizierte Dachbegrünung auf unserem neuen Geschäftsgebäude installiert. Der Prozess verlief von Anfang bis Ende reibungslos — Planung, Genehmigungen, Installation und Nachsorge wurden alle von my Garden übernommen. Hervorragende Professionalität und ein Ergebnis, auf das wir wirklich stolz sind.",
        name:    'Jean-Pierre Wagner',
        location:'Esch-sur-Alzette',
        service: 'Dachbegrünung',
      },
    ],
  },
}

function StarRating() {
  return (
    <div className={styles.stars} aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M9 1.5L11.0963 6.56434L16.5623 6.97336L12.3998 10.5607L13.7063 15.8766L9 13.05L4.29366 15.8766L5.60017 10.5607L1.43769 6.97336L6.90366 6.56434L9 1.5Z"
            fill="var(--color-olive)"
          />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { lang } = useLanguage()
  const content  = t[lang]

  return (
    <section className={styles.section} id="testimonials" aria-label="Client testimonials">
      <div className={styles.inner}>

        <div className={styles.header}>
          <h2 className={styles.heading}>{content.heading}</h2>
          <p className={styles.subheading}>{content.subheading}</p>
        </div>

        <div className={styles.grid}>
          {content.testimonials.map(item => (
            <article key={item.id} className={styles.card}>
              <StarRating />
              <blockquote className={styles.quote}>
                <p className={styles.quoteText}>"{item.quote}"</p>
              </blockquote>
              <footer className={styles.cardFooter}>
                <div className={styles.clientInfo}>
                  <span className={styles.clientName}>{item.name}</span>
                  <span className={styles.clientLocation}>{item.location}</span>
                </div>
                <span className={styles.serviceBadge}>{item.service}</span>
              </footer>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
