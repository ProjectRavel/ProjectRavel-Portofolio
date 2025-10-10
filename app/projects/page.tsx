// app/projects/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects-data";
import { truncateText } from "@/app/lib/utils";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-[var(--secondary-foreground)]">All Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="group relative block w-full aspect-[3/2] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105 cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                <p className="text-sm text-gray-300">{truncateText(project.description, 120)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
