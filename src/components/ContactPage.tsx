import React from 'react';
import { motion } from 'framer-motion';
import Header from './common/Header';

const ContactPage: React.FC = () => {
  const handleChat = () => alert("AI Chatbot will open here!");
  
  // Input fields for form animation
  const inputFields = ['Full Name', 'Email Address', 'Company Name'];

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Header onChatIconClick={handleChat} />
      
      <main className="max-w-7xl mx-auto p-4 md:p-8 pt-16">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 text-primary-blue">
            Let's Start the Conversation
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Get a free quote. We will respond within 24 hours.
          </p>
          
          {/* Animated Contact Form */}
          <motion.form 
            className="bg-dark-card p-8 rounded-xl shadow-2xl border border-gray-700 max-w-lg mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            {inputFields.map((label, index) => (
              <motion.div 
                key={label} 
                className="mb-6"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }} // Staggered input animation
              >
                <label className="block text-gray-400 text-sm font-bold mb-2">{label}</label>
                <input 
                  type={label.includes('Email') ? 'email' : 'text'}
                  placeholder={label}
                  className="w-full p-3 bg-dark-bg border border-gray-600 rounded-lg text-white focus:ring-primary-blue focus:border-primary-blue transition-colors"
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-6"
            >
              <label className="block text-gray-400 text-sm font-bold mb-2">Message</label>
              <textarea 
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full p-3 bg-dark-bg border border-gray-600 rounded-lg text-white focus:ring-primary-blue focus:border-primary-blue transition-colors"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full p-3 bg-accent-purple text-white font-bold rounded-lg hover:bg-purple-700 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Enquiry
            </motion.button>
          </motion.form>
        </motion.div>
      </main>
    </div>
  );
};

export default ContactPage;