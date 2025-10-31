import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ChatInterface from './ChatInterface'; // आपके पहले बनाए गए चैटबॉट का इम्पोर्ट

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        // Backdrop Animation
        <motion.div
          className="fixed inset-0 z-50 bg-black/70 flex justify-end items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Modal Box Animation */}
          <motion.div
            className="w-full h-full md:w-[420px] md:h-[90vh] 
                       bg-dark-bg shadow-2xl flex flex-col relative 
                       rounded-none md:rounded-xl overflow-hidden 
                       border-l border-blue-500/20"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 
                         text-gray-200 bg-dark-card rounded-full 
                         hover:bg-blue-600/30 transition-all border border-blue-500/20"
            >
              <X size={22} />
            </button>

            {/* Chat Interface inside modal */}
            <div className="flex-1 overflow-hidden">
              <ChatInterface isModalView={true} />
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatModal;
