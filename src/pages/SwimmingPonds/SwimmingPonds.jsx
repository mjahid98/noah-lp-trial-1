import { useLanguage }   from '@/context/LanguageContext'
import ServiceHero      from '@sections/ServiceHero/ServiceHero'
import ServiceHighlight from '@sections/ServiceHighlight/ServiceHighlight'
import ServiceCards     from '@sections/ServiceCards/ServiceCards'
import ServiceIntro     from '@sections/ServiceIntro/ServiceIntro'
import Biotop           from '@sections/Biotop/Biotop'
import BiotopVideo      from '@sections/BiotopVideo/BiotopVideo'
import ServiceGallery   from '@sections/ServiceGallery/ServiceGallery'

import heroBg           from '@assets/images/swimming-pond-and-living-pool.webp'
import poolImg          from '@assets/images/swimming-pools-from-biotop.webp'
import galleryImg1      from '@assets/images/swimming-pond-and-living-pool.webp'
import galleryImg2      from '@assets/images/swimming-pools-from-biotop.webp'
import galleryImg3      from '@assets/images/swimming-ponds-from-biotop.webp'
import iconEcoDesign    from '@assets/icons/eco-design-icon.webp'
import iconCustom       from '@assets/icons/custom-planning-icon.webp'
import iconInspiration  from '@assets/icons/inspiration-icon.webp'
import iconPartnership  from '@assets/icons/partnership-icon.webp'

const cards = {
  en: [
    {
      icon:        <img src={iconEcoDesign} alt="" />,
      title:       'Ecological Design',
      description: 'The systems work purely biologically, with natural filtration that supports clean, clear water without synthetic additives',
    },
    {
      icon:        <img src={iconCustom} alt="" />,
      title:       'Custom Planning',
      description: 'Your project is unique — from shape, depth, and layout to planting around the water, we adapt every detail to your vision',
    },
    {
      icon:        <img src={iconInspiration} alt="" />,
      title:       'Inspiration & Quality',
      description: 'We invite you to visit our demonstration facility, where you can get a feel for the serenity and visual beauty of our natural swimming solutions',
    },
    {
      icon:        <img src={iconPartnership} alt="" />,
      title:       'Expert Partnership',
      description: 'Our work is carried out with Biotop, a global leader in ecological pool design — ensuring world-class standards and long-term durability',
    },
  ],
  fr: [
    {
      icon:        <img src={iconEcoDesign} alt="" />,
      title:       'Design Écologique',
      description: 'Les systèmes fonctionnent de manière purement biologique, avec une filtration naturelle qui maintient une eau claire et propre sans additifs synthétiques',
    },
    {
      icon:        <img src={iconCustom} alt="" />,
      title:       'Planification Sur Mesure',
      description: 'Votre projet est unique — de la forme, la profondeur et la disposition aux plantations autour de l\'eau, nous adaptons chaque détail à votre vision',
    },
    {
      icon:        <img src={iconInspiration} alt="" />,
      title:       'Inspiration & Qualité',
      description: 'Nous vous invitons à visiter notre installation de démonstration, où vous pouvez ressentir la sérénité et la beauté visuelle de nos solutions de baignade naturelle',
    },
    {
      icon:        <img src={iconPartnership} alt="" />,
      title:       'Partenariat Expert',
      description: 'Notre travail est réalisé avec Biotop, leader mondial du design de piscines écologiques — garantissant des standards de classe mondiale et une durabilité à long terme',
    },
  ],
  de: [
    {
      icon:        <img src={iconEcoDesign} alt="" />,
      title:       'Ökologisches Design',
      description: 'Die Systeme arbeiten rein biologisch, mit natürlicher Filtration, die klares, sauberes Wasser ohne synthetische Zusätze gewährleistet',
    },
    {
      icon:        <img src={iconCustom} alt="" />,
      title:       'Individuelle Planung',
      description: 'Ihr Projekt ist einzigartig — von Form, Tiefe und Layout bis hin zur Bepflanzung rund ums Wasser passen wir jedes Detail an Ihre Vision an',
    },
    {
      icon:        <img src={iconInspiration} alt="" />,
      title:       'Inspiration & Qualität',
      description: 'Wir laden Sie ein, unsere Ausstellung zu besuchen, wo Sie die Ruhe und visuelle Schönheit unserer natürlichen Schwimmlösungen erleben können',
    },
    {
      icon:        <img src={iconPartnership} alt="" />,
      title:       'Expertenpartnerschaft',
      description: 'Unsere Arbeit erfolgt mit Biotop, einem weltweit führenden Unternehmen im ökologischen Pooldesign — für höchste Standards und langfristige Haltbarkeit',
    },
  ],
}

