import React from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/hooks';
import { Text, View } from '@/components/ui';

const HeaderSection = () => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text variant="title-large" status="control">
        {t('welcome')}.
      </Text>
      <Text variant="title-small" status="control">
        {t('welcomeSubtitle')}
      </Text>
      {/* <View style={styles.inputContainer}>
        <Input placeholder={t('actions.search')} />
      </View> */}
    </View>
  );
};

const useStyles = () => {
  const { Colors, MetricsSizes } = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      paddingVertical: MetricsSizes.large,
      paddingHorizontal: MetricsSizes.regular,
    },
    inputContainer: {
      paddingVertical: MetricsSizes.regular,
    },
  });
};

export default HeaderSection;
