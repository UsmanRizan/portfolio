import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ToPlay by Rizan — Sports Facility Booking Platform",
  description: "SaaS sports booking and facility management platform by Rizan connecting players with sports facility owners.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-full antialiased text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}
