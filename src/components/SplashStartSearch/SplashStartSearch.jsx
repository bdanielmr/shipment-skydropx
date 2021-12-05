/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import style from './splashStartSearch.module.scss';
const SplashStartSearch = ({ history }) => {
  return (
    <div className={style['splash-background']}>
      <h2 className={style['splash-text-h2']}>Bienvenidos.</h2>
      <h3 className={style['splash-text-h3']}>
        Millones de películas, programas de televisión y personas por descubrir.
      </h3>
    </div>
  );
};

SplashStartSearch.propTypes = {
  history: PropTypes.object
};

export default SplashStartSearch;
