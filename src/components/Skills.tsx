
import { useEffect } from 'react';
import { Code2, Figma, Database, PanelsTopLeft, Smartphone, Globe, Clock, BookOpen } from 'lucide-react';

export function Skills() {
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

  const skills = [
    {
      title: "Web Development",
      icon: <Code2 className="h-8 w-8 text-primary" />,
      description: "HTML, CSS, JavaScript, PHP, Java",
    },
    {
      title: "Frameworks",
      icon: <PanelsTopLeft className="h-8 w-8 text-primary" />,
      description: "Bootstrap, Angular JS, Grid Systems",
    },
    {
      title: "UI/UX Design",
      icon: <Figma className="h-8 w-8 text-primary" />,
      description: "Figma, User Interface Design",
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      description: "MySQL, Xampp",
    },
    {
      title: "Responsive Design",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      description: "Mobile-first, Cross-browser compatibility",
    },
    {
      title: "Languages",
      icon: <Globe className="h-8 w-8 text-primary" />,
      description: "Gujarati, Hindi, English",
    },
    {
      title: "Project Management",
      icon: <Clock className="h-8 w-8 text-primary" />,
      description: "Task management, Deadlines, Team coordination",
    },
    {
      title: "Continuous Learning",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      description: "Staying current with web technologies",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold reveal">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-primary rounded-full mx-auto reveal"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto reveal">
            My technical toolkit includes a variety of technologies and methodologies that I've mastered to create outstanding web experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 reveal"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="mb-4 rounded-full bg-background/50 dark:bg-background/10 w-16 h-16 flex items-center justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
