import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';
import {filters, filterTypes} from '../utils/filterData';
import TextComponent from './TextComponent';

interface FilterComponentProps {
  currentFilter?: filterTypes;
  onFilterChange?: (filter: string) => void;
  paddingRequired?: boolean;
  yearlyEnabled?: boolean;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  currentFilter = 'monthly',
  onFilterChange = () => {},
  paddingRequired = true,
  yearlyEnabled = false,
}) => {
  const {colors} = useAppTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.tab,
          paddingHorizontal: paddingRequired ? scale(12) : 0,
        },
      ]}>
      {filters
        .filter(item => yearlyEnabled || item.name !== 'yearly')
        .map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.filterContainer,
                currentFilter === item.name && {
                  backgroundColor: colors.caribbeanGreen,
                },
              ]}
              onPress={() => onFilterChange(item.name)}>
              <TextComponent
                style={styles.textStyle}
                color={currentFilter === item.name ? 'staticBlack' : 'text'}
                disableLineHeight
                weight="regular">
                {item.name}
              </TextComponent>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(5),
    borderRadius: scale(22),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterContainer: {
    padding: scale(10),
    paddingVertical: scale(12),
    minWidth: scale(70),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(19),
  },
  textStyle: {
    fontSize: scale(15),
    textTransform: 'capitalize',
  },
});

export default FilterComponent;
