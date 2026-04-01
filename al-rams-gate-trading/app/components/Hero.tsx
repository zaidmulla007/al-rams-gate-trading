"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Large pulsing glow orbs for depth */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.4, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3D Rotating diamond - top left */}
      <motion.div
        className="absolute top-[15%] left-[8%] hidden md:block"
        style={{ perspective: "600px" }}
      >
        <motion.div
          className="w-20 h-20 lg:w-28 lg:h-28 border border-gold/35"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* 3D Rotating diamond - bottom right */}
      <motion.div
        className="absolute bottom-[20%] right-[10%] hidden md:block"
        style={{ perspective: "600px" }}
      >
        <motion.div
          className="w-16 h-16 lg:w-24 lg:h-24 border border-gold/30"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: [360, 0], rotateZ: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* 3D Rotating octagon - center right */}
      <motion.div
        className="absolute top-[40%] right-[5%] hidden lg:block"
        style={{ perspective: "800px" }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-32 h-32 xl:w-40 xl:h-40"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: [0, 360], rotateX: [0, 180, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <polygon
            points="38,15 62,15 82,38 82,62 62,82 38,82 18,62 18,38"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </motion.svg>
      </motion.div>

      {/* Floating Islamic star - left */}
      <motion.div
        className="absolute top-[30%] left-[3%] hidden md:block"
        style={{ perspective: "500px" }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-20 h-20 lg:w-28 lg:h-28"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateY: [0, 360],
            y: [0, -15, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points="50,5 61,35 95,35 68,57 79,90 50,70 21,90 32,57 5,35 39,35"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="0.8"
            opacity="0.25"
          />
        </motion.svg>
      </motion.div>

      {/* Floating particles */}
      {[
        { top: "12%", left: "20%", size: 3, delay: 0, duration: 6 },
        { top: "25%", left: "75%", size: 2, delay: 1, duration: 8 },
        { top: "60%", left: "15%", size: 2.5, delay: 2, duration: 7 },
        { top: "70%", left: "80%", size: 3, delay: 0.5, duration: 9 },
        { top: "45%", left: "90%", size: 2, delay: 3, duration: 6 },
        { top: "80%", left: "35%", size: 2, delay: 1.5, duration: 8 },
        { top: "15%", left: "55%", size: 1.5, delay: 2.5, duration: 7 },
        { top: "55%", left: "5%", size: 2, delay: 0.8, duration: 10 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute hidden sm:block rounded-full bg-gold"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Horizontal light streaks */}
      <motion.div
        className="absolute top-[25%] left-0 w-full h-px hidden md:block"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.18), transparent)" }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[65%] left-0 w-full h-px hidden md:block"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.14), transparent)" }}
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner geometric accents */}
      <div className="absolute top-24 left-4 sm:left-8 md:left-12 opacity-[0.18]">
        <motion.svg
          viewBox="0 0 120 120"
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="60" cy="60" r="55" fill="none" stroke="var(--gold)" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="40" fill="none" stroke="var(--gold)" strokeWidth="0.3" />
          <circle cx="60" cy="60" r="25" fill="none" stroke="var(--gold)" strokeWidth="0.3" />
          <line x1="60" y1="5" x2="60" y2="115" stroke="var(--gold)" strokeWidth="0.3" />
          <line x1="5" y1="60" x2="115" y2="60" stroke="var(--gold)" strokeWidth="0.3" />
          <line x1="18" y1="18" x2="102" y2="102" stroke="var(--gold)" strokeWidth="0.3" />
          <line x1="102" y1="18" x2="18" y2="102" stroke="var(--gold)" strokeWidth="0.3" />
        </motion.svg>
      </div>

      <div className="absolute bottom-24 right-4 sm:right-8 md:right-12 opacity-[0.18]">
        <motion.svg
          viewBox="0 0 120 120"
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <rect x="10" y="10" width="100" height="100" fill="none" stroke="var(--gold)" strokeWidth="0.5" />
          <rect x="25" y="25" width="70" height="70" fill="none" stroke="var(--gold)" strokeWidth="0.3" transform="rotate(15 60 60)" />
          <rect x="35" y="35" width="50" height="50" fill="none" stroke="var(--gold)" strokeWidth="0.3" transform="rotate(30 60 60)" />
          <rect x="42" y="42" width="36" height="36" fill="none" stroke="var(--gold)" strokeWidth="0.3" transform="rotate(45 60 60)" />
        </motion.svg>
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
