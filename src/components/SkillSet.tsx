import { useRef, useEffect } from "react";

export  const SkillSet = () => {
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
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // You can replace this with a link if you have an icon URL for Layout
      skills: [
        {
          name: "React",
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
          name: "HTML",
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg'  
        },
        { 
          name: "CSS3", 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' 
        },
        { 
          name: "Tailwind CSS", 
          icon:"https://www.directorykit.xyz/tailwind-logo.png"
        },
        { 
          name: "JavaScript", 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' 
        },
      ],
    },
    {
      category: "Backend Development",
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', // You can replace this with a link for Database if you have an icon
      skills: [
        { 
          name: "Node.js", 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' 
        },
        { 
          name: "Express", 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' 
        },
        { 
          name: "MongoDB", 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' 
        },
        { 
          name: "REST API", 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' // Use a related icon for API if you have one
        },
        { 
          name: "SQL", 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' 
        },
      ],
    },
    {
      category: "Programming Languages",
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', // You can replace this with a link for Code if you have an icon
      skills: [
        { 
          name: "JavaScript", 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' 
        },
        { 
          name: "Python", 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' 
        },
        { 
          name: "C", 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' 
        },
      ],
    },
      {
        category: "Tool & Other",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', // You can replace this with a link for Code if you have an icon
        skills: [
          { 
            name: "Git", 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg' 
          },
          { 
            name: "GitHub", 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' 
          },
          { 
            name: "Jupyter Notebook", 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' 
          },
          { 
            name: "Postman", 
            icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' 
          },
        ],
        }
    
  ];
  

  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/30">
    <div className="container mx-auto px-3 md:px-6">
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="opacity-0 translate-y-10 transition-all duration-700 delay-100 mb-16 text-center"
      >
        <p className="text-sm md:text-base uppercase tracking-wider mb-4 text-muted-foreground">
          Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Professional Skills</h2>
      </div>
  
      {/* Grid Layout with responsive behavior */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skillGroup, index) => (
          <div
            key={skillGroup.category}
            ref={(el) => (sectionsRef.current[index + 1] = el)}
            className="opacity-0 translate-y-10 transition-all duration-700 bg-background rounded-lg p-6 shadow-sm border border-border flex flex-col w-full h-auto" // Flexible width and height
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="flex flex-col items-center text-center mb-3 flex-grow">
              <div className="mb-2 rounded-full bg-primary/10 p-1">
                {/* If skillGroup.icon is an image URL */}
                {typeof skillGroup.icon === 'string' ? (
                  <img src={skillGroup.icon} alt={skillGroup.category} />
                ) : (
                  skillGroup.icon
                )}
              </div>
              <h3 className="text-xl font-medium">{skillGroup.category}</h3>
            </div>
  
            <div className="space-y-2 flex-grow">
              {skillGroup.skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-center space-x-3">
                  {/* If skill.icon is an image URL */}
                  {typeof skill.icon === 'string' ? (
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                  ) : (
                    <div className="w-5 h-5">{skill.icon}</div>
                  )}
                  <span className="text-sm">{skill.name}</span>
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
export default SkillSet;
