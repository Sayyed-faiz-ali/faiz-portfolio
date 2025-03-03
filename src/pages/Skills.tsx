
import { SkillSet } from "@/components/SkillSet";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Education } from "@/components/Education";

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 mb-10 text-center">
        
        </div>
        <SkillSet />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
