import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import { Code, Users, TrendingUp, DollarSign, Video, Zap, Tag, Layers, Search, Briefcase } from 'lucide-react';

// ✅ Motion wrapper for React Router Link
const MotionLink = motion(Link);

// ===================================
// 1. DYNAMIC PROJECT DATA (MOCK)
// ===================================

const ALL_TAG = 'All Projects';

const portfolioData = [
    {
        id: 1,
        client: "EvoGrow Systems",
        title: "SaaS Platform Redesign & Launch",
        industry: "B2B Software",
        icon: Code,
        color: "text-blue-400",
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
        color: "text-red-400",
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
        color: "text-green-400",
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
        color: "text-yellow-400",
        scope: ["Technical SEO audit", "Keyword research", "10x Content cluster creation"],
        results: "Achieved #1 ranking for 5 high-volume keywords, boosting organic traffic by 150%.",
        tags: ["Digital Ads", "Web Development"]
    },
    {
        id: 5,
        client: "Aura Events Planners",
        title: "Immersive 3D Website Experience",
        industry: "Event Management",
        icon: Zap,
        color: "text-pink-400",
        scope: ["Custom 3D model integration", "WebGL optimization", "Interactive gallery design"],
        results: "Increased event booking inquiries by 70% due to highly engaging website design.",
        tags: ["Web Development", "UI/UX"]
    },
];

// Extract unique tags for the filter bar
const projectTags = [ALL_TAG, ...Array.from(new Set(portfolioData.flatMap(p => p.tags)))];


// ===================================
// 2. FRAMER MOTION VARIANTS
// ===================================

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { 
            staggerChildren: 0.08, // Subtle stagger for professional feel
            delayChildren: 0.3
        } 
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } } // For AnimatePresence
};


// ===================================
// 3. COMPONENT
// ===================================

const PortfolioPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState(ALL_TAG);
    const handleChat = () => alert("AI Chatbot will open here!");

    // Filtering logic
    const filteredProjects = activeFilter === ALL_TAG
        ? portfolioData
        : portfolioData.filter(project => project.tags.includes(activeFilter));

    return (
        <div className="min-h-screen bg-dark-bg text-white font-sans">
            <Header onChatIconClick={handleChat} />
            <main className="max-w-7xl mx-auto p-4 md:p-8 pt-16">
                
                {/* Hero Section */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }} 
                    className="mb-12 text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-primary-blue">
                        Our Proven Track Record
                    </h1>
                    <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                        We don't just build, we deliver **measurable business results**. Explore our latest case studies below.
                    </p>
                </motion.div>

                {/* --- Filtering Tabs --- */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-12 border-b border-gray-700 pb-4"
                >
                    {projectTags.map((tag) => (
                        <motion.button
                            key={tag}
                            onClick={() => setActiveFilter(tag)}
                            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                                activeFilter === tag
                                    ? 'bg-accent-purple text-white shadow-lg shadow-accent-purple/40'
                                    : 'bg-dark-card text-gray-400 hover:bg-gray-700 hover:text-white'
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
                </motion.div>
                {/* ------------------------- */}

                {/* Portfolio Grid with AnimatePresence for filtering */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8" 
                    variants={containerVariants} 
                    initial="hidden" 
                    animate="visible"
                    // key is essential here to re-trigger the stagger animation on filter change
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
                                // Awesome hover effect
                                whileHover={{ 
                                    scale: 1.03, 
                                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.7)", 
                                    rotateX: 1.5, // Subtle 3D tilt
                                    y: -8 
                                }} 
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="bg-dark-card rounded-2xl border border-gray-800 p-6 md:p-8 transition-all duration-300 flex flex-col justify-between perspective-1000"
                            >
                                <div>
                                    <div className="flex items-start mb-4">
                                        <div className="flex-shrink-0">
                                            <project.icon size={40} className={`${project.color} mr-4 p-2 rounded-lg bg-dark-bg border border-gray-700`} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{project.industry}</p>
                                            <h2 className="text-3xl font-extrabold text-white">{project.client}</h2>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-semibold text-primary-blue mb-4 border-l-4 border-accent-purple pl-3">{project.title}</h3>
                                    
                                    <div className="mb-6">
                                        <p className="text-gray-300 font-semibold mb-2 flex items-center space-x-2">
                                            <Layers size={18} className="text-accent-purple" />
                                            <span>Scope of Work:</span>
                                        </p>
                                        <ul className="list-none space-y-2 text-gray-400">
                                            {project.scope.map((s, i) => <li key={i} className="text-base flex items-start"><span className="mr-2 text-primary-blue">•</span>{s}</li>)}
                                        </ul>
                                    </div>
                                    
                                    {/* Key Result Highlight */}
                                    <div className="bg-primary-blue/10 p-4 rounded-xl border border-primary-blue/30 mt-4">
                                        <p className="text-lg font-bold text-primary-blue flex items-center space-x-2 mb-1">
                                            <Briefcase size={20} />
                                            <span>Result Highlight:</span>
                                        </p>
                                        <p className="text-gray-200 font-medium">{project.results}</p>
                                    </div>
                                    
                                    {/* Tags */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs font-medium px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full flex items-center">
                                                <Tag size={12} className="mr-1" />{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {filteredProjects.length === 0 && (
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="text-center p-10 mt-10 bg-dark-card/50 rounded-xl text-gray-400 text-2xl">
                        <Search size={30} className="mx-auto mb-4 text-accent-purple" />
                        No projects found matching the filter "{activeFilter}".
                    </motion.div>
                )}


                {/* Final Call To Action */}
                <motion.div className="bg-accent-purple/10 border border-accent-purple/50 rounded-2xl p-10 md:p-16 text-center shadow-2xl mt-20"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-accent-purple">
                        Want to be the next success story?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Let's discuss how we can achieve these results for your business.
                    </p>

                    <MotionLink
                        to="/contact"
                        className="inline-block px-8 py-3 bg-accent-purple text-white font-bold rounded-lg shadow-xl hover:bg-purple-700 transition-colors duration-300"
                        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(168, 85, 247, 0.6)" }}
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