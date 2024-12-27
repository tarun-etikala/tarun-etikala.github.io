import { GithubIcon, LinkedinIcon, Mail, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import dp from "@/assets/dp.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Intro = () => {
  const linkedinURL = "https://www.linkedin.com/in/tarun-etikala";
  const handleDownloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/19vrZNau_8c1S-cEDn9BWbkmqqtfdzVyy/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-background"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Hi, I'm <span className="text-blue-600">Tarun Etikala</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Full Stack SDE | ML Engineer | Data Scientist
          </p>
          <div className="flex flex-wrap gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact Information</DialogTitle>
                  <DialogDescription>
                    <div className="space-y-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        <a
                          href="mailto:etikala.t@northeastern.edu"
                          className="hover:text-primary"
                        >
                          etikala.t@northeastern.edu
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <LinkedinIcon className="h-5 w-5" />
                        <a
                          href={linkedinURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                        >
                          {linkedinURL}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <span>Boston, MA</span>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="lg" onClick={scrollToProjects}>
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tarun-etikala"
              className="text-muted-foreground hover:text-primary"
            >
              <GithubIcon size={24} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/tarun-etikala/"
              className="text-muted-foreground hover:text-primary"
            >
              <LinkedinIcon size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={dp}
            alt="Profile"
            className="rounded-full w-80 h-80 object-cover mx-auto shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
