export default function About() {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold mb-6">About</h2>
      <p className="text-gray-300 max-w-3xl leading-relaxed text-lg">
        Full stack engineer with a passion for working on high-impact projects — both as an IC and a lead.
        I&apos;ve spent the last decade building across fintech, real estate tech, media, and storage startups,
        wearing hats from individual contributor to engineering manager.
        <br /><br />
        Currently a Senior Software Engineer at{' '}
        <a href="https://cubbystorage.com" target="_blank" rel="noopener noreferrer" className="text-[#ff6b6b] hover:text-[#ff8a80] transition-colors">Cubby</a>.
        Previously EM &amp; Senior Backend Engineer at Axios HQ, Software Engineer at Cadre,
        and Technical Lead at Honest Buildings. Earlier in my career I was a Technology Associate at Goldman Sachs.
        <br /><br />
        Based in Seattle, WA.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {['Python', 'TypeScript', 'React', 'Next.js', 'Django REST', 'FastAPI', 'Node', 'Java',
          'Postgres', 'Redis', 'RabbitMQ', 'Kubernetes', 'Docker', 'AWS', 'LangChain'].map((skill) => (
          <span key={skill} className="px-3 py-1 text-sm rounded-full border border-slate-700 text-gray-400">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
