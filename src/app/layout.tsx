import type { Metadata } from "next";
import { Montserrat, Poppins, JetBrains_Mono } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: ["normal", "italic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoLab Automation — Revenue Infrastructure for Automation Teams",
  description:
    "GoHighLevel funnels, automations, and integration engineering for agencies and service businesses. 200+ builds. 10 specialists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" data-bg="grid" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${jetbrainsMono.variable}`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
