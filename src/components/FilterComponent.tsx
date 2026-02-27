import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';
import TextComponent from './TextComponent';
import {useIsFocused} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import {useFadeAnimation} from '../hooks/useFadeAnimation';

interface FilterComponentProps {
  filters: {name: string}[];
  currentFilter?: string | undefined;
  onFilterChange?: (filter: string) => void;
  paddingRequired?: boolean;
  yearlyEnabled?: boolean;
  btnStyle?: TouchableOpacityProps['style'];
  containerStyle?: ViewStyle;
  capitalised?: boolean;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  filters = [],
  currentFilter,
  onFilterChange = () => {},
  paddingRequired = true,
  capitalised = true,
  containerStyle,
  btnStyle,
}) => {
  const {colors} = useAppTheme();
  const focused = useIsFocused();
  const animatedStyle = useFadeAnimation(focused);
  return (
    <Animated.View
      style={[
        animatedStyle,
        styles.container,
        {
          backgroundColor: colors.tab,
          paddingHorizontal: paddingRequired ? scale(12) : scale(5),
        },
        containerStyle,
      ]}>
      {filters.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.filterContainer,
              currentFilter === item.name && {
                backgroundColor: colors.caribbeanGreen,
              },
              btnStyle,
            ]}
            onPress={() => onFilterChange(item.name)}>
            <TextComponent
              fontSize={15}
              capitalised={capitalised}
              color={currentFilter === item.name ? 'staticBlack' : 'text'}
              disableLineHeight
              weight="regular">
              {item.name}
            </TextComponent>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
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
});

export default FilterComponent;
