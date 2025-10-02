import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/i18n/LanguageContext';
import { useTranslation } from '../components/i18n/translations';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Handshake } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const values = [
    { icon: Award, title: t.about.values.excellence.title, desc: t.about.values.excellence.desc, color: 'blue' },
    { icon: Target, title: t.about.values.innovation.title, desc: t.about.values.innovation.desc, color: 'cyan' },
    { icon: Users, title: t.about.values.integrity.title, desc: t.about.values.integrity.desc, color: 'purple' },
    { icon: Handshake, title: t.about.values.collaboration.title, desc: t.about.values.collaboration.desc, color: 'green' }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    cyan: 'from-cyan-500 to-cyan-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.about.title}
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  {t.about.mission.title}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed text-center">
                  {t.about.mission.text}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
            >
              {t.about.values.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[value.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  {t.about.leadership.title}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed text-center">
                  {t.about.leadership.text}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}