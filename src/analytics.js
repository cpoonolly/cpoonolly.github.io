// Lightweight analytics layer.
//
// Pageviews are handled automatically by the Cloudflare Web Analytics beacon
// loaded in index.html (cookieless, no consent banner needed).
//
// Cloudflare Web Analytics' free beacon does NOT expose a public custom-event
// API, so `track()` below is a thin abstraction for interaction events (chat
// opened, "Say Hello" clicked, project links). Today it logs in dev and is a
// no-op in production. When you add an events backend (Plausible, Umami, GA,
// etc.), wire it up in the one place marked below — every call site already
// goes through here, so nothing else needs to change.

const isDev = import.meta.env.DEV

export function track(event, props = {}) {
  if (isDev) {
    // eslint-disable-next-line no-console
    console.log('[analytics]', event, props)
    return
  }

  // --- Plug a real events backend in here when ready ---
  // Examples:
  //   window.plausible?.(event, { props })
  //   window.umami?.track(event, props)
  //   window.gtag?.('event', event, props)
}
