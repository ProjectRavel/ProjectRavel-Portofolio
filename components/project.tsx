import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects-data";
import { truncateText } from "@/app/lib/utils";
import Skill from "./skill";
import GithubStats from "./componentProject/githubstats";
import BlurBackground from "./componentProject/blurBackground";

export default function Project() {
  const displayedProjects = projects.slice(0, 12);

  return (
    <>
      <div
        id="projects"
        className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-12 py-12 w-full backdrop-blur-2xl overflow-visible bg-[var(--background)]"
      >
        <BlurBackground />

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
          My Projects And Contributions
        </h1>
        <p className="relative z-10 text-lg text-center max-w-2xl text-muted-foreground mb-10">
          Here are some of the projects and contributions I've made in the field
          of web development. Feel free to explore and learn more about my work.
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
                loading="lazy"
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

        <GithubStats />
      </div>
    </>
  );
}
