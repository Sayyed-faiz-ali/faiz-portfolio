
import { useRef, useEffect } from "react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, { threshold: 0.1 });
    
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-32" ref={aboutRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={(el) => (sectionsRef.current[0] = el)} 
          className="opacity-0 translate-y-10 transition-all duration-700 delay-100 mb-12 text-center"
        >
          <p className="text-sm md:text-base uppercase tracking-wider mb-4 text-muted-foreground">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold">The story behind the work</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={(el) => (sectionsRef.current[1] = el)} 
            className="opacity-0 translate-y-10 transition-all duration-700 delay-200"
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')" }}
              ></div>
            </div>
          </div>
          
          <div 
            ref={(el) => (sectionsRef.current[2] = el)} 
            className="opacity-0 translate-y-10 transition-all duration-700 delay-300 space-y-6"
          >
            <h3 className="text-2xl font-semibold">Hi, I'm Alex</h3>
            <p className="text-muted-foreground">
              I'm a designer and developer with over 5 years of experience creating digital products that people love to use. I focus on building intuitive interfaces that blend form and function seamlessly.
            </p>
            <p className="text-muted-foreground">
              My approach is centered around understanding user needs and business goals to create meaningful solutions that make a difference. I believe that great design is invisible, and that the best interfaces feel natural and intuitive.
            </p>
            <div className="pt-4">
              <h4 className="font-medium mb-4">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["UI/UX Design", "Frontend Development", "Visual Design", "Prototyping", "User Research", "Interaction Design"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
