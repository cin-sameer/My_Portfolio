import "./skillss.css";
import SkillCard from "./SkillCard";
import { skills } from "../data/skills";

export default function SkillsSection()
{
    return(
        <section className="skills-section" id="skills">
            <div className="skills-header">
                <h2 className="skills-heading">
                    My <span>Skills</span>
                </h2>
                <p className="skills-subheading">
                    Technologies and tools I work with
                </p>

            </div>
            <div className="skills-grid">
                {skills.map((skill)=>(
                    <SkillCard key={skill.id} skill={skill}/>

                ))}
            </div>
        </section>
    );
}