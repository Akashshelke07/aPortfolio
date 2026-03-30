import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Link } from "react-scroll"
import { ArrowRight, Mail } from "lucide-react"
import heroAnimation from "../transparent_gitgif.gif"


export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_50%)]">
      {/* Background Elements Extracted */}


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center lg:text-left"
          >

            {/* Title */}
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]"
            >
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-slate-800 to-black bg-300% animate-gradient">
                  Akash Shelke
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1.5 bg-black rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-foreground/90 tracking-wide"
            >
              Full-Stack Developer & <span className="text-black">AI/ML Engineer</span>
            </motion.h2>

            {/* Tagline Reverted to Transparent with Black Text */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-black max-w-2xl lg:mx-0 mx-auto leading-relaxed font-bold"
            >
              "Building intelligent systems that are actually useful — crafting production-ready products with MERN, Python, LangChain, and LLMs."
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4"
            >
              <Link to="projects" smooth={true} duration={500}>
                <Button size="lg" className="h-14 px-10 bg-black hover:bg-slate-800 text-white rounded-full transition-all duration-300 shadow-xl shadow-black/20 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-white/10" 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-muted-foreground/30 hover:bg-white/5 hover:border-black/50 transition-all duration-300 backdrop-blur-sm group">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* GIF Animation Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative group">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-black rounded-2xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden"
              >
                <img 
                  src={heroAnimation} 
                  alt="Futuristic Tech Animation" 
                  className="w-full max-w-[450px] lg:max-w-none h-auto rounded-lg mix-blend-screen opacity-90"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Futuristic Grid Overlay Extracted */}
    </section>
  )
}
