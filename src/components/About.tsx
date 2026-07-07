import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { GraduationCap } from "lucide-react"
import nutanLogo from "../Nutan.png"
import aspirImg from "../aspir.jpg"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <div className="h-1 w-20 bg-black mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            <Card className="border-border/60 bg-card/60 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-foreground font-medium whitespace-pre-line">
                    Hi, I’m Akash Shelke, a Full-Stack & Generative AI Developer specialized in MERN Stack, GenAI, RAG Pipelines, MCP Workflows, LangChain, and LangGraph. Passionate about scalable backend architecture, cloud technologies, and intelligent automation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/60 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-center space-x-3 text-xl font-bold mb-4 text-foreground">
                  <div className="p-2 rounded-full bg-black/10">
                    <GraduationCap className="h-6 w-6 text-black" />
                  </div>
                  <h3>Education</h3>
                </div>
                
                <div className="space-y-4">
                  {/* Nutan */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl bg-background border border-border/50 shadow-sm group hover:border-black/20 transition-all gap-5 md:gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
                      <div className="bg-white p-1.5 rounded-full border border-black/10 shadow-sm shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                        <img src={nutanLogo} alt="Nutan Logo" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-contain" />
                      </div>
                      <div className="space-y-1.5 text-center sm:text-left">
                        <h4 className="font-bold text-foreground text-lg group-hover:text-black transition-colors">Nutan Maharashtra Institute of Engineering and Technology</h4>
                        <p className="text-muted-foreground font-medium">Bachelor of Engineering in Information Technology</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-center md:text-right space-y-2 shrink-0 md:ml-auto">
                      <div className="inline-block px-4 py-1 rounded-full bg-black text-white text-sm font-bold shadow-md">2022 – 2026</div>
                      <div className="text-sm font-bold pt-1 text-foreground">CGPA: 7.28</div>
                    </div>
                  </div>

                  {/* Aspire */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl bg-background border border-border/50 shadow-sm group hover:border-black/20 transition-all gap-5 md:gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
                      <div className="bg-white p-2 rounded-full border border-black/10 shadow-sm shrink-0 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 overflow-hidden mx-auto sm:mx-0">
                        <img src={aspirImg} alt="Aspire Logo" className="w-[140%] max-w-none object-contain scale-[1.2]" />
                      </div>
                      <div className="space-y-1.5 text-center sm:text-left">
                        <h4 className="font-bold text-foreground text-lg group-hover:text-black transition-colors">Aspire Institute</h4>
                        <p className="text-muted-foreground font-medium">Founded by Harvard Business School.</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-center md:text-right space-y-2 shrink-0 md:ml-auto">
                      <div className="inline-block px-4 py-1 rounded-full bg-black text-white text-sm font-bold shadow-md">April 29 – June 30, 2026</div>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
