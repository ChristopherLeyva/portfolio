"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

const projects = [
  {
    key: "v2",
    url: "#",
    image: null,
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    key: "project2",
    url: "#",
    image: null,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    key: "project3",
    url: "#",
    image: null,
    gradient: "from-emerald-600 to-teal-600",
  },
];

export default function FeaturedWork() {
  const t = useTranslations("work");

  return (
    <section id="work" className="border-t border-border px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            {t("description")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.a
              key={project.key}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-4xl font-bold text-white/30">
                  {t(`projects.${project.key}.title`)}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">
                  {t(`projects.${project.key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(`projects.${project.key}.description`)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {t("seeLive")}
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
