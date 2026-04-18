import { useLanguage }   from '@/context/LanguageContext'
import ServiceHero      from '@sections/ServiceHero/ServiceHero'
import ServiceHighlight from '@sections/ServiceHighlight/ServiceHighlight'
import ServiceCards     from '@sections/ServiceCards/ServiceCards'
import ServiceIntro     from '@sections/ServiceIntro/ServiceIntro'
import ImageSlider      from '@sections/ImageSlider/ImageSlider'
import ServiceGallery   from '@sections/ServiceGallery/ServiceGallery'

import heroBg    from '@assets/images/gardens-main.webp'
import introImg  from '@assets/images/about-garden.webp'
import sliderImg from '@assets/images/gardens-main.webp'

import iconEarthenworks from '@assets/icons/Earthenworks-excavation.webp'
import iconPlanting     from '@assets/icons/Planting-lawns.webp'
import iconHardscape    from '@assets/icons/Hardscape-stonework.webp'
import iconIrrigation   from '@assets/icons/Irrigation-systems.webp'
import iconFencing      from '@assets/icons/Fencing-boundary-work.webp'
import iconMaintenance  from '@assets/icons/Maintenance-setup.webp'

const cards = {
  en: [
    {
      icon:        <img src={iconEarthenworks} alt="" />,
      title:       'Earthenworks\n& Excavation',
      description: 'Preparing the ground properly ensures optimal growing conditions and structural stability',
    },
    {
      icon:        <img src={iconPlanting} alt="" />,
      title:       'Planting & Lawns',
      description: 'From lush lawns to carefully selected plantings, we bring your green vision to life',
    },
    {
      icon:        <img src={iconHardscape} alt="" />,
      title:       'Hardscape\n& Stonework',
      description: 'Elegant stone retaining walls, patios, walkways — designed to last and impress',
    },
    {
      icon:        <img src={iconIrrigation} alt="" />,
      title:       'Irrigation\nSystems',
      description: "Smart watering solutions tailored to your garden's layout, ensuring water is used efficiently",
    },
    {
      icon:        <img src={iconFencing} alt="" />,
      title:       'Fencing &\nBoundary Work',
      description: "Whether it's decorative or functional, we help define your garden's edges",
    },
    {
      icon:        <img src={iconMaintenance} alt="" />,
      title:       'Maintenance\nSetup',
      description: "We don't just build — we provide the structure for caring for your garden, integrating mowing and seasonal services",
    },
  ],
  fr: [
    {
      icon:        <img src={iconEarthenworks} alt="" />,
      title:       'Terrassement\n& Excavation',
      description: 'Une bonne préparation du sol garantit des conditions de croissance optimales et une stabilité structurelle',
    },
    {
      icon:        <img src={iconPlanting} alt="" />,
      title:       'Plantation\n& Pelouses',
      description: 'Des pelouses luxuriantes aux plantations soigneusement sélectionnées, nous donnons vie à votre vision verte',
    },
    {
      icon:        <img src={iconHardscape} alt="" />,
      title:       'Aménagement\n& Maçonnerie',
      description: 'Murs de soutènement, terrasses et allées en pierre élégants — conçus pour durer et impressionner',
    },
    {
      icon:        <img src={iconIrrigation} alt="" />,
      title:       'Systèmes\nd\'Irrigation',
      description: "Des solutions d'arrosage intelligentes adaptées à la configuration de votre jardin, pour une utilisation efficace de l'eau",
    },
    {
      icon:        <img src={iconFencing} alt="" />,
      title:       'Clôtures &\nDélimitations',
      description: 'Qu\'elle soit décorative ou fonctionnelle, nous aidons à définir les limites de votre jardin',
    },
    {
      icon:        <img src={iconMaintenance} alt="" />,
      title:       'Mise en Place\nde l\'Entretien',
      description: "Nous ne construisons pas seulement — nous mettons en place la structure pour entretenir votre jardin, intégrant la tonte et les services saisonniers",
    },
  ],
  de: [
    {
      icon:        <img src={iconEarthenworks} alt="" />,
      title:       'Erdarbeiten\n& Aushub',
      description: 'Eine sorgfältige Bodenvorbereitung gewährleistet optimale Wachstumsbedingungen und strukturelle Stabilität',
    },
    {
      icon:        <img src={iconPlanting} alt="" />,
      title:       'Bepflanzung\n& Rasen',
      description: 'Von üppigen Rasenflächen bis zu sorgfältig ausgewählten Pflanzen — wir verwirklichen Ihre grüne Vision',
    },
    {
      icon:        <img src={iconHardscape} alt="" />,
      title:       'Hartflächen\n& Steinarbeiten',
      description: 'Elegante Stützmauern, Terrassen und Gehwege — gestaltet für Langlebigkeit und Eindruck',
    },
    {
      icon:        <img src={iconIrrigation} alt="" />,
      title:       'Bewässerungs-\nsysteme',
      description: 'Intelligente Bewässerungslösungen, angepasst an Ihr Gartenlayout, für effizienten Wasserverbrauch',
    },
    {
      icon:        <img src={iconFencing} alt="" />,
      title:       'Einzäunung &\nBegrenzungen',
      description: 'Ob dekorativ oder funktional — wir helfen dabei, die Grenzen Ihres Gartens zu definieren',
    },
    {
      icon:        <img src={iconMaintenance} alt="" />,
      title:       'Pflege-\neinrichtung',
      description: 'Wir bauen nicht nur — wir schaffen die Grundlage für die Gartenpflege mit Mäh- und Saisonservices',
    },
  ],
}

