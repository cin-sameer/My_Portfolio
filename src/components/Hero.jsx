import "./hero.css"
import TextType from "./TextType"
export default function Hero() {
    return (

        <section className="hero">
            <div className="hero-avatar">
                <img src="/avatar.png" alt="hero-avatar-img" className="hero-avatar-img" />
            </div>
            <div className="hero-label">
                <TextType
                    text={["Web-Developer", "AI-ML", "Happy coding!"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                />
            </div>

            <h1 className="hero-title">Hey! I Am <span>Sameer Rathore</span></h1>
            <h2 className="hero-subtitle">Building Cool Stuff,One Block at a Time</h2>
            <p className="hero-para"> Crafting digital experiences with modern technologies. Passionate about
                clean code, innovative solutions, and continuous learning.</p>
            <div className="hero-btns">
                <button className="btns primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button>
                <button className="btns ghost" onClick={() => window.open("/Sameer_Rathore_Resume.pdf")}>Resume</button>
                <button className="btns ghost" onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>Let's Connect</button>
            </div>
        </section>



    )
}