import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { CustomCursor, ScrollProgress } from "@/components/Chrome";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Terminal } from "@/components/Terminal";
import { Workflow } from "@/components/Workflow";

export default function Home() {
  return (
    <>
      <Intro />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Workflow />
        <Achievements />
        <Education />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
