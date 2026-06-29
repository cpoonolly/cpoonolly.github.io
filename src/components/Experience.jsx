const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Cubby',
    date: 'Apr 2025 – Present',
    desc: 'Building full-stack features for a modern self-storage platform.',
  },
  {
    role: 'Engineering Manager',
    company: 'Axios HQ',
    date: 'Jun 2023 – Apr 2025',
    desc: 'Led a team of 4 engineers building a Substack-like SaaS product for internal communications professionals. Mentored direct reports to senior and leadership roles. Implemented usage-based pricing and a streamlined checkout process using Stripe, Recurly, and HubSpot. Reduced infrastructure costs by over $10k/month by optimizing an analytics data pipeline using Kinesis, Athena, PySpark, and Clickhouse.',
  },
  {
    role: 'Senior Backend Engineer',
    company: 'Axios HQ',
    date: 'Jul 2021 – Jun 2023',
    desc: 'Built a Google Docs-like collaborative writing experience with real-time comments, version history, and live collaboration using CRDTs and libraries such as Yjs and Tiptap. Designed an AI writing recommendation engine using LangChain, OpenAI, pgvector embeddings, and in-house models.',
  },
  {
    role: 'Software Engineer',
    company: 'Cadre',
    date: 'Jan 2020 – Jul 2021',
    desc: 'Developed frontend and backend systems for collecting user info, running KYC checks, linking bank accounts, and managing funds using Django and Next.js. Built internal accounting tools for tracking investments, managing distributions, charging fees, and calling capital.',
  },
  {
    role: 'Technology Associate',
    company: 'Goldman Sachs',
    date: 'Jul 2019 – Jan 2020',
    desc: 'Followed the CTO of Honest Buildings back to Goldman Sachs to develop a bond quoting tool for sales teams to interact with an algorithmic trader, utilizing React and OpenFin.',
  },
  {
    role: 'Technical Lead',
    company: 'Honest Buildings',
    date: 'Feb 2015 – Oct 2018',
    desc: 'Led a squad of 4 engineers building a SaaS platform for real estate owners used by Brookfield, WeWork, SL Green, and others. Architected core infrastructure for high-impact features including permissions, localization, invoicing, capital planning, and vendor management.',
  },
  {
    role: 'Technology Analyst',
    company: 'Goldman Sachs',
    date: 'Jun 2013 – Feb 2015',
    desc: 'Supported firmwide calculations of exposure to counterparty default in response to the 2008 financial crisis. Built systems helping trading desks quantify and hedge counterparty risk.',
  },
  {
    role: 'Volunteer',
    company: 'The Green Lion · UBECI',
    date: '2018 – 2019',
    desc: 'Taught English, worked at a soup kitchen, and delivered food to hospitals in Ho Chi Minh City, Vietnam (The Green Lion). Built a website and ran fundraising campaigns for a Quito-based NGO serving children in street markets (UBECI).',
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
