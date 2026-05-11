import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Escritório de IA — Multi-Agent Blueprint",
  description:
    "Um framework open source que transforma 3 IAs em uma equipe completa: CEO, Dev, Designer, Copywriter. Sua agência autônoma no seu terminal.",
  keywords: ["IA", "Inteligência Artificial", "Claude", "Cursor", "Automação", "Agentes", "Open Source"],
  openGraph: {
    title: "Escritório de IA — Multi-Agent Blueprint",
    description: "Sua Agência de IA. No seu terminal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
