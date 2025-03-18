
import { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const projects = [
    {
      title: "Blog Management System",
      description: "Developed a WordPress-based blog management system with custom themes and plugins for improved user experience.",
      tags: ["WordPress", "PHP", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "College Library Management",
      description: "Created a system to streamline library operations, including book cataloging, borrowing, and returns.",
      tags: ["Database Design", "UI/UX", "System Architecture"],
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2076&auto=format&fit=crop",
    },
    {
      title: "Personal Portfolio",
      description: "Designed and developed a responsive personal portfolio website showcasing skills and projects.",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold reveal">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-primary rounded-full mx-auto reveal"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto reveal">
            Here are some of the projects I've worked on, showcasing my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 group hover:shadow-xl reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                    aria-label="View live project"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                    aria-label="View source code"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
