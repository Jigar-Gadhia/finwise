import React from 'react';
import Analysis from '../screens/analysis/Analysis';
import Categories from '../screens/categories/Categories';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import Transactions from '../screens/transactions/Transactions';
import {screenNames} from './screenNames';
import {IconName} from './transactionData';

interface BottomTabItem {
  name: string;
  component: React.FunctionComponent<any>;
  icon: IconName;
}

export const bottomNavigationData: BottomTabItem[] = [
  {
    name: screenNames.Home,
    icon: 'home',
    component: Home,
  },
  {
    name: screenNames.Analysis,
    icon: 'analysis',
    component: Analysis,
  },
  {
    name: screenNames.Transactions,
    icon: 'transactions',
    component: Transactions,
  },
  {
    name: screenNames.Categories,
    icon: 'categories',
    component: Categories,
  },
  {
    name: screenNames.Profile,
    icon: 'profile',
    component: Profile,
  },
];
