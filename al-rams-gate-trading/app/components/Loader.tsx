"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const { lang } = useLang();
  const tr = t(lang).nav;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy"
        >
          {/* Radial glow background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, var(--gold) 0%, transparent 50%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-8 md:gap-12">
            {/* Animated rings */}
            <div className="relative w-28 h-28 md:w-44 md:h-44 lg:w-56 lg:h-56 flex items-center justify-center">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 md:border-[3px] border-gold/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full" />
              </motion.div>

              {/* Middle ring */}
              <motion.div
                className="absolute inset-3 md:inset-5 lg:inset-6 rounded-full border md:border-2 border-gold/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-gold-light rounded-full" />
              </motion.div>

              {/* Inner pulsing circle */}
              <motion.div
                className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gold/10 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rotate-45 bg-gold"
                  animate={{ rotate: [45, 225, 405] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

            {/* Brand text */}
            <div className="text-center">
              <motion.h2
                className="text-gold text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.25em] uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {tr.brand}
              </motion.h2>
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-3 mb-3"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <motion.p
                className="text-cream/40 text-xs md:text-sm lg:text-base tracking-[0.3em] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {tr.trading}
              </motion.p>
            </div>

            {/* Loading bar */}
            <div className="w-48 md:w-64 lg:w-80 h-px md:h-0.5 bg-gold/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
