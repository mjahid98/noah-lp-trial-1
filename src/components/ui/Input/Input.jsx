import styles from './Input.module.css'

export default function Input({
  label,
  id,
  name,
  type        = 'text',
  placeholder = '',
  required    = false,
  className   = '',
}) {
  return (
    <div className={`${styles.field} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden="true">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={styles.input}
      />
    </div>
  )
}
