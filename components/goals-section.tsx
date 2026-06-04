'use client';

import { motion } from 'framer-motion';
import { Ban, Smartphone, Zap, Moon, Dumbbell } from 'lucide-react';

export default function GoalsSection() {
  const goals = [
    {
      icon: Ban,
      title: 'Quit Smoking',
      description: 'Break bad habits and reclaim your health.',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Smartphone,
      title: 'Reduce Phone Usage',
      description: 'Take back your attention.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Improve Productivity',
      description: 'Get more done every day.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Moon,
      title: 'Improve Sleep Quality',
      description: 'Sleep deeper and wake refreshed.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Dumbbell,
      title: 'Fitness & Health',
      description: 'Build a healthier lifestyle.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="challenges" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
            Choose Your Transformation
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, boxShadow: '0 20px 50px rgba(139, 92, 246, 0.3)' }}
                className="group cursor-pointer"
              >
                <div className={`relative h-72 rounded-2xl bg-gradient-to-br ${goal.gradient} p-8 overflow-hidden glass-card`}>
                  {/* Animated Background Gradient */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                  />

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: 'spring' }}
                        className="w-16 h-16 rounded-lg bg-white/20 p-3 mb-4 flex items-center justify-center"
                      >
                        <Icon className="w-full h-full text-white" />
                      </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-2">{goal.title}</h3>
                    <p className="text-white/80 leading-relaxed">{goal.description}</p>
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Get Started</span>
                    <span>→</span>
                  </motion.div>
                </div>

                {/* Progress Preview Bar */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{
                    width: ['0%', '100%', '0%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
