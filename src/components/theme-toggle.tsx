"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

const options = [
  { value: "light", label: "Light", icon: Sun },
  { value: "system", label: "System", icon: Monitor },
  { value: "dark", label: "Dark", icon: Moon },
] as const;

const noopSubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <div className="h-9 w-28 rounded-md border border-border bg-card" />;
  }

  return (
    <div className="flex items-center gap-0.5 rounded-md border border-border bg-card p-1">
      {options.map(({ value, label, icon: Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-label={`Use ${label} theme`}
            aria-pressed={active}
            onClick={() => setTheme(value)}
            className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors ${
              active
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="h-3.5 w-3.5" strokeWidth={2} />
          </button>
        );
      })}
    </div>
  );
}
