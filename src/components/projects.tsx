import { ArrowUpRight, Eye, KeyRound, Lock, Radar, ScanFace, Search, Shield, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/container";
import { GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { projects, type Project } from "@/lib/data";

function iconFor(project: Project): LucideIcon {
  const tags = project.tags.map((tag) => tag.toLowerCase());
  if (tags.some((tag) => tag.includes("osint"))) return Search;
  if (tags.some((tag) => tag.includes("android") || tag.includes("mobile"))) return Smartphone;
  if (tags.some((tag) => tag.includes("networking") || tag.includes("multi-threading"))) return Radar;
  if (tags.some((tag) => tag.includes("cryptography") || tag.includes("pbkdf2") || tag.includes("auth"))) return KeyRound;
  if (tags.some((tag) => tag.includes("encryption") || tag.includes("password"))) return Lock;
  if (tags.some((tag) => tag.includes("facial") || tag.includes("opencv"))) return ScanFace;
  if (tags.some((tag) => tag.includes("threat") || tag.includes("intel") || tag.includes("phishing"))) return Shield;
  return Eye;
}

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-border py-24">
      <Container>
        <SectionHeading
          eyebrow="03 / Projects"
          title="Things I've built."
          description="Security tooling built to solve real problems I ran into during investigations and research."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = iconFor(project);
            return (
              <div
                key={project.name}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <span className="font-mono text-[11px] tracking-wide text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-semibold text-foreground">{project.name}</h3>
                    </div>
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Open ${project.name} on GitHub`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    View repository
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <p className="mt-5 text-sm font-medium text-muted-foreground">Repository coming soon</p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
