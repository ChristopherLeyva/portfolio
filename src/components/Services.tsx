"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

const serviceKeys = ["3d", "webgl", "scroll", "premium", "brand", "motion"];

const icons: Record<string, string> = {
  "3d": "◆",
  webgl: "◈",
  scroll: "⌇",
  premium: "✦",
  brand: "◉",
  motion: "◌",
};

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="border-t border-border px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
          {serviceKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              className="bg-card p-8 transition-colors hover:bg-muted"
            >
              <span className="text-2xl text-primary">{icons[key]}</span>
              <h3 className="mt-4 text-lg font-semibold">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(`items.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
