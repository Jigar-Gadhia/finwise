import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {categoriesType} from '../utils/categoriesData';
import IconComponent from './IconComponent';
import TextComponent from './TextComponent';
import {useAppTheme} from '../theme/ThemeContext';
import {scale} from 'react-native-size-matters';
import Stack from './Stack';

interface CategoryItemProps {
  item: categoriesType;
  onPress?: () => void;
  activeItem?: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  item,
  onPress,
  activeItem,
}) => {
  const {colors} = useAppTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.itemContainer}
      onPress={onPress}>
      <Stack
        p={18}
        style={[
          styles.iconContainer,
          {
            backgroundColor:
              item.name === activeItem ? colors.oceanBlue : colors.lightBlue,
          },
        ]}>
        <IconComponent
          Icon={item.icon}
          height={44}
          width={44}
          color="staticWhite"
        />
      </Stack>
      <TextComponent variant="subtitle" capitalised>
        {item.name}
      </TextComponent>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    gap: scale(3),
  },
  iconContainer: {
    borderRadius: scale(20),
  },
});

export default CategoryItem;
