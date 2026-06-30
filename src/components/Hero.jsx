export default function Hero({ onOpenChat, showChatButton }) {
  return (
    <header className="relative w-full min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 opacity-90" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Cherry Poonolly</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Engineering Manager / Full Stack Engineer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {showChatButton && (
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium bg-[#e85d5d] text-white hover:bg-[#ff6b6b] transition-all hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Ask Me Anything
            </button>
          )}
          {/* When the chat button is shown it's the primary CTA, so this becomes
              a secondary ghost button; otherwise it's the lone primary CTA. */}
          <a
            href="#projects"
            className={
              showChatButton
                ? 'inline-block px-8 py-3 rounded-full font-medium border border-slate-600 text-gray-300 hover:border-slate-400 hover:text-white transition-all hover:scale-105'
                : 'inline-block px-8 py-3 rounded-full font-medium bg-[#e85d5d] text-white hover:bg-[#ff6b6b] transition-all hover:scale-105'
            }
          >
            See My Work
          </a>
        </div>
      </div>
    </header>
  )
}
