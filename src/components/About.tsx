const resumeURL =
  "https://drive.google.com/file/d/19vrZNau_8c1S-cEDn9BWbkmqqtfdzVyy/view?usp=sharing";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground">
            I'm a passionate technologist with expertise in full-stack
            development, machine learning, and data science. With years of
            experience in building scalable applications and implementing ML
            solutions, I bring a unique blend of software engineering and data
            expertise to every project.
          </p>
        </div>
      </div>
    </section>
  );
};
