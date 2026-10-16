import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Syncopate, Monofett, Plus_Jakarta_Sans, Syne } from "next/font/google";
import { PortfolioProvider } from "@/context/PortfolioContext";
import "./globals.scss";

const displayFont = Syne({ subsets: ["latin"], variable: "--font-display" });
const sansFont = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const monofettFont = Monofett({ subsets: ["latin"], weight: "400", variable: "--font-monofett" });
const syncopateFont = Syncopate({ subsets: ["latin"], weight: "400", variable: "--font-syncopate" });

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  applicationName: "Antonella Portfolio 2026",
  title: {
    default: "Antonella Portfolio 2026",
    template: "%s | Antonella Portfolio 2026",
  },
  description: "Portfolio profesional de desarrollo Frontend y Full-Stack JavaScript. Interfaces rápidas, escalables y memorables.",
  keywords: ["Frontend Developer", "Full-Stack JavaScript", "React", "Next.js", "TypeScript", "Portfolio"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Antonella Portfolio 2026",
    description: "Interfaces rápidas, escalables y memorables.",
    siteName: "Antonella Portfolio 2026",
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonella Portfolio 2026",
    description: "Interfaces rápidas, escalables y memorables.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" data-theme="dark">
      <body className={`${displayFont.variable} ${sansFont.variable} ${monofettFont.variable} ${syncopateFont.variable}`}>
        <PortfolioProvider>{children}</PortfolioProvider>
      </body>
    </html>
  );
}
