import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { useToast } from "./ui/use-toast"
import mapIcon from "../map.png"
import mailIcon from "../mail.png"
export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const nameRegex = /^[a-zA-Z\s]{3,50}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!nameRegex.test(formData.name.trim())) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid name (letters and spaces only, minimum 3 characters).",
        variant: "destructive",
      })
      return
    }

    if (!emailRegex.test(formData.email.trim())) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    if (formData.message.trim().length < 10) {
      toast({
        title: "Message Too Short",
        description: "Please enter a message of at least 10 characters so I can understand your request.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // IMPORTANT: Replace YOUR_ACCESS_KEY_HERE with your real key from web3forms.com
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `New Project Requirement from ${formData.name}`,
        from_name: "Portfolio Contact Form",
      }),
    })

    const result = await response.json()

    if (result.success) {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I will get back to you soon.",
        variant: "default",
      })
      setFormData({ name: "", email: "", message: "" })
    } else {
      toast({
        title: "Submission failed",
        description: result.message || "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      })
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
          <div className="h-1 w-20 bg-black mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto pt-4 text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {[
              { 
                imgUrl: mapIcon, 
                title: "Location", 
                value: "Pune, Maharashtra, India", 
                isLink: false,
                iconClass: "bg-white border-gray-100 shadow-md shadow-gray-200/50" 
              },
              { 
                imgUrl: mailIcon, 
                title: "Email", 
                value: "akashshelke594@gmail.com", 
                isLink: true,
                href: "mailto:akashshelke594@gmail.com",
                iconClass: "bg-white border-gray-100 shadow-md shadow-gray-200/50" 
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-xl group hover:border-black/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`p-3 rounded-full border group-hover:scale-110 transition-transform ${item.iconClass}`}>
                  <img src={item.imgUrl} alt={item.title} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg">{item.title}</h3>
                  {item.isLink ? (
                    <a href={item.href} className="text-gray-900 font-bold hover:text-black transition-colors underline underline-offset-4 decoration-black/30 hover:decoration-black">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-bold">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl border-2 border-gray-100 shadow-2xl relative overflow-hidden group transition-all duration-500"
          >
            {/* Subtle inner glow (very light for transparent background) */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-900 font-bold">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus-visible:ring-black h-12 border-2"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-900 font-bold">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus-visible:ring-black h-12 border-2"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-900 font-bold">Project Details & Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project requirements, goals, or timeline..."
                  rows={5}
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus-visible:ring-black resize-none pt-4 border-2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-black hover:bg-slate-800 text-white rounded-lg transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
