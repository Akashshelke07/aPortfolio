import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { useToast } from "./ui/use-toast"

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
              { icon: MapPin, title: "Location", value: "Pune, Maharashtra, India", iconClass: "bg-red-50 text-red-500 border-red-100" },
              { icon: Mail, title: "Email", value: "akashshelke594@gmail.com", iconClass: "bg-blue-50 text-blue-500 border-blue-100" },
              { icon: Phone, title: "Phone", value: "+91-9527184882", iconClass: "bg-green-50 text-green-600 border-green-100" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-100 shadow-xl group hover:border-black/30 transition-all duration-300"
              >
                <div className={`p-4 rounded-full border group-hover:scale-110 transition-transform ${item.iconClass}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-gray-800 font-semibold">{item.value}</p>
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
                <Label htmlFor="name" className="text-gray-900 font-bold">Complete Name</Label>
                <Input
                  id="name"
                  placeholder="Entre Your Name"
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
                  placeholder="Enter Your Email"
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus-visible:ring-black h-12 border-2"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-900 font-bold">Your Message</Label>
                <Textarea
                  id="message"
                  placeholder="Hello Akash..."
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
