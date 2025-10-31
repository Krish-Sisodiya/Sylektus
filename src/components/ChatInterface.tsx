import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ChatBubble from './ChatBubble';
import { motion } from 'framer-motion';
import { Send, Loader2, Bot, Menu, Plus } from 'lucide-react';

interface Message {
  content: string;
  role: 'user' | 'assistant';
}

interface ChatInterfaceProps {
  isModalView?: boolean;
}

const CHAT_API_URL = 'http://localhost:8080/api/chat';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isModalView = false }) => {
  const [inputMessage, setInputMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      content:
        "Hello! I'm your Sylektus AI Assistant — ask me anything about development, UI, content & automation.",
      role: 'assistant',
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(scrollToBottom, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputMessage.trim();
    if (!trimmed || isLoading) return;

    const newUserMsg: Message = { content: trimmed, role: 'user' };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post(CHAT_API_URL, { content: trimmed });

      const newAIMessage: Message = {
        content: response.data.content,
        role: (response.data.role as 'assistant') || 'assistant',
      };

      setMessages((prev) => [...prev, newAIMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          content: '⚠️ Backend not responding. Check Spring Boot server.',
          role: 'assistant',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const historyItems = ['Sylektus UX Update', 'Animations', 'API Errors', 'New Feature Ideas'];

  return (
    <div
      className={`flex flex-1 bg-[#0A0A0F] ${
        isModalView ? 'h-full' : 'h-screen max-h-screen'
      }`}
    >
      {/* SIDEBAR */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className="fixed md:static z-20 h-full w-64 bg-[#111] border-r border-[#222] p-4 flex flex-col shadow-[0_0_25px_rgba(0,0,0,0.7)]"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#a259ff]">History</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-300">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <motion.button
          className="flex items-center justify-center p-3 mb-4 rounded-lg 
          bg-gradient-to-r from-[#00b4ff] to-[#6b5bff] 
          text-white shadow-[0_0_15px_rgba(0,180,255,0.35)]
          hover:shadow-[0_0_25px_rgba(0,180,255,0.55)]
          transition duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            setMessages([{ content: 'New session started. Ask me anything!', role: 'assistant' }])
          }
        >
          <Plus className="w-5 h-5 mr-2" /> New Chat
        </motion.button>

        <div className="flex-1 overflow-y-auto space-y-2">
          {historyItems.map((item, i) => (
            <motion.div
              key={i}
              className="p-3 text-sm rounded-lg text-gray-300 hover:bg-[#1a1a1a] cursor-pointer"
              whileHover={{ x: 5 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MAIN CHAT AREA */}
      <div className={`flex-1 flex flex-col ${isModalView ? 'p-2' : 'p-4 md:p-8'}`}>
        {/* HEADER */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center p-4 mb-4 
          bg-[#111] border border-[#222] 
          rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.5)]"
        >
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden text-gray-300 mr-4"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Bot className="w-8 h-8 text-[#a259ff]" />
          <h1 className="text-2xl font-bold text-white ml-3">
            <span className="text-[#6b5bff]">Sylektus</span> Assistant
          </h1>
        </motion.header>

        {/* MESSAGES */}
        <motion.div
          className="flex-1 overflow-y-auto p-2 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {messages.map((msg, i) => (
            <ChatBubble key={i} message={msg.content} isUser={msg.role === 'user'} />
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <motion.div
                className="bg-[#111] p-4 rounded-xl border border-[#222] shadow-lg flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Loader2 className="w-5 h-5 text-[#a259ff] animate-spin mr-2" />
                <span className="text-gray-300">Sylektus is typing…</span>
              </motion.div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </motion.div>

        {/* INPUT BAR */}
        <motion.form
          onSubmit={handleSendMessage}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mt-4 p-4 bg-[#111] border border-[#222] rounded-xl shadow-xl"
        >
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask something professionally..."
              className="flex-1 p-3 bg-[#0A0A0F] text-white border border-[#333] rounded-lg 
              focus:ring-2 focus:ring-[#6b5bff] placeholder-gray-500"
            />

            <motion.button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className={`p-3 rounded-lg flex items-center justify-center
                ${
                  !inputMessage.trim() || isLoading
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#00b4ff] to-[#6b5bff] text-white shadow-lg'
                }`}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
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
