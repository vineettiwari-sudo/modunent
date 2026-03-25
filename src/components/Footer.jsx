function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container footer-container">
        <div className="footer-text">
          <p className="footer-copy">Modunent UI Library. Crafted for modern storefront teams.</p>
          <p className="footer-meta">This is a portfolio project by Vineet Tiwari — built to showcase UI design &amp; front-end craft.</p>
        </div>
        <div className="footer-socials" aria-label="Social links">
          <a
            className="footer-pill"
            href="https://wa.me/919807203734"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="footer-pill"
            href="https://www.linkedin.com/in/vineet-tiwari-907137108/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="footer-pill"
            href="mailto:vineettiwarit@gmail.com"
          >
            Email
          </a>
          <a
            className="footer-pill footer-pill--muted"
            href="#"
            aria-label="Portfolio — link coming soon"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
