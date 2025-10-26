import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // scrollYProgress (0 से 1 तक) को एक स्मूथ वैल्यू में बदलें
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    // fixed-top: इसे पेज के ऊपर पिन करें ताकि यह हमेशा दिखाई दे
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-accent-purple origin-[0%] z-50 shadow-lg"
    />
  );
};

export default ScrollProgressBar;