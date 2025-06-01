import { Mail, Github, Phone, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-4xl px-4 py-16 mx-auto text-[var(--foreground)]"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[var(--foreground)]">
        Contact Me
      </h2>
      <p className="text-center text-[var(--muted-foreground)] mb-10">
        i&apos;am love to connect! Feel free to message or explore my work.
      </p>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12">
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition shadow-md backdrop-blur-md"
        >
          <Phone className="w-5 h-5 text-[var(--primary)]" />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://github.com/username"
          target="_blank"
          className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition shadow-md backdrop-blur-md"
        >
          <Github className="w-5 h-5 text-[var(--primary)]" />
          <span>GitHub</span>
        </a>
        <a
          href="mailto:youremail@example.com"
          className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition shadow-md backdrop-blur-md"
        >
          <Mail className="w-5 h-5 text-[var(--primary)]" />
          <span>Email</span>
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition shadow-md backdrop-blur-md"
        >
          <Instagram className="w-5 h-5 text-[var(--primary)]" />
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
}
