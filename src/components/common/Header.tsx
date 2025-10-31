import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, MessageSquare } from "lucide-react";

// Simple loop animation for logo text
const LogoText = () => (
  <motion.span
    className="text-3xl font-extrabold tracking-wide text-blue-400"
    initial={{ opacity: 0.8, scale: 0.98 }}
    animate={{
      opacity: [0.8, 1, 0.8],
      scale: [0.98, 1, 0.98],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    SYLEKTUS
  </motion.span>
);

const navItems = [
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Our Team", path: "/team" },
  { name: "About Us", path: "/about" },
  { name: "Careers", path: "/careers" },
];

const linkVariants = {
  initial: { y: 0, color: "#c3dafe" },
  hover: { y: -4, color: "#f8fafc", transition: { type: "spring", stiffness: 350 } },
};
const underlineVariants = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: [0, 1, 0],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
  },
  hover: { scaleX: 1, transition: { duration: 0.3 } },
};

const menuVariants = {
  hidden: { x: "80%", opacity: 0 },
  visible: { x: "0%", opacity: 1, transition: { duration: 0.6, type: "spring", bounce: 0.25 } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.4 } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 270 } },
};

const Header = ({ onChatIconClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollLink = (path) => {
    if (path.startsWith("/#")) {
      document.getElementById(path.substring(2))?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl shadow-xl border-b border-blue-500/10"
      style={{ background: "rgba(10,15,31,0.85)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with simple loop animation */}
          <Link to="/" className="flex items-center">
            <LogoText />
          </Link>

          {/* Desktop Nav with hover animation & underline shimmer */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                className="relative text-lg font-medium hover:text-blue-300 cursor-pointer"
              >
                <Link to={item.path} className="py-2 inline-block">
                  {item.name}
                </Link>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-400 w-full"
                  variants={underlineVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  style={{ borderRadius: 4 }}
                />
              </motion.div>
            ))}
          </nav>

          {/* CTA + Chat */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 6px 18px rgba(0,34,123,0.23)" }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                to="/contact"
                className="px-5 py-2 text-md font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-500 to-yellow-500 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Book a Call
              </Link>
            </motion.div>
            <motion.button
              onClick={onChatIconClick}
              className="p-3 rounded-full bg-yellow-400 text-black shadow-lg hover:bg-yellow-500 transition"
              animate={{
                scale: [1, 1.15, 1],
                boxShadow: [
                  "0 0 0 rgba(255,218,80,.4)",
                  "0 8px 32px rgba(255,140,0,.4)",
                  "0 0 0 rgba(255,218,80,.4)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              whileHover={{ rotate: 16, scale: 1.23 }}
              whileTap={{ scale: 0.93 }}
            >
              <MessageSquare size={22} />
            </motion.button>
          </div>

          {/* Mobile menu toggler */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              onClick={onChatIconClick}
              className="p-2 rounded-full bg-yellow-400 text-black shadow-lg"
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 0 rgba(255,218,80,.4)",
                  "0 0 8px rgba(255,218,80,.4)",
                  "0 0 0 rgba(255,218,80,.4)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 1.7 }}
              whileTap={{ scale: 0.93 }}
            >
              <MessageSquare size={20} />
            </motion.button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-100 p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden fixed top-20 right-0 w-full max-w-xs h-full border-l border-blue-500/10 shadow-2xl p-6"
            style={{ background: "rgba(10,15,31,0.96)" }}
          >
            <motion.div
              className="flex flex-col space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.11, color: "#fbbf24" }}
                >
                  <Link
                    to={item.path}
                    onClick={() => handleScrollLink(item.path)}
                    className="block text-2xl font-semibold text-blue-100 hover:text-yellow-400 transition py-3 border-b border-blue-500/10"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-6">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
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
