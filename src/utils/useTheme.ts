import { ref } from 'vue'

type ColorScheme = {
  '--color-black': string
  '--color-white': string
  '--color-primary': string
  '--color-secondary': string
  '--color-background': string
  '--color-gray': string
  '--color-text': string
}

type ThemeVariant = 'light' | 'dark'

type ThemeOptions = {
  [K in ThemeVariant]: ColorScheme
}

export const useTheme = () => {
  const currentTheme = ref<ThemeVariant>('light')

  const themes: ThemeOptions = {
    light: {
      '--color-black': '#0d0d0d',
      '--color-white': '#ffffff',
      '--color-primary': '#364fe0',
      '--color-secondary': '#f1f3f4',
      '--color-background': '#ffffff',
      '--color-gray': '#f9f9f9',
      '--color-text': '#0d0d0d'
    },
    dark: {
      '--color-black': '#b3b3b3',
      '--color-white': '#202124',
      '--color-primary': '#4d66ff',
      '--color-secondary': '#b3b3b3',
      '--color-background': '#202124',
      '--color-gray': '#b3b3b3',
      '--color-text': '#674141'
    }
  }

  const applyTheme = (theme: ThemeVariant): void => {
    const root = document.documentElement
    const themeColors = themes[theme]

    Object.entries(themeColors).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })

    currentTheme.value = theme
    localStorage.setItem('theme', theme)
  }

  const toggleTheme = (): void => {
    const nextTheme = currentTheme.value === 'light' ? 'dark' : 'light'
    applyTheme(nextTheme)
  }

  const initTheme = (): void => {
    const savedTheme = localStorage.getItem('theme') as ThemeVariant | null
    if (savedTheme && themes[savedTheme]) {
      applyTheme(savedTheme)
    }
  }

  return {
    currentTheme,
    toggleTheme,
    initTheme
  }
}

export type UseThemeReturn = ReturnType<typeof useTheme>