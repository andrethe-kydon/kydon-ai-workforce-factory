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
  title: "Kydon AI Workforce Factory | Master Agentic AI. Launch Your Business. Singapore",
  description:
    "Singapore's most intensive agentic AI programme. 12 months. Master agentic workflows, build your OPC, and launch an AI-powered business. Cohort 1 open now — 30 seats only.",
  keywords: [
    "AI workforce Singapore",
    "One Person Company Singapore",
    "AI training Singapore",
    "Kydon AI",
    "mid-career transition Singapore",
    "OPC Singapore",
    "AI entrepreneur Singapore",
    "AI bootcamp Singapore",
    "AI business Singapore",
    "mid-career switch Singapore",
    "AI Workforce Factory",
    "Kydon OPC",
    "agentic AI Singapore",
    "AI workflow automation Singapore",
    "n8n Singapore",
    "AI agent developer Singapore",
    "prompt engineering Singapore",
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
      "Singapore's most intensive agentic AI programme. 12 months to master agentic workflows and launch your own AI-powered One Person Company. Cohort 1 open — 30 seats only.",
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
      "Singapore's most intensive agentic AI programme. 12 months. Master agentic AI. Launch your OPC. 30 seats only.",
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
