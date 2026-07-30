import { Eye, Radar, ShieldAlert, Siren } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/data";

const pillars = [
  {
    icon: Eye,
    title: "Detection & Monitoring",
    description: "24/7 alert triage across multiple client environments using LogPoint, FortiSIEM, and LogRhythm.",
  },
  {
    icon: Radar,
    title: "Threat Hunting",
    description: "Proactive hunts mapped to the MITRE ATT&CK framework to catch threats before impact.",
  },
  {
    icon: Siren,
    title: "Incident Response",
    description: "Investigation, evidence collection, and coordinated containment with cross-functional teams.",
  },
  {
    icon: ShieldAlert,
    title: "Detection Engineering",
    description: "Tuning rules, alerts, and dashboards to raise detection accuracy and reduce noise.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading eyebrow="01 / About" title="Security-first." description={site.summary} />

        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
