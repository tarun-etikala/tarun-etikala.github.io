import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Red Hat",
    period: "October 2025 - Current",
    description:
      "Working on AI agentic and tooling experience, developing cutting-edge AI solutions and contributing to open source projects.",
    details: [
      "Working on AI agentic and tooling experience, developing cutting-edge AI solutions and contributing to open source projects",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "Transformly AI",
    period: "September 2024 - May 2025",
    description:
      "Designed and deployed ML models for risk segmentation and churn prediction, boosting client retention and profitability",
    details: [
      "Analyzed financial and customer data with regression, classification, and clustering to reveal churn and profitability drivers",
      "Collaborated with the CEO to design ML solutions for risk segmentation, improving client retention and repayment rates",
      "Engineered XGBoost/RandomForest ensemble to rank debt clients by churn risk and profitability for optimized targeting",
      "Optimized hyperparameters using grid and random search, consistently improving predictive accuracy in production",
      "Evaluated models with cross-validation, achieving AUC of 0.89 and F1 of 0.78, outperforming previous business benchmarks.",
    ],
  },
  {
    title: "Software Development Engineer 2 ",
    company: "Philips",
    period: "June 2019 - December 2022",
    description:
      "Developed full-stack healthcare solutions using Spring Boot, React, and Angular, enabling real-time remote care, EHR integration, and clinical insights for 20,000+ users.",
    details: [
      "Architected and delivered 12 enterprise-level microservices using Spring Boot, deployed on Azure cloud infrastructure",
      "Built high-performance backend services with PostgreSQL, Redis, and Kafka for real-time healthcare data processing",
      "Redesigned and optimized healthcare data models, reducing query time and enabling seamless clinician data accessibility",
      "Engineered CI/CD with Jenkins, Docker, and Kubernetes on AWS, cutting release time and ensuring reliable feature delivery",
      "Built dynamic dashboards using React.js to visualize patient trends, providing 20,000+ users real-time clinical data insights",
      "Led secure multi-user video call rollout (WebRTC, Twilio), enabling real-time remote care for over 10,000 hospital patients",
      "Engineered HL7 FHIR-compliant pipelines to integrate EHR data into RPM systems, enhancing clinical interoperability",
      "Collaborated with Philips Software Center of Excellence to enhance WebRTC video call service used across multiple teams",
      "Mentored 3+ junior engineers, formalized code reviews, and improved JUnit/Selenium automation to cut production bugs",
    ],
  },
  {
    title: "SDE Intern",
    company: "Philips",
    period: "January 2019 - June 2019",
    description:
      "Built and automated testing frameworks for healthcare apps using .NET Core, Appium, and Selenium Grid, accelerating releases and improving system reliability.",
    details: [
      "Integrated RESTful APIs via .NET Core, improving real-time data synchronization for remote health monitoring applications",
      "Automated end-to-end test suites for Android app with Appium, SpecFlow, and C#, accelerating release cycles and QA",
      "Deployed Selenium Grid for parallel test execution, optimizing multi-environment testing and boosting product reliability",
    ],
  },
];

const ExperienceCard = ({
  exp,
  delay,
}: {
  exp: (typeof experiences)[0];
  delay: number;
}) => {
  const [cardRef, cardVisible] = useScrollAnimation(0.1, delay);

  return (
    <div
      ref={cardRef}
      className={`stagger-animation ${cardVisible ? "visible" : ""}`}
    >
      <Dialog>
        <DialogTrigger className="w-full">
          <Card className="p-6 md:p-8 card-modern w-full text-left group cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1 space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
            <div className="mt-4 text-sm text-primary font-medium group-hover:translate-x-2 transition-transform inline-block">
              View Details →
            </div>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {exp.title} at {exp.company}
            </DialogTitle>
            <DialogDescription>
              <p className="text-sm text-muted-foreground mb-6 mt-2">
                {exp.period}
              </p>
              <ul className="list-disc pl-5 space-y-3 text-sm leading-relaxed">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-foreground">
                    {detail}
                  </li>
                ))}
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const Experience = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-secondary/50 relative"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div
          ref={ref}
          className={`fade-in-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <h2 className="section-title text-center">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
