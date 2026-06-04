'use client';

import { motion } from 'framer-motion';
import { Flame, Target, BarChart3 } from 'lucide-react';

export default function AppShowcase() {
  const screens = [
    {
      title: 'Home Dashboard',
      features: ['Daily Streak', 'XP Progress', 'AI Motivation'],
      icon: Flame,
    },
    {
      title: 'Challenges',
      features: ['Daily Tasks', 'Difficulty Levels', 'Rewards'],
      icon: Target,
    },
    {
      title: 'Analytics',
      features: ['Progress Graphs', 'Statistics', 'Insights'],
      icon: BarChart3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-cyan-600/10"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
            Experience StreakZen In Action
          </h2>
          <p className="text-lg text-gray-400">Seamlessly integrated features across all screens</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {screens.map((screen, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -20, boxShadow: '0 30px 60px rgba(139, 92, 246, 0.3)' }}
              className="relative"
            >
              {/* Phone Frame */}
              <motion.div
                className="relative w-full max-w-sm mx-auto h-96 bg-gradient-to-b from-gray-900 to-black rounded-3xl border-8 border-gray-800 shadow-2xl glow-purple"
                whileHover={{ scale: 1.02 }}
              >
                {/* Phone Screen */}
                <div className="absolute inset-4 bg-gradient-to-b from-purple-900/40 to-black rounded-2xl overflow-hidden p-4">
                  <div className="h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between text-xs text-gray-400 mb-4">
                      <span>9:41</span>
                      <div className="flex gap-1 text-gray-400">
                        <span>📶</span>
                        <span>🔋</span>
                      </div>
                    </div>

                    {/* Screen Content */}
                    <div className="flex-1 flex flex-col justify-center items-center text-center gap-4">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                      >
                        {(() => {
                          const Icon = screen.icon;
                          return <Icon className="w-6 h-6 text-white" />;
                        })()}
                      </motion.div>

                      <h3 className="text-lg font-bold text-white">{screen.title}</h3>

                      <div className="space-y-2">
                        {screen.features.map((feature, fIndex) => (
                          <motion.div
                            key={fIndex}
                            className="text-xs text-gray-300 bg-white/10 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2 justify-center"
                            whileInView={{ x: [-10, 0] }}
                            transition={{ delay: fIndex * 0.1 }}
                          >
                            <span className="text-purple-400">✓</span>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl border-x-2 border-gray-800" />
              </motion.div>

              {/* Glow Background */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ opacity: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
