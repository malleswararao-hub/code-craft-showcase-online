
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/50 to-slate-900"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">Duggineni Malleswararao</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
            Java Fullstack Developer
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Crafting robust, scalable applications with modern Java technologies and cutting-edge frontend frameworks
          </p>
          <div className="text-lg text-teal-400 mb-8">
            1+ Years of Professional Experience
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
          <Button variant="outline" size="lg" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition-all duration-300">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-slate-900 transition-all duration-300" onClick={() => scrollToSection('contact')}>
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </div>

        <Button 
          variant="ghost" 
          size="lg" 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-slate-400 hover:text-teal-400 transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </Button>
      </div>
    </section>
  );
};
