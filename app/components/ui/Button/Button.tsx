'use client'
import { getStyles } from './constants'
import { ButtonProps } from './types'

export const Button = ({
  variant,
  color,
  icon,
  label,
  className = '',
  href = '',
  target = '',
  onClick
}: ButtonProps) => {
  const style = `group/button ${getStyles(variant).variant[variant]} ${getStyles(variant).color[color]} ${className}`

  if (href) {
    return (
      <a className={style} href={href} target={target}>
        {label}
        {icon}
      </a>
    )
  }

  return (
    <button className={style} onClick={onClick}>
      {label}
      {icon}
    </button>
  )
}
