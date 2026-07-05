import "./implementation.css";

/* Inline SVGs so no extra dependency is needed */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const AccuracyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const DatasetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2a2.5 2.5 0 0 1 5 0v0a2.5 2.5 0 0 1 2.5 2.5h0a2.5 2.5 0 0 1 2.5 2.5c0 1.06-.66 1.97-1.6 2.34A4 4 0 0 1 17 12a4 4 0 0 1-1.1 2.76A2.5 2.5 0 0 1 14 17h-4a2.5 2.5 0 0 1-1.9-2.24A4 4 0 0 1 7 12a4 4 0 0 1-.4-2.66A2.5 2.5 0 0 1 5 7a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2-2.5z"/>
  </svg>
);

export default function ImplementationCard({ item, index }) {
  return (
    <div className="implementation-card">
      {/* Index badge */}
      <div className="card-index">0{index + 1}</div>

      {/* Image / Placeholder */}
      <div className="implementation-image">
        {item.image ? (
          <img src={item.image} alt={item.title} />
        ) : (
          <div className="implementation-image-placeholder">
            <BrainIcon />
            <span>ML Model</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="implementation-body">
        {/* Title */}
        <h3 className="implementation-title">{item.title}</h3>

        {/* Stats row */}
        {(item.accuracy || item.dataset) && (
          <div className="implementation-stats">
            {item.accuracy && (
              <span className="stat-badge">
                <AccuracyIcon />
                {item.accuracy} Accuracy
              </span>
            )}
            {item.dataset && (
              <span className="stat-badge">
                <DatasetIcon />
                {item.dataset}
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p className="implementation-intro">{item.intro}</p>

        {/* Tech pills */}
        <div className="implementation-tech">
          {item.tech.map((tech, i) => (
            <span key={i} className="tech-pill">{tech}</span>
          ))}
        </div>

        <hr className="implementation-divider" />

        {/* Action buttons */}
        <div className="implementation-actions">
          <a
            href={item.github}
            target="_blank"
            rel="noreferrer"
            className="btn-github"
          >
            <GitHubIcon />
            GitHub
          </a>

          <button className="btn-show">
            <ArrowDownIcon />
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
