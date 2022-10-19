import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useTheme } from '@/hooks';
import { HomeContainer } from '@/containers';

import { navigationRef } from './utils';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { darkMode, NavigationTheme, Layout, Colors } = useTheme();

  const barStyle = darkMode ? 'light-content' : 'dark-content';
  const backgroundColor = darkMode ? NavigationTheme.colors.card : Colors.white;

  const onReady = () => {
    RNBootSplash.hide({ fade: true });
  };

  const initialRouteName: keyof RootStackParamList = 'Home';

  return (
    <GestureHandlerRootView style={Layout.fill}>
      <NavigationContainer
        ref={navigationRef}
        theme={NavigationTheme}
        onReady={onReady}>
        <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={initialRouteName}>
          <Stack.Screen name="Home" component={HomeContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default RootNavigator;
