import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Header } from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Natural / Holistic Animal Care | Toronto/GTA | Birch Animal Wellness",
  description: "Natural / Holistic Animal Care | Toronto/GTA | Birch Animal Wellness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Header />

        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
