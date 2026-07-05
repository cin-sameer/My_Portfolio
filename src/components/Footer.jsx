import "./footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#learning" },
  { label: "Skills", href: "#skills" },
];

const projects = [
  {
    label: "Multi-Agent Code Review",
    href: "https://github.com/cin-sameer/Code_Review_System",
  },
  {
    label: "AI Resume Screener",
    href: "https://github.com/cin-sameer/resume_screener",
  },
  {
    label: "Visual Search Engine",
    href: "https://github.com/cin-sameer/Visual_Search_Engine",
  },
];

const stats = [
  { value: "3+", label: "AI/ML Projects" },
  { value: "GSSoC'25", label: "Open Source" },
  { value: "2028", label: "Graduating" },
  { value: "Noida", label: "Based In" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-line" />

      {/* Stats */}
      <div className="footer-stats">
        {stats.map((s) => (
          <div key={s.label} className="footer-stat">
            <span className="footer-stat-value">{s.value}</span>
            <span className="footer-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3 className="footer-brand-name">Sameer Rathore</h3>

          <p className="footer-brand-role">
            Agentic AI &amp; ML Developer
          </p>

          <p className="footer-brand-desc">
            2nd year CSE (AI/ML) undergrad at GL Bajaj, Noida.
            Building agentic AI systems with LangGraph, RAG pipelines,
            and multi-agent orchestration. GSSoC'25 contributor.
            Open to paid AI/ML internships.
          </p>

          <div className="footer-tags">
            <span>LangGraph</span>
            <span>RAG</span>
            <span>Multi-Agent</span>
            <span>PyTorch</span>
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <p className="footer-nav-heading">Navigate</p>

          <ul className="footer-nav">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Projects */}
        <div>
          <p className="footer-nav-heading">Featured Projects</p>

          <ul className="footer-nav">
            {projects.map((project) => (
              <li key={project.label}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <div className="footer-contact-group">
            <p className="footer-contact-label">Get In Touch</p>

            <a
              href="mailto:s.rathorework@gmail.com"
              className="footer-contact-link"
            >
              <MailIcon />
              <span>s.rathorework@gmail.com</span>
            </a>

            <p className="footer-contact-sublabel">
              Open to AI/ML internships — remote or Noida
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-contact-group">
            <p className="footer-contact-label">Follow Me</p>

            <div className="footer-social">
              <a
                href="https://github.com/cin-sameer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sameer-rathore-53618a33b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/SameerRath94412"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p className="footer-bottom-copy">
          © {year} <span>Sameer Rathore</span>. All rights reserved.
        </p>

        <p className="footer-bottom-made">
          Made with <HeartIcon /> in React
        </p>
      </div>
    </footer>
  );
}