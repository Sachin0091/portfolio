import Image from "next/image";
import { ArrowDown, ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { site } from "@/lib/data";
export function Hero(){return <section id="top" className="new-hero"><Container>
 <div className="hero-topline"><span>SECURITY OPERATIONS & THREAT HUNTING</span><span>KATHMANDU, NEPAL</span></div>
 <div className="new-hero-grid">
  <div className="hero-enter"><p className="intro-label">Hello, I’m Sachin.</p><h1>Curiosity.<br/>Investigation.<br/><span>Clear answers.</span></h1><p className="new-hero-description">I’m a cybersecurity analyst who investigates threats and builds practical security tools. My work combines SOC experience with a hands-on approach to learning.</p>
   <div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="button-primary">Explore my projects <ArrowDown size={17}/></a><a href="/Sachin_Gautam_Resume.pdf" download className="button-secondary">Download CV <ArrowDownToLine size={17}/></a></div>
  </div>
  <figure className="new-portrait portrait-enter"><div className="new-portrait-image"><Image src="/profile.jpg" alt="Sachin Gautam" fill priority sizes="(min-width: 1280px) 350px, (min-width: 768px) 40vw, 90vw" className="object-cover"/></div><figcaption><strong>Sachin Gautam</strong><span>Cybersecurity Analyst</span></figcaption><div className="portrait-note">Open to SOC and security analyst roles</div></figure>
 </div>
 <div className="intro-foot"><p>Previously at <strong>Cryptogen Nepal</strong><span>Final-year BScIT student</span></p><div><a href={site.social.github} target="_blank" rel="noreferrer noopener">GitHub <ArrowUpRight size={15}/></a><a href={site.social.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn <ArrowUpRight size={15}/></a><a href={site.social.tryhackme} target="_blank" rel="noreferrer noopener">TryHackMe <ArrowUpRight size={15}/></a></div></div>
 </Container></section>;}
