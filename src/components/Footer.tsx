import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between text-center space-y-6">
        <div className="flex space-x-6">
          <a
            href="https://github.com/Akashshelke07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/akash-shelke-5b1520259"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-black transition-colors p-2 rounded-full hover:bg-black/10"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://x.com/akashshelke07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
          >
            <Twitter className="w-5 h-5" />
            <span className="sr-only">X (Twitter)</span>
          </a>
          <a
            href="mailto:akashshelke594@gmail.com"
            className="text-muted-foreground hover:text-black transition-colors p-2 rounded-full hover:bg-black/10"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 Akash Shelke. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
