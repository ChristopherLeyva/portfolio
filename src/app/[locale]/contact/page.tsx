import { getTranslations } from "next-intl/server";
import Contact from "@/components/Contact";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: `${t("contact")} | Portfolio` };
}

export default function ContactPage() {
  return (
    <main className="pt-24">
      <Contact />
    </main>
  );
}
