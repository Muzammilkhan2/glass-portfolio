import type { Metadata } from "next";
import { Albert_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-fragment",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muzammil Ullah Khan — Building Beyond Possible",
  description:
    "Computer Science student & developer building useful products, experimenting with AI, and turning the process into stories worth sharing.",
  openGraph: {
    title: "Muzammil Ullah Khan — Building Beyond Possible",
    description:
      "Computer Science student & developer building useful products, experimenting with AI, and turning the process into stories worth sharing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
