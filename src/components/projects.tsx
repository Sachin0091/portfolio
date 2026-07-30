import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
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

        <div className="divide-y divide-border border-t border-border">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.link}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noreferrer noopener" : undefined}
              className={`group grid gap-2 px-4 py-6 -mx-4 sm:grid-cols-[2.5rem_1fr_auto] sm:items-start sm:gap-6 rounded-lg transition-colors ${
                project.link ? "hover:bg-card" : "pointer-events-none"
              }`}
            >
              <span className="font-mono text-sm text-muted">{String(index + 1).padStart(2, "0")}</span>

              <div>
                <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.name}
                </h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
                  {project.tags.map((tag, i) => (
                    <span key={tag}>
                      {tag}
                      {i < project.tags.length - 1 ? <span className="ml-3 text-border">/</span> : null}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-1 flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors group-hover:text-accent sm:mt-0 sm:justify-end">
                {project.link ? (
                  <>
                    View
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                ) : (
                  <span className="text-xs">Coming soon</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
