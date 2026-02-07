import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TrialModalProvider } from "@/components/trial-modal-context";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <TrialModalProvider>
          <div className="min-h-screen bg-grid">
            <SiteNav />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </TrialModalProvider>
      </body>
    </html>
  );
}
