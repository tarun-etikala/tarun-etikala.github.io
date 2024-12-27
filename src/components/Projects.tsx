import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Retail Management System",
    description:
      "Developed a web application to optimize inventory management and streamline billing processes.",
    tags: ["Angular", "Spring Boot", "MySQL"],
    details: [
      "Built user flow enhancements catering to Store Managers, Employees, and Customers.",
      "Streamlined inventory management and checkout processes for improved efficiency.",
    ],
  },
  {
    title: "Portfolio Optimization Using ML",
    description:
      "Optimized investment portfolios using advanced financial models and machine learning algorithms.",
    tags: ["Markowitz Model", "Black-Litterman Model", "SLSQP"],
    details: [
      "Implemented Markowitz's Modern Portfolio Theory and the Black-Litterman model for portfolio optimization.",
      "Developed tailored optimization algorithms, using SLSQP for low-risk and CG for medium-risk portfolios.",
    ],
  },
  {
    title: "Chat with PDF using LLM",
    description:
      "Developed a system for interacting with PDF documents using advanced LLMs.",
    tags: ["LLama-2", "Gemini", "OpenAI GPT-3.5", "ROUGE-N"],
    details: [
      "Designed and implemented a tool leveraging LLama-2, Gemini, and OpenAI GPT-3.5.",
      "Achieved a ROUGE-N score of 0.782 with a latency of 75 seconds, enhancing PDF information retrieval.",
    ],
  },
];
// "CG Method"

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger className="w-full">
                <Card className="card-hover h-full">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>
                    <p className="mb-4">{project.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-4 space-y-2">
                      {project.details.map((detail, i) => (
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
