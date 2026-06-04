'use client';

import { motion } from 'framer-motion';
import { Apple, Download } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -left-40 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
            Start Building Better Habits Today
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of users transforming their lives with StreakZen.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all glow-purple flex items-center justify-center gap-2"
            >
              <Apple size={20} /> Download for iOS
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-cyan-500/50 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-500/10 transition-all glow-cyan"
            >
              <Download size={20} /> Download for Android
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
