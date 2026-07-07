import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { X, Menu, GraduationCap, BrainCircuit, Code2, Server, Github, ExternalLink, Briefcase, ChevronLeft, ChevronRight, Send, Linkedin, Twitter, Mail, Brain, Rocket, Camera, Tablet, Cpu, Code, Smartphone, Layout, Monitor, Database, Zap, Command, Cloud, Trophy, Terminal, Network } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaDatabase, FaLink, FaPython, FaProjectDiagram, FaRobot, FaReact, FaLanguage, FaKeyboard, FaUsersCog, FaVectorSquare, FaNodeJs, FaJs, FaDocker, FaAws, FaNetworkWired, FaMicrochip, FaChartBar, FaFilePdf, FaCloud, FaTerminal, FaCode, FaBrain, FaMedal, FaJava, FaBook } from "react-icons/fa";
import { SiScikitlearn, SiOpenai, SiGoogle, SiNextdotjs, SiTailwindcss, SiFastapi, SiFlask, SiExpress, SiPytorch, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiPrometheus, SiGrafana, SiVite, SiFramer, SiSqlite, SiPandas } from "react-icons/si";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as ToastPrimitives from "@radix-ui/react-toast";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Freelance", to: "freelance" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Expertise", to: "certificates" }
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs("header", { className: `fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3" : "bg-transparent py-5"}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6 flex items-center relative min-h-[40px]", children: [
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-10 mx-auto", children: navLinks.map((link) => {
        const isFreelance = link.name === "Freelance";
        return /* @__PURE__ */ jsx(
          Link,
          {
            to: link.to,
            smooth: true,
            duration: 500,
            spy: true,
            activeClass: isFreelance ? "!bg-red-700" : "!text-red-500 font-semibold after:!w-full",
            className: isFreelance ? "bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-md cursor-pointer transition-colors duration-300 hover:bg-red-700 flex items-center outline-none focus:outline-none border-none ring-0 focus:ring-0" : "relative py-1 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full",
            children: link.name
          },
          link.name
        );
      }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute right-0", children: /* @__PURE__ */ jsx(Link, { to: "contact", smooth: true, duration: 500, children: /* @__PURE__ */ jsx(Button, { variant: "default", size: "sm", className: "bg-black hover:bg-slate-800 transition-opacity text-white border-none", children: "Contact Me" }) }) }),
      /* @__PURE__ */ jsx("button", { "aria-label": "Toggle mobile menu", className: "md:hidden text-foreground ml-auto", onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 }) })
    ] }),
    isMobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col space-y-4", children: [
      navLinks.map((link) => {
        const isFreelance = link.name === "Freelance";
        return /* @__PURE__ */ jsx(
          Link,
          {
            to: link.to,
            smooth: true,
            duration: 500,
            spy: true,
            onClick: () => setIsMobileMenuOpen(false),
            activeClass: isFreelance ? "!bg-red-700" : "!text-red-500 font-semibold translate-x-2",
            className: isFreelance ? "block text-center bg-red-600 text-white font-bold py-2.5 rounded-md cursor-pointer transition-colors duration-300 hover:bg-red-700 outline-none focus:outline-none border-none ring-0 focus:ring-0" : "block text-base font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-all duration-300 hover:translate-x-2",
            children: link.name
          },
          link.name
        );
      }),
      /* @__PURE__ */ jsx(Link, { to: "contact", smooth: true, duration: 500, onClick: () => setIsMobileMenuOpen(false), children: /* @__PURE__ */ jsx(Button, { className: "w-full bg-black hover:bg-slate-800 text-white", children: "Contact Me" }) })
    ] })
  ] });
}
const heroAnimation = "/aPortfolio/assets/transparent_gitgif-DsuLRXvq.gif";
function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  return /* @__PURE__ */ jsx("section", { id: "home", className: "min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_50%)]", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        className: "space-y-6 text-center lg:text-left",
        children: [
          /* @__PURE__ */ jsxs(
            motion.h1,
            {
              variants: itemVariants,
              className: "text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]",
              children: [
                /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Pacifico', cursive", fontWeight: "normal" }, className: "text-5xl md:text-7xl lg:text-8xl inline-block mb-2 text-black/90", children: "Hi, I'm" }),
                " ",
                /* @__PURE__ */ jsxs("span", { className: "relative inline-block whitespace-nowrap", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-black font-[SuperSlicedItalic] tracking-wider italic", children: "Akash Shelke" }),
                  /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      className: "absolute -bottom-2 left-0 w-full h-1.5 bg-black rounded-full",
                      initial: { width: 0 },
                      animate: { width: "100%" },
                      transition: { delay: 1, duration: 1 }
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              variants: itemVariants,
              className: "text-2xl md:text-3xl font-extrabold tracking-wide h-10 md:h-12 flex items-center justify-center lg:justify-start text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-800 drop-shadow-sm",
              children: /* @__PURE__ */ jsx(
                Typewriter,
                {
                  options: {
                    strings: [
                      "Generative AI Engineer",
                      "AI/ML Engineer",
                      "Full-Stack Developer",
                      "Freelancer"
                    ],
                    autoStart: true,
                    loop: true
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.p,
            {
              variants: itemVariants,
              className: "text-2xl sm:text-3xl md:text-4xl text-red-600 max-w-2xl lg:mx-0 mx-auto pt-2 text-center lg:text-left font-semibold tracking-wide leading-[1.3]",
              style: { fontFamily: "'Dancing Script', cursive" },
              children: [
                /* @__PURE__ */ jsx("span", { className: "block", children: "Software Developer and Freelancer with 1+ years of experience" }),
                /* @__PURE__ */ jsx("span", { className: "block", children: "in Full-Stack & AI Development" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              variants: itemVariants,
              className: "text-lg md:text-xl max-w-2xl lg:mx-0 mx-auto leading-relaxed font-extrabold pt-3 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-800 drop-shadow-sm italic",
              children: '"Designing and building production-grade AI solutions and web applications for real-world challenges."'
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              variants: itemVariants,
              className: "text-lg md:text-xl text-black max-w-2xl lg:mx-0 mx-auto leading-relaxed font-bold flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-3 pt-2",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 bg-black/5 px-3 py-1.5 rounded-md border border-black/10 text-sm align-middle whitespace-nowrap", children: [
                  /* @__PURE__ */ jsx(FaDatabase, { className: "w-4 h-4 text-blue-500" }),
                  " RAG"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 bg-black/5 px-3 py-1.5 rounded-md border border-black/10 text-sm align-middle whitespace-nowrap", children: [
                  /* @__PURE__ */ jsx(FaLink, { className: "w-4 h-4 text-blue-600" }),
                  " LangChain"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 bg-black/5 px-3 py-1.5 rounded-md border border-black/10 text-sm align-middle whitespace-nowrap", children: [
                  /* @__PURE__ */ jsx(FaPython, { className: "w-4 h-4 text-[#3776AB]" }),
                  " Python"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 bg-black/5 px-3 py-1.5 rounded-md border border-black/10 text-sm align-middle whitespace-nowrap", children: [
                  /* @__PURE__ */ jsx(FaProjectDiagram, { className: "w-4 h-4 text-purple-500" }),
                  " LangGraph"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 bg-black/5 px-3 py-1.5 rounded-md border border-black/10 text-sm align-middle whitespace-nowrap", children: [
                  /* @__PURE__ */ jsx(FaRobot, { className: "w-4 h-4 text-indigo-500" }),
                  " LLMs"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 bg-black/5 px-3 py-1.5 rounded-md border border-black/10 text-sm align-middle whitespace-nowrap", children: [
                  /* @__PURE__ */ jsx(FaReact, { className: "w-4 h-4 text-[#61DAFB]" }),
                  " React.js"
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, delay: 0.5 },
        className: "relative flex justify-center items-center",
        children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-black rounded-2xl blur-3xl opacity-20" }),
          /* @__PURE__ */ jsx("div", { className: "relative bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: heroAnimation,
              alt: "Futuristic Tech Animation",
              className: "w-full max-w-[450px] lg:max-w-none h-auto rounded-lg mix-blend-screen opacity-90"
            }
          ) })
        ] })
      }
    )
  ] }) }) });
}
const Card = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props })
);
Card.displayName = "Card";
const CardHeader = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("h3", { ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props })
);
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const nutanLogo = "/aPortfolio/assets/Nutan-CjxvFtJH.png";
const aspirImg = "/aPortfolio/assets/aspir-CNs2Iakx.jpg";
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-20 bg-muted/30 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.3 },
      className: "max-w-4xl mx-auto space-y-12",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "About Me" }),
          /* @__PURE__ */ jsx("div", { className: "h-1 w-20 bg-black mx-auto rounded-full" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsx(Card, { className: "border-border/60 bg-card/60 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6 md:p-8", children: /* @__PURE__ */ jsx("div", { className: "prose dark:prose-invert max-w-none", children: /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-foreground font-medium whitespace-pre-line", children: "Hi, I’m Akash Shelke, a Full-Stack & Generative AI Developer specialized in MERN Stack, GenAI, RAG Pipelines, MCP Workflows, LangChain, and LangGraph. Passionate about scalable backend architecture, cloud technologies, and intelligent automation." }) }) }) }),
          /* @__PURE__ */ jsx(Card, { className: "border-border/60 bg-card/60 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 md:p-8 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 text-xl font-bold mb-4 text-foreground", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 rounded-full bg-black/10", children: /* @__PURE__ */ jsx(GraduationCap, { className: "h-6 w-6 text-black" }) }),
              /* @__PURE__ */ jsx("h3", { children: "Education" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl bg-background border border-border/50 shadow-sm group hover:border-black/20 transition-all gap-5 md:gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-white p-1.5 rounded-full border border-black/10 shadow-sm shrink-0 flex items-center justify-center mx-auto sm:mx-0", children: /* @__PURE__ */ jsx("img", { src: nutanLogo, alt: "Nutan Logo", className: "w-20 h-20 md:w-24 md:h-24 rounded-full object-contain" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 text-center sm:text-left", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground text-lg group-hover:text-black transition-colors", children: "Nutan Maharashtra Institute of Engineering and Technology" }),
                    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground font-medium", children: "Bachelor of Engineering in Information Technology" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4 md:mt-0 text-center md:text-right space-y-2 shrink-0 md:ml-auto", children: [
                  /* @__PURE__ */ jsx("div", { className: "inline-block px-4 py-1 rounded-full bg-black text-white text-sm font-bold shadow-md", children: "2022 – 2026" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-bold pt-1 text-foreground", children: "CGPA: 7.28" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl bg-background border border-border/50 shadow-sm group hover:border-black/20 transition-all gap-5 md:gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-white p-2 rounded-full border border-black/10 shadow-sm shrink-0 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 overflow-hidden mx-auto sm:mx-0", children: /* @__PURE__ */ jsx("img", { src: aspirImg, alt: "Aspire Logo", className: "w-[140%] max-w-none object-contain scale-[1.2]" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 text-center sm:text-left", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground text-lg group-hover:text-black transition-colors", children: "Aspire Institute" }),
                    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground font-medium", children: "Founded by Harvard Business School." })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-4 md:mt-0 text-center md:text-right space-y-2 shrink-0 md:ml-auto", children: /* @__PURE__ */ jsx("div", { className: "inline-block px-4 py-1 rounded-full bg-black text-white text-sm font-bold shadow-md", children: "April 29 – June 30, 2026" }) })
              ] })
            ] })
          ] }) })
        ] })
      ]
    }
  ) }) });
}
function Skills() {
  const categories = [
    {
      title: "Machine Learning & AI",
      icon: /* @__PURE__ */ jsx(BrainCircuit, { className: "h-6 w-6 text-black" }),
      skills: [
        { name: "LangChain", icon: FaLink, color: "text-blue-500" },
        { name: "LangGraph", icon: FaProjectDiagram, color: "text-purple-500" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-500" },
        { name: "Sentence-Transformers", icon: FaLanguage, color: "text-blue-400" },
        { name: "RAG Pipelines", icon: FaDatabase, color: "text-indigo-500" },
        { name: "Prompt Engineering", icon: FaKeyboard, color: "text-gray-600" },
        { name: "Multi-Agent Systems", icon: FaUsersCog, color: "text-blue-600" },
        { name: "OpenAI API", icon: SiOpenai, color: "text-foreground" },
        { name: "Google Gemini", icon: SiGoogle, color: "text-blue-500" },
        { name: "ChromaDB", icon: FaDatabase, color: "text-rose-500" },
        { name: "Embeddings", icon: FaVectorSquare, color: "text-green-500" }
      ]
    },
    {
      title: "Full-Stack Development",
      icon: /* @__PURE__ */ jsx(Code2, { className: "h-6 w-6 text-black" }),
      skills: [
        { name: "React.js", icon: FaReact, color: "text-[#61DAFB]" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38B2AC]" },
        { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
        { name: "Flask", icon: SiFlask, color: "text-foreground" },
        { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
        { name: "Express.js", icon: SiExpress, color: "text-foreground" },
        { name: "PyTorch", icon: SiPytorch, color: "text-[#EE4C2C]" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
        { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" }
      ]
    },
    {
      title: "DevOps & Languages",
      icon: /* @__PURE__ */ jsx(Server, { className: "h-6 w-6 text-black" }),
      skills: [
        { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
        { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
        { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
        { name: "AWS S3", icon: FaAws, color: "text-[#232F3E]" },
        { name: "Prometheus", icon: SiPrometheus, color: "text-[#E6522C]" },
        { name: "Grafana", icon: SiGrafana, color: "text-[#F46800]" }
      ]
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "py-20 relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Core Skills" }),
      /* @__PURE__ */ jsx("div", { className: "h-1 w-20 bg-black mx-auto rounded-full" })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "0px" },
        className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto",
        children: categories.map((category, idx) => /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, className: "h-full", children: /* @__PURE__ */ jsxs(Card, { className: "h-full border-border/40 bg-card/40 backdrop-blur-sm hover:border-black/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center space-x-4 pb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-background shadow-inner", children: category.icon }),
            /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: category.title })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: category.skills.map((skill, sIdx) => {
            const Icon = skill.icon;
            return /* @__PURE__ */ jsxs("div", { className: "flex items-center px-3 py-1.5 border border-border/60 rounded-md bg-background hover:bg-muted/50 transition-colors group cursor-default shadow-sm hover:shadow-md", children: [
              /* @__PURE__ */ jsx(Icon, { className: `w-4 h-4 mr-2 ${skill.color} group-hover:scale-110 transition-transform duration-300` }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground", children: skill.name })
            ] }, sIdx);
          }) }) })
        ] }) }, idx))
      }
    )
  ] }) });
}
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const TechIcon = ({ name }) => {
  const iconData = {
    "React": { icon: FaReact, color: "text-[#61DAFB]" },
    "FastAPI": { icon: SiFastapi, color: "text-[#009688]" },
    "Uvicorn": { icon: FaTerminal, color: "text-gray-600" },
    "PyTorch": { icon: SiPytorch, color: "text-[#EE4C2C]" },
    "Python": { icon: FaPython, color: "text-[#3776AB]" },
    "Python/Flask": { icon: SiFlask, color: "text-foreground" },
    "Flask": { icon: SiFlask, color: "text-foreground" },
    "TailWind CSS": { icon: SiTailwindcss, color: "text-[#38B2AC]" },
    "LangChain": { icon: FaLink, color: "text-blue-500" },
    "Google Gemini": { icon: SiGoogle, color: "text-blue-500" },
    "Pinecone": { icon: FaDatabase, color: "text-blue-600" },
    "LangGraph": { icon: FaProjectDiagram, color: "text-purple-500" },
    "ChromaDB": { icon: FaDatabase, color: "text-rose-500" },
    "Node.js": { icon: FaNodeJs, color: "text-[#339933]" },
    "Docker": { icon: FaDocker, color: "text-[#2496ED]" },
    "PostgreSQL": { icon: SiPostgresql, color: "text-[#336791]" },
    "Prometheus": { icon: SiPrometheus, color: "text-[#E6522C]" },
    "Grafana": { icon: SiGrafana, color: "text-[#F46800]" },
    "MERN Stack": { icon: FaReact, color: "text-[#61DAFB]" },
    "MongoDB": { icon: SiMongodb, color: "text-[#47A248]" },
    "AWS S3": { icon: FaAws, color: "text-[#232F3E]" },
    "Express": { icon: SiExpress, color: "text-foreground" },
    "Scikit-learn": { icon: SiScikitlearn, color: "text-[#F7931E]" },
    "Sentence-Transformers": { icon: FaLanguage, color: "text-blue-400" },
    "NLP": { icon: FaBrain, color: "text-pink-500" },
    "LLM APIs": { icon: FaRobot, color: "text-indigo-500" },
    "Solidity": { icon: FaCode, color: "text-[#363636]" },
    "Unsloth": { icon: FaTerminal, color: "text-orange-600" },
    "PEFT (LoRA)": { icon: FaProjectDiagram, color: "text-purple-600" },
    "Llama-3.2": { icon: FaRobot, color: "text-blue-600" },
    "Razorpay": { icon: FaCode, color: "text-[#02042B]" },
    "Vercel": { icon: FaTerminal, color: "text-black" },
    "Render": { icon: FaCloud, color: "text-[#46E3B7]" },
    "Pandas": { icon: SiPandas, color: "text-[#150458]" },
    "SQLite": { icon: SiSqlite, color: "text-[#003B57]" },
    "ReportLab": { icon: FaFilePdf, color: "text-red-500" },
    "Recharts": { icon: FaChartBar, color: "text-blue-400" },
    "Framer-Motion": { icon: SiFramer, color: "text-black" },
    "Groq": { icon: FaMicrochip, color: "text-orange-500" },
    "MCP": { icon: FaNetworkWired, color: "text-purple-600" },
    "Vite": { icon: SiVite, color: "text-[#646CFF]" }
  };
  const data = iconData[name] || { icon: FaCode, color: "text-gray-600" };
  const Icon = data.icon;
  return /* @__PURE__ */ jsx(Icon, { className: `w-3.5 h-3.5 mr-1.5 shrink-0 ${data.color}` });
};
function Projects() {
  const projects = [
    {
      title: "Solidity AI Backend",
      description: "A GenAI-powered, local code-generation backend specifically fine-tuned for building Solidity smart contracts. It leverages a quantized Llama-3.2-1B model and PEFT (LoRA) adapters to generate secure, production-ready smart contracts locally with low-latency and zero API costs.",
      techStack: ["FastAPI", "Uvicorn", "PyTorch", "Unsloth", "PEFT (LoRA)", "Llama-3.2", "Solidity", "Python"],
      github: "https://github.com/Akashshelke07/PromptForge",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "FinReport Agent",
      description: "An automated, agentic AI platform that digests raw accounting data to autonomously generate board-ready financial statements and compliance documents. Built with a multi-agent LangGraph workflow, RAG pipeline, and secure FastMCP tool execution.",
      techStack: ["React", "Vite", "Tailwind CSS", "Python", "FastAPI", "LangGraph", "LangChain", "MCP", "ChromaDB", "Pandas", "SQLite", "Groq"],
      github: "https://github.com/Akashshelke07/finreport-agent",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Cloud Database-as-a-Service (DBaaS) Platform",
      description: "Cloud-native DBaaS platform for spinning up, managing, and monitoring MySQL, PostgreSQL, MongoDB, and Redis databases from the browser, featuring Prometheus/Grafana monitoring and an LLM-powered assistant.",
      techStack: ["React", "Node.js", "Docker", "PostgreSQL", "Prometheus", "Grafana", "LLM APIs"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "AI Travel Recommendation Engine",
      description: "AI-powered recommendation engine using Scikit-learn and Sentence-Transformers to personalize travel suggestions based on user mood, budget, and preferences, integrated via custom API interfaces.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Python/Flask", "Scikit-learn", "Sentence-Transformers", "NLP"],
      github: "https://github.com/Akashshelke07/AI-Traveling-Booking-Platform",
      image: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?q=80&w=1000&auto=format&fit=crop"
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "py-20 bg-muted/20 relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Featured Projects" }),
      /* @__PURE__ */ jsx("div", { className: "h-1 w-20 bg-black mx-auto rounded-full" })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "0px" },
        className: "grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto",
        children: projects.map((project, idx) => /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, className: "h-full", children: /* @__PURE__ */ jsxs(Card, { className: "h-full flex flex-col overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm group hover:border-black/50 hover:shadow-xl hover:shadow-black/10 transition-all duration-300", children: [
          /* @__PURE__ */ jsxs("div", { className: "h-48 overflow-hidden relative border-b border-border/50", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none" }),
            project.liveDemo ? /* @__PURE__ */ jsx("a", { href: project.liveDemo, target: "_blank", rel: "noopener noreferrer", className: "block w-full h-full", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: project.image,
                alt: project.title,
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              }
            ) }) : /* @__PURE__ */ jsx(
              "img",
              {
                src: project.image,
                alt: project.title,
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl group-hover:text-black transition-colors", children: project.title }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "flex-1 space-y-4", children: [
            /* @__PURE__ */ jsx(CardDescription, { className: "text-base leading-relaxed text-muted-foreground", children: project.description }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pt-2", children: project.techStack.map((tech, tIdx) => /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-black/5 text-black hover:bg-black/10 font-medium px-2.5 py-1 flex items-center border border-black/10", children: [
              /* @__PURE__ */ jsx(TechIcon, { name: tech }),
              tech
            ] }, tIdx)) })
          ] }),
          project.github || project.liveDemo ? /* @__PURE__ */ jsxs(CardFooter, { className: "pt-4 border-t border-border/50 flex flex-col sm:flex-row gap-4", children: [
            project.github && /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "w-full flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground group-hover:border-primary/50 transition-colors", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx(Github, { className: "w-4 h-4" }),
              "GitHub"
            ] }) }),
            project.liveDemo && /* @__PURE__ */ jsx(Button, { size: "sm", className: "w-full flex items-center justify-center gap-2 bg-black hover:bg-slate-800 text-white", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: project.liveDemo, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" }),
              "Live Demo"
            ] }) })
          ] }) : /* @__PURE__ */ jsx(CardFooter, { className: "pt-4 flex flex-col sm:flex-row gap-4", children: /* @__PURE__ */ jsx("div", { className: "h-9 w-full invisible" }) })
        ] }) }, idx))
      }
    )
  ] }) });
}
const sbrainiacLogo = "/aPortfolio/assets/logox-c7n2i_Ko.jpg";
const scaleFullLogo = "/aPortfolio/assets/scalefull__logo-DJ5iyx0Q.png";
function Experience() {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "ScaleFull Technologies LLP",
      logo: scaleFullLogo,
      duration: "Dec 2024 – Feb 2025",
      bullets: [
        "Designed and integrated an AI-powered recommendation engine using Scikit-learn and Sentence-Transformers, personalizing travel suggestions based on user mood, budget, and preferences.",
        "Built the full-stack application layer with React.js, Node.js, Express, and MongoDB, integrating the AI engine via custom API interfaces.",
        "Built a Python/Flask microservice that used NLP-based embeddings and Sentence-Transformers to match users with destinations from large-scale Kaggle datasets.",
        "Contributed to the full development life cycle — from data pre-processing and model selection to API integration, testing, and deployment."
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "S Brainiac Learning",
      url: "https://www.sbrainiaclearning.com/",
      logo: sbrainiacLogo,
      isLive: true,
      duration: "Oct 2025 – Jan 2026",
      bullets: [
        "Launched and scaled a production-grade e-learning platform using the MERN stack, serving 5,000+ users with an 85% test completion rate.",
        "Developed scalable REST APIs with Node.js and MongoDB, enabling secure authentication, role-based access, and real-time progress tracking.",
        "Integrated Razorpay payments and AWS S3 for seamless transactions and reliable media delivery.",
        "Deployed and maintained the platform on Vercel and Render, ensuring high uptime and production reliability."
      ]
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "experience", className: "py-20 relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Professional Experience" }),
      /* @__PURE__ */ jsx("div", { className: "h-1 w-20 bg-black mx-auto rounded-full" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-5 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-black/20 before:via-black/40 before:to-transparent", children: experiences.map((exp, idx) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "0px" },
        transition: { duration: 0.3, delay: idx * 0.1 },
        className: `relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-black shadow shrink-0 absolute left-5 md:left-1/2 -translate-x-1/2 z-10", children: /* @__PURE__ */ jsx(Briefcase, { className: "w-4 h-4 text-white" }) }),
          /* @__PURE__ */ jsxs(Card, { className: "w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 border-border/50 bg-card/50 backdrop-blur-sm hover:border-black/30 transition-colors shadow-sm", children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 sm:gap-4", children: [
              exp.logo && /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-1 bg-white p-1 rounded-md shadow-sm border border-gray-100 flex items-center justify-center", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: exp.logo,
                  alt: `${exp.company} logo`,
                  className: "h-10 sm:h-12 w-auto max-w-[70px] sm:max-w-[100px] xl:max-w-[120px] object-contain rounded-sm"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-w-0", children: [
                /* @__PURE__ */ jsx(CardTitle, { className: "text-base sm:text-lg xl:text-xl text-foreground font-bold", children: exp.company }),
                /* @__PURE__ */ jsxs("div", { className: "mt-1 text-sm sm:text-base xl:text-lg text-slate-800 font-semibold flex flex-wrap items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "", children: exp.role }),
                  exp.isLive && exp.url && /* @__PURE__ */ jsxs("span", { className: "ml-2 whitespace-nowrap shrink-0", children: [
                    "| ",
                    /* @__PURE__ */ jsx("a", { href: exp.url, target: "_blank", rel: "noopener noreferrer", className: "text-red-600 hover:text-red-700 hover:underline transition-colors ml-1", children: "Live" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-muted-foreground/80 bg-muted/50 w-fit px-2 py-0.5 rounded-full mt-2", children: exp.duration })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("ul", { className: "space-y-2 mt-2", children: exp.bullets.map((bullet, bIdx) => /* @__PURE__ */ jsxs("li", { className: "text-muted-foreground text-sm flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "text-black mr-2 mt-1 -ml-1 text-lg leading-none", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: bullet })
            ] }, bIdx)) }) })
          ] })
        ]
      },
      idx
    )) })
  ] }) });
}
function Freelance() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };
  return /* @__PURE__ */ jsx("section", { id: "freelance", className: "py-20 bg-muted/30 relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Freelance" }),
      /* @__PURE__ */ jsx("p", { className: "text-red-700 font-semibold max-w-2xl mx-auto text-lg", children: "I'm currently available for freelance opportunities and open to collaborating with startups, businesses, and ambitious founders." }),
      /* @__PURE__ */ jsx("div", { className: "h-1 w-20 bg-black mx-auto rounded-full mt-4" })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "0px" },
        variants: containerVariants,
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16",
        children: [
          /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsx("a", { href: "https://www.sbrainiaclearning.com/", target: "_blank", rel: "noopener noreferrer", className: "block w-full h-full", children: /* @__PURE__ */ jsxs(Card, { className: "flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group hover:border-black/30 hover:shadow-xl transition-all duration-300 cursor-pointer h-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "overflow-hidden relative border-b border-border/50 bg-black/5", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `${"/aPortfolio/"}Screenshot/sbrain.png`,
                  alt: "S. Brainiac Learning",
                  className: "w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-6 text-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold group-hover:text-red-700 transition-colors", children: "S. Brainiac Learning" }) })
          ] }) }) }),
          /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsx("a", { href: "https://www.humanityconserve.co.in/", target: "_blank", rel: "noopener noreferrer", className: "block w-full h-full", children: /* @__PURE__ */ jsxs(Card, { className: "flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group hover:border-black/30 hover:shadow-xl transition-all duration-300 cursor-pointer h-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "overflow-hidden relative border-b border-border/50 bg-black/5", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `${"/aPortfolio/"}Screenshot/Humanity.png`,
                  alt: "Humanity Conserve",
                  className: "w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-6 text-center", children: /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold group-hover:text-red-700 transition-colors", children: "Humanity Conserve" }) })
          ] }) }) }),
          /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsx("a", { href: "https://car-wow-swart.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "block w-full h-full", children: /* @__PURE__ */ jsxs(Card, { className: "flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group hover:border-black/30 hover:shadow-xl transition-all duration-300 cursor-pointer h-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "overflow-hidden relative border-b border-border/50 bg-black/5", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `${"/aPortfolio/"}Screenshot/Autoverse.png`,
                  alt: "AutoVerse (incomplete)",
                  className: "w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-6 text-center", children: /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold group-hover:text-red-700 transition-colors", children: "AutoVerse (incomplete)" }) })
          ] }) }) }),
          /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsx("div", { className: "block w-full h-full", children: /* @__PURE__ */ jsxs(Card, { className: "flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group hover:border-black/30 hover:shadow-xl transition-all duration-300 cursor-pointer h-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "overflow-hidden relative border-b border-border/50 bg-black/5", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `${"/aPortfolio/"}Screenshot/OIP.webp`,
                  alt: "AI Powered Autoshift Software",
                  className: "w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-6 text-center", children: /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold group-hover:text-red-700 transition-colors", children: "AI Powered Autoshift Software" }) })
          ] }) }) }),
          /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsx("a", { href: "https://soultechsolutions.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "block w-full h-full", children: /* @__PURE__ */ jsxs(Card, { className: "flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group hover:border-black/30 hover:shadow-xl transition-all duration-300 cursor-pointer h-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "overflow-hidden relative border-b border-border/50 bg-black/5", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `${"/aPortfolio/"}Screenshot/soultechsolutions.png`,
                  alt: "Soultech Solutions",
                  className: "w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-6 text-center", children: /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold group-hover:text-red-700 transition-colors", children: "Soultech Solutions" }) })
          ] }) }) })
        ]
      }
    )
  ] }) });
}
const yoloHackImg = "/aPortfolio/assets/YoloHack-tkxz6Yvt.jpg";
const hack2Img = "/aPortfolio/assets/hack2-Cj5S4Ytg.jpg";
const gssocImg = "/aPortfolio/assets/Gssoc-C1yXSuxU.jpg";
const gdgcImg = "/aPortfolio/assets/GDGC-DBYVCVXP.webp";
const pubImg = "/aPortfolio/assets/Pub-DLvbUXhe.jpg";
function ImageSlider({ images, altText, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-xl border border-border/50 shadow-sm group h-40 bg-muted/20", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.img,
      {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.2 },
        src: images[currentIndex],
        alt: altText,
        className: "w-full h-full object-contain cursor-pointer",
        onClick: () => onImageClick(images[currentIndex])
      },
      currentIndex
    ) }),
    images.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prevImage,
          className: "absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity",
          children: /* @__PURE__ */ jsx(ChevronLeft, { size: 18 })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: nextImage,
          className: "absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity",
          children: /* @__PURE__ */ jsx(ChevronRight, { size: 18 })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5", children: images.map((_, idx) => /* @__PURE__ */ jsx("div", { className: `w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? "bg-white" : "bg-white/50"}` }, idx)) })
    ] })
  ] });
}
function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const achievements = [
    {
      title: "Technical Mentor",
      description: "Selected for GirlScript Summer of Code, guiding open-source contributors.",
      icon: /* @__PURE__ */ jsx(FaMedal, { className: "w-6 h-6 text-yellow-500" }),
      images: [gssocImg]
    },
    {
      title: "Mentor - GDGC NMIET, Pune",
      description: "As a mentor, I guide bright minds on campus and collaborate with the GDG team to organize impactful workshops and events.",
      icon: /* @__PURE__ */ jsx(FaMedal, { className: "w-6 h-6 text-blue-500" }),
      images: [gdgcImg]
    },
    {
      title: "Mentor & Judge",
      description: "Mentor and Presentation Judge at the YOLO National-Level Hackathon, organized by 23 Ventures at MIT World Peace University.",
      icon: /* @__PURE__ */ jsx(FaMedal, { className: "w-6 h-6 text-yellow-500" }),
      images: [yoloHackImg, hack2Img]
    }
  ];
  const certificates = [
    {
      title: "Python",
      description: "Issued by Udemy. Demonstrated proficiency in Python programming and problem solving.",
      icon: /* @__PURE__ */ jsx(FaPython, { className: "w-6 h-6 text-blue-500" }),
      link: "https://drive.google.com/file/d/1H3L-VcdHf2lMN5Q0R280C6k6tL55FRr5/view?usp=drive_link"
    },
    {
      title: "JavaScript",
      description: "Issued by Udemy. Demonstrated proficiency in JavaScript programming.",
      icon: /* @__PURE__ */ jsx(FaJs, { className: "w-6 h-6 text-yellow-500" }),
      link: "https://drive.google.com/file/d/1eyvvCY8OJkE0_1viw8FXfKJfO1ew6pbe/view?usp=drive_link"
    },
    {
      title: "Java Certification",
      description: "Diamond MindGlance",
      icon: /* @__PURE__ */ jsx(FaJava, { className: "w-6 h-6 text-[#f89820]" }),
      link: "https://drive.google.com/file/d/1w3G-YR8VvhwijocbpPMnUIvcPRrOBggC/view?usp=drive_link"
    },
    {
      title: "Intermediate DevOps",
      description: "Issued by Udemy. Certified proficiency in DevOps tools and practices.",
      icon: /* @__PURE__ */ jsx(FaDocker, { className: "w-6 h-6 text-[#2496ED]" }),
      link: "https://drive.google.com/file/d/1TuwiRE_i8Kuyrq4nQ0eH-rD5Ac2fQuig/view?usp=drive_link"
    },
    {
      title: "Generative AI",
      description: "Issued by NxtWave. Focused on GenAI systems and prompt engineering.",
      icon: /* @__PURE__ */ jsx(FaRobot, { className: "w-6 h-6 text-indigo-500" }),
      link: "https://drive.google.com/file/d/1X2QeEIpjU-0yclnxCJf-oOddyAFJr90W/view?usp=sharing"
    },
    {
      title: "Machine Learning",
      description: "Issued by Internshala. Building predictive models and data analysis.",
      icon: /* @__PURE__ */ jsx(FaBrain, { className: "w-6 h-6 text-pink-500" }),
      link: "https://drive.google.com/file/d/1fyfKuY0uUSIsEA7zjNvh4MN0ZrVuFnva/view?usp=sharing"
    }
  ];
  const publications = [
    {
      title: "Cloud-Based DBaaS Platform Research",
      description: "As part of our final-year project, we built a cloud-based DBaaS (Database as a Service) platform and published a research paper that is being added to ResearchGate. The platform simplifies database management by providing cloud-hosted databases with features like automatic scaling, backups, monitoring, and security, allowing developers to focus on building applications rather than managing infrastructure.",
      icon: /* @__PURE__ */ jsx(FaBook, { className: "w-6 h-6 text-purple-500" }),
      images: [pubImg]
    }
  ];
  return /* @__PURE__ */ jsxs("section", { id: "certificates", className: "py-20 bg-muted/30 relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6 max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Areas of Expertise" }),
        /* @__PURE__ */ jsx("div", { className: "h-1 w-20 bg-black mx-auto rounded-full" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-6 text-foreground", children: "Expertise" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: achievements.map((item, idx) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true, margin: "0px" },
              transition: { duration: 0.4, delay: idx * 0.1 },
              className: "flex flex-col p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-black/30 hover:bg-card/60 transition-colors shadow-sm",
              children: /* @__PURE__ */ jsxs("div", { className: "space-y-4 w-full", children: [
                item.images && item.images.length > 0 && /* @__PURE__ */ jsx(ImageSlider, { images: item.images, altText: item.title, onImageClick: setSelectedImage }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground text-lg leading-tight mb-1.5", children: item.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.description })
                ] })
              ] })
            },
            idx
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-6 text-foreground", children: "Certificates" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: certificates.map((item, idx) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true, margin: "0px" },
              transition: { duration: 0.4, delay: idx * 0.1 },
              className: "flex flex-col p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-black/30 hover:bg-card/60 transition-colors shadow-sm h-full",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2 w-full flex-grow", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsx("span", { className: "shrink-0", children: item.icon }),
                    /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground text-lg leading-tight", children: item.title })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.description })
                ] }),
                item.link && /* @__PURE__ */ jsx("div", { className: "mt-4 pt-4 border-t border-border/30", children: /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setSelectedCertificate(item.link),
                    className: "inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors",
                    children: [
                      "View Certificate ",
                      /* @__PURE__ */ jsx(ExternalLink, { size: 14 })
                    ]
                  }
                ) })
              ]
            },
            idx
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-6 text-foreground", children: "Publications" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: publications.map((item, idx) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true, margin: "0px" },
              transition: { duration: 0.4, delay: idx * 0.1 },
              className: "flex flex-col p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-black/30 hover:bg-card/60 transition-colors shadow-sm lg:col-span-2",
              children: /* @__PURE__ */ jsxs("div", { className: "space-y-4 w-full", children: [
                item.images && item.images.length > 0 && /* @__PURE__ */ jsx(ImageSlider, { images: item.images, altText: item.title, onImageClick: setSelectedImage }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
                    /* @__PURE__ */ jsx("span", { className: "shrink-0", children: item.icon }),
                    /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground text-lg leading-tight", children: item.title })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.description })
                ] })
              ] })
            },
            idx
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: selectedImage && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setSelectedImage(null),
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4 cursor-zoom-out",
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSelectedImage(null),
              className: "absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-10",
              children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6 md:w-8 md:h-8" })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.img,
            {
              initial: { scale: 0.9 },
              animate: { scale: 1 },
              exit: { scale: 0.9 },
              src: selectedImage,
              alt: `Expanded view of ${(selectedImage == null ? void 0 : selectedImage.split("/").pop()) ?? "image"}`,
              className: "max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain cursor-default",
              onClick: (e) => e.stopPropagation()
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: selectedCertificate && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setSelectedCertificate(null),
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4",
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "relative w-full max-w-5xl h-[90vh] md:h-[85vh] bg-background rounded-xl overflow-hidden shadow-2xl flex flex-col",
            initial: { scale: 0.9, y: 20 },
            animate: { scale: 1, y: 0 },
            exit: { scale: 0.9, y: 20 },
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 md:p-4 border-b border-border/50 bg-muted/30", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground text-sm md:text-base", children: "Certificate Preview" }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setSelectedCertificate(null),
                    className: "bg-black/5 hover:bg-black/10 text-foreground rounded-full p-1.5 md:p-2 transition-all",
                    children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5 md:w-6 md:h-6" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full flex-grow p-1 md:p-2 bg-muted/10", children: /* @__PURE__ */ jsx(
                "iframe",
                {
                  src: selectedCertificate.replace(/\/view\?usp=(sharing|drive_link)/, "/preview"),
                  className: "w-full h-full border-0 rounded-lg shadow-inner bg-white",
                  title: "Certificate Preview",
                  allow: "autoplay"
                }
              ) })
            ]
          }
        )
      }
    ) })
  ] });
}
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;
let memoryState = { toasts: [] };
let listeners = [];
function toast({ ...props }) {
  const id = Math.random().toString(36).slice(2, 9);
  const newToast = {
    ...props,
    id
  };
  memoryState = {
    ...memoryState,
    toasts: [newToast, ...memoryState.toasts].slice(0, 5)
  };
  listeners.forEach((listener) => listener(memoryState));
  setTimeout(() => {
    memoryState = {
      ...memoryState,
      toasts: memoryState.toasts.filter((t) => t.id !== id)
    };
    listeners.forEach((listener) => listener(memoryState));
  }, 5e3);
  return id;
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((l) => l !== setState);
    };
  }, [state]);
  return {
    ...state,
    toast
  };
}
const mapIcon = "/aPortfolio/assets/map-C9WaQaoK.png";
const mailIcon = "/aPortfolio/assets/mail-DpfIUwVa.png";
function Contact() {
  const { toast: toast2 } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!nameRegex.test(formData.name.trim())) {
      toast2({
        title: "Invalid Name",
        description: "Please enter a valid name (letters and spaces only, minimum 3 characters).",
        variant: "destructive"
      });
      return;
    }
    if (!emailRegex.test(formData.email.trim())) {
      toast2({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    if (formData.message.trim().length < 10) {
      toast2({
        title: "Message Too Short",
        description: "Please enter a message of at least 10 characters so I can understand your request.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        access_key: "6c190bd7-013a-4d96-aed4-40e58feeafd9",
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `New Project Requirement from ${formData.name}`,
        from_name: "Portfolio Contact Form"
      })
    });
    const result = await response.json();
    if (result.success) {
      toast2({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I will get back to you soon.",
        variant: "default"
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast2({
        title: "Submission failed",
        description: result.message || "Something went wrong. Please try again or email me directly.",
        variant: "destructive"
      });
    }
    setIsSubmitting(false);
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-20 relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Get In Touch" }),
      /* @__PURE__ */ jsx("div", { className: "h-1 w-20 bg-black mx-auto rounded-full" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto pt-4 text-lg", children: "Have a project in mind or want to discuss opportunities? I'd love to hear from you." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start relative z-10", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.3 },
          className: "space-y-6",
          children: [
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
            }
          ].map((item, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.3, delay: index * 0.1 },
              className: "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-xl group hover:border-black/20 hover:-translate-y-1 transition-all duration-300",
              children: [
                /* @__PURE__ */ jsx("div", { className: "shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300", children: /* @__PURE__ */ jsx("img", { src: item.imgUrl, alt: item.title, className: "w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-md" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 w-full", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-1", children: item.title }),
                  item.isLink ? /* @__PURE__ */ jsx("a", { href: item.href, className: "text-base sm:text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors break-words sm:break-normal block", children: item.value }) : /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg font-bold text-gray-900 break-words sm:break-normal block", children: item.value })
                ] })
              ]
            },
            index
          ))
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.3 },
          className: "p-8 rounded-2xl border-2 border-gray-100 shadow-2xl relative overflow-hidden group transition-all duration-500",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-black/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6 relative z-10", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "name", className: "text-gray-900 font-bold", children: "Full Name" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "name",
                    placeholder: "Enter your full name",
                    required: true,
                    className: "bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus-visible:ring-black h-12 border-2",
                    value: formData.name,
                    onChange: (e) => setFormData({ ...formData, name: e.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "email", className: "text-gray-900 font-bold", children: "Email Address" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    placeholder: "Enter your email address",
                    required: true,
                    className: "bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus-visible:ring-black h-12 border-2",
                    value: formData.email,
                    onChange: (e) => setFormData({ ...formData, email: e.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "message", className: "text-gray-900 font-bold", children: "Project Details & Message" }),
                /* @__PURE__ */ jsx(
                  Textarea,
                  {
                    id: "message",
                    placeholder: "Tell me about your project requirements, goals, or timeline...",
                    rows: 5,
                    required: true,
                    className: "bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus-visible:ring-black resize-none pt-4 border-2",
                    value: formData.message,
                    onChange: (e) => setFormData({ ...formData, message: e.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  type: "submit",
                  className: "w-full h-12 bg-black hover:bg-slate-800 text-white rounded-lg transition-all",
                  disabled: isSubmitting,
                  children: isSubmitting ? /* @__PURE__ */ jsx("span", { className: "animate-pulse", children: "Sending..." }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    "Send Message ",
                    /* @__PURE__ */ jsx(Send, { className: "ml-2 w-4 h-4" })
                  ] })
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] }) });
}
function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Akashshelke07/",
      icon: Github,
      colorClass: "text-[#181717] hover:bg-[#181717]/10"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/akash-kailas-shelke-5b1520259/",
      icon: Linkedin,
      colorClass: "text-[#0A66C2] hover:bg-[#0A66C2]/10"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/akashshelke07",
      icon: Twitter,
      colorClass: "text-[#1DA1F2] hover:bg-[#1DA1F2]/10"
    },
    {
      name: "Email",
      url: "mailto:akashshelke594@gmail.com",
      icon: Mail,
      colorClass: "text-[#EA4335] hover:bg-[#EA4335]/10"
    }
  ];
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border/50 bg-background py-10", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex flex-col items-center justify-between text-center space-y-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex space-x-6", children: socialLinks.map((link) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: link.url,
        target: link.name !== "Email" ? "_blank" : void 0,
        rel: link.name !== "Email" ? "noopener noreferrer" : void 0,
        className: `group relative flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:scale-110 ${link.colorClass}`,
        children: [
          /* @__PURE__ */ jsx(link.icon, { className: "w-6 h-6" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: link.name }),
          /* @__PURE__ */ jsxs("span", { className: "absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1e1e1e] text-white text-xs font-semibold rounded-lg opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl z-20", children: [
            link.name,
            /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#1e1e1e] rotate-45 rounded-sm -z-10" })
          ] })
        ]
      },
      link.name
    )) }),
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Akash Shelke. All rights reserved."
    ] })
  ] }) });
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100",
      className
    ),
    "toast-close": "",
    ...props,
    children: "X"
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
function FloatingElement({
  icon: Icon,
  className = "",
  delay = 0,
  duration = 5,
  yOffset = 20,
  rotate = 10
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: yOffset },
      animate: {
        opacity: [0.1, 0.3, 0.1],
        y: [0, -yOffset, 0],
        rotate: [0, rotate, -rotate, 0],
        scale: [1, 1.15, 1]
      },
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      },
      className: `absolute pointer-events-none drop-shadow-[0_0_20px_rgba(37,99,235,0.4)] ${className}`,
      children: /* @__PURE__ */ jsx(Icon, { className: "w-14 h-14 md:w-24 md:h-24 text-black" })
    }
  );
}
const TechMesh = () => /* @__PURE__ */ jsxs("svg", { className: "absolute inset-0 w-full h-full opacity-[0.05] -z-10", viewBox: "0 0 800 800", children: [
  /* @__PURE__ */ jsx(
    motion.path,
    {
      d: "M100 100 L300 200 L200 400 L500 300 L700 500 L400 700 L100 600 Z",
      fill: "none",
      stroke: "url(#gradient)",
      strokeWidth: "1",
      initial: { pathLength: 0, opacity: 0 },
      animate: { pathLength: 1, opacity: 1 },
      transition: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
    }
  ),
  /* @__PURE__ */ jsx(
    motion.circle,
    {
      cx: "300",
      cy: "200",
      r: "4",
      fill: "#000000",
      animate: { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] },
      transition: { duration: 2, repeat: Infinity }
    }
  ),
  /* @__PURE__ */ jsx(
    motion.circle,
    {
      cx: "500",
      cy: "300",
      r: "4",
      fill: "#000000",
      animate: { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] },
      transition: { duration: 2, delay: 0.5, repeat: Infinity }
    }
  ),
  /* @__PURE__ */ jsx(
    motion.circle,
    {
      cx: "200",
      cy: "400",
      r: "3",
      fill: "#000000",
      animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] },
      transition: { duration: 2, delay: 1, repeat: Infinity }
    }
  ),
  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
    /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#000000" }),
    /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#000000" })
  ] }) })
] });
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
  { icon: Network, className: "top-[92%] left-[85%]", delay: 4.2, duration: 10 }
];
function GlobalAnimations() {
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 pointer-events-none z-0 overflow-hidden h-full", children: [
    /* @__PURE__ */ jsxs("svg", { className: "absolute inset-0 w-full h-full opacity-[0.03]", viewBox: "0 0 1000 1000", children: [
      /* @__PURE__ */ jsx("pattern", { id: "grid", width: "80", height: "80", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("path", { d: "M 80 0 L 0 0 0 80", fill: "none", stroke: "currentColor", strokeWidth: "1" }) }),
      /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "url(#grid)" })
    ] }),
    floatingIcons.map((item, i) => /* @__PURE__ */ jsx(
      FloatingElement,
      {
        icon: item.icon,
        className: item.className,
        delay: item.delay,
        duration: item.duration
      },
      i
    )),
    /* @__PURE__ */ jsx(TechMesh, {}),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] -z-20 animate-pulse" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] -z-20 animate-pulse" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(0,0,0,0.03)_0%,transparent_50%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.03)_0%,transparent_50%)]" })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground selection:bg-black/30 selection:text-black font-sans relative", children: [
    /* @__PURE__ */ jsx(GlobalAnimations, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Experience, {}),
      /* @__PURE__ */ jsx(Freelance, {}),
      /* @__PURE__ */ jsx(Skills, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Certificates, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
function render() {
  return ReactDOMServer.renderToString(/* @__PURE__ */ jsx(App, {}));
}
export {
  render
};
