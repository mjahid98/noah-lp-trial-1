import { useLanguage }   from '@/context/LanguageContext'
import ServiceHero      from '@sections/ServiceHero/ServiceHero'
import ServiceHighlight from '@sections/ServiceHighlight/ServiceHighlight'
import ServiceCards     from '@sections/ServiceCards/ServiceCards'
import ServiceIntro     from '@sections/ServiceIntro/ServiceIntro'
import ServiceGallery   from '@sections/ServiceGallery/ServiceGallery'

import pb37                from '@assets/images/pb37.jpg'
import iconAQImprovement   from '@assets/icons/aq-improvement-icon.png'
import iconBiodiversity    from '@assets/icons/Biodiversity-icon.png'
import iconReducedMaint    from '@assets/icons/Reduced-maintenance-icon.png'
import iconExpertPartner   from '@assets/icons/Expert-partnership-icon.png'

const cards = {
  en: [
    {
      icon:        <img src={iconAQImprovement} alt="" />,
      title:       'Air Quality Improvement',
      description: 'Green roofs filter the air and help mitigate urban heat, making your building more sustainable',
    },
    {
      icon:        <img src={iconBiodiversity} alt="" />,
      title:       'Biodiversity',
      description: 'We create habitats for insects and birds, turning roofs into mini-ecosystems',
    },
    {
      icon:        <img src={iconReducedMaint} alt="" />,
      title:       'Reduced Maintenance',
      description: 'Our designs consider your lifestyle — we plan and build with attention to long-term care, balancing aesthetics and effort',
    },
    {
      icon:        <img src={iconExpertPartner} alt="" />,
      title:       'Expert Partnership',
      description: 'In collaboration with Optigrün, we deliver top-tier solutions — whether for small private homes or large-scale commercial rooftop greening',
    },
  ],
  fr: [
    {
      icon:        <img src={iconAQImprovement} alt="" />,
      title:       'Amélioration de la Qualité de l\'Air',
      description: 'Les toits verts filtrent l\'air et aident à atténuer la chaleur urbaine, rendant votre bâtiment plus durable',
    },
    {
      icon:        <img src={iconBiodiversity} alt="" />,
      title:       'Biodiversité',
      description: 'Nous créons des habitats pour les insectes et les oiseaux, transformant les toits en mini-écosystèmes',
    },
    {
      icon:        <img src={iconReducedMaint} alt="" />,
      title:       'Entretien Réduit',
      description: 'Nos designs tiennent compte de votre style de vie — nous planifions et construisons en accordant une attention à l\'entretien à long terme, en équilibrant esthétique et effort',
    },
    {
      icon:        <img src={iconExpertPartner} alt="" />,
      title:       'Partenariat Expert',
      description: 'En collaboration avec Optigrün, nous offrons des solutions de premier ordre — que ce soit pour de petites maisons privées ou de grandes toitures commerciales',
    },
  ],
  de: [
    {
      icon:        <img src={iconAQImprovement} alt="" />,
      title:       'Luftqualitätsverbesserung',
      description: 'Dachbegrünungen filtern die Luft und helfen, die städtische Wärme zu reduzieren, und machen Ihr Gebäude nachhaltiger',
    },
    {
      icon:        <img src={iconBiodiversity} alt="" />,
      title:       'Biodiversität',
      description: 'Wir schaffen Lebensräume für Insekten und Vögel und verwandeln Dächer in Mini-Ökosysteme',
    },
    {
      icon:        <img src={iconReducedMaint} alt="" />,
      title:       'Reduzierter Pflegeaufwand',
      description: 'Unsere Designs berücksichtigen Ihren Lebensstil — wir planen und bauen mit Blick auf langfristige Pflege und balancieren Ästhetik und Aufwand',
    },
    {
      icon:        <img src={iconExpertPartner} alt="" />,
      title:       'Expertenpartnerschaft',
      description: 'In Zusammenarbeit mit Optigrün liefern wir erstklassige Lösungen — ob für kleine Privathäuser oder großflächige gewerbliche Dachbegrünungen',
    },
  ],
}

