import { useEffect, useState } from 'react'

const GITHUB_USERNAME = 'ErikoNitu'

function Projects() {
  const [repos, setRepos] = useState<any[]>([])

  useEffect(() => {
    const getRepos = async () => {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9`
      )

      if (!response.ok) {
        return
      }

      const data = await response.json()

      setRepos(data)
    }

    getRepos()
  }, [])

  return (
    <section id="projects" className="section">
      <div className="projects-header">
        <p className="projects-title">GitHub API</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {repos
          .filter((repo) => !repo.fork)
          .slice(2, 9)
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