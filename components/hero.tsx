"use client";
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/slider1.jpg',
  '/images/slider2.jpg',
  '/images/slider3.jpg',
];

// Komponen layer jaringan (bisa reuse, hanya posisi saja yang beda)
const NetworkLayer = ({
  x,
  y,
  factor,
  opacity,
}: {
  x: number;
  y: number;
  factor: number;
  opacity: number;
}) => {
  // pake useSpring supaya smooth
  const springX = useSpring(x * factor, { stiffness: 100, damping: 20 });
  const springY = useSpring(y * factor, { stiffness: 100, damping: 20 });

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 700"
      fill="none"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="1"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        translateX: springX,
        translateY: springY,
        opacity,
      }}
    >
      <line x1="100" y1="100" x2="300" y2="150" />
      <line x1="300" y1="150" x2="500" y2="100" />
      <line x1="100" y1="100" x2="150" y2="300" />
      <line x1="150" y1="300" x2="400" y2="350" />
      <line x1="400" y1="350" x2="500" y2="100" />
      <line x1="400" y1="350" x2="600" y2="400" />
      <line x1="600" y1="400" x2="700" y2="200" />
      <line x1="700" y1="200" x2="500" y2="100" />
      <line x1="150" y1="300" x2="300" y2="500" />
      <line x1="300" y1="500" x2="500" y2="450" />
      <line x1="500" y1="450" x2="600" y2="400" />

      <circle cx="100" cy="100" r="6" fill="rgba(255,255,255,0.2)" />
      <circle cx="300" cy="150" r="6" fill="rgba(255,255,255,0.2)" />
      <circle cx="500" cy="100" r="6" fill="rgba(255,255,255,0.2)" />
      <circle cx="150" cy="300" r="6" fill="rgba(255,255,255,0.2)" />
      <circle cx="400" cy="350" r="6" fill="rgba(255,255,255,0.2)" />
      <circle cx="600" cy="400" r="6" fill="rgba(255,255,255,0.2)" />
      <circle cx="700" cy="200" r="6" fill="rgba(255,255,255,0.2)" />
      <circle cx="300" cy="500" r="6" fill="rgba(255,255,255,0.2)" />
      <circle cx="500" cy="450" r="6" fill="rgba(255,255,255,0.2)" />
    </motion.svg>
  );
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

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
      className="relative min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover p-6 overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'var(--overlay)', backdropFilter: 'blur(4px)' }}
      />

      {/* Multiple layers with different factors for parallax */}
      <NetworkLayer x={mousePos.x} y={mousePos.y} factor={0.02} opacity={0.1} />
      <NetworkLayer x={mousePos.x} y={mousePos.y} factor={0.05} opacity={0.2} />
      <NetworkLayer x={mousePos.x} y={mousePos.y} factor={0.1} opacity={0.3} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto font-mono text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: 'var(--primary--foreground)' }}>
              Just Vels
            </h1>
            <p className="text-sm sm:text-base md:text-lg" style={{ color: 'var(--primary)' }}>
              Fullstack developer who loves clean UI, smooth animations, and VS Code vibes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                className="px-6 py-2 rounded-xl text-sm sm:text-base shadow-md transition"
                style={{ backgroundColor: 'var(--primary)', color: '#fff' }}
              >
                Contact Me
              </button>
              <button
                className="px-6 py-2 rounded-xl text-sm sm:text-base border transition"
                style={{
                  borderColor: 'var(--primary)',
                  color: 'var(--primary)',
                }}
              >
                My Projects
              </button>
            </div>
          </motion.div>

          {/* Image Slider */}
          <div className="relative w-full h-64 overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt={`Slide ${index + 1}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full object-cover rounded-xl"
              />
            </AnimatePresence>

            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[var(--card)] p-2 rounded-full text-white hover:bg-[var(--primary-dark)]"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[var(--card)] p-2 rounded-full text-white hover:bg-[var(--primary-dark)]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
