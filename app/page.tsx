import GlassHero from "@/components/glass-hero";

const featuredProjects = [
  {
    title: "Portfolio-webpage-",
    description:
      "A polished personal portfolio website built with HTML and CSS for a modern presentation.",
    href: "https://github.com/Muzammilkhan2/Portfolio-webpage-",
  },
  {
    title: "Cropintel-FYP",
    description:
      "Wheat disease monitoring system that helps detect yellow rust, brown rust, and aphids.",
    href: "https://github.com/Muzammilkhan2/Cropintel-FYP",
  },
  {
    title: "serenity_ai",
    description:
      "A Python AI experiment exploring automation, intelligence, and practical tool building.",
    href: "https://github.com/Muzammilkhan2/serenity_ai",
  },
  {
    title: "MERN-STACK-CHAT-APPLICATION-WITH-SOCKET.IO",
    description:
      "Real-time chat application built with MongoDB, Express, React, Node, and Socket.IO.",
    href: "https://github.com/Muzammilkhan2/MERN-STACK-CHAT-APPLICATION-WITH-SOCKET.IO",
  },
  {
    title: "easypaisa-app",
    description:
      "A responsive UI project inspired by digital payment experiences and modern mobile design.",
    href: "https://github.com/Muzammilkhan2/easypaisa-app",
  },
  {
    title: "travel-app",
    description:
      "A travel booking interface showcasing layout, navigation, and interactive page design.",
    href: "https://github.com/Muzammilkhan2/travel-app",
  },
];

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <GlassHero />

      <div className="bg-slate-50 text-slate-900">
        <section
          id="about"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-700">
              About
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              I build tools, products, and experiences that move ideas forward.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              I’m Muzammil Ullah Khan, a Computer Science student and developer
              building modern portfolio websites, web applications, and AI
              experiments. I bring clarity to product design, speed to
              implementation, and intent to every project I ship.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Role",
                title: "Frontend & product builder",
                description:
                  "I create performant websites, accessible UIs, and polished landing pages with attention to every detail.",
              },
              {
                label: "Focus",
                title: "Web apps, portfolios, AI tools",
                description:
                  "I combine modern web stack tools, smart interactions, and clean design to launch projects that feel stronger over time.",
              },
              {
                label: "Values",
                title: "Open source and continuous learning",
                description:
                  "I share progress through repos and experiments, and I learn by shipping early iterations in public.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-4 text-xl font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 group-hover:text-slate-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="work"
          className="mx-auto max-w-6xl border-t border-slate-200/80 px-6 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-700">
              Work
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Selected projects from GitHub and product explorations.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Explore repositories that highlight how I solve problems, build
              interfaces, and push ideas with code.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[2rem] border border-slate-200/80 bg-white p-8 transition duration-300 ease-out hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Featured
                </p>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>
                <span className="mt-6 inline-flex text-sm font-medium text-sky-700 group-hover:text-sky-900">
                  View on GitHub →
                </span>
              </a>
            ))}
          </div>
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
                className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-lg"
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
          className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12"
        >
          <div className="rounded-[2rem] border border-slate-200/80 bg-slate-900 p-10 text-white shadow-lg shadow-slate-900/20 sm:p-14">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-sky-300">
                  Let’s connect
                </p>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Ready to build the next version of your web presence?
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  Find me on GitHub to explore the full repository collection,
                  or reach out on LinkedIn to start a conversation.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://github.com/Muzammilkhan2"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl bg-white px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-900 transition hover:bg-slate-100"
                >
                  View GitHub repos
                </a>
                <a
                  href="https://www.linkedin.com/in/muzammil-khan-041193271"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl border border-slate-200 bg-transparent px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-slate-100 hover:bg-white/5"
                >
                  Visit LinkedIn profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
