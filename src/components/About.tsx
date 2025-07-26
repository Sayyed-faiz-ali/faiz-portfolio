
import { useRef, useEffect } from "react";
// import Icon from "../../public/s.jpeg";

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
      className="w-full h-full bg-cover bg-center rounded-full"
      style={{ backgroundImage: `url(data:image/png;base64,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)` }} // Set the background image properly
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
