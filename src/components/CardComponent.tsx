import React from 'react';
import {View, StyleSheet, ViewStyle, ScrollView} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';

interface CardComponentProps {
  children: React.ReactNode;
  style?: ViewStyle;
  scrollStyle?: ViewStyle;
  scroll?: boolean;
}

const CardComponent: React.FC<CardComponentProps> = ({
  style,
  children,
  scrollStyle,
  scroll = true,
}) => {
  const {colors} = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.card}, style]}>
      {scroll ? (
        <ScrollView
          contentContainerStyle={[styles.scrollStyle, scrollStyle]}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: scale(50),
    borderTopRightRadius: scale(50),
    overflow: 'hidden',
  },
  scrollStyle: {
    paddingBottom: scale(110),
  },
});

export default CardComponent;
