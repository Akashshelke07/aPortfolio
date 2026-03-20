import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">
            <CardContent className="p-6 md:p-8 space-y-8">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                  I am a Full-Stack Developer with a strong interest in AI and ML, currently in my final year of engineering. I have built and shipped real products — from e-learning platforms and Cloud apps to AI Agents and cloud tools — using the MERN stack, Python, LangChain, and LLM APIs. I enjoy working across the full stack, but what excites me most is building systems that are actually intelligent, not just functional.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border/50">
                <div className="flex items-center space-x-2 text-xl font-semibold mb-4">
                  <GraduationCap className="h-6 w-6 text-purple-500" />
                  <h3>Education</h3>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="space-y-1">
                    <h4 className="font-medium text-foreground text-lg">Nutan Maharashtra Institute of Engineering and Technology</h4>
                    <p className="text-muted-foreground">Bachelor of Engineering in Information Technology</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right space-y-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">2022 – 2026</div>
                    <div className="text-sm font-medium pt-1 text-purple-400">CGPA: 7.37</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
