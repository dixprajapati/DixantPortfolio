
import { useEffect } from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export function Experience() {
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

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold reveal">Work Experience</h2>
          <div className="mt-2 h-1 w-20 bg-primary rounded-full mx-auto reveal"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto reveal">
            My professional journey includes valuable experience designing and developing web solutions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group reveal">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-primary transition-colors duration-200">
              <div className="flex items-center mb-2 sm:mb-0">
                <Briefcase className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-xl font-bold">Front-end Developer Intern</h3>
              </div>
              <div className="sm:ml-auto flex items-center">
                <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                <span className="text-sm text-muted-foreground">7/2023 - 8/2023</span>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-primary mb-4">Green Taurus Technology</h4>
            
            {/* Timeline line */}
            <div className="absolute left-0 sm:left-0 top-0 h-full w-px bg-border sm:mx-auto sm:right-0 sm:left-16"></div>
            
            {/* Timeline dot */}
            <div className="absolute left-0 sm:left-16 top-7 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-primary bg-background z-10"></div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <p>Designed and developed blog post sites using WordPress.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <p>Communicated clearly with web development teams, ascertaining daily task and completing to exact direction.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <p>Developed user-friendly and responsive website.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <p>Wrote and created codes and programmes to infuse power for databases.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
