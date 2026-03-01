import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { TrialModalProvider } from "@/components/trial-modal-context";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "DeadGame Boxing | Eastside Boxing Gym",
    template: "%s | DeadGame Boxing",
  },
  description:
    "DeadGame Boxing delivers world-class coaching, competition prep, and conditioning. Train with intent in a high-energy, professional gym.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebasNeue.variable} ${inter.variable} antialiased bg-fog text-ink`}
      >
        <TrialModalProvider>
          <div className="min-h-screen bg-grid">
            <SiteNav />
            <main className="bg-transparent">{children}</main>
            <SiteFooter />
          </div>
        </TrialModalProvider>
      </body>
    </html>
  );
}
