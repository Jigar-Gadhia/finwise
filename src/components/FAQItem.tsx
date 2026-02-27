import React, {memo} from 'react';
import Stack from './Stack';
import TextComponent from './TextComponent';
import {CollapsableContainer} from './CollapsableContainer';
import {t} from '../localization/t';
import {strings} from '../localization';
import {scale} from 'react-native-size-matters';

const FAQItem = ({item, onPress, colors}: any) => {
  return (
    <CollapsableContainer
      title={item.name}
      expanded={item.expanded}
      onPress={() => onPress(item)}>
      <Stack
        alignItems="center"
        style={{
          paddingVertical: scale(8),
          paddingHorizontal: scale(15),
          marginTop: scale(15),
          borderRadius: scale(12),
          backgroundColor: colors.helpCard,
        }}>
        <TextComponent>{t(strings.common.resetPasswordText)}</TextComponent>
      </Stack>
    </CollapsableContainer>
  );
};

export default memo(FAQItem);
