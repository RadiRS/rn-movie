import React from 'react';
import {
  Image,
  ListRenderItem,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/hooks';
import { View, Text, FlatList } from '@/components/ui';

interface MovieSectionProps {
  title: string;
}

const MovieSection: React.FC<MovieSectionProps> = ({
  title,
}: MovieSectionProps) => {
  const { t } = useTranslation();
  const data = new Array(5);
  const styles = useStyles();

  const onPressItem = (item: any) => {
    Alert.alert('item', item);
  };

  const renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <Pressable
        onPress={() => onPressItem(item)}
        style={styles.listItemContainer}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w500/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg',
          }}
          style={styles.img}
        />
        <View style={styles.itemContentContainer}>
          <Text numberOfLines={1} type="bold">
            Jujutsu Kaison {item}
          </Text>
          <Text variant="small">Dec 24, 2021</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text variant="title-small">{title}</Text>
        <Pressable>
          <Text>{t('actions.seeAll')}</Text>
        </Pressable>
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainer}
      />
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
    itemContentContainer: {},
  });
};

export default MovieSection;