const t = {
  en: {
    heroTitle:   'Gardens',
    btnLabel:    'Request a Free Quote',
    textBefore:  '',
    highlight:   'Our garden construction service covers all phases: ',
    textAfter:   'from earthworks and soil preparation to detailed stonework, wall construction, fencing, and irrigation systems',
    tags: [
      'Soil Preparation',
      'Excavation',
      'Plowing & Clearing',
      'Custom Landscaping',
      'Full Fleet Available',
    ],
    introTitle:  'We create bespoke gardens that feel alive, balanced, and beautifully structured',
    descriptions: [
      'From planting plans and structure design to pathways, lighting, and full-scale construction — we shape a garden that grows with you.',
      'We work with high-quality plants, sustainable materials, and timeless landscape principles to ensure long-lasting results.',
      'Whether you need a complete redesign, new planting, or ongoing garden maintenance — we turn your outdoor space into a place of harmony and character.',
    ],
    cardsTitle: 'Key components of our\ngarden construction work include',
    introBtn: 'Contact us',
  },
  fr: {
    heroTitle:   'Jardins',
    btnLabel:    'Demander un Devis Gratuit',
    textBefore:  '',
    highlight:   'Notre service de construction de jardins couvre toutes les phases : ',
    textAfter:   "des travaux de terrassement et de préparation du sol jusqu'à la maçonnerie détaillée, la construction de murs, la clôture et les systèmes d'irrigation",
    tags: [
      'Préparation du Sol',
      'Excavation',
      'Labourage & Défrichage',
      'Aménagement Sur Mesure',
      'Flotte Complète',
    ],
    introTitle:  'Nous créons des jardins sur mesure qui se sentent vivants, équilibrés et magnifiquement structurés',
    descriptions: [
      "Des plans de plantation et de conception structurelle aux allées, à l'éclairage et à la construction complète — nous façonnons un jardin qui grandit avec vous.",
      "Nous travaillons avec des plantes de haute qualité, des matériaux durables et des principes paysagers intemporels pour garantir des résultats durables.",
      "Que vous ayez besoin d'une refonte complète, de nouvelles plantations ou d'un entretien continu — nous transformons votre espace extérieur en un lieu d'harmonie et de caractère.",
    ],
    cardsTitle: 'Les composantes clés de notre\ntravail de construction de jardins incluent',
    introBtn: 'Contactez-nous',
  },
  de: {
    heroTitle:   'Gärten',
    btnLabel:    'Kostenloses Angebot',
    textBefore:  '',
    highlight:   'Unser Gartenbauservice deckt alle Phasen ab: ',
    textAfter:   'von Erdarbeiten und Bodenaufbereitung bis hin zu detaillierter Steinmetzarbeit, Mauerbau, Einzäunung und Bewässerungssystemen',
    tags: [
      'Bodenvorbereitung',
      'Aushub',
      'Pflügen & Roden',
      'Individuelle Gestaltung',
      'Vollausgestatteter Fuhrpark',
    ],
    introTitle:  'Wir gestalten maßgeschneiderte Gärten, die lebendig, ausgewogen und wunderschön strukturiert wirken',
    descriptions: [
      'Von Bepflanzungsplänen und Strukturdesign bis hin zu Wegen, Beleuchtung und Vollbau — wir gestalten einen Garten, der mit Ihnen wächst.',
      'Wir arbeiten mit hochwertigen Pflanzen, nachhaltigen Materialien und zeitlosen Landschaftsprinzipien für langanhaltende Ergebnisse.',
      'Ob komplette Neugestaltung, neue Bepflanzung oder laufende Gartenpflege — wir verwandeln Ihren Außenbereich in einen Ort der Harmonie und des Charakters.',
    ],
    cardsTitle: 'Die wichtigsten Komponenten unserer\nGartenbauarbeiten umfassen',
    introBtn: 'Kontakt',
  },
}

export default function Gardens() {
  const { lang } = useLanguage()
  const c = t[lang]

  return (
    <>
      <ServiceHero
        title={c.heroTitle}
        bgImage={heroBg}
        alt="Beautiful garden"
        color="olive"
        shape="square"
        btnLabel={c.btnLabel}
        btnHref="#contact"
      />
      <ServiceHighlight
        textBefore={c.textBefore}
        highlight={c.highlight}
        textAfter={c.textAfter}
        color="olive"
      />
      <ImageSlider
        images={[
          { src: sliderImg, alt: 'Garden' },
          { src: sliderImg, alt: 'Garden' },
          { src: sliderImg, alt: 'Garden' },
        ]}
      />
      <ServiceCards
        cards={cards[lang]}
        color="olive"
        columns={3}
        title={c.cardsTitle}
        cardMinHeight={330}
        noAspectRatio
      />
      <ServiceIntro
        title={c.introTitle}
        descriptions={c.descriptions}
        image={introImg}
        imageAlt="Garden landscaping"
        color="olive"
        titleColor="#86A05B"
        btnLabel={c.introBtn}
        btnHref="#contact"
        btnSolid
      />
      <ServiceGallery
        images={[
          { src: introImg, alt: 'Garden' },
          { src: introImg, alt: 'Garden' },
          { src: introImg, alt: 'Garden' },
        ]}
      />
    </>
  )
}
