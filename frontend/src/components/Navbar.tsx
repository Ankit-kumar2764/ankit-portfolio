import { FiDownload, FiMoon, FiSun } from "react-icons/fi";

interface NavbarProps {
  darkMode: boolean;
  onToggleMode: () => void;
}

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "dsa", label: "DSA" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ darkMode, onToggleMode }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--card-border)] bg-[color:var(--bg)/0.72] backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1120px,94%)] items-center justify-between py-4">
        <a href="#home" className="font-display text-2xl text-[var(--text)]">
          ankitkumar<span className="text-[var(--accent)]">.me</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm font-medium text-[var(--text-soft)] transition hover:text-[var(--text)]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/Ankit-Kumar-Resume.txt"
            download
            className="hidden items-center gap-2 rounded-full border border-[var(--card-border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] md:inline-flex"
          >
            <FiDownload /> Resume
          </a>
          <button
            type="button"
            onClick={onToggleMode}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--card-border)] text-[var(--text)] transition hover:border-[var(--accent)]"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}
