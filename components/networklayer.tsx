"use client";
import { useEffect } from "react";
import { motion, useSpring, useMotionValue, animate, useAnimation } from "framer-motion";

interface NetworkLayerProps {
  x: number;
  y: number;
  factor: number;
  opacity?: number;
}

const NetworkLayer = ({ x, y, factor, opacity = 0.2 }: NetworkLayerProps) => {
  const controls = useAnimation();

  // Spring yang mengikuti posisi mouse (scaled dengan factor)
  const springX = useSpring(x * factor, { stiffness: 100, damping: 20 });
  const springY = useSpring(y * factor, { stiffness: 100, damping: 20 });

  // MotionValue untuk efek float (animasi manual)
  const floatX = useMotionValue(0);
  const floatY = useMotionValue(0);

  // Animasi float looping naik turun dan kiri kanan
  useEffect(() => {
    let floatXAnim: ReturnType<typeof animate>;
    let floatYAnim: ReturnType<typeof animate>;

    // Fungsi animasi loop untuk floatX
    const animateFloatX = () => {
      floatXAnim = animate(floatX, 10, {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      });
    };

    // Fungsi animasi loop untuk floatY
    const animateFloatY = () => {
      floatYAnim = animate(floatY, 8, {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      });
    };

    animateFloatX();
    animateFloatY();

    // Animasi opacity loop dari useAnimation controls
    controls.start({
      opacity: [0.1, 1, 0.1],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    });

    return () => {
      floatXAnim?.stop();
      floatYAnim?.stop();
    };
  }, [controls, floatX, floatY]);

  // Gabungkan posisi mouse + efek float
  // Karena style translateX/Y hanya bisa 1 nilai, kita gunakan combine value
  // springX + floatX dan springY + floatY harus digabung pakai useMotionValue atau computed

  // Untuk gabungan kita bisa gunakan `useSpring` dengan fungsi manual,
  // tapi di sini pakai `motionValue` get dan set manual.

  // Cara mudah: gunakan `motion` style dengan array expression:
  // Tapi React style tidak bisa array untuk translate, jadi kita gunakan inline function style:
  
  const combinedX = useSpring(0, { stiffness: 100, damping: 20 });
  const combinedY = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    // update combinedX setiap springX dan floatX berubah
    const updateX = () => {
      combinedX.set(springX.get() + floatX.get());
    };
    const updateY = () => {
      combinedY.set(springY.get() + floatY.get());
    };

    // subscribe perubahan springX dan floatX
    const unsubSpringX = springX.on("change", updateX);
    const unsubFloatX = floatX.on("change", updateX);

    const unsubSpringY = springY.on("change", updateY);
    const unsubFloatY = floatY.on("change", updateY);

    // initial update
    updateX();
    updateY();

    return () => {
      unsubSpringX();
      unsubFloatX();
      unsubSpringY();
      unsubFloatY();
    };
  }, [springX, springY, floatX, floatY, combinedX, combinedY]);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 700"
      fill="none"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="1"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ translateX: combinedX, translateY: combinedY }}
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
