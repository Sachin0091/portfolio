"use client";

import { useState } from "react";
import { Check, Copy, Mail, MapPin, Radar } from "lucide-react";
import { Container } from "@/components/container";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; the email is still visible to copy manually.
    }
  };

  return (
    <section id="contact" className="border-t border-border py-24">
      <Container>
        <SectionHeading
          eyebrow="07 / Contact"
          title="Let's talk security."
          description="Open to SOC analyst, threat hunting, and security engineering roles. Reach out any time."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <button
            type="button"
            onClick={copyEmail}
            className="group flex flex-col items-start rounded-lg border border-border bg-card p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent">
              <Mail className="h-5 w-5" strokeWidth={2} />
            </div>
            <p className="text-sm font-semibold text-foreground">Email</p>
            <p className="mt-1 break-all text-sm text-muted-foreground">{site.email}</p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" /> Copy address
                </>
              )}
            </span>
          </button>

          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-col items-start rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent">
              <LinkedinIcon className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-foreground">LinkedIn</p>
            <p className="mt-1 text-sm text-muted-foreground">Professional network</p>
          </a>

          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-col items-start rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent">
              <GithubIcon className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-foreground">GitHub</p>
            <p className="mt-1 text-sm text-muted-foreground">Code & tooling</p>
          </a>

          <a
            href={site.social.tryhackme}
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-col items-start rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent">
              <Radar className="h-5 w-5" strokeWidth={2} />
            </div>
            <p className="text-sm font-semibold text-foreground">TryHackMe</p>
            <p className="mt-1 text-sm text-muted-foreground">CTF profile</p>
          </a>
        </div>

        <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-accent" />
          {site.location}
        </p>
      </Container>
    </section>
  );
}
