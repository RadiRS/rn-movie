import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { IMG_BASE_URL } from '@env';

import { Movie } from '@/services/movie';
import { Text, View } from '@/components/ui';
import { useTheme } from '@/hooks';

interface BannerSectionProps {
  data?: Movie;
}

const BannerSection = ({ data }: BannerSectionProps) => {
  const styles = useStyles();
  const imgUrl = `${IMG_BASE_URL}/w500${data?.backdrop_path}`;

  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={{ uri: imgUrl }} />
      <View padder>
        <Text variant="title-regular">{data?.title}</Text>
        {data?.tagline && <Text>{data?.tagline}</Text>}
        <View style={styles.genreContainer}>
          {data?.genres.map(item => (
            <View key={item.id} style={styles.genreItem}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const useStyles = () => {
  const { MetricsSizes } = useTheme();

  return StyleSheet.create({
    container: {},
    banner: {
      height: 250,
      resizeMode: 'cover',
      width: '100%',
    },
    genreContainer: {
      marginTop: MetricsSizes.small,
      flexDirection: 'row',
    },
    genreItem: {
      padding: MetricsSizes.small,
      borderWidth: 0.5,
      borderRadius: MetricsSizes.border,
      marginRight: MetricsSizes.tiny,
    },
  });
};

export default BannerSection;
