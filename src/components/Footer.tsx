
const ICONS = {
  mail: 
    "M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm0 2v.5l8 5 8-5V7H4zm16 10V9.4l-7.4 4.6a1 1 0 0 1-1.1 0L4 9.4V17h16z",
  linkedin:
    "M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0V8.98zM7.98 8.98h4.8v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6C22.4 8.43 24 11.16 24 15.12V24h-5v-7.75c0-1.85-.03-4.22-2.57-4.22-2.57 0-2.96 2-2.96 4.08V24h-4.99V8.98z",
  github:
    "M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.3 9.43 7.88 10.96.58.1.8-.25.8-.56v-2.1c-3.2.7-3.87-1.38-3.87-1.38-.53-1.35-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.5.12-3.12 0 0 .98-.31 3.2 1.18.93-.26 1.93-.4 2.92-.4.99 0 1.99.14 2.92.4 2.22-1.49 3.2-1.18 3.2-1.18.64 1.62.24 2.82.12 3.12.75.8 1.2 1.82 1.2 3.08 0 4.43-2.7 5.4-5.27 5.68.41.35.78 1.04.78 2.1v3.12c0 .31.22.67.8.56 4.58-1.53 7.88-5.86 7.88-10.96C23.5 5.74 18.27.5 12 .5z",
}

function Footer() {
  return (
    <footer className="footer">
        <p>Contact</p>

        <div className="footer-links">
          <a href="mailto:erikonitu@gmail.com">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path d={ICONS.mail} />
              </svg>
            </span>
            erikonitu@gmail.com
          </a>

          <a
          href="https://www.linkedin.com/in/eriko-nitu"
          target="_blank"
          rel="noreferrer"
          >
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path d={ICONS.linkedin} />
              </svg>
            </span>
          LinkedIn
          </a>

          <a
          href="https://github.com/ErikoNitu"
          target="_blank"
          rel="noreferrer"
          >
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path d={ICONS.github} />
              </svg>
            </span>
          Github
          </a>
        </div>
    </footer>
  )
}

export default Footer