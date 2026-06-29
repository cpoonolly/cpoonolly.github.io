export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/11047577?v=4"
            alt="Cherry Poonolly"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="font-bold text-lg font-serif">Cherry Poonolly</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  )
}
