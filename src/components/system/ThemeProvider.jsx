import { createContext, useContext, useEffect, useMemo, useState } from "react"

const THEME_KEY = "modunent-theme"
const ThemeContext = createContext(null)

function getInitialTheme() {
  if (typeof window === "undefined") return "dark"

  const persistedTheme = window.localStorage.getItem(THEME_KEY)
  if (persistedTheme === "light" || persistedTheme === "dark") {
    return persistedTheme
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}
