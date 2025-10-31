import React from 'react';
import { motion } from 'framer-motion';

interface ChatBubbleProps {
  message: string;
  isUser: boolean; 
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser }) => {

  // ✅ Agency Theme Bubble Colors
  const bubbleClasses = isUser
    ? `
      bg-gradient-to-r from-[#00b4ff] via-[#6b5bff] to-[#a259ff] 
      text-white ml-auto 
      rounded-br-none shadow-[0_0_20px_rgba(0,180,255,0.45)]
    `
    : `
      bg-[#111] text-gray-200 mr-auto rounded-tl-none
      border border-[#222] 
      shadow-[0_0_18px_rgba(162,89,255,0.25)]
    `;

  const alignment = isUser ? 'justify-end' : 'justify-start';

  // ✅ Premium 3D + spring animation
  const bubbleVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.92, rotateX: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 22,
        duration: 0.45
      } 
    },
  };

  return (
    <div className={`flex w-full my-2 ${alignment}`}>
      <motion.div
        className={`max-w-xs md:max-w-md p-4 rounded-xl ${bubbleClasses}`}
        initial="hidden"
        animate="visible"
        variants={bubbleVariants}
      >
        <p className="whitespace-pre-wrap leading-relaxed tracking-wide">{message}</p>
      </motion.div>
    </div>
  );
};

export default ChatBubble;
