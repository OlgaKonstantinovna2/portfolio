'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { VKIcon, TelegramIcon } from '@/components/SocialIcons';
import { ReactIcon, NextJSIcon, TypeScriptIcon, TailwindIcon, ReduxIcon, SvelteIcon, FigmaIcon, GitIcon } from '@/components/TechIcons';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Ольга Бурдина
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Frontend-разработчик
            </p>
            <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
              Создаю высокопроизводительные веб-приложения с использованием React, Next.js и современных технологий
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/about">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Обо мне
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="px-8 py-3 border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Портфолио
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a href="mailto:olyaburdina90@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:+79521555717" className="text-gray-400 hover:text-white transition-colors">
              <Phone size={24} />
            </a>
            <a href="https://vk.com/your_username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <VKIcon size={24} />
            </a>
            <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <TelegramIcon size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <Link href="/contact">
              <button className="px-6 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full font-medium transition-all duration-300">
                Связаться со мной
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ArrowDown className="text-white animate-bounce w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Основные технологии
            </h2>
            <p className="text-xl text-gray-400 mb-4">
              Современный стек для создания качественных приложений
            </p>
            <p className="text-lg text-gray-500">
              И ещё 30+ технологий в арсенале
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { name: 'React', icon: ReactIcon, color: 'text-blue-400' },
              { name: 'Next.js', icon: NextJSIcon, color: 'text-white' },
              { name: 'TypeScript', icon: TypeScriptIcon, color: 'text-blue-500' },
              { name: 'Tailwind CSS', icon: TailwindIcon, color: 'text-cyan-400' },
              { name: 'Redux', icon: ReduxIcon, color: 'text-purple-400' },
              { name: 'Svelte', icon: SvelteIcon, color: 'text-orange-400' },
              { name: 'Figma', icon: FigmaIcon, color: 'text-pink-400' },
              { name: 'Git', icon: GitIcon, color: 'text-red-400' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <tech.icon size={48} className={tech.color} />
                </div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Посмотреть все навыки и технологии
              </motion.button>
            </Link>
            <p className="text-gray-400 mt-4">
              Подробная информация на странице "Обо мне"
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
