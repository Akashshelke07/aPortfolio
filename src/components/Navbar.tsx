import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Freelance", to: "freelance" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Expertise", to: "certificates" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center relative min-h-[40px]">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 mx-auto">
          {navLinks.map((link) => {
            const isFreelance = link.name === "Freelance";
            return (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass={isFreelance 
                  ? "!bg-red-700" 
                  : "!text-red-500 font-semibold after:!w-full"
                }
                className={isFreelance
                  ? "bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-md cursor-pointer transition-colors duration-300 hover:bg-red-700 flex items-center outline-none focus:outline-none border-none ring-0 focus:ring-0"
                  : "relative py-1 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
                }
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block absolute right-0">
          <Link to="contact" smooth={true} duration={500}>
            <Button variant="default" size="sm" className="bg-black hover:bg-slate-800 transition-opacity text-white border-none">
              Contact Me
            </Button>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button aria-label="Toggle mobile menu" className="md:hidden text-foreground ml-auto" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => {
            const isFreelance = link.name === "Freelance";
            return (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                onClick={() => setIsMobileMenuOpen(false)}
                activeClass={isFreelance
                  ? "!bg-red-700" 
                  : "!text-red-500 font-semibold translate-x-2"
                }
                className={isFreelance
                  ? "block text-center bg-red-600 text-white font-bold py-2.5 rounded-md cursor-pointer transition-colors duration-300 hover:bg-red-700 outline-none focus:outline-none border-none ring-0 focus:ring-0"
                  : "block text-base font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-all duration-300 hover:translate-x-2"
                }
              >
                {link.name}
              </Link>
            )
          })}
          <Link to="contact" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full bg-black hover:bg-slate-800 text-white">Contact Me</Button>
          </Link>
        </div>
      )}
    </header>
  )
}
