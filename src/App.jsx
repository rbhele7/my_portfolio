
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Mail, ArrowUpRight, ArrowRight,
  Code2, Cpu, Globe, Database, Terminal, Layers,
  Menu, X, ExternalLink, Sparkles, ChevronDown
} from "lucide-react";
import heroImage from "./assets/hero.png";

const profile = {
  name: "Riya Bhele",
  role: "Computer Science Student",
  college: "IIIT Lucknow",
  email: "rbhele7@gmail.com",
  linkedin: "https://www.linkedin.com/in/riya-bhele-43340a382/",
  github: "https://github.com/rbhele7",
};

const skills = [
  {
    title: "Programming",
    icon: Code2,
    items: ["C++", "Python", "Java", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: Globe,
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Terminal,
    items: ["FastAPI", "REST APIs", "Node.js"],
  },
  {
    title: "Data & Tools",
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "Git", "Docker"],
  },
];

const achievements = [
  {
    title: "Competitive Programming",
    desc: "Consistently solving algorithmic problems and strengthening problem-solving skills.",
  },
  {
    title: "Hackathons & Innovation",
    desc: "Building practical technology-driven solutions through collaborative hackathons.",
  },
  {
    title: "Project Development",
    desc: "Turning ideas into functional applications through hands-on development.",
  },
];

