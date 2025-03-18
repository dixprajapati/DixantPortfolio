
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full w-10 h-10 transition-all duration-300 hover:bg-accent/10"
    >
      <Sun className={`h-[1.5rem] w-[1.5rem] transition-all duration-500 rotate-0 scale-100 ${theme === 'dark' ? 'opacity-0 scale-0 rotate-90' : 'opacity-100'}`} />
      <Moon className={`absolute h-[1.5rem] w-[1.5rem] transition-all duration-500 rotate-90 ${theme === 'dark' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
