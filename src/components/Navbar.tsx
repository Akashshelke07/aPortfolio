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
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Certificates", to: "certificates" },
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
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-center">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-purple-500"
              className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link to="contact" smooth={true} duration={500}>
            <Button variant="default" size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-opacity text-white border-none">
              Contact Me
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-foreground ml-auto" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link to="contact" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">Contact Me</Button>
          </Link>
        </div>
      )}
    </header>
  )
}
