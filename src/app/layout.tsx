import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/index";

export const metadata: Metadata = {
  title: "EBursa | Home",
  description: "lorem ipsum dolor sit amet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header></Header>
        {children}
        </body>
    </html>
  );
}
