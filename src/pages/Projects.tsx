import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, Github, Bot, MessageSquare, Globe, Zap } from "lucide-react";

const projects = [
  {
    title: "AI Content Generator",
    description: "Full-stack AI content generation web application using React, Node.js, Express, and MongoDB. Provides real-time AI-generated text for blogs, captions, summaries, and ideas with an intuitive UI.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "OpenAI", "Tailwind CSS", "HuggingFace"],
    liveUrl: "#",
    codeUrl: "#",
    icon: Bot,
  },
  {
    title: "AI Personal Assistant",
    description: "ChatGPT-like personal assistant capable of answering queries, generating study notes, explaining concepts, and creating daily task plans. Features voice input/output for hands-free interactions.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&h=400&fit=crop",
    tags: ["React.js", "Node.js", "Python", "LLMs", "Voice API", "Generative AI"],
    liveUrl: "#",
    codeUrl: "#",
    icon: MessageSquare,
  },
  {
    title: "Portfolio Website",
    description: "Modern, dark-themed developer portfolio with neon-turquoise accents, glassmorphism effects, and smooth animations. Built with React and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    tags: ["React.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveUrl: "#",
    codeUrl: "#",
    icon: Globe,
  },
  {
    title: "Full Stack MERN App",
    description: "Complete web application demonstrating MERN stack capabilities with user authentication, CRUD operations, and responsive design.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    liveUrl: "#",
    codeUrl: "#",
    icon: Zap,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              My <span className="neon-text">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              AI-powered full-stack applications showcasing MERN stack and Generative AI integration
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--neon)/0.2)]"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    <project.icon className="w-3 h-3" />
                    Project
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-secondary/50 text-muted-foreground rounded-md border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:shadow-[0_0_20px_hsl(var(--neon)/0.5)] transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      className="flex items-center justify-center gap-2 py-2 px-4 bg-secondary text-foreground rounded-lg text-sm font-medium border border-border hover:border-primary/50 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
