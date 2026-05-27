import './App.css'
import Description from './components/Description'
import Projects from './components/Projects'
import Awards from './components/Awards'
import CommitsHistory from './components/CommitsHistory'
import Certificates from './components/Certificates'
import Footer from './components/Footer'

function App() {
  const path = window.location.pathname

  if (path === '/CV') {
    return (
      <div className="cv-container">
        <iframe
          src="/CV_Eriko_Nitu.pdf"
          title="CV"
          className="cv-frame"
        />
      </div>
    )
  }

  if (path === '/commits') {
     return <CommitsHistory />
  }

  if (path === '/secret') {
    return (
      <main className="secret-page">
        <a href="https://erikonitu.github.io/CatchTheImpostor/" className="secret-link">
          Click here
        </a>
      </main>
    )
  }

  return (
    <main className="page">
      <nav className="navbar">
        <div className="navbar-inner">
          <h2>ERIKO</h2>

          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#awards">Awards</a>
            <a href="#contact">Contact</a>
            <a href="/CV">CV</a>
          </div>
        </div>
      </nav>

      <Description />

      <Projects />

      <Certificates />

      <Awards />

      <Footer />
             
    </main>
  )
}

export default App