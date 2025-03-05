
import { useState, useRef, useEffect } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl:string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, { threshold: 0.1 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`opacity-0 translate-y-10 transition-all duration-700 delay-${index * 100} group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full overflow-hidden rounded-lg"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm flex items-end p-6 transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/70 mb-2">
                {project.category}
              </p>
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-white/80">
                {project.description}
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-1">
            {project.category}
          </p>
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
