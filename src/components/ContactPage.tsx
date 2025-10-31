import React from 'react';
import { motion } from 'framer-motion';
import Header from './common/Header';

const ContactPage: React.FC = () => {
  const handleChat = () => alert("AI Chatbot will open here!");

  const inputFields = ['Full Name', 'Email Address', 'Company Name'];

  return (
    <div className="min-h-screen bg-[#0a0f1f] text-gray-200">
      <Header onChatIconClick={handleChat} />

      <main className="max-w-7xl mx-auto p-4 md:p-8 pt-16">

        {/* Title Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 text-[#3b82f6]">
            Let's Start the Conversation
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Get a free quote. We will respond within 24 hours.
          </p>

          {/* Contact Form */}
          <motion.form
            className="bg-[#111827] p-8 rounded-xl shadow-2xl border border-blue-500/20 max-w-lg mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            {inputFields.map((label, index) => (
              <motion.div
                key={label}
                className="mb-6"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <label className="block text-gray-400 text-sm font-bold mb-2">
                  {label}
                </label>
                <input
                  type={label.includes('Email') ? 'email' : 'text'}
                  placeholder={label}
                  className="w-full p-3 bg-[#0a0f1f] border border-blue-500/20 
                             rounded-lg text-white focus:ring-[#3b82f6] 
                             focus:border-[#3b82f6] transition-all"
                />
              </motion.div>
            ))}

            <motion.div
              className="mb-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full p-3 bg-[#0a0f1f] border border-blue-500/20 
                           rounded-lg text-white focus:ring-[#3b82f6] 
                           focus:border-[#3b82f6] transition-all"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full p-3 rounded-lg font-bold text-white 
                         bg-gradient-to-r from-[#2563eb] to-[#3b82f6]
                         hover:shadow-[0_0_20px_#3b82f6] transition-all"
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
