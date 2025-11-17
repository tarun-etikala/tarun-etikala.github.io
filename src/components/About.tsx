import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const resumeURL =
  "https://drive.google.com/file/d/19vrZNau_8c1S-cEDn9BWbkmqqtfdzVyy/view?usp=sharing";

export const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div
          ref={ref}
          className={`fade-in-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <h2 className="section-title text-center">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center font-light">
              Full-Stack Machine Learning & Software Engineer with over 5 years of
              experience delivering enterprise-grade applications and cloud-native
              solutions. Skilled in building scalable web applications using Java,
              React, and Angular, and in developing end-to-end ML/NLP systems
              using Python, TensorFlow, PyTorch, XGBoost, Random Forest, and
              Retrieval-Augmented Generation (RAG) with OpenAI. Built 12+
              microservices using Spring Boot, Docker, and Kubernetes on cloud
              infrastructure, with strong expertise in Agile development, CI/CD
              automation, and production-grade deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
