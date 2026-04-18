export function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] py-8">
      <div className="mx-auto flex w-[min(1120px,94%)] flex-wrap items-center justify-between gap-2 text-sm text-[var(--text-soft)]">
        <p>© {new Date().getFullYear()} ankitkumar.me</p>
        <p>Built with React, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, and SQL.</p>
      </div>
    </footer>
  );
}
