"use client";

import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { projects } from "@/app/data/projects-data";
import { truncateText } from "@/app/lib/utils";

export default function Project() {
  const circleRef = useRef<SVGSVGElement>(null);
  const rectRef = useRef<SVGSVGElement>(null);
  const polygonRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (circleRef.current) {
        circleRef.current.style.transform = `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`;
      }
      if (rectRef.current) {
        rectRef.current.style.transform = `translateY(${-scrollY * 0.5}px) scale(${1 + scrollY * 0.0005})`;
      }
      if (polygonRef.current) {
        polygonRef.current.style.transform = `translate(-50%, -50%) rotate(${scrollY * -0.2}deg) scale(${1 - scrollY * 0.0003})`;
      }
    };

    const onScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const displayedProjects = projects.slice(0,6);




  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-12 py-12 w-full backdrop-blur-2xl overflow-visible bg-[var(--background)]">
        {/* SVG Background Shapes */}
        <svg
          ref={circleRef}
          className="absolute top-10 left-10 w-32 h-32 opacity-40"
          viewBox="0 0 100 100"
          style={{ transition: "transform 0.1s linear", willChange: "transform" }}
        >
          <circle cx="50" cy="50" r="40" fill="#ffffff" />
        </svg>
    
        <svg
          ref={rectRef}
          className="absolute bottom-20 right-20 w-24 h-24 opacity-30"
          viewBox="0 0 100 100"
          style={{ transition: "transform 0.1s linear", willChange: "transform" }}
        >
          <rect width="80" height="80" x="10" y="10" fill="#ffffff" rx="10" ry="10" />
        </svg>

        <svg
          ref={polygonRef}
          className="absolute top-1/2 left-1/2 w-20 h-20 opacity-20"
          viewBox="0 0 100 100"
          style={{ transition: "transform 0.1s linear", willChange: "transform" }}
        >
          <polygon points="50,10 90,90 10,90" fill="#ffffff" />
        </svg>

        {/* Content */}
        <h1 className="relative z-10 text-4xl font-bold text-[var(--secondary-foreground)] mb-4 text-center">
          My Projects
        </h1>
        <p className="relative z-10 text-lg text-center max-w-2xl text-muted-foreground mb-10">
          Beberapa proyek yang telah saya kerjakan mencakup pengembangan aplikasi web,
          integrasi API, dan desain antarmuka pengguna yang interaktif. Saya terus belajar
          dan meningkatkan skill saya di dunia web development.
        </p>


        <h2 className="relative z-10 text-2xl font-semibold text-[var(--secondary-foreground)] mb-4">
          Projects:
        </h2>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group relative w-full aspect-[3/2] overflow-hidden rounded-[10px] shadow-xl hover:shadow-2xl transition duration-300 cursor-pointer hover:scale-105"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                <p className="text-sm text-gray-300">{truncateText(project.description, 110)}</p>
              </div>
            </div>
          ))}
        </div>

  <div className="relative z-10 mt-10">
          <Link
            href="/projects"
            className="px-6 py-2 rounded-xl text-white bg-primary hover:bg-background hover:border hover:border-primary transition"
          >
            Show More
          </Link>
        </div>

        <div className="relative z-10 mb-16 w-full my-24 overflow-x-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-[var(--secondary-foreground)] mb-4">
            GitHub Contributions:
          </h2>
          <div className="flex justify-center">
            <GitHubCalendar username="projectravel" blockSize={15} blockMargin={5} fontSize={16} />
          </div>
        </div>

      
      </div>
    </>
  );
}
