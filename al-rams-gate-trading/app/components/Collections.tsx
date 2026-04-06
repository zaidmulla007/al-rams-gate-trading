"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const collections = [
  {
    id: "emirati",
    name: "Emirati Kandura",
    description:
      "The classic Emirati kandura features a clean, simple neckline with minimal embroidery and tassel detail. Paired traditionally with ghutra and agal, it epitomizes Gulf elegance.",
    features: ["Pure Fabrics", "Simple Neckline", "Tassel Detail", "Lightweight Cotton"],
    images: Array.from({ length: 8 }, (_, i) => `/Emirati/png (${i + 1}).jpg`),
  },
  {
    id: "omani",
    name: "Omani Kandura",
    description:
      "Distinguished by its unique collar and intricate embroidery, the Omani dishdasha comes in rich colors crafted from premium Japanese cotton and luxury fabrics.",
    features: ["Distinctive Collar", "Intricate Embroidery", "Rich Colors", "Premium Fabrics"],
    images: Array.from({ length: 8 }, (_, i) => `/Omani/png (${i + 1}).jpg`),
  },
  {
    id: "saudi",
    name: "Saudi Thobe",
    description:
      "The Saudi thobe is slightly longer with elegant cuffed sleeves and decorative stitching. A refined choice that combines formality with understated style.",
    features: ["Cuffed Sleeves", "Decorative Stitching", "Tailored Fit", "Formal Design"],
    images: Array.from({ length: 8 }, (_, i) => `/Saudi/png (${i + 1}).jpg`),
  },
  {
    id: "moroccan",
    name: "Moroccan Thobe",
    description:
      "The Moroccan gandoura and djellaba feature relaxed silhouettes with ornate neckline embroidery. Available in short sleeve and hooded styles for every occasion.",
    features: ["Relaxed Silhouette", "Ornate Embroidery", "Gandoura & Djellaba", "Rich Textures"],
    images: Array.from({ length: 6 }, (_, i) => `/Moroccan/png (${i + 1}).jpg`),
  },
  {
    id: "kids",
    name: "Kids Collection",
    description:
      "Miniature versions of our finest kanduras, crafted with the same attention to detail. Perfect for young gentlemen on special occasions and everyday wear.",
    features: ["Comfortable Fit", "Durable Fabric", "Traditional Design", "Easy Care"],
    images: Array.from({ length: 11 }, (_, i) => `/Kids/png (${i + 1}).jpg`),
  },
  {
    id: "accessories",
    name: "Accessories",
    description:
      "Complete your look with our premium accessories — shemaghs, ghutras, ghafia caps, egals, shawls, and more. Every piece crafted to complement your kandura perfectly.",
    features: ["Premium Shemaghs", "Traditional Ghutras", "Ghafia & Kufi Caps", "Leather Accessories"],
    images: Array.from({ length: 12 }, (_, i) => `/Accessories/png (${i + 1}).jpg`),
  },
];

export default function Collections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCollection, setActiveCollection] = useState("emirati");
  const [featuredIdx, setFeaturedIdx] = useState(0);

  const { lang, n } = useLang();
  const tr = t(lang).collections;

  const getCollectionText = (id: string) => {
    const collectionTexts = {
      emirati: { name: tr.emirati, description: tr.emiratiDesc, features: tr.emiratiFeatures },
      omani: { name: tr.omani, description: tr.omaniDesc, features: tr.omaniFeatures },
      saudi: { name: tr.saudi, description: tr.saudiDesc, features: tr.saudiFeatures },
      moroccan: { name: tr.moroccan, description: tr.moroccanDesc, features: tr.moroccanFeatures },
      kids: { name: tr.kids, description: tr.kidsDesc, features: tr.kidsFeatures },
      accessories: { name: tr.accessories, description: tr.accessoriesDesc, features: tr.accessoriesFeatures },
    };
    const key = id as keyof typeof collectionTexts;
    return collectionTexts[key];
  };

  const active = collections.find((c) => c.id === activeCollection) || collections[0];

  const handleCollectionChange = (id: string) => {
    setActiveCollection(id);
    setFeaturedIdx(0);
  };

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
          <span className="text-gold text-sm tracking-[0.3em] uppercase">{tr.label}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            {tr.title}
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <p className="text-cream/60 max-w-2xl mx-auto text-lg">
            {tr.description}
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
              onClick={() => handleCollectionChange(col.id)}
              className={`px-3 sm:px-5 md:px-6 py-2 sm:py-3 text-xs sm:text-sm tracking-wider uppercase font-medium transition-all duration-300 ${
                activeCollection === col.id
                  ? "bg-gold text-navy-dark"
                  : "border border-gold/30 text-gold/70 hover:border-gold hover:text-gold"
              }`}
            >
              {getCollectionText(col.id).name}
            </button>
          ))}
        </motion.div>

        {/* Active Collection Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start"
          >
            {/* Image Gallery */}
            <div className="relative">
              {/* Featured Image */}
              <div className="relative aspect-[3/4] overflow-hidden border border-gold/20 mb-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${active.id}-${featuredIdx}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={active.images[featuredIdx]}
                      alt={`${getCollectionText(active.id).name} - Style ${featuredIdx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/40" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/40" />
                {/* Image counter */}
                <div className="absolute bottom-4 left-4 bg-navy/70 backdrop-blur-sm px-3 py-1 text-xs text-gold tracking-wider">
                  {n(String(featuredIdx + 1).padStart(2, "0"))} / {n(String(active.images.length).padStart(2, "0"))}
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {active.images.map((img, i) => (
                  <motion.div
                    key={img}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setFeaturedIdx(i)}
                    className={`relative aspect-square cursor-pointer overflow-hidden transition-all duration-300 ${
                      featuredIdx === i
                        ? "border-2 border-gold ring-1 ring-gold/30"
                        : "border border-gold/10 hover:border-gold/40 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${getCollectionText(active.id).name} thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Collection Details */}
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-gold text-xs tracking-[0.3em] uppercase">
                  {n(active.images.length)} {tr.stylesAvailable}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-cream mt-2 mb-6">{getCollectionText(active.id).name}</h3>
                <p className="text-cream/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                  {getCollectionText(active.id).description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-10">
                  {getCollectionText(active.id).features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-gold rotate-45 flex-shrink-0" />
                      <span className="text-cream/80 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center gap-3 mb-8">
                  <button
                    onClick={() => setFeaturedIdx((prev) => (prev === 0 ? active.images.length - 1 : prev - 1))}
                    className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setFeaturedIdx((prev) => (prev === active.images.length - 1 ? 0 : prev + 1))}
                    className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="text-cream/40 text-xs tracking-wider uppercase ml-2">{tr.browseStyles}</span>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gold text-navy-dark px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 group w-full sm:w-auto"
                >
                  {tr.inquireNow}
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Collections Grid Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4"
        >
          {collections.map((col) => (
            <motion.div
              key={col.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleCollectionChange(col.id)}
              className={`cursor-pointer border transition-all duration-300 overflow-hidden ${
                activeCollection === col.id
                  ? "border-gold bg-gold/10"
                  : "border-gold/10 hover:border-gold/40 bg-navy-light/50"
              }`}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={col.images[0]}
                  alt={getCollectionText(col.id).name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              </div>
              <div className="p-3 text-center">
                <h4 className="text-cream font-semibold text-xs sm:text-sm mb-0.5">{getCollectionText(col.id).name}</h4>
                <p className="text-cream/40 text-[10px] sm:text-xs">{n(col.images.length)} {tr.styles}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
