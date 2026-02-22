import {icons} from './icons';

export type categoriesType = {
  id: number;
  icon: keyof typeof icons;
  name: string;
};

export const categoriesData: categoriesType[] = [
  {
    id: 0,
    icon: 'food',
    name: 'food',
  },
  {
    id: 1,
    icon: 'transport',
    name: 'transport',
  },
  {
    id: 2,
    icon: 'medicine',
    name: 'medicine',
  },
  {
    id: 3,
    icon: 'groceries',
    name: 'groceries',
  },
  {
    id: 4,
    icon: 'rent',
    name: 'rent',
  },
  {
    id: 5,
    icon: 'gift',
    name: 'gift',
  },
  {
    id: 6,
    icon: 'saving',
    name: 'saving',
  },
  {
    id: 7,
    icon: 'entertainment',
    name: 'entertainment',
  },
  {
    id: 8,
    icon: 'more',
    name: 'more',
  },
];

export const savingsData: categoriesType[] = [
  {
    id: 0,
    icon: 'travel',
    name: 'travel',
  },
  {
    id: 1,
    icon: 'newHome',
    name: 'new house',
  },
  {
    id: 2,
    icon: 'car',
    name: 'car',
  },
  {
    id: 3,
    icon: 'wedding',
    name: 'wedding',
  },
];
