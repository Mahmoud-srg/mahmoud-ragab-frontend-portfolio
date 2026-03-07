import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { socialLinks } from '@/data/projects';
import profileImage from '@/assets/profile-image.png';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Hi, I'm{' '}
              <span className="gradient-text">Mahmoud Ragab</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Front-End Developer
            </p>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in text-balance" style={{ animationDelay: '0.3s' }}>
              Building Modern, Fast & Responsive Web Experiences.
              Passionate about creating beautiful interfaces with clean code and exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/Mahmoud-Serag_Frontend.pdf" download className="btn-secondary">
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a href="#contact" className="btn-ghost">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card hover:scale-110 hover:glow-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card hover:scale-110 hover:glow-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full gradient-border p-1 glow-primary animate-float">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-muted to-card overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Mahmoud Ragab"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 glass-card rounded-xl text-sm font-medium animate-bounce">
                Two Years Exp
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 glass-card rounded-xl text-sm font-medium animate-bounce" style={{ animationDelay: '0.5s' }}>
                ITI Graduate
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
