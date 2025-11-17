import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
    </div>
  );
};

export default Index;
