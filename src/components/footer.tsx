import { Radar } from "lucide-react";
import { Container } from "@/components/container";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={site.social.tryhackme}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="TryHackMe"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <Radar className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
