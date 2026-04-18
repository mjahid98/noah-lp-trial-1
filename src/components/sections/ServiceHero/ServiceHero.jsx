import styles from './ServiceHero.module.css'

export default function ServiceHero({
  title,
  bgImage,
  alt      = '',
  color    = 'teal',
  shape    = 'circle',
  btnLabel,
  btnHref  = '#contact',
}) {
  return (
    <section className={styles.section} aria-label={title} data-hero>
      <div className={styles.cols}>

        {/* ── Left: colored panel ── */}
        <div className={`${styles.left} ${styles[`bg_${color}`]}`}>
          <div className={styles.bottom}>
            <div className={styles.iconTitle}>
              <div className={`${styles.icon} ${styles[`shape_${shape}`]}`} aria-hidden="true" />
              <h1 className={styles.title}>{title}</h1>
            </div>
            {btnLabel && (
              <a href={btnHref} className={styles.btn}>{btnLabel}</a>
            )}
          </div>
        </div>

        {/* ── Right: photo ── */}
        <div className={styles.right}>
          <img src={bgImage} alt={alt} className={styles.image} />
        </div>

      </div>
    </section>
  )
}
