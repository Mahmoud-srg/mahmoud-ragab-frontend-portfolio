import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";

import { socialLinks } from '@/data/projects';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Mahmoud Serag. Made with</span>
            <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-red-500 fill-red-500" />
            <span>in Egypt</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className='w-5 h-5' />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className='w-5 h-5' />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} className='w-5 h-5' />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
