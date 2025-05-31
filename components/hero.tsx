"use client";
import { useState, useRef, useEffect, memo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import NetworkLayer from "./networklayer";

import Image from "next/image";
const LazyNetworkLayer = memo(NetworkLayer, (prevProps, nextProps) => {
  return (
    prevProps.x === nextProps.x &&
    prevProps.y === nextProps.y &&
    prevProps.factor === nextProps.factor &&
    prevProps.opacity === nextProps.opacity
  );
});

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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),1500);
    return () => clearTimeout(timer);
  }, []);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover p-6 overflow-hidden bg-hero-pattern"
    >
      <div className="absolute inset-0 bg-[var(--background)] backdrop-blur-sm" />

      <Suspense fallback={null}>
        <LazyNetworkLayer
          x={mousePos.x}
          y={mousePos.y}
          factor={0.02}
          opacity={0.1}
        />
        <LazyNetworkLayer
          x={mousePos.x}
          y={mousePos.y}
          factor={0.05}
          opacity={0.2}
        />
        <LazyNetworkLayer
          x={mousePos.x}
          y={mousePos.y}
          factor={0.1}
          opacity={0.3}
        />
      </Suspense>

      <div className="relative z-10 w-full max-w-6xl mx-auto font-mono text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5 text-center md:text-left"
                >
          {/* Text Area */}
            {loading ? (
                <div className="relative z-10 w-full max-w-6xl mx-auto font-mono text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col items-center md:items-start space-y-5">
                    <Skeleton className="h-12 w-[200px] rounded-md" />
                    <Skeleton className="h-5 w-[280px] rounded-md" />
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Skeleton className="h-10 w-[140px] rounded-xl" />
                      <Skeleton className="h-10 w-[140px] rounded-xl" />
                    </div>
                  </div>

                </div>
              </div>
            ) : (
                <>
                <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground">
                  Just Vels
                </h1>
                <p className="text-base md:text-lg text-primary">
                 Hello! My name is Ravel, and I’m a passionate Full Stack Developer. I have a deep interest in web development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="group relative px-6 py-2 rounded-xl text-white font-medium bg-primary transition duration-300 hover:bg-primary-dark shadow-lg hover:shadow-xl overflow-hidden">
    <span className="relative z-10 flex items-center gap-2">
      <svg
        className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12H3" />
      </svg>
      Contact Me
    </span>
    <span className="absolute inset-0 bg-white/10 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
  </button>

  {/* Secondary Button */}
  <button className="group relative px-6 py-2 rounded-xl border border-primary text-primary font-medium bg-transparent hover:bg-primary hover:text-white transition duration-300 shadow-sm hover:shadow-md overflow-hidden">
    <span className="relative z-10 flex items-center gap-2">
      <svg
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      My Projects
    </span>
    <span className="absolute inset-0 bg-primary/10 group-hover:bg-primary/30 transition-colors duration-300" />
  </button>
                </div>
              </>
            )}
          </motion.div>

          {/* Image Slider */}
          <div className="relative w-full h-64 overflow-hidden rounded-xl">
            {loading ? (
              <Skeleton className="w-full h-full rounded-xl" />
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[index]}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-full h-full"
                >
                  <Image
                    src={images[index]}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            )}

            {!loading && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-card p-2 rounded-full text-white hover:bg-primary-dark"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-card p-2 rounded-full text-white hover:bg-primary-dark"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
