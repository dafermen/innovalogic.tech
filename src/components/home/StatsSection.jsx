import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Globe, Award } from 'lucide-react';

export default function StatsSection({ translations }) {
  const { stats } = translations.home;

  const statsData = [
    { icon: Briefcase, value: '150+', label: stats.projects, color: 'blue' },
    { icon: Users, value: '80+', label: stats.clients, color: 'cyan' },
    { icon: Globe, value: '15+', label: stats.countries, color: 'purple' },
    { icon: Award, value: '8+', label: stats.experience, color: 'green' }
  ];

  const colorClasses = {
    blue: 'bg-blue-500',
    cyan: 'bg-cyan-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500'
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colorClasses[stat.color]} bg-opacity-10 mb-4`}>
                <stat.icon className={`w-8 h-8 ${colorClasses[stat.color].replace('bg-', 'text-')}`} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}