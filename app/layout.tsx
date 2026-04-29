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
    default: 'Куртинский гранит — ТОО «Курты»',
    template: '%s | Куртинский гранит',
  },
  description:
    'Завод по добыче и обработке гранита Куртинского месторождения. Гранитные плиты, брусчатка, бордюры оптом от производителя с доставкой по Казахстану и России.',
  openGraph: {
    siteName: 'Куртинский гранит — ТОО «Курты»',
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
