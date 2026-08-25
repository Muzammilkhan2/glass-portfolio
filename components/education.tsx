export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 bg-white px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-[11px] tracking-[0.15em] text-slate-500 uppercase">
          Education
        </p>
        <h2 className="mb-12 text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
          Academic background
        </h2>

        <div className="space-y-6">
          <article className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 md:p-7">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-medium text-slate-900">
                  BS Computer Science
                </h3>
                <p className="text-sm text-slate-600">
                  Dawood University of Engineering &amp; Technology
                </p>
              </div>
              <p className="text-sm font-medium text-slate-500">2022 – 2026</p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 md:p-7">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-medium text-slate-900">
                  Pre-Engineering, A Grade
                </h3>
                <p className="text-sm text-slate-600">
                  Govt. Dehli College, Metropolitan Academy Campus 1, Karachi
                </p>
              </div>
              <p className="text-sm font-medium text-slate-500">2020 – 2022</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
