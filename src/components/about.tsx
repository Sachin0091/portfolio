import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
const strengths = [
  ["01", "Security monitoring", "Reviewing alerts and connecting events across LogPoint, FortiSIEM and LogRhythm."],
  ["02", "Incident investigation", "Gathering evidence and working with teams to contain security threats."],
  ["03", "Threat hunting", "Using MITRE ATT&CK to investigate suspicious activity and improve detection rules."],
  ["04", "Practical reporting", "Turning technical findings into clear recommendations that teams can act on."],
];
export function About() {
  return <section id="about" className="section-space border-t border-border"><Container>
    <div className="section-intro-grid"><SectionHeading eyebrow="01 / About" title="A practical approach to security." />
    <p className="text-lg leading-relaxed text-muted-foreground">At Cryptogen Nepal, I monitored client environments, investigated security incidents, and refined SIEM detection rules as part of a 24/7 SOC team. My work spans alert triage, threat hunting, and incident response, alongside developing Python tools for security investigations.</p></div>
    <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">{strengths.map(([n,title,description]) => <div key={n} className="border-t border-border pt-6"><span className="font-mono text-sm text-accent">{n}</span><h3 className="mt-4 text-lg font-semibold">{title}</h3><p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p></div>)}</div>
  </Container></section>;
}
