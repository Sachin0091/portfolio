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
    <div className="section-intro-grid"><SectionHeading eyebrow="01 / About" title="Security operations & threat investigation." />
    <p className="text-lg leading-relaxed text-muted-foreground">I’m a cybersecurity analyst with experience in 24/7 SOC operations, incident investigation, and SIEM detection engineering. I monitor client environments, investigate suspicious activity, and develop Python tools to support threat hunting and incident response.</p></div>
    <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">{strengths.map(([n,title,description]) => <div key={n} className="border-t border-border pt-6"><span className="font-mono text-sm text-accent">{n}</span><h3 className="mt-4 text-lg font-semibold">{title}</h3><p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p></div>)}</div>
  </Container></section>;
}