const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Indian Institute of Information Technology, Lucknow",
    period: "Currently pursuing",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ label, title, subtitle }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow"><span /> {label}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
}

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Education", "Contact"];

  return (
    <nav className={`navbar ${scrolled ? "nav-scrolled" : ""}`}>
      <a href="#home" className="nav-logo">
        <span className="logo-mark">R</span>
        <span>riya<span className="logo-dot">.</span></span>
      </a>

      <div className="nav-links">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </div>

      <a href="#contact" className="nav-cta">
        Let's connect <ArrowUpRight size={16} />
      </a>

      <button className="mobile-menu" onClick={() => setMenu(!menu)}>
        {menu ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {menu && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenu(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  const [typed, setTyped] = useState(0);

  const phrases = [
    "building digital experiences.",
    "solving real problems.",
    "exploring AI & tech.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTyped((prev) => (prev + 1) % phrases.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-grid" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="availability">
            <span className="pulse-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <h1>
            Hi, I'm <span className="gradient-text">Riya Bhele.</span>
            <br />
            I love{" "}
            <span className="typed-text">
              <AnimatePresence mode="wait">
                <motion.span
                  key={typed}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  {phrases[typed]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="hero-description">
            Computer Science student at IIIT Lucknow, exploring the intersection
            of software engineering, AI and creative technology. I build things
            that turn ideas into experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              Explore my work <ArrowRight size={17} />
            </a>

            <a href="#contact" className="btn-secondary">
              Get in touch <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>

            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="visual-ring ring-one" />
          <div className="visual-ring ring-two" />
          <div className="visual-ring ring-three" />

          <div className="hero-image-frame">
            <img src={heroImage} alt="Developer workspace" />
          </div>

          <motion.div
            className="floating-card float-card-top"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles size={17} className="accent-icon" />
            <div>
              <span>CREATIVE MIND</span>
              <strong>Always exploring</strong>
            </div>
          </motion.div>

          <motion.div
            className="floating-card float-card-bottom"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <Code2 size={18} className="accent-icon-cyan" />
            <div>
              <span>DEVELOPER</span>
              <strong>Code. Build. Repeat.</strong>
            </div>
          </motion.div>

          <div className="visual-cross cross-one">+</div>
          <div className="visual-cross cross-two">+</div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-padding about-section">
      <div className="about-layout">
        <div className="about-left">
          <SectionHeading
            label="01 — ABOUT ME"
            title="Curiosity drives everything."
          />
        </div>

        <Reveal className="about-right">
          <p className="about-big">
            I'm a developer who believes technology should be{" "}
            <span className="gradient-text">
              thoughtful, useful and exciting.
            </span>
          </p>

          <p className="about-text">
            Currently pursuing Computer Science at IIIT Lucknow, I enjoy
            experimenting with software, building full-stack applications,
            exploring AI and learning how things work under the hood.
          </p>

          <p className="about-text">
            From solving algorithmic challenges to building projects around real
            problems, I love the process of taking an idea and making it real.
          </p>

          <div className="about-stat-row">
            <div className="about-stat">
              <span className="stat-symbol">∞</span>
              <p>Curiosity</p>
            </div>

            <div className="about-stat">
              <span className="stat-symbol">01</span>
              <p>Build mindset</p>
            </div>

            <div className="about-stat">
              <span className="stat-symbol">AI</span>
              <p>Future focus</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-padding skills-section">
      <SectionHeading
        label="02 — TECH STACK"
        title="Tools of my trade."
        subtitle="Technologies I work with and continue to explore."
      />

      <div className="skills-grid">
        {skills.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <Reveal delay={i * 0.1} key={skill.title}>
              <div className="skill-card glass">
                <div className="skill-icon">
                  <Icon size={23} />
                </div>

                <h3>{skill.title}</h3>

                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  const projectData = [
    {
      number: "01",
      name: "JanMitra",
      category: "AI · Civic Technology",
      description:
        "An AI-powered civic intelligence platform designed to simplify access to public services, government schemes and grievance management.",
      technologies: ["React", "FastAPI", "Python", "PostgreSQL", "GenAI"],
      github: "https://github.com/Saylee12R/JanMitra",
      live: "https://jan-mitra-umber.vercel.app/",
      theme: "purple",
    },
    {
      number: "02",
      name: "WalletWizz",
      category: "AI · Financial Intelligence",
      description:
        "A financial intelligence platform that transforms financial behaviour into meaningful insights using data-driven analysis and predictive models.",
      technologies: ["React", "FastAPI", "Scikit-learn", "XGBoost"],
      github: "https://github.com/AkshayDev-X/FinFusion_Four",
      live: "https://fin-fusion-four.vercel.app/login",
      theme: "cyan",
    },
    {
      number: "03",
      name: "COSMOS",
      category: "Web · 3D Visualization",
      description:
        "An immersive interactive space experience built around 3D visualization, motion and exploration of the digital universe.",
      technologies: ["React", "Three.js", "React Three Fiber"],
      github: "https://github.com/rbhele7/devSprint",
      live: "",
      theme: "pink",
    },
  ];

  return (
    <section id="projects" className="portfolio-projects">
      <div className="portfolio-projects-container">
        <div className="portfolio-projects-heading">
          <div>
            <span className="portfolio-projects-eyebrow">
              SELECTED WORK
            </span>

            <h2>
              Projects<span className="portfolio-projects-gradient">.</span>
            </h2>
          </div>

          <p>
            Things I've explored, built and experimented with along my journey
            in software development and technology.
          </p>
        </div>

        <div className="portfolio-projects-list">
          {projectData.map((project) => (
            <article
              className={`portfolio-project-card ${project.theme}`}
              key={project.number}
            >
              <div className="portfolio-project-art">
                <span className="portfolio-project-art-label">
                  PROJECT
                </span>

                <span className="portfolio-project-art-number">
                  {project.number}
                </span>

                <div className="portfolio-project-symbol">
                  <Layers size={38} strokeWidth={1.4} />
                </div>

                <span className="portfolio-project-art-name">
                  {project.name}
                </span>
              </div>

              <div className="portfolio-project-details">
                <div className="portfolio-project-top">
                  <span className="portfolio-project-category">
                    {project.category}
                  </span>

                  <span className="portfolio-project-small-number">
                    {project.number} / 03
                  </span>
                </div>

                <h3>{project.name}</h3>

                <p className="portfolio-project-description">
                  {project.description}
                </p>

                <div className="portfolio-project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="portfolio-project-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-project-button"
                    >
                      <Github size={16} />
                      GitHub
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-project-button primary"
                    >
                      <Globe size={16} />
                      Live Demo
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-projects-footer">
          <span>THOUGHTS TURNED INTO CODE.</span>
          <span>01 — 03</span>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding achievements-section"
    >
      <SectionHeading
        label="04 — HIGHLIGHTS"
        title="Beyond the code."
      />

      <div className="achievement-list">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="achievement-item">
              <span className="achievement-index">0{i + 1}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <ArrowUpRight className="achievement-arrow" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-padding education-section">
      <SectionHeading
        label="05 — EDUCATION"
        title="Learning by design."
      />

      {education.map((item, i) => (
        <Reveal key={i}>
          <div className="education-card glass">
            <div className="education-icon">
              <Cpu size={26} />
            </div>

            <div className="education-info">
              <span className="education-period">{item.period}</span>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
            </div>

            <div className="education-dot" />
          </div>
        </Reveal>
      ))}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="contact-orb" />

      <Reveal className="contact-content">
        <p className="eyebrow">
          <span /> 06 — CONTACT
        </p>

        <h2>
          Let's make something
          <br />
          <span className="gradient-text">interesting.</span>
        </h2>

        <p>
          Have an opportunity, an idea or just want to talk tech?
          My inbox is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="btn-primary contact-button"
        >
          Say hello <Mail size={17} />
        </a>

        <div className="contact-socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={19} /> GitHub
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={19} /> LinkedIn
          </a>

          <a href={`mailto:${profile.email}`}>
            <Mail size={19} /> Email
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="nav-logo">
        <span className="logo-mark">R</span>
        <span>riya<span className="logo-dot">.</span></span>
      </a>

      <p>Designed with curiosity. Built with code.</p>

      <a href="#home" className="footer-top">
        BACK TO TOP ↑
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
