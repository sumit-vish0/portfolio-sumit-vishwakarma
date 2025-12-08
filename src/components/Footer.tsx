import { Instagram, Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 font-mono text-lg font-semibold">
            <span className="text-primary">&lt;/&gt;</span>
            <span className="text-foreground">Sumit Vishwakarma</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(var(--neon)/0.3)] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © 2025 Sumit Vishwakarma — All Rights Reserved.{new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
