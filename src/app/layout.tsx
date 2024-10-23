// RootLayout.tsx (Server Component)
import type { Metadata } from "next";
import "./globals.css";
import AOSInitializer from "./AOSInitializer";
import Footer from "@/Components/Shared/Footer/Footer";


export const metadata: Metadata = {
  title: "Kazi Rauf Elahi Portfolio",
  description: "About all the information to Kazi Rauf Elahi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#1c1c1c]">
        {/* Include AOSInitializer to apply animations */}
        <AOSInitializer />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
