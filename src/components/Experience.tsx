import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Briefcase } from "lucide-react"
import sbrainiacLogo from "../logox.jpg"
import scaleFullLogo from "../scalefull__logo.png"

export function Experience() {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "ScaleFull Technologies LLP",
      logo: scaleFullLogo,
      duration: "Dec 2024 – Feb 2025",
      bullets: [
        "Designed and integrated an AI-powered recommendation engine using Scikit-learn and Sentence-Transformers, personalizing travel suggestions based on user mood, budget, and preferences.",
        "Built the full-stack application layer with React.js, Node.js, Express, and MongoDB, integrating the AI engine via custom API interfaces.",
        "Built a Python/Flask microservice that used NLP-based embeddings and Sentence-Transformers to match users with destinations from large-scale Kaggle datasets.",
        "Contributed to the full development life cycle — from data pre-processing and model selection to API integration, testing, and deployment."
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "S Brainiac Learning",
      url: "https://www.sbrainiaclearning.com/",
      logo: sbrainiacLogo,
      isLive: true,
      duration: "Oct 2025 – Jan 2026",
      bullets: [
        "Launched and scaled a production-grade e-learning platform using the MERN stack, serving 5,000+ users with an 85% test completion rate.",
        "Developed scalable REST APIs with Node.js and MongoDB, enabling secure authentication, role-based access, and real-time progress tracking.",
        "Integrated Razorpay payments and AWS S3 for seamless transactions and reliable media delivery.",
        "Deployed and maintained the platform on Vercel and Render, ensuring high uptime and production reliability."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Professional Experience</h2>
          <div className="h-1 w-20 bg-black mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-5 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-black/20 before:via-black/40 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-black shadow shrink-0 absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              <Card className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 border-border/50 bg-card/50 backdrop-blur-sm hover:border-black/30 transition-colors shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Left: Logo */}
                    {exp.logo && (
                      <div className="shrink-0 mt-1 bg-white p-1 rounded-md shadow-sm border border-gray-100 flex items-center justify-center">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="h-10 sm:h-12 w-auto max-w-[70px] sm:max-w-[100px] xl:max-w-[120px] object-contain rounded-sm" 
                        />
                      </div>
                    )}

                    {/* Right: Text Details */}
                    <div className="flex flex-col min-w-0">
                      {/* Company Name */}
                      <CardTitle className="text-base sm:text-lg xl:text-xl text-foreground font-bold">{exp.company}</CardTitle>

                      {/* Role & Live Link */}
                      <div className="mt-1 text-sm sm:text-base xl:text-lg text-slate-800 font-semibold flex flex-wrap items-center">
                        <span className="">{exp.role}</span>
                        {exp.isLive && exp.url && (
                          <span className="ml-2 whitespace-nowrap shrink-0">
                            | <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 hover:underline transition-colors ml-1">Live</a>
                          </span>
                        )}
                      </div>

                      {/* Duration */}
                      <span className="text-sm font-medium text-muted-foreground/80 bg-muted/50 w-fit px-2 py-0.5 rounded-full mt-2">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-2">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-muted-foreground text-sm flex items-start">
                        <span className="text-black mr-2 mt-1 -ml-1 text-lg leading-none">•</span>
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
