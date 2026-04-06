"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export default function Stores() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang, n } = useLang();
  const tr = t(lang).stores;

  const stores = [
    {
      name: tr.shop1Name,
      location: tr.shop1Location,
      contact: tr.contactPerson1,
      phone: "+971 54 735 4830",
      phoneLink: "tel:+971547354830",
      whatsapp: "https://wa.me/971547354830",
    },
    {
      name: tr.shop2Name,
      location: tr.shop2Location,
      contact: tr.contactPerson2,
      phone: "+971 56 920 2644",
      phoneLink: "tel:+971569202644",
      whatsapp: "https://wa.me/971569202644",
    },
  ];

  return (
    <section id="stores" className="section-padding bg-navy relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, var(--gold) 0%, transparent 60%)",
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

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto mb-10 sm:mb-16">
          {stores.map((store, i) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -6 }}
              className="relative border border-gold/20 p-5 sm:p-6 md:p-8 bg-navy-light/50 backdrop-blur-sm hover:border-gold/50 transition-all duration-500 group"
            >
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/40 group-hover:border-gold transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/40 group-hover:border-gold transition-colors duration-300" />

              {/* Store Name Badge */}
              <div className="inline-block bg-gold/10 px-4 py-1.5 mb-6">
                <span className="text-gold font-bold tracking-wider text-sm">{store.name}</span>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-cream font-medium">{store.location}</p>
                  <p className="text-cream/50 text-sm">{tr.oppositeNaif}</p>
                </div>
              </div>

              {/* Contact Person */}
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-cream/80">{store.contact}</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={store.phoneLink} className="text-cream/80 hover:text-gold transition-colors">
                  {n(store.phone)}
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={store.phoneLink}
                  className="flex-1 flex items-center justify-center gap-2 bg-gold/10 border border-gold/30 text-gold py-3 text-sm font-medium hover:bg-gold hover:text-navy-dark transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {tr.call}
                </a>
                <a
                  href={store.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600/10 border border-green-600/30 text-green-400 py-3 text-sm font-medium hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {tr.whatsapp}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Address Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center border-t border-gold/10 pt-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gold font-medium tracking-wider text-sm uppercase">{tr.ourAddress}</span>
          </div>
          <p className="text-cream/70 text-sm sm:text-base md:text-lg px-2">
            {tr.fullAddress}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
