export default function About() {
  const skills = [
    "TypeScript", "React", "Next.js", "Python", "Flutter", "Dart",
    "Node.js", "Express.js", "Java", "C++", "HTML5",
    "MongoDB", "MySQL", "Firebase", "SQLite",
    "GetX", "Leaflet", "TensorFlow", "PyTorch", "OpenCV",
    "FastAPI", "Streamlit", "Power BI",
    "Git/GitHub", "Vercel", "JWT Authentication", "Figma", "Canva",
  ];

  return (
    <section
      id="about"
      className="relative z-10 bg-white px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-[11px] tracking-[0.15em] text-slate-500 uppercase">
          About
        </p>
        <h2 className="mb-8 text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
          Who I am
        </h2>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
            <p>
              I&apos;m{" "}
              <span className="font-medium text-slate-900">
                Muzammil Ullah Khan
              </span>
              , a final-year Computer Science student at Dawood University of
              Engineering &amp; Technology who ships real, deployed products.
            </p>
            <p>
              I&apos;ve built and live-deployed a MERN civic-tech flood map for
              Karachi, a multi-screen Flutter food-delivery app, an AI wheat
              disease detection system, and a Python stock-prediction dashboard.
              During an IT internship at Atlas Engineering I delivered Power BI
              dashboards from operational data.
            </p>
            <p>
              I care about practical problem-solving, clean interfaces, and
              turning messy data into something people can actually use.
              Currently looking for an internship or junior developer role.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-slate-900">
              What I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
