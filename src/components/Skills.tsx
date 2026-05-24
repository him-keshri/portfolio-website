import { Code, Brain, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    color: "primary",
    skills: ["C++", "Python", "JavaScript", "HTML", "CSS", "React"],
  },
  {
    title: "Core Expertise",
    icon: Brain,
    color: "secondary",
    skills: ["Data Structures & Algorithms", "Web Development", "Cloud Computing"],
  },
  {
    title: "ML & AI",
    icon: Sparkles,
    color: "accent",
    skills: ["Vision Transformer", "Deep Learning", "Computer Vision", "Medical Image Analysis"],
  },
  {
    title: "Tools & Other",
    icon: Wrench,
    color: "primary",
    skills: ["Git/GitHub", "VS Code", "MySQL", "Problem-solving", "Time Management", "Video Editing"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I know</p>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = {
              primary: "bg-primary/10 text-primary border-primary/20",
              secondary: "bg-secondary/10 text-secondary border-secondary/20",
              accent: "bg-accent/10 text-accent border-accent/20",
            };
            const tagColors = {
              primary: "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20",
              secondary: "bg-secondary/10 text-secondary border-secondary/30 hover:bg-secondary/20",
              accent: "bg-accent/10 text-accent border-accent/30 hover:bg-accent/20",
            };

            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl border ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-300 ${tagColors[category.color as keyof typeof tagColors]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
