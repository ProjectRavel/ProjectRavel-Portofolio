"use client";

import { projects } from "@/app/data/projects-data";
import Image from "next/image";
import { Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { use } from "react";
import Link from "next/link";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] overflow-hidden py-20 px-4 sm:px-6 lg:px-16">
      {/* Blurred glowing background circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl z-0" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-auto rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold mb-4 text-white">
            {project.title}
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted-foreground)] mb-8">
            {project.description}
          </p>

          <a
            href={project.githubrepo}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:brightness-110 transition duration-200 shadow-md border border-[var(--primary)] cursor-pointer hover:bg-[var(--secondary)] hover:text-[var(--secondary-foreground)]"
          >
            View Repository <Github className="w-5 h-5" />
          </a>
          <Link href={`/projects`}>
            <button
              className="inline-flex items-center gap-2 px-6 py-3 ml-4 rounded-xl bg-[var(--secondary)] text-[var(--secondary-foreground)] font-semibold hover:brightness-110 transition duration-200 shadow-md border-[2.5px] border-[var(--secondary)] hover:bg-amber-50/0"
            >
              Back to Projects <ArrowLeft className="w-5 h-5"></ArrowLeft>
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
