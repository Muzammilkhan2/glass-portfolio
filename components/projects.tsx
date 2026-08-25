const projects = [
  {
    title: "Karachi Flood Alert",
    description:
      "Live street-level waterlogging map for Karachi. Citizens report and view flooding in real time with severity markers, photo uploads, JWT auth, clustering, and 30-second auto-refresh — reports expire after 10 hours.",
    tech: ["Next.js", "Node.js", "MongoDB", "Leaflet", "JWT"],
    live: "https://karachi-water-logging-live-map.vercel.app/",
    github: "https://github.com/Muzammilkhan2/karachi_water_logging_live_map",
  },
  {
    title: "CropIntel",
    description:
      "AI-powered wheat disease monitoring. Detects Yellow Rust, Brown Rust, and Aphid Infestation from ground and drone imagery, with a Flutter front end and Python/FastAPI back end serving real-time predictions.",
    tech: ["Flutter", "Python", "TensorFlow", "PyTorch", "FastAPI", "OpenCV"],
    live: "",
    github: "https://github.com/Muzammilkhan2/Cropintel-FYP",
  },
  {
    title: "FoodApp",
    description:
      "Multi-screen food-delivery app UI with menu browsing, product details, cart, checkout, search, and profile — 8 screens built with core Flutter widgets and GetX for state management and routing. Deployed to Flutter Web for instant demoing.",
    tech: ["Flutter", "Dart", "GetX"],
    live: "https://food-app-pi-rose.vercel.app",
    github: "https://github.com/Muzammilkhan2/FoodApp",
  },
  {
    title: "Stock Price Prediction & Trading Dashboard",
    description:
      "Interactive Streamlit dashboard built around a trained machine learning model to track and visualize stock price trends. Combines Pandas-driven data processing with prediction outputs to surface actionable trend insights.",
    tech: ["Python", "Streamlit", "Pandas", "Machine Learning"],
    live: "",
    github:
      "https://github.com/Muzammilkhan2/Price-Prediction-Model-trading-dashboard-",
  },
  {
    title: "Liquid Glass Portfolio",
    description:
      "Personal portfolio with a pixel-aligned liquid-glass anatomical reveal driven by cursor and touch. Pure CSS mask + smooth RAF animation — no WebGL.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://glass-portfolio-phi.vercel.app",
    github: "https://github.com/Muzammilkhan2/glass-portfolio",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative z-10 border-t border-slate-200/60 bg-[#f0f7fb] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-[11px] tracking-[0.15em] text-slate-500 uppercase">
          Selected Work
        </p>
        <h2 className="mb-12 text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-medium text-slate-900">
                {p.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
                {p.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-slate-800"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/Muzammilkhan2?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
