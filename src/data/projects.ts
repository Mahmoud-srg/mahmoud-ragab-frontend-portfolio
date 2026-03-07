export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo: string;
  github: string;
  category: "react" | "javascript" | "bootstrap" | "all";
}

import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';
import project4 from '@/assets/project-4.png';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

export const projects: Project[] = [
  {
    id: 1,
    title: "AEVOLUC company website",
    description: "Modern company website with a clean UI and responsive design. Built to present services clearly and professionally.",
    image: project1,
    technologies: ["JavaScript", "Animations", "React", "TailwindCSS", "Next.js", "Aos", "Next-intl"],
    liveDemo: "https://aec-project-two.vercel.app/en",
    github: "",
    category: "react",
  },
  {
    id: 2,
    title: "Auit company website",
    description: "Modern company website designed with clean structure and responsive layout. Focused on providing a smooth user experience.",
    image: project2,
    technologies: ["JavaScript", "Animations", "React", "TailwindCSS", "Next.js", "Aos"],
    liveDemo: "https://auit-chi.vercel.app/",
    github: "",
    category: "react",
  },
  {
    id: 3,
    title: "Umaps company website",
    description: "A modern company website built with React, featuring a clean UI, responsive design. sections for services and company information.",
    image: project3,
    technologies: ["JavaScript", "Animations", "React", "TailwindCSS", "Next.js", "Aos", "Next-intl"],
    liveDemo: "https://umaps-vert.vercel.app/ar",
    github: "",
    category: "react",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Portfolio website built with React, featuring a clean UI, responsive design. sections for services and company information.",
    image: project4,
    technologies: ["React", "TypeScript", "TailwindCSS", "Responsive Design",],
    liveDemo: "https://example.com",
    github: "https://github.com/Mahmoud-srg/mahmoud-ragab-frontend-portfolio.git",
    category: "react",
  },
];

export const skills = [
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "TailwindCSS", icon: "tailwind" },
  { name: "Git & GitHub", icon: "git" },
  { name: "API Integration", icon: "api" },
  { name: "Responsive Design", icon: "responsive" },
  { name: "UI/UX Basics", icon: "design" },
  { name: "Problem Solving", icon: "puzzle" },
];

export const experiences = [
  {
    id: 1,
    title: "Front-End Developer",
    company: "Unimark",
    period: "2025 - Present",
    description: "Building modern web applications with React & Next.js, handling API integrations, and creating responsive user interfaces.",
    type: "work",
  },
  {
    id: 2,
    title: "Front-End Developer",
    company: "TSG Group",
    period: "2024 - 2025",
    description: "Building modern web applications with HTML, CSS, JavaScript, React & Next.js, handling API integrations, and creating responsive user interfaces.",
    type: "work",
  },
  {
    id: 3,
    title: "ITI Front-End Track",
    company: "Information Technology Institute",
    period: "4 Months Intensive",
    description: "Comprehensive training in modern front-end technologies, best practices, and real-world project development.",
    type: "education",
  },
  {
    id: 4,
    title: "Bachelor's Degree",
    company: "Faculty of Computers & AI",
    period: "Graduated 2022",
    description: "Computer Science degree with Very Good grade. Focused on programming, algorithms, and software engineering.",
    type: "education",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Project Manager",
    content: "Mahmoud delivered exceptional work on our e-commerce project. His attention to detail and clean code practices are impressive.",
    avatar: "/user.png",
  },
  {
    id: 2,
    name: "Sara Mohamed",
    role: "UI/UX Designer",
    content: "Great collaboration experience! Mahmoud perfectly translated my designs into responsive, pixel-perfect interfaces.",
    avatar: "/user.png",
  },
  {
    id: 3,
    name: "Omar Khaled",
    role: "Senior Developer",
    content: "A dedicated developer who's always eager to learn. His problem-solving skills and work ethic are commendable.",
    avatar: "/user.png",
  },
];

export const socialLinks = {
  github: "https://github.com/Mahmoud-srg",
  linkedin: "https://www.linkedin.com/in/mahmooudsrg/",
  email: "mahmooudsrg2020@gmail.com",
  whatsapp: "https://wa.me/201119006841?text=Hello%20Mahmoud%20%F0%9F%91%8B%0AI%E2%80%99d%20love%20to%20connect%20regarding%20a%20potential%20opportunity.%0A%0A%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D9%85%D8%AD%D9%85%D9%88%D8%AF%20%F0%9F%91%8B%0A%D8%AD%D8%A7%D8%A8%D8%A8%20%D8%A3%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%83%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D9%81%D8%B1%D8%B5%D8%A9%20%D8%B9%D9%85%D9%84%20%D9%85%D8%AD%D8%AA%D9%85%D9%84%D8%A9.",
};
