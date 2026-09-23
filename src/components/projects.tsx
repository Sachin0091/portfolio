import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";
export function Projects() {
 return <section id="projects" className="section-space border-t border-border"><Container>
  <SectionHeading eyebrow="03 / Projects" title="Tools built for investigation." description="A collection of security projects, from IP checks and phishing analysis to encryption and network scanning." />
  <div className="grid gap-5 xl:grid-cols-3 sm:grid-cols-2">{projects.slice(0,3).map((project,i)=><article key={project.name} className="featured-project">
   <div className="flex items-center justify-between"><span className="font-mono text-xs text-accent">0{i+1} / SECURITY TOOL</span><ArrowUpRight className="text-muted-foreground" size={20} aria-hidden="true" /></div>
   <h3 className="mt-8 text-2xl font-semibold leading-snug tracking-tight">{project.name}</h3><p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">{project.description}</p>
   <div className="mt-6 flex flex-wrap gap-2">{project.tags.map(tag=><span key={tag} className="project-tag">{tag}</span>)}</div>
   <a className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-accent hover:underline" href={project.link} target="_blank" rel="noreferrer noopener" aria-label={`View ${project.name} on GitHub`}>View on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
  </article>)}</div>
  <h3 className="mt-14 mb-6 text-xl font-semibold">More projects</h3>
  <div className="grid gap-x-12 sm:grid-cols-2">{projects.slice(3).map(project=><article key={project.name} className="border-t border-border py-7">
   <h4 className="text-lg font-semibold"><a className="inline-flex items-start gap-3 hover:text-accent" href={project.link} target="_blank" rel="noreferrer noopener">{project.name}<ArrowUpRight size={17} className="mt-1 shrink-0 text-accent" aria-hidden="true" /></a></h4>
   <p className="mt-3 text-base leading-relaxed text-muted-foreground">{project.description}</p><p className="mt-4 text-sm text-muted-foreground">{project.tags.join(" · ")}</p>
  </article>)}</div>
 </Container></section>;
}
