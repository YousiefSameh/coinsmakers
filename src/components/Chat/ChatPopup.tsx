import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { toggleChat, addMessage } from "@store/chat/chatSlice";
import { FaTimes, FaPaperPlane, FaCoins } from 'react-icons/fa';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

const ChatPopup: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, messages, onlineUsers } = useAppSelector((state) => state.chat);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    dispatch(addMessage({
      text: inputValue,
      user: {
        id: 'current-user',
        name: 'You',
        avatar: '😊',
        coins: 0
      },
      type: 'text'
    }));
    setInputValue('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-20 right-4 w-[650px] bg-base-200 rounded-lg shadow-xl overflow-hidden z-50"
        >
          {/* Header */}
          <div className="bg-base-300 p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <IoChatboxEllipsesOutline className="text-2xl text-secondary-color" />
                <div>
                  <h3 className="font-bold text-lg">Community Chat</h3>
                  <p className="text-sm opacity-70">{onlineUsers.length} members online</p>
                </div>
              </div>
              <button
                onClick={() => dispatch(toggleChat())}
                className="btn btn-ghost btn-sm btn-circle"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-2 ${
                  message.user.id === 'current-user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center text-xl rounded-full bg-base-300">
                  {message.user.avatar}
                </div>
                <div
                  className={`group max-w-[75%] ${
                    message.user.id === 'current-user'
                      ? 'bg-primary text-primary-content'
                      : 'bg-base-300'
                  } p-3 rounded-lg`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">{message.user.name}</span>
                    {message.type === 'task_complete' && (
                      <div className="flex items-center gap-1 text-xs bg-success/20 text-success px-2 py-0.5 rounded-full">
                        <FaCoins />
                        <span>+500</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-base-300">
            <div className="join w-full">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="input input-bordered join-item flex-1"
              />
              <button
                type="submit"
                className="btn btn-primary join-item"
                disabled={!inputValue.trim()}
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatPopup;
