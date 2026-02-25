import React from 'react';
import {termsType} from '../utils/terms';
import TextComponent from './TextComponent';
import Stack from './Stack';
import {LightColors} from '../theme/colors';

interface TermsComponentProps {
  item: termsType;
  justify?: boolean;
  pointsGap?: boolean;
  color?: keyof typeof LightColors;
}

const TermsComponent: React.FC<TermsComponentProps> = ({
  item,
  justify = true,
  pointsGap = false,
  color = 'text',
}) => {
  switch (item.type) {
    case 'title':
      return (
        <TextComponent color={color} variant="title" fontSize={14}>
          {item.text}
        </TextComponent>
      );

    case 'list':
      return (
        <Stack ml={10}>
          {item.items?.map((listItem, index) => (
            <TextComponent
              fontSize={12}
              align={justify ? 'justify' : 'left'}
              color={color}
              variant="paragraph"
              key={index}>
              {index + 1}. {listItem}
            </TextComponent>
          ))}
        </Stack>
      );
    case 'points':
      return (
        <Stack gap={pointsGap ? 10 : 0}>
          {item.items?.map((listItem, index) => (
            <Stack
              key={index}
              row
              alignItems="center"
              justifyContent="flex-start"
              gap={5}
              ml={10}>
              <TextComponent fontSize={18} color={color} variant="title">
                •
              </TextComponent>
              <TextComponent
                align={justify ? 'justify' : 'left'}
                fontSize={12}
                color={color}
                variant="paragraph">
                {listItem}
              </TextComponent>
            </Stack>
          ))}
        </Stack>
      );

    case 'paragraph':
    default:
      return (
        <TextComponent
          align={justify ? 'justify' : 'left'}
          fontSize={12}
          color={color}
          variant="paragraph">
          {item.text}
        </TextComponent>
      );
  }
};

export default TermsComponent;
