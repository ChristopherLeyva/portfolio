import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GSAPProvider from "@/components/GSAPProvider";

const geist = Geist({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return {
    title: "Portfolio",
    description: "Creative developer portfolio",
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={geist.className}>
      <body className="bg-background text-foreground antialiased">
        <NextIntlClientProvider messages={messages}>
          <GSAPProvider>
            <Header />
            {children}
            <Footer />
          </GSAPProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
