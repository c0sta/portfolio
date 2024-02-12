'use client'
import React from 'react'
import { getStyles } from './constants'
import { ButtonProps } from './types'

export const ButtonClient = ({
  label,
  icon,
  variant,
  color,
  className,
  ...rest
}: Omit<ButtonProps, 'isLink' | 'href' | 'target'>) => {
  return (
    <button
      className={`group/button ${getStyles(variant).variant[variant]} ${getStyles(variant).color[color]} ${className}`}
      onClick={rest.onClick}
    >
      {label}
      {icon}
    </button>
  )
}
