"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useRef } from "react";

export default function About() {
  const t = useTranslations("about");
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      ref={ref}
      className="border-t border-border px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
          <a
            href="#work"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
          >
            View work
            <span aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
