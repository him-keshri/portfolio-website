import { GraduationCap, Briefcase, Calendar } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get to know me</p>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-border">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="bg-card rounded-xl p-6 border border-border card-hover">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Calendar size={14} />
                  <span>2022 - 2026</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  B.Tech in Computer Science & Engineering
                </h4>
                <p className="text-primary font-medium">
                  SRM Institute of Science and Technology
                </p>
                <p className="text-muted-foreground text-sm">
                  Kattankulathur, Chennai
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold">Experience</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-border">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-secondary" />
              <div className="bg-card rounded-xl p-6 border border-border card-hover">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Calendar size={14} />
                  <span>Dec 2024 - Jan 2025</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Research Intern</h4>
                <p className="text-secondary font-medium mb-3">
                  Indian Institute of Technology (IIT) Guwahati
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Worked on Vision Transformer (ViT) for Pneumonia Detection in 
                  medical images, applying deep learning techniques to healthcare 
                  diagnostics and contributing to cutting-edge research in 
                  computer vision.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "5+", label: "Projects Completed" },
            { value: "1", label: "Research Internship" },
            { value: "500+", label: "DSA Problems Solved" },
            { value: "2026", label: "Graduating" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border card-hover"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
