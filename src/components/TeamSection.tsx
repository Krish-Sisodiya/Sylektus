import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';

// ----------------------------------------------------------------------
// 🚨 NEW: Import all images from your assets/img folder
// Adjust path based on your project structure.
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
        bio: "15+ years experience leading digital transformation projects, driving growth through innovative and highly scalable strategies.", 
        linkedin: "#", 
        twitter: "#", 
        image: imageE1 // Using the imported variable
    },
    { 
        name: "Priya Verma", 
        role: "Lead Full Stack Developer", 
        bio: "Expert in MERN stack, Spring Boot, and building highly scalable, robust cloud infrastructure and real-time applications.", 
        linkedin: "#", 
        twitter: "#", 
        image: imageE2 // Using the imported variable
    },
    { 
        name: "Rajat Khanna", 
        role: "Creative Director & UX/UI Head", 
        bio: "Designing exceptional, human-centered digital experiences with a sharp focus on conversion, aesthetics, and modern design principles.", 
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
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.1 },
    },
};

// ===========================================
// ✅ NEW: Image Variants
// ===========================================
const imageVariants = {
    // Default state: Black and White
    initial: { 
        filter: 'grayscale(100%) brightness(0.7)', 
        scale: 1, 
    },
    // Hover state: Full Color
    hover: { 
        filter: 'grayscale(0%) brightness(1.0)', 
        scale: 1.1, 
    }
};
// ===========================================


const TeamSection: React.FC = () => {
    return (
        <section id="team" className="py-16 md:py-20 text-center">
            <div className="max-w-7xl mx-auto p-4 md:p-8">
                
                {/* Title and Subtitle (Better Separation and Style) */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-accent-purple font-semibold mb-2 uppercase tracking-widest"
                >
                    The Driving Force
                </motion.p>
                <motion.h2 
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-primary-blue"
                >
                    Meet Our Certified Experts
                </motion.h2>
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
                >
                    We are a passionate collective of developers, designers, and marketers, committed to your growth and digital success.
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
                            {/* 1. IMAGE: Black & White by default, Color on Hover, object-cover for full card look */}
                            <motion.img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-all duration-700" 
                                
                                // ✅ Apply the variants here
                                initial="initial" // Set initial state (B&W)
                                variants={imageVariants} // Use the defined variants
                                whileHover="hover" // Change to color on hover
                                transition={{ duration: 0.7 }} // Smooth transition
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


                            {/* 3. DETAIL OVERLAY (Slides Up on Hover) - Professional Look */}
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
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;