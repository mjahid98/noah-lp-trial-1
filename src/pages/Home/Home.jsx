import Hero           from '@sections/Hero/Hero'
import Stats          from '@sections/Stats/Stats'
import About          from '@sections/About/About'
import Services       from '@sections/Services/Services'
import FeatureSection from '@sections/FeatureSection/FeatureSection'
import Biotop         from '@sections/Biotop/Biotop'
import BiotopVideo    from '@sections/BiotopVideo/BiotopVideo'
import Team           from '@sections/Team/Team'
import DirectorQuote  from '@sections/DirectorQuote/DirectorQuote'
import { useLanguage }  from '@/context/LanguageContext'
import { usePageMeta } from '@hooks/usePageMeta'
import styles           from './Home.module.css'

const pageMeta = {
  en: {
    title: 'Garden and Landscape Design Luxembourg | Swimming Ponds, Green Roofs, Gardens',
    description: 'my Garden is your quality partner for garden and landscape design in Luxembourg, with swimming ponds, green roofs and tailored gardens.',
  },
  fr: {
    title: 'Paysagiste Luxembourg | Étangs de baignade, toitures végétalisées et jardins',
    description: 'my Garden est votre partenaire de qualité au Luxembourg pour les jardins, les étangs de baignade, les toitures végétalisées et les aménagements paysagers.',
  },
  de: {
    title: 'Garten- und Landschaftsbau Luxemburg | Schwimmteiche, Dachbegrünung und Gärten',
    description: 'my Garden ist Ihr Qualitätspartner für Garten und Landschaft in Luxemburg, mit Schwimmteichen, Dachbegrünung und individuell gestalteten Gärten.',
  },
}

// ── Pond images — real + temp fillers until more are added ──
import pondImg1  from '@assets/images/swimming-pond-and-living-pool.webp'
import pondImg2  from '@assets/images/about-garden.webp'
import pondImg3  from '@assets/images/home-hero-image.webp'

// ── Roof & Garden — temp fillers, replace when real images added ──
import roofImg1    from '@assets/images/grass-image.webp'
import roofImg2    from '@assets/images/about-garden.webp'
import gardenImg1  from '@assets/images/about-garden.webp'
import gardenImg2  from '@assets/images/grass-image.webp'

