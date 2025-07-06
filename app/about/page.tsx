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

const CardItem = ({
  imageSrc,
  title,
  subtitle,
  description,
  alt,
}: {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  alt: string;
}) => (
  <div className="flex flex-col items-center md:flex-row md:items-start gap-4 md:gap-6 bg-[#111] p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center md:text-left">
    <div className="w-28 h-28 md:w-24 md:h-24 flex items-center justify-center">
      <Image
        src={imageSrc}
        alt={alt}
        width={112}
        height={112}
        loading="lazy"
        className="rounded-xl object-cover shadow-md w-full h-full"
      />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-lg md:text-xl text-white">{title}</h3>
      <p className="text-sm text-gray-400 mb-1 md:mb-2">{subtitle}</p>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

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
          full-stack web developer with a strong passion for building
          user-friendly, efficient, and impactful web applications. My coding
          journey began with curiosity and has grown into a professional path
          fueled by constant learning and real-world project experience.
        </p>
      </motion.div>

      {/* Education & Experience */}
      <div className="space-y-16 sm:space-y-20 max-w-5xl mx-auto relative z-10 px-2">
        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold flex items-center gap-3 text-[#4EC9B0]">
            <GraduationCap />
            Education
          </h2>

          <CardItem
            imageSrc="/images/smk-wirabuana.png"
            alt="SMK Wirabuana"
            title="SMK Wirabuana – RPL (Rekayasa Perangkat Lunak)"
            subtitle="2022 - 2026"
            description="At SMK Wirabuana, I specialize in Software Engineering, where I focus on building a solid foundation in programming, software development methodologies, and practical project implementation. The curriculum emphasizes hands-on experience with real-world technologies, preparing me to become an industry-ready developer. I've actively participated in various internal and external projects, gaining exposure to web development, database management, and teamwork."
          />

          <CardItem
            imageSrc="/images/it-commit.png"
            alt="IT Commit Community"
            title="IT Commit Community"
            subtitle="Mentor & Participant"
            description="As a part of the IT Commit Community, I regularly engage in collaborative learning sessions and contribute by mentoring junior developers. This community has provided me with practical exposure to modern tech stacks such as React, Laravel, and RESTful API design. I also help in organizing learning materials and sharing best practices related to clean code, system design, and efficient teamwork."
          />
        </motion.div>

        {/* Experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={2}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold flex items-center gap-3 text-[#569CD6]">
            <Briefcase />
            Experience
          </h2>

          <CardItem
            imageSrc="/images/dagah-jaya.png"
            alt="Dagah Jaya Niaga"
            title="Fullstack Developer – Dagah Jaya Niaga"
            subtitle="2024 - Present"
            description="At Dagah Jaya Niaga, I developed a custom warehouse and inventory management system using Laravel. This web-based platform streamlined the company’s storage operations, allowing for real-time product tracking, stock level monitoring, and automated report generation. The system significantly improved accuracy and efficiency in the company’s supply chain process."
          />

          <CardItem
            imageSrc="/images/ciptadra.png"
            alt="PT. Ciptadra Softindo"
            title="NextJS Developer – PT. Ciptadra Softindo"
            subtitle="2025 - 2026"
            description="As a Next.js Developer, I was responsible for building high-performance frontend applications for enterprise clients. My focus was on server-side rendering (SSR), API integration, and optimizing user interfaces for speed and scalability. I worked closely with backend teams and designers to deliver dynamic and responsive web applications that met business requirements."
          />

          <CardItem
            imageSrc="/images/mentor.png"
            alt="Mentor SMK Wirabuana"
            title="Mentor – SMK Wirabuana"
            subtitle="2023 - 2024"
            description="I mentored junior students in software engineering basics, focusing on both frontend and backend technologies. I facilitated peer learning sessions on HTML, CSS, JavaScript, React, and Laravel, and emphasized not just coding, but also teamwork, communication, and project management skills."
          />
        </motion.div>
      </div>
    </section>
  );
}
