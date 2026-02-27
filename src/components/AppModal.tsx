import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import Stack from './Stack';
import Modal from 'react-native-modal';

interface AppModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const AppModal: React.FC<AppModalProps> = ({visible, onClose, children}) => {
  const {mode} = useSelector((state: RootState) => state.theme);

  return (
    <Fragment>
      <StatusBar
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        animated
        backgroundColor="transparent"
        translucent
      />

      <Modal
        onBackdropPress={onClose}
        isVisible={visible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        animationOutTiming={700}
        backdropTransitionOutTiming={1000}
        backdropOpacity={0.4}>
        <Stack alignItems="center" justifyContent="center">
          {children}
        </Stack>
      </Modal>
    </Fragment>
  );
};

export default AppModal;
