import { useLanguage } from '@/context/LanguageContext'
import VideoPlayer from '@ui/VideoPlayer/VideoPlayer'
import thumbnail   from '@assets/images/biotop-video-thumbnail.png'
import video       from '@assets/videos/biotop.mp4'
import styles      from './BiotopVideo.module.css'

const label = {
  en: 'Watch our Biotop story',
  fr: 'Regarder notre histoire Biotop',
  de: 'Unsere Biotop-Geschichte ansehen',
}

const contactLabel = {
  en: 'Contact us',
  fr: 'Contactez-nous',
  de: 'Kontakt',
}

export default function BiotopVideo() {
  const { lang } = useLanguage()

  return (
    <section className={styles.section} aria-label="Biotop video">
      <VideoPlayer
        src={video}
        poster={thumbnail}
        label={label[lang]}
      />
      <a href="#contact" className={styles.ctaBtn}>{contactLabel[lang]}</a>
    </section>
  )
}