const featureContent = {
  en: {
    pond: {
      title:       'Swimming Ponds\n& Living Pools',
      description: 'Water brings life to any garden, from ponds and fountains to natural streams',
      bullets: [
        'Water adds a special charm to any garden',
        'Eco-friendly swimming ponds and living pools, with no chemicals or chlorine',
        'Natural look, unique bathing experience',
        'Custom design & construction',
        'Visit our showroom to see it in action',
      ],
      btn: 'See more',
    },
    roof: {
      title:        'Green Roofs',
      description:  'Give back to nature the footprint your building takes up.',
      bullets: [
        'Visually appealing & eco-friendly',
        'Improve air quality and create city biotopes',
        'Protect the roof from heat and extend its lifespan',
        'Retain rainwater and ease pressure on drainage systems',
        'Make architecture more sustainable and eco-conscious',
      ],
      partnerLabel: 'Our partner Optigrün',
      partnerHref:  '#',
      btn:          'See more',
    },
    garden: {
      title:       'Gardens',
      description: "A good garden first and foremost requires solid soil work! We have a well-equipped fleet of vehicles that allows us to tackle even the biggest jobs. Because the foundation of the best garden is well-cultivated soil: digging, excavating, plowing, or clearing – we'll get it done!",
      bullets:     [],
      btn:         'See more',
    },
  },
  fr: {
    pond: {
      title:       'Étangs de baignade\n& piscines naturelles',
      description: "L'eau donne vie à tout jardin, des étangs aux fontaines et aux ruisseaux naturels",
      bullets: [
        "L'eau ajoute un charme particulier à tout jardin",
        'Étangs de baignade écologiques, sans produits chimiques ni chlore',
        'Aspect naturel, expérience de baignade unique',
        'Design et construction sur mesure',
        'Visitez notre showroom pour le découvrir en vrai',
      ],
      btn: 'Voir plus',
    },
    roof: {
      title:        'Toitures végétalisées',
      description:  "Redonnez à la nature l'espace que votre bâtiment occupe.",
      bullets: [
        'Esthétique & écologique',
        "Améliore la qualité de l'air et crée des biotopes urbains",
        'Protège le toit de la chaleur et prolonge sa durée de vie',
        "Retient l'eau de pluie et réduit la pression sur les réseaux",
        "Rend l'architecture plus durable et éco-responsable",
      ],
      partnerLabel: 'Notre partenaire Optigrün',
      partnerHref:  '#',
      btn:          'Voir plus',
    },
    garden: {
      title:       'Jardins',
      description: "Un bon jardin nécessite avant tout un travail solide du sol ! Nous disposons d'une flotte de véhicules bien équipée qui nous permet de réaliser même les plus grands travaux. Car la base du meilleur jardin, c'est un sol bien cultivé : creuser, excaver, labourer ou défricher – nous le faisons !",
      bullets:     [],
      btn:         'Voir plus',
    },
  },
  de: {
    pond: {
      title:       'Schwimmteiche\n& Living Pools',
      description: 'Wasser bringt Leben in jeden Garten, von Teichen und Brunnen bis zu natürlichen Bächen',
      bullets: [
        'Wasser verleiht jedem Garten einen besonderen Charme',
        'Umweltfreundliche Schwimmteiche und Living Pools, ohne Chemikalien oder Chlor',
        'Natürliches Erscheinungsbild, einzigartiges Badeerlebnis',
        'Individuelle Planung & Ausführung',
        'Besuchen Sie unsere Ausstellung und lassen Sie sich inspirieren',
      ],
      btn: 'Mehr sehen',
    },
    roof: {
      title:        'Dachbegrünung',
      description:  'Geben Sie der Natur den Raum zurück, den Ihr Gebäude einnimmt.',
      bullets: [
        'Optisch ansprechend & umweltfreundlich',
        'Verbessert die Luftqualität und schafft städtische Biotope',
        'Schützt das Dach vor Hitze und verlängert seine Lebensdauer',
        'Hält Regenwasser zurück und entlastet das Entwässerungssystem',
        'Macht Architektur nachhaltiger und ökobewusster',
      ],
      partnerLabel: 'Unser Partner Optigrün',
      partnerHref:  '#',
      btn:          'Mehr sehen',
    },
    garden: {
      title:       'Gärten',
      description: 'Ein guter Garten erfordert vor allem solide Erdarbeiten! Wir verfügen über einen gut ausgestatteten Fuhrpark, der es uns ermöglicht, auch die größten Aufgaben zu bewältigen. Denn die Grundlage des besten Gartens ist gut bearbeiteter Boden: graben, ausheben, pflügen oder roden – wir erledigen das!',
      bullets:     [],
      btn:         'Mehr sehen',
    },
  },
}

export default function Home() {
  const { lang } = useLanguage()
  const f = featureContent[lang]
  const m = pageMeta[lang]
  usePageMeta(m.title, m.description, lang)

  return (
    <>
      <Hero />
      <Stats />

      <div className={styles.gradientBg}>
        <About />
        <Services />
      </div>

      <FeatureSection
        id="swimming-ponds"
        color="teal"
        shape="circle"
        title={f.pond.title}
        description={f.pond.description}
        bullets={f.pond.bullets}
        btnLabel={f.pond.btn}
        btnHref={`/${lang}/swimming-ponds`}
        images={[pondImg1, pondImg2, pondImg3]}
      />

      <Biotop />
      <BiotopVideo />

      <FeatureSection
        id="green-roofs"
        color="lime"
        shape="triangle"
        title={f.roof.title}
        description={f.roof.description}
        bullets={f.roof.bullets}
        partnerLabel={f.roof.partnerLabel}
        partnerHref={f.roof.partnerHref}
        btnLabel={f.roof.btn}
        btnHref={`/${lang}/green-roofs`}
        images={[roofImg1, roofImg2]}
        reverse
      />

      <FeatureSection
        id="gardens"
        color="olive"
        shape="square"
        title={f.garden.title}
        description={f.garden.description}
        bullets={f.garden.bullets}
        btnLabel={f.garden.btn}
        btnHref={`/${lang}/gardens`}
        images={[gardenImg1, gardenImg2]}
      />

      <Team />
      <DirectorQuote />
    </>
  )
}
