"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Collections", href: "#collections" },
  { name: "Craftsmanship", href: "#craftsmanship" },
  { name: "Stores", href: "#stores" },
  { name: "Contact", href: "#contact" },
];

const collections = [
  "Emirati Kandura",
  "Omani Kandura",
  "Saudi Kandura",
  "Kids Collection",
  "Custom Orders",
  "Bulk / Wholesale",
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-cream relative overflow-hidden">
      {/* Top Gold Line */}
      <div className="h-[2px] gold-shimmer" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-gradient-gold mb-2">AL RAMS GATE</h3>
            <p className="text-xs tracking-[0.3em] text-gold/60 uppercase mb-4">Trading</p>
            <p className="text-cream/50 text-sm leading-relaxed mb-6">
              Premium kandura manufacturing &amp; sales. Crafting elegance and tradition
              for the modern gentleman.
            </p>
            <p className="text-gold/80 italic text-sm">&ldquo;Best Wearings For Men&rdquo;</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold tracking-wider uppercase text-sm mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-gold text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-gold group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-gold font-semibold tracking-wider uppercase text-sm mb-6">
              Collections
            </h4>
            <ul className="space-y-3">
              {collections.map((item) => (
                <li key={item}>
                  <span className="text-cream/50 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold/30 rotate-45 flex-shrink-0" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-semibold tracking-wider uppercase text-sm mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-cream/50">
                  P.O. Box: 64765, Opposite Naif Souq,
                  Gate No 3 &amp; 4, Deira, Dubai - UAE
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:+971547354830" className="text-cream/50 hover:text-gold transition-colors block">
                    +971 54 735 4830
                  </a>
                  <a href="tel:+971569202644" className="text-cream/50 hover:text-gold transition-colors block">
                    +971 56 920 2644
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-cream/30 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Al Rams Gate Trading (Mohd. Chowdhry Trading). All rights reserved. | Powered by{" "}
            <a href="https://zetacoding.com/" target="_blank" rel="noopener noreferrer" className="text-gold/50 hover:text-gold transition-colors duration-300">ZetaCoding</a>
          </p>
          <p className="text-cream/20 text-xs">
            Naif Souq, Deira, Dubai - UAE
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/971547354830"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </footer>
  );
}
