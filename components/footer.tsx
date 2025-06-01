// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary)] text-[var(--secondary-foreground)] py-12 mt-20 relative overflow-hidden">
      {/* Animated background blur circles */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-[var(--primary)] opacity-20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-white opacity-10 rounded-full filter blur-2xl animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-4"
        >
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Let&apos;s connect and build something amazing!
          </h3>

          <div className="flex justify-center gap-6 mt-4">
            <SocialLink href="https://github.com/yourusername" icon={<Github />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/yourusername" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:you@example.com" icon={<Mail />} label="Email" />
          </div>

          <p className="text-sm text-gray-400 mt-6">&copy; {new Date().getFullYear()} Ravels. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="text-[var(--primary-foreground)] hover:text-[var(--primary)] transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
