import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Medusys",
      description:
        "Developed a responsive medical healthcare website and web application to streamline hospital operations.Focused on improving patient management, appointment scheduling, and data accessibility.Built with modern web technologies ensuring security, scalability, and user-friendly design.",
      image: "/medusys.jpg",
    },
    {
      title: "Bindhu Tours and Travels",
      description:
      "Designed and developed a dynamic travel website showcasing tour packages and booking options.Enhanced user experience with responsive layouts and intuitive navigation.Integrated features for trip inquiries, customer engagement, and destination highlights.",
    image: "/bindhutours.jpg",
    },
    {
      title: "Aswini Agrotech",
      description:
        "Developed a corporate website showcasing the company’s legacy in cocopeat substrates and plant treatment products.Highlighted the ‘AWIN’ brand and its manufacturing presence across Karnataka and Tamil Nadu.Focused on creating a professional, informative, and visually engaging online presence.",
      image: "/ashwiniagrotech.jpg",
    },
    {
      title: "Dental Diagnostic Center",
      description:
        "Designed and developed a modern dental clinic website highlighting services and treatment options.Implemented responsive design for seamless access across mobile and desktop devices.Enhanced patient engagement with appointment booking and contact features.",
      image: "/ddc.png",
    },
    {
      title: "Eicher",
      description:
        "Developed a professional website showcasing Eicher’s products and brand presence.Focused on creating a clean, responsive, and performance-optimized user interface.Contributed to both front-end design and backend integration for smooth functionality.",
      image: "/eicher.png",
    },
    {
      title: "AidaJet",
      description:
        "Developed an AI-integrated marketing and newsletter desktop application for automated content creation.Designed an intuitive UI for managing campaigns, templates, and email distribution.Implemented smart features to enhance user productivity and marketing efficiency.",
      image: "/aida.png",
    },
    
  ]

  return (
    <section id="projects" className="py-20 px-4 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow pb-4 pt-0">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full  object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
