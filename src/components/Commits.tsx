import { useEffect, useState } from "react";

const GITHUB_USERNAME = "ErikoNitu";

type CommitsProps = {
  repoName: string;
};

function Commits({ repoName }: CommitsProps) {
  const [commits, setCommits] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCommits = async () => {
      setLoading(true);
      setError("");
      setCommits([]);

      try {
        const response = await fetch(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/commits?per_page=5`
        );

        if (!response.ok) {
          throw new Error("Could not fetch commits");
        }

        const data = await response.json();
        setCommits(data);
      } catch (error) {
        console.error(error);
        setError("Could not load commits for this repository.");
      } finally {
        setLoading(false);
      }
    };

    getCommits();
  }, [repoName]);

  if (loading) {
    return <p>Loading commits...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="commits-section">
      <h2>Latest Commits</h2>

      <div className="commits-list">
        {commits.map((commit) => (
          <a
            key={commit.sha}
            href={commit.html_url}
            target="_blank"
            rel="noreferrer"
            className="commit-card"
          >
            <h3>{commit.commit.message}</h3>

            <p>
              By {commit.commit.author.name} on{" "}
              {new Date(commit.commit.author.date).toLocaleDateString()}
            </p>

            <span>{commit.sha.slice(0, 7)}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Commits;