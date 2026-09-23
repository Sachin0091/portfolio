import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/lib/data";
export function Skills(){return <section id="skills" className="section-space border-t border-border"><Container><SectionHeading eyebrow="04 / Skills" title="The tools behind the work."/><div className="skills-matrix">{skills.map(group=><div key={group.category}><h3>{group.category}</h3><p>{group.items.join(" · ")}</p></div>)}</div></Container></section>;}
