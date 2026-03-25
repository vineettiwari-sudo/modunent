import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Topbar from "../components/layout/Topbar"
import Sidebar from "../components/layout/Sidebar"
import { elementRegistry } from "../../lib/registry"

/** Split a code string into { html, css } by extracting <style>…</style> blocks. */
function splitCode(code) {
  if (!code) return { html: "", css: "" }
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi
  const cssBlocks = []
  let match
  while ((match = styleRegex.exec(code)) !== null) {
    cssBlocks.push(match[1].trim())
  }
  const html = code.replace(/<style[^>]*>[\s\S]*?<\/style>\s*/gi, "").trim()
  const css = cssBlocks.join("\n\n")
  return { html, css }
}

function ElementDetail() {
  const { id } = useParams()
  const element = elementRegistry.find((item) => item.id === id)
  const [activeVariant, setActiveVariant] = useState(
    () => element?.variants?.[0] ?? null
  )
  const [activeTab, setActiveTab] = useState("html")
  const [isDark, setIsDark] = useState(false)
  const [copied, setCopied] = useState(false)

  const { html: htmlCode, css: cssCode } = splitCode(activeVariant?.code)
  const displayedCode = activeTab === "css" ? cssCode : htmlCode
  const hasCss = cssCode.length > 0

  const handleCopy = (code) => {
    if (!code) return
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!element) {
    return (
      <div className="min-h-screen flex flex-col app-elements-page">
        <Topbar />
        <div className="flex flex-1 min-h-0">
          <Sidebar />
          <main className="flex-1 overflow-auto min-w-0" style={{ padding: 32 }}>
            <p className="opacity-70">Element not found.</p>
            <Link to="/elements" className="text-sm opacity-70 hover:opacity-100 mt-4 inline-block">
              Back to elements
            </Link>
          </main>
        </div>
      </div>
    )
  }

  const isInputs = element.category === "Input Fields"

  return (
    <div className="min-h-screen flex flex-col app-elements-page">
      <Topbar />
      <div className="flex flex-1 min-h-0">
        <Sidebar activeItem={element.category} />
        <main className="flex-1 overflow-auto min-w-0" style={{ padding: 32 }}>
          <div className="w-full">
            {/* Back link */}
            <Link
              to="/elements"
              className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity mb-6"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go back
            </Link>

            {/* Main content: Preview + Code side by side */}
            <div className="flex flex-col lg:flex-row gap-0 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(64,96,240,0.18)' }}>
              {/* Left: Preview */}
              <div className="flex-1 min-w-0 flex flex-col">
                {/* Preview toolbar */}
                <div className="flex items-center justify-between px-4 py-2.5" style={{ background: 'rgba(255,255,255,0.9)', borderBottom: '1px solid rgba(64,96,240,0.12)' }}>
                  <h1 className="text-base font-semibold truncate" style={{ color: '#0f172a' }}>{element.title}</h1>
                  <div className="flex items-center gap-2">
                    {/* Theme toggle */}
                    <div className="flex items-center gap-1 rounded-lg overflow-hidden" style={{ border: '1px solid rgba(64,96,240,0.2)' }}>
                      <button
                        type="button"
                        onClick={() => setIsDark(false)}
                        className={`p-1.5 transition-colors`}
                        style={{ background: !isDark ? 'rgba(64,96,240,0.12)' : 'transparent', color: '#64748b' }}
                        aria-label="Light preview"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsDark(true)}
                        className={`p-1.5 transition-colors`}
                        style={{ background: isDark ? 'rgba(64,96,240,0.12)' : 'transparent', color: '#64748b' }}
                        aria-label="Dark preview"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Preview area */}
                <div
                  className={`flex-1 flex items-center justify-center p-8 ${
                    isDark ? "" : "preview-light-theme"
                  }`}
                  style={{ minHeight: 350, background: isDark ? '#1a1a2e' : 'rgba(240,246,255,0.6)' }}
                >
                  {activeVariant &&
                    (isInputs ? (
                      <div className="input-preview-wrapper">
                        {activeVariant.preview}
                      </div>
                    ) : element.category === "Product Cards" ? (
                      <div className="flex items-center justify-center w-full min-h-0">
                        {activeVariant.preview}
                      </div>
                    ) : (
                      activeVariant.preview
                    ))}
                </div>
              </div>

              {/* Right: Code */}
              <div className="lg:w-[480px] xl:w-[520px] shrink-0 flex flex-col border-t lg:border-t-0 lg:border-l border-white/8" style={{ background: '#0d1117' }}>
                {/* Code toolbar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab("html")}
                      className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                        activeTab === "html" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/70"
                      }`}
                    >
                      HTML
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("css")}
                      className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                        activeTab === "css" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/70"
                      }`}
                    >
                      CSS
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(displayedCode)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium bg-white/8 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                  >
                    <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* Code content */}
                <div className="flex-1 overflow-auto p-4">
                  {activeVariant && displayedCode ? (
                    <pre className="text-[13px] leading-relaxed whitespace-pre-wrap font-mono text-white/75" style={{ tabSize: 2 }}>
                      <code>{displayedCode}</code>
                    </pre>
                  ) : activeVariant && activeTab === "css" && !hasCss ? (
                    <p className="text-white/30 text-sm">No CSS for this element.</p>
                  ) : (
                    <p className="text-white/30 text-sm">No code for this element.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Variants */}
            {element.variants.length > 1 && (
              <div style={{ marginTop: 32 }}>
                <h2 className="text-lg font-semibold mb-4 opacity-70">Variants</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {element.variants.map((variant) => (
                    <div
                      key={variant.name}
                      role="button"
                      tabIndex={0}
                      className={`rounded-lg overflow-hidden cursor-pointer transition-all duration-200`}
                      style={{
                        border: activeVariant && activeVariant.name === variant.name
                          ? '1.5px solid rgba(64,96,240,0.6)'
                          : '1px solid rgba(64,96,240,0.15)',
                        boxShadow: activeVariant && activeVariant.name === variant.name
                          ? '0 0 0 3px rgba(64,96,240,0.12)'
                          : 'none'
                      }}
                      onClick={() => setActiveVariant(variant)}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveVariant(variant) } }}
                    >
                      <div className="flex items-center justify-center p-4 pointer-events-none" style={{ minHeight: 80, background: 'rgba(240,246,255,0.7)' }}>
                        <div className="scale-[0.6] origin-center">
                          {isInputs ? (
                            <div className="input-preview-wrapper">
                              {variant.preview}
                            </div>
                          ) : element.category === "Product Cards" ? (
                            <div className="scale-[0.5] origin-center flex items-center justify-center">
                              {variant.preview}
                            </div>
                          ) : (
                            variant.preview
                          )}
                        </div>
                      </div>
                      <div className="px-2.5 py-1.5 text-[11px] font-medium truncate" style={{ background: 'rgba(255,255,255,0.9)', borderTop: '1px solid rgba(64,96,240,0.1)', color: '#64748b' }}>
                        {variant.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ElementDetail
