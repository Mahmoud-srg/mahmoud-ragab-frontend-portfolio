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
  { name: 'Contact', href: '#contact' },
  { name: 'Testimonials', href: '#testimonials' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card py-3 max-w-[90%] md:max-w-[99%] lg:max-w-[90%] xl:max-w-[85%] mx-auto rounded-3xl md:rounded-full top-2"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          
          <a href="#home" className="text-2xl font-bold font-display gradient-text">
            MR<span className="text-foreground">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link text-sm font-medium">
                {link.name}
              </a>
            ))}
          </div>

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

    {/* Mobile Navigation OUTSIDE NAV */}
    {isOpen && (
      <div
        className={`md:hidden fixed left-0 right-0 z-40 mt-2 top-[80px] ${
          scrolled
            ? "max-w-[90%] mx-auto"
            : ""
        }`}
      >
        <div className="glass-card rounded-2xl py-4 animate-fade-in">
          <div className="flex flex-col gap-2 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 px-4 rounded-xl hover:bg-muted transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

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
