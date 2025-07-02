
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "JPA", "Maven", "Gradle"],
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30"
    },
    {
      title: "Frontend Technologies",
      skills: ["React", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "bg-teal-500/20 text-teal-400 border-teal-500/30"
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "H2"],
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Jenkins", "AWS", "IntelliJ IDEA", "VSCode", "Postman", "Swagger"],
      color: "bg-orange-500/20 text-orange-400 border-orange-500/30"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className={`${category.color} hover:scale-105 transition-transform duration-200 text-sm py-1 px-3`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
