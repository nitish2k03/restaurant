import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Component } from "react";
import Notification from "~/components/notification";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurant Ordering",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {<Notification />}
        {<Navbar />}
        {children}
        {<Footer />}
      </body>
    </html>
  );
}
