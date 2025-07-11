'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

export default function About() {
  const experience = [
    {
      period: "Январь 2023 — настоящее время",
      duration: "2 года 7 месяцев",
      company: "Индивидуальное предпринимательство / фриланс",
      location: "Томск",
      position: "Фронтенд-разработчик, Веб-дизайнер",
      achievements: [
        "Разработка пользовательских интерфейсов и веб-приложений с нуля на React и Next.js",
        "Интеграция с REST API, настройка авторизации, обработка ошибок",
        "Создание адаптивной и кроссбраузерной верстки по макетам из Figma",
        "Разработка архитектуры компонентов, использование Redux и Redux-Saga",
        "Оптимизация производительности, улучшение UX",
        "Настройка маршрутизации, защита маршрутов, реализация форм с валидацией",
        "Проведение ручного тестирования интерфейсов, отладка UI-компонентов"
      ]
    },

    {
      period: "Октябрь 2022 — Январь 2023",
      duration: "4 месяца",
      company: "Surreal (стартап)",
      location: "Москва",
      position: "Frontend-разработчик",
      achievements: [
        "Разработка интерфейсов Web3-приложения с использованием Next.js и Tailwind",
        "Интеграция с REST API и взаимодействие со смарт-контрактами (ERC20) через Wagmi",
        "Подключение кошельков (Metamask, WalletConnect)",
        "Реализация анимаций и динамического контента",
        "Работа с системой контроля версий Git (GitHub)"
      ]
    },
    {
      period: "Декабрь 2021 — Сентябрь 2022",
      duration: "10 месяцев",
      company: "Plan 9",
      location: "Томск",
      position: "Frontend-разработчик",
      achievements: [
        "Разработка архитектуры фронтенда и UI-компонентов",
        "Интеграция Web3: подключение криптокошельков, взаимодействие с контрактами ERC20, ERC721 и кастомными",
        "Работа с 3D-моделями с использованием Three.js и Babylon.js",
        "Реализация адаптивной верстки и анимаций",
        "Взаимодействие с REST API и настройка клиентской логики"
      ]
    },
    {
      period: "Июнь 2021 — Ноябрь 2021",
      duration: "6 месяцев",
      company: "EcoXch (стартап)",
      location: "Москва",
      position: "Frontend-разработчик",
      achievements: [
        "Разработка интерфейса и функциональности сервиса майнинг-пула XCH",
        "Интеграция с API, отображение пользовательской статистики",
        "Поддержка и улучшение существующего кода",
        "Работа в команде"
      ]
    },
    {
      period: "Январь 2021 — Май 2021",
      duration: "5 месяцев",
      company: "TaleStorm",
      location: "Томск",
      position: "Frontend-разработчик",
      achievements: [
        "Вёрстка приложений на React и Next.js",
        "Работа с макетами из Figma, адаптация интерфейсов под различные устройства",
        "Настройка маршрутизации, форм, состояния компонентов",
        "Работа с системами контроля версий (GitLab, GitHub)"
      ]
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Sass", "Tailwind CSS", "Styled Components", "Bootstrap", "Svelte"] },
    { category: "State Management", items: ["Redux", "Redux-Saga", "React Context"] },
    { category: "Web3", items: ["Web3.js", "Ethereum", "Smart Contracts", "ERC20", "ERC721", "Metamask", "WalletConnect"] },
    { category: "3D & Graphics", items: ["Three.js", "Babylon.js"] },
    { category: "Tools & Others", items: ["Git", "GitHub", "GitLab", "Figma", "REST API", "JSON", "Axios", "Vite"] },
    { category: "Testing & UX", items: ["UI Testing", "UX Design", "Landing Pages", "Cross-browser Development"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">


      <div className="max-w-6xl mx-auto px-4 pb-20 pt-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Обо мне
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Frontend-разработчик с 4+ годами опыта создания высокопроизводительных веб-приложений. 
            Специализируюсь на React, Next.js, TypeScript и современных веб-технологиях.
          </p>
        </motion.section>
        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Навыки и технологии
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 border-b border-purple-500 pb-2">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Опыт работы
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-slate-800 rounded-lg p-6 md:p-8 border-l-4 border-purple-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.position}</h3>
                      <div className="flex items-center text-gray-400 mb-2">
                        <Building size={16} className="mr-2" />
                        <span className="mr-4">{job.company}</span>
                        <MapPin size={16} className="mr-2" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="text-right text-gray-400">
                      <div className="flex items-center justify-end mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span>{job.period}</span>
                      </div>
                      <span className="text-sm bg-purple-600 text-white px-3 py-1 rounded-full">
                        {job.duration}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
} 