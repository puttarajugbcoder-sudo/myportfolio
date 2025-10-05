import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Smartphone } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with React.js and modern CSS frameworks.",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust APIs and server-side applications with Node.js and Express.js.",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries with MongoDB.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Developing mobile-responsive applications that work seamlessly across all devices.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in the MERN stack. I love solving complex problems and
            building applications that make a difference in people's lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            With a strong foundation in computer science and years of hands-on experience, I specialize in creating
            full-stack web applications that are not only functional but also scalable and maintainable. I'm constantly
            learning new technologies and best practices to stay at the forefront of web development.
          </p>
        </div>
      </div>
    </section>
  )
}
