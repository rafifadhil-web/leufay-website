import type { Metadata } from 'next';
import './globals.css';
import './redesign.css';
import './refinements.css';
import { siteConfig } from '@/config/site';
import { LanguageProvider } from '@/i18n/LanguageProvider';

export const metadata: Metadata = {
  title: {
    default: 'Leufay Production — Anime, Games & Pop Culture',
    template: '%s | Leufay Production',
  },
  description:
    'Leufay Production is a creative media brand exploring anime, games, Japanese pop culture, digital content, and creative projects.',
  metadataBase: siteConfig.url ? new URL(siteConfig.url) : undefined,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/assets/logo/logo.png',
  },
  openGraph: {
    type: 'website',
    title: 'Leufay Production — Anime, Games & Pop Culture',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
