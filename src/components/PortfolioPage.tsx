/* ✅ NEW MODERN COLOR PALETTE APPLIED ✅ */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import { Code, Users, TrendingUp, DollarSign, Video, Zap, Tag, Layers, Search, Briefcase } from 'lucide-react';

const MotionLink = motion(Link);

const ALL_TAG = 'All Projects';

const portfolioData = [
    {
        id: 1,
        client: "EvoGrow Systems",
        title: "SaaS Platform Redesign & Launch",
        industry: "B2B Software",
        icon: Code,
        color: "text-[#00E5FF]",
        scope: ["UI/UX overhaul", "Full-stack development (MERN)", "Third-party API integration"],
        results: "Reduced churn by 18% and increased daily active users by 35% within Q1.",
        tags: ["Web Development", "UI/UX", "Full-Stack"]
    },
    {
        id: 2,
        client: "Vivid Retail Co.",
        title: "E-commerce Video Marketing Funnel",
        industry: "E-commerce/Fashion",
        icon: Video,
        color: "text-[#FF6AD5]",
        scope: ["Product video shooting (4K)", "Script writing & editing", "Social media ad placement"],
        results: "Generated $250K in direct sales from video ads over 60 days.",
        tags: ["Video Production", "Digital Ads", "Branding"]
    },
    {
        id: 3,
        client: "Global Finance Hub",
        title: "Corporate Identity & Pitch Deck",
        industry: "Finance",
        icon: Users,
        color: "text-[#8AFF80]",
        scope: ["Brand strategy workshop", "Logo & typography package", "Investor pitch deck design"],
        results: "Secured $10M in seed funding for the startup using the new professional pitch deck.",
        tags: ["Branding", "UI/UX"]
    },
    {
        id: 4,
        client: "Fitness Fusion App",
        title: "SEO Strategy & Content Campaign",
        industry: "Health & Fitness",
        icon: TrendingUp,
        color: "text-[#FFD96A]",
        scope: ["Technical SEO audit", "Keyword research", "10x Content cluster creation"],
        results: "Boosted organic traffic by 150% with #1 ranking on 5 competitive keywords.",
        tags: ["Digital Ads", "Web Development"]
    },
    {
        id: 5,
        client: "Aura Events Planners",
        title: "Immersive 3D Website Experience",
        industry: "Event Management",
        icon: Zap,
        color: "text-[#FF6AD5]",
        scope: ["Custom 3D model integration", "WebGL optimization", "Interactive gallery design"],
        results: "Increased event booking inquiries by 70% due to immersive design.",
        tags: ["Web Development", "UI/UX"]
    },
];

const projectTags = [ALL_TAG, ...Array.from(new Set(portfolioData.flatMap(p => p.tags)))];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.3 }
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

const PortfolioPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState(ALL_TAG);
    const handleChat = () => alert("AI Chatbot will open here!");

    const filteredProjects = activeFilter === ALL_TAG
        ? portfolioData
        : portfolioData.filter(project => project.tags.includes(activeFilter));

    return (
        <div className="min-h-screen bg-[#07070D] text-[#E2E2E8] font-sans">
            <Header onChatIconClick={handleChat} />

            <main className="max-w-7xl mx-auto p-4 md:p-8 pt-16">
                
                {/* Hero */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF6AD5] to-[#00E5FF]">
                        Our Proven Track Record
                    </h1>
                    <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                        We deliver high-impact results. Explore our latest case studies.
                    </p>
                </motion.div>

                {/* Filter */}
                <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-12 border-b border-[#1E1E28] pb-4">
                    {projectTags.map((tag) => (
                        <motion.button
                            key={tag}
                            onClick={() => setActiveFilter(tag)}
                            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                                activeFilter === tag
                                    ? 'bg-[#FF6AD5] text-white shadow-lg shadow-[#FF6AD5]/40'
                                    : 'bg-[#1E1E28] text-gray-400 hover:bg-[#2A2A33]'
                            }`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="flex items-center space-x-2">
                                <Tag size={16} />
                                <span>{tag}</span>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={activeFilter}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="bg-[#0F0F16] rounded-2xl border border-[#1F1F29] p-6 md:p-8 transition-all duration-300"
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
                                    y: -8
                                }}
                            >
                                <div>
                                    <div className="flex items-start mb-4">
                                        <project.icon size={40} className={`${project.color} mr-4 p-2 rounded-lg bg-[#07070D] border border-[#1F1F29]`} />
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{project.industry}</p>
                                            <h2 className="text-3xl font-extrabold text-white">{project.client}</h2>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-semibold text-[#00E5FF] mb-4 border-l-4 border-[#FF6AD5] pl-3">{project.title}</h3>

                                    <div className="mb-6">
                                        <p className="text-gray-300 font-semibold mb-2 flex items-center space-x-2">
                                            <Layers size={18} className="text-[#FF6AD5]" />
                                            <span>Scope of Work:</span>
                                        </p>
                                        <ul className="list-none space-y-2 text-gray-400">
                                            {project.scope.map((s, i) => (
                                                <li key={i} className="text-base flex items-start">
                                                    <span className="mr-2 text-[#00E5FF]">•</span>{s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-[#00E5FF]/10 p-4 rounded-xl border border-[#00E5FF]/30 mt-4">
                                        <p className="text-lg font-bold text-[#00E5FF] flex items-center space-x-2 mb-1">
                                            <Briefcase size={20} />
                                            <span>Result Highlight:</span>
                                        </p>
                                        <p className="text-gray-200 font-medium">{project.results}</p>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs font-medium px-3 py-1 bg-[#1E1E28] text-gray-300 rounded-full flex items-center">
                                                <Tag size={12} className="mr-1" />{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="bg-[#FF6AD5]/10 border border-[#FF6AD5]/40 rounded-2xl p-10 md:p-16 text-center shadow-2xl mt-20"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#FF6AD5]">
                        Want to be the next success story?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Let's discuss how we can generate similar results for your business.
                    </p>

                    <MotionLink
                        to="/contact"
                        className="inline-block px-8 py-3 bg-[#FF6AD5] text-white font-bold rounded-lg shadow-xl hover:bg-[#ff4cc7] transition-colors duration-300"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get a Free Quote
                    </MotionLink>
                </motion.div>

            </main>
        </div>
    );
};

export default PortfolioPage;
