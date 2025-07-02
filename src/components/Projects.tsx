
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Spring Boot and React. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "Stripe API"],
      githubUrl: "#",
      liveUrl: "#",
      gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, user roles, and project tracking capabilities.",
      technologies: ["Java", "Spring Security", "Angular", "PostgreSQL", "WebSocket"],
      githubUrl: "#",
      liveUrl: "#",
      gradient: "from-teal-600/20 to-green-600/20"
    },
    {
      title: "Inventory Management API",
      description: "RESTful API for inventory management with advanced filtering, reporting, and automated stock alerts.",
      technologies: ["Java", "Spring Boot", "JPA", "Redis", "Swagger"],
      githubUrl: "#",
      liveUrl: "#",
      gradient: "from-orange-600/20 to-red-600/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-gradient-to-br ${project.gradient} border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105`}>
              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs bg-slate-700/50 text-slate-300 border-slate-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
