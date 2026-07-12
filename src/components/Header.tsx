"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/work", key: "work" },
  { href: "/contact", key: "contact" },
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const isHome = pathname === `/${locale}` || pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href={`/${locale}`}
          className="text-sm font-medium tracking-tight text-white"
        >
          Christopher Leyva
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={`/${locale}${link.href === "/" ? "" : link.href}`}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {t(link.key)}
            </Link>
          ))}
          <Link
            href={`/${locale === "en" ? "es" : "en"}${pathname.replace(/^\/(en|es)/, "") || "/"}`}
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            {locale === "en" ? "ES" : "EN"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
