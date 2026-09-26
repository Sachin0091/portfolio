"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { Container } from "@/components/container";
import { site } from "@/lib/data";
export function Contact() {
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setStatus("Email copied");
    } catch {
      setStatus("Please select the email address to copy it");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 3000);
  }
  return (
    <section id="contact" className="contact-section">
      <Container>
        <p className="eyebrow">07 / CONTACT</p>
        <h2>
          Let’s talk
          <br />
          security<span>.</span>
        </h2>
        <p className="contact-description">
          Open to SOC analyst, threat hunting and security engineering roles.
        </p>
        <div className="contact-email-row">
          <a href={`mailto:${site.email}`}>
            {site.email}
            <ArrowUpRight size={23} />
          </a>
          <button onClick={copy} aria-label="Copy email address">
            {status === "Email copied" ? (
              <Check size={19} />
            ) : (
              <Copy size={19} />
            )}
          </button>
        </div>
        <p className="copy-status" role="status">
          {status}
        </p>
        <div className="contact-bottom">
          <span>Kathmandu, Nepal</span>
          <div>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
            <a
              href={site.social.tryhackme}
              target="_blank"
              rel="noreferrer noopener"
            >
              TryHackMe
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
