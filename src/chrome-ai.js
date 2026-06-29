// Helpers for detecting and accessing Chrome's Built-in AI (Gemini Nano).

// Returns the LanguageModel factory if the API surface exists, else null.
// (Newer Chrome exposes window.LanguageModel; older builds used window.ai.)
export function getLanguageModelFactory() {
  if (typeof window === 'undefined') return null
  return window.LanguageModel ?? window.ai?.languageModel ?? null
}

// Resolves to true if the on-device model is usable (now or after a download),
// false if the browser/model can't support it at all.
// Availability values seen across Chrome versions:
//   new API: 'available' | 'downloadable' | 'downloading' | 'unavailable'
//   old API: { available: 'readily' | 'after-download' | 'no' }
export async function isChromeAiSupported() {
  const factory = getLanguageModelFactory()
  if (!factory) return false

  try {
    const result = (await factory.availability?.()) ?? (await factory.capabilities?.())
    const status = typeof result === 'string' ? result : result?.available
    // Anything that isn't an explicit "can't do it" means we can offer the chat.
    return status !== 'unavailable' && status !== 'no'
  } catch {
    return false
  }
}
