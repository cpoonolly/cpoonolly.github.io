export default function Hero() {
  return (
    <header className="relative w-full min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 opacity-90" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Cherry Poonolly</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Engineering Manager / Full Stack Engineer
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 rounded-full font-medium bg-[#e85d5d] text-white hover:bg-[#ff6b6b] transition-all hover:scale-105"
        >
          See My Work
        </a>
      </div>
    </header>
  )
}
