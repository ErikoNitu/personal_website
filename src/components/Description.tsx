
function Description() {
  return (
    <section className="about-block">
      <div className="about-text">
        <p className="small-title">About me</p>

        <h1>Hello, I&apos;m Eriko.</h1>

        <p>
          I am an Industrial Engineering and Robotics student passionate about
          robotics, programming, cybersecurity, biomaterials, and intelligent
          engineering systems. I enjoy building practical projects that combine
          software, hardware, and research.
        </p>

        <div className="about-buttons">
          <a href="/CV" className="primary-button">
            View CV
          </a>

          <a href="#projects" className="secondary-button">
            See Projects
          </a>
        </div>
      </div>

      <div className="about-photo-card">
        <img src="/profile.jpg" alt="Profile" className="profile-photo" />
      </div>
    </section>
  )
}

export default Description