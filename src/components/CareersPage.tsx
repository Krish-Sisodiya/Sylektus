import React from 'react';
import { motion } from 'framer-motion';
import Header from './common/Header';
import CareerForm from './CareerForm';

const CareersPage: React.FC = () => {
    return (
        // ✅ AGENCY DARK THEME
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
            
            <Header onChatIconClick={() => console.log('Chat toggle TBD')} /> 

            <main className="max-w-5xl mx-auto p-4 md:p-8 py-20 text-center">

                {/* ✅ PAGE TITLE */}
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-extrabold mb-4 
                    bg-gradient-to-r from-[#00b4ff] to-[#a259ff] text-transparent bg-clip-text"
                >
                    Join Our Innovative Team
                </motion.h1>

                {/* ✅ Sub Text */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-xl text-gray-300 mb-12"
                >
                    We’re looking for passionate creators, developers and innovators.
                </motion.p>

                {/* ----------------------------------------------------------- */}

                {/* ✅ Job Openings */}
                <h2 className="text-3xl font-bold 
                    bg-gradient-to-r from-[#00b4ff] to-[#a259ff] text-transparent bg-clip-text mb-8">
                    Current Openings
                </h2>

                <motion.div 
                    className="space-y-6 mb-12 text-left"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                >

                    {/* ✅ Job 1 */}
                    <motion.div 
                        className="p-5 rounded-xl border-l-4 border-[#00b4ff]
                        bg-[#111] hover:bg-[#161616] transition-all duration-300 shadow-lg
                        hover:shadow-[#00b4ff]/30 cursor-pointer"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 150 }}
                    >
                        <h3 className="text-xl font-semibold text-[#00b4ff]">Senior React Developer</h3>
                        <p className="text-gray-400">Full-time | Remote / Indore</p>
                    </motion.div>

                    {/* ✅ Job 2 */}
                    <motion.div 
                        className="p-5 rounded-xl border-l-4 border-[#a259ff]
                        bg-[#111] hover:bg-[#161616] transition-all duration-300 shadow-lg
                        hover:shadow-[#a259ff]/30 cursor-pointer"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 150, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-semibold text-[#a259ff]">Video Production Specialist</h3>
                        <p className="text-gray-400">Full-time | On-site</p>
                    </motion.div>

                    {/* ✅ Job 3 */}
                    <motion.div 
                        className="p-5 rounded-xl border-l-4 border-[#00b4ff]
                        bg-[#111] hover:bg-[#161616] transition-all duration-300 shadow-lg
                        hover:shadow-[#00b4ff]/30 cursor-pointer"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 150, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold text-[#00b4ff]">Creative Graphic Designer</h3>
                        <p className="text-gray-400">Part-time | Flexible</p>
                    </motion.div>

                </motion.div>

                {/* ----------------------------------------------------------- */}

                <h2 className="text-3xl font-bold 
                    bg-gradient-to-r from-[#00b4ff] to-[#a259ff] text-transparent bg-clip-text mb-6">
                    Can't find your role? Apply here.
                </h2>

                {/* ✅ Dark Theme Form (auto updated from your component) */}
                <CareerForm />
            
            </main>
        </div>
    );
};

export default CareersPage;
