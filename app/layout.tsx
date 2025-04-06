import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tiempos = localFont({
  src: [
    {
      path: '../public/fonts/headline/test-tiempos-headline-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/headline/test-tiempos-headline-regular-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    // Add other weights/styles as needed
  ],
  variable: '--font-tiempos',
});

export const metadata: Metadata = { // TODO: Change metadata
  title: "La casa",
  description:
    "A house for international, exceptional engineers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tiempos.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-6KY6TLKXKY" />
      {/* TODO: Add your Google Analytics ID */}
    </html>
  );
}
