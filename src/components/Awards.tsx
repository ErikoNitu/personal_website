const awards_cs = [
  {
    title: 'HackITAll Amazon Games Challenge',
    year: '2025',
    description: '2nd Place after creating Exillion, a 2D game under the theme "1HP"',
  },
  {
    title: 'HackITAll SAP Challenge',
    year: '2025',
    description: 'Awarded Mention after building a system to optimize rotable kit logistics in a hub-and-spoke network',
  },
  {
    title: 'NXP Autonomous Cars Course',
    year: '2025',
    description: '3rd Place in the final competition. Built an NXP Cup car from scratch.',
  },
  {
    title: 'SSS CTF',
    year: '2025',
    description: 'Placed 3rd in the final capture the flag competition after completing the Essentials Course',
  },
]

const awards_sport = [
  {
    title: 'Ashihara Karate World Championship -Japan Matsuyama',
    year: '2024',
    description: '1st Place in the Seniors Category 18-42 years, -70kg',
  },
  {
    title: 'Kickboxing World Cup -Austrian Classics',
    year: '2020',
    description: '1st Place and winner of the World Cup in the Juniors Category',
  },
  {
    title: 'Multiple National and International Champion -Ashihara Karate',
    year: '2014-2026',
    description: 'Won a total of 31 medals among which 18 gold medals',
  },
  {
    title: 'Multiple National and International Champion -Kickboxing',
    year: '2019-2026',
    description: 'Won a total of 62 medals among which 35 gold medals and 2 belts',
  },
   {
    title: 'Ashihara Karate Black Belt',
    year: '2023',
    description: 'After practicing Karate for 10 years and going through 11 belt exams',
  },
  {
    title: 'Athlete of the Year 2024 - Ashihara Karate',
    year: '2024',
    description: 'Awarded after winning the world championship',
  },
]

function Awards() {
  return (
    <section id="awards" className="section">
        <div className="awards-header">
          <p className="awards-title">Achievements</p>
            <br></br>
          <h3>CSE Awards & Highlights</h3>
        </div>

        <div className="awards-window">
          <div className="awards-track">
            {awards_cs.map((award, index) => (
              <article className="award-card" key={`${award.title}-${index}`}>
                <span>{award.year}</span>
                <h3>{award.title}</h3>
                <p>{award.description}</p>
              </article>
            ))}
          </div>
        </div>

        <br></br>
        <div className="awards-header">
          <h3>Sports Awards & Highlights</h3>
          
        </div>
        <div className="awards-window">
          <div className="awards-track">
            {awards_sport.map((award, index) => (
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
