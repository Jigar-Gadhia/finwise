import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';
import TextComponent from './TextComponent';
import {t} from '../localization/t';
import {strings} from '../localization';
import IconComponent from './IconComponent';

const ExpenseBarChart = () => {
  const {colors} = useAppTheme();
  const formatToK = (value: string | number) => {
    const num = Number(value);

    if (num >= 1000) {
      return `${Math.round(num / 1000)}k`;
    }

    return `${num}`;
  };

  const barData = [
    {
      label: '1st Week',
      spacing: 2,
      frontColor: '#3ECF8E',
      value: 2000,
    },
    {
      value: 4000,
      frontColor: '#2563EB',
    },

    {
      label: '2nd Week',
      spacing: 2,
      frontColor: '#3ECF8E',
      value: 2500,
    },
    {
      value: 7000,
      frontColor: '#2563EB',
    },

    {
      label: '3rd Week',
      spacing: 2,
      frontColor: '#3ECF8E',
      value: 4000,
    },
    {
      value: 12000,
      frontColor: '#2563EB',
    },

    {
      label: '4th Week',
      spacing: 2,
      frontColor: '#3ECF8E',
      value: 10000,
    },
    {
      value: 6000,
      frontColor: '#2563EB',
    },
  ];

  return (
    <View style={[styles.container, {backgroundColor: colors.screenTitle}]}>
      <View style={styles.header}>
        <TextComponent color="darkGreen" variant="subtitle">
          {t(strings.common.chartHeader, {duration: 'April'})}
        </TextComponent>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <IconComponent Icon={'search'} height={30} width={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconComponent Icon={'calender'} height={30} width={30} />
          </TouchableOpacity>
        </View>
      </View>
      <BarChart
        data={barData}
        barWidth={scale(6)}
        spacing={scale(60)}
        roundedTop
        hideRules={false}
        rulesThickness={scale(1)}
        dashGap={scale(2)}
        rulesLength={scale(250)}
        rulesType="dashed"
        rulesColor={colors.lightBlue}
        yAxisTextStyle={{color: colors.oceanBlue}}
        formatYLabel={formatToK}
        maxValue={15000}
        noOfSections={3}
        yAxisThickness={0}
        xAxisThickness={1}
        xAxisColor={colors.tab}
        xAxisLabelTextStyle={{
          color: colors.tab,
          fontSize: scale(14),
          width: scale(70),
          marginLeft: scale(-15),
        }}
        initialSpacing={scale(20)}
        labelsExtraHeight={scale(12)}
        xAxisLength={scale(220)}
        height={scale(120)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(25),
    paddingTop: scale(15),
    paddingBottom: scale(10),
    borderRadius: scale(50),
    gap: scale(10),
    marginBottom: scale(5),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(5),
  },
});

export default ExpenseBarChart;
