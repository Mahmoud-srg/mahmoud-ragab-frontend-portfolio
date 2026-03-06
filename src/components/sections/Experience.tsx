import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences } from '@/data/projects';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding relative bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My professional journey and academic background
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

            {/* Timeline Items */}
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="timeline-dot flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:text-left'
                  }`}
                >
                  <div className={`flex items-center gap-3 mb-4 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      exp.type === 'work' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-accent/20 text-accent'
                    }`}>
                      {exp.type === 'work' ? (
                        <Briefcase className="w-5 h-5" />
                      ) : (
                        <GraduationCap className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
