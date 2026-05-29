import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Akashshelke07",
      icon: Github,
      colorClass: "text-[#181717] hover:bg-[#181717]/10",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/akash-shelke-5b1520259",
      icon: Linkedin,
      colorClass: "text-[#0A66C2] hover:bg-[#0A66C2]/10",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/akashshelke07",
      icon: Twitter,
      colorClass: "text-[#1DA1F2] hover:bg-[#1DA1F2]/10",
    },
    {
      name: "Email",
      url: "mailto:akashshelke594@gmail.com",
      icon: Mail,
      colorClass: "text-[#EA4335] hover:bg-[#EA4335]/10",
    }
  ]

  return (
    <footer className="border-t border-border/50 bg-background py-10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between text-center space-y-6">
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className={`group relative flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:scale-110 ${link.colorClass}`}
            >
              <link.icon className="w-6 h-6" />
              <span className="sr-only">{link.name}</span>
              
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1e1e1e] text-white text-xs font-semibold rounded-lg opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl z-20">
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#1e1e1e] rotate-45 rounded-sm -z-10" />
              </span>
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Akash Shelke. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
