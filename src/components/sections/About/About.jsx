import { useLanguage }    from '@/context/LanguageContext'
import aboutImage        from '@assets/images/about-garden.webp'
import aboutImageSrcSet  from '@assets/images/about-garden.webp?w=640;1280;1920&format=webp&as=srcset'
import styles            from './About.module.css'

const t = {
  en: {
    heading:     'We Make Your Dream Garden a Reality',
    body:        'A garden is your individual piece of nature – it can be your personal recreational area and haven of peace from the stresses of everyday life, a refuge, a water park, a sports or playground for the whole family, or a very private wellness oasis…',
    cta_text:    'Stroll through the garden worlds of my Garden and be inspired!',
    btn:         'Contact us',
  },
  fr: {
    heading:     'Nous faisons de votre rêve de jardin une réalité',
    body:        'Un jardin est votre espace naturel unique – il peut être votre espace de loisirs personnel et un havre de paix loin du stress quotidien, un refuge, un parc aquatique, un terrain de jeux pour toute la famille, ou une oasis de bien-être très privée…',
    cta_text:    'Parcourez les univers de jardin de my Garden et laissez-vous inspirer !',
    btn:         'Contactez-nous',
  },
  de: {
    heading:     'Wir machen Ihren Traumgarten Wirklichkeit',
    body:        'Ein Garten ist Ihr individuelles Stück Natur – er kann Ihr persönlicher Erholungsbereich und ruhiger Rückzugsort vom Alltag sein, ein Refugium, ein Wasserpark, ein Sport- oder Spielplatz für die ganze Familie oder eine sehr private Wellness-Oase…',
    cta_text:    'Stöbern Sie durch die Gartenwelten von my Garden und lassen Sie sich inspirieren!',
    btn:         'Kontakt',
  },
}

export default function About() {
  const { lang } = useLanguage()
  const content  = t[lang]

  return (
    <section className={styles.section} id="about" aria-label="About us">
      <div className={styles.imageWrapper}>
        <img
          src={aboutImage}
          srcSet={aboutImageSrcSet}
          sizes="100vw"
          alt="Beautiful garden landscape"
          className={styles.bgImage}
        />

        {/* Glass card */}
        <div className={styles.card}>
          <h2 className={styles.heading}>{content.heading}</h2>
          <p className={styles.body}>{content.body}</p>
          <p className={styles.ctaText}>{content.cta_text}</p>
          <a href="#contact" className={styles.btn}>{content.btn}</a>
        </div>
      </div>
    </section>
  )
}
