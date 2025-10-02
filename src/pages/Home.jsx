import React from 'react';
import { useLanguage } from '../components/i18n/LanguageContext';
import { useTranslation } from '../components/i18n/translations';
import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import ValueProps from '../components/home/ValueProps';

export default function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div>
      <Hero translations={t} />
      <StatsSection translations={t} />
      <ValueProps translations={t} />
    </div>
  );
}