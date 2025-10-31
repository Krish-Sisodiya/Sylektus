import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';

import imageE1 from '../assets/img/E1.jpg'; 
import imageE2 from '../assets/img/E2.jpg';
import imageE3 from '../assets/img/E3.jpg';

const teamMembers = [
    { 
        name: "Suresh Sharma", 
        role: "CEO & Digital Strategist", 
        bio: "15+ years experience leading digital transformation projects, driving growth through innovative and highly scalable strategies.", 
        linkedin: "#", 
        twitter: "#", 
        image: imageE1
    },
    { 
        name: "Priya Verma", 
        role: "Lead Full Stack Developer", 
        bio: "Expert in MERN stack, Spring Boot, and building highly scalable, robust cloud infrastructure and real-time applications.", 
        linkedin: "#", 
        twitter: "#", 
        image: imageE2
    },
    { 
        name: "Rajat Khanna", 
        role: "Creative Director & UX/UI Head", 
        bio: "Designing exceptional, human-centered digital experiences with a sharp focus on conversion, aesthetics, and modern design principles.", 
        linkedin: "#", 
        twitter: "#", 
        image: imageE3
    },
];

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

const imageVariants = {
    initial: { 
        filter: 'grayscale(100%) brightness(0.7)', 
        scale: 1, 
    },
    hover: { 
        filter: 'grayscale(0%) brightness(1.05)', 
        scale: 1.1, 
    }
};

const TeamSection: React.FC = () => {
    return (
        <section id="team" className="py-20 bg-[#05050A] text-center">
            <div className="max-w-7xl mx-auto p-4 md:p-8">
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-semibold mb-2 uppercase tracking-widest text-[#A855F7]"
                >
                    The Driving Force
                </motion.p>

                <motion.h2 
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#4F8CFF] to-[#A855F7] text-transparent bg-clip-text"
                >
                    Meet Our Certified Experts
                </motion.h2>

                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
                >
                    We are a passionate collective of developers, designers, and marketers, committed to your growth and digital success.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={cardContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={cardItem}
                            whileHover={{ 
                                scale: 1.05, 
                                rotateY: 3, 
                                rotateX: 1, 
                                boxShadow: "0 25px 60px rgba(79, 140, 255, 0.35)",
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="group relative h-96 bg-[#0F0F17] rounded-2xl overflow-hidden cursor-pointer border border-gray-700 hover:border-[#A855F7]"
                        >
                            <motion.img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                                initial="initial"
                                variants={imageVariants}
                                whileHover="hover"
                                transition={{ duration: 0.7 }}
                            />

                            <motion.div 
                                className="absolute inset-x-0 bottom-0 p-6 pt-10 bg-gradient-to-t from-[#05050A] via-[#05050A]/70 to-transparent"
                            >
                                <h3 className="text-3xl font-extrabold text-white">{member.name}</h3>
                                <p className="text-lg font-medium text-[#A855F7] mt-1">{member.role}</p>
                            </motion.div>

                            <motion.div
                                className="absolute inset-x-0 bottom-0 p-6 pt-16 bg-[#05050A]/90 backdrop-blur-sm"
                                initial={{ y: "100%" }}
                                whileHover={{ y: "0%" }}
                                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                            >
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed border-l-4 border-[#4F8CFF] pl-3">
                                    {member.bio}
                                </p>

                                <div className="flex space-x-6">
                                    <motion.a 
                                        href={member.linkedin}
                                        target="_blank"
                                        whileHover={{ scale: 1.3, color: "#4F8CFF" }}
                                        className="text-gray-400"
                                    >
                                        <Linkedin size={26} />
                                    </motion.a>

                                    <motion.a 
                                        href={member.twitter}
                                        target="_blank"
                                        whileHover={{ scale: 1.3, color: "#A855F7" }}
                                        className="text-gray-400"
                                    >
                                        <Twitter size={26} />
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
