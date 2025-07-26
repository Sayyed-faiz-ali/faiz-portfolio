
import { useEffect, useRef } from "react";
import pdf from "../../public/Faiz _Ali_resume.pdf";
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
  <div ref={heroRef} className="container mx-auto px-4 md:px-6 h-screen flex flex-col items-center justify-center text-center">
    
    {/* Welcome Message */}
    <div className="opacity-0 translate-y-10 transition-all duration-700 delay-100">
      <p className="text-sm md:text-base uppercase tracking-wider mb-4 text-muted-foreground">
        Welcome to my portfolio
      </p>
    </div>

    {/* Main Heading */}
    <h1 className="opacity-0 translate-y-10 transition-all duration-700 delay-200 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
      Hi, I'm <span className="text-orange-500 mx-2">Faiz Ali</span>
    </h1>

    {/* Subheading */}
    <p className="opacity-0 translate-y-10 transition-all duration-700 delay-300 text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
      Crafting beautiful and functional websites with attention to detail and user experience
    </p>

    {/* Buttons */}
    <div className="opacity-0  translate-y-10 transition-all duration-700 delay-400 flex  items-center gap-4 sm:flex-row sm:gap-6 sm:items-center">
  <a 
    href="#projects"
    className="px-6  py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all duration-300 hover:opacity-90 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto text-base sm:text-lg md:text-xl"
  >
    View Projects
  </a>
 <a
  href={pdf}
  download="Faiz _Ali_resume.pdf"
  className="px-6 py-3 rounded-md bg-blue-500 text-white font-medium transition-all duration-300 hover:opacity-90 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto text-base sm:text-lg md:text-xl"
>
  Download Resume
</a>

</div>






    
  </div>
</section>

  );
};

export default Hero;
