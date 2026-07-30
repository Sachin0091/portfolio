import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <Container>
        <SectionHeading
          eyebrow="04 / Skills"
          title="Tools of the trade."
          description="Platforms, frameworks, and languages I use day to day in security operations."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5"
            >
              <h3 className="text-sm font-semibold text-foreground">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
