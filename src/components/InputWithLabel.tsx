import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import IconComponent from './IconComponent';
import TextComponent from './TextComponent';
import {scale} from 'react-native-size-matters';
import {LightColors} from '../theme/colors';
import {fontScale} from '../theme/fontScale';
import {useAppTheme} from '../theme/ThemeContext';

interface InputWithLabelProps {
  label?: string;
  placeholder?: string;
  password?: boolean;
  leftMargin?: boolean;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  placeholder,
  password = false,
  leftMargin = true,
}) => {
  const [secureText, setSecureText] = useState(password);
  const {colors} = useAppTheme();
  const onPressEyeIcon = () => {
    setSecureText(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <TextComponent
        variant="subtitle"
        style={[styles.titleStyle, leftMargin && {marginLeft: scale(10)}]}>
        {label}
      </TextComponent>
      <View style={styles.intputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.inputStyle}
          secureTextEntry={secureText}
          placeholderTextColor={colors.placeholder}
        />
        {password && (
          <TouchableOpacity
            onPress={onPressEyeIcon}
            hitSlop={10}
            activeOpacity={0.8}>
            <IconComponent Icon="eye" width={24.14} height={9} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scale(5),
  },
  titleStyle: {
    fontSize: fontScale(15),
  },
  intputContainer: {
    paddingHorizontal: scale(10),
    paddingLeft: scale(30),
    paddingVertical: scale(9),
    backgroundColor: LightColors.divider,
    borderRadius: scale(18),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputStyle: {
    flex: 1,
  },
});

export default InputWithLabel;
