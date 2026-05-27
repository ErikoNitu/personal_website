
const ICONS = {
  mail: 
    "M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm0 2v.5l8 5 8-5V7H4zm16 10V9.4l-7.4 4.6a1 1 0 0 1-1.1 0L4 9.4V17h16z",
  linkedin:
    "M3 3h18v18H3V3zm4.5 4.2a1.3 1.3 0 1 0 0 2.6a1.3 1.3 0 0 0 0-2.6zM6.2 17.5h2.6v-7.4H6.2v7.4zm4.1 0h2.6v-3.9c0-1 .2-2.1 1.5-2.1 1.5 0 1.5 1.4 1.5 2.1v3.9h2.6v-4.6c0-2.3-1.2-3.5-2.9-3.5-1.3 0-1.9.7-2.2 1.2h-.1v-1h-2.9v7.4z",
  github:
    "M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.3 9.43 7.88 10.96.58.1.8-.25.8-.56v-2.1c-3.2.7-3.87-1.38-3.87-1.38-.53-1.35-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.5.12-3.12 0 0 .98-.31 3.2 1.18.93-.26 1.93-.4 2.92-.4.99 0 1.99.14 2.92.4 2.22-1.49 3.2-1.18 3.2-1.18.64 1.62.24 2.82.12 3.12.75.8 1.2 1.82 1.2 3.08 0 4.43-2.7 5.4-5.27 5.68.41.35.78 1.04.78 2.1v3.12c0 .31.22.67.8.56 4.58-1.53 7.88-5.86 7.88-10.96C23.5 5.74 18.27.5 12 .5z",
}

function Footer() {
  return (
    <footer id = "contact" className="footer">
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
        <p className="footer-copy">
          &copy; 2026 Eriko Nitu
        </p>
    </footer>
  )
}

export default Footer