'use client';

import { motion } from 'framer-motion';
import { Brain, Target, Flame, BarChart3, Wifi, Bell } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI Motivation',
      description: 'Receive personalized daily motivation powered by AI.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'Daily Challenges',
      description: 'Fresh goal-specific challenges every day.',
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: Flame,
      title: 'Streak Tracking',
      description: 'Build momentum and never break your streak.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: BarChart3,
      title: 'Progress Analytics',
      description: 'Visualize your growth with detailed insights.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Wifi,
      title: 'Offline Mode',
      description: 'Track habits even without internet.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Stay on track with intelligent reminders.',
      color: 'from-pink-500 to-purple-500',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
            Everything You Need To Stay Consistent
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)' }}
                className="glass-card p-6 md:p-8 group cursor-pointer"
              >
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-full h-full text-white" />
                </motion.div>

                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>

                <motion.div
                  className="mt-4 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
