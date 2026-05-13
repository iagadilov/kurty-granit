import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/layout/FloatingCTA';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Гранит напрямую от производителя — Курты-Гранит',
    template: '%s | Курты-Гранит',
  },
  description:
    'Компания «Курты-Гранит» самостоятельно добывает и перерабатывает натуральный Куртинский гранит. Производим гранитную плитку, брусчатку, бордюры и блоки напрямую с карьера. Одни из самых низких цен в Казахстане и странах СНГ. Частные клиенты, строительные компании, крупные объекты.',
  openGraph: {
    siteName: 'Куртинский гранит — ТОО «Курты Гранит»',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-stone-950 text-stone-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
