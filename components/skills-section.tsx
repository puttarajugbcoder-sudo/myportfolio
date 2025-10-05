import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 70 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Next.js", level: 70 },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "RESTful APIs", level: 90 },
        // { name: "GraphQL", level: 70 },
        { name: "JWT Authentication", level: 85 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        // { name: "AWS/Cloud Services", level: 70 },
        // { name: "Jest/Testing", level: 80 },
        // { name: "Webpack/Vite", level: 75 },
        // { name: "Agile/Scrum", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
