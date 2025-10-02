import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/i18n/LanguageContext';
import { useTranslation } from '../components/i18n/translations';
import { portfolioData } from '../components/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Calendar, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const projects = portfolioData[language];
  const [selectedTag, setSelectedTag] = useState('all');

  const allTags = ['all', ...new Set(portfolioData['en'].flatMap(p => p.tags))];
  
  const filteredProjects = selectedTag === 'all' 
    ? projects 
    : projects.filter(p => p.tags.includes(selectedTag));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.portfolio.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? 'default' : 'outline'}
              onClick={() => setSelectedTag(tag)}
              className={selectedTag === tag ? 'bg-blue-600 hover:bg-blue-700' : ''}
            >
              {tag === 'all' ? t.portfolio.filterAll : tag}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Building2 className="w-4 h-4" />
                    {project.client}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link to={createPageUrl(`PortfolioDetail?id=${project.id}`)}>
                    <Button variant="outline" className="w-full group">
                      {t.common.learnMore}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}