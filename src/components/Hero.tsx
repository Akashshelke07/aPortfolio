import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Link } from "react-scroll"
import { ArrowRight, Mail, Code, Cpu, Brain } from "lucide-react"
import heroAnimation from "../transparent_gitgif.gif"

const TechMesh = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.15] -z-10" viewBox="0 0 800 800">
    <motion.path
      d="M100 100 L300 200 L200 400 L500 300 L700 500 L400 700 L100 600 Z"
      fill="none"
      stroke="url(#gradient)"
      strokeWidth="1"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
    <motion.circle
      cx="300" cy="200" r="4" fill="#3b82f6"
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="500" cy="300" r="4" fill="#8b5cf6"
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
    />
    <motion.circle
      cx="200" cy="400" r="3" fill="#3b82f6"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2, delay: 1, repeat: Infinity }}
    />
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const FloatingIcon = ({ icon: Icon, delay, className }: { icon: any, delay: number, className: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0.2, 0.5, 0.2], 
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0]
    }}
    transition={{ 
      duration: 5, 
      delay, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
    className={`absolute ${className} pointer-events-none opacity-20 hidden lg:block`}
  >
    <Icon className="w-12 h-12 text-blue-400" />
  </motion.div>
)

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
      {/* Background Elements */}
      <TechMesh />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-20 animate-pulse" />
      
      {/* Floating Icons */}
      <FloatingIcon icon={Brain} delay={0} className="top-1/4 left-10" />
      <FloatingIcon icon={Cpu} delay={1.5} className="bottom-1/4 left-20" />
      <FloatingIcon icon={Code} delay={3} className="top-1/3 right-10" />

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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-300% animate-gradient">
                  Akash Shelke
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
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
              Full-Stack Developer & <span className="text-blue-500">AI/ML Engineer</span>
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
                <Button size="lg" className="h-14 px-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full transition-all duration-300 shadow-xl shadow-blue-500/20 group relative overflow-hidden">
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
                <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-muted-foreground/30 hover:bg-white/5 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm group">
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
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
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

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
    </section>
  )
}
