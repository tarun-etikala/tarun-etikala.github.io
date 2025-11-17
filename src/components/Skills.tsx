import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "Python", "R"],
  },
  {
    title: "Machine Learning",
    skills: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "dplyr",
      "Tidyverse",
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      "Angular",
      "React",
      "Spring Boot",
      "HTML/CSS",
      "RxJS",
      "RESTful API",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "AWS",
      "Git",
      "Docker",
      "Kubernetes",
      "Kafka",
      "Redis",
      "RabbitMQ",
      "Highcharts",
      "WebRTC",
      "SonarQube",
      "Tableau",
    ],
  },
  {
    title: "Database Technologies",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Liquibase"],
  },
];

const SkillCategoryCard = ({ category, delay }: { category: typeof skillCategories[0]; delay: number }) => {
  const [cardRef, cardVisible] = useScrollAnimation(0.1, delay);
  
  return (
    <div
      ref={cardRef}
      className={`stagger-animation ${cardVisible ? "visible" : ""}`}
    >
      <Card className="card-modern h-full group">
        <CardHeader>
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {category.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <div
                key={skill}
                className="bg-secondary/50 hover:bg-primary/10 border border-border/50 rounded-md px-3 py-1.5 text-sm transition-all duration-300 hover:border-primary/30 hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/50 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div
          ref={ref}
          className={`fade-in-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <h2 className="section-title text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategoryCard key={index} category={category} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
