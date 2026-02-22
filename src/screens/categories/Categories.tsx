import React from 'react';
import {screenNames} from '../../utils/screenNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './CategoriesScreen';
import NotificationsScreen from '../commonScreen.tsx/NotificationsScreen';
import CategoryTransactionScreen from './CategoryTransactionScreen';
import AddExpensesScreen from './AddExpensesScreen';
import SavingScreen from './SavingScreen';
import AddSavingsScreen from './AddSavingsScreen';

const Categories = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screenNames.CategoriesScreen}
        component={CategoriesScreen}
      />
      <Stack.Screen
        name={screenNames.CategoryTransactionScreen}
        component={CategoryTransactionScreen}
      />
      <Stack.Screen
        name={screenNames.AddExpensesScreen}
        component={AddExpensesScreen}
      />
      <Stack.Screen name={screenNames.SavingScreen} component={SavingScreen} />
      <Stack.Screen
        name={screenNames.AddSavingsScreen}
        component={AddSavingsScreen}
      />
      <Stack.Screen
        name={screenNames.NotificationsScreen}
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};

export default Categories;
