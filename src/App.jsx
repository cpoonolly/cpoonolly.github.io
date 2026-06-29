import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Nav />
      <Hero />
      <main className="max-w-6xl mx-auto px-6">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
