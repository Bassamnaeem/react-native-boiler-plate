import React, {useMemo} from 'react';
import {MD3LightTheme} from 'react-native-paper';

import {Colors} from './src/common';

const useAppController = () => {
  const theme = useMemo(() => ({
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: Colors.Primary,
      secondary: Colors.Secondary,
      tertiary: Colors.Tertiary,
      surfaceVariant: Colors.Secondary,

      elevation: {
        ...MD3LightTheme.colors.elevation,

        level1: Colors.Primary,
      },
    },
  }));

  return {theme};
};

export default useAppController;
