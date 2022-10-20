import React from 'react';
import { useTranslation } from 'react-i18next';

import { SafeArea, ScrollView } from '@/components/ui';
import HeaderSection from './components/header-section.component';
import MovieSection from './components/movie-section.component';

const HomeContainer = () => {
  const { t } = useTranslation();

  return (
    <SafeArea testID="home-screen">
      <ScrollView>
        <HeaderSection />
        <MovieSection section="popular" title={t('labels.whatsPopular')} />
        <MovieSection section="top_rated" title={t('labels.topRated')} />
        <MovieSection section="upcoming" title={t('labels.upcoming')} />
        <MovieSection section="now_playing" title={t('labels.nowPlaying')} />
      </ScrollView>
    </SafeArea>
  );
};

export default HomeContainer;
