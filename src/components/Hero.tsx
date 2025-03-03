
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, { threshold: 0.1 });
    
    const children = heroRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => {
        observer.observe(child);
      });
    }
    
    return () => {
      if (children) {
        Array.from(children).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div ref={heroRef} className="container mx-auto px-4 md:px-6">
        <div className="opacity-0 translate-y-10 transition-all duration-700 delay-100">
          <p className="text-sm md:text-base uppercase tracking-wider mb-4">Welcome to my portfolio</p>
        </div>
        
        <h1 className="opacity-0 translate-y-10 transition-all duration-700 delay-200 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 max-w-4xl">
          Creating meaningful digital experiences through design.
        </h1>
        
        <p className="opacity-0 translate-y-10 transition-all duration-700 delay-300 text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
          I'm a digital designer and developer focused on creating intuitive, user-centered experiences that blend form and function seamlessly.
        </p>
        
        <div className="opacity-0 translate-y-10 transition-all duration-700 delay-400 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all duration-300 hover:opacity-90 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-medium transition-all duration-300 hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
