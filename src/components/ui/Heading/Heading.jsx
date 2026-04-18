import styles from './Heading.module.css'

export default function Heading({
  children,
  level = 2,
  size,
  align = 'left',
  className = '',
}) {
  const Tag = `h${level}`
  const sizeClass = size ? styles[`size_${size}`] : ''
  const alignClass = styles[`align_${align}`]

  return (
    <Tag className={`${styles.heading} ${sizeClass} ${alignClass} ${className}`}>
      {children}
    </Tag>
  )
}
