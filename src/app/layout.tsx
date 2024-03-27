import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Det Lille Galleri",
  description: "Det Lille Galleri i Ødum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
