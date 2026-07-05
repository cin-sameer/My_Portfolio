import Skills from "./components/Skills"
import Hero from './components/Hero'
import './App.css'
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import Footer from "./components/Footer"
import About from "./components/About-Section.jsx"
import ImplementationSection from "./components/ImplementationSction"
import BottomNav from "./components/BottomNav"

function App() {


  return (
    <>
      <div className="container">

        <Hero />
        <Skills />
        {/* <SkillsSection/> */}
        <About />

        <ProjectsSection />
        {/* <ImplementationSection /> */}
        <Footer />
        <BottomNav />
      </div>

    </>
  )
}

export default App
