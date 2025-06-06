import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";


export const metadata: Metadata = {
  title: "ProjectRavel – Web Developer Portfolio",
  description: "Your Journey Through The Code",
  authors: [{ name: "ProjectRavel" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ProjectRavel – Young Developer Portfolio",
    description: "Check out the best works and projects by ProjectRavel here.",
    url: "https://projectravel-portofolio.vercel.app",
    siteName: "ProjectRavel",
    type: "website",
  },
  alternates: {
    canonical: "https://projectravel-portofolio.vercel.app",
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
        className={`antialiased bg-[var(--background)] text-[var(--secondary)] font-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
