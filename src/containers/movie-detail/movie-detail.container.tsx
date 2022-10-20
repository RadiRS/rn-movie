import React from 'react';
import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { useGetMovieQuery } from '@/services/movie';
import { SafeArea, ScrollView, Text, Spinner, View } from '@/components/ui';

import BannerSection from './components/banner-section.component';

interface MovieDetailContainerProps {
  params: { id: number };
  key: string;
  name: string;
}

const MovieDetailContainer = () => {
  const router = useRoute<MovieDetailContainerProps>();
  const { t } = useTranslation();

  const id = router.params?.id;
  const styles = useStyles();

  const { data, isLoading } = useGetMovieQuery(id);

  return (
    <SafeArea testID="movie-detail-screen" style={styles.container}>
      <ScrollView>
        <BannerSection data={data} />
        <View padder>
          <Text variant="title-small">{t('labels.overview')}</Text>
          <Text>{data?.overview}</Text>
        </View>
        <View padder>
          <Text variant="title-small">{t('labels.status')}</Text>
          <Text>{data?.status}</Text>
        </View>
        <View padder>
          <Text variant="title-small">{t('labels.originalLanguage')}</Text>
          <Text>{data?.original_language.toUpperCase()}</Text>
        </View>
        <View padder>
          <Text variant="title-small">{t('labels.budget')}</Text>
          <Text>{data?.budget || '-'}</Text>
        </View>
        <View padder>
          <Text variant="title-small">{t('labels.revenue')}</Text>
          <Text>{data?.revenue}</Text>
        </View>
      </ScrollView>
      <Spinner isFull isVisible={isLoading} />
    </SafeArea>
  );
};

const useStyles = () => {
  return StyleSheet.create({
    container: {},
    bannerContainer: {
      height: 200,
    },
    banner: {
      resizeMode: 'cover',
    },
  });
};

export default MovieDetailContainer;
