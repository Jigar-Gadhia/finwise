import {StyleSheet, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenHeader from './ScreenHeader';
import {t} from '../localization/t';
import {strings} from '../localization';

type ContainerProps = {
  children: ReactNode;
  style?: ViewStyle;
  home?: boolean;
  screenName?: string;
  showNoti?: boolean;
};

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  screenName,
  home = false,
  showNoti = false,
}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      edges={['top']}
      style={[styles.container, {backgroundColor: colors.background}, style]}>
      <ScreenHeader
        home={showNoti ? false : home}
        name={showNoti ? t(strings.screenHeaders.notifications) : screenName}
        showNoti={showNoti}
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Container;
