import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/lib/data";
export function Certifications(){return <section id="certifications" className="section-space border-t border-border"><Container><SectionHeading eyebrow="05 / Certifications" title="Always learning." description="Training in security operations, networking and cloud fundamentals."/><div className="credentials-grid">{certifications.map(cert=><article key={cert.name}><p className="credential-issuer">{cert.issuer}</p><h3>{cert.name}</h3><time>{cert.date}</time></article>)}</div></Container></section>;}
