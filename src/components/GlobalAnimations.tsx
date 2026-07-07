import { 
  Brain, Code, Cpu, Database, Globe, Rocket, Terminal, Layout, Briefcase, 
  GraduationCap, Send, MessageSquare, Trophy, Server, Monitor, Cloud, Zap, Cog,
  Activity, Aperture, Battery, Bluetooth, Bookmark, Box, Calendar, Camera, 
  Code2, Command, Compass, Fingerprint, Focus, Hash, Keyboard, Layers, Link, 
  Map, Mouse, Navigation, Network, PieChart, Shield, Smartphone, Tablet, Wifi,
  BarChart, GitBranch, CpuIcon, Webhook
} from "lucide-react"
import { FloatingElement } from "./ui/FloatingElement"
import { motion } from "framer-motion"

const TechMesh = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.05] -z-10" viewBox="0 0 800 800">
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

const floatingIcons = [
  // Row 1 (Top 0-20%)
  { icon: Brain, className: "top-[8%] left-[10%]", delay: 0, duration: 8 },
  { icon: Rocket, className: "top-[12%] left-[38%]", delay: 4, duration: 10 },
  { icon: Camera, className: "top-[5%] left-[60%]", delay: 2, duration: 9 },
  { icon: Tablet, className: "top-[15%] left-[85%]", delay: 5, duration: 11 },

  // Row 2 (Upper-Middle 20-40%)
  { icon: Cpu, className: "top-[30%] left-[15%]", delay: 1.5, duration: 9 },
  { icon: Code, className: "top-[25%] left-[32%]", delay: 0.5, duration: 7 },
  { icon: Server, className: "top-[35%] left-[65%]", delay: 3, duration: 10 },
  { icon: Smartphone, className: "top-[28%] left-[90%]", delay: 2.2, duration: 8 },

  // Row 3 (Center 40-60%)
  { icon: Layout, className: "top-[50%] left-[8%]", delay: 1, duration: 8 },
  { icon: Monitor, className: "top-[55%] left-[40%]", delay: 3.5, duration: 10 },
  { icon: Database, className: "top-[45%] left-[58%]", delay: 1.8, duration: 9 },
  { icon: Zap, className: "top-[52%] left-[82%]", delay: 0.8, duration: 7 },

  // Row 4 (Lower-Middle 60-80%)
  { icon: Command, className: "top-[75%] left-[12%]", delay: 2.6, duration: 11 },
  { icon: Cloud, className: "top-[65%] left-[35%]", delay: 1.2, duration: 8 },
  { icon: Briefcase, className: "top-[72%] left-[62%]", delay: 4, duration: 11 },
  { icon: Trophy, className: "top-[68%] left-[88%]", delay: 2.5, duration: 9 },

  // Row 5 (Bottom 80-100%)
  { icon: Terminal, className: "top-[85%] left-[18%]", delay: 2, duration: 9 },
  { icon: GraduationCap, className: "top-[95%] left-[42%]", delay: 1.5, duration: 8 },
  { icon: Send, className: "top-[88%] left-[68%]", delay: 3.5, duration: 12 },
  { icon: Network, className: "top-[92%] left-[85%]", delay: 4.2, duration: 10 },
];

export function GlobalAnimations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden h-full">
      {/* Background SVG Mesh - significantly more visible */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 1000 1000">
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Scattered Tech Icons - mapped from array for maximum density */}
      {floatingIcons.map((item, i) => (
        <FloatingElement 
          key={i} 
          icon={item.icon} 
          className={item.className} 
          delay={item.delay} 
          duration={item.duration} 
        />
      ))}

      {/* TechMesh from Hero */}
      <TechMesh />
      
      {/* Background Pulses */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] -z-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] -z-20 animate-pulse" />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      {/* Radial Gradient Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(0,0,0,0.03)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.03)_0%,transparent_50%)]" />
    </div>
  )
}
