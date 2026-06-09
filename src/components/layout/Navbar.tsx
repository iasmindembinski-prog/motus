"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Apresentação", href: "/#apresentacao" },
  { name: "Objetivos", href: "/#objetivos" },
  { name: "Prêmio Motus", href: "/#premio" },
  { name: "Edições", href: "/edicoes" },
  { name: "Equipe", href: "/#equipe" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--foreground)]/10" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0">
              <span className={`font-heading text-2xl styles.animatedText font-bold tracking-wider transition-colors duration-500 ${scrolled ? "text-[var(--foreground)]" : "text-[var(--background)]"}`}>
                MOTUS
              </span>
            </Link>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors hover:text-[var(--accent)] duration-100 ${
                      scrolled ? "contrast-brown" : "text-[var(--background)]/80 hover:text-[var(--background)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md focus:outline-none transition-colors ${
                  scrolled ? "text-[var(--foreground)] contrast-brown" : "text-[var(--background)]"
                }`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--background)] md:hidden pt-24 px-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-heading text-[var(--foreground)] hover:text-[var(--accent)] border-b border-[var(--foreground)]/10 pb-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
