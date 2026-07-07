import "./about.css";

const TECH_STACK = [
  "Python", "LangGraph", "LangChain", "ChromaDB", "PyTorch",
  "Groq LLM API", "FastAPI", "PyGithub", "React", "C++"
];

const STATS = [
  { label: "leetcode_problem_solved", value: "175" },
  { label: "open_source", value: "GSSoC'25" },
  { label: "projects_shipped", value: "3+" },
  { label: "cgpa", value: "8" },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-top">
        <div className="about-photo">
          <img src="/profile.jpg (1).jpeg" alt="Sameer Rathore" />
        </div>

        <div className="about-intro">
          <h2>About Me</h2>
          <h3>Sameer Rathore</h3>
          <p className="about-role">AI/ML Developer &middot; Agentic Systems</p>

          <p className="about-description">
            I'm a Computer Science (AI/ML) undergrad who likes building systems
            that actually reason through problems, not just call an API and
            hope. Lately that's meant a multi-agent code review system built on
            LangGraph's Send API with RAG-backed context via ChromaDB, and a
            transformer-based resume screener that layers SBERT, LLM
            explainability, and a fine-tuned BERT classifier. I spend the rest
            of my time on graph and DP problems in C++, chasing a cleaner
            solution one recursion at a time.
          </p>

          <div className="tech-pills">
            {TECH_STACK.map((tech) => (
              <span className="tech-pill" key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="stat-console" aria-label="quick stats">
        <div className="console-dot-row">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <span className="console-label">~/sameer/status</span>
        </div>
        <div className="console-body">
          {STATS.map((stat, i) => (
            <div className="console-line" key={stat.label}>
              <span className="console-prompt">$</span>
              <span className="console-key">{stat.label}</span>
              <span className="console-sep">:</span>
              <span className="console-value">{stat.value}</span>
              {i === STATS.length - 1 && <span className="console-cursor" />}
            </div>
          ))}
        </div>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <h4>Education</h4>
          <p>B.Tech in Computer Science (AI/ML)</p>
          <p>GL BAJAJ INSTITUTE OF TECHNOLOGY AND MANAGEMENT</p>
          <p>2024 &ndash; 2028</p>
        </div>

        <div className="about-card">
          <h4>Interests</h4>
          <p>Agentic AI Systems</p>
          <p>RAG &amp; Retrieval Architectures</p>
          <p>Competitive Programming</p>
        </div>

        <div className="about-card">
          <h4>Currently Exploring</h4>
          <p>LangGraph state machines &amp; multi-agent orchestration</p>
          <p>Fine-tuning BERT for classification tasks</p>
          <p>Graph algorithms (BFS/DFS) at scale</p>
        </div>

        <div className="about-card">
          <h4>Career Goal</h4>
          <p>
            Land an AI/ML internship where I can ship real agentic and
            RAG-powered products, then grow into building production-grade
            LLM systems full-time.
          </p>
        </div>
      </div>
    </section>
  );
}