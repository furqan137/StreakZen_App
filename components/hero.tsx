'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-4">
      {/* Animated Background Orbs */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -left-40 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-1/3 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-balance"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Transform Your Life
                </span>
                <br />
                <span className="text-white">One Streak At A Time</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Build better habits, improve productivity, sleep better, stay fit, and stay motivated with AI-powered daily coaching.
              </motion.p>
            </div>

            {/* CTA Buttons */}
      {/* CTA Buttons */}
<motion.div
  className="flex flex-col sm:flex-row gap-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
>
  <motion.a
    href="https://github.com/furqan137/StreakZen/releases/download/v1.0.0/streakzen.apk"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      scale: 1.05,
      boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)',
    }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all glow-purple text-center"
  >
    Download App
  </motion.a>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 border border-purple-500/50 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-purple-500/10 transition-all"
  >
    <Play size={20} />
    Watch Demo
  </motion.button>
</motion.div>
          </motion.div>

          {/* Right Side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-full flex items-center justify-center"
          >
            {/* Phone Frame */}
            <motion.div
              className="relative w-64 h-96 bg-gradient-to-b from-gray-900 to-black rounded-3xl border-8 border-gray-800 shadow-2xl glow-purple floating"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Phone Screen */}
              {/* Phone Screen */}
<div className="absolute inset-4 rounded-[20px] overflow-hidden bg-black">
  <Image
    src="/heroframe.png"
    alt="StreakZen App"
    fill
    priority
    className="object-cover"
  />
</div>

              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl border-x-2 border-gray-800" />
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute -inset-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
