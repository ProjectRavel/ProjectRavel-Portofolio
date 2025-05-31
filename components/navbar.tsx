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
        setShowNavbar(false); // Scroll ke bawah, sembunyikan navbar
      } else {
        setShowNavbar(true); // Scroll ke atas, tampilkan navbar
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
      } bg-[var(--background)] backdrop-blur shadow text-[var(--muted-foreground)]`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
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
              className={`px-3 py-1 text-[12px] rounded-2xl flex items-center transition duration-200 ${
                href === "#hero"
                  ? "bg-[var(--secondary)] text-white hover:opacity-90"
                  : "text-[var(--foreground)] hover:opacity-80 hover:underline"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
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
        <div className="md:hidden bg-[var(--background)] border-t border-b-slate-500 backdrop-blur shadow-md">
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
