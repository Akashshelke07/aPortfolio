import { motion } from "framer-motion"

import heroAnimation from "../transparent_gitgif.gif"
import Typewriter from "typewriter-effect"


import { FaReact, FaPython, FaLink, FaProjectDiagram, FaRobot, FaDatabase } from "react-icons/fa"

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
              <span style={{ fontFamily: "'Pacifico', cursive", fontWeight: 'normal' }} className="text-5xl md:text-7xl lg:text-8xl inline-block mb-2 text-black/90">Hi, I'm</span>{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="text-black font-[SuperSlicedItalic] tracking-wider italic">
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
              className="text-2xl md:text-3xl font-bold text-black tracking-wide h-10 md:h-12 flex items-center justify-center lg:justify-start"
            >
              <Typewriter
                options={{
                  strings: [
                    'Generative AI Engineer',
                    'AI/ML Engineer',
                    'Full-Stack Developer',
                    'Freelancer'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl text-red-600 max-w-2xl lg:mx-0 mx-auto pt-2 text-center lg:text-left font-semibold tracking-wide leading-[1.3]"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              <span className="block">Software Developer and Freelancer with 1+ years of experience</span>
              <span className="block">in Full-Stack & AI Development</span>
            </motion.p>

            {/* Tagline Badges */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-black max-w-2xl lg:mx-0 mx-auto leading-relaxed font-bold pt-3"
            >
              "Designing and building production-grade AI solutions and web applications for real-world challenges."
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="text-lg md:text-xl text-black max-w-2xl lg:mx-0 mx-auto leading-relaxed font-bold flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-3 pt-2"
            >
              <span className="inline-flex items-center gap-1.5 bg-black/5 px-3 py-1.5 rounded-md border border-black/10 text-sm align-middle whitespace-nowrap">
                <FaDatabase className="w-4 h-4 text-blue-500" /> RAG
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/5 px-3 py-1.5 rounded-md border border-black/10 text-sm align-middle whitespace-nowrap">
                <FaLink className="w-4 h-4 text-blue-600" /> LangChain
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/5 px-3 py-1.5 rounded-md border border-black/10 text-sm align-middle whitespace-nowrap">
                <FaPython className="w-4 h-4 text-[#3776AB]" /> Python
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/5 px-3 py-1.5 rounded-md border border-black/10 text-sm align-middle whitespace-nowrap">
                <FaProjectDiagram className="w-4 h-4 text-purple-500" /> LangGraph
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/5 px-3 py-1.5 rounded-md border border-black/10 text-sm align-middle whitespace-nowrap">
                <FaRobot className="w-4 h-4 text-indigo-500" /> LLMs
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/5 px-3 py-1.5 rounded-md border border-black/10 text-sm align-middle whitespace-nowrap">
                <FaReact className="w-4 h-4 text-[#61DAFB]" /> React.js
              </span>
            </motion.div>


          </motion.div>

          {/* GIF Animation Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-black rounded-2xl blur-3xl opacity-20" />
              
              <div className="relative bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden">
                <img 
                  src={heroAnimation} 
                  alt="Futuristic Tech Animation" 
                  className="w-full max-w-[450px] lg:max-w-none h-auto rounded-lg mix-blend-screen opacity-90"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Futuristic Grid Overlay Extracted */}
    </section>
  )
}
