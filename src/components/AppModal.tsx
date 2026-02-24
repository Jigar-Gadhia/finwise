import React, {Fragment} from 'react';
import {StyleSheet, TouchableWithoutFeedback, StatusBar} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {LightColors} from '../theme/colors';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import Stack from './Stack';

interface AppModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const AppModal: React.FC<AppModalProps> = ({visible, onClose, children}) => {
  const {mode} = useSelector((state: RootState) => state.theme);

  if (!visible) {
    return null;
  }

  return (
    <Fragment>
      <StatusBar
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        animated
        backgroundColor="transparent"
        translucent
      />
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(200)}
          style={[StyleSheet.absoluteFill, styles.overlay]}>
          <Stack
            alignItems="center"
            justifyContent="center"
            style={styles.backdrop}>
            <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
          </Stack>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: LightColors.transperent,
  },
  overlay: {
    zIndex: 9999, // iOS
    elevation: 9999, // Android
  },
});

export default AppModal;
