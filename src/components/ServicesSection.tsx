import { Code, Palette, Bot, Database, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building complete web applications using MERN stack (MongoDB, Express.js, React.js, Node.js) with responsive UI and robust backend.",
    features: ["React.js Frontend", "Node.js Backend", "MongoDB Database"],
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Integrating Generative AI and LLMs into applications using OpenAI APIs, prompt engineering, and intelligent automation.",
    features: ["OpenAI Integration", "LLM Implementation", "AI Chatbots"],
  },
  {
    icon: Palette,
    title: "Frontend Development",
    description: "Creating beautiful, responsive user interfaces with modern frameworks like React.js and styling with Tailwind CSS.",
    features: ["Responsive Design", "Modern UI/UX", "Interactive Components"],
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description: "Developing secure REST APIs, database management, and server-side logic with Node.js, Express, and various databases.",
    features: ["REST APIs", "Database Design", "Authentication"],
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-card/30" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What I <span className="neon-text">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Services and expertise I bring to your projects
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--neon)/0.15)]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(var(--neon)/0.3)] transition-all">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <button className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
