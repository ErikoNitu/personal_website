
function Description() {
  return (
    <section className="description">
      <div className="description-text">
        <p className="description-title">Description</p>

        <h1>Eriko Nitu</h1>

        <p>
          I am a Computer Engineering student, programmer, professional athlete and 
          Ashihara Karate World Champion. I am passionate about technology, innovation 
          and building meaningful projects, especially through hackathons, teamwork and 
          software development. Also currently I am a karate trainer, bringing discipline, 
          leadership, focus and a competitive mindset into everything I do, both in sports 
          and in engineering.
        </p>

        <div className="description-buttons">
          <a href="/CV" className="first-button">
            View CV
          </a>

          <a href="#projects" className="second-button">
            See Projects
          </a>
        </div>
      </div>

      <div className="profile-photo">
        <img src="../public/image.jpg" alt="Profile" className="photo" />
      </div>
    </section>
  )
}

export default Description