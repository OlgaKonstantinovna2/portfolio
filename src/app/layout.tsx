import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ольга Бурдина - Frontend-разработчик",
  description: "Frontend-разработчик с 4+ годами опыта. Создаю высокопроизводительные веб-приложения с использованием React, Next.js и современных технологий.",
  keywords: ["frontend", "react", "next.js", "typescript", "разработчик", "веб-приложения"],
  authors: [{ name: "Ольга Бурдина" }],
  creator: "Ольга Бурдина",
  openGraph: {
    title: "Ольга Бурдина - Frontend-разработчик",
    description: "Frontend-разработчик с 4+ годами опыта. Создаю высокопроизводительные веб-приложения.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ольга Бурдина - Frontend-разработчик",
    description: "Frontend-разработчик с 4+ годами опыта. Создаю высокопроизводительные веб-приложения.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
