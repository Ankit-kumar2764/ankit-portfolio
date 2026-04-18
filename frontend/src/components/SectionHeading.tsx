interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 inline-flex rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-[var(--text)] md:text-4xl">{title}</h2>
      <p className="mt-4 text-base text-[var(--text-soft)] md:text-lg">{description}</p>
    </div>
  );
}
