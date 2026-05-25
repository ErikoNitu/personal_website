import { useEffect, useMemo, useState } from "react";
import Commits from "./Commits";

const GITHUB_USERNAME = "ErikoNitu";

const hiddenRepos = [
  "personal_website",
  "ErikoNitu",
  "test-repo",
  "SortYourself",
  "AGR-EUROTRANS-COURIER",
  "CatchTheImpostor",
];

function CommitsHistory() {
  const [repos, setRepos] = useState<any[]>([]);
  const [selectedRepo, setSelectedRepo] = useState("");

  const visibleRepos = useMemo(() => {
    return repos
      .filter((repo) => !repo.fork)
      .filter((repo) => !hiddenRepos.includes(repo.name))
      .slice(0, 9);
  }, [repos]);

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
    };

    getRepos();
  }, []);

  return (
    <main className="commits-page">
      <nav className="navbar">
        <div className="navbar-inner">
          <h2>ERIKO</h2>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/#projects">Projects</a>
            <a href="/#awards">Awards</a>
            <a href="/CV">CV</a>
          </div>
        </div>
      </nav>

      <section className="section commits-history-section">
        <div className="projects-header">
          <p className="projects-title">GitHub API</p>
          <h2>Commits History</h2>
        </div>

        <select
          value={selectedRepo}
          onChange={(event) => setSelectedRepo(event.target.value)}
          className="repo-select"
        >
          <option value="">Select a repository</option>

          {visibleRepos.map((repo) => (
            <option key={repo.id} value={repo.name}>
              {repo.name}
            </option>
          ))}
        </select>

        {selectedRepo && <Commits repoName={selectedRepo} />}
      </section>
    </main>
  );
}

export default CommitsHistory;