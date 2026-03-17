import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const S: React.CSSProperties = { fontFamily: "'Space Grotesk', sans-serif" };

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const links = [
    { id: "#about", label: "About" },
    { id: "#lineup", label: "Line Up" },
    { id: "#activities", label: "Activities" },
    { id: "#schedule", label: "Schedule" },
    { id: "#gallery", label: "Gallery" },
    { id: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[200] px-4 md:px-8 pt-4"
      >
        <div className={`rounded-2xl transition-all duration-500 ${scrolled ? "bg-[#070810]/90 backdrop-blur-xl border border-white/6 shadow-2xl shadow-black/50" : "bg-transparent"}`}>
          <div className="flex items-center justify-between px-5 py-3">
            <button
              className="flex items-center gap-2 group"
            >
              <span style={{ ...S, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.15em", color: "#EDE8DC" }}>
                SONGKRAN
              </span>
            </button>

            <div className="hidden md:flex items-center gap-7">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="relative group"
                  style={{ ...S, fontSize: "0.8rem", color: "rgba(237,232,220,0.45)", letterSpacing: "0.06em" }}
                >
                  <span className="group-hover:text-[#EDE8DC] transition-colors duration-200">{l.label}</span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#2FA7D8] group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => go("#about")}
                className="hidden md:block rounded-full px-5 py-2 text-[#050508] transition-all hover:scale-105 active:scale-95"
                style={{ ...S, background: "#2FA7D8", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.04em" }}
              >
                Free Entry ↗
              </button>
              <button onClick={() => setOpen(!open)} className="md:hidden" style={{ color: "rgba(237,232,220,0.6)" }}>
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-[199] rounded-2xl border border-white/8 p-6 bg-[#070810]/95 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <button key={l.id} onClick={() => go(l.id)} className="text-left py-3 border-b border-white/6"
                  style={{ ...S, color: "rgba(237,232,220,0.6)", fontSize: "0.95rem" }}>
                  {l.label}
                </button>
              ))}
              <button onClick={() => go("#about")} className="mt-4 rounded-full py-3 text-center text-[#050508]"
                style={{ ...S, background: "#2FA7D8", fontWeight: 600 }}>
                Free Entry ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
