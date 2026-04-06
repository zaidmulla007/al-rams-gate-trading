"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export default function Craftsmanship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang, n } = useLang();
  const tr = t(lang).craftsmanship;

  const steps = tr.steps.map((step, i) => ({
    step: n(String(i + 1).padStart(2, "0")),
    ...step,
  }));

  return (
    <section id="craftsmanship" className="section-padding bg-cream relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold-dark text-sm tracking-[0.3em] uppercase">{tr.label}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
            {tr.title}
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            {tr.description}
          </p>
        </motion.div>

        {/* Manufacturing Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-2 text-6xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors duration-300">
                {item.step}
              </div>

              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold/0 group-hover:bg-gold transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold text-gold tracking-wider">{item.step}</span>
                  <div className="flex-1 h-[1px] bg-gold/20" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold-dark transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 sm:mt-16 md:mt-20 bg-navy p-6 sm:p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 20px,
                  rgba(201, 168, 76, 0.1) 20px,
                  rgba(201, 168, 76, 0.1) 21px
                )`,
              }}
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-cream mb-4">
              {tr.bannerTitle}
            </h3>
            <p className="text-cream/60 max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-2">
              {tr.bannerDesc}
            </p>
            <a
              href="#stores"
              className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              {tr.visitStores}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
