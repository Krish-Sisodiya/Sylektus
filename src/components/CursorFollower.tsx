import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

const CursorFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  const defaultSize = 12;
  const interactiveSize = 40;

  const size = isInteractive ? interactiveSize : defaultSize;
  const opacity = isHovering ? 1 : 0;

  const hideTimeout = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHovering(true);

      const target = e.target as HTMLElement;
      const isOverInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer");

      setIsInteractive(isOverInteractive);

      clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => setIsHovering(false), 500);
    };

    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseEnter = () => setIsHovering(true);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none rounded-full"
      style={{
        // ✅ Agency Neon Colors
        backgroundColor: isInteractive 
          ? "rgba(59, 130, 246, 1)"     // Neon Blue
          : "rgba(37, 99, 235, 0.4)",  // Soft Blue Glow

        boxShadow: isInteractive
          ? "0 0 25px rgba(59, 130, 246, 0.9)" // Strong Neon Glow
          : "0 0 10px rgba(37, 99, 235, 0.5)", // Soft Glow

        left: mousePosition.x - size / 2,
        top: mousePosition.y - size / 2,
      }}
      animate={{
        width: size,
        height: size,
        opacity: opacity,
        scale: isInteractive ? 1.2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.2,
      }}
    />
  );
};

export default CursorFollower;
