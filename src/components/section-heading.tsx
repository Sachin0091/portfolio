export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 border-b border-border pb-8">
      <span className="font-mono text-xs tracking-wide text-muted">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
