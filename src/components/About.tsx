import { useEffect, useRef } from 'react';
export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  return <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold reveal">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-primary rounded-full mx-auto reveal"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3"></div>
              <img src="/lovable-uploads/WhatsApp%20Image%202025-03-20%20at%2009.21.55_7cb69fe5.jpg" alt="Dixant Pankhaniya" className="relative rounded-2xl w-full object-cover shadow-lg z-10" />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 reveal">Web Developer</h3>
            <p className="text-muted-foreground mb-4 reveal">
              With experience at Green Taurus Technology, I specialize in designing engaging blog post sites and enhancing database functionality. Proficient in HTML, CSS, and JavaScript, I excel in UI/UX design using Figma.
            </p>
            <p className="text-muted-foreground mb-6 reveal">
              I'm a strong communicator who enjoys collaborating with teams to deliver innovative solutions that meet project goals.
            </p>
            
            <div className="grid grid-cols-2 gap-4 reveal">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span><strong>Name:</strong> Dixant Pankhaniya</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span><strong>Email:</strong> dixantprajapati1@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span><strong>Phone:</strong> 9723731381</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-muted-foreground not-italic"><strong>Location:</strong> Madhav flour mill, gopalpara, ranavav, porbandar</span>
              </div>
            </div>
            
            <div className="mt-8 reveal">
              <a href="#contact" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
