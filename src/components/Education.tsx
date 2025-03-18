
import { useEffect } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
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

  const education = [
    {
      institution: "Government Engineering College, Dahod",
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      year: "2027",
      gpa: "Persuing sem-4",
      location: "Dahod"
    },
    {
      institution: "Government Polytechnic, Porbandar",
      degree: "Diploma",
      field: "Computer Engineering",
      year: "2024",
      gpa: "7.11",
      location: "Porbandar"
    },
    {
      institution: "Sigma Educational Network",
      degree: "Secondary Education",
      field: "",
      year: "2021",
      gpa: "81",
      location: ""
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold reveal">Education</h2>
          <div className="mt-2 h-1 w-20 bg-primary rounded-full mx-auto reveal"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto reveal">
            My academic background has equipped me with the knowledge and skills needed for software development.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 reveal"
            >
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <p className="text-primary">{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{edu.year}</span>
                  </div>
                  {edu.location && (
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {edu.gpa && (
                <div className="mt-2 flex items-center">
                  <span className="text-sm font-medium">GPA/Percentage:</span>
                  <span className="ml-2 text-sm">{edu.gpa}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
