const projects = [
  {
    name: 'Pigeon RTC',
    desc: 'A whimsical pigeon-themed video chat app built as an April Fools joke. Setup video chats using carrier pigeons!',
    tech: 'JavaScript · WebRTC · React',
    links: [
      { label: 'Website', href: 'https://www.cpoonolly.com/pigeon-rtc' },
      { label: 'GitHub', href: 'https://github.com/cpoonolly/pigeon-rtc' },
    ],
  },
  {
    name: 'Blockgame',
    desc: 'A game engine built from scratch using Golang, WebAssembly, and WebGL.',
    tech: 'Go · WebAssembly · WebGL',
    links: [
      { label: 'GitHub', href: 'https://github.com/cpoonolly/blockgame' },
    ],
  },
  {
    name: 'Mobx Mine Sweeper',
    desc: 'A simple React minesweeper app for exploring MobX state management.',
    tech: 'JavaScript · React · MobX',
    links: [
      { label: 'GitHub', href: 'https://github.com/cpoonolly/mobx-mine-sweeper' },
    ],
  },
  {
    name: 'NYC DOB ETL',
    desc: 'An ETL pipeline for scraping permit data from the NYC Department of Buildings website.',
    tech: 'Java · AWS Lambda · Jsoup · Redshift',
    links: [
      { label: 'GitHub', href: 'https://github.com/cpoonolly/nyc_dob_etl' },
    ],
  },
  {
    name: 'BitTorrent Client',
    desc: 'A simple command-line BitTorrent client written in college.',
    tech: 'Java',
    links: [
      { label: 'GitHub', href: 'https://github.com/cpoonolly/BittorrentClient' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-slate-800">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-400 mt-2">{project.desc}</p>
            <p className="text-[#ff6b6b] text-sm mt-4">{project.tech}</p>
            <div className="flex gap-4 mt-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-[#ff6b6b] transition-colors"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="https://github.com/cpoonolly"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#ff6b6b] transition-colors"
        >
          See more on GitHub →
        </a>
      </div>
    </section>
  )
}
