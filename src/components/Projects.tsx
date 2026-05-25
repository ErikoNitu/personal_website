import { useEffect, useState } from 'react'

const GITHUB_USERNAME = 'ErikoNitu'
const hiddenRepos = ['personal_website', 'ErikoNitu', 'test-repo', '']

function Projects() {
  const [repos, setRepos] = useState<any[]>([])

  useEffect(() => {
    const getRepos = async () => {
      const [userReposResponse, draWarResponse] = await Promise.all([
        fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9`
        ),
        fetch('https://api.github.com/repos/OctaVianu8/DraWar'),
      ])

      if (!userReposResponse.ok || !draWarResponse.ok) {
        return
      }

      const userRepos = await userReposResponse.json()
      const draWarRepo = await draWarResponse.json()

      setRepos([...userRepos, draWarRepo])
    }

    getRepos()
  }, [])

  return (
    <section id="projects" className="section">
      <div className="projects-header">
        <p className="projects-title">GitHub API</p>
        <div className="projects-title-row">
          <h2>Projects</h2>
          <a href="/commits" className="commits-button">
            View commits history
          </a>
        </div>
      </div>

      <div className="projects-grid">
        {repos
          .filter((repo) => !repo.fork)
          .filter((repo) => !hiddenRepos.includes(repo.name))
          .slice(0, 9)
          .map((repo) => (
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="project-card"
            key={repo.id}
          >
            <h3>{repo.name}</h3>

            <p>
              {repo.description ||
                'No description available for this repository.'}
            </p>

            <div className="project-meta">
              <span>{repo.language || 'Code'}</span>
              <span>★ {repo.stargazers_count}</span>
              <span>⑂ {repo.forks_count}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects