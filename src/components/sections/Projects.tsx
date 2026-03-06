import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'React', value: 'react' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Bootstrap', value: 'bootstrap' },
];

export const Projects = () => {
  // const [activeFilter, setActiveFilter] = useState('all');

  // const filteredProjects = projects.filter(
  //   (project) => activeFilter === 'all' || project.category === activeFilter
  // );

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of my recent work and side projects
          </p>
        </div>

        {/* Filter Buttons */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                  : 'glass-card hover:scale-105'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick Actions Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-foreground text-background hover:scale-110 transition-transform"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-display mb-2 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Live Demo
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      Source Code
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-12">
          <a
            href="https://github.com/Mahmoud-srg"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary min-w-[180px]"
          >
            View GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmooudsrg/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary min-w-[180px]"
          >
            View Linkedin
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
