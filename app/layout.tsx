import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "WildVadi - World of Wonder",
  description: "Your ultimate destination for thrills, smiles & celebration!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${styles.body}`}
      >
        {children}
      </body>
    </html>
  );
}
