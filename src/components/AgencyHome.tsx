import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Layout, Palette, Zap, ShoppingCart, Film, Bot } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import Header from './common/Header';
import ChatModal from './ChatModal';
import CareerForm from './CareerForm';
import TestimonialSection from './TestimonialSection';
import TeamSection from './TeamSection';
import TechStackSection from './TechStackSection';

// Animation configs
const titleText = "Transforming Ideas into Digital Dominance.";
const titleWords = titleText.split(" ");

const wordContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.3 } },
};
const wordItem = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] },
  },
};
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
};
const ctaGlow = {
  initial: { scale: 0.95, opacity: 0.8, boxShadow: "0 0 10px rgba(246, 196, 83, 0.1)" },
  animate: {
    scale: [0.95, 1.0, 0.95],
    opacity: 1,
    boxShadow: [
      "0 0 10px rgba(246, 196, 83, 0.1)",
      "0 0 25px rgba(246, 196, 83, 0.4)",
      "0 0 10px rgba(246, 196, 83, 0.1)",
    ],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

// Services
const services = [
  { name: "Web Development & Hosting", icon: Layout, description: "Custom website design, development, and secure hosting solutions." },
  { name: "Graphic Design & Branding", icon: Palette, description: "Logos, visual identity, and creative graphics that define your brand." },
  { name: "Video Production & Shooting", icon: Film, description: "High-quality video editing, shooting, and cinematic content creation." },
  { name: "Digital Advertising & Promo", icon: Zap, description: "Targeted ads, social media campaigns, and comprehensive digital promotion." },
  { name: "E-Commerce Management", icon: ShoppingCart, description: "Product listing, store optimization, and full e-commerce operation management." },
  { name: "Full-Stack Solutions (Etc.)", icon: Bot, description: "AI integration, software tools, and custom solutions for every need." },
];

// Main component with animated background and glow overlay
const AgencyHome = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const bgControls = useAnimation();

  useEffect(() => {
    bgControls.start({
      backgroundPosition: ["0px 0px", "40px 40px", "0px 0px"],
      transition: { repeat: Infinity, duration: 26, ease: "linear" },
    });
  }, [bgControls]);

  return (
    <>
      {/* Neon Glow Top Overlay */}
      <motion.div
        initial={{ opacity: 0.6, filter: "blur(32px)" }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          height: "100px",
          zIndex: 1,
          pointerEvents: 'none',
          background: "linear-gradient(90deg, #457bfa 0%, #ab43e9 52%, #ffd648 100%)",
          mixBlendMode: "lighter"
        }}
      />
      {/* Animated Hexagon Pattern Background */}
      <motion.div
        animate={bgControls}
        style={{
          minHeight: "100vh",
          backgroundColor: "#0a0f1f",
          backgroundImage: `url('data:image/svg+xml;utf8,<svg width="84" height="97" viewBox="0 0 84 97" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="42,4 82,27 82,70 42,93 2,70 2,27" stroke="%23B86AED" stroke-opacity="0.13" stroke-width="2" fill="none"/></svg>')`,
          backgroundSize: "90px 105px",
          backgroundPosition: "0px 0px",
        }}
      >
        <div className="min-h-screen text-[#e6f1ff] font-sans overflow-x-hidden" style={{ position: "relative", zIndex: 2 }}>
          <Header onChatIconClick={() => setIsChatOpen(true)} />

          <main className="max-w-7xl mx-auto p-4 md:p-8">
            {/* HERO */}
            <section id="hero" className="py-20 md:py-32 text-center">
              <motion.h1
                variants={wordContainer}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0057ff] to-[#f6c453]"
                style={{
                  filter: "drop-shadow(0 10px 40px #0057ff90)"
                }}
              >
                {titleWords.map((word, idx) => (
                  <motion.span
                    key={idx}
                    variants={wordItem}
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                className="text-xl md:text-2xl text-[#8892b0] mb-8 max-w-3xl mx-auto"
              >
                The all-in-one agency for Web Development, Video Production, E-commerce, and Digital Advertising.
              </motion.p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 2.0 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.9 }}
                className="inline-block"
              >
                <RouterLink
                  to="/contact"
                  className="inline-block px-10 py-4 text-lg font-semibold rounded-full bg-[#f6c453] text-[#0a0f1f] shadow-xl hover:bg-[#ffde7a] transition-colors duration-300"
                >
                  Start Your Project Today
                </RouterLink>
              </motion.div>
            </section>

            {/* TECH STACK */}
            <TechStackSection />

            {/* SERVICES */}
            <section id="services" className="py-16">
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-12 text-[#0057ff]"
                style={{
                  filter: "drop-shadow(0 10px 40px #0057ff60)"
                }}
              >
                Our Full Spectrum of Services
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    variants={item}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(246, 196, 83, 0.3)",
                      rotateY: 3,
                      rotateX: 2,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-6 bg-[#111a2b] rounded-xl border border-[#0057ff]/20 hover:border-[#f6c453] cursor-pointer transition-all duration-300 shadow-lg"
                    style={{ boxShadow: "0 4px 48px 0 rgba(91,59,245,0.07)" }}
                  >
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="p-3 rounded-full bg-[#f6c453]/20 text-[#f6c453] mr-4"
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 8 }}
                        style={{ filter: "drop-shadow(0 2px 24px #f6c45380)" }}
                      >
                        <service.icon size={28} />
                      </motion.div>
                      <h3 className="text-2xl font-semibold">{service.name}</h3>
                    </div>
                    <p className="text-[#8892b0]">{service.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            <TestimonialSection />
            <TeamSection />

            {/* CAREERS */}
            <section id="careers" className="py-16 md:py-20 text-center">
              <motion.h2
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="text-4xl font-bold mb-4 text-[#f6c453]"
                style={{
                  filter: "drop-shadow(0 20px 70px #f6c45380)"
                }}
              >
                Grow Your Career With Us
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="text-xl text-[#8892b0] mb-10 max-w-3xl mx-auto"
              >
                Are you a master of your craft? Apply today to join our dynamic team.
              </motion.p>
              <CareerForm />
            </section>

            {/* FINAL CTA */}
            <section id="contact" className="py-20 md:py-24">
              <motion.div
                className="bg-[#0057ff]/90 border border-[#0057ff] rounded-2xl p-10 md:p-16 text-center shadow-xl"
                initial="initial"
                whileInView="animate"
                variants={ctaGlow}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#e6f1ff]">
                  Ready to Scale Your Business?
                </h2>
                <p className="text-xl text-[#e6f1ff]/70 mb-8">
                  From conception to launch, we are your dedicated digital partner.
                </p>
                <motion.div whileHover={{ y: -5 }}>
                  <RouterLink
                    to="/contact"
                    className="inline-block px-8 py-3 bg-[#f6c453] text-[#0a0f1f] font-bold rounded-lg shadow-lg hover:bg-[#ffde7a] transition-colors duration-300"
                  >
                    Get a Free Consultation
                  </RouterLink>
                </motion.div>
              </motion.div>
            </section>
          </main>

          <footer className="p-6 text-center border-t border-[#0057ff]/20 text-[#8892b0] bg-[#0a0f1f]">
            <p>&copy; {new Date().getFullYear()} Sylektus Agency. All Rights Reserved.</p>
          </footer>
        </div>
        <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </motion.div>
    </>
  );
};

export default AgencyHome;
