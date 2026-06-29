import { useState, useRef, useEffect } from 'react'
import { SYSTEM_PROMPT } from '../chatbot-context.js'

const AI_UNAVAILABLE = typeof window !== 'undefined' && !window.LanguageModel && !window.ai

function ChatMessage({ msg }) {
  const isUser = msg.role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? 'bg-[#e85d5d] text-white rounded-br-sm'
            : 'bg-slate-700/80 text-gray-200 rounded-bl-sm'
        }`}
      >
        {msg.content}
      </div>
    </div>
  )
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hey! I'm Cherry's personal assistant. Ask me anything about them — hobbies, travel stories, fun projects, whatever you're curious about!" },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [unavailable, setUnavailable] = useState(false)
  const sessionRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  async function getSession() {
    if (sessionRef.current) return sessionRef.current

    // Chrome Built-in AI: try new API first, fall back to old
    const factory = window.LanguageModel ?? window.ai?.languageModel
    if (!factory) return null

    try {
      const available = await factory.availability?.() ?? await factory.capabilities?.()
      const status = typeof available === 'string' ? available : available?.available
      if (status === 'no') return null

      sessionRef.current = await factory.create({ systemPrompt: SYSTEM_PROMPT })
      return sessionRef.current
    } catch {
      return null
    }
  }

  async function sendMessage(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: text }])
    setLoading(true)

    try {
      const session = await getSession()
      if (!session) {
        setUnavailable(true)
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: "Sorry, Chrome's built-in AI isn't available in your browser. Try Chrome 127+ with the AI features flag enabled.",
          },
        ])
        setLoading(false)
        return
      }

      const reply = await session.prompt(text)
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Hmm, something went wrong. Try asking again!" },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating bubble */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with Cherry's assistant"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#e85d5d] hover:bg-[#ff6b6b] text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-slate-800 border-b border-slate-700 flex items-center gap-3">
            <img
              src="https://avatars.githubusercontent.com/u/11047577?v=4"
              alt="Cherry"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold text-white">Ask About Cherry</p>
              <p className="text-xs text-gray-400">Powered by Chrome AI (on-device)</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 max-h-80">
            {messages.map((msg, i) => (
              <ChatMessage key={i} msg={msg} />
            ))}
            {loading && (
              <div className="flex justify-start mb-3">
                <div className="bg-slate-700/80 text-gray-400 px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm">
                  <span className="animate-pulse">thinking…</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="px-4 py-3 border-t border-slate-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
              disabled={loading || unavailable}
              className="flex-1 bg-slate-800 text-white text-sm rounded-full px-4 py-2 outline-none border border-slate-700 focus:border-[#e85d5d] placeholder-gray-500 disabled:opacity-50 transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim() || unavailable}
              className="w-9 h-9 rounded-full bg-[#e85d5d] hover:bg-[#ff6b6b] disabled:opacity-40 flex items-center justify-center transition-all shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
