import styles from './ImageOverlayCard.module.css'

export default function ImageOverlayCard({ src, alt, label, height, className = '' }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <img src={src} alt={alt} className={styles.image} style={height ? { height } : undefined} />
      {label && (
        <div className={styles.overlay}>
          <span className={styles.label}>{label}</span>
        </div>
      )}
    </div>
  )
}
