import React from 'react';
import PropTypes from 'prop-types';
import styles from './headerSkydropx.module.scss';
import Logo from '../../img/skydropx_logo.svg';
import { Link } from 'react-router-dom';
const HeaderSkydropx = ({ route }) => {
  return (
    <Link to={route} className={styles['custom-header']}>
      <label>Shipmentdropx</label>
      <span>
        <hr />
      </span>
    </Link>
  );
};

HeaderSkydropx.propTypes = {
  route: PropTypes.string
};
HeaderSkydropx.defaultProps = {
  route: '/'
};

export default HeaderSkydropx;
