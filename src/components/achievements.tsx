import { GraduationCap, Trophy } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { achievements, education } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-border py-24">
      <Container>
        <SectionHeading
          eyebrow="06 / Achievements & Education"
          title="Beyond the day job."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-2 text-foreground">
              <Trophy className="h-5 w-5 text-accent" />
              <h3 className="text-base font-semibold">Achievements</h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2 text-foreground">
              <GraduationCap className="h-5 w-5 text-accent" />
              <h3 className="text-base font-semibold">Education</h3>
            </div>
            <ul className="space-y-5">
              {education.map((item) => (
                <li key={item.degree} className="rounded-xl border border-border bg-card p-4">
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
