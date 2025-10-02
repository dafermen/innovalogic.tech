import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/i18n/LanguageContext';
import { useTranslation } from '../components/i18n/translations';
import { servicesData } from '../components/data/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2, Cpu, Code, Zap, BarChart, Network, Lightbulb } from 'lucide-react';

export default function ServiceDetail() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [service, setService] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (id) {
      const allServices = servicesData.en.concat(servicesData.es);
      const found = allServices.find(s => s.id === id);
      if (found) {
        const correctLangService = servicesData[language].find(s => s.id === id) || found;
        setService(correctLangService);
      }
    }
  }, [language]);

  const iconMap = {
    cpu: Cpu,
    code: Code,
    zap: Zap,
    'bar-chart': BarChart,
    network: Network,
    lightbulb: Lightbulb
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t.common.loading}</h2>
          <Link to={createPageUrl('Services')}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t.common.backTo} {t.nav.services}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Cpu;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Link to={createPageUrl('Services')}>
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t.common.backTo} {t.nav.services}
            </Button>
          </Link>

          <div className="flex items-center gap-6 mb-8">
             <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <Icon className="w-12 h-12 text-white" />
              </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {service.name}
              </h1>
              <p className="text-xl text-gray-600 mt-2">{service.short}</p>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-md">
                <CardContent className="p-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {service.long_desc}
                    </p>
                </CardContent>
            </Card>

            <Card className="border-none shadow-md">
                <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {language === 'en' ? 'Key Features' : 'Características Clave'}
                    </h2>
                    <ul className="space-y-3">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 font-medium">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}