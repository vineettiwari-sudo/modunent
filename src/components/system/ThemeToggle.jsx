import { useTheme } from "./ThemeProvider"

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? "is-dark" : "is-light"}`}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {isDark ? (
          <svg viewBox="0 0 24 24" role="img">
            <path d="M21.64 13a1 1 0 0 0-1.05-.26 8 8 0 0 1-10.34-10.34 1 1 0 0 0-1.31-1.31 10 10 0 1 0 12.96 12.96 1 1 0 0 0-.26-1.05Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" role="img">
            <path d="M12 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-6a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM3 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm13.66 5.66a1 1 0 0 1 1.41 0l.71.71a1 1 0 0 1-1.41 1.41l-.71-.7a1 1 0 0 1 0-1.42ZM5.92 5.92a1 1 0 0 1 1.41 0l.71.7a1 1 0 1 1-1.42 1.42l-.7-.71a1 1 0 0 1 0-1.41Zm12.15 0a1 1 0 0 1 0 1.41l-.7.71a1 1 0 0 1-1.42-1.42l.71-.7a1 1 0 0 1 1.41 0ZM8.04 16.96a1 1 0 0 1 0 1.41l-.7.71a1 1 0 1 1-1.42-1.41l.71-.71a1 1 0 0 1 1.41 0Z" />
          </svg>
        )}
      </span>
    </button>
  )
}

export default ThemeToggle
