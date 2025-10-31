import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import axios from 'axios';

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

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus('idle');
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(CAREER_API_URL, formData);
      console.log('Application Submitted:', response.data);
      setStatus('success');
      setFormData({ name: '', email: '', role: '', experience: '' });

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
        // 🔥 Agency Neon Gradient Container
        className="p-8 md:p-10 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.15)] 
                   bg-gradient-to-b from-[#0a0f24] to-black border border-[#0ef]/20 max-w-xl mx-auto"
    >
      {/* Title: Neon Yellow */}
      <h3 className="text-3xl font-bold mb-6 text-[#f8d613] text-center drop-shadow-[0_0_12px_#f8d613]">
        Join Our Dynamic Team!
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* INPUT FIELDS — Neon Blue border + dark background */}
        <motion.input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-[#0f162e] border border-[#0ef]/40 rounded-lg text-white 
                     focus:ring-[#0ef] focus:border-[#0ef] placeholder-gray-400"
          whileFocus={{ scale: 1.01, boxShadow: "0 0 12px rgba(0, 238, 255, 0.35)" }}
        />

        <motion.input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-[#0f162e] border border-[#0ef]/40 rounded-lg text-white 
                     focus:ring-[#0ef] focus:border-[#0ef] placeholder-gray-400"
          whileFocus={{ scale: 1.01, boxShadow: "0 0 12px rgba(0, 238, 255, 0.35)" }}
        />

        {/* ROLE SELECT */}
        <motion.select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          className="w-full p-3 bg-[#0f162e] border border-[#0ef]/40 rounded-lg text-white 
                     focus:ring-[#0ef] focus:border-[#0ef]"
          whileFocus={{ scale: 1.01, boxShadow: "0 0 12px rgba(0, 238, 255, 0.35)" }}
        >
          <option value="" disabled className="text-gray-400">Select Role You're Applying For</option>
          <option value="WebDev">Web Developer (Full-Stack)</option>
          <option value="GraphicDesign">Graphic Designer/UI-UX</option>
          <option value="VideoEdit">Video Editor/Producer</option>
          <option value="Marketing">Digital Marketing Specialist</option>
          <option value="Ecommerce">E-commerce Specialist</option>
        </motion.select>

        {/* EXPERIENCE */}
        <motion.textarea
          name="experience"
          placeholder="Briefly describe your experience (Max 100 words)"
          value={formData.experience}
          onChange={handleChange}
          rows={3}
          required
          className="w-full p-3 bg-[#0f162e] border border-[#0ef]/40 rounded-lg text-white 
                     focus:ring-[#0ef] focus:border-[#0ef] placeholder-gray-400"
          whileFocus={{ scale: 1.01, boxShadow: "0 0 12px rgba(0, 238, 255, 0.35)" }}
        />

        {/* STATUS */}
        {status === 'success' && (
          <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-400 font-semibold"
          >
              ✅ Application submitted successfully!
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-red-400 font-semibold"
          >
              ❌ Error submitting form. Please try again.
          </motion.p>
        )}

        {/* SUBMIT BUTTON — Neon Blue */}
        <motion.button
          type="submit"
          disabled={isLoading}
          className={`w-full p-3 font-bold rounded-lg transition-all duration-300 flex items-center 
                     justify-center text-black ${
                        isLoading 
                          ? 'bg-[#0ef]/40 cursor-not-allowed' 
                          : 'bg-[#0ef] hover:bg-[#55faff] shadow-[0_0_15px_#0ef]'
                      }`}
          whileHover={{ scale: isLoading ? 1 : 1.03 }}
          whileTap={{ scale: isLoading ? 1 : 0.97 }}
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
