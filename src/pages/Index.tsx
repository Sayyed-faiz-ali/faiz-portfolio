
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectToggle from "@/components/ProjectToggle";
import ProjectCard from "@/components/ProjectCard";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Project } from "@/components/ProjectCard";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Quiz Website",
    description: "A clean, minimalist e-commerce experience focused on product presentation.",
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    link: "",
  },
  {
    id: 2,
    title: "Student Management System",
    description: "Mobile application for tracking wellness metrics and daily habits.",
    category: "Mobile Apps",
    imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "Modern Banking",
    description: "Digital banking platform with intuitive financial management tools.",
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "Artisan Coffee Brand",
    description: "Complete branding for an artisanal coffee roasting company.",
    category: "Branding",
    imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    link: "#",
  },
  {
    id: 5,
    title: "Travel Companion",
    description: "Mobile app for planning trips and discovering local experiences.",
    category: "Mobile Apps",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
  {
    id: 6,
    title: "Sustainable Fashion",
    description: "Brand identity for an eco-conscious clothing manufacturer.",
    category: "Branding",
    imageUrl: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
];

const Index = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [currentCategory, setCurrentCategory] = useState<"All" | "Web Design" | "Mobile Apps" | "Branding">("All");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleCategoryChange = (category: "All" | "Web Design" | "Mobile Apps" | "Branding") => {
    setCurrentCategory(category);
    
    if (category === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter((project) => project.category === category));
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
          <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      
      <section id="projects" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center animate-fade-in">
            <p className="text-sm md:text-base uppercase tracking-wider mb-4 text-muted-foreground">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold">Selected Works</h2>
          </div>
          
          <ProjectToggle onCategoryChange={handleCategoryChange} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
