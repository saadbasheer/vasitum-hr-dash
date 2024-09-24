import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "Vasitum",
  description: "Vasitum Dashbord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppinsSans.className}>{children}</body>
    </html>
  );
}
