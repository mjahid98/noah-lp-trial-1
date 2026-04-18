import { useLanguage } from '@/context/LanguageContext'
import quoteIcon       from '@assets/icons/quote-icon.svg'
import logo            from '@assets/logo/logo-secondary.svg'
import photo           from '@assets/images/Ulrich-Kraft.webp'
import styles          from './DirectorQuote.module.css'

const t = {
  en: {
    title:       'My name is Ulrich Kraft and I am the Managing Director of my Garden',
    description: 'Personal contact is very important to me – a non-binding conversation is the best way to get a feel for us. So feel free to contact us anytime via email, contact form, or phone – we look forward to getting to know you!',
    photoAlt:    'Ulrich Kraft – Managing Director',
  },
  fr: {
    title:       "Je m'appelle Ulrich Kraft et je suis le Directeur Général de my Garden",
    description: "Le contact personnel est très important pour moi – une conversation sans engagement est la meilleure façon de mieux nous connaître. N'hésitez pas à nous contacter par email, formulaire de contact ou téléphone – nous nous réjouissons de vous rencontrer !",
    photoAlt:    'Ulrich Kraft – Directeur Général',
  },
  de: {
    title:       'Mein Name ist Ulrich Kraft und ich bin der Geschäftsführer von my Garden',
    description: 'Persönlicher Kontakt ist mir sehr wichtig – ein unverbindliches Gespräch ist der beste Weg, um ein Gefühl für uns zu bekommen. Kontaktieren Sie uns jederzeit per E-Mail, Kontaktformular oder Telefon – wir freuen uns darauf, Sie kennenzulernen!',
    photoAlt:    'Ulrich Kraft – Geschäftsführer',
  },
}

export default function DirectorQuote() {
  const { lang }  = useLanguage()
  const content   = t[lang]

  return (
    <section className={styles.section} id="director" aria-label="Managing Director">
      <div className={styles.card}>

        {/* Col 1 — Photo (in-flow spacer + absolute image that overflows 70px above) */}
        <div className={styles.imageCol} data-animate>
          <img src={photo} alt={content.photoAlt} className={styles.photo} />
        </div>

        {/* Col 2 — Text content */}
        <div className={styles.textCol}>
          <img src={quoteIcon} alt="" aria-hidden="true" className={styles.quote} />
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.description}>{content.description}</p>
        </div>

        {/* Col 3 — Logo, bottom-aligned */}
        <div className={styles.logoCol}>
          <img src={logo} alt="my Garden" className={styles.logo} />
        </div>

      </div>
    </section>
  )
}
