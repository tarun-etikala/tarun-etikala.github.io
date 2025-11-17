import { GithubIcon, LinkedinIcon, Mail, Download, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import dp from "@/assets/dpv2.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const linkedinURL = "https://www.linkedin.com/in/tarun-etikala";
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1_NdrjetEChjO5azGQ8RTgkNusudza5uY/view?usp=sharing";
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background -z-10" />
      
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div 
          className={`md:w-1/2 space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground font-medium animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Tarun</span>{" "}
              <span className="gradient-text">Etikala</span>
            </h1>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Full Stack SDE
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                ML Engineer • Data Scientist
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="default" 
                  size="lg"
                  className="rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
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
                          className="hover:text-primary transition-colors"
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
                          className="hover:text-primary transition-colors"
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
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToProjects}
              className="rounded-full px-6 border-2 hover:border-primary/50 transition-all duration-300"
            >
              View Projects
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={handleDownloadResume}
              className="rounded-full px-6 hover:bg-secondary transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
          
          <div className="flex gap-6 pt-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tarun-etikala"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <GithubIcon size={28} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/tarun-etikala/"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <LinkedinIcon size={28} />
            </a>
          </div>
        </div>
        
        <div 
          className={`md:w-1/2 flex justify-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
            <img
              src={dp}
              alt="Profile"
              className="relative rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
