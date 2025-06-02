"use client";

import {
  Mail,
  Github,
  Phone,
  Instagram,
  Linkedin,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: <Phone className="w-6 h-6" />,
    label: "WhatsApp",
    href: "https://wa.me/6285159773009",
  },
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    href: "https://github.com/projectravel",
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    label: "Instagram",
    href: "https://instagram.com/artificialvels",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    href: "mailto:rafaelsumanti01@gmail.com",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rafael-pandu-sumanti-b17108346/",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    label: "Discord",
    href: "https://discord.gg/9dVWqq4A",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-[var(--foreground)] font-sans bg-gradient-to-br from-[var(--background)] to-[var(--card)] relative overflow-hidden">
      {/* Animated subtle grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255 255 255 / 0.05) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(255 255 255 / 0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          animation: "gridShift 60s linear infinite",
          zIndex: 0,
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl sm:text-6xl font-extrabold mb-8 z-10 tracking-wide"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="max-w-xl text-center text-[var(--muted-foreground)] mb-20 z-10 leading-relaxed text-lg"
      >
        I&apos;m always open to connect, collaborate, or just have a friendly
        chat. Reach out through any platform below!
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl w-full z-10">
        {contactItems.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group flex flex-col items-center gap-5 p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-lg shadow-[rgba(0,0,0,0.4)] backdrop-blur-md cursor-pointer text-center transition-colors hover:bg-[var(--popover)] hover:border-[var(--primary)]"
          >
            <motion.div
              className="text-[var(--primary)] group-hover:text-[var(--primary)]"
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.div>
            <motion.span
              className="text-xl font-semibold text-[var(--card-foreground)] group-hover:text-[var(--primary)]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.label}
            </motion.span>
          </motion.a>
        ))}
      </div>

      <style jsx>{`
        @keyframes gridShift {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 40px 40px, 40px 40px;
          }
        }
      `}</style>
    </main>
  );
}
