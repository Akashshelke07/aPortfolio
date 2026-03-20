import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { BrainCircuit, Code2, Server } from "lucide-react"

export function Skills() {
  const categories = [
    {
      title: "Machine Learning & AI",
      icon: <BrainCircuit className="h-6 w-6 text-blue-500" />,
      skills: [
        "LangChain, LangGraph, Scikit-learn, Sentence-Transformers",
        "RAG Pipelines, Prompt Engineering, Multi-Agent Systems",
        "OpenAI API, Google Gemini, ChromaDB, Embeddings"
      ]
    },
    {
      title: "Full-Stack Development",
      icon: <Code2 className="h-6 w-6 text-purple-500" />,
      skills: [
        "Frontend: React.js, Next.js, Tailwind CSS",
        "Backend: FastAPI, Flask, Node.js, Express.js, PyTorch",
        "Databases: MongoDB, MySQL, PostgreSQL, Redis"
      ]
    },
    {
      title: "DevOps & Languages",
      icon: <Server className="h-6 w-6 text-blue-400" />,
      skills: [
        "Languages: Python, JavaScript",
        "Docker, AWS S3",
        "Monitoring: Prometheus, Grafana"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {categories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <Card className="h-full border-border/40 bg-card/40 backdrop-blur-sm hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
                <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                  <div className="p-2 rounded-lg bg-background shadow-inner">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <span className="mr-2 text-purple-500 mt-1">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
