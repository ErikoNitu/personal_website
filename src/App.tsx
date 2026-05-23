
import './App.css'

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
    <div className="home">
      Comming soon
    </div>
  )
}

export default App
