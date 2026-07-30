import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { achievements, education } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-border py-24">
      <Container>
        <SectionHeading eyebrow="06 / Achievements & Education" title="Beyond the day job." />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-foreground">Achievements</h3>
            <ul className="mt-5 space-y-4">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Education</h3>
            <ul className="mt-5 divide-y divide-border border-t border-border">
              {education.map((item) => (
                <li key={item.degree} className="py-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <p className="text-sm font-medium text-foreground">{item.degree}</p>
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.start} - {item.end}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.school} · {item.location}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
