'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does StreakZen work?',
      answer: 'StreakZen uses AI to create personalized daily challenges and motivation. Set your goals, complete daily challenges, and build streaks. The AI coach adapts to your progress and provides personalized guidance.',
    },
    {
      question: 'Can I use it offline?',
      answer: 'Yes! StreakZen works offline. Track your habits and complete challenges without internet. Your data syncs automatically when you reconnect.',
    },
    {
      question: 'Does AI motivation work every day?',
      answer: 'Absolutely. The AI coach learns your preferences and sends personalized motivation every day. It adapts based on your feedback and progress.',
    },
    {
      question: 'Can I change goals?',
      answer: 'Yes, you can change your goals at any time. Simply update your goals in the app, and the AI will create new challenges aligned with your new objectives.',
    },
    {
      question: 'Is Premium worth it?',
      answer: 'Premium unlocks unlimited challenges, advanced analytics, streak recovery, and premium rewards. Most users see significant improvements with Premium within the first month.',
    },
  ];

  return (
    <section id="faq" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">Get answers to common questions</p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card overflow-hidden"
            >
              <motion.button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full px-6 md:px-8 py-4 md:py-6 flex items-center justify-between hover:bg-white/10 transition-colors"
                whileHover={{ paddingLeft: 32, paddingRight: 32 }}
              >
                <h3 className="text-base md:text-lg font-semibold text-white text-left">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{ rotate: expanded === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-purple-400" />
                </motion.div>
              </motion.button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expanded === index ? 'auto' : 0,
                  opacity: expanded === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-gray-700/50"
              >
                <p className="px-6 md:px-8 py-4 md:py-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
