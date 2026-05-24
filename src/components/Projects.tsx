import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Hospital Management System",
    year: "2024",
    description:
      "Full-stack system for hospital operations management including patient records, appointments, and administrative functions.",
    skills: ["React", "Node.js", "MySQL", "Express"],
    githubUrl: "https://github.com/him-keshri/Hospital-Management-System",
    color: "primary",
  },
  {
    title: "Olympics Data Analysis",
    year: "2023",
    description:
      "Comprehensive analysis of athlete performance trends with ML predictions and data visualization dashboards.",
    skills: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    githubUrl: "https://github.com/him-keshri/Olympics-Data-Analysis-ML",
    color: "secondary",
  },
  {
    title: "Pneumonia Detection using ViT",
    year: "2024",
    description:
      "Deep learning classification model using Vision Transformer for accurate pneumonia detection from chest X-rays.",
    skills: ["Python", "PyTorch", "Vision Transformer", "Medical Imaging"],
    githubUrl: "https://github.com/him-keshri/Vision-Transformer-Pneumonia-Detection",
    color: "accent",
  },
  {
    title: "Smart Grocery Checkout System",
    year: "2024",
    description:
      "AI-powered shopping assistant with smart product recognition and automated checkout functionality.",
    skills: ["Python", "Computer Vision", "TensorFlow", "React"],
    githubUrl: "https://github.com/him-keshri/smart-grocery-checkout",
    color: "primary",
  },
  {
    title: "Personal Portfolio Website",
    year: "Ongoing",
    description:
      "Modern, responsive portfolio website built with React and Tailwind CSS showcasing projects and skills.",
    skills: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    githubUrl: "#",
    color: "secondary",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My work</p>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const borderColors = {
              primary: "hover:border-primary/50",
              secondary: "hover:border-secondary/50",
              accent: "hover:border-accent/50",
            };
            const tagColors = {
              primary: "bg-primary/10 text-primary",
              secondary: "bg-secondary/10 text-secondary",
              accent: "bg-accent/10 text-accent",
            };
            const yearColors = {
              primary: "text-primary",
              secondary: "text-secondary",
              accent: "text-accent",
            };

            return (
              <div
                key={index}
                className={`group bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${borderColors[project.color as keyof typeof borderColors]}`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-sm font-medium ${yearColors[project.color as keyof typeof yearColors]}`}
                    >
                      {project.year}
                    </span>
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[project.color as keyof typeof tagColors]}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group/btn"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                        <ExternalLink
                          size={14}
                          className="ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity"
                        />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
