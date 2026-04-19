import { useLanguage } from '@/context/LanguageContext'
import styles from './Imprint.module.css'

const t = {
  en: {
    title:    'Imprint',
    sections: [
      {
        heading: 'Company Information',
        body:    'my Garden Luxembourg\n12 Rue du Jardin\nL-1234 Luxembourg\nGrand Duchy of Luxembourg',
      },
      {
        heading: 'Contact',
        body:    'Phone: +352 26 38 66\nEmail: info@mygarden.lu\nWebsite: www.mygarden.lu',
      },
      {
        heading: 'Managing Director',
        body:    'Ulrich Kraft',
      },
      {
        heading: 'Trade Register',
        body:    'Registered with the Luxembourg Trade and Companies Register (RCS Luxembourg).\nRegistration number: [to be completed by client]',
      },
      {
        heading: 'VAT Number',
        body:    'VAT identification number: LU[to be completed by client]',
      },
      {
        heading: 'Regulatory Authority',
        body:    'Regulated by the Luxembourg Ministry of the Economy.\nProfessional licence number: [to be completed by client]',
      },
      {
        heading: 'Liability Disclaimer',
        body:    'The content of this website has been compiled with the utmost care. However, we cannot accept liability for the accuracy, completeness or topicality of the content. As a service provider, we are responsible for our own content on this website in accordance with applicable law.',
      },
      {
        heading: 'Copyright',
        body:    '© 2025 my Garden Luxembourg. All rights reserved. All content, images, and logos on this website are the property of my Garden Luxembourg unless otherwise stated.',
      },
    ],
    backLink: '← Back to Home',
  },
  fr: {
    title:    'Mentions Légales',
    sections: [
      {
        heading: 'Informations sur la société',
        body:    'my Garden Luxembourg\n12 Rue du Jardin\nL-1234 Luxembourg\nGrand-Duché de Luxembourg',
      },
      {
        heading: 'Contact',
        body:    'Téléphone : +352 26 38 66\nE-mail : info@mygarden.lu\nSite web : www.mygarden.lu',
      },
      {
        heading: 'Directeur Général',
        body:    'Ulrich Kraft',
      },
      {
        heading: 'Registre du commerce',
        body:    'Inscrit au Registre de Commerce et des Sociétés de Luxembourg (RCS Luxembourg).\nNuméro d\'immatriculation : [à compléter par le client]',
      },
      {
        heading: 'Numéro de TVA',
        body:    'Numéro d\'identification TVA : LU[à compléter par le client]',
      },
      {
        heading: 'Autorité de régulation',
        body:    'Réglementé par le Ministère de l\'Économie du Luxembourg.\nNuméro de licence professionnelle : [à compléter par le client]',
      },
      {
        heading: 'Limitation de responsabilité',
        body:    'Le contenu de ce site web a été compilé avec le plus grand soin. Cependant, nous ne pouvons accepter aucune responsabilité quant à l\'exactitude, l\'exhaustivité ou l\'actualité du contenu.',
      },
      {
        heading: 'Droits d\'auteur',
        body:    '© 2025 my Garden Luxembourg. Tous droits réservés. Tout le contenu, les images et logos de ce site sont la propriété de my Garden Luxembourg sauf indication contraire.',
      },
    ],
    backLink: '← Retour à l\'accueil',
  },
  de: {
    title:    'Impressum',
    sections: [
      {
        heading: 'Unternehmensangaben',
        body:    'my Garden Luxemburg\n12 Rue du Jardin\nL-1234 Luxemburg\nGroßherzogtum Luxemburg',
      },
      {
        heading: 'Kontakt',
        body:    'Telefon: +352 26 38 66\nE-Mail: info@mygarden.lu\nWebsite: www.mygarden.lu',
      },
      {
        heading: 'Geschäftsführer',
        body:    'Ulrich Kraft',
      },
      {
        heading: 'Handelsregister',
        body:    'Eingetragen im Luxemburger Handels- und Gesellschaftsregister (RCS Luxemburg).\nRegisternummer: [vom Kunden zu ergänzen]',
      },
      {
        heading: 'Umsatzsteuer-Identifikationsnummer',
        body:    'USt-IdNr.: LU[vom Kunden zu ergänzen]',
      },
      {
        heading: 'Aufsichtsbehörde',
        body:    'Reguliert durch das Luxemburger Wirtschaftsministerium.\nGewerbezulassungsnummer: [vom Kunden zu ergänzen]',
      },
      {
        heading: 'Haftungsausschluss',
        body:    'Der Inhalt dieser Website wurde mit größter Sorgfalt zusammengestellt. Wir können jedoch keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der Inhalte übernehmen.',
      },
      {
        heading: 'Urheberrecht',
        body:    '© 2025 my Garden Luxemburg. Alle Rechte vorbehalten. Alle Inhalte, Bilder und Logos auf dieser Website sind Eigentum von my Garden Luxemburg, sofern nicht anders angegeben.',
      },
    ],
    backLink: '← Zurück zur Startseite',
  },
}

export default function Imprint() {
  const { lang } = useLanguage()
  const content  = t[lang]

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <a href={`/${lang}`} className={styles.backLink}>{content.backLink}</a>
        <h1 className={styles.title}>{content.title}</h1>
        <div className={styles.sections}>
          {content.sections.map(s => (
            <div key={s.heading} className={styles.section}>
              <h2 className={styles.sectionHeading}>{s.heading}</h2>
              <p className={styles.sectionBody} style={{ whiteSpace: 'pre-line' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
