import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      const scrollPos = window.scrollY + 100;

      let current = sections[0]?.id;

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
          ${scrolled
            ? "glass-card py-3 w-[90%] md:w-[95%] lg:w-[90%] mx-auto rounded-3xl md:rounded-full top-2"
            : "py-5 bg-transparent w-full"
          }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">

            <a href="#home" className="text-2xl font-bold font-display gradient-text">
              MR<span className="text-foreground">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center md:gap-4 lg:gap-8">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`nav-link text-sm font-medium transition-colors ${activeSection === sectionId
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground"
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center md:gap-2 lg:gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl hover:bg-muted transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <a
                href="/Mahmoud-Serag_Frontend.pdf"
                download
                className="btn-primary text-sm"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Mobile Buttons */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl hover:bg-muted transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl hover:bg-muted transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className={`md:hidden fixed left-0 right-0 z-40 mt-2 top-[80px] ${scrolled ? "w-[90%] mx-auto" : "w-full"
            }`}
        >
          <div className="glass-card rounded-2xl py-4 animate-fade-in">
            <div className="flex flex-col gap-2 px-4">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`py-3 px-4 rounded-xl hover:bg-muted transition-colors font-medium ${activeSection === sectionId
                        ? "text-primary"
                        : "text-muted-foreground"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}

              <a
                href="/Mahmoud-Serag_Frontend.pdf"
                download
                className="btn-primary text-sm mt-2 justify-center"
                onClick={() => setIsOpen(false)}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};