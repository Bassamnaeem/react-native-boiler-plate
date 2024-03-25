import React from 'react';
import { Button as RNButton } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Fonts } from '../../common';

const Button = ({ title }) => {
  return (
    <RNButton
      mode="contained"
      style={{ borderRadius: 5 }}
      contentStyle={{ height: 50 }}
      labelStyle={{ fontFamily: Fonts.SemiBold_600 }}>
      {title}
    </RNButton>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
