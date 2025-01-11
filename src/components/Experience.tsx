import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const experiences = [
  {
    title: "Machine Learning Engineer ",
    company: "Transformly AI",
    period: "September 2024 - Present",
    description:
      "Conducted data analysis and developed machine learning models for financial debt management",
    details: [
      "Performed exploratory data analysis (EDA) on large financial datasets, identifying trends and insights that led to actionable business recommendations, improving the success rate of debt management program",
      "Developed and optimized machine learning models (classification, recommendation systems) to support debt management solution for a financial institution, enhancing customer outcomes",
    ],
  },
  {
    title: "Software Development Engineer 2 ",
    company: "Philips",
    period: "June 2019 - December 2022",
    description:
      "Engineered healthcare technology solutions, focusing on telehealth platforms and data visualization",
    details: [
      "Led the development of multi-user video conferencing for a remote patient monitoring platform using WebRTC and Twilio during COVID-19, enabling healthcare professionals to remotely monitor patients, improving care for over 10,000 patients",
      "Designed and optimized database models to improve the performance of telehealth platform, reducing query execution time by 40%, resulting in smoother application performance, enhancing scalability and clinician experience",
      "Created an interactive data visualization dashboard using Highcharts to present patient health data, enabling healthcare providers to analyze patient health trends quickly, leading to faster diagnosis and improved outcomes for 20,000+ patients",
      "Mentored junior developers by offering guidance on coding best practices and project insights, which improved their technical skills, reduced code defects by 30%, and enhanced overall team productivity and code quality",
      "Won first prize in a global hackathon at Philips by integrating Alexa with remote patient monitoring solutions, enhancing accessibility for disabled users, demonstrating innovation, and delivering value through cutting-edge technology.",
    ],
  },
  {
    title: "SDE Intern",
    company: "Philips",
    period: "January 2019 - June 2019",
    description:
      "Developed and optimized automated testing solutions for healthcare applications",
    details: [
      "Developed and automated end-to-end test suites (sanity, functional, and UI tests) for a remote patient monitoring Android application, reducing manual QA time by 80% using Appium, SpecFlow, and C#",
      "Implemented parallel test execution using Selenium Grid, decreasing testing time by 60% and accelerating the overall development cycle by optimizing test efficiency across multiple environments",
    ],
  },
];
export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Dialog key={index}>
              <DialogTrigger className="w-full">
                <Card className="p-6 card-hover w-full text-left">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="mt-2">{exp.description}</p>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {exp.title} at {exp.company}
                  </DialogTitle>
                  <DialogDescription>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.period}
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      {exp.details.map((detail, i) => (
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
