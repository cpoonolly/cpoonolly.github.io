const projects = [
  {
    name: 'Pigeon RTC',
    desc: 'A whimsical pigeon-themed video chat app built as an April Fools joke.',
    tech: 'WebRTC · React · Material-UI',
    links: [
      { label: 'Website', href: 'https://cpoonolly.github.io/pigeon-rtc' },
      { label: 'GitHub', href: 'https://github.com/cpoonolly/pigeon-rtc' },
    ],
  },
  {
    name: 'Pokerchip Counter',
    desc: 'An Android app for tracking chip counts in a poker game.',
    tech: 'React Native',
    links: [
      { label: 'GitHub', href: 'https://github.com/cpoonolly/pokerchipcounter' },
    ],
  },
  {
    name: 'NYC DOB ETL',
    desc: 'An ETL pipeline that scrapes building permits from the NYC Department of Buildings website.',
    tech: 'AWS Lambda · Java · Jsoup · Redshift',
    links: [
      { label: 'GitHub', href: 'https://github.com/cpoonolly/nyc_dob_etl' },
    ],
  },
  {
    name: 'Task Graph',
    desc: 'A simple app for creating and organizing tasks and subtasks as a graph.',
    tech: 'Angular 2 · Angular Material',
    links: [
      { label: 'Website', href: 'https://cpoonolly.github.io/task-graph' },
      { label: 'GitHub', href: 'https://github.com/cpoonolly/task-graph' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-gray-800">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-6 rounded-xl border border-gray-800 bg-gray-900/40 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-400 mt-2">{project.desc}</p>
            <p className="text-emerald-400 text-sm mt-4">{project.tech}</p>
            <div className="flex gap-4 mt-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
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
          className="text-gray-400 hover:text-emerald-400 transition-colors"
        >
          See more on GitHub →
        </a>
      </div>
    </section>
  )
}
