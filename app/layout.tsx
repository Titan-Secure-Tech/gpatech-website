import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GPA Tech Center - Build Your Tech Company Before Graduation",
  description: "GPA Tech provides comprehensive STEM education and AI application development training, empowering students to become tech entrepreneurs and build their own companies.",
  keywords: "STEM education, AI development, tech entrepreneurship, programming courses, student tech companies, nonprofit tech school",
  openGraph: {
    title: "GPA Tech Center",
    description: "Nonprofit tech school providing STEM education and AI application development for students",
    type: "website",
    url: "https://gpatech.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
