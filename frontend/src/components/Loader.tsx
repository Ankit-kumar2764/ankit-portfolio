import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[var(--bg)]">
      <div className="relative">
        <motion.div
          className="h-20 w-20 rounded-full border-2 border-[var(--text-soft)]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]"
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.3 }}
        />
      </div>
    </div>
  );
}
