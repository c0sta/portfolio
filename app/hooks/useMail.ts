export const useMail = () => {
  const emailMeHref = `mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=${process.env.NEXT_PUBLIC_SUBJECT}`

  return { emailMeHref }
}
