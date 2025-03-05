
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
                style={{}}
              ></div>
            </div>
          </div>
          
          <div 
            ref={(el) => (sectionsRef.current[2] = el)} 
            className="opacity-0 translate-y-10 transition-all duration-700 delay-300 space-y-6"
          >
            <h3 className="text-2xl font-semibold">Hi, I'm Faiz Ali</h3>
            <p className="text-muted-foreground">
            Hey there! I'm  Faiz ALi, a passionate full stack developer specializing in MERN and Python.skilled in front-end and back-end technologies with a proven track record in building scalable, user-centric applications. Experienced in the MERN stack, API integrations, and responsive design. Adept at delivering innovative solutions that meet business objectives while ensuring high-quality user experiences            </p>
            <p className="text-muted-foreground">
            </p>
            <div className="pt-4">
              <h4 className="font-medium mb-4">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["UI/UX Design", "Frontend Development", "Backend-end"].map((skill) => (
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
