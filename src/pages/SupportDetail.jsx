import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/i18n/LanguageContext';
import { useTranslation } from '../components/i18n/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Clock, Users, ArrowLeft } from 'lucide-react';

export default function SupportDetail() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const support = t.supportDetail;

  const contactMethods = [
    { icon: Phone, label: support.contact.phone, value: support.contact.phoneValue, href: `tel:${support.contact.phoneValue}` },
    { icon: Mail, label: support.contact.email, value: support.contact.emailValue, href: `mailto:${support.contact.emailValue}` },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Link to={createPageUrl('Home')}>
            <motion.button
              className="flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 font-medium"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              {t.common.backTo} {t.nav.home}
            </motion.button>
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {support.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {support.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  {support.hours.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">{support.hours.standard}</h3>
                  <p className="text-gray-600">{support.hours.standardHours}</p>
                </div>
                <div>
                  <h3 className="font-semibold">{support.hours.premium}</h3>
                  <p className="text-gray-600">{support.hours.premiumHours}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  {support.contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map(method => (
                  <div key={method.label} className="flex items-center gap-3">
                    <method.icon className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">{method.label}</div>
                      <a href={method.href} className="font-semibold text-blue-600 hover:underline">
                        {method.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-lg bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl">{support.team.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {support.team.text}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}