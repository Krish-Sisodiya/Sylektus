/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Twitter, Linkedin, Briefcase, ChevronRight, Users, Heart, Zap, Globe, Shield } from 'lucide-react';
import Header from './common/Header';
import { Link as RouterLink } from 'react-router-dom';
// IMPORTANT: Assuming TeamSection is a separate component imported here
import TeamSection from './TeamSection'; 

// ----------------------------------------------------------------------
// DUMMY TEAM DATA & VALUES
// ----------------------------------------------------------------------
const leadershipTeam = [
    {
        name: "Suresh Sharma",
        role: "CEO & Digital Strategist",
        bio: "Visionary leader driving growth through innovative and scalable digital transformation strategies. 15+ years experience.",
        image: '/assets/img/suresh.jpg', 
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Priya Verma",
        role: "Lead Full Stack Architect",
        bio: "Specializing in robust, high-performance cloud architecture and complex MERN stack solutions. Pioneer in serverless infra.",
        image: '/assets/img/priya.jpg',
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Rajat Khanna",
        role: "Creative Director & UX Head",
        bio: "Master of aesthetic design and human-centered experiences that maximize user conversion. Focus on user psychology.",
        image: '/assets/img/rajat.jpg',
        linkedin: "#",
        twitter: "#",
    },
];

const coreValues = [
    { icon: Zap, title: "Innovation", description: "Continuously experimenting with new tech stacks and methodologies." },
    { icon: Globe, title: "Transparency", description: "Open communication and honest feedback drives our internal culture." },
    { icon: Shield, title: "Integrity", description: "Commitment to ethical practices and building trust with every client." },
];

// ===================================
// FRAMER MOTION VARIANTS
// ===================================

const headerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { 
            staggerChildren: 0.2, 
            delayChildren: 0.3 
        } 
    },
};

const cardItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

// ===================================
// SUB-COMPONENTS (Reusing TeamSection Card Logic)
// ===================================

