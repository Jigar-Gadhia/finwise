import React from 'react';
import {StyleSheet} from 'react-native';
import ButtonComponent from './ButtonComponent';
import {scale} from 'react-native-size-matters';
import {fontScale} from '../theme/fontScale';
import {fonts} from '../theme/fonts';

interface FloatingButtonProps {
  title: string;
  onPress?: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({title, onPress}) => {
  return (
    <ButtonComponent
      title={title}
      buttonStyle={styles.buttonStyle}
      titleStyle={styles.buttonTitleStyle}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    bottom: scale(118),
    zIndex: 1,
    alignSelf: 'center',
    width: scale(150),
    paddingVertical: scale(7),
  },
  buttonTitleStyle: {
    fontSize: fontScale(14),
    fontFamily: fonts.regular,
  },
});

export default FloatingButton;
