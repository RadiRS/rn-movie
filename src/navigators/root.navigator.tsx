import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/hooks';
import {
  HomeContainer,
  MovieDetailContainer,
  MovieListContainer,
} from '@/containers';

import { navigationRef } from './utils';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { darkMode, NavigationTheme, Layout, Colors } = useTheme();
  const { t } = useTranslation();

  const barStyle = darkMode ? 'light-content' : 'dark-content';
  const backgroundColor = darkMode ? NavigationTheme.colors.card : Colors.white;

  const onReady = () => {
    RNBootSplash.hide({ fade: true });
  };

  const initialRouteName: keyof RootStackParamList = 'Home';
  const movieListTitle = (path?: string) =>
    path === 'popular'
      ? t('titles.popularMovies')
      : path === 'top_rated'
      ? t('titles.topRatedMovies')
      : path === 'upcoming'
      ? t('titles.upcomingMovies')
      : path === 'now_playing'
      ? t('titles.nowPlayingMovies')
      : '';

  return (
    <GestureHandlerRootView style={Layout.fill}>
      <NavigationContainer
        ref={navigationRef}
        theme={NavigationTheme}
        onReady={onReady}>
        <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
        <Stack.Navigator initialRouteName={initialRouteName}>
          <Stack.Screen
            name="Home"
            component={HomeContainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetailContainer}
            options={{ headerTitle: 'Movie Detail' }}
          />
          <Stack.Screen
            name="MovieList"
            component={MovieListContainer}
            options={({ route }) => ({
              title: movieListTitle(route.params.path),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default RootNavigator;
