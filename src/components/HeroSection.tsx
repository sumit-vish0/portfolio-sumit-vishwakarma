import { ArrowRight, Mail, MapPin, Instagram, Github, Linkedin, Twitter, Download } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePic from '../assets/sumitprofile.jpg';



const socialIcons = [
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Github, href: "https://github.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Twitter, href: "https://twitter.com" },
];

const stats = [
  { number: "4+", label: "Projects Completed" },
  { number: "MERN", label: "Stack Developer" },
  { number: "Gen AI", label: "Enthusiast" },
];

export const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-bg topographic-bg pt-24 pb-16 relative overflow-hidden">
      {/* Floating Social Icons - Left Side */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40">
        {socialIcons.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/80 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--neon)/0.3)] transition-all duration-300"
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
        <div className="w-px h-20 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Card */}
          <div className="animate-float">
            <div className="glass-card-glow p-6 rounded-2xl w-72 neon-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-primary/50 ring-offset-2 ring-offset-background mb-4 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <img src={ProfilePic} alt="Sumit Profile" className="w-24 h-24 rounded-full" />
                </div>
                <h3 className="font-mono font-semibold text-lg text-foreground">Sumit Vishwakarma</h3>
                <p className="text-primary text-sm font-medium">Full Stack Engineer</p>
                <div className="flex items-center gap-2 mt-3 text-muted-foreground text-xs">
                  <Mail className="w-3 h-3" />
                  <span>sumitvishwakarma958@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-muted-foreground text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>Indore, India</span>
                </div>
                <a
                  href="/Sumit_Vishwakarma_Resume.pdf"
                  download
                  className="mt-4 w-full py-2 px-4 bg-secondary text-foreground text-sm rounded-lg border border-border hover:border-primary/50 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/30">
                Full Stack Engineer
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hey, I'm <span className="neon-text">Sumit</span>
              <br />
              <span className="text-foreground">Full Stack Developer</span>
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-xl mb-8">
              I build AI-powered full-stack applications using the MERN stack, Generative AI, and modern web technologies. Passionate about solving problems and creating seamless user experiences.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card px-6 py-4 rounded-xl text-center">
                  <div className="text-3xl font-bold neon-text font-mono">{stat.number}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-[0_0_30px_hsl(var(--neon)/0.5)] transition-all duration-300 group"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
