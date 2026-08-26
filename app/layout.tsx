import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/app/context/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Zema Spiritual Media | Ethiopian Spiritual News, Broadcasts & Heritage',
  description: 'A modern media portal for spiritual and religious content in Ethiopia, featuring live broadcasts, news, interactive location maps, and multimedia galleries.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F5F5DC] text-[#004225] antialiased flex flex-col justify-between selection:bg-[#004225] selection:text-[#F5F5DC]">
        <LanguageProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
