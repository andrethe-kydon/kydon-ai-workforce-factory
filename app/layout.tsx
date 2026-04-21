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
  metadataBase: new URL("https://opc.kydongrp.com"),
  title: "Kydon AI Workforce Factory | Build Your AI Business in 12 Months | Singapore",
  description:
    "Singapore's first government-backed programme transforming mid-career professionals into independent AI-powered business owners. WSG CCP funded. Up to $50,000 ESG grant. Cohort 1 open now — 30 seats only.",
  keywords: [
    "AI workforce Singapore",
    "WSG Career Conversion Programme",
    "One Person Company Singapore",
    "AI training Singapore",
    "EnterpriseSG startup grant",
    "Kydon AI",
    "AI upskilling",
    "mid-career transition Singapore",
    "OPC Singapore",
    "One Person Company Singapore",
    "AI entrepreneur Singapore",
    "WSG CCP programme",
    "AI bootcamp Singapore",
    "ESG startup grant Singapore",
    "AI business Singapore",
    "mid-career switch Singapore",
    "AI Workforce Factory",
    "Kydon OPC",
  ],
  authors: [{ name: "Kydon Group", url: "https://www.kydongrp.com" }],
  creator: "Kydon Group",
  publisher: "Kydon Holdings Pte Ltd",
  alternates: {
    canonical: "https://opc.kydongrp.com",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://opc.kydongrp.com",
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
    site: "@KydonGroup",
    creator: "@KydonGroup",
    title: "Stop Learning AI. Earn With It. | Kydon AI Workforce Factory",
    description:
      "Singapore's first structured pathway from AI learner to AI-powered business owner. Government-backed.",
    images: ["/og-image.png"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Kydon AI Workforce Factory",
  description:
    "Singapore's first government-backed programme transforming mid-career professionals into independent AI-powered business owners",
  url: "https://opc.kydongrp.com",
  logo: "https://www.kydongrp.com/kydon-logo.png",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SG",
    addressLocality: "Singapore",
  },
  offers: {
    "@type": "Offer",
    name: "AI Workforce Factory Cohort 1",
    description: "12-month programme to build an AI-powered One Person Company",
    price: "0",
    priceCurrency: "SGD",
    availability: "https://schema.org/LimitedAvailability",
    validFrom: "2026-01-01",
  },
  provider: {
    "@type": "Organization",
    name: "Kydon Group",
    url: "https://www.kydongrp.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
