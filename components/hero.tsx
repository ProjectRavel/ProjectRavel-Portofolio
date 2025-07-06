import TypingName from "./componentHero/typingName";
import HeroButton from "./componentHero/heroButton";
import HeroImage from "./componentHero/heroImage";
import HeroBackground from "./componentHero/heroBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-screen min-h-screen pt-20 flex items-center justify-center bg-hero-pattern bg-cover bg-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center font-mono text-white">
        <div className="space-y-6">
          <span className="text-sm text-primary uppercase tracking-widest">
            Hello, my name is
          </span>

          <TypingName />

          <p className="text-base md:text-lg text-primary/80 leading-relaxed">
            Full Stack Developer focused on building clean, scalable, and
            user-centric web applications.
          </p>

          <HeroButton />
        </div>

        <HeroImage />
      </div>
    </section>
  );
}