const t = {
  en: {
    heroTitle:    'Green\nRoofs',
    btnLabel:     'Request a Free Quote',
    textBefore:   'Our green roof solutions transform your building footprint into ',
    highlight:    'living, breathing landscape, ',
    textAfter:    'creating ecological value above and beyond traditional construction',
    introTitle:   'Give back to nature the footprint that your building takes up...',
    description:  'Give back to nature the footprint that your building takes up. Green roofs are both visually appealing and eco-friendly — improving air quality, retaining rainwater, and protecting your building for decades to come.',
    bullets: [
      'Visually appealing & eco-friendly',
      'Improve air quality and create city biotopes',
      'Protect the roof from heat and extend its lifespan',
      'Retain rainwater and ease pressure on drainage systems',
      'Make architecture more sustainable and eco-conscious',
    ],
    partnerLabel: 'Our partner Optigrün',
    partnerHref:  '#',
    introBtn:     'Contact us',
    reverseTitle:        'We transform rooftops and terraces into refined outdoor living spaces',
    reverseTitleAccent:  'Green, inviting, and designed with purpose',
    reverseDesc:         'Our team creates modern rooftop gardens with carefully selected plants, smart irrigation systems, atmospheric lighting, and custom built elements that elevate any property.',
    reverseDesc2:        'Whether you want a lush urban oasis, a minimalist terrace, or a functional rooftop lounge, we design solutions that thrive in your climate and reflect your lifestyle. From concept and materials, to planting and long-term maintenance — we take care of every detail.',
    reverseBtn:          'Contact us',
    highlight2Before:   'With a green roof from My Garden, you reclaim part of the built environment for nature — and gain ',
    highlight2:         'beauty, insulation, and ecological benefits in the process',
    highlight2After:    '',
  },
  fr: {
    heroTitle:    'Toits\nVerts',
    btnLabel:     'Demander un Devis Gratuit',
    textBefore:   'Nos solutions de toits verts transforment l\'empreinte de votre bâtiment en ',
    highlight:    'paysage vivant et respirant, ',
    textAfter:    'créant une valeur écologique au-delà de la construction traditionnelle',
    introTitle:   'Redonnez à la nature l\'empreinte que votre bâtiment lui prend...',
    description:  "Redonnez à la nature l'empreinte que votre bâtiment lui prend. Les toits verts sont à la fois esthétiques et écologiques — ils améliorent la qualité de l'air, retiennent les eaux pluviales et protègent votre bâtiment pour les décennies à venir.",
    bullets: [
      'Esthétique & écologique',
      "Améliore la qualité de l'air et crée des biotopes urbains",
      'Protège le toit de la chaleur et prolonge sa durée de vie',
      "Retient l'eau de pluie et réduit la pression sur les réseaux",
      "Rend l'architecture plus durable et éco-responsable",
    ],
    partnerLabel: 'Notre partenaire Optigrün',
    partnerHref:  '#',
    introBtn:     'Contactez-nous',
    reverseTitle:        'Nous transformons les toits et terrasses en espaces de vie extérieurs raffinés',
    reverseTitleAccent:  'Verts, accueillants et conçus avec soin',
    reverseDesc:         "Notre équipe crée des jardins sur toit modernes avec des plantes soigneusement sélectionnées, des systèmes d'irrigation intelligents, un éclairage atmosphérique et des éléments sur mesure qui subliment chaque propriété.",
    reverseDesc2:        "Que vous souhaitiez une oasis urbaine luxuriante, une terrasse minimaliste ou un salon de toit fonctionnel, nous concevons des solutions adaptées à votre climat et à votre style de vie. Du concept aux matériaux, de la plantation à l'entretien à long terme — nous nous occupons de chaque détail.",
    reverseBtn:          'Contactez-nous',
    highlight2Before:   'Avec un toit vert de My Garden, vous réclamez une partie de l\'environnement bâti pour la nature — et gagnez ',
    highlight2:         'beauté, isolation et bénéfices écologiques dans le processus',
    highlight2After:    '',
  },
  de: {
    heroTitle:    'Dach-\nbegrünung',
    btnLabel:     'Kostenloses Angebot',
    textBefore:   'Unsere Dachbegrünungen verwandeln den Gebäude-Fußabdruck in eine ',
    highlight:    'lebendige, atmende Landschaft, ',
    textAfter:    'die ökologischen Mehrwert über traditionelle Bauweise hinaus schafft',
    introTitle:   'Geben Sie der Natur den Fußabdruck zurück, den Ihr Gebäude ihr nimmt...',
    description:  'Geben Sie der Natur den Fußabdruck zurück, den Ihr Gebäude ihr nimmt. Dachbegrünungen sind optisch ansprechend und umweltfreundlich — sie verbessern die Luftqualität, halten Regenwasser zurück und schützen Ihr Gebäude auf Jahrzehnte.',
    bullets: [
      'Optisch ansprechend & umweltfreundlich',
      'Verbessert die Luftqualität und schafft städtische Biotope',
      'Schützt das Dach vor Hitze und verlängert seine Lebensdauer',
      'Hält Regenwasser zurück und entlastet das Entwässerungssystem',
      'Macht Architektur nachhaltiger und ökobewusster',
    ],
    partnerLabel: 'Unser Partner Optigrün',
    partnerHref:  '#',
    introBtn:     'Kontakt',
    reverseTitle:        'Wir verwandeln Dächer und Terrassen in verfeinerte Außenwohnräume',
    reverseTitleAccent:  'Grün, einladend und mit Sorgfalt gestaltet',
    reverseDesc:         'Unser Team gestaltet moderne Dachgärten mit sorgfältig ausgewählten Pflanzen, intelligenten Bewässerungssystemen, atmosphärischer Beleuchtung und maßgefertigten Elementen, die jede Immobilie aufwerten.',
    reverseDesc2:        'Ob üppige urbane Oase, minimalistische Terrasse oder funktionaler Rooftop-Lounge — wir entwickeln Lösungen, die in Ihrem Klima gedeihen und Ihren Lebensstil widerspiegeln. Von Konzept und Materialien bis zur Bepflanzung und langfristigen Pflege — wir kümmern uns um jedes Detail.',
    reverseBtn:          'Kontakt',
    highlight2Before:   'Mit einem Gründach von My Garden gewinnen Sie einen Teil der bebauten Umwelt für die Natur zurück — und erhalten ',
    highlight2:         'Schönheit, Dämmung und ökologischen Nutzen im gleichen Zug',
    highlight2After:    '',
  },
}

