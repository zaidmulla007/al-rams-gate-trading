"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-cream relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-dark text-sm tracking-[0.3em] uppercase">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
            Contact Us
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Have questions about our kanduras? Want to place a bulk order or learn about
            our manufacturing capabilities? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2 tracking-wider uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 text-navy placeholder:text-gray-400 focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2 tracking-wider uppercase">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+971 XX XXX XXXX"
                    className="w-full px-4 py-3 bg-white border border-gray-200 text-navy placeholder:text-gray-400 focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2 tracking-wider uppercase">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-navy placeholder:text-gray-400 focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2 tracking-wider uppercase">
                  Subject
                </label>
                <select className="w-full px-4 py-3 bg-white border border-gray-200 text-navy focus:outline-none focus:border-gold transition-colors duration-300">
                  <option value="">Select a subject</option>
                  <option value="retail">Retail Inquiry</option>
                  <option value="bulk">Bulk / Wholesale Order</option>
                  <option value="custom">Custom Manufacturing</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2 tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-navy placeholder:text-gray-400 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-navy text-cream py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-navy-light transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 lg:mt-8"
          >
            {/* Info Cards */}
            <div className="bg-navy p-5 sm:p-6 md:p-8 text-cream">
              <h3 className="text-xl font-bold text-gold mb-6">Quick Contact</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold-light text-sm mb-1">Address</h4>
                    <p className="text-cream/70 text-sm leading-relaxed">
                      P.O. Box: 64765, Opposite Naif Souq,<br />
                      Gate No 3 &amp; 4, Deira, Dubai - UAE
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-gold/10" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold-light text-sm mb-1">Phone</h4>
                    <p className="text-cream/70 text-sm">
                      <a href="tel:+971547354830" className="hover:text-gold transition-colors">
                        +971 54 735 4830
                      </a>{" "}
                      (Md Selim)
                    </p>
                    <p className="text-cream/70 text-sm">
                      <a href="tel:+971569202644" className="hover:text-gold transition-colors">
                        +971 56 920 2644
                      </a>{" "}
                      (Md Sumon)
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-gold/10" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold-light text-sm mb-1">Working Hours</h4>
                    <p className="text-cream/70 text-sm">Saturday - Thursday: 9:00 AM - 10:00 PM</p>
                    <p className="text-cream/70 text-sm">Friday: 2:00 PM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/971547354830"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 bg-green-600 text-white p-4 sm:p-5 hover:bg-green-700 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 flex items-center justify-center flex-shrink-0 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-base sm:text-lg">Chat on WhatsApp</p>
                <p className="text-white/80 text-sm">Quick responses, easy ordering</p>
              </div>
              <svg
                className="w-5 h-5 ml-auto transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
