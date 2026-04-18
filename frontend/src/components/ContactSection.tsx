import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { submitContact } from "../api";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const message = await submitContact(form);
      setStatus("success");
      setFeedback(message);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedback("Could not send message right now. Please try again.");
    }
  }

  return (
    <section id="contact" className="section-wrap pb-16">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="glass-card p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Contact</p>
          <h2 className="text-3xl font-semibold text-[var(--text)]">Let us build something meaningful</h2>
          <p className="mt-4 text-[var(--text-soft)]">
            Open for internships, freelance opportunities, and full-time development roles.
          </p>

          <div className="mt-6 space-y-3 text-[var(--text-soft)]">
            <a className="flex items-center gap-2 hover:text-[var(--text)]" href="mailto:ankit.dev@example.com">
              <FiMail /> ankit.dev@example.com
            </a>
            <a className="flex items-center gap-2 hover:text-[var(--text)]" href="https://github.com/Ankit-kumar2764" target="_blank" rel="noreferrer">
              <FiGithub /> github.com/Ankit-kumar2764
            </a>
            <a className="flex items-center gap-2 hover:text-[var(--text)]" href="https://www.linkedin.com/in/ankit-kumar-dev" target="_blank" rel="noreferrer">
              <FiLinkedin /> linkedin.com/in/ankit-kumar-dev
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-card space-y-4 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
        >
          <input
            required
            className="input-field"
            placeholder="Your Name"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          />
          <input
            required
            type="email"
            className="input-field"
            placeholder="Email Address"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />
          <input
            required
            className="input-field"
            placeholder="Subject"
            value={form.subject}
            onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
          />
          <textarea
            required
            rows={5}
            className="input-field resize-none"
            placeholder="Message"
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          />

          <button
            disabled={status === "sending"}
            className="w-full rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-contrast)] disabled:opacity-70"
            type="submit"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {feedback ? (
            <p className={`text-sm ${status === "error" ? "text-rose-500" : "text-emerald-500"}`}>{feedback}</p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}
