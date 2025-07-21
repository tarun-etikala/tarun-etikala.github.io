const resumeURL =
  "https://drive.google.com/file/d/19vrZNau_8c1S-cEDn9BWbkmqqtfdzVyy/view?usp=sharing";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground">
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
    </section>
  );
};
