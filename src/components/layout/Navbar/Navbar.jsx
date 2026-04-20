import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import logo from '@assets/logo/logo-primary.svg'
import styles from './Navbar.module.css'

const t = {
  en: {
    links: [
      { label: 'Services', href: '#services' },
      { label: 'About Us', href: '#about' },
      { label: 'Contact',  href: '#contact' },
    ],
    phone: '+352 26 38 66',
  },
  fr: {
    links: [
      { label: 'Services',  href: '#services' },
      { label: 'À propos',  href: '#about' },
      { label: 'Contact',   href: '#contact' },
    ],
    phone: '+352 26 38 66',
  },
  de: {
    links: [
      { label: 'Leistungen', href: '#services' },
      { label: 'Über uns',   href: '#about' },
      { label: 'Kontakt',    href: '#contact' },
    ],
    phone: '+352 26 38 66',
  },
}

const LANGUAGES = ['en', 'fr', 'de']

export default function Navbar() {
  const { lang } = useLanguage()
  const navigate  = useNavigate()
  const { pathname } = useLocation()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const content = t[lang]

  const switchLang = (l) => {
    const newPath = pathname.replace(/^\/(en|fr|de)/, `/${l}`)
    navigate(newPath)
    setMenuOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <a href={`/${lang}`} className={styles.logoLink} aria-label="My Garden — home">
          <img src={logo} alt="My Garden logo" className={styles.logo} />
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {content.links.map(link => (
            <a key={link.label} href={`/${lang}${link.href}`} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className={styles.right}>

          {/* Language switcher */}
          <div className={styles.langSwitcher}>
            {LANGUAGES.map(l => (
              <button
                key={l}
                className={`${styles.langBtn} ${lang === l ? styles.langActive : ''}`}
                onClick={() => switchLang(l)}
                aria-label={`Switch to ${l.toUpperCase()}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Phone CTA */}
          <a href={`tel:${content.phone.replace(/\s/g, '')}`} className={styles.phoneBtn}>
            {content.phone}
          </a>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {content.links.map(link => (
          <a
            key={link.label}
            href={`/${lang}${link.href}`}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href={`tel:${content.phone.replace(/\s/g, '')}`} className={styles.mobilePhone}>
          {content.phone}
        </a>
        <div className={styles.mobileLang}>
          {LANGUAGES.map(l => (
            <button
              key={l}
              className={`${styles.langBtn} ${lang === l ? styles.langActive : ''}`}
              onClick={() => switchLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
