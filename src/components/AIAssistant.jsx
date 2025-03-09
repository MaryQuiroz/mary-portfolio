import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AI_ASSISTANT_CONFIG } from '../config/aiAssistant';
import { FaRobot, FaTimes, FaChevronUp, FaPaperPlane } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const MarkdownComponents = {
  p: ({node, ...props}) => <p className="text-gray-300 my-1" {...props} />,
  strong: ({node, ...props}) => <strong className="text-primary font-bold" {...props} />,
  h1: ({node, ...props}) => <h1 className="text-primary font-bold text-xl mt-2 mb-1" {...props} />,
  h2: ({node, ...props}) => <h2 className="text-primary font-bold text-lg mt-2 mb-1" {...props} />,
  h3: ({node, ...props}) => <h3 className="text-primary font-semibold text-base mt-2 mb-1" {...props} />,
  ul: ({node, ...props}) => <ul className="list-disc pl-4 my-1" {...props} />,
  li: ({node, ...props}) => <li className="text-gray-300 my-0.5" {...props} />,
};

const AIAssistant = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: t('ai.welcome', '¡Hola! Soy el asistente virtual de Mary. ¿En qué puedo ayudarte?') }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentStreamedContent, setCurrentStreamedContent] = useState('');
  const chatRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setCurrentStreamedContent('');

    try {
      const chatMessages = messages.concat(userMessage);
      const response = await fetch(AI_ASSISTANT_CONFIG.apiUrl, {
        method: 'POST',
        ...AI_ASSISTANT_CONFIG.fetchConfig,
        body: JSON.stringify({ messages: chatMessages }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedContent = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value);
        accumulatedContent += chunk;
        setCurrentStreamedContent(accumulatedContent);
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: accumulatedContent }]);
    } catch (error) {
      console.error('Error al procesar el mensaje:', error);
      setMessages((prev) => [
        ...prev,
        { 
          role: 'assistant', 
          content: t('ai.error', 'Lo siento, ha ocurrido un error. Por favor, intenta de nuevo.')
        },
      ]);
    } finally {
      setIsLoading(false);
      setCurrentStreamedContent('');
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, currentStreamedContent]);

  return (
    <div 
      className={`fixed bottom-4 right-4 z-50 ${
        isMinimized ? 'w-auto' : 'w-full md:w-96'
      } max-w-[95vw] transition-all duration-300 ease-in-out`}
    >
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/80 text-black p-4 rounded-full shadow-[0_0_15px_rgba(0,255,127,0.5)] transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12 flex items-center justify-center hover:shadow-[0_0_25px_rgba(0,255,127,0.7)]"
        >
          <FaRobot className="text-2xl" />
        </button>
      ) : (
        <div className="bg-black/90 rounded-2xl shadow-[0_0_20px_rgba(0,255,127,0.3)] overflow-hidden transform transition-all duration-300 ease-in-out border border-primary/30">
          <div className="bg-primary/90 text-black p-4 rounded-t-2xl flex justify-between items-center backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="bg-black/10 p-2 rounded-full">
                <FaRobot className="text-xl" />
              </div>
              <span className="font-bold text-black/90">{t('ai.title')}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-black/10 p-2 rounded-full transition-colors duration-300"
              >
                <FaChevronUp
                  className={`transform transition-transform duration-300 text-black/90 ${
                    isMinimized ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-black/10 p-2 rounded-full transition-colors duration-300"
              >
                <FaTimes className="text-black/90" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div
                ref={chatRef}
                className="h-[50vh] md:h-[450px] overflow-y-auto p-4 md:p-6 space-y-6 bg-black/95"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, rgba(0,255,127,0.15) 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    } animate-fadeIn`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-primary text-black font-medium ml-4 shadow-[0_0_10px_rgba(0,255,127,0.3)]'
                          : 'bg-gray-900/80 text-gray-300 shadow-md mr-4 border border-primary/20 shadow-[0_0_10px_rgba(0,255,127,0.1)]'
                      } transform transition-all duration-300 hover:scale-[1.02]`}
                    >
                      <ReactMarkdown components={MarkdownComponents}>
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}
                {currentStreamedContent && (
                  <div className="flex justify-start animate-fadeIn">
                    <div className="max-w-[80%] p-4 rounded-2xl bg-gray-900/80 text-gray-300 shadow-md mr-4 border border-primary/20 shadow-[0_0_10px_rgba(0,255,127,0.1)] transform transition-all duration-300 hover:scale-[1.02]">
                      <ReactMarkdown components={MarkdownComponents}>
                        {currentStreamedContent}
                      </ReactMarkdown>
                    </div>
                  </div>
                )}
                {isLoading && !currentStreamedContent && (
                  <div className="flex justify-start animate-fadeIn">
                    <div className="bg-gray-900/80 shadow-md p-4 rounded-2xl mr-4 flex items-center gap-2 border border-primary/20">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <span className="text-gray-400 font-medium">{t('ai.thinking')}</span>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-4 border-t border-primary/20 bg-black/95">
                <div className="flex gap-3 items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t('ai.placeholder')}
                    className="flex-1 p-3 rounded-xl border border-primary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-900 text-gray-300 placeholder-gray-500 font-medium"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary hover:bg-primary/80 text-black font-medium p-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 flex items-center gap-2 shadow-[0_0_10px_rgba(0,255,127,0.3)] hover:shadow-[0_0_15px_rgba(0,255,127,0.5)]"
                  >
                    <FaPaperPlane className="text-sm" />
                    <span>{t('ai.send')}</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AIAssistant; 