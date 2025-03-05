
import { useRef, useEffect } from "react";
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";

export const Education = () => {
  const educationRef = useRef<HTMLDivElement>(null);
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

  const education = [
    {
      degree: "Bachelor of Technology",
      
institution: "Allenhouse Institute of Technology",
      period: "2021 - 2025",
      location: "Kanpur, India",
      description: "Specialized in Artificial Intelligence and Machine Learning."
    },
    {
      degree: "Central Board of Secondary School",
      institution: "Oxford Model Senior Secondary School",
      period: "2019 - 2020",
      location: "Kanpur, India",
      description: 
"High School"
    },
    {
      degree: "Central Board of Secondary School",
      institution: "Oxford Model Senior Secondary School",
      period: "2020 - 2021",
      location: "Kanpur, India",
      description: 
"Intermidiate" }

  ];

  return (
    <section id="education" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={(el) => (sectionsRef.current[0] = el)} 
          className="opacity-0 translate-y-10 transition-all duration-700 delay-100 mb-16 text-center"
        >
          <p className="text-sm md:text-base uppercase tracking-wider mb-4 text-muted-foreground">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education & Certifications</h2>
        </div>
        
        <div className="space-y-12 max-w-3xl mx-auto">
          {education.map((item, index) => (
            <div 
              key={index}
              ref={(el) => (sectionsRef.current[index + 1] = el)}
              className="opacity-0 translate-y-10 transition-all duration-700 relative pl-10 md:pl-0"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Line connector on larger screens */}
              <div className="hidden md:block absolute left-[calc(50%-1px)] top-0 w-0.5 h-full bg-border -z-10"></div>
              
              {/* Timeline item */}
              <div className="md:flex">
                {/* Left side on larger screens */}
                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
                
                {/* Center icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                
                {/* Right side on larger screens, full content on mobile */}
                <div className="md:w-1/2 md:pl-12">
                  <div className="md:hidden">
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                    <p className="text-muted-foreground">{item.institution}</p>
                  </div>
                  
                  <div className="mt-2 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span className="text-sm">{item.period}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
