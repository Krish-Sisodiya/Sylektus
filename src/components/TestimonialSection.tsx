import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// --- TESTIMONIALS DATA ---
const testimonials = [
    { quote: "Sylektus Agency didn't just build our platform; they strategized our entire digital growth, resulting in a 35% revenue boost.", client: "Aman Gupta", company: "EzyGroceries Co.", rating: 5 },
    { quote: "The video production quality was cinematic and professional. It perfectly captured our brand story and went viral.", client: "Neha Singh", company: "Global Film Studio", rating: 5 },
    { quote: "Their SEO strategy moved us to the first page of Google for 10 core keywords in under six months. Truly experts!", client: "Vikram K.", company: "Startup Tech Hub", rating: 4 },
];

// Animation Variants for Testimonial Cards
const cardContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardItem = {
  hidden: { scale: 0.9, y: 50, opacity: 0 },
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

// Helper component for star rating
const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className={`fill-yellow-400 stroke-yellow-400 ${i < rating ? 'opacity-100' : 'opacity-30'}`} />
        ))}
    </div>
);

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-dark-bg/50 border-y border-gray-800">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <motion.h2 
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-center mb-12 text-accent-purple"
        >
            What Our Clients Say
        </motion.h2>

        <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {testimonials.map((testimonial, index) => (
                <motion.div
                    key={index}
                    variants={cardItem}
                    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(168, 85, 247, 0.4)" }}
                    className="p-6 bg-dark-card rounded-xl border border-gray-700 shadow-lg flex flex-col justify-between h-full"
                >
                    <StarRating rating={testimonial.rating} />
                    <p className="text-gray-300 italic mb-6 text-center text-lg leading-relaxed">
                        "{testimonial.quote}"
                    </p>
                    <div className="text-center border-t border-gray-700 pt-4">
                        <p className="font-semibold text-primary-blue">{testimonial.client}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;