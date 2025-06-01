import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Project from "@/components/project";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
  <Navbar />
  <Hero />
  <About />
  <Project />
</main>

  );
}
