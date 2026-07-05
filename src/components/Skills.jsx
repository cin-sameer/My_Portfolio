import "./Skills.css";


const skills = [
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Github", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];
export default function skillmarq()
{
    return (
        <section className="skills" id="skills">
            
            <div className="marquee">
                <div className="track">
                    {[...skills,...skills].map((skill,i)=> (
                        <div className="skill" key={i}>
                            <img src={skill.src} alt={skill.name}/>
                            
                             
                        </div>
                       
))}
                </div>
            </div>
        </section>
    )
}