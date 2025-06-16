export default function BlurBackground() {
  return (
    <>
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
        radial-gradient(circle, rgba(255, 255, 255, 0.9) 0.6px, transparent 1.2px),
        linear-gradient(180deg, #444444, oklch(0.1448 0 0))
      `,
          backgroundRepeat: "repeat",
          backgroundSize: "12px 12px, 100% 100%",
        }}
      />

      <div
        className="absolute rounded-full bg-white opacity-30 blur-3xl pulse-blur"
        style={{
          width: "200px",
          height: "200px",
          top: "20%",
          left: "10%",
          animationDuration: "4000ms",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
        }}
      />
      <div
        className="absolute rounded-full bg-white opacity-20 blur-2xl pulse-blur"
        style={{
          width: "150px",
          height: "150px",
          top: "50%",
          left: "70%",
          animationDuration: "6000ms",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDelay: "2000ms",
        }}
      />
    </>
  );
}
