import React from 'react';
import {
  StyleSheet,
  View as RNView,
  ViewProps as RNViewProps,
  ViewStyle,
} from 'react-native';

import { useTheme } from '@/hooks';

interface ViewProps extends RNViewProps {
  padder?: boolean;
  style?: ViewStyle;
}

const View: React.FC<ViewProps> = ({
  children,
  style,
  ...props
}: ViewProps) => {
  const styles = useStyles(props);

  return (
    <RNView style={[styles.container, style]} {...props}>
      {children}
    </RNView>
  );
};

const useStyles = (params: ViewProps) => {
  const { padder } = params;
  const { MetricsSizes } = useTheme();

  return StyleSheet.create({
    container: {
      padding: padder ? MetricsSizes.regular : 0,
    },
  });
};

export default View;
