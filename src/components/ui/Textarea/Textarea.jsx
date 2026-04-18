import styles from './Textarea.module.css'

export default function Textarea({
  label,
  id,
  name,
  placeholder = '',
  rows        = 5,
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
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={styles.textarea}
      />
    </div>
  )
}
