import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import TextComponent from './TextComponent';
import {t} from '../localization/t';
import {strings} from '../localization';
import IconComponent from './IconComponent';
import {filterTypes} from '../utils/filterData';
import {barDataByFilter} from '../utils/barData';
import SkiaBarChart from './SkiaBarChart';
import {LightColors} from '../theme/colors';
import Stack from './Stack';

interface ExpenseBarChartProps {
  filter?: filterTypes;
}

const ExpenseBarChart = ({filter = 'daily'}: ExpenseBarChartProps) => {
  const barData = barDataByFilter[filter];

  return (
    <Stack
      pt={15}
      ph={25}
      pb={10}
      mb={5}
      gap={10}
      style={[styles.container, {backgroundColor: LightColors.tab}]}>
      <Stack row alignItems="center" justifyContent="space-between">
        <TextComponent color="darkGreen" variant="subtitle">
          {t(strings.common.chartHeader)}
        </TextComponent>
        <Stack row alignItems="center" gap={5}>
          <TouchableOpacity>
            <IconComponent Icon={'search'} height={30} width={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconComponent Icon={'calender'} height={30} width={30} />
          </TouchableOpacity>
        </Stack>
      </Stack>
      <SkiaBarChart data={barData} filter={filter} />
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(50),
  },
});

export default ExpenseBarChart;
