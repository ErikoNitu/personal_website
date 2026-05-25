
function Description() {
  return (
    <section className="description">
      <div className="description-text">
        <p className="description-title">Description</p>

        <h1>Eriko Nitu</h1>

        <p>
          Computer engineering student, professional athlete and driven programmer fueled by 
          technology and innovation, with a sharp eye for details and a passion for building great projects.
          I have always been actively involved in the programming field, enriching my knowledge with every 
          oportunity that comes my way. I am also a Ashihara Karate World Champion and currently a karate trainer,
          bringing discipline, leadership, focus and a competitive mindset into everything I do, both in sports 
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
        <img src="/image.jpg" alt="Profile" className="photo" />
      </div>
    </section>
  )
}

export default Description