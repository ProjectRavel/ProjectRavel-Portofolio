import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";


export const metadata: Metadata = {
  title: "ProjectRavel",
  description: "ProjectRavel - Your Journey Through Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[var(--background)] text-[var(--secondary)] font-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
