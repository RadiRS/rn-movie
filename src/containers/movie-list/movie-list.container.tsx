import React, { useEffect, useState } from 'react';
import { IMG_BASE_URL } from '@env';
import { StyleSheet, Pressable, Image, ListRenderItem } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { navigate } from '@/navigators';
import { useTheme } from '@/hooks';
import { Movie, useGetMoviesQuery } from '@/services/movie';
import { Text, View, SafeArea, FlatList, Spinner } from '@/components/ui';

interface MovieListContainerProps {
  params: { path: string };
  key: string;
  name: string;
}

const MovieListContainer = () => {
  const router = useRoute<MovieListContainerProps>();
  const styles = useStyles();
  const path = router.params?.path;
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);

  const { data, isFetching, isLoading } = useGetMoviesQuery({
    path: path,
    page,
  });

  useEffect(() => {
    if (!data?.results) {
      return;
    }

    if (page === 1) {
      setMovies(data?.results);
    } else {
      setMovies(prevState => [...prevState, ...data.results]);
    }

    return () => {};
  }, [page, isFetching, data?.results]);

  const onRefresh = () => {
    setPage(1);
  };

  const onEndReached = () => {
    if (!data || page >= data?.total_pages || isFetching) {
      return;
    }

    setPage(prevPage => prevPage + 1);
  };

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

  const renderFooter = () => {
    if (!isFetching) {
      return null;
    }

    return <Spinner size="small" />;
  };

  return (
    <SafeArea style={styles.container}>
      <FlatList
        data={movies}
        style={styles.listContentContainer}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        onEndReached={onEndReached}
        onRefresh={onRefresh}
        refreshing={isLoading}
        onEndReachedThreshold={0.3}
      />
      <Spinner isFull={isLoading} />
    </SafeArea>
  );
};

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

export default MovieListContainer;
