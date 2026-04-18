import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="section-wrap">
      <SectionHeading
        eyebrow="About"
        title="Building software with clarity and scale"
        description="Passionate about building scalable web applications and solving complex problems across web development, AI/ML, cybersecurity, and DSA."
      />

      <motion.div
        className="glass-card mx-auto grid max-w-5xl gap-6 p-6 md:grid-cols-2 md:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-[var(--card-border)]">
            <img
              src="/assets/about.jpg"
              alt="About workspace"
              className="h-72 w-full object-cover md:h-[430px]"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = "/assets/about.jpg";
              }}
            />
          </div>
          <h3 className="text-2xl font-semibold text-[var(--text)]">Ankit Kumar</h3>
          <p className="mt-3 text-[var(--text-soft)]">
            Full Stack Developer specializing in MERN applications with a strong emphasis on
            user-focused frontend experiences and reliable backend architecture.
          </p>
        </div>
        <div className="space-y-3 text-sm text-[var(--text-soft)]">
          <p>
            I enjoy turning complex requirements into maintainable products with thoughtful APIs,
            practical database design, and smooth responsive interfaces.
          </p>
          <p>
            Outside of development, I actively sharpen my problem-solving through consistent
            competitive programming and algorithm practice.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
