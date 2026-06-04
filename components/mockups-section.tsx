'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const mockups = [
  {
    image: '/mockups/mockup1_streakzen.png',
    title: 'Beautiful Onboarding Experience',
    description:
      'Start your self-improvement journey with a stunning onboarding flow, seamless authentication, and an intuitive account setup experience.',
  },
  {
    image: '/mockups/mockup2_streakzen.png',
    title: 'Daily Challenges & Habit Tracking',
    description:
      'Complete daily tasks, earn XP, maintain streaks, and stay motivated with personalized AI-powered challenges.',
  },
  {
    image: '/mockups/mockup3_streakzen.png',
    title: 'Progress Analytics & Level System',
    description:
      'Visualize your growth through detailed progress tracking, habit calendars, level progression, and milestone rewards.',
  },
  {
    image: '/mockups/mockup4_streakzen.png',
    title: 'Achievements & Smart Reminders',
    description:
      'Unlock achievements, configure reminder schedules, and build long-term consistency with gamified productivity systems.',
  },
]

export function MockupsSection() {
  return (
    <section
      id="screenshots"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
            APP EXPERIENCE
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white">
            Designed For
            <span className="block gradient-text">
              Daily Success
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/70">
            Explore the complete StreakZen experience. Build habits,
            complete challenges, level up your life, and achieve your goals.
          </p>
        </motion.div>

        {/* Mockups */}
        <div className="space-y-40">
          {mockups.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 blur-3xl rounded-[40px]" />

                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1400}
                    height={900}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div>
                <div className="inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm font-medium">
                  Feature {index + 1}
                </div>

                <h3 className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
                  <span className="text-sm text-purple-300">
                    StreakZen Productivity System
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}