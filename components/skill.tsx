"use client";

import { useState, useMemo } from "react";
import { skills } from "@/app/data/skill-data";
import Image from "next/image";

export default function Skill() {
  const [showAll, setShowAll] = useState(false);

  const displayedSkills = useMemo(() => {
    return showAll ? skills : skills.slice(0, 3);
  }, [showAll]);

  const toggleSkills = () => {
    setShowAll((prev) => {
      const newState = !prev;
      return newState;
    });
  };

  return (
    <section className="mt-24 w-full max-w-6xl px-4 mx-auto">
      <h2 className="text-2xl font-semibold text-[var(--secondary-foreground)] mb-6">
        My Skills:
      </h2>

      {/* Wrapper Grid with Overlay */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/10 backdrop-blur border border-white/10 transition duration-300 hover:shadow-md hover:bg-white/20"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="mb-4 h-24 w-24 object-contain rounded grayscale transition duration-300 group-hover:grayscale-0 group-hover:scale-105"
                />
                <p className="text-white font-medium text-lg transition-colors duration-300 group-hover:text-[var(--primary)]">
                  {skill.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fade Overlay */}
        {!showAll && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none z-10" />
        )}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-6 z-20 relative">
        <button
          onClick={toggleSkills}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
            showAll
              ? "border border-[var(--primary)] text-white hover:bg-white hover:text-[var(--background)]"
              : "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-foreground)] hover:text-[var(--background)]"
          }`}
        >
          {showAll ? "Minimize" : "Read More"}
        </button>
      </div>
    </section>
  );
}
