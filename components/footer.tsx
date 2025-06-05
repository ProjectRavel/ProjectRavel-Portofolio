"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Mail } from "lucide-react";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary)] text-[var(--secondary-foreground)] pt-16 pb-8 mt-24 relative overflow-hidden border-t border-[var(--border)] w-full">
      {/* Background Glows */}
      <div className="absolute top-0 left-[10%] w-60 h-60 bg-[var(--primary)] opacity-20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-[15%] w-60 h-60 bg-white opacity-10 rounded-full filter blur-2xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Branding */}
        <div className="text-center md:text-left space-y-2">
          <h4 className="text-xl font-semibold text-[var(--foreground)]">
            Ravels
          </h4>
          <p className="text-sm text-[var(--muted-foreground)]">
            Fullstack Developer & Creative Technologist. Passionate about tech,
            design, and collaboration.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left space-y-3">
          <h5 className="text-lg font-semibold text-[var(--foreground)]">
            Quick Links
          </h5>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[var(--muted-foreground)]">
            <li>
              <a
                href="#about"
                className="hover:text-[var(--primary)] transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-[var(--primary)] transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[var(--primary)] transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#hero"
                className="hover:text-[var(--primary)] transition-colors"
              >
                hero
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="text-center md:text-left space-y-3">
          <h5 className="text-lg font-semibold text-[var(--foreground)]">
            Find Me On
          </h5>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 justify-items-center md:justify-items-start">
            <SocialLink
              href="https://wa.me/085159773009"
              icon={<FaWhatsapp className="w-5 h-5" />}
              label="WhatsApp"
            />
            <SocialLink
              href="https://github.com/projectravel"
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
            />
            <SocialLink
              href="https://instagram.com/artificialvels"
              icon={<Instagram className="w-5 h-5" />}
              label="Instagram"
            />
            <SocialLink
              href="https://discord.gg/9dVWqq4A"
              icon={<FaDiscord className="w-5 h-5" />}
              label="Discord"
            />
            <SocialLink
              href="mailto:you@rafaelsumanti01@gmail.com"
              icon={<Mail className="w-5 h-5" />}
              label="Email"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 pt-6 text-center text-sm text-[var(--muted-foreground)] border-t border-[var(--border)]">
        &copy; {new Date().getFullYear()} Ravels. All rights reserved.
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
      whileHover={{ scale: 1.15, rotate: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
