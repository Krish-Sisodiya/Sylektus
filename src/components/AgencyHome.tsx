import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Zap, ShoppingCart, Film, Bot } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import Header from './common/Header';
import ChatModal from './ChatModal';
import CareerForm from './CareerForm';
import TestimonialSection from './TestimonialSection';
import TeamSection from './TeamSection';
import TechStackSection from './TechStackSection';

// ==========================
// FRAMER MOTION VARIANTS
// ==========================

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
    transition: { duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] }, // fixed cubic-bezier
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
  initial: { scale: 0.95, opacity: 0.8, boxShadow: "0 0 10px rgba(59, 130, 246, 0.1)" },
  animate: {
    scale: [0.95, 1.0, 0.95],
    opacity: 1,
    boxShadow: [
      "0 0 10px rgba(59, 130, 246, 0.1)",
      "0 0 25px rgba(59, 130, 246, 0.4)",
      "0 0 10px rgba(59, 130, 246, 0.1)",
    ],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

// ==========================
// COMPONENT
// ==========================
const AgencyHome: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const handleChatToggle = () => setIsChatOpen(!isChatOpen);

  const services = [
    { name: "Web Development & Hosting", icon: Layout, description: "Custom website design, development, and secure hosting solutions." },
    { name: "Graphic Design & Branding", icon: Palette, description: "Logos, visual identity, and creative graphics that define your brand." },
    { name: "Video Production & Shooting", icon: Film, description: "High-quality video editing, shooting, and cinematic content creation." },
    { name: "Digital Advertising & Promo", icon: Zap, description: "Targeted ads, social media campaigns, and comprehensive digital promotion." },
    { name: "E-Commerce Management", icon: ShoppingCart, description: "Product listing, store optimization, and full e-commerce operation management." },
    { name: "Full-Stack Solutions (Etc.)", icon: Bot, description: "AI integration, software tools, and custom solutions for every need." },
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans overflow-x-hidden">
      {/* Header */}
      <Header onChatIconClick={handleChatToggle} />

      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {/* HERO */}
        <section id="hero" className="py-20 md:py-32 text-center">
          <motion.h1 variants={wordContainer} initial="hidden" animate="visible"
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-accent-purple"
          >
            {titleWords.map((word, idx) => (
              <motion.span key={idx} variants={wordItem} style={{ display: "inline-block", marginRight: "10px" }}>
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5, type: "spring" }}
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            The all-in-one agency for Web Development, Video Production, E-commerce, and Digital Advertising. We handle the entire spectrum.
          </motion.p>

          {/* Fixed CTA using motion.button instead of Link */}
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
              className="inline-block px-10 py-4 text-lg font-semibold rounded-full bg-accent-purple text-white shadow-xl hover:bg-purple-700 transition-colors duration-300"
            >
              Start Your Project Today
            </RouterLink>
          </motion.div>
        </section>

        {/* TECH STACK */}
        <TechStackSection />

        {/* SERVICES */}
        <section id="services" className="py-16">
          <motion.h2 initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-primary-blue"
          >
            Our Full Spectrum of Services
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            {services.map((service, idx) => (
              <motion.div key={idx} variants={item}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.5)", rotateY: 3, rotateX: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 bg-dark-card rounded-xl border border-gray-700 hover:border-accent-purple/50 cursor-pointer transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <motion.div className="p-3 rounded-full bg-accent-purple/20 text-accent-purple mr-4"
                    animate={{ rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  >
                    <service.icon size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-semibold">{service.name}</h3>
                </div>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* TESTIMONIALS & TEAM */}
        <TestimonialSection />
        <TeamSection />

        {/* CAREERS */}
        <section id="careers" className="py-16 md:py-20 text-center">
          <motion.h2 initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-accent-purple"
          >
            Grow Your Career With Us
          </motion.h2>
          <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
          >
            Are you a master of your craft? Apply today to join our dynamic team of digital innovators.
          </motion.p>
          <CareerForm />
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="py-20 md:py-24">
          <motion.div className="bg-primary-blue/10 border border-primary-blue/50 rounded-2xl p-10 md:p-16 text-center"
            initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={ctaGlow}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary-blue">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              From conception to launch, we are your dedicated digital partner. Let's discuss your vision.
            </p>
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
              <RouterLink to="/contact" className="inline-block px-8 py-3 bg-primary-blue text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300">
                Get a Free Consultation
              </RouterLink>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className="p-6 text-center border-t border-gray-800 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Sylektus Agency. All Rights Reserved.</p>
      </footer>

      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default AgencyHome;
