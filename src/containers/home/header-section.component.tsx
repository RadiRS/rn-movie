import React from 'react';
import { StyleSheet } from 'react-native';

import Config from '@/config/env';
import { useTheme } from '@/hooks';
import { ThemeVariables } from '@/types/theme';
import { Text, View } from '@/components/ui';

const HeaderSection = () => {
  const themes = useTheme();
  const extStyle = styles(themes);

  return (
    <View padder style={extStyle.container}>
      <Text variant="title-regular" appearance="alternative">
        Header Section
      </Text>
      <Text variant="title-small" appearance="alternative">
        Environment: {Config.ENV}
      </Text>
      <Text variant="small" appearance="alternative">
        API_URL: {Config.API_URL}
      </Text>
      <Text variant="small" appearance="alternative">
        IMG_BASE_URL: {Config.IMG_BASE_URL}
      </Text>
    </View>
  );
};

const styles = (themes: ThemeVariables) =>
  StyleSheet.create({
    container: {
      backgroundColor: themes.Colors.primary,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default HeaderSection;
