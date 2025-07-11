'use client';

import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "Web3 NFT Marketplace",
      description: "Полнофункциональная платформа для торговли NFT с интеграцией криптокошельков и смарт-контрактов",
      technologies: ["Next.js", "TypeScript", "Web3.js", "Ethereum", "Tailwind CSS", "Redux"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      features: [
        "Подключение Metamask и WalletConnect",
        "Взаимодействие со смарт-контрактами ERC721",
        "Адаптивный дизайн и анимации",
        "Система авторизации и профилей",
        "Интеграция с IPFS для хранения метаданных"
      ]
    },
    {
      title: "E-commerce Platform",
      description: "Современная платформа электронной коммерции с полным функционалом корзины и оплаты",
      technologies: ["React", "Next.js", "TypeScript", "Stripe", "Redux", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      features: [
        "Система управления товарами и категориями",
        "Корзина покупок и оформление заказов",
        "Интеграция с платежными системами",
        "Панель администратора",
        "Система отзывов и рейтингов"
      ]
    },
    {
      title: "3D Product Viewer",
      description: "Интерактивный просмотрщик 3D-моделей с возможностью кастомизации и конфигурации",
      technologies: ["React", "Three.js", "Babylon.js", "TypeScript", "WebGL"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      features: [
        "Загрузка и отображение 3D-моделей",
        "Интерактивное управление камерой",
        "Система материалов и текстур",
        "Экспорт в различные форматы",
        "Оптимизация производительности"
      ]
    },
    {
      title: "Task Management App",
      description: "Приложение для управления задачами с drag-and-drop интерфейсом и командной работой",
      technologies: ["React", "TypeScript", "Redux", "Firebase", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      features: [
        "Drag-and-drop интерфейс",
        "Система уведомлений",
        "Командная работа и права доступа",
        "Аналитика и отчеты",
        "Интеграция с календарем"
      ]
    },
    {
      title: "Crypto Dashboard",
      description: "Дашборд для отслеживания криптовалют с реальными данными и графиками",
      technologies: ["Next.js", "TypeScript", "Chart.js", "WebSocket", "REST API"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      features: [
        "Реальные данные криптовалют",
        "Интерактивные графики и диаграммы",
        "WebSocket для обновлений в реальном времени",
        "Портфолио трекинг",
        "Уведомления о ценах"
      ]
    },
    {
      title: "Landing Page Builder",
      description: "Конструктор лендингов с drag-and-drop редактором и готовыми шаблонами",
      technologies: ["React", "TypeScript", "DND Kit", "Tailwind CSS", "Framer Motion"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      features: [
        "Drag-and-drop редактор",
        "Готовые шаблоны и компоненты",
        "Редактирование в реальном времени",
        "Экспорт в HTML/CSS",
        "Система тем и стилей"
      ]
    }
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
            Портфолио
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Коллекция моих проектов, демонстрирующих навыки в разработке современных веб-приложений
          </p>
        </motion.section>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-colors"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-purple-200">Проект {index + 1}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-600 text-white px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Основные функции:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded transition-colors"
                  >
                    <Github size={16} />
                    Код
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
                  >
                    <Globe size={16} />
                    Демо
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Готовы к сотрудничеству?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Если у вас есть интересный проект или вы хотите обсудить возможности сотрудничества, 
              свяжитесь со мной любым удобным способом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:olyaburdina90@gmail.com"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Написать письмо
              </a>
              <a
                href="tel:+79521555717"
                className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Позвонить
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 