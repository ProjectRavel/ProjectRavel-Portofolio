"use client";

import { memo } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import ParticleBackground from "./dustbackground";
import Link from "next/link";
import { motion } from "framer-motion";

const vscodeColors = {
  keyword: "text-[#569CD6]",
  variable: "text-[#9CDCFE]",
  property: "text-[#4EC9B0]",
  string: "text-[#CE9178]",
  comment: "text-[#6A9955]",
  plain: "text-[#D4D4D4]",
};

type codeData = Record<string, string | undefined>;

// Typing animation component for each line of code

const CodeBlock = memo(function CodeBlock({
  title,
  data,
  icon,
}: {
  title: string;
  data: codeData[];
  icon?: React.ReactNode;
}) {
  // Variants for fade-in each object block with slight delay
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.3 },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="bg-[#1e1e1e] rounded-xl p-6 sm:p-8 shadow-lg border border-gray-700 transition-transform hover:scale-[1.02] select-text cursor-pointer"
      >
    <Link href={"/about"} className="cursor-pointer">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <motion.h3
            className="text-2xl font-semibold text-white"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {title}
          </motion.h3>
        </div>
        <div className="text-sm sm:text-base font-mono text-white overflow-x-auto whitespace-pre-wrap break-words max-w-full cursor-pointer">
          <code>
            <span className={vscodeColors.keyword}>const</span>{" "}
            <span className={vscodeColors.variable}>{title.toLowerCase()}</span>{" "}
            =[
            <br />
            {data.map((item, i) => {
              const entries = Object.entries(item).filter(
                ([key]) => key !== undefined
              );
              return (
                <motion.span
                  key={i}
                  custom={i}
                  variants={itemVariants}
                  className="block ml-4"
                >
                  &#123;
                  <br />
                  {entries.map(([key, val], idx) => (
                    <span key={idx}>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className={vscodeColors.property}>{key}</span>:{" "}
                      <span className={vscodeColors.string}>{val}</span>
                      {idx !== entries.length - 1 ? "," : ""}
                      <br />
                    </span>
                  ))}
                  &#125;{i !== data.length - 1 ? "," : ""}
                  <br />
                </motion.span>
              );
            })}
            ];
          </code>
        </div>
    </Link>
      </motion.div>
  );
});

export default function About() {
  const experience = [
    {
      role: "Fullstack Developer",
      company: "Dagah Jaya Niaga",
      period: "2024 - present",
      description: "Developing the company's fisheries website using Laravel.",
    },
    {
      role: "Backend Developer",
      company: "PT. Ciptadra Softindo",
      period: "2025 - 2026",
      description:
        "Responsible for authentication systems and product data management.",
    },
    {
      role: "Coding Mentor (Community IT Commit)",
      company: "SMK Wirabuana",
      period: "2023 - 2024",
      description:
        "Teaching HTML, CSS, JavaScript, Laravel, and React to vocational students.",
    },
  ];

  const education = [
    {
      institution: "SMK Wirabuana – RPL (Rekayasa Perangkat Lunak)",
      period: "2022 - present",
    },
    {
      institution: "Komunitas IT Commit – Mentor & Active Participant",
      description: "Learning and teaching modern web development.",
    },
  ];

  return (
    <>
      <section className="w-full text-white py-20 relative z-0 overflow-hidden">
        <div className="hidden sm:block absolute inset-0">
        <ParticleBackground />
        </div>
        <div className="max-w-6xl z-10 mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-6">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
                I&apos;m a dedicated and creative full-stack web developer. i&apos;m a
                dedicated and creative full-stack web developer with a strong
                passion for building user-friendly, efficient, and impactful web
                applications. My coding journey began with curiosity and has grown
                into a professional path fueled by constant learning and
                real-world project experience.
            </motion.p>
          </div>

          <div className="space-y-12">
            <CodeBlock
              title="Experience"
              data={experience}
              icon={<Briefcase className="text-[#569CD6]" />}
            />
            <CodeBlock
              title="Education"
              data={education}
              icon={<GraduationCap className="text-[#4EC9B0]" />}
            />

            {/* Animated button with icon slide */}
            <Link
              href="/about"
              className="
                group relative inline-flex items-center justify-center gap-2
                px-6 py-3 rounded-xl
                bg-[var(--primary)] hover:bg-[var(--secondary)]
                text-[var(--primary-foreground)]
                font-semibold text-sm sm:text-base
                transition-all duration-300
                shadow-md hover:shadow-lg
                backdrop-blur-sm
                sm:mx-auto sm:w-fit
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
                Read More
              </span>
              <span
                className="
                  absolute inset-0 rounded-xl
                  bg-white/10 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-none
                "
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
