import { useState } from 'react';
import { Send, Mail, Github, Linkedin, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { socialLinks } from '@/data/projects';
import { toast } from 'react-toastify';
import emailjs from "@emailjs/browser";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      "service_gzal5ch",
      "template_bocb6ot",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      "wrmyXoufurTlhQBRF"
    )
      .then(() => {
        toast.success("Message Sent! 🎉 Thanks for reaching out.", {
          position: 'top-center',
        });
        setFormData({
          name: "",
          email: "",
          message: ""
        });

        setIsSubmitting(false);
      })
      .catch(() => {
        toast.error("Message Failed! ❌ Something went wrong. Please try again later!", {
          position: 'top-center',
        });
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: socialLinks.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'See GitHub',
      href: socialLinks.github,
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: socialLinks.whatsapp,
    },
  ];


  return (
    <section id="contact" className="section-padding relative bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16" data-aos="zoom-in-down">
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="100">
            <div>
              <h3 className="text-2xl font-bold font-display mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new opportunities, creative ideas,
                or ways to be part of your vision. Feel free to reach out through
                any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-sm sm:text-base">{item.value}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Based in Egypt, open to remote work</span>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-xl font-bold font-display mb-6">
              Send a Message
            </h3>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  placeholder="Ahmed moustafa"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  placeholder="Ahmed@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field resize-none"
                  placeholder="Tell me about your project or what you want to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
