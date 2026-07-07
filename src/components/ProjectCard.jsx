import "./projects.css";

const EXT_BY_CATEGORY = {
  "AI / ML": "py",
  "WEB DEVELOPMENT": "tsx",
  "DEFAULT": "js",
};

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function truncateWords(text = "", limit = 24) {
  const words = text.trim().split(/\s+/);
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(" ") + "…";
}

export default function ProjectCard({ project, descriptionWordLimit = 24 }) {
  const hasDemo = Boolean(project.demo);
  const ext = EXT_BY_CATEGORY[project.category] || EXT_BY_CATEGORY.DEFAULT;
  const filename = `${slugify(project.title)}.${ext}`;
  const shortDesc = truncateWords(project.desc, descriptionWordLimit);

  return (
    <div className="project-card">
      {/* editor titlebar */}
      <div className="card-titlebar">
        <div className="titlebar-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="titlebar-filename">{filename}</span>
        {project.featured && <span className="titlebar-star" title="Featured">★</span>}
      </div>

      <div className="project-image">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.classList.add("project-image--broken");
            }}
          />
        ) : null}
        <div className="project-image-fallback">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#22c55e" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#22c55e" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* code-style body with line gutter */}
      <div className="card-code-body">
        <div className="code-gutter" aria-hidden="true">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        <div className="code-content">
          {project.category && (
            <p className="code-comment">// {project.category}</p>
          )}

          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{shortDesc}</p>

          <div className="project-tech">
            {project.tech?.map((t, i) => (
              <span className="tech-pill" key={i}>
                <span className="tag-bracket">&lt;</span>
                {t}
                <span className="tag-bracket"> /&gt;</span>
              </span>
            ))}
          </div>

          <div className="project-action">
            {hasDemo && (
              <button
                className="term-btn term-btn--demo"
                onClick={() => window.open(project.demo, "_blank")}
                aria-label="Open live demo"
              >
                <span className="term-prompt">$</span>
                <span className="btn-label">live&nbsp;demo</span>
              </button>
            )}

            <button
              className={`term-btn term-btn--github ${hasDemo ? "" : "term-btn--full"}`}
              onClick={() => window.open(project.github, "_blank")}
              aria-label="View source on GitHub"
            >
              <span className="term-prompt">$</span>
              <span className="btn-label">source&nbsp;code</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}