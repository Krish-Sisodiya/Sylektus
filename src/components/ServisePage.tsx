import React from 'react';
import { motion } from 'framer-motion';
import Header from './common/Header';
import { Layout, Palette, Zap, ShoppingCart, Film, Bot, Globe, Code, Shield, Mail, BarChart3, Users, Camera, Edit } from 'lucide-react';

// Framer Motion Variants for Staggered Grid Entry
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const ServicesPage: React.FC = () => {
  const handleChat = () => alert("AI Chatbot will open here!");

  const services = [
    { group: "Web & Tech Solutions", items: [
      { name: "Custom Website Development", icon: Code, description: "Fully responsive and scalable websites using React, Node.js, and Spring Boot." },
      { name: "E-Commerce Store Setup & Mgmt", icon: ShoppingCart, description: "Creating, listing products, and managing high-conversion online stores." },
      { name: "Website Hosting & Maintenance", icon: Globe, description: "Reliable hosting, domain management, security, and 24/7 technical support." },
      { name: "AI Integration & Automation", icon: Bot, description: "Integrating custom AI chatbots and automated workflows into your business." },
    ]},
    { group: "Creative & Design Services", items: [
      { name: "Brand Identity & Logo Design", icon: Palette, description: "Complete brand strategy, logo, and visual identity design." },
      { name: "Graphic Design (Digital & Print)", icon: Layout, description: "Social media, print ads, banners, posters — all designed professionally." },
      { name: "UI/UX Design for Apps & Web", icon: Users, description: "Clean, beautiful and intuitive interface design." },
    ]},
    { group: "Video & Media Production", items: [
      { name: "Video Shooting & Cinematography", icon: Camera, description: "Professional shooting for ads, corporate, and promos." },
      { name: "Video Editing & Post-Production", icon: Film, description: "Editing, effects, motion graphics, sound design." },
      { name: "3D Modeling & Animation", icon: Edit, description: "3D visuals, motion animation, product animation." },
    ]},
    { group: "Marketing & Advertising", items: [
      { name: "Digital Advertising (PPC/SEM)", icon: Zap, description: "Google Ads, Facebook Ads, YouTube Ads with max ROI." },
      { name: "SEO (Search Engine Optimization)", icon: BarChart3, description: "Ranking improvement, content optimization, analytics." },
      { name: "Email Marketing & Automation", icon: Mail, description: "Smart automated emails and funnel-based campaigns." },
      { name: "Product Listing & Promotion", icon: Shield, description: "Amazon, Flipkart, Meesho listing & boosting." },
    ]},
  ];

  return (
    <div className="min-h-screen bg-[#05060B] text-white font-sans">
      <Header onChatIconClick={handleChat} />

      <main className="max-w-7xl mx-auto p-4 md:p-8 pt-16">

        {/* HERO Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#4F83FF] via-[#9B5CFF] to-[#FF58C8]">
            Our Full Spectrum of Professional Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From digital conception to market dominance, Sylektus Agency delivers end-to-end digital excellence.
          </p>
        </motion.div>

        {/* SERVICES GROUPS */}
        {services.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-16">

            {/* Group Title */}
            <motion.h2 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold mb-8 mt-4
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#4F83FF] to-[#9B5CFF]
                         border-b border-[#4F83FF]/40 pb-2"
            >
              {group.group}
            </motion.h2>

            {/* Services Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {group.items.map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(79, 131, 255, 0.5)" }}
                  className="p-6 rounded-xl 
                             bg-[#0A0B10] 
                             border border-[#1E2030] 
                             hover:border-[#4F83FF]/60 
                             hover:bg-[#0F111A]
                             transition-all duration-300 flex flex-col"
                >
                  {/* Icon and Title */}
                  <div className="flex items-start mb-4">
                    <div className="p-3 rounded-full 
                                    bg-gradient-to-br from-[#4F83FF]/30 to-[#9B5CFF]/30 
                                    text-[#9B5CFF] mr-4 flex-shrink-0">
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm flex-grow">
                    {service.description}
                  </p>

                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        {/* CTA */}
        <motion.div
          className="rounded-2xl p-10 md:p-16 text-center mt-20
                     bg-gradient-to-r from-[#4F83FF]/10 to-[#9B5CFF]/10
                     border border-[#4F83FF]/40 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#4F83FF] to-[#9B5CFF]">
            Ready to Transform Your Business?
          </h2>

          <p className="text-xl text-gray-300 mb-8 mt-3">
            Let's create something extraordinary together.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 
                       bg-gradient-to-r from-[#4F83FF] to-[#9B5CFF]
                       text-white font-bold rounded-xl 
                       shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Contact Our Team
          </motion.a>
        </motion.div>

      </main>
    </div>
  );
};

export default ServicesPage;
