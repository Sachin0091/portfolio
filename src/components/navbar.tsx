"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Portfolio" },
  { href: "#contact", label: "Contact me" },
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-10% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-inner">
        <a
          href="#top"
          className="brand"
          aria-label="Sachin Gautam home"
          onClick={() => setOpen(false)}
        >
          SACHIN<span>.</span>
        </a>
        <button
          className="mobile-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="button-primary nav-hire">
          Hire me
        </a>
      </div>
    </header>
  );
}
