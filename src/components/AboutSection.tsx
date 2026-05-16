import { Code2, Sparkles, Zap, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-24 topographic-bg relative" id="about">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 text-primary/20">
        <div className="flex flex-col items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="glass-card px-4 py-2 rounded-lg border border-primary/30">
            <h2 className="font-mono text-lg font-semibold text-foreground">About Me</h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="glass-card-glow p-8 rounded-2xl neon-border">
            <h3 className="text-2xl font-bold text-primary mb-4 font-mono">Hello!</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm <span className="text-primary">Sumit Vishwakarma</span>, a Full Stack Engineer from Indore, India. 
              I specialize in building AI-powered web applications using the{" "}
              <span className="text-primary">Python Full Stack</span> (Python, DJango,REST API, Flask,  React.js, JavaSript).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm passionate about integrating <span className="text-primary">Generative AI</span> and{" "}
              <span className="text-primary">LLMs</span> into full-stack applications. I love solving LeetCode problems 
              daily and building innovative projects that combine AI with modern web technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing B.Tech in Computer Science Engineering at Patel College of Science and Technology, 
              I'm always eager to learn new technologies and take on challenging projects.
            </p>

            {/* Education highlight */}
            <div className="mt-6 p-4 bg-secondary/30 rounded-xl border border-border">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-foreground font-medium">B.Tech Computer Science Engineering</p>
                  <p className="text-muted-foreground text-sm">Patel College of Science and Technology, Indore</p>
                </div>
              </div>
            </div>

            {/* Quick highlights */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: Code2, text: "MERN Stack" },
                { icon: Sparkles, text: "Generative AI" },
                { icon: Zap, text: "Problem Solver" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full text-sm"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="glass-card-glow rounded-2xl overflow-hidden neon-border">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Coding workspace"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Floating decoration */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border border-primary/30 animate-float">
              <Code2 className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
