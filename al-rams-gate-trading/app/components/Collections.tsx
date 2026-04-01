"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const collections = [
  {
    id: "emirati",
    name: "Emirati Kandura",
    description:
      "The classic white Emirati kandura features a clean, simple neckline with minimal embroidery. Paired traditionally with ghutra and agal, it epitomizes Gulf elegance.",
    features: ["Pure White Fabric", "Simple Neckline", "Minimal Embroidery", "Lightweight Cotton"],
    color: "from-white to-gray-100",
    accent: "#f5f0e8",
  },
  {
    id: "omani",
    name: "Omani Kandura",
    description:
      "Distinguished by its unique collar and intricate embroidery, the Omani kandura comes in rich colors like coffee, gray, and dark emerald green crafted from premium fabrics.",
    features: ["Distinctive Collar", "Intricate Embroidery", "Rich Colors", "Premium Fabrics"],
    color: "from-emerald-950 to-emerald-900",
    accent: "#064e3b",
  },
  {
    id: "saudi",
    name: "Saudi Kandura",
    description:
      "The Saudi thobe is slightly longer with elegant cuffed sleeves and decorative stitching. A refined choice that combines formality with understated style.",
    features: ["Cuffed Sleeves", "Decorative Stitching", "Tailored Fit", "Formal Design"],
    color: "from-stone-100 to-stone-200",
    accent: "#d6d3d1",
  },
  {
    id: "kids",
    name: "Kids Collection",
    description:
      "Miniature versions of our finest kanduras, crafted with the same attention to detail. Perfect for young gentlemen on special occasions and everyday wear.",
    features: ["Comfortable Fit", "Durable Fabric", "Traditional Design", "Easy Care"],
    color: "from-amber-50 to-orange-50",
    accent: "#fef3c7",
  },
];

export default function Collections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCollection, setActiveCollection] = useState("emirati");

  const active = collections.find((c) => c.id === activeCollection) || collections[0];

  return (
    <section id="collections" className="section-padding bg-navy relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 80% 50%, var(--gold) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Our Collections</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            Premium Kandura Styles
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <p className="text-cream/60 max-w-2xl mx-auto text-lg">
            Explore our curated range of traditional kanduras, each representing the finest
            craftsmanship from across the Gulf region.
          </p>
        </motion.div>

        {/* Collection Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
        >
          {collections.map((col) => (
            <button
              key={col.id}
              onClick={() => setActiveCollection(col.id)}
              className={`px-3 sm:px-5 md:px-6 py-2 sm:py-3 text-xs sm:text-sm tracking-wider uppercase font-medium transition-all duration-300 ${
                activeCollection === col.id
                  ? "bg-gold text-navy-dark"
                  : "border border-gold/30 text-gold/70 hover:border-gold hover:text-gold"
              }`}
            >
              {col.name}
            </button>
          ))}
        </motion.div>

        {/* Active Collection Display */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
        >
          {/* Visual Card */}
          <div className="relative">
            <div
              className="aspect-[3/4] relative overflow-hidden flex items-center justify-center"
              style={{ background: active.accent }}
            >
              <div className="text-center p-12">
                <div className="w-20 h-20 mx-auto mb-6 border border-navy/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-navy/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-navy mb-2">{active.name}</h3>
                <p className="text-navy/60 text-sm tracking-wider uppercase">Premium Collection</p>
              </div>
              {/* Corner accents */}
              <div className="absolute top-6 left-6 w-16 h-16 border-t border-l border-gold/30" />
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b border-r border-gold/30" />
            </div>
          </div>

          {/* Collection Details */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-cream mb-6">{active.name}</h3>
            <p className="text-cream/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">{active.description}</p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-10">
              {active.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-gold rotate-45 flex-shrink-0" />
                  <span className="text-cream/80 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gold text-navy-dark px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 group w-full sm:w-auto"
            >
              Inquire Now
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* All Collections Grid Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {collections.map((col, i) => (
            <motion.div
              key={col.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveCollection(col.id)}
              className={`cursor-pointer p-3 sm:p-4 md:p-6 text-center border transition-all duration-300 ${
                activeCollection === col.id
                  ? "border-gold bg-gold/10"
                  : "border-gold/10 hover:border-gold/40 bg-navy-light/50"
              }`}
            >
              <div className="w-12 h-12 mx-auto mb-4 border border-gold/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-cream font-semibold text-sm mb-1">{col.name}</h4>
              <p className="text-cream/40 text-xs">View Collection</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
