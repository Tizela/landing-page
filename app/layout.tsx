import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { paytone } from "./ui/fonts";
import Navbar from "./ui/components/navbar";
import Footer from "./ui/components/footer";
export const metadata: Metadata = {
  title: "Tizela",
  description: "Unlock new experiences with Tizela",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={paytone.className}>
        <Navbar />
        <div className="relative">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
