interface Project {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Karachi Flood Alert",
    description:
      "Live street-level waterlogging map for Karachi. Citizens report flooded areas in real time with severity, photos, and location — shown on an interactive Leaflet map with auto-refresh and clustering.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Leaflet", "Node.js"],
    live: "https://karachi-water-logging-live-map.vercel.app/",
    github: "https://github.com/Muzammilkhan2/karachi_water_logging_live_map",
  },
  {
    title: "CropIntel",
    description:
      "AI-powered wheat disease monitoring system. Detects yellow rust, brown rust, and aphid from ground + drone imagery, with satellite field segmentation and a multilingual advisory chatbot.",
    tech: ["Flutter", "Python", "TensorFlow", "FastAPI", "OpenCV"],
    live: "",
    github: "https://github.com/Muzammilkhan2/Cropintel-FYP",
  },
  {
    title: "Liquid Glass Portfolio",
    description:
      "Personal portfolio with a pixel-aligned liquid-glass anatomical reveal driven by cursor and touch. Pure CSS mask + smooth RAF animation, no WebGL.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://glass-portfolio-phi.vercel.app",
    github: "https://github.com/Muzammilkhan2/glass-portfolio",
  },
  {
    title: "Stock Market Simulator",
    description: "Full-featured stock market simulator with algorithmic fluctuations",
    tech: ["TypeScript", "Node.js"],
    github: "https://github.com/Muzammilkhan2/your-repo",
    live: "",
  },
];

export default function Projects() {
  return (
    <>
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.32em] text-sky-700">
          Selected Work
        </p>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects
        </h2>
        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          A mix of live products, open-source experiments, and AI tools — each
          built to solve a real problem and ship in public.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-slate-900">
              {project.title}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 group-hover:text-slate-700">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-sky-700"
                >
                  Live Demo
                </a>
              ) : (
                <span className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-500">
                  In development
                </span>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
