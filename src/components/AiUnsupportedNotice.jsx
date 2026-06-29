import { useState } from 'react'

// Shown to visitors whose browser can't run the on-device AI chat, so they
// know the feature exists (and how to access it) even though the chat buttons
// are hidden for them.
export default function AiUnsupportedNotice() {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xs rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl px-4 py-3 flex items-start gap-3">
      <span className="text-lg leading-none mt-0.5" aria-hidden="true">💬</span>
      <div className="text-sm text-gray-300 leading-relaxed">
        Sorry, Chrome's built-in AI isn't available in your browser. This site
        has an on-device AI chat — try Chrome 127+ with the AI features flag
        enabled to use it.
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="shrink-0 text-gray-500 hover:text-gray-300 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
