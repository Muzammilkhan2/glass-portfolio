export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 border-t border-slate-200/60 bg-[#f0f7fb] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-[11px] tracking-[0.15em] text-slate-500 uppercase">
          Experience
        </p>
        <h2 className="mb-12 text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
          Where I&apos;ve worked
        </h2>

        <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-lg font-medium text-slate-900">
                IT Intern — Data Analysis
              </h3>
              <p className="text-sm text-slate-600">
                Atlas Engineering (Private) Limited · Landhi Industrial Area,
                Karachi
              </p>
            </div>
            <p className="text-sm font-medium text-slate-500 whitespace-nowrap">
              Feb 2026 – Mar 2026
            </p>
          </div>
          <ul className="space-y-2 text-[15px] leading-relaxed text-slate-600">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
              Analyzed operational datasets to uncover trends and support
              data-driven decisions.
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
              Built interactive Power BI dashboards turning raw data into clear
              visual insights.
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
              Cleaned and structured datasets to improve reporting accuracy.
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
              Collaborated with the IT team to translate business needs into
              functioning dashboards.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
