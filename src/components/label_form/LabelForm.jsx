/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './labelForm.module.scss';
const LabelForm = (props) => {
  return <div className={styles['custom-form']}>{props.children}</div>;
};

LabelForm.propTypes = {};

export default LabelForm;
