import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";
export function Experience() {
  return <section id="experience" className="section-space border-t border-border"><Container>
    <SectionHeading eyebrow="02 / Experience" title="Hands-on security work." />
    <div>{experience.map((job) => <article key={job.title} className="experience-row">
      <div><p className="font-mono text-sm text-muted-foreground">{job.start} — {job.end}</p><p className="mt-3 text-sm text-muted-foreground">{job.location}</p></div>
      <div><h3 className="text-2xl font-semibold tracking-tight">{job.title}</h3><p className="mt-2 text-base text-accent">{job.company}</p><ul className="mt-5 grid gap-3">{job.points.map(point => <li key={point} className="flex gap-3 text-base leading-relaxed text-muted-foreground"><span aria-hidden="true" className="mt-3 h-1 w-1 shrink-0 rounded-full bg-accent" />{point}</li>)}</ul></div>
    </article>)}</div>
  </Container></section>;
}
