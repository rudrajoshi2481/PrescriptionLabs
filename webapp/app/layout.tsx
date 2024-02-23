"use client";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Appbar from "@/components/Appbar/Appbar";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
}); 

export default function RootLayout({
  children
}:any) {
  return (
    <html lang="en">
      <SessionProvider >
        <body className={poppins.className}>
          <Appbar />
          <Toaster />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
