import { BadgeCheck } from "lucide-react";
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

        <div className="grid gap-3 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5"
            >
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={2} />
              <div>
                <p className="text-sm font-medium leading-snug text-foreground">{cert.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
