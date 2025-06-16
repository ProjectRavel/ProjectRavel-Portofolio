"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FileDown, Terminal } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const names = useRef([
    "Rafael-Pandu",
    "Ravels_Pelski",
    "/ProjectRavel",
  ]).current;
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlocking, setIsBlocking] = useState(false); // buat animasi blok
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const pauseTimeout = setTimeout(() => setPause(false), 1000);
      return () => clearTimeout(pauseTimeout);
    }

    const currentName = names[nameIndex];

    // Kalau lagi blok teks (animasi CTRL+A)
    if (isBlocking) {
      // Setelah blok selesai (1 detik), hapus semua teks langsung
      const blockTimeout = setTimeout(() => {
        setDisplayText("");
        setIsBlocking(false);
        setIsDeleting(false);
        setNameIndex((prev) => (prev + 1) % names.length);
        setCharIndex(0);
      }, 1000);

      return () => clearTimeout(blockTimeout);
    }

    // Kalau lagi mengetik
    if (!isDeleting) {
      const currentText = currentName.substring(0, charIndex + 1);
      setDisplayText(currentText);

      if (currentText === currentName) {
        // Sudah selesai ketik, pause sebentar lalu mulai hapus (blok)
        setPause(true);
        setIsDeleting(true);
      } else {
        const typingSpeed = 120;
        const timeout = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
    } else {
      // isDeleting = true, tapi kita nggak hapus per karakter, melainkan blok dulu
      // Jadi, set displayText penuh dulu dan mulai blok
      setDisplayText(currentName);
      setIsBlocking(true);
    }
  }, [charIndex, isDeleting, nameIndex, names, pause, isBlocking]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-screen min-h-screen pt-20 flex items-center justify-center bg-hero-pattern bg-cover bg-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--background)]/60 backdrop-blur-sm z-0" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 via-transparent to-white/5 pointer-events-none" />

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

      <div className="absolute top-20 left-10 w-48 h-48 bg-[var(--primary)] rounded-full blur-3xl opacity-25 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-2xl opacity-15 animate-pulse" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center font-mono text-white">
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
            Hello, my name is
          </motion.span>

          <h1
            className={`text-4xl sm:text-5xl font-bold text-primary-foreground ${
              isBlocking
                ? "bg-primary/50 rounded px-1 select-all" // highlight blok saat hapus
                : ""
            }`}
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-base md:text-lg text-primary/80 leading-relaxed">
            I&apos;m a passionate Full Stack Developer focused on building
            clean, scalable, and user-centric web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href={"/assets/Rafael-Pandu-CV.pdf"}
              download={true}
              className="group flex items-center relative px-6 py-2 rounded-xl text-white font-medium bg-primary hover:bg-[var(--muted)] transition shadow-lg cursor-pointer"
            >
              <FileDown size={20} className="mr-2" /> Download CV
            </Link>

            <Link
              href={"/projects"}
              className="group flex relative px-6 py-2 rounded-xl border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition shadow cursor-pointer"
            >
              <Terminal size={20} className="mr-2" /> My Projects
            </Link>
          </div>
        </motion.div>

        <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-xl mx-auto">
          <Image
            src={"/images/hero-image.png"}
            alt="Projectravel Profile Picture"
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
