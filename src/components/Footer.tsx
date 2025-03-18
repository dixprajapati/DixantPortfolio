
import { Heart } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Dixant's Portfolio</span>
            <ThemeToggle />
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Dixant Pankhaniya. All rights reserved.</span>
          </div>
          
          <div className="flex gap-4 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
