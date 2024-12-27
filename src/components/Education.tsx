import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Dialog key={index}>
              <DialogTrigger className="w-full">
                <Card className="p-6 card-hover w-full text-left">
                  <CardHeader>
                    <CardTitle>
                      {edu.degree} in {edu.field}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary">{edu.university}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.period}
                    </p>
                    <p className="mt-2">{edu.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {edu.degree} in {edu.field}
                  </DialogTitle>
                  <DialogDescription>
                    <p className="text-primary mb-1">{edu.university}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {edu.period}
                    </p>
                    <p className="mb-4">{edu.description}</p>
                    <h4 className="font-semibold mb-2">Details:</h4>
                    <ul className="list-disc pl-4 space-y-2">
                      {edu.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};
