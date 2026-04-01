"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Collections", href: "#collections" },
  { name: "Craftsmanship", href: "#craftsmanship" },
  { name: "Stores", href: "#stores" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header Wrapper */}
      <div className="fixed top-0 left-0 right-0 z-40">
        {/* Announcement Bar - hides on scroll */}
        <div
          className={`bg-gold text-navy-dark text-center text-xs sm:text-sm font-semibold overflow-hidden transition-all duration-500 ${
            scrolled ? "h-0 py-0" : "h-auto py-2"
          }`}
        >
          <div className="overflow-hidden whitespace-nowrap">
            <motion.div
              className="inline-flex"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[0, 1].map((copy) => (
                <span key={copy} className="inline-block px-2">
                  Best Wearings For Men &nbsp;&bull;&nbsp; Premium Kandura Manufacturing &amp; Sales &nbsp;&bull;&nbsp; Visit Our Stores in Naif Souq, Dubai &nbsp;&bull;&nbsp; Best Wearings For Men &nbsp;&bull;&nbsp; Premium Kandura Manufacturing &amp; Sales &nbsp;&bull;&nbsp;
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Main Navbar */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`transition-all duration-500 ${
            scrolled
              ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20 py-2 sm:py-3"
              : "bg-navy/70 backdrop-blur-sm py-3 sm:py-4 md:py-5"
          }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="flex flex-col items-start">
              <motion.h1
                className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-gradient-gold"
                whileHover={{ scale: 1.02 }}
              >
                AL RAMS GATE
              </motion.h1>
              <span className="text-[10px] sm:text-xs tracking-[0.3em] text-gold/70 uppercase">
                Trading
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm tracking-wider uppercase text-cream/80 hover:text-gold transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark px-4 lg:px-5 py-2 lg:py-2.5 text-xs lg:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                Get In Touch
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-6 h-[2px] bg-gold block"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-[2px] bg-gold block"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-6 h-[2px] bg-gold block"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-navy"
          >
            <div className="flex flex-col h-full px-5 sm:px-8 py-4 sm:py-6">
              <div className="flex justify-between items-center mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gradient-gold">AL RAMS GATE</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gold text-3xl"
                >
                  &times;
                </button>
              </div>
              <div className="flex flex-col gap-4 sm:gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl sm:text-2xl text-cream/80 hover:text-gold transition-colors tracking-wider uppercase"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto pb-8">
                <div className="gold-line mb-6" />
                <p className="text-cream/40 text-xs mt-1">Best Wearings For Men</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
