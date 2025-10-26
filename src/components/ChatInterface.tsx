import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ChatBubble from './ChatBubble';
import { motion } from 'framer-motion';
import { Send, Loader2, Bot, Menu, Plus } from 'lucide-react';

// TypeScript Interface
interface Message {
  content: string;
  role: 'user' | 'assistant';
}

// NEW: Props for modal integration
interface ChatInterfaceProps {
  isModalView?: boolean; // Default to false if not provided
}

const CHAT_API_URL = 'http://localhost:8080/api/chat'; 

// Stagger container for messages area
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Smooth entry of messages
    },
  },
};

// Component updated to accept isModalView prop
const ChatInterface: React.FC<ChatInterfaceProps> = ({ isModalView = false }) => {
  const [inputMessage, setInputMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! I'm your professional AI Assistant. I'm connected to the Spring Boot backend on port 8080.", role: 'assistant' }
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedMessage = inputMessage.trim();
    if (!trimmedMessage || isLoading) return;

    const newUserMessage: Message = { content: trimmedMessage, role: 'user' };
    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post<{ content: string, role: string }>(CHAT_API_URL, {
        content: trimmedMessage
      });

      const newAIMessage: Message = { 
        content: response.data.content, 
        role: (response.data.role as 'assistant' || 'assistant') 
      };
      setMessages(prev => [...prev, newAIMessage]);

    } catch (error) {
      console.error("Error sending message to backend:", error);
      const errorMessage: Message = { 
        content: "ERROR: Could not get a response. Check Spring Boot server status and CORS configuration. (See browser console for details)", 
        role: 'assistant' 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Sidebar mock content
  const historyItems = ['Project Setup', 'Tailwind Animation', 'Backend Errors', 'New Chat Ideas'];

  return (
    // CSS Class Updated: 'h-screen max-h-screen' removed, added conditional padding
    <div className={`flex flex-1 bg-dark-bg ${isModalView ? 'h-full' : 'h-screen max-h-screen'}`}>
      
      {/* 1. SIDEBAR (Animated) */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        transition={{ type: "tween", duration: 0.3 }}
        // Sidebar will always be full height relative to its container (modal or full screen)
        className="fixed md:static z-20 h-full w-64 bg-dark-card border-r border-gray-700 p-4 flex flex-col shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-accent-purple">History</h2>
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="md:hidden text-gray-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <motion.button 
            className="flex items-center justify-center p-3 mb-4 rounded-lg bg-primary-blue hover:bg-blue-600 text-white transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setMessages([{ content: "New session started. Ask me anything!", role: 'assistant' }])}
        >
            <Plus className="w-5 h-5 mr-2" /> New Chat
        </motion.button>

        <div className="flex-1 overflow-y-auto space-y-2">
            {historyItems.map((item, index) => (
                <motion.div 
                    key={index}
                    className="p-3 text-sm rounded-lg text-gray-300 hover:bg-gray-700 cursor-pointer transition-colors duration-200 truncate"
                    whileHover={{ x: 5 }} // Slight animation on hover
                >
                    {item}
                </motion.div>
            ))}
        </div>
      </motion.div>

      {/* 2. MAIN CHAT AREA */}
      {/* Conditional Padding: Less padding in Modal view */}
      <div className={`flex-1 flex flex-col relative ${isModalView ? 'p-2' : 'p-4 md:p-8'}`}>
        
        {/* HEADER */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          // Conditional Margin: Less margin in Modal view
          className={`flex items-center p-4 mb-4 bg-dark-card rounded-lg shadow-2xl border border-gray-700 ${isModalView ? 'mt-2' : ''}`}
        >
          <button 
            onClick={() => setIsSidebarOpen(true)} 
            className="md:hidden text-gray-400 hover:text-white mr-4"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Bot className="w-8 h-8 text-accent-purple mr-3" />
          <h1 className="text-2xl font-bold text-white">
            <span className="text-accent-purple">Sylektus</span> Assistant
          </h1>
        </motion.header>

        {/* MESSAGES AREA */}
        <motion.div
          className="flex-1 overflow-y-auto p-2 space-y-4 custom-scrollbar"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {messages.map((msg, index) => (
            <ChatBubble 
              key={index} 
              message={msg.content} 
              isUser={msg.role === 'user'} 
            />
          ))}

          {/* Typing Indicator with Animation */}
          {isLoading && (
            <div className="flex justify-start my-2">
              <motion.div 
                className="bg-dark-card p-4 rounded-xl rounded-tl-none border border-gray-700 shadow-lg flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Loader2 className="w-5 h-5 text-accent-purple animate-spin mr-2" />
                <span className="text-gray-300">AI Assistant is typing...</span>
              </motion.div>
            </div>
          )}

          <div ref={messagesEndRef} /> 
        </motion.div>

        {/* INPUT FORM */}
        <motion.form 
          onSubmit={handleSendMessage} 
          className="mt-4 p-4 bg-dark-card rounded-lg shadow-2xl border border-gray-700"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
        >
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Enter Your Professional Query..."
              className="flex-1 p-3 bg-dark-bg text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-accent-purple transition-all duration-300 placeholder-gray-500"
              disabled={isLoading}
            />
            <motion.button
              type="submit"
              className={`p-3 rounded-lg transition-all duration-300 flex items-center justify-center ${
                !inputMessage.trim() || isLoading
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-accent-purple hover:bg-purple-700 text-white shadow-lg'
              }`}
              disabled={!inputMessage.trim() || isLoading}
              whileHover={{ scale: 1.05, rotate: 2 }} // Added rotation animation
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ChatInterface;