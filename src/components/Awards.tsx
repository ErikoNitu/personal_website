const awards = [
  {
    title: 'HackITAll Amazon Games Challenge',
    year: '2025',
    description: '2nd Place after creating Exillion, a 2D game under the theme "1HP"',
  },
  {
    title: 'HackITAll SAP Challenge',
    year: '2025',
    description: 'Awarded Mention after builing a system to optimize rotable kit logistics in a hub-and-spoke network',
  },
  {
    title: 'NXP Autonomous Course',
    year: '2025',
    description: '3rd Place in the final competition. Built an NXP Cup car from scratch.',
  },
  {
    title: 'SSS CTF',
    year: '2025',
    description: 'Placed 3rd in the final capture the flag competition after completing the Essentials Course',
  },
]

function Awards() {
  return (
    <section id="awards" className="section">
        <div className="awards-header">
          <p className="awards-title">Achievements</p>
          <h2>Awards & Highlights</h2>
        </div>

        <div className="awards-window">
          <div className="awards-track">
            {awards.map((award, index) => (
              <article className="award-card" key={`${award.title}-${index}`}>
                <span>{award.year}</span>
                <h3>{award.title}</h3>
                <p>{award.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Awards
