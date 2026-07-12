import { getTranslations } from "next-intl/server";
import FeaturedWork from "@/components/FeaturedWork";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: `${t("work")} | Portfolio` };
}

export default function WorkPage() {
  return (
    <main className="pt-24">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Selected <span className="text-primary">work</span>.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            A curated selection of projects I've designed and developed — from
            concept to launch.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "En V2",
                description:
                  "Next-generation platform reimagining digital experiences.",
                gradient: "from-violet-600 to-indigo-600",
                url: "#",
              },
              {
                title: "Proyecto Alpha",
                description:
                  "Full-stack application built with modern architectures.",
                gradient: "from-blue-600 to-cyan-600",
                url: "#",
              },
              {
                title: "Proyecto Beta",
                description:
                  "Interactive dashboard with real-time data processing.",
                gradient: "from-emerald-600 to-teal-600",
                url: "#",
              },
              {
                title: "Coming Soon",
                description:
                  "New projects in the pipeline. Stay tuned for updates.",
                gradient: "from-zinc-600 to-zinc-800",
                url: "#",
              },
            ].map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:bg-muted"
              >
                <div
                  className={`aspect-[16/9] bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <span className="text-3xl font-bold text-white/20">
                    {project.title}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
