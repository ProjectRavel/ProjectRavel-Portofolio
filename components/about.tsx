"use client";

import { memo } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import ParticleBackground from "./dustbackground";
import Link from "next/link"; // Import Link dari next/link

const vscodeColors = {
  keyword: "text-[#569CD6]",
  variable: "text-[#9CDCFE]",
  property: "text-[#4EC9B0]",
  string: "text-[#CE9178]",
  comment: "text-[#6A9955]",
  plain: "text-[#D4D4D4]",
};

type codeData = Record<string, string | undefined>;

const CodeBlock = memo(function CodeBlock({
  title,
  data,
  icon,
}: {
  title: string;
  data: codeData[];
  icon?: JSX.Element;
}) {
  return (
    <div className="bg-[#1e1e1e] rounded-xl p-6 sm:p-8 shadow-lg border border-gray-700 transition-transform hover:scale-[1.01]">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>
      <pre className="text-sm sm:text-base font-mono text-white overflow-x-auto whitespace-pre-wrap break-words max-w-full">
        <code>
          <span className={vscodeColors.keyword}>const</span>{" "}
          <span className={vscodeColors.variable}>{title.toLowerCase()}</span> =
          [<br />
          {data.map((item, i) => {
            const entries = Object.entries(item).filter(
              ([key]) => key !== undefined
            );
            return (
              <span key={i}>
                &nbsp;&nbsp;&#123;
                <br />
                {entries.map(([key, val], idx) => (
                  <span key={idx}>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={vscodeColors.property}>{key}</span>:{" "}
                    <span className={vscodeColors.string}>
                      &apos;{val}&apos;
                    </span>
                    {idx !== entries.length - 1 ? "," : ""}
                    <br />
                  </span>
                ))}
                &nbsp;&nbsp;&#125;{i !== data.length - 1 ? "," : ""}
                <br />
              </span>
            );
          })}
          ];
        </code>
      </pre>
    </div>
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
      <section className="w-full text-white py-20 relative z-0">
        <ParticleBackground />
        <div className="max-w-6xl z-10 mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              I&apos;m a dedicated and creative full-stack web developer with a
              strong passion for building user-friendly, efficient, and
              impactful web applications. My coding journey began with curiosity
              and has grown into a professional path fueled by constant learning
              and real-world project experience.
            </p>
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
            <Link href="/about" passHref>
              <span
                className="
          inline-flex items-center gap-3
          bg-[var(--primary)] hover:bg-[var(--secondary)]
          text-[var(--primary-foreground)]
          font-semibold py-2 px-6 rounded-lg
          transition-colors duration-300 shadow-md
          select-none
          focus:outline-none focus:ring-2 focus:ring-[var(--primary-foreground)]
          "
              >
                {/* Logo SVG simple */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span>Read More</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
