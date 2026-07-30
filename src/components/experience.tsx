import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24">
      <Container>
        <SectionHeading
          eyebrow="02 / Experience"
          title="Where I've worked."
          description="Real SOC time monitoring, tuning, and responding across live client environments."
        />

        <ol className="relative space-y-10 border-l border-border pl-8">
          {experience.map((job) => (
            <li key={`${job.title}-${job.company}`} className="relative">
              <span className="absolute -left-[2.31rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-accent" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {job.start} - {job.end}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">
                {job.company} · {job.location}
              </p>

              <ul className="mt-4 space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
