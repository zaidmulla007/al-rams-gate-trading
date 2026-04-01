"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const processFlow = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "We Source",
    description: "Premium fabrics sourced from the finest textile mills",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "We Manufacture",
    description: "Expert tailors craft every piece in our own facility",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "We Inspect",
    description: "Rigorous quality checks ensure every kandura is flawless",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "We Sell",
    description: "Directly to you from our stores in Naif Souq, Dubai",
  },
];

export default function ManufactureAndSales() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-navy relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 70% 50%, var(--gold) 0%, transparent 40%)",
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
          <span className="text-gold text-sm tracking-[0.3em] uppercase">
            Factory to Store
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            We Manufacture &amp; We Sell
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <p className="text-cream/60 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Unlike most retailers, we don&apos;t just sell kanduras &mdash; we make them.
            Every kandura you see in our stores is designed, cut, stitched, and finished by
            our own skilled craftsmen. This means you get superior quality, custom options,
            and factory-direct prices with no middlemen involved.
          </p>
        </motion.div>

        {/* Two Big Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-10 sm:mb-16">
          {/* Manufacturing Pillar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative border border-gold/20 p-5 sm:p-8 md:p-10 group hover:border-gold/50 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 border-t-2 border-l-2 border-gold" />
            <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 border-b-2 border-r-2 border-gold" />

            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-gold/10 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gold">Manufacturing</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4 text-cream/70 text-sm sm:text-base">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rotate-45 mt-2 flex-shrink-0" />
                <span>Own in-house production facility with expert tailors</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rotate-45 mt-2 flex-shrink-0" />
                <span>Full control over quality from fabric to final stitch</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rotate-45 mt-2 flex-shrink-0" />
                <span>Custom orders &amp; bulk manufacturing for businesses</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rotate-45 mt-2 flex-shrink-0" />
                <span>Emirati, Omani &amp; Saudi styles crafted authentically</span>
              </li>
            </ul>
          </motion.div>

          {/* Sales Pillar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative border border-gold/20 p-5 sm:p-8 md:p-10 group hover:border-gold/50 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 border-t-2 border-l-2 border-gold" />
            <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 border-b-2 border-r-2 border-gold" />

            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-gold/10 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gold">Retail Sales</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4 text-cream/70 text-sm sm:text-base">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rotate-45 mt-2 flex-shrink-0" />
                <span>Two retail stores in the iconic Naif Souq, Dubai</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rotate-45 mt-2 flex-shrink-0" />
                <span>Factory-direct prices &mdash; no middlemen, no markups</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rotate-45 mt-2 flex-shrink-0" />
                <span>Ready-to-wear &amp; made-to-measure options available</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rotate-45 mt-2 flex-shrink-0" />
                <span>Collections for men &amp; children for every occasion</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {processFlow.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
              className="relative text-center p-3 sm:p-4 md:p-6 bg-navy-light/50 border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute top-2 right-3 text-xs text-gold/30 font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-4 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                {item.icon}
              </div>
              <h4 className="text-gold font-bold text-sm tracking-wider uppercase mb-2">
                {item.title}
              </h4>
              <p className="text-cream/50 text-xs leading-relaxed">{item.description}</p>
              {/* Arrow connector (not on last) */}
              {i < processFlow.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 items-center justify-center">
                  <svg className="w-6 h-6 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center text-gold/60 text-sm tracking-wider uppercase mt-10"
        >
          From Our Factory &rarr; To Our Store &rarr; To You &mdash; No Middlemen
        </motion.p>
      </div>
    </section>
  );
}
