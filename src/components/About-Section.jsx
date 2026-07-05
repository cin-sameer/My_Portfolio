import "./about.css";

export default function About()
{
    return(
        <section className="about-section" id="about">
              <div className="about-top">
                <div className="about-photo">
                    <img src="/profile.jpg (1).jpeg" alt="Sameer Rathore" />
                </div>
                <div className="about-intro">
                    <h2>About Me</h2>
                    <h3>Sameer Rathore</h3>
                    <p className="about-role">
                        Web & AI Developer
                    </p>
                    <p className="about-description">
                        I am a passionate web and AI developer with a strong background in creating innovative solutions. With expertise in both front-end and back-end development, I specialize in building dynamic and responsive web applications. My experience extends to AI technologies, where I have worked on projects involving machine learning and natural language processing. I am dedicated to continuous learning and staying updated with the latest industry trends to deliver high-quality results.
                    </p>
                </div>
              </div>
              <div className="about-cards">
                <div className="about-card">
                      <h4>Education</h4>
          <p>B.Tech in Computer Science</p>
          <p>Your College Name</p>
          <p>2022 – 2026</p>

                </div>
                 <div className="about-card">
          <h4>Interests</h4>
          <p>Artificial Intelligence</p>
          <p>System Design</p>
          <p>Backend Architecture</p>
        </div>
         <div className="about-card">
          <h4>Currently Learning</h4>
          <p>Machine Learning</p>
          <p>Python for AI</p>
          <p>LLM & GenAI</p>
        </div>
        <div className="about-card">
          <h4>Career Goal</h4>
          <p>
            To build scalable AI-driven systems and work on
            real-world GenAI applications.
          </p>
        </div>
              </div>
              

        </section>
    )
}