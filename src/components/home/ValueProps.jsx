import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Sparkles, Award, Users, HeadphonesIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ValueProps({ translations }) {
  const { value } = translations.home;

  const values = [
    { icon: Sparkles, title: value.innovation.title, desc: value.innovation.desc, color: 'blue' },
    { icon: Award, title: value.quality.title, desc: value.quality.desc, color: 'cyan' },
    { icon: Users, title: value.expertise.title, desc: value.expertise.desc, color: 'purple' },
    { icon: HeadphonesIcon, title: value.support.title, desc: value.support.desc, color: 'green', link: createPageUrl('SupportDetail') }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    cyan: 'from-cyan-500 to-cyan-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600'
  };

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {value.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => {
            const content = (
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[item.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                {item.link ? <Link to={item.link} className="h-full block">{content}</Link> : content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}