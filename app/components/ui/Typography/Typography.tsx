import { variants } from './constants'
import { TypographyProps } from './types'

export function Typography({
  color = 'default',
  size = 'md',
  weight = 'default',
  type = 'description',
  children,
  ...rest
}: TypographyProps) {
  const className = `${variants.color[color]} ${variants.weight[weight]} ${variants.size[size]} ${rest.className ?? ''}`

  if (type === 'title') return <h1 className={className}>{children}</h1>
  if (type === 'subtitle') return <h2 className={className}>{children}</h2>
  if (type === 'description')
    return <p className={`${className} font-normal leading-6`}>{children}</p>
}

export const Title = ({ children, ...props }: Partial<TypographyProps>) => {
  return (
    <Typography type="title" size="xlg" weight="bold" {...props}>
      {children}
    </Typography>
  )
}
Typography.Title = Title

export const Subtitle = ({ children, ...props }: Partial<TypographyProps>) => {
  return (
    <Typography type="subtitle" size="lg" weight="bold" {...props}>
      {children}
    </Typography>
  )
}
Typography.Subtitle = Subtitle

export const Description = ({
  children,
  ...props
}: Partial<TypographyProps>) => {
  return (
    <Typography
      type="description"
      size="sm"
      weight="light"
      color="secondary"
      {...props}
    >
      {children}
    </Typography>
  )
}
Typography.Description = Description
