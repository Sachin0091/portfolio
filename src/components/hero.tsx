import Image from "next/image";
import { ArrowDownToLine, ArrowUpRight, MapPin, Radar } from "lucide-react";
import { Container } from "@/components/container";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="grid-fade pointer-events-none absolute inset-0 -z-10" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for SOC & security analyst roles
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Sachin Gautam
            </h1>
            <p className="mt-4 font-mono text-lg text-accent sm:text-xl">
              {site.role}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.tagline} Final-year BScIT student with hands-on SIEM
              experience across live SOC environments, from alert triage
              and detection tuning to proactive threat hunting mapped to
              MITRE ATT&CK.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/Sachin_Gautam_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Download resume
                <ArrowDownToLine className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent" />
                {site.location}
              </span>
              <a
                href={site.social.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-4 w-4 text-accent" />
                GitHub
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="h-4 w-4 text-accent" />
                LinkedIn
              </a>
              <a
                href={site.social.tryhackme}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Radar className="h-4 w-4 text-accent" />
                TryHackMe
              </a>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:150ms] flex justify-center lg:justify-end">
            <div className="animate-float relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative h-56 w-56 overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-xl shadow-black/5 sm:h-72 sm:w-72">
                <Image
                  src="/profile.jpg"
                  alt={site.name}
                  fill
                  priority
                  sizes="(min-width: 640px) 288px, 224px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg shadow-black/5">
                <p className="text-xs text-muted-foreground">Currently</p>
                <p className="text-sm font-medium text-foreground">Associate SOC Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
