import { motion } from "framer-motion"
import { Award, Trophy, Medal } from "lucide-react"

export function Certificates() {
  const achievements = [
    {
      title: "Top 5 at Synthetis",
      description: "National-level hackathon with 300+ competing teams from across India.",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Top 50 Mentor (GSSoC)",
      description: "Selected for GirlScript Summer of Code, guiding open-source contributors.",
      icon: <Medal className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Generative AI",
      description: "Issued by NxtWave (Dec 2024). Focused on GenAI systems and prompt engineering.",
      icon: <Award className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Machine Learning",
      description: "Issued by Internshala (Jul 2024). Building predictive models and data analysis.",
      icon: <Award className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Java Certification",
      description: "Diamond Distinction from MindGlance.",
      icon: <Award className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Intermediate DevOps",
      description: "Certified proficiency in DevOps tools and practices.",
      icon: <Award className="w-8 h-8 text-purple-400" />
    }
  ]

  return (
    <section id="certificates" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certificates & Achievements</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-start space-x-4 p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-purple-500/30 hover:bg-card/60 transition-colors shadow-sm"
            >
              <div className="p-3 bg-background rounded-full shadow-inner border border-border/50">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
