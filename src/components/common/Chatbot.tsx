import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  X,
  Send,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Loader2,
  ChevronDown
} from 'lucide-react';
import { CHATBOT_CONFIG, SITE_CONFIG } from '../../constants/config';
import { PROJECTS_DATA, SKILL_CATEGORIES } from '../../data/portfolioData';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  isError?: boolean;
}

// Helper to format bot text (bold, links, bullet points)
const formatBotText = (text: string) => {
  // Split into lines for list processing
  const lines = text.split('\n');

  return lines.map((line, lineIndex) => {
    // Check if line is a bullet item
    const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('* ');
    const cleanedLine = isBullet ? line.replace(/^[\s•*-]+/, '').trim() : line;

    // Parse bold text and markdown links [text](url)
    const parts = [];
    let remaining = cleanedLine;
    let keyIdx = 0;

    // Regex to match [text](url) or **bold**
    const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/;

    while (remaining.length > 0) {
      const match = remaining.match(tokenRegex);
      if (!match) {
        parts.push(<span key={keyIdx++}>{remaining}</span>);
        break;
      }

      const matchIndex = match.index || 0;
      if (matchIndex > 0) {
        parts.push(<span key={keyIdx++}>{remaining.slice(0, matchIndex)}</span>);
      }

      if (match[2] && match[3]) {
        // Link match: match[2] is label, match[3] is url
        parts.push(
          <a
            key={keyIdx++}
            href={match[3]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 hover:underline font-medium inline-flex items-center gap-0.5"
          >
            {match[2]}
            <ExternalLink className="w-3 h-3 inline ml-0.5" />
          </a>
        );
      } else if (match[4]) {
        // Bold match: match[4] is bold text
        parts.push(
          <strong key={keyIdx++} className="font-semibold text-slate-900 dark:text-white">
            {match[4]}
          </strong>
        );
      }

      remaining = remaining.slice(matchIndex + match[0].length);
    }

    if (isBullet) {
      return (
        <li key={lineIndex} className="ml-4 list-disc my-1 pl-1">
          {parts}
        </li>
      );
    }

    if (line.trim() === '') {
      return <div key={lineIndex} className="h-2" />;
    }

    return (
      <p key={lineIndex} className="my-1 leading-relaxed">
        {parts}
      </p>
    );
  });
};

let messageCounter = 0;
const generateId = (prefix: string) => `${prefix}-${++messageCounter}`;
const getTimeString = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

// Local fallback answering engine in case n8n cloud webhook is down or times out
const getLocalPortfolioAnswer = (query: string): string => {
  const q = query.toLowerCase();

  if (q.includes('project') || q.includes('work') || q.includes('build')) {
    const list = PROJECTS_DATA.slice(0, 3)
      .map((p) => `• **${p.title}**: ${p.description} (Tech: ${p.techStack.slice(0, 4).join(', ')})`)
      .join('\n');
    return `Ankit has engineered several key projects:\n\n${list}\n\nYou can explore all of them in the **[Projects Section](#projects)**!`;
  }

  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language')) {
    const allSkills = SKILL_CATEGORIES.map(
      (c) => `• **${c.title}**: ${c.skills.map((s) => s.name).join(', ')}`
    ).join('\n');
    return `Here are Ankit's core technical skills:\n\n${allSkills}\n\nHe specializes in **C++**, **React**, **Node.js**, and **DSA**!`;
  }

  if (q.includes('leetcode') || q.includes('dsa') || q.includes('problem') || q.includes('codechef')) {
    return `Ankit is active in competitive programming & DSA:\n\n• **LeetCode**: Solved **250+ DSA problems** primarily in C++.\n• **CodeChef**: 500 Difficulty Rating & C++ STL Certification.\n\nCheck out his **[LeetCode Profile](${SITE_CONFIG.socials.leetcode})** and **[CodeChef Profile](${SITE_CONFIG.socials.codechef})**!`;
  }

  if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
    return `You can download Ankit's full verified resume here:\n\n📄 **[Download Ankit Kumar Resume](${SITE_CONFIG.resume.url})**\n\nOr click the **Get Resume** button at the top of the page!`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('phone')) {
    return `You can connect directly with Ankit:\n\n• 📧 **Email**: [${SITE_CONFIG.email}](mailto:${SITE_CONFIG.email})\n• 📱 **Phone**: ${SITE_CONFIG.phone}\n• 💼 **LinkedIn**: [Ankit Yadav on LinkedIn](${SITE_CONFIG.socials.linkedin})\n• 🐙 **GitHub**: [Ankit-kumar2764](${SITE_CONFIG.socials.github})\n• 📍 **Location**: ${SITE_CONFIG.location}`;
  }

  if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('cgpa')) {
    return `Ankit is pursuing his **${SITE_CONFIG.degree}** at **${SITE_CONFIG.college}** (${SITE_CONFIG.period}).\n\n• **Current CGPA**: **${SITE_CONFIG.cgpa}**\n• **Expected Graduation**: **${SITE_CONFIG.expectedGraduation}**`;
  }

  return `Ankit Kumar is a Computer Science undergraduate at **${SITE_CONFIG.college}** (CGPA: 7.32) and a Full-Stack Developer.\n\nHe has solved **250+ DSA problems on LeetCode** and built production-grade systems including **SkyOps Control Center** and **Care-Scope Analytics**.\n\nFeel free to ask about his **projects**, **skills**, **resume**, or **contact info**!`;
};

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: CHATBOT_CONFIG.welcomeMessage,
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages]);

  const toggleOpen = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        setHasUnread(false);
      }
      return next;
    });
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    const userMessage: Message = {
      id: generateId('user'),
      sender: 'user',
      text: query,
      timestamp: getTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Create controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const response = await fetch(CHATBOT_CONFIG.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: query,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      let botReply = '';

      if (data && typeof data === 'object') {
        botReply = data.reply || data.output || data.message || data.text || '';
        // If n8n workflow returned an error string in message
        if (botReply === 'Error in workflow' || !botReply) {
          botReply = getLocalPortfolioAnswer(query);
        }
      } else if (typeof data === 'string') {
        botReply = data;
      } else {
        botReply = getLocalPortfolioAnswer(query);
      }

      const botMessage: Message = {
        id: generateId('bot'),
        sender: 'bot',
        text: botReply,
        timestamp: getTimeString(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      // Fallback gracefully using verified portfolio data
      const fallbackReply = getLocalPortfolioAnswer(query);

      const botMessage: Message = {
        id: generateId('bot'),
        sender: 'bot',
        text: fallbackReply,
        timestamp: getTimeString(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: generateId('welcome'),
        sender: 'bot',
        text: CHATBOT_CONFIG.welcomeMessage,
        timestamp: getTimeString(),
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Subtle helper pill on initial load */}
        {hasUnread && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#181818] border border-purple-500/30 shadow-lg text-xs font-medium text-slate-800 dark:text-slate-200 cursor-pointer"
            onClick={toggleOpen}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-500 animate-pulse" />
            <span>Chat with Ankit&apos;s AI</span>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleOpen}
          className="relative w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white shadow-[0_4px_24px_rgba(168,85,247,0.45)] hover:shadow-[0_6px_30px_rgba(168,85,247,0.6)] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          aria-label={isOpen ? 'Close AI Chat' : "Open Ankit's AI Assistant"}
        >
          {isOpen ? (
            <ChevronDown className="w-6 h-6" />
          ) : (
            <>
              <Bot className="w-7 h-7" />
              {/* Online pulse indicator */}
              <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-[#121212]" />
              </span>
            </>
          )}
        </motion.button>
      </div>

      {/* Chat Window Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] max-h-[calc(100vh-7.5rem)] bg-white/95 dark:bg-[#181818]/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl shadow-[0_12px_45px_rgba(0,0,0,0.25)] flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-transparent border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 p-0.5 flex items-center justify-center text-white shadow-md">
                  <Bot className="w-5 h-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-[#181818]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    {CHATBOT_CONFIG.botName}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>n8n AI Powered • Ready</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Clear conversation"
                  className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-[13px] scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-none'
                        : 'bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 rounded-bl-none'
                    }`}
                  >
                    {msg.sender === 'bot' ? formatBotText(msg.text) : msg.text}
                  </div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 px-4 py-2.5 rounded-2xl rounded-bl-none max-w-[120px]">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-500" />
                  <span className="text-xs font-medium">Thinking...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-4 py-2 bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800/80">
              <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-400" /> Suggested Questions
              </div>
              <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {CHATBOT_CONFIG.suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    disabled={isLoading}
                    className="whitespace-nowrap text-[11px] px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-purple-900/30 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white dark:bg-[#181818] border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Ankit's projects, skills..."
                disabled={isLoading}
                className="flex-1 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:border-purple-500 focus:bg-white dark:focus:bg-slate-950 dark:text-white outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity flex items-center justify-center shadow-md shadow-purple-500/20"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};