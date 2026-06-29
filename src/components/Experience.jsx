const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Cubby',
    date: 'Apr 2025 – Present',
    bullets: [
      'Building full-stack features for a modern self-storage platform.',
    ],
  },
  {
    role: 'Engineering Manager',
    company: 'Axios HQ',
    date: 'Jun 2023 – Apr 2025',
    bullets: [
      'Led a team of 4 engineers in developing a Substack-like SaaS product for internal communications professionals',
      'Mentored direct reports to win promotions into senior and leadership roles',
      'Achieved top results in employee satisfaction surveys by fostering a culture of psychological safety, collaboration, and camaraderie',
      'Implemented usage-based pricing & a streamlined checkout process using integrations with Stripe, Recurly, & Hubspot',
      'Reduced infrastructure costs by over $10k/month by optimizing an analytics data pipeline for customers to efficiently track and aggregate reader engagement data using Kinesis, Athena, PySpark, & Clickhouse',
      'Developed multi-channel content sharing by integrating with Mailgun, Slack, MS Teams, and SharePoint',
      'Set up SSO logins for reader facing web pages using NextAuth',
    ],
  },
  {
    role: 'Senior Backend Engineer',
    company: 'Axios HQ',
    date: 'Jul 2021 – Jun 2023',
    bullets: [
      'Built out a Google Docs-like writing experience complete with comments, version history, and real time collaboration using CRDTs and libraries such as Yjs & Tiptap',
      'Designed an AI writing recommendation engine utilizing LangChain, OpenAI, pgvector embeddings, and in-house models',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Cadre',
    date: 'Jan 2020 – Jul 2021',
    bullets: [
      'Developed frontend & backend systems for collecting user info, running KYC checks, linking bank accounts, and managing funds using Django & NextJS',
      'Built internal accounting tools for tracking investments, managing distributions, charging fees, and calling capital',
    ],
  },
  {
    role: 'Technology Associate',
    company: 'Goldman Sachs',
    date: 'Jul 2019 – Jan 2020',
    bullets: [
      'Developed a bond quoting tool for sales teams to interact with an algorithmic trader, utilizing modern technologies such as React & OpenFin',
    ],
  },
  {
    role: 'Technical Lead',
    company: 'Honest Buildings',
    date: 'Feb 2015 – Oct 2018',
    bullets: [
      'Led a squad of 4 in developing a SaaS platform for real estate owners',
      'Architected core infrastructure for high impact features including permissions, localization, invoicing, capital planning, and vendor management',
    ],
  },
  {
    role: 'Technology Analyst',
    company: 'Goldman Sachs',
    date: 'Jun 2013 – Feb 2015',
    bullets: [
      'Supported calculations of firmwide exposure to counterparty default in response to the 2008 financial crisis',
    ],
  },
  {
    role: 'Volunteer',
    company: 'The Green Lion · UBECI',
    date: '2018 – 2019',
    bullets: [
      'Taught English, worked at a soup kitchen, and delivered food to hospitals in Ho Chi Minh City, Vietnam (The Green Lion)',
      'Built a website and ran Christmas fundraising campaigns for a Quito-based NGO serving children in street markets (UBECI)',
    ],
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
            <ul className="mt-3 space-y-1.5 list-disc list-outside ml-4">
              {item.bullets.map((b, i) => (
                <li key={i} className="text-gray-300">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
