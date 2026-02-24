import React, {Fragment} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
  View,
} from 'react-native';
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

      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        style={[StyleSheet.absoluteFill, styles.overlay]}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
        <View style={styles.contentWrapper}>
          <Stack alignItems="center" justifyContent="center" flex={1}>
            <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
          </Stack>
        </View>
      </Animated.View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  overlay: {
    zIndex: 9999,
    elevation: 9999,
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: LightColors.transperent,
  },
  contentWrapper: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default AppModal;
