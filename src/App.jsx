import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Elements from "./pages/Elements"
import ComponentDetail from "./pages/ComponentDetail"
import ElementDetail from "./pages/ElementDetail"

function App() {
  const { pathname } = useLocation()
  const isElementsRoute = pathname.startsWith("/elements")

  return (
    <div className="app-shell" style={{ background: "var(--bg-gradient)", color: "var(--color-text, #0f172a)", minHeight: "100vh" }}>
      <div className="flex flex-col min-h-full">
      {!isElementsRoute && <Navbar />}
      <div className="flex-1 flex flex-col min-h-0" style={{ minHeight: "60vh" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/elements/card/:id" element={<ElementDetail />} />
        <Route path="/elements/:category" element={<Elements />} />
        <Route path="/elements/:slug" element={<ComponentDetail />} />
      </Routes>
      </div>
      {!isElementsRoute && <Footer />}
      </div>
    </div>
  )
}

export default App
