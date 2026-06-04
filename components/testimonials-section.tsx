'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: 'StreakZen helped me quit smoking after 8 years. The AI coach was incredibly supportive.',
      author: 'Sarah Chen',
      role: 'Designer',
      avatar: '/avatars/sarah-chen.png',
      rating: 5,
    },
    {
      text: 'I reduced my screen time by 60% in just 3 months. The gamification keeps me hooked!',
      author: 'Marcus Williams',
      role: 'Entrepreneur',
      avatar: '/avatars/marcus-williams.png',
      rating: 5,
    },
    {
      text: 'My productivity doubled after using StreakZen. Best investment for myself this year.',
      author: 'Emma Rodriguez',
      role: 'Software Engineer',
      avatar: '/avatars/emma-rodriguez.png',
      rating: 5,
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
    <section id="testimonials" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
            Loved by Thousands
          </h2>
          <p className="text-lg text-gray-400">Real stories from real users</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(139, 92, 246, 0.2)' }}
              className="glass-card p-6 md:p-8 flex flex-col h-full"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 flex-1">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-500/50 flex-shrink-0"
                >
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
