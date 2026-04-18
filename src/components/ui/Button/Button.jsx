import styles from './Button.module.css'

/**
 * Variants:
 * 'teal-outline'  — teal border + text, fills on hover  (btn 1)
 * 'lime-outline'  — lime border + text, fills on hover  (btn 2)
 * 'olive-outline' — olive border + text, fills on hover (btn 3)
 * 'olive-solid'   — olive filled, shadow on hover       (btn 4)
 * 'teal-solid'    — teal filled, shadow on hover        (btn 5 / primary CTA)
 */
export default function Button({
  children,
  variant = 'teal-solid',
  size = 'md',
  href,
  onClick,
  type = 'button',
  fullWidth = false,
  className = '',
  ...props
}) {
  const classes = [
    styles.btn,
    styles[variant],
    size !== 'md' ? styles[size] : '',
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
