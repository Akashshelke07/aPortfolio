import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

export function Projects() {
  const projects = [
    {
      title: "Solidity AI Backend",
      description: "A GenAI-powered, local code-generation backend specifically fine-tuned for building Solidity smart contracts. It leverages a quantized Llama-3.2-1B model and PEFT (LoRA) adapters to generate secure, production-ready smart contracts locally with low-latency and zero API costs.",
      techStack: ["FastAPI", "Uvicorn", "PyTorch", "Unsloth", "PEFT (LoRA)", "Llama-3.2", "Solidity", "Python"],
      github: "https://github.com/Akashshelke07/PromptForge"
    },
    {
      title: "FinReport Agent",
      description: "An agentic AI platform that digests raw accounting data and autonomously generates financial statements, management reports, and compliance documents using a multi-agent LangGraph workflow and RAG pipeline.",
      techStack: ["React", "Flask", "TailWind CSS", "Python", "FastAPI", "LangChain", "Google Gemini", "Pinecone", "LangGraph", "ChromaDB"],
      github: "https://github.com/Akashshelke07/finreport-agent"
    },
    {
      title: "Cloud Database-as-a-Service (DBaaS) Platform",
      description: "Cloud-native DBaaS platform for spinning up, managing, and monitoring MySQL, PostgreSQL, MongoDB, and Redis databases from the browser, featuring Prometheus/Grafana monitoring and an LLM-powered assistant.",
      techStack: ["React", "Node.js", "Docker", "PostgreSQL", "Prometheus", "Grafana", "LLM APIs"],
      github: "#"
    },
    {
      title: "SBrainiac Learning",
      description: "AI-assisted e-learning platform serving 1,000+ users with 85% course completion rate, featuring custom REST APIs, Razorpay integration, AWS S3 storage, and real-time progress tracking.",
      techStack: ["MERN Stack", "Node.js", "MongoDB", "AWS S3", "Razorpay", "Vercel", "Render"],
      liveDemo: "https://www.sbrainiaclearning.com/"
    },
    {
      title: "AI Travel Recommendation Engine",
      description: "AI-powered recommendation engine using Scikit-learn and Sentence-Transformers to personalize travel suggestions based on user mood, budget, and preferences, integrated via custom API interfaces.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Python/Flask", "Scikit-learn", "Sentence-Transformers", "NLP"],
      github: "https://github.com/Akashshelke07/AI-Traveling-Booking-Platform"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  }

  return (
    <section id="projects" className="py-20 bg-muted/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-1 w-20 bg-black mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm group hover:border-black/50 hover:shadow-xl hover:shadow-black/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-black transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <Badge key={tIdx} variant="secondary" className="bg-black/10 text-black hover:bg-black/20 font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-border/50 gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground group-hover:border-primary/50 transition-colors" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button size="sm" className="w-full flex items-center justify-center gap-2 bg-black hover:bg-slate-800 text-white" asChild>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
