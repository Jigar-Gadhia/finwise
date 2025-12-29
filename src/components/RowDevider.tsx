import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {useAppTheme} from '../theme/ThemeContext';
import {scale} from 'react-native-size-matters';

interface ColumnDeviderProps {
  color: keyof ReturnType<typeof useAppTheme>['colors'];
  style?: ViewStyle;
}

const RowDevider: React.FC<ColumnDeviderProps> = ({
  color = 'amountPositive',
  style,
}) => {
  const {colors} = useAppTheme();
  return (
    <View
      style={[styles.rowSeparator, {backgroundColor: colors[color]}, style]}
    />
  );
};

const styles = StyleSheet.create({
  rowSeparator: {
    height: scale(2),
    width: '100%',
  },
});

export default RowDevider;
