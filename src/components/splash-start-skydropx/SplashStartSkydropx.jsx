/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../img/skydropx_logo.svg';
import style from './splashStartSkydropx.module.scss';
import ButtonSkydropx from '../button-skydropx/ButtonSkydropx';
const SplashStartSkydropx = ({ history }) => {
  return (
    <div className={style['splash-background']}>
      <img src={Logo} />
      <ButtonSkydropx route="/home" label="Go" />
      <h3 className={style['splash-text-h3']}>Make a Shipment.</h3>
    </div>
  );
};

SplashStartSkydropx.propTypes = {
  history: PropTypes.object
};

export default SplashStartSkydropx;
