import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';
import TextComponent from './TextComponent';
import {t} from '../localization/t';
import {strings} from '../localization';
import IconComponent from './IconComponent';
import {filterTypes} from '../utils/filterData';
import {barDataByFilter} from '../utils/barData';
import SkiaBarChart from './SkiaBarChart';

interface ExpenseBarChartProps {
  filter?: filterTypes;
}

const ExpenseBarChart = ({filter = 'daily'}: ExpenseBarChartProps) => {
  const {colors} = useAppTheme();
  const barData = barDataByFilter[filter];

  return (
    <View style={[styles.container, {backgroundColor: colors.screenTitle}]}>
      <View style={styles.header}>
        <TextComponent color="darkGreen" variant="subtitle">
          {t(strings.common.chartHeader)}
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
      <SkiaBarChart data={barData} filter={filter} />
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
