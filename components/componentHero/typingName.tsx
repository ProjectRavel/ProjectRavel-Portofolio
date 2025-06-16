"use client";
import { useEffect, useState, useRef } from "react";

export default function TypingName() {
  const names = useRef([
    "Rafael-Pandu",
    "Ravels_Pelski",
    "/ProjectRavel",
  ]).current;

  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);
  const [status, setStatus] = useState<"typing" | "pause" | "blocking">(
    "typing"
  );

  const currentName = names[nameIndex];

  // ✍️ Typing effect
  useEffect(() => {
    if (status !== "typing") return;
    if (charIndex > currentName.length) return;

    const timeout = setTimeout(() => {
      if (charIndex === currentName.length) {
        // setelah selesai ketik
        setStatus("pause");
      } else {
        setDisplayText(currentName.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }
    }, 120);

    return () => clearTimeout(timeout);
  }, [charIndex, status, currentName]);

  // ⏸️ Pause before blocking
  useEffect(() => {
    if (status !== "pause") return;

    const timeout = setTimeout(() => {
      setStatus("blocking");
    }, 800);

    return () => clearTimeout(timeout);
  }, [status]);

  // 🧹 Blocking (blinking background + hapus semua)
  useEffect(() => {
    if (status !== "blocking") return;

    const timeout = setTimeout(() => {
      setDisplayText("");
      setCharIndex(0);
      setNameIndex((prev) => (prev + 1) % names.length);
      setStatus("typing");
    }, 1000);

    // tampilkan nama utuh (sekali saja saat masuk blocking)
    setDisplayText(currentName);

    return () => clearTimeout(timeout);
  }, [status, currentName, names.length]);

  return (
    <h1
      className={`text-4xl sm:text-5xl font-bold text-primary-foreground ${
        status === "blocking" ? "bg-primary/50 rounded px-1 select-all" : ""
      }`}
    >
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
