import React from 'react';
import { motion } from 'framer-motion';

interface ChatBubbleProps {
  message: string;
  isUser: boolean; // true for user, false for AI assistant
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser }) => {
  // Styles based on the sender
  const bubbleClasses = isUser
    ? 'bg-primary-blue text-white ml-auto rounded-br-none' // User messages are blue, aligned right
    : 'bg-dark-card text-gray-100 mr-auto rounded-tl-none border border-gray-700'; // AI messages are dark, aligned left
  
  const alignment = isUser ? 'justify-end' : 'justify-start';

  // Framer Motion Animation for subtle, smooth entry (Spring type for professionalism)
  const bubbleVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring", 
        stiffness: 280, 
        damping: 25,
        duration: 0.5 
      } 
    },
  };

  return (
    <div className={`flex w-full my-2 ${alignment}`}>
      <motion.div
        className={`max-w-xs md:max-w-md p-4 rounded-xl shadow-xl ${bubbleClasses}`}
        initial="hidden"
        animate="visible"
        variants={bubbleVariants}
      >
        <p className="whitespace-pre-wrap">{message}</p>
      </motion.div>
    </div>
  );
};

export default ChatBubble;