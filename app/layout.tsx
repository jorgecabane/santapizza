import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Santa Pizza - Tradición Italiana, Vista al Mar",
  description: "Una experiencia que mezcla tradición italiana, vida sana y el gusto por el arte. Desde 2001 en las Rocas de Santo Domingo.",
  keywords: "pizza, restaurante italiano, Santo Domingo, Las Condes, comida italiana, vista al mar",
  openGraph: {
    title: "Santa Pizza - Tradición Italiana, Vista al Mar",
    description: "Una experiencia que mezcla tradición italiana, vida sana y el gusto por el arte.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

