const items = [
  {
    title: "Google AI Fundamentals — Coursera (2026)",
    detail:
      "Generative AI, prompt engineering, and responsible AI for real-world applications.",
  },
  {
    title: "Certificate of Appreciation — Vice Chancellor, DUET (2025)",
    detail:
      "Contributed to Sindh's fastest human-flag formation by a higher education institute.",
  },
  {
    title: "LFW111: Introduction to Node.js — The Linux Foundation (2025)",
    detail: "Foundational server-side JavaScript development.",
  },
  {
    title: "Microsoft Learn badges",
    detail:
      "Explore Generative AI (2024) · Get Started Building with Power BI (2025) · Discover Data Analysis (2024).",
  },
  {
    title: "Mobile App UI/UX Design — Moqups",
    detail: "UI/UX design and prototyping for mobile interfaces.",
  },
  {
    title: "The Art of Public Speaking — DEN (2023)",
    detail: "Digital Empowerment Network professional development session.",
  },
  {
    title: "LinkedIn Profile Masterclass — IEEE CS, Dawood Student Branch (2025)",
    detail: "Professional branding and profile optimization.",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative z-10 bg-white px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-[11px] tracking-[0.15em] text-slate-500 uppercase">
          Growth
        </p>
        <h2 className="mb-12 text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
          Certifications &amp; Achievements
        </h2>

        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/50 px-5 py-4 md:px-6"
            >
              <p className="text-sm font-medium text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
