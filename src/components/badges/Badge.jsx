import styles from "./badge.module.css"

function Badge({ variant = "default", children }) {
  const rootClassName = [styles.badge, styles[variant] ?? styles.default].join(" ")

  return <span className={rootClassName}>{children}</span>
}

export default Badge
