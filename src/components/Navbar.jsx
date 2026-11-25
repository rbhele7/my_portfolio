import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const links = [['About','#about'],['Skills','#skills'],['Projects','#projects'],['Achievements','#achievements'],['Education','#education'],['Contact','#contact']];
export default function Navbar() {
  const [open,setOpen] = useState(false);
  return <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#080910]/85 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
      <a href="#home" className="font-display text-xl font-bold"><span className="gradient-text">RB</span><span className="text-zinc-500">.</span></a>
      <div className="hidden items-center gap-6 md:flex">{links.map(([n,h])=><a key={n} href={h} className="text-sm text-zinc-400 transition hover:text-white">{n}</a>)}</div>
      <a href="#contact" className="hidden rounded-full border border-violet-400/30 px-4 py-2 text-sm text-violet-300 hover:bg-violet-500/10 md:block">Let's connect ↗</a>
      <button aria-label="Toggle navigation" onClick={()=>setOpen(!open)} className="md:hidden">{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<div className="border-t border-white/5 bg-[#080910] px-6 py-4 md:hidden">{links.map(([n,h])=><a key={n} href={h} onClick={()=>setOpen(false)} className="block py-3 text-zinc-400 hover:text-white">{n}</a>)}</div>}
  </nav>;
}
