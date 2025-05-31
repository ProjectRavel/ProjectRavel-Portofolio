import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Project from "@/components/project";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[var(--background)] color-[var(--foreground)]">
      <Navbar />
      <Hero />
      <Project />
    </main>
  );
}
