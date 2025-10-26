import React from 'react';
import { motion } from 'framer-motion';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import { Code, Users, TrendingUp, DollarSign, Video, Zap } from 'lucide-react';

// Framer Motion Variants for Staggered Grid Entry
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Staggered entry
    },
  },
};

const item = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

// Portfolio Data Structure
const portfolioProjects = [
    {
        id: 1,
        client: "EzyGroceries Co.",
        industry: "E-Commerce",
        title: "High-Volume E-Commerce Platform Rebuild",
        scope: ["Full-stack development (MERN)", "Payment Gateway Integration", "Inventory Management System"],
        results: "35% increase in conversion rate and 200% traffic growth.",
        icon: DollarSign,
        color: "text-green-400"
    },
    {
        id: 2,
        client: "Innovate AI Solutions",
        industry: "Technology/AI",
        title: "Bespoke AI Chatbot and Landing Page",
        scope: ["Custom React UI", "Spring Boot API Integration", "Brand Identity Design"],
        results: "Reduced customer support load by 50% through AI automation.",
        icon: Code,
        color: "text-primary-blue"
    },
    {
        id: 3,
        client: "FitLife Gym Chain",
        industry: "Fitness/Retail",
        title: "Digital Marketing & Ad Campaign",
        scope: ["Social Media Strategy", "Google Ads Management", "Video Ad Production"],
        results: "Achieved 5X Return on Ad Spend (ROAS) in Q4.",
        icon: Zap,
        color: "text-red-400"
    },
    {
        id: 4,
        client: "Global Film Studio",
        industry: "Entertainment",
        title: "Promo Video Production & Editing",
        scope: ["On-site video shooting", "Advanced cinematic editing", "Sound mixing and color grading"],
        results: "Trailer reached 1 Million views in the first 48 hours.",
        icon: Video,
        color: "text-yellow-400"
    },
    {
        id: 5,
        client: "Local NGO Connect",
        industry: "Non-Profit",
        title: "User-Friendly Donation Platform UI/UX",
        scope: ["Figma Prototyping", "User research and testing", "Frontend development"],
        results: "Donation frequency increased by 25% due to improved UX.",
        icon: Users,
        color: "text-purple-400"
    },
    {
        id: 6,
        client: "Startup Tech Hub",
        industry: "SaaS",
        title: "SEO Strategy and Content Audit",
        scope: ["Keyword Research", "On-Page SEO Optimization", "Backlink Strategy"],
        results: "Moved 10 target keywords to Google's first page within 6 months.",
        icon: TrendingUp,
        color: "text-green-500"
    },
];

const PortfolioPage: React.FC = () => {
  // Handler function (For Chatbot icon in Header)
  const handleChat = () => alert("AI Chatbot will open here!");

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans">
      <Header onChatIconClick={handleChat} />
      
      <main className="max-w-7xl mx-auto p-4 md:p-8 pt-16">
        
        {/* Hero Title and Description */}
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
                Discover the successful projects we've executed for diverse clients, delivering tangible results and digital excellence.
            </p>
        </motion.div>
        
        {/* Portfolio Grid Container */}
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {portfolioProjects.map((project) => (
                <motion.div
                    key={project.id}
                    variants={item}
                    whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)" }}
                    className="bg-dark-card rounded-xl border border-gray-700 p-6 md:p-8 transition-all duration-300 flex flex-col justify-between"
                >
                    <div>
                        {/* Client Icon and Name */}
                        <div className="flex items-center mb-4">
                            <project.icon size={36} className={`${project.color} mr-4 p-1 rounded-full bg-dark-bg`} />
                            <div>
                                <p className="text-sm font-medium text-gray-400">{project.industry}</p>
                                <h2 className="text-3xl font-bold text-white">{project.client}</h2>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-primary-blue mb-4">{project.title}</h3>

                        {/* Scope of Work */}
                        <div className="mb-4">
                            <p className="text-gray-300 font-semibold mb-2">Scope of Work:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                                {project.scope.map((s, i) => (
                                    <li key={i} className="text-sm">{s}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Results Highlight */}
                        <div className="bg-primary-blue/10 p-3 rounded-lg border-l-4 border-primary-blue mt-4">
                            <p className="text-lg font-bold text-primary-blue">Result Highlight:</p>
                            <p className="text-gray-200">{project.results}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>

        {/* Final Call to Action */}
        <motion.div
            className="bg-accent-purple/10 border border-accent-purple/50 rounded-2xl p-10 md:p-16 text-center shadow-2xl mt-20"
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
            <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-accent-purple text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
                component={motion.a}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
            >
                Get a Free Quote
            </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default PortfolioPage;