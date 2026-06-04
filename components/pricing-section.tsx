'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Free',
      description: 'Perfect for getting started',
      monthly: '0',
      yearly: '0',
      features: [
        'Daily Challenges',
        'Streak Tracking',
        'Basic Analytics',
        'Limited AI Motivation',
      ],
      highlighted: false,
    },
    {
      name: 'Premium',
      description: 'Unlock your full potential',
      monthly: '4.99',
      yearly: '29.99',
      features: [
        'Unlimited Challenges',
        'Unlimited AI Motivation',
        'Advanced Analytics',
        'Streak Recovery',
        'Premium Rewards',
        'Priority Support',
      ],
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="relative py-20 px-4 overflow-hidden">
      {/* Background Orbs */}
      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
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
            Unlock Your Full Potential
          </h2>
          <p className="text-lg text-gray-400">Choose the plan that works for you</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl overflow-hidden ${plan.highlighted ? '' : ''}`}
            >
              {/* Most Popular Badge */}
              {plan.highlighted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular 🎉
                  </div>
                </motion.div>
              )}

              <div
                className={`glass-card p-8 md:p-10 h-full flex flex-col ${
                  plan.highlighted ? 'ring-2 ring-purple-500/50 scale-105' : ''
                }`}
              >
                {/* Plan Name */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      ${plan.monthly}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    or ${plan.yearly} /year
                  </p>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 glow-purple'
                      : 'border border-purple-500/50 text-purple-300 hover:bg-purple-500/10'
                  }`}
                >
                  {plan.name === 'Free' ? 'Get Started' : 'Upgrade Now'}
                </motion.button>

                {/* Features List */}
                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <motion.div
                      key={fIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: fIndex * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm md:text-base">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
