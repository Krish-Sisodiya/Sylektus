import React from 'react';
import { motion } from 'framer-motion';
import Header from './common/Header';

const AboutPage: React.FC = () => {
    return (
        // UPDATED: Main background with gradient and neon-style theme
        <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0a0a] to-[#000000] text-[#f8f9fa] font-sans">
            {/* Header (matches agency theme) */}
            <Header onChatIconClick={() => console.log('Chat toggle TBD')} /> 
            
            <main className="max-w-4xl mx-auto p-4 md:p-8 py-20">
                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    // Neon Yellow title for main heading
                    className="text-5xl font-extrabold text-[#f8d613] mb-8 text-center drop-shadow-[0_0_12px_#f8d613]"
                >
                    Our Story & Vision
                </motion.h1>
                
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    // Soft white text
                    className="text-lg text-gray-300 leading-relaxed mb-6"
                >
                    Sylektus Agency was founded on the principle that digital excellence should be accessible to all businesses, regardless of size. Our journey started in 2015, focusing on blending cutting-edge technology with creative storytelling.
                </motion.p>
                
                <motion.h2 
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    // Neon Blue section title
                    className="text-3xl font-bold text-[#0ef] mt-10 mb-4 border-b-2 border-[#0ef]/30 pb-2 drop-shadow-[0_0_10px_#0ef]"
                >
                    Our Mission
                </motion.h2>
                
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    // Soft white paragraph text
                    className="text-lg text-gray-300 leading-relaxed"
                >
                    To transform concepts into dominating digital realities, providing full-spectrum solutions from web development to global advertising campaigns. We aim to be your single, trusted partner for digital growth, powered only by innovation and dedication.
                </motion.p>

                {/* Values Section */}
                <motion.h2 
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    // Yellow heading for Core Values
                    className="text-3xl font-bold text-[#f8d613] mt-10 mb-4 border-b-2 border-[#f8d613]/30 pb-2 drop-shadow-[0_0_10px_#f8d613]"
                >
                    Core Values
                </motion.h2>

                <ul className="space-y-4 pt-2">
                    {['Innovation', 'Transparency', 'Dedication'].map((value, index) => (
                        <motion.li
                            key={value}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2 + index * 0.1 }}
                            className="flex items-start text-lg text-gray-200"
                        >
                            <span className="text-[#0ef] mr-3 font-extrabold text-xl drop-shadow-[0_0_8px_#0ef]">✓</span>
                            <span className="text-gray-300">
                                <strong className="font-semibold text-[#0ef]">{value}:</strong> We integrate the latest technology with complete honesty and unwavering commitment to your success.
                            </span>
                        </motion.li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default AboutPage;
