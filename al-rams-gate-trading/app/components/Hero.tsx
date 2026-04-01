"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(201, 168, 76, 0.1) 35px,
              rgba(201, 168, 76, 0.1) 36px
            )`,
          }}
        />
      </div>

      {/* Decorative Gold Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Geometric Islamic Pattern - Left */}
      <div className="absolute left-0 top-1/4 w-16 sm:w-24 md:w-32 h-32 sm:h-48 md:h-64 opacity-10">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" stroke="var(--gold)" strokeWidth="0.5" />
          <path d="M50 50 L100 100 L50 150 L0 100 Z" stroke="var(--gold)" strokeWidth="0.5" />
          <path d="M50 100 L100 150 L50 200 L0 150 Z" stroke="var(--gold)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Geometric Islamic Pattern - Right */}
      <div className="absolute right-0 top-1/3 w-16 sm:w-24 md:w-32 h-32 sm:h-48 md:h-64 opacity-10">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" stroke="var(--gold)" strokeWidth="0.5" />
          <path d="M50 50 L100 100 L50 150 L0 100 Z" stroke="var(--gold)" strokeWidth="0.5" />
          <path d="M50 100 L100 150 L50 200 L0 150 Z" stroke="var(--gold)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream mb-4 tracking-tight leading-tight"
        >
          AL RAMS GATE
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gradient-gold mb-8 tracking-wide"
        >
          TRADING
        </motion.h2>

        {/* Gold Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="gold-line max-w-xs mx-auto mb-8"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl sm:text-2xl md:text-3xl text-cream/90 font-light italic mb-6"
        >
          Best Wearings For Men
        </motion.p>

        {/* Manufacture + Sales Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 mb-6"
        >
          <span className="flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-4 py-2 text-xs sm:text-sm tracking-wider uppercase">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            We Manufacture
          </span>
          <span className="text-gold text-xl">+</span>
          <span className="flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-4 py-2 text-xs sm:text-sm tracking-wider uppercase">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            We Sell
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-sm sm:text-base md:text-lg text-cream/60 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
        >
          From our own factory floor to your hands &mdash; we manufacture and sell premium
          kanduras directly, ensuring the finest quality at the best prices. Located in the
          heart of Naif Souq, Dubai.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#collections"
            className="group relative bg-gold text-navy-dark px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 w-full sm:w-auto text-center"
          >
            <span className="relative z-10">Explore Collections</span>
            <div className="absolute inset-0 bg-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
          <a
            href="#contact"
            className="border border-gold/40 text-gold px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-gold/10 transition-all duration-300 hover:border-gold w-full sm:w-auto text-center"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
        >
          {[
            { number: "2", label: "Retail Stores" },
            { number: "Own", label: "Manufacturing" },
            { number: "1000+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold">{stat.number}</div>
              <div className="text-xs sm:text-sm text-cream/50 tracking-wider uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gold rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
