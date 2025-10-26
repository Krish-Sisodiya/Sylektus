import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';

// ----------------------------------------------------------------------
// 🚨 NEW: Import all images from your assets/img folder
// (Assume TeamSection.tsx is at src/components/TeamSection.tsx)
// Adjust path if your structure is different, e.g., src/assets/img/E1.jpg
// ----------------------------------------------------------------------
import imageE1 from '../assets/img/E1.jpg'; 
import imageE2 from '../assets/img/E2.jpg';
import imageE3 from '../assets/img/E3.jpg';
// ----------------------------------------------------------------------

// --- TEAM MEMBERS DATA (Updated to use imported variables) ---
const teamMembers = [
    { 
        name: "Suresh Sharma", 
        role: "CEO & Digital Strategist", 
        bio: "15+ years experience leading digital transformation projects, driving growth through innovative strategies.", 
        linkedin: "#", 
        twitter: "#", 
        image: imageE1 // Using the imported variable
    },
    { 
        name: "Priya Verma", 
        role: "Lead Full Stack Developer", 
        bio: "Expert in MERN stack, Spring Boot, and building highly scalable, robust cloud infrastructure.", 
        linkedin: "#", 
        twitter: "#", 
        image: imageE2 // Using the imported variable
    },
    { 
        name: "Rajat Khanna", 
        role: "Creative Director & UX/UI Head", 
        bio: "Designing exceptional, human-centered digital experiences with a sharp focus on user conversion.", 
        linkedin: "#", 
        twitter: "#", 
        image: imageE3 // Using the imported variable
    },
];

// Animation Variants for Team Cards (Staggered Fade-in)
const cardContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardItem = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.1 },
    },
};

const TeamSection: React.FC = () => {
    return (
        <section id="team" className="py-16 md:py-20 text-center">
            <div className="max-w-7xl mx-auto p-4 md:p-8">
                
                {/* Title and Subtitle */}
                <motion.h2 
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold text-center mb-4 text-primary-blue"
                >
                    Meet The Architects of Digital Success
                </motion.h2>
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
                >
                    We are a passionate collective of developers, designers, and marketers, committed to your growth.
                </motion.p>

                {/* Team Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={cardContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={cardItem}
                            whileHover="hover" 
                            initial="initial"
                            className="group relative h-96 bg-dark-card rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-500"
                        >
                            {/* 1. IMAGE: Black & White by default, Color on Hover, object-contain for fit */}
                            <motion.img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-contain bg-dark-card" // object-contain & matching background
                                initial={{ filter: 'grayscale(100%)' }}
                                variants={{
                                    hover: { 
                                        filter: 'grayscale(0%)',
                                        scale: 1.05,
                                    }
                                }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* 2. BASE TEXT (Always Visible - Name and Role) */}
                            <motion.div 
                                className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-dark-bg/90 to-transparent text-left z-10"
                                variants={{
                                    hover: { y: -10 } 
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h3 className="text-3xl font-extrabold text-white">{member.name}</h3>
                                <p className="text-xl font-medium text-accent-purple">{member.role}</p>
                            </motion.div>


                            {/* 3. DETAIL OVERLAY (Slides Up on Hover) - NOW TRANSPARENT */}
                            <motion.div
                                className="absolute inset-x-0 bottom-0 p-4 pt-16 text-left bg-dark-bg/70 backdrop-blur-md border-t border-accent-purple/50 z-20" // bg-dark-bg/70 for transparency
                                initial={{ y: "100%" }} 
                                variants={{
                                    hover: { y: "0%" } 
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <p className="text-gray-300 text-lg mb-4 font-light leading-relaxed">{member.bio}</p>
                                
                                <div className="flex space-x-6">
                                  <motion.a 
                                        href={member.linkedin} 
                                        target="_blank" 
                                        whileHover={{ scale: 1.3, color: '#0A66C2' }}
                                        className="text-gray-400 transition-colors duration-200"
                                    >
                                        <Linkedin size={24} />
                                    </motion.a>
                                  <motion.a 
                                        href={member.twitter} 
                                        target="_blank" 
                                        whileHover={{ scale: 1.3, color: '#1DA1F2' }} 
                                        className="text-gray-400 transition-colors duration-200"
                                    >
                                        <Twitter size={24} />
                                    </motion.a>
                                </div>
                            </motion.div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;