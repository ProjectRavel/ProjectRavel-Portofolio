"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  animate,
  useAnimation,
} from "framer-motion";

interface NetworkLayerProps {
  x: number;
  y: number;
  factor: number;
  opacity?: number;
}

const NetworkLayer = ({ x, y, factor, opacity = 0.2 }: NetworkLayerProps) => {
  const controls = useAnimation();

  const springX = useSpring(x * factor, { stiffness: 100, damping: 20 });
  const springY = useSpring(y * factor, { stiffness: 100, damping: 20 });

  const floatX = useMotionValue(0);
  const floatY = useMotionValue(0);

  const combinedX = useSpring(0, { stiffness: 100, damping: 20 });
  const combinedY = useSpring(0, { stiffness: 100, damping: 20 });

  const [particles, setParticles] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    // Animasi gerakan mengambang
    const floatXAnim = animate(floatX, 10, {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    });

    const floatYAnim = animate(floatY, 8, {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    });

    controls.start({
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    });

    // Update posisi gabungan
    const updateX = () => {
      combinedX.set(springX.get() + floatX.get());
    };
    const updateY = () => {
      combinedY.set(springY.get() + floatY.get());
    };

    const unsubSpringX = springX.on("change", updateX);
    const unsubFloatX = floatX.on("change", updateX);
    const unsubSpringY = springY.on("change", updateY);
    const unsubFloatY = floatY.on("change", updateY);

    updateX();
    updateY();

    return () => {
      floatXAnim.stop();
      floatYAnim.stop();
      unsubSpringX();
      unsubFloatX();
      unsubSpringY();
      unsubFloatY();
    };
  }, [controls, floatX, floatY, springX, springY, combinedX, combinedY]);

  // Partikel latar belakang hanya di-render di client
  useEffect(() => {
    const generatedParticles = Array.from({ length: 30 }).map((_, i) => (
      <motion.circle
        key={`particle-${i}`}
        cx={Math.random() * 1000}
        cy={Math.random() * 700}
        r={Math.random() * 2 + 1}
        fill="white"
        style={{ opacity: Math.random() * 0.3 + 0.1 }}
        animate={{ cy: ["+=10", "-=10", "+=10"] }}
        transition={{
          repeat: Infinity,
          duration: 4 + Math.random() * 2,
          ease: "easeInOut",
        }}
      />
    ));

    setParticles(generatedParticles);
  }, []);

  const points = [
    { cx: 100, cy: 100 },
    { cx: 300, cy: 150 },
    { cx: 500, cy: 100 },
    { cx: 150, cy: 300 },
    { cx: 400, cy: 350 },
    { cx: 600, cy: 400 },
    { cx: 700, cy: 200 },
    { cx: 300, cy: 500 },
    { cx: 500, cy: 450 },
  ];

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 700"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        translateX: combinedX,
        translateY: combinedY,
      }}
      animate={controls}
      initial={{ opacity }}
    >
      {/* Gradien Glow */}
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Garis jaringan */}
      <g stroke="url(#glow)" strokeWidth="1.5">
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
      </g>

      {/* Titik interaktif */}
      {points.map((point, i) => (
        <motion.circle
          key={i}
          cx={point.cx}
          cy={point.cy}
          r="8"
          fill="url(#glow)"
          whileHover={{
            scale: 1.8,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
          initial={{ opacity: 0.3 }}
        >
          <animate
            attributeName="r"
            values="6;10;6"
            dur="2s"
            repeatCount="indefinite"
          />
        </motion.circle>
      ))}

      {/* Partikel latar belakang */}
      {particles}
    </motion.svg>
  );
};

export default NetworkLayer;
