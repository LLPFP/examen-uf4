import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/misComponentes/Header";
import { Footer } from "@/misComponentes/Footer";
const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Examen UF4 - Luis Lopez Puig",
  description: "Creado para el examen de la UF4 de Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased text-white bg-black`}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
