import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Scene3D from "@/components/Scene3D";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: `${t("about")} | Portfolio` };
}

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="relative flex min-h-[60vh] items-center px-6">
        <div className="absolute inset-0 -z-10 opacity-40">
          <Scene3D />
        </div>
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Building digital experiences that{" "}
            <span className="text-primary">matter</span>.
          </h1>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Design Engineer & Creative Developer
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                I'm a creative developer specializing in
                building immersive web experiences that combine design,
                technology, and strategy.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                My work spans from 3D interactive experiences and WebGL effects
                to scroll-driven narratives and premium websites. I've worked
                with startups, agencies, and brands to create digital products
                that people remember.
              </p>
            </div>
            <div className="space-y-8">
              {[
                { label: "Experience", value: "8+ Years" },
                { label: "Location", value: "Remote" },
                { label: "Focus", value: "Creative Development" },
                { label: "Available", value: "Freelance & Projects" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-border pb-4"
                >
                  <span className="text-sm text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
