import React from 'react';
import {Modal, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {LightColors} from '../theme/colors';

interface AppModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const AppModal: React.FC<AppModalProps> = ({visible, onClose, children}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback>
            <View style={styles.container}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: LightColors.transperent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {width: '100%', alignItems: 'center'},
});
