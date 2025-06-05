import { skills } from "@/app/data/skill-data";
import Image from "next/image";

export default function Skill() {
  return (
    <div className="relative z-10 mt-24 w-full max-w-6xl px-4">
      <h2 className="text-2xl font-semibold text-[var(--secondary-foreground)] mb-6">
        My Skills:
      </h2>

      {/* Skill Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:shadow-lg hover:bg-white/20"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src={skill.image}
                alt={skill.title}
                width={100}
                height={100}
                className="h-24 w-24 object-contain mb-4 rounded transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
              <p className="text-white font-medium text-lg group-hover:text-primary transition-colors duration-300">
                {skill.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
