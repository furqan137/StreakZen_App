'use client';

import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'AI Coach', href: '#ai-coach' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Privacy', href: '/privacy' },
];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-purple-500/20 m-4 md:mx-8 rounded-2xl backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="StreakZen Logo"
              width={48}
              height={48}
              priority
              className="rounded-2xl shadow-[0_0_25px_rgba(168,85,247,0.45)]"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                StreakZen
              </h1>
              <p className="text-[10px] text-purple-300 -mt-1">
                AI Habit Tracker
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="px-3 py-2 text-sm text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm border border-purple-500/50 text-purple-300 rounded-lg hover:border-purple-400 hover:bg-purple-500/10 transition-all"
            >
              Sign In
            </motion.button>

            <motion.a
              href="https://github.com/furqan137/StreakZen/releases/download/v1.0.0/streakzen.apk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all glow-purple"
            >
              <Download size={16} />
              Download App
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden pb-4 pt-2 space-y-2"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm text-gray-300 hover:text-purple-400"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3 space-y-2">
             <motion.a
  href="/privacy"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-4 py-2 text-sm border border-purple-500/50 text-purple-300 rounded-lg hover:border-purple-400 hover:bg-purple-500/10 transition-all"
>
  Privacy Policy
</motion.a>

              <a
                href="https://github.com/furqan137/StreakZen/releases/download/v1.0.0/streakzen.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg"
              >
                <Download size={16} />
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}