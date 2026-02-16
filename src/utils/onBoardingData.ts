import {strings} from '../localization';
import {t} from '../localization/t';
import {IconName} from './transactionData';

interface onBoardingItem {
  name: string;
  icon: IconName;
}

export const onBoardingData: onBoardingItem[] = [
  {
    name: t(strings.onBoarding.text1),
    icon: 'coin',
  },
  {
    name: t(strings.onBoarding.text2),
    icon: 'phone',
  },
];
