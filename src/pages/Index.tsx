import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectToggle from "@/components/ProjectToggle";
import ProjectCard from "@/components/ProjectCard";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Project } from "@/components/ProjectCard";
import Logo from "../../public/quiz.png";
import Student from "../../public/su.png";
import shop from "../../public/s1.png";
import task from "../../public/a.png";
import Skill from "@/components/SkillSet";
import Services from "@/components/services"

const projectsData: Project[] = [
  {
    id: 1,
    title: "Quiz Website",
    description: "I developed and designed a website using HTML, CSS, and JavaScript, hosted on Netlify.",
    category: "Web Design",
    imageUrl: Logo,
    link: "https://quizms.netlify.app/",
  },
  {
    id: 2,
    title: "Student Management System",
    description: "A student management system build my using pyhon and sql. python can be used to desin a interactive UI and sql can be used in backend",
    category: "Programming",
    imageUrl: Student,
    link: "#",
  },
  {
    id: 3,
    title: "ShopZone",
    description: "A modern e-commerce web application built using Node.js, Express.js, and MongoDB.",
    category: "Web Design",
    imageUrl: shop,
    link: "https://szone.onrender.com",
  },
  {
    id: 4,
    title: "Task Manager App",
    description:"I create a task manager website using express , nodejs and tailwind Css with the help of this languages to create ui and back-end.",
    category: "Web Design",
    imageUrl:task,

    link: "https://todo-github-io-1-zfyw.onrender.com/",
  },
];

const Index = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [currentCategory, setCurrentCategory] = useState<"All" | "Web Design" | "Programming">("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (category: "All" | "Web Design" | "Programming") => {
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
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <About />
      <Services/>
      <Skill/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
