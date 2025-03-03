
import { useRef, useEffect } from "react";
import { Code, Layout, Smartphone, Database } from "lucide-react";

export const SkillSet = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
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

  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="h-12 w-12 text-primary" />,
      skills: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Redux"]
    },
    {
      category: "Backend Development",
      icon: <Database className="h-12 w-12 text-primary" />,
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API", "GraphQL", "Firebase"]
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Mobile UI/UX"]
    },
    {
      category: "Programming Languages",
      icon: <Code className="h-12 w-12 text-primary" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "PHP", "Go"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={(el) => (sectionsRef.current[0] = el)} 
          className="opacity-0 translate-y-10 transition-all duration-700 delay-100 mb-16 text-center"
        >
          <p className="text-sm md:text-base uppercase tracking-wider mb-4 text-muted-foreground">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              ref={(el) => (sectionsRef.current[index + 1] = el)}
              className="opacity-0 translate-y-10 transition-all duration-700 bg-background rounded-lg p-6 shadow-sm border border-border"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-medium">{skillGroup.category}</h3>
              </div>
              
              <div className="space-y-3">
                {skillGroup.skills.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                      ></div>
                    </div>
                    <span className="ml-3 text-sm whitespace-nowrap">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
