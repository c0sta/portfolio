import { useEffect, useState } from 'react'

export const useDarkMode = () => {
  const [isDarkThemeActive, setIsDarkThemeActive] = useState<boolean>()

  const setLightTheme = () => {
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')
    setIsDarkThemeActive(false)
  }

  const setDarkTheme = () => {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
    setIsDarkThemeActive(true)
  }

  const toggleTheme = () => {
    if (localStorage.theme === 'dark') setLightTheme()
    else setDarkTheme()
  }

  useEffect(() => {
    if (
      !localStorage.theme &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkTheme()
    }

    if (!!localStorage.theme) {
      if (localStorage.theme === 'light') setLightTheme()
      if (localStorage.theme === 'dark') setDarkTheme()
    }
  }, [])

  return { toggleTheme, isDarkThemeActive }
}
