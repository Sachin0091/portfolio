import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-border py-24">
      <Container>
        <SectionHeading
          eyebrow="05 / Certifications"
          title="Continuous learning."
          description="A dozen certifications across cybersecurity fundamentals, cloud, and networking, with more in progress."
        />

        <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-baseline justify-between gap-4 border-t border-border py-4"
            >
              <p className="text-sm font-medium leading-snug text-foreground">{cert.name}</p>
              <p className="shrink-0 whitespace-nowrap font-mono text-xs text-muted-foreground">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
