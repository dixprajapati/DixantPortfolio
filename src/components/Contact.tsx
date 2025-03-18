
import { useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
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

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, url: "https://github.com/", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com/", label: "Twitter" },
    { icon: <Facebook className="h-5 w-5" />, url: "https://facebook.com/", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com/", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold reveal">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 bg-primary rounded-full mx-auto reveal"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto reveal">
            Feel free to reach out for collaborations, questions, or just to say hello.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 reveal">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:dixantprajapati1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    dixantprajapati1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:9723731381" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9723731381
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <address className="text-muted-foreground not-italic">
                    Madhav flour mill, gopalpara, nanavav, porbandar
                  </address>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground border border-border hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 lg:p-8 reveal">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full sm:w-auto"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
