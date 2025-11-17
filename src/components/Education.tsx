import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const education = [
  {
    degree: "Master of Science",
    field: "Data Science",
    university: "Northeastern University",
    period: "2023 - 2025",
    description:
      "Specialized in Data Science, Machine Learning and Artificial Intelligence",
    details: [
      "GPA: 3.9/4.0",
      "Key Courses: Supervised & Unsupervised Machine Learning, Algorithms, DBMS, Large Language Models (LLMs)",
    ],
  },
];

const EducationCard = ({ edu, delay }: { edu: typeof education[0]; delay: number }) => {
  const [cardRef, cardVisible] = useScrollAnimation(0.1, delay);
  
  return (
    <div
      ref={cardRef}
      className={`stagger-animation ${cardVisible ? "visible" : ""}`}
    >
      <Dialog>
        <DialogTrigger className="w-full">
          <Card className="p-6 md:p-8 card-modern w-full text-left group cursor-pointer">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                {edu.degree} in {edu.field}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-primary font-medium">{edu.university}</p>
              <p className="text-sm text-muted-foreground">
                {edu.period}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{edu.description}</p>
              <div className="mt-4 text-sm text-primary font-medium group-hover:translate-x-2 transition-transform inline-block">
                View Details →
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {edu.degree} in {edu.field}
            </DialogTitle>
            <DialogDescription>
              <p className="text-primary mb-1 font-medium">{edu.university}</p>
              <p className="text-sm text-muted-foreground mb-4">
                {edu.period}
              </p>
              <p className="mb-4 text-foreground">{edu.description}</p>
              <h4 className="font-semibold mb-3 text-foreground">Details:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-foreground">{detail}</li>
                ))}
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const Education = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="education" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div
          ref={ref}
          className={`fade-in-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <h2 className="section-title text-center">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={index} edu={edu} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
