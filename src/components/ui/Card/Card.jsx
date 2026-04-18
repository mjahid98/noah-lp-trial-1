import styles from './Card.module.css'

export default function Card({ children, variant = 'default', className = '' }) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`}>
      {children}
    </div>
  )
}
