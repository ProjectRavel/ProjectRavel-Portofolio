"use client";

import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import { useState } from "react";

const projects = [
  {
    title: "Movie Search App",
    description: "Cari film dari OMDB API dengan antarmuka modern dan responsif.",
    image: "/projects/pengangguran.jpeg",
  },
  {
    title: "To-Do List App",
    description: "Aplikasi catatan harian dengan fitur tambah, hapus, dan edit tugas.",
    image: "/projects/pengangguran.jpeg",
  },
  {
    title: "E-Commerce Shop",
    description: "Website toko online dengan autentikasi pengguna dan keranjang belanja.",
    image: "/projects/pengangguran.jpeg",
  },
];

export default function Project() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = projects;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-[var(--secondary-foreground)] mb-4">My Projects</h1>
      <p className="text-lg text-center max-w-2xl text-muted-foreground mb-10">
        Beberapa proyek yang telah saya kerjakan mencakup pengembangan aplikasi web, integrasi API, dan desain antarmuka pengguna yang interaktif. Saya terus belajar dan meningkatkan skill saya di dunia web development.
      </p>

      {/* GitHub Calendar */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--secondary-foreground)] mb-4">GitHub Contributions:</h2>
        <GitHubCalendar
          username="projectravel"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>

      {/* Project Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[10px] shadow-xl hover:shadow-2xl transition duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      <div className="mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-xl text-white bg-primary hover:bg-background hover:border hover:border-primary transition"
        >
         Show More
        </button>
      </div>
    </div>
  );
}
