"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("@/components/particlesAbout"),
  {
    ssr: false,
  }
);

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AboutPage() {
  return (
    <section className="relative w-full bg-[var(--background)] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden min-h-screen">
      {/* Particle Background */}
      <div className="hidden sm:block">
        <ParticleBackground />
      </div>

      {/* Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 relative z-10 px-2"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          passionate <span className="text-blue-400">Full Stack Developer</span>{" "}
          with a strong focus on building clean, scalable, and user-centric web
        </p>
      </motion.div>

      {/* Education & Experience */}
      <div className="max-w-5xl mx-auto relative z-10 px-2 grid gap-8 sm:gap-10 md:grid-cols-2">
        {/* Education & Experience Cards */}
        {[
          {
            type: "Education",
            color: "#4EC9B0",
            icon: <GraduationCap />,
            items: [
              {
                image: "/images/smk-wirabuana.png",
                title: "SMK Wirabuana – RPL",
                subtitle: "2022 - 2026",
                description:
                  "Specialized in Software Engineering with hands-on web dev, database, and teamwork experience.",
              },
              {
                image: "/images/it-commit.png",
                title: "IT Commit Community",
                subtitle: "Mentor & Participant",
                description:
                  "Mentored juniors, collaborated on React/Laravel projects, and shared clean code practices.",
              },
            ],
          },
          {
            type: "Experience",
            color: "#569CD6",
            icon: <Briefcase />,
            items: [
              {
                image: "/images/dagah-jaya.png",
                title: "Fullstack Developer – Dagah Jaya Niaga",
                subtitle: "2024 - Present",
                description:
                  "Built warehouse & inventory system with Laravel improving stock tracking & reporting.",
              },
              {
                image: "/images/ciptadra.png",
                title: "NextJS Developer – PT. Ciptadra Softindo",
                subtitle: "2025 - 2026",
                description:
                  "Developed high-performance Next.js frontend apps, SSR, API integration, and optimized UI.",
              },
              {
                image: "/images/mentor.png",
                title: "Mentor – SMK Wirabuana",
                subtitle: "2023 - 2024",
                description:
                  "Mentored junior students in frontend & backend tech, plus project management skills.",
              },
            ],
          },
        ].map((section, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={i + 1}
            className="space-y-6"
          >
            <h2
              className="text-2xl font-semibold flex items-center gap-2"
              style={{ color: section.color }}
            >
              {section.icon} {section.type}
            </h2>

            <div className="grid gap-6">
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 bg-[#111] p-4 rounded-xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.subtitle}</p>
                    <p className="text-sm text-gray-300 mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
