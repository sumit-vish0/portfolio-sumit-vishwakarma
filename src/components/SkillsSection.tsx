import { Code2 } from "lucide-react";

const skillCategories = [
  { name: "Web Development", description: "MERN Stack, REST APIs" },
  { name: "AI & ML", description: "LLMs, OpenAI, Generative AI" },
];

const skills = [
  { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-500" },
  { name: "React.js", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
  { name: "Express.js", icon: "🚀", color: "from-gray-500 to-gray-400" },
  { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-400" },
  { name: "Python", icon: "🐍", color: "from-blue-500 to-yellow-500" },
  { name: "HTML5", icon: "🌐", color: "from-orange-500 to-red-500" },
  { name: "CSS3", icon: "🎨", color: "from-blue-500 to-cyan-500" },
  { name: "Tailwind", icon: "💨", color: "from-teal-500 to-cyan-400" },
  { name: "Git/GitHub", icon: "📦", color: "from-orange-600 to-red-500" },
  { name: "SQL", icon: "🗄️", color: "from-blue-600 to-blue-400" },
  { name: "OpenAI API", icon: "🤖", color: "from-green-400 to-teal-500" },
  { name: "REST APIs", icon: "🔗", color: "from-purple-500 to-pink-500" },
  { name: "Postman", icon: "📮", color: "from-orange-500 to-orange-400" },
  { name: "Power BI", icon: "📊", color: "from-yellow-500 to-amber-500" },
  { name: "VS Code", icon: "💻", color: "from-blue-500 to-blue-400" },
];

export const SkillsSection = () => {
  return (
    <section className="py-24 bg-card/30" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Code Icon */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-1 text-primary/60 mb-2">
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="w-px h-6 bg-primary/30" />
          </div>
          <Code2 className="w-12 h-12 text-primary neon-glow p-2 rounded-lg" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="neon-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I am striving to never stop learning and improving
          </p>
        </div>

        {/* Skill Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card px-6 py-3 rounded-xl border border-border hover:border-primary/50 transition-all cursor-pointer group"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/50 border border-border flex items-center justify-center text-xl mb-2 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(var(--neon)/0.3)] transition-all duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-muted-foreground text-xs text-center group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
