
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Java Fullstack Developer</CardTitle>
              <div className="flex flex-wrap gap-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>2023 - Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Your Company Name</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed and maintained full-stack web applications using Java Spring Boot and React, serving over 10,000 active users</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implemented RESTful APIs and microservices architecture, improving system performance by 40%</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborated with cross-functional teams to deliver high-quality software solutions on time</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Optimized database queries and implemented caching strategies, reducing response time by 35%</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Participated in code reviews and mentored junior developers on best practices</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
