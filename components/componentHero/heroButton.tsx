import Link from "next/link";
import { FileDown, Terminal } from "lucide-react";

export default function HeroButton() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <Link
        href="/assets/Rafael-Pandu-CV.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center relative px-6 py-2 rounded-xl text-white font-medium bg-primary hover:bg-[var(--muted)] transition shadow-lg cursor-pointer"
      >
        <FileDown size={20} className="mr-2" /> Download CV
      </Link>

      <Link
        href={"/projects"}
        className="group flex relative px-6 py-2 rounded-xl border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition shadow cursor-pointer"
      >
        <Terminal size={20} className="mr-2" /> My Projects
      </Link>
    </div>
  );
}
