import Hero from "@/components/sections/Hero";
import Terminal from "@/components/sections/Terminal";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import GitHubShowcase from "@/components/sections/GitHubShowcase";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Terminal />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <GitHubShowcase />
      <Contact />
    </>
  );
}
