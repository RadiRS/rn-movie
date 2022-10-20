import React from 'react';
import { IMG_BASE_URL } from '@env';
import { StyleSheet, Pressable, Image, ListRenderItem } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { navigate } from '@/navigators';
import { useTheme } from '@/hooks';
import { Movie, useGetMoviesQuery } from '@/services/movie';
import { Text, View, SafeArea, FlatList } from '@/components/ui';

interface MovieListContainerProps {
  params: { path: string };
  key: string;
  name: string;
}

const MovieListContainer = () => {
  const router = useRoute<MovieListContainerProps>();
  const styles = useStyles();
  const path = router.params?.path;

  const { data, isSuccess } = useGetMoviesQuery({ path: path });

  const onPressItem = (item: Movie) => {
    navigate('MovieDetail', { id: item.id });
  };

  const renderItem: ListRenderItem<Movie> = ({ item }) => {
    const imgUrl = `${IMG_BASE_URL}/w300${item.poster_path}`;

    return (
      <Pressable
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
          <Text numberOfLines={7}>{item.overview}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeArea style={styles.container}>
      {isSuccess && (
        <FlatList
          data={data?.results}
          renderItem={renderItem}
          style={styles.listContentContainer}
        />
      )}
    </SafeArea>
  );
};

export default MovieListContainer;

const useStyles = () => {
  const { MetricsSizes } = useTheme();

  return StyleSheet.create({
    container: {},
    listContentContainer: {
      paddingTop: MetricsSizes.regular,
      paddingHorizontal: MetricsSizes.small,
    },
    listItemContainer: {
      flexDirection: 'row',
      padding: MetricsSizes.small,
    },
    img: {
      width: 150,
      height: 225,
    },
    itemContentContainer: {
      paddingHorizontal: MetricsSizes.regular,
      justifyContent: 'center',
      width: MetricsSizes.width - 150 - MetricsSizes.regular,
    },
  });
};
