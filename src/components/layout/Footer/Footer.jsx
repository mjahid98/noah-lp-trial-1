import { useState }    from 'react'
import { useLanguage } from '@/context/LanguageContext'
import logo            from '@assets/logo/logo-primary.svg'
import partnerBiotopPond from '@assets/images/biotop-swimming-pond-logo.webp'
import partnerBiotopPool from '@assets/images/biotop-living-pool-logo.webp'
import partnerOptigruen  from '@assets/images/optigruen-logo.webp'
import styles          from './Footer.module.css'

const t = {
  en: {
    address:      'Address',
    email:        'E-Mail',
    phone:        'Phone',
    licenseTitle: 'License Partner',
    formTitle:    "Any questions?\nFill out the form\nand we'll call you back",
    namePlaceholder:  'Your name',
    emailPlaceholder: 'Your email',
    phonePlaceholder: 'Phone number',
    privacy:      'I have read & I agree with the privacy policy',
    termsBefore:  'I have read & I agree with the ',
    termsLink:    'terms and conditions',
    termsAfter:   '',
    submit:       'Request a callback',
    imprint:      'Imprint',
    dataProtect:  'Data Protection',
    copyright:    'Copyright © 2025 My Garden',
  },
  fr: {
    address:      'Adresse',
    email:        'E-Mail',
    phone:        'Téléphone',
    licenseTitle: 'Partenaire Agréé',
    formTitle:    'Des questions ?\nRemplissez le formulaire\net nous vous rappelons',
    namePlaceholder:  'Votre nom',
    emailPlaceholder: 'Votre e-mail',
    phonePlaceholder: 'Numéro de téléphone',
    privacy:      "J'ai lu et j'accepte la politique de confidentialité",
    termsBefore:  "J'ai lu et j'accepte les ",
    termsLink:    'conditions générales',
    termsAfter:   '',
    submit:       'Demander un rappel',
    imprint:      'Mentions légales',
    dataProtect:  'Protection des données',
    copyright:    'Copyright © 2025 My Garden',
  },
  de: {
    address:      'Adresse',
    email:        'E-Mail',
    phone:        'Telefon',
    licenseTitle: 'Lizenzpartner',
    formTitle:    'Haben Sie Fragen?\nFüllen Sie das Formular aus\nund wir rufen Sie zurück',
    namePlaceholder:  'Ihr Name',
    emailPlaceholder: 'Ihre E-Mail',
    phonePlaceholder: 'Telefonnummer',
    privacy:      'Ich habe die Datenschutzerklärung gelesen und stimme zu',
    termsBefore:  'Ich habe die ',
    termsLink:    'AGB',
    termsAfter:   ' gelesen und stimme zu',
    submit:       'Rückruf anfordern',
    imprint:      'Impressum',
    dataProtect:  'Datenschutz',
    copyright:    'Copyright © 2025 My Garden',
  },
}

