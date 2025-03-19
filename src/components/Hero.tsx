
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse-soft" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div 
            className={`mb-6 overflow-hidden transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100" : "opacity-0 transform translate-y-10"
            }`}
          >
            <img 
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fthehungryjpeg.com%2Fproduct%2F3656557-monogram-dp-logo-design&psig=AOvVaw1nYATPoot2NWCmAoeij1Tj&ust=1742444547934000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiBsf6llYwDFQAAAAAdAAAAABAJ" 
              alt="Dixant Pankhaniya" 
              className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-xl"
            />
          </div>
          
          <h1 
            className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100" : "opacity-0 transform translate-y-10"
            }`}
          >
            Dixant Pankhaniya
          </h1>
          
          <div 
            className={`mt-4 text-xl text-muted-foreground transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100" : "opacity-0 transform translate-y-10"
            }`}
          >
            <span className="text-primary font-medium">Web Developer</span> crafting engaging digital experiences
          </div>
          
          <div 
            className={`mt-8 max-w-md text-center text-muted-foreground transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <p>Passionate about creating innovative web solutions with clean code and modern design principles.</p>
          </div>
          
          <div 
            className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${
              isLoaded ? "opacity-100" : "opacity-0 transform translate-y-10"
            }`}
          >
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-background shadow-md hover:shadow-lg transition-all duration-300 animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
}
