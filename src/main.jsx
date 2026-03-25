import { StrictMode, Component } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App.jsx"

class ErrorBoundary extends Component {
  state = { hasError: false, error: null }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    console.error("App error:", error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: "system-ui", background: "#0f172a", color: "#f8fafc", minHeight: "100vh" }}>
          <h1 style={{ fontSize: "1.25rem", marginBottom: 8 }}>Something went wrong</h1>
          <pre style={{ fontSize: 12, color: "#94a3b8", overflow: "auto" }}>{this.state.error?.message ?? "Unknown error"}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

const rootEl = document.getElementById("root")
if (!rootEl) {
  document.body.innerHTML = '<div style="padding:2rem;background:#0f172a;color:#f8fafc;font-family:system-ui;">Error: #root not found</div>'
} else {
  try {
    createRoot(rootEl).render(
      <StrictMode>
        <ErrorBoundary>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </StrictMode>,
    )
  } catch (err) {
    rootEl.innerHTML = `<div style="padding:2rem;background:#0f172a;color:#f8fafc;font-family:system-ui;"><h1>Load error</h1><pre style="color:#94a3b8;overflow:auto;">${typeof err?.message === "string" ? err.message : String(err)}</pre></div>`
  }
}
