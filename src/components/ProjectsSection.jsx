import "./projects.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import TextType from "./TextType";
import { useState } from "react";

export default function ProjectsSection() {
    const [showAll, setShowAll] = useState(false);

    const featuredProjects = projects
        .filter((p) => p.featured)
        .sort((a, b) => a.priority - b.priority);

    const displayedProjects = showAll ? featuredProjects : featuredProjects.slice(0, 4);

    return (
        <section className="projects-section" id="projects">
            <div className="projects-header">
                <div>
                    <h2 className="projects-heading">
                        Featured <span>Projects</span>
                    </h2>
                    <p className="projects-subheading">
                        <TextType
                            text={["Here are some of the best projects i build", "Click the arrow below to see more projects "]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </p>

                </div>
            </div>
            <div className="projects-grid">
                {displayedProjects.map((project) =>
                (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <button 
                    onClick={() => setShowAll(!showAll)} 
                    style={{ background: 'transparent', border: 'none', color: '#22c55e', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}
                >
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{showAll ? "Show Less" : "Show More"}</span>
                    <svg 
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
            </div>

        </section>
    )
}