import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Product Developer",
      company: "Camp Automation",
      location: "Bengaluru,Karnataka",
      period: "10/2024 - Present",
      description:
        "Lead development of scalable web applications using MERN stack. Camp Automation is a product-based company where this company is developing a new product, their own marketing tools with AI features.",
      achievements: [
        "Leading the development of a new product from design to deployment.",
        "Built and deployed a website for Eicher with optimized design and performance.",
        "Developed 70% of the application’s UI and 30% of backend logic for seamless functionality.",
      ],
      technologies: ["React.js", "Node.js","MongoDB","Express","Nextjs","HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Junior Software Developer",
      company: "Jayblues Technology",
      location: "Mysuru,Karnataka",
      period: "08/2023 - 10/2024",
      description:
        "Started my professional journey building responsive websites and learning full-stack development. Gained experience in agile development methodologies and client communication.",
      achievements: [
        "Built 10+ responsive websites from scratch",
        "Developed software applications with MERN, CodeIgniter 4 frameworks.",
        " Developed more logic that reduces the code complexity, which helped the project move forward, and speed up the project.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js","Bootstrap","MongoDB","Express","Php"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            My professional journey and the impact I've made at various organizations.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{experience.company}</CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
