import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ForgotPassword, Login } from '../screens';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
