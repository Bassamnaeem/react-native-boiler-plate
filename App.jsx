import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import 'intl-pluralrules';
import AppNavigator from './src/navigation/AppNavigator';
import useAppController from './AppController';

const App = () => {
  const {theme} = useAppController();

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
