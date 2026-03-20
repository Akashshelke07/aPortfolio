import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      role: "Freelance Full-Stack Developer",
      company: "SBrainiac Learning",
      duration: "Oct 2023 – Jan 2024",
      bullets: [
        "Developed and deployed an AI-assisted e-learning platform using the MERN stack, serving 1,000+ users with an 85% course completion rate.",
        "Designed and implemented custom REST APIs with Node.js and MongoDB for secure authentication, role-based access control, and real-time progress tracking.",
        "Integrated Razorpay for payments and AWS S3 for scalable media storage, ensuring reliable content delivery as the user base grew.",
        "Deployed and maintained the platform on Vercel and Render, ensuring consistent uptime and production-grade reliability."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Accenture Technologies Ltd",
      duration: "Dec 2024 – Feb 2025",
      bullets: [
        "Designed and integrated an AI-powered recommendation engine using Scikit-learn and Sentence-Transformers, personalizing travel suggestions based on user mood, budget, and preferences.",
        "Built the full-stack application layer with React.js, Node.js, Express, and MongoDB, integrating the AI engine via custom API interfaces.",
        "Built a Python/Flask microservice that used NLP-based embeddings and Sentence-Transformers to match users with destinations from large-scale Kaggle datasets.",
        "Contributed to the full development life cycle — from data pre-processing and model selection to API integration, testing, and deployment."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Professional Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[50%] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500/20 before:via-purple-500/40 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-gradient-to-br from-blue-500 to-purple-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -ml-5 md:ml-0 z-10">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              <Card className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 border-border/50 bg-card/50 backdrop-blur-sm hover:border-purple-500/30 transition-colors shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl text-foreground font-bold">{exp.role}</CardTitle>
                    <span className="text-purple-400 font-medium">{exp.company}</span>
                    <span className="text-sm font-medium text-muted-foreground/80 bg-muted/50 w-fit px-2 py-0.5 rounded-full mt-2">
                      {exp.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-2">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-muted-foreground text-sm flex items-start">
                        <span className="text-blue-500 mr-2 mt-1 -ml-1 text-lg leading-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
