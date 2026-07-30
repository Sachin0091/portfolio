import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <Container>
        <SectionHeading
          eyebrow="03 / Projects"
          title="Things I've built."
          description="Security tooling built to solve real problems I ran into during investigations and research."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-foreground">{project.name}</h3>
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

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
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
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
