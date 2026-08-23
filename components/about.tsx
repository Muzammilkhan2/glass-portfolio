const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Flutter",
  "Node.js",
  "MySQL",
  "Power BI",
  "TensorFlow",
  "FastAPI",
];

export default function About() {
  return (
    <>
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.32em] text-sky-700">
          About
        </p>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Who I am
        </h2>
        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          I&apos;m Muzammil Ullah Khan, a final-year Computer Science student at
          Dawood University of Engineering &amp; Technology, Karachi. I build
          products that sit at the intersection of clean front-end design and
          reliable back-end systems — from AI-powered mobile apps to live data
          maps and interactive dashboards.
        </p>
        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          I care about practical problem-solving, clear interfaces, and turning
          messy data into something people can actually use. Currently exploring
          AI integration, data analysis, and shipping work in public.
        </p>
      </div>

      <div className="mt-12">
        <p className="text-sm font-medium text-slate-900">What I work with</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="mt-10 text-sm font-medium text-slate-900">Looking for</p>
        <p className="mt-2 text-base leading-8 text-slate-600 sm:text-lg">
          Internship or junior developer role where I can contribute, learn
          fast, and help build meaningful solutions.
        </p>
      </div>
    </>
  );
}
