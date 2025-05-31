import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Project from "@/components/project";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 sm:px-8 md:px-16 lg:px-24 bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
  <Navbar />
  <Hero />
  <Project />
</main>

  );
}
