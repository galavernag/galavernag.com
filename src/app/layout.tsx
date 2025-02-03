import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontJetbrains = JetBrains_Mono({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guilherme Galaverna - Desenvolvedor Front-end",
  description: "Olá, sou Guilherme Galaverna, um desenvolvedor Front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${fontJetbrains.className} bg-neutral-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
