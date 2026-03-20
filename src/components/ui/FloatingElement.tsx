import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface FloatingElementProps {
  icon: LucideIcon
  className?: string
  delay?: number
  duration?: number
  yOffset?: number
  rotate?: number
}

export function FloatingElement({ 
  icon: Icon, 
  className = "", 
  delay = 0, 
  duration = 5,
  yOffset = 20,
  rotate = 10
}: FloatingElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ 
        opacity: [0.35, 0.75, 0.35], 
        y: [0, -yOffset, 0],
        rotate: [0, rotate, -rotate, 0],
        scale: [1, 1.15, 1]
      }}
      transition={{ 
        duration, 
        delay, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={`absolute pointer-events-none drop-shadow-[0_0_20px_rgba(37,99,235,0.4)] ${className}`}
    >
      <Icon className="w-14 h-14 md:w-24 md:h-24 text-blue-400" />
    </motion.div>
  )
}
