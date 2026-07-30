import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/data";

const pillars = [
  {
    title: "Detection & Monitoring",
    description: "24/7 alert triage across multiple client environments using LogPoint, FortiSIEM, and LogRhythm.",
  },
  {
    title: "Threat Hunting",
    description: "Proactive hunts mapped to the MITRE ATT&CK framework to catch threats before impact.",
  },
  {
    title: "Incident Response",
    description: "Investigation, evidence collection, and coordinated containment with cross-functional teams.",
  },
  {
    title: "Detection Engineering",
    description: "Tuning rules, alerts, and dashboards to raise detection accuracy and reduce noise.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading eyebrow="01 / About" title="Security-first." description={site.summary} />

        <div className="divide-y divide-border border-t border-border sm:grid sm:grid-cols-2 sm:divide-y-0 sm:border-t-0 sm:gap-x-10">
          {pillars.map(({ title, description }, index) => (
            <div key={title} className="flex gap-5 py-6 sm:border-t sm:border-border">
              <span className="font-mono text-sm text-muted">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
