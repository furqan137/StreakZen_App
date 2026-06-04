'use client';

import { motion } from 'framer-motion';
import { Send, Target, TrendingUp } from 'lucide-react';

export default function AICoachSection() {
  const messages = [
    { type: 'user', text: "I'm struggling to stay productive." },
    { type: 'ai', text: 'Start with a 10-minute focus session. Small wins create momentum.' },
    { type: 'user', text: 'How do I stay motivated?' },
    { type: 'ai', text: 'Track your streaks and celebrate small wins. Your progress matters.' },
  ];

  return (
    <section id="ai-coach" className="relative py-20 px-4 overflow-hidden">
      {/* Background Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
            Your Personal AI Growth Coach
          </h2>
          <p className="text-lg text-gray-400">Get personalized guidance whenever you need it</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 h-96 md:h-[450px] flex flex-col"
          >
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-none'
                        : 'bg-gray-800/50 text-gray-100 rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask your AI coach..."
                className="flex-1 bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                <Send size={20} />
              </motion.button>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ x: 10 }}
              className="glass-card p-6 cursor-pointer group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                💬 Personalized Advice
              </h3>
              <p className="text-gray-400 text-sm">
                Get tailored guidance based on your goals and habits.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="glass-card p-6 cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-pink-400" />
                <h3 className="text-lg font-semibold text-white group-hover:text-pink-300 transition-colors">
                  Goal Setting
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                AI helps you create realistic, achievable goals.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="glass-card p-6 cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  Progress Tracking
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                Get insights into your improvement over time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
