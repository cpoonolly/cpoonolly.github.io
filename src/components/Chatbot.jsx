import { useState, useRef, useEffect } from 'react'
import { SYSTEM_PROMPT } from '../chatbot-context.js'
import { getLanguageModelFactory } from '../chrome-ai.js'

function ChatMessage({ msg }) {
  const isUser = msg.role === 'user'
  if (!isUser && !msg.content) return null
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

export default function Chatbot({ open, onOpenChange }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hey! I'm an AI that knows a lot about Cherry. Ask me anything about him — his background, travel stories, projects, whatever you're curious about!" },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const sessionRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  async function getSession() {
    if (sessionRef.current) return sessionRef.current

    // The chatbot only renders when support has already been confirmed, so
    // the factory should exist here. We still guard in case session creation
    // fails (e.g. the model needs to download and that fails).
    const factory = getLanguageModelFactory()
    if (!factory) return null

    try {
      sessionRef.current = await factory.create({
        initialPrompts: [{ role: 'system', content: SYSTEM_PROMPT }],
        expectedInputs: [{ type: 'text', languages: ['en'] }],
        expectedOutputs: [{ type: 'text', languages: ['en'] }],
      })
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
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: "Hmm, I couldn't start up just now — the on-device model may still be downloading. Give it a moment and try again!",
          },
        ])
        setLoading(false)
        return
      }

      // Add an empty assistant message we'll fill in as chunks stream in
      let replyIndex = -1
      setMessages((prev) => {
        replyIndex = prev.length
        return [...prev, { role: 'assistant', content: '' }]
      })

      const stream = session.promptStreaming(text)
      let acc = ''
      let first = true
      for await (const chunk of stream) {
        // Newer Chrome yields deltas; older builds yield the cumulative text.
        // Detect by checking whether the chunk extends what we've seen so far.
        if (chunk.startsWith(acc)) acc = chunk
        else acc += chunk

        if (first) {
          first = false
          setLoading(false)
        }
        setMessages((prev) => {
          const next = [...prev]
          next[replyIndex] = { role: 'assistant', content: acc }
          return next
        })
      }
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
        onClick={() => onOpenChange(!open)}
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
              disabled={loading}
              className="flex-1 bg-slate-800 text-white text-sm rounded-full px-4 py-2 outline-none border border-slate-700 focus:border-[#e85d5d] placeholder-gray-500 disabled:opacity-50 transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
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
