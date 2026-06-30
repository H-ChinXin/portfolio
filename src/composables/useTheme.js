import { ref, watch, onMounted } from 'vue'

const THEME_KEY = 'portfolio-theme'

export const theme = ref('light')

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(value) {
  document.documentElement.setAttribute('data-theme', value)
  document.documentElement.setAttribute('data-bs-theme', value)
}

export function initTheme() {
  const stored = localStorage.getItem(THEME_KEY)
  const initial = stored === 'dark' || stored === 'light' ? stored : getSystemTheme()
  theme.value = initial
  applyTheme(initial)
}

export function useTheme() {
  onMounted(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        theme.value = e.matches ? 'dark' : 'light'
      }
    })
  })

  watch(theme, (value) => {
    applyTheme(value)
    localStorage.setItem(THEME_KEY, value)
  })

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggleTheme }
}
