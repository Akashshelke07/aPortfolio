import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaDatabase, FaLink, FaProjectDiagram, FaTerminal, FaCode, FaRobot, FaBrain, FaLanguage } from "react-icons/fa"
import { SiFastapi, SiFlask, SiPytorch, SiTailwindcss, SiGoogle, SiMongodb, SiPostgresql, SiPrometheus, SiGrafana, SiExpress, SiScikitlearn } from "react-icons/si"

const TechIcon = ({ name }: { name: string }) => {
  const iconData: Record<string, { icon: React.ElementType, color: string }> = {
    "React": { icon: FaReact, color: "text-[#61DAFB]" },
    "FastAPI": { icon: SiFastapi, color: "text-[#009688]" },
    "Uvicorn": { icon: FaTerminal, color: "text-gray-600" },
    "PyTorch": { icon: SiPytorch, color: "text-[#EE4C2C]" },
    "Python": { icon: FaPython, color: "text-[#3776AB]" },
    "Python/Flask": { icon: SiFlask, color: "text-foreground" },
    "Flask": { icon: SiFlask, color: "text-foreground" },
    "TailWind CSS": { icon: SiTailwindcss, color: "text-[#38B2AC]" },
    "LangChain": { icon: FaLink, color: "text-blue-500" },
    "Google Gemini": { icon: SiGoogle, color: "text-blue-500" },
    "Pinecone": { icon: FaDatabase, color: "text-blue-600" },
    "LangGraph": { icon: FaProjectDiagram, color: "text-purple-500" },
    "ChromaDB": { icon: FaDatabase, color: "text-rose-500" },
    "Node.js": { icon: FaNodeJs, color: "text-[#339933]" },
    "Docker": { icon: FaDocker, color: "text-[#2496ED]" },
    "PostgreSQL": { icon: SiPostgresql, color: "text-[#336791]" },
    "Prometheus": { icon: SiPrometheus, color: "text-[#E6522C]" },
    "Grafana": { icon: SiGrafana, color: "text-[#F46800]" },
    "MERN Stack": { icon: FaReact, color: "text-[#61DAFB]" },
    "MongoDB": { icon: SiMongodb, color: "text-[#47A248]" },
    "AWS S3": { icon: FaAws, color: "text-[#232F3E]" },
    "Express": { icon: SiExpress, color: "text-foreground" },
    "Scikit-learn": { icon: SiScikitlearn, color: "text-[#F7931E]" },
    "Sentence-Transformers": { icon: FaLanguage, color: "text-blue-400" },
    "NLP": { icon: FaBrain, color: "text-pink-500" },
    "LLM APIs": { icon: FaRobot, color: "text-indigo-500" },
    "Solidity": { icon: FaCode, color: "text-[#363636]" },
    "Unsloth": { icon: FaTerminal, color: "text-orange-600" },
    "PEFT (LoRA)": { icon: FaProjectDiagram, color: "text-purple-600" },
    "Llama-3.2": { icon: FaRobot, color: "text-blue-600" },
    "Razorpay": { icon: FaCode, color: "text-[#02042B]" },
    "Vercel": { icon: FaTerminal, color: "text-black" },
    "Render": { icon: FaCloud, color: "text-[#46E3B7]" }
  }
  
  const data = iconData[name] || { icon: FaCode, color: "text-gray-600" }
  const Icon = data.icon
  return <Icon className={`w-3.5 h-3.5 mr-1.5 shrink-0 ${data.color}`} />
}
// Needed FaCloud fallback
import { FaCloud } from "react-icons/fa"

type Project = {
  title: string
  description: string
  techStack: string[]
  github?: string
  liveDemo?: string
  image: string
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Solidity AI Backend",
      description: "A GenAI-powered, local code-generation backend specifically fine-tuned for building Solidity smart contracts. It leverages a quantized Llama-3.2-1B model and PEFT (LoRA) adapters to generate secure, production-ready smart contracts locally with low-latency and zero API costs.",
      techStack: ["FastAPI", "Uvicorn", "PyTorch", "Unsloth", "PEFT (LoRA)", "Llama-3.2", "Solidity", "Python"],
      github: "https://github.com/Akashshelke07/PromptForge",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "FinReport Agent",
      description: "An agentic AI platform that digests raw accounting data and autonomously generates financial statements, management reports, and compliance documents using a multi-agent LangGraph workflow and RAG pipeline.",
      techStack: ["React", "Flask", "TailWind CSS", "Python", "FastAPI", "LangChain", "Google Gemini", "Pinecone", "LangGraph", "ChromaDB"],
      github: "https://github.com/Akashshelke07/finreport-agent",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Cloud Database-as-a-Service (DBaaS) Platform",
      description: "Cloud-native DBaaS platform for spinning up, managing, and monitoring MySQL, PostgreSQL, MongoDB, and Redis databases from the browser, featuring Prometheus/Grafana monitoring and an LLM-powered assistant.",
      techStack: ["React", "Node.js", "Docker", "PostgreSQL", "Prometheus", "Grafana", "LLM APIs"],
      github: "#",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "AI Travel Recommendation Engine",
      description: "AI-powered recommendation engine using Scikit-learn and Sentence-Transformers to personalize travel suggestions based on user mood, budget, and preferences, integrated via custom API interfaces.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Python/Flask", "Scikit-learn", "Sentence-Transformers", "NLP"],
      github: "https://github.com/Akashshelke07/AI-Traveling-Booking-Platform",
      image: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?q=80&w=1000&auto=format&fit=crop"
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
                <div className="h-48 overflow-hidden relative border-b border-border/50">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-black transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <Badge key={tIdx} variant="secondary" className="bg-black/5 text-black hover:bg-black/10 font-medium px-2.5 py-1 flex items-center border border-black/10">
                        <TechIcon name={tech} />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-border/50 flex flex-col sm:flex-row gap-4">
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
