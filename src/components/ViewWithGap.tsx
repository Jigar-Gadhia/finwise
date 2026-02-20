import React from 'react';
import {View, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

interface ViewWithGapProps {
  gap?: number;
  children: React.ReactNode;
  row?: boolean;
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  marginTop?: number;
  center?: boolean;
  fullWidth?: boolean;
}

const ViewWithGap: React.FC<ViewWithGapProps> = ({
  gap = 0,
  children,
  row = false,
  justifyContent = 'center',
  marginTop = 0,
  fullWidth = false,
  center = false,
}) => {
  return (
    <View
      style={[
        {
          gap: scale(gap),
          marginTop: scale(marginTop),
          alignItems: center ? 'center' : undefined,
          width: fullWidth ? '100%' : undefined,
        },
        row && styles.rowStyle,
        justifyContent && {justifyContent},
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ViewWithGap;
