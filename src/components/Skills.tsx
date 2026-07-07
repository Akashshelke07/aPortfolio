import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { BrainCircuit, Code2, Server } from "lucide-react"
import { FaReact, FaNodeJs, FaPython, FaJs, FaDocker, FaAws, FaLink, FaProjectDiagram, FaLanguage, FaDatabase, FaKeyboard, FaUsersCog, FaVectorSquare } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiFastapi, SiFlask, SiExpress, SiPytorch, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiPrometheus, SiGrafana, SiScikitlearn, SiOpenai, SiGoogle } from "react-icons/si"

export function Skills() {
  const categories = [
    {
      title: "Machine Learning & AI",
      icon: <BrainCircuit className="h-6 w-6 text-black" />,
      skills: [
        { name: "LangChain", icon: FaLink, color: "text-blue-500" },
        { name: "LangGraph", icon: FaProjectDiagram, color: "text-purple-500" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-500" },
        { name: "Sentence-Transformers", icon: FaLanguage, color: "text-blue-400" },
        { name: "RAG Pipelines", icon: FaDatabase, color: "text-indigo-500" },
        { name: "Prompt Engineering", icon: FaKeyboard, color: "text-gray-600" },
        { name: "Multi-Agent Systems", icon: FaUsersCog, color: "text-blue-600" },
        { name: "OpenAI API", icon: SiOpenai, color: "text-foreground" },
        { name: "Google Gemini", icon: SiGoogle, color: "text-blue-500" },
        { name: "ChromaDB", icon: FaDatabase, color: "text-rose-500" },
        { name: "Embeddings", icon: FaVectorSquare, color: "text-green-500" }
      ]
    },
    {
      title: "Full-Stack Development",
      icon: <Code2 className="h-6 w-6 text-black" />,
      skills: [
        { name: "React.js", icon: FaReact, color: "text-[#61DAFB]" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38B2AC]" },
        { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
        { name: "Flask", icon: SiFlask, color: "text-foreground" },
        { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
        { name: "Express.js", icon: SiExpress, color: "text-foreground" },
        { name: "PyTorch", icon: SiPytorch, color: "text-[#EE4C2C]" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
        { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" }
      ]
    },
    {
      title: "DevOps & Languages",
      icon: <Server className="h-6 w-6 text-black" />,
      skills: [
        { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
        { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
        { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
        { name: "AWS S3", icon: FaAws, color: "text-[#232F3E]" },
        { name: "Prometheus", icon: SiPrometheus, color: "text-[#E6522C]" },
        { name: "Grafana", icon: SiGrafana, color: "text-[#F46800]" }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core Skills</h2>
          <div className="h-1 w-20 bg-black mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {categories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <Card className="h-full border-border/40 bg-card/40 backdrop-blur-sm hover:border-black/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300">
                <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                  <div className="p-2 rounded-lg bg-background shadow-inner">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => {
                      const Icon = skill.icon
                      return (
                        <div key={sIdx} className="flex items-center px-3 py-1.5 border border-border/60 rounded-md bg-background hover:bg-muted/50 transition-colors group cursor-default shadow-sm hover:shadow-md">
                          <Icon className={`w-4 h-4 mr-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