export default function GreenRoofs() {
  const { lang } = useLanguage()
  const c = t[lang]

  return (
    <>
      <ServiceHero
        title={c.heroTitle}
        bgImage={pb37}
        alt="Green roof"
        color="lime"
        shape="triangle"
        btnLabel={c.btnLabel}
        btnHref="#contact"
      />
      <ServiceHighlight
        textBefore={c.textBefore}
        highlight={c.highlight}
        textAfter={c.textAfter}
        color="lime"
      />
      <ServiceCards
        cards={cards[lang]}
        color="lime"
      />
      <ServiceIntro
        title={c.introTitle}
        bullets={c.bullets}
        image={pb37}
        imageAlt="Green roof installation"
        color="lime"
        titleColor="#869F5A"
        leftFlex={500}
        rightFlex={820}
        partnerLabel={c.partnerLabel}
        partnerHref={c.partnerHref}
        btnLabel={c.introBtn}
        btnHref="#contact"
        btnSolid
      />
      <ServiceIntro
        reverse
        title={c.reverseTitle}
        titleAccent={c.reverseTitleAccent}
        description={c.reverseDesc}
        description2={c.reverseDesc2}
        image={pb37}
        imageAlt="Green roof terrace"
        color="lime"
        btnLabel={c.reverseBtn}
        btnHref="#contact"
      />
      <ServiceHighlight
        textBefore={c.highlight2Before}
        highlight={c.highlight2}
        textAfter={c.highlight2After}
        color="lime"
      />
      <ServiceGallery
        images={[
          { src: pb37, alt: 'Green roof' },
          { src: pb37, alt: 'Green roof terrace' },
          { src: pb37, alt: 'Green roof garden' },
        ]}
      />
    </>
  )
}
