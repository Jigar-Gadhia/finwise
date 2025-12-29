import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {useAppTheme} from '../theme/ThemeContext';
import {scale} from 'react-native-size-matters';

interface ColumnDeviderProps {
  color: keyof ReturnType<typeof useAppTheme>['colors'];
  style?: ViewStyle;
}

const ColumnDevider: React.FC<ColumnDeviderProps> = ({color, style}) => {
  const {colors} = useAppTheme();
  return (
    <View
      style={[styles.columnSeparator, {backgroundColor: colors[color]}, style]}
    />
  );
};

const styles = StyleSheet.create({
  columnSeparator: {
    height: '100%',
    width: scale(2),
  },
});

export default ColumnDevider;
