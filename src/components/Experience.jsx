const experience = [
  {
    role: 'Senior Software Engineer & Technical Lead',
    company: 'Honest Buildings',
    date: '2015 – 2018',
    desc: 'Led a squad of 6 across an asset management platform used by Brookfield, WeWork, SL Green, and others. Delivered core product features including the primary dashboard, permissions system, invoicing, and vendor management. Grew the eng team from ~15 to 100+ people.',
  },
  {
    role: 'Technical Analyst',
    company: 'Goldman Sachs',
    date: '2013 – 2015',
    desc: 'Supported firmwide counterparty risk calculations — quantifying potential exposure if a counterparty defaulted. Built systems to help trading desks understand and hedge their counterparty risk positions.',
  },
  {
    role: 'Summer Analyst (Intern)',
    company: 'Goldman Sachs',
    date: 'Summer 2012',
    desc: 'Built a platform for digitizing legal agreement terms using GS proprietary technology SecDb and the Slang programming language. Received a return offer at the end of the summer.',
  },
  {
    role: 'Applications Intern',
    company: 'Guardian Life',
    date: 'Summer 2011',
    desc: 'Built features for a web app used by insurance agents to manage policies. Implemented alert, reminder, and comment components using Spring, IBM DB2, and jQuery.',
  },
  {
    role: 'Volunteer',
    company: 'The Green Lion',
    date: 'Feb – Mar 2019',
    desc: 'Taught English at a local university, worked at a soup kitchen, and delivered food to a hospital in Ho Chi Minh, Vietnam.',
  },
  {
    role: 'Volunteer',
    company: 'UBECI',
    date: 'Nov – Dec 2018',
    desc: 'Built a website and ran Christmas fundraising campaigns for a Quito-based NGO that provides free educational, medical, and dental services to children living in street markets.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-gray-800">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>
      <div className="space-y-6">
        {experience.map((item) => (
          <div key={`${item.company}-${item.role}`} className="p-6 rounded-xl border border-gray-800 bg-gray-900/40">
            <h3 className="text-xl font-semibold">{item.role}</h3>
            <p className="text-emerald-400 mt-1">{item.company}</p>
            <p className="text-gray-500 text-sm mt-1">{item.date}</p>
            <p className="text-gray-300 mt-3">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
