import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="container navbar-container">
        <div className="flex items-center gap-8">
          <Link to="/" className="navbar-logo" aria-label="Go to home">
            Modunent
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <NavLink
              to="/elements"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive ? "opacity-100" : "opacity-60 hover:opacity-90"
                }`
              }
            >
              Elements
            </NavLink>
          </div>
        </div>
        <div className="navbar-actions">
          <a
            href="https://www.linkedin.com/in/vineet-tiwari-907137108/"
            target="_blank"
            rel="noreferrer"
            className="navbar-button"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
