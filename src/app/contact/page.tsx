'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { VKIcon, TelegramIcon } from '@/components/SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "olyaburdina90@gmail.com",
      link: "mailto:olyaburdina90@gmail.com",
      field: "email",
      description: "Напишите мне на почту"
    },
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (952) 155-57-17",
      link: "tel:+79521555717",
      field: "phone",
      description: "Позвоните или напишите в WhatsApp"
    },
    {
      icon: VKIcon,
      title: "ВКонтакте",
      value: "vk.com/your_username",
      link: "https://vk.com/your_username",
      field: "vk",
      description: "Напишите в личные сообщения"
    },
    {
      icon: TelegramIcon,
      title: "Telegram",
      value: "@your_username",
      link: "https://t.me/your_username",
      field: "telegram",
      description: "Быстрое общение в Telegram"
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
            Связаться со мной
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Выберите удобный способ связи или напишите сообщение
          </p>
        </motion.section>

        {/* Contact Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
                    <contact.icon size={32} className="text-white" />
                  </div>
                  <button
                    onClick={() => copyToClipboard(contact.value, contact.field)}
                    className="p-3 text-gray-400 hover:text-purple-400 hover:bg-slate-600 rounded-lg transition-all duration-200"
                    title="Скопировать"
                  >
                    {copiedField === contact.field ? (
                      <Check size={20} className="text-green-400" />
                    ) : (
                      <Copy size={20} />
                    )}
                  </button>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{contact.title}</h3>
                <p className="text-gray-400 mb-4">{contact.description}</p>
                
                <a
                  href={contact.link}
                  className="text-xl text-purple-400 hover:text-purple-300 transition-colors font-medium break-all"
                >
                  {contact.value}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Simple CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="bg-slate-800 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Или напишите сообщение прямо здесь
            </h2>
            <p className="text-gray-300">
              Расскажите о вашей задаче, и я свяжусь с вами в ближайшее время
            </p>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-600 text-white p-8 rounded-xl text-center"
            >
              <CheckCircle size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Сообщение отправлено!</h3>
              <p>Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-800 rounded-xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Расскажите о вашей задаче..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Отправить сообщение
                  </>
                )}
              </button>
            </form>
          )}
        </motion.section>
      </div>
    </div>
  );
} 