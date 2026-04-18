import { Link } from 'react-router-dom'
import styles from './ServiceIntro.module.css'

export default function ServiceIntro({
  title,
  titleAccent,
  description,
  description2,
  descriptions,
  bullets = [],
  image,
  imageAlt = '',
  color = 'teal',
  titleColor = null,
  reverse = false,
  noPaddingTop = false,
  leftFlex = 552,
  rightFlex = 768,
  partnerLabel,
  partnerHref = '#',
  btnLabel,
  btnHref = '#contact',
  btnSolid = false,
}) {
  return (
    <section className={`${styles.section} ${noPaddingTop ? styles.noPaddingTop : ''}`} aria-label={title}>
      <div className={`${styles.cols} ${reverse ? styles.colsReverse : ''}`}>

        {/* ── Left: text ── */}
        <div className={styles.left} style={{ flex: leftFlex }}>
          <h2 className={styles.title} style={titleColor ? { color: titleColor } : undefined}>
            {title}
            {titleAccent && <><br /><em className={`${styles.titleAccent} ${styles[`title_${color}`]}`}>{titleAccent}</em></>}
          </h2>

          {descriptions
            ? descriptions.map((d, i) => <p key={i} className={styles.description}>{d}</p>)
            : <>
                {description && <p className={styles.description}>{description}</p>}
                {description2 && <p className={styles.description}>{description2}</p>}
              </>
          }

          {bullets.length > 0 && (
            <ul className={styles.bullets}>
              {bullets.map((item, i) => (
                <li key={i} className={styles.bulletItem}>
                  <span className={`${styles.dot} ${styles[`dot_${color}`]}`}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {partnerLabel && (
            <a href={partnerHref} className={styles.partnerLink}>{partnerLabel}</a>
          )}

          {btnLabel && (
            btnHref.startsWith('/')
              ? <Link to={btnHref} className={`${styles.btn} ${btnSolid ? styles[`btnSolid_${color}`] : styles[`btn_${color}`]}`}>{btnLabel}</Link>
              : <a href={btnHref} className={`${styles.btn} ${btnSolid ? styles[`btnSolid_${color}`] : styles[`btn_${color}`]}`}>{btnLabel}</a>
          )}
        </div>

        {/* ── Right: image ── */}
        <div className={styles.right} style={{ flex: rightFlex }} data-animate>
          <img src={image} alt={imageAlt} className={styles.image} />
        </div>

      </div>
    </section>
  )
}
