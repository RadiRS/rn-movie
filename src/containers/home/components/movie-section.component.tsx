import React from 'react';
import { IMG_BASE_URL } from '@env';
import { Image, ListRenderItem, StyleSheet, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';

import { navigate } from '@/navigators';
import { useTheme } from '@/hooks';
import { Movie, useGetMoviesQuery } from '@/services/movie';
import { View, Text, FlatList } from '@/components/ui';

interface MovieSectionProps {
  title: string;
  section: 'popular' | 'upcoming' | 'top_rated' | 'now_playing';
}

const MovieSection: React.FC<MovieSectionProps> = ({
  title,
  section,
}: MovieSectionProps) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const { data, isSuccess } = useGetMoviesQuery({ path: section });

  const onPressItem = (item: Movie) => {
    navigate('MovieDetail', { id: item.id });
  };

  const onPressMore = () => {
    navigate('MovieList', { path: section });
  };

  const renderItem: ListRenderItem<Movie> = ({ item, index }) => {
    const imgUrl = `${IMG_BASE_URL}/w300${item.poster_path}`;

    return (
      <Pressable
        testID={`item-${index}-${section}`}
        onPress={() => onPressItem(item)}
        style={styles.listItemContainer}>
        <Image
          source={{
            uri: imgUrl,
          }}
          style={styles.img}
        />
        <View style={styles.itemContentContainer}>
          <Text numberOfLines={1} type="bold">
            {item.title}
          </Text>
          <Text variant="small">{item?.release_date.toString()}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text variant="title-small">{title}</Text>
        <Pressable onPress={onPressMore}>
          <Text>{t('actions.seeAll')}</Text>
        </Pressable>
      </View>
      {isSuccess && data?.results.length && (
        <FlatList
          horizontal
          data={data?.results.slice(0, 10)}
          renderItem={renderItem}
          contentContainerStyle={styles.listContentContainer}
        />
      )}
    </View>
  );
};

const useStyles = () => {
  const { MetricsSizes } = useTheme();

  return StyleSheet.create({
    container: {
      paddingVertical: MetricsSizes.regular,
    },
    img: {
      height: 225,
      width: '100%',
      resizeMode: 'contain',
      borderRadius: MetricsSizes.border,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: MetricsSizes.regular,
    },
    listContentContainer: {
      paddingTop: MetricsSizes.regular,
      paddingHorizontal: MetricsSizes.small,
    },
    listItemContainer: {
      marginHorizontal: MetricsSizes.small,
      width: 150,
    },
    itemContentContainer: {
      marginTop: MetricsSizes.tiny,
    },
  });
};

export default MovieSection;
