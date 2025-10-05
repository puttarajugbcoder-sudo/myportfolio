"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import '../styles/styles.css'

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 mt-10 myimage">
          <img
            // src="/professional-developer-headshot.png"
            src="/puttu.png"
            alt="Professional headshot"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-primary/20"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
          Full Stack Developer
          <span className="block text-primary">MERN Stack Specialist</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating scalable web applications using MongoDB, Express.js, React.js, and Node.js. I
          transform ideas into powerful digital solutions with clean, efficient code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6  mb-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/puttarajugbcoder-sudo"
                  // href="https://mail.google.com/mail/?view=cm&fs=1&to=puttarajugbcoder@gmail.com&su=Inquiry%20from%20Portfolio&body=Hi%20Puttaraju%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm" className="p-2">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Github</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/puttaraju-g-b-4b6877227/"
                  // href="https://mail.google.com/mail/?view=cm&fs=1&to=puttarajugbcoder@gmail.com&su=Inquiry%20from%20Portfolio&body=Hi%20Puttaraju%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm" className="p-2">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=puttarajugbcoder@gmail.com&su=Inquiry."
                  // href="https://mail.google.com/mail/?view=cm&fs=1&to=puttarajugbcoder@gmail.com&su=Inquiry%20from%20Portfolio&body=Hi%20Puttaraju%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm" className="p-2">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Send me an email</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

        </div>
      </div>
    </section>
  )
}
