import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import Link from "next/link";
import { projects } from "@/app/data/projects-data";
import { truncateText } from "@/app/lib/utils";
import Skill from "./skill";

export default function Project() {
  const displayedProjects = projects.slice(0, 6);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-12 py-12 w-full backdrop-blur-2xl overflow-visible bg-[var(--background)]">
        {/* Background Dot Pattern kecil-kecil */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
        radial-gradient(circle, rgba(255, 255, 255, 0.9) 0.6px, transparent 1.2px),
        linear-gradient(180deg, #444444, oklch(0.1448 0 0))
      `,
            backgroundRepeat: "repeat",
            backgroundSize: "12px 12px, 100% 100%",
          }}
        />

        {/* Lingkaran blur pulse */}
        <div
          className="absolute rounded-full bg-white opacity-30 blur-3xl pulse-blur"
          style={{
            width: "200px",
            height: "200px",
            top: "20%",
            left: "10%",
            animationDuration: "4000ms",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        />
        <div
          className="absolute rounded-full bg-white opacity-20 blur-2xl pulse-blur"
          style={{
            width: "150px",
            height: "150px",
            top: "50%",
            left: "70%",
            animationDuration: "6000ms",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: "2000ms",
          }}
        />
        <div
          className="absolute rounded-full bg-white opacity-25 blur-2xl pulse-blur"
          style={{
            width: "250px",
            height: "250px",
            top: "75%",
            left: "40%",
            animationDuration: "5000ms",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: "1000ms",
          }}
        />

        <h1 className="relative z-10 text-4xl font-bold text-[var(--secondary-foreground)] mb-4 text-center">
          My Projects
        </h1>
        <p className="relative z-10 text-lg text-center max-w-2xl text-muted-foreground mb-10">
          Beberapa proyek yang telah saya kerjakan mencakup pengembangan
          aplikasi web, integrasi API, dan desain antarmuka pengguna yang
          interaktif. Saya terus belajar dan meningkatkan skill saya di dunia
          web development.
        </p>

        <h2 className="relative z-10 text-2xl font-semibold text-[var(--secondary-foreground)] mb-4">
          Projects:
        </h2>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {displayedProjects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
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
                <h2 className="text-xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-300">
                  {truncateText(project.description, 110)}
                </p>
              </div>
            </Link>
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

        <Skill />

        <div className="relative z-10 mb-16 w-full my-24 overflow-x-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-[var(--secondary-foreground)] mb-4">
            GitHub Contributions:
          </h2>
          <div className="flex justify-center">
            <GitHubCalendar
              username="projectravel"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
            />
          </div>
        </div>
      </div>
    </>
  );
}
