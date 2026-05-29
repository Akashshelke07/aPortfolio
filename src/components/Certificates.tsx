import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaMedal, FaRobot, FaBrain, FaJava, FaDocker, FaPython, FaJs, FaBook } from "react-icons/fa"
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import yoloHackImg from "../YoloHack.jpg"
import hack2Img from "../hack2.jpg"
import gssocImg from "../Gssoc.jpg"

import gdgcImg from "../GDGC.webp"
import pubImg from "../Pub.jpg"

function ImageSlider({ images, onImageClick }: { images: string[], onImageClick: (img: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-border/50 shadow-sm group h-40 bg-muted/20">
      <AnimatePresence mode="wait">
        <motion.img 
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          src={images[currentIndex]} 
          alt="Event Photo" 
          className="w-full h-full object-contain cursor-pointer" 
          onClick={() => onImageClick(images[currentIndex])}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? "bg-white" : "bg-white/50"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  const achievements = [
    {
      title: "Technical Mentor",
      description: "Selected for GirlScript Summer of Code, guiding open-source contributors.",
      icon: <FaMedal className="w-6 h-6 text-yellow-500" />,
      images: [gssocImg]
    },
    {
      title: "Mentor - GDGC NMIET, Pune",
      description: "As a mentor, I guide bright minds on campus and collaborate with the GDG team to organize impactful workshops and events.",
      icon: <FaMedal className="w-6 h-6 text-blue-500" />,
      images: [gdgcImg]
    },
    {
      title: "Mentor & Judge",
      description: "Mentor and Presentation Judge at the YOLO National-Level Hackathon, organized by 23 Ventures at MIT World Peace University.",
      icon: <FaMedal className="w-6 h-6 text-yellow-500" />,
      images: [yoloHackImg, hack2Img]
    }
  ]

  const certificates = [
    {
      title: "Python",
      description: "Issued by Udemy. Demonstrated proficiency in Python programming and problem solving.",
      icon: <FaPython className="w-6 h-6 text-blue-500" />,
      link: "https://drive.google.com/file/d/1H3L-VcdHf2lMN5Q0R280C6k6tL55FRr5/view?usp=drive_link"
    },
    {
      title: "JavaScript",
      description: "Issued by Udemy. Demonstrated proficiency in JavaScript programming.",
      icon: <FaJs className="w-6 h-6 text-yellow-500" />,
      link: "https://drive.google.com/file/d/1eyvvCY8OJkE0_1viw8FXfKJfO1ew6pbe/view?usp=drive_link"
    },
    {
      title: "Java Certification",
      description: "Diamond MindGlance",
      icon: <FaJava className="w-6 h-6 text-[#f89820]" />,
      link: "https://drive.google.com/file/d/1w3G-YR8VvhwijocbpPMnUIvcPRrOBggC/view?usp=drive_link"
    },
    {
      title: "Intermediate DevOps",
      description: "Issued by Udemy. Certified proficiency in DevOps tools and practices.",
      icon: <FaDocker className="w-6 h-6 text-[#2496ED]" />,
      link: "https://drive.google.com/file/d/1TuwiRE_i8Kuyrq4nQ0eH-rD5Ac2fQuig/view?usp=drive_link"
    },
    {
      title: "Generative AI",
      description: "Issued by NxtWave. Focused on GenAI systems and prompt engineering.",
      icon: <FaRobot className="w-6 h-6 text-indigo-500" />,
      link: "https://drive.google.com/file/d/1X2QeEIpjU-0yclnxCJf-oOddyAFJr90W/view?usp=sharing"
    },
    {
      title: "Machine Learning",
      description: "Issued by Internshala. Building predictive models and data analysis.",
      icon: <FaBrain className="w-6 h-6 text-pink-500" />,
      link: "https://drive.google.com/file/d/1fyfKuY0uUSIsEA7zjNvh4MN0ZrVuFnva/view?usp=sharing"
    }
  ]

  const publications = [
    {
      title: "Cloud-Based DBaaS Platform Research",
      description: "As part of our final-year project, we built a cloud-based DBaaS (Database as a Service) platform and published a research paper that is being added to ResearchGate. The platform simplifies database management by providing cloud-hosted databases with features like automatic scaling, backups, monitoring, and security, allowing developers to focus on building applications rather than managing infrastructure.",
      icon: <FaBook className="w-6 h-6 text-purple-500" />,
      images: [pubImg]
    }
  ]

  return (
    <section id="certificates" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Areas of Expertise</h2>
          <div className="h-1 w-20 bg-black mx-auto rounded-full" />
        </div>

        <div className="space-y-12">
          {/* Expertise */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-black/30 hover:bg-card/60 transition-colors shadow-sm"
                >
                  <div className="space-y-4 w-full">
                    {item.images && item.images.length > 0 && (
                      <ImageSlider images={item.images} onImageClick={setSelectedImage} />
                    )}
                    <div>
                      <h3 className="font-semibold text-foreground text-lg leading-tight mb-1.5">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Certificates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-black/30 hover:bg-card/60 transition-colors shadow-sm h-full"
                >
                  <div className="space-y-2 w-full flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="shrink-0">{item.icon}</span>
                      <h3 className="font-semibold text-foreground text-lg leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {item.link && (
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <button 
                        onClick={() => setSelectedCertificate(item.link)}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        View Certificate <ExternalLink size={14} />
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Publications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-black/30 hover:bg-card/60 transition-colors shadow-sm lg:col-span-2"
                >
                  <div className="space-y-4 w-full">
                    {item.images && item.images.length > 0 && (
                      <ImageSlider images={item.images} onImageClick={setSelectedImage} />
                    )}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="shrink-0">{item.icon}</span>
                        <h3 className="font-semibold text-foreground text-lg leading-tight">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-10"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal for Certificates (iFrame) */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4"
          >
            <motion.div 
              className="relative w-full max-w-5xl h-[90vh] md:h-[85vh] bg-background rounded-xl overflow-hidden shadow-2xl flex flex-col"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-3 md:p-4 border-b border-border/50 bg-muted/30">
                <h3 className="font-semibold text-foreground text-sm md:text-base">Certificate Preview</h3>
                <button 
                  onClick={() => setSelectedCertificate(null)}
                  className="bg-black/5 hover:bg-black/10 text-foreground rounded-full p-1.5 md:p-2 transition-all"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
              <div className="w-full flex-grow p-1 md:p-2 bg-muted/10">
                <iframe 
                  src={selectedCertificate.replace(/\/view\?usp=(sharing|drive_link)/, '/preview')} 
                  className="w-full h-full border-0 rounded-lg shadow-inner bg-white" 
                  title="Certificate Preview"
                  allow="autoplay"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
