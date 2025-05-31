// components/NetworkLayer.tsx
"use client";
import { useEffect } from "react";
import { motion, useSpring, useAnimation } from "framer-motion";

interface NetworkLayerProps {
  x: number;
  y: number;
  factor: number;
  opacity?: number;
}

const NetworkLayer = ({ x, y, factor, opacity = 0.2 }: NetworkLayerProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0.1, 0.4, 0.1],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    });
  }, [controls]);

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
      style={{ translateX: springX, translateY: springY }}
      animate={controls}
      initial={{ opacity }}
    >
      {/* garis & titik */}
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

      {[100, 300, 500, 150, 400, 600, 700, 300, 500].map((cx, i) => (
        <circle
          key={i}
          cx={cx}
          cy={[100, 150, 100, 300, 350, 400, 200, 500, 450][i]}
          r="6"
          fill="rgba(255,255,255,0.2)"
        />
      ))}
    </motion.svg>
  );
};

export default NetworkLayer;
