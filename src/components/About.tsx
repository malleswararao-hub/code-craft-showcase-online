
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Server } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 mb-12">
            <CardContent className="p-8">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a passionate Java Fullstack Developer with over a year of hands-on experience in building 
                end-to-end web applications. My journey in software development has equipped me with a strong 
                foundation in both backend and frontend technologies.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in creating scalable, maintainable applications using modern Java frameworks 
                and cutting-edge frontend technologies. I'm always eager to learn new technologies and 
                tackle challenging problems that push the boundaries of what's possible.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border-emerald-600/50 hover:scale-105 hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20">
              <CardContent className="p-6 text-center">
                <Server className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-emerald-300">Backend Development</h3>
                <p className="text-slate-300">Robust server-side applications with Java, Spring Boot, and microservices architecture</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 border-violet-600/50 hover:scale-105 hover:border-violet-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/20">
              <CardContent className="p-6 text-center">
                <Code className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-violet-300">Frontend Development</h3>
                <p className="text-slate-300">Modern, responsive user interfaces using React, Angular, and modern CSS frameworks</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 border-amber-600/50 hover:scale-105 hover:border-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/20">
              <CardContent className="p-6 text-center">
                <Database className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-amber-300">Database Management</h3>
                <p className="text-slate-300">Efficient data modeling and optimization with SQL and NoSQL databases</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
