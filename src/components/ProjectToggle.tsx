
import { useState, useRef, useEffect } from "react";

type Category = "All" | "Web Design" | "Mobile Apps" | "Branding";

interface ProjectToggleProps {
  onCategoryChange: (category: Category) => void;
}

const ProjectToggle = ({ onCategoryChange }: ProjectToggleProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const toggleRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  
  const categories: Category[] = ["All", "Web Design", "Mobile Apps", "Branding"];
  
  const updateIndicator = (category: Category) => {
    const button = itemRefs.current.get(category);
    if (!button || !toggleRef.current) return;
    
    const toggleRect = toggleRef.current.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    const left = buttonRect.left - toggleRect.left;
    const width = buttonRect.width;
    
    setIndicatorStyle({
      transform: `translateX(${left}px)`,
      width: `${width}px`,
    });
  };
  
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    onCategoryChange(category);
    updateIndicator(category);
  };
  
  useEffect(() => {
    updateIndicator(activeCategory);
    const handleResize = () => updateIndicator(activeCategory);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeCategory]);

  return (
    <div className="flex justify-center mb-12 animate-fade-in">
      <div
        ref={toggleRef}
        className="relative inline-flex bg-secondary rounded-full p-1"
      >
        {/* Active indicator */}
        <div
          className="absolute top-1 bottom-1 rounded-full bg-background shadow-sm transition-all duration-300 ease-out z-0"
          style={indicatorStyle}
        />
        
        {/* Toggle buttons */}
        {categories.map((category) => (
          <button
            key={category}
            ref={(el) => el && itemRefs.current.set(category, el)}
            onClick={() => handleCategoryChange(category)}
            className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeCategory === category 
                ? "text-foreground" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectToggle;
