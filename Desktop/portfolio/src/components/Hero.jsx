import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown, ArrowUpRight, Code2 } from 'lucide-react';
export default function Hero() {
  return <section id="home" className="grid-bg relative flex min-h-screen items-center overflow-hidden px-6 pt-28 md:px-10">
    <div className="blob absolute -left-24 top-10 h-80 w-80 rounded-full bg-violet-600"/><div className="blob absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500"/>
    <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"/>Computer Science @ IIIT Lucknow</div>
        <p className="mb-3 text-zinc-400">Hey, I'm</p><h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">Riya <span className="gradient-text">Bhele.</span></h1>
        <h2 className="mt-4 text-2xl text-zinc-300 md:text-3xl">Developer <span className="text-zinc-600">·</span> Problem Solver</h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">I enjoy engineering practical solutions, exploring AI and building web experiences. From algorithms to applications, I like turning challenging ideas into working projects.</p>
        <div className="mt-8 flex flex-wrap gap-4"><a href="#projects" className="flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 font-medium hover:bg-violet-500">Explore projects <ArrowUpRight size={18}/></a><a href="#contact" className="rounded-full border border-white/10 px-6 py-3.5 text-zinc-300 hover:border-violet-400/40">Get in touch</a></div>
        <div className="mt-9 flex items-center gap-4"><a href="https://github.com/rbhele7" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 p-3 text-zinc-400 hover:text-white"><Github size={20}/></a><a href="https://www.linkedin.com/in/riya-bhele/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 p-3 text-zinc-400 hover:text-white"><Linkedin size={20}/></a><span className="h-px w-16 bg-white/10"/><span className="text-sm text-zinc-500">Always learning. Always building.</span></div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:.8}} className="relative mx-auto w-full max-w-lg">
        <div className="rounded-3xl border border-white/10 bg-[#10111a] p-5 shadow-[0_0_80px_rgba(139,92,246,.12)]"><div className="flex items-center justify-between border-b border-white/5 pb-4"><div className="flex gap-2"><i className="h-3 w-3 rounded-full bg-red-400"/><i className="h-3 w-3 rounded-full bg-yellow-400"/><i className="h-3 w-3 rounded-full bg-green-400"/></div><span className="font-mono text-xs text-zinc-500">riya.cpp</span></div>
          <div className="py-8 font-mono text-sm leading-8 md:text-base"><p className="text-zinc-500">// focused on building & learning</p><p className="mt-3"><span className="text-violet-400">class</span> <span className="text-cyan-300">Developer</span> {'{'}</p><p className="pl-5 text-zinc-300">skills = <span className="text-yellow-300">{'{'}</span></p><p className="pl-10 text-green-300">"C++", "React",</p><p className="pl-10 text-green-300">"Python", "AI/ML"</p><p className="pl-5 text-yellow-300">{'}};'}</p><p className="mt-3 text-zinc-500">// solve, build, repeat</p></div>
          <div className="flex items-center gap-3 rounded-xl border border-violet-500/10 bg-violet-500/5 p-4"><Code2 className="text-violet-400"/><div><p className="text-sm font-medium">Currently exploring</p><p className="text-xs text-zinc-500">Full-stack & intelligent systems</p></div></div>
        </div><motion.div animate={{y:[0,-8,0]}} transition={{duration:3,repeat:Infinity}} className="absolute -left-5 top-12 rounded-xl border border-white/10 bg-[#14141d] p-4">⚡</motion.div><motion.div animate={{y:[0,8,0]}} transition={{duration:4,repeat:Infinity}} className="absolute -right-4 bottom-16 rounded-xl border border-white/10 bg-[#14141d] p-4">⌘</motion.div>
      </motion.div>
    </div><a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500"><ArrowDown size={20}/></a>
  </section>;
}
