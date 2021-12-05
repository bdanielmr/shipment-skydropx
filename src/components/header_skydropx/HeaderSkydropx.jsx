import React from 'react';
import PropTypes from 'prop-types';
import styles from './headerSkydropx.module.scss';
import Logo from '../../img/skydropx_logo.svg';
const HeaderSkydropx = (props) => {
  return (
    <div className={styles['custom-header']}>
      <img src={Logo} />
      <span>
        <hr />
      </span>
    </div>
  );
};

HeaderSkydropx.propTypes = {};

export default HeaderSkydropx;
