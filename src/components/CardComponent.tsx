import React from 'react';
import {StyleSheet, ViewStyle, ScrollView, Platform} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';
import Stack from './Stack';

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
    <Stack style={[styles.container, {backgroundColor: colors.card}, style]}>
      {scroll ? (
        <ScrollView
          contentContainerStyle={[styles.scrollStyle, scrollStyle]}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          contentInset={{bottom: scale(115), top: 0}}
          keyboardShouldPersistTaps="always">
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </Stack>
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
    paddingBottom: Platform.select({android: scale(110), ios: 0}),
  },
});

export default CardComponent;
