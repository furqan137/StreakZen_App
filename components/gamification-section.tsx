'use client';

import { motion } from 'framer-motion';
import { Award, Star, Coins, Flame, Zap, Trophy, Gem, Sparkles, Crown } from 'lucide-react';

export default function GamificationSection() {
  const stats = [
    { label: 'Level', value: '12', icon: Award, color: 'from-purple-500 to-pink-500' },
    { label: 'XP Earned', value: '4,500', icon: Star, color: 'from-pink-500 to-orange-500' },
    { label: 'Day Streak', value: '85', icon: Coins, color: 'from-orange-500 to-red-500' },
  ];

  const achievements = [
    { icon: Flame, label: 'Fire Starter', desc: '7 day streak', color: 'from-orange-500 to-red-500' },
    { icon: Zap, label: 'Lightning Fast', desc: '100 XP daily', color: 'from-yellow-500 to-orange-500' },
    { icon: Trophy, label: 'Champion', desc: '30 day streak', color: 'from-purple-500 to-pink-500' },
    { icon: Gem, label: 'Diamond Tier', desc: 'Premium member', color: 'from-cyan-500 to-blue-500' },
    { icon: Sparkles, label: 'Star Power', desc: '1000 XP total', color: 'from-pink-500 to-purple-500' },
    { icon: Crown, label: 'Legend', desc: 'Master of habits', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20"
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
            Make Self Improvement Addictive
          </h2>
          <p className="text-lg text-gray-400">Earn rewards and unlock achievements</p>
        </motion.div>

        {/* Main Stats */}
        <div className="mb-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10, boxShadow: '0 20px 50px rgba(139, 92, 246, 0.3)' }}
                  className={`glass-card p-8 text-center relative overflow-hidden group cursor-pointer`}
                >
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} p-3 mx-auto mb-4`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </motion.div>

                    <motion.div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </motion.div>

                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Unlock Achievements
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glass-card p-4 text-center cursor-pointer group"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${achievement.color} p-2 mx-auto mb-2 flex items-center justify-center`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </motion.div>

                  <h4 className="text-xs md:text-sm font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {achievement.label}
                  </h4>

                  <p className="text-xs text-gray-400">{achievement.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
