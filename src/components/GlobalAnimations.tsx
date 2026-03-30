import { Brain, Code, Cpu, Database, Globe, Rocket, Terminal, Layout, Briefcase, GraduationCap, Send, MessageSquare, Trophy, Server, Monitor, Cloud, Zap, Cog } from "lucide-react"
import { FloatingElement } from "./ui/FloatingElement"
import { motion } from "framer-motion"

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
      cx="300" cy="200" r="4" fill="#000000"
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="500" cy="300" r="4" fill="#000000"
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
    />
    <motion.circle
      cx="200" cy="400" r="3" fill="#000000"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2, delay: 1, repeat: Infinity }}
    />
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#000000" />
        <stop offset="100%" stopColor="#000000" />
      </linearGradient>
    </defs>
  </svg>
)

export function GlobalAnimations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden h-full">
      {/* Background SVG Mesh - significantly more visible */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Scattered Tech Icons - Using fixed viewport percentages for a 'starfield' effect */}
      <FloatingElement icon={Brain} className="top-[8%] left-[5%]" delay={0} duration={6} />
      <FloatingElement icon={Cpu} className="top-[22%] right-[8%]" delay={1.5} duration={5} />
      <FloatingElement icon={Terminal} className="top-[38%] left-[12%]" delay={2} duration={8} />
      <FloatingElement icon={Code} className="top-[52%] right-[4%]" delay={0.5} duration={7} />
      <FloatingElement icon={Database} className="top-[68%] left-[8%]" delay={3} duration={9} />
      <FloatingElement icon={Globe} className="top-[82%] right-[10%]" delay={2.5} duration={8} />
      <FloatingElement icon={Rocket} className="top-[12%] right-[18%]" delay={4} duration={10} />
      <FloatingElement icon={Layout} className="top-[42%] right-[18%]" delay={1} duration={7} />
      <FloatingElement icon={Briefcase} className="top-[72%] left-[18%]" delay={3} duration={9} />
      <FloatingElement icon={GraduationCap} className="top-[88%] left-[12%]" delay={2} duration={8} />
      <FloatingElement icon={Trophy} className="top-[58%] left-[4%]" delay={1} duration={7} />
      <FloatingElement icon={MessageSquare} className="top-[78%] right-[4%]" delay={2.5} duration={8} />
      <FloatingElement icon={Send} className="top-[28%] left-[4%]" delay={4} duration={10} />
      {/* Middle Scattered Tech Icons */}
      <FloatingElement icon={Server} className="top-[15%] left-[24%]" delay={1.2} duration={7} />
      <FloatingElement icon={Cloud} className="top-[85%] right-[22%]" delay={3.5} duration={9} />
      <FloatingElement icon={Zap} className="top-[45%] left-[26%]" delay={0.8} duration={6} />
      <FloatingElement icon={Monitor} className="top-[65%] right-[26%]" delay={2.2} duration={8} />
      <FloatingElement icon={Cog} className="top-[95%] left-[22%]" delay={4.5} duration={10} />

      {/* TechMesh from Hero */}
      <TechMesh />
      
      {/* Background Pulses */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] -z-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] -z-20 animate-pulse" />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      {/* Radial Gradient Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(0,0,0,0.03)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.03)_0%,transparent_50%)]" />
    </div>
  )
}
