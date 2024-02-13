import { getStyles } from './constants'
import { ButtonProps } from './types'

export const Button = ({
  variant,
  color,
  icon,
  label,
  className = '',
  href = '',
  target = ''
}: ButtonProps) => {
  return (
    <a
      className={`group/button ${getStyles(variant).variant[variant]} ${getStyles(variant).color[color]} ${className}`}
      href={href}
      target={target}
    >
      {label}
      {icon}
    </a>
  )
}
