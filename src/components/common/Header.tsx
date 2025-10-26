import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';

// Navigation Data
const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Our Team', path: '/team' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
];

// Framer Motion Variants
const linkVariants = {
    initial: { y: 0 },
    hover: { y: -3, transition: { type: "spring", stiffness: 300 } },
};

const menuVariants = {
    hidden: { x: '100%', transition: { type: 'tween', duration: 0.4 } },
    visible: { x: '0%', transition: { type: 'tween', duration: 0.4 } },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

interface HeaderProps {
    onChatIconClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onChatIconClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollLink = (path: string) => {
        if (path.startsWith('/#')) {
            const targetId = path.substring(2);
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-accent-purple tracking-wider"
                    >
                        SYLEKTUS
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <motion.div
                                key={item.name}
                                variants={linkVariants}
                                initial="initial"
                                whileHover="hover"
                                className="relative text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                            >
                                <Link to={item.path} className="py-2 inline-block">
                                    {item.name}
                                </Link>
                                {/* Animated underline */}
                                <motion.span
                                    className="absolute bottom-0 left-0 h-0.5 bg-accent-purple w-full"
                                    initial={{ scaleX: 0 }}
                                    variants={{
                                        initial: { scaleX: 0 },
                                        hover: { scaleX: 1, transition: { duration: 0.3 } },
                                    }}
                                />
                            </motion.div>
                        ))}
                    </nav>

                    {/* Desktop CTA & Chat */}
                    <div className="hidden md:flex items-center space-x-4">
                        <motion.div whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(59,130,246,0.4)" }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200 }}>
                            <Link
                                to="/contact"
                                className="px-5 py-2 text-md font-semibold text-white bg-primary-blue rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
                            >
                                Book a Call
                            </Link>
                        </motion.div>

                        <motion.button
                            onClick={onChatIconClick}
                            className="p-3 rounded-full bg-accent-purple text-white shadow-xl hover:bg-purple-700 transition-colors duration-300"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Open Chatbot"
                        >
                            <MessageSquare size={24} />
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-3">
                        <motion.button
                            onClick={onChatIconClick}
                            className="p-2 rounded-full bg-accent-purple text-white shadow-md"
                            whileTap={{ scale: 0.9 }}
                            aria-label="Open Chatbot"
                        >
                            <MessageSquare size={20} />
                        </motion.button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2 focus:outline-none"
                            aria-label="Toggle navigation"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        className="md:hidden fixed top-20 right-0 w-full max-w-xs h-full bg-dark-bg/95 border-l border-gray-800 shadow-2xl p-6 overflow-y-auto"
                    >
                        <motion.div
                            className="flex flex-col space-y-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {navItems.map((item, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <Link
                                        to={item.path}
                                        onClick={() => handleScrollLink(item.path)}
                                        className="block text-2xl font-semibold text-gray-200 hover:text-accent-purple transition-colors duration-200 py-3 border-b border-gray-700/50"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile CTA */}
                            <motion.div variants={itemVariants} className="pt-6">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block w-full text-center px-5 py-3 text-lg font-bold text-white bg-primary-blue rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
                                >
                                    Book a Call
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
