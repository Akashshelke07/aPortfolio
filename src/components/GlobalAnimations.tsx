import { Brain, Code, Cpu, Database, Globe, Rocket, Terminal, Layout, Briefcase, GraduationCap, Send, MessageSquare, Trophy } from "lucide-react"
import { FloatingElement } from "./ui/FloatingElement"

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

      {/* Radial Gradient Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.03)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.03)_0%,transparent_50%)]" />
    </div>
  )
}
