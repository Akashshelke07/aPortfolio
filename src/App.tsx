import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Experience } from "./components/Experience"
import { Certificates } from "./components/Certificates"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Toaster } from "./components/ui/toaster"
import { GlobalAnimations } from "./components/GlobalAnimations"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-purple-500/30 selection:text-purple-100 font-sans relative">
      <GlobalAnimations />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
