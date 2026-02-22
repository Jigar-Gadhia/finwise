import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import Container from '../../components/Container';
import CardComponent from '../../components/CardComponent';
import {scale} from 'react-native-size-matters';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import CircularProgressWithText from '../../components/CircularProgressWithText';
import ViewWithGap from '../../components/ViewWithGap';
import TextIconInline from '../../components/TextIconInline';
import TextComponent from '../../components/TextComponent';
import {priceFormat} from '../../utils/utils';
import {fontScale} from '../../theme/fontScale';
import ProgressBar from '../../components/ProgressBar';
import moment from 'moment';
import IconComponent from '../../components/IconComponent';
import {generateTransactions} from '../../components/CategoryTransactionSectionList';
import CategoryTransactionItem from '../../components/CategoryTransactionItem';
import ButtonComponent from '../../components/ButtonComponent';
import {fonts} from '../../theme/fonts';
import {navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';

const savingsData = generateTransactions(0, 3);

const SavingScreen: React.FC = () => {
  const {item} = useSelector((state: RootState) => state.saving);
  const {name, icon} = item;
  const onPressAddSavings = () => {
    navigate(screenNames.AddSavingsScreen);
  };
  return (
    <Container screenName={name}>
      <ButtonComponent
        title={t(strings.common.addSavings)}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTitleStyle}
        onPress={onPressAddSavings}
      />
      <CardComponent scrollStyle={styles.scrollStyle}>
        <ViewWithGap gap={25}>
          <ViewWithGap row justifyContent="space-between">
            <ViewWithGap gap={8}>
              <ViewWithGap>
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
              </ViewWithGap>
              <ViewWithGap>
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
              </ViewWithGap>
            </ViewWithGap>
            <CircularProgressWithText
              progressText={30}
              icon={icon}
              label={name}
              iconSize={38}
              circleSize={80}
              containerStyle={styles.circleContainer}
            />
          </ViewWithGap>
          <View style={styles.progressContainer}>
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
          </View>
          <ViewWithGap gap={8}>
            <ViewWithGap row justifyContent="space-between">
              <TextComponent variant="subtitle" disableLineHeight>
                {moment().format('MMMM')}
              </TextComponent>
              <IconComponent Icon="calender" height={30} width={30} />
            </ViewWithGap>
            <ViewWithGap gap={15}>
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
            </ViewWithGap>
          </ViewWithGap>
        </ViewWithGap>
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
  progressContainer: {
    gap: scale(6),
  },
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

export default SavingScreen;
