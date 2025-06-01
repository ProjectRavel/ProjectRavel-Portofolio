"use client";

import { useState, useRef, memo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NetworkLayer from "./networklayer";
import Image from "next/image";

const LazyNetworkLayer = memo(
  NetworkLayer,
  (prev, next) =>
    prev.x === next.x &&
    prev.y === next.y &&
    prev.factor === next.factor &&
    prev.opacity === next.opacity
);

const images = [
  "/projects/pengangguran.jpeg",
  "/projects/atta.jpeg",
  "/projects/fivem.jpeg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x, y });
  };

  const handleImageLoad = () => setLoading(false);
  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
   <section
  ref={sectionRef}
  onMouseMove={handleMouseMove}
  className="relative w-screen min-h-screen pt-20 flex items-center justify-center bg-hero-pattern bg-cover bg-center overflow-hidden"
>
      {/* Background blur + glow */}
      <div className="absolute inset-0 bg-[var(--background)]/60 backdrop-blur-sm z-0" />
      <div className="absolute top-20 left-10 w-40 h-40 bg-[var(--primary)] rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white rounded-full blur-2xl opacity-10 animate-pulse" />

      {/* Mouse Responsive Network Layer */}
      <Suspense fallback={null}>
        <LazyNetworkLayer
          x={mousePos.x}
          y={mousePos.y}
          factor={0.1}
          opacity={0.5}
        />
      </Suspense>

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
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12H3"
                  />
                </svg>
                Contact Me
              </span>
            </button>

            <button className="group relative px-6 py-2 rounded-xl border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition shadow">
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                My Projects
              </span>
            </button>
          </div>
        </motion.div>

        {/* Image Slider Section */}
        <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[index]}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full"
            >
              <Image
                src={images[index]}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-xl"
                onLoad={handleImageLoad}
                priority
              />
            </motion.div>
          </AnimatePresence>

          {!loading && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
              >
                <ChevronRight size={20} />
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-4 w-full flex justify-center gap-2">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      i === index ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
