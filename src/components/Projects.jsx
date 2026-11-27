
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "JanMitra",
    subtitle: "AI-Powered Civic Intelligence Platform",
    description:
      "An AI-powered civic technology platform designed to streamline grievance processing and improve citizen access to government schemes and public information.",
    details: [
      "Designed modular backend services and REST API workflows using FastAPI.",
      "Integrated AI-powered workflows for civic query processing and information retrieval.",
      "Used PostgreSQL and containerized development workflows.",
    ],
    tech: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "GenAI"],
    github: "https://github.com/Saylee12R/JanMitra",
    live: "https://jan-mitra-umber.vercel.app/",
    gradient: "from-violet-500/20 to-blue-500/10",
  },
  {
    number: "02",
    name: "WalletWizz",
    subtitle: "Financial Intelligence & Credit Scoring",
    description:
      "A fintech application focused on financial behavior analysis, predictive scoring and personalized financial insights using machine learning.",
    details: [
      "Developed machine learning workflows for predictive financial analysis.",
      "Explored classification models and data-driven scoring approaches.",
      "Designed a web-based interface for displaying financial insights.",
    ],
    tech: ["React", "FastAPI", "Scikit-learn", "XGBoost", "MongoDB"],
    github: "https://github.com/AkshayDev-X/FinFusion_Four", // Replace with actual GitHub URL
    live: "https://fin-fusion-four.vercel.app/login", // Add your deployed URL here
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    number: "03",
    name: "COSMOS",
    subtitle: "Interactive Space Exploration Dashboard",
    description:
      "An interactive space exploration platform featuring immersive 3D Earth visualization and real-time rendering for an engaging exploration experience.",
    details: [
      "Implemented interactive 3D Earth visualization.",
      "Integrated Three.js with React Three Fiber for rendering.",
      "Developed an interactive visual exploration interface.",
    ],
    tech: ["React", "Three.js", "React Three Fiber", "JavaScript"],
    github: "https://github.com/rbhele7/devSprint",
    live: "", // Add your deployed URL here
    gradient: "from-cyan-500/20 to-indigo-500/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-3 text-xs uppercase tracking-[4px] text-violet-400">
            03 / Projects
          </p>

          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Selected <span className="gradient-text">Work.</span>
          </h2>

          <p className="mt-5 max-w-xl leading-8 text-zinc-400">
            Engineering ideas into applications through development,
            experimentation and problem solving.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group overflow-hidden rounded-3xl border border-white/5 bg-[#101016] hover:border-violet-400/30"
            >
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                {/* Project visual */}
                <div
                  className={`grid-bg relative flex min-h-[300px] flex-col justify-center bg-gradient-to-br ${project.gradient} p-10 md:p-14`}
                >
                  <div className="absolute inset-0 opacity-30" />

                  <div className="relative">
                    <p className="mb-6 text-xs tracking-[5px] text-zinc-500">
                      PROJECT {project.number}
                    </p>

                    <h3 className="font-display text-4xl font-bold md:text-5xl">
                      {project.name}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <ExternalLink
                    size={24}
                    className="absolute right-7 top-7 text-zinc-500 transition group-hover:text-violet-300"
                  />
                </div>

                {/* Project content */}
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <p className="mb-6 leading-8 text-zinc-300">
                    {project.description}
                  </p>

                  <ul className="mb-7 space-y-3">
                    {project.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-7 text-zinc-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="flex flex-wrap gap-3">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-300 hover:border-violet-400/40 hover:text-white"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-medium text-white hover:bg-violet-500"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
