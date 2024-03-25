import React from 'react';
import {View} from 'react-native';
import i18n from 'i18next';

import {Button} from '../../../components';

const Login = () => {
  return (
    <View>
      <Button title={i18n.t('Login')} />
    </View>
  );
};

export default Login;
