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
    title: "Inbox AI (Email Assistant)",
    description:
      "Developed an AI-powered email assistant with RAG workflows, Dockerized Flask services, and GCP-based orchestration for automation.",
    tags: [
      "GCP",
      "React.js",
      "Flask",
      "RAG",
      "TFDV",
      "Docker",
      "OpenAI Embeddings",
      "Vector Databases",
      "GitHub Actions",
      "Apache Airflow",
      "Agentic AI Workflows",
    ],
    details: [
      "Launched an email platform with Dockerized Flask APIs, React UI, TFDV, and Airflow on GCP for automated workflows.",
      "Built agentic AI workflows using RAG, OpenAI embeddings, vector DB, and orchestrated pipelines via GitHub Actions.",
    ],
  },
  {
    title: "Retail Management System",
    description:
      "Built a cloud-based inventory management system using Angular, Spring Boot, and MySQL with microservices and real-time APIs.",
    tags: [
      "Angular",
      "Spring Boot",
      "MySQL",
      "RESTful APIs",
      "Microservices Architecture",
      "Multi-user Role Management",
    ],
    details: [
      "Developed enterprise web app using Angular, Spring Boot, and MySQL on cloud infrastructure for inventory management.",
      "Built RESTful APIs and microservices architecture serving multiple user roles with real-time data processing capabilities.",
    ],
  },
  {
    title: "Portfolio Optimization Using ML",
    description:
      "Optimized investment portfolios using advanced financial models and machine learning algorithms.",
    tags: [
      "Markowitz Model",
      "Black-Litterman Model",
      "SLSQP",
      "Financial Modeling",
      "Conjugate Gradient (CG)",
    ],
    details: [
      "Implemented Markowitz's Modern Portfolio Theory and the Black-Litterman model for portfolio optimization.",
      "Developed tailored optimization algorithms, using SLSQP for low-risk and CG for medium-risk portfolios.",
    ],
  },
  {
    title: "Chat with PDF using LLM",
    description:
      "Created a PDF chat interface using LLama-2, Gemini, and GPT-3.5, achieving high retrieval accuracy and improved document accessibility.",
    tags: [
      "LLama-2",
      "Gemini",
      "OpenAI GPT-3.5",
      "ROUGE-N",
      "PDF Data Extraction",
    ],
    details: [
      "Developed a platform using LLama-2, Gemini, and OpenAI GPT-3.5 to transform PDF document interaction and accessibility.",
      "Attained ROUGE-N score 0.782 and latency 75 seconds by benchmarking PDF data retrieval with large language models.",
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
