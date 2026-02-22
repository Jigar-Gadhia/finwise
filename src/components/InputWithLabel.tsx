import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import IconComponent from './IconComponent';
import TextComponent from './TextComponent';
import {scale} from 'react-native-size-matters';
import {LightColors} from '../theme/colors';
import {fontScale} from '../theme/fontScale';
import {useAppTheme} from '../theme/ThemeContext';
import {fonts} from '../theme/fonts';

interface InputWithLabelProps {
  label?: string;
  placeholder?: string;
  password?: boolean;
  leftMargin?: boolean;
  lessMargin?: boolean;
  multiLine?: boolean;
  isDate?: boolean;
  isDropDown?: boolean;
  value?: string;
  marginTop?: ViewStyle['marginTop'];
  labelInputGap?: ViewStyle['gap'];
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  placeholder,
  password = false,
  leftMargin = true,
  lessMargin = false,
  multiLine = false,
  isDate = false,
  isDropDown = false,
  value = '',
  marginTop,
  labelInputGap = 5,
}) => {
  const [secureText, setSecureText] = useState(password);
  const {colors} = useAppTheme();
  const onPressEyeIcon = () => {
    setSecureText(prev => !prev);
  };
  return (
    <View style={{gap: scale(labelInputGap)}}>
      {label && (
        <TextComponent
          variant="subtitle"
          disableLineHeight
          style={[styles.titleStyle, leftMargin && {marginLeft: scale(10)}]}>
          {label}
        </TextComponent>
      )}
      <View
        style={[
          styles.intputContainer,
          {
            paddingLeft: lessMargin ? scale(15) : scale(30),
            height: multiLine ? scale(130) : scale(36),
            alignItems: multiLine ? 'flex-start' : 'center',
            paddingTop: multiLine ? scale(5) : undefined,
            marginTop,
          },
        ]}>
        <TextInput
          placeholder={placeholder}
          style={styles.inputStyle}
          secureTextEntry={secureText}
          placeholderTextColor={colors.placeholder}
          multiline={multiLine}
          value={value}
        />
        {password && (
          <TouchableOpacity
            onPress={onPressEyeIcon}
            hitSlop={10}
            activeOpacity={0.8}>
            <IconComponent Icon="eye" width={24.14} height={9} />
          </TouchableOpacity>
        )}
        {isDate && (
          <TouchableOpacity hitSlop={10} activeOpacity={0.8}>
            <IconComponent Icon="calender" width={23} height={23} />
          </TouchableOpacity>
        )}
        {isDropDown && (
          <TouchableOpacity
            hitSlop={10}
            activeOpacity={0.8}
            style={styles.dropdownStyle}>
            <IconComponent
              Icon="dropDown"
              color="caribbeanGreen"
              width={12}
              height={12}
            />
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
    backgroundColor: LightColors.divider,
    borderRadius: scale(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputStyle: {
    flex: 1,
    color: LightColors.text,
    fontSize: fontScale(14),
    fontFamily: fonts.medium,
  },
  dropdownStyle: {
    marginRight: scale(5),
  },
});

export default InputWithLabel;
