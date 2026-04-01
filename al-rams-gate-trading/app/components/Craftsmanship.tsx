"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Fabric Selection",
    description:
      "We source only the finest lightweight cottons and premium wash-and-wear fabrics from trusted suppliers, ensuring comfort in the Gulf's warm climate.",
  },
  {
    step: "02",
    title: "Precision Cutting",
    description:
      "Every piece is measured and cut with meticulous accuracy, following traditional patterns refined over generations of craftsmanship.",
  },
  {
    step: "03",
    title: "Expert Stitching",
    description:
      "Our master tailors bring decades of experience to every seam, combining hand-finishing techniques with modern precision for a flawless result.",
  },
  {
    step: "04",
    title: "Embroidery & Details",
    description:
      "From Omani collar embroidery to Saudi decorative stitching, each design element is carefully applied to honor regional traditions.",
  },
  {
    step: "05",
    title: "Quality Inspection",
    description:
      "Every kandura undergoes rigorous quality checks before reaching our stores, ensuring only the finest garments bear our name.",
  },
  {
    step: "06",
    title: "Ready to Wear",
    description:
      "Perfectly pressed and presented, each kandura is ready to make its wearer feel confident, comfortable, and connected to tradition.",
  },
];

export default function Craftsmanship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <span className="text-gold-dark text-sm tracking-[0.3em] uppercase">The Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
            Our Craftsmanship
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            From raw fabric to finished garment, every step of our manufacturing process
            reflects our dedication to quality and tradition.
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
                  <span className="text-sm font-bold text-gold tracking-wider">STEP {item.step}</span>
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
              Both Manufacturing &amp; Retail Under One Roof
            </h3>
            <p className="text-cream/60 max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-2">
              As both manufacturers and retailers, we cut out the middleman to bring you
              the finest kanduras at the best prices. Quality guaranteed from factory to store.
            </p>
            <a
              href="#stores"
              className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              Visit Our Stores
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
