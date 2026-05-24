import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative group animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background">
              <img
                src={profileImage}
                alt="Himanshu Keshri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
              <p className="text-primary font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                Himanshu <span className="text-gradient">Keshri</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
                Computer Science Student & <span className="text-secondary">Web Developer</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "0.6s", opacity: 0 }}>
              A passionate developer who loves building impactful and user-friendly solutions. 
              With strong skills in DSA and hands-on experience in innovative projects, 
              I thrive on solving problems with creativity and precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "1s", opacity: 0 }}>
              <a
                href="https://github.com/him-keshri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/himanshu-keshri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:himkeshri04@gmail.com"
                className="p-3 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
