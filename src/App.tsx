import './App.css'
import Description from './components/Description'
import Projects from './components/Projects'

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

  return (
    <main className="page">
      <nav className="navbar">
        <h2>Eriko Nitu</h2>

        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#awards">Awards</a>
          <a href="/CV">CV</a>
        </div>
      </nav>

      <Description />

      <Projects />
      
    </main>
  )
}

export default App