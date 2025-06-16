export default function HeroBackground() {
  return (
    <>
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
    </>
  );
}
