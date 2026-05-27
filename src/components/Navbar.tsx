import { useState } from 'react'

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <nav className="navbar">
        <div className="navbar-inner">
            <h2>ERIKO</h2>

            <button
                className="nav-toggle"
                type="button"
                aria-expanded={isNavOpen}
                aria-controls="primary-navigation"
                onClick={() => setIsNavOpen((open) => !open)}
            >
                Menu
            </button>

            <div
                id="primary-navigation"
                className={`nav-links${isNavOpen ? ' open' : ''}`}
            >
                <a href="#projects" onClick={() => setIsNavOpen(false)}>
                	Projects
                </a>
                <a href="#certificates" onClick={() => setIsNavOpen(false)}>
                	Certificates
                </a>
                <a href="#awards" onClick={() => setIsNavOpen(false)}>
                	Awards
                </a>
                <a href="#contact" onClick={() => setIsNavOpen(false)}>
                	Contact
                </a>
                <a href="/CV" onClick={() => setIsNavOpen(false)}>
                    CV
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar