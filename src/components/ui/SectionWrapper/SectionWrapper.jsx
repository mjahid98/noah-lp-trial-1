import styles from './SectionWrapper.module.css'

export default function SectionWrapper({
  children,
  id,
  bg = 'default',
  className = '',
}) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[`bg_${bg}`]} ${className}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  )
}
