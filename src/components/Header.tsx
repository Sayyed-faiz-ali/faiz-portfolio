
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = ["Home", "Projects", "About", "Skills","Services","Contact"];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-monoS font-medium transition-opacity hover:opacity-80 text-[#F97316]">
            Faiz Ali
          </Link>
          
          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-8 mr-4">
              {menuItems.map((item) => (
                item === "Home" ? (
                  <Link 
                    key={item} 
                    to="/"
                    className="relative text-sm tracking-wide transition-colors hover:text-[#F97316] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#F97316] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </Link>
                ) : item === "Skills" ? (
                  <Link 
                    key={item} 
                    to="/skills"
                    className="relative text-sm tracking-wide transition-colors hover:text-[#F97316] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#F97316] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </Link>
                  
                ) : (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="relative text-sm tracking-wide transition-colors hover:text-[#F97316] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#F97316] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                )
              ))}
            </nav>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            
            <button 
              className="block md:hidden ml-2" 
              aria-label="Menu"
              onClick={toggleMobileMenu}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md p-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                item === "Home" ? (
                  <Link 
                    key={item} 
                    to="/"
                    className="text-sm py-2 tracking-wide transition-colors hover:text-[#F97316]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ) : item === "Skills" ? (
                  <Link 
                    key={item} 
                    to="/skills"
                    className="text-sm py-2 tracking-wide transition-colors hover:text-[#F97316]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ) : (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="text-sm py-2 tracking-wide transition-colors hover:text-[#F97316]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              ))}
              <div className="flex items-center space-x-2 py-2">
                <span className="text-sm">Toggle theme:</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleTheme}
                  className="rounded-full"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
