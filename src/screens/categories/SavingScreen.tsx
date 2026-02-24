import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import Container from '../../components/Container';
import CardComponent from '../../components/CardComponent';
import {scale} from 'react-native-size-matters';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import CircularProgressWithText from '../../components/CircularProgressWithText';
import Stack from '../../components/Stack';
import TextIconInline from '../../components/TextIconInline';
import TextComponent from '../../components/TextComponent';
import {priceFormat} from '../../utils/utils';
import {fontScale} from '../../theme/fontScale';
import ProgressBar from '../../components/ProgressBar';
import moment from 'moment';
import IconComponent from '../../components/IconComponent';
import {generateTransactions} from '../../components/CategoryTransactionSectionList';
import CategoryTransactionItem from '../../components/CategoryTransactionItem';
import {navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';
import FloatingButton from '../../components/FloatingButton';

const savingsData = generateTransactions(0, 3);

const SavingScreen: React.FC = () => {
  const {item} = useSelector((state: RootState) => state.saving);
  const {name, icon} = item;
  const onPressAddSavings = () => {
    navigate(screenNames.AddSavingsScreen);
  };
  return (
    <Container screenName={name}>
      <FloatingButton
        title={t(strings.common.addSavings)}
        onPress={onPressAddSavings}
      />
      <CardComponent scrollStyle={styles.scrollStyle}>
        <Stack gap={25}>
          <Stack row justifyContent="space-between">
            <Stack gap={8}>
              <Stack>
                <TextIconInline
                  Icon="arrowUp"
                  text={t(strings.common.goal)}
                  flip
                />
                <TextComponent
                  style={styles.textStyle}
                  disableLineHeight
                  variant="title">
                  {priceFormat().format(1962.93)}
                </TextComponent>
              </Stack>
              <Stack>
                <TextIconInline
                  Icon="arrowUp"
                  text={t(strings.common.amountSaved)}
                />
                <TextComponent
                  style={styles.textStyle}
                  disableLineHeight
                  variant="title"
                  color="caribbeanGreen">
                  {priceFormat().format(653.31)}
                </TextComponent>
              </Stack>
            </Stack>
            <CircularProgressWithText
              progressText={30}
              icon={icon}
              label={name}
              iconSize={38}
              circleSize={80}
              containerStyle={styles.circleContainer}
            />
          </Stack>
          <Stack gap={6}>
            <ProgressBar
              fillColor="progressInvertFill"
              trackColor="progressInvertTrack"
              textColor="primary"
              progressValue={40}
              total={1962.93}
            />
            <TextIconInline
              style={styles.textContainerStyle}
              textStyle={styles.iconTextStyle}
              Icon={'boxChecked'}
              text={t(strings.progress.expenseInsight, {value: 30})}
            />
          </Stack>
          <Stack gap={8}>
            <Stack row justifyContent="space-between">
              <TextComponent variant="subtitle" disableLineHeight>
                {moment().format('MMMM')}
              </TextComponent>
              <IconComponent Icon="calender" height={30} width={30} />
            </Stack>
            <Stack gap={15}>
              {savingsData.map((sav, index) => {
                return (
                  <CategoryTransactionItem
                    key={index}
                    amount={sav.amount}
                    icon={icon}
                    name={name}
                    timestamp={sav.timestamp}
                  />
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    paddingTop: scale(35),
    paddingHorizontal: scale(32),
  },
  textStyle: {
    fontSize: fontScale(24),
    marginLeft: scale(12),
  },
  circleContainer: {
    paddingTop: scale(20),
    paddingHorizontal: scale(27),
    paddingBottom: scale(12),
    gap: scale(2),
    borderRadius: scale(40),
  },
  textContainerStyle: {
    marginLeft: scale(3),
  },
  iconTextStyle: {
    fontSize: scale(12),
  },
});

export default SavingScreen;