// --- Reusable Team Member Card Component ---
// (This replicates the styling/logic from your TeamSection for consistency)
const TeamMemberCard: React.FC<typeof leadershipTeam[0]> = (member) => {
    return (
        <motion.div
            variants={cardItemVariants}
            // 3D Tilt and Depth on Hover
            whileHover={{ 
                scale: 1.05, 
                rotateY: 3, 
                rotateX: 1, 
                boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4)", 
            }} 
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group relative h-96 bg-dark-card rounded-2xl overflow-hidden shadow-xl cursor-pointer transform-style-preserve-3d perspective-1000 border border-gray-700 hover:border-accent-purple"
        >
            {/* 1. IMAGE: Black & White by default, Color on Hover */}
            <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-all duration-700" 
                initial={{ filter: 'grayscale(100%) brightness(0.7)', scale: 1 }}
                variants={{
                    hover: { 
                        filter: 'grayscale(0%) brightness(1.0)', 
                        scale: 1.1, 
                    }
                }}
                transition={{ duration: 0.7 }}
            />

            {/* 2. BASE TEXT (Always Visible - Name and Role) */}
            <motion.div 
                className="absolute inset-x-0 bottom-0 p-6 pt-10 bg-gradient-to-t from-dark-bg/95 to-transparent text-left z-10"
                variants={{ hover: { y: -10 } }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <h3 className="text-4xl font-extrabold text-white leading-none">{member.name}</h3>
                <p className="text-xl font-medium text-accent-purple mt-1">{member.role}</p>
            </motion.div>


            {/* 3. DETAIL OVERLAY (Slides Up on Hover) */}
            <motion.div
                className="absolute inset-x-0 bottom-0 p-6 pt-16 text-left bg-dark-bg/90 backdrop-blur-sm z-20" 
                initial={{ y: "100%" }} 
                variants={{ hover: { y: "0%" } }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <p className="text-gray-300 text-lg mb-6 font-light leading-relaxed border-l-4 border-primary-blue pl-3">{member.bio}</p>
                
                <div className="flex space-x-6">
                    <motion.a 
                        href={member.linkedin} 
                        target="_blank" 
                        whileHover={{ scale: 1.3, color: '#0A66C2' }}
                        className="text-gray-400 transition-colors duration-200"
                    >
                        <Linkedin size={28} />
                    </motion.a>
                    <motion.a 
                        href={member.twitter} 
                        target="_blank" 
                        whileHover={{ scale: 1.3, color: '#1DA1F2' }} 
                        className="text-gray-400 transition-colors duration-200"
                    >
                        <Twitter size={28} />
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
};


// ===================================
// MAIN PAGE COMPONENT
// ===================================

const TeamPage: React.FC = () => {
    const handleChat = () => console.log('Chat toggle TBD'); // Dummy handler
    
    // Parallax Setup for Hero Section
    const { scrollYProgress } = useScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.5], [0, 300]); 
    
    return (
        <div className="min-h-screen bg-dark-bg text-white font-sans overflow-x-hidden">
            <Header onChatIconClick={handleChat} />
            
            <main className="max-w-7xl mx-auto p-4 md:p-8">
                
                {/* 1. HERO SECTION - Culture & Mission (Parallax) */}
                <motion.section 
                    variants={headerVariants} 
                    initial="initial" 
                    animate="animate" 
                    className="pt-24 pb-16 md:pt-36 md:pb-24 text-center relative overflow-hidden"
                    style={{ y: yRange }} // Apply parallax movement to the entire section
                >
                    <p className="text-lg text-accent-purple font-semibold mb-3 uppercase tracking-widest">Our People, Our Strength</p>
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
                        className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-accent-purple"
                    >
                        The Human Element
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
                    >
                        We are a passionate collective of builders, thinkers, and innovators united by excellence and a love for creating what's next.
                    </motion.p>
                    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 1.2, type: "spring"}} className="mt-8 text-primary-blue/50">
                        <Users size={50} className="mx-auto" />
                    </motion.div>
                </motion.section>
                
                {/* 2. LEADERSHIP TEAM (Using the Unified Team Card) */}
                <section className="py-12 md:py-16">
                    <motion.h2 
                        initial={{ opacity: 0, x: -50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, amount: 0.5 }} 
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-extrabold text-center mb-12 text-primary-blue"
                    >
                        Visionary Leadership
                    </motion.h2>
                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        variants={containerVariants} 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {leadershipTeam.map((member) => (
                            <TeamMemberCard key={member.name} {...member} />
                        ))}
                    </motion.div>
                </section>
                
                {/* --- */}

                {/* 3. CORE TEAM (Reusing TeamSection Component) */}
                <section className="py-12 md:py-16">
                    <motion.h2 
                        initial={{ opacity: 0, x: 50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, amount: 0.5 }} 
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-extrabold text-center mb-4 text-accent-purple"
                    >
                        The Core Innovators
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-center text-gray-400 mb-12 text-xl max-w-3xl mx-auto"
                    >
                        Meet the brilliant minds and dedicated professionals who bring every digital product to life.
                    </motion.p>
                    
                    {/* Reusing the TeamSection component for the rest of the team */}
                    <TeamSection /> 
                    
                </section>

                {/* --- */}

                {/* 4. TEAM VALUES / CULTURE SECTION */}
                <section className="py-12 md:py-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: -50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true, amount: 0.5 }} 
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-extrabold text-center mb-12 text-white"
                    >
                        Our Core Values
                    </motion.h2>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants} 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {coreValues.map((value, index) => (
                            <motion.div 
                                key={index}
                                variants={cardItemVariants}
                                className="p-8 bg-dark-card rounded-2xl border-b-4 border-primary-blue/50 text-left transform transition-all duration-300 hover:border-accent-purple hover:scale-[1.02]"
                            >
                                <value.icon size={40} className="text-primary-blue mb-4" />
                                <h3 className="text-3xl font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-gray-400 text-lg">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* --- */}

                {/* 5. CAREERS CTA (Enhanced Animation) */}
                <section className="py-16 md:py-20">
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="bg-primary-blue/10 border border-primary-blue/50 rounded-3xl p-10 md:p-16 text-center shadow-2xl flex flex-col md:flex-row justify-between items-center transform hover:bg-primary-blue/20 transition-all duration-300"
                    >
                        <div className="text-left md:w-3/4 mb-6 md:mb-0 flex items-center space-x-4">
                            <Briefcase size={50} className="text-primary-blue flex-shrink-0 animate-pulse" />
                            <div>
                                <h2 className="text-4xl font-extrabold mb-2 text-primary-blue">
                                    Ready to Build the Future?
                                </h2>
                                <p className="text-lg text-gray-300">
                                    Explore challenging roles and join a culture where your skills redefine digital limits.
                                </p>
                            </div>
                        </div>
                        <motion.div whileHover={{ y: -5, rotate: 1 }} whileTap={{ scale: 0.9 }}>
                            <RouterLink 
                                to="/careers" 
                                className="inline-flex items-center px-10 py-4 bg-primary-blue text-white font-bold rounded-full shadow-xl hover:bg-blue-600 transition-colors duration-300 text-lg"
                            >
                                View Open Roles
                                <ChevronRight size={22} className="ml-2" />
                            </RouterLink>
                        </motion.div>
                    </motion.div>
                </section>

            </main>
        </div>
    );
};

export default TeamPage;