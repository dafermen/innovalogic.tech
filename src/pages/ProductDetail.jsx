import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/i18n/LanguageContext';
import { useTranslation } from '../components/i18n/translations';
import { productsData } from '../components/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ProductDetail() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (id) {
      const allProducts = productsData.en.concat(productsData.es);
      const found = allProducts.find(p => p.id === id);
      if (found) {
        const correctLangProduct = productsData[language].find(p => p.id === id) || found;
        setProduct(correctLangProduct);
      }
    }
  }, [language]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t.common.loading}</h2>
          <Link to={createPageUrl('Products')}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t.common.backTo} {t.nav.products}
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
          <Link to={createPageUrl('Products')}>
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t.common.backTo} {t.nav.products}
            </Button>
          </Link>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{product.desc}</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {language === 'en' ? 'Request a Demo' : 'Solicitar una Demo'}
              </Button>
            </div>
          </div>
          
          <div className="mt-12 space-y-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {product.long_desc}
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>{language === 'en' ? 'Key Features' : 'Características Clave'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>{language === 'en' ? 'Common Use Cases' : 'Casos de Uso Comunes'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.use_cases.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}