const t = {
  en: {
    heroTitle:      'Swimming Pond\n& Living Pool',
    btnLabel:       'Request a Free Quote',
    textBefore:     'Our swimming ponds and living pools offer a truly natural bathing experience: ',
    highlight:      'no chemicals, no chlorine, ',
    textAfter:      'just pristine water maintained through biological filtration',
    poolTitle:      'We design and build pools that blend seamlessly into your outdoor space —',
    poolTitleAccent:'from elegant modern swimming pools to sustainable natural pools',
    poolDesc1:      'Our approach combines aesthetics, engineering, and landscape integration. We create pools that look beautiful, function flawlessly, and are built to last — tailored to your space and vision.',
    poolDesc2:      'Natural pools offer crystal-clear water without chemicals or chlorine, while maintaining a natural harmony with the surrounding garden.',
    poolBtn:        'Contact us',
  },
  fr: {
    heroTitle:      'Étangs de Baignade\n& Piscine Naturelle',
    btnLabel:       'Demander un Devis Gratuit',
    textBefore:     'Nos étangs de baignade et piscines naturelles offrent une expérience vraiment naturelle : ',
    highlight:      'sans produits chimiques, sans chlore, ',
    textAfter:      'juste une eau pure entretenue par filtration biologique',
    poolTitle:      'Nous concevons et construisons des piscines qui s\'intègrent harmonieusement dans votre espace extérieur —',
    poolTitleAccent:'des piscines modernes élégantes aux bassins naturels durables',
    poolDesc1:      'Notre approche combine esthétique, ingénierie et intégration paysagère. Nous créons des piscines belles, fonctionnelles et durables — adaptées à votre espace et votre vision.',
    poolDesc2:      'Les piscines naturelles offrent une eau cristalline sans produits chimiques ni chlore, tout en maintenant une harmonie naturelle avec le jardin environnant.',
    poolBtn:        'Contactez-nous',
  },
  de: {
    heroTitle:      'Schwimmteiche\n& Living Pool',
    btnLabel:       'Kostenloses Angebot',
    textBefore:     'Unsere Schwimmteiche und Living Pools bieten ein wirklich natürliches Badeerlebnis: ',
    highlight:      'keine Chemikalien, kein Chlor, ',
    textAfter:      'nur klares Wasser, das durch biologische Filtration gepflegt wird',
    poolTitle:      'Wir entwerfen und bauen Pools, die sich nahtlos in Ihren Außenbereich einfügen —',
    poolTitleAccent:'von eleganten modernen Schwimmbädern bis hin zu nachhaltigen Naturpools',
    poolDesc1:      'Unser Ansatz vereint Ästhetik, Ingenieurskunst und Landschaftsintegration. Wir schaffen Pools, die schön aussehen, einwandfrei funktionieren und langlebig sind — abgestimmt auf Ihren Raum und Ihre Vision.',
    poolDesc2:      'Naturpools bieten kristallklares Wasser ohne Chemikalien oder Chlor und bewahren dabei die natürliche Harmonie mit dem umgebenden Garten.',
    poolBtn:        'Kontakt',
  },
}

export default function SwimmingPonds() {
  const { lang } = useLanguage()
  const c = t[lang]

  return (
    <>
      <ServiceHero
        title={c.heroTitle}
        bgImage={heroBg}
        alt="Natural swimming pond"
        color="teal"
        shape="circle"
        btnLabel={c.btnLabel}
        btnHref="#contact"
      />
      <ServiceHighlight
        textBefore={c.textBefore}
        highlight={c.highlight}
        textAfter={c.textAfter}
        color="teal"
      />
      <ServiceCards
        cards={cards[lang]}
        color="teal"
      />
      <Biotop />
      <BiotopVideo />
      <ServiceIntro
        title={c.poolTitle}
        titleAccent={c.poolTitleAccent}
        description={c.poolDesc1}
        image={poolImg}
        imageAlt="Swimming pool"
        color="teal"
        reverse
        btnLabel={c.poolBtn}
        btnHref="#contact"
      />
      <ServiceGallery
        images={[
          { src: galleryImg1, alt: 'Swimming pond and living pool' },
          { src: galleryImg2, alt: 'Swimming pools from Biotop' },
          { src: galleryImg3, alt: 'Swimming ponds from Biotop' },
        ]}
      />
    </>
  )
}
