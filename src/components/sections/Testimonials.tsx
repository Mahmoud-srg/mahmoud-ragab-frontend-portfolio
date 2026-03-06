import { Quote } from 'lucide-react';
import { testimonials } from '@/data/projects';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Feedback from colleagues and collaborators
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 hover:glow-primary"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden gradient-border p-0.5 shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover bg-muted"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-1 -left-2 w-7 h-7 text-primary/20" />
                <p className="text-muted-foreground ps-6">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
