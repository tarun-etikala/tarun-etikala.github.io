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
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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

const ProjectCard = ({ project, delay }: { project: typeof projects[0]; delay: number }) => {
  const [cardRef, cardVisible] = useScrollAnimation(0.1, delay);
  
  return (
    <div
      ref={cardRef}
      className={`stagger-animation ${cardVisible ? "visible" : ""}`}
    >
      <Dialog>
        <DialogTrigger className="w-full h-full">
          <Card className="card-modern h-full group cursor-pointer flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.tags.length - 4} more
                  </Badge>
                )}
              </div>
              <div className="text-sm text-primary font-medium group-hover:translate-x-2 transition-transform inline-block">
                View Details →
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <DialogDescription>
              <p className="mb-4 mt-2 text-foreground">{project.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                {project.details.map((detail, i) => (
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

export const Projects = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div
          ref={ref}
          className={`fade-in-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <h2 className="section-title text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
