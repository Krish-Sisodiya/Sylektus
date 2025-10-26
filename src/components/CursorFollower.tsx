import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

const CursorFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false); // माउस विंडो के अंदर है या नहीं
  const [isInteractive, setIsInteractive] = useState(false); 
  
  const defaultSize = 10;
  const interactiveSize = 35;
  
  const size = isInteractive ? interactiveSize : defaultSize;
  const opacity = isHovering ? 1 : 0; 
  
  const hideTimeout = React.useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // माउस मूव करते ही तुरंत दिखाओ
      setIsHovering(true);

      // इंटरैक्टिव एलिमेंट्स को ट्रैक करें
      const target = e.target as HTMLElement;
      const isOverInteractive = target.tagName === 'A' || target.tagName === 'BUTTON' || target.getAttribute('role') === 'button' || target.classList.contains('cursor-pointer');
      setIsInteractive(isOverInteractive);

      // 500ms के बाद माउस रुकने पर बॉल को छिपाने का टाइमर रीसेट करो
      clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => {
        setIsHovering(false); // 500ms बाद, अगर कोई और मूव इवेंट नहीं आया, तो छिपाओ
      }, 500); 
    };
    
    // NEW: माउस विंडो से बाहर निकलने पर कर्सर को छिपाओ
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    // NEW: माउस विंडो में वापस आने पर कर्सर को दिखाओ
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave); // <-- Added
    window.addEventListener('mouseenter', handleMouseEnter); // <-- Added
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, []); // Dependecy array is empty

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none rounded-full"
      style={{
        backgroundColor: isInteractive ? 'rgba(59, 130, 246, 1)' : 'rgba(168, 85, 247, 0.8)', 
        left: mousePosition.x - size / 2, 
        top: mousePosition.y - size / 2,
      }}
      animate={{ 
        width: size,
        height: size,
        opacity: opacity,
        scale: isInteractive ? 1.1 : 1,
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 400, 
        damping: 30,  
        mass: 0.2,    
      }}
    />
  );
};

export default CursorFollower;