import React from 'react';
import PropTypes from 'prop-types';
import styles from './inputSkydropx.module.scss';
const InputSkydropx = ({ value, error, handleChange, placeholder }) => {
  return (
    <div className={styles['custom-input']}>
      <label className="form-label">{placeholder}</label>
      <input
        className="form-input"
        type="text"
        name={value.name}
        placeholder={`Enter your ${placeholder}`}
        value={value.name}
        onChange={handleChange}
      />
      {error.value && <p>{error.value}</p>}
    </div>
  );
};

InputSkydropx.propTypes = {
  value: PropTypes.object,
  error: PropTypes.object,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string
};
InputSkydropx.defaultProps = {
  value: {
    name: ''
  },
  error: {
    value: ''
  },
  handleChange: () => {},
  placeholder: 'input'
};
export default InputSkydropx;
