import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onbexia",
  description:
    "Touring web application that helps you guide and guide new users through steps.",
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
