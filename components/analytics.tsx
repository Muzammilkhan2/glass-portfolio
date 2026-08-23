const dashboards = [
  {
    title: "DataCo Supply Chain",
    src: "https://app.powerbi.com/view?r=eyJrIjoiOTgxOWNhY2YtNTNhOC00MDdjLWJmMjItNzg2YmViM2ZhYzVlIiwidCI6IjI0MWNlN2VlLTVjYmUtNDczNi1hYWM0LWZkOWZmM2NjMWRkMSIsImMiOjl9",
  },
  {
    title: "Sales & Performance",
    src: "https://app.powerbi.com/view?r=eyJrIjoiY2FkNjA0NjgtODFmOS00YjkxLWI5YTUtMjA2YWRmOThiOGIxIiwidCI6IjI0MWNlN2VlLTVjYmUtNDczNi1hYWM0LWZkOWZmM2NjMWRkMSIsImMiOjl9",
  },
  {
    title: "Global Superstore 2016",
    src: "https://app.powerbi.com/view?r=eyJrIjoiNjc2MTdmNDEtYjRiOC00NTFiLTk1ZjAtMGQyYWJkNzhhMzk2IiwidCI6IjI0MWNlN2VlLTVjYmUtNDczNi1hYWM0LWZkOWZmM2NjMWRkMSIsImMiOjl9",
  },
  {
    title: "Pizza Sales Analysis",
    src: "https://app.powerbi.com/view?r=eyJrIjoiOTZiNjQyMmItZGNlYS00Y2ZhLWJhYTQtYmY2ZDFiYzcyODE1IiwidCI6IjI0MWNlN2VlLTVjYmUtNDczNi1hYWM0LWZkOWZmM2NjMWRkMSIsImMiOjl9",
  },
  {
    title: "IMDb Movies Analysis",
    src: "https://app.powerbi.com/view?r=eyJrIjoiMzhiY2Y1Y2QtM2Y4Yy00MTA1LTg4NGEtZDgyN2ZjOWVhYjI3IiwidCI6IjI0MWNlN2VlLTVjYmUtNDczNi1hYWM0LWZkOWZmM2NjMWRkMSIsImMiOjl9&pageName=1a59cff0d54ce55d7ac4",
  },
];

export default function Analytics() {
  return (
    <>
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.32em] text-sky-700">
          Data Analysis
        </p>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Power BI Dashboards
        </h2>
        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          Interactive reports built in Power BI — data modeling, DAX, and
          visual storytelling across supply chain, retail, and entertainment
          datasets.
        </p>
      </div>

      <div className="mt-12 space-y-16">
        {dashboards.map((dashboard) => (
          <div key={dashboard.title}>
            <h3 className="mb-4 text-lg font-medium text-slate-900">
              {dashboard.title}
            </h3>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
              <iframe
                title={dashboard.title}
                src={dashboard.src}
                className="h-[480px] w-full border-0 md:h-[560px]"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
