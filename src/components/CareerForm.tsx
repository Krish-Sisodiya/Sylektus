import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import axios from 'axios';

// Backend API URL for career applications
const CAREER_API_URL = 'http://localhost:8080/api/careers'; 

const CareerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    experience: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus('idle'); // Clear status on new input
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(CAREER_API_URL, formData);
      console.log('Application Submitted:', response.data);
      
      setStatus('success');
      setFormData({ name: '', email: '', role: '', experience: '' }); // Clear form

    } catch (error) {
      console.error('Error submitting application:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="bg-dark-card p-8 md:p-10 rounded-xl shadow-2xl border border-gray-700 max-w-xl mx-auto"
    >
      <h3 className="text-3xl font-bold mb-6 text-accent-purple text-center">Join Our Dynamic Team!</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Name Input */}
        <motion.input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-dark-bg border border-gray-600 rounded-lg text-white focus:ring-primary-blue focus:border-primary-blue transition-colors"
          whileFocus={{ scale: 1.01 }}
        />

        {/* Email Input */}
        <motion.input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-dark-bg border border-gray-600 rounded-lg text-white focus:ring-primary-blue focus:border-primary-blue transition-colors"
          whileFocus={{ scale: 1.01 }}
        />

        {/* Role Selection */}
        <motion.select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          className="w-full p-3 bg-dark-bg border border-gray-600 rounded-lg text-white focus:ring-primary-blue focus:border-primary-blue transition-colors appearance-none"
          whileFocus={{ scale: 1.01 }}
        >
          <option value="" disabled>Select Role You're Applying For</option>
          <option value="WebDev">Web Developer (Full-Stack)</option>
          <option value="GraphicDesign">Graphic Designer/UI-UX</option>
          <option value="VideoEdit">Video Editor/Producer</option>
          <option value="Marketing">Digital Marketing Specialist</option>
          <option value="Ecommerce">E-commerce Specialist</option>
        </motion.select>

        {/* Experience/Message Area */}
        <motion.textarea
          name="experience"
          placeholder="Briefly describe your relevant experience (Max 100 words)"
          value={formData.experience}
          onChange={handleChange}
          rows={3}
          required
          className="w-full p-3 bg-dark-bg border border-gray-600 rounded-lg text-white focus:ring-primary-blue focus:border-primary-blue transition-colors"
          whileFocus={{ scale: 1.01 }}
        />

        {/* Status Messages */}
        {status === 'success' && (
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-green-400 font-semibold"
            >
                ✅ Application submitted successfully! We'll be in touch.
            </motion.p>
        )}
        {status === 'error' && (
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-red-400 font-semibold"
            >
                ❌ Error submitting form. Check backend server.
            </motion.p>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          className={`w-full p-3 font-bold rounded-lg transition-all duration-300 flex items-center justify-center ${
            isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-primary-blue hover:bg-blue-600 text-white shadow-md'
          }`}
          whileHover={{ scale: isLoading ? 1 : 1.03 }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
          ) : (
            <Send className="w-5 h-5 mr-2" />
          )}
          {isLoading ? 'Sending...' : 'Apply Now'}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CareerForm;