"use client";

import { Mail, Github, Phone, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: <Phone className="w-5 h-5 text-[var(--primary)]" />,
    label: "WhatsApp",
    href: "https://wa.me/6285159773009",
  },
  {
    icon: <Github className="w-5 h-5 text-[var(--primary)]" />,
    label: "GitHub",
    href: "https://github.com/projectravel",
  },
  {
    icon: <Mail className="w-5 h-5 text-[var(--primary)]" />,
    label: "Email",
    href: "mailto:rafaelsumanti01@gmail.com",
  },
  {
    icon: <Instagram className="w-5 h-5 text-[var(--primary)]" />,
    label: "Instagram",
    href: "https://instagram.com/artificialvels",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-5xl px-6 py-20 mx-auto text-[var(--foreground)]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center mb-4"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-[var(--muted-foreground)] mb-12"
      >
        I&apos;m always open to connect, collaborate, or simply chat. Reach me through any platform below.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center justify-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition shadow-lg backdrop-blur-md text-center group"
          >
            <motion.div
              whileHover={{ rotate: 8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="transition"
            >
              {item.icon}
            </motion.div>
            <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
