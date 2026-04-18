import styles from './ServiceHighlight.module.css'

/**
 * ServiceHighlight — centered quote section on service pages.
 *
 * The quote text is split into three parts so a colored italic phrase
 * can be embedded mid-sentence:
 *   textBefore  →  highlight (colored + italic)  →  textAfter
 */
export default function ServiceHighlight({
  textBefore = '',
  highlight  = '',
  textAfter  = '',
  color      = 'teal',
}) {
  return (
    <section className={styles.section}>
      <p className={styles.quote}>
        {textBefore && <span className={styles.plain}>{textBefore}</span>}
        {highlight  && <span className={`${styles.hl} ${styles[`hl_${color}`]}`}>{highlight}</span>}
        {textAfter  && <span className={styles.plain}>{textAfter}</span>}
      </p>
    </section>
  )
}
