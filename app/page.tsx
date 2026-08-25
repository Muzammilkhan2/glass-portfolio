import GlassHero from "@/components/glass-hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="relative w-full">
      <div className="h-dvh w-full overflow-hidden">
        <GlassHero />
      </div>
      <About />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
