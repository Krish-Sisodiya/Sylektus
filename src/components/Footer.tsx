import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

// --- DATA ---
const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#' },
];

const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
];

// Animation Variants
const footerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.1, // Staggered loading of children elements
        },
    },
};

const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="bg-dark-bg border-t border-gray-800 pt-16 pb-8"
            variants={footerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Top Section: CTA / Contact */}
                <motion.div 
                    className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-800 pb-10"
                    variants={itemVariants}
                >
                    <h3 className="text-3xl font-bold text-white mb-4 md:mb-0">
                        Ready to launch your next digital project?
                    </h3>
                    <motion.a
                        href="mailto:contact@yourcompany.com"
                        className="flex items-center space-x-2 px-6 py-3 text-lg font-semibold bg-accent-purple text-white rounded-full shadow-lg transition-all duration-300 hover:bg-primary-blue hover:shadow-2xl"
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Mail size={20} />
                        <span>Get In Touch</span>
                    </motion.a>
                </motion.div>


                {/* Middle Section: Navigation & Logo */}
                <div className="md:flex md:justify-between md:items-start mb-12">
                    <motion.div variants={itemVariants} className="mb-6 md:mb-0 text-left">
                        {/* Logo/Brand Name */}
                        <h4 className="text-2xl font-extrabold text-white">
                            Digital<span className="text-accent-purple">Architects</span>
                        </h4>
                        <p className="mt-2 text-gray-400 max-w-xs">
                            Innovating the digital world, one line of code at a time.
                        </p>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 md:gap-x-16 text-left">
                        <div>
                            <h5 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-3">Company</h5>
                            <ul className="space-y-3">
                                {navigation.map((item) => (
                                    <motion.li key={item.name} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <a href={item.href} className="text-gray-400 hover:text-accent-purple transition duration-200">
                                            {item.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h5 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-3">Legal</h5>
                            <ul className="space-y-3">
                                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <a href="#" className="text-gray-400 hover:text-accent-purple transition duration-200">
                                        Privacy Policy
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <a href="#" className="text-gray-400 hover:text-accent-purple transition duration-200">
                                        Terms of Service
                                    </a>
                                </motion.li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section: Copyright & Socials */}
                <div className="pt-8 border-t border-gray-800 md:flex md:items-center md:justify-between">
                    <motion.p variants={itemVariants} className="text-sm text-gray-500 text-center md:text-left mb-4 md:mb-0">
                        &copy; {currentYear} Digital Architects. All rights reserved.
                    </motion.p>
                    
                    {/* Social Icons */}
                    <motion.div variants={itemVariants} className="flex justify-center space-x-6">
                        {socialLinks.map((item) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                className="text-gray-400 hover:text-accent-purple transition duration-300"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <span className="sr-only">{item.label}</span>
                                <item.icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

            </div>
        </motion.footer>
    );
};

export default Footer;