"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";



export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen min-h-screen pt-20 flex items-center justify-center bg-hero-pattern bg-cover bg-center overflow-hidden"
    >
      {/* Background blur + glow + gradient overlay */}
      <div className="absolute inset-0 bg-[var(--background)]/60 backdrop-blur-sm z-0" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 via-transparent to-white/5 pointer-events-none" />

      {/* Pola titik-titik halus di background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dotPattern"
            x="0"
            y="0"
            width="15"
            height="15"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="0.8" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>

      {/* Glow circles */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-[var(--primary)] rounded-full blur-3xl opacity-25 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-2xl opacity-15 animate-pulse" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center font-mono text-white">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-primary uppercase tracking-widest"
          >
            👋 Hello, my name is
          </motion.span>

          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground">
            Just Vels
          </h1>
          <p className="text-base md:text-lg text-primary/80 leading-relaxed">
            I&apos;m a passionate Full Stack Developer focused on building
            clean, scalable, and user-centric web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="group relative px-6 py-2 rounded-xl text-white font-medium bg-primary hover:bg-primary-dark transition shadow-lg">
              {'>'} Contact Me
            </button>

            <button className="group relative px-6 py-2 rounded-xl border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition shadow">
              My Projects
            </button>
          </div>
        </motion.div>

        {/* Single Circular Image, lebih besar */}
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-xl mx-auto">
          <Image
            src={'/images/hero-image.png'} // Ganti dengan path gambar yang sesuai
            alt="Hero Image"
            fill
            sizes="(max-width: 640px) 150px, 288px"
            className="object-cover rounded-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
