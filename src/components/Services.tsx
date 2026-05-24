import { Globe, Palette, Brain, Rocket, Video } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "End-to-end website development using React, JavaScript, HTML, and CSS. Creating responsive, performant, and modern web applications.",
    color: "primary",
  },
  {
    icon: Palette,
    title: "UI Implementation",
    description:
      "Translating design mockups into pixel-perfect, functional user interfaces with attention to detail and user experience.",
    color: "secondary",
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description:
      "Deploying AI/ML models with focus on Computer Vision applications, including medical image analysis and object detection.",
    color: "accent",
  },
  {
    icon: Rocket,
    title: "Freelance Projects",
    description:
      "Custom website development for individuals and startups. From concept to deployment, delivering tailored solutions.",
    color: "primary",
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Professional video editing and content creation for YouTube and social media platforms. Engaging content that stands out.",
    color: "secondary",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I offer</p>
          <h2 className="section-title">
            My <span className="text-gradient">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const glowClasses = {
              primary: "group-hover:shadow-primary/20",
              secondary: "group-hover:shadow-secondary/20",
              accent: "group-hover:shadow-accent/20",
            };
            const iconClasses = {
              primary: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
              secondary: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground",
              accent: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground",
            };

            return (
              <div
                key={index}
                className={`group bg-card rounded-2xl p-6 md:p-8 border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${glowClasses[service.color as keyof typeof glowClasses]}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${iconClasses[service.color as keyof typeof iconClasses]}`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
