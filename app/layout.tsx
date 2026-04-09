import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kydon AI Workforce Factory | Turn AI Skills Into Income",
  description:
    "Singapore's first government-backed programme that transforms mid-career professionals into independent, revenue-generating AI Operators. Up to 90% salary support via WSG CCP. Apply for Cohort 1.",
  keywords: [
    "AI workforce Singapore",
    "WSG Career Conversion Programme",
    "One Person Company Singapore",
    "AI training Singapore",
    "EnterpriseSG startup grant",
    "Kydon AI",
    "AI upskilling",
    "mid-career transition Singapore",
  ],
  authors: [{ name: "Kydon Group", url: "https://www.kydongrp.com" }],
  creator: "Kydon Group",
  publisher: "Kydon Holdings Pte Ltd",
  metadataBase: new URL("https://factory.kydongrp.com"),
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://factory.kydongrp.com",
    siteName: "Kydon AI Workforce Factory",
    title: "Stop Learning AI. Earn With It. | Kydon AI Workforce Factory",
    description:
      "Singapore's first structured pathway from AI learner to AI-powered business owner. Government-backed salary support, real enterprise clients, and a 2-year launch system.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kydon AI Workforce Factory — Singapore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Learning AI. Earn With It. | Kydon AI Workforce Factory",
    description:
      "Singapore's first structured pathway from AI learner to AI-powered business owner. Government-backed.",
    images: ["/og-image.png"],
    creator: "@KydonGroup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
