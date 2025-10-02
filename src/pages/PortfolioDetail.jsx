import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/i18n/LanguageContext';
import { useTranslation } from '../components/i18n/translations';
import { portfolioData } from '../components/data/portfolio';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Building2, Calendar, CheckCircle2, Code } from 'lucide-react';

export default function PortfolioDetail() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (id) {
      const allProjects = portfolioData['en'].concat(portfolioData['es']);
      const found = allProjects.find(p => p.id === id);
      if (found) {
        const correctLangProject = portfolioData[language].find(p => p.id === id) || found;
        setProject(correctLangProject);
      }
    }
  }, [language, window.location.search]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t.common.loading}</h2>
          <Link to={createPageUrl('Portfolio')}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t.common.backTo} {t.nav.portfolio}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <Link to={createPageUrl('Portfolio')}>
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t.common.backTo} {t.nav.portfolio}
            </Button>
          </Link>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{t.portfolio.client}</div>
                    <div className="font-semibold">{project.client}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{t.portfolio.year}</div>
                    <div className="font-semibold">{project.year}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{t.portfolio.technologies}</div>
                    <div className="font-semibold">{project.technologies.length}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, idx) => (
              <Badge key={idx} className="bg-blue-100 text-blue-700 border-blue-200">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'The Challenge' : 'El Desafío'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Our Solution' : 'Nuestra Solución'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Results & Impact' : 'Resultados e Impacto'}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, idx) => (
                  <Card key={idx} className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-medium">{result}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Technologies Used' : 'Tecnologías Utilizadas'}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="text-base px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}