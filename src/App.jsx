import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Chatbot from './components/Chatbot.jsx'
import AiUnsupportedNotice from './components/AiUnsupportedNotice.jsx'
import { isChromeAiSupported } from './chrome-ai.js'

export default function App() {
  const [chatOpen, setChatOpen] = useState(false)
  // null = still checking, true = show chat, false = browser can't run it
  const [aiSupported, setAiSupported] = useState(null)

  useEffect(() => {
    let cancelled = false
    isChromeAiSupported().then((ok) => {
      if (!cancelled) setAiSupported(ok)
    })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Nav />
      <Hero onOpenChat={() => setChatOpen(true)} showChatButton={aiSupported === true} />
      <main className="max-w-6xl mx-auto px-6">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      {aiSupported === true && <Chatbot open={chatOpen} onOpenChange={setChatOpen} />}
      {aiSupported === false && <AiUnsupportedNotice />}
    </div>
  )
}
