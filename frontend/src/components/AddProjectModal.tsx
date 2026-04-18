import { useState } from "react";
import { motion } from "framer-motion";
import type { CreateProjectPayload } from "../types";
import type { FormEvent } from "react";
import { normalizeProjectImageInput } from "../utils/projectImage";

interface AddProjectModalProps {
  isOpen: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (payload: CreateProjectPayload) => Promise<void>;
}

const categories: Array<CreateProjectPayload["category"]> = ["Full Stack", "Frontend", "Backend"];

export function AddProjectModal({ isOpen, isSubmitting, onClose, onSubmit }: AddProjectModalProps) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    category: "Full Stack" as CreateProjectPayload["category"],
    imageUrl: "",
    githubUrl: "",
    liveUrl: "",
    featured: false,
  });
  const [error, setError] = useState("");

  if (!isOpen) {
    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const payload: CreateProjectPayload = {
      title: form.title.trim(),
      description: form.description.trim(),
      techStack: form.techStack
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      category: form.category,
      imageUrl: normalizeProjectImageInput(form.imageUrl),
      githubUrl: form.githubUrl.trim(),
      liveUrl: form.liveUrl.trim(),
      featured: form.featured,
    };

    if (!payload.techStack.length) {
      setError("Please provide at least one tech stack item.");
      return;
    }

    try {
      await onSubmit(payload);
      setForm({
        title: "",
        description: "",
        techStack: "",
        category: "Full Stack",
        imageUrl: "",
        githubUrl: "",
        liveUrl: "",
        featured: false,
      });
      onClose();
    } catch (submissionError) {
      if (submissionError instanceof Error) {
        setError(submissionError.message);
        return;
      }

      setError("Could not add project right now. Check token/env and try again.");
    }
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/45 px-4">
      <motion.form
        onSubmit={handleSubmit}
        className="glass-card max-h-[92vh] w-full max-w-2xl space-y-4 overflow-y-auto p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-2xl font-semibold text-[var(--text)]">Add New Project</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[var(--card-border)] px-3 py-1 text-sm text-[var(--text-soft)]"
          >
            Close
          </button>
        </div>

        <input
          className="input-field"
          placeholder="Project Title"
          value={form.title}
          onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
          required
        />
        <textarea
          className="input-field min-h-24 resize-y"
          placeholder="Project Description"
          value={form.description}
          onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
          required
        />
        <input
          className="input-field"
          placeholder="Tech Stack (comma separated)"
          value={form.techStack}
          onChange={(event) => setForm((prev) => ({ ...prev, techStack: event.target.value }))}
          required
        />

        <select
          className="input-field"
          value={form.category}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, category: event.target.value as CreateProjectPayload["category"] }))
          }
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          className="input-field"
          placeholder="Image URL (example: /assets/tasknova.jpg or https://...)"
          value={form.imageUrl}
          onChange={(event) => setForm((prev) => ({ ...prev, imageUrl: event.target.value }))}
          required
        />
        <input
          className="input-field"
          placeholder="GitHub URL"
          value={form.githubUrl}
          onChange={(event) => setForm((prev) => ({ ...prev, githubUrl: event.target.value }))}
          required
        />
        <input
          className="input-field"
          placeholder="Live Demo URL"
          value={form.liveUrl}
          onChange={(event) => setForm((prev) => ({ ...prev, liveUrl: event.target.value }))}
          required
        />

        <label className="inline-flex items-center gap-2 text-sm text-[var(--text-soft)]">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(event) => setForm((prev) => ({ ...prev, featured: event.target.checked }))}
          />
          Mark as featured project
        </label>

        {error ? <p className="text-sm text-rose-500">{error}</p> : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-contrast)] disabled:opacity-70"
        >
          {isSubmitting ? "Adding Project..." : "Add Project"}
        </button>
      </motion.form>
    </div>
  );
}
