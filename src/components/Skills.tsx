import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-background rounded-md p-2 text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
