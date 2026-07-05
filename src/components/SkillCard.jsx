import "./skillss.css"

export default function SkillCard({skill})
{
    return(
        <div className="skill-card">
            <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />

            </div>
            <p className="skill-name">{skill.name}</p>
        </div>
    )
}