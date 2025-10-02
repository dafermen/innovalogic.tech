import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/i18n/LanguageContext';
import { useTranslation } from '../components/i18n/translations';
import { newsData } from '../components/data/news';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar } from 'lucide-react';
import { format } from 'date-fns';

export default function NewsDetail() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (id) {
      const allNews = newsData['en'].concat(newsData['es']);
      const found = allNews.find(a => a.id === id);
      if (found) {
        // Find the correct language version
        const correctLangArticle = newsData[language].find(a => a.id === id) || found;
        setArticle(correctLangArticle);
      }
    }
  }, [language, window.location.search]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t.common.loading}</h2>
          <Link to={createPageUrl('News')}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t.common.backTo} {t.nav.news}
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
          className="max-w-4xl mx-auto"
        >
          <Link to={createPageUrl('News')}>
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t.common.backTo} {t.nav.news}
            </Button>
          </Link>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <Calendar className="w-4 h-4" />
            {format(new Date(article.date), 'MMMM d, yyyy')}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, idx) => (
              <Badge key={idx} className="bg-blue-100 text-blue-700 border-blue-200">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {article.summary}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {article.content}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}