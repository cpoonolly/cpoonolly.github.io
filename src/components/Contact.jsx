import { track } from '../analytics.js'

export default function Contact() {
  return (
    <footer id="contact" className="py-24 border-t border-slate-800 text-center">
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="text-gray-400 mb-8">
        Open to new opportunities and interesting projects.
      </p>
      <a
        href="https://www.linkedin.com/in/ryan-poonolly-23060824/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('say_hello_click')}
        className="inline-block px-8 py-3 rounded-full font-medium bg-[#e85d5d] text-white hover:bg-[#ff6b6b] transition-all hover:scale-105"
      >
        Say Hello
      </a>
    </footer>
  )
}
