'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Share, Share2, Heart } from 'lucide-react';

export default function Footer() {
  const links = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Privacy Policy', href: '#' },
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Terms', href: '#' },
    ],
    social: [
      { icon: Share, href: '#', label: 'Twitter' },
      { icon: Share2, href: '#', label: 'Instagram' },
      { icon: Heart, href: '#', label: 'LinkedIn' },
    ],
  };

  return (
    <footer className="relative border-t border-gray-800/50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12"
        >
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="StreakZen Logo"
                width={50}
                height={50}
                className="rounded-2xl shadow-[0_0_25px_rgba(168,85,247,0.5)]"
              />

              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  StreakZen
                </h2>

                <p className="text-xs text-purple-300">
                  AI Habit Tracker
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Build habits, stay consistent, achieve goals, and transform
              your life with AI-powered productivity.
            </p>
          </motion.div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Product
            </h3>

            <div className="space-y-3">
              {links.product.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Company
            </h3>

            <div className="space-y-3">
              {links.company.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-3">
              {links.social.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{
                      scale: 1.15,
                      y: -4,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-purple-400 hover:text-pink-400 hover:bg-purple-500/10 transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-gray-800/50 pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-500"
          >
            © {new Date().getFullYear()} StreakZen. All rights reserved.
            Built with ❤️ for habit builders.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}