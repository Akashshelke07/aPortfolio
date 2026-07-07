import { motion } from "framer-motion"
import { Code2, BrainCircuit, Rocket, Globe, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

export function Freelance() {
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Freelance</h2>
          <p className="text-red-700 font-semibold max-w-2xl mx-auto text-lg">
            I'm currently available for freelance opportunities and open to collaborating with startups, businesses, and ambitious founders.
          </p>
          <div className="h-1 w-20 bg-black mx-auto rounded-full mt-4" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"
        >
          {/* Project 1 */}
          <motion.div variants={itemVariants}>
            <a href="https://www.sbrainiaclearning.com/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Card className="flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group hover:border-black/30 hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="overflow-hidden relative border-b border-border/50 bg-black/5">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  <img 
                    src={`${import.meta.env.BASE_URL}Screenshot/sbrain.png`}
                    alt="S. Brainiac Learning" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold group-hover:text-red-700 transition-colors">S. Brainiac Learning</h3>
                </div>
              </Card>
            </a>
          </motion.div>

          {/* Project 2 */}
          <motion.div variants={itemVariants}>
            <a href="https://www.humanityconserve.co.in/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Card className="flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group hover:border-black/30 hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="overflow-hidden relative border-b border-border/50 bg-black/5">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  <img 
                    src={`${import.meta.env.BASE_URL}Screenshot/Humanity.png`}
                    alt="Humanity Conserve" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-red-700 transition-colors">Humanity Conserve</h3>
                </div>
              </Card>
            </a>
          </motion.div>

          {/* Project 3 */}
          <motion.div variants={itemVariants}>
            <a href="https://car-wow-swart.vercel.app/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Card className="flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group hover:border-black/30 hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="overflow-hidden relative border-b border-border/50 bg-black/5">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  <img 
                    src={`${import.meta.env.BASE_URL}Screenshot/Autoverse.png`}
                    alt="AutoVerse (incomplete)" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-red-700 transition-colors">AutoVerse (incomplete)</h3>
                </div>
              </Card>
            </a>
          </motion.div>

          {/* Project 4 */}
          <motion.div variants={itemVariants}>
            <div className="block w-full h-full">
              <Card className="flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group hover:border-black/30 hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="overflow-hidden relative border-b border-border/50 bg-black/5">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  <img 
                    src={`${import.meta.env.BASE_URL}Screenshot/OIP.webp`}
                    alt="AI Powered Autoshift Software" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-red-700 transition-colors">AI Powered Autoshift Software</h3>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Project 5 */}
          <motion.div variants={itemVariants}>
            <a href="https://soultechsolutions.vercel.app/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Card className="flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group hover:border-black/30 hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="overflow-hidden relative border-b border-border/50 bg-black/5">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  <img 
                    src={`${import.meta.env.BASE_URL}Screenshot/soultechsolutions.png`}
                    alt="Soultech Solutions" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-red-700 transition-colors">Soultech Solutions</h3>
                </div>
              </Card>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
