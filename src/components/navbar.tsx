"use client";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, site } from "@/lib/data";
export function Navbar() {
 const [open,setOpen]=useState(false);
 const [active,setActive]=useState("#top");
 useEffect(()=>{
   const observer=new IntersectionObserver(entries=>{for(const entry of entries) if(entry.isIntersecting) setActive(`#${entry.target.id}`);},{rootMargin:"-15% 0px -65% 0px",threshold:0});
   document.querySelectorAll("main section[id]").forEach(section=>observer.observe(section));
   return ()=>observer.disconnect();
 },[]);
 useEffect(()=>{if(!open)return;const close=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false);};window.addEventListener("keydown",close);return()=>window.removeEventListener("keydown",close);},[open]);
 return <header className="site-sidebar">
   <a href="#top" className="brand" onClick={()=>setOpen(false)}><span className="brand-monogram">sg<span>.</span></span><span className="brand-name">Sachin Gautam<span>Cybersecurity Analyst</span></span></a>
   <button className="mobile-toggle" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} aria-controls="site-navigation" onClick={()=>setOpen(!open)}>{open?<X size={22}/>:<Menu size={22}/>}</button>
   <div id="site-navigation" className={`sidebar-content ${open?"is-open":""}`}>
    <p className="sidebar-label">PORTFOLIO / 2026</p>
    <nav aria-label="Main navigation">{navLinks.map((link,i)=><a key={link.href} href={link.href} aria-current={active===link.href?"location":undefined} onClick={()=>setOpen(false)}><span>0{i+1}</span>{link.label}</a>)}</nav>
    <div className="sidebar-bottom"><p>Based in<br/><strong>Kathmandu, Nepal</strong></p><a className="sidebar-email" href={`mailto:${site.email}`}>Let’s connect <ArrowUpRight size={16}/></a><ThemeToggle/></div>
   </div>
 </header>;
}
