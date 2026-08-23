import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
