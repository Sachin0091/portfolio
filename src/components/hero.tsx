import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Image from "next/image";
import { ArrowDownToLine, Shield } from "lucide-react";
import { Container } from "@/components/container";
import { site, projects, certifications } from "@/lib/data";
export function Hero() {
  return (
    <section id="top" className="hero-section">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hello">Hi, I’m</p>
            <p className="hero-name">Sachin Gautam</p>
            <h1>
              Cybersecurity
              <br />
              <span>Analyst.</span>
            </h1>
            <p className="hero-description">
              I investigate security alerts, hunt for threats, and build Python
              tools for day-to-day SOC work.
            </p>
            <div className="social-links">
              <a
                href={site.social.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon width={19} height={19} />
              </a>
              <a
                href={site.social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon width={19} height={19} />
              </a>
              <a
                href={site.social.tryhackme}
                aria-label="TryHackMe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Shield size={19} />
              </a>
            </div>
            <div className="hero-actions">
              <a href="#contact" className="button-primary">
                Hire me
              </a>
              <a
                href="/Sachin_Gautam_Resume.pdf"
                download
                className="button-secondary"
              >
                Download CV <ArrowDownToLine size={17} />
              </a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>{projects.length}</dt>
                <dd>Security projects</dd>
              </div>
              <div>
                <dt>3</dt>
                <dd>SIEM platforms</dd>
              </div>
              <div>
                <dt>{certifications.length}</dt>
                <dd>Certifications</dd>
              </div>
            </dl>
          </div>
          <figure className="portrait-panel">
            <div className="portrait-orbit">
              <Image
                src="/profile.jpg"
                alt="Sachin Gautam"
                fill
                priority
                sizes="(min-width: 900px) 480px, 90vw"
                className="portrait-photo"
              />
            </div>
            <figcaption>
              <span>BASED IN KATHMANDU, NEPAL</span>
              <span>Open to security analyst roles</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
