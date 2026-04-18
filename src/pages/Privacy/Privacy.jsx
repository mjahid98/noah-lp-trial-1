import { useLanguage } from '@/context/LanguageContext'
import styles from './Privacy.module.css'

const t = {
  en: {
    title:       'Data Protection',
    lastUpdated: 'Last updated: January 2025',
    intro:       'my Garden Luxembourg takes the protection of your personal data seriously. This privacy policy explains what data we collect, how we use it, and your rights under the General Data Protection Regulation (GDPR).',
    sections: [
      {
        heading: '1. Controller',
        body:    'my Garden Luxembourg\n12 Rue du Jardin, L-1234 Luxembourg\nEmail: info@mygarden.lu\nPhone: +352 26 38 66',
      },
      {
        heading: '2. Data We Collect',
        body:    'When you use our contact form, we collect your name, email address, and phone number. This data is used solely to respond to your enquiry and is never shared with third parties without your consent.',
      },
      {
        heading: '3. Legal Basis',
        body:    'We process your data on the basis of your consent (Art. 6(1)(a) GDPR) when you submit our contact form, and on the basis of our legitimate interest (Art. 6(1)(f) GDPR) to respond to business enquiries.',
      },
      {
        heading: '4. Data Retention',
        body:    'We retain your contact data for as long as necessary to respond to your enquiry, and for a maximum of 3 years unless a longer retention period is required by law.',
      },
      {
        heading: '5. Your Rights',
        body:    'You have the right to access, correct, delete, or restrict processing of your personal data. You may also object to processing or request data portability. To exercise these rights, contact us at info@mygarden.lu.',
      },
      {
        heading: '6. Cookies',
        body:    'This website does not currently use tracking or advertising cookies. Functional cookies may be used to ensure the website operates correctly.',
      },
      {
        heading: '7. Contact',
        body:    'For any privacy-related questions, please contact: info@mygarden.lu',
      },
    ],
    backLink: '← Back to Home',
  },
  fr: {
    title:       'Protection des Données',
    lastUpdated: 'Dernière mise à jour : janvier 2025',
    intro:       "my Garden Luxembourg prend la protection de vos données personnelles très au sérieux. Cette politique de confidentialité explique quelles données nous collectons, comment nous les utilisons et vos droits au titre du Règlement Général sur la Protection des Données (RGPD).",
    sections: [
      {
        heading: '1. Responsable du traitement',
        body:    'my Garden Luxembourg\n12 Rue du Jardin, L-1234 Luxembourg\nE-mail : info@mygarden.lu\nTéléphone : +352 26 38 66',
      },
      {
        heading: '2. Données collectées',
        body:    "Lorsque vous utilisez notre formulaire de contact, nous collectons votre nom, adresse e-mail et numéro de téléphone. Ces données sont utilisées uniquement pour répondre à votre demande et ne sont jamais partagées avec des tiers sans votre consentement.",
      },
      {
        heading: '3. Base légale',
        body:    "Nous traitons vos données sur la base de votre consentement (art. 6(1)(a) RGPD) lorsque vous soumettez notre formulaire de contact, et sur la base de notre intérêt légitime (art. 6(1)(f) RGPD) pour répondre aux demandes professionnelles.",
      },
      {
        heading: '4. Conservation des données',
        body:    "Nous conservons vos données de contact aussi longtemps que nécessaire pour répondre à votre demande, et au maximum 3 ans sauf si une durée plus longue est exigée par la loi.",
      },
      {
        heading: '5. Vos droits',
        body:    "Vous avez le droit d'accéder à vos données, de les corriger, de les supprimer ou d'en limiter le traitement. Vous pouvez également vous opposer au traitement ou demander la portabilité des données. Pour exercer ces droits, contactez-nous à info@mygarden.lu.",
      },
      {
        heading: '6. Cookies',
        body:    "Ce site web n'utilise pas actuellement de cookies de suivi ou publicitaires. Des cookies fonctionnels peuvent être utilisés pour assurer le bon fonctionnement du site.",
      },
      {
        heading: '7. Contact',
        body:    'Pour toute question relative à la protection des données : info@mygarden.lu',
      },
    ],
    backLink: '← Retour à l\'accueil',
  },
  de: {
    title:       'Datenschutz',
    lastUpdated: 'Zuletzt aktualisiert: Januar 2025',
    intro:       'my Garden Luxemburg nimmt den Schutz Ihrer personenbezogenen Daten ernst. Diese Datenschutzerklärung erläutert, welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie gemäß der Datenschutz-Grundverordnung (DSGVO) haben.',
    sections: [
      {
        heading: '1. Verantwortlicher',
        body:    'my Garden Luxemburg\n12 Rue du Jardin, L-1234 Luxemburg\nE-Mail: info@mygarden.lu\nTelefon: +352 26 38 66',
      },
      {
        heading: '2. Erhobene Daten',
        body:    'Wenn Sie unser Kontaktformular nutzen, erheben wir Ihren Namen, Ihre E-Mail-Adresse und Telefonnummer. Diese Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet und ohne Ihre Zustimmung nicht an Dritte weitergegeben.',
      },
      {
        heading: '3. Rechtsgrundlage',
        body:    'Wir verarbeiten Ihre Daten auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) bei der Formularübermittlung sowie auf Basis unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO) zur Beantwortung geschäftlicher Anfragen.',
      },
      {
        heading: '4. Datenspeicherung',
        body:    'Ihre Kontaktdaten werden so lange aufbewahrt, wie es zur Beantwortung Ihrer Anfrage erforderlich ist, maximal jedoch 3 Jahre, sofern keine gesetzliche Aufbewahrungspflicht besteht.',
      },
      {
        heading: '5. Ihre Rechte',
        body:    'Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Widerspruchsrecht und das Recht auf Datenübertragbarkeit. Kontaktieren Sie uns unter info@mygarden.lu.',
      },
      {
        heading: '6. Cookies',
        body:    'Diese Website verwendet derzeit keine Tracking- oder Werbe-Cookies. Funktionale Cookies können verwendet werden, um den ordnungsgemäßen Betrieb der Website sicherzustellen.',
      },
      {
        heading: '7. Kontakt',
        body:    'Für datenschutzbezogene Fragen: info@mygarden.lu',
      },
    ],
    backLink: '← Zurück zur Startseite',
  },
}

export default function Privacy() {
  const { lang } = useLanguage()
  const content  = t[lang]

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <a href="/" className={styles.backLink}>{content.backLink}</a>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.lastUpdated}>{content.lastUpdated}</p>
        <p className={styles.intro}>{content.intro}</p>
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
