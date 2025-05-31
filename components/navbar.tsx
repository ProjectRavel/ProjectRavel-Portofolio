"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Background with pattern and parallax */}
      <div
        className="absolute inset-0 bg-[var(--background)]/90 backdrop-blur-md shadow-md"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23ffffff10'/%3E%3C/svg%3E"),
            linear-gradient(to right, transparent, transparent)
          `,
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
          zIndex: -1,
        }}
      ></div>

      <div className="max-w-5xl mx-auto flex justify-between items-center p-4 relative z-10">
        <span
          className="font-bold text-[20px] text-[var(--foreground)]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Ravels
        </span>

        {/* Desktop Menu */}
        <div
          className="hidden md:flex space-x-8 font-medium"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1 text-[14px] rounded-2xl flex items-center transition duration-200 ${
                href === "#hero"
                  ? "bg-[var(--secondary)] text-white hover:opacity-90"
                  : "text-[var(--foreground)]/70 hover:opacity-80"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-[var(--foreground)]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--background)]/90 border-t border-b-slate-500 backdrop-blur">
          <div
            className="flex flex-col space-y-3 px-4 py-3 font-medium"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:underline transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
