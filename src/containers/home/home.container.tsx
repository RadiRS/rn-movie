import React from 'react';
import { useTranslation } from 'react-i18next';

import { SafeArea, ScrollView } from '@/components/ui';

import HeaderSection from './components/header-section.component';
import MovieSection from './components/movie-section.component';

const HomeContainer = () => {
  const { t } = useTranslation();
  return (
    <SafeArea>
      <ScrollView>
        <HeaderSection />
        <MovieSection title={t('labels.whatsPopular')} />
        <MovieSection title={t('labels.freeToWatch')} />
        <MovieSection title={t('labels.latestTrailers')} />
        <MovieSection title={t('labels.trending')} />
      </ScrollView>
    </SafeArea>
  );
};

export default HomeContainer;
