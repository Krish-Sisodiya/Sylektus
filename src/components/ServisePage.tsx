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
    // Handler function (For Chatbot icon in Header)
    const handleChat = () => alert("AI Chatbot will open here!"); 

    const services = [
        // 1. Web & Tech Services
        { group: "Web & Tech Solutions", items: [
            { name: "Custom Website Development", icon: Code, description: "Fully responsive and scalable websites using React, Node.js, and Spring Boot." },
            { name: "E-Commerce Store Setup & Mgmt", icon: ShoppingCart, description: "Creating, listing products, and managing high-conversion online stores (Shopify, WooCommerce, etc.)." },
            { name: "Website Hosting & Maintenance", icon: Globe, description: "Reliable hosting, domain management, security, and 24/7 technical support." },
            { name: "AI Integration & Automation", icon: Bot, description: "Integrating custom AI chatbots and automated workflows into your business." },
        ]},
        // 2. Creative & Design Services
        { group: "Creative & Design Services", items: [
            { name: "Brand Identity & Logo Design", icon: Palette, description: "Developing a cohesive brand strategy, logo, and visual identity guidelines." },
            { name: "Graphic Design (Digital & Print)", icon: Layout, description: "Creating engaging graphics for social media, print ads, banners, and marketing material." },
            { name: "UI/UX Design for Apps & Web", icon: Users, description: "Designing intuitive and user-friendly interfaces for maximum engagement." },
        ]},
        // 3. Video & Media Production
        { group: "Video & Media Production", items: [
            { name: "Video Shooting & Cinematography", icon: Camera, description: "Professional on-location shooting for corporate, commercial, and promotional videos." },
            { name: "Video Editing & Post-Production", icon: Film, description: "Advanced editing, motion graphics, color grading, and sound design." },
            { name: "3D Modeling & Animation", icon: Edit, description: "Creating stunning 3D visual assets and animated explainers." },
        ]},
        // 4. Marketing, Advertising & Promotion
        { group: "Marketing & Advertising", items: [
            { name: "Digital Advertising (PPC/SEM)", icon: Zap, description: "Running targeted campaigns on Google Ads, Facebook, and other platforms for high ROI." },
            { name: "SEO (Search Engine Optimization)", icon: BarChart3, description: "Improving search rankings, driving organic traffic, and analyzing performance." },
            { name: "Email Marketing & Automation", icon: Mail, description: "Designing and executing automated email campaigns to nurture leads." },
            { name: "Product Listing & Promotion", icon: Shield, description: "Optimizing product descriptions and executing launch strategies on e-commerce platforms." },
        ]},
    ];

    return (
        <div className="min-h-screen bg-dark-bg text-white font-sans">
            <Header onChatIconClick={handleChat} />
            
            <main className="max-w-7xl mx-auto p-4 md:p-8 pt-16">
                
                {/* Hero Title and Description */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-accent-purple">
                        Our Full Spectrum of Professional Services
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        From digital conception to market dominance, Sylektus Agency provides end-to-end solutions for all your digital needs.
                    </p>
                </motion.div>
                
                {/* Services Grid Section */}
                {services.map((group, groupIndex) => (
                    <div key={groupIndex} className="mb-16">
                        {/* Group Header Animation */}
                        <motion.h2 
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl font-bold mb-8 mt-4 text-primary-blue border-b border-gray-700 pb-2"
                        >
                            {group.group}
                        </motion.h2>

                        {/* Animated Grid Container */}
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
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(168, 85, 247, 0.4)" }}
                                    className="p-6 bg-dark-card rounded-xl border border-gray-700 hover:border-accent-purple/50 transition-all duration-300 flex flex-col"
                                >
                                    <div className="flex items-start mb-4">
                                        <div className="p-3 rounded-full bg-accent-purple/20 text-accent-purple mr-4 flex-shrink-0">
                                            <service.icon size={28} />
                                        </div>
                                        <h3 className="text-xl font-semibold leading-tight">{service.name}</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm flex-grow">{service.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
                
                {/* Final Call to Action - Reuse CTA from AgencyHome for consistency */}
                <motion.div
                    className="bg-primary-blue/10 border border-primary-blue/50 rounded-2xl p-10 md:p-16 text-center shadow-2xl mt-16"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary-blue">
                        Ready to Discuss Your Custom Solution?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Connect with our experts to find the perfect mix of services for your project.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ y: -5 }} 
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-8 py-3 bg-primary-blue text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                        Contact Our Team
                    </motion.a>
                </motion.div>

            </main>
        </div>
    );
};

export default ServicesPage;