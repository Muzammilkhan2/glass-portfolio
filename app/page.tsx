import GlassHero from "@/components/glass-hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Analytics from "@/components/analytics";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <GlassHero />

      <div className="bg-slate-50 text-slate-900">
        <section
          id="about"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12"
        >
          <About />
        </section>

        <section
          id="work"
          className="mx-auto max-w-6xl border-t border-slate-200/80 px-6 py-20 sm:px-8 lg:px-12"
        >
          <Projects />
        </section>

        <section
          id="analytics"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12"
        >
          <Analytics />
        </section>

        <section
          id="process"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-700">
              Process
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              From concept to launch with clarity, speed, and polish.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Discover",
                description:
                  "Start with research, reference, and a clear brief so every project begins with a strong direction.",
              },
              {
                title: "Build",
                description:
                  "Focus on fast, maintainable code that makes interfaces feel smooth and intuitive.",
              },
              {
                title: "Ship",
                description:
                  "Deploy early, gather feedback, and iterate quickly to keep momentum moving forward.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="experiments"
          className="mx-auto max-w-6xl border-t border-slate-200/80 px-6 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-700">
              Experiments
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              I experiment with modern web patterns and AI-powered interactions.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              My work is shaped by hands-on experimentation, from UI details to
              intelligent workflows and product-grade prototypes.
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-sm shadow-slate-900/5 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                  Latest experiment
                </p>
                <h3 className="mt-5 text-3xl font-semibold text-slate-900">
                  Portfolio-first interactions with liquid glass motion.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  This site combines a tactile hero reveal effect with a clean,
                  responsive portfolio layout designed to showcase work and
                  personality.
                </p>
              </div>
              <div className="grid gap-4 rounded-3xl bg-slate-50 p-6">
                {[
                  "Next.js · React · TypeScript",
                  "Tailwind CSS · responsive design",
                  "Accessible navigation · smooth scrolling",
                ].map((item) => (
                  <p key={item} className="text-sm leading-7 text-slate-600">
                    • {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl border-t border-slate-200/80 px-6 py-20 sm:px-8 lg:px-12"
        >
          <Contact />
        </section>
      </div>
    </main>
  );
}
