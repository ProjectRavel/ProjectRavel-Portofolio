import type { Metadata } from "next";
import "./globals.css";
// import SmoothScrollProvider from "@/components/smoothScrollProvider";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/ui/scrollToTop";


export const metadata: Metadata = {
  title: "ProjectRavel – Fullstack Web Developer Portfolio",
  description:
    "Fullstack Web Developer Portfolio of ProjectRavel. Contribute over 10+ Enterprise & Government Systems. Built with Next.js, Tailwind CSS, and Laravel.",
  keywords: [
    "ProjectRavel",
    "Rafael Pandu Sumanti",
    "Web Developer Portfolio",
    "Next.js Portfolio",
    "Laravel Developer",
    "Frontend Projects",
    "Fullstack Web Developer",
  ],
  authors: [
    {
      name: "ProjectRavel",
      url: "https://projectravel-portofolio.vercel.app",
    },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "ProjectRavel – Fullstack Web Developer Portfolio",
    description:
      "Check out the best works and projects by ProjectRavel here. Made with Next.js, Tailwind CSS, and Laravel.",
    url: "https://projectravel-portofolio.vercel.app",
    siteName: "ProjectRavel",
    type: "website",
  },
  alternates: {
    canonical: "https://projectravel-portofolio.vercel.app",
  },
  metadataBase: new URL("https://projectravel-portofolio.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "ProjectRavel",
              jobTitle: "Fullstack Web Developer",
              url: "https://projectravel-portofolio.vercel.app",
              sameAs: [
                "https://github.com/projectravel",
                "https://wa.me/6285159773009",
                "https://instagram.com/artificialvels",
              ],
              worksFor: {
                "@type": "Organization",
                name: "ProjectRavel",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased bg-[var(--background)] text-[var(--secondary)] font-sans">
        {/* <SmoothScrollProvider /> */}
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
