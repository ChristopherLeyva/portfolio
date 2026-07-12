"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="border-t border-border px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
            <a
              href={`mailto:${t("email")}`}
              className="mt-6 inline-flex items-center gap-2 text-lg text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              {t("email")}
            </a>


          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  {t("form.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder={t("form.name")}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  {t("form.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t("form.email")}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="sr-only">
                {t("form.company")}
              </label>
              <input
                id="company"
                type="text"
                placeholder={t("form.company")}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="service" className="sr-only">
                {t("form.service")}
              </label>
              <select
                id="service"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground outline-none transition-colors focus:border-primary"
              >
                <option value="">{t("form.service")}</option>
                <option value="3d">3D Interactive Experiences</option>
                <option value="webgl">WebGL & Shader Effects</option>
                <option value="scroll">Scroll Storytelling</option>
                <option value="premium">Premium Websites</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="sr-only">
                {t("form.budget")}
              </label>
              <select
                id="budget"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground outline-none transition-colors focus:border-primary"
              >
                <option value="">{t("form.budget")}</option>
                <option value="5k-10k">$5k - $10k</option>
                <option value="10k-25k">$10k - $25k</option>
                <option value="25k+">$25k+</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                {t("form.message")}
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder={t("form.message")}
                className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("form.send")}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
