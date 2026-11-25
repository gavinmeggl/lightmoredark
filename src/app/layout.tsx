import type { Metadata } from "next";
import { Bowlby_One, Space_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const display = Bowlby_One({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
