import type { Metadata } from 'next';
import {
  Instrument_Serif,
  DM_Sans,
  JetBrains_Mono, Geist } from 'next/font/google';
import './globals.css';
import { personal } from '@/data/portfolio';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// ── Fonts ──────────────────────────────────────────────────
const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif',
  preload: true,
});

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  preload: false,
});

// ── Metadata ───────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://kunalsharma.dev'),
  title: `${personal.name} — ${personal.role}`,
  description: `${personal.hero.headline} ${personal.hero.subline}`,
  openGraph: {
    title: `${personal.name} — Portfolio`,
    description: personal.hero.subline,
    url: 'https://kunalsharma.dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${personal.name} — ${personal.role}`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personal.name} — Portfolio`,
    description: personal.hero.subline,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://kunalsharma.dev',
  },
};

// ── Root Layout ────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(instrumentSerif.variable, dmSans.variable, jetbrainsMono.variable, "font-sans", geist.variable)}
    >
      <body>
        {/* Skip to main content (accessibility) */}
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
