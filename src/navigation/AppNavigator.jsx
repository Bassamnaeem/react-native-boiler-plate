import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Auth" component={AuthNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
