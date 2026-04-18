import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const skills = [
  { title: "Languages", items: ["C++", "JavaScript", "TypeScript", "Python"] },
  { title: "Frontend", items: ["HTML", "CSS", "React.js", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-wrap">
      <SectionHeading
        eyebrow="Skills"
        title="Practical stack across frontend, backend, and data"
        description="Focused on building production-grade applications with modern JavaScript/TypeScript ecosystems."
      />

      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <motion.article
            key={group.title}
            className="glass-card p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06 }}
          >
            <h3 className="mb-4 text-xl font-semibold text-[var(--text)]">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--card-border)] bg-[color:var(--bg)/0.65] px-3 py-1 text-sm text-[var(--text-soft)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
