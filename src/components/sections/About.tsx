import { Code, Users, Sparkles, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: '2 Years',
    subtitle: 'Experience',
  },
  {
    icon: GraduationCap,
    title: 'ITI',
    subtitle: '4 Months Intensive',
  },
  {
    icon: Sparkles,
    title: 'Very Good',
    subtitle: 'Graduation Grade',
  },
  {
    icon: Users,
    title: 'Team Player',
    subtitle: 'Collaboration',
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Get to know me better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-foreground font-semibold">Front-End Developer</span> with 
              two years of experience in building modern, responsive web applications. I graduated from the 
              <span className="text-foreground font-semibold"> Faculty of Computers and Artificial Intelligence</span> in 
              2022 with a Very Good grade.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I completed an intensive <span className="text-foreground font-semibold">4-month Front-End Track</span> at 
              ITI (Information Technology Institute), where I enhanced my skills in modern web technologies and best practices.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I love <span className="text-foreground font-semibold">teamwork</span> and I'm always eager to learn new 
              technologies. I focus on writing <span className="text-foreground font-semibold">clean, maintainable code</span> and 
              creating exceptional user experiences.
            </p>

            <div className="pt-4">
              <a href="#contact" className="btn-primary">
                Let's Work Together
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:glow-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold font-display">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
