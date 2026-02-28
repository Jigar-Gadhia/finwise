import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import CardComponent from '../../components/CardComponent';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import Stack from '../../components/Stack';
import CustomCalendar from '../../components/CustomCalendar';
import ButtonComponent from '../../components/ButtonComponent';
import {scale} from 'react-native-size-matters';
import {fontScale} from '../../theme/fontScale';
import {transactionData} from '../../utils/transactionData';
import TransactionItemComponent from '../../components/TransactionItemComponent';
import Animated, {FadeIn} from 'react-native-reanimated';
import SemiPieChart from '../../components/SemiPieChart';

const CalenderScreen: React.FC = () => {
  const [buttonType, setButtonType] = useState<'sp' | 'cat'>('sp');

  const onPress = (btnType: 'sp' | 'cat') => {
    setButtonType(btnType);
  };

  return (
    <Container screenName={t(strings.common.calender)}>
      <CardComponent>
        <Stack pt={30} ph={25} gap={30}>
          <CustomCalendar />
          <Stack row alignItems="center" gap={15}>
            <ButtonComponent
              title={t(strings.common.spends)}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.titleStyle}
              onPress={() => onPress('sp')}
              bgColor={buttonType === 'sp' ? 'caribbeanGreen' : 'divider'}
            />
            <ButtonComponent
              title={t(strings.common.categories)}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.titleStyle}
              onPress={() => onPress('cat')}
              bgColor={buttonType === 'cat' ? 'caribbeanGreen' : 'divider'}
            />
          </Stack>
          {buttonType === 'sp' && (
            <Animated.View entering={FadeIn.delay(200)}>
              <Stack gap={15}>
                {transactionData.slice(0, 2).map(item => (
                  <TransactionItemComponent blue item={item} key={item.id} />
                ))}
              </Stack>
            </Animated.View>
          )}

          {buttonType === 'cat' && (
            <Animated.View entering={FadeIn.delay(100)}>
              <SemiPieChart />
            </Animated.View>
          )}
        </Stack>
      </CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: scale(6),
  },
  titleStyle: {
    fontSize: fontScale(14),
  },
});

export default CalenderScreen;
