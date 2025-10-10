"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import Image from "next/image";
import { experience } from "@/app/data/experience-data";
import { certifications } from "@/app/data/certification-data";
import { education } from "@/app/data/education-data";
import ParticleBackground from "./dustbackground";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="about"
      className="w-full text-white py-20 relative z-0 overflow-hidden"
    >
      <div className="hidden sm:block absolute inset-0">
        <ParticleBackground />
      </div>

      <div className="max-w-6xl z-10 mx-auto px-6 relative">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 max-w-2xl mx-auto mb-14 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          full-stack web developer passionate about bons that bridge
          creativuilding scalable, user-friendly digital solutiity and
          technology. My focus is on crafting clean, efficient, and impactful
          web systems.
        </motion.p>

        {/* EXPERIENCE JOURNEY */}
        <div ref={ref} className="relative mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="text-blue-400 w-6 h-6" />
            <h3 className="text-2xl font-semibold">Experience</h3>
          </div>

          <div className="relative pl-14">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-5 top-2 w-[2px] bg-gradient-to-b from-blue-400 via-blue-400 to-blue-400 origin-top"
            />
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="relative mb-16 flex gap-4 items-start group"
                variants={fadeUp}
                custom={i * 0.3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={exp.image}
                    alt={exp.role}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                  <p className="text-xs text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <motion.div
          variants={fadeUp}
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          custom={0.7}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-yellow-400 w-6 h-6" />
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#1e1e1e]/80 border border-gray-700 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform flex flex-col items-center text-center"
              >
                {/* Certification Logo / Image */}
                {cert.image ? (
                  <div className="w-28 h-28 mb-4">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={112}
                      height={112}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ) : (
                  <span className="text-sm text-yellow-400 font-semibold">
                    On Progress
                  </span>
                )}

                <h4 className="text-xl font-bold mb-1">{cert.title}</h4>
                <p className="text-sm text-gray-400 mb-3">{cert.issuer}</p>
                {cert.link ? (
                  <Link
                    href={cert.link}
                    target="_blank"
                    className="text-sm text-gray-300 underline underline-offset-4 hover:text-white transition-colors"
                  >
                    Verify Certification →
                  </Link>
                ) :  <Link
                    href={cert.link}
                    target="_blank"
                    className="text-sm text-gray-300 underline underline-offset-4 hover:text-white transition-colors"
                  >
                    On Progress
                  </Link>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.5}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-teal-400 w-6 h-6" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#1e1e1e]/70 border border-gray-700 rounded-xl p-5 shadow-lg backdrop-blur-sm hover:scale-[1.02] transition-transform"
              >
                <h4 className="text-lg font-bold mb-1">{edu.institution}</h4>
                <p className="text-xs text-gray-500 mb-2">{edu.period}</p>
                <p className="text-sm text-gray-400 mb-1">{edu.score}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* READ MORE */}
        <div className="flex justify-center mt-16">
          <Link
            href="/about"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
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
          </Link>
        </div>
      </div>
    </section>
  );
}