export default function Footer() {
  const { lang }          = useLanguage()
  const c                 = t[lang]
  const [privacy, setPrivacy] = useState(false)
  const [terms,   setTerms]   = useState(false)

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>

        {/* ══ LEFT — info ══ */}
        <div className={styles.left}>

          {/* Logo */}
          <a href={`/${lang}`} className={styles.logoLink}>
            <img src={logo} alt="my Garden" className={styles.logo} />
          </a>

          {/* Contact block — column: info row + divider */}
          <div className={styles.contactRow}>
            <div className={styles.contactInner}>
              <div className={styles.contactGroup}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>{c.address}</span>
                  <span className={styles.contactValue}>1 Example Street, L-0000 Luxembourg</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>{c.email}</span>
                  <a href="mailto:info@example.com" className={styles.contactValue}>info@example.com</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>{c.phone}</span>
                  <a href="tel:+000000000" className={styles.contactValue}>+000 00 00 00</a>
                </div>
              </div>
              <div className={styles.socials}>
                <a href="#" className={styles.socialLink} aria-label="YouTube">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="18" fill="#FF0000"/>
                    <path d="M26.5 13.5a2.25 2.25 0 00-1.58-1.59C23.5 11.5 18 11.5 18 11.5s-5.5 0-6.92.41A2.25 2.25 0 009.5 13.5 23.5 23.5 0 009 18a23.5 23.5 0 00.5 4.5 2.25 2.25 0 001.58 1.59C12.5 24.5 18 24.5 18 24.5s5.5 0 6.92-.41a2.25 2.25 0 001.58-1.59A23.5 23.5 0 0027 18a23.5 23.5 0 00-.5-4.5z" fill="white"/>
                    <path d="M16 21l5-3-5-3v6z" fill="#FF0000"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="18" fill="#1877F2"/>
                    <path d="M22.5 9h-2.5a4 4 0 00-4 4v2.5H13.5V18H16v9h3v-9h2.5l.5-2.5H19V13a1 1 0 011-1h2.5V9z" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>
            <hr className={styles.divider} />
          </div>

          {/* License partners */}
          <div className={styles.partners}>
            <p className={styles.partnersTitle}>{c.licenseTitle}</p>
            <div className={styles.partnerLogos}>
              <img src={partnerBiotopPond} alt="Biotop Swimming Pond" className={styles.partnerLogo} />
              <img src={partnerBiotopPool} alt="Biotop Living Pool"   className={styles.partnerLogo} />
              <img src={partnerOptigruen}  alt="Optigrün"             className={styles.partnerLogo} />
            </div>
            <hr className={styles.divider} />
          </div>

        </div>

        {/* ══ RIGHT — contact form card ══ */}
        <div className={styles.formCard} aria-label="Contact form">

          <h2 className={styles.formTitle}>
            {c.formTitle.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h2>

          <form className={styles.form} onSubmit={e => e.preventDefault()}>

            {/* Name */}
            <input
              type="text"
              placeholder={c.namePlaceholder}
              className={styles.input}
              aria-label={c.namePlaceholder}
            />

            {/* Email + Phone row */}
            <div className={styles.inputRow}>
              <input
                type="email"
                placeholder={c.emailPlaceholder}
                className={styles.input}
                aria-label={c.emailPlaceholder}
              />
              <input
                type="tel"
                placeholder={c.phonePlaceholder}
                className={styles.input}
                aria-label={c.phonePlaceholder}
              />
            </div>

            {/* Checkboxes */}
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" checked={privacy} onChange={e => setPrivacy(e.target.checked)} className={styles.checkboxInput} />
                <span className={`${styles.checkboxBox} ${privacy ? styles.checkboxChecked : ''}`}>
                  {privacy && (
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                      <path d="M7.28176 0.428223L2.57029 5.56801L0.428711 3.23174" stroke="white" strokeWidth="0.856631" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                {c.privacy}
              </label>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" checked={terms} onChange={e => setTerms(e.target.checked)} className={styles.checkboxInput} />
                <span className={`${styles.checkboxBox} ${terms ? styles.checkboxChecked : ''}`}>
                  {terms && (
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                      <path d="M7.28176 0.428223L2.57029 5.56801L0.428711 3.23174" stroke="white" strokeWidth="0.856631" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                <span>
                  {c.termsBefore}
                  <a href={`/${lang}/terms`} className={styles.checkboxLink}>{c.termsLink}</a>
                  {c.termsAfter}
                </span>
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className={styles.submitBtn}>
              {c.submit}
            </button>

          </form>
        </div>

      </div>

      {/* ══ FULL-WIDTH legal bottom row ══ */}
      <div className={styles.legalRow}>
        <div className={styles.legal}>
          <a href={`/${lang}/imprint`} className={styles.legalLink}>{c.imprint}</a>
          <a href={`/${lang}/privacy`} className={styles.legalLink}>{c.dataProtect}</a>
          <span className={styles.copyright}>{c.copyright}</span>
        </div>
      </div>

    </footer>
  )
}
