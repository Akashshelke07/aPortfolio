import { motion } from "framer-motion"
import { Code2, BrainCircuit, Rocket, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export function Freelance() {
  const services = [
    {
      title: "AI & LLM Integration",
      description: "Custom AI solutions, RAG pipelines, and LLM integrations to automate workflows and enhance your product's intelligence.",
      icon: BrainCircuit,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern MERN stack, Next.js, and scalable cloud architectures.",
      icon: Globe,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      title: "API Development & Architecture",
      description: "Designing and building robust, secure, and high-performance REST and GraphQL APIs for your platforms.",
      icon: Code2,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "MVP Development",
      description: "Rapid prototyping and MVP development to get your startup idea from concept to market quickly and efficiently.",
      icon: Rocket,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="freelance" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Freelance Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I am available for freelance opportunities. Here's how I can help you build and scale your next big idea.
          </p>
          <div className="h-1 w-20 bg-black mx-auto rounded-full mt-4" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div key={idx} variants={itemVariants} className="h-full">
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-black/30 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${service.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
