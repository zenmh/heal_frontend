import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Navbar } from "@/components/shared/navbar";

export const metadata: Metadata = {
  title: "Heal",
  description: "Developing by Mehedi Hasan",
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-[1444px] mx-auto",
          fontSans.variable
        )}
      >
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